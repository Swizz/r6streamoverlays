// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({12:[function(require,module,exports) {
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n,r){"object"==("undefined"==typeof exports?"undefined":e(exports))&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd||r(n.hyperapp={})}(void 0,function(e){e.h=function(e,n){for(var r,o=[],t=[],i=arguments.length;i-- >2;)o.push(arguments[i]);for(;o.length;)if(Array.isArray(r=o.pop()))for(i=r.length;i--;)o.push(r[i]);else null==r||!0===r||!1===r||t.push("number"==typeof r?r+"":r);return"string"==typeof e?{type:e,props:n||{},children:t}:e(n||{},t)},e.app=function(e,n,r,o){function t(e,n){return e&&{type:e.tagName.toLowerCase(),props:{},children:n.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:t(e,n)})}}function i(t){for(m=!m,t=r(e,n),o&&!m&&(g=v(o,g,b,b=t));t=N.pop();)t()}function f(){r&&!m&&(m=!m,setTimeout(i))}function u(e,n){var r={};for(var o in e)r[o]=e[o];for(var o in n)r[o]=n[o];return r}function p(e,n,r){var o={};return e.length?(o[e[0]]=1<e.length?p(e.slice(1),n,r[e[0]]):n,u(r,o)):n}function l(e,n){for(var r=0;r<e.length;r++)n=n[e[r]];return n}function c(n,r,o){for(var t in o)"function"==typeof o[t]?function(t,i){o[t]=function(t){return r=l(n,e),"function"==typeof(t=i(t))&&(t=t(r,o)),t&&t!==r&&!t.then&&f(e=p(n,u(r,t),e)),t}}(t,o[t]):c(n.concat(t),r[t]=r[t]||{},o[t]=u(o[t]))}function s(e){return e&&e.props?e.props.key:null}function a(e,n,r,o){if("key"===n);else if("style"===n)for(var t in u(o,r=r||{}))e.style[t]=null==r[t]?"":r[t];else{try{e[n]=null==r?"":r}catch(e){}"function"!=typeof r&&(null==r||!1===r?e.removeAttribute(n):e.setAttribute(n,r))}}function d(e,n){if("string"==typeof e)var r=document.createTextNode(e);else{r=(n=n||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),e.props.oncreate&&N.push(function(){e.props.oncreate(r)});for(var o=0;o<e.children.length;o++)r.appendChild(d(e.children[o],n));for(var o in e.props)a(r,o,e.props[o])}return r}function y(e,n,r){if(r=n.props){for(var o=0;o<n.children.length;o++)y(e.childNodes[o],n.children[o]);r.onremove&&r.onremove(e)}return e}function h(e,n,r,o){function t(){e.removeChild(y(n,r))}r.props&&r.props.onbeforeremove&&"function"==typeof(o=r.props.onbeforeremove(n))?o(t):t()}function v(e,n,r,o,t,i){if(r===o);else if(null==r)n=e.insertBefore(d(o,t),n);else if(null!=o.type&&o.type===r.type){!function(e,n,r){for(var o in u(n,r)){var t="value"===o||"checked"===o?e[o]:n[o];r[o]!==t&&a(e,o,r[o],t)}r.onupdate&&N.push(function(){r.onupdate(e,n)})}(n,r.props,o.props),t=t||"svg"===o.type;for(var f=o.children.length,p=r.children.length,l={},c=[],y={},m=0;m<p;m++){var g=c[m]=n.childNodes[m];null!=(A=s(S=r.children[m]))&&(l[A]=[g,S])}m=0;for(var b=0;b<f;){g=c[m];var S=r.children[m],w=o.children[b];if(y[A=s(S)])m++;else{var k=s(w),x=l[k]||[];null==k?(null==A&&(v(n,g,S,w,t),b++),m++):(A===k?(v(n,x[0],x[1],w,t),m++):x[0]?(n.insertBefore(x[0],g),v(n,x[0],x[1],w,t)):v(n,g,null,w,t),b++,y[k]=w)}}for(;m<p;){var A;null==(A=s(S=r.children[m]))&&h(n,c[m],S),m++}for(var m in l){var B=(x=l[m])[1];y[B.props.key]||h(n,x[0],B)}}else n&&o!==n.nodeValue&&("string"==typeof o&&"string"==typeof r?n.nodeValue=o:(n=e.insertBefore(d(o,t),i=n),h(e,i,r)));return n}var m,g=o&&o.children[0],b=t(g,[].map),N=[];return f(c([],e=u(e),n=u(n))),n}});
},{}],13:[function(require,module,exports) {
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?n(exports,require("hyperapp")):"function"==typeof define&&define.amd||n(e.router={},e.hyperapp)}(void 0,function(t,e){function n(t,e,n,o){return{isExact:t,path:e,url:n,params:o}}function o(t){for(var e=t.length;"/"===t[--e];);return t.slice(0,e+1)}var i={state:{pathname:window.location.pathname,previous:window.location.pathname},actions:{go:function(t){history.pushState(null,"",t)},set:function(t){return t}},subscribe:function(t){function e(e){t.set({pathname:window.location.pathname,previous:e.detail?window.location.previous=e.detail:window.location.previous})}var n=["pushState","replaceState"].reduce(function(t,e){var n=history[e];return history[e]=function(t,e,o){n.call(this,t,e,o),dispatchEvent(new CustomEvent("pushstate",{detail:t}))},function(){history[e]=n,t&&t()}},null);return addEventListener("pushstate",e),addEventListener("popstate",e),function(){removeEventListener("pushstate",e),removeEventListener("popstate",e),n()}}};t.Link=function(t,n){var o=t.to,i=t.location||window.location;return t.href=o,t.onclick=function(e){0!==e.button||e.altKey||e.metaKey||e.ctrlKey||e.shiftKey||"_blank"===t.target||e.currentTarget.origin!==i.origin||(e.preventDefault(),o!==i.pathname&&history.pushState(i.pathname,"",o))},e.h("a",t,n)},t.Route=function(t){var e=t.location||window.location,i=function(t,e,i){if(t===e||!t)return n(t===e,t,e);var r=i&&i.exact,a=o(t).split("/"),u=o(e).split("/");if(!(a.length>u.length||r&&a.length<u.length)){var c=0,p={},s=a.length;for(e="";c<s;c++){if(":"===a[c][0])try{p[a[c].slice(1)]=u[c]=decodeURI(u[c])}catch(t){continue}else if(a[c]!==u[c])return;e+=u[c]+"/"}return n(!1,t,e.slice(0,-1),p)}}(t.path,e.pathname,{exact:!t.parent});return i&&t.render({match:i,location:e})},t.Switch=function(t,e){return e[0]},t.Redirect=function(t){var e=t.location||window.location;history.replaceState(t.from||e.pathname,"",t.to)},t.location=i});
},{"hyperapp":12}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var r=[],e=!0,a=!1,o=void 0;try{for(var i,u=n[Symbol.iterator]();!(e=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){a=!0,o=n}finally{try{!e&&u.return&&u.return()}finally{if(a)throw o}}return r}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=require("@hyperapp/router");exports.default={location:t.location.actions,init:function(){if(""===location.hash){var t=[["sha77e.-penta","emea"],["canadian.eg","ncsa"],["sc.k","emea"],["panix.vitality","emea"],["pengu-penta","emea"],["enemy.vitality","emea"]],r=n(t[Math.floor(Math.random()*t.length)],2),e=r[0],a=r[1];return location.hash="#uplay/"+a+"/"+e}var o=location.hash.slice(1).split("/"),i=n(o,3),u=i[0],c=i[1],l=i[2];return function(n,t){t.resetRanking(),t.populate({plateform:u,region:c,user:l}),t.ranking.init({plateform:u,region:c,user:l})}},populate:function(n){return n},refresh:function(){return function(n,t){t.ranking.init(n)}},changeUser:function(n){return function(t){return location.hash="#"+t.plateform+"/"+t.region+"/"+n}},changeRegion:function(n){return function(t){return location.hash="#"+t.plateform+"/"+n+"/"+t.user}},changePlateform:function(n){return function(t){return location.hash="#"+n+"/"+t.region+"/"+t.user}},resetRanking:function(){return{ranking:{}}},ranking:{init:function(n){var t=n.plateform,r=n.user;return!(!t||!r)&&function(n,e){return fetch("https://api.r6stats.com/api/v1/players/"+r+"/seasons?platform="+t).then(function(n){return n.json()}).then(e.populate)}},populate:function(n){return n}}};
},{"@hyperapp/router":13}],4:[function(require,module,exports) {
module.exports="26c53a788596b2d09b7269c08ac51809.svg";
},{}],11:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return(0,r.h)("g",e,(0,r.h)("use",{href:f.default+"#"+e.rank+"-usage",transform:"translate(50) scale(0.8)"}),0==e.rank&&void 0!==e["nb-matches"]?(0,r.h)("text",{x:"50%",y:"90%","text-anchor":"middle","font-family":"Noto Sans","font-size":"30",fill:"#ffd700"},e["nb-matches"]||0," / 10"):(0,r.h)("text",{x:"50%",y:"90%","text-anchor":"middle","font-family":"Noto Sans","font-size":"35",fill:"#ffffff"},Math.round(e.rating||0)||e["rating-default"]))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var r=require("hyperapp"),a=require("../../statics/sprite.svg"),f=e(a);
},{"../../statics/sprite.svg":4,"hyperapp":12}],8:[function(require,module,exports) {
"use strict";function n(n){return n&&n.__esModule?n:{default:n}}function e(n){var e=n.ranking&&n.ranking.seasons&&n.ranking.seasons[Object.keys(n.ranking.seasons).slice(-1)[0]],a=e&&e[n.region]?e[n.region]:{},i=a.ranking?a.ranking:{};return(0,r.h)("widget",null,(0,r.h)("svg",{width:"100vw",height:"50vw"},(0,r.h)(s.default,{rank:i.rank||0,"nb-matches":a.wins+a.losses+a.abandons||0,rating:i.rank>0&&i.rating,key:"rating"})))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;var r=require("hyperapp"),a=require("../components/ranking-badge"),s=n(a);
},{"../components/ranking-badge":11,"hyperapp":12}],9:[function(require,module,exports) {
"use strict";function n(n){return n&&n.__esModule?n:{default:n}}function a(n){var a=n.ranking&&n.ranking.seasons&&n.ranking.seasons[Object.keys(n.ranking.seasons).slice(-1)[0]],r=a&&a[n.region]?a[n.region].ranking:{};return(0,e.h)("widget",null,(0,e.h)("svg",{width:"100vw",height:"50vw"},(0,e.h)(t.default,{rank:r.rank-1,rating:r.prev_rating,transform:"translate(50) scale(0.8) translate(-220)",opacity:"0.7",key:"prev_rating"}),(0,e.h)(t.default,{rank:r.rank||0,rating:r.rating,"rating-default":"0",key:"rating"}),(0,e.h)(t.default,{rank:(r.rank||-2)+1,rating:r.next_rating,transform:"translate(50) scale(0.8) translate(220)",opacity:"0.7",key:"next_rating"})))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=require("hyperapp"),r=require("../components/ranking-badge"),t=n(r);
},{"../components/ranking-badge":11,"hyperapp":12}],10:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e){var n=e.ranking&&e.ranking.seasons&&e.ranking.seasons[Object.keys(e.ranking.seasons).slice(-1)[0]],i=n&&n[e.region]?n[e.region]:{};return(0,t.h)("widget",null,(0,t.h)("svg",{width:"100vw",height:"50vw"},(0,t.h)(r.default,{rank:i.ranking&&i.ranking.rank||0,key:"rating",opacity:"0.5"}),(0,t.h)("text",{x:"50%",y:"40%","text-anchor":"middle","font-family":"Open Sans","font-size":"40",fill:"#ffd700"},"W: ",i.wins),(0,t.h)("text",{x:"50%",y:"60%","text-anchor":"middle","font-family":"Open Sans","font-size":"40",fill:"#ffd700"},"L: ",i.losses)))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=require("hyperapp"),i=require("../components/ranking-badge"),r=e(i);
},{"../components/ranking-badge":11,"hyperapp":12}],7:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,n){function r(e){return function(n){document.getElementById(e).select(),document.execCommand("Copy")}}return(0,t.h)("index",null,(0,t.h)("header",null,(0,t.h)("div",{class:"title"},(0,t.h)("h1",null,"Streamers ",(0,t.h)("i",null,"♥️")," R6"),(0,t.h)("h2",null,"We ",(0,t.h)("i",null,"♥️")," Streamers")),(0,t.h)("div",{class:"banner"},(0,t.h)(l.default,e)),(0,t.h)("div",{class:"input"},(0,t.h)("input",{type:"text",value:e.user,onchange:function(e){return n.changeUser(e.target.value)},onkeypress:function(e){return 13!==e.keyCode||(n.changeUser(e.target.value),e.target.blur())}}),(0,t.h)("select",{onchange:function(e){return n.changePlateform(e.target.value)}},(0,t.h)("option",{selected:"uplay"===e.plateform},"uplay"),(0,t.h)("option",{selected:"ps4"===e.plateform},"ps4"),(0,t.h)("option",{selected:"xbox"===e.plateform},"xbox")),(0,t.h)("select",{onchange:function(e){return n.changeRegion(e.target.value)}},(0,t.h)("option",{selected:"emea"===e.region},"emea"),(0,t.h)("option",{selected:"ncsa"===e.region},"ncsa"),(0,t.h)("option",{selected:"apac"===e.region},"apac")))),(0,t.h)("main",null,(0,t.h)("div",{class:"features"},(0,t.h)("section",null,(0,t.h)("h3",null,"# Ranks banner"),(0,t.h)("p",null,"Shows to all your viewers, your hilighted current Rainbow Six Siege rank and the MMR scoring, ",(0,t.h)("br",null),"with the neirboroud ranks to know the previous rank and the upcoming one with MMR scoring too."),(0,t.h)(l.default,e),(0,t.h)("input",{id:"ranks-banner-url",type:"text",value:location.origin+"/ranks-banner#"+e.plateform+"/"+e.region+"/"+e.user}),(0,t.h)("button",{onclick:r("ranks-banner-url")},"copy")),(0,t.h)("section",null,(0,t.h)("h3",null,"# Rank"),(0,t.h)("p",null,"Shows to all your viewers, your hilighted current Rainbow Six Siege rank and the MMR scoring."),(0,t.h)(o.default,e),(0,t.h)("input",{id:"rank-url",type:"text",value:location.origin+"/rank#"+e.plateform+"/"+e.region+"/"+e.user}),(0,t.h)("button",{onclick:r("rank-url")},"copy")),(0,t.h)("section",null,(0,t.h)("h3",null,"# Ranks scoring"),(0,t.h)("p",null,"Shows to all your viewers, your current Rainbow Six Siege rank with statistics about your wins and losses."),(0,t.h)(u.default,e),(0,t.h)("input",{id:"rank-scoring-url",type:"text",value:location.origin+"/rank-scoring#"+e.plateform+"/"+e.region+"/"+e.user}),(0,t.h)("button",{onclick:r("rank-scoring-url")},"copy")))),(0,t.h)("footer",null,"🛠️ with ❤️ by ",(0,t.h)("a",{href:"https://github.com/Swizz"},"Swizz"),(0,t.h)("p",null,"All data is gathered from ",(0,t.h)("a",{href:"https://game-rainbow6.ubi.com/"},"Ubisoft"),", ",(0,t.h)("br",null),"thanks to the ",(0,t.h)("a",{href:"https://dev.r6stats.com"},"r6stats")," API ",(0,t.h)("br",null)),"This website do not hold any data"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=require("hyperapp"),r=require("./widgets/rank"),o=e(r),a=require("./widgets/ranks-banner"),l=e(a),i=require("./widgets/rank-scoring"),u=e(i);
},{"./widgets/rank":8,"./widgets/ranks-banner":9,"./widgets/rank-scoring":10,"hyperapp":12}],2:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=require("hyperapp"),r=require("@hyperapp/router"),n=require("./actions"),u=e(n),a=require("./view"),i=e(a),o=require("./widgets/rank"),s=e(o),c=require("./widgets/ranks-banner"),d=e(c),l=require("./widgets/rank-scoring"),f=e(l),h=(0,t.app)({location:r.location.state},u.default,function(e,t){return jsx(r.Switch,null,jsx(r.Route,{path:"/",render:function(){return(0,i.default)(e,t)}}),jsx(r.Route,{path:"/rank",render:function(){return(0,s.default)(e,t)}}),jsx(r.Route,{path:"/ranks-banner",render:function(){return(0,d.default)(e,t)}}),jsx(r.Route,{path:"/rank-scoring",render:function(){return(0,f.default)(e,t)}}))},document.body);r.location.subscribe(h.location),h.init(),addEventListener("hashchange",h.init),setInterval(function(){"/"!==location.pathname&&h.refresh()},15e3),function(e){setInterval(function(){document.hidden?document.title="Streamers ❤️ R6":(document.title=e?"Streamers ❤️ R6":"We ❤️ Streamers",e=!e)},1500)}(!1);
},{"./actions":6,"./view":7,"./widgets/rank":8,"./widgets/ranks-banner":9,"./widgets/rank-scoring":10,"hyperapp":12,"@hyperapp/router":13}]},{},[2])