(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{343:function(t,o,e){var content=e(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("1ef8edd4",content,!0,{sourceMap:!1})},348:function(t,o,e){"use strict";e(343)},349:function(t,o,e){var n=e(23)(!1);n.push([t.i,".ic_scroll_down[data-v-3bfc34a7]{-webkit-animation:pulse-data-v-3bfc34a7 2s ease-out;animation:pulse-data-v-3bfc34a7 2s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.ic_scroll_down[data-v-3bfc34a7]:hover{transform:rotate(1turn)}@-webkit-keyframes pulse-data-v-3bfc34a7{0%{font-size:40px}10%{font-size:56px}20%{font-size:40px}to{font-size:40px}}@keyframes pulse-data-v-3bfc34a7{0%{font-size:40px}10%{font-size:56px}20%{font-size:40px}to{font-size:40px}}",""]),t.exports=n},350:function(t,o,e){"use strict";e.r(o);e(31);var n={name:"LandingComponent",props:{title:{type:String,default:"",required:!0}},data:function(){return{quotes:["scroll down to see stuffs","going down wont let you down","something is lurking below","dive down","down is up"],activated:!1}},mounted:function(){var t=this;window.scrollTo(0,0),setTimeout((function(){null!==document.getElementById("content")&&t.scroll_to_content()}),2e3),setTimeout((function(){t.activated=!0}),3e3)},methods:{scroll_to_content:function(){this.$vuetify.goTo("#content",{offset:-120,easing:"easeInOutCubic"})}}},c=(e(348),e(49)),l=e(53),r=e.n(l),f=e(236),d=e(332),v=e(160),_=e(333),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("v-row",{staticStyle:{position:"sticky",top:"72px","z-index":"6"}},[e("v-col",{attrs:{cols:"12"}},[e("v-btn",{attrs:{outlined:"",text:"",to:"/works/",exact:"",large:""}},[e("v-icon",[t._v("chevron_left")]),t._v("BACK TO WORKS")],1)],1)],1),t._v(" "),t.activated?t._e():e("v-row",{staticClass:"text-center",staticStyle:{height:"70vh"},attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("h3",{staticClass:"display-3 font-weight-bold"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"font-weight-thin"},[t._v("\n        "+t._s(t.quotes[Math.floor(5*Math.random())])+"\n      ")]),t._v(" "),e("v-btn",{staticClass:"ma-16",attrs:{"x-large":"",icon:""},on:{click:t.scroll_to_content}},[e("v-icon",{staticClass:"ic_scroll_down"},[t._v("keyboard_arrow_down")])],1)],1)],1)],1)}),[],!1,null,"3bfc34a7",null);o.default=component.exports;r()(component,{VBtn:f.a,VCol:d.a,VIcon:v.a,VRow:_.a})}}]);