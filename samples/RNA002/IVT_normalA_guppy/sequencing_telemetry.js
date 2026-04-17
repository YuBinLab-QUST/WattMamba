[
    {
        "aggregation": "segment", 
        "analysis_id": "f0f3d5c0-d400-4a3e-b0cd-a3e59adf9aa7", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 46
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 48, 
                "mean": 9.733965873718262, 
                "sum": 467.2303771972656
            }, 
            "read_len_events_sum_temp": 156908, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 48, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 48, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 13, 
                    "length": 1000.0
                }, 
                {
                    "count": 12, 
                    "length": 2000.0
                }, 
                {
                    "count": 7, 
                    "length": 3000.0
                }, 
                {
                    "count": 7, 
                    "length": 4000.0
                }, 
                {
                    "count": 5, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 48, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 48, 
                "mean": 99.53028106689453, 
                "sum": 4777.45361328125
            }, 
            "strand_sd_pa": {
                "count": 48, 
                "mean": 13.084385871887207, 
                "sum": 628.050537109375
            }
        }, 
        "channel_count": 45, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "nanodev_20190712_fak87028_mn23366_sequencing_run_ivtcombinedaunormalgblock_106_rna002_linux_33144", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtcombinedaunormalgblock_106_rna002_linux"
        }, 
        "latest_run_time": 10624.7041015625, 
        "levels_sums": {
            "count": 48, 
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
        "read_count": 48, 
        "reads_per_channel_dist": [
            {
                "channel": 4, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 140, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 1
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 187, 
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
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 2
            }, 
            {
                "channel": 202, 
                "count": 2
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 1
            }, 
            {
                "channel": 236, 
                "count": 1
            }, 
            {
                "channel": 249, 
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
                "channel": 280, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 376, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 393, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 406, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 500, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 2
            }
        ], 
        "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
        "segment_duration": 60, 
        "segment_number": 3, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "415942389", 
            "asic_id_eeprom": "5334884", 
            "asic_temp": "24.102663", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T21:57:01Z", 
            "flow_cell_id": "FAK87028", 
            "heatsink_temp": "33.015625", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "62c01e46-6c88-4dd5-9f76-6fc7bfef11fb", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "5c6bfdaf-5fdd-4e73-9af5-8262edf69519", 
            "protocols_version": "3.1.0.17", 
            "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
            "sample_id": "IVTcombinedAUnormalGblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:48:51Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "f0f3d5c0-d400-4a3e-b0cd-a3e59adf9aa7", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 75
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 77, 
                "mean": 10.004342079162598, 
                "sum": 770.3343505859375
            }, 
            "read_len_events_sum_temp": 224398, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 77, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 77, 
            "seq_len_events_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }, 
                {
                    "count": 20, 
                    "length": 1000.0
                }, 
                {
                    "count": 28, 
                    "length": 2000.0
                }, 
                {
                    "count": 11, 
                    "length": 3000.0
                }, 
                {
                    "count": 7, 
                    "length": 4000.0
                }, 
                {
                    "count": 4, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 77, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 77, 
                "mean": 100.18026733398438, 
                "sum": 7713.88037109375
            }, 
            "strand_sd_pa": {
                "count": 77, 
                "mean": 13.576530456542969, 
                "sum": 1045.392822265625
            }
        }, 
        "channel_count": 69, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "nanodev_20190712_fak87028_mn23366_sequencing_run_ivtcombinedaunormalgblock_106_rna002_linux_33144", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtcombinedaunormalgblock_106_rna002_linux"
        }, 
        "latest_run_time": 14224.78515625, 
        "levels_sums": {
            "count": 77, 
            "mean": 247.46755981445312, 
            "open_pore_level_sum": 19055.001953125
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
        "read_count": 77, 
        "reads_per_channel_dist": [
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 59, 
                "count": 1
            }, 
            {
                "channel": 70, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 81, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 2
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 2
            }, 
            {
                "channel": 165, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 180, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 196, 
                "count": 2
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 208, 
                "count": 2
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 1
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
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 255, 
                "count": 2
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
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 312, 
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
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 358, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 367, 
                "count": 2
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 417, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 2
            }, 
            {
                "channel": 469, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 498, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 1
            }
        ], 
        "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
        "segment_duration": 60, 
        "segment_number": 4, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "415942389", 
            "asic_id_eeprom": "5334884", 
            "asic_temp": "24.102663", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T21:57:01Z", 
            "flow_cell_id": "FAK87028", 
            "heatsink_temp": "33.015625", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "2b8cb2a3-efb7-4b1b-91c6-c3095f67f1c6", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "5c6bfdaf-5fdd-4e73-9af5-8262edf69519", 
            "protocols_version": "3.1.0.17", 
            "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
            "sample_id": "IVTcombinedAUnormalGblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:48:51Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "f0f3d5c0-d400-4a3e-b0cd-a3e59adf9aa7", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4, 
                "pass": 111
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 17, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 12, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 15, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 115, 
                "mean": 9.669660568237305, 
                "sum": 1112.010986328125
            }, 
            "read_len_events_sum_temp": 369394, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 115, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 115, 
            "seq_len_events_dist_temp": [
                {
                    "count": 5, 
                    "length": 0.0
                }, 
                {
                    "count": 32, 
                    "length": 1000.0
                }, 
                {
                    "count": 30, 
                    "length": 2000.0
                }, 
                {
                    "count": 20, 
                    "length": 3000.0
                }, 
                {
                    "count": 8, 
                    "length": 4000.0
                }, 
                {
                    "count": 8, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 6, 
                    "length": 7000.0
                }, 
                {
                    "count": 3, 
                    "length": 10000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 115, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 115, 
                "mean": 101.12032318115234, 
                "sum": 11628.8369140625
            }, 
            "strand_sd_pa": {
                "count": 115, 
                "mean": 13.16650390625, 
                "sum": 1514.14794921875
            }
        }, 
        "channel_count": 97, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "nanodev_20190712_fak87028_mn23366_sequencing_run_ivtcombinedaunormalgblock_106_rna002_linux_33144", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtcombinedaunormalgblock_106_rna002_linux"
        }, 
        "latest_run_time": 41651.140625, 
        "levels_sums": {
            "count": 115, 
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
        "read_count": 115, 
        "reads_per_channel_dist": [
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 35, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 1
            }, 
            {
                "channel": 131, 
                "count": 1
            }, 
            {
                "channel": 132, 
                "count": 2
            }, 
            {
                "channel": 134, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 1
            }, 
            {
                "channel": 140, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 2
            }, 
            {
                "channel": 149, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 2
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 187, 
                "count": 2
            }, 
            {
                "channel": 192, 
                "count": 2
            }, 
            {
                "channel": 195, 
                "count": 1
            }, 
            {
                "channel": 197, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 216, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 3
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 2
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 283, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
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
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 3
            }, 
            {
                "channel": 295, 
                "count": 1
            }, 
            {
                "channel": 304, 
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
                "channel": 317, 
                "count": 2
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 346, 
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
                "channel": 358, 
                "count": 1
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 379, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 1
            }, 
            {
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 1
            }, 
            {
                "channel": 410, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 426, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 1
            }, 
            {
                "channel": 440, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 2
            }, 
            {
                "channel": 485, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 487, 
                "count": 2
            }, 
            {
                "channel": 498, 
                "count": 1
            }, 
            {
                "channel": 501, 
                "count": 1
            }
        ], 
        "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
        "segment_duration": 60, 
        "segment_number": 12, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "415942389", 
            "asic_id_eeprom": "5334884", 
            "asic_temp": "24.102663", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T21:57:01Z", 
            "flow_cell_id": "FAK87028", 
            "heatsink_temp": "33.015625", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "0af8efbe-403b-40f8-94ed-4d401ccdf762", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "5c6bfdaf-5fdd-4e73-9af5-8262edf69519", 
            "protocols_version": "3.1.0.17", 
            "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
            "sample_id": "IVTcombinedAUnormalGblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:48:51Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "f0f3d5c0-d400-4a3e-b0cd-a3e59adf9aa7", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 8, 
                "pass": 232
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 11, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 27, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 38, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 21, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 32, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 31, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 12.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 240, 
                "mean": 9.78990364074707, 
                "sum": 2349.576904296875
            }, 
            "read_len_events_sum_temp": 750700, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 240, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 240, 
            "seq_len_events_dist_temp": [
                {
                    "count": 10, 
                    "length": 0.0
                }, 
                {
                    "count": 65, 
                    "length": 1000.0
                }, 
                {
                    "count": 70, 
                    "length": 2000.0
                }, 
                {
                    "count": 38, 
                    "length": 3000.0
                }, 
                {
                    "count": 22, 
                    "length": 4000.0
                }, 
                {
                    "count": 17, 
                    "length": 5000.0
                }, 
                {
                    "count": 5, 
                    "length": 6000.0
                }, 
                {
                    "count": 6, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 3, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
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
                "mean": 100.50071716308594, 
                "sum": 24120.171875
            }, 
            "strand_sd_pa": {
                "count": 240, 
                "mean": 13.281624794006348, 
                "sum": 3187.58984375
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
            "filename": "nanodev_20190712_fak87028_mn23366_sequencing_run_ivtcombinedaunormalgblock_106_rna002_linux_33144", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002", 
            "user_filename_input": "ivtcombinedaunormalgblock_106_rna002_linux"
        }, 
        "latest_run_time": 41651.140625, 
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
                "channel": 4, 
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
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 26, 
                "count": 2
            }, 
            {
                "channel": 35, 
                "count": 1
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 2
            }, 
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 59, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 65, 
                "count": 2
            }, 
            {
                "channel": 70, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 2
            }, 
            {
                "channel": 81, 
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 2
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 2
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 1
            }, 
            {
                "channel": 131, 
                "count": 1
            }, 
            {
                "channel": 132, 
                "count": 2
            }, 
            {
                "channel": 134, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 1
            }, 
            {
                "channel": 140, 
                "count": 2
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 2
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 149, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 2
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 1
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 165, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 3
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 180, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 187, 
                "count": 3
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
                "count": 3
            }, 
            {
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 195, 
                "count": 1
            }, 
            {
                "channel": 196, 
                "count": 2
            }, 
            {
                "channel": 197, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 2
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 202, 
                "count": 2
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 208, 
                "count": 2
            }, 
            {
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 2
            }, 
            {
                "channel": 216, 
                "count": 3
            }, 
            {
                "channel": 217, 
                "count": 1
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 3
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 3
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
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 236, 
                "count": 1
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 249, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 255, 
                "count": 2
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
                "channel": 260, 
                "count": 2
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 3
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 280, 
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
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 2
            }, 
            {
                "channel": 289, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 2
            }, 
            {
                "channel": 294, 
                "count": 3
            }, 
            {
                "channel": 295, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 2
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
                "channel": 317, 
                "count": 2
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
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 346, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 358, 
                "count": 2
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 2
            }, 
            {
                "channel": 365, 
                "count": 1
            }, 
            {
                "channel": 367, 
                "count": 2
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 376, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 379, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 393, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 1
            }, 
            {
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 406, 
                "count": 1
            }, 
            {
                "channel": 410, 
                "count": 1
            }, 
            {
                "channel": 417, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 2
            }, 
            {
                "channel": 426, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 1
            }, 
            {
                "channel": 440, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 2
            }, 
            {
                "channel": 469, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 2
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 1
            }, 
            {
                "channel": 485, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 487, 
                "count": 2
            }, 
            {
                "channel": 491, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 498, 
                "count": 2
            }, 
            {
                "channel": 500, 
                "count": 1
            }, 
            {
                "channel": 501, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 2
            }, 
            {
                "channel": 508, 
                "count": 1
            }
        ], 
        "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
        "segment_duration": 720, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "415942389", 
            "asic_id_eeprom": "5334884", 
            "asic_temp": "24.102663", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "18.12.6", 
            "exp_script_name": "9a6a6a2e42e1153ab84df535b9536da3e1e96a17-dc366805940c2841b5906dd55043ca1eb7d5ebb0", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-07-12T21:57:01Z", 
            "flow_cell_id": "FAK87028", 
            "heatsink_temp": "33.015625", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "87b62862-a824-4ed8-b343-6853ea46fb32", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "5c6bfdaf-5fdd-4e73-9af5-8262edf69519", 
            "protocols_version": "3.1.0.17", 
            "run_id": "cfdce6c29459902087db9c061c151e9b0bf3f94a", 
            "sample_id": "IVTcombinedAUnormalGblock_106_RNA002_linux", 
            "time_stamp": "2026-04-17T08:48:51Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "3.1.13"
        }
    }
]