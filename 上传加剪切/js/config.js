!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-cropper",[],e):"object"==typeof exports?exports["vue-cropper"]=e():t["vue-cropper"]=e()}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,o){var n=o(2);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,o){"use strict";var n=o(0);o.n(n).a},function(t,e,o){(t.exports=o(3)(!1)).push([t.i,'\n.vue-cropper[data-v-6dae58fd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n.cropper-box[data-v-6dae58fd],\n.cropper-box-canvas[data-v-6dae58fd],\n.cropper-drag-box[data-v-6dae58fd],\n.cropper-crop-box[data-v-6dae58fd],\n.cropper-face[data-v-6dae58fd] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n}\n.cropper-box-canvas img[data-v-6dae58fd] {\n  position: relative;\n  text-align: left;\n  user-select: none;\n  transform: none;\n  max-width: none;\n  max-height: none;\n}\n.cropper-box[data-v-6dae58fd] {\n  overflow: hidden;\n}\n.cropper-move[data-v-6dae58fd] {\n  cursor: move;\n}\n.cropper-crop[data-v-6dae58fd] {\n  cursor: crosshair;\n}\n.cropper-modal[data-v-6dae58fd] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cropper-crop-box[data-v-6dae58fd] {\n  /*border: 2px solid #39f;*/\n}\n.cropper-view-box[data-v-6dae58fd] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-6dae58fd] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-face[data-v-6dae58fd] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n.crop-info[data-v-6dae58fd] {\n  position: absolute;\n  left: 0px;\n  min-width: 65px;\n  text-align: center;\n  color: white;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n}\n.crop-line[data-v-6dae58fd] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n}\n.line-w[data-v-6dae58fd] {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.line-a[data-v-6dae58fd] {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.line-s[data-v-6dae58fd] {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.line-d[data-v-6dae58fd] {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.crop-point[data-v-6dae58fd] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  opacity: 0.75;\n  background-color: #39f;\n  border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.point2[data-v-6dae58fd] {\n  top: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.point3[data-v-6dae58fd] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.point4[data-v-6dae58fd] {\n  top: 50%;\n  left: -4px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.point5[data-v-6dae58fd] {\n  top: 50%;\n  right: -4px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.point6[data-v-6dae58fd] {\n  bottom: -5px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.point7[data-v-6dae58fd] {\n  bottom: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.point8[data-v-6dae58fd] {\n  bottom: -5px;\n  right: -4px;\n  cursor: se-resize;\n}\n@media screen and (max-width: 500px) {\n.crop-point[data-v-6dae58fd] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    opacity: 0.45;\n    background-color: #39f;\n    border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n    top: -10px;\n    left: -10px;\n}\n.point2[data-v-6dae58fd],\n  .point4[data-v-6dae58fd],\n  .point5[data-v-6dae58fd],\n  .point7[data-v-6dae58fd] {\n    display: none;\n}\n.point3[data-v-6dae58fd] {\n    top: -10px;\n    right: -10px;\n}\n.point4[data-v-6dae58fd] {\n    top: 0;\n    left: 0;\n}\n.point6[data-v-6dae58fd] {\n    bottom: -10px;\n    left: -10px;\n}\n.point8[data-v-6dae58fd] {\n    bottom: -10px;\n    right: -10px;\n}\n}\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,e,o){var n={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,a=0,c=[],h=o(5);function p(t,e){for(var o=0;o<t.length;o++){var r=t[o],i=n[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],e));n[r.id]={id:r.id,refs:1,parts:a}}}}function u(t,e){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):o.push(n[s]={id:s,parts:[a]})}return o}function d(t,e){var o=i(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),c.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,o);o.insertBefore(e,r)}}function l(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function f(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return g(e,t.attrs),d(t,e),e}function g(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function v(t,e){var o,n,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var c=a++;o=s||(s=f(e)),n=w.bind(null,o,c,!1),r=w.bind(null,o,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),d(t,e),e}(e),n=function(t,e,o){var n=o.css,r=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(n=h(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,o,e),r=function(){l(o),o.href&&URL.revokeObjectURL(o.href)}):(o=f(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){l(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=u(t,e);return p(o,e),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i];(a=n[s.id]).refs--,r.push(a)}t&&p(u(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete n[a.id]}}}};var m=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}();function w(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"cropper",staticClass:"vue-cropper",on:{mouseover:t.scaleImg,mouseout:t.cancelScale}},[t.imgs?o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}},[o("img",{ref:"cropperImg",attrs:{src:t.imgs,alt:"cropper-img"}})])]):t._e(),t._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping},on:{mousedown:t.startMove,touchstart:t.startMove}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},attrs:{src:t.imgs,alt:"cropper-img"}})]),t._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:t.cropMove,touchstart:t.cropMove}}),t._v(" "),t.info?o("span",{staticClass:"crop-info",style:{top:t.cropInfo.top}},[t._v(t._s(this.cropInfo.width)+" × "+t._s(this.cropInfo.height))]):t._e(),t._v(" "),t.fixedBox?t._e():o("span",[o("span",{staticClass:"crop-line line-w",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1)}}}),t._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0)}}}),t._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2)}}}),t._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,1)},touchstart:function(e){t.changeCropSize(e,!0,!0,1,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,1)},touchstart:function(e){t.changeCropSize(e,!0,!0,2,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,2)},touchstart:function(e){t.changeCropSize(e,!0,!0,1,2)}}}),t._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2)}}}),t._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,2)},touchstart:function(e){t.changeCropSize(e,!0,!0,2,2)}}})])])])};n._withStripped=!0;var r={};r.getData=function(t){return new Promise(function(e,o){var n={};(function(t){var e=null;return new Promise(function(o,n){if(t.src)if(/^data\:/i.test(t.src))e=function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),o=e.length,n=new ArrayBuffer(o),r=new Uint8Array(n),i=0;i<o;i++)r[i]=e.charCodeAt(i);return n}(t.src),o(e);else if(/^blob\:/i.test(t.src)){var r=new FileReader;r.onload=function(t){e=t.target.result,o(e)},function(t,e){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(t){200!=this.status&&0!==this.status||e(this.response)},o.send()}(t.src,function(t){r.readAsArrayBuffer(t)})}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";e=i.response,o(e),i=null},i.open("GET",t.src,!0),i.responseType="arraybuffer",i.send(null)}else n("img error")})})(t).then(function(t){n.arrayBuffer=t,n.orientation=function(t){var e,o,n,r,i,s,a,c,h,p=new DataView(t),u=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(c=2;c<u;){if(255===p.getUint8(c)&&225===p.getUint8(c+1)){s=c;break}c++}s&&(o=s+10,"Exif"===function(t,e,o){var n,r="";for(n=e,o+=e;n<o;n++)r+=String.fromCharCode(t.getUint8(n));return r}(p,s+4,4)&&(i=p.getUint16(o),((r=18761===i)||19789===i)&&42===p.getUint16(o+2,r)&&(n=p.getUint32(o+4,r))>=8&&(a=o+n)));if(a)for(u=p.getUint16(a,r),h=0;h<u;h++)if(c=a+12*h+2,274===p.getUint16(c,r)){c+=8,e=p.getUint16(c,r);break}return e}(t),e(n)}).catch(function(t){o(t)})})};var i=r,s={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:Number,default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:function(){return 10}}},computed:{cropInfo:function(){var t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){var e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:function(){navigator.userAgent;var t=!!window.ActiveXObject||"ActiveXObject"in window;return t},passive:function(){return this.isIE?null:{passive:!1}}},watch:{img:function(){this.checkedImg()},imgs:function(t){""!==t&&this.reload()},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(t,e){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()},autoCrop:function(t){t&&this.goAutoCrop()},autoCropWidth:function(){this.autoCrop&&this.goAutoCrop()},autoCropHeight:function(){this.autoCrop&&this.goAutoCrop()},mode:function(){this.checkedImg()},rotate:function(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion:function(t){for(var e=navigator.userAgent.split(" "),o="",n=new RegExp(t,"i"),r=0;r<e.length;r++)n.test(e[r])&&(o=e[r]);return o?o.split("/")[1].split("."):["0","0","0"]},checkOrientationImage:function(t,e,o,n){var r=this;if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){var i=this.getVersion("version");i[0]>13&&i[1]>1&&(e=-1)}else this.getVersion("appleWebkit")[0]>=605&&(e=-1);var s=document.createElement("canvas"),a=s.getContext("2d");switch(a.save(),e){case 2:s.width=o,s.height=n,a.translate(o,0),a.scale(-1,1);break;case 3:s.width=o,s.height=n,a.translate(o/2,n/2),a.rotate(180*Math.PI/180),a.translate(-o/2,-n/2);break;case 4:s.width=o,s.height=n,a.translate(0,n),a.scale(1,-1);break;case 5:s.height=o,s.width=n,a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:s.width=n,s.height=o,a.translate(n/2,o/2),a.rotate(90*Math.PI/180),a.translate(-o/2,-n/2);break;case 7:s.height=o,s.width=n,a.rotate(.5*Math.PI),a.translate(o,-n),a.scale(-1,1);break;case 8:s.height=o,s.width=n,a.translate(n/2,o/2),a.rotate(-90*Math.PI/180),a.translate(-o/2,-n/2);break;default:s.width=o,s.height=n}a.drawImage(t,0,0,o,n),a.restore(),s.toBlob(function(t){var e=URL.createObjectURL(t);URL.revokeObjectURL(r.imgs),r.imgs=e},"image/"+this.outputType,1)},checkedImg:function(){var t=this;if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var e=new Image;if(e.onload=function(){if(""===t.img)return t.$emit("imgLoad","error"),t.$emit("img-load","error"),!1;var o=e.width,n=e.height;i.getData(e).then(function(r){t.orientation=r.orientation||1;var i=t.maxImgSize;!t.orientation&&o<i&n<i?t.imgs=t.img:(o>i&&(n=n/o*i,o=i),n>i&&(o=o/n*i,n=i),t.checkOrientationImage(e,t.orientation,o,n))})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},"data"!==this.img.substr(0,4)&&(e.crossOrigin=""),this.isIE){var o=new XMLHttpRequest;o.onload=function(){var t=URL.createObjectURL(this.response);e.src=t},o.open("GET",this.img,!0),o.responseType="blob",o.send()}else e.src=this.img},startMove:function(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=(t.clientX?t.clientX:t.touches[0].clientX)-this.x,this.moveY=(t.clientY?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX=t.clientX?t.clientX:t.touches[0].clientX,this.cropY=t.clientY?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale:function(t){var e=this;t.preventDefault();var o=this.scale,n=this.touches[0].clientX,r=this.touches[0].clientY,i=t.touches[0].clientX,s=t.touches[0].clientY,a=this.touches[1].clientX,c=this.touches[1].clientY,h=t.touches[1].clientX,p=t.touches[1].clientY,u=Math.sqrt(Math.pow(n-a,2)+Math.pow(r-c,2)),d=Math.sqrt(Math.pow(i-h,2)+Math.pow(s-p,2))-u,l=1,f=(l=(l=l/this.trueWidth>l/this.trueHeight?l/this.trueHeight:l/this.trueWidth)>.1?.1:l)*d;if(!this.touchNow){if(this.touchNow=!0,d>0?o+=Math.abs(f):d<0&&o>Math.abs(f)&&(o-=Math.abs(f)),this.touches=t.touches,setTimeout(function(){e.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o}},cancelTouchScale:function(t){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(t){var e=this;if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var o,n,r=t.clientX?t.clientX:t.touches[0].clientX,i=t.clientY?t.clientY:t.touches[0].clientY;o=r-this.moveX,n=i-this.moveY,this.$nextTick(function(){if(e.centerBox){var t,r,i,s,a=e.getImgAxis(o,n,e.scale),c=e.getCropAxis(),h=e.trueHeight*e.scale,p=e.trueWidth*e.scale;switch(e.rotate){case 1:case-1:case 3:case-3:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2+(h-p)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2+(p-h)/2,i=t-h+e.cropW,s=r-p+e.cropH;break;default:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2,i=t-p+e.cropW,s=r-h+e.cropH}a.x1>=c.x1&&(o=t),a.y1>=c.y1&&(n=r),a.x2<=c.x2&&(o=i),a.y2<=c.y2&&(n=s)}e.x=o,e.y=n,e.$emit("imgMoving",{moving:!0,axis:e.getImgAxis()}),e.$emit("img-moving",{moving:!0,axis:e.getImgAxis()})})},leaveImg:function(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(t){var e=this;t.preventDefault();var o=this.scale,n=t.deltaY||t.wheelDelta;n=navigator.userAgent.indexOf("Firefox")>0?30*n:n,this.isIE&&(n=-n);var r=this.coe,i=(r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth)*n;i<0?o+=Math.abs(i):o>Math.abs(i)&&(o-=Math.abs(i));var s=i<0?"add":"reduce";if(s!==this.coeStatus&&(this.coeStatus=s,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(function(){e.scaling=!1,e.coe=e.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o},changeScale:function(t){var e=this.scale;t=t||1;var o=20;if((t*=o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop:function(t){var e=this;t.preventDefault();var o=t.clientX?t.clientX:t.touches?t.touches[0].clientX:0,n=t.clientY?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(function(){var t=o-e.cropX,r=n-e.cropY;if(t>0?(e.cropW=t+e.cropChangeX>e.w?e.w-e.cropChangeX:t,e.cropOffsertX=e.cropChangeX):(e.cropW=e.w-e.cropChangeX+Math.abs(t)>e.w?e.cropChangeX:Math.abs(t),e.cropOffsertX=e.cropChangeX+t>0?e.cropChangeX+t:0),e.fixed){var i=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];i+e.cropOffsertY>e.h?(e.cropH=e.h-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0],e.cropOffsertX=t>0?e.cropChangeX:e.cropChangeX-e.cropW):e.cropH=i,e.cropOffsertY=e.cropOffsertY}else r>0?(e.cropH=r+e.cropChangeY>e.h?e.h-e.cropChangeY:r,e.cropOffsertY=e.cropChangeY):(e.cropH=e.h-e.cropChangeY+Math.abs(r)>e.h?e.cropChangeY:Math.abs(r),e.cropOffsertY=e.cropChangeY+r>0?e.cropChangeY+r:0)})},changeCropSize:function(t,e,o,n,r){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=o,this.changeCropTypeX=n,this.changeCropTypeY=r,this.cropX=t.clientX?t.clientX:t.touches[0].clientX,this.cropY=t.clientY?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow:function(t){var e=this;t.preventDefault();var o=t.clientX?t.clientX:t.touches?t.touches[0].clientX:0,n=t.clientY?t.clientY:t.touches?t.touches[0].clientY:0,r=this.w,i=this.h,s=0,a=0;if(this.centerBox){var c=this.getImgAxis(),h=c.x2,p=c.y2;s=c.x1>0?c.x1:0,a=c.y1>0?c.y1:0,r>h&&(r=h),i>p&&(i=p)}this.$nextTick(function(){var t=o-e.cropX,c=n-e.cropY;if(e.canChangeX&&(1===e.changeCropTypeX?e.cropOldW-t>0?(e.cropW=r-e.cropChangeX-t<=r-s?e.cropOldW-t:e.cropOldW+e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX-t<=r-s?e.cropChangeX+t:s):(e.cropW=Math.abs(t)+e.cropChangeX<=r?Math.abs(t)-e.cropOldW:r-e.cropOldW-e.cropChangeX,e.cropOffsertX=e.cropChangeX+e.cropOldW):2===e.changeCropTypeX&&(e.cropOldW+t>0?(e.cropW=e.cropOldW+t+e.cropOffsertX<=r?e.cropOldW+t:r-e.cropOffsertX,e.cropOffsertX=e.cropChangeX):(e.cropW=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?Math.abs(t+e.cropOldW):e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?e.cropChangeX-Math.abs(t+e.cropOldW):s))),e.canChangeY&&(1===e.changeCropTypeY?e.cropOldH-c>0?(e.cropH=i-e.cropChangeY-c<=i-a?e.cropOldH-c:e.cropOldH+e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY-c<=i-a?e.cropChangeY+c:a):(e.cropH=Math.abs(c)+e.cropChangeY<=i?Math.abs(c)-e.cropOldH:i-e.cropOldH-e.cropChangeY,e.cropOffsertY=e.cropChangeY+e.cropOldH):2===e.changeCropTypeY&&(e.cropOldH+c>0?(e.cropH=e.cropOldH+c+e.cropOffsertY<=i?e.cropOldH+c:i-e.cropOffsertY,e.cropOffsertY=e.cropChangeY):(e.cropH=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?Math.abs(c+e.cropOldH):e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?e.cropChangeY-Math.abs(c+e.cropOldH):a))),e.canChangeX&&e.fixed){var h=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];h+e.cropOffsertY>i?(e.cropH=i-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0]):e.cropH=h}if(e.canChangeY&&e.fixed){var p=e.cropH/e.fixedNumber[1]*e.fixedNumber[0];p+e.cropOffsertX>r?(e.cropW=r-e.cropOffsertX,e.cropH=e.cropW/e.fixedNumber[0]*e.fixedNumber[1]):e.cropW=p}})},checkCropLimitSize:function(){this.cropW,this.cropH;var t=this.limitMinSize,e=new Array;return e=Array.isArray[t]?t:[t,t],[parseFloat(e[0]),parseFloat(e[1])]},changeCropEnd:function(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var e,o,n=t.clientX?t.clientX:t.touches[0].clientX,r=t.clientY?t.clientY:t.touches[0].clientY;e=n-this.cropOffsertX,o=r-this.cropOffsertY,this.cropX=e,this.cropY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop:function(t,e){var o=this,n=0,r=0;t&&(t.preventDefault(),n=t.clientX?t.clientX:t.touches[0].clientX,r=t.clientY?t.clientY:t.touches[0].clientY),this.$nextTick(function(){var t,i,s=n-o.cropX,a=r-o.cropY;if(e&&(s=o.cropOffsertX,a=o.cropOffsertY),t=s<=0?0:s+o.cropW>o.w?o.w-o.cropW:s,i=a<=0?0:a+o.cropH>o.h?o.h-o.cropH:a,o.centerBox){var c=o.getImgAxis();t<=c.x1&&(t=c.x1),t+o.cropW>c.x2&&(t=c.x2-o.cropW),i<=c.y1&&(i=c.y1),i+o.cropH>c.y2&&(i=c.y2-o.cropH)}o.cropOffsertX=t,o.cropOffsertY=i,o.$emit("cropMoving",{moving:!0,axis:o.getCropAxis()}),o.$emit("crop-moving",{moving:!0,axis:o.getCropAxis()})})},getImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*o,i=this.trueHeight*o;switch(this.rotate){case 0:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o;break;case 1:case-1:case 3:case-3:n.x1=t+this.trueWidth*(1-o)/2+(r-i)/2,n.x2=n.x1+this.trueHeight*o,n.y1=e+this.trueHeight*(1-o)/2+(i-r)/2,n.y2=n.y1+this.trueWidth*o;break;default:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o}return n},getCropAxis:function(){var t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop:function(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked:function(t){var e=this,o=document.createElement("canvas"),n=new Image,r=this.rotate,i=this.trueWidth,s=this.trueHeight,a=this.cropOffsertX,c=this.cropOffsertY;function h(t,e){o.width=Math.round(t),o.height=Math.round(e)}n.onload=function(){if(0!==e.cropW){var p=o.getContext("2d"),u=1;e.high&!e.full&&(u=window.devicePixelRatio),1!==e.enlarge&!e.full&&(u=Math.abs(Number(e.enlarge)));var d=e.cropW*u,l=e.cropH*u,f=i*e.scale*u,g=s*e.scale*u,v=(e.x-a+e.trueWidth*(1-e.scale)/2)*u,m=(e.y-c+e.trueHeight*(1-e.scale)/2)*u;switch(h(d,l),p.save(),r){case 0:e.full?(h(d/e.scale,l/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g);break;case 1:case-3:e.full?(h(d/e.scale,l/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g/e.scale,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g,f,g));break;case 2:case-2:e.full?(h(d/e.scale,l/e.scale),p.rotate(90*r*Math.PI/180),v/=e.scale,m/=e.scale,p.drawImage(n,-v-f/e.scale,-m-g/e.scale,f/e.scale,g/e.scale)):(p.rotate(90*r*Math.PI/180),p.drawImage(n,-v-f,-m-g,f,g));break;case 3:case-1:e.full?(h(d/e.scale,l/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f/e.scale,v,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f,v,f,g));break;default:e.full?(h(d/e.scale,l/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g)}p.restore()}else{var w=i*e.scale,x=s*e.scale,C=o.getContext("2d");switch(C.save(),r){case 0:h(w,x),C.drawImage(n,0,0,w,x);break;case 1:case-3:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,0,-x,w,x);break;case 2:case-2:h(w,x),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,-x,w,x);break;case 3:case-1:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,0,w,x);break;default:h(w,x),C.drawImage(n,0,0,w,x)}C.restore()}t(o)},"data"!==this.img.substr(0,4)&&(n.crossOrigin="Anonymous"),n.src=this.imgs},getCropData:function(t){var e=this;this.getCropChecked(function(o){t(o.toDataURL("image/"+e.outputType,e.outputSize))})},getCropBlob:function(t){var e=this;this.getCropChecked(function(o){o.toBlob(function(e){return t(e)},"image/"+e.outputType,e.outputSize)})},showPreview:function(){var t=this;if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout(function(){t.isCanShow=!0},16);var e=this.cropW,o=this.cropH,n=this.scale,r={};r.div={width:"".concat(e,"px"),height:"".concat(o,"px")};var i=(this.x-this.cropOffsertX)/n,s=(this.y-this.cropOffsertY)/n;r.w=e,r.h=o,r.url=this.imgs,r.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,"deg)")},r.html='\n      <div class="show-preview" style="width: '.concat(r.w,"px; height: ").concat(r.h,'px,; overflow: hidden">\n        <div style="width: ').concat(e,"px; height: ").concat(o,'px">\n          <img src=').concat(r.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,"px; transform:\n          scale(").concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,'deg)">\n        </div>\n      </div>'),this.$emit("realTime",r),this.$emit("real-time",r)},reload:function(){var t=this,e=new Image;e.onload=function(){t.w=parseFloat(window.getComputedStyle(t.$refs.cropper).width),t.h=parseFloat(window.getComputedStyle(t.$refs.cropper).height),t.trueWidth=e.width,t.trueHeight=e.height,t.original?t.scale=1:t.scale=t.checkedMode(),t.$nextTick(function(){t.x=-(t.trueWidth-t.trueWidth*t.scale)/2+(t.w-t.trueWidth*t.scale)/2,t.y=-(t.trueHeight-t.trueHeight*t.scale)/2+(t.h-t.trueHeight*t.scale)/2,t.loading=!1,t.autoCrop&&t.goAutoCrop(),t.$emit("img-load","success"),t.$emit("imgLoad","success"),setTimeout(function(){t.showPreview()},20)})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},e.src=this.imgs},checkedMode:function(){var t=1,e=(this.trueWidth,this.trueHeight),o=this.mode.split(" ");switch(o[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":(e*=t=this.w/this.trueWidth)<this.h&&(t=(e=this.h)/this.trueHeight);break;default:try{var n=o[0];if(-1!==n.search("px")&&(n=n.replace("px",""),t=parseFloat(n)/this.trueWidth),-1!==n.search("%")&&(n=n.replace("%",""),t=parseFloat(n)/100*this.w/this.trueWidth),2===o.length&&"auto"===n){var r=o[1];-1!==r.search("px")&&(r=r.replace("px",""),t=(e=parseFloat(r))/this.trueHeight),-1!==r.search("%")&&(r=r.replace("%",""),t=(e=parseFloat(r)/100*this.h)/this.trueHeight)}}catch(e){t=1}}return t},goAutoCrop:function(t,e){if(""!==this.imgs&&null!==this.imgs){this.clearCrop(),this.cropping=!0;var o=this.w,n=this.h;if(this.centerBox){var r=this.trueWidth*this.scale,i=this.trueHeight*this.scale;o=r<o?r:o,n=i<n?i:n}var s=t||parseFloat(this.autoCropWidth),a=e||parseFloat(this.autoCropHeight);0!==s&&0!==a||(s=.8*o,a=.8*n),s=s>o?o:s,a=a>n?n:a,this.fixed&&(a=s/this.fixedNumber[0]*this.fixedNumber[1]),a>this.h&&(s=(a=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(s,a)}},changeCrop:function(t,e){var o=this;if(this.centerBox){var n=this.getImgAxis();t>n.x2-n.x1&&(e=(t=n.x2-n.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>n.y2-n.y1&&(t=(e=n.y2-n.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(function(){o.cropOffsertX=(o.w-o.cropW)/2,o.cropOffsertY=(o.h-o.cropH)/2,o.centerBox&&o.moveCrop(null,!0)})},refresh:function(){var t=this;this.img;this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(function(){t.checkedImg()})},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear:function(){this.rotate=0},checkoutImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n=!0;if(this.centerBox){var r=this.getImgAxis(t,e,o),i=this.getCropAxis();r.x1>=i.x1&&(n=!1),r.x2<=i.x2&&(n=!1),r.y1>=i.y1&&(n=!1),r.y2<=i.y2&&(n=!1)}return n}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";var t=this,e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,o,n){for(var r=atob(this.toDataURL(o,n).split(",")[1]),i=r.length,s=new Uint8Array(i),a=0;a<i;a++)s[a]=r.charCodeAt(a);e(new Blob([s],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop)}};o(1);var a=function(t,e,o,n,r,i,s,a){var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=o,h._compiled=!0),n&&(h.functional=!0),i&&(h._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var p=h.render;h.render=function(t,e){return c.call(e),p(t,e)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:h}}(s,n,[],!1,null,"6dae58fd",null);a.options.__file="src/vue-cropper.vue";var c=a.exports;o.d(e,"VueCropper",function(){return c});var h=function(t){t.component("VueCropper",c)};"undefined"!=typeof window&&window.Vue&&h(window.Vue);e.default={version:"0.5.4",install:h,VueCropper:c,vueCropper:c}}])});
window.onload = function(){
	var doc = document,
	docEl = doc.documentElement,
	remStyle = document.createElement("style");
	remStyle.innerHTML = `
	.cropper-content {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}
.cropper-content .cropper {
  width: 1200px;
  height: 400px;
}
.cropper-content .show-preview {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  overflow: hidden;
  border: 1px solid #cccccc;
  background: #cccccc;
  margin-left: 40px;
}
.preview {
  overflow: hidden;
  border: 1px solid #cccccc;
  background: #cccccc;
}
.footer-btn {
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}
.footer-btn .scope-btn {
  width: 250px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.footer-btn .upload-btn {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
}
.footer-btn .btn {
  outline: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 8px 15px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.placeholder-tu {
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
  border: 1px solid;
  text-align: center;

}

.placeholder-tu>i {
  font-size: 20px;
  padding-top: 15px;
}

.placeholder-tu>p {
  line-height: 20px;
  margin: 0;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.avatar {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-right: 8px;
  border: 1px solid;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;

}

.avatar img {
  width: 100%;
}

.avatar .el-icon-deletes {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 26px;
  line-height: 5rem;
  display: none;
}

.avatar:hover .el-icon-deletes {
  display: inline-block;
}

.avatar-uploader .el-loading-spinner {
  top: 0;
  margin-top: 0;
}
.layui-form-item .layui-input-inline{
min-width: 250px;
}
	`
		if (docEl.firstElementChild) {
			docEl.firstElementChild.appendChild(remStyle);
			
		} else {
			var wrap = doc.createElement("div");
			wrap.appendChild(remStyle);
			doc.write(wrap.innerHTML);
			wrap = null;
		}
}

Vue.component('upload-pictures', {
	data(){
		return {
			multiples: {
		        len: 3,
		        tips: '图片支持扩展名：jpg、png',
		        title: '上传图片'
		      },
		      path: this.url,
		      values: this.value,
		      loading: null,
		      cover: '',
		      name: this.names,
		      fileList: [],
		      cropperModel: false,
		      skufilekey: '',
		      fileurl: '',
		      opt: {}
		}
	},
	props: {
		// 是否裁切
		crop: {
			type: Boolean,
	      	default: false
		},
	    only: {
	      type: Boolean,
	      default: true
	    }, // 单文件
	    multiple: {
	      type: Object,
	      default: () => {
	        return {
						tips: null,
						data: {}
	        }
	      }
	    }, // 多文件
	    value: {
	      type: [Array, String],
	      default: () => null
	    }, // 值
	    accept: {
	      type: String,
	      default: () => 'image/jpeg,image/png'
	    }, // 文件格式
	    url: {
	      type: String,
	      default: () => '/image/ajaxImageUpload'
	    }, // 上传路径
	    indent: {
	      type: Number,
	      default: null
	    },
	    names: {
	      type: String,
	      default: () => ''
	    },
	    disabled: {
	    	type: Boolean,
	      	default: false
      },
      myfiles:{
        type: String,
	      default: 'file'
      }
	  },
	  watch: {
		    value() {
		      this.values = this.value
		      this.name = this.names
		    },
		    multiple() {
		      this.multiples.tips = this.multiple.tips || '图片支持扩展名：jpg、png'
		    }
		  },
		  created() {
		    this.cover = 'cover' + new Date().getTime()
		    if (this.multiple.len) {
		      this.multiples.len = this.multiple.len
		    }
		    if (this.multiple.tips) {
		      this.multiples.tips = this.multiple.tips
		    }
		    if (this.multiple.title) {
		      this.multiples.title = this.multiple.title
		    }
		  },
		  methods: {
			    beforeClose(e) {
			        // 关闭
			        this.cropperModel = false
			      },
			      uploadproductimg(data) {
              this.cropperModel = false
              let file = new window.File([data], this.fileList[0].raw.name, { type: this.fileList[0].raw.type })
              file.uid = this.fileList[0].uid
              this.fileList[0].raw = file
              this.fileList[0].size = file.size
              this.$refs.upload.submit()
			      },
			      consoleFL(url) {
			        this.skufilekey = ''
			        this.fileurl = url
			        if (!this.crop){
			        	const exp = /\d+\*\d+/.exec(this.multiples.tips)[0].split('*')
				        const w = exp[0]
				        const h = exp[1]
				        this.opt = {
				          w,
				          h
				        }
			        }
			        this.cropperModel = true
			      },
			  changes(obj, fileList) {
			      const _this = this
			      if (obj.status === 'ready') {
			        if (obj.size > 1024 * 1024 * 2) {
			          _this.fileList = []
			          _this.$message({
			            type: 'error',
			            message: '图片大于2M，请重新选择！'
			          })
			        } else {
			          if (_this.accept === 'image/jpeg,image/png') {
			            const isJPG = obj.raw.type === 'image/jpeg' || 'image/png'
			            if (isJPG) {
			              if (/\d+\*\d+/.exec(this.multiples.tips) || _this.crop) {
			                var reader = new FileReader()
			                reader.readAsDataURL(obj.raw)
			                reader.onload = function(e) {
			                // 加载图片获取图片真实宽度和高度
			                  var image = new Image()
			                  image.src = e.target.result
			                  image.onload = function() {
			                    var width = image.width
			                    var height = image.height
			                    if (_this.multiples.tips.indexOf(`${width}*${height}`) === -1) {
			                        _this.$confirm(`当前上传图片尺寸为${width}*${height},是否裁剪图片?`, '提示', {
			                          confirmButtonText: '确定',
			                          cancelButtonText: '取消',
			                          type: 'warning'
			                        }).then(() => {
			                          _this.fileList = fileList
			                          _this.consoleFL(e.target.result)
			                        }).catch(res => {
			                        	if (_this.crop){
			                        		_this.$refs.upload.submit()
			                        	} else {
			                        		_this.fileList = []
			                        		_this.$message({
					                            message: '取消上传',
					                            type: 'warning'
					                          })
			                        	}
			                        })
			                    } else {
			                      _this.$refs.upload.submit()
			                    }
			                  }
			                }
			              } else {
			                _this.$refs.upload.submit()
			              }
			            } else {
			              _this.fileList = []
			              _this.$message.error('上传图片只能是 JPG/PNG 格式!')
			            }
			          } else {
			            _this.$refs.upload.submit()
			          }
			        }
			      }
			    },
		    beforeAvatarUpload(file) {
		      // 上传之前
		      this.name = file.name ? file.name.substring(file.name.length - 10, file.name.length) : ''
		      if (this.accept === 'image/jpeg,image/png') {
		        const isJPG = file.type === 'image/jpeg' || 'image/png'
		        if (!isJPG) {
		          this.$message.error('上传图片只能是 JPG/PNG 格式!')
		          return isJPG
		        }
		        this.loading = this.$loading({
		          lock: true,
		          text: '拼命上传中...',
		          spinner: 'el-icon-loading',
		          background: 'rgba(0, 0, 0, 0.7)',
		          target: '.' + this.cover
		        })
		        return isJPG
		      } else {
		        this.loading = this.$loading({
		          lock: true,
		          text: '拼命上传中...',
		          spinner: 'el-icon-loading',
		          background: 'rgba(0, 0, 0, 0.7)',
		          target: '.' + this.cover
		        })
		        return true
		      }
		    },
		    uploadSuccess(res) {
		      // 上传成功
		      this.fileList = []
		      this.loading.close()
		      if (res.status != 200) {
		        this.$message.error(res.msg)
		        this.name = ''
		        return
		      }
		      this.$message({
		    	  showClose: true,
		        message: '上传成功',
		        type: 'success'
		      })
		      if (this.only) {
		        this.values = res.src
		        this.$emit('change', this.values, this.indent, this.name)
		      } else {
		        if (this.values.length >= this.multiples.len) {
		          this.values[this.values.length - 1] = res.src
		        } else {
		          this.values.push(res.src)
		        }
		        this.$emit('change', this.values, this.indent, this.name)
		      }
		    },
		    uploadError() {
		      this.fileList = []
		      this.loading.close()
		      this.$message.error('上传失败')
		    },
		    onProgress(event) {
		      // console.log(event)
		      // 上传时
		      document.querySelector('.' + this.cover).getElementsByClassName('el-loading-text')[0].innerText = '拼命上传中...' + (Math.floor((event.loaded / event.total) * 100)) + '%'
		    },
		    deleteImg(i) {
		      // 删除
		      this.values.splice(i, 1)
		      this.$emit('change', this.values, this.indent, this.name)
		    }
		  },
	template: `<div><el-upload
	      ref="upload"
	          :with-credentials="true"
	          class="avatar-uploader"
	          :class="cover"
	          :action="path"
	          :show-file-list="false"
	          :on-success="uploadSuccess"
	          :before-upload="beforeAvatarUpload"
	          :accept="accept"
	          :on-error="uploadError"
	          :on-progress="onProgress"
	          :file-list="fileList"
	          :name="myfiles"
	          :disabled="disabled"
	          :auto-upload="false"
						:on-change="changes"
						:data="multiples.data"
	        >
	          <template v-if="accept === 'image/jpeg,image/png'">
	            <div v-if="only" style="display:flex;align-items: center;">
	              <div v-if="values" class="avatar">
	                <img :src="values">
	              </div>
	              <div v-else class="placeholder-tu">
	                <i class="el-icon-plus" />
	                <p>{{ multiples.title }}</p>
	              </div>
	              <span v-if="!disabled" style="margin-left:8px;white-space: nowrap;">{{ multiples.tips }}</span>
	            </div>
	            <div v-else style="display:flex;align-items: center;">
	              <div v-for="(item,index) of values" :key="index" class="avatar">
	                <img :src="item">
	                <div class="el-icon-deletes" @click.stop="deleteImg(index)">
	                  <i class="el-icon-delete" />
	                </div>
	              </div>

	              <template v-if="values.length<multiples.len">
	                <div class="placeholder-tu">
	                  <i class="el-icon-plus" />
	                  <p>{{ multiples.title }}</p>
	                </div>
	                <span v-if="!values.length&&!disabled" style="margin-left:8px;white-space: nowrap;">{{ multiples.tips }}</span>
	              </template>
	            </div>
	          </template>
	          <template v-else-if="accept === 'video/mp4'">
	            <div v-if="only" style="display:flex;align-items: center;">
	              <div v-if="values" class="avatar" style="border-radius: 0;">
	                <video :src="values" width="100%" height="100%" />
	              </div>
	              <div v-else class="placeholder-tu">
	                <i class="el-icon-plus" />
	                <p>{{ multiples.title }}</p>
	              </div>
	              <span style="margin-left:8px;white-space: nowrap;">{{ multiples.tips }}</span>
	            </div>
	            <div v-else style="display:flex;align-items: center;">
	              <div v-for="(item,index) of values" :key="index" class="avatar" style="border-radius: 0;">
	                <video :src="item" width="100%" height="100%" />
	                <div class="el-icon-deletes" @click.stop="deleteImg(index)">
	                  <i class="el-icon-delete" />
	                </div>
	              </div>

	              <template v-if="values.length<multiples.len">
	                <div class="placeholder-tu">
	                  <i class="el-icon-plus" />
	                  <p>{{ multiples.title }}</p>
	                </div>
	                <span v-if="!values.length&&v-if="!disabled"" style="margin-left:8px;white-space: nowrap;">{{ multiples.tips }}</span>
	              </template>
	            </div>
	          </template>
	          <template v-else>
	            <div style="display:flex;align-items: center;">
	              <div v-if="values" class="placeholder-tu">
	                <i class="el-icon-plus" />
	                <p>{{ name?name:'已有文件' }}</p>
	              </div>
	              <div v-else class="placeholder-tu">
	                <i class="el-icon-plus" />
	                <p>{{ multiples.title }}</p>
	              </div>
	              <span style="margin-left:8px;white-space: nowrap;" v-if="!disabled">{{ multiples.tips }}</span>
	            </div>
	          </template>
	        </el-upload>
	        <template v-if="beforeClose">
      <el-dialog :visible.sync="cropperModel" width="1100px" :before-close="beforeClose" append-to-body :close-on-click-modal="false">
        <cropper ref="vueCropper" :opt="opt" :img-file="fileurl" :skuname="skufilekey" @upload="uploadproductimg" />
      </el-dialog>
    </template>
    </div>
	        `
})
// 图片裁切
Vue.component('cropper', {
	props: {
	    imgFile: {
	      type: String,
	      default: null
	    },
	    opt: {
	      type: Object,
	      default: () => {
	        return {
	          w: null,
	          h: null
	        }
	      }
	    }
	  },
	  data() {
	    return {
	      previews: {}, // 预览数据
	      option: {
	        img: '', // 裁剪图片的地址  (默认：空)
	        outputSize: 1, // 裁剪生成图片的质量  (默认:1)
	        full: false, // 是否输出原图比例的截图 选true生成的图片会非常大  (默认:false)
	        outputType: 'png', // 裁剪生成图片的格式  (默认:jpg)
	        canMove: true, // 上传图片是否可以移动  (默认:true)
	        original: false, // 上传图片按照原始比例渲染  (默认:false)
	        canMoveBox: true, // 截图框能否拖动  (默认:true)
	        autoCrop: true, // 是否默认生成截图框  (默认:false)
	        autoCropWidth: 480, // 默认生成截图框宽度  (默认:80%)
	        autoCropHeight: 320, // 默认生成截图框高度  (默认:80%)
	        fixedBox: true, // 固定截图框大小 不允许改变  (默认:false)
	        fixed: false, // 是否开启截图框宽高固定比例  (默认:true)
	        fixedNumber: [1, 1], // 截图框比例  (默认:[1:1])
	        enlarge: 1
	      },
	      isDisabled: false,
	      downImg: '#'
	    }
	  },
	  created() {
		  if (Number(this.opt.w)){
			  this.option.autoCropWidth = Number(this.opt.w)
			    this.option.autoCropHeight = Number(this.opt.h)
		  } else {
			  this.option.fixedBox = false
		  }
	    
	  },
	  methods: {
	    changeScale(num) {
	      // 图片缩放
	      num = num || 1
	      this.$refs.cropper.changeScale(num)
	    },
	    rotateLeft() {
	      // 向左旋转
	      this.$refs.cropper.rotateLeft()
	    },
	    rotateRight() {
	      // 向右旋转
	      this.$refs.cropper.rotateRight()
	    },
	    Update() {
	      // this.file = this.imgFile
	      this.option.img = this.imgFile.url
	    },
	    realTime(data) {
	      // 实时预览
	      this.previews = data
	    },
	    uploadImg(type) {
	      // 将剪裁好的图片回传给父组件
	      event.preventDefault()
	      // this.isDisabled = true
	      const that = this
	      let loading = this.$loading({
	          lock: true,
	          text: '拼命上传中...',
	          spinner: 'el-icon-loading',
	          background: 'rgba(0, 0, 0, 0.7)'
	        })
	      if (type === 'blob') {
	        this.$refs.cropper.getCropBlob(data => {
	          that.$emit('upload', data)
	          loading.close()
	        })
	      } else {
	        this.$refs.cropper.getCropData(data => {
	          that.$emit('upload', data)
	          loading.close()
	        })
	      }
	    }
	  },
	  template: `
	    <div>
    <div class="cropper-content">
      <!-- 剪裁框 -->
      <div class="cropper">
        <vueCropper
          ref="cropper"
          :img="imgFile"
          :output-size="option.size"
          :output-type="option.outputType"
          :info="true"
          :full="option.full"
          :can-move="option.canMove"
          :can-move-box="option.canMoveBox"
          :original="option.original"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :fixed-box="option.fixedBox"
          :fixed="option.fixed"
          :fixed-number="option.fixedNumber"
          @realTime="realTime"
        />
        <!-- <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType"></vueCropper> -->
      </div>
      <!-- 预览框 -->
      <!-- <div class="show-preview" :style="{'width': '1000px', 'height': '400px', 'overflow': 'hidden', 'margin': '0 25px', 'display':'flex', 'align-items' : 'center'}">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div> -->
    </div>
    <div class="footer-btn">
      <!-- 缩放旋转按钮 -->
      <div class="scope-btn">
        <el-button type="primary" icon="el-icon-zoom-in" @click="changeScale(1)" />
        <el-button type="primary" icon="el-icon-zoom-out" @click="changeScale(-1)" />
        <el-button type="primary" @click="rotateLeft">逆时针旋转</el-button>
        <el-button type="primary" @click="rotateRight">顺时针旋转</el-button>
      </div>
      <!-- 确认上传按钮 -->
      <div class="upload-btn">
        <!-- <el-button type="primary" @click="uploadImg()">上传</el-button> -->
        <el-button type="primary" :disabled="isDisabled" @click="uploadImg('blob')">上传</el-button>
      </div>
    </div>
  </div>
	  `
})