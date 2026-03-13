from __future__ import absolute_import
import argparse
import os
import sys
import re
import h5py
import glob
import multiprocessing

import numpy as np
from tqdm import tqdm


def get_base_quality(reference,sam):
    """
    This function parse base qualities from sam file.

    Args:
        reference (str): The path to reference transcripts, in fasta format.
        sam (str): Alignment results from minimap2.

    Returns:
        dict: A dictionary containing base quality and sequence info.
    """
    base_quality_dict=dict()
    
    reference_dict=dict()
    with open(reference) as f:
        for line in f:
            line=line.rstrip()
            if ">" in line:
                
                contig=line.split()[0][1:]
                reference_dict[contig]=""
            else:
                sequence=line
                reference_dict[contig]=reference_dict[contig]+sequence

    with open(sam) as f:
        for line in f:
    
            if line[0] != "@":
                items =line.split("\t")
                id=items[0]
                flag=items[1]
                chr =items[2]
                start=int(items[3])
                CIGAR=items[5]
                seq=items[9]
                base_quality_string=items[10]
                base_quality_list=[ord(char)-33 for char in base_quality_string]   
                #Convert ascii string to int list. 
                mapped_base_quality_list=[]
                
                if  chr != "*":
                    
                    temp=""
                    index=0
                    new_seq=""
                    for char in CIGAR:
                        temp+=char
                        if char=="H":
                            num=int(temp[:-1])
                            temp=""
                        elif char=="S":
                            num=int(temp[:-1])
                            index+=num
                            temp=""
                        elif char=="M":
                            num=int(temp[:-1])
                            new_seq+=seq[index:index+num]
                            mapped_base_quality_list.extend(base_quality_list[index:index+num])
                            index+=num
                            temp=""
                        elif char=="I":
                            num=int(temp[:-1])
                            index+=num
                            temp=""
                        elif char=="D":
                            num=int(temp[:-1])
                            new_seq+="N"*num
                            mapped_base_quality_list.extend([0]*num)  
                            #padding 0 for deletions, as placeholder
                            temp=""

                    
                    if flag=="0":
                    #DRS reads only map to sense strand.
                        base_quality_dict[id] = [chr,start,reference_dict[chr][start-1:start+len(new_seq)-1],"|".join([str(x) for x in mapped_base_quality_list])]
                    

    return base_quality_dict


def get_events(fast5_path, basecall_group, basecall_subgroup,reverse = False):
	"""
    This function extract events from fast5 file.

    Args:
        fast5_path (str): The path to fast5 file.
        basecall_group (str): The default group from tombo output is "RawGenomeCorrected_000".
    	basecall_subgroup (str): The default basecall subgroup is "BaseCalled_template".
    Returns:
        dict: A dictionary containing base quality and sequence info.  to be done.
    """

	try:
		fast5_data = h5py.File(fast5_path, 'r')
	except IOError:
		raise IOError('Error opening file. Likely a corrupted file.')

	# Get raw data
	try:
		raw_data = list(fast5_data['/Raw/Reads/'].values())[0]
		
		raw_data = raw_data['Signal'][()]

		# ~ .value
	except Exception as e:
		
		raise RuntimeError(
			'Raw data is not stored in Raw/Reads/Read_[read#] so ' +
			'new segments cannot be identified.')

	# Read corrected data
	try:

		corr_data = fast5_data['/Analyses/'+basecall_group +'/' + basecall_subgroup + '/Events']
		corr_attrs = dict(list(corr_data.attrs.items()))
		corr_data = corr_data[()]

	except Exception as e:
        
		raise RuntimeError(('Corrected data not found.'))

	# Reading extra information
	corr_start_rel_to_raw = corr_attrs['read_start_rel_to_raw']  #
	if len(raw_data) > 99999999:
		raise ValueError(fast5_fn + ": max signal length exceed 99999999")
	if any(len(vals) <= 1 for vals in (corr_data, raw_data)):
		raise NotImplementedError(('One or no segments or signal present in read.'))
	event_starts = corr_data['start'] + corr_start_rel_to_raw
	event_lengths = corr_data['length']
	event_bases = corr_data['base']
	fast5_data.close()

	return raw_data, event_bases, event_starts, event_lengths

    
# ====== 追加 import（放到文件顶部 import 区）======
from io import StringIO


# ====== 新增：全局缓存（放到任意位置，函数外）======
BASE_QUALITY_DICT = None
READ_ID_DICT = None


def get_signal(fast5_path):
    """
    不改变输出格式，仅减少中间内存：
    - 不再 signal.tolist()
    - 不再构建 signal_list 大列表，而用 StringIO 流式拼接
    """
    try:
        signal, sequence, signal_start, signal_length = get_events(
            fast5_path, args.basecall_group, args.basecall_subgroup
        )
    except Exception:
        return False, (None, None)

    # 保持你原逻辑：反转信号
    signal = signal[::-1]  # numpy view，不复制大数组

    sequence = "".join([x.decode() for x in sequence])

    # 用 StringIO 减少中间 list 的内存占用
    buf = StringIO()
    for i in range(len(signal_length)):
        if i > 0:
            buf.write("|")
        s = int(signal_start[i])
        l = int(signal_length[i])
        seg = signal[s:s + l]
        buf.write("*".join(map(str, seg)))

    pid = os.getpid()
    line = "%s\t%s\t%s\n" % (
        str(fast5_path).split("/")[-1].split(".")[0],
        sequence,
        buf.getvalue()
    )
    return pid, line

