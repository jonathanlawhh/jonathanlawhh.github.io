(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c2d4d2"],{"615b":function(e,t,i){},"6ece":function(e,t,i){},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c}));var r=i("b0af"),a=i("80d2"),s=Object(a["g"])("v-card__actions"),n=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");r["a"]},b0af:function(e,t,i){"use strict";i("0481"),i("4069"),i("a9e3");var r=i("5530"),a=(i("615b"),i("10d2")),s=i("2b0e"),n=(i("c7cd"),i("ade3")),o=(i("6ece"),i("0789")),c=i("a9ad"),l=i("fe6c"),d=i("a452"),u=i("7560"),h=i("80d2"),v=i("58df"),f=Object(v["a"])(c["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),d["a"],u["a"]),g=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.isReversed?"right":"left",Object(h["f"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(h["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(h["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(h["k"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),i=t.width;this.internalValue=e.offsetX/i*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=g,m=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),b=i("1c87");t["a"]=Object(v["a"])(m,b["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},b["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=m.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},b687:function(e,t,i){"use strict";var r=i("5530"),a=i("24b2"),s=i("f2e7"),n=i("90a2"),o=i("58df"),c=i("80d2");t["a"]=Object(o["a"])(a["a"],s["a"]).extend({name:"VLazy",directives:{intersect:n["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(r["a"])({},this.measurableStyles)}},methods:{genContent:function(){var e=Object(c["k"])(this);if(!this.transition)return e;var t=[];return this.isActive&&t.push(e),this.$createElement("transition",{props:{name:this.transition}},t)},onObserve:function(e,t,i){this.isActive||(this.isActive=i)}},render:function(e){return e(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},e6d6:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("LandingComponent",{attrs:{title:"Graphics"}}),i("v-row",{attrs:{id:"content"}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{staticStyle:{"background-color":"#121212"},attrs:{outlined:""}},[i("v-card-title",[e._v("YouTube Gallery")]),i("v-card-text",[i("v-row",[e.clicked?e._e():i("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[i("v-img",{attrs:{src:"https://img.youtube.com/vi/"+e.selected_vid.id+"/mqdefault.jpg",contain:""},on:{click:function(t){e.clicked=!0}}},[i("div",{staticClass:"text-center",staticStyle:{"background-color":"rgba(0, 0, 0, 0.8)",height:"100%"}},[i("v-icon",{staticStyle:{"margin-top":"20%","font-size":"64px"}},[e._v("play_circle_outline")])],1)])],1),e.clicked?i("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[i("iframe",{attrs:{width:"100%",height:"320",src:"https://www.youtube-nocookie.com/embed/"+e.selected_vid.id+"/?modestbranding=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope;",allowfullscreen:""}})]):e._e(),i("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[i("h3",[e._v("Faber Project")]),i("br"),i("p",[e._v("Rendered cinematic using Unreal Engine 4.2 and model with 3DS Max, post processed with After Effects."),i("br"),e._v(' The environment is based on the floor (Faber Towers, Taman Desa) where I used to work as a child care part timer. The whole idea is to project a disoriented person who is isolated/trapped in this "dead zone" with no way out.')]),i("br"),i("p",[e._v("Progression journey: ")]),e._l(e.faber_playlist,(function(t,r){return i("v-btn",{key:r,staticStyle:{margin:"5px"},attrs:{rounded:"",outlined:!(e.selected_vid===t)},on:{click:function(i){e.selected_vid=t}}},[e._v(e._s(t.title))])}))],2),i("v-col",{attrs:{cols:"12"}},[i("v-divider")],1)],1)],1)],1)],1),e._l(4,(function(t){return i("v-col",{key:t,attrs:{cols:"6"}},[i("v-lazy",[i("v-card",{attrs:{outlined:""}},[i("v-card-title",[e._v(e._s(t))]),i("v-card-text",[e._v(e._s(t))])],1)],1)],1)}))],2)],1)},a=[],s=(i("d3b7"),function(){return i.e("chunk-2792fd8d").then(i.bind(null,"9d22"))}),n={name:"WorksGraphics",components:{LandingComponent:s},data:function(){return{faber_playlist:[{id:"1xavkofiUlw",title:"27.09.2019"},{id:"VU_Y-kp1JhI",title:"18.08.2017"},{id:"SPMz_IwaoO8",title:"27.06.2017"},{id:"USuUsPO7UaU",title:"02.06.2017"}],clicked:!1,selected_vid:{}}},mounted:function(){this.selected_vid=this.faber_playlist[1]}},o=n,c=i("2877"),l=i("6544"),d=i.n(l),u=i("8336"),h=i("b0af"),v=i("99d9"),f=i("62ad"),g=i("ce7e"),p=i("132d"),m=i("adda"),b=i("b687"),_=i("0fd9"),y=Object(c["a"])(o,r,a,!1,null,null,null);t["default"]=y.exports;d()(y,{VBtn:u["a"],VCard:h["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:f["a"],VDivider:g["a"],VIcon:p["a"],VImg:m["a"],VLazy:b["a"],VRow:_["a"]})}}]);