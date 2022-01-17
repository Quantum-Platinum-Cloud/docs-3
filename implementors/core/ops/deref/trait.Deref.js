(function() {var implementors = {};
implementors["alloc"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: ~const<a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;B&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;T, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::vec::Vec"]}];
implementors["kernel"] = [{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/cred/struct.CredentialRef.html\" title=\"struct kernel::cred::CredentialRef\">CredentialRef</a>&lt;'_&gt;","synthetic":false,"types":["kernel::cred::CredentialRef"]},{"text":"impl&lt;T, U, V&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/device/struct.Data.html\" title=\"struct kernel::device::Data\">Data</a>&lt;T, U, V&gt;","synthetic":false,"types":["kernel::device::Data"]},{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/irq/struct.LockedIrqData.html\" title=\"struct kernel::irq::LockedIrqData\">LockedIrqData</a>","synthetic":false,"types":["kernel::irq::LockedIrqData"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/revocable/struct.RevocableGuard.html\" title=\"struct kernel::revocable::RevocableGuard\">RevocableGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["kernel::revocable::RevocableGuard"]},{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/str/struct.CStr.html\" title=\"struct kernel::str::CStr\">CStr</a>","synthetic":false,"types":["kernel::str::CStr"]},{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/task/struct.TaskRef.html\" title=\"struct kernel::task::TaskRef\">TaskRef</a>&lt;'_&gt;","synthetic":false,"types":["kernel::task::TaskRef"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.Ref.html\" title=\"struct kernel::sync::Ref\">Ref</a>&lt;T&gt;","synthetic":false,"types":["kernel::sync::arc::Ref"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.RefBorrow.html\" title=\"struct kernel::sync::RefBorrow\">RefBorrow</a>&lt;'_, T&gt;","synthetic":false,"types":["kernel::sync::arc::RefBorrow"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.UniqueRef.html\" title=\"struct kernel::sync::UniqueRef\">UniqueRef</a>&lt;T&gt;","synthetic":false,"types":["kernel::sync::arc::UniqueRef"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.GuardMut.html\" title=\"struct kernel::sync::GuardMut\">GuardMut</a>&lt;'_, L&gt;","synthetic":false,"types":["kernel::sync::guard::GuardMut"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.Guard.html\" title=\"struct kernel::sync::Guard\">Guard</a>&lt;'_, L&gt;","synthetic":false,"types":["kernel::sync::guard::Guard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.RevocableMutexGuard.html\" title=\"struct kernel::sync::RevocableMutexGuard\">RevocableMutexGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["kernel::sync::revocable_mutex::RevocableMutexGuard"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.CreatableLock.html\" title=\"trait kernel::sync::CreatableLock\">CreatableLock</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.SeqLockReadGuard.html\" title=\"struct kernel::sync::SeqLockReadGuard\">SeqLockReadGuard</a>&lt;'_, L&gt;","synthetic":false,"types":["kernel::sync::seqlock::SeqLockReadGuard"]},{"text":"impl&lt;T, F:&nbsp;<a class=\"trait\" href=\"core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T)&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/struct.ScopeGuard.html\" title=\"struct kernel::ScopeGuard\">ScopeGuard</a>&lt;T, F&gt;","synthetic":false,"types":["kernel::types::ScopeGuard"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()