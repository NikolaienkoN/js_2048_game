parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".button"),t=document.querySelectorAll(".field_cell"),r=document.querySelector(".game-score"),s=document.querySelector(".message_lose"),o=document.querySelector(".message_win"),a=document.querySelector(".message_start"),i=[],n=!0,c=0,l=[],d=[],f=4,v=.9,u=2;function m(){return Math.floor(Math.random()*f)}function L(){return Math.random()<v?u:f}function _(){for(var e=!1,t=!1,r=0;r<f;r++)for(var o=0;o<f;o++)0===i[r][o]&&(e=!0),(r-1>=0&&i[r-1][o]===i[r][o]||r+1<f&&i[r+1][o]===i[r][o]||o-1>=0&&i[r][o-1]===i[r][o]||o+1<f&&i[r][o+1]===i[r][o])&&(t=!0);e&&JSON.stringify(d)!==JSON.stringify(i)?g():t||s.classList.remove("hidden")}function g(){for(var e=0;e<1;e++){var t=m(),r=m();0===i[t][r]?i[t][r]=L():e--}}function h(){i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],l=[[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1]]}function y(e,t){return e>=0&&e<f&&t>=0&&t<f}function S(e,r,s,a){if(0!==i[e][r]){for(var d=e+s,v=r+a;y(d,v)&&0===i[d][v];)d+=s,v+=a;if(y(d,v)&&i[d][v]===i[e][r]&&!l[d][v]){i[d][v]*=2,l[d][v]=!0,2048===i[d][v]&&(o.classList.remove("hidden"),n=!1),c+=i[d][v],i[e][r]=0;var u=t[d*f+v];u.classList.add("field_cell--merge"),u.addEventListener("animationend",function(){u.classList.remove("field_cell--merge"),p()})}else if(v-=a,i[d-=s][v]=i[e][r],d!==e||v!==r){i[e][r]=0;var m=t[e*f+r];m.classList.add("field_cell--defaultMove"),1===a&&(m.classList.add("field_cell--moveRight"),setTimeout(function(){m.classList.remove("field_cell--moveRight"),p()},200)),-1===a&&(m.classList.add("field_cell--moveLeft"),setTimeout(function(){m.classList.remove("field_cell--moveLeft"),p()},200)),1===s&&(m.classList.add("field_cell--moveDown"),setTimeout(function(){m.classList.remove("field_cell--moveDown"),p()},200)),-1===s&&(m.classList.add("field_cell--moveUp"),setTimeout(function(){m.classList.remove("field_cell--moveUp"),p()},200))}}}function w(){for(var e=0;e<f;e++)for(var t=2;t>=0;t--)S(e,t,0,1)}function k(){for(var e=0;e<f;e++)for(var t=1;t<f;t++)S(e,t,0,-1)}function q(){for(var e=0;e<f;e++)for(var t=2;t>=0;t--)S(t,e,1,0)}function A(){for(var e=0;e<f;e++)for(var t=1;t<f;t++)S(t,e,-1,0)}function N(){for(var e=0;e<f;e++)for(var t=0;t<f;t++)l[e][t]=!1}function b(e,s){var o=t[e*f+s],a=i[e][s];r.textContent=c,o.textContent=a||"",o.className="field_cell",0!==a&&o.classList.add("field_cell--".concat(a))}function p(){for(var e=0;e<f;e++)for(var t=0;t<f;t++)b(e,t)}document.addEventListener("keydown",function(e){if(n){var t=e.key;switch(d=JSON.parse(JSON.stringify(i)),t){case"ArrowUp":A(),_(),N();break;case"ArrowDown":q(),_(),N();break;case"ArrowLeft":k(),_(),N();break;case"ArrowRight":w(),_(),N()}}}),e.addEventListener("click",function(){n=!0,a.classList.add("hidden"),e.classList.contains("restart")?(e.classList.remove("restart"),e.classList.add("start"),e.textContent="Start",n=!1,h()):(e.classList.remove("start"),e.classList.add("restart"),e.textContent="Restart",n=!0,c=0,s.classList.add("hidden"),o.classList.add("hidden"),h(),g(),g());for(var t=0;t<f;t++)for(var r=0;r<f;r++)b(t,r)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.72d3e3af.js.map