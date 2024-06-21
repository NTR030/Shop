(function(){"use strict";var t={5986:function(t,e,o){var n=o(6768),r=o(5130);function i(t,e,o,r,i,a){const s=(0,n.g2)("the-header"),u=(0,n.g2)("router-view"),c=(0,n.g2)("LoadingSpinner");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(s),a.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(u,{key:0})),((0,n.uX)(),(0,n.Wv)(n.Im,{to:"body"},[a.isLoading?((0,n.uX)(),(0,n.Wv)(c,{key:0})):(0,n.Q3)("",!0)]))],64)}const a=t=>((0,n.Qi)("data-v-8d9dcefc"),t=t(),(0,n.jt)(),t),s=a((()=>(0,n.Lk)("button",{type:"submit"},[(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#868e96",viewBox:"0 0 24 24",class:"svg"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})])],-1)));function u(t,e,o,i,a,u){const c=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("section",null,[(0,n.Lk)("header",null,[(0,n.Lk)("h1",null,[(0,n.bF)(c,{to:"/"},{default:(0,n.k6)((()=>[(0,n.eW)("Shop")])),_:1})]),(0,n.Lk)("form",{onSubmit:e[1]||(e[1]=(0,r.D$)(((...t)=>u.searchCommodity&&u.searchCommodity(...t)),["prevent"]))},[(0,n.bo)((0,n.Lk)("input",{type:"search",maxlength:"12","onUpdate:modelValue":e[0]||(e[0]=t=>a.title=t)},null,512),[[r.Jo,a.title,void 0,{trim:!0}]]),s],32),(0,n.Lk)("nav",null,[(0,n.bF)(c,{to:"/commodities"},{default:(0,n.k6)((()=>[(0,n.eW)("Shop List")])),_:1}),u.login?((0,n.uX)(),(0,n.Wv)(c,{key:1,to:"/cart"},{default:(0,n.k6)((()=>[(0,n.eW)("Cart")])),_:1})):((0,n.uX)(),(0,n.Wv)(c,{key:0,to:"/login"},{default:(0,n.k6)((()=>[(0,n.eW)("Login")])),_:1}))])])])}o(4114);var c={data(){return{title:""}},computed:{login(){return!!this.$store.state.user.user}},methods:{searchCommodity(){this.$store.commit("commodity/searchCommodity",this.title),this.$router.push({path:"/commodities"}),this.title=""}}},d=o(1241);const m=(0,d.A)(c,[["render",u],["__scopeId","data-v-8d9dcefc"]]);var l=m,f={components:{TheHeader:l},computed:{isLoading(){return this.$store.getters.isLoading}}};const h=(0,d.A)(f,[["render",i]]);var p=h,g=o(9495),v=o(1387);const y=()=>o.e(844).then(o.bind(o,4844)),b=()=>o.e(962).then(o.bind(o,8962)),L=()=>o.e(296).then(o.bind(o,9296)),C=(0,v.aE)({history:(0,v.LA)(),routes:[{path:"/commodities",alias:"/",name:"commodities",component:y},{path:"/login",name:"login",component:b},{path:"/cart",name:" cart",component:L}]});C.beforeEach(((t,e,o)=>{g.A.commit("changeLoading",!0),o()})),C.afterEach((()=>{g.A.commit("changeLoading",!1)}));var k=C;function w(t,e){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.RG)(t.$slots,"default",{},void 0,!0)])}const E={},S=(0,d.A)(E,[["render",w],["__scopeId","data-v-2b19358c"]]);var j=S;const A=(0,n.$V)((()=>o.e(875).then(o.bind(o,3875)))),O=(0,r.Ef)(p);O.use(g.A),O.use(k),O.component("BaseCard",j),O.component("LoadingSpinner",A),O.mount("#app")},9495:function(t,e,o){o.d(e,{A:function(){return h}});var n=o(782);o(4114);const r="https://shopping-lijie-default-rtdb.asia-southeast1.firebasedatabase.app/commodity.json",i={namespaced:!0,state(){return{commodity:[],isLoading:!1,searchCommodity:[],error:!1}},mutations:{setLoading(t,e){t.isLoading=e},postCommodity(t,e){t.commodity=e},searchCommodity(t,e){console.log(`搜索词为${e}`);let o=[];t.commodity.forEach((t=>{t.name.toLowerCase().includes(e.toLowerCase())&&o.push(t)})),t.searchCommodity=o,console.log(o.length),0===o.length&&(t.error=!0)},cartCommodity(t,e){const{id:o,num:n}=e;t.commodity.forEach((t=>{t.id===o&&(void 0!==t.num?t.num=Math.max(t.num+n,0):t.num=1)}))}},actions:{async getCommodity(t){t.commit("setLoading",!0);try{const e=await fetch(r),o=await e.json();console.log(o),t.commit("postCommodity",o)}catch(e){console.log(e),t.rootState.error=e}finally{t.commit("setLoading",!1)}}},getters:{commodity(t){return t.commodity},isLoading(t){return t.isLoading},searchCommodity(t){return t.searchCommodity},error(t){return t.error}}};var a=i;const s="https://shopping-lijie-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",u={namespaced:!0,state(){return{user:""}},mutations:{postUser(t,e){t.user=e}},actions:{async getUser(t,e){t.rootState.error=null,t.rootState.errorMsg="";const{email:o}=e,{password:n}=e;try{const r=await fetch(s),i=await r.json();if(!i.some((t=>t.email===o&&t.password===n)))throw new Error(`${o}邮箱不存在或密码不对`);t.commit("postUser",e)}catch(r){t.rootState.error=!0,t.rootState.errorMsg=r}}},getters:{isLogin(t){return!!t.user}}};var c=u,d=o(144);const m={namespaced:!0,state(){return{cartList:[]}},mutations:{postCartList(t,e){t.cartList=e}},actions:{getCartList(t){let e=[];const o=(0,d.ux)(t.rootState.commodity.commodity);o.forEach((t=>{void 0!==t.num&&t.num>0&&e.push(t)})),t.commit("postCartList",e)}},getters:{cartList(t){return t.cartList},cartListLength(t){return t.cartList.length}}};var l=m;const f=(0,n.y$)({modules:{commodity:a,user:c,cart:l},state(){return{error:null,isLoading:!1,errorMsg:""}},mutations:{changeLoading(t,e){t.isLoading=e},changeError(t,e){t.error=e}},actions:{},getters:{isLoading(t){return t.isLoading},isError(t){return t.error},errorMsg(t){return t.errorMsg}}});var h=f}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,i){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],i=t[d][2];for(var s=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[u])}))?n.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,r,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+t+"."+{296:"656ddab7",844:"c2e247af",875:"67946adc",962:"ad9b9129"}[t]+".js"}}(),function(){o.miniCssF=function(t){return"css/"+t+"."+{296:"b5af048c",844:"3bb77e6b",875:"59664b50",962:"0fbea72d"}[t]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="demo:";o.l=function(n,r,i,a){if(t[n])t[n].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==e+i){s=m;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+i),s.src=n),t[n]=[r];var l=function(e,o){s.onerror=s.onload=null,clearTimeout(f);var r=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/Shop/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",o.nc&&(a.nonce=o.nc);var s=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var n=o&&o.type,s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=s,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=s,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],i=r.getAttribute("data-href");if(i===t||i===e)return r}},n=function(n){return new Promise((function(r,i){var a=o.miniCssF(n),s=o.p+a;if(e(a,s))return r();t(n,s,null,r,i)}))},r={524:0};o.f.miniCss=function(t,e){var o={296:1,844:1,875:1,962:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=n(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={524:0};o.f.j=function(e,n){var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=t[e]=[o,n]}));n.push(r[2]=i);var a=o.p+o.u(e),s=new Error,u=function(n){if(o.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};o.l(a,u,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],s=n[1],u=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var d=u(o)}for(e&&e(n);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},n=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(5986)}));n=o.O(n)})();
//# sourceMappingURL=app.163d4161.js.map