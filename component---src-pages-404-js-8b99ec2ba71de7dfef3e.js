(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(183);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"not found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},178:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(11),l=a.n(i),s=a(58),c=a.n(s);a.d(t,"a",function(){return c.a});a(179);var o=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},179:function(e,t,a){var n;e.exports=(n=a(181))&&n.default||n},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Yuxiang Dai"}}}}},181:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),s=a(82),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},183:function(e,t,a){"use strict";var n=a(180),r=a(0),i=a.n(r),l=a(11),s=a.n(l),c=a(184),o=a.n(c),u=a(178),d=(a(185),a(182)),m=a(186),p=a.n(m),f=d.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["background:black;margin-bottom:1.45rem;border-top:4px solid #fff;"]),E=function(e){return i.a.createElement("h2",{className:p.a.links},i.a.createElement(u.a,{to:e.link,className:p.a.headerText},e.text))},h=function(e){var t=e.siteTitle;return i.a.createElement(f,null,i.a.createElement("div",{className:p.a.headerContainer,style:{display:"flex",margin:"0 auto","justify-content":"flex-end"}},i.a.createElement("h1",{className:p.a.title},i.a.createElement(u.a,{to:"/",className:p.a.headerText},t)),i.a.createElement("div",{className:p.a.linksContainer},i.a.createElement(E,{link:"/",text:"about"}),i.a.createElement(E,{link:"/projects/",text:"projects"}),i.a.createElement(E,{link:"/resume/",text:"resume"}),i.a.createElement(E,{link:"/elsewhere/",text:"elsewhere"}))))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var g=h,y=(a(187),function(e){var t=e.children;return i.a.createElement(u.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"body",style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});y.propTypes={children:s.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-8b99ec2ba71de7dfef3e.js.map