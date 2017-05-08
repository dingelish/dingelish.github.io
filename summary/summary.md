# Stable SGX APIs
## sgx_tkey_exchange

```
fn rsgx_ra_init(p_pub_key: &sgx_ec256_public_t, b_pse: i32) 
                -> SgxResult<sgx_ra_context_t>

fn rsgx_ra_init_ex(p_pub_key: &sgx_ec256_public_t,
                       b_pse: i32,
                       derive_key_cb: sgx_ra_derive_secret_keys_t)
                  -> SgxResult<sgx_ra_context_t>

fn rsgx_ra_get_keys(context: sgx_ra_context_t, keytype: sgx_ra_key_type_t)
                    -> SgxResult<sgx_ra_key_128_t>

fn rsgx_ra_close(context: sgx_ra_context_t) -> SgxError
```

## sgx_tcrypto

```
fn rsgx_sha256_msg<T: Copy>(src: &T) -> SgxResult<sgx_sha256_hash_t>

fn rsgx_sha256_slice<T: Copy>(src: &[T]) -> SgxResult<sgx_sha256_hash_t>

fn rsgx_rijndael128GCM_encrypt(key: &sgx_aes_gcm_128bit_key_t,
                               src: &[u8],
                               iv: &[u8],
                               aad: &[u8],
                               dst: &mut [u8],
                               mac: &mut sgx_aes_gcm_128bit_tag_t) -> SgxError
                                  
fn rsgx_rijndael128GCM_decrypt(key: &sgx_aes_gcm_128bit_key_t,
                               src: &[u8],
                               iv: &[u8],
                               aad: &[u8],
                               mac: &sgx_aes_gcm_128bit_tag_t,
                               dst: &mut [u8]) -> SgxError
                                  
fn rsgx_rijndael128_cmac_msg<T: Copy>(key: &sgx_cmac_128bit_key_t, 
                                      src: &T)
                                     -> SgxResult<sgx_cmac_128bit_tag_t>

fn rsgx_rijndael128_cmac_slice<T: Copy>(key: &sgx_cmac_128bit_key_t,
                                        src: &[T])
                                       -> SgxResult<sgx_cmac_128bit_tag_t>

fn rsgx_aes_ctr_encrypt(key: &sgx_aes_ctr_128bit_key_t, 
                        src: &[u8], 
                        ctr: &sgx_aes_ctr_128bit_ctr_t, 
                        ctr_inc_bits: u32,
                        dst: &mut [u8]) -> SgxError   
                           
fn rsgx_aes_ctr_decrypt(key: &sgx_aes_ctr_128bit_key_t,
                        src: &[u8],
                        ctr: &sgx_aes_ctr_128bit_ctr_t,
                        ctr_inc_bits: u32,
                        dst: &mut [u8]) -> SgxError    
```
```                           
struct SgxShaHandle

impl SgxShaHandle {
    fn new() -> Self
    fn init(&self) -> SgxError
    fn update_msg<T: Copy>(&self, src: &T) -> SgxError
    fn update_slice<T: Copy>(&self, src: &[T]) -> SgxError
    fn get_hash(&self) -> SgxResult<sgx_sha256_hash_t>
    fn close(&self) -> SgxError
}

impl Default for SgxShaHandle
impl Drop for SgxShaHandle
```
```
struct SgxCmacHandle

impl SgxCmacHandle {
    fn new() -> Self
    fn init(&self, key: &sgx_cmac_128bit_key_t) -> SgxError
    fn update_msg<T: Copy>(&self, src: &T) -> SgxError
    fn update_slice<T: Copy>(&self, src: &[T]) -> SgxError
    fn get_hash(&self) -> SgxResult<sgx_cmac_128bit_tag_t>
    fn close(&self) -> SgxError
}

impl Default for SgxCmacHandle
impl Drop for SgxCmacHandle
```
```
struct SgxEccHandle

impl SgxEccHandle {
    fn new() -> Self
    fn open(&self) -> SgxError
    fn create_key_pair(&self) -> SgxResult<(sgx_ec256_private_t, sgx_ec256_public_t)>
    fn check_point(&self, point: &sgx_ec256_public_t) -> SgxResult<bool>
    fn compute_shared_dhkey(&self, 
                            private_b: &sgx_ec256_private_t,
                            public_ga: &sgx_ec256_public_t)
                           -> SgxResult<sgx_ec256_dh_shared_t>
    fn ecdsa_sign_msg<T: Copy>(&self, 
                               data: &T, 
                               private: &sgx_ec256_private_t)
                               -> SgxResult<sgx_ec256_signature_t>
    fn ecdsa_sign_slice<T: Copy>(&self,
                                 data: &[T],
                                 private: &sgx_ec256_private_t)
                                 -> SgxResult<sgx_ec256_signature_t>
    fn ecdsa_verify_msg<T: Copy>(&self,
                                 data: &T,
                                 public: &sgx_ec256_public_t,
                                 signature: &sgx_ec256_signature_t)
                                 -> SgxResult<bool>
    fn ecdsa_verify_slice<T: Copy>(&self,
                                   data: &[T],
                                   public: &sgx_ec256_public_t,
                                   signature: &sgx_ec256_signature_t)
                                   -> SgxResult<bool>
    fn close(&self) -> SgxError
}

impl Default for SgxEccHandle
impl Drop for SgxEccHandle
```

