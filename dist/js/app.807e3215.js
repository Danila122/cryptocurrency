(function(){"use strict";var e={1974:function(e,t,r){var i=r(9242),n=r(3396),s=r(7139);const a={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},o={class:"container"},c=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),l=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),d={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},u=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),h={key:1,class:"relative"},p={class:"text-lg leading-6 font-medium text-gray-900 my-8"},g={class:"flex items-end border-gray-600 border-b border-l h-64",ref:"graph"},f={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},m=(0,n._)("g",null,[(0,n._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1),v=[m];function k(e,t,r,m,k,y){const b=(0,n.up)("add-ticker"),x=(0,n.up)("single-ticker");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",o,[(0,n.Wm)(b,{disabled:k.tickerExist,"ticker-exist":k.tickerExist,onAddTicker:y.add,onInputValue:y.inputValidation},null,8,["disabled","ticker-exist","onAddTicker","onInputValue"]),k.tickers.length>0?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[c,k.page>1?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",onClick:t[0]||(t[0]=e=>k.page=k.page-1)},"Назад ")):(0,n.kq)("",!0),y.hasNextPage?((0,n.wg)(),(0,n.iD)("button",{key:1,class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",onClick:t[1]||(t[1]=e=>k.page=k.page+1)},"Вперед ")):(0,n.kq)("",!0),(0,n._)("div",null,[(0,n.Uk)("Фильтр:"),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>k.filter=e),class:"p-1"},null,512),[[i.nr,k.filter]])]),l,(0,n._)("dl",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.paginatedTickers,((e,t)=>((0,n.wg)(),(0,n.j4)(x,{key:t,item:e,idx:t,tickers:k.tickers,onRemoveTicker:y.remove,onClick:t=>y.select(e),class:(0,s.C_)({"border-4":k.selected===e})},null,8,["item","idx","tickers","onRemoveTicker","onClick","class"])))),128))]),u],64)):(0,n.kq)("",!0),k.selected?((0,n.wg)(),(0,n.iD)("section",h,[(0,n._)("h3",p,(0,s.zw)(k.selected.name)+" - USD ",1),(0,n._)("div",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.normalizedGraph,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,style:(0,s.j5)({height:`${e}%`,width:`${k.barWidth}px`}),class:"bg-purple-800 border"},null,4)))),128))],512),(0,n._)("button",{onClick:t[3]||(t[3]=e=>k.selected=null),type:"button",class:"absolute top-0 right-0"},[((0,n.wg)(),(0,n.iD)("svg",f,v))])])):(0,n.kq)("",!0)])])}r(7658);const y="cd260eb77da9f20abed7a2265fc4daa7edf0cf088431dddac3394dedaa041020",b=new Map,x=new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${y}`),w="5";function _(e,t){const r=b.get(e)??[];r.forEach((e=>e(t)))}function E(e){const t=JSON.stringify(e);x.readyState!==WebSocket.OPEN?x.addEventListener("open",(()=>{x.send(t)}),{once:!0}):x.send(t)}function S(e){E({action:"SubAdd",subs:[`5~CCCAGG~${e}~USD`]})}function C(e){E({action:"SubRemove",subs:[`5~CCCAGG~${e}~USD`]})}x.addEventListener("message",(e=>{const{TYPE:t,MESSAGE:r,PARAMETER:i,FROMSYMBOL:n,PRICE:s}=JSON.parse(e.data);if("INVALID_SUB"===r){const e=i.split("~")[2];_(e,s)}t===w&&void 0!==s&&_(n,s)}));const T=(e,t)=>{const r=b.get(e)||[];b.set(e,[...r,t]),S(e)},A=e=>{b.delete(e),C(e)},O={class:"flex"},D={class:"max-w-xs"},M={for:"wallet",class:"block text-sm font-medium text-gray-700"},z={class:"mt-1 relative rounded-md shadow-md"},G=(0,n._)("div",{class:"flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap"},[(0,n._)("span")],-1),I={key:0,class:"text-sm text-red-600"};function j(e,t,r,a,o,c){const l=(0,n.up)("add-button");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("div",O,[(0,n._)("div",D,[(0,n._)("label",M,"Тикер"+(0,s.zw)(o.ticker),1),(0,n._)("div",z,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.ticker=e),onInput:t[1]||(t[1]=e=>this.$emit("input-value",e.target.value)),onKeydown:t[2]||(t[2]=(0,i.D2)(((...e)=>c.add&&c.add(...e)),["enter"])),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[i.nr,o.ticker]])]),G,r.tickerExist?((0,n.wg)(),(0,n.iD)("div",I,"Такой тикер уже добавлен ")):(0,n.kq)("",!0)])]),(0,n.Wm)(l,{disabled:r.disabled,"on:click":c.add,type:"button",class:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},null,8,["disabled","on:click"])])}const U=["disabled"],q=(0,n._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,n._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1);function V(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("button",{disabled:r.disabled,class:(0,s.C_)({"opacity-50":r.disabled})},[q,(0,n.Uk)(" Добавить ")],10,U)}var $={props:{disabled:{type:Boolean,require:!1,default:!1}},data(){return{}}},L=r(89);const N=(0,L.Z)($,[["render",V]]);var B=N,P={props:{tickerExist:{type:Boolean,require:!1,default:!1},disabled:{type:Boolean,require:!1,default:!1}},emits:{"add-ticker":{type:String},"input-value":null},components:{AddButton:B},data(){return{ticker:""}},methods:{add(){this.disabled||(this.$emit("add-ticker",this.ticker),this.ticker="")}}};const W=(0,L.Z)(P,[["render",j]]);var R=W;const H={class:"overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"},J={class:"text-sm font-medium text-gray-500 truncate"},Y={class:"mt-1 text-3xl font-semibold text-gray-900"},Z=(0,n._)("div",{class:"w-full border-t border-gray-200"},null,-1),K=(0,n._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1);function F(e,t,r,a,o,c){return(0,n.wg)(),(0,n.iD)("div",H,[(0,n._)("div",{class:(0,s.C_)(["bg-white px-4 py-5 sm:p-6 text-center",{"bg-red-200":!r.item.isActive}])},[(0,n._)("dt",J,(0,s.zw)(r.item.name)+" - USD ",1),(0,n._)("dd",Y,(0,s.zw)(r.item.price),1)],2),Z,(0,n._)("button",{onClick:t[0]||(t[0]=(0,i.iM)((e=>c.remove(r.idx)),["stop"])),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[K,(0,n.Uk)("Удалить ")])])}var Q={name:"SingleTicker",props:{item:{type:Object,require:!0},idx:{type:Number,require:!0},tickers:{type:Array,require:!0}},data(){return{tickersArray:this.tickers}},methods:{remove(e){const t=this.tickersArray[e];this.tickersArray.splice(e,1),this.$emit("remove-ticker",t)}}};const X=(0,L.Z)(Q,[["render",F]]);var ee=X,te={name:"App",components:{AddTicker:R,SingleTicker:ee},data(){return{filter:"",tickers:[],selected:null,tickerExist:!1,graph:[],page:1,maxGraphElements:1,barWidth:40}},created(){const e=localStorage.getItem("cryptocurrency");e&&(this.tickers=JSON.parse(e),this.tickers.forEach((e=>{T(e.name,(t=>this.updateTicker(e.name,t)))})))},mounted(){window.addEventListener("resize",this.calculateMaxGraphElements)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxGraphElements)},computed:{startIndex(){return 6*(this.page-1)},endIndex(){return 6*this.page},filteredTickers(){return this.tickers.filter((e=>e.name.includes(this.filter.toUpperCase())))},paginatedTickers(){return this.filteredTickers.slice(this.startIndex,this.endIndex)},hasNextPage(){return this.filteredTickers.length>this.endIndex},normalizedGraph(){const e=Math.max(...this.graph),t=Math.min(...this.graph);return e===t?this.graph.map((()=>50)):this.graph.map((r=>5+95*(r-t)/(e-t)))}},methods:{updateTicker(e,t){if(void 0===t)return void this.tickers.forEach((t=>t.name===e?t.isActive=!1:null));const r=this.tickers.filter((t=>t.name===e));r.forEach((e=>{e===this.selected&&this.graph.push(t),e.price=t}))},add(e){if(""==e.trim()||this.tickerExist)return;this.filter="";const t={name:e.toUpperCase(),price:"-",isActive:!0};this.tickers.push(t),localStorage.setItem("cryptocurrency",JSON.stringify(this.tickers)),T(t.name,(e=>this.updateTicker(t.name,e)))},remove(e){this.selected=null,A(e.name),localStorage.setItem("cryptocurrency",JSON.stringify(this.tickers))},calculateMaxGraphElements(){this.$refs.graph&&(this.maxGraphElements=this.$refs.graph.clientWidth/this.barWidth)},inputValidation(e){for(let t=0;t<this.tickers.length;t++){const r=this.tickers[t];if(r.name.toLowerCase()===e.toLowerCase())return void(this.tickerExist=!0);this.tickerExist=!1}},select(e){e.isActive&&(this.selected=e,this.$nextTick().then(this.calculateMaxGraphElements))}},watch:{paginatedTickers(){0===this.paginatedTickers.length&&this.page>1&&(this.page-=1)},selected(){this.graph=[]},filter(){this.page=1}}};const re=(0,L.Z)(te,[["render",k]]);var ie=re;(0,i.ri)(ie).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],s=e[d][2];for(var o=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[c])}))?i.splice(c--,1):(o=!1,s<a&&(a=s));if(o){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],c=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var d=c(r)}for(t&&t(i);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},i=self["webpackChunkcryptocurrency"]=self["webpackChunkcryptocurrency"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(1974)}));i=r.O(i)})();
//# sourceMappingURL=app.807e3215.js.map