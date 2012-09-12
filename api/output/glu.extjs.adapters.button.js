Ext.data.JsonP.glu_extjs_adapters_button({"mixedInto":[],"tagname":"class","extends":"glu.extjs.adapters.component","alternateClassNames":[],"inheritdoc":null,"parentMixins":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"requires":[],"mixins":[],"code_type":"nop","inheritable":false,"meta":{"author":["Mike Gai"]},"members":{"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"cls","id":"cfg-cls"},{"tagname":"cfg","owner":"glu.extjs.adapters.button","meta":{},"name":"handler","id":"cfg-handler"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"hidden","id":"cfg-hidden"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"itemCls","id":"cfg-itemCls"},{"tagname":"cfg","owner":"glu.extjs.adapters.button","meta":{},"name":"pressed","id":"cfg-pressed"},{"tagname":"cfg","owner":"glu.extjs.adapters.button","meta":{},"name":"text","id":"cfg-text"}],"method":[],"event":[],"property":[],"css_var":[]},"uses":[],"subclasses":[],"name":"glu.extjs.adapters.button","aliases":{},"superclasses":["glu.extjs.adapters.component"],"component":false,"html_meta":{"author":null},"id":"class-glu.extjs.adapters.button","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='docClass'>glu.extjs.adapters.component</a><div class='subclass '><strong>glu.extjs.adapters.button</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/button.html#glu-extjs-adapters-button' target='_blank'>button.js</a></div></pre><div class='doc-contents'><p>A button most commonly invokes a command within glu. For example:</p>\n\n<pre><code> glu.ns('sample').main = {\n     go : function () {\n         //...\n     }\n };\n glu.ns('sample').main = {\n     tbar : [{\n         text : 'Go',\n         handler : '@{go}'\n     }\n</code></pre>\n\n<p>will invoked the 'go' command.</p>\n\n<p>However, a button within a glu.extjs.ux.ButtonGroup can also set a value:</p>\n\n<pre><code> glu.ns('sample').main = {\n     mode : 'road'\n };\n glu.ns('sample').main = {\n     tbar : {\n         xtype : 'buttongroup',\n         items: [{\n             text : 'Satellite',\n             value : '@{satellite}'\n          },{\n             text : 'Hybrid',\n             value : '@{hybrid}'\n         },{\n             text : 'Road',\n             value : '@{road}'\n         }]\n     }\n }\n</code></pre>\n\n<p>The last button will start off selected, and clicking the buttons will change the value of <em>mode</em>.\nIn either case, name convention binding can be used as a shortcut:</p>\n\n<pre><code> items : ['satellite','hybrid','road']\n</code></pre>\n\n<p>is equivalent to the last example (the name will be passed as a key to the configured localizer for rendering).</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-cls' class='name expandable'>cls</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets a convenience css class. Since the binding removes the old class before adding the new, this\nproperty is suitable for a variety of dynamic class effects, made easy by using text substitutions in the binding. For example:</p>\n\n<pre><code> cls : 'my-widget-status-@{status}'\n</code></pre>\n\n<p>will dynamically change the class by naming convention to match the current status.</p>\n</div></div></div><div id='cfg-handler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.button'>glu.extjs.adapters.button</span><br/><a href='source/button.html#glu-extjs-adapters-button-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.button-cfg-handler' class='name expandable'>handler</a><span> : Function</span></div><div class='description'><div class='short'>one-time binding. ...</div><div class='long'><p><em>one-time binding.</em> The (command) handler for this button.\nLike all bound glu listeners, it passes in the default arguments of the triggering event,\nprepended by any value you might have assigned to the control. For instance, consider the following:</p>\n\n<pre><code> glu.ns('sample').main = {\n     openScreen : function (screenTag) {\n         //...\n     }\n };\n glu.ns('sample').main = {\n     tbar : [{\n         text : 'Open Major',\n         value : 'major',\n         handler : '@{openScreen}'\n     },{\n         text : 'Open Minor',\n         value : 'minor',\n         handler : '@{openScreen}'\n     }]\n }\n</code></pre>\n\n<p>Pressing the 'minor' button will pass the value 'minor' into the openScreen command function.</p>\n\n<p><strong>Convention: </strong> @{..<em>start</em>}</p>\n</div></div></div><div id='cfg-hidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-hidden' class='name expandable'>hidden</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets the visibility of the component.</p>\n\n<p><strong>Convention:</strong> @{<em>foo</em>IsHidden}</p>\n</div></div></div><div id='cfg-itemCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-itemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-itemCls' class='name expandable'>itemCls</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets a convenience item css class. Since the binding removes the old class before adding the new, this\nproperty is suitable for a variety of dynamic class effects, made easy by using text substitutions in the binding. For example:</p>\n\n<pre><code> itemCls : 'my-widget-status-@{status}'\n</code></pre>\n\n<p>will dynamically change the class by naming convention to match the current status.</p>\n</div></div></div><div id='cfg-pressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.button'>glu.extjs.adapters.button</span><br/><a href='source/button.html#glu-extjs-adapters-button-cfg-pressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.button-cfg-pressed' class='name expandable'>pressed</a><span> : Boolean</span></div><div class='description'><div class='short'>two-way binding. ...</div><div class='long'><p><em>two-way binding.</em> The pressed state of this button if a toggle button.</p>\n\n<p><strong>Convention: </strong> @?{debugIsPressed}</p>\n</div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.button'>glu.extjs.adapters.button</span><br/><a href='source/button.html#glu-extjs-adapters-button-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.button-cfg-text' class='name expandable'>text</a><span> : String</span></div><div class='description'><div class='short'>The text to display on the button. ...</div><div class='long'><p>The text to display on the button.</p>\n\n<p>It is usually best to let this be handled by localization:</p>\n\n<pre><code> text : '~~firstName~~'\n</code></pre>\n\n<p><strong>Convention: </strong> &#126;&#126;<em>firstName</em>&#126;&#126;</p>\n</div></div></div></div></div></div></div>","files":[{"href":"button.html#glu-extjs-adapters-button","filename":"button.js"}]});