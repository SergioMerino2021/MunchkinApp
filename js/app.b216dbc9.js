(function(){"use strict";var e={4636:function(e,t,n){var l=n(9242),o=n(3396);function r(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var u=n(89);const a={},i=(0,u.Z)(a,[["render",r]]);var s=i,d=n(2483),c=n.p+"img/logo.05f56cac.png";const p={class:"w-full flex justify-center items-center flex-col"},b=(0,o._)("img",{alt:"Vue logo",class:"h-[200px]",src:c},null,-1);function f(e,t,n,l,r,u){const a=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",p,[b,(0,o.Wm)(a)])}var h=n(7139);const m=(0,o.Uk)(" ¡Has ganado! "),y={class:"py-4"},v=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Lugar"),(0,o._)("th",null,"Puntos"),(0,o._)("th",null,"Habilitado")])],-1),_={class:"p-6"},g=(0,o._)("td",null,"Cabeza",-1),w=(0,o._)("td",null,"Cuerpo",-1),x=(0,o._)("td",null,"Pies",-1),k={key:0},M=(0,o._)("td",null,"Mano 1",-1),z={key:1},j=(0,o._)("td",null,"Mano 2",-1),U={key:2},V=(0,o._)("td",null,"Doble mano",-1),O=(0,o._)("td",null,"Objetos Extras",-1),C=(0,o._)("td",null,"Multiplicador",-1),P=(0,o._)("td",null,null,-1),T={class:"py-6"},D=(0,o.Uk)("Doble Mano: "),E={class:"flex flex-row justify-around justify-items-center gap-6 py-4"};function H(e,t,n,r,u,a){const i=(0,o.up)("v-alert"),s=(0,o.up)("v-table");return(0,o.wg)(),(0,o.iD)(o.HY,null,[10==u.level?((0,o.wg)(),(0,o.j4)(i,{key:0,border:"start",variant:"tonal",color:"green",class:"w-[60%]"},{default:(0,o.w5)((()=>[m])),_:1})):(0,o.kq)("",!0),(0,o._)("div",y,[(0,o._)("h1",null,"Munchkin Level: "+(0,h.zw)(u.level),1),(0,o._)("h1",null,"Munchkin Atack: "+(0,h.zw)(u.atack),1)]),(0,o._)("div",null,[(0,o.Wm)(s,{theme:"dark",onChange:t[15]||(t[15]=e=>a.levelM())},{default:(0,o.w5)((()=>[v,(0,o._)("tbody",_,[(0,o._)("tr",null,[g,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[0]||(t[0]=e=>u.cabeza[0]=e)},null,512),[[l.nr,u.cabeza[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>u.cabeza[1]=e)},null,512),[[l.e8,u.cabeza[1]]])])]),(0,o._)("tr",null,[w,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[2]||(t[2]=e=>u.cuerpo[0]=e)},null,512),[[l.nr,u.cuerpo[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=e=>u.cuerpo[1]=e)},null,512),[[l.e8,u.cuerpo[1]]])])]),(0,o._)("tr",null,[x,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[4]||(t[4]=e=>u.pies[0]=e)},null,512),[[l.nr,u.pies[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>u.pies[1]=e)},null,512),[[l.e8,u.pies[1]]])])]),u.dobleMano[1]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("tr",k,[M,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[6]||(t[6]=e=>u.brazo1[0]=e)},null,512),[[l.nr,u.brazo1[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=e=>u.brazo1[1]=e)},null,512),[[l.e8,u.brazo1[1]]])])])),u.dobleMano[1]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("tr",z,[j,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[8]||(t[8]=e=>u.brazo2[0]=e)},null,512),[[l.nr,u.brazo2[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>u.brazo2[1]=e)},null,512),[[l.e8,u.brazo2[1]]])])])),u.dobleMano[1]?((0,o.wg)(),(0,o.iD)("tr",U,[V,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[10]||(t[10]=e=>u.dobleMano[0]=e)},null,512),[[l.nr,u.dobleMano[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=e=>u.dobleMano[1]=e)},null,512),[[l.e8,u.dobleMano[1]]])])])):(0,o.kq)("",!0),(0,o._)("tr",null,[O,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[12]||(t[12]=e=>u.extras[0]=e)},null,512),[[l.nr,u.extras[0]]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[13]||(t[13]=e=>u.extras[1]=e)},null,512),[[l.e8,u.extras[1]]])])]),(0,o._)("tr",null,[C,(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"border rounded-xl text-center","onUpdate:modelValue":t[14]||(t[14]=e=>u.multi=e)},null,512),[[l.nr,u.multi]])]),P])])])),_:1}),(0,o._)("p",T,[D,(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[16]||(t[16]=e=>u.dobleMano[1]=e),onChange:t[17]||(t[17]=e=>a.levelM())},null,544),[[l.e8,u.dobleMano[1]]])]),(0,o._)("div",E,[(0,o._)("button",{class:"rounded-md border-slate-800 bg-blue-500 py-2 px-5",onClick:t[18]||(t[18]=(...e)=>a.sum&&a.sum(...e))},"+"),(0,o._)("button",{class:"rounded-md border-slate-800 bg-yellow-500 py-2 px-5",onClick:t[19]||(t[19]=(...e)=>a.min&&a.min(...e))},"-")]),(0,o._)("button",{class:"rounded-md border-slate-800 bg-red-500 py-2 px-5",onClick:t[20]||(t[20]=(...e)=>a.reset&&a.reset(...e))},"Reset")])],64)}var A={name:"HelloWorld",data(){return{cabeza:[0,!0],cuerpo:[0,!0],pies:[0,!0],brazo1:[0,!0],brazo2:[0,!0],dobleMano:[0,!1],extras:[0,!0],multi:1,level:1,atack:1}},methods:{reset(){this.cabeza=[0,!0],this.cuerpo=[0,!0],this.pies=[0,!0],this.brazo1=[0,!0],this.brazo2=[0,!0],this.dobleMano=[0,!1],this.extras=[0,!0],this.level=1,this.atack=1,this.multi=1,this.levelM()},sum(){this.level++,this.levelM()},min(){this.level--,this.levelM()},levelM(){console.log("Calculando...");let e=0;this.cabeza[1]&&(e+=this.cabeza[0]),this.cuerpo[1]&&(e+=this.cuerpo[0]),this.pies[1]&&(e+=this.pies[0]),this.extras[1]&&(e+=this.extras[0]),this.dobleMano[1]?e+=this.dobleMano[0]:(this.brazo1[1]&&(e+=this.brazo1[0]),this.brazo2[1]&&(e+=this.brazo2[0])),this.atack=(e+this.level)*this.multi}}};const q=(0,u.Z)(A,[["render",H]]);var S=q,W={name:"HomeView",components:{HelloWorld:S}};const L=(0,u.Z)(W,[["render",f]]);var N=L;const Z=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],F=(0,d.p7)({history:(0,d.PO)("/MunchkinApp"),routes:Z});var R=F,B=n(65),Y=(0,B.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),G=(n(9773),n(8957)),I=n(1850),J=n(8600);const K=(0,G.Rd)({components:I,directives:J});(0,l.ri)(s).use(Y).use(R).use(K).mount("#app")}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,l,o,r){if(!l){var u=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],r=e[d][2];for(var a=!0,i=0;i<l.length;i++)(!1&r||u>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[i])}))?l.splice(i--,1):(a=!1,r<u&&(u=r));if(a){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[l,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,l){return n.f[l](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.ebe7fc5f.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test:";n.l=function(l,o,r,u){if(e[l])e[l].push(o);else{var a,i;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==t+r){a=c;break}}a||(i=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=l),e[l]=[o];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(b);var o=e[l];if(delete e[l],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),i&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,l){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)l.push(o[2]);else{var r=new Promise((function(n,l){o=e[t]=[n,l]}));l.push(o[2]=r);var u=n.p+n.u(t),a=new Error,i=function(l){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=l&&("load"===l.type?"missing":l.type),u=l&&l.target&&l.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",a.name="ChunkLoadError",a.type=r,a.request=u,o[1](a)}};n.l(u,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,r,u=l[0],a=l[1],i=l[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var d=i(n)}for(t&&t(l);s<u.length;s++)r=u[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},l=self["webpackChunktest"]=self["webpackChunktest"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(4636)}));l=n.O(l)})();
//# sourceMappingURL=app.b216dbc9.js.map