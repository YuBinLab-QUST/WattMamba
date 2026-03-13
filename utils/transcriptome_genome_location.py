import argparse
import re

def parse_gtf(gtf_file):
    transcript_to_gene = {}
    exon_dict = {}
    chr_dict = {}
    strand_dict = {}

    gene_pattern = re.compile(r'gene_id "([^"]+)"')
    transcript_pattern = re.compile(r'transcript_id "([^"]+)"')
    version_pattern = re.compile(r'transcript_version "([^"]+)"')

    with open(gtf_file, 'r') as gtf:
        for line in gtf:
            if not line or line.startswith('#'):
                continue
            fields = line.rstrip('\n').split('\t')
            if len(fields) < 9:
                continue
            feature = fields[2]
            chrom = fields[0]
            start = int(fields[3])
            end   = int(fields[4])
            strand = fields[6]
            attributes = fields[8]

            gid_m = gene_pattern.search(attributes)
            tid_m = transcript_pattern.search(attributes)
            ver_m = version_pattern.search(attributes)
            if not (gid_m and tid_m):
                continue

            gene_id = gid_m.group(1)
            tid_base = tid_m.group(1)
            tver = ver_m.group(1) if ver_m else None
            tid_with_ver = f"{tid_base}.{tver}" if tver else tid_base
            tid_no_ver = tid_base

            for _tid in (tid_with_ver, tid_no_ver):
                if _tid not in transcript_to_gene:
                    transcript_to_gene[_tid] = gene_id

            if feature == "exon":
                for _tid in (tid_with_ver, tid_no_ver):
                    exon_dict.setdefault(_tid, []).append((start, end))
                    chr_dict[_tid] = chrom
                    strand_dict[_tid] = strand

    for _tid, exons in exon_dict.items():
        exons.sort(key=lambda x: x[0])
        exon_dict[_tid] = exons
    return transcript_to_gene, exon_dict, chr_dict, strand_dict


def map_txpos_to_genome(txpos, exons, strand):

    if txpos <= 0:
        return None
    if strand == '+':
        acc = 0
        for s, e in exons:
            elen = e - s + 1
            if txpos > acc + elen:
                acc += elen
            else:
                offset = txpos - acc - 1  # 0-based offset in this exon
                return s + offset
        return None
    else:  # '-'
        acc = 0
        for s, e in reversed(exons):
            elen = e - s + 1
            if txpos > acc + elen:
                acc += elen
            else:
                offset = txpos - acc - 1  # 0-based offset
                return e - offset
        return None


def convert_transcriptome_loc_to_genome_loc(transcript_location_file, genome_location_file,
                                            exon_dict, chr_dict, strand_dict, transcript_to_gene):
    with open(genome_location_file, "w") as out, open(transcript_location_file) as f:
        count = 0
        for line in f:
            if not line.strip():
                continue
            count += 1
            if count % 10_000_00 == 0:
                print(count)

            items = line.rstrip('\n').split('\t')
            if len(items) < 6:
                continue

            tid_raw = items[0].strip()
            tid_nover = tid_raw.split('.')[0]
            txpos = int(items[1])
            motif = items[2]
            mod = items[4]
            probability = items[5]

            tid_key = tid_raw if tid_raw in exon_dict else (tid_nover if tid_nover in exon_dict else None)
            if tid_key is None:
                # print(f"Warning: transcript_id {tid_raw} not found in exon_dict")
                continue

            gene_id = transcript_to_gene.get(tid_key) or transcript_to_gene.get(tid_nover)
            if gene_id is None:
                continue

            exons = exon_dict[tid_key]
            strand = strand_dict[tid_key]
            chrom = chr_dict[tid_key]

            gpos = map_txpos_to_genome(txpos, exons, strand)
            if gpos is None:
                continue

            out.write(f"{gene_id}\t{txpos}\t{chrom}\t{gpos}\t{motif}\t{mod}\t{probability}\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert transcriptome location to genome location.')
    parser.add_argument('-i', '--input', required=True, help="Input file, transcriptome location.")
    parser.add_argument('-o', '--output', required=True, help="Output file, genome location.")
    parser.add_argument('-g', '--gff', required=True, help="Annotation file (GTF).")
    args = parser.parse_args()

    transcript_to_gene_mapping, exon_dict, chr_dict, strand_dict = parse_gtf(args.gff)
    convert_transcriptome_loc_to_genome_loc(
        args.input, args.output, exon_dict, chr_dict, strand_dict, transcript_to_gene_mapping
    )
