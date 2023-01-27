(function(){"use strict";var e={9476:function(e,t,r){var n=r(9242),s=r(3396),i=r(7139);const o={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},a={class:"container"},l={class:"flex"},c={class:"max-w-xs"},d={for:"wallet",class:"block text-sm font-medium text-gray-700"},u={class:"mt-1 relative rounded-md shadow-md"},m=(0,s.uE)('<div class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap"><span class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"> BTC </span><span class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"> DOGE </span><span class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"> BCH </span><span class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"> CHD </span></div><div class="text-sm text-red-600">Такой тикер уже добавлен</div>',2),f=(0,s._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,s._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1),p=(0,s._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),g={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},h=["onClick"],x={class:"px-4 py-5 sm:p-6 text-center"},v={class:"text-sm font-medium text-gray-500 truncate"},w={class:"mt-1 text-3xl font-semibold text-gray-900"},y=(0,s._)("div",{class:"w-full border-t border-gray-200"},null,-1),b=["onClick"],k=(0,s._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,s._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),_=(0,s._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),D={key:1,class:"relative"},z={class:"text-lg leading-6 font-medium text-gray-900 my-8"},C={class:"flex items-end border-gray-600 border-b border-l h-64"},O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},j=(0,s._)("g",null,[(0,s._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1),M=[j];function H(e,t,r,j,H,U){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("section",null,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("label",d,"Тикер"+(0,i.zw)(H.ticker),1),(0,s._)("div",u,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>H.ticker=e),onKeydown:t[1]||(t[1]=(0,n.D2)(((...e)=>U.add&&U.add(...e)),["enter"])),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[n.nr,H.ticker]])]),m])]),(0,s._)("button",{"on:click":t[2]||(t[2]=(...e)=>U.add&&U.add(...e)),type:"button",class:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[f,(0,s.Uk)(" Добавить ")],32)]),H.tickers.length>0?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[p,(0,s._)("dl",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(H.tickers,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,onClick:t=>U.select(e),class:(0,i.C_)([{"border-4":H.selected===e},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"])},[(0,s._)("div",x,[(0,s._)("dt",v,(0,i.zw)(e.name)+" - USD ",1),(0,s._)("dd",w,(0,i.zw)(e.price),1)]),y,(0,s._)("button",{onClick:(0,n.iM)((e=>U.remove(t)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[k,(0,s.Uk)("Удалить ")],8,b)],10,h)))),128))]),_],64)):(0,s.kq)("",!0),H.selected?((0,s.wg)(),(0,s.iD)("section",D,[(0,s._)("h3",z,(0,i.zw)(H.selected.name)+" - USD ",1),(0,s._)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(U.normalizeGraph(),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,style:(0,i.j5)({height:`${e}%`}),class:"bg-purple-800 border w-10"},null,4)))),128))]),(0,s._)("button",{onClick:t[3]||(t[3]=e=>H.selected=null),type:"button",class:"absolute top-0 right-0"},[((0,s.wg)(),(0,s.iD)("svg",O,M))])])):(0,s.kq)("",!0)])])}r(7658);var U={name:"App",data(){return{ticker:"",tickers:[],selected:null,graph:[]}},methods:{add(){const e={name:this.ticker,price:"-"};this.tickers.push(e),this.ticker="";const t=this;setInterval((()=>{fetch(`https://min-api.cryptocompare.com/data/price?fsym=${e.name}&tsyms=USD&&api_key=cd260eb77da9f20abed7a2265fc4daa7edf0cf088431dddac3394dedaa041020`).then((e=>e.json())).then((r=>{t.tickers.find((t=>t.name===e.name)).price=r.USD,e.name===this.selected?.name&&this.graph.push(r.USD)}))}),5e3)},remove(e){this.tickers.splice(e,1)},select(e){this.selected=e,this.graph=[]},normalizeGraph(){const e=Math.max(...this.graph),t=Math.min(...this.graph);return this.graph.map((r=>5+95*(r-t)/(e-t)))}}},S=r(89);const B=(0,S.Z)(U,[["render",H]]);var V=B;(0,n.ri)(V).mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,i){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],i=e[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,o=n[0],a=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(l)var d=l(r)}for(t&&t(n);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self["webpackChunkcryptocurrency"]=self["webpackChunkcryptocurrency"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9476)}));n=r.O(n)})();
//# sourceMappingURL=app.86943f9e.js.map