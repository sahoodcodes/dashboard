"use strict";(self.webpackChunkproject_syncfusion_dashboard=self.webpackChunkproject_syncfusion_dashboard||[]).push([[818],{2868:function(e,t,i){i.d(t,{O:function(){return f}});var l=i(9625),s=function(){var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])},e(t,i)};return function(t,i){function l(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(l.prototype=i.prototype,new l)}}(),r=function(e,t,i,l){var s,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,l);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},o="e-rtl",n="e-overlay",a="e-nav-right-arrow",c="e-nav-left-arrow",h="e-scroll-nav",d="e-scroll-device",p="e-scroll-overlay",u="e-scroll-right-overlay",v="e-scroll-left-overlay",f=function(e){function t(t,i){return e.call(this,t,i)||this}return s(t,e),t.prototype.preRender=function(){this.browser=l.AR.info.name,this.browserCheck="mozilla"===this.browser,this.isDevice=l.AR.isDevice,this.customStep=!0;var e=this.element;this.ieCheck="edge"===this.browser||"msie"===this.browser,this.initialize(),""===e.id&&(e.id=(0,l.QI)("hscroll"),this.uniqueId=!0),e.style.display="block",this.enableRtl&&e.classList.add(o)},t.prototype.render=function(){this.touchModule=new l.Xh(this.element,{scroll:this.touchHandler.bind(this),swipe:this.swipeHandler.bind(this)}),l.bi.add(this.scrollEle,"scroll",this.scrollHandler,this),this.isDevice?(this.element.classList.add(d),this.createOverlay(this.element)):this.createNavIcon(this.element),this.setScrollState()},t.prototype.setScrollState=function(){(0,l.le)(this.scrollStep)||this.scrollStep<0?(this.scrollStep=this.scrollEle.offsetWidth,this.customStep=!1):this.customStep=!0},t.prototype.initialize=function(){var e=this.createElement("div",{className:"e-hscroll-content"}),t=this.createElement("div",{className:"e-hscroll-bar"});t.setAttribute("tabindex","-1");for(var i=this.element,l=0,s=[].slice.call(i.children);l<s.length;l++){var r=s[l];e.appendChild(r)}t.appendChild(e),i.appendChild(t),t.style.overflowX="hidden",this.scrollEle=t,this.scrollItems=e},t.prototype.getPersistData=function(){return this.addOnPersist(["scrollStep"])},t.prototype.getModuleName=function(){return"hScroll"},t.prototype.destroy=function(){var t=this.element;t.style.display="",t.classList.remove("e-hscroll"),t.classList.remove(d);var i=(0,l.td)(".e-"+t.id+"_nav."+h,t),s=(0,l.td)("."+p,t);[].slice.call(s).forEach((function(e){(0,l.og)(e)}));for(var r=0,o=[].slice.call(this.scrollItems.children);r<o.length;r++){var n=o[r];t.appendChild(n)}this.uniqueId&&this.element.removeAttribute("id"),(0,l.og)(this.scrollEle),i.length>0&&((0,l.og)(i[0]),(0,l.le)(i[1])||(0,l.og)(i[1])),l.bi.remove(this.scrollEle,"scroll",this.scrollHandler),this.touchModule.destroy(),this.touchModule=null,e.prototype.destroy.call(this)},t.prototype.disable=function(e){var t=(0,l.td)(".e-scroll-nav:not(.e-overlay)",this.element);e?this.element.classList.add(n):this.element.classList.remove(n),[].slice.call(t).forEach((function(t){t.setAttribute("tabindex",e?"-1":"0")}))},t.prototype.createOverlay=function(e){var t=e.id.concat("_nav"),i=this.createElement("div",{className:p+" "+u}),l="e-"+e.id.concat("_nav e-scroll-nav e-scroll-right-nav"),s=this.createElement("div",{id:t.concat("_right"),className:l}),r=this.createElement("div",{className:"e-nav-right-arrow e-nav-arrow e-icons"});s.appendChild(r);var o=this.createElement("div",{className:p+" "+v});this.ieCheck&&s.classList.add("e-ie-align"),e.appendChild(i),e.appendChild(s),e.insertBefore(o,e.firstChild),this.eventBinding([s])},t.prototype.createNavIcon=function(e){var t=e.id.concat("_nav"),i="e-"+e.id.concat("_nav e-scroll-nav e-scroll-right-nav"),l=this.createElement("div",{id:t.concat("_right"),className:i});l.setAttribute("aria-disabled","false");var s=this.createElement("div",{className:"e-nav-right-arrow e-nav-arrow e-icons"}),r="e-"+e.id.concat("_nav e-scroll-nav e-scroll-left-nav"),o=this.createElement("div",{id:t.concat("_left"),className:r+" "+n});o.setAttribute("aria-disabled","true");var a=this.createElement("div",{className:"e-nav-left-arrow e-nav-arrow e-icons"});o.appendChild(a),l.appendChild(s),e.appendChild(l),e.insertBefore(o,e.firstChild),this.ieCheck&&(l.classList.add("e-ie-align"),o.classList.add("e-ie-align")),this.eventBinding([l,o])},t.prototype.onKeyPress=function(e){var t=this;if("Enter"===e.key){this.keyTimer=window.setTimeout((function(){t.keyTimeout=!0,t.eleScrolling(10,e.target,!0)}),100)}},t.prototype.onKeyUp=function(e){"Enter"===e.key&&(this.keyTimeout?this.keyTimeout=!1:e.target.click(),clearTimeout(this.keyTimer))},t.prototype.eventBinding=function(e){var t=this;[].slice.call(e).forEach((function(e){new l.Xh(e,{tapHold:t.tabHoldHandler.bind(t),tapHoldThreshold:500}),e.addEventListener("keydown",t.onKeyPress.bind(t)),e.addEventListener("keyup",t.onKeyUp.bind(t)),e.addEventListener("mouseup",t.repeatScroll.bind(t)),e.addEventListener("touchend",t.repeatScroll.bind(t)),e.addEventListener("contextmenu",(function(e){e.preventDefault()})),l.bi.add(e,"click",t.clickEventHandler,t)}))},t.prototype.repeatScroll=function(){clearInterval(this.timeout)},t.prototype.tabHoldHandler=function(e){var t=this,i=e.originalEvent.target;i=this.contains(i,h)?i.firstElementChild:i;this.timeout=window.setInterval((function(){t.eleScrolling(10,i,!0)}),50)},t.prototype.contains=function(e,t){return e.classList.contains(t)},t.prototype.eleScrolling=function(e,t,i){var l=this.element,s=t.classList;s.contains(h)&&(s=t.querySelector(".e-nav-arrow").classList),this.contains(l,o)&&this.browserCheck&&(e=-e),!this.contains(l,o)||this.browserCheck||this.ieCheck?s.contains(a)?this.frameScrollRequest(e,"add",i):this.frameScrollRequest(e,"",i):s.contains(c)?this.frameScrollRequest(e,"add",i):this.frameScrollRequest(e,"",i)},t.prototype.clickEventHandler=function(e){this.eleScrolling(this.scrollStep,e.target,!1)},t.prototype.swipeHandler=function(e){var t,i=this.scrollEle;t=e.velocity<=1?e.distanceX/(10*e.velocity):e.distanceX/e.velocity;var l=.5;!function s(){var r=Math.sin(l);r<=0?window.cancelAnimationFrame(r):("Left"===e.swipeDirection?i.scrollLeft+=t*r:"Right"===e.swipeDirection&&(i.scrollLeft-=t*r),l-=.5,window.requestAnimationFrame(s))}()},t.prototype.scrollUpdating=function(e,t){"add"===t?this.scrollEle.scrollLeft+=e:this.scrollEle.scrollLeft-=e},t.prototype.frameScrollRequest=function(e,t,i){var s=this;if(i)this.scrollUpdating(e,t);else{this.customStep||[].slice.call((0,l.td)("."+p,this.element)).forEach((function(t){e-=t.offsetWidth}));!function i(){var l,r;s.contains(s.element,o)&&s.browserCheck?(l=-e,r=-10):(l=e,r=10),l<10?window.cancelAnimationFrame(r):(s.scrollUpdating(r,t),e-=r,window.requestAnimationFrame(i))}()}},t.prototype.touchHandler=function(e){var t=this.scrollEle,i=e.distanceX;this.ieCheck&&this.contains(this.element,o)&&(i=-i),"Left"===e.scrollDirection?t.scrollLeft=t.scrollLeft+i:"Right"===e.scrollDirection&&(t.scrollLeft=t.scrollLeft-i)},t.prototype.arrowDisabling=function(e,t){if(this.isDevice){var i=((0,l.le)(e)?t:e).querySelector(".e-nav-arrow");(0,l.le)(e)?(0,l.s1)(i,[a],[c]):(0,l.s1)(i,[c],[a])}else e.classList.add(n),e.setAttribute("aria-disabled","true"),e.removeAttribute("tabindex"),t.classList.remove(n),t.setAttribute("aria-disabled","false"),t.setAttribute("tabindex","0");this.repeatScroll()},t.prototype.scrollHandler=function(e){var t=e.target,i=t.offsetWidth,l=(this.element,this.element.querySelector(".e-scroll-left-nav")),s=this.element.querySelector(".e-scroll-right-nav"),r=this.element.querySelector("."+v),o=this.element.querySelector("."+u),a=t.scrollLeft;if(a<=0&&(a=-a),this.isDevice&&(!this.enableRtl||this.browserCheck||this.ieCheck||(r=this.element.querySelector("."+u),o=this.element.querySelector("."+v)),r.style.width=a<40?a+"px":"40px",t.scrollWidth-Math.ceil(i+a)<40?o.style.width=t.scrollWidth-Math.ceil(i+a)+"px":o.style.width="40px"),0===a)this.arrowDisabling(l,s);else if(Math.ceil(i+a+.1)>=t.scrollWidth)this.arrowDisabling(s,l);else{var c=this.element.querySelector(".e-scroll-nav.e-overlay");c&&(c.classList.remove(n),c.setAttribute("aria-disabled","false"),c.setAttribute("tabindex","0"))}},t.prototype.onPropertyChanged=function(e,t){for(var i=0,l=Object.keys(e);i<l.length;i++){switch(l[i]){case"scrollStep":this.setScrollState();break;case"enableRtl":e.enableRtl?this.element.classList.add(o):this.element.classList.remove(o)}}},r([(0,l.Z9)(null)],t.prototype,"scrollStep",void 0),t=r([l.Zl],t)}(l.wA)},990:function(e,t,i){i.d(t,{x:function(){return f}});var l=i(9625),s=function(){var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])},e(t,i)};return function(t,i){function l(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(l.prototype=i.prototype,new l)}}(),r=function(e,t,i,l){var s,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,l);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},o="e-rtl",n="e-overlay",a="e-nav-up-arrow",c="e-nav-down-arrow",h="e-scroll-nav",d="e-scroll-device",p="e-scroll-overlay",u="e-scroll-up-overlay",v="e-scroll-down-overlay",f=function(e){function t(t,i){return e.call(this,t,i)||this}return s(t,e),t.prototype.preRender=function(){this.browser=l.AR.info.name,this.browserCheck="mozilla"===this.browser,this.isDevice=l.AR.isDevice,this.customStep=!0;var e=this.element;this.ieCheck="edge"===this.browser||"msie"===this.browser,this.initialize(),""===e.id&&(e.id=(0,l.QI)("vscroll"),this.uniqueId=!0),e.style.display="block",this.enableRtl&&e.classList.add(o)},t.prototype.render=function(){this.touchModule=new l.Xh(this.element,{scroll:this.touchHandler.bind(this),swipe:this.swipeHandler.bind(this)}),l.bi.add(this.scrollEle,"scroll",this.scrollEventHandler,this),this.isDevice?(this.element.classList.add(d),this.createOverlayElement(this.element)):this.createNavIcon(this.element),this.setScrollState(),l.bi.add(this.element,"wheel",this.wheelEventHandler,this)},t.prototype.setScrollState=function(){(0,l.le)(this.scrollStep)||this.scrollStep<0?(this.scrollStep=this.scrollEle.offsetHeight,this.customStep=!1):this.customStep=!0},t.prototype.initialize=function(){var e=(0,l.az)("div",{className:"e-vscroll-content"}),t=(0,l.az)("div",{className:"e-vscroll-bar"});t.setAttribute("tabindex","-1");for(var i=this.element,s=0,r=[].slice.call(i.children);s<r.length;s++){var o=r[s];e.appendChild(o)}t.appendChild(e),i.appendChild(t),t.style.overflow="hidden",this.scrollEle=t,this.scrollItems=e},t.prototype.getPersistData=function(){return this.addOnPersist(["scrollStep"])},t.prototype.getModuleName=function(){return"vScroll"},t.prototype.destroy=function(){var t=this.element;t.style.display="",(0,l.IV)([this.element],["e-vscroll",d]);var i=(0,l.td)(".e-"+t.id+"_nav."+h,t),s=(0,l.td)("."+p,t);[].slice.call(s).forEach((function(e){(0,l.og)(e)}));for(var r=0,o=[].slice.call(this.scrollItems.children);r<o.length;r++){var n=o[r];t.appendChild(n)}this.uniqueId&&this.element.removeAttribute("id"),(0,l.og)(this.scrollEle),i.length>0&&((0,l.og)(i[0]),(0,l.le)(i[1])||(0,l.og)(i[1])),l.bi.remove(this.scrollEle,"scroll",this.scrollEventHandler),this.touchModule.destroy(),this.touchModule=null,e.prototype.destroy.call(this)},t.prototype.disable=function(e){var t=(0,l.td)(".e-scroll-nav:not(.e-overlay)",this.element);e?this.element.classList.add(n):this.element.classList.remove(n),[].slice.call(t).forEach((function(t){t.setAttribute("tabindex",e?"-1":"0")}))},t.prototype.createOverlayElement=function(e){var t=e.id.concat("_nav"),i=(0,l.az)("div",{className:p+" "+v}),s="e-"+e.id.concat("_nav e-scroll-nav e-scroll-down-nav"),r=(0,l.az)("div",{id:t.concat("down"),className:s}),o=(0,l.az)("div",{className:"e-nav-down-arrow e-nav-arrow e-icons"});r.appendChild(o);var n=(0,l.az)("div",{className:p+" "+u});this.ieCheck&&r.classList.add("e-ie-align"),e.appendChild(i),e.appendChild(r),e.insertBefore(n,e.firstChild),this.eventBinding([r])},t.prototype.createNavIcon=function(e){var t=e.id.concat("_nav"),i="e-"+e.id.concat("_nav e-scroll-nav e-scroll-down-nav"),s=(0,l.az)("div",{id:t.concat("_down"),className:i});s.setAttribute("aria-disabled","false");var r=(0,l.az)("div",{className:"e-nav-down-arrow e-nav-arrow e-icons"}),o="e-"+e.id.concat("_nav e-scroll-nav e-scroll-up-nav"),a=(0,l.az)("div",{id:t.concat("_up"),className:o+" "+n});a.setAttribute("aria-disabled","true");var c=(0,l.az)("div",{className:"e-nav-up-arrow e-nav-arrow e-icons"});a.appendChild(c),s.appendChild(r),s.setAttribute("tabindex","0"),e.appendChild(s),e.insertBefore(a,e.firstChild),this.ieCheck&&(s.classList.add("e-ie-align"),a.classList.add("e-ie-align")),this.eventBinding([s,a])},t.prototype.onKeyPress=function(e){var t=this;if("Enter"===e.key){this.keyTimer=window.setTimeout((function(){t.keyTimeout=!0,t.eleScrolling(10,e.target,!0)}),100)}},t.prototype.onKeyUp=function(e){"Enter"===e.key&&(this.keyTimeout?this.keyTimeout=!1:e.target.click(),clearTimeout(this.keyTimer))},t.prototype.eventBinding=function(e){var t=this;[].slice.call(e).forEach((function(e){new l.Xh(e,{tapHold:t.tabHoldHandler.bind(t),tapHoldThreshold:500}),e.addEventListener("keydown",t.onKeyPress.bind(t)),e.addEventListener("keyup",t.onKeyUp.bind(t)),e.addEventListener("mouseup",t.repeatScroll.bind(t)),e.addEventListener("touchend",t.repeatScroll.bind(t)),e.addEventListener("contextmenu",(function(e){e.preventDefault()})),l.bi.add(e,"click",t.clickEventHandler,t)}))},t.prototype.repeatScroll=function(){clearInterval(this.timeout)},t.prototype.tabHoldHandler=function(e){var t=this,i=e.originalEvent.target;i=this.contains(i,h)?i.firstElementChild:i;this.timeout=window.setInterval((function(){t.eleScrolling(10,i,!0)}),50)},t.prototype.contains=function(e,t){return e.classList.contains(t)},t.prototype.eleScrolling=function(e,t,i){var l=t.classList;l.contains(h)&&(l=t.querySelector(".e-nav-arrow").classList),l.contains(c)?this.frameScrollRequest(e,"add",i):l.contains(a)&&this.frameScrollRequest(e,"",i)},t.prototype.clickEventHandler=function(e){this.eleScrolling(this.scrollStep,e.target,!1)},t.prototype.wheelEventHandler=function(e){e.preventDefault(),this.frameScrollRequest(this.scrollStep,e.deltaY>0?"add":"",!1)},t.prototype.swipeHandler=function(e){var t,i=this.scrollEle;t=e.velocity<=1?e.distanceY/(10*e.velocity):e.distanceY/e.velocity;var l=.5;!function s(){var r=Math.sin(l);r<=0?window.cancelAnimationFrame(r):("Up"===e.swipeDirection?i.scrollTop+=t*r:"Down"===e.swipeDirection&&(i.scrollTop-=t*r),l-=.02,window.requestAnimationFrame(s))}()},t.prototype.scrollUpdating=function(e,t){"add"===t?this.scrollEle.scrollTop+=e:this.scrollEle.scrollTop-=e},t.prototype.frameScrollRequest=function(e,t,i){var s=this;if(i)this.scrollUpdating(e,t);else{this.customStep||[].slice.call((0,l.td)("."+p,this.element)).forEach((function(t){e-=t.offsetHeight}));!function i(){e<10?window.cancelAnimationFrame(10):(s.scrollUpdating(10,t),e-=10,window.requestAnimationFrame(i))}()}},t.prototype.touchHandler=function(e){var t=this.scrollEle,i=e.distanceY;"Up"===e.scrollDirection?t.scrollTop=t.scrollTop+i:"Down"===e.scrollDirection&&(t.scrollTop=t.scrollTop-i)},t.prototype.arrowDisabling=function(e,t){if(this.isDevice){var i=((0,l.le)(e)?t:e).querySelector(".e-nav-arrow");(0,l.le)(e)?(0,l.s1)(i,[c],[a]):(0,l.s1)(i,[a],[c])}else e.classList.add(n),e.setAttribute("aria-disabled","true"),e.removeAttribute("tabindex"),t.classList.remove(n),t.setAttribute("aria-disabled","false"),t.setAttribute("tabindex","0");this.repeatScroll()},t.prototype.scrollEventHandler=function(e){var t=e.target,i=t.offsetHeight,l=this.element.querySelector(".e-scroll-up-nav"),s=this.element.querySelector(".e-scroll-down-nav"),r=this.element.querySelector("."+u),o=this.element.querySelector("."+v),a=t.scrollTop;if(a<=0&&(a=-a),this.isDevice&&(r.style.height=a<40?a+"px":"40px",t.scrollHeight-Math.ceil(i+a)<40?o.style.height=t.scrollHeight-Math.ceil(i+a)+"px":o.style.height="40px"),0===a)this.arrowDisabling(l,s);else if(Math.ceil(i+a+.1)>=t.scrollHeight)this.arrowDisabling(s,l);else{var c=this.element.querySelector(".e-scroll-nav.e-overlay");c&&(c.classList.remove(n),c.setAttribute("aria-disabled","false"),c.setAttribute("tabindex","0"))}},t.prototype.onPropertyChanged=function(e,t){for(var i=0,l=Object.keys(e);i<l.length;i++){switch(l[i]){case"scrollStep":this.setScrollState();break;case"enableRtl":e.enableRtl?this.element.classList.add(o):this.element.classList.remove(o)}}},r([(0,l.Z9)(null)],t.prototype,"scrollStep",void 0),t=r([l.Zl],t)}(l.wA)}}]);
//# sourceMappingURL=818.d8a7a5d7.chunk.js.map