"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{4377:function(n,t,r){r.d(t,{Hg:function(){return o},TP:function(){return p},tx:function(){return d},z1:function(){return s},zv:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),u=r(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="25da517c2bc168beb7d03992630b742e",o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9245:function(n,t,r){r.d(t,{a:function(){return l}});var e,a=r(5671),c=r(3144),u=r(136),i=r(4104),o=r(2791),s=r(168),p=r(6444).ZP.div(e||(e=(0,s.Z)(["\ndisplay: flex;\njustify-content: center;\nmargin-top: 30px\n"]))),f=r(5243),d=r(184),l=function(n){(0,u.Z)(r,n);var t=(0,i.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){return(0,d.jsx)(p,{children:(0,d.jsx)(f.gy,{width:"400",color:"#3f51b5"})})}}]),r}(o.Component)},9544:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),c=r(7757),u=r.n(c),i=r(4377),o=r(2791),s=r(7689),p=r(9245),f=r(1077),d=r(7296),l=r(4),x=r(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1],h=(0,o.useState)(!1),v=(0,a.Z)(h,2),m=v[0],Z=v[1],g=(0,s.TH)();return(0,o.useEffect)((function(){function n(){return(n=(0,e.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Z("true"),n.prev=1,n.next=4,(0,i.Hg)().then((function(n){if(0===n.total_results)return Promise.reject(new Error("No such Movie!"));c(n.results),Z("false")}));case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),new Error,console.log("Error");case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,x.jsxs)(d.W2,{children:[(0,x.jsx)(f.eA,{children:"Trending today"}),(0,x.jsx)(f.PX,{children:r.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsxs)(f.ci,{to:"/movies/".concat(n.id),state:{from:g},children:[(0,x.jsx)(f.Wf,{src:n.poster_path?"https://image.tmdb.org/t/p/w200".concat(n.poster_path):l,alt:n.original_title}),(0,x.jsx)("h3",{children:n.original_title})]})},n.id)}))}),m&&(0,x.jsx)(p.a,{})]})}},1077:function(n,t,r){r.d(t,{PX:function(){return d},Wf:function(){return l},ci:function(){return f},eA:function(){return p}});var e,a,c,u,i=r(168),o=r(6444),s=r(1087),p=o.ZP.h2(e||(e=(0,i.Z)(["\n  text-align: center;\n"]))),f=(0,o.ZP)(s.OL)(a||(a=(0,i.Z)(["\n  outline: none;\n  text-decoration: none;\n  color: inherit;\n"]))),d=o.ZP.ul(c||(c=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 20px;\n"]))),l=o.ZP.img(u||(u=(0,i.Z)(["\n  box-shadow: 0px 2px 1px 0px #00000033, 0px 2px 1px 0px #00000033,\n    0px 1px 3px 0px #0000001f;\n"])))},4:function(n,t,r){n.exports=r.p+"static/media/noImage.73409390370db847ed29.jpg"}}]);
//# sourceMappingURL=544.f413c19d.chunk.js.map