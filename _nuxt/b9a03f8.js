(window.webpackJsonp=window.webpackJsonp||[]).push([[15,9],{401:function(t,e,n){"use strict";n.r(e);var r=n(265),o=n(391),c=n(181),l=n(390),d=(n(12),n(64),{name:"LandingComponent",props:{title:{type:String,default:"",required:!0},description:{type:String,default:"",required:!0},backgroundImage:{type:String,default:"",required:!0}}}),v=n(55),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,[e(o.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{outlined:"",text:"",to:"/works/",exact:"",large:""}},[e(c.a,[t._v("chevron_left")]),t._v("\n        BACK TO WORKS\n      ")],1)],1)],1),t._v(" "),e(l.a,{staticClass:"mt-8 mb-8 text-center",staticStyle:{"min-height":"320px",opacity:"0.25",filter:"blur(1px)"},style:"background: url("+t.backgroundImage+") no-repeat center; background-size: cover;"}),t._v(" "),e(l.a,{staticStyle:{position:"relative"}},[e(o.a,{staticClass:"text-center",staticStyle:{position:"absolute",top:"-240px"}},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.description))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n(13),n(12),n(18),n(5),n(20),n(15),n(21);var r=n(2),o=n(128),c=n(90),l=n(127),d=n(22),v=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(o.a,c.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(v.l)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},447:function(t,e,n){"use strict";n.r(e);var r=n(391),o=n(410),c=n(390),l=(n(12),n(64),n(5),n(48),n(50),{name:"Data",components:{LandingComponent:function(){return Promise.resolve().then(n.bind(null,401))},GalleryImage:function(){return n.e(1).then(n.bind(null,453))}},data:function(){return{seo:{title:"Works/Data",description:"Data visualizations and analysis",image:"/img/og/logo_w_data.png"},projects:[{title:"Tinder",description:"Summing up my year with an in-depth tutorial on data scrapping and analysis on Tinder users around me according to my preference.",src:"/img/work_data_tinder_cover.webp",view:"/works/data/tinder/",view_text:"View Tinder dashboard"}]}},created:function(){this.$nuxt.$emit("seo_update",this.seo)},activated:function(){this.$nuxt.$emit("seo_update",this.seo)}}),d=n(55),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("LandingComponent",{attrs:{title:"Data",description:t.seo.description,"background-image":"/img/logo_w_data.webp"}}),t._v(" "),e(c.a,{staticClass:"mb-8",attrs:{id:"content"}},[e(r.a,{attrs:{cols:"12"}},[e("h3",[t._v("Dashboards I have built")]),t._v(" "),e("p",[t._v("Hover over to know more!")])]),t._v(" "),t._l(t.projects,(function(p,i){return e(r.a,{key:i,attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[e(o.a,{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:p.act,callback:function(e){t.$set(p,"act",e)},expression:"p.act"}},[e("GalleryImage",{attrs:{"img-obj":p}})],1)],1)}))],2)],1)}),[],!1,null,"7040ea49",null);e.default=component.exports;installComponents(component,{LandingComponent:n(401).default})}}]);