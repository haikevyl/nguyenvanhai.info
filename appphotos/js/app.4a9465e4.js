(function(t){function e(e){for(var r,i,l=e[0],u=e[1],s=e[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-3"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.itemCount,expression:"itemCount"}],staticClass:"custom-select custom-select-sm",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.itemCount=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"15",selected:""}},[t._v("15 photo / page")]),n("option",{attrs:{value:"30"}},[t._v("30 photo / page")]),n("option",{attrs:{value:"45"}},[t._v("45 photo / page")]),n("option",{attrs:{value:"60"}},[t._v("60 photo / page")])])]),n("div",{staticClass:"row"},t._l(t.links.slice((t.pageNUmber-1)*t.itemCount,t.pageNUmber*t.itemCount),(function(t,e){return n("li",{key:e,staticClass:"col-md-4 col-sm-6 mt-0 pl-1 pr-1 mb-2"},[n("a",{attrs:{href:t,"data-lightbox":"image-lightbox"}},[n("div",{staticClass:"w-100 thumbnall",style:{"background-image":"url("+t+")"}})])])})),0),n("div",{staticClass:"row d-flex justify-content-center mt-3"},[n("button",{staticClass:"btn btn-primary mr-1",on:{click:t.prev}},[t._v("Prev")]),n("button",{staticClass:"btn btn-primary ml-1",on:{click:t.next}},[t._v("Next")])])])])},a=[],i=n("bc3a"),l=n.n(i),u="https://farebasebyap.firebaseio.com/link.json",s={name:"App",data:function(){return{links:[],pageNUmber:1,itemCount:15}},mounted:function(){var t=this;l.a.get(u).then((function(e){for(var n in e.data)t.links.push(e.data[n]);t.links=t.links[0]})).catch((function(t){console.log(t)}))},methods:{prev:function(){this.pageNUmber>1&&(this.pageNUmber-=1)},next:function(){this.pageNUmber+=1}}},c=s,p=(n("034f"),n("2877")),f=Object(p["a"])(c,o,a,!1,null,null,null),v=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.4a9465e4.js.map