(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7241:function(e,t,n){Promise.resolve().then(n.t.bind(n,4811,23)),Promise.resolve().then(n.bind(n,6052)),Promise.resolve().then(n.bind(n,76)),Promise.resolve().then(n.t.bind(n,2778,23))},6052:function(e,t,n){"use strict";var s=n(7437),o=n(2265);t.default=()=>{let[e,t]=(0,o.useState)(0),n=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{if(!n.current){let e=localStorage.getItem("visitCount"),s=(e&&!isNaN(parseInt(e,10))?parseInt(e,10):0)+1;localStorage.setItem("visitCount",s.toString()),t(s),n.current=!0}},[]),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mt-10",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-gray-700",children:"Visitor Count"}),(0,s.jsx)("div",{className:"mt-4 text-6xl font-extrabold text-white bg-blue-500 px-8 py-4 rounded-lg shadow-lg",children:e})]})}},76:function(e,t,n){"use strict";let s;n.d(t,{ThemeSwitcher:function(){return h}});var o=n(7437),r=n(6397),a=n.n(r),l=n(2265);let c="nextjs-blog-starter-theme",i=["system","dark","light"],d=e=>{let[t,n,s]=["system","dark","light"],o=()=>{let e=document.createElement("style");return e.textContent="*,*:after,*:before{transition:none !important;}",document.head.appendChild(e),()=>{getComputedStyle(document.body),setTimeout(()=>document.head.removeChild(e),1)}},r=matchMedia("(prefers-color-scheme: ".concat(n,")"));window.updateDOM=()=>{var a;let l=o(),c=null!==(a=localStorage.getItem(e))&&void 0!==a?a:t,i=r.matches?n:s,d=c===t?i:c,u=document.documentElement.classList;d===n?u.add(n):u.remove(n),document.documentElement.setAttribute("data-mode",c),l()},window.updateDOM(),r.addEventListener("change",window.updateDOM)},u=()=>{let[e,t]=(0,l.useState)(()=>{var e;return null!==(e="undefined"!=typeof localStorage&&localStorage.getItem(c))&&void 0!==e?e:"system"});return(0,l.useEffect)(()=>{s=window.updateDOM,addEventListener("storage",e=>{e.key===c&&t(e.newValue)})},[]),(0,l.useEffect)(()=>{localStorage.setItem(c,e),s()},[e]),(0,o.jsx)("button",{suppressHydrationWarning:!0,className:a().switch,onClick:()=>{let n=i.indexOf(e);t(i[(n+1)%i.length])}})},m=(0,l.memo)(()=>(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"(".concat(d.toString(),")('").concat(c,"')")}})),h=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{}),(0,o.jsx)(u,{})]})},2778:function(){},6397:function(e){e.exports={switch:"switch_switch__v3CFJ",n:"switch_n__Jl1Sp"}},4811:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}}},function(e){e.O(0,[0,971,117,744],function(){return e(e.s=7241)}),_N_E=e.O()}]);