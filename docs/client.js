!function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){"undefined"!=typeof self&&self.Prism&&self.document&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",(function(e){e.selector+=", [class*='lang-'] script[type='text/plain'], [class*='language-'] script[type='text/plain'], script[type='text/plain'][class*='lang-'], script[type='text/plain'][class*='language-']"})),Prism.hooks.add("before-sanity-check",(function(e){if((e.element.matches||e.element.msMatchesSelector).call(e.element,"script[type='text/plain']")){var t=document.createElement("code");return(n=document.createElement("pre")).className=t.className=e.element.className,e.element.dataset&&Object.keys(e.element.dataset).forEach((function(t){Object.prototype.hasOwnProperty.call(e.element.dataset,t)&&(n.dataset[t]=e.element.dataset[t])})),e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"<\/script>"),t.textContent=e.code,n.appendChild(t),e.element.parentNode.replaceChild(n,e.element),void(e.element=t)}var n=e.element.parentNode;!e.code&&n&&"pre"==n.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)})))},function(e,t,n){"use strict";n.r(t);n(0);const r=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/,i=/^\/Date\((d|-|.*)\)[\/|\\]$/;function dateParser(e,t){if("string"==typeof t){let e=r.exec(t);if(e)return new Date(t);if(e=i.exec(t),e){const t=e[1].split(/[-+,.]/);return new Date(t[0]?+t[0]:0-+t[1])}}return t}function deserialize(e){return JSON.parse(e,dateParser)}function element_element(e,t={},...n){return null===t&&(t={}),n=function flattenChildren(e){return e=[].concat.apply([],e).map(e=>null!=e&&("Fragment"===e.type?flattenChildren(e.children):e)),[].concat.apply([],e)}(n),"textarea"===e&&(n=[n.join("")]),"element"===e&&(e=t.tag||"Fragment",delete t.tag),t.children=n,"function"==typeof e&&void 0!==e.render?{type:e,attributes:t,children:null}:{type:e,attributes:t,children:n}}function extractParamValue(e){return"true"===e||"false"!==e&&(e?decodeURIComponent(e.replace(/\+/g," ")):"")}function serializeParam(e){return e&&void 0!==e.toJSON?e.toJSON():e}function serializeSearch(e){return Object.keys(e).map(t=>!1===e[t]||e[t]?`${t}=${e[t]}`:"").filter(e=>!!e).join("&")}const a={};var l=a;const s={},o=new Proxy(s,{set(e,t,n){const r=serializeParam(n);e[t]=r;const i=serializeSearch(e);return _.url=_.path+(i?"?":"")+i,!0},get:(e,t)=>e[t]||l[t]||""});function updateParams(e){!function resetSegments(){for(const e in a)delete a[e]}();const t=function getQueryStringParams(e){const[t,n]=e.split("?");return n?n.split("&").reduce((e,t)=>{let[n,r]=t.split("=");return e[n]=extractParamValue(r),e},{}):{}}(e);for(const e of Object.keys({...t,...s}))s[e]=t[e];return o}var c=o;const u={...window.environment,client:!0,server:!1};delete window.environment,Object.freeze(u);var d=u;function extractLocation(e){let[t,n]=e.split("?");"/"!==t&&t.endsWith("/")&&(t=t.substring(0,t.length-1));let r=t;return n&&(r+="?"+n),{path:t,search:n,url:r}}function isFalse(e){return null==e||!1===e||!1===e.type}function isClass(e){return"function"==typeof e.type&&"function"==typeof e.type.prototype.render}function isFunction(e){return"function"==typeof e.type&&void 0===e.type.prototype}function isStatic(e){return"function"==typeof e.type&&("function"==typeof e.type.render||e.type.name&&!e.type.prototype)}function isText(e){return"Fragment"!==e&&void 0===e.children}const p={},m={set(e,t,n){return p[t]=n,b.update(),Reflect.set(...arguments)},get:(e,t)=>void 0===e[t]?p[t]:e[t]};function generateContext(e){return new Proxy(e,m)}var f=p;function generateKey(e){return"_."+e.join(".")}function routableNode(e,t){if(function isRoutable(e){return e&&void 0!==e.attributes&&void 0!==e.attributes.route}(e)){const n=t.slice(0,-1).join(".");if(void 0!==b.routes[n])e.type=!1,e.children=[];else{const t=function routeMatches(e,t){let{path:n}=extractLocation(e);const r=n.split("/"),i=t.split("/"),a={},l=Math.max(r.length,i.length);let s=!1;for(let e=0;e<l;e++)if(!s)if("*"===i[e])s=!0;else if(i[e]&&i[e].startsWith(":")){a[i[e].replace(":","")]=extractParamValue(r[e])}else if(i[e]!==r[e])return!1;return a}(_.url,e.attributes.route);if(!1!==t){b.routes[n]=!0;for(const e in t)l[e]=t[e];e._params=t}else e.type=!1,e.children=[]}delete e.attributes.route}}function bindableNode(e){if(function isBindable(e){return void 0!==e&&void 0!==e.attributes&&void 0!==e.attributes.bind&&void 0!==e.attributes.source}(e)){const t=e.attributes.source;"textarea"===e.type?e.children=[t[e.attributes.bind]]:"input"===e.type&&"checkbox"===e.attributes.type?e.attributes.checked=t[e.attributes.bind]:e.attributes.value=t[e.attributes.bind],e.attributes.name=e.attributes.bind;let n="oninput",r="value";"checkbox"===e.attributes.type||"radio"===e.attributes.type?(n="onclick",r="checked"):"input"!==e.type&&"textarea"!==e.type&&(n="onchange");const i=e.attributes[n];e.attributes[n]=n=>{const{event:a,value:l}=n;"checked"==r?t[e.attributes.bind]=a.target[r]:!0===t[e.attributes.bind]||!1===t[e.attributes.bind]?t[e.attributes.bind]=a?"true"==a.target[r]:l:"number"==typeof t[e.attributes.bind]?t[e.attributes.bind]=parseFloat(a?a.target[r]:l)||0:t[e.attributes.bind]=a?a.target[r]:l,b.update(),void 0!==i&&setTimeout(()=>{i({...e.attributes,...n})},0)}}}function anchorableNode(e){if(function isAnchorable(e){return"a"===e.type&&e.attributes.href&&e.attributes.href.startsWith("/")&&!e.attributes.target}(e)){const t=e.attributes.onclick;e.attributes.onclick=({event:n})=>{n.preventDefault(),_.url=e.attributes.href,void 0!==t&&setTimeout(()=>{t({...e.attributes,event:n})},0)}}}function anchorableElement(e){const t=e.querySelectorAll('a[href^="/"]:not([target])');for(const e of t)e.onclick=t=>{t.preventDefault(),_.url=e.href}}function parameterizableNode_anchorableNode(e,t,n){if(function isParameterizable(e){return e&&e.attributes&&(e.attributes.params||e.attributes.path)}(e)){let r;if(e.attributes.params){r={};for(const t in e.attributes.params)r[t]=serializeParam(e.attributes.params[t])}else r=n;const i=serializeSearch(r),a=e.attributes.path||t.path;e.attributes.href=a+(i?"?":"")+i,delete e.attributes.path,delete e.attributes.params}}function objectEvent(e){for(const t in e.attributes)if(t.startsWith("on")&&"object"==typeof e.attributes[t]){const n=e.attributes.source,r=e.attributes[t];e.attributes[t]=function(){for(const e in r)n[e]=r[e]}.bind(n)}}function render(e,t){if(routableNode(e,t),isFalse(e))return document.createComment("");if(objectEvent(e),bindableNode(e),isStatic(e)){const n=(e.type.render||e.type).call(e.type,{...f,...e.attributes});return e.children=[n],render(e.children[0],[...t,0])}if(isFunction(e)){const n=e.type(e.attributes);return e.children=[n],render(e.children[0],[...t,0])}if(isClass(e)){const n=e.attributes.key||generateKey([0,...t]),r=new e.type,i=window.instances[n];if(i){for(const e in i)r[e]=i[e];delete window.instances[n],r._self.initiated=!0,r._self.prerendered=!0}r._events={},r._attributes=e.attributes,b.instances[n]=r;const a=generateContext(e.attributes);r._context=a,i||(b.initiationQueue.push(r),r.prepare&&r.prepare());const l=r.render();return e.children=[l],b.renewalQueue.push(r),r._self.element=render(e.children[0],[...t,0]),b.hydrationQueue.push(r),r._self.element}if(isText(e))return document.createTextNode(e);let n,r=b.nextVirtualDom,i=!1;for(const e of t){if(!r.children)break;if(r=r.children[e],!r)break;if("svg"===r.type){i=!0;break}}n=i?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),parameterizableNode_anchorableNode(e,_,c),anchorableNode(e);for(let r in e.attributes)if("html"===r)n.innerHTML=e.attributes[r],anchorableElement(n);else if(r.startsWith("on")){const i=r.replace("on",""),a=generateKey(t)+"."+i;b.events[a]=t=>{!0!==e.attributes.default&&t.preventDefault(),e.attributes[r]({...e.attributes,event:t})},n.addEventListener(i,b.events[a])}else"function"!=typeof e.attributes[r]&&"object"!=typeof e.attributes[r]&&("value"!=r&&!0===e.attributes[r]?n.setAttribute(r,""):("value"==r||!1!==e.attributes[r]&&null!==e.attributes[r]&&void 0!==e.attributes[r])&&n.setAttribute(r,e.attributes[r]));if(!e.attributes.html){for(let r=0;r<e.children.length;r++){const i="Fragment"===e.type?t:[...t,r],a=render(e.children[r],i);n.appendChild(a)}"select"==e.type&&(n.value=e.attributes.value)}return n}function rerender(e,t,n){if(!b.hydrated)for(const t of e.childNodes)t.tagName&&"textarea"==t.tagName.toLowerCase()&&0==t.childNodes.length&&t.appendChild(document.createTextNode("")),8===t.COMMENT_NODE&&"#"===t.textContent&&e.removeChild(t);const r=t[t.length-1];let i=b.virtualDom,a=b.nextVirtualDom;for(const e of n)i=i.children[e],a=a.children[e];const l=e.childNodes[r];if(!isFalse(i)||!isFalse(a)){if((isFalse(i)||isFalse(a))&&i!=a){const t=render(a,n);return e.replaceChild(t,l)}if("Fragment"!==a.type){if(objectEvent(a),bindableNode(a),isStatic(a)){const r=(a.type.render||a.type).call(a.type,{...f,...a.attributes});return a.children=[r],rerender(e,t,[...n,0])}if(isFunction(a)){const r=a.type(a.attributes);return a.children=[r],rerender(e,t,[...n,0])}if(isClass(i)&&i.type===a.type){const r=a.attributes.key||generateKey([0,...n]);let s=null;if(_._changed){if(_._changed){let e=!1;if(a._params)for(const t in a._params)i._params&&i._params[t]!==a._params[t]&&(e=!0);e||(s=b.instances[r])}}else s=b.instances[r];const o=generateContext(a.attributes);if(s)s._context=o,s.update&&s.update();else{s=new a.type;const e=window.instances[r];if(e){for(const t in e)s[t]=e[t];delete window.instances[r],s._self.initiated=!0,s._self.prerendered=!0}s._context=o,s._events={},b.instances[r]=s,e||(b.initiationQueue.push(s),s.prepare&&s.prepare()),b.hydrationQueue.push(s)}s._attributes=a.attributes,s._self.element=l,b.renewalQueue.push(s);const c=s.render();a.children=[c];const u=Math.max(i.children.length,a.children.length);for(let r=0;r<u;r++)rerender(e,t,[...n,r])}else if(i.type!==a.type){const t=render(a,n);e.replaceChild(t,l)}else if(isText(i)&&isText(a)){if(i!=a)return l.nodeValue=a}else if(i.type===a.type){parameterizableNode_anchorableNode(a,_,c),anchorableNode(a);const e=Object.keys({...i.attributes,...a.attributes});for(const t of e)if("html"===t)a.attributes[t]!==i.attributes[t]&&(l.innerHTML=a.attributes[t],anchorableElement(l));else if("checked"===t)a.attributes[t]!==l.value&&(l.checked=a.attributes[t]);else if("value"===t)a.attributes[t]!==l.value&&(l.value=a.attributes[t]);else if(t.startsWith("on")){const e=t.replace("on",""),r=generateKey(n)+"."+e;l.removeEventListener(e,b.events[r]),a.attributes[t]?(b.events[r]=e=>{!0!==a.attributes.default&&e.preventDefault(),a.attributes[t]({...a.attributes,event:e})},l.addEventListener(e,b.events[r])):delete b.events[r]}else"function"!=typeof a.attributes[t]&&"object"!=typeof a.attributes[t]&&(void 0===i.attributes[t]&&void 0!==a.attributes[t]?l.setAttribute(t,a.attributes[t]):void 0!==i.attributes[t]&&void 0===a.attributes[t]?l.removeAttribute(t):i.attributes[t]!==a.attributes[t]&&("value"!=t&&!1===a.attributes[t]||null===a.attributes[t]||void 0===a.attributes[t]?l.removeAttribute(t):"value"!=t&&!0===a.attributes[t]?l.setAttribute(t,""):l.setAttribute(t,a.attributes[t])));if(a.attributes.html)return;const r=Math.max(i.children.length,a.children.length);for(const e of a.children)routableNode(e,[...t,0]);if(a.children.length>i.children.length){for(let e=0;e<i.children.length;e++)rerender(l,[...t,e],[...n,e]);for(let e=i.children.length;e<a.children.length;e++){const t=render(a.children[e],[...n,e]);l.appendChild(t)}}else if(i.children.length>a.children.length){for(let e=0;e<a.children.length;e++)rerender(l,[...t,e],[...n,e]);for(let e=i.children.length-1;e>=a.children.length;e--)l.removeChild(l.childNodes[e])}else for(let e=r-1;e>-1;e--)rerender(l,[...t,e],[...n,e]);"textarea"==a.type&&(l.value=a.children.join("")),"select"==a.type&&(l.value=a.attributes.value)}}else{for(let e=Math.max(i.children.length,a.children.length)-1;e>-1;e--)rerender(l,t,[...n,e])}}}const h={initialized:!1,hydrated:!1,initializer:null,instances:{},initiationQueue:[],renewalQueue:[],hydrationQueue:[],virtualDom:{},selector:null,routes:{},events:{},renderQueue:null,update:function(){h.initialized&&(clearInterval(h.renderQueue),h.renderQueue=setTimeout(()=>{h.initialized=!1,h.routes={},h.initiationQueue=[],h.renewalQueue=[],h.hydrationQueue=[],h.nextVirtualDom=h.initializer(),rerender(h.selector,[0],[]),h.virtualDom=h.nextVirtualDom,h.nextVirtualDom=null,h.processLifecycleQueues()},16))},processLifecycleQueues:async function(){h.initialized||(h.initialized=!0,h.hydrated=!0);const e=h.initiationQueue,t=h.hydrationQueue;for(const t of e)t.initiate&&await t.initiate(),t._self.initiated=!0;e.length&&h.update();for(const e of t)e.hydrate&&await e.hydrate(),e._self.hydrated=!0;t.length&&h.update();for(const e in h.instances){const t=h.instances[e];h.renewalQueue.includes(t)||(t.terminate&&await t.terminate(),delete h.instances[e])}_._changed=!1}};var b=h;var y=new Proxy({},{set:(e,t,n)=>(e[t]=n,b.update(),!0),get:(e,t)=>e[t]||!1});const g={set(e,t,n){"title"===t&&(document.title=n);const r=Reflect.set(...arguments);return b.update(),r}},x=new Proxy({...window.page},g);delete window.page;var w=x;let v=null;var _=new class router_Router{constructor(){!function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(this,"_changed",!1)}async _redirect(e){const{url:t}=extractLocation(e);t!=this.url&&(clearTimeout(v),v=setTimeout(async()=>{if(d.static){y.processing=!0;const e="/"==t?"/index.json":t+"/index.json",n=await fetch(e),r=await n.json();window.instances=r.instances;for(const e in r.page)w[e]=r.page[e];y.processing=!1}updateParams(t),history.pushState({},document.title,t),window.dispatchEvent(new Event("popstate")),this._changed=!0},0))}get url(){return extractLocation(window.location.pathname+window.location.search).url}set url(e){this._redirect(e)}get path(){return extractLocation(window.location.pathname).path}set path(e){this._redirect(e+window.location.search)}};var k={get(e,t){return void 0===e[t]&&!0===e.constructor[t]?async n=>{y.processing=!0,y[t]=!0;const r=`/api/${e.constructor.hash}/${t}.json`,i=await fetch(r,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n||{})}),a=await i.text();return y.processing=!1,delete y[t],deserialize(a).result}:"function"==typeof e[t]?n=>{const r=generateContext({...e._context,...n,self:e._self});return e[t](r)}:Reflect.get(...arguments)},set(e,t,n){const r=Reflect.set(...arguments);return t.startsWith("_")||b.update(),r}};const N={...window.settings};delete window.settings,Object.freeze(N);var C=N;function client_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}f.page=w,f.router=_,f.network=y,f.settings=C;class client_Nullstack{static start(e){window.instances=deserialize(JSON.stringify(window.instances)),window.addEventListener("popstate",()=>{b.update(),window.scroll(0,0)});for(const[e,t]of Object.entries(window.context))f[e]=t;f.params=c,Object.freeze(f.project),delete window.context,b.routes={},updateParams(_.url),b.currentInstance=null,b.initializer=()=>element_element(e),b.selector=document.querySelector("#application"),b.virtualDom=b.initializer(),f.environment=d,b.nextVirtualDom=b.initializer(),rerender(b.selector,[0],[]),b.virtualDom=b.nextVirtualDom,b.nextVirtualDom=null,b.processLifecycleQueues()}constructor(){client_defineProperty(this,"_self",{prerendered:!1,initiated:!1,hydrated:!1});const e=Object.getOwnPropertyNames(Object.getPrototypeOf(this)),t=new Proxy(this,k);for(const n of e)"constructor"!==n&&"function"==typeof this[n]&&(this[n]=this[n].bind(t));return t}render(){return!1}}client_defineProperty(client_Nullstack,"element",element_element);var j=client_Nullstack;n(1);class Documentation_Documentation extends j{prepare({project:e,page:t}){t.title="Documentation - "+e.name,t.description="Follow these steps and become a full-stack javascript developer!"}renderLink({title:e}){const t="/"+e.toLowerCase().split(" ").join("-");return j.element("a",{href:t,class:"xl x12 p3y bcm2b ci1h"}," ",e," ")}renderTopic({title:e,description:t,children:n}){return j.element("div",{class:"x12"},j.element("h2",{class:"x12 sm-f6 md+f8 m2b"}," ",e," "),j.element("p",{class:"x12 f4"}," ",t," "),j.element("nav",{class:"x12 m6y"}," ",n," "))}render(){const e=this.renderLink,t=this.renderTopic;return j.element("section",{class:"x sm-p4x sm-p10y md+p20y"},j.element("h1",{class:"x12 sm-f6 md+f12 m2b"}," Nullstack Documentation "),j.element("p",{class:"x12 f4"}," Follow these steps and become a full-stack javascript developer! "),j.element(t,{title:"Core concepts",description:"Start your journey in Nullstack with these basic concepts"},j.element(e,{title:"Getting started"}),j.element(e,{title:"Renderable components"}),j.element(e,{title:"Stateful components"}),j.element(e,{title:"Full-stack lifecycle"}),j.element(e,{title:"Server functions"}),j.element(e,{title:"Context"}),j.element(e,{title:"Routes and params"}),j.element(e,{title:"Two-way bindings"})),j.element(t,{title:"Advanced concepts",description:"These are concepts that you will most likely learn as you need in your projects"},j.element(e,{title:"Application Startup"}),j.element(e,{title:"Context environment"}),j.element(e,{title:"Context network"}),j.element(e,{title:"Context page"}),j.element(e,{title:"Context project"}),j.element(e,{title:"Context settings"}),j.element(e,{title:"Context secrets"}),j.element(e,{title:"Instance self"}),j.element(e,{title:"Instance Key"}),j.element(e,{title:"Server request and response"}),j.element(e,{title:"Styles"}),j.element(e,{title:"NJS file extension"}),j.element(e,{title:"Server-side rendering"}),j.element(e,{title:"Static site generation"}),j.element(e,{title:"How to deploy a Nullstack application"})),j.element(t,{title:"Examples",description:"The best way to learn Nullstack is by reading some code"},j.element(e,{title:"How to use MongoDB with Nullstack"}),j.element(e,{title:"How to use Google Analytics with Nullstack"}),j.element(e,{title:"How to use Facebook Pixel with Nullstack"})))}}var P=Documentation_Documentation;Documentation_Documentation.hash="adeb9b9484e6fd362e2940ef214593d0";class Components_Documentation extends j{prepare({project:e,page:t}){t.title="Community Components - "+e.name,t.description="Follow these steps and become a full-stack javascript developer!"}renderProject({title:e,repository:t}){return j.element("a",{href:t,class:"xl x12 p3y bcm2b ci1h"},e)}renderTopic({title:e,children:t}){return j.element("div",{class:"x12"},j.element("h2",{class:"x12 sm-f6 md+f8"}," ",e," "),j.element("nav",{class:"x12 m6b"}," ",t," "))}render(){const e=this.renderProject,t=this.renderTopic;return j.element("section",{class:"x sm-p4x sm-p10y md+p20y"},j.element("h1",{class:"x12 sm-f6 md+f12 m2b"}," Community Components "),j.element("p",{class:"x12 f4"}," A curated list of Nullstack components made by the community. "),j.element("p",{class:"m2t"},"If you want to add a component to this list",j.element("a",{href:"https://github.com/nullstack/nullstack.github.io/issues",class:"ci1"}," open an issue on github "),"."),j.element(t,{title:"Integrations"},j.element(e,{title:"Google Analytics",repository:"https://github.com/Mortaro/nullstack-google-analytics"}),j.element(e,{title:"Facebook Pixel",repository:"https://github.com/Mortaro/nullstack-facebook-pixel"})),j.element(t,{title:"General Inputs"},j.element(e,{title:"Currency Input",repository:"https://github.com/Mortaro/nullstack-currency-input"}),j.element(e,{title:"Date Input",repository:"https://github.com/Mortaro/nullstack-date-input"}),j.element(e,{title:"CK Editor Adapter",repository:"https://github.com/Mortaro/nullstack-ckeditor-adapter"})),j.element(t,{title:"Brazilian Inputs"},j.element(e,{title:"CPF and CNPJ Inputs",repository:"https://github.com/Mortaro/nullstack-cpf-cnpj-input"}),j.element(e,{title:"CEP Input",repository:"https://github.com/Mortaro/nullstack-cep-input"}),j.element(e,{title:"Phone Input",repository:"https://github.com/Mortaro/nullstack-phone-input"}),j.element("p",{class:"bgs2 p2 m2t",title:"Nullstack is a Brazilian Framework"}," 🤘 Nullstack é BR porr@! ")))}}var S=Components_Documentation;Components_Documentation.hash="69d8c44dc182b641b568cba43e1c9ce1";n(2);function Article_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Article_Component extends j{constructor(...e){super(...e),Article_defineProperty(this,"title",""),Article_defineProperty(this,"html","")}async initiate({project:e,page:t,params:n}){const r=await this.getArticleByKey({key:n.slug});Object.assign(this,r),t.title=`${r.title} - ${e.name}`,t.description=r.description}render(){return j.element("section",{class:"x sm-p4x sm-p10y md+p20y"},j.element("h1",{class:"x12 sm-f6 md+f8 m6b"}," ",this.title," "),j.element("article",{html:this.html}))}}Article_defineProperty(Article_Component,"getArticleByKey",!0);var A=Article_Component;Article_Component.hash="9d732a87620616469ca3b0e0039d1381";var stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return j.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&j.element("title",null,r),"spin"===a&&j.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),j.element("rect",{x:"10",y:"10",width:"492",height:"90.4043",rx:"17.383","stroke-width":n||20,stroke:o,"stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}),j.element("rect",{x:"10",y:"411.5957",width:"492",height:"90.4043",rx:"17.383","stroke-width":n||20,stroke:o,"stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}),j.element("rect",{x:"10",y:"210.7979",width:"492",height:"90.4043",rx:"17.383","stroke-width":n||20,stroke:o,"stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}))},ex_stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return j.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&j.element("title",null,r),"spin"===a&&j.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),j.element("path",{d:"M335.1385,256,495.697,95.4415a21.52,21.52,0,0,0,0-30.4336L446.9921,16.303a21.52,21.52,0,0,0-30.4336,0L256,176.8615,95.4415,16.303a21.52,21.52,0,0,0-30.4336,0L16.303,65.0079a21.52,21.52,0,0,0,0,30.4336L176.8615,256,16.303,416.5585a21.52,21.52,0,0,0,0,30.4336L65.0079,495.697a21.52,21.52,0,0,0,30.4336,0L256,335.1385,416.5585,495.697a21.52,21.52,0,0,0,30.4336,0l48.7049-48.7049a21.52,21.52,0,0,0,0-30.4336Z",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":n||20}))};class Header_Header extends j{constructor(...e){super(...e),function Header_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(this,"expanded",!1)}renderLink({title:e,href:t,target:n}){return j.element("a",{href:t,target:n,source:this,onclick:{expanded:!1},class:"sm-x12 sm-bcm2b p2 ci1h"}," ",e," ")}render(){const e=this.renderLink;return j.element("header",{class:"x12 ftl bgm1 s1"},j.element("div",{class:"x xsb yy p4y"},j.element("div",{class:"sm-x12 sm-xsb sm-p4x yy"},j.element("a",{href:"/",title:"Nullstack"},j.element("img",{src:"/nullstack.svg",style:"height: 30px"})),j.element("span",{source:this,onclick:{expanded:!this.expanded},class:"yy md+off"},j.element("element",{tag:this.expanded?ex_stroke:stroke,height:20,class:"cm3"}))),j.element("nav",{class:"yy sm-p4 "+(!this.expanded&&"sm-off")},j.element(e,{title:"About",href:"/"}),j.element(e,{title:"Documentation",href:"/documentation"}),j.element(e,{title:"Components",href:"/components"}),j.element(e,{title:"Source",href:"https://github.com/nullstack/nullstack",target:"_blank"})),j.element("div",{class:"sm-x12 sm-p4x "+(!this.expanded&&"sm-off")},j.element("a",{href:"/getting-started",source:this,onclick:{expanded:!1},class:"xx sm-x12 bci1 bgi1 bgm1h cm1 ci1h p4x p2y"},"Get Started"))))}}var D=Header_Header;Header_Header.hash="e8e3cad77c67eecb21c864dc6891949d";class Footer_Footer extends j{static render(){const e=(new Date).getFullYear();return j.element("footer",{class:"xx bgm2 p10y"},j.element("img",{src:"/nullstack.svg",style:"height: 30px"}),j.element("p",{class:"x12 m6t"}," © ",e," Nullstack "))}}var L=Footer_Footer;Footer_Footer.hash="42eac7ccf193eb7c1a43c9cbf2124ecd";n(3),n(4);function Snippet_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Snippet_Snippet extends j{constructor(...e){super(...e),Snippet_defineProperty(this,"html","")}async initiate({key:e}){this.html=await this.getSnippetByKey({key:e})}whitelist(){return j.element("div",{class:"\r token comment prolog doctype cdata punctuation selector\r tag property boolean number constant symbol attr-name\r deleted string char attr-value builtin inserted\r operator entity url language-css style atrule\r keyword function regex important variable bold italic\r "})}render(){return j.element("pre",{class:"bgm3 p4"},j.element("code",{html:this.html}))}}Snippet_defineProperty(Snippet_Snippet,"getSnippetByKey",!0);var F=Snippet_Snippet;Snippet_Snippet.hash="44da7b36ad27c2e1061d5defd0d77e7c";var cog_stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return j.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&j.element("title",null,r),"spin"===a&&j.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),j.element("path",{d:"M501.9984,279.0708a16.0691,16.0691,0,0,1-13.4278,15.8986l-35.9968,5.9988A17.6011,17.6011,0,0,0,438.58,313.2018a190.8568,190.8568,0,0,1-13.0446,31.4643A17.5918,17.5918,0,0,0,426.82,363.09l21.2127,29.7891a16.0776,16.0776,0,0,1-1.7514,20.7457l-32.6594,32.6583a16.0432,16.0432,0,0,1-20.72,1.77l-29.6617-21.2007a17.59,17.59,0,0,0-18.5045-1.2931,192.38,192.38,0,0,1-31.5078,13.0457,17.6007,17.6007,0,0,0-12.1433,13.9121l-6.1141,36.0359a16.07,16.07,0,0,1-15.903,13.4484H232.82a16.0653,16.0653,0,0,1-15.8975-13.4277l-6-35.9967a17.6049,17.6049,0,0,0-12.1182-13.9633,191.0666,191.0666,0,0,1-30.5031-12.54,17.62,17.62,0,0,0-18.399,1.2888L119.709,448.852a15.4291,15.4291,0,0,1-9.2011,2.9509A15.7635,15.7635,0,0,1,99.1461,447.05l-32.7182-32.715a15.9459,15.9459,0,0,1-1.7394-20.626l21.0854-29.3308a17.5751,17.5751,0,0,0,1.255-18.6569,186.7013,186.7013,0,0,1-13.2112-31.3456A17.637,17.637,0,0,0,59.935,302.2907l-36.49-6.2208A16.0752,16.0752,0,0,1,10,280.168V234.0254a16.0757,16.0757,0,0,1,13.4571-15.902l35.5549-6a17.5854,17.5854,0,0,0,13.9763-12.2794,188.24,188.24,0,0,1,12.828-31.5448,17.6135,17.6135,0,0,0-1.2877-18.3989L63.09,119.78A16.0645,16.0645,0,0,1,64.82,99.0512l32.77-32.6584.1187-.124a15.6331,15.6331,0,0,1,11.2594-4.6469,15.8133,15.8133,0,0,1,9.3122,2.951l29.457,21.2039a17.5634,17.5634,0,0,0,18.6536,1.2507,186.6559,186.6559,0,0,1,31.3326-13.2068,17.6346,17.6346,0,0,0,12.0921-13.887l6.2252-36.49A16.0692,16.0692,0,0,1,231.9433,9.9987h46.1426a16.0748,16.0748,0,0,1,15.902,13.4571l6,35.5678a17.5926,17.5926,0,0,0,12.2968,13.9721,189.9907,189.9907,0,0,1,32.6888,13.4528,17.612,17.612,0,0,0,18.45-1.2714L393.28,63.9132a15.41,15.41,0,0,1,9.2011-2.9509,15.7748,15.7748,0,0,1,11.3618,4.7546l32.7138,32.7138a15.95,15.95,0,0,1,1.7144,20.6608L427.05,148.7826a17.6069,17.6069,0,0,0-1.2714,18.48,192.2247,192.2247,0,0,1,13.049,31.511,17.6,17.6,0,0,0,13.9121,12.139l36.0055,6.11.03.0043A15.6605,15.6605,0,0,1,501.9984,232.7Z",transform:"translate(0 0.0013)",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),j.element("circle",{cx:"256",cy:"256.0013",r:"101",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}))},refresh_stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return j.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&j.element("title",null,r),"spin"===a&&j.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),j.element("path",{d:"M79.9776,271.6767l-57.6-8.2342a14.4244,14.4244,0,0,1-12.373-14.639C13.3548,114.8959,120.9539,10,254.9739,10A243.4274,243.4274,0,0,1,381.0547,45.1482L410.7419,15.461a14.428,14.428,0,0,1,24.4645,8.15l20.3825,142.6906a14.4322,14.4322,0,0,1-16.3148,16.3148L296.5835,162.2336a14.43,14.43,0,0,1-8.15-24.4645l28.6167-28.6167a158.6017,158.6017,0,0,0-62.0766-12.668c-88.3543,0-159.7347,72.3451-158.54,160.7225A14.4326,14.4326,0,0,1,79.9776,271.6767Z",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":n||20}),j.element("path",{d:"M257.0534,502a244.0034,244.0034,0,0,1-125.9962-34.8244l-30.405,30.3907a14.4294,14.4294,0,0,1-24.4645-8.15L55.8062,346.725A14.4479,14.4479,0,0,1,72.121,330.41l142.6905,20.3969a14.43,14.43,0,0,1,8.15,24.4645l-27.7019,27.7019a158.754,158.754,0,0,0,61.7941,12.5421c87.4271,0,158.5547-71.1276,158.5547-158.5547,0-10.0821,9.0193-16.4541,16.4551-15.5124l57.5572,8.2208a14.4368,14.4368,0,0,1,12.3731,14.71C498.01,397.6249,390.4258,502,257.0534,502Z",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":n||20}))},globe_stroke=({width:e,height:t,length:n,title:r,rotation:i,animation:a,speed:l,class:s,color:o="currentColor"})=>{const c=!!i&&`rotate(${i})`,u={slow:"1.5s",fast:"0.5s"}[l]||"1.0s";return j.element("svg",{width:e,height:t,transform:c,class:s,viewBox:"0 0 512 512"},r&&j.element("title",null,r),"spin"===a&&j.element("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:u,additive:"sum",repeatCount:"indefinite"}),j.element("circle",{cx:"256",cy:"256",r:"246",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),j.element("path",{d:"M437.0322,422.545c-37.8083-31.887-104.408-53.058-180.2668-53.058-76.4345,0-143.465,21.495-181.1186,53.7873",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),j.element("path",{d:"M77.0141,87.2566c37.8977,31.6422,104.241,52.6167,179.7513,52.6167,74.9415,0,140.8449-20.663,178.8813-51.9068",transform:"translate(0 0)",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),j.element("ellipse",{cx:"258.3311",cy:"255.7857",rx:"125.7359",ry:"245.7857",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),j.element("line",{x1:"10",y1:"256",x2:"502",y2:"256",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}),j.element("line",{x1:"258.3311",y1:"10",x2:"258.3311",y2:"501.5714",fill:"none",stroke:o,"stroke-miterlimit":"10","stroke-width":n||20}))};class Home_Component extends j{prepare({project:e,page:t}){t.title=e.name+" - Full-stack Javascript Components",t.description="Nullstack is a full-stack framework for building progressive web applications"}renderHero(){return j.element("section",{class:"x xx sm-p2x p20y"},j.element("h1",{class:"x12 sm-f8 md+f12"}," Full-stack Javascript Components"),j.element("div",{class:"xx x8 m12b",style:"background-image: linear-gradient(0deg, #fff 49%, #eee 50%, #fff 51%);"},j.element("p",{class:"bgm1 f6 p2"}," for one-dev armies ")),j.element("div",{style:"letter-spacing: 1.2px; line-height: 120%;"},j.element("p",{class:"x12 f4"}," Nullstack is a full-stack framework for building ",j.element("strong",null,"progressive web applications"),". "),j.element("p",{class:"x12 f4"}," It connects a ",j.element("strong",null,"stateful UI")," layer to specialized ",j.element("strong",null,"microservices")," in the same component using ",j.element("strong",null,"vanilla javascript.")," "),j.element("p",{class:"x12 f4 m4t"}," Focus on solving your business logic instead of writing glue code. ")))}renderFeature({title:e,key:t,link:n}){return j.element("div",{class:"sm-x12 md+x6 p1"},!!e&&j.element("div",{class:"xsb bgm2 p4"},j.element("h3",{class:"ff2 fw3 f4"},j.element("a",{href:n},e)),j.element("a",{href:n,title:e,class:"ci1"},"documentation")),j.element(F,{key:t}))}renderDemo(){const e=this.renderFeature;return j.element("section",{class:"x xl sm-p2x"},j.element(e,{key:"Application"}),j.element(e,{key:"TaskList"}))}renderAbout(){return j.element("section",{class:"x xx sm-p2x sm-p10y md+p20y"},j.element("h2",{class:"x12 sm-f8 md+f12 m2b"}," Nullstack is your Application "),j.element("p",{class:"x12 f4"}," Nullstack is not another part of your stack, it is your stack "),j.element("p",{class:"x12 f4"}," Your application can be exported from back to front as a component and mounted in another application "))}renderStep({title:e,description:t,link:n,icon:r}){return j.element("div",{class:"md+x4 p1"},j.element("div",{class:"xx bgm2 p8y p4x"},j.element(r,{height:40,class:"ci1 m4b"}),j.element("h3",{class:"x12 f6"},j.element("a",{href:n},e)),j.element("p",{class:"x12 f4 m4y"}," ",t," "),j.element("a",{href:n,title:e,class:"ci1"},"documentation")))}renderCycle(){const e=this.renderStep;return j.element("section",{class:"x xx sm-p2x bcm2y p10y"},j.element(e,{icon:cog_stroke,title:"Server-Side Rendering",description:"Nullstack prerenders your route in a single request using local functions on the first visit and generates SEO optimized HTML",link:"/server-side-rendering"}),j.element(e,{icon:refresh_stroke,title:"Single Page Application",description:"Subsequent requests will fetch JSON from an automatically generated API, update the application state, and rerender the page",link:"/full-stack-lifecycle"}),j.element(e,{icon:globe_stroke,title:"Static Site Generation",description:"Optionally you can use Nullstack to generate static websites for lightning-fast static applications using the full power of Nullstack",link:"/static-site-generation"}))}renderProductivity(){return j.element("section",{class:"x xx sm-p2x sm-p10y md+p20y"},j.element("h2",{class:"x12 sm-f8 md+f12 m2b"}," Productivity is in the Details "),j.element("p",{class:"x12 f4"}," Nullstack features have been extracted from real life projects with convenience and consistency in mind "))}renderFeatures(){const e=this.renderFeature;return j.element("section",{class:"x xl sm-p2x"},j.element(e,{title:"Stateful Components",key:"Stateful",link:"/stateful-components"}),j.element(e,{title:"Two-Way Binding",key:"Binding",link:"/two-way-bindings"}),j.element(e,{title:"Built-in Routes",key:"Routes",link:"/routes-and-params"}),j.element(e,{title:"Full-stack Lifecycle",key:"Lifecycle",link:"/full-stack-lifecycle"}))}renderEcosystem(){return j.element("section",{class:"x xx sm-p2x sm-p10y md+p20y"},j.element("p",{class:"x12 f4 fw7"}," Don't be afraid of testing a new ecosystem, because it's not new at all "),j.element("p",{class:"x12 f4"},' There is no "Nullstack Way" of doing things, it is just javascript and you can use any isomorphic vanilla package made throughout history '),j.element("a",{href:"/documentation",class:"ci1 bci1 cm1h bgi1h m6t p2y p4x"}," Read the Documentation "))}render(){const e=this.renderHero,t=(this.renderFeature,this.renderDemo),n=this.renderAbout,r=this.renderCycle,i=this.renderProductivity,a=this.renderFeatures,l=this.renderEcosystem;return j.element("div",null,j.element(e,null),j.element(t,null),j.element(n,null),j.element(r,null),j.element(i,null),j.element(a,null),j.element(l,null))}}var O=Home_Component;Home_Component.hash="7ee16c17f942f1f042527bfd29d63b91";class GoogleAnalytics_GoogleAnalytics extends j{hydrate({router:e,page:t,id:n}){function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config",n,{page_title:t.title,page_path:e.url}),window.addEventListener("nullstack.page.title",()=>{gtag("event","page_view",{page_title:t.title,page_path:e.url})})}render({id:e}){return j.element("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+e})}}var T=GoogleAnalytics_GoogleAnalytics;GoogleAnalytics_GoogleAnalytics.hash="c9d66076ba723792e86234932703e911";class Application_Application extends j{prepare({page:e}){e.locale="en"}render(){return j.element("main",null,j.element(D,null),j.element(O,{route:"/"}),j.element(P,{route:"/documentation"}),j.element(S,{route:"/components"}),j.element(A,{route:"/:slug"}),j.element(L,null),j.element(T,{id:"G-E7GZ5Z4MLN"}))}}!function Application_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(Application_Application,"start",!0);var M=Application_Application;Application_Application.hash="b3e74117e4a7c03cc324dbf516e19f29",j.start(M)}]);