import{_ as A,o as w,e as $,a as t,p as N,i as j,u as D,j as O,k as C,l as H,m as T,q as U,s as M,v as W,x as J,y as Q,z as P,r as x,A as X,B as Y,C as K,D as Z,E as ee,G as V,H as te,I as ne,J as ae,c as F,w as l,d as s,g as _,K as B,F as L,t as E,f as R}from"./entry.Ot-ZljD7.js";const oe={name:"ImageFrame",props:{imageUrl:{type:String,default:""},altText:{type:String,default:""}}},se=e=>(N("data-v-06388557"),e=e(),j(),e),le={style:{position:"relative","max-width":"320px","max-height":"320px","min-width":"320px","min-height":"320px","background-color":"#424242"}},re=["src","alt"],ie=se(()=>t("div",{class:"f-frame",style:{"--frame-color":"#fff"}},null,-1));function ce(e,a,u,n,r,c){return w(),$("div",le,[t("img",{src:u.imageUrl,alt:u.altText,height:"100%",class:"img"},null,8,re),ie])}const ue=A(oe,[["render",ce],["__scopeId","data-v-06388557"]]);async function z(e,a=D()){const{path:u,matched:n}=a.resolve(e);if(!n.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(u)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>z(e,a));a._routePreloaded.add(u);const c=n.map(i=>{var o;return(o=i.components)==null?void 0:o.default}).filter(i=>typeof i=="function");for(const i of c){const o=Promise.resolve(i()).catch(()=>{}).finally(()=>r.splice(r.indexOf(o)));r.push(o)}await Promise.all(r)}const de=(...e)=>e.find(a=>a!==void 0),_e="noopener noreferrer";function he(e){const a=e.componentName||"NuxtLink",u=(n,r)=>{if(!n||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return n;if(typeof n=="string")return q(n,e.trailingSlash);const c="path"in n?n.path:r(n).path;return{...n,name:void 0,path:q(c,e.trailingSlash)}};return O({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const c=D(),i=ee(),o=C(()=>{const d=n.to||n.href||"";return u(d,c.resolve)}),h=C(()=>typeof o.value=="string"&&H(o.value,{acceptRelative:!0})),m=C(()=>n.external||n.target&&n.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||h.value),v=T(!1),g=T(null),G=d=>{var y;g.value=n.custom?(y=d==null?void 0:d.$el)==null?void 0:y.nextElementSibling:d==null?void 0:d.$el};if(n.prefetch!==!1&&n.noPrefetch!==!0&&n.target!=="_blank"&&!pe()){const y=V();let k,p=null;U(()=>{const I=fe();M(()=>{k=W(()=>{var S;(S=g==null?void 0:g.value)!=null&&S.tagName&&(p=I.observe(g.value,async()=>{p==null||p(),p=null;const b=typeof o.value=="string"?o.value:c.resolve(o.value).fullPath;await Promise.all([y.hooks.callHook("link:prefetch",b).catch(()=>{}),!m.value&&z(o.value,c).catch(()=>{})]),v.value=!0}))})})}),J(()=>{k&&Q(k),p==null||p(),p=null})}return()=>{var I,S;if(!m.value){const b={ref:G,to:o.value,activeClass:n.activeClass||e.activeClass,exactActiveClass:n.exactActiveClass||e.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom};return n.custom||(v.value&&(b.class=n.prefetchedClass||e.prefetchedClass),b.rel=n.rel),P(x("RouterLink"),b,r.default)}const d=typeof o.value=="object"?((I=c.resolve(o.value))==null?void 0:I.href)??null:o.value&&!n.external&&!h.value?u(X(i.app.baseURL,o.value),c.resolve):o.value||null,y=n.target||null,k=n.noRel?null:de(n.rel,e.externalRelAttribute,d?_e:"")||null,p=()=>te(d,{replace:n.replace});return n.custom?r.default?r.default({href:d,navigate:p,get route(){if(!d)return;const b=Y(d);return{path:b.pathname,fullPath:b.pathname,get query(){return K(b.search)},hash:b.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d}},rel:k,target:y,isExternal:m.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:g,href:d,rel:k,target:y},(S=r.default)==null?void 0:S.call(r))}}})}const me=he(Z);function q(e,a){const u=a==="append"?ne:ae;return H(e)&&!e.startsWith("http")?e:u(e,!0)}function fe(){const e=V();if(e._observer)return e._observer;let a=null;const u=new Map,n=(c,i)=>(a||(a=new IntersectionObserver(o=>{for(const h of o){const m=u.get(h.target);(h.isIntersecting||h.intersectionRatio>0)&&m&&m()}})),u.set(c,i),a.observe(c),()=>{u.delete(c),a.unobserve(c),u.size===0&&(a.disconnect(),a=null)});return e._observer={observe:n}}function pe(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const ve={name:"Activities"},ge=t("h2",{class:"text-center text-black"},"Activities",-1),be=t("p",{class:"text-center text-black"},"Stuff I do whenever I am free",-1),xe=t("h3",{class:"text-center"}," I write stuff at Medium/Towards Data Science. ",-1),ye=t("p",{class:"text-center mt-4"},[_(" Check out "),t("a",{href:"https://jonathanlawhh.medium.com/",target:"_blank",rel:"noopener",class:"a-custom-button white--text text-decoration-none"}," my tech blog! ")],-1),we=t("h3",{class:"text-center"}," Projects made, because why not ",-1),ke={class:"text-center mt-4"},Se=t("h3",{class:"text-center"},"A venture into creating NFT art using data from YouTube captions, or computed generated art",-1),$e={class:"text-center mt-4"};function Ie(e,a,u,n,r,c){const i=x("v-col"),o=x("v-card"),h=me,m=x("v-row");return w(),F(m,{style:{"background-color":"#ececec","min-height":"320px","border-radius":"4px"},justify:"center",align:"center"},{default:l(()=>[s(i,{cols:"12"},{default:l(()=>[ge,be]),_:1}),s(i,{cols:"12",md:"4",xl:"3"},{default:l(()=>[s(o,{class:"pa-8",elevation:"16",style:{"min-height":"180px"}},{default:l(()=>[xe,ye]),_:1})]),_:1}),s(i,{cols:"12",md:"4",xl:"3"},{default:l(()=>[s(o,{class:"pa-8",elevation:"16",style:{"min-height":"180px"}},{default:l(()=>[we,t("p",ke,[_(" Check out "),s(h,{to:"/works/",class:"a-custom-button white--text text-decoration-none"},{default:l(()=>[_(" my works ")]),_:1})])]),_:1})]),_:1}),s(i,{cols:"12",md:"4",xl:"3"},{default:l(()=>[s(o,{class:"pa-8",elevation:"16",style:{"min-height":"180px"}},{default:l(()=>[Se,t("p",$e,[_(" Browse "),s(h,{to:"/works/nft",class:"a-custom-button white--text text-decoration-none"},{default:l(()=>[_('my "art/s"')]),_:1})])]),_:1})]),_:1})]),_:1})}const Ae=A(ve,[["render",Ie]]),Ce={name:"Skills",data(){return{skills:[{title:"Data",description:`- Analyst, Visualizing<br />
           <span class="ml-8 custom-mini-text">(Power BI, Tableau etc...)</span><br />
           - Engineering<br />
           <span class="ml-8 custom-mini-text">(ETL/ELT, Warehousing, BigQuery)</span>
          `},{title:"Artificial Intelligence",description:`- Computer vision<br />
            <span class="ml-8 custom-mini-text">(OpenCV, Tensorflow)</span>
          `},{title:"Programming",description:`- Python, Golang, Laravel <span class="custom-mini-text">(PHP)</span><br />
            - NodeJS, VueJS, Web Technologies <span class="custom-mini-text">(PWA...)</span><br />
            - Scripting <span class="custom-mini-text">(PS, BASH, cronjobs...)</span><br />
            - Grabbing cat facts from APIs<br />
            - Bruteforce until something works
          `},{title:"Infra & others",description:`- Terraform, Google Cloud, Azure<br />
            - Servers <span class="custom-mini-text">(Active Directory, DNS etc)</span><br />
            - Automations, CI/CD, Github<br />
            - VMware ESXi, vSphere, Horizon<br />
            - Adobe Suite<br />
          `}]}}},f=e=>(N("data-v-4caea955"),e=e(),j(),e),Te=f(()=>t("h2",null,"Things I do",-1)),Pe=f(()=>t("br",null,null,-1)),Be=f(()=>t("strong",null,"What I tell people I do:",-1)),Le=f(()=>t("br",null,null,-1)),Ee={class:"ma-2 hover-motion a-custom-button"},Re=f(()=>t("br",null,null,-1)),qe=f(()=>t("br",null,null,-1)),Ne=f(()=>t("br",null,null,-1)),je=f(()=>t("strong",null,"What I actually do:",-1)),De=f(()=>t("br",null,null,-1)),He=f(()=>t("br",null,null,-1)),Ve=f(()=>t("br",null,null,-1)),Fe=f(()=>t("h2",null,"Things I do, specifically",-1)),ze={class:"custom-card-overlay hover-motion"},Ge={style:{"font-size":"140%"}},Oe=["innerHTML"];function Ue(e,a,u,n,r,c){const i=x("v-col"),o=x("v-row"),h=x("v-card-item"),m=x("v-card");return w(),$("div",null,[a[0]||(B(-1),a[0]=s(o,null,{default:l(()=>[s(i,{cols:"12",class:"text-center"},{default:l(()=>[Te]),_:1})]),_:1}),B(1),a[0]),s(o,null,{default:l(()=>[s(i,{cols:"12"},{default:l(()=>[s(m,{variant:"outlined",rounded:"lg"},{default:l(()=>[s(h,null,{default:l(()=>[t("p",null,[Pe,Be,Le,_(" [ "),(w(),$(L,null,R(["Logistics and supply chain management","Data analysis and visualization","Process improvement","Automation, AI","System administrator"],v=>t("button",Ee,E(v),1)),64)),_(" ] "),Re,qe,Ne,je,De,_(" I grab cat facts and send them to the company group chat every time someone requests to move something from the warehouse. "),He,Ve])]),_:1})]),_:1})]),_:1})]),_:1}),s(o,{class:"mt-12"},{default:l(()=>[s(i,{cols:"12",class:"text-center"},{default:l(()=>[Fe]),_:1})]),_:1}),s(o,{class:"mt-8"},{default:l(()=>[(w(!0),$(L,null,R(r.skills,(v,g)=>(w(),F(i,{key:g,cols:"12",md:"6",lg:"3",class:"mb-8"},{default:l(()=>[s(m,{class:"hover-motion",style:{position:"relative",border:"1px solid white",overflow:"visible"}},{default:l(()=>[t("div",ze,[s(m,{class:"custom-card-overlay-card",elevation:"12",theme:"light"},{default:l(()=>[t("h3",Ge,E(v.title),1)]),_:2},1024)]),s(h,null,{default:l(()=>[t("p",{class:"ml-8",style:{"margin-top":"40px"},innerHTML:v.description},null,8,Oe)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const Me=A(Ce,[["render",Ue],["__scopeId","data-v-4caea955"]]),We={name:"Home",data:()=>({intros:["I CODE PROGRAMS","I CREATE ROBOTS","I GIVE THEM EYES","I SPIN WEBS","I GRAB CAT FACTS"],current_intro:0}),mounted(){let e=1;const a=document.getElementById("whack_intro_block");setInterval(()=>{a.classList.remove("whack_intro"),e=e===this.intros.length-1?0:e+1,a.innerText=this.intros[e],a.offsetWidth,a.classList.add("whack_intro")},3e3)},methods:{jumpDown(){window.scrollTo({top:9999,left:0,behavior:"smooth"})}}},Je=t("p",{class:"text-h4 mb-4"},"Hi there !",-1),Qe=t("span",{class:"my_name font-weight-bold"},"Jonathan Law Hui Hao",-1),Xe=t("br",null,null,-1),Ye=t("br",null,null,-1),Ke=t("br",null,null,-1),Ze=t("br",null,null,-1),et=t("br",null,null,-1),tt=t("br",null,null,-1),nt=t("br",null,null,-1),at=t("span",{class:"text-no-wrap"},[_(" email "),t("a",{class:"a-custom-button",rel:"nofollow",href:"mailto:me@jonathanlawhh.com"},"me@jonathanlawhh.com")],-1),ot=t("br",null,null,-1),st=t("br",null,null,-1),lt=t("p",{id:"whack_intro_block",class:"mt-8 font-weight-bold whack_intro"},null,-1);function rt(e,a,u,n,r,c){const i=ue,o=x("v-col"),h=x("v-row"),m=Ae,v=Me;return w(),$("div",null,[s(h,{class:"mb-8"},{default:l(()=>[s(o,{xl:"3",lg:"4",md:"6",sm:"12"},{default:l(()=>[s(i,{"image-url":"/img/me.webp",style:{width:"100%",height:"100%"},class:"ma-2","alt-text":"An image of Jonathan Law on a yacht"})]),_:1}),s(o,{xl:"9",lg:"8",md:"6",sm:"12"},{default:l(()=>[Je,t("p",null,[_(" I am "),Qe,_(", a Business Support Specialist in Malaysia. "),Xe,Ye,_(" I combine logistics and process improvement with technology."),Ke,_(" Whether it's optimizing workflows, analyzing data, or automating tasks to drive efficiency, I find joy in the challenge of navigating complex systems. "),Ze,et,_(" No ChatGPT was involved here, just many years of scrolling LinkedIn and Grammarly. "),tt,nt,_(" Anyway, do say hi via the "),t("button",{type:"button",class:"a-custom-button",onClick:a[0]||(a[0]=(...g)=>c.jumpDown&&c.jumpDown(...g))},"site chatbox"),_(" below the page or "),at,ot,st]),lt]),_:1})]),_:1}),s(m,{class:"mb-16"}),s(v,{class:"mb-8"})])}const ct=A(We,[["render",rt]]);export{ct as default};