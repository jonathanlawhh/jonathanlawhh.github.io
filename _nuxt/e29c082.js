(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return d}));var o=n(370),r=n(1),l=Object(r.h)("v-card__actions"),m=Object(r.h)("v-card__subtitle"),v=Object(r.h)("v-card__text"),d=Object(r.h)("v-card__title");o.a},382:function(e,t,n){"use strict";n(12),n(11),n(15),n(6),n(20),n(13),n(21);var o=n(2),r=n(120),l=n(82),m=n(119),v=n(24),d=n(1);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(v.a)(r.a,l.a).extend({name:"VLazy",directives:{intersect:m.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.measurableStyles)}},methods:{genContent:function(){var e=this.isActive&&Object(d.l)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},e):e},onObserve:function(e,t,n){this.isActive||(this.isActive=n)}},render:function(e){return e(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},405:function(e,t,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("56407fa2",content,!0,{sourceMap:!1})},406:function(e,t,n){var o=n(27)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap);"]),o.push([e.i,'::-moz-selection{color:#fff;background-color:#ff7582}::selection{color:#fff;background-color:#ff7582}::-webkit-scrollbar{width:6px;height:4px;background:#121212}::-webkit-scrollbar-thumb{background:#fff;border-radius:4px}.page-enter-active,.page-leave-active{transition:opacity .25s ease-in-out}.page-enter,.page-leave-to{opacity:0}.a-custom-button{position:relative;transition:.25s ease-in-out;cursor:pointer;text-decoration:none;color:#fff}.a-custom-button:before{width:0;height:100%;content:" ";position:absolute;bottom:0;transition:width .2s ease-out}.a-custom-button:hover:before{width:100%;border-bottom:2px solid #ff7582}.a-custom-button:after{width:100%;height:4px;content:" ";position:absolute;bottom:-1px;left:0;border-bottom:1px solid #fff;border-top:1px solid #fff;transition:width .2s ease-out}.a-custom-button:hover:after{width:0}.hover-motion{transition:all .25s ease-in}.hover-motion:hover{transform:translateY(-4px)}.hover-motion:focus{-webkit-animation:hover-motion-clicked .25s ease-in;animation:hover-motion-clicked .25s ease-in}@-webkit-keyframes hover-motion-clicked{0%{transform:translateY(0)}40%{transform:translateY(2px)}to{transform:translateY(-2px)}}@keyframes hover-motion-clicked{0%{transform:translateY(0)}40%{transform:translateY(2px)}to{transform:translateY(-2px)}}.hover-fade-in{opacity:.7;transition:all .25s ease-in}.hover-fade-in:hover{opacity:1}.hover-fade-in.v-btn--active{opacity:1!important}h3{font-size:1.1em}.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:"";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{position:relative;height:100%;flex:1 1 auto}.v-timeline-item__divider{position:relative;min-width:96px;display:flex;align-items:center;justify-content:center}.v-timeline-item__dot{z-index:2;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{border-radius:50%;display:flex;justify-content:center;align-items:center}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):before{content:"";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:before{top:12px}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{right:auto;left:calc(50% - 1px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{right:47px;left:auto}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{right:auto;left:47px}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}',""]),e.exports=o},422:function(e,t,n){"use strict";n.r(t);var o={name:"Background",data:function(){return{seo:{title:"Background",description:"A brief summary on my education and work history"},infos:[{title:"AirAsia",duration:"2019 - NOW",desc:"Working in AirAsia cargo subsidiary, Teleport. Promoted from an intern to working full time.",theme_color:"red",icon:"work",direction:"r",act:!1},{title:"Technical Assistant",duration:"2016 - 2020",desc:"Managing computer labs and assisting staff and students on technical issues. Setup and managing VMWare ESXi, VMWare Horizon and vSphere for VDI",theme_color:"green",icon:"work",direction:"l",act:!1},{title:"Bsc Hons in Intelligent Systems",duration:"2018 - 2020",desc:"Did my Degree in Asia Pacific University. Here is my graduation slide that the uni created (ps. they did not include my cat photo despite me sending an email about it).",theme_color:"cyan",icon:"school",direction:"r",act:!1},{title:"eJeeban",duration:"2018 - 2019",desc:"Part-time full stack web developer.",theme_color:"purple",icon:"work",direction:"l",act:!1},{title:"Diploma in Software Engineering",duration:"2016 - 2018",desc:"Did my Diploma in Asia Pacific University too, surprised huh. No graduation slide because we actually had to pay for the graduation ceremony.",theme_color:"orange",icon:"school",direction:"r",act:!1},{title:"Stop scrolling already",duration:"1998 - 2016",desc:"Nothing you need to know about my puberty years...",theme_color:"gray",icon:"child_care",direction:"l",act:!1}]}},created:function(){this.$nuxt.$emit("seo_update",this.seo)},activated:function(){this.$nuxt.$emit("seo_update",this.seo)}},r=n(55),l=n(57),m=n.n(l),v=n(370),d=n(369),c=n(361),f=n(368),h=n(176),_=n(382),y=n(362),x=(n(12),n(11),n(15),n(6),n(20),n(13),n(21),n(2)),w=(n(405),n(24)),O=n(43);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var j=Object(w.a)(O.a).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),D=(n(186),n(92)),P=n(83);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=Object(w.a)(P.a,O.a).extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(D.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var data=this.setBackgroundColor(this.color);return this.$createElement("div",S({staticClass:"v-timeline-item__inner-dot"},data),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:S({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",[e._v("My education and work history")]),e._v(" "),n("p",[e._v("Where I studied and worked")])])],1),e._v(" "),n("v-timeline",{attrs:{dense:e.$vuetify.breakpoint.mdAndDown}},e._m(0),1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return e._l(e.infos,(function(t,i){return n("v-timeline-item",{key:i,attrs:{color:t.theme_color+" lighten-1",right:"r"===t.direction,left:"l"===t.direction},scopedSlots:e._u([e.$vuetify.breakpoint.smAndDown?null:{key:"opposite",fn:function(){return[n("span",{class:"headline font-weight-bold "+t.theme_color+"--text",domProps:{textContent:e._s(t.duration)}})]},proxy:!0}],null,!0)},[e._v(" "),n("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.act,callback:function(n){e.$set(t,"act",n)},expression:"info.act"}},[n("v-card",[n("v-card-title",{class:t.theme_color+" lighten-1"},[n("v-icon",{staticClass:"mr-4",attrs:{dark:"",size:"32"}},[e._v(e._s(t.icon))]),e._v(" "),n("h3",{staticClass:"white--text font-weight-light"},[e._v(e._s(t.title))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?n("v-card-subtitle",[e._v("\n              "+e._s(t.duration)+"\n            ")]):e._e()],1),e._v(" "),n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[e._v(e._s(t.desc))]),e._v(" "),"AirAsia"===t.title?[n("v-col",{attrs:{cols:"12"}},[n("b",[e._v("2020 - Business Intelligence Analyst")]),n("br"),e._v(" "),n("span",{staticClass:"text--secondary"},[e._v("\n                    Understanding business requirements and using data to assist in decision-making.\n                    Identifying opportunities to improve workflows and processes using technology.\n                    BI dashboard building, hands-on system development and managing a few GCP projects too.\n                  ")])]),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("b",[e._v("2019 - Developer")]),n("br"),e._v(" "),n("span",{staticClass:"text--secondary"},[e._v("\n                    Developing ETLs, BI analysis, cloud infrastructure management\n                    and building systems that automate tasks and processes.\n                  ")])])]:e._e(),e._v(" "),"Bsc Hons in Intelligent Systems"===t.title?[n("img",{staticStyle:{width:"100%"},attrs:{src:"/img/graduation_me.webp",alt:"Jonathan's graduation slide"}})]:e._e(),e._v(" "),"Technical Assistant"===t.title?[n("v-col",{attrs:{cols:"12",md:"6"}},[n("b",[e._v("2019 - Promoted to Lab Chief")]),n("br"),e._v(" "),n("span",{staticClass:"text--secondary"},[e._v("\n                    Managing servers, coordinating the Technical Assistants\n                    team, setting up and enforcing SOPs for APU\n                  ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("b",[e._v("2018 - Promoted to Head of Software Department")]),n("br"),e._v(" "),n("span",{staticClass:"text--secondary"},[e._v("\n                    Managing and planning maintenance on campus, setting up\n                    servers and coordinating the Software Department\n                  ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("b",[e._v("2017 - Promoted to Software Department")]),n("br"),e._v(" "),n("span",{staticClass:"text--secondary"},[e._v("\n                    Creating images, automating labs administration\n                  ")])])]:e._e()],2)],1)],1)],1)],1)}))}],!1,null,null,null);t.default=component.exports;m()(component,{VCard:v.a,VCardSubtitle:d.b,VCardTitle:d.d,VCol:c.a,VContainer:f.a,VIcon:h.a,VLazy:_.a,VRow:y.a,VTimeline:j,VTimelineItem:$})}}]);