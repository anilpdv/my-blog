/*! For license information please see component---src-pages-index-js-437e7cbd6e92fa93f2f3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+x2M":function(e,t,n){e.exports=n("xhtX")},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return f}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("p3AD"),i=n("6Gk8"),s=n("Bl7J"),c=n("vrFN"),m=n("+x2M"),u=n.n(m);t.default=function(e){var t,n=e.data,a=e.location,m=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=n.allMarkdownRemark.nodes,d='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n  "Droid Sans", "Helvetica Neue", sans-serif';if(0===f.length)return r.a.createElement(s.a,{location:a,title:m},r.a.createElement(c.a,{title:"All posts"}),r.a.createElement(i.a,null),r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'));return r.a.createElement(s.a,{location:a,title:m},r.a.createElement(c.a,{title:"All posts"}),r.a.createElement(i.a,null),r.a.createElement("ol",{style:{listStyle:"none"}},f.filter((function(e){return"About me"!==e.frontmatter.title})).map((function(e){var t,n,a=e.frontmatter.title||e.fields.slug;return r.a.createElement("li",{key:e.fields.slug},r.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article",style:{fontFamily:d}},r.a.createElement("header",null,r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(o.a)(1),marginBottom:Object(o.a)(1/4)}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:e.fields.slug,itemProp:"url"},r.a.createElement("span",{itemProp:"headline"},a))),r.a.createElement("small",{style:{fontSize:"12px",fontStyle:"italic"}},e.frontmatter.date," ",r.a.createElement("strong",null,"   *  "+(t=e.html,n=u()(t),console.log(n,t),n.text)))),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description",style:{fontFamily:d}}))))}))))};var f="1779940473"},xhtX:function(e,t,n){"use strict";function a(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var n,r,l=0,o=0,i=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,n=t.wordBound||a;n(e[o]);)o++;for(;n(e[i]);)i--;for(r=o;r<=i;){for(;r<=i&&!n(e[r]);r++);for(l++;r<=i&&n(e[r]);r++);}var s=l/t.wordsPerMinute,c=60*s*1e3;return{text:Math.ceil(s.toFixed(2))+" min read",minutes:s,time:c,words:l}}}}]);
//# sourceMappingURL=component---src-pages-index-js-437e7cbd6e92fa93f2f3.js.map