webpackJsonp([4],{0:function(e,t,n){e.exports=n(95)},36:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(){var e=l.DOCUMENT.createElement("p");e.style.width="100%",e.style.height="200px";var t=l.DOCUMENT.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),l.BODY.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var r=e.offsetWidth;return n==r&&(r=t.clientWidth),l.BODY.removeChild(t),n-r}Object.defineProperty(t,"__esModule",{value:!0});var s=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.getScrollBarWidth=a;var l=n(11),c=n(21),f=r(c),h=n(37),d=function(){function e(){o(this,e),this.savedParameters={}}return u(e,[{key:"apply",value:function(e){}},{key:"restore",value:function(){}}]),e}();t.AScrollBarStrategy=d;var p=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.pageElement=(0,l.querySelector)(".page"),this.navElement=(0,l.querySelector)(".nav"),this.contactsView=(0,l.querySelector)(".open-menu__contacts")}return i(t,e),u(t,[{key:"restore",value:function(){this.pageElement.style.marginRight=this.savedParameters.pageElementMargin,this.navElement.style.left=this.savedParameters.navElementLeft,this.contactsView.style.marginLeft=this.savedParameters.contactElementMargin}},{key:"apply",value:function(e){this.savedParameters.pageElementMargin=this.pageElement.style.marginRight,this.savedParameters.navElementLeft=this.navElement.style.left,this.savedParameters.contactElementMargin=this.contactsView.style.marginLeft,this.pageElement.style.marginRight=e+"px",this.navElement.style.left=-1*e+"px",this.contactsView.style.marginLeft=-1*e/2+"px"}}]),t}(d);t.DefaultWideScreenScrollBarStrategy=p;var v=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.pageElement=(0,l.querySelector)(".page"),this.contactsView=(0,l.querySelector)(".open-menu__contacts"),this.navElement=(0,l.querySelector)(".nav")}return i(t,e),u(t,[{key:"restore",value:function(){this.pageElement.style.marginRight=this.savedParameters.pageElementMargin,this.contactsView.style.marginLeft=this.savedParameters.contactElementMargin,this.navElement.style.right=this.savedParameters.navElementRight}},{key:"apply",value:function(e){this.savedParameters.pageElementMargin=this.pageElement.style.marginRight,this.savedParameters.contactElementMargin=this.contactsView.style.marginLeft,this.savedParameters.navElementRight=this.navElement.style.right,this.pageElement.style.marginRight=e+"px",this.contactsView.style.marginLeft=-1*e/2+"px",this.navElement.style.right=e+"px"}}]),t}(d);t.DefaultSmallScreenScrollBarStrategy=v;var y=function(){function e(t,n){o(this,e),console.assert(t instanceof d||!(n instanceof d),"Scrollbar strategy doesn't implement ScrollBarStrategyInterface"),this.smallScreenStrategy=t,this.wideScreenStrategy=n,this.SMALLSCREENBREAKPOINT=1308,this.isWideScreenSet=null,this.inFixedMode=null,this.context=new g,f.default.on("update",this.onResize.bind(this)),this.onResize()}return u(e,[{key:"fix",value:function(){this.context.fix(),this.inFixedMode=!0}},{key:"unfix",value:function(){this.context.unfix(),this.inFixedMode=!1}},{key:"onResize",value:function(){this.isScreenWide()?this.isWideScreenSet!==!0&&(this.context.reset(),this.context.setStrategy(this.wideScreenStrategy),this.isWideScreenSet=!0,null!==this.inFixedMode&&this.inFixedMode&&this.fix()):this.isWideScreenSet!==!1&&(this.context.reset(),this.context.setStrategy(this.smallScreenStrategy),this.isWideScreenSet=!1,null!==this.inFixedMode&&this.inFixedMode&&this.fix())}},{key:"isScreenWide",value:function(){return(0,h.width)()>this.SMALLSCREENBREAKPOINT}}]),e}();t.ScrollBarFixer=y;var g=function(){function e(){o(this,e),this.strategy=null,this.scrollbarWidth=a(),this.stackContextCounter=0}return u(e,[{key:"setStrategy",value:function(e){this.strategy=e}},{key:"fix",value:function(){0!==this.scrollbarWidth&&null!==this.strategy&&(this._increase(),this._canFix()&&this.strategy.apply(this.scrollbarWidth))}},{key:"unfix",value:function(){0!==this.scrollbarWidth&&null!==this.strategy&&(this._decrease(),this._canUnfix()&&this.strategy.restore(this.scrollbarWidth))}},{key:"reset",value:function(){null!==this.strategy&&this.strategy.restore(this.scrollbarWidth),this.stackContextCounter=0}},{key:"_canFix",value:function(){return 1===this.stackContextCounter}},{key:"_canUnfix",value:function(){return 0===this.stackContextCounter}},{key:"_increase",value:function(){this.stackContextCounter++}},{key:"_decrease",value:function(){0!==this.stackContextCounter&&this.stackContextCounter--}}]),e}();t.ScrollBarFixerContext=g,t.default=function(){return new y(new v,new p)}},37:function(e,t,n){"use strict";function r(){return Math.max(o.BODY.scrollHeight,o.BODY.offsetHeight,o.HTML.clientHeight,o.HTML.scrollHeight,o.HTML.offsetHeight)}function i(){return Math.max(o.BODY.scrollWidth,o.BODY.offsetWidth,o.HTML.clientWidth,o.HTML.scrollWidth,o.HTML.offsetWidth)}Object.defineProperty(t,"__esModule",{value:!0}),t.height=r,t.width=i;var o=n(10)},39:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){var e=window.location.protocol,t=(0,a.querySelector)('link[rel="canonical"]');if(null!==t){var n=t.href;return"http:"===e&&(n=n.replace("https:",e)),n}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.getShareUrl=i;var a=n(11),s=function(){function e(t,n,i){r(this,e),this.el=t,i(n).then(this.setValue.bind(this))}return o(e,[{key:"setValue",value:function(t){null===t?this.el.innerHTML="&nbsp;":this.el.innerHTML=e.pad(t)}}],[{key:"pad",value:function(e){return e<10?"0"+e:e}}]),e}();t.Counter=s;var u=function(){function e(t,n){r(this,e),this.el=t,this.shareUrl=encodeURIComponent(n);var i=e.getSharingText();null!==i&&(this.text=encodeURIComponent(i),t.setAttribute("href",this.getSocialNetworkUrl()),t.setAttribute("target","_blank"))}return o(e,[{key:"getSocialNetworkUrl",value:function(){}}],[{key:"getSharingText",value:function(){var e=(0,a.querySelector)('meta[name="twitter:text"]');return e&&e.content?e.content:a.DOCUMENT.title?a.DOCUMENT.title:null}}]),e}();t.Sharing=u},40:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=h.default.defer();return(0,c.default)("//urls.api.twitter.com/1/urls/count.json?url="+e).then(function(e){var n=e.count;"undefined"==typeof n||0===n?t.resolve(null):t.resolve(n)}),t.promise}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}};t.getTwitterCount=a;var l=n(41),c=r(l),f=n(4),h=r(f),d=n(39),p=function(e){function t(){i(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),s(t,[{key:"getSocialNetworkUrl",value:function(){return"//twitter.com/share?url="+this.shareUrl+"&text="+this.text}}]),t}(d.Sharing);t.TwitterSharing=p},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=a.default.defer(),n=Date.now(),r="jsonp_callback_"+n+"_"+c++;e+=e.match(/\?/)?"&callback="+r:"?callback="+r;var i=l.cloneNode();return i.src=e,i.onload=i.onreadystatechange=function(){u.removeChild(i),i.onload=i.onreadystatechange=null,i=null},s.WINDOW[r]=function(e){t.resolve(e),delete s.WINDOW[r]},u.insertBefore(i,u.firstChild),t.promise}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(4),a=r(o),s=n(11),u=s.DOCUMENT.head||s.DOCUMENT.getElementsByTagName("head")[0],l=s.DOCUMENT.createElement("script");l.async=!0;var c=0;e.exports=t.default},42:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=h.default.defer();return(0,c.default)("//graph.facebook.com/?ids="+e).then(function(n){var r=null;n[e]&&n[e].shares&&(r=n[e].shares),t.resolve(r)}),t.promise}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}};t.getFacebookCount=a;var l=n(43),c=r(l),f=n(4),h=r(f),d=n(39),p=function(e){function t(){i(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),s(t,[{key:"getSocialNetworkUrl",value:function(){return"//www.facebook.com/sharer/sharer.php?u="+this.shareUrl+"&t="+this.text}}]),t}(d.Sharing);t.FacebookSharing=p},43:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=a.default.defer(),n=new XMLHttpRequest;return n.open("GET",e,!0),n.onreadystatechange=function(){4===this.readyState&&(this.status>=200&&this.status<400?t.resolve(JSON.parse(this.responseText)):t.reject({status:this.status}))},n.send(),n=null,t.promise}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(4),a=r(o);e.exports=t.default},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(55),s=r(a),u=n(11),l=function(){function e(){i(this,e),this.init(),s.default.on("update",this.onUpdate.bind(this))}return o(e,[{key:"init",value:function(){var e=(0,u.querySelectorAll)("video");this.videoStates=[];for(var t in e)this.videoStates[t]={video:e[t],state:!1}}},{key:"onUpdate",value:function(e){e.isHidden?this.disactivate():this.activate()}},{key:"disactivate",value:function(){for(var e in this.videoStates){var t=this.videoStates[e];t.video.paused||(t.state=!0,t.video.pause())}}},{key:"activate",value:function(){for(var e in this.videoStates){var t=this.videoStates[e];t.state&&(t.video.play(),t.state=!1)}}}]),e}();t.default=l,e.exports=t.default},55:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},u=n(11),l=n(9),c=n(19),f=r(c),h=function(e){function t(){i(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.hiddenProperty=null;var e=void 0;"undefined"!=typeof u.DOCUMENT.hidden?(this.hiddenProperty="hidden",e="visibilitychange"):"undefined"!=typeof u.DOCUMENT.mozHidden?(this.hiddenProperty="mozHidden",e="mozvisibilitychange"):"undefined"!=typeof u.DOCUMENT.msHidden?(this.hiddenProperty="msHidden",e="msvisibilitychange"):"undefined"!=typeof u.DOCUMENT.webkitHidden&&(this.hiddenProperty="webkitHidden",e="webkitvisibilitychange"),null!==this.hiddenProperty&&((0,l.addEventListener)(u.DOCUMENT,e,this.onUpdate.bind(this)),this.onUpdate())}return o(t,e),a(t,[{key:"onUpdate",value:function(){this.emit("update",{isHidden:u.DOCUMENT[this.hiddenProperty]})}}]),t}(f.default);t.CurrentTab=h,t.default=new h},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(0,f.canSplitFiles)()?new y(e,t):new v(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=o;var s=n(11),u=n(9),l=n(4),c=r(l),f=n(60),h=n(61),d=r(h),p=s.WINDOW.URL||s.WINDOW.webkitURL,v=function(){function e(t,n){i(this,e),this.el=t,this.urls=(0,f.buildUrls)(n)}return a(e,[{key:"load",value:function(){var e=c.default.defer();return this.el.src=this.urls[0],e.resolve(),e.promise}}]),e}(),y=function(){function e(t,n){i(this,e),this.el=t,this.urls=(0,f.buildUrls)(n)}return a(e,[{key:"load",value:function(){for(var e=this,t=c.default.defer(),n=[],r=0,i=function(i){var o=i,a=new d.default(e.urls[i]);a.load().then(function(i){if(n[o]=i,r++,r==e.urls.length){(0,u.once)(e.el,"load",function(){p.revokeObjectURL(e.el.src)});var a=new Blob(n,{type:"video/mp4"});e.el.src=p.createObjectURL(a),t.resolve()}})},o=0;o<this.urls.length;o++)i(o);return t.promise}}]),e}();e.exports=t.default},60:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],t="undefined"!=typeof a.WINDOW.devicePixelRatio?a.WINDOW.devicePixelRatio:1;return t>1||null!==e&&a.WINDOW.outerWidth>e}function i(e){if(!e.baseUrl||"string"!=typeof e.baseUrl)return[];var t="undefined"!=typeof e.minWidth?e.minWidth:null,n=r(t),i=e.baseUrl,a=0;if(n?"undefined"!=typeof e.parts2x&&null!==e.parts2x?(a=parseInt(e.parts2x,10),i=e.baseUrl+s):"undefined"!=typeof e.parts&&null!==e.parts2x?a=parseInt(e.parts,10):i=e.baseUrl+s:"undefined"!=typeof e.parts&&null!==e.parts?a=parseInt(e.parts,10):"undefined"!=typeof e.parts2x&&null!==e.parts&&(a=parseInt(e.parts2x,10),i=e.baseUrl+s),a>0&&o()){for(var l=[],c=1;c<=a;c++)l.push(i+(".part"+c)+u);return l}return[i+u]}function o(){var e=a.WINDOW.URL||a.WINDOW.webkitURL;return"undefined"!=typeof a.WINDOW.Blob||"undefined"!=typeof e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildUrls=i,t.canSplitFiles=o;var a=n(11),s="@2x",u=".mp4"},61:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(62),s=r(a),u=n(4),l=r(u),c=function(){function e(t){i(this,e),this.url=t}return o(e,[{key:"load",value:function(){var e=this,t=l.default.defer(),n=new s.default(this.url,a.METHODS.GET,{responseType:"arraybuffer",async:!0});return n.send().then(function(e){t.resolve(e)},function(){t.reject(new Error("Error on load video "+e.url))}),t.promise}}]),e}();t.default=c,e.exports=t.default},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(4),l=r(u),c={GET:"get",POST:"post"};t.METHODS=c;var f=function(){function e(t,n,r){o(this,e),this.url=t,this.method=n.toUpperCase(),this.options=r,this.headers=r.headers,this.async=r.async,this.data=r.data}return s(e,[{key:"send",value:function(){var e=l.default.defer(),t=new XMLHttpRequest;t.open(this.method,this.url,this.async);for(var n in this.options)"undefined"!=typeof t[n]&&(t[n]=this.options[n]);for(var r in this.headers){var i=this.headers[h];t.setRequestHeader(i.key,i.value)}return t.onload=function(){t.status>=200&&t.status<400?e.resolve(t.response):e.reject(new d("Can't XHR "+JSON.stringify(t.url),t))},t.onerror=function(){e.reject(new d("Can't XHR "+JSON.stringify(t.url)))},t.onprogress=function(t){e.notify(t.loaded/t.total)},"POST"==this.method?t.send(this.data):t.send(),e.promise}}]),e}();t.default=f;var d=function(e){function t(e,n){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.name="RequestError",this.message=e||"Can't do XHR",this.xhrObject=n}return i(t,e),t}(Error)},95:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(96),o=n(28),a=r(o),s=void 0;s=a.default.mobile?new i.MobileWorkPage:new i.WorkPage,s.run()},96:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),s=n(11),u=n(31),l=r(u),c=n(59),f=r(c),h=n(29),d=r(h),p=n(44),v=n(45),y=r(v),g=n(54),b=r(g),m=n(38),O=r(m),w=n(14),k=r(w),S=n(35),_=r(S),E=n(36),x=r(E),P=n(39),M=n(40),j=n(42),T=n(97),C=r(T),W=n(98),U=n(34),R=r(U),D=function(){function e(){i(this,e),this.videos=new C.default}return o(e,[{key:"run",value:function(){(0,a.domReady)().then(this.onReady.bind(this)),(0,a.windowReady)().then(this.onWindowReady.bind(this))}},{key:"onReady",value:function(){var e=this,t=(0,P.getShareUrl)(),n=(0,s.querySelectorAll)(".work-info__share a");new M.TwitterSharing(n[0],t),new j.FacebookSharing(n[1],t),R.default.trackExternalLinks();var r=new x.default,i=(0,k.default)();i.on("update",function(t){"opening"===t.state?(r.fix(),e.videos.stopAll(),d.default.lock()):"close"===t.state&&(r.unfix(),e.videos.start(),d.default.unlock())}),this.videos.load(),new O.default;var o=new _.default;i.on("update",function(e){"opening"===e.state||"open"===e.state?o.underPageMenu():o.underPage()}),new b.default,this.isFontSpirationCase()&&new W.Theme((0,s.querySelector)(".font-themes"))}},{key:"onWindowReady",value:function(){var e=(0,s.querySelector)(".work-cover__video");if(null!==e){var t=(0,f.default)(e,JSON.parse((0,l.default)(e,"options").options));t.load().then(function(){e.play()})}}},{key:"isFontSpirationCase",value:function(){return null!==(0,s.querySelector)(".page-fontspiration")}}]),e}();t.WorkPage=D;var L=function(){function e(){i(this,e),(0,y.default)(),p.htmlClassAdder.flush(),this.pageMenu=null}return o(e,[{key:"onDomReady",value:function(){var e=(0,P.getShareUrl)(),t=(0,s.querySelectorAll)(".work-info__share a");new M.TwitterSharing(t[0],e),new j.FacebookSharing(t[1],e),R.default.trackExternalLinks(),this.pageMenu=(0,k.default)();var n=new _.default;this.pageMenu.on("update",function(e){"opening"===e.state?d.default.lock():"closing"===e.state&&d.default.unlock(),"opening"===e.state||"open"===e.state?n.underPageMenu():n.underPage()})}},{key:"run",value:function(){(0,a.domReady)().then(this.onDomReady.bind(this))}}]),e}();t.MobileWorkPage=L},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(11),s=n(31),u=r(s),l=n(59),c=r(l),f=n(15),h=n(29),d=r(h),p=function(){function e(){i(this,e),this.videosList=(0,a.querySelectorAll)(".j-autoloaded-video"),this.videosToWatch=(0,a.querySelectorAll)(".j-start-video-in-vp"),this.videoElements=(0,a.querySelectorAll)("video"),d.default.on("update",this.onScroll.bind(this)),this.onScroll()}return o(e,[{key:"load",value:function(){var e=this.videosList.slice();for(var t in e){var n=(0,c.default)(e[t],JSON.parse((0,u.default)(e[t],"options").options));e[t].style.pointerEvents="none",n.load()}}},{key:"onScroll",value:function(){var e=this.videosToWatch;for(var t in e){var n=e[t];(0,f.isInViewPort)(n)?n.paused&&n.play():n.paused||n.pause()}}},{key:"stopAll",value:function(){var e=this.videoElements;for(var t in e)e[t].pause()}},{key:"start",value:function(){this.onScroll()}}]),e}();t.default=p,e.exports=t.default},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(4),s=r(a),u=n(31),l=r(u),c=n(11),f=n(9),h=n(16),d=n(21),p=r(d),v=n(99),y=r(v),g="/assets/img/fontspiration/themes/",b=function(){function e(t){var n=this;i(this,e),this.themeEl=t,this.frames=[],this.bigHandEl=(0,c.querySelector)(".big-hand",this.themeEl);var r=[],o=(0,c.querySelectorAll)(".font-theme",this.themeEl);for(var a in o){var u=new m(o[a]);this.frames.push(u),r.push(u.preload())}s.default.all(r).then(function(){n.run()}),p.default.on("update",this.onResize.bind(this))}return o(e,[{key:"onResize",value:function(){this.themeEl.style.width=Math.min(c.WINDOW.outerWidth,1360)+"px";var e=(0,h.width)(this.themeEl)/4;this.themeEl.style.height=3*e+"px",this.bigHandEl.style.width=e+"px",this.bigHandEl.style.height=e+"px",this.bigHandEl.style.position="absolute";for(var t in this.frames){var n=this.frames[t];n.onResize(e,t)}}},{key:"run",value:function(){var e=this;this.themeEl.classList.remove("j-not-initialized");var t=function(t){var n=e.frames[t];n.init(),(0,f.addEventListener)(n.el,"mouseover",function(){e.onMouseOver(n)}),(0,f.addEventListener)(n.el,"mouseout",function(){e.onMouseOut(n)})};for(var n in this.frames)t(n);this.onResize()}},{key:"onMouseOver",value:function(e){0!==this.bigHandEl.style.opacity&&(this.bigHandEl.style.opacity=0),e.animate()}},{key:"onMouseOut",value:function(e){e.stop()}}]),e}();t.Theme=b;var m=function(){function e(t){i(this,e),this.el=t,this.imageURLs=[],this.attrs=(0,l.default)(t),this.isLoaded=!1,this.clip=new y.default(this.attrs.fps||30),this.currentFrame=0;for(var n=Math.ceil(this.attrs.frames/30),r=1;r<=n;r++)this.imageURLs.push(g+this.attrs.film+"_"+r+".jpg");this.clip.on("update",this.update.bind(this))}return o(e,[{key:"preload",value:function(){for(var e=this,t=s.default.defer(),n=function(n){var r=new Image,i=function(){r.onabort=null,r.onerror=null,r.onload=null,e.isLoaded=!0,e.imageURLs.length==n+1&&t.resolve()};r.onabort=i,r.onerror=i,r.onload=i,r.src=e.imageURLs[n]},r=0;r<this.imageURLs.length;r++)n(r);return t.promise}},{key:"init",value:function(){for(var e=c.DOCUMENT.createDocumentFragment(),t=Math.min(c.WINDOW.outerWidth,1360)/4,n=0;n<this.imageURLs.length;n++){var r=c.DOCUMENT.createElement("div");r.style.position="absolute",r.style.width=t,r.style.height=t,r.style.opacity=0===n?1:0,r.style.backgroundSize="cover",r.style.backgroundPosition="0 0",r.style.backgroundImage="url("+this.imageURLs[n]+")",e.appendChild(r)}this.el.appendChild(e)}},{key:"onResize",value:function(e,t){this.el.style.position="absolute",this.el.style.width=e+"px",this.el.style.height=e+"px",this.el.style.top=Math.floor(t/4)*e+"px",this.el.style.left=t%4*e+"px",this.el.style.backgroundSize="cover";for(var n=(0,c.querySelectorAll)("div",this.el),r=0;r<n.length;r++){var i=n[r];i.style.width=e+"px",i.style.height=e+"px"}}},{key:"animate",value:function(){this.clip.start()}},{key:"stop",value:function(){this.clip.stop()}},{key:"update",value:function(){var e=parseInt(this.attrs.frames),t=Math.floor(this.currentFrame/30)+1,n=this.currentFrame%30,r=100/Math.min(29,e-30*(t-1))*n,i=(0,c.querySelectorAll)("div",this.el);for(var o in i)i[o].style.opacity=0;var a=(0,c.querySelector)("div:nth-child("+t+")",this.el);a.style.opacity=1,a.style.backgroundPositionY=r+"%",this.currentFrame++,this.currentFrame>e&&(this.currentFrame=this.currentFrame%e)}}]),e}();t.Frame=m},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}};n(22);var u=(n(9),n(19)),l=r(u),c=n(11),f=function(e){function t(e){i(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.stopState=!0,this.fpsInterval=1e3/e,this.nextTickTime=null}return o(t,e),a(t,[{key:"start",value:function(){this.nextTickTime=Date.now(),this.stopState=!1,this.update()}},{key:"stop",value:function(){this.stopState=!0}},{key:"update",value:function(){if(!this.stopState){c.WINDOW.requestAnimationFrame(this.update.bind(this));var e=Date.now(),t=e-this.nextTickTime;t>this.fpsInterval&&(this.nextTickTime=e-t%this.fpsInterval,this.emit("update"))}}}]),t}(l.default);t.default=f,e.exports=t.default}});