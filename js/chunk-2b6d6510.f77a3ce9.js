(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b6d6510"],{"36a7":function(t,e,i){},73770:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticStyle:{"background-color":"#121212"}},[i("v-card-text",[i("v-row",[t.clicked?t._e():i("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[i("v-img",{attrs:{src:"https://img.youtube.com/vi/"+t.selected_vid.id+"/mqdefault.jpg",contain:""},on:{click:function(e){t.clicked=!0}}},[i("div",{staticClass:"text-center",staticStyle:{"background-color":"rgba(0, 0, 0, 0.6)",height:"100%"}},[i("v-icon",{staticStyle:{"margin-top":"20%","font-size":"64px"}},[t._v("play_circle_outline")])],1)])],1),t.clicked?i("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[i("iframe",{attrs:{width:"100%",height:"320",src:"https://www.youtube-nocookie.com/embed/"+t.selected_vid.id+"/?modestbranding=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope;",allowfullscreen:""}})]):t._e(),i("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[i("h3",{domProps:{textContent:t._s(t.vid_obj.title)}}),i("br"),i("p",{domProps:{innerHTML:t._s(t.vid_obj.description)}}),i("br"),t.vid_obj.playlist.length>1?i("p",[t._v("Progression journey: ")]):t._e(),t._l(this.vid_obj.playlist,(function(e,s){return i("v-btn",{key:s,staticClass:"ma-2",attrs:{rounded:"",outlined:!(t.selected_vid===e)},on:{click:function(i){t.selected_vid=e}}},[t._v(t._s(e.title))])}))],2)],1)],1)],1)},r=[],n={name:"YouTubeVideoComponent",props:["vid_obj"],data:function(){return{clicked:!1,selected_vid:{}}},mounted:function(){this.selected_vid=this.vid_obj.playlist[0]}},a=n,c=i("2877"),o=i("6544"),d=i.n(o),l=i("8336"),h=i("b0af"),u=i("99d9"),m=i("62ad"),g=i("132d"),p=i("adda"),v=i("0fd9"),f=Object(c["a"])(a,s,r,!1,null,null,null);e["default"]=f.exports;d()(f,{VBtn:l["a"],VCard:h["a"],VCardText:u["b"],VCol:m["a"],VIcon:g["a"],VImg:p["a"],VRow:v["a"]})},"8efc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return o}));var s=i("b0af"),r=i("80d2"),n=Object(r["g"])("v-card__actions"),a=Object(r["g"])("v-card__subtitle"),c=Object(r["g"])("v-card__text"),o=Object(r["g"])("v-card__title");s["a"]},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3");var s=i("53ca"),r=(i("8efc"),i("90a2")),n=(i("36a7"),i("24b2")),a=i("58df"),c=Object(a["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=c,d=i("7560"),l=i("d9f7"),h=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(a["a"])(o,d["a"]).extend({name:"v-img",directives:{intersect:r["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var r=t.naturalHeight,n=t.naturalWidth;r||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/r):null!=i&&!e.hasError&&setTimeout(s,i)};s()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t),i=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})}}]);