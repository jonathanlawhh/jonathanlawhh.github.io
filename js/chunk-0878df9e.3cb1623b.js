(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0878df9e"],{"615b":function(e,t,i){},"6ece":function(e,t,i){},"858d":function(e,t,i){"use strict";var r=i("dcea"),s=i.n(r);s.a},9086:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("h1",[e._v("Skills")])]),e._l(e.skill_category,(function(t,r){return i("v-col",{key:r,attrs:{cols:"12",md:"6",lg:"4"}},[i("v-card",[i("v-card-text",[i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"white--text",staticStyle:{"font-size":"150%"}},[e._v(e._s(t.text))])]),i("v-col",{attrs:{cols:"12"}},e._l(e.skillset.filter((function(e){return e.cat===r})),(function(t,r){return i("p",{key:r},[e._v(e._s(t.skill))])})),0)],1)],1)],1)],1)}))],2)},s=[],a={name:"Skills",data:function(){return{skillset:[{skill:"Tableau, PowerBI, Google Datastudio",cat:0},{skill:"SQL, Google BigQuery",cat:0},{skill:"Selenium, Puppetter",cat:0},{skill:"OpenCV",cat:0},{skill:"Tensorflow, TensorflowJS, Keras",cat:0},{skill:"Python",cat:1},{skill:"NodeJS, VueJS, Vuetify (HTML, CSS, JS)",cat:1},{skill:"Laravel (PHP)",cat:1},{skill:"SQL, MySQL",cat:1},{skill:"C++, DotNet",cat:1},{skill:"Docker",cat:1},{skill:"Java",cat:1},{skill:"Windows Server (AD, DNS, VDI)",cat:2},{skill:"Windows 10 (Policies, Security, Deployments)",cat:2},{skill:"VMWare Horizon Ecosystem (ESXi/vSphere)",cat:2},{skill:"Linux based systems",cat:2},{skill:"Networking",cat:2},{skill:"Google Cloud Platform",cat:3},{skill:"Microsoft Azure",cat:3},{skill:"Amazon",cat:3},{skill:"Adobe PS, AI, AE",cat:4},{skill:"3DS Max",cat:4},{skill:"Unreal Engine",cat:4},{skill:"Getting random cat facts",cat:5},{skill:"Copy pasting codes",cat:5},{skill:"Brute forcing",cat:5},{skill:"Wonder why things dont work",cat:5},{skill:"Wonder why they suddenly work",cat:5}],skill_category:[{text:"AI/ML, RPA, BI",icon:"remove_red_eye"},{text:"Programming",icon:"code"},{text:"System Administration",icon:"devices"},{text:"Cloud",icon:"cloud_queue"},{text:"Graphics",icon:"brush"},{text:"Misc",icon:"explore"}]}}},n=a,l=(i("858d"),i("2877")),o=i("6544"),c=i.n(o),d=i("b0af"),u=i("99d9"),h=i("62ad"),f=i("0fd9"),g=Object(l["a"])(n,r,s,!1,null,"0d9809d8",null);t["default"]=g.exports;c()(g,{VCard:d["a"],VCardText:u["b"],VCol:h["a"],VRow:f["a"]})},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return o}));var r=i("b0af"),s=i("80d2"),a=Object(s["g"])("v-card__actions"),n=Object(s["g"])("v-card__subtitle"),l=Object(s["g"])("v-card__text"),o=Object(s["g"])("v-card__title");r["a"]},b0af:function(e,t,i){"use strict";i("0481"),i("4069"),i("a9e3");var r=i("5530"),s=(i("615b"),i("10d2")),a=i("2b0e"),n=(i("c7cd"),i("ade3")),l=(i("6ece"),i("0789")),o=i("a9ad"),c=i("fe6c"),d=i("a452"),u=i("7560"),h=i("80d2"),f=i("58df"),g=Object(f["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),d["a"],u["a"]),v=g.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.isReversed?"right":"left",Object(h["f"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(h["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?l["b"]:l["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(h["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(h["k"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),i=t.width;this.internalValue=e.offsetX/i*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=v,p=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),b=i("1c87");t["a"]=Object(f["a"])(p,b["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},b["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=p.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},dcea:function(e,t,i){}}]);