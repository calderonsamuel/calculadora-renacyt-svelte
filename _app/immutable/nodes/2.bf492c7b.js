import{s as le,r as Oe,f as C,a as D,g as P,h as S,d as v,c as N,j as h,i as T,x as y,y as Be,z as Ge,A as We,l as me,m as _e,D as pe,E as Tt,F as rt,n as Ne,B as te,G as Kt,H as Le,I as fn,C as A,v as z,p as O,J as B,K as Yt,L as Ht,e as ne,u as dn,w as pn,M as Mt,N as mn,o as _n,O as Je,P as bn,Q as hn,R as Dt,S as vn,T as gn}from"../chunks/scheduler.00bfd1ee.js";import{S as ie,i as re,a as k,t as E,b as V,d as j,m as F,e as Q,f as G,g as fe,c as de,h as R}from"../chunks/index.bfaa6a11.js";import{d as $e,w as U}from"../chunks/index.398fa675.js";function we(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function In(i,e){const l={},t={},r={$$scope:1};let n=i.length;for(;n--;){const o=i[n],a=e[n];if(a){for(const s in o)s in a||(t[s]=1);for(const s in a)r[s]||(l[s]=a[s],r[s]=1);i[n]=a}else for(const s in o)r[s]=1}for(const o in t)o in l||(l[o]=void 0);return l}const yn=i=>({}),Nt=i=>({}),kn=i=>({}),qt=i=>({});function Cn(i){let e;return{c(){e=me("Item's header")},l(l){e=_e(l,"Item's header")},m(l,t){T(l,e,t)},d(l){l&&v(e)}}}function Pn(i){let e;return{c(){e=me("Item's body")},l(l){e=_e(l,"Item's body")},m(l,t){T(l,e,t)},d(l){l&&v(e)}}}function $n(i){let e,l,t,r,n,o,a,s,u,c,p;const d=i[5].header,f=Oe(d,i,i[4],qt),_=f||Cn(),b=i[5].body,$=Oe(b,i,i[4],Nt),L=$||Pn();return{c(){e=C("div"),l=C("h2"),t=C("button"),_&&_.c(),o=D(),a=C("div"),s=C("div"),L&&L.c(),this.h()},l(I){e=P(I,"DIV",{class:!0});var M=S(e);l=P(M,"H2",{class:!0,id:!0});var H=S(l);t=P(H,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var q=S(t);_&&_.l(q),q.forEach(v),H.forEach(v),o=N(M),a=P(M,"DIV",{id:!0,class:!0,"data-bs-parent":!0,"aria-labelledby":!0});var Y=S(a);s=P(Y,"DIV",{class:!0});var J=S(s);L&&L.l(J),J.forEach(v),Y.forEach(v),M.forEach(v),this.h()},h(){h(t,"class","accordion-button "+i[3].btn+" svelte-13astr0"),h(t,"type","button"),h(t,"data-bs-toggle","collapse"),h(t,"data-bs-target",r="#"+i[1]),h(t,"aria-expanded",i[2]),h(t,"aria-controls",i[1]),h(l,"class","accordion-header"),h(l,"id",n=i[1]+"-header"),h(s,"class","accordion-body svelte-13astr0"),h(a,"id",i[1]),h(a,"class","accordion-collapse "+i[3].content+" svelte-13astr0"),h(a,"data-bs-parent",u="#"+i[0]),h(a,"aria-labelledby",c=i[1]+"-header"),h(e,"class","accordion-item")},m(I,M){T(I,e,M),y(e,l),y(l,t),_&&_.m(t,null),y(e,o),y(e,a),y(a,s),L&&L.m(s,null),p=!0},p(I,[M]){f&&f.p&&(!p||M&16)&&Be(f,d,I,I[4],p?We(d,I[4],M,kn):Ge(I[4]),qt),(!p||M&2&&r!==(r="#"+I[1]))&&h(t,"data-bs-target",r),(!p||M&4)&&h(t,"aria-expanded",I[2]),(!p||M&2)&&h(t,"aria-controls",I[1]),(!p||M&2&&n!==(n=I[1]+"-header"))&&h(l,"id",n),$&&$.p&&(!p||M&16)&&Be($,b,I,I[4],p?We(b,I[4],M,yn):Ge(I[4]),Nt),(!p||M&2)&&h(a,"id",I[1]),(!p||M&1&&u!==(u="#"+I[0]))&&h(a,"data-bs-parent",u),(!p||M&2&&c!==(c=I[1]+"-header"))&&h(a,"aria-labelledby",c)},i(I){p||(k(_,I),k(L,I),p=!0)},o(I){E(_,I),E(L,I),p=!1},d(I){I&&v(e),_&&_.d(I),L&&L.d(I)}}}function En(i,e,l){let{$$slots:t={},$$scope:r}=e,{parentId:n}=e,{itemId:o}=e,{expanded:a=!1}=e,s={btn:a?"":"collapsed",content:a?"collapse show":"collapse"};return i.$$set=u=>{"parentId"in u&&l(0,n=u.parentId),"itemId"in u&&l(1,o=u.itemId),"expanded"in u&&l(2,a=u.expanded),"$$scope"in u&&l(4,r=u.$$scope)},[n,o,a,s,r,t]}class st extends ie{constructor(e){super(),re(this,e,En,$n,le,{parentId:0,itemId:1,expanded:2})}}function At(i,e,l){const t=i.slice();return t[5]=e[l],t}function St(i){let e,l=i[5].label+"",t,r;return{c(){e=C("option"),t=me(l),this.h()},l(n){e=P(n,"OPTION",{});var o=S(e);t=_e(o,l),o.forEach(v),this.h()},h(){e.__value=r=i[5].value,Le(e,e.__value)},m(n,o){T(n,e,o),y(e,t)},p(n,o){o&8&&l!==(l=n[5].label+"")&&Ne(t,l),o&8&&r!==(r=n[5].value)&&(e.__value=r,Le(e,e.__value))},d(n){n&&v(e)}}}function Ln(i){let e,l,t,r,n,o,a,s=we(i[3]),u=[];for(let c=0;c<s.length;c+=1)u[c]=St(At(i,s,c));return{c(){e=C("div"),l=C("label"),t=me(i[2]),r=D(),n=C("select");for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){e=P(c,"DIV",{class:!0});var p=S(e);l=P(p,"LABEL",{for:!0,class:!0});var d=S(l);t=_e(d,i[2]),d.forEach(v),r=N(p),n=P(p,"SELECT",{id:!0,class:!0,"aria-label":!0});var f=S(n);for(let _=0;_<u.length;_+=1)u[_].l(f);f.forEach(v),p.forEach(v),this.h()},h(){h(l,"for",i[1]),h(l,"class","me-1"),h(n,"id",i[1]),h(n,"class","form-select me-2"),h(n,"aria-label","Default select example"),i[0]===void 0&&pe(()=>i[4].call(n)),h(e,"class","")},m(c,p){T(c,e,p),y(e,l),y(l,t),y(e,r),y(e,n);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(n,null);Tt(n,i[0],!0),o||(a=rt(n,"change",i[4]),o=!0)},p(c,[p]){if(p&4&&Ne(t,c[2]),p&2&&h(l,"for",c[1]),p&8){s=we(c[3]);let d;for(d=0;d<s.length;d+=1){const f=At(c,s,d);u[d]?u[d].p(f,p):(u[d]=St(f),u[d].c(),u[d].m(n,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=s.length}p&2&&h(n,"id",c[1]),p&9&&Tt(n,c[0])},i:te,o:te,d(c){c&&v(e),Kt(u,c),o=!1,a()}}}function wn(i,e,l){let{id:t="select-input-id"}=e,{label:r=""}=e,{options:n}=e,{selected:o}=e;function a(){o=fn(this),l(0,o),l(3,n)}return i.$$set=s=>{"id"in s&&l(1,t=s.id),"label"in s&&l(2,r=s.label),"options"in s&&l(3,n=s.options),"selected"in s&&l(0,o=s.selected)},[o,t,r,n,a]}class Xt extends ie{constructor(e){super(),re(this,e,wn,Ln,le,{id:1,label:2,options:3,selected:0})}}const Ke=U(0),Ye=U(0),Xe=U(0),Ze=U(0),xe=U(0),Te=U(0),et=U(0),tt=U(0),He=U(0),Me=U(0),De=U(0),nt=U(0),lt=U(0),it=U(0),at=$e(Ke,i=>i),Tn=$e([He,Me],([i,e])=>i*2+e),ot=$e([Ye,Xe,Ze,xe,Te,et,tt,He,Me,De],([i,e,l,t,r,n,o,a,s])=>{let u=i*5+e*4+l*3+t*2,c=r>10?10:r,p=n*3+o,d=a*2+s,f=d>10?10:d;return u+c+p+f}),ut=$e([nt,lt,it],([i,e,l])=>{let t=i*.5+e*1+l*2;return t>10?10:t}),Zt=$e([at,ot,ut],([i,e,l])=>i+e+l);function Hn(i){let e,l=`<i class="bi bi-bank"></i>
        Formación`;return{c(){e=C("span"),e.innerHTML=l,this.h()},l(t){e=P(t,"SPAN",{slot:!0,class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-uqqh99"&&(e.innerHTML=l),this.h()},h(){h(e,"slot","header"),h(e,"class","fs-5")},m(t,r){T(t,e,r)},p:te,d(t){t&&v(e)}}}function Mn(i){let e,l,t,r;function n(a){i[2](a)}let o={id:"grado-academico",label:"A. Grado académico (registrado en SUNEDU o MINEDU)",options:[{value:0,label:"Ninguno-0pts"},{value:1,label:"Estudiante matriculado-1pt"},{value:2,label:"Bachiller o egresado-2pts"},{value:4,label:"Título profesional-4pts"},{value:6,label:"Magister-6 pts"},{value:10,label:"Doctor-10 pts"}]};return i[1]!==void 0&&(o.selected=i[1]),l=new Xt({props:o}),O.push(()=>G(l,"selected",n)),{c(){e=C("div"),V(l.$$.fragment),this.h()},l(a){e=P(a,"DIV",{slot:!0});var s=S(e);j(l.$$.fragment,s),s.forEach(v),this.h()},h(){h(e,"slot","body")},m(a,s){T(a,e,s),F(l,e,null),r=!0},p(a,s){const u={};!t&&s&2&&(t=!0,u.selected=a[1],B(()=>t=!1)),l.$set(u)},i(a){r||(k(l.$$.fragment,a),r=!0)},o(a){E(l.$$.fragment,a),r=!1},d(a){a&&v(e),Q(l)}}}function Dn(i){let e,l;return e=new st({props:{parentId:i[0],itemId:"formacion",expanded:!0,$$slots:{body:[Mn],header:[Hn]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){F(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.parentId=t[0]),r&10&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Nn(i,e,l){let t;A(i,Ke,o=>l(1,t=o));let{parentId:r}=e;function n(o){t=o,Ke.set(t)}return i.$$set=o=>{"parentId"in o&&l(0,r=o.parentId)},[r,t,n]}class qn extends ie{constructor(e){super(),re(this,e,Nn,Dn,le,{parentId:0})}}function An(i){let e,l,t,r,n,o,a,s;return{c(){e=C("div"),l=C("input"),t=D(),r=C("label"),n=me(i[2]),this.h()},l(u){e=P(u,"DIV",{class:!0});var c=S(e);l=P(c,"INPUT",{type:!0,class:!0,id:!0,min:!0,max:!0}),t=N(c),r=P(c,"LABEL",{for:!0,class:!0});var p=S(r);n=_e(p,i[2]),p.forEach(v),c.forEach(v),this.h()},h(){h(l,"type","number"),h(l,"class","form-control"),h(l,"id",i[1]),h(l,"min",i[3]),h(l,"max",i[4]),h(r,"for",i[1]),h(r,"class","w-100"),h(e,"class",o="form-floating "+i[5])},m(u,c){T(u,e,c),y(e,l),Le(l,i[0]),y(e,t),y(e,r),y(r,n),a||(s=rt(l,"input",i[6]),a=!0)},p(u,[c]){c&2&&h(l,"id",u[1]),c&8&&h(l,"min",u[3]),c&16&&h(l,"max",u[4]),c&1&&Yt(l.value)!==u[0]&&Le(l,u[0]),c&4&&Ne(n,u[2]),c&2&&h(r,"for",u[1]),c&32&&o!==(o="form-floating "+u[5])&&h(e,"class",o)},i:te,o:te,d(u){u&&v(e),a=!1,s()}}}function Sn(i,e,l){let{id:t}=e,{label:r}=e,{value:n}=e,{min:o=-1/0}=e,{max:a=1/0}=e,{inputClass:s="mb-3"}=e;function u(){n=Yt(this.value),l(0,n)}return i.$$set=c=>{"id"in c&&l(1,t=c.id),"label"in c&&l(2,r=c.label),"value"in c&&l(0,n=c.value),"min"in c&&l(3,o=c.min),"max"in c&&l(4,a=c.max),"inputClass"in c&&l(5,s=c.inputClass)},[n,t,r,o,a,s,u]}class X extends ie{constructor(e){super(),re(this,e,Sn,An,le,{id:1,label:2,value:0,min:3,max:4,inputClass:5})}}function Vn(i){let e,l=`<i class="bi bi-book"></i>
        Producción`;return{c(){e=C("span"),e.innerHTML=l,this.h()},l(t){e=P(t,"SPAN",{slot:!0,class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-v2zm3e"&&(e.innerHTML=l),this.h()},h(){h(e,"slot","header"),h(e,"class","fs-5")},m(t,r){T(t,e,r)},p:te,d(t){t&&v(e)}}}function jn(i){let e,l,t="B. Artículos científicos en revistas indizadas",r,n,o="Nº de Art. cient. Scopus o Web of Science (Scimago o JCR)",a,s,u,c,p,d,f,_,b,$,L,I,M,H,q,Y="Conference Proceeding (Scopus o WoS)/Scielo",J,m,ee,se,K,Ie="C. Registros de propiedad intelectual, concedidas y registradas en INDECOPI, SCOPUS u otras",ye,Z,ke,qe,be,he,ae,Ae,Se,ve,ct="D. Publicaciones de libros y/o capítulos de libro indizados",Ve,oe,je,Fe,ue,Qe,ze,ge,ft="E. Índice H Scopus",Re,ce,Ue,Ee;function en(g){i[11](g)}let dt={id:"produccion-q1",label:"Q1-5pt",min:0,inputClass:"col px-1"};i[1]!==void 0&&(dt.value=i[1]),u=new X({props:dt}),O.push(()=>G(u,"value",en));function tn(g){i[12](g)}let pt={id:"produccion-q2",label:"Q2-4pt",min:0,inputClass:"col px-1"};i[2]!==void 0&&(pt.value=i[2]),d=new X({props:pt}),O.push(()=>G(d,"value",tn));function nn(g){i[13](g)}let mt={id:"produccion-q3",label:"Q3-3pt",min:0,inputClass:"col px-1"};i[3]!==void 0&&(mt.value=i[3]),b=new X({props:mt}),O.push(()=>G(b,"value",nn));function ln(g){i[14](g)}let _t={id:"produccion-q4",label:"Q4-2pt",min:0,inputClass:"col px-1"};i[4]!==void 0&&(_t.value=i[4]),I=new X({props:_t}),O.push(()=>G(I,"value",ln));function rn(g){i[15](g)}let bt={id:"produccion-conference",label:"Nº-1pt",min:0};i[5]!==void 0&&(bt.value=i[5]),m=new X({props:bt}),O.push(()=>G(m,"value",rn));function sn(g){i[16](g)}let ht={id:"produccion-pat-inv",label:"Patente de invención o Certificado de Obtentor o Paquete Tecnológico-3pt",min:0};i[6]!==void 0&&(ht.value=i[6]),Z=new X({props:ht}),O.push(()=>G(Z,"value",sn));function an(g){i[17](g)}let vt={id:"produccion-pat-mod",label:"Patente de modelo de utilidad o certificado de derecho de autor por software-1pt",min:0};i[7]!==void 0&&(vt.value=i[7]),ae=new X({props:vt}),O.push(()=>G(ae,"value",an));function on(g){i[18](g)}let gt={id:"produccion-libros",label:"Nº de libros-2pt",min:0};i[8]!==void 0&&(gt.value=i[8]),oe=new X({props:gt}),O.push(()=>G(oe,"value",on));function un(g){i[19](g)}let It={id:"produccion-capitulos",label:"Nº de capítulos de libro-1pt",min:0};i[9]!==void 0&&(It.value=i[9]),ue=new X({props:It}),O.push(()=>G(ue,"value",un));function cn(g){i[20](g)}let yt={id:"produccion-h",label:"¿Valor del índice H > 10?",options:[{value:0,label:"No"},{value:1,label:"Sí"}]};return i[10]!==void 0&&(yt.selected=i[10]),ce=new Xt({props:yt}),O.push(()=>G(ce,"selected",cn)),{c(){e=C("div"),l=C("h6"),l.textContent=t,r=D(),n=C("p"),n.textContent=o,a=D(),s=C("div"),V(u.$$.fragment),p=D(),V(d.$$.fragment),_=D(),V(b.$$.fragment),L=D(),V(I.$$.fragment),H=D(),q=C("p"),q.textContent=Y,J=D(),V(m.$$.fragment),se=D(),K=C("h6"),K.textContent=Ie,ye=D(),V(Z.$$.fragment),qe=D(),be=C("div"),he=C("div"),V(ae.$$.fragment),Se=D(),ve=C("h6"),ve.textContent=ct,Ve=D(),V(oe.$$.fragment),Fe=D(),V(ue.$$.fragment),ze=D(),ge=C("h6"),ge.textContent=ft,Re=D(),V(ce.$$.fragment),this.h()},l(g){e=P(g,"DIV",{slot:!0});var w=S(e);l=P(w,"H6",{["data-svelte-h"]:!0}),z(l)!=="svelte-1p3tc39"&&(l.textContent=t),r=N(w),n=P(w,"P",{class:!0,["data-svelte-h"]:!0}),z(n)!=="svelte-1vw6ksq"&&(n.textContent=o),a=N(w),s=P(w,"DIV",{class:!0});var x=S(s);j(u.$$.fragment,x),p=N(x),j(d.$$.fragment,x),_=N(x),j(b.$$.fragment,x),L=N(x),j(I.$$.fragment,x),x.forEach(v),H=N(w),q=P(w,"P",{class:!0,["data-svelte-h"]:!0}),z(q)!=="svelte-n4yrky"&&(q.textContent=Y),J=N(w),j(m.$$.fragment,w),se=N(w),K=P(w,"H6",{class:!0,["data-svelte-h"]:!0}),z(K)!=="svelte-1lzl5kk"&&(K.textContent=Ie),ye=N(w),j(Z.$$.fragment,w),qe=N(w),be=P(w,"DIV",{class:!0});var Ce=S(be);he=P(Ce,"DIV",{class:!0});var Pe=S(he);j(ae.$$.fragment,Pe),Pe.forEach(v),Ce.forEach(v),Se=N(w),ve=P(w,"H6",{["data-svelte-h"]:!0}),z(ve)!=="svelte-ahwt7s"&&(ve.textContent=ct),Ve=N(w),j(oe.$$.fragment,w),Fe=N(w),j(ue.$$.fragment,w),ze=N(w),ge=P(w,"H6",{["data-svelte-h"]:!0}),z(ge)!=="svelte-1b2aqn4"&&(ge.textContent=ft),Re=N(w),j(ce.$$.fragment,w),w.forEach(v),this.h()},h(){h(n,"class","mt-3"),h(s,"class","row mt-1 px-2"),h(q,"class","mt-3"),h(K,"class","mt-3"),h(he,"class","col"),h(be,"class","row"),h(e,"slot","body")},m(g,w){T(g,e,w),y(e,l),y(e,r),y(e,n),y(e,a),y(e,s),F(u,s,null),y(s,p),F(d,s,null),y(s,_),F(b,s,null),y(s,L),F(I,s,null),y(e,H),y(e,q),y(e,J),F(m,e,null),y(e,se),y(e,K),y(e,ye),F(Z,e,null),y(e,qe),y(e,be),y(be,he),F(ae,he,null),y(e,Se),y(e,ve),y(e,Ve),F(oe,e,null),y(e,Fe),F(ue,e,null),y(e,ze),y(e,ge),y(e,Re),F(ce,e,null),Ee=!0},p(g,w){const x={};!c&&w&2&&(c=!0,x.value=g[1],B(()=>c=!1)),u.$set(x);const Ce={};!f&&w&4&&(f=!0,Ce.value=g[2],B(()=>f=!1)),d.$set(Ce);const Pe={};!$&&w&8&&($=!0,Pe.value=g[3],B(()=>$=!1)),b.$set(Pe);const kt={};!M&&w&16&&(M=!0,kt.value=g[4],B(()=>M=!1)),I.$set(kt);const Ct={};!ee&&w&32&&(ee=!0,Ct.value=g[5],B(()=>ee=!1)),m.$set(Ct);const Pt={};!ke&&w&64&&(ke=!0,Pt.value=g[6],B(()=>ke=!1)),Z.$set(Pt);const $t={};!Ae&&w&128&&(Ae=!0,$t.value=g[7],B(()=>Ae=!1)),ae.$set($t);const Et={};!je&&w&256&&(je=!0,Et.value=g[8],B(()=>je=!1)),oe.$set(Et);const Lt={};!Qe&&w&512&&(Qe=!0,Lt.value=g[9],B(()=>Qe=!1)),ue.$set(Lt);const wt={};!Ue&&w&1024&&(Ue=!0,wt.selected=g[10],B(()=>Ue=!1)),ce.$set(wt)},i(g){Ee||(k(u.$$.fragment,g),k(d.$$.fragment,g),k(b.$$.fragment,g),k(I.$$.fragment,g),k(m.$$.fragment,g),k(Z.$$.fragment,g),k(ae.$$.fragment,g),k(oe.$$.fragment,g),k(ue.$$.fragment,g),k(ce.$$.fragment,g),Ee=!0)},o(g){E(u.$$.fragment,g),E(d.$$.fragment,g),E(b.$$.fragment,g),E(I.$$.fragment,g),E(m.$$.fragment,g),E(Z.$$.fragment,g),E(ae.$$.fragment,g),E(oe.$$.fragment,g),E(ue.$$.fragment,g),E(ce.$$.fragment,g),Ee=!1},d(g){g&&v(e),Q(u),Q(d),Q(b),Q(I),Q(m),Q(Z),Q(ae),Q(oe),Q(ue),Q(ce)}}}function Fn(i){let e,l;return e=new st({props:{parentId:i[0],itemId:"produccion",$$slots:{body:[jn],header:[Vn]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){F(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.parentId=t[0]),r&2099198&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Qn(i,e,l){let t,r,n,o,a,s,u,c,p,d;A(i,Ye,m=>l(1,t=m)),A(i,Xe,m=>l(2,r=m)),A(i,Ze,m=>l(3,n=m)),A(i,xe,m=>l(4,o=m)),A(i,Te,m=>l(5,a=m)),A(i,et,m=>l(6,s=m)),A(i,tt,m=>l(7,u=m)),A(i,He,m=>l(8,c=m)),A(i,Me,m=>l(9,p=m)),A(i,De,m=>l(10,d=m));let{parentId:f}=e;function _(m){t=m,Ye.set(t)}function b(m){r=m,Xe.set(r)}function $(m){n=m,Ze.set(n)}function L(m){o=m,xe.set(o)}function I(m){a=m,Te.set(a)}function M(m){s=m,et.set(s)}function H(m){u=m,tt.set(u)}function q(m){c=m,He.set(c)}function Y(m){p=m,Me.set(p)}function J(m){d=m,De.set(d)}return i.$$set=m=>{"parentId"in m&&l(0,f=m.parentId)},[f,t,r,n,o,a,s,u,c,p,d,_,b,$,L,I,M,H,q,Y,J]}class zn extends ie{constructor(e){super(),re(this,e,Qn,Fn,le,{parentId:0})}}function Rn(i){let e,l=`<i class="bi bi-person-lines-fill"></i>
        Asesoría`;return{c(){e=C("span"),e.innerHTML=l,this.h()},l(t){e=P(t,"SPAN",{slot:!0,class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-1qf73m1"&&(e.innerHTML=l),this.h()},h(){h(e,"slot","header"),h(e,"class","fs-5")},m(t,r){T(t,e,r)},p:te,d(t){t&&v(e)}}}function Un(i){let e,l,t="F. Haber asesorado o co-asesorado tesis sustentadas y aprobadas",r,n,o,a,s,u,c,p,d,f;function _(H){i[4](H)}let b={id:"asesoria-pregrado",label:"Bachiller o título profesional-0.5pt",min:0};i[1]!==void 0&&(b.value=i[1]),n=new X({props:b}),O.push(()=>G(n,"value",_));function $(H){i[5](H)}let L={id:"asesoria-maestria",label:"Magister-1pt",min:0};i[2]!==void 0&&(L.value=i[2]),s=new X({props:L}),O.push(()=>G(s,"value",$));function I(H){i[6](H)}let M={id:"asesoria-doctorado",label:"Doctor-2pt",min:0};return i[3]!==void 0&&(M.value=i[3]),p=new X({props:M}),O.push(()=>G(p,"value",I)),{c(){e=C("div"),l=C("h6"),l.textContent=t,r=D(),V(n.$$.fragment),a=D(),V(s.$$.fragment),c=D(),V(p.$$.fragment),this.h()},l(H){e=P(H,"DIV",{slot:!0});var q=S(e);l=P(q,"H6",{["data-svelte-h"]:!0}),z(l)!=="svelte-1hc2iq5"&&(l.textContent=t),r=N(q),j(n.$$.fragment,q),a=N(q),j(s.$$.fragment,q),c=N(q),j(p.$$.fragment,q),q.forEach(v),this.h()},h(){h(e,"slot","body")},m(H,q){T(H,e,q),y(e,l),y(e,r),F(n,e,null),y(e,a),F(s,e,null),y(e,c),F(p,e,null),f=!0},p(H,q){const Y={};!o&&q&2&&(o=!0,Y.value=H[1],B(()=>o=!1)),n.$set(Y);const J={};!u&&q&4&&(u=!0,J.value=H[2],B(()=>u=!1)),s.$set(J);const m={};!d&&q&8&&(d=!0,m.value=H[3],B(()=>d=!1)),p.$set(m)},i(H){f||(k(n.$$.fragment,H),k(s.$$.fragment,H),k(p.$$.fragment,H),f=!0)},o(H){E(n.$$.fragment,H),E(s.$$.fragment,H),E(p.$$.fragment,H),f=!1},d(H){H&&v(e),Q(n),Q(s),Q(p)}}}function On(i){let e,l;return e=new st({props:{parentId:i[0],itemId:"asesoria",$$slots:{body:[Un],header:[Rn]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){F(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.parentId=t[0]),r&142&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Bn(i,e,l){let t,r,n;A(i,nt,c=>l(1,t=c)),A(i,lt,c=>l(2,r=c)),A(i,it,c=>l(3,n=c));let{parentId:o}=e;function a(c){t=c,nt.set(t)}function s(c){r=c,lt.set(r)}function u(c){n=c,it.set(n)}return i.$$set=c=>{"parentId"in c&&l(0,o=c.parentId)},[o,t,r,n,a,s,u]}class Gn extends ie{constructor(e){super(),re(this,e,Bn,On,le,{parentId:0})}}function xt(i){const e=i-1;return e*e*e+1}function W(i,{delay:e=0,duration:l=400,easing:t=xt,x:r=0,y:n=0,opacity:o=0}={}){const a=getComputedStyle(i),s=+a.opacity,u=a.transform==="none"?"":a.transform,c=s*(1-o),[p,d]=Ht(r),[f,_]=Ht(n);return{delay:e,duration:l,easing:t,css:(b,$)=>`
			transform: ${u} translate(${(1-b)*p}${d}, ${(1-b)*f}${_});
			opacity: ${s-c*$}`}}function Vt(i,{delay:e=0,duration:l=400,easing:t=xt,axis:r="y"}={}){const n=getComputedStyle(i),o=+n.opacity,a=r==="y"?"height":"width",s=parseFloat(n[a]),u=r==="y"?["top","bottom"]:["left","right"],c=u.map(L=>`${L[0].toUpperCase()}${L.slice(1)}`),p=parseFloat(n[`padding${c[0]}`]),d=parseFloat(n[`padding${c[1]}`]),f=parseFloat(n[`margin${c[0]}`]),_=parseFloat(n[`margin${c[1]}`]),b=parseFloat(n[`border${c[0]}Width`]),$=parseFloat(n[`border${c[1]}Width`]);return{delay:e,duration:l,easing:t,css:L=>`overflow: hidden;opacity: ${Math.min(L*20,1)*o};${a}: ${L*s}px;padding-${u[0]}: ${L*p}px;padding-${u[1]}: ${L*d}px;margin-${u[0]}: ${L*f}px;margin-${u[1]}: ${L*_}px;border-${u[0]}-width: ${L*b}px;border-${u[1]}-width: ${L*$}px;`}}const jt=U(null);function Wn(i){let e;const l=i[11].default,t=Oe(l,i,i[10],null),r=t||Kn();return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,o){r&&r.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&1024)&&Be(t,l,n,n[10],e?We(l,n[10],o,null):Ge(n[10]),null)},i(n){e||(k(r,n),e=!0)},o(n){E(r,n),e=!1},d(n){r&&r.d(n)}}}function Jn(i){let e,l,t,r,n=[{id:i[0]},i[8]],o={};for(let a=0;a<n.length;a+=1)o=Je(o,n[a]);return{c(){e=C("div"),this.h()},l(a){e=P(a,"DIV",{id:!0}),S(e).forEach(v),this.h()},h(){Dt(e,o)},m(a,s){T(a,e,s),t||(r=vn(l=i[7].call(null,e,{data:i[1],layout:i[2],config:i[3],reloadPlot:i[4]})),t=!0)},p(a,s){Dt(e,o=In(n,[s&1&&{id:a[0]},s&256&&a[8]])),l&&gn(l.update)&&s&30&&l.update.call(null,{data:a[1],layout:a[2],config:a[3],reloadPlot:a[4]})},i:te,o:te,d(a){a&&v(e),t=!1,r()}}}function Kn(i){let e;return{c(){e=me("Loading Plotly")},l(l){e=_e(l,"Loading Plotly")},m(l,t){T(l,e,t)},d(l){l&&v(e)}}}function Yn(i){let e,l="",t,r,n,o,a,s,u,c;const p=[Jn,Wn],d=[];function f(_,b){return _[5]?0:1}return n=f(i),o=d[n]=p[n](i),{c(){e=C("script"),e.innerHTML=l,r=D(),o.c(),a=ne(),this.h()},l(_){const b=dn("svelte-16kqj6w",document.head);e=P(b,"SCRIPT",{src:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-c77ok0"&&(e.innerHTML=l),b.forEach(v),r=N(_),o.l(_),a=ne(),this.h()},h(){pn(e.src,t="https://cdn.plot.ly/plotly-2.12.1.min.js")||h(e,"src",t)},m(_,b){y(document.head,e),T(_,r,b),d[n].m(_,b),T(_,a,b),s=!0,u||(c=rt(e,"load",i[6]),u=!0)},p(_,[b]){let $=n;n=f(_),n===$?d[n].p(_,b):(fe(),E(d[$],1,1,()=>{d[$]=null}),de(),o=d[n],o?o.p(_,b):(o=d[n]=p[n](_),o.c()),k(o,1),o.m(a.parentNode,a))},i(_){s||(k(o),s=!0)},o(_){E(o),s=!1},d(_){_&&(v(r),v(a)),v(e),d[n].d(_),u=!1,c()}}}function Xn(i,e,l){const t=["id","data","layout","config","loaded","reloadPlot"];let r=Mt(e,t),n;A(i,jt,m=>l(5,n=m));let{$$slots:o={},$$scope:a}=e;const s=mn();let{id:u="plot-"+Math.floor(Math.random()*100).toString()}=e,{data:c}=e,{layout:p={}}=e,{config:d={}}=e,{loaded:f=!1}=e,{reloadPlot:_=0}=e;function b(){n||hn(jt,n=window==null?void 0:window.Plotly,n)}_n(async()=>b());const $=m=>s("hover",m),L=m=>s("unhover",m),I=m=>s("click",m),M=m=>s("selected",m),H=m=>s("relayout",m),q=(m,ee,se,K,Ie)=>n.newPlot(m,ee,{...se},{...K}).then(()=>{m.on("plotly_hover",$),m.on("plotly_unhover",L),m.on("plotly_click",I),m.on("plotly_selected",M),m.on("plotly_relayout",H),l(9,f=!0)}),Y=(m,ee,se,K,Ie)=>n.react(m,ee,se,K).then(()=>{console.debug("update ploty",ee),l(9,f=!0)});function J(m,{data:ee,layout:se,config:K,reloadPlot:Ie}){return q(m,ee,se,K),{update({data:ye,layout:Z,config:ke}){l(9,f=!1),Y(m,ye,Z,ke)},destroy(){console.debug("plot destroyed"),m.removeListener("plotly_hover",$),m.removeListener("plotly_unhover",L),m.removeListener("plotly_click",I),m.removeListener("plotly_selected",M),m.removeListener("plotly_relayout",H),l(9,f=!1)}}}return i.$$set=m=>{e=Je(Je({},e),bn(m)),l(8,r=Mt(e,t)),"id"in m&&l(0,u=m.id),"data"in m&&l(1,c=m.data),"layout"in m&&l(2,p=m.layout),"config"in m&&l(3,d=m.config),"loaded"in m&&l(9,f=m.loaded),"reloadPlot"in m&&l(4,_=m.reloadPlot),"$$scope"in m&&l(10,a=m.$$scope)},[u,c,p,d,_,n,b,J,r,f,a,o]}class Zn extends ie{constructor(e){super(),re(this,e,Xn,Yn,le,{id:0,data:1,layout:2,config:3,loaded:9,reloadPlot:4})}}function Ft(i){let e,l,t,r;return l=new Zn({props:{data:i[2],layout:i[1],config:i[3]}}),{c(){e=C("div"),V(l.$$.fragment)},l(n){e=P(n,"DIV",{});var o=S(e);j(l.$$.fragment,o),o.forEach(v)},m(n,o){T(n,e,o),F(l,e,null),r=!0},p(n,o){const a={};o&4&&(a.data=n[2]),o&2&&(a.layout=n[1]),l.$set(a)},i(n){r||(k(l.$$.fragment,n),n&&pe(()=>{r&&(t||(t=R(e,Vt,{},!0)),t.run(1))}),r=!0)},o(n){E(l.$$.fragment,n),n&&(t||(t=R(e,Vt,{},!1)),t.run(0)),r=!1},d(n){n&&v(e),Q(l),n&&t&&t.end()}}}function xn(i){let e,l,t=i[0]>0&&Ft(i);return{c(){t&&t.c(),e=ne()},l(r){t&&t.l(r),e=ne()},m(r,n){t&&t.m(r,n),T(r,e,n),l=!0},p(r,[n]){r[0]>0?t?(t.p(r,n),n&1&&k(t,1)):(t=Ft(r),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(fe(),E(t,1,1,()=>{t=null}),de())},i(r){l||(k(t),l=!0)},o(r){E(t),l=!1},d(r){r&&v(e),t&&t.d(r)}}}function el(i,e,l){let t,r,n,o,a,s,u;A(i,Zt,f=>l(0,o=f)),A(i,ut,f=>l(5,a=f)),A(i,ot,f=>l(6,s=f)),A(i,at,f=>l(7,u=f));const c=(f,_)=>{let b=_=="Formación"?"rgb(31, 119, 180)":_=="Producción"?"rgb(255, 127, 14)":"rgb(44, 160, 44)";return{x:[f],y:[""],name:`${_} (${f} pt${f==1?"":"s"})`,orientation:"h",type:"bar",width:.25,marker:{color:b,opacity:.5},hoverinfo:"none"}},p=f=>Math.ceil(f/25)*25+10;let d={displayModeBar:!1,responsive:!0};return i.$$.update=()=>{i.$$.dirty&1&&l(4,t={x:[o+1],y:[""],mode:"text",text:[`Total: ${o} pt${o==1?"":"s"}`],type:"scatter",showlegend:!1}),i.$$.dirty&240&&l(2,r=[c(u,"Formación"),c(s,"Producción"),c(a,"Asesoría"),t]),i.$$.dirty&1&&l(1,n={barmode:"stack",xaxis:{title:{text:"Nivel alcanzado"},range:[0,p(o)],tickvals:[0,10,25,35,50,70,100,160,200],ticktext:["0","VII","VI","V","IV","III","II","I","?"],fixedrange:!0},yaxis:{fixedrange:!0},legend:{orientation:"h",y:1.1,traceorder:"normal"},margin:{t:0,l:10,r:10}})},[o,n,r,d,t,a,s,u]}class tl extends ie{constructor(e){super(),re(this,e,el,xn,le,{})}}function Qt(i,e,l){const t=i.slice();return t[9]=e[l],t}function nl(i){let e,l=i[1].every(Jt),t,r,n,o,a=we(i[1]),s=[];for(let f=0;f<a.length;f+=1)s[f]=Rt(Qt(i,a,f));let u=l&&Ut(i),c=i[3]>=10&&Bt(i),p=i[4]>=10&&Gt(i),d=i[5]>=10&&Wt(i);return{c(){for(let f=0;f<s.length;f+=1)s[f].c();e=D(),u&&u.c(),t=D(),c&&c.c(),r=D(),p&&p.c(),n=D(),d&&d.c(),o=ne()},l(f){for(let _=0;_<s.length;_+=1)s[_].l(f);e=N(f),u&&u.l(f),t=N(f),c&&c.l(f),r=N(f),p&&p.l(f),n=N(f),d&&d.l(f),o=ne()},m(f,_){for(let b=0;b<s.length;b+=1)s[b]&&s[b].m(f,_);T(f,e,_),u&&u.m(f,_),T(f,t,_),c&&c.m(f,_),T(f,r,_),p&&p.m(f,_),T(f,n,_),d&&d.m(f,_),T(f,o,_)},p(f,_){if(_&66){a=we(f[1]);let b;for(b=0;b<a.length;b+=1){const $=Qt(f,a,b);s[b]?s[b].p($,_):(s[b]=Rt($),s[b].c(),s[b].m(e.parentNode,e))}for(;b<s.length;b+=1)s[b].d(1);s.length=a.length}_&2&&(l=f[1].every(Jt)),l?u?(u.p(f,_),_&2&&k(u,1)):(u=Ut(f),u.c(),k(u,1),u.m(t.parentNode,t)):u&&(fe(),E(u,1,1,()=>{u=null}),de()),f[3]>=10?c?(c.p(f,_),_&8&&k(c,1)):(c=Bt(f),c.c(),k(c,1),c.m(r.parentNode,r)):c&&(fe(),E(c,1,1,()=>{c=null}),de()),f[4]>=10?p?(p.p(f,_),_&16&&k(p,1)):(p=Gt(f),p.c(),k(p,1),p.m(n.parentNode,n)):p&&(fe(),E(p,1,1,()=>{p=null}),de()),f[5]>=10?d?(d.p(f,_),_&32&&k(d,1)):(d=Wt(f),d.c(),k(d,1),d.m(o.parentNode,o)):d&&(fe(),E(d,1,1,()=>{d=null}),de())},i(f){k(u),k(c),k(p),k(d)},o(f){E(u),E(c),E(p),E(d)},d(f){f&&(v(e),v(t),v(r),v(n),v(o)),Kt(s,f),u&&u.d(f),c&&c.d(f),p&&p.d(f),d&&d.d(f)}}}function ll(i){let e,l='<i class="bi bi-info-square-fill text-info pe-2"></i>Ingresa tu información para actualizar el resultado en vivo',t,r;return{c(){e=C("p"),e.innerHTML=l,this.h()},l(n){e=P(n,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-i36tmv"&&(e.innerHTML=l),this.h()},h(){h(e,"class","mb-1")},m(n,o){T(n,e,o),r=!0},p(n,o){i=n},i(n){r||(n&&pe(()=>{r&&(t||(t=R(e,W,i[6],!0)),t.run(1))}),r=!0)},o(n){n&&(t||(t=R(e,W,i[6],!1)),t.run(0)),r=!1},d(n){n&&v(e),n&&t&&t.end()}}}function zt(i){let e,l,t,r=i[9].msg+"",n,o,a;return{c(){e=C("p"),l=C("i"),t=me("No califica: "),n=me(r),this.h()},l(s){e=P(s,"P",{class:!0});var u=S(e);l=P(u,"I",{class:!0}),S(l).forEach(v),t=_e(u,"No califica: "),n=_e(u,r),u.forEach(v),this.h()},h(){h(l,"class","bi bi-dash-square-fill pe-2"),h(e,"class","mb-1 text-danger")},m(s,u){T(s,e,u),y(e,l),y(e,t),y(e,n),a=!0},p(s,u){i=s,(!a||u&2)&&r!==(r=i[9].msg+"")&&Ne(n,r)},i(s){a||(s&&pe(()=>{a&&(o||(o=R(e,W,i[6],!0)),o.run(1))}),a=!0)},o(s){s&&(o||(o=R(e,W,i[6],!1)),o.run(0)),a=!1},d(s){s&&v(e),s&&o&&o.end()}}}function Rt(i){let e,l=!i[9].passes&&zt(i);return{c(){l&&l.c(),e=ne()},l(t){l&&l.l(t),e=ne()},m(t,r){l&&l.m(t,r),T(t,e,r)},p(t,r){t[9].passes?l&&(fe(),E(l,1,1,()=>{l=null}),de()):l?(l.p(t,r),r&2&&k(l,1)):(l=zt(t),l.c(),k(l,1),l.m(e.parentNode,e))},d(t){t&&v(e),l&&l.d(t)}}}function Ut(i){let e,l='<i class="bi bi-check-square-fill pe-2"></i>Sí califica. El gráfico muestra el nivel alcanzado. Se asume que al menos un ítem de producción es de los últimos tres años',t,r,n,o,a=i[0]>=200&&i[2]==1&&Ot(i);return{c(){e=C("p"),e.innerHTML=l,r=D(),a&&a.c(),n=ne(),this.h()},l(s){e=P(s,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-6fryca"&&(e.innerHTML=l),r=N(s),a&&a.l(s),n=ne(),this.h()},h(){h(e,"class","mb-1 text-success")},m(s,u){T(s,e,u),T(s,r,u),a&&a.m(s,u),T(s,n,u),o=!0},p(s,u){i=s,i[0]>=200&&i[2]==1?a?(a.p(i,u),u&5&&k(a,1)):(a=Ot(i),a.c(),k(a,1),a.m(n.parentNode,n)):a&&(fe(),E(a,1,1,()=>{a=null}),de())},i(s){o||(s&&pe(()=>{o&&(t||(t=R(e,W,i[6],!0)),t.run(1))}),k(a),o=!0)},o(s){s&&(t||(t=R(e,W,i[6],!1)),t.run(0)),E(a),o=!1},d(s){s&&(v(e),v(r),v(n)),s&&t&&t.end(),a&&a.d(s)}}}function Ot(i){let e,l='<i class="bi bi-check-square-fill pe-2"></i>¡FELICIDADES! Investigador distinguido',t,r;return{c(){e=C("p"),e.innerHTML=l,this.h()},l(n){e=P(n,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-6jp5n1"&&(e.innerHTML=l),this.h()},h(){h(e,"class","mb-1 text-success")},m(n,o){T(n,e,o),r=!0},p(n,o){i=n},i(n){r||(n&&pe(()=>{r&&(t||(t=R(e,W,i[6],!0)),t.run(1))}),r=!0)},o(n){n&&(t||(t=R(e,W,i[6],!1)),t.run(0)),r=!1},d(n){n&&v(e),n&&t&&t.end()}}}function Bt(i){let e,l='<i class="bi bi-info-square-fill pe-2"></i>Libros y capítulos aportan un máximo de 10 pts.',t,r;return{c(){e=C("p"),e.innerHTML=l,this.h()},l(n){e=P(n,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-1odbogn"&&(e.innerHTML=l),this.h()},h(){h(e,"class","mb-1 text-info")},m(n,o){T(n,e,o),r=!0},p(n,o){i=n},i(n){r||(n&&pe(()=>{r&&(t||(t=R(e,W,i[6],!0)),t.run(1))}),r=!0)},o(n){n&&(t||(t=R(e,W,i[6],!1)),t.run(0)),r=!1},d(n){n&&v(e),n&&t&&t.end()}}}function Gt(i){let e,l='<i class="bi bi-info-square-fill pe-2"></i>Asesorías aportan un máximo de 10 pts.',t,r;return{c(){e=C("p"),e.innerHTML=l,this.h()},l(n){e=P(n,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-ntkf83"&&(e.innerHTML=l),this.h()},h(){h(e,"class","mb-1 text-info")},m(n,o){T(n,e,o),r=!0},p(n,o){i=n},i(n){r||(n&&pe(()=>{r&&(t||(t=R(e,W,i[6],!0)),t.run(1))}),r=!0)},o(n){n&&(t||(t=R(e,W,i[6],!1)),t.run(0)),r=!1},d(n){n&&v(e),n&&t&&t.end()}}}function Wt(i){let e,l='<i class="bi bi-info-square-fill pe-2"></i>Conference Proceedings aportan un máximo de 10 pts.',t,r;return{c(){e=C("p"),e.innerHTML=l,this.h()},l(n){e=P(n,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-c19uw2"&&(e.innerHTML=l),this.h()},h(){h(e,"class","mb-1 text-info")},m(n,o){T(n,e,o),r=!0},p(n,o){i=n},i(n){r||(n&&pe(()=>{r&&(t||(t=R(e,W,i[6],!0)),t.run(1))}),r=!0)},o(n){n&&(t||(t=R(e,W,i[6],!1)),t.run(0)),r=!1},d(n){n&&v(e),n&&t&&t.end()}}}function il(i){let e,l="Resultado",t,r,n,o,a,s,u,c='<div class="col-auto p-1"><i class="bi bi-exclamation-square-fill text-warning fs-3"></i></div> <div class="col align-self-center">Recuerda que los resultados de esta calculadora no son vinculantes para CONCYTEC.</div>',p;const d=[ll,nl],f=[];function _(b,$){return b[0]===0?0:1}return r=_(i),n=f[r]=d[r](i),a=new tl({}),{c(){e=C("h3"),e.textContent=l,t=D(),n.c(),o=D(),V(a.$$.fragment),s=D(),u=C("div"),u.innerHTML=c,this.h()},l(b){e=P(b,"H3",{["data-svelte-h"]:!0}),z(e)!=="svelte-1hzdzxp"&&(e.textContent=l),t=N(b),n.l(b),o=N(b),j(a.$$.fragment,b),s=N(b),u=P(b,"DIV",{class:!0,["data-svelte-h"]:!0}),z(u)!=="svelte-q43jyl"&&(u.innerHTML=c),this.h()},h(){h(u,"class","callout callout-warning row d-flex svelte-1tqlava")},m(b,$){T(b,e,$),T(b,t,$),f[r].m(b,$),T(b,o,$),F(a,b,$),T(b,s,$),T(b,u,$),p=!0},p(b,[$]){let L=r;r=_(b),r===L?f[r].p(b,$):(fe(),E(f[L],1,1,()=>{f[L]=null}),de(),n=f[r],n?n.p(b,$):(n=f[r]=d[r](b),n.c()),k(n,1),n.m(o.parentNode,o))},i(b){p||(k(n),k(a.$$.fragment,b),p=!0)},o(b){E(n),E(a.$$.fragment,b),p=!1},d(b){b&&(v(e),v(t),v(o),v(s),v(u)),f[r].d(b),Q(a,b)}}}const Jt=i=>i.passes;function rl(i,e,l){let t,r,n,o,a,s,u;A(i,Zt,d=>l(0,t=d)),A(i,ot,d=>l(7,r=d)),A(i,at,d=>l(8,n=d)),A(i,De,d=>l(2,o=d)),A(i,Tn,d=>l(3,a=d)),A(i,ut,d=>l(4,s=d)),A(i,Te,d=>l(5,u=d));let c,p={y:-30,duration:500};return i.$$.update=()=>{i.$$.dirty&385&&l(1,c=[{passes:r>0,msg:"Requiere al menos un ítem en Producción"},{passes:n==1?r>=9:!0,msg:"Estudiantes requieren 9 puntos en Producción"},{passes:n>1?r>=6:!0,msg:"Requiere al menos 6 puntos en Producción"},{passes:t>=10,msg:"Requiere al menos 10 de puntaje total"}])},[t,c,o,a,s,u,p,r,n]}class sl extends ie{constructor(e){super(),re(this,e,rl,il,le,{})}}function al(i){let e,l,t,r,n,o,a,s,u,c,p,d,f;return n=new qn({props:{parentId:"myAccordion"}}),a=new zn({props:{parentId:"myAccordion"}}),u=new Gn({props:{parentId:"myAccordion"}}),d=new sl({}),{c(){e=C("div"),l=C("div"),t=C("div"),r=C("div"),V(n.$$.fragment),o=D(),V(a.$$.fragment),s=D(),V(u.$$.fragment),c=D(),p=C("div"),V(d.$$.fragment),this.h()},l(_){e=P(_,"DIV",{class:!0});var b=S(e);l=P(b,"DIV",{class:!0});var $=S(l);t=P($,"DIV",{class:!0});var L=S(t);r=P(L,"DIV",{class:!0,id:!0});var I=S(r);j(n.$$.fragment,I),o=N(I),j(a.$$.fragment,I),s=N(I),j(u.$$.fragment,I),I.forEach(v),L.forEach(v),c=N($),p=P($,"DIV",{class:!0});var M=S(p);j(d.$$.fragment,M),M.forEach(v),$.forEach(v),b.forEach(v),this.h()},h(){h(r,"class","accordion mt-3"),h(r,"id","myAccordion"),h(t,"class","col-md-6 col-lg-4 col-12"),h(p,"class","col-md-6 col-lg-8 col-12 p-3"),h(l,"class","row"),h(e,"class","container-fluid")},m(_,b){T(_,e,b),y(e,l),y(l,t),y(t,r),F(n,r,null),y(r,o),F(a,r,null),y(r,s),F(u,r,null),y(l,c),y(l,p),F(d,p,null),f=!0},p:te,i(_){f||(k(n.$$.fragment,_),k(a.$$.fragment,_),k(u.$$.fragment,_),k(d.$$.fragment,_),f=!0)},o(_){E(n.$$.fragment,_),E(a.$$.fragment,_),E(u.$$.fragment,_),E(d.$$.fragment,_),f=!1},d(_){_&&v(e),Q(n),Q(a),Q(u),Q(d)}}}class fl extends ie{constructor(e){super(),re(this,e,null,al,le,{})}}export{fl as component};