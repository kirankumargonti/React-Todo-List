(this.webpackJsonpfresh=this.webpackJsonpfresh||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),r=a.n(c),s=(a(17),a(18),a(19),a(11)),l=a(1),m=a(2),o=a(4),d=a(3),u=a(5),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,c=e.editItem;return i.a.createElement("div",{className:"card card-body bg-warning"},i.a.createElement("form",{onSubmit:n},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:"input-group-text text-white bg-danger"},i.a.createElement("i",{className:"fas fa-book"}))),i.a.createElement("input",{type:"text",className:"form-control text-center text-capitalize",placeholder:"add a Todo Item",value:t,onChange:a,required:!0})),i.a.createElement("button",{type:"submit",className:c?"btn btn-block bg-success text-capitalize mt-3":"btn btn-block bg-dark text-capitalize mt-3 text-white"},c?"Edit & Submit":"Add Item")))}}]),t}(n.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.handleDelete,n=e.handleEdit;return i.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between"},i.a.createElement("h5",{className:"text-capitalize"},t),i.a.createElement("div",{className:"todo-item-icons"},i.a.createElement("span",{className:"mx-2 text-success",onClick:n},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{className:"mx-2 text-danger",onClick:a},i.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.clearList,n=e.handleDelete,c=e.handleEdit;return i.a.createElement("div",null,i.a.createElement("ul",{className:"list-group mt-5"},i.a.createElement("h1",{className:"text-uppercase text-center"},"todo list"),t.map((function(e){return i.a.createElement(p,{key:e.id,title:e.title,handleDelete:function(){return n(e.id)},handleEdit:function(){return c(e.id)}})})),i.a.createElement("button",{type:"submit",onClick:a,className:"btn btn-block bg-danger mt-3 text-white"},"Clear List")))}}]),t}(n.Component),f=a(6),E=a.n(f),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={id:a.state.id,title:a.state.item},n=[].concat(Object(s.a)(a.state.items),[t]);a.setState({items:n,item:"",id:E()(),editItem:!1})},a.clearList=function(){a.setState({items:[]})},a.handleDelete=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter((function(t){return t.id!==e})),n=a.state.items.find((function(t){return t.id===e}));a.setState({items:t,item:n.title,editItem:!0,id:e})},a.state={items:[],id:E()(),item:"",editItem:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"todo-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},i.a.createElement("div",{className:"todo"},i.a.createElement("h1",{className:"text-center text-uppercase"},"Todo Input"),i.a.createElement(h,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}),i.a.createElement(b,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit}))))))}}]),t}(n.Component);var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.e018ef30.chunk.js.map