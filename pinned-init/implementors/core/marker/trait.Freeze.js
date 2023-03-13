(function() {var implementors = {};
implementors["alloc"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>","synthetic":true,"types":["alloc::alloc::Global"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A&gt; Freeze for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::boxed::Box"]},{"text":"impl Freeze for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>","synthetic":true,"types":["alloc::collections::TryReserveError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>","synthetic":true,"types":["alloc::collections::TryReserveErrorKind"]},{"text":"impl&lt;'a, T, F, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.DrainFilter.html\" title=\"struct alloc::vec::DrainFilter\">DrainFilter</a>&lt;'a, T, F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::vec::drain_filter::DrainFilter"]},{"text":"impl&lt;'a, T, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'a, T, A&gt;","synthetic":true,"types":["alloc::vec::drain::Drain"]},{"text":"impl&lt;T, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::vec::into_iter::IntoIter"]},{"text":"impl&lt;T, A&gt; Freeze for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["alloc::vec::Vec"]}];
implementors["kernel"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>","synthetic":true,"types":["kernel::error::Error"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"kernel/init/struct.StackInit.html\" title=\"struct kernel::init::StackInit\">StackInit</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::init::StackInit"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel/str/enum.CStrConvertError.html\" title=\"enum kernel::str::CStrConvertError\">CStrConvertError</a>","synthetic":true,"types":["kernel::str::CStrConvertError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/str/struct.CStr.html\" title=\"struct kernel::str::CStr\">CStr</a>","synthetic":true,"types":["kernel::str::CStr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/str/struct.CString.html\" title=\"struct kernel::str::CString\">CString</a>","synthetic":true,"types":["kernel::str::CString"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.Arc.html\" title=\"struct kernel::sync::Arc\">Arc</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::arc::Arc"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.ArcBorrow.html\" title=\"struct kernel::sync::ArcBorrow\">ArcBorrow</a>&lt;'a, T&gt;","synthetic":true,"types":["kernel::sync::arc::ArcBorrow"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;","synthetic":true,"types":["kernel::sync::arc::UniqueArc"]},{"text":"impl&lt;T, F&gt; Freeze for <a class=\"struct\" href=\"kernel/types/struct.ScopeGuard.html\" title=\"struct kernel::types::ScopeGuard\">ScopeGuard</a>&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::types::ScopeGuard"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"kernel/types/struct.Opaque.html\" title=\"struct kernel::types::Opaque\">Opaque</a>&lt;T&gt;","synthetic":true,"types":["kernel::types::Opaque"]},{"text":"impl&lt;L, R&gt; Freeze for <a class=\"enum\" href=\"kernel/types/enum.Either.html\" title=\"enum kernel::types::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["kernel::types::Either"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel/struct.ThisModule.html\" title=\"struct kernel::ThisModule\">ThisModule</a>","synthetic":true,"types":["kernel::ThisModule"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()