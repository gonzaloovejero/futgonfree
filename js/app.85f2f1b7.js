(function(){"use strict";var e={3958:function(e,t,o){var n=o(9242),i=o(3396);const r={class:"app"};function a(e,t,o,n,a,s){const l=(0,i.up)("MainVue");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(l)])}var s=o.p+"img/mercado-pago-Logo.b164b53d.png";const l={class:"main-vue-container"},u={class:"nav-bar"},d=(0,i._)("div",{class:"explain"},[(0,i._)("div",{class:"centralize-explain"},[(0,i._)("span",null,[(0,i._)("b",null,"Futgon"),(0,i.Uk)(" es solo un sitio web de incrustación de videos y no aloja ningún tipo de video. Todos los videos aquí son de sitios web de terceros. Comuníquese con el sitio web de alojamiento de videos apropiado para eliminar cualquier video. "),(0,i._)("b",null,"Es un sitio creado para que puedan ver futbol gratis, estoy trabajando todos los dias para mantener el sitio correctamente y mejorarlo. Es un sustento propio de mi bolsillo, si quieres colaborar para mantener el sitio, debajo se encuentra mi alias de Mercado Pago. Muchas Gracias y Disfrutá! ")])])],-1),c={class:"table-channels"},p=(0,i._)("div",{class:"donations"},[(0,i._)("img",{src:s,class:"mp-logo"}),(0,i._)("h1",null,"Donaciones: "),(0,i._)("span",null,[(0,i._)("b",null,"gonza.sdt.mp")])],-1);function h(e,t,o,n,r,a){const s=(0,i.up)("NavBar"),h=(0,i.up)("TableChannels");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",u,[(0,i.Wm)(s)]),d,(0,i._)("div",c,[(0,i.Wm)(h)]),p])}var f=o.p+"img/logo-page.37da2a16.png";const v={class:"navbar-container"},m=(0,i.uE)('<div class="logo-container"><h1><a href="#">FUTGON</a></h1><img src="'+f+'" alt=""></div><div class="links-container"><ul class="flex-list"><li class="link"><a href="#">TYC SPORTS</a></li><li class="link"><a href="#">ESPN</a></li><li class="link"><a href="#">ESPN +</a></li><li class="link"><a href="#">TNT SPORTS</a></li></ul></div>',2),x=[m];function S(e,t,o,n,r,a){return(0,i.wg)(),(0,i.iD)("div",v,x)}var T={},b=o(89);const g=(0,b.Z)(T,[["render",S]]);var V=g,O=o(7139);const P={class:"table-channels-container"},E={class:"flex-center"},w={class:"list-channels"},R=["onClick"],y={key:0,class:"video-popup"},C={class:"video-popup-content"},N=["src"];function _(e,t,o,n,r,a){return(0,i.wg)(),(0,i.iD)("div",P,[(0,i._)("div",E,[(0,i._)("ul",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.lista,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,onClick:t=>a.redireccionar(e),class:"main-items"},[(0,i._)("span",null,(0,O.zw)(e.texto),1)],8,R)))),128))]),r.mostrarVideo?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",C,[(0,i._)("button",{class:"close-button",onClick:t[0]||(t[0]=e=>r.mostrarVideo=!1)},"Cerrar"),(0,i._)("iframe",{src:r.urlVideo,width:"100%",height:"600px",frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",msExitFullscreen:"true",allowfullscreen:"true",allow:"encrypted-media autoplay",scrolling:"no"},null,8,N)])])):(0,i.kq)("",!0)])])}var k={data(){return{lista:[{texto:"TYC SPORTS",expandido:!1},{texto:"TYC SPORTS INTERNACIONAL",expandido:!1},{texto:"ESPN 1",expandido:!1},{texto:"ESPN 2",expandido:!1},{texto:"ESPN 3",expandido:!1},{texto:"ESPN EXTRA",expandido:!1},{texto:"DIRECTV 1",expandido:!1},{texto:"DIRECTV 2",expandido:!1},{texto:"DIRECTV PLUS",expandido:!1},{texto:"TNT SPORTS",expandido:!1},{texto:"FOX SPORTS 1",expandido:!1},{texto:"FOX SPORTS 2",expandido:!1},{texto:"FOX SPORTS PLUS",expandido:!1}],mostrarVideo:!1,urlVideo:""}},methods:{expandir(e){this.lista.forEach(((t,o)=>{t.expandido=o===e&&!t.expandido}))},redireccionar(e){"TYC SPORTS"===e.texto?(this.urlVideo="https://tutele1.net/online.php?a=1204",this.mostrarVideo=!0):"TYC SPORTS INTERNACIONAL"===e.texto?(this.urlVideo="https://tutele1.net/online.php?a=37718",this.mostrarVideo=!0):"ESPN 1"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=1 ",this.mostrarVideo=!0):"ESPN 2"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=2 ",this.mostrarVideo=!0):"ESPN 3"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=3 ",this.mostrarVideo=!0):"ESPN EXTRA"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=4674 ",this.mostrarVideo=!0):"DIRECTV 1"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=6 ",this.mostrarVideo=!0):"DIRECTV 2"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=7 ",this.mostrarVideo=!0):"DIRECTV PLUS"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=8 ",this.mostrarVideo=!0):"TNT SPORTS"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=149 ",this.mostrarVideo=!0):"FOX SPORTS 1"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=132 ",this.mostrarVideo=!0):"FOX SPORTS 2"===e.texto?(this.urlVideo=" https://tutele1.net/online.php?a=133 ",this.mostrarVideo=!0):"FOX SPORTS PLUS"===e.texto&&(this.urlVideo=" https://tutele1.net/online.php?a=4673 ",this.mostrarVideo=!0)}}};const D=(0,b.Z)(k,[["render",_]]);var j=D,F={components:{NavBar:V,TableChannels:j}};const I=(0,b.Z)(F,[["render",h]]);var X=I,A={name:"App",components:{MainVue:X}};const L=(0,b.Z)(A,[["render",a]]);var M=L,q=o(4736),U=o(5537),Y=o.n(U);o(8556);const z=(0,n.ri)(M);z.use(q["default"]).use(Y()),z.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/futgonfree/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],s=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var d=l(o)}for(t&&t(n);u<a.length;u++)r=a[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self["webpackChunkfutgon"]=self["webpackChunkfutgon"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3958)}));n=o.O(n)})();
//# sourceMappingURL=app.85f2f1b7.js.map