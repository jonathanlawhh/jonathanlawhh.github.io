import{_ as u,r as a,o as n,c as i,w as t,a as m,t as o,g as _,d as c,h as r}from"./entry.Ot-ZljD7.js";const f={name:"GalleryImageComponent",props:{imgObj:{type:Object,default:null}}},j=["src","alt"];function x(O,w,e,h,y,k){const v=a("v-card-title"),s=a("v-card-text"),g=a("v-spacer"),l=a("v-btn"),b=a("v-card-actions"),d=a("v-card");return n(),i(d,{class:"outer-card"},{default:t(()=>[m("img",{src:e.imgObj.src,class:"outer-card-bg",alt:e.imgObj.description},null,8,j),c(s,{style:{padding:"0"}},{default:t(()=>[c(d,{class:"inner-card"},{default:t(()=>[c(v,{class:"text-bg mt-4 text-wrap"},{default:t(()=>[_(o(e.imgObj.title),1)]),_:1}),c(s,{class:"inner-card-text"},{default:t(()=>[m("p",null,o(e.imgObj.description),1)]),_:1}),e.imgObj.view?(n(),i(b,{key:0},{default:t(()=>[c(g),e.imgObj.view[0]==="h"||e.imgObj.view.slice(0,9)==="/gallery/"?(n(),i(l,{key:0,class:"hover-fade-in hover-motion",variant:"text",href:e.imgObj.view,size:"small",target:"_blank",rel:"noopener"},{default:t(()=>[_(" [ "+o(e.imgObj.view_text?e.imgObj.view_text:"Click here to see more")+" ] ",1)]),_:1},8,["href"])):r("",!0),e.imgObj.view[0]==="/"&&e.imgObj.view.slice(0,9)!=="/gallery/"?(n(),i(l,{key:1,class:"hover-fade-in hover-motion",variant:"text",to:e.imgObj.view},{default:t(()=>[_(" [ "+o(e.imgObj.view_text?e.imgObj.view_text:"Click here to see more")+" ] ",1)]),_:1},8,["to"])):r("",!0)]),_:1})):r("",!0)]),_:1})]),_:1})]),_:1})}const N=u(f,[["render",x],["__scopeId","data-v-5d41f5b9"]]);export{N as _};