## sgx_trts    

```
fn rsgx_read_rand(rand: &mut [u8]) -> SgxError

fn rsgx_register_exception_handler(is_first_handler: u32, exception_handler: sgx_exception_handler_t) -> Option<exception_handle>   

fn rsgx_unregister_exception_handler(handle: exception_handle) -> bool

fn rsgx_data_is_within_enclave<T: Copy>(data: &T) -> bool

fn rsgx_slice_is_within_enclave<T: Copy>(data: &[T]) -> bool

fn rsgx_raw_is_within_enclave(addr: * const u8, size: usize) -> bool

fn rsgx_data_is_outside_enclave<T: Copy>(data: &T) -> bool

fn rsgx_slice_is_outside_enclave<T: Copy>(data: &[T]) -> bool

fn rsgx_raw_is_outside_enclave(addr: * const u8, size: usize) -> bool
```

## sgx_tservice

```
fn rsgx_create_pse_session() -> SgxError

fn rsgx_close_pse_session() -> SgxError

fn rsgx_get_ps_sec_prop(security_property: &mut sgx_ps_sec_prop_desc_t) -> SgxError

fn rsgx_get_trusted_time(current_time: &mut sgx_time_t, 
                            time_source_nonce: &mut sgx_time_source_nonce_t) -> SgxError
                            
struct SgxMonotonicCounter

impl SgxMonotonicCounter {
    fn new(counter_value: &mut u32) -> SgxResult<Self>
    fn new_ex(owner_policy: u16,
              owner_attribute_mask: &sgx_attributes_t,
              counter_value: &mut u32) -> SgxResult<Self>
    fn destory(&self) -> SgxError
    fn increment(&self) -> SgxResult<u32>
    fn read(&self) -> SgxResult<u32>
}        

impl Drop for SgxMonotonicCounter
```

## sgx_tse


```
fn rsgx_create_report(target_info: &sgx_target_info_t,
                      report_data: &sgx_report_data_t) -> SgxResult<sgx_report_t>   

fn rsgx_verify_report(report: &sgx_report_t) -> SgxError

fn rsgx_get_key(key_request: &sgx_key_request_t) -> SgxResult<sgx_key_128bit_t>   
```

## sgx_tstdc

