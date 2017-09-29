initSidebarItems({"constant":[["ONCE_INIT","Initialization value for static [`Once`] values."]],"enum":[["TryLockError","An enumeration of possible errors which can occur while calling the [`try_lock`] method."]],"mod":[["atomic","Atomic types"]],"struct":[["Arc","A thread-safe reference-counting pointer. 'Arc' stands for 'Atomically Reference Counted'."],["Barrier","A barrier enables multiple threads to synchronize the beginning of some computation."],["BarrierWaitResult","A `BarrierWaitResult` is returned by [`wait`] when all threads in the [`Barrier`] have rendezvoused."],["Once","A synchronization primitive which can be used to run a one-time global initialization. Useful for one-time initialization for FFI or related functionality. This type can only be constructed with the [`ONCE_INIT`] value."],["OnceState","State yielded to the [`call_once_force`] method which can be used to query whether the [`Once`] was previously poisoned or not."],["PoisonError","A type of error which can be returned whenever a lock is acquired."],["SgxCondvar","A Condition Variable"],["SgxMutex","A mutual exclusion primitive useful for protecting shared data"],["SgxMutexGuard",""],["SgxReentrantMutex","A re-entrant mutual exclusion"],["SgxReentrantMutexGuard","An RAII implementation of a \"scoped lock\" of a mutex. When this structure is dropped (falls out of scope), the lock will be unlocked."],["SgxReentrantThreadMutex","The structure of sgx mutex."],["SgxRwLock","A reader-writer lock"],["SgxRwLockReadGuard","RAII structure used to release the shared read access of a lock when dropped."],["SgxRwLockWriteGuard","RAII structure used to release the exclusive write access of a lock when dropped."],["SgxSpinlock",""],["SgxSpinlockGuard",""],["SgxThreadCondvar","The structure of sgx condition."],["SgxThreadMutex","The structure of sgx mutex."],["SgxThreadRwLock","An OS-based reader-writer lock."],["SgxThreadSpinlock",""],["Weak","`Weak` is a version of [`Arc`] that holds a non-owning reference to the managed value. The value is accessed by calling [`upgrade`] on the `Weak` pointer, which returns an [`Option`]`<`[`Arc`]`<T>>`."]],"type":[["LockResult","A type alias for the result of a lock method which can be poisoned."],["TryLockResult","A type alias for the result of a nonblocking locking method."]]});