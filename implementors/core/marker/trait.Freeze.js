(function() {var implementors = {};
implementors["alloc"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>","synthetic":true,"types":["alloc::alloc::Global"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A&gt; Freeze for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'a, B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"type\" href=\"alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::borrow::Cow"]},{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>","synthetic":true,"types":["alloc::collections::TryReserveError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>","synthetic":true,"types":["alloc::collections::TryReserveErrorKind"]},{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":true,"types":["alloc::string::String"]},{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>","synthetic":true,"types":["alloc::string::FromUtf8Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/string/struct.FromUtf16Error.html\" title=\"struct alloc::string::FromUtf16Error\">FromUtf16Error</a>","synthetic":true,"types":["alloc::string::FromUtf16Error"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"alloc/string/struct.Drain.html\" title=\"struct alloc::string::Drain\">Drain</a>&lt;'a&gt;","synthetic":true,"types":["alloc::string::Drain"]},{"text":"impl&lt;'a, T, F, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.DrainFilter.html\" title=\"struct alloc::vec::DrainFilter\">DrainFilter</a>&lt;'a, T, F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::vec::drain_filter::DrainFilter"]},{"text":"impl&lt;'a, T, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'a, T, A&gt;","synthetic":true,"types":["alloc::vec::drain::Drain"]},{"text":"impl&lt;T, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::vec::into_iter::IntoIter"]},{"text":"impl&lt;T, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::vec::Vec"]}];
implementors["kernel"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"kernel/buffer/struct.Buffer.html\" title=\"struct kernel::buffer::Buffer\">Buffer</a>&lt;'a&gt;","synthetic":true,"types":["kernel::buffer::Buffer"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/chrdev/struct.Registration.html\" title=\"struct kernel::chrdev::Registration\">Registration</a>&lt;N&gt;","synthetic":true,"types":["kernel::chrdev::Registration"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/clk/struct.Clk.html\" title=\"struct kernel::clk::Clk\">Clk</a>","synthetic":true,"types":["kernel::clk::Clk"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/clk/struct.EnabledClk.html\" title=\"struct kernel::clk::EnabledClk\">EnabledClk</a>","synthetic":true,"types":["kernel::clk::EnabledClk"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/cred/struct.Credential.html\" title=\"struct kernel::cred::Credential\">Credential</a>","synthetic":true,"types":["kernel::cred::Credential"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"kernel/cred/struct.CredentialRef.html\" title=\"struct kernel::cred::CredentialRef\">CredentialRef</a>&lt;'a&gt;","synthetic":true,"types":["kernel::cred::CredentialRef"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/device/struct.Device.html\" title=\"struct kernel::device::Device\">Device</a>","synthetic":true,"types":["kernel::device::Device"]},{"text":"impl&lt;T, U, V&gt; !Freeze for <a class=\"struct\" href=\"kernel/device/struct.Data.html\" title=\"struct kernel::device::Data\">Data</a>&lt;T, U, V&gt;","synthetic":true,"types":["kernel::device::Data"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/driver/struct.Registration.html\" title=\"struct kernel::driver::Registration\">Registration</a>&lt;T&gt;","synthetic":true,"types":["kernel::driver::Registration"]},{"text":"impl&lt;T, U, const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/driver/struct.IdArray.html\" title=\"struct kernel::driver::IdArray\">IdArray</a>&lt;T, U, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"kernel/driver/trait.RawDeviceId.html\" title=\"trait kernel::driver::RawDeviceId\">RawDeviceId</a>&gt;::<a class=\"type\" href=\"kernel/driver/trait.RawDeviceId.html#associatedtype.RawType\" title=\"type kernel::driver::RawDeviceId::RawType\">RawType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::driver::IdArray"]},{"text":"impl&lt;'a, T, U&gt; Freeze for <a class=\"struct\" href=\"kernel/driver/struct.IdTable.html\" title=\"struct kernel::driver::IdTable\">IdTable</a>&lt;'a, T, U&gt;","synthetic":true,"types":["kernel::driver::IdTable"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/driver/struct.Module.html\" title=\"struct kernel::driver::Module\">Module</a>&lt;T&gt;","synthetic":true,"types":["kernel::driver::Module"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/prelude/struct.Error.html\" title=\"struct kernel::prelude::Error\">Error</a>","synthetic":true,"types":["kernel::error::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/file/struct.File.html\" title=\"struct kernel::file::File\">File</a>","synthetic":true,"types":["kernel::file::File"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/file/struct.FileDescriptorReservation.html\" title=\"struct kernel::file::FileDescriptorReservation\">FileDescriptorReservation</a>","synthetic":true,"types":["kernel::file::FileDescriptorReservation"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/file_operations/struct.PollTable.html\" title=\"struct kernel::file_operations::PollTable\">PollTable</a>","synthetic":true,"types":["kernel::file_operations::PollTable"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel/file_operations/enum.SeekFrom.html\" title=\"enum kernel::file_operations::SeekFrom\">SeekFrom</a>","synthetic":true,"types":["kernel::file_operations::SeekFrom"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/file_operations/struct.ToUse.html\" title=\"struct kernel::file_operations::ToUse\">ToUse</a>","synthetic":true,"types":["kernel::file_operations::ToUse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/file_operations/struct.IoctlCommand.html\" title=\"struct kernel::file_operations::IoctlCommand\">IoctlCommand</a>","synthetic":true,"types":["kernel::file_operations::IoctlCommand"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/gpio/struct.RegistrationWithIrqChip.html\" title=\"struct kernel::gpio::RegistrationWithIrqChip\">RegistrationWithIrqChip</a>&lt;T&gt;","synthetic":true,"types":["kernel::gpio::irqchip::RegistrationWithIrqChip"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel/gpio/enum.LineDirection.html\" title=\"enum kernel::gpio::LineDirection\">LineDirection</a>","synthetic":true,"types":["kernel::gpio::LineDirection"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/gpio/struct.ToUse.html\" title=\"struct kernel::gpio::ToUse\">ToUse</a>","synthetic":true,"types":["kernel::gpio::ToUse"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/gpio/struct.Registration.html\" title=\"struct kernel::gpio::Registration\">Registration</a>&lt;T&gt;","synthetic":true,"types":["kernel::gpio::Registration"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/irq/struct.IrqData.html\" title=\"struct kernel::irq::IrqData\">IrqData</a>","synthetic":true,"types":["kernel::irq::IrqData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/irq/struct.LockedIrqData.html\" title=\"struct kernel::irq::LockedIrqData\">LockedIrqData</a>","synthetic":true,"types":["kernel::irq::LockedIrqData"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel/irq/enum.ExtraResult.html\" title=\"enum kernel::irq::ExtraResult\">ExtraResult</a>","synthetic":true,"types":["kernel::irq::ExtraResult"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/irq/struct.ToUse.html\" title=\"struct kernel::irq::ToUse\">ToUse</a>","synthetic":true,"types":["kernel::irq::ToUse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/irq/struct.Type.html\" title=\"struct kernel::irq::Type\">Type</a>","synthetic":true,"types":["kernel::irq::Type"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/irq/struct.Descriptor.html\" title=\"struct kernel::irq::Descriptor\">Descriptor</a>","synthetic":true,"types":["kernel::irq::Descriptor"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"kernel/irq/struct.ChainedGuard.html\" title=\"struct kernel::irq::ChainedGuard\">ChainedGuard</a>&lt;'a&gt;","synthetic":true,"types":["kernel::irq::ChainedGuard"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/irq/struct.Domain.html\" title=\"struct kernel::irq::Domain\">Domain</a>","synthetic":true,"types":["kernel::irq::Domain"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/miscdev/struct.Registration.html\" title=\"struct kernel::miscdev::Registration\">Registration</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"kernel/file_operations/trait.FileOperations.html\" title=\"trait kernel::file_operations::FileOperations\">FileOperations</a>&gt;::<a class=\"type\" href=\"kernel/file_operations/trait.FileOperations.html#associatedtype.OpenData\" title=\"type kernel::file_operations::FileOperations::OpenData\">OpenData</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::miscdev::Registration"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/miscdev/struct.Module.html\" title=\"struct kernel::miscdev::Module\">Module</a>&lt;T&gt;","synthetic":true,"types":["kernel::miscdev::Module"]},{"text":"impl&lt;const ORDER:&nbsp;<a class=\"primitive\" href=\"core/primitive.u32.html\">u32</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/pages/struct.Pages.html\" title=\"struct kernel::pages::Pages\">Pages</a>&lt;ORDER&gt;","synthetic":true,"types":["kernel::pages::Pages"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/power/struct.NoOperations.html\" title=\"struct kernel::power::NoOperations\">NoOperations</a>&lt;T&gt;","synthetic":true,"types":["kernel::power::NoOperations"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/revocable/struct.Revocable.html\" title=\"struct kernel::revocable::Revocable\">Revocable</a>&lt;T&gt;","synthetic":true,"types":["kernel::revocable::Revocable"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/revocable/struct.RevocableGuard.html\" title=\"struct kernel::revocable::RevocableGuard\">RevocableGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["kernel::revocable::RevocableGuard"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel/str/enum.CStrConvertError.html\" title=\"enum kernel::str::CStrConvertError\">CStrConvertError</a>","synthetic":true,"types":["kernel::str::CStrConvertError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/str/struct.CStr.html\" title=\"struct kernel::str::CStr\">CStr</a>","synthetic":true,"types":["kernel::str::CStr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/task/struct.Task.html\" title=\"struct kernel::task::Task\">Task</a>","synthetic":true,"types":["kernel::task::Task"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"kernel/task/struct.TaskRef.html\" title=\"struct kernel::task::TaskRef\">TaskRef</a>&lt;'a&gt;","synthetic":true,"types":["kernel::task::TaskRef"]},{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"struct\" href=\"kernel/linked_list/struct.Cursor.html\" title=\"struct kernel::linked_list::Cursor\">Cursor</a>&lt;'a, G&gt;","synthetic":true,"types":["kernel::raw_list::Cursor"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/linked_list/struct.Links.html\" title=\"struct kernel::linked_list::Links\">Links</a>&lt;T&gt;","synthetic":true,"types":["kernel::raw_list::Links"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"kernel/linked_list/struct.List.html\" title=\"struct kernel::linked_list::List\">List</a>&lt;G&gt;","synthetic":true,"types":["kernel::linked_list::List"]},{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"struct\" href=\"kernel/linked_list/struct.CursorMut.html\" title=\"struct kernel::linked_list::CursorMut\">CursorMut</a>&lt;'a, G&gt;","synthetic":true,"types":["kernel::linked_list::CursorMut"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"kernel/rbtree/struct.RBTree.html\" title=\"struct kernel::rbtree::RBTree\">RBTree</a>&lt;K, V&gt;","synthetic":true,"types":["kernel::rbtree::RBTree"]},{"text":"impl&lt;'a, K, V&gt; Freeze for <a class=\"struct\" href=\"kernel/rbtree/struct.RBTreeIterator.html\" title=\"struct kernel::rbtree::RBTreeIterator\">RBTreeIterator</a>&lt;'a, K, V&gt;","synthetic":true,"types":["kernel::rbtree::RBTreeIterator"]},{"text":"impl&lt;'a, K, V&gt; Freeze for <a class=\"struct\" href=\"kernel/rbtree/struct.RBTreeIteratorMut.html\" title=\"struct kernel::rbtree::RBTreeIteratorMut\">RBTreeIteratorMut</a>&lt;'a, K, V&gt;","synthetic":true,"types":["kernel::rbtree::RBTreeIteratorMut"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"kernel/rbtree/struct.RBTreeNodeReservation.html\" title=\"struct kernel::rbtree::RBTreeNodeReservation\">RBTreeNodeReservation</a>&lt;K, V&gt;","synthetic":true,"types":["kernel::rbtree::RBTreeNodeReservation"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"kernel/rbtree/struct.RBTreeNode.html\" title=\"struct kernel::rbtree::RBTreeNode\">RBTreeNode</a>&lt;K, V&gt;","synthetic":true,"types":["kernel::rbtree::RBTreeNode"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.Ref.html\" title=\"struct kernel::sync::Ref\">Ref</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::arc::Ref"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.RefBorrow.html\" title=\"struct kernel::sync::RefBorrow\">RefBorrow</a>&lt;'a, T&gt;","synthetic":true,"types":["kernel::sync::arc::RefBorrow"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.UniqueRef.html\" title=\"struct kernel::sync::UniqueRef\">UniqueRef</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::arc::UniqueRef"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"kernel/sync/struct.CondVar.html\" title=\"struct kernel::sync::CondVar\">CondVar</a>","synthetic":true,"types":["kernel::sync::condvar::CondVar"]},{"text":"impl&lt;'a, L:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.GuardMut.html\" title=\"struct kernel::sync::GuardMut\">GuardMut</a>&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;L as <a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a>&gt;::<a class=\"type\" href=\"kernel/sync/trait.Lock.html#associatedtype.GuardContext\" title=\"type kernel::sync::Lock::GuardContext\">GuardContext</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::sync::guard::GuardMut"]},{"text":"impl&lt;'a, L:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.Guard.html\" title=\"struct kernel::sync::Guard\">Guard</a>&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;L as <a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a>&gt;::<a class=\"type\" href=\"kernel/sync/trait.Lock.html#associatedtype.GuardContext\" title=\"type kernel::sync::Lock::GuardContext\">GuardContext</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::sync::guard::Guard"]},{"text":"impl&lt;T, L&gt; !Freeze for <a class=\"struct\" href=\"kernel/sync/struct.LockedBy.html\" title=\"struct kernel::sync::LockedBy\">LockedBy</a>&lt;T, L&gt;","synthetic":true,"types":["kernel::sync::locked_by::LockedBy"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/sync/struct.Mutex.html\" title=\"struct kernel::sync::Mutex\">Mutex</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::mutex::Mutex"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/sync/struct.RevocableMutex.html\" title=\"struct kernel::sync::RevocableMutex\">RevocableMutex</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::revocable_mutex::RevocableMutex"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.RevocableMutexGuard.html\" title=\"struct kernel::sync::RevocableMutexGuard\">RevocableMutexGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["kernel::sync::revocable_mutex::RevocableMutexGuard"]},{"text":"impl&lt;L&gt; !Freeze for <a class=\"struct\" href=\"kernel/sync/struct.SeqLock.html\" title=\"struct kernel::sync::SeqLock\">SeqLock</a>&lt;L&gt;","synthetic":true,"types":["kernel::sync::seqlock::SeqLock"]},{"text":"impl&lt;'a, L:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.SeqLockReadGuard.html\" title=\"struct kernel::sync::SeqLockReadGuard\">SeqLockReadGuard</a>&lt;'a, L&gt;","synthetic":true,"types":["kernel::sync::seqlock::SeqLockReadGuard"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/sync/struct.SpinLock.html\" title=\"struct kernel::sync::SpinLock\">SpinLock</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::spinlock::SpinLock"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/sysctl/struct.Sysctl.html\" title=\"struct kernel::sysctl::Sysctl\">Sysctl</a>&lt;T&gt;","synthetic":true,"types":["kernel::sysctl::Sysctl"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/io_mem/struct.Resource.html\" title=\"struct kernel::io_mem::Resource\">Resource</a>","synthetic":true,"types":["kernel::io_mem::Resource"]},{"text":"impl&lt;const SIZE:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/io_mem/struct.IoMem.html\" title=\"struct kernel::io_mem::IoMem\">IoMem</a>&lt;SIZE&gt;","synthetic":true,"types":["kernel::io_mem::IoMem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/iov_iter/struct.IovIter.html\" title=\"struct kernel::iov_iter::IovIter\">IovIter</a>","synthetic":true,"types":["kernel::iov_iter::IovIter"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel/of/enum.DeviceId.html\" title=\"enum kernel::of::DeviceId\">DeviceId</a>","synthetic":true,"types":["kernel::of::DeviceId"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/platform/struct.Adapter.html\" title=\"struct kernel::platform::Adapter\">Adapter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::platform::Adapter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/platform/struct.Device.html\" title=\"struct kernel::platform::Device\">Device</a>","synthetic":true,"types":["kernel::platform::Device"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/struct.Mode.html\" title=\"struct kernel::Mode\">Mode</a>","synthetic":true,"types":["kernel::types::Mode"]},{"text":"impl&lt;T, F&gt; Freeze for <a class=\"struct\" href=\"kernel/struct.ScopeGuard.html\" title=\"struct kernel::ScopeGuard\">ScopeGuard</a>&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::types::ScopeGuard"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/struct.Opaque.html\" title=\"struct kernel::Opaque\">Opaque</a>&lt;T&gt;","synthetic":true,"types":["kernel::types::Opaque"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/user_ptr/struct.UserSlicePtr.html\" title=\"struct kernel::user_ptr::UserSlicePtr\">UserSlicePtr</a>","synthetic":true,"types":["kernel::user_ptr::UserSlicePtr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/user_ptr/struct.UserSlicePtrReader.html\" title=\"struct kernel::user_ptr::UserSlicePtrReader\">UserSlicePtrReader</a>","synthetic":true,"types":["kernel::user_ptr::UserSlicePtrReader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/user_ptr/struct.UserSlicePtrWriter.html\" title=\"struct kernel::user_ptr::UserSlicePtrWriter\">UserSlicePtrWriter</a>","synthetic":true,"types":["kernel::user_ptr::UserSlicePtrWriter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/struct.ThisModule.html\" title=\"struct kernel::ThisModule\">ThisModule</a>","synthetic":true,"types":["kernel::ThisModule"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"kernel/struct.KParamGuard.html\" title=\"struct kernel::KParamGuard\">KParamGuard</a>&lt;'a&gt;","synthetic":true,"types":["kernel::KParamGuard"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()