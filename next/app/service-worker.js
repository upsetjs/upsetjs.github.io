if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,s,i)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return c;case"module":return o;default:return e(r)}})).then(e=>{const r=i(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-074d58d4"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"11cd75530aeb4ae04577.js",revision:"a90d8708d248997bcfc80a260b8204d6"},{url:"59e18cf1a022c30226c3.js",revision:"cc478e9c00be93e41716ebf1bd44bb03"},{url:"65f02c00d84087814937.js",revision:"1a336d08e6e7328347cd785912fe8302"},{url:"app.js",revision:"61e2cbc84cc95ecad2f1217d1f43aa01"},{url:"embed.html",revision:"edea55875ffde5fe1051884fb235d4e5"},{url:"index.html",revision:"123b5129e0cf5f6a4a45facbaf51c6f1"},{url:"schema.1.0.0.json",revision:"872c48133c405acf93347105c0a3b8ac"}],{})}));
