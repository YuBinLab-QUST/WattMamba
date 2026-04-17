[
    {
        "aggregation": "segment", 
        "analysis_id": "3afc56f3-692e-4ce5-91e7-c144c3b990b1", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 84
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 34, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 27, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 91, 
                "mean": 7.729942798614502, 
                "sum": 703.4248046875
            }, 
            "read_len_events_sum_temp": 354788, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 91, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 91, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 15, 
                    "length": 1000.0
                }, 
                {
                    "count": 22, 
                    "length": 2000.0
                }, 
                {
                    "count": 18, 
                    "length": 3000.0
                }, 
                {
                    "count": 8, 
                    "length": 4000.0
                }, 
                {
                    "count": 16, 
                    "length": 5000.0
                }, 
                {
                    "count": 4, 
                    "length": 6000.0
                }, 
                {
                    "count": 3, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 91, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 91, 
                "mean": 105.10832214355469, 
                "sum": 9564.857421875
            }, 
            "strand_sd_pa": {
                "count": 91, 
                "mean": 13.844136238098145, 
                "sum": 1259.81640625
            }
        }, 
        "channel_count": 83, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "nanodev_20190712_fak86943_mn22938_sequencing_run_ivtm6agblock_106_rna002_linux_75221", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtm6agblock_106_rna002_linux"
        }, 
        "latest_run_time": 30374.654296875, 
        "levels_sums": {
            "count": 91, 
            "mean": null, 
            "open_pore_level_sum": null
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "cuda:0", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "20", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 91, 
        "reads_per_channel_dist": [
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 2
            }, 
            {
                "channel": 17, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 67, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 1
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 249, 
                "count": 1
            }, 
            {
                "channel": 256, 
                "count": 1
            }, 
            {
                "channel": 258, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 273, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 2
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 2
            }, 
            {
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 325, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 344, 
                "count": 1
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 2
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 2
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 489, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 2
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }, 
            {
                "channel": 512, 
                "count": 2
            }
        ], 
        "run_id": "c0cdb6f6cd5b7122e6bbcd17889ff6295a282903", 
        "segment_duration": 60, 
        "segment_number": 9, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "218130751", 
            "asic_id_eeprom": "2120461", 
            "asic_temp": "24.430410", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN22938", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T22:08:36Z", 
            "flow_cell_id": "FAK86943", 
            "heatsink_temp": "33.007812", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "3d95739b-7541-4066-98ad-701eee440c85", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "4ebaccf8-0598-418d-a5f4-17c78e1834f2", 
            "protocols_version": "3.1.0.17", 
            "run_id": "c0cdb6f6cd5b7122e6bbcd17889ff6295a282903", 
            "sample_id": "IVTm6Agblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:49:25Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "3afc56f3-692e-4ce5-91e7-c144c3b990b1", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 23, 
                "pass": 126
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 15, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 26, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 61, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 31, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 149, 
                "mean": 7.634881973266602, 
                "sum": 1137.597412109375
            }, 
            "read_len_events_sum_temp": 620387, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 149, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 149, 
            "seq_len_events_dist_temp": [
                {
                    "count": 28, 
                    "length": 1000.0
                }, 
                {
                    "count": 27, 
                    "length": 2000.0
                }, 
                {
                    "count": 20, 
                    "length": 3000.0
                }, 
                {
                    "count": 23, 
                    "length": 4000.0
                }, 
                {
                    "count": 21, 
                    "length": 5000.0
                }, 
                {
                    "count": 12, 
                    "length": 6000.0
                }, 
                {
                    "count": 9, 
                    "length": 7000.0
                }, 
                {
                    "count": 6, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 149, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 149, 
                "mean": 106.59355163574219, 
                "sum": 15882.439453125
            }, 
            "strand_sd_pa": {
                "count": 149, 
                "mean": 13.426819801330566, 
                "sum": 2000.59619140625
            }
        }, 
        "channel_count": 128, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "nanodev_20190712_fak86943_mn22938_sequencing_run_ivtm6agblock_106_rna002_linux_75221", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtm6agblock_106_rna002_linux"
        }, 
        "latest_run_time": 74694.515625, 
        "levels_sums": {
            "count": 149, 
            "mean": null, 
            "open_pore_level_sum": null
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "cuda:0", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "20", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 149, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 10, 
                "count": 2
            }, 
            {
                "channel": 13, 
                "count": 1
            }, 
            {
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 1
            }, 
            {
                "channel": 18, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 43, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 2
            }, 
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 66, 
                "count": 2
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 1
            }, 
            {
                "channel": 79, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 91, 
                "count": 1
            }, 
            {
                "channel": 96, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 154, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 156, 
                "count": 3
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 2
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 2
            }, 
            {
                "channel": 175, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 2
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 3
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 3
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 233, 
                "count": 1
            }, 
            {
                "channel": 236, 
                "count": 1
            }, 
            {
                "channel": 238, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 279, 
                "count": 1
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 283, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 2
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 289, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 1
            }, 
            {
                "channel": 314, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 3
            }, 
            {
                "channel": 325, 
                "count": 1
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 331, 
                "count": 1
            }, 
            {
                "channel": 341, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 344, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 394, 
                "count": 1
            }, 
            {
                "channel": 396, 
                "count": 3
            }, 
            {
                "channel": 401, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 475, 
                "count": 2
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 2
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }
        ], 
        "run_id": "c0cdb6f6cd5b7122e6bbcd17889ff6295a282903", 
        "segment_duration": 60, 
        "segment_number": 21, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "218130751", 
            "asic_id_eeprom": "2120461", 
            "asic_temp": "24.430410", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN22938", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T22:08:36Z", 
            "flow_cell_id": "FAK86943", 
            "heatsink_temp": "33.007812", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "0fd980ac-becc-4767-80f8-471e5103c9f2", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "4ebaccf8-0598-418d-a5f4-17c78e1834f2", 
            "protocols_version": "3.1.0.17", 
            "run_id": "c0cdb6f6cd5b7122e6bbcd17889ff6295a282903", 
            "sample_id": "IVTm6Agblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:49:25Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "3afc56f3-692e-4ce5-91e7-c144c3b990b1", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 30, 
                "pass": 210
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 20, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 45, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 95, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 58, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 11, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 240, 
                "mean": 7.670928478240967, 
                "sum": 1841.0228271484375
            }, 
            "read_len_events_sum_temp": 975175, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 240, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 240, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 43, 
                    "length": 1000.0
                }, 
                {
                    "count": 49, 
                    "length": 2000.0
                }, 
                {
                    "count": 38, 
                    "length": 3000.0
                }, 
                {
                    "count": 31, 
                    "length": 4000.0
                }, 
                {
                    "count": 37, 
                    "length": 5000.0
                }, 
                {
                    "count": 16, 
                    "length": 6000.0
                }, 
                {
                    "count": 12, 
                    "length": 7000.0
                }, 
                {
                    "count": 7, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 240, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 240, 
                "mean": 106.03041076660156, 
                "sum": 25447.298828125
            }, 
            "strand_sd_pa": {
                "count": 240, 
                "mean": 13.585037231445312, 
                "sum": 3260.408935546875
            }
        }, 
        "channel_count": 187, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "nanodev_20190712_fak86943_mn22938_sequencing_run_ivtm6agblock_106_rna002_linux_75221", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtm6agblock_106_rna002_linux"
        }, 
        "latest_run_time": 74694.515625, 
        "levels_sums": {
            "count": 240, 
            "mean": null, 
            "open_pore_level_sum": null
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "cuda:0", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "20", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 240, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 2
            }, 
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 10, 
                "count": 2
            }, 
            {
                "channel": 13, 
                "count": 1
            }, 
            {
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 4
            }, 
            {
                "channel": 16, 
                "count": 1
            }, 
            {
                "channel": 17, 
                "count": 1
            }, 
            {
                "channel": 18, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 43, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 2
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 66, 
                "count": 2
            }, 
            {
                "channel": 67, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 1
            }, 
            {
                "channel": 79, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 2
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 91, 
                "count": 1
            }, 
            {
                "channel": 96, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 2
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 2
            }, 
            {
                "channel": 123, 
                "count": 2
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 154, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 156, 
                "count": 3
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 2
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 3
            }, 
            {
                "channel": 175, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 2
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 3
            }, 
            {
                "channel": 211, 
                "count": 2
            }, 
            {
                "channel": 215, 
                "count": 3
            }, 
            {
                "channel": 217, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 2
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 233, 
                "count": 1
            }, 
            {
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 236, 
                "count": 1
            }, 
            {
                "channel": 238, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 249, 
                "count": 1
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 256, 
                "count": 1
            }, 
            {
                "channel": 258, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 273, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 2
            }, 
            {
                "channel": 279, 
                "count": 1
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 283, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 4
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 289, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 2
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 2
            }, 
            {
                "channel": 309, 
                "count": 3
            }, 
            {
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 1
            }, 
            {
                "channel": 314, 
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 3
            }, 
            {
                "channel": 325, 
                "count": 2
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 331, 
                "count": 1
            }, 
            {
                "channel": 341, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 2
            }, 
            {
                "channel": 344, 
                "count": 2
            }, 
            {
                "channel": 348, 
                "count": 1
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 2
            }, 
            {
                "channel": 356, 
                "count": 2
            }, 
            {
                "channel": 360, 
                "count": 2
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 2
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 394, 
                "count": 1
            }, 
            {
                "channel": 396, 
                "count": 3
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 401, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 2
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 1
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 2
            }, 
            {
                "channel": 475, 
                "count": 2
            }, 
            {
                "channel": 478, 
                "count": 3
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 489, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 3
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 2
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }, 
            {
                "channel": 512, 
                "count": 2
            }
        ], 
        "run_id": "c0cdb6f6cd5b7122e6bbcd17889ff6295a282903", 
        "segment_duration": 1260, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "218130751", 
            "asic_id_eeprom": "2120461", 
            "asic_temp": "24.430410", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN22938", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T22:08:36Z", 
            "flow_cell_id": "FAK86943", 
            "heatsink_temp": "33.007812", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "efc93e43-17bd-4385-a9b6-019dbf76907c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "4ebaccf8-0598-418d-a5f4-17c78e1834f2", 
            "protocols_version": "3.1.0.17", 
            "run_id": "c0cdb6f6cd5b7122e6bbcd17889ff6295a282903", 
            "sample_id": "IVTm6Agblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:49:25Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }
]