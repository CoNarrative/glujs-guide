Ext.data.JsonP.glu_test_MemoryTable({"mixedInto":[],"tagname":"class","extends":null,"alternateClassNames":[],"inheritdoc":null,"parentMixins":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"create","id":"method-create"},{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"each","id":"method-each"},{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"get","id":"method-get"},{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"list","id":"method-list"},{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"remove","id":"method-remove"},{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"replace","id":"method-replace"},{"tagname":"method","owner":"glu.test.MemoryTable","meta":{},"name":"update","id":"method-update"}],"event":[],"property":[],"css_var":[]},"uses":[],"subclasses":[],"name":"glu.test.MemoryTable","aliases":{},"superclasses":[],"component":false,"html_meta":{},"id":"class-glu.test.MemoryTable","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/test_data.html#glu-test-MemoryTable' target='_blank'>test_data.js</a></div></pre><div class='doc-contents'><p>An in-memory table for use with glu.test.ajax</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-create' class='name expandable'>create</a>( <span class='pre'>Object newData</span> )</div><div class='description'><div class='short'>Creates a new row ...</div><div class='long'><p>Creates a new row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newData</span> : Object<div class='sub-desc'><p>The new row</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-each' class='name expandable'>each</a>( <span class='pre'>String id, Function op</span> )</div><div class='description'><div class='short'>Iterates over items in the table ...</div><div class='long'><p>Iterates over items in the table</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>op</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-get' class='name expandable'>get</a>( <span class='pre'>String id</span> ) : Object</div><div class='description'><div class='short'>Gets a stored object by id ...</div><div class='long'><p>Gets a stored object by id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-list' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-list' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-list' class='name expandable'>list</a>( <span class='pre'>Object query, Object filterFn</span> ) : Object</div><div class='description'><div class='short'>Return a list of rows as an array ...</div><div class='long'><p>Return a list of rows as an array</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : Object<div class='sub-desc'><p>The query expressed as an object with a number of named parameters</p>\n</div></li><li><span class='pre'>filterFn</span> : Object<div class='sub-desc'><p>An optional filter function</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The query named parameters are:</p>\n\n<ul>\n<li><code>start</code> The index at which to start</li>\n<li><code>limit</code> Number of rows to return</li>\n<li><code>sorters</code> An array of sorters on which to sort</li>\n<li><code>filters</code> An array of filters</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-remove' class='name expandable'>remove</a>( <span class='pre'>Object ids</span> ) : Object</div><div class='description'><div class='short'>Removes one or more rows ...</div><div class='long'><p>Removes one or more rows</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ids</span> : Object<div class='sub-desc'><p>The ids of the rows to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-replace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-replace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-replace' class='name expandable'>replace</a>( <span class='pre'>String/Array ids, Object newData</span> ) : Object</div><div class='description'><div class='short'>Replaces an existing row in its entirey. ...</div><div class='long'><p>Replaces an existing row in its entirey. Unlike update, all fields will be overwritten</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ids</span> : String/Array<div class='sub-desc'><p>An id or array of ids</p>\n</div></li><li><span class='pre'>newData</span> : Object<div class='sub-desc'><p>The new row</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.MemoryTable'>glu.test.MemoryTable</span><br/><a href='source/test_data.html#glu-test-MemoryTable-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.MemoryTable-method-update' class='name expandable'>update</a>( <span class='pre'>String/Array ids, Object newData</span> ) : Object</div><div class='description'><div class='short'>Updates one or more rows, replacing only the provided fields ...</div><div class='long'><p>Updates one or more rows, replacing <em>only</em> the provided fields</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ids</span> : String/Array<div class='sub-desc'><p>An id or array of ids</p>\n</div></li><li><span class='pre'>newData</span> : Object<div class='sub-desc'><p>The field values to be overwritten</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","files":[{"href":"test_data.html#glu-test-MemoryTable","filename":"test_data.js"}]});