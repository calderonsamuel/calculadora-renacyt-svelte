import{s as re,r as He,f as E,a as H,g as D,h as V,d as I,c as Q,j as h,i as B,x as b,y as Qe,z as Fe,A as Ne,l as ae,m as ie,D as Gt,E as vt,F as Ze,n as Ie,B as ee,G as Mt,H as Ce,I as zt,C as A,v as x,p as z,J as R,K as St,e as It,u as Rt,w as Jt,L as Pt,M as Wt,o as Kt,N as Te,O as $t,P as Xt,Q as Ct,R as Yt,S as Zt}from"../chunks/scheduler.692a2c8d.js";import{S as se,i as ue,a as M,t as S,b as F,d as N,m as T,e as j,f as J,g as xt,c as en}from"../chunks/index.3faef60e.js";import{w as G}from"../chunks/index.e3cff9e3.js";function ye(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function tn(n,e){const t={},l={},a={$$scope:1};let o=n.length;for(;o--;){const c=n[o],r=e[o];if(r){for(const i in c)i in r||(l[i]=1);for(const i in r)a[i]||(t[i]=r[i],a[i]=1);n[o]=r}else for(const i in c)a[i]=1}for(const c in l)c in t||(t[c]=void 0);return t}const nn=n=>({}),yt=n=>({}),ln=n=>({}),kt=n=>({});function on(n){let e;return{c(){e=ae("Item's header")},l(t){e=ie(t,"Item's header")},m(t,l){B(t,e,l)},d(t){t&&I(e)}}}function an(n){let e;return{c(){e=ae("Item's body")},l(t){e=ie(t,"Item's body")},m(t,l){B(t,e,l)},d(t){t&&I(e)}}}function rn(n){let e,t,l,a,o,c,r,i,s,u,m;const f=n[5].header,P=He(f,n,n[4],kt),_=P||on(),y=n[5].body,w=He(y,n,n[4],yt),v=w||an();return{c(){e=E("div"),t=E("h2"),l=E("button"),_&&_.c(),c=H(),r=E("div"),i=E("div"),v&&v.c(),this.h()},l(p){e=D(p,"DIV",{class:!0});var L=V(e);t=D(L,"H2",{class:!0,id:!0});var O=V(t);l=D(O,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var q=V(l);_&&_.l(q),q.forEach(I),O.forEach(I),c=Q(L),r=D(L,"DIV",{id:!0,class:!0,"data-bs-parent":!0,"aria-labelledby":!0});var $=V(r);i=D($,"DIV",{class:!0});var X=V(i);v&&v.l(X),X.forEach(I),$.forEach(I),L.forEach(I),this.h()},h(){h(l,"class","accordion-button "+n[3].btn),h(l,"type","button"),h(l,"data-bs-toggle","collapse"),h(l,"data-bs-target",a="#"+n[1]),h(l,"aria-expanded",n[2]),h(l,"aria-controls",n[1]),h(t,"class","accordion-header"),h(t,"id",o=n[1]+"-header"),h(i,"class","accordion-body"),h(r,"id",n[1]),h(r,"class","accordion-collapse "+n[3].content),h(r,"data-bs-parent",s="#"+n[0]),h(r,"aria-labelledby",u=n[1]+"-header"),h(e,"class","accordion-item")},m(p,L){B(p,e,L),b(e,t),b(t,l),_&&_.m(l,null),b(e,c),b(e,r),b(r,i),v&&v.m(i,null),m=!0},p(p,[L]){P&&P.p&&(!m||L&16)&&Qe(P,f,p,p[4],m?Ne(f,p[4],L,ln):Fe(p[4]),kt),(!m||L&2&&a!==(a="#"+p[1]))&&h(l,"data-bs-target",a),(!m||L&4)&&h(l,"aria-expanded",p[2]),(!m||L&2)&&h(l,"aria-controls",p[1]),(!m||L&2&&o!==(o=p[1]+"-header"))&&h(t,"id",o),w&&w.p&&(!m||L&16)&&Qe(w,y,p,p[4],m?Ne(y,p[4],L,nn):Fe(p[4]),yt),(!m||L&2)&&h(r,"id",p[1]),(!m||L&1&&s!==(s="#"+p[0]))&&h(r,"data-bs-parent",s),(!m||L&2&&u!==(u=p[1]+"-header"))&&h(r,"aria-labelledby",u)},i(p){m||(M(_,p),M(v,p),m=!0)},o(p){S(_,p),S(v,p),m=!1},d(p){p&&I(e),_&&_.d(p),v&&v.d(p)}}}function sn(n,e,t){let{$$slots:l={},$$scope:a}=e,{parentId:o}=e,{itemId:c}=e,{expanded:r=!1}=e,i={btn:r?"":"collapsed",content:r?"collapse show":"collapse"};return n.$$set=s=>{"parentId"in s&&t(0,o=s.parentId),"itemId"in s&&t(1,c=s.itemId),"expanded"in s&&t(2,r=s.expanded),"$$scope"in s&&t(4,a=s.$$scope)},[o,c,r,i,a,l]}class xe extends se{constructor(e){super(),ue(this,e,sn,rn,re,{parentId:0,itemId:1,expanded:2})}}function Et(n,e,t){const l=n.slice();return l[5]=e[t],l}function Dt(n){let e,t=n[5].label+"",l,a;return{c(){e=E("option"),l=ae(t),this.h()},l(o){e=D(o,"OPTION",{});var c=V(e);l=ie(c,t),c.forEach(I),this.h()},h(){e.__value=a=n[5].value,Ce(e,e.__value)},m(o,c){B(o,e,c),b(e,l)},p(o,c){c&8&&t!==(t=o[5].label+"")&&Ie(l,t),c&8&&a!==(a=o[5].value)&&(e.__value=a,Ce(e,e.__value))},d(o){o&&I(e)}}}function un(n){let e,t,l,a,o,c,r,i=ye(n[3]),s=[];for(let u=0;u<i.length;u+=1)s[u]=Dt(Et(n,i,u));return{c(){e=E("div"),t=E("label"),l=ae(n[2]),a=H(),o=E("select");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){e=D(u,"DIV",{class:!0});var m=V(e);t=D(m,"LABEL",{for:!0,class:!0});var f=V(t);l=ie(f,n[2]),f.forEach(I),a=Q(m),o=D(m,"SELECT",{id:!0,class:!0,"aria-label":!0});var P=V(o);for(let _=0;_<s.length;_+=1)s[_].l(P);P.forEach(I),m.forEach(I),this.h()},h(){h(t,"for",n[1]),h(t,"class","me-1"),h(o,"id",n[1]),h(o,"class","form-select me-2"),h(o,"aria-label","Default select example"),n[0]===void 0&&Gt(()=>n[4].call(o)),h(e,"class","")},m(u,m){B(u,e,m),b(e,t),b(t,l),b(e,a),b(e,o);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(o,null);vt(o,n[0],!0),c||(r=Ze(o,"change",n[4]),c=!0)},p(u,[m]){if(m&4&&Ie(l,u[2]),m&2&&h(t,"for",u[1]),m&8){i=ye(u[3]);let f;for(f=0;f<i.length;f+=1){const P=Et(u,i,f);s[f]?s[f].p(P,m):(s[f]=Dt(P),s[f].c(),s[f].m(o,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=i.length}m&2&&h(o,"id",u[1]),m&9&&vt(o,u[0])},i:ee,o:ee,d(u){u&&I(e),Mt(s,u),c=!1,r()}}}function cn(n,e,t){let{id:l="select-input-id"}=e,{label:a=""}=e,{options:o}=e,{selected:c}=e;function r(){c=zt(this),t(0,c),t(3,o)}return n.$$set=i=>{"id"in i&&t(1,l=i.id),"label"in i&&t(2,a=i.label),"options"in i&&t(3,o=i.options),"selected"in i&&t(0,c=i.selected)},[c,l,a,o,r]}class Vt extends se{constructor(e){super(),ue(this,e,cn,un,re,{id:1,label:2,options:3,selected:0})}}const je=G(0),qe=G(0),Be=G(0),Oe=G(0),Ue=G(0),Ge=G(0),ze=G(0),Re=G(0),Je=G(0),We=G(0),Ke=G(0),$e=G(0),Xe=G(0),Ye=G(0);function dn(n){let e,t=`<i class="bi bi-bank"></i>
        Formación`;return{c(){e=E("span"),e.innerHTML=t,this.h()},l(l){e=D(l,"SPAN",{slot:!0,["data-svelte-h"]:!0}),x(e)!=="svelte-wkb4v3"&&(e.innerHTML=t),this.h()},h(){h(e,"slot","header")},m(l,a){B(l,e,a)},p:ee,d(l){l&&I(e)}}}function fn(n){let e,t,l,a;function o(r){n[2](r)}let c={id:"grado-academico",label:"A. Grado académico (registrado en SUNEDU o MINEDU)",options:[{value:0,label:"Ninguno"},{value:1,label:"Estudiante matriculado"},{value:2,label:"Bachiller o egresado"},{value:4,label:"Título profesional"},{value:6,label:"Magister"},{value:10,label:"Doctor"}]};return n[1]!==void 0&&(c.selected=n[1]),t=new Vt({props:c}),z.push(()=>J(t,"selected",o)),{c(){e=E("div"),F(t.$$.fragment),this.h()},l(r){e=D(r,"DIV",{slot:!0});var i=V(e);N(t.$$.fragment,i),i.forEach(I),this.h()},h(){h(e,"slot","body")},m(r,i){B(r,e,i),T(t,e,null),a=!0},p(r,i){const s={};!l&&i&2&&(l=!0,s.selected=r[1],R(()=>l=!1)),t.$set(s)},i(r){a||(M(t.$$.fragment,r),a=!0)},o(r){S(t.$$.fragment,r),a=!1},d(r){r&&I(e),j(t)}}}function mn(n){let e,t;return e=new xe({props:{parentId:n[0],itemId:"formacion",expanded:!0,$$slots:{body:[fn],header:[dn]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,a){T(e,l,a),t=!0},p(l,[a]){const o={};a&1&&(o.parentId=l[0]),a&10&&(o.$$scope={dirty:a,ctx:l}),e.$set(o)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function pn(n,e,t){let l;A(n,je,c=>t(1,l=c));let{parentId:a}=e;function o(c){l=c,je.set(l)}return n.$$set=c=>{"parentId"in c&&t(0,a=c.parentId)},[a,l,o]}class _n extends se{constructor(e){super(),ue(this,e,pn,mn,re,{parentId:0})}}function hn(n){let e,t,l,a,o,c,r,i;return{c(){e=E("div"),t=E("input"),l=H(),a=E("label"),o=ae(n[2]),this.h()},l(s){e=D(s,"DIV",{class:!0});var u=V(e);t=D(u,"INPUT",{type:!0,class:!0,id:!0,min:!0,max:!0}),l=Q(u),a=D(u,"LABEL",{for:!0,class:!0});var m=V(a);o=ie(m,n[2]),m.forEach(I),u.forEach(I),this.h()},h(){h(t,"type","number"),h(t,"class","form-control"),h(t,"id",n[1]),h(t,"min",n[3]),h(t,"max",n[4]),h(a,"for",n[1]),h(a,"class","w-100"),h(e,"class",c="form-floating "+n[5])},m(s,u){B(s,e,u),b(e,t),Ce(t,n[0]),b(e,l),b(e,a),b(a,o),r||(i=Ze(t,"input",n[6]),r=!0)},p(s,[u]){u&2&&h(t,"id",s[1]),u&8&&h(t,"min",s[3]),u&16&&h(t,"max",s[4]),u&1&&St(t.value)!==s[0]&&Ce(t,s[0]),u&4&&Ie(o,s[2]),u&2&&h(a,"for",s[1]),u&32&&c!==(c="form-floating "+s[5])&&h(e,"class",c)},i:ee,o:ee,d(s){s&&I(e),r=!1,i()}}}function gn(n,e,t){let{id:l}=e,{label:a}=e,{value:o}=e,{min:c=-1/0}=e,{max:r=1/0}=e,{inputClass:i="mb-3"}=e;function s(){o=St(this.value),t(0,o)}return n.$$set=u=>{"id"in u&&t(1,l=u.id),"label"in u&&t(2,a=u.label),"value"in u&&t(0,o=u.value),"min"in u&&t(3,c=u.min),"max"in u&&t(4,r=u.max),"inputClass"in u&&t(5,i=u.inputClass)},[o,l,a,c,r,i,s]}class Y extends se{constructor(e){super(),ue(this,e,gn,hn,re,{id:1,label:2,value:0,min:3,max:4,inputClass:5})}}function bn(n){let e,t=`<i class="bi bi-book"></i>
        Producción`;return{c(){e=E("span"),e.innerHTML=t,this.h()},l(l){e=D(l,"SPAN",{slot:!0,["data-svelte-h"]:!0}),x(e)!=="svelte-1kfp9fm"&&(e.innerHTML=t),this.h()},h(){h(e,"slot","header")},m(l,a){B(l,e,a)},p:ee,d(l){l&&I(e)}}}function vn(n){let e,t,l="B. Artículos científicos en revistas indizadas",a,o,c="Nº de Art. cient. Scopus o Web of Science (Scimago o JCR)",r,i,s,u,m,f,P,_,y,w,v,p,L,O,q,$="Conference Proceeding (Scopus o WoS)/Scielo",X,d,C,W,U,fe="C. Registros de propiedad intelectual, concedidas y registradas en INDECOPI, SCOPUS u otras",ce,K,me,pe,de,_e,te,ke,Ee,he,et="D. Publicaciones de libros y/o capítulos de libro indizados",De,ne,Le,we,le,Ae,Me,ge,tt="E. Índice H Scopus",Se,oe,Ve,Pe;function Ht(g){n[11](g)}let nt={id:"produccion-q1",label:"Q1",min:0,inputClass:"col px-1"};n[1]!==void 0&&(nt.value=n[1]),s=new Y({props:nt}),z.push(()=>J(s,"value",Ht));function Qt(g){n[12](g)}let lt={id:"produccion-q2",label:"Q1",min:0,inputClass:"col px-1"};n[2]!==void 0&&(lt.value=n[2]),f=new Y({props:lt}),z.push(()=>J(f,"value",Qt));function Ft(g){n[13](g)}let ot={id:"produccion-q2",label:"Q3",min:0,inputClass:"col px-1"};n[3]!==void 0&&(ot.value=n[3]),y=new Y({props:ot}),z.push(()=>J(y,"value",Ft));function Nt(g){n[14](g)}let at={id:"produccion-q2",label:"Q4",min:0,inputClass:"col px-1"};n[4]!==void 0&&(at.value=n[4]),p=new Y({props:at}),z.push(()=>J(p,"value",Nt));function Tt(g){n[15](g)}let it={id:"produccion-conference",label:"Nº",min:0};n[5]!==void 0&&(it.value=n[5]),d=new Y({props:it}),z.push(()=>J(d,"value",Tt));function jt(g){n[16](g)}let rt={id:"produccion-pat-inv",label:"Patente de invención o Certificado de Obtentor o Paquete Tecnológico",min:0};n[6]!==void 0&&(rt.value=n[6]),K=new Y({props:rt}),z.push(()=>J(K,"value",jt));function qt(g){n[17](g)}let st={id:"produccion-pat-mod",label:"Patente de modelo de utilidad o certificado de derecho de autor por software",min:0};n[7]!==void 0&&(st.value=n[7]),te=new Y({props:st}),z.push(()=>J(te,"value",qt));function Bt(g){n[18](g)}let ut={id:"produccion-libros",label:"Nº de libros",min:0};n[8]!==void 0&&(ut.value=n[8]),ne=new Y({props:ut}),z.push(()=>J(ne,"value",Bt));function Ot(g){n[19](g)}let ct={id:"produccion-capitulos",label:"Nº de capítulos de libro",min:0};n[9]!==void 0&&(ct.value=n[9]),le=new Y({props:ct}),z.push(()=>J(le,"value",Ot));function Ut(g){n[20](g)}let dt={id:"produccion-h",label:"¿Valor del índice H > 10?",options:[{value:0,label:"No"},{value:1,label:"Sí"}]};return n[10]!==void 0&&(dt.selected=n[10]),oe=new Vt({props:dt}),z.push(()=>J(oe,"selected",Ut)),{c(){e=E("div"),t=E("h6"),t.textContent=l,a=H(),o=E("p"),o.textContent=c,r=H(),i=E("div"),F(s.$$.fragment),m=H(),F(f.$$.fragment),_=H(),F(y.$$.fragment),v=H(),F(p.$$.fragment),O=H(),q=E("p"),q.textContent=$,X=H(),F(d.$$.fragment),W=H(),U=E("h6"),U.textContent=fe,ce=H(),F(K.$$.fragment),pe=H(),de=E("div"),_e=E("div"),F(te.$$.fragment),Ee=H(),he=E("h6"),he.textContent=et,De=H(),F(ne.$$.fragment),we=H(),F(le.$$.fragment),Me=H(),ge=E("h6"),ge.textContent=tt,Se=H(),F(oe.$$.fragment),this.h()},l(g){e=D(g,"DIV",{slot:!0});var k=V(e);t=D(k,"H6",{["data-svelte-h"]:!0}),x(t)!=="svelte-1p3tc39"&&(t.textContent=l),a=Q(k),o=D(k,"P",{class:!0,["data-svelte-h"]:!0}),x(o)!=="svelte-1vw6ksq"&&(o.textContent=c),r=Q(k),i=D(k,"DIV",{class:!0});var Z=V(i);N(s.$$.fragment,Z),m=Q(Z),N(f.$$.fragment,Z),_=Q(Z),N(y.$$.fragment,Z),v=Q(Z),N(p.$$.fragment,Z),Z.forEach(I),O=Q(k),q=D(k,"P",{class:!0,["data-svelte-h"]:!0}),x(q)!=="svelte-n4yrky"&&(q.textContent=$),X=Q(k),N(d.$$.fragment,k),W=Q(k),U=D(k,"H6",{class:!0,["data-svelte-h"]:!0}),x(U)!=="svelte-1lzl5kk"&&(U.textContent=fe),ce=Q(k),N(K.$$.fragment,k),pe=Q(k),de=D(k,"DIV",{class:!0});var be=V(de);_e=D(be,"DIV",{class:!0});var ve=V(_e);N(te.$$.fragment,ve),ve.forEach(I),be.forEach(I),Ee=Q(k),he=D(k,"H6",{["data-svelte-h"]:!0}),x(he)!=="svelte-ahwt7s"&&(he.textContent=et),De=Q(k),N(ne.$$.fragment,k),we=Q(k),N(le.$$.fragment,k),Me=Q(k),ge=D(k,"H6",{["data-svelte-h"]:!0}),x(ge)!=="svelte-1b2aqn4"&&(ge.textContent=tt),Se=Q(k),N(oe.$$.fragment,k),k.forEach(I),this.h()},h(){h(o,"class","mt-3"),h(i,"class","row mt-1 px-2"),h(q,"class","mt-3"),h(U,"class","mt-3"),h(_e,"class","col"),h(de,"class","row"),h(e,"slot","body")},m(g,k){B(g,e,k),b(e,t),b(e,a),b(e,o),b(e,r),b(e,i),T(s,i,null),b(i,m),T(f,i,null),b(i,_),T(y,i,null),b(i,v),T(p,i,null),b(e,O),b(e,q),b(e,X),T(d,e,null),b(e,W),b(e,U),b(e,ce),T(K,e,null),b(e,pe),b(e,de),b(de,_e),T(te,_e,null),b(e,Ee),b(e,he),b(e,De),T(ne,e,null),b(e,we),T(le,e,null),b(e,Me),b(e,ge),b(e,Se),T(oe,e,null),Pe=!0},p(g,k){const Z={};!u&&k&2&&(u=!0,Z.value=g[1],R(()=>u=!1)),s.$set(Z);const be={};!P&&k&4&&(P=!0,be.value=g[2],R(()=>P=!1)),f.$set(be);const ve={};!w&&k&8&&(w=!0,ve.value=g[3],R(()=>w=!1)),y.$set(ve);const ft={};!L&&k&16&&(L=!0,ft.value=g[4],R(()=>L=!1)),p.$set(ft);const mt={};!C&&k&32&&(C=!0,mt.value=g[5],R(()=>C=!1)),d.$set(mt);const pt={};!me&&k&64&&(me=!0,pt.value=g[6],R(()=>me=!1)),K.$set(pt);const _t={};!ke&&k&128&&(ke=!0,_t.value=g[7],R(()=>ke=!1)),te.$set(_t);const ht={};!Le&&k&256&&(Le=!0,ht.value=g[8],R(()=>Le=!1)),ne.$set(ht);const gt={};!Ae&&k&512&&(Ae=!0,gt.value=g[9],R(()=>Ae=!1)),le.$set(gt);const bt={};!Ve&&k&1024&&(Ve=!0,bt.selected=g[10],R(()=>Ve=!1)),oe.$set(bt)},i(g){Pe||(M(s.$$.fragment,g),M(f.$$.fragment,g),M(y.$$.fragment,g),M(p.$$.fragment,g),M(d.$$.fragment,g),M(K.$$.fragment,g),M(te.$$.fragment,g),M(ne.$$.fragment,g),M(le.$$.fragment,g),M(oe.$$.fragment,g),Pe=!0)},o(g){S(s.$$.fragment,g),S(f.$$.fragment,g),S(y.$$.fragment,g),S(p.$$.fragment,g),S(d.$$.fragment,g),S(K.$$.fragment,g),S(te.$$.fragment,g),S(ne.$$.fragment,g),S(le.$$.fragment,g),S(oe.$$.fragment,g),Pe=!1},d(g){g&&I(e),j(s),j(f),j(y),j(p),j(d),j(K),j(te),j(ne),j(le),j(oe)}}}function In(n){let e,t;return e=new xe({props:{parentId:n[0],itemId:"produccion",$$slots:{body:[vn],header:[bn]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,a){T(e,l,a),t=!0},p(l,[a]){const o={};a&1&&(o.parentId=l[0]),a&2099198&&(o.$$scope={dirty:a,ctx:l}),e.$set(o)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function Pn(n,e,t){let l,a,o,c,r,i,s,u,m,f;A(n,qe,d=>t(1,l=d)),A(n,Be,d=>t(2,a=d)),A(n,Oe,d=>t(3,o=d)),A(n,Ue,d=>t(4,c=d)),A(n,Ge,d=>t(5,r=d)),A(n,ze,d=>t(6,i=d)),A(n,Re,d=>t(7,s=d)),A(n,Je,d=>t(8,u=d)),A(n,We,d=>t(9,m=d)),A(n,Ke,d=>t(10,f=d));let{parentId:P}=e;function _(d){l=d,qe.set(l)}function y(d){a=d,Be.set(a)}function w(d){o=d,Oe.set(o)}function v(d){c=d,Ue.set(c)}function p(d){r=d,Ge.set(r)}function L(d){i=d,ze.set(i)}function O(d){s=d,Re.set(s)}function q(d){u=d,Je.set(u)}function $(d){m=d,We.set(m)}function X(d){f=d,Ke.set(f)}return n.$$set=d=>{"parentId"in d&&t(0,P=d.parentId)},[P,l,a,o,c,r,i,s,u,m,f,_,y,w,v,p,L,O,q,$,X]}class Cn extends se{constructor(e){super(),ue(this,e,Pn,In,re,{parentId:0})}}function yn(n){let e,t=`<i class="bi bi-person-lines-fill"></i>
        Asesoría`;return{c(){e=E("span"),e.innerHTML=t,this.h()},l(l){e=D(l,"SPAN",{slot:!0,["data-svelte-h"]:!0}),x(e)!=="svelte-1jtnzjf"&&(e.innerHTML=t),this.h()},h(){h(e,"slot","header")},m(l,a){B(l,e,a)},p:ee,d(l){l&&I(e)}}}function kn(n){let e,t,l,a,o,c,r,i,s,u;function m(v){n[4](v)}let f={id:"asesoria-pregrado",label:"Bachiller o título profesional",min:0};n[1]!==void 0&&(f.value=n[1]),t=new Y({props:f}),z.push(()=>J(t,"value",m));function P(v){n[5](v)}let _={id:"asesoria-maestria",label:"Magister",min:0};n[2]!==void 0&&(_.value=n[2]),o=new Y({props:_}),z.push(()=>J(o,"value",P));function y(v){n[6](v)}let w={id:"asesoria-doctorado",label:"Doctor",min:0};return n[3]!==void 0&&(w.value=n[3]),i=new Y({props:w}),z.push(()=>J(i,"value",y)),{c(){e=E("div"),F(t.$$.fragment),a=H(),F(o.$$.fragment),r=H(),F(i.$$.fragment),this.h()},l(v){e=D(v,"DIV",{slot:!0});var p=V(e);N(t.$$.fragment,p),a=Q(p),N(o.$$.fragment,p),r=Q(p),N(i.$$.fragment,p),p.forEach(I),this.h()},h(){h(e,"slot","body")},m(v,p){B(v,e,p),T(t,e,null),b(e,a),T(o,e,null),b(e,r),T(i,e,null),u=!0},p(v,p){const L={};!l&&p&2&&(l=!0,L.value=v[1],R(()=>l=!1)),t.$set(L);const O={};!c&&p&4&&(c=!0,O.value=v[2],R(()=>c=!1)),o.$set(O);const q={};!s&&p&8&&(s=!0,q.value=v[3],R(()=>s=!1)),i.$set(q)},i(v){u||(M(t.$$.fragment,v),M(o.$$.fragment,v),M(i.$$.fragment,v),u=!0)},o(v){S(t.$$.fragment,v),S(o.$$.fragment,v),S(i.$$.fragment,v),u=!1},d(v){v&&I(e),j(t),j(o),j(i)}}}function En(n){let e,t;return e=new xe({props:{parentId:n[0],itemId:"asesoria",$$slots:{body:[kn],header:[yn]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,a){T(e,l,a),t=!0},p(l,[a]){const o={};a&1&&(o.parentId=l[0]),a&142&&(o.$$scope={dirty:a,ctx:l}),e.$set(o)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function Dn(n,e,t){let l,a,o;A(n,$e,u=>t(1,l=u)),A(n,Xe,u=>t(2,a=u)),A(n,Ye,u=>t(3,o=u));let{parentId:c}=e;function r(u){l=u,$e.set(l)}function i(u){a=u,Xe.set(a)}function s(u){o=u,Ye.set(o)}return n.$$set=u=>{"parentId"in u&&t(0,c=u.parentId)},[c,l,a,o,r,i,s]}class Ln extends se{constructor(e){super(),ue(this,e,Dn,En,re,{parentId:0})}}const Lt=G(null);function wn(n){let e;const t=n[11].default,l=He(t,n,n[10],null),a=l||Mn();return{c(){a&&a.c()},l(o){a&&a.l(o)},m(o,c){a&&a.m(o,c),e=!0},p(o,c){l&&l.p&&(!e||c&1024)&&Qe(l,t,o,o[10],e?Ne(t,o[10],c,null):Fe(o[10]),null)},i(o){e||(M(a,o),e=!0)},o(o){S(a,o),e=!1},d(o){a&&a.d(o)}}}function An(n){let e,t,l,a,o=[{id:n[0]},n[8]],c={};for(let r=0;r<o.length;r+=1)c=Te(c,o[r]);return{c(){e=E("div"),this.h()},l(r){e=D(r,"DIV",{id:!0}),V(e).forEach(I),this.h()},h(){Ct(e,c)},m(r,i){B(r,e,i),l||(a=Yt(t=n[7].call(null,e,{data:n[1],layout:n[2],config:n[3],reloadPlot:n[4]})),l=!0)},p(r,i){Ct(e,c=tn(o,[i&1&&{id:r[0]},i&256&&r[8]])),t&&Zt(t.update)&&i&30&&t.update.call(null,{data:r[1],layout:r[2],config:r[3],reloadPlot:r[4]})},i:ee,o:ee,d(r){r&&I(e),l=!1,a()}}}function Mn(n){let e;return{c(){e=ae("Loading Plotly")},l(t){e=ie(t,"Loading Plotly")},m(t,l){B(t,e,l)},d(t){t&&I(e)}}}function Sn(n){let e,t="",l,a,o,c,r,i,s,u;const m=[An,wn],f=[];function P(_,y){return _[5]?0:1}return o=P(n),c=f[o]=m[o](n),{c(){e=E("script"),e.innerHTML=t,a=H(),c.c(),r=It(),this.h()},l(_){const y=Rt("svelte-16kqj6w",document.head);e=D(y,"SCRIPT",{src:!0,["data-svelte-h"]:!0}),x(e)!=="svelte-c77ok0"&&(e.innerHTML=t),y.forEach(I),a=Q(_),c.l(_),r=It(),this.h()},h(){Jt(e.src,l="https://cdn.plot.ly/plotly-2.12.1.min.js")||h(e,"src",l)},m(_,y){b(document.head,e),B(_,a,y),f[o].m(_,y),B(_,r,y),i=!0,s||(u=Ze(e,"load",n[6]),s=!0)},p(_,[y]){let w=o;o=P(_),o===w?f[o].p(_,y):(xt(),S(f[w],1,1,()=>{f[w]=null}),en(),c=f[o],c?c.p(_,y):(c=f[o]=m[o](_),c.c()),M(c,1),c.m(r.parentNode,r))},i(_){i||(M(c),i=!0)},o(_){S(c),i=!1},d(_){_&&(I(a),I(r)),I(e),f[o].d(_),s=!1,u()}}}function Vn(n,e,t){const l=["id","data","layout","config","loaded","reloadPlot"];let a=Pt(e,l),o;A(n,Lt,d=>t(5,o=d));let{$$slots:c={},$$scope:r}=e;const i=Wt();let{id:s="plot-"+Math.floor(Math.random()*100).toString()}=e,{data:u}=e,{layout:m={}}=e,{config:f={}}=e,{loaded:P=!1}=e,{reloadPlot:_=0}=e;function y(){o||Xt(Lt,o=window==null?void 0:window.Plotly,o)}Kt(async()=>y());const w=d=>i("hover",d),v=d=>i("unhover",d),p=d=>i("click",d),L=d=>i("selected",d),O=d=>i("relayout",d),q=(d,C,W,U,fe)=>o.newPlot(d,C,{...W},{...U}).then(()=>{d.on("plotly_hover",w),d.on("plotly_unhover",v),d.on("plotly_click",p),d.on("plotly_selected",L),d.on("plotly_relayout",O),t(9,P=!0)}),$=(d,C,W,U,fe)=>o.react(d,C,W,U).then(()=>{console.debug("update ploty",C),t(9,P=!0)});function X(d,{data:C,layout:W,config:U,reloadPlot:fe}){return q(d,C,W,U),{update({data:ce,layout:K,config:me}){t(9,P=!1),$(d,ce,K,me)},destroy(){d.removeListener("plotly_hover",w),d.removeListener("plotly_unhover",v),d.removeListener("plotly_click",p),d.removeListener("plotly_selected",L),d.removeListener("plotly_relayout",O),t(9,P=!1)}}}return n.$$set=d=>{e=Te(Te({},e),$t(d)),t(8,a=Pt(e,l)),"id"in d&&t(0,s=d.id),"data"in d&&t(1,u=d.data),"layout"in d&&t(2,m=d.layout),"config"in d&&t(3,f=d.config),"loaded"in d&&t(9,P=d.loaded),"reloadPlot"in d&&t(4,_=d.reloadPlot),"$$scope"in d&&t(10,r=d.$$scope)},[s,u,m,f,_,o,y,X,a,P,r,c]}class Hn extends se{constructor(e){super(),ue(this,e,Vn,Sn,re,{id:0,data:1,layout:2,config:3,loaded:9,reloadPlot:4})}}function wt(n,e,t){const l=n.slice();return l[22]=e[t],l}function At(n){let e,t=n[22].nm+"",l,a,o=n[22].val+"",c;return{c(){e=E("div"),l=ae(t),a=ae(": "),c=ae(o),this.h()},l(r){e=D(r,"DIV",{class:!0});var i=V(e);l=ie(i,t),a=ie(i,": "),c=ie(i,o),i.forEach(I),this.h()},h(){h(e,"class","w-100")},m(r,i){B(r,e,i),b(e,l),b(e,a),b(e,c)},p(r,i){i&1&&t!==(t=r[22].nm+"")&&Ie(l,t),i&1&&o!==(o=r[22].val+"")&&Ie(c,o)},d(r){r&&I(e)}}}function Qn(n){let e,t,l,a,o,c,r=ye(n[0]),i=[];for(let s=0;s<r.length;s+=1)i[s]=At(wt(n,r,s));return o=new Hn({props:{data:n[1],layout:n[2],config:n[3]}}),{c(){e=E("div"),t=E("div");for(let s=0;s<i.length;s+=1)i[s].c();l=H(),a=E("div"),F(o.$$.fragment),this.h()},l(s){e=D(s,"DIV",{class:!0});var u=V(e);t=D(u,"DIV",{class:!0});var m=V(t);for(let P=0;P<i.length;P+=1)i[P].l(m);m.forEach(I),l=Q(u),a=D(u,"DIV",{class:!0});var f=V(a);N(o.$$.fragment,f),f.forEach(I),u.forEach(I),this.h()},h(){h(t,"class","col-12 col-lg-6"),h(a,"class","col-12 col-lg-6"),h(e,"class","row")},m(s,u){B(s,e,u),b(e,t);for(let m=0;m<i.length;m+=1)i[m]&&i[m].m(t,null);b(e,l),b(e,a),T(o,a,null),c=!0},p(s,[u]){if(u&1){r=ye(s[0]);let f;for(f=0;f<r.length;f+=1){const P=wt(s,r,f);i[f]?i[f].p(P,u):(i[f]=At(P),i[f].c(),i[f].m(t,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=r.length}const m={};u&2&&(m.data=s[1]),o.$set(m)},i(s){c||(M(o.$$.fragment,s),c=!0)},o(s){S(o.$$.fragment,s),c=!1},d(s){s&&I(e),Mt(i,s),j(o)}}}function Fn(n,e,t){let l,a,o,c,r,i,s,u,m,f,P,_,y,w;A(n,Ye,C=>t(7,l=C)),A(n,Xe,C=>t(8,a=C)),A(n,$e,C=>t(9,o=C)),A(n,We,C=>t(10,c=C)),A(n,Je,C=>t(11,r=C)),A(n,Re,C=>t(12,i=C)),A(n,ze,C=>t(13,s=C)),A(n,Ge,C=>t(14,u=C)),A(n,Ue,C=>t(15,m=C)),A(n,Oe,C=>t(16,f=C)),A(n,Be,C=>t(17,P=C)),A(n,qe,C=>t(18,_=C)),A(n,je,C=>t(19,y=C)),A(n,Ke,C=>t(20,w=C));let v=[],p=(C,W)=>({x:[C],y:[""],name:W,orientation:"h",type:"bar",width:.25}),L,O,q,$,X={barmode:"stack",xaxis:{title:{text:"Puntaje calculado"}},legend:{orientation:"h",y:1.1,traceorder:"normal"}},d={displayModeBar:!1,responsive:!0};return n.$$.update=()=>{if(n.$$.dirty&2097024&&t(0,v=[{nm:"Formación - grado académico",val:y},{nm:"Producción - Q1",val:_},{nm:"Producción - Q2",val:P},{nm:"Producción - Q3",val:f},{nm:"Producción - Q4",val:m},{nm:"Producción - Conf. Proceedings",val:u},{nm:"Producción - Patente de invencion",val:s},{nm:"Producción - Patente de modelo",val:i},{nm:"Producción - Libros",val:r},{nm:"Producción - Capitulos",val:c},{nm:"Producción - Indice H",val:w},{nm:"Asesoria de pregrado",val:o},{nm:"Asesoria de maestria",val:a},{nm:"Asesoria de doctorado",val:l}]),n.$$.dirty&1048560){let C=y,W=_*5+P*4+f*3+m*2,U=u>10?10:u,fe=s*3+i,ce=r*2+c,K=ce>10?10:ce,me=W+U+fe+K,pe=o*.5+a*1+l*2,de=pe>10?10:pe;t(4,L=p(C,"Formación")),t(5,O=p(me,"Producción")),t(6,q=p(de,"Asesoría")),t(1,$=[L,O,q])}},[v,$,X,d,L,O,q,l,a,o,c,r,i,s,u,m,f,P,_,y,w]}class Nn extends se{constructor(e){super(),ue(this,e,Fn,Qn,re,{})}}function Tn(n){let e,t,l,a,o,c,r,i,s,u,m,f,P;return o=new _n({props:{parentId:"myAccordion"}}),r=new Cn({props:{parentId:"myAccordion"}}),s=new Ln({props:{parentId:"myAccordion"}}),f=new Nn({}),{c(){e=E("div"),t=E("div"),l=E("div"),a=E("div"),F(o.$$.fragment),c=H(),F(r.$$.fragment),i=H(),F(s.$$.fragment),u=H(),m=E("div"),F(f.$$.fragment),this.h()},l(_){e=D(_,"DIV",{class:!0});var y=V(e);t=D(y,"DIV",{class:!0});var w=V(t);l=D(w,"DIV",{class:!0});var v=V(l);a=D(v,"DIV",{class:!0,id:!0});var p=V(a);N(o.$$.fragment,p),c=Q(p),N(r.$$.fragment,p),i=Q(p),N(s.$$.fragment,p),p.forEach(I),v.forEach(I),u=Q(w),m=D(w,"DIV",{class:!0});var L=V(m);N(f.$$.fragment,L),L.forEach(I),w.forEach(I),y.forEach(I),this.h()},h(){h(a,"class","accordion mt-3"),h(a,"id","myAccordion"),h(l,"class","col-md-6 col-lg-4 col-12"),h(m,"class","col-md-6 col-lg-8 col-12 p-3"),h(t,"class","row"),h(e,"class","container-fluid")},m(_,y){B(_,e,y),b(e,t),b(t,l),b(l,a),T(o,a,null),b(a,c),T(r,a,null),b(a,i),T(s,a,null),b(t,u),b(t,m),T(f,m,null),P=!0},p:ee,i(_){P||(M(o.$$.fragment,_),M(r.$$.fragment,_),M(s.$$.fragment,_),M(f.$$.fragment,_),P=!0)},o(_){S(o.$$.fragment,_),S(r.$$.fragment,_),S(s.$$.fragment,_),S(f.$$.fragment,_),P=!1},d(_){_&&I(e),j(o),j(r),j(s),j(f)}}}class On extends se{constructor(e){super(),ue(this,e,null,Tn,re,{})}}export{On as component};
