Ext.data.JsonP.glu_extjs_adapters_dataview({"mixedInto":[],"tagname":"class","extends":"glu.extjs.adapters.component","alternateClassNames":[],"inheritdoc":null,"parentMixins":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"requires":[],"mixins":[],"code_type":"nop","inheritable":false,"meta":{"author":["Travis Barajas"]},"members":{"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"cls","id":"cfg-cls"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"hidden","id":"cfg-hidden"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"itemCls","id":"cfg-itemCls"},{"tagname":"cfg","owner":"glu.extjs.adapters.dataview","meta":{},"name":"selected","id":"cfg-selected"}],"method":[],"event":[],"property":[],"css_var":[]},"uses":[],"subclasses":[],"name":"glu.extjs.adapters.dataview","aliases":{},"superclasses":["glu.extjs.adapters.component"],"component":false,"html_meta":{"author":null},"id":"class-glu.extjs.adapters.dataview","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='docClass'>glu.extjs.adapters.component</a><div class='subclass '><strong>glu.extjs.adapters.dataview</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/dataview.html#glu-extjs-adapters-dataview' target='_blank'>dataview.js</a></div></pre><div class='doc-contents'><p>Binds to a data view and handles selection.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-cls' class='name expandable'>cls</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets a convenience css class. Since the binding removes the old class before adding the new, this\nproperty is suitable for a variety of dynamic class effects, made easy by using text substitutions in the binding. For example:</p>\n\n<pre><code> cls : 'my-widget-status-@{status}'\n</code></pre>\n\n<p>will dynamically change the class by naming convention to match the current status.</p>\n</div></div></div><div id='cfg-hidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-hidden' class='name expandable'>hidden</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets the visibility of the component.</p>\n\n<p><strong>Convention:</strong> @{<em>foo</em>IsHidden}</p>\n</div></div></div><div id='cfg-itemCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-itemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-itemCls' class='name expandable'>itemCls</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets a convenience item css class. Since the binding removes the old class before adding the new, this\nproperty is suitable for a variety of dynamic class effects, made easy by using text substitutions in the binding. For example:</p>\n\n<pre><code> itemCls : 'my-widget-status-@{status}'\n</code></pre>\n\n<p>will dynamically change the class by naming convention to match the current status.</p>\n</div></div></div><div id='cfg-selected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.dataview'>glu.extjs.adapters.dataview</span><br/><a href='source/dataview.html#glu-extjs-adapters-dataview-cfg-selected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.dataview-cfg-selected' class='name not-expandable'>selected</a><span> : Array</span></div><div class='description'><div class='short'><p>Binds currently selected records\n <em>Two-way binding</em></p>\n</div><div class='long'><p>Binds currently selected records\n <em>Two-way binding</em></p>\n</div></div></div></div></div></div></div>","files":[{"href":"dataview.html#glu-extjs-adapters-dataview","filename":"dataview.js"}]});