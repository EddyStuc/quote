(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(5),u=n.n(i),a=(n(10),n(3)),s=(n(4),n(0));var r=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),r=u[0],h=u[1];return Object(c.useEffect)((function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){o(t.content),h(t.author)}))}),[]),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"quote",id:"quote-box",children:[Object(s.jsxs)("p",{id:"text",children:['"',n,'"']}),Object(s.jsxs)("p",{id:"author",children:["- ",r]}),Object(s.jsx)("button",{className:"btn",id:"new-quote",onClick:function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){o(t.content),h(t.author)}))},children:"Change Quote"}),Object(s.jsx)("a",{className:"tweet",id:"tweet-quote",target:"_blank",href:encodeURI("http://www.twitter.com/intent/tweet?text=${quote} -${author}"),children:"Tweet Quote"})]})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),c(t),o(t),i(t),u(t)}))};u.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(r,{})}),document.getElementById("root")),h()},4:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b6387edb.chunk.js.map