```
fn rsgx_cpuid(leaf: i32) -> SgxResult<sgx_cpuinfo_t>

fn rsgx_cpuidex(leaf: i32, subleaf: i32) -> SgxResult<sgx_cpuinfo_t>

fn rsgx_spin_lock(lock: &mut sgx_spinlock_t)

fn rsgx_spin_unlock(lock: &mut sgx_spinlock_t)

fn rsgx_thread_self() -> sgx_thread_t

fn rsgx_thread_equal(a: sgx_thread_t, b: sgx_thread_t) -> bool
```
```
struct SgxThreadMutex

impl SgxThreadMutex {
    fn new() -> Self
    fn lock(&self) -> SysError
    fn trylock(&self) -> SysError
    fn unlock(&self) -> SysError
    fn destory(&self) -> SysError
    fn get_raw(&self) -> &sgx_thread_mutex_t 
}

impl Send for SgxThreadMutex
impl Sync for SgxThreadMutex
```
```
struct SgxMutex<T: ?Sized>

impl<T> SgxMutex<T> {
    fn new(t: T) -> SgxMutex<T>
}

impl<T: ?Sized> SgxMutex<T> {
    fn lock(&self) -> SysResult<SgxMutexGuard<T>>
    fn try_lock(&self) -> SysResult<SgxMutexGuard<T>>
    fn into_inner(self) -> SysResult<T> where T: Sized
    fn get_mut(&mut self) -> SysResult<&mut T>
}

impl<T: ?Sized + Send> Send for SgxMutex<T>
impl<T: ?Sized + Send> Sync for SgxMutex<T>
impl<T: ?Sized> Drop for SgxMutex<T> 
impl<T: ?Sized + Default> Default for SgxMutex<T> 
```
```
struct SgxMutexGuard<'a, T: ?Sized + 'a>

impl<'a, T: ?Sized> !Send for SgxMutexGuard<'a, T>

impl<'mutex, T: ?Sized> Deref for SgxMutexGuard<'mutex, T> 

impl<'mutex, T: ?Sized> DerefMut for SgxMutexGuard<'mutex, T> 

impl<'a, T: ?Sized> Drop for SgxMutexGuard<'a, T>
```
```
fn guard_lock<'a, T: ?Sized>(guard: &SgxMutexGuard<'a, T>)
                            -> &'a SgxThreadMutex
```
```
unsafe fn raw_mutex(lock: &sgx_thread_mutex_t)
                   ->*mut sgx_thread_mutex_t
```
```
struct SgxThreadCond

impl SgxThreadCond {
    fn new() -> Self
    fn wait(&self, mutex: &SgxThreadMutex) -> SysError
    fn signal(&self) -> SysError
    fn broadcast(&self) -> SysError
    fn destory(&self) -> SysError
    fn get_raw(&self) -> &sgx_thread_cond_t
}

impl Send for SgxThreadCond
impl Sync for SgxThreadCond
```
```
struct SgxCond

impl SgxCond {
    fn new() -> Self
    fn wait<'a, T>(&self, guard: SgxMutexGuard<'a, T>)
                  -> SysResult<SgxMutexGuard<'a, T>>
    fn signal(&self) -> SysError
    fn broadcast(&self) -> SysError
}

impl Drop for SgxCond 
impl Default for SgxCond
```
```
unsafe fn raw_cond(lock: &sgx_thread_cond_t)
                  -> *mut sgx_thread_cond_t
```

## sgx_tdh

```
struct SgxDhMsg3Body

impl Clone for SgxDhMsg3Body
impl Default for SgxDhMsg3Body
```
```
struct SgxDhMsg3

impl SgxDhMsg3 {
    fn new() -> Self
    fn calc_raw_sealed_data_size(&self) -> u32
    unsafe fn to_raw_dh_msg3_t(&self,
                               p: *mut sgx_dh_msg3_t,
                               len: u32) -> Option<*mut sgx_dh_msg3_t>
    unsafe fn from_raw_dh_msg3_t(p: *mut sgx_dh_msg3_t, len: u32) -> Option<Self>
}

impl Clone for SgxDhMsg3
impl Default for SgxDhMsg3
```
```
struct SgxDhInitiator

impl SgxDhInitiator {
    fn init_session() -> Self
    fn proc_msg1(&mut self, msg1: &SgxDhMsg1, msg2: &mut SgxDhMsg2) -> SgxError
    fn proc_msg3(&mut self,
                 msg3: &SgxDhMsg3,
                 aek: &mut sgx_key_128bit_t,
                 responder_identity: &mut sgx_dh_session_enclave_identity_t)
                 -> SgxError
}

impl Copy for SgxDhInitiator
impl Clone for SgxDhInitiator
impl Default for SgxDhInitiator
```
```
struct SgxDhResponder

impl SgxDhResponder {
    fn init_session() -> Self
    fn gen_msg1(&mut self, msg1: &mut SgxDhMsg1) -> SgxError
    fn proc_msg2(&mut self,
                 msg2: &SgxDhMsg2,
                 msg3: &mut SgxDhMsg3,
                 aek: &mut sgx_key_128bit_t,
                 initiator_identity: &mut sgx_dh_session_enclave_identity_t)
                 -> SgxError
}

impl Copy for SgxDhResponder
impl Clone for SgxDhResponder
impl Default for SgxDhResponder
```

