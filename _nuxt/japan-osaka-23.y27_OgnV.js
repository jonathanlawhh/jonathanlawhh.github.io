import{_ as g,r as a,o as l,c as b,w as t,d as e,g as x,a as c,t as r,e as m,F as S,f as G,h as $}from"./entry.yjXvUMU2.js";const B={name:"TravelPageVideo",props:{title:{type:String,default:null},subtitle:{type:String,default:null},travel_date:{type:String,default:null},youtubeId:{type:String,default:null}}},N=["src"],T={class:"travel-header-main"},V={class:"travel-header-sub"},C={class:"travel-header-sub"};function D(f,i,o,h,v,y){const d=a("v-icon"),_=a("v-btn"),s=a("v-col"),n=a("v-row");return l(),b(n,{style:{position:"relative"}},{default:t(()=>[e(_,{variant:"outlined",onClick:i[0]||(i[0]=u=>f.$router.go(-1)),exact:!0,size:"large",class:"btn-return",rounded:"0",style:{position:"absolute",top:"0",left:"0","z-index":"2","background-image":"linear-gradient(to right, black, rgba(0,0,0,0))"}},{default:t(()=>[e(d,{size:"large",icon:"mdi-chevron-left"}),x(" GO BACK ")]),_:1}),e(s,{cols:"12",class:"travel-iframe-parent"},{default:t(()=>[c("iframe",{class:"travel-iframe",src:"https://www.youtube-nocookie.com/embed/"+o.youtubeId+"?modestbranding=1&autoplay=1&showinfo=0&controls=0&loop=1&mute=1&playlist="+o.youtubeId,frameborder:"0",allow:"autoplay;accelerometer;encrypted-media;",allowfullscreen:""},null,8,N),e(n,{style:{"margin-top":"15%"}},{default:t(()=>[e(s,{cols:"6",class:"text-right",style:{background:"rgba(0,0,0, 0.6)"}},{default:t(()=>[c("h3",T,r(o.title),1)]),_:1}),e(s,{cols:"6",class:"text-left",style:{background:"rgba(0,0,0, 0.4)"}},{default:t(()=>[c("p",V,r(o.subtitle),1),c("p",C,r(o.travel_date),1)]),_:1})]),_:1})]),_:1})]),_:1})}const M=g(B,[["render",D],["__scopeId","data-v-efef823e"]]),O={name:"japan-osaka-23",data(){return{travel_obj:[{place:"Arashiyama Bamboo Forest",desc:"Many bamboo..."},{place:"Kyoto Gionmachi Minamigawa",desc:"Geisha street"},{place:"Dotonbori Street / Glico Guy",desc:"Very happening at night, food and entertainment"},{place:"Umeda",desc:"Shopping town"},{place:"Nara Deer Park",desc:"Oh deers"},{place:"teamLab Botanical Garden",desc:"Many lights, buy tickets online"},{place:"Universal Studio Japan",desc:"There is single people lane, usually faster"},{place:"Osaka Castle",desc:"Long walk in from train station..."},{place:"Tsutenkaku/Glico Man Tower",desc:"Ate skewers nearby"},{place:"Shinsekai Market",desc:"Just a wet market"}]}}},j={class:"text-no-wrap font-weight-black pa-1",style:{background:"white",color:"#262626"}},I={key:0,class:"pa-1"};function P(f,i,o,h,v,y){const d=M,_=a("v-card-item"),s=a("v-card"),n=a("v-col"),u=a("v-row"),k=a("v-img");return l(),m("div",null,[e(d,{title:"Travels Japan 23",subtitle:"Osaka Kyoto Nara",travel_date:"01 . 07 . 2023 - 07. 07 . 2023","youtube-id":"DNGlpDPrDbs"}),e(u,null,{default:t(()=>[e(n,{cols:"12",md:"7"},{default:t(()=>[e(u,{class:"d-flex flex-wrap"},{default:t(()=>[(l(!0),m(S,null,G(v.travel_obj,(p,w)=>(l(),b(n,{key:w,class:"align-self-stretch"},{default:t(()=>[e(s,{style:{"min-height":"124px"},width:"100%",class:"text-center align-self-center align-content-center",variant:"outlined"},{default:t(()=>[e(_,{class:"d-inline-block"},{default:t(()=>[c("p",j,r(p.place),1),p.desc?(l(),m("p",I,r(p.desc),1)):$("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(n,{cols:"12",md:"5"},{default:t(()=>[e(k,{src:"/map/osaka-map.webp",cover:"",height:"100%"})]),_:1})]),_:1})])}const A=g(O,[["render",P]]);export{A as default};