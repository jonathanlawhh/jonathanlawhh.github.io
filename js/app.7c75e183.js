(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1da071ce":"40016817","chunk-2d21a3d2":"f466254f","chunk-2d237ca6":"b8ed0def","chunk-3aaf4ed8":"99fe5d32","chunk-bb3b1468":"eb49c5c9","chunk-cde6909c":"3ecb6b96","chunk-0878df9e":"3cb1623b","chunk-7e90c060":"5a088b29"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1da071ce":1,"chunk-3aaf4ed8":1,"chunk-bb3b1468":1,"chunk-cde6909c":1,"chunk-0878df9e":1,"chunk-7e90c060":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1da071ce":"ed55dcb4","chunk-2d21a3d2":"31d6cfe0","chunk-2d237ca6":"31d6cfe0","chunk-3aaf4ed8":"a1e4bbe5","chunk-bb3b1468":"76874681","chunk-cde6909c":"76874681","chunk-0878df9e":"a1f3455f","chunk-7e90c060":"eee67001"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],h.parentNode.removeChild(h),n(i)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h1",[t._v("Jonathan Law")])]),n("v-col",{staticStyle:{"border-bottom":"aliceblue 1px solid",width:"100%",height:"20px"},attrs:{cols:"12"}})],1),n("v-toolbar",{attrs:{elevation:"0",color:"transparent"}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.sheet=!t.sheet}}}),n("v-toolbar-title",[t._v(t._s(t.page_title))]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{text:"",to:"/"}},[t._v("Home")]),n("v-divider",{attrs:{inset:"",vertical:""}}),n("v-btn",{attrs:{text:"",to:"/background"}},[t._v("My Background")]),n("v-divider",{attrs:{inset:"",vertical:""}}),n("v-btn",{attrs:{text:"",to:"/works"}},[t._v("Works")])],1)],1),n("div",{staticClass:"text-center"},[n("v-bottom-sheet",{model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[n("v-sheet",{staticClass:"text-center"},[n("v-list",[n("v-list-item",{attrs:{disabled:""}},[n("v-list-item-title",[t._v("NAVIGATION")])],1),n("v-list-item",{attrs:{to:"/"},on:{click:function(e){t.sheet=!1}}},[n("v-list-item-title",[t._v("HOME")])],1),n("v-list-item",{attrs:{to:"/background"},on:{click:function(e){t.sheet=!1}}},[n("v-list-item-title",[t._v("MY BACKGROUND")])],1),n("v-list-item",{attrs:{to:"/works"},on:{click:function(e){t.sheet=!1}}},[n("v-list-item-title",[t._v("WORKS")])],1),n("v-list-item",{on:{click:function(e){t.sheet=!t.sheet}}},[n("v-list-item-title",{staticClass:"red--text"},[t._v("CLOSE")])],1)],1)],1)],1)],1),n("v-row",[n("v-col",{staticStyle:{"border-bottom":"aliceblue 1px solid",width:"100%","margin-top":"0","margin-bottom":"3%","padding-top":"0","padding-bottom":"0"},attrs:{cols:"4"}})],1),n("transition",{attrs:{"enter-active-class":"animated "+t.transition_direction}},[n("keep-alive",[n("router-view",{attrs:{appear:""}})],1)],1),n("Footer")],1)],1)},o=[];n("d3b7"),n("ac1f"),n("841c"),n("1276");n("9ddc");var i=function(){return n.e("chunk-2d237ca6").then(n.bind(null,"fd2d"))},c={name:"App",components:{Footer:i},data:function(){return{sheet:!1,page_title:"",pages:{"/":0,"/background":1,"/works":2},transition_direction:"slideInRight"}},mounted:function(){var t=location.search.substr(1).split("=");"spa"===t[0]&&this.$router.push(t[1])},watch:{$route:{immediate:!0,handler:function(t,e){this.transition_direction=e&&this.pages[e.path]>this.pages[t.path]?"slideInLeft":"slideInRight",this.page_title=t.meta.title||"Lost"}}},metaInfo:function(){return{title:this.$route.meta.title,titleTemplate:"%s"}}},s=c,u=(n("034f"),n("2877")),l=n("6544"),d=n.n(l),h=n("7496"),f=n("5bc1"),p=n("288c"),v=n("8336"),m=n("62ad"),b=n("a523"),k=n("ce7e"),g=n("8860"),y=n("da13"),w=n("5d23"),_=n("0fd9"),O=n("8dd9"),x=n("2fa4"),V=n("71d9"),C=n("2a7f"),S=Object(u["a"])(s,r,o,!1,null,null,null),T=S.exports;d()(S,{VApp:h["a"],VAppBarNavIcon:f["a"],VBottomSheet:p["a"],VBtn:v["a"],VCol:m["a"],VContainer:b["a"],VDivider:k["a"],VList:g["a"],VListItem:y["a"],VListItemTitle:w["a"],VRow:_["a"],VSheet:O["a"],VSpacer:x["a"],VToolbar:V["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var L=n("8c4f");a["a"].use(L["a"]);var I=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{title:"Hello"}},{path:"/background",name:"Background",component:function(){return n.e("chunk-3aaf4ed8").then(n.bind(null,"be01"))},meta:{title:"Background"}},{path:"/works",name:"Works",component:function(){return n.e("chunk-cde6909c").then(n.bind(null,"1822"))},meta:{title:"Works"}},{path:"/works/graphics",name:"WorksGraphics",component:function(){return n.e("chunk-bb3b1468").then(n.bind(null,"5dc5"))},meta:{title:"Graphic"}},{path:"*",name:"Lost",component:function(){return n.e("chunk-1da071ce").then(n.bind(null,"5b93"))},meta:{title:"Lost"}}],j=new L["a"]({mode:"history",base:"/",routes:I}),A=j,E=n("f309");a["a"].use(E["a"]);var N=new E["a"]({icons:{iconfont:"md"},theme:{dark:!0}}),B=n("58ca");a["a"].use(B["a"],{keyName:"metaInfo",attribute:"data-vue-meta",tagIDKeyName:"vmid",refreshOnceOnNavigation:!0}),a["a"].config.productionTip=!1,new a["a"]({router:A,vuetify:N,render:function(t){return t(T)}}).$mount("#app")},"8a23":function(t,e,n){}});