## sgx_tseal

```
struct SgxSealedData<T: ?Sized>

impl<T: Copy> SgxSealedData<T> {
    fn new() -> Self
    unsafe fn from_raw_sealed_data_t(p: *mut sgx_sealed_data_t, len: u32) -> Option<Self>
    fn seal_data(additional_text: &[u8], encrypt_text: &T) -> SgxResult<Self>
    fn seal_data_ex(key_policy: u16, attribute_mask: sgx_attributes_t, misc_mask: sgx_misc_select_t, additional_text: &[u8], encrypt_text: &T) -> SgxResult<Self>
    fn unseal_data(&self) -> SgxResult<SgxUnsealedData<T>>
}

impl<T: Copy> SgxSealedData<[T]> {
    fn new() -> Self
    unsafe fn from_raw_sealed_data_t(p: *mut sgx_sealed_data_t, len: u32) -> Option<Self>
    fn seal_data(additional_text: &[u8], encrypt_text: &[T]) -> SgxResult<Self>
    fn seal_data_ex(key_policy: u16, attribute_mask: sgx_attributes_t, misc_mask: sgx_misc_select_t, additional_text: &[u8], encrypt_text: &[T]) -> SgxResult<Self>
    fn unseal_data(&self) -> SgxResult<SgxUnsealedData<[T]>>
}

impl<T: ?Sized> SgxSealedData<T> {
    fn get_payload_size(&self) -> u32
    fn get_payload_tag(&self) -> &[u8; 16]
    fn get_key_request(&self) -> &sgx_key_request_t
    fn get_encrypt_txt(&self) -> &[u8]
    fn get_additional_txt(&self) -> &[u8]
    fn calc_raw_sealed_data_size(add_mac_txt_size: u32, encrypt_txt_size: u32) -> u32
    fn get_add_mac_txt_len(&self) -> u32
    fn get_encrypt_txt_len(&self) -> u32
    unsafe fn to_raw_sealed_data_t(&self, p: *mut sgx_sealed_data_t, len: u32) -> Option<*mut sgx_sealed_data_t>
}

impl<T> Default for SgxSealedData<T>
impl<T> Default for SgxSealedData<[T]>
impl<T: ?Sized> Clone for SgxSealedData<T>s

```
```
struct SgxUnsealedData<T: ?Sized>

impl<T: ?Sized> SgxUnsealedData<T> {
    fn get_payload_size(&self) -> u32
    fn get_decrypt_txt(&self) -> &T
    fn get_additional_txt(&self) -> &[u8]
}

impl<T: Default> Default for SgxUnsealedData<T>
impl<T> Default for SgxUnsealedData<[T]>
impl<T: Clone + ?Sized> Clone for SgxUnsealedData<T>
```


# Unstable SGX APIs
## sgx_trts
```
fn rsgx_get_thread_data() -> * const u8

fn rsgx_get_enclave_base() -> * const u8

fn rsgx_get_heap_base() -> * const u8

fn rsgx_get_heap_size() -> usize
```

## sgx_types
```
const THREAD_SELF_ADDR:         ::size_t = 0;
const THREAD_LAST_SP_ADDR:      ::size_t = (SE_WORDSIZE * 1);
const THREAD_STACK_BASE_ADDR:   ::size_t = (SE_WORDSIZE * 2);
const THREAD_STACK_LIMIT_ADDR:  ::size_t = (SE_WORDSIZE * 3);
const THREAD_STACK_SSA_GPR:     ::size_t = (SE_WORDSIZE * 4);
```