# ====== 新增：子进程写文件（避免把超大字符串通过 pipe 传回主进程）======
def _worker_write_one(fast5_path):
    """
    子进程里完成：
    get_signal -> 解析 -> id 映射 -> base_quality 拼接 -> 写入 args.output_pid
    主进程只收到一个很小的整数(0/1)，极大降低 BrokenPipe 风险
    """
    try:
        pid, line = get_signal(fast5_path)

        if not isinstance(line, str) or ("\t" not in line):
            return 0

        # get_signal 的 line: id \t sequence \t signal\n
        id_, sequence, signal = line.split("\t", 2)

        # 保持你原逻辑：run id 映射
        if "run" in id_:
            id_ = READ_ID_DICT.get(id_, id_)

        bq = BASE_QUALITY_DICT.get(id_)
        if bq is None:
            return 0

        out_path = args.output + "_%s" % pid
        with open(out_path, "a") as out:
            # 保持你原输出格式（不加多余 tab / 不改字段顺序）
            out.write("%s\t%s\t%s\t%s\t%s\t%s\t%s" % (
                id_, bq[0], bq[1], bq[2], bq[3], sequence, signal
            ))
        return 1
    except Exception:
        return 0

def extract_signal(file_list, read_id_dict):

    global BASE_QUALITY_DICT, READ_ID_DICT
    BASE_QUALITY_DICT = get_base_quality(args.reference, args.sam)
    READ_ID_DICT = read_id_dict

    nproc = int(args.process)

    if nproc > 1:
        pool = multiprocessing.Pool(processes=nproc, maxtasksperchild=400)

        pbar = tqdm(total=len(file_list), position=0, leave=True)
        for ok in pool.imap_unordered(_worker_write_one, file_list, chunksize=10):
            pbar.update(1)

        pool.close()
        pool.join()

    else:
        out = open(args.output, "w")
        pbar = tqdm(total=len(file_list), position=0, leave=True)
        for file in file_list:
            _, line = get_signal(file)
            if isinstance(line, str) and ("\t" in line):
                try:
                    id_, sequence, signal = line.split("\t", 2)
                    bq = BASE_QUALITY_DICT.get(id_)
                    if bq is None:
                        pbar.update(1)
                        continue
                    out.write("%s\t%s\t%s\t%s\t%s\t%s\t%s" % (
                        id_, bq[0], bq[1], bq[2], bq[3], sequence, signal
                    ))
                except Exception:
                    pass
            pbar.update(1)
        out.close()

"""
	for num in nums:

		try:

			id,sequence,signal=num.split("\t")

			if "run" in id:

				id=read_id_dict[id]

			line="%s\t%s\t%s\t%s\t%s\t%s\t%s" %(id,base_quality_dict[id][0],base_quality_dict[id][1],
                                                base_quality_dict[id][2],base_quality_dict[id][3],sequence,signal)

			output.writelines(line)
		except Exception as e:
			#print(e)
			pass


	output.close()
"""

def get_file_list(fast5_dir):
    cmd="find %s -name '*.fast5' >%s.txt" %(fast5_dir,fast5_dir)
    os.system(cmd)

def get_read_id_dict(file):
    read_id_dict={}
    with open(file) as f:
        for line in f:
            if "filename" in line:
                continue
            run_id=line.split(".")[0]
            read_id=line.split("\t")[1]
            read_id_dict[run_id]=read_id
    return read_id_dict
    
def main():
    x = "/mnt/sunxh/sunxh/benchmark/curlcake/m5c_guppy/sequencing_summary.txt"
    print(f"{x}")
    read_id_dict=get_read_id_dict(f"{x}")

    
    fast5_files= glob.glob(os.path.join(args.fast5, '**/*.fast5'), recursive=True)

    extract_signal(fast5_files,read_id_dict)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Extract current signal from fast5 files.')
    
    parser.add_argument('-o', '--output', required = True, help="Output file.")
    parser.add_argument('--basecall_group',default = "RawGenomeCorrected_000", help='The attribute group to extract the training data from. e.g. RawGenomeCorrected_000.')
    parser.add_argument('--basecall_subgroup', default='BaseCalled_template', help='Basecall subgroup Nanoraw resquiggle into. Default is BaseCalled_template.')
    parser.add_argument('-p','--process', default=10,help='Process.')
    parser.add_argument('--clip', default=10,help='The number of bases to be discarded at both ends.')
    parser.add_argument('--fast5',required = True,help='The file containing fast5 path.')
    parser.add_argument('-r','--reference',required = True,help='Reference transcripts fasta file.')
    parser.add_argument('--sam',required = True,help='Sam file.')
    args = parser.parse_args()
    
    main()