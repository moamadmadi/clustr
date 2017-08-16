"use strict";function forEachValue(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function deepCopy(t){return JSON.parse(JSON.stringify(t))}function normalize(t,e){if("object"!==(void 0===t?"undefined":_typeof(t))){var n=t,o=t;return"function"==typeof t&&(n=t.name),t={},t[n]=o,t}Array.isArray(t)||(t._scope&&(t._scope=[,t._scope]),t=[e,t[e],t]),e=e||void 0;var r=void 0,i=[],c=[];if(Array.isArray(t[0])?t=[e,r].concat([t]):"string"!=typeof t[0]&&t.unshift(e),e=t[0],r=t[1],i=t[2],c=t[3]||{},"object"!==(void 0===i?"undefined":_typeof(i)))i=normalize(i);else if(Array.isArray(i)){var f={};i.forEach(function(t,e){var n=t;"function"==typeof t?n=t.name:Array.isArray(t)&&(n=t[0],t.length>2?t=normalize(t.splice(1),n)[n]:2===t.length?t=t[1]:1===t.length&&(t=t[0])),f[n]=t}),i=f}return forEachValue(i,function(t,e){(Array.isArray(t)||"object"===(void 0===t?"undefined":_typeof(t)))&&(i[e]=normalize(t,e)[e])}),Array.isArray(c)&&(c=normalize([void 0,c],"_scope")._scope),forEachValue(c,function(t,e){Array.isArray(t)&&(c[e]=normalize(t,e)[e])}),t={},t[e]=i,Object.keys(c).length>0&&(t[e]._scope=c),void 0==r&&null==r||(t[e][e]=r),t}function Constructor(t,e){function n(){"function"!=typeof t&&(t=function(){return"fnf"});var n=Array.from(arguments),o=function(){},r=function(){};n.forEach(function(t,e){if("function"==typeof t){if("pre"===t.name)o=t;else{if("post"!==t.name)return;r=t}n=n.splice(0,e).concat(n.splice(e+1))}}),o(latest,stack);var i={},c=t(n,latest,stack,globalOptions);return void 0!==c&&void 0!==c.value&&(c,c=c.value),latest={fn:t,value:c,args:n,name:t.name},stack.unshift(latest),r(latest,stack),forEachValue(e,function(e,n){t.name!==n&&e&&!~keywords.indexOf(n)&&("function"==typeof e?e=Constructor(e,{}):"object"===(void 0===e?"undefined":_typeof(e))&&(e=Clustr(e,n)),i[n]=e)}),t._pipe&&(i[t.name]=Constructor(t,e)),t._endpoint||Object.keys(i).length<1?c:Object.assign(i,{value:c})}return!0===t._constructed?t:(n._constructed=!0,n)}function propagation(t,e,n){function o(t,e){var n={};return forEachValue(t,function(t,r){~e.indexOf(r)||("object"===(void 0===t?"undefined":_typeof(t))&&(t=Clustr(t=o(t,e),r)),n[r]=t)}),n}e=e||{};var r={};e=Object.assign(e,t._scope||{});var i=(t._exclude||"").split(" ");return e=o(e,i),r=Object.assign(r,e),forEachValue(t,function(t,i){if(t&&!~keywords.indexOf(i)&&(r[i]="object"===(void 0===t?"undefined":_typeof(t))?propagation(t,e,i):t,(t._alias||"").split(" ").forEach(function(t){t.length<1||i===t||(r[t]=r[i])}),"function"==typeof r[i])){if(i===n)return;var c=(r[i]._exclude||"").split(" "),f=o(e,c),u=r[i];r[i]=Object.assign({},u,f),r[i][i]=u}}),r}function Clustr(object,name){if(!0===object._mapped)return object;if("function"==typeof object)return Constructor(object,{});if("object"!==(void 0===object?"undefined":_typeof(object)))return object;var Construct={},self=object[name];return"object"===(void 0===self?"undefined":_typeof(self))?object=Object.assign(object,Clustr(self,name)):Construct="function"==typeof self?Constructor(self,object):eval("Constructor(function "+name+" () { return self }, object)"),forEachValue(object,function(t,e){name!==e&&(Construct[e]=Clustr(t,e))}),Construct._mapped=!0,Construct}function globalOptions(){return{_resetStack:function(){stack=[]},_stack:function(){return stack},_latest:function(){return latest}}}function init(t,e){return"object"!==(void 0===e?"undefined":_typeof(e))?e:(stack=[],latest={},e=propagation(e,[],t),Object.assign(Clustr(e,t),globalOptions()))}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},keywords=["_scope","_exclude","_alias","_pipe","_endpoint"],latest={},stack=[];"undefined"!=typeof module&&void 0!==module.exports?module.exports=init:"function"==typeof define&&define.amd?define([],function(){return init}):window.clustr=init;