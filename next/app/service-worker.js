if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,s,i)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return c;case"module":return o;default:return e(r)}})).then(e=>{const r=i(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-9316aab2"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"150e3c8c48a371b3ee51.js",revision:"4f5ae5876f5581a840ea91a4a7153383"},{url:"a6d12537a7bf991496bb.js",revision:"ef980cf57d82b554c573f9c31d46bb1f"},{url:"app.js",revision:"51eee0a6f8eacfb81bea017de075943c"},{url:"d61d96d4f99c7ff159e5.js",revision:"6f2e8564e245cdc58d0548e4a31fc640"},{url:"embed.html",revision:"183a0295daa21d0de5dcfe38640c0cb6"},{url:"index.html",revision:"3d1d7c0e827e7b7241c28e1f44739c58"},{url:"schema-static.1.0.0.json",revision:"e37dca743a0c18cc84ff4a5f6763953a"},{url:"schema.1.0.0.json",revision:"810fe1bf00dc2a1a55cbd63c47dc3bfe"}],{})}));
