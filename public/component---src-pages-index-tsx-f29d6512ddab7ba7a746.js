(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+gu+":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("xY+Z");t.a=function(e){var t=e.tags,n=e.theme;return i.a.createElement(i.a.Fragment,null,t&&t.map((function(e,t){return i.a.createElement(o.h,{key:t,theme:n},e)})))}},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("Wbzz"),r=n("9Dj+"),l=n("9eSz"),c=n.n(l),d=n("vOnD"),m=n("bFe0"),s=d.c.div.withConfig({displayName:"sectionAbout__Description",componentId:"upep5x-0"})(["display:inline-block;text-align:left;h3{display:block;padding-left:40px;padding-top:40px;padding-right:40px;}h4{display:none;}p{padding-left:40px;font-style:italic;}@media (max-width:768px){h3{display:none;}h4{display:block;padding-left:40px;padding-top:40px;padding-right:40px;}}"]),p=d.c.div.withConfig({displayName:"sectionAbout__ImageCover",componentId:"upep5x-1"})(["display:inline-block;margin:20px;width:50%;height:50%;@media (max-width:768px){display:none;}"]),u=Object(d.c)(c.a).withConfig({displayName:"sectionAbout__ImageItem",componentId:"upep5x-2"})(["",";"],m.b.imageItem),g=d.c.div.withConfig({displayName:"sectionAbout__SectionContainer",componentId:"upep5x-3"})(["",";",";"],m.b.sectionContainer,m.b.flexCenter),h=function(){var e=Object(o.useStaticQuery)("1408397968");return i.a.createElement(g,{id:"about"},i.a.createElement(s,null,i.a.createElement("h3",null,"Hello! I'm James. I write code, but I often ponder about many things. Hence the blog as a means to sort through my thoughts."),i.a.createElement("h4",null,"Hello! I'm James."),i.a.createElement("p",null,"Memento Mori")),i.a.createElement(p,null,i.a.createElement(u,{fluid:e.placeholderImage.childImageSharp.fluid})))},f=n("B5bB"),b=n("+gu+"),w=n("xY+Z"),x=m.c.colors,y=d.c.div.withConfig({displayName:"sectionWriting__SectionContainer",componentId:"sc-1mrspwt-0"})(["",";background-color:",";",";display:grid;border-radius:5px;"],m.b.sectionContainer,(function(e){return"dark"===e.theme?x.secondaryBackgroundDark:x.secondaryBackground}),m.b.flexCenter),E=d.c.div.withConfig({displayName:"sectionWriting__ListContainer",componentId:"sc-1mrspwt-1"})(["width:100%;padding:0.5rem;"]),k=d.c.h2.withConfig({displayName:"sectionWriting__TitleH2",componentId:"sc-1mrspwt-2"})(["text-align:center;width:100%;position:relative;display:block;"]),I=Object(d.c)(o.Link).withConfig({displayName:"sectionWriting__WritingsLink",componentId:"sc-1mrspwt-3"})(["text-align:center;",";"],m.b.inlineLink),C=function(e){var t=Object(a.useContext)(f.ThemeContext).theme;return i.a.createElement(y,{id:"writing",theme:t},i.a.createElement(k,null,"Recent Writings"),i.a.createElement(E,null,e.posts.map((function(e){var n=e.id,a=e.date,r=e.slug,l=e.tags,c=e.title,d="/blog/"+a.split("-")[0]+"/"+r,m="";return a&&(m=new Date(a).toDateString()),i.a.createElement(w.a,{key:n},i.a.createElement(o.Link,{to:d},i.a.createElement(w.k,null,c),i.a.createElement("p",null,m),i.a.createElement(b.a,{tags:l,theme:t})))}))),i.a.createElement(I,{to:"/writings/"},"More writing ➤"))},v=function(e){var t=e.iEdge.map((function(e){return{title:e.node.frontmatter.title,date:e.node.frontmatter.date,tags:e.node.frontmatter.tags,id:e.node.id,slug:e.node.fields.slug}}));return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(C,{posts:t}))},_=n("H8eV");t.default=function(e){var t=Object(o.useStaticQuery)("1316514489"),n=e.location,a=t.allMarkdownRemark.edges;return i.a.createElement(r.a,{location:n},i.a.createElement(_.a,{title:"Home"}),i.a.createElement(v,{iEdge:a}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f29d6512ddab7ba7a746.js.map