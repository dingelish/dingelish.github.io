var searchIndex = {};
searchIndex["sgx_types"] = {"doc":"","items":[[3,"sgx_attributes_t","sgx_types","",null,null],[12,"flags","","",0,null],[12,"xfrm","","",0,null],[3,"sgx_misc_attribute_t","","",null,null],[12,"secs_attr","","",1,null],[12,"misc_select","","",1,null],[3,"sgx_dh_msg1_t","","",null,null],[12,"g_a","","",2,null],[12,"target","","",2,null],[3,"sgx_dh_msg2_t","","",null,null],[12,"g_b","","",3,null],[12,"report","","",3,null],[12,"cmac","","",3,null],[3,"sgx_dh_msg3_body_t","","",null,null],[12,"report","","",4,null],[12,"additional_prop_length","","",4,null],[12,"additional_prop","","",4,null],[3,"sgx_dh_msg3_t","","",null,null],[12,"cmac","","",5,null],[12,"msg3_body","","",5,null],[3,"sgx_dh_session_enclave_identity_t","","",null,null],[12,"cpu_svn","","",6,null],[12,"misc_select","","",6,null],[12,"reserved_1","","",6,null],[12,"attributes","","",6,null],[12,"mr_enclave","","",6,null],[12,"reserved_2","","",6,null],[12,"mr_signer","","",6,null],[12,"reserved_3","","",6,null],[12,"isv_prod_id","","",6,null],[12,"isv_svn","","",6,null],[3,"sgx_dh_session_t","","",null,null],[12,"sgx_dh_session","","",7,null],[3,"ecc_param_t","","",null,null],[12,"eccP","","",8,null],[12,"eccA","","",8,null],[12,"eccB","","",8,null],[12,"eccG","","",8,null],[12,"eccR","","",8,null],[3,"sgx_cpu_svn_t","","",null,null],[12,"svn","","",9,null],[3,"sgx_key_id_t","","",null,null],[12,"id","","",10,null],[3,"sgx_key_request_t","","",null,null],[12,"key_name","","",11,null],[12,"key_policy","","",11,null],[12,"isv_svn","","",11,null],[12,"reserved1","","",11,null],[12,"cpu_svn","","",11,null],[12,"attribute_mask","","",11,null],[12,"key_id","","",11,null],[12,"misc_mask","","",11,null],[12,"reserved2","","",11,null],[3,"sgx_ra_msg1_t","","",null,null],[12,"g_a","","",12,null],[12,"gid","","",12,null],[3,"sgx_ra_msg2_t","","",null,null],[12,"g_b","","",13,null],[12,"spid","","",13,null],[12,"quote_type","","",13,null],[12,"kdf_id","","",13,null],[12,"sign_gb_ga","","",13,null],[12,"mac","","",13,null],[12,"sig_rl_size","","",13,null],[12,"sig_rl","","",13,null],[3,"sgx_ra_msg3_t","","",null,null],[12,"mac","","",14,null],[12,"g_a","","",14,null],[12,"ps_sec_prop","","",14,null],[12,"quote","","",14,null],[3,"sgx_spid_t","","",null,null],[12,"id","","",15,null],[3,"sgx_basename_t","","",null,null],[12,"name","","",16,null],[3,"sgx_quote_nonce_t","","",null,null],[12,"rand","","",17,null],[3,"sgx_update_info_bit_t","","",null,null],[12,"ucodeUpdate","","",18,null],[12,"csmeFwUpdate","","",18,null],[12,"pswUpdate","","",18,null],[3,"sgx_quote_t","","",null,null],[12,"version","","",19,null],[12,"sign_type","","",19,null],[12,"epid_group_id","","",19,null],[12,"qe_svn","","",19,null],[12,"pce_svn","","",19,null],[12,"xeid","","",19,null],[12,"basename","","",19,null],[12,"report_body","","",19,null],[12,"signature_len","","",19,null],[12,"signature","","",19,null],[3,"sgx_platform_info_t","","",null,null],[12,"platform_info","","",20,null],[3,"sgx_measurement_t","","",null,null],[12,"m","","",21,null],[3,"sgx_report_data_t","","",null,null],[12,"d","","",22,null],[3,"sgx_target_info_t","","",null,null],[12,"mr_enclave","","",23,null],[12,"attributes","","",23,null],[12,"reserved1","","",23,null],[12,"misc_select","","",23,null],[12,"reserved2","","",23,null],[3,"sgx_report_body_t","","",null,null],[12,"cpu_svn","","",24,null],[12,"misc_select","","",24,null],[12,"reserved1","","",24,null],[12,"attributes","","",24,null],[12,"mr_enclave","","",24,null],[12,"reserved2","","",24,null],[12,"mr_signer","","",24,null],[12,"reserved3","","",24,null],[12,"isv_prod_id","","",24,null],[12,"isv_svn","","",24,null],[12,"reserved4","","",24,null],[12,"report_data","","",24,null],[3,"sgx_report_t","","",null,null],[12,"body","","",25,null],[12,"key_id","","",25,null],[12,"mac","","",25,null],[3,"sgx_mc_uuid_t","","",null,null],[12,"counter_id","","",26,null],[12,"nonce","","",26,null],[3,"sgx_ps_sec_prop_desc_t","","",null,null],[12,"sgx_ps_sec_prop_desc","","",27,null],[3,"sgx_ps_sec_prop_desc_ex_t","","",null,null],[12,"ps_sec_prop_desc","","",28,null],[12,"pse_mrsigner","","",28,null],[12,"pse_prod_id","","",28,null],[12,"pse_isv_svn","","",28,null],[3,"sgx_ec256_dh_shared_t","","",null,null],[12,"s","","",29,null],[3,"sgx_ec256_private_t","","",null,null],[12,"r","","",30,null],[3,"sgx_ec256_public_t","","",null,null],[12,"gx","","",31,null],[12,"gy","","",31,null],[3,"sgx_ec256_signature_t","","",null,null],[12,"x","","",32,null],[12,"y","","",32,null],[3,"sgx_rsa3072_public_key_t","","",null,null],[12,"modulus","","",33,null],[12,"exponent","","",33,null],[3,"sgx_rsa3072_key_t","","",null,null],[12,"modulus","","",34,null],[12,"d","","",34,null],[12,"e","","",34,null],[3,"sgx_rsa3072_signature_t","","",null,null],[12,"signature","","",35,null],[3,"sgx_thread_queue_t","","",null,null],[12,"m_first","","",36,null],[12,"m_last","","",36,null],[3,"sgx_thread_mutex_t","","",null,null],[12,"m_refcount","","",37,null],[12,"m_control","","",37,null],[12,"m_lock","","",37,null],[12,"m_owner","","",37,null],[12,"m_queue","","",37,null],[3,"sgx_thread_mutexattr_t","","",null,null],[12,"m_dummy","","",38,null],[3,"sgx_thread_condattr_t","","",null,null],[12,"m_dummy","","",39,null],[3,"sgx_thread_cond_t","","",null,null],[12,"m_lock","","",40,null],[12,"m_queue","","",40,null],[3,"sgx_cpu_context_t","","",null,null],[12,"rax","","",41,null],[12,"rcx","","",41,null],[12,"rdx","","",41,null],[12,"rbx","","",41,null],[12,"rsp","","",41,null],[12,"rbp","","",41,null],[12,"rsi","","",41,null],[12,"rdi","","",41,null],[12,"r8","","",41,null],[12,"r9","","",41,null],[12,"r10","","",41,null],[12,"r11","","",41,null],[12,"r12","","",41,null],[12,"r13","","",41,null],[12,"r14","","",41,null],[12,"r15","","",41,null],[12,"rflags","","",41,null],[12,"rip","","",41,null],[3,"sgx_exception_info_t","","",null,null],[12,"cpu_context","","",42,null],[12,"exception_vector","","",42,null],[12,"exception_type","","",42,null],[3,"sgx_aes_gcm_data_t","","",null,null],[12,"payload_size","","",43,null],[12,"reserved","","",43,null],[12,"payload_tag","","",43,null],[12,"payload","","",43,null],[3,"sgx_sealed_data_t","","",null,null],[12,"key_request","","",44,null],[12,"plain_text_offset","","",44,null],[12,"reserved","","",44,null],[12,"aes_data","","",44,null],[3,"sgx_ps_cap_t","","",null,null],[12,"ps_cap0","","",45,null],[12,"ps_cap1","","",45,null],[4,"c_void","","",null,null],[4,"sgx_dh_session_role_t","","",null,null],[13,"SGX_DH_SESSION_INITIATOR","","",46,null],[13,"SGX_DH_SESSION_RESPONDER","","",46,null],[4,"sgx_ra_key_type_t","","",null,null],[13,"SGX_RA_KEY_SK","","",47,null],[13,"SGX_RA_KEY_MK","","",47,null],[13,"SGX_RA_KEY_VK","","",47,null],[4,"sgx_quote_sign_type_t","","",null,null],[13,"SGX_UNLINKABLE_SIGNATURE","","",48,null],[13,"SGX_LINKABLE_SIGNATURE","","",48,null],[4,"sgx_generic_ecresult_t","","",null,null],[13,"SGX_EC_VALID","","",49,null],[13,"SGX_EC_COMPOSITE_BASE","","",49,null],[13,"SGX_EC_COMPLICATED_BASE","","",49,null],[13,"SGX_EC_IS_ZERO_DISCRIMINANT","","",49,null],[13,"SGX_EC_COMPOSITE_ORDER","","",49,null],[13,"SGX_EC_INVALID_ORDER","","",49,null],[13,"SGX_EC_IS_WEAK_MOV","","",49,null],[13,"SGX_EC_IS_WEAK_SSA","","",49,null],[13,"SGX_EC_IS_SUPER_SINGULAR","","",49,null],[13,"SGX_EC_INVALID_PRIVATE_KEY","","",49,null],[13,"SGX_EC_INVALID_PUBLIC_KEY","","",49,null],[13,"SGX_EC_INVALID_KEY_PAIR","","",49,null],[13,"SGX_EC_POINT_OUT_OF_GROUP","","",49,null],[13,"SGX_EC_POINT_IS_AT_INFINITY","","",49,null],[13,"SGX_EC_POINT_IS_NOT_VALID","","",49,null],[13,"SGX_EC_POINT_IS_EQUAL","","",49,null],[13,"SGX_EC_POINT_IS_NOT_EQUAL","","",49,null],[13,"SGX_EC_INVALID_SIGNATURE","","",49,null],[4,"sgx_rsa_result_t","","",null,null],[13,"SGX_RSA_VALID","","",50,null],[13,"SGX_RSA_INVALID_SIGNATURE","","",50,null],[4,"sgx_exception_vector_t","","",null,null],[13,"SGX_EXCEPTION_VECTOR_DE","","",51,null],[13,"SGX_EXCEPTION_VECTOR_DB","","",51,null],[13,"SGX_EXCEPTION_VECTOR_BP","","",51,null],[13,"SGX_EXCEPTION_VECTOR_BR","","",51,null],[13,"SGX_EXCEPTION_VECTOR_UD","","",51,null],[13,"SGX_EXCEPTION_VECTOR_MF","","",51,null],[13,"SGX_EXCEPTION_VECTOR_AC","","",51,null],[13,"SGX_EXCEPTION_VECTOR_XM","","",51,null],[4,"sgx_exception_type_t","","",null,null],[13,"SGX_EXCEPTION_HARDWARE","","",52,null],[13,"SGX_EXCEPTION_SOFTWARE","","",52,null],[4,"sgx_device_status_t","","",null,null],[13,"SGX_ENABLED","","",53,null],[13,"SGX_DISABLED_REBOOT_REQUIRED","","",53,null],[13,"SGX_DISABLED_LEGACY_OS","","",53,null],[13,"SGX_DISABLED","","",53,null],[13,"SGX_DISABLED_SCI_AVAILABLE","","",53,null],[13,"SGX_DISABLED_MANUAL_ENABLE","","",53,null],[13,"SGX_DISABLED_HYPERV_ENABLED","","",53,null],[13,"SGX_DISABLED_UNSUPPORTED_CPU","","",53,null],[4,"sgx_status_t","","",null,null],[13,"SGX_SUCCESS","","",54,null],[13,"SGX_ERROR_UNEXPECTED","","",54,null],[13,"SGX_ERROR_INVALID_PARAMETER","","",54,null],[13,"SGX_ERROR_OUT_OF_MEMORY","","",54,null],[13,"SGX_ERROR_ENCLAVE_LOST","","",54,null],[13,"SGX_ERROR_INVALID_STATE","","",54,null],[13,"SGX_ERROR_INVALID_FUNCTION","","",54,null],[13,"SGX_ERROR_OUT_OF_TCS","","",54,null],[13,"SGX_ERROR_ENCLAVE_CRASHED","","",54,null],[13,"SGX_ERROR_ECALL_NOT_ALLOWED","","",54,null],[13,"SGX_ERROR_OCALL_NOT_ALLOWED","","",54,null],[13,"SGX_ERROR_STACK_OVERRUN","","",54,null],[13,"SGX_ERROR_UNDEFINED_SYMBOL","","",54,null],[13,"SGX_ERROR_INVALID_ENCLAVE","","",54,null],[13,"SGX_ERROR_INVALID_ENCLAVE_ID","","",54,null],[13,"SGX_ERROR_INVALID_SIGNATURE","","",54,null],[13,"SGX_ERROR_NDEBUG_ENCLAVE","","",54,null],[13,"SGX_ERROR_OUT_OF_EPC","","",54,null],[13,"SGX_ERROR_NO_DEVICE","","",54,null],[13,"SGX_ERROR_MEMORY_MAP_CONFLICT","","",54,null],[13,"SGX_ERROR_INVALID_METADATA","","",54,null],[13,"SGX_ERROR_DEVICE_BUSY","","",54,null],[13,"SGX_ERROR_INVALID_VERSION","","",54,null],[13,"SGX_ERROR_MODE_INCOMPATIBLE","","",54,null],[13,"SGX_ERROR_ENCLAVE_FILE_ACCESS","","",54,null],[13,"SGX_ERROR_INVALID_MISC","","",54,null],[13,"SGX_ERROR_INVALID_LAUNCH_TOKEN","","",54,null],[13,"SGX_ERROR_MAC_MISMATCH","","",54,null],[13,"SGX_ERROR_INVALID_ATTRIBUTE","","",54,null],[13,"SGX_ERROR_INVALID_CPUSVN","","",54,null],[13,"SGX_ERROR_INVALID_ISVSVN","","",54,null],[13,"SGX_ERROR_INVALID_KEYNAME","","",54,null],[13,"SGX_ERROR_SERVICE_UNAVAILABLE","","",54,null],[13,"SGX_ERROR_SERVICE_TIMEOUT","","",54,null],[13,"SGX_ERROR_AE_INVALID_EPIDBLOB","","",54,null],[13,"SGX_ERROR_SERVICE_INVALID_PRIVILEGE","","",54,null],[13,"SGX_ERROR_EPID_MEMBER_REVOKED","","",54,null],[13,"SGX_ERROR_UPDATE_NEEDED","","",54,null],[13,"SGX_ERROR_NETWORK_FAILURE","","",54,null],[13,"SGX_ERROR_AE_SESSION_INVALID","","",54,null],[13,"SGX_ERROR_BUSY","","",54,null],[13,"SGX_ERROR_MC_NOT_FOUND","","",54,null],[13,"SGX_ERROR_MC_NO_ACCESS_RIGHT","","",54,null],[13,"SGX_ERROR_MC_USED_UP","","",54,null],[13,"SGX_ERROR_MC_OVER_QUOTA","","",54,null],[13,"SGX_ERROR_KDF_MISMATCH","","",54,null],[13,"SGX_ERROR_UNRECOGNIZED_PLATFORM","","",54,null],[13,"SGX_ERROR_NO_PRIVILEGE","","",54,null],[13,"SGX_ERROR_FILE_BAD_STATUS","","",54,null],[13,"SGX_ERROR_FILE_NO_KEY_ID","","",54,null],[13,"SGX_ERROR_FILE_NAME_MISMATCH","","",54,null],[13,"SGX_ERROR_FILE_NOT_SGX_FILE","","",54,null],[13,"SGX_ERROR_FILE_CANT_OPEN_RECOVERY_FILE","","",54,null],[13,"SGX_ERROR_FILE_CANT_WRITE_RECOVERY_FILE","","",54,null],[13,"SGX_ERROR_FILE_RECOVERY_NEEDED","","",54,null],[13,"SGX_ERROR_FILE_FLUSH_FAILED","","",54,null],[13,"SGX_ERROR_FILE_CLOSE_FAILED","","",54,null],[5,"sgx_cpuid","","",null,null],[5,"sgx_cpuidex","","",null,null],[5,"sgx_spin_lock","","",null,null],[5,"sgx_spin_unlock","","",null,null],[5,"sgx_thread_mutex_init","","",null,null],[5,"sgx_thread_mutex_destroy","","",null,null],[5,"sgx_thread_mutex_lock","","",null,null],[5,"sgx_thread_mutex_trylock","","",null,null],[5,"sgx_thread_mutex_unlock","","",null,null],[5,"sgx_thread_cond_init","","",null,null],[5,"sgx_thread_cond_destroy","","",null,null],[5,"sgx_thread_cond_wait","","",null,null],[5,"sgx_thread_cond_signal","","",null,null],[5,"sgx_thread_cond_broadcast","","",null,null],[5,"sgx_thread_self","","",null,null],[5,"sgx_thread_equal","","",null,null],[5,"sgx_dh_init_session","","",null,null],[5,"sgx_dh_responder_gen_msg1","","",null,null],[5,"sgx_dh_initiator_proc_msg1","","",null,null],[5,"sgx_dh_responder_proc_msg2","","",null,null],[5,"sgx_dh_initiator_proc_msg3","","",null,null],[5,"sgx_create_pse_session","","",null,null],[5,"sgx_close_pse_session","","",null,null],[5,"sgx_get_ps_sec_prop","","",null,null],[5,"sgx_get_ps_sec_prop_ex","","",null,null],[5,"sgx_get_trusted_time","","",null,null],[5,"sgx_create_monotonic_counter_ex","","",null,null],[5,"sgx_create_monotonic_counter","","",null,null],[5,"sgx_destroy_monotonic_counter","","",null,null],[5,"sgx_increment_monotonic_counter","","",null,null],[5,"sgx_read_monotonic_counter","","",null,null],[5,"sgx_calc_sealed_data_size","","",null,null],[5,"sgx_get_add_mac_txt_len","","",null,null],[5,"sgx_get_encrypt_txt_len","","",null,null],[5,"sgx_seal_data","","",null,null],[5,"sgx_seal_data_ex","","",null,null],[5,"sgx_unseal_data","","",null,null],[5,"sgx_mac_aadata","","",null,null],[5,"sgx_mac_aadata_ex","","",null,null],[5,"sgx_unmac_aadata","","",null,null],[5,"sgx_create_report","","",null,null],[5,"sgx_verify_report","","",null,null],[5,"sgx_get_key","","",null,null],[5,"sgx_sha256_msg","","",null,null],[5,"sgx_sha256_init","","",null,null],[5,"sgx_sha256_update","","",null,null],[5,"sgx_sha256_get_hash","","",null,null],[5,"sgx_sha256_close","","",null,null],[5,"sgx_rijndael128GCM_encrypt","","",null,null],[5,"sgx_rijndael128GCM_decrypt","","",null,null],[5,"sgx_rijndael128_cmac_msg","","",null,null],[5,"sgx_cmac128_init","","",null,null],[5,"sgx_cmac128_update","","",null,null],[5,"sgx_cmac128_final","","",null,null],[5,"sgx_cmac128_close","","",null,null],[5,"sgx_aes_ctr_encrypt","","",null,null],[5,"sgx_aes_ctr_decrypt","","",null,null],[5,"sgx_ecc256_open_context","","",null,null],[5,"sgx_ecc256_close_context","","",null,null],[5,"sgx_ecc256_create_key_pair","","",null,null],[5,"sgx_ecc256_check_point","","",null,null],[5,"sgx_ecc256_compute_shared_dhkey","","",null,null],[5,"sgx_ecdsa_sign","","",null,null],[5,"sgx_ecdsa_verify","","",null,null],[5,"sgx_rsa3072_sign","","",null,null],[5,"sgx_rsa3072_verify","","",null,null],[5,"sgx_ra_init","","",null,null],[5,"sgx_ra_init_ex","","",null,null],[5,"sgx_ra_get_keys","","",null,null],[5,"sgx_ra_close","","",null,null],[5,"sgx_is_within_enclave","","",null,null],[5,"sgx_is_outside_enclave","","",null,null],[5,"sgx_read_rand","","",null,null],[5,"sgx_register_exception_handler","","",null,null],[5,"sgx_unregister_exception_handler","","",null,null],[5,"sgx_ocalloc","","",null,null],[5,"sgx_sgx_ocfree","","",null,null],[5,"sgx_init_quote","","",null,null],[5,"sgx_calc_quote_size","","",null,null],[5,"sgx_get_quote_size","","",null,null],[5,"sgx_get_quote","","",null,null],[5,"sgx_get_ps_cap","","",null,null],[5,"sgx_get_whitelist_size","","",null,null],[5,"sgx_get_whitelist","","",null,null],[5,"sgx_get_extended_epid_group_id","","",null,null],[5,"sgx_report_attestation_status","","",null,null],[5,"sgx_ra_get_msg1","","",null,null],[5,"sgx_ra_proc_msg2","","",null,null],[5,"sgx_create_enclave","","",null,null],[5,"sgx_destroy_enclave","","",null,null],[5,"sgx_fopen","","",null,null],[5,"sgx_fopen_auto_key","","",null,null],[5,"sgx_fwrite","","",null,null],[5,"sgx_fread","","",null,null],[5,"sgx_ftell","","",null,null],[5,"sgx_fseek","","",null,null],[5,"sgx_fflush","","",null,null],[5,"sgx_ferror","","",null,null],[5,"sgx_feof","","",null,null],[5,"sgx_clearerr","","",null,null],[5,"sgx_fclose","","",null,null],[5,"sgx_remove","","",null,null],[5,"sgx_fexport_auto_key","","",null,null],[5,"sgx_fimport_auto_key","","",null,null],[5,"sgx_fclear_cache","","",null,null],[5,"sgx_is_capable","","",null,null],[5,"sgx_cap_enable_device","","",null,null],[5,"sgx_cap_get_status","","",null,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"sgx_attributes_t"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"sgx_attributes_t"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"sgx_misc_attribute_t"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"sgx_misc_attribute_t"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg1_t"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"sgx_dh_msg1_t"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg2_t"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg3_body_t"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg3_t"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_session_enclave_identity_t"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_session_t"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"sgx_dh_msg2_t"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"sgx_dh_msg3_body_t"}}],[11,"default","","",5,{"inputs":[],"output":{"name":"sgx_dh_msg3_t"}}],[11,"default","","",6,{"inputs":[],"output":{"name":"sgx_dh_session_enclave_identity_t"}}],[11,"default","","",7,{"inputs":[],"output":{"name":"sgx_dh_session_t"}}],[11,"clone","","",46,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_session_role_t"}}],[11,"eq","","",46,{"inputs":[{"name":"self"},{"name":"sgx_dh_session_role_t"}],"output":{"name":"bool"}}],[11,"default","","",46,{"inputs":[],"output":{"name":"sgx_dh_session_role_t"}}],[11,"from_repr","","",46,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",46,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"ecc_param_t"}}],[11,"default","","",8,{"inputs":[],"output":{"name":"ecc_param_t"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"sgx_cpu_svn_t"}}],[11,"default","","",9,{"inputs":[],"output":{"name":"sgx_cpu_svn_t"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"sgx_key_id_t"}}],[11,"default","","",10,{"inputs":[],"output":{"name":"sgx_key_id_t"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"sgx_key_request_t"}}],[11,"default","","",11,{"inputs":[],"output":{"name":"sgx_key_request_t"}}],[11,"clone","","",47,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_key_type_t"}}],[11,"eq","","",47,{"inputs":[{"name":"self"},{"name":"sgx_ra_key_type_t"}],"output":{"name":"bool"}}],[11,"default","","",47,{"inputs":[],"output":{"name":"sgx_ra_key_type_t"}}],[11,"from_repr","","",47,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",47,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_msg1_t"}}],[11,"default","","",12,{"inputs":[],"output":{"name":"sgx_ra_msg1_t"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_msg2_t"}}],[11,"default","","",13,{"inputs":[],"output":{"name":"sgx_ra_msg2_t"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_msg3_t"}}],[11,"default","","",14,{"inputs":[],"output":{"name":"sgx_ra_msg3_t"}}],[11,"clone","","",15,{"inputs":[{"name":"self"}],"output":{"name":"sgx_spid_t"}}],[11,"default","","",15,{"inputs":[],"output":{"name":"sgx_spid_t"}}],[11,"clone","","",16,{"inputs":[{"name":"self"}],"output":{"name":"sgx_basename_t"}}],[11,"default","","",16,{"inputs":[],"output":{"name":"sgx_basename_t"}}],[11,"clone","","",17,{"inputs":[{"name":"self"}],"output":{"name":"sgx_quote_nonce_t"}}],[11,"default","","",17,{"inputs":[],"output":{"name":"sgx_quote_nonce_t"}}],[11,"clone","","",18,{"inputs":[{"name":"self"}],"output":{"name":"sgx_update_info_bit_t"}}],[11,"default","","",18,{"inputs":[],"output":{"name":"sgx_update_info_bit_t"}}],[11,"clone","","",48,{"inputs":[{"name":"self"}],"output":{"name":"sgx_quote_sign_type_t"}}],[11,"eq","","",48,{"inputs":[{"name":"self"},{"name":"sgx_quote_sign_type_t"}],"output":{"name":"bool"}}],[11,"default","","",48,{"inputs":[],"output":{"name":"sgx_quote_sign_type_t"}}],[11,"from_repr","","",48,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",48,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",19,{"inputs":[{"name":"self"}],"output":{"name":"sgx_quote_t"}}],[11,"clone","","",20,{"inputs":[{"name":"self"}],"output":{"name":"sgx_platform_info_t"}}],[11,"default","","",19,{"inputs":[],"output":{"name":"sgx_quote_t"}}],[11,"default","","",20,{"inputs":[],"output":{"name":"sgx_platform_info_t"}}],[11,"clone","","",21,{"inputs":[{"name":"self"}],"output":{"name":"sgx_measurement_t"}}],[11,"default","","",21,{"inputs":[],"output":{"name":"sgx_measurement_t"}}],[11,"clone","","",22,{"inputs":[{"name":"self"}],"output":{"name":"sgx_report_data_t"}}],[11,"default","","",22,{"inputs":[],"output":{"name":"sgx_report_data_t"}}],[11,"clone","","",23,{"inputs":[{"name":"self"}],"output":{"name":"sgx_target_info_t"}}],[11,"clone","","",24,{"inputs":[{"name":"self"}],"output":{"name":"sgx_report_body_t"}}],[11,"clone","","",25,{"inputs":[{"name":"self"}],"output":{"name":"sgx_report_t"}}],[11,"default","","",23,{"inputs":[],"output":{"name":"sgx_target_info_t"}}],[11,"default","","",24,{"inputs":[],"output":{"name":"sgx_report_body_t"}}],[11,"default","","",25,{"inputs":[],"output":{"name":"sgx_report_t"}}],[11,"clone","","",26,{"inputs":[{"name":"self"}],"output":{"name":"sgx_mc_uuid_t"}}],[11,"default","","",26,{"inputs":[],"output":{"name":"sgx_mc_uuid_t"}}],[11,"clone","","",27,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ps_sec_prop_desc_t"}}],[11,"clone","","",28,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ps_sec_prop_desc_ex_t"}}],[11,"default","","",27,{"inputs":[],"output":{"name":"sgx_ps_sec_prop_desc_t"}}],[11,"default","","",28,{"inputs":[],"output":{"name":"sgx_ps_sec_prop_desc_ex_t"}}],[11,"clone","","",29,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_dh_shared_t"}}],[11,"default","","",29,{"inputs":[],"output":{"name":"sgx_ec256_dh_shared_t"}}],[11,"clone","","",30,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_private_t"}}],[11,"default","","",30,{"inputs":[],"output":{"name":"sgx_ec256_private_t"}}],[11,"clone","","",31,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_public_t"}}],[11,"default","","",31,{"inputs":[],"output":{"name":"sgx_ec256_public_t"}}],[11,"clone","","",32,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_signature_t"}}],[11,"default","","",32,{"inputs":[],"output":{"name":"sgx_ec256_signature_t"}}],[11,"clone","","",33,{"inputs":[{"name":"self"}],"output":{"name":"sgx_rsa3072_public_key_t"}}],[11,"clone","","",34,{"inputs":[{"name":"self"}],"output":{"name":"sgx_rsa3072_key_t"}}],[11,"clone","","",35,{"inputs":[{"name":"self"}],"output":{"name":"sgx_rsa3072_signature_t"}}],[11,"default","","",33,{"inputs":[],"output":{"name":"sgx_rsa3072_public_key_t"}}],[11,"default","","",34,{"inputs":[],"output":{"name":"sgx_rsa3072_key_t"}}],[11,"default","","",35,{"inputs":[],"output":{"name":"sgx_rsa3072_signature_t"}}],[11,"clone","","",49,{"inputs":[{"name":"self"}],"output":{"name":"sgx_generic_ecresult_t"}}],[11,"eq","","",49,{"inputs":[{"name":"self"},{"name":"sgx_generic_ecresult_t"}],"output":{"name":"bool"}}],[11,"default","","",49,{"inputs":[],"output":{"name":"sgx_generic_ecresult_t"}}],[11,"from_repr","","",49,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",49,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",50,{"inputs":[{"name":"self"}],"output":{"name":"sgx_rsa_result_t"}}],[11,"eq","","",50,{"inputs":[{"name":"self"},{"name":"sgx_rsa_result_t"}],"output":{"name":"bool"}}],[11,"default","","",50,{"inputs":[],"output":{"name":"sgx_rsa_result_t"}}],[11,"from_repr","","",50,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",50,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",38,{"inputs":[{"name":"self"}],"output":{"name":"sgx_thread_mutexattr_t"}}],[11,"default","","",38,{"inputs":[],"output":{"name":"sgx_thread_mutexattr_t"}}],[11,"clone","","",39,{"inputs":[{"name":"self"}],"output":{"name":"sgx_thread_condattr_t"}}],[11,"default","","",39,{"inputs":[],"output":{"name":"sgx_thread_condattr_t"}}],[11,"clone","","",51,{"inputs":[{"name":"self"}],"output":{"name":"sgx_exception_vector_t"}}],[11,"eq","","",51,{"inputs":[{"name":"self"},{"name":"sgx_exception_vector_t"}],"output":{"name":"bool"}}],[11,"default","","",51,{"inputs":[],"output":{"name":"sgx_exception_vector_t"}}],[11,"from_repr","","",51,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",51,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",52,{"inputs":[{"name":"self"}],"output":{"name":"sgx_exception_type_t"}}],[11,"eq","","",52,{"inputs":[{"name":"self"},{"name":"sgx_exception_type_t"}],"output":{"name":"bool"}}],[11,"default","","",52,{"inputs":[],"output":{"name":"sgx_exception_type_t"}}],[11,"from_repr","","",52,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",52,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",41,{"inputs":[{"name":"self"}],"output":{"name":"sgx_cpu_context_t"}}],[11,"default","","",41,{"inputs":[],"output":{"name":"sgx_cpu_context_t"}}],[11,"clone","","",42,{"inputs":[{"name":"self"}],"output":{"name":"sgx_exception_info_t"}}],[11,"default","","",42,{"inputs":[],"output":{"name":"sgx_exception_info_t"}}],[11,"clone","","",43,{"inputs":[{"name":"self"}],"output":{"name":"sgx_aes_gcm_data_t"}}],[11,"default","","",43,{"inputs":[],"output":{"name":"sgx_aes_gcm_data_t"}}],[11,"clone","","",44,{"inputs":[{"name":"self"}],"output":{"name":"sgx_sealed_data_t"}}],[11,"default","","",44,{"inputs":[],"output":{"name":"sgx_sealed_data_t"}}],[11,"clone","","",45,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ps_cap_t"}}],[11,"default","","",45,{"inputs":[],"output":{"name":"sgx_ps_cap_t"}}],[11,"clone","","",53,{"inputs":[{"name":"self"}],"output":{"name":"sgx_device_status_t"}}],[11,"eq","","",53,{"inputs":[{"name":"self"},{"name":"sgx_device_status_t"}],"output":{"name":"bool"}}],[11,"default","","",53,{"inputs":[],"output":{"name":"sgx_device_status_t"}}],[11,"from_repr","","",53,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",53,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",54,{"inputs":[{"name":"self"}],"output":{"name":"sgx_status_t"}}],[11,"eq","","",54,{"inputs":[{"name":"self"},{"name":"sgx_status_t"}],"output":{"name":"bool"}}],[11,"cmp","","",54,{"inputs":[{"name":"self"},{"name":"sgx_status_t"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",54,{"inputs":[{"name":"self"},{"name":"sgx_status_t"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"fmt","","",54,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",54,{"inputs":[],"output":{"name":"sgx_status_t"}}],[11,"from_repr","","",54,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",54,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"__description","","",54,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"as_str","","",54,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",54,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"marker","","",null,null],[8,"BytewiseEquality","sgx_types::marker","Trait implemented for types that can be compared for equality using their bytewise representation A type can implement BytewiseEquality if all of its components implement BytewiseEquality.",null,null],[8,"ContiguousMemory","","Trait for demonstrating one structure locates in contiguous memory.",null,null],[6,"int8_t","sgx_types","",null,null],[6,"int16_t","","",null,null],[6,"int32_t","","",null,null],[6,"int64_t","","",null,null],[6,"uint8_t","","",null,null],[6,"uint16_t","","",null,null],[6,"uint32_t","","",null,null],[6,"uint64_t","","",null,null],[6,"c_schar","","",null,null],[6,"c_char","","",null,null],[6,"c_uchar","","",null,null],[6,"c_short","","",null,null],[6,"c_ushort","","",null,null],[6,"c_int","","",null,null],[6,"c_uint","","",null,null],[6,"c_float","","",null,null],[6,"c_double","","",null,null],[6,"c_longlong","","",null,null],[6,"c_ulonglong","","",null,null],[6,"intmax_t","","",null,null],[6,"uintmax_t","","",null,null],[6,"c_long","","",null,null],[6,"c_ulong","","",null,null],[6,"size_t","","",null,null],[6,"ptrdiff_t","","",null,null],[6,"intptr_t","","",null,null],[6,"uintptr_t","","",null,null],[6,"ssize_t","","",null,null],[6,"sgx_misc_select_t","","",null,null],[6,"sgx_ec_key_128bit_t","","",null,null],[6,"sgx_enclave_id_t","","",null,null],[6,"sgx_key_128bit_t","","",null,null],[6,"sgx_isv_svn_t","","",null,null],[6,"sgx_ra_context_t","","",null,null],[6,"sgx_ra_key_128_t","","",null,null],[6,"sgx_epid_group_id_t","","",null,null],[6,"sgx_mac_t","","",null,null],[6,"sgx_prod_id_t","","",null,null],[6,"sgx_spinlock_t","","",null,null],[6,"sgx_time_t","","",null,null],[6,"sgx_time_source_nonce_t","","",null,null],[6,"sgx_sha_state_handle_t","","",null,null],[6,"sgx_cmac_state_handle_t","","",null,null],[6,"sgx_ecc_state_handle_t","","",null,null],[6,"sgx_sha256_hash_t","","",null,null],[6,"sgx_aes_gcm_128bit_key_t","","",null,null],[6,"sgx_aes_gcm_128bit_tag_t","","",null,null],[6,"sgx_cmac_128bit_key_t","","",null,null],[6,"sgx_cmac_128bit_tag_t","","",null,null],[6,"sgx_aes_ctr_128bit_key_t","","",null,null],[6,"sgx_thread_t","","",null,null],[6,"sgx_ra_derive_secret_keys_t","","",null,null],[6,"sgx_exception_handler_t","","",null,null],[6,"sgx_ecall_get_ga_trusted_t","","",null,null],[6,"sgx_ecall_proc_msg2_trusted_t","","",null,null],[6,"sgx_ecall_get_msg3_trusted_t","","",null,null],[6,"sgx_launch_token_t","","",null,null],[6,"sgx_cpuinfo_t","","",null,null],[6,"SGX_FILE","","",null,null],[6,"sys_error_t","","",null,null],[6,"SgxResult","","",null,null],[6,"SgxError","","",null,null],[6,"SysResult","","",null,null],[6,"SysError","","",null,null],[17,"SGX_FLAGS_INITTED","","",null,null],[17,"SGX_FLAGS_DEBUG","","",null,null],[17,"SGX_FLAGS_MODE64BIT","","",null,null],[17,"SGX_FLAGS_PROVISION_KEY","","",null,null],[17,"SGX_FLAGS_EINITTOKEN_KEY","","",null,null],[17,"SGX_FLAGS_RESERVED","","",null,null],[17,"SGX_XFRM_LEGACY","","",null,null],[17,"SGX_XFRM_AVX","","",null,null],[17,"SGX_XFRM_AVX512","","",null,null],[17,"SGX_XFRM_MPX","","",null,null],[17,"SGX_XFRM_RESERVED","","",null,null],[17,"SGX_DH_MAC_SIZE","","",null,null],[17,"SGX_DH_SESSION_DATA_SIZE","","",null,null],[17,"SGX_FEBITSIZE","","",null,null],[17,"SGX_KEYSELECT_LICENSE","","",null,null],[17,"SGX_KEYSELECT_PROVISION","","",null,null],[17,"SGX_KEYSELECT_PROVISION_SEAL","","",null,null],[17,"SGX_KEYSELECT_REPORT","","",null,null],[17,"SGX_KEYSELECT_SEAL","","",null,null],[17,"SGX_KEYPOLICY_MRENCLAVE","","",null,null],[17,"SGX_KEYPOLICY_MRSIGNER","","",null,null],[17,"SGX_KEYID_SIZE","","",null,null],[17,"SGX_CPUSVN_SIZE","","",null,null],[17,"SGX_KEY_REQUEST_RESERVED2_BYTES","","",null,null],[17,"SGX_PLATFORM_INFO_SIZE","","",null,null],[17,"SGX_HASH_SIZE","","",null,null],[17,"SGX_MAC_SIZE","","",null,null],[17,"SGX_REPORT_DATA_SIZE","","",null,null],[17,"SGX_TARGET_INFO_RESERVED1_BYTES","","",null,null],[17,"SGX_TARGET_INFO_RESERVED2_BYTES","","",null,null],[17,"SGX_SPINLOCK_INITIALIZER","","",null,null],[17,"SGX_MC_UUID_COUNTER_ID_SIZE","","",null,null],[17,"SGX_MC_UUID_NONCE_SIZE","","",null,null],[17,"SGX_MC_POLICY_SIGNER","","",null,null],[17,"SGX_MC_POLICY_ENCLAVE","","",null,null],[17,"SGX_SHA256_HASH_SIZE","","",null,null],[17,"SGX_ECP256_KEY_SIZE","","",null,null],[17,"SGX_NISTP_ECP256_KEY_SIZE","","",null,null],[17,"SGX_AESGCM_IV_SIZE","","",null,null],[17,"SGX_AESGCM_KEY_SIZE","","",null,null],[17,"SGX_AESGCM_MAC_SIZE","","",null,null],[17,"SGX_CMAC_KEY_SIZE","","",null,null],[17,"SGX_CMAC_MAC_SIZE","","",null,null],[17,"SGX_AESCTR_KEY_SIZE","","",null,null],[17,"SGX_RSA3072_KEY_SIZE","","",null,null],[17,"SGX_RSA3072_PRI_EXP_SIZE","","",null,null],[17,"SGX_RSA3072_PUB_EXP_SIZE","","",null,null],[17,"SE_WORDSIZE","","",null,null],[17,"SGX_THREAD_T_NULL","","",null,null],[17,"SGX_THREAD_MUTEX_NONRECURSIVE","","",null,null],[17,"SGX_THREAD_MUTEX_RECURSIVE","","",null,null],[17,"SGX_THREAD_NONRECURSIVE_MUTEX_INITIALIZER","","",null,null],[17,"SGX_THREAD_RECURSIVE_MUTEX_INITIALIZER","","",null,null],[17,"SGX_THREAD_MUTEX_INITIALIZER","","",null,null],[17,"SGX_THREAD_COND_INITIALIZER","","",null,null],[17,"EXCEPTION_CONTINUE_SEARCH","","",null,null],[17,"EXCEPTION_CONTINUE_EXECUTION","","",null,null],[17,"SGX_SEAL_TAG_SIZE","","",null,null],[17,"SGX_SEAL_IV_SIZE","","",null,null],[17,"PS_CAP_TRUSTED_TIME","","",null,null],[17,"PS_CAP_MONOTONIC_COUNTER","","",null,null],[17,"ENCLAVE_INIT_NOT_STARTED","","",null,null],[17,"ENCLAVE_INIT_IN_PROGRESS","","",null,null],[17,"ENCLAVE_INIT_DONE","","",null,null],[17,"ENCLAVE_CRASHED","","",null,null],[17,"FILENAME_MAX","","",null,null],[17,"FOPEN_MAX","","",null,null],[14,"cfg_if","","",null,null],[14,"__cfg_if_items","","",null,null],[14,"__cfg_if_apply","","",null,null],[14,"__item","","",null,null],[14,"s","","",null,null],[14,"impl_struct","","",null,null],[14,"impl_enum","","",null,null]],"paths":[[3,"sgx_attributes_t"],[3,"sgx_misc_attribute_t"],[3,"sgx_dh_msg1_t"],[3,"sgx_dh_msg2_t"],[3,"sgx_dh_msg3_body_t"],[3,"sgx_dh_msg3_t"],[3,"sgx_dh_session_enclave_identity_t"],[3,"sgx_dh_session_t"],[3,"ecc_param_t"],[3,"sgx_cpu_svn_t"],[3,"sgx_key_id_t"],[3,"sgx_key_request_t"],[3,"sgx_ra_msg1_t"],[3,"sgx_ra_msg2_t"],[3,"sgx_ra_msg3_t"],[3,"sgx_spid_t"],[3,"sgx_basename_t"],[3,"sgx_quote_nonce_t"],[3,"sgx_update_info_bit_t"],[3,"sgx_quote_t"],[3,"sgx_platform_info_t"],[3,"sgx_measurement_t"],[3,"sgx_report_data_t"],[3,"sgx_target_info_t"],[3,"sgx_report_body_t"],[3,"sgx_report_t"],[3,"sgx_mc_uuid_t"],[3,"sgx_ps_sec_prop_desc_t"],[3,"sgx_ps_sec_prop_desc_ex_t"],[3,"sgx_ec256_dh_shared_t"],[3,"sgx_ec256_private_t"],[3,"sgx_ec256_public_t"],[3,"sgx_ec256_signature_t"],[3,"sgx_rsa3072_public_key_t"],[3,"sgx_rsa3072_key_t"],[3,"sgx_rsa3072_signature_t"],[3,"sgx_thread_queue_t"],[3,"sgx_thread_mutex_t"],[3,"sgx_thread_mutexattr_t"],[3,"sgx_thread_condattr_t"],[3,"sgx_thread_cond_t"],[3,"sgx_cpu_context_t"],[3,"sgx_exception_info_t"],[3,"sgx_aes_gcm_data_t"],[3,"sgx_sealed_data_t"],[3,"sgx_ps_cap_t"],[4,"sgx_dh_session_role_t"],[4,"sgx_ra_key_type_t"],[4,"sgx_quote_sign_type_t"],[4,"sgx_generic_ecresult_t"],[4,"sgx_rsa_result_t"],[4,"sgx_exception_vector_t"],[4,"sgx_exception_type_t"],[4,"sgx_device_status_t"],[4,"sgx_status_t"]]};
initSearch(searchIndex);
