Ext.data.JsonP.glu_test_Backend({"mixedInto":[],"tagname":"class","extends":null,"alternateClassNames":[],"inheritdoc":null,"parentMixins":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"glu.test.Backend","meta":{},"name":"capture","id":"method-capture"},{"tagname":"method","owner":"glu.test.Backend","meta":{},"name":"getRequestsFor","id":"method-getRequestsFor"},{"tagname":"method","owner":"glu.test.Backend","meta":{},"name":"register","id":"method-register"},{"tagname":"method","owner":"glu.test.Backend","meta":{},"name":"respond","id":"method-respond"},{"tagname":"method","owner":"glu.test.Backend","meta":{},"name":"respondTo","id":"method-respondTo"}],"event":[],"property":[],"css_var":[]},"uses":[],"subclasses":[],"name":"glu.test.Backend","aliases":{},"superclasses":[],"component":false,"html_meta":{},"id":"class-glu.test.Backend","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/test_ajax.html#glu-test-Backend' target='_blank'>test_ajax.js</a></div></pre><div class='doc-contents'><p>A backend object for use with specification-style testing</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-capture' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.Backend'>glu.test.Backend</span><br/><a href='source/test_ajax.html#glu-test-Backend-method-capture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.Backend-method-capture' class='name expandable'>capture</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Start intercepting AJAX calls using this backend ...</div><div class='long'><p>Start intercepting AJAX calls using this backend</p>\n</div></div></div><div id='method-getRequestsFor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.Backend'>glu.test.Backend</span><br/><a href='source/test_ajax.html#glu-test-Backend-method-getRequestsFor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.Backend-method-getRequestsFor' class='name expandable'>getRequestsFor</a>( <span class='pre'>Object routeName</span> ) : Object</div><div class='description'><div class='short'>Returns the responses in the request queue for that route ...</div><div class='long'><p>Returns the responses in the request queue for that route</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>routeName</span> : Object<div class='sub-desc'><p>The name of the route</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the request object</p>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.Backend'>glu.test.Backend</span><br/><a href='source/test_ajax.html#glu-test-Backend-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.Backend-method-register' class='name expandable'>register</a>( <span class='pre'>Object config, String name, String url, Function handle</span> )</div><div class='description'><div class='short'>Register a new route ...</div><div class='long'><p>Register a new route</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The route configuration in the form</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the route</p>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url of the route</p>\n</div></li><li><span class='pre'>handle</span> : Function<div class='sub-desc'><p>The handler for the route</p>\n</div></li></ul></div></div></div><div id='method-respond' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.Backend'>glu.test.Backend</span><br/><a href='source/test_ajax.html#glu-test-Backend-method-respond' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.Backend-method-respond' class='name expandable'>respond</a>( <span class='pre'>Object request, [Object ajaxResponse]</span> )</div><div class='description'><div class='short'>Respond to a given request (will remove the request from the route's queue) ...</div><div class='long'><p>Respond to a given request (will remove the request from the route's queue)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'><p>The request to fulfill</p>\n</div></li><li><span class='pre'>ajaxResponse</span> : Object (optional)<div class='sub-desc'><p>The response if overriding the default response</p>\n</div></li></ul></div></div></div><div id='method-respondTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.test.Backend'>glu.test.Backend</span><br/><a href='source/test_ajax.html#glu-test-Backend-method-respondTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.test.Backend-method-respondTo' class='name expandable'>respondTo</a>( <span class='pre'>Object routeName, [Object ajaxResponse]</span> )</div><div class='description'><div class='short'>Respond to the first item in the routes queue ...</div><div class='long'><p>Respond to the first item in the routes queue</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>routeName</span> : Object<div class='sub-desc'><p>The name of the route</p>\n</div></li><li><span class='pre'>ajaxResponse</span> : Object (optional)<div class='sub-desc'><p>The response object if overriding the default response</p>\n</div></li></ul></div></div></div></div></div></div></div>","files":[{"href":"test_ajax.html#glu-test-Backend","filename":"test_ajax.js"}]});