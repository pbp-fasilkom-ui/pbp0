"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(7462),r=a(7294),i=a(3905);const l=e=>{let{deadline:t}=e;const a=(e=>{const[t,a]=r.useState({day:0,hour:0,minute:0,second:0});return r.useEffect((()=>{const t=setInterval((()=>{const t=Date.now(),n=e.getTime();if(n<t)return a({day:0,hour:0,minute:0,second:0});let r=(n-t)/1e3,i=Math.floor(r/86400);r%=86400;let l=Math.floor(r/3600);r%=3600;let o=Math.floor(r/60);r%=60;let s=Math.floor(r);a({day:i,hour:l,minute:o,second:s})}),1e3);return()=>clearInterval(t)}),[]),t})(t);return r.createElement("p",null,t.toLocaleString("id-ID",{dateStyle:"long",timeStyle:"long"}),r.createElement("span",null,"\xa0(",a.day," days ",a.hour," hours ",a.minute," minutes ",a.second," seconds left)"))},o={sidebar_label:"Tugas 1"},s="Tugas 1: Menulis Esai",u={unversionedId:"tugas/tugas-1",id:"tugas/tugas-1",title:"Tugas 1: Menulis Esai",description:"Informasi Tugas",source:"@site/assignments/tugas/tugas-1.md",sourceDirName:"tugas",slug:"/tugas/tugas-1",permalink:"/ganjil-2023/assignments/tugas/tugas-1",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Tugas 1"},sidebar:"tutorialSidebar",previous:{title:"Lab 0",permalink:"/ganjil-2023/assignments/tutorial/tutorial-0"}},p={},c=[{value:"Informasi Tugas",id:"informasi-tugas",level:2},{value:"Submission:",id:"submission",level:3},{value:"Deadline:",id:"deadline",level:3},{value:"Deliverables:",id:"deliverables",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tugas-1-menulis-esai"},"Tugas 1: Menulis Esai"),(0,i.kt)("h2",{id:"informasi-tugas"},"Informasi Tugas"),(0,i.kt)("h3",{id:"submission"},"Submission:"),(0,i.kt)("p",null,"Submission Slot SCELE (link to be announced)"),(0,i.kt)("h3",{id:"deadline"},"Deadline:"),(0,i.kt)(l,{deadline:new Date("08 September 2022 12:00 GMT+7"),mdxType:"Countdown"}),(0,i.kt)("h3",{id:"deliverables"},"Deliverables:"),(0,i.kt)("p",null,"Tulislah sebuah esai minimal 1000 kata yang mengandung poin-poin yang sebagai berikut:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Apa itu platform?"),(0,i.kt)("li",{parentName:"ol"},"Apa itu web platform dan mobile platform? Apa contohnya? Dan mana yang terbaik? Mana yang termudah untuk pemula? Analisis dan tulis sumber-sumber pendukung"),(0,i.kt)("li",{parentName:"ol"},"Dari contoh platform yang disebutkan pada poin 2, apakah platform-platform tersebut dapat saling terhubung? Bagaimana cara implementasinya? Jelaskan.")),(0,i.kt)("p",null,"Tidak ada jawaban benar salah. Esai dinilai berdasarkan ketajaman analisis dan kekritisan tulisan."))}d.isMDXComponent=!0}}]);