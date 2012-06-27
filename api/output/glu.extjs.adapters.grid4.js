Ext.data.JsonP.glu_extjs_adapters_grid4({"mixedInto":[],"tagname":"class","extends":"glu.extjs.adapters.panel","alternateClassNames":[],"inheritdoc":null,"parentMixins":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"requires":[],"mixins":[],"code_type":"nop","inheritable":false,"meta":{"author":["Mike Gai, Nick Tackes"]},"members":{"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"glu.extjs.adapters.panel","meta":{},"name":"closable","id":"cfg-closable"},{"tagname":"cfg","owner":"glu.extjs.adapters.panel","meta":{},"name":"closeHandler","id":"cfg-closeHandler"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"cls","id":"cfg-cls"},{"tagname":"cfg","owner":"glu.extjs.adapters.grid4","meta":{},"name":"columnFilters","id":"cfg-columnFilters"},{"tagname":"cfg","owner":"glu.extjs.adapters.grid4","meta":{},"name":"focus","id":"cfg-focus"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"hidden","id":"cfg-hidden"},{"tagname":"cfg","owner":"glu.extjs.adapters.component","meta":{},"name":"itemCls","id":"cfg-itemCls"},{"tagname":"cfg","owner":"glu.extjs.adapters.grid4","meta":{},"name":"selected","id":"cfg-selected"},{"tagname":"cfg","owner":"glu.extjs.adapters.grid4","meta":{},"name":"store","id":"cfg-store"}],"method":[],"event":[{"tagname":"event","owner":"glu.extjs.adapters.grid4","meta":{},"name":"itemdblclick","id":"event-itemdblclick"}],"property":[],"css_var":[]},"uses":[],"subclasses":[],"name":"glu.extjs.adapters.grid4","aliases":{},"superclasses":["glu.extjs.adapters.component","glu.extjs.adapters.container","glu.extjs.adapters.panel"],"component":false,"html_meta":{"author":null},"id":"class-glu.extjs.adapters.grid4","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='docClass'>glu.extjs.adapters.component</a><div class='subclass '><a href='#!/api/glu.extjs.adapters.container' rel='glu.extjs.adapters.container' class='docClass'>glu.extjs.adapters.container</a><div class='subclass '><a href='#!/api/glu.extjs.adapters.panel' rel='glu.extjs.adapters.panel' class='docClass'>glu.extjs.adapters.panel</a><div class='subclass '><strong>glu.extjs.adapters.grid4</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/grid2.html#glu-extjs-adapters-grid4' target='_blank'>grid.js</a></div></pre><div class='doc-contents'><p>The grid binder adds support for various selection and focus patterns,\nas well as for basic grid \"commands\" like sorting.</p>\n\n<h2>Basic Ext 4.x grid binding</h2>\n\n<pre><code>   sample = {\n       models : {\n           student :{fields:[{name:'id'},{name:'firstName'}]},\n       },\n       viewmodels : {\n           assignment : {\n               studentList : {\n                   mtype : 'glustore',\n                   model : 'student'\n               },\n               openStudent : function() {\n                    this.message.('Opening student ' + this.studentWithFocus.get('firstName'));\n               },\n               studentSelections : [],\n               studentWithFocus : {},\n               studentListIsCollapsed : false,\n               studentListIsDisabled : false,\n               studentListIsHidden : false\n           }\n       },\n       views : {\n           assignment : {\n               items : [{\n                   xtype : 'grid',\n                   name : 'studentList'\n               }]\n           }\n       }\n   };\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-closable' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.panel' rel='glu.extjs.adapters.panel' class='defined-in docClass'>glu.extjs.adapters.panel</a><br/><a href='source/panel.html#glu-extjs-adapters-panel-cfg-closable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.panel-cfg-closable' class='name not-expandable'>closable</a><span> : Object</span></div><div class='description'><div class='short'><p><em>one-time binding ExtJS 3.x, one-way binding ExtJS 4.x</em></p>\n</div><div class='long'><p><em>one-time binding ExtJS 3.x, one-way binding ExtJS 4.x</em></p>\n</div></div></div><div id='cfg-closeHandler' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.panel' rel='glu.extjs.adapters.panel' class='defined-in docClass'>glu.extjs.adapters.panel</a><br/><a href='source/panel.html#glu-extjs-adapters-panel-cfg-closeHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.panel-cfg-closeHandler' class='name expandable'>closeHandler</a><span> : Function</span></div><div class='description'><div class='short'>The handle to process a 'close me' request from either a window close button or a tab close button. ...</div><div class='long'><p>The handle to process a 'close me' request from either a window close button or a tab close button.\nBy default it will call the 'close' method on the view model.\nIf you override the close method, use the doClose()\nmethod on the view model to actually perform the close operation. To veto a close because the screen is not\nvalid would look like this:</p>\n\n<pre><code> //view model assuming using default {@close} binding\n close : function() {\n     if (this.isValid) {\n         this.doClose();\n     }\n }\n</code></pre>\n\n<p>Default: '{@close}'</p>\n</div></div></div><div id='cfg-cls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-cls' class='name expandable'>cls</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets a convenience css class. Since the binding removes the old class before adding the new, this\nproperty is suitable for a variety of dynamic class effects, made easy by using text substitutions in the binding. For example:</p>\n\n<pre><code> cls : 'my-widget-status-@{status}'\n</code></pre>\n\n<p>will dynamically change the class by naming convention to match the current status.</p>\n</div></div></div><div id='cfg-columnFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.grid4'>glu.extjs.adapters.grid4</span><br/><a href='source/grid2.html#glu-extjs-adapters-grid4-cfg-columnFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.grid4-cfg-columnFilters' class='name expandable'>columnFilters</a><span> : Array</span></div><div class='description'><div class='short'>An array of filters corresponding to the Ext.ux.GridFilters plugin format\n\n {\n field : 'firstName',\n comparison : 'eq...</div><div class='long'><p>An array of filters corresponding to the Ext.ux.GridFilters plugin format</p>\n\n<pre><code> {\n field : 'firstName',\n comparison : 'eq', (check this to make sure)\n value : 'Mi'\n }\n</code></pre>\n\n<p>The binding is two-way.\nSince it is an array, the entire array is overwritten on each filter change.</p>\n</div></div></div><div id='cfg-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.grid4'>glu.extjs.adapters.grid4</span><br/><a href='source/grid2.html#glu-extjs-adapters-grid4-cfg-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.grid4-cfg-focus' class='name expandable'>focus</a><span> : Ext.data.Model/Ext.data.Record</span></div><div class='description'><div class='short'>Item with current grid focus. ...</div><div class='long'><p>Item with current grid focus.\nThe focus is which row in the grid is the \"current position\". It's behavior\nis determined by the underlying selection model; glu is simply surfacing it.\nIt is primarily used for master/detail patterns, where the detail shows the item\nwith focus, not necessarily the selection (which may be multiple).\nIn single-select mode, the item with focus corresponds to the item selection.\nFocus is gained by \"entering into\" or selecting a row, and is not lost until\nanother row is selected (either by selecting one more in multi-select/simple,\nor simply by selecting another in single-select). Deselecting a row does not\nchange the focus.</p>\n\n<p><strong>Convention if name is <em>item</em>List </strong>: @{<em>item</em>WithFocus}</p>\n</div></div></div><div id='cfg-hidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-hidden' class='name expandable'>hidden</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets the visibility of the component.</p>\n\n<p><strong>Convention:</strong> @{<em>foo</em>IsHidden}</p>\n</div></div></div><div id='cfg-itemCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/glu.extjs.adapters.component' rel='glu.extjs.adapters.component' class='defined-in docClass'>glu.extjs.adapters.component</a><br/><a href='source/component.html#glu-extjs-adapters-component-cfg-itemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.component-cfg-itemCls' class='name expandable'>itemCls</a><span> : String</span></div><div class='description'><div class='short'>one-way binding. ...</div><div class='long'><p><em>one-way binding.</em> Sets a convenience item css class. Since the binding removes the old class before adding the new, this\nproperty is suitable for a variety of dynamic class effects, made easy by using text substitutions in the binding. For example:</p>\n\n<pre><code> itemCls : 'my-widget-status-@{status}'\n</code></pre>\n\n<p>will dynamically change the class by naming convention to match the current status.</p>\n</div></div></div><div id='cfg-selected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.grid4'>glu.extjs.adapters.grid4</span><br/><a href='source/grid2.html#glu-extjs-adapters-grid4-cfg-selected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.grid4-cfg-selected' class='name expandable'>selected</a><span> : Array/Ext.data.Model/Ext.data.Record</span></div><div class='description'><div class='short'>Currently selected item(s) in the grid. ...</div><div class='long'><p>Currently selected item(s) in the grid.\nThe binding type is automatically determined by the supplied viewmodel property type.\nIt will be an array of Model/Records if the target is an array, otherwise a single Model/Record.\nSelections currently cannot be bound to Lists, Maps, or Stores though that may in the future be a useful addition.\nIf the bound property is an array and multi-select / mode flag on the grid has not been configured,\nit will also automatically configure the grid as multi-select.</p>\n\n<p><strong>Convention if name is <em>item</em>List </strong>: @{<em>item</em>Selections} for an array  /  @{<em>item</em>Selection} for a single record</p>\n</div></div></div><div id='cfg-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.grid4'>glu.extjs.adapters.grid4</span><br/><a href='source/grid2.html#glu-extjs-adapters-grid4-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.grid4-cfg-store' class='name expandable'>store</a><span> : Ext.data.Store</span></div><div class='description'><div class='short'>The store for this grid. ...</div><div class='long'><p>The store for this grid.</p>\n\n<p><em>One-time binding</em></p>\n\n<p><strong>Convention</strong>: @{<em>itemList</em>}</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-itemdblclick' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='glu.extjs.adapters.grid4'>glu.extjs.adapters.grid4</span><br/><a href='source/grid2.html#glu-extjs-adapters-grid4-event-itemdblclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/glu.extjs.adapters.grid4-event-itemdblclick' class='name expandable'>itemdblclick</a>( <span class='pre'>Ext.grid.Panel this, Ext.data.Model selected</span> )</div><div class='description'><div class='short'>Fired after a selection change has occurred ...</div><div class='long'><p>Fired after a selection change has occurred</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Ext.grid.Panel<div class='sub-desc'>\n</div></li><li><span class='pre'>selected</span> : Ext.data.Model<div class='sub-desc'><p>The selected record</p>\n\n<p><strong>Convention if name is <em>item</em>List </strong> : @{open<em>Item</em>}</p>\n</div></li></ul></div></div></div></div></div></div></div>","files":[{"href":"grid2.html#glu-extjs-adapters-grid4","filename":"grid.js"}]});