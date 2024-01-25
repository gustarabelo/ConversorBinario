(()=>{"use strict";var n,o,r,e,t,a,i,s,c,p,A,u,f,d,l={122:(n,o,r)=>{r.d(o,{Z:()=>s});var e=r(537),t=r.n(e),a=r(645),i=r.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([n.id,":root {\n    --primary-color: #0d64b6;\n    --primary-color-darker: #0a4b88;\n\n    --font-comic: 'Comic Neue';\n    --font-open: 'Open Sans';\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    background: var(--primary-color);\n    margin: 0;\n    padding: 0;\n    font-family: var(--font-open), sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: white;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover{\n    background: var(--primary-color-darker);\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAGA;IACI,wBAAwB;IACxB,+BAA+B;;IAE/B,0BAA0B;IAC1B,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n\n:root {\n    --primary-color: #0d64b6;\n    --primary-color-darker: #0a4b88;\n\n    --font-comic: 'Comic Neue';\n    --font-open: 'Open Sans';\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    background: var(--primary-color);\n    margin: 0;\n    padding: 0;\n    font-family: var(--font-open), sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: white;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover{\n    background: var(--primary-color-darker);\n}\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var o=[];return o.toString=function(){return this.map((function(o){var r="",e=void 0!==o[5];return o[4]&&(r+="@supports (".concat(o[4],") {")),o[2]&&(r+="@media ".concat(o[2]," {")),e&&(r+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),r+=n(o),e&&(r+="}"),o[2]&&(r+="}"),o[4]&&(r+="}"),r})).join("")},o.i=function(n,r,e,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var A=[].concat(n[p]);e&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),r&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=r):A[2]=r),t&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=t):A[4]="".concat(t)),o.push(A))}},o}},537:n=>{n.exports=function(n){var o=n[1],r=n[3];if(!r)return o;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */");return[o].concat([a]).join("\n")}return[o].join("\n")}},379:n=>{var o=[];function r(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=e.base?c[0]+e.base:c[0],A=a[p]||0,u="".concat(p," ").concat(A);a[p]=A+1;var f=r(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)o[f].references++,o[f].updater(d);else{var l=t(d,e);e.byIndex=s,o.splice(s,0,{identifier:u,updater:l,references:1})}i.push(u)}return i}function t(n,o){var r=o.domAPI(o);return r.update(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap&&o.supports===n.supports&&o.layer===n.layer)return;r.update(n=o)}else r.remove()}}n.exports=function(n,t){var a=e(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);o[s].references--}for(var c=e(n,t),p=0;p<a.length;p++){var A=r(a[p]);0===o[A].references&&(o[A].updater(),o.splice(A,1))}a=c}}},569:n=>{var o={};n.exports=function(n,r){var e=function(n){if(void 0===o[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}o[n]=r}return o[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{n.exports=function(n){var o=document.createElement("style");return n.setAttributes(o,n.attributes),n.insert(o,n.options),o}},565:(n,o,r)=>{n.exports=function(n){var o=r.nc;o&&n.setAttribute("nonce",o)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var o=n.insertStyleElement(n);return{update:function(r){!function(n,o,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,t&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(e,n,o.options)}(o,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)}}}},589:n=>{n.exports=function(n,o){if(o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}}},m={};function g(n){var o=m[n];if(void 0!==o)return o.exports;var r=m[n]={id:n,exports:{}};return l[n](r,r.exports,g),r.exports}g.n=n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return g.d(o,{a:o}),o},g.d=(n,o)=>{for(var r in o)g.o(o,r)&&!g.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:o[r]})},g.o=(n,o)=>Object.prototype.hasOwnProperty.call(n,o),g.nc=void 0,n=g(379),o=g.n(n),r=g(795),e=g.n(r),t=g(569),a=g.n(t),i=g(565),s=g.n(i),c=g(216),p=g.n(c),A=g(589),u=g.n(A),f=g(122),(d={}).styleTagTransform=u(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=p(),o()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals})();
//# sourceMappingURL=bundle.js.map