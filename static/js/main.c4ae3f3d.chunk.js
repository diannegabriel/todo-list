(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(8),a=c.n(o),r=(c(15),c(6)),i=c.n(r),l=c(9),j=c(2),d=(c(17),c(0)),u=function(e){var t=e.quote;return Object(d.jsx)("div",{className:"quote-container",children:Object(d.jsx)("p",{children:t})})},b=c(10),h=function(e){var t=e.inputText,c=e.setInputText,s=e.todos,n=e.setTodos,o=e.setStatus,a=e.setError;return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"text-input",children:[Object(d.jsx)("input",{onChange:function(e){c(e.target.value)},value:t,type:"text",className:"todo-input",maxLength:"100",placeholder:"Write your task here"}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),0===t.length?a(!0):(n([].concat(Object(b.a)(s),[{id:s.length,text:t,completed:!1}])),c(""),a(!1))},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(e){o(e.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"incomplete",children:"Incomplete"})]})})]})},O=c(7),x=function(e){var t=e.text,c=e.todo,s=e.todos,n=e.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{onClick:function(){n(s.map((function(e){return e.id===c.id?Object(O.a)(Object(O.a)({},e),{},{completed:!e.completed}):e})))},className:"todo-item",children:Object(d.jsxs)("a",{className:"".concat(c.completed?"completed btn":""),children:[t,Object(d.jsx)("svg",{className:"".concat(c.completed?"stroke-active":"stroke"),viewBox:"0 0 154 13",children:Object(d.jsx)("use",{href:"#line"})})]})}),Object(d.jsx)("div",{className:"todo-buttons",children:Object(d.jsx)("button",{className:"erase-button",onClick:function(){n(s.filter((function(e){return e.id!==c.id})))},children:Object(d.jsx)("i",{className:"fas fa-eraser"})})})]})},f=function(e){var t=e.todos,c=e.setTodos,s=e.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:s.map((function(e){return Object(d.jsx)(x,{text:e.text,todo:e,todos:t,setTodos:c},e.id)}))})})},p=function(e){var t=e.error,c=e.inputText;e.setError;return Object(d.jsx)("div",{className:"error-container",children:t&&0===c.length?Object(d.jsx)("label",{children:"Please add a thing to do!"}):c.length>=100?Object(d.jsx)("label",{children:"Task must be 100 characters or less."}):""})},m=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)([]),a=Object(j.a)(o,2),r=a[0],i=a[1],l=Object(s.useState)("all"),u=Object(j.a)(l,2),b=u[0],O=u[1],x=Object(s.useState)([]),m=Object(j.a)(x,2),v=m[0],g=m[1],N=Object(s.useState)(!1),S=Object(j.a)(N,2),T=S[0],k=S[1];return Object(s.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));i(e)}}()}),[]),Object(s.useEffect)((function(){!function(){switch(b){case"completed":g(r.filter((function(e){return!0===e.completed})));break;case"incomplete":g(r.filter((function(e){return!1===e.completed})));break;default:g(r)}}()}),[r,b]),Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r,b]),Object(d.jsx)("div",{className:"clipboard",children:Object(d.jsxs)("div",{className:"board",children:[Object(d.jsx)("div",{className:"clip"}),Object(d.jsxs)("div",{className:"paper",children:[Object(d.jsx)(p,{error:T,inputText:c}),Object(d.jsx)(h,{inputText:c,setInputText:n,todos:r,setTodos:i,setStatus:O,setError:k}),Object(d.jsx)(f,{todos:r,setTodos:i,filteredTodos:v})]})]})})},v=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("h1",{className:"project-name",children:"MotivaDid"}),Object(d.jsx)("h2",{children:"A todo list app with a slight encouragement!"}),Object(d.jsxs)("div",{className:"credits",children:[Object(d.jsx)("p",{children:"Built with: JavaScript, React.js, HTML, CSS, SASS, SVG, Motivation API, Local storage"}),Object(d.jsx)("p",{children:"Made by: Dianne"}),Object(d.jsx)("p",{children:"Ver. 2"})]})]})};var g=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:e.sent.json().then((function(e){var t=Math.floor(Math.random()*e.length);null===e[t].author?n(e[t].text):n(e[t].text+" \u2014 "+e[t].author.split(",")[0])}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("main",{className:"App",children:[Object(d.jsx)("svg",{id:"stroke",xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0",children:Object(d.jsx)("defs",{children:Object(d.jsx)("path",{id:"line",d:"M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"})})}),Object(d.jsxs)("section",{children:[Object(d.jsx)("article",{className:"left",children:Object(d.jsx)(m,{})}),Object(d.jsxs)("article",{className:"right",children:[Object(d.jsx)(u,{quote:c}),Object(d.jsx)(v,{})]})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.c4ae3f3d.chunk.js.map