(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[1643],{61643:(S,O,f)=>{"use strict";f.d(O,{Q:()=>M,r:()=>x});var s=f(94650),g=f(82174);const k=["outerWrapper"],y=["viewContainer"],z=["*"];let M=(()=>{class l{constructor(r,h,_,w){this._marker=r,this._wrapper=h,this._manager=_,this._loader=w,this.isOpen=!1,this.isOpenChange=new s.vpe,this.placement="top",this.maxWidth=200,this.maxHeight=200,this.openOnMarkerClick=!0,this.closeOnMapClick=!0,this.closeWhenOthersOpen=!1,this.showCloseButton=!0,this.panOnOpen=!0,this.beforeOpen=new s.vpe,this.afterClose=new s.vpe,this._snazzyInfoWindowInitialized=null}ngOnChanges(r){null!=this._nativeSnazzyInfoWindow&&("isOpen"in r&&this.isOpen?this._openInfoWindow():"isOpen"in r&&!this.isOpen&&this._closeInfoWindow(),("latitude"in r||"longitude"in r)&&null==this._marker&&this._updatePosition())}ngAfterViewInit(){const r=null!=this._manager?this._manager.getNativeMarker(this._marker):null;this._snazzyInfoWindowInitialized=this._loader.load().then(()=>f(79378)).then(h=>Promise.all([h,r,this._wrapper.getNativeMap()])).then(h=>{const _={map:h[2],content:"",placement:this.placement,maxWidth:this.maxWidth,maxHeight:this.maxHeight,backgroundColor:this.backgroundColor,padding:this.padding,border:this.border,borderRadius:this.borderRadius,fontColor:this.fontColor,pointer:this.pointer,shadow:this.shadow,closeOnMapClick:this.closeOnMapClick,openOnMarkerClick:this.openOnMarkerClick,closeWhenOthersOpen:this.closeWhenOthersOpen,showCloseButton:this.showCloseButton,panOnOpen:this.panOnOpen,wrapperClass:this.wrapperClass,callbacks:{beforeOpen:()=>{this._createViewContent(),this.beforeOpen.emit()},afterOpen:()=>{this.isOpenChange.emit(this.openStatus())},afterClose:()=>{this.afterClose.emit(),this.isOpenChange.emit(this.openStatus())}}};null!=h[1]?_.marker=h[1]:_.position={lat:this.latitude,lng:this.longitude},this._nativeSnazzyInfoWindow=new h[0](_)}),this._snazzyInfoWindowInitialized.then(()=>{this.isOpen&&this._openInfoWindow()})}_openInfoWindow(){this._snazzyInfoWindowInitialized.then(()=>{this._createViewContent(),this._nativeSnazzyInfoWindow.open()})}_closeInfoWindow(){this._snazzyInfoWindowInitialized.then(()=>{this._nativeSnazzyInfoWindow.close()})}_createViewContent(){if(1===this._viewContainerRef.length)return;const r=this._viewContainerRef.createEmbeddedView(this._templateRef);this._nativeSnazzyInfoWindow.setContent(this._outerWrapper.nativeElement),setTimeout(()=>{r.detectChanges()})}_updatePosition(){this._nativeSnazzyInfoWindow.setPosition({lat:this.latitude,lng:this.longitude})}openStatus(){return this._nativeSnazzyInfoWindow&&this._nativeSnazzyInfoWindow.isOpen()}ngOnDestroy(){this._nativeSnazzyInfoWindow&&this._nativeSnazzyInfoWindow.destroy()}}return l.\u0275fac=function(r){return new(r||l)(s.Y36(g.pt,13),s.Y36(g.Hh),s.Y36(g.xU),s.Y36(g.W7))},l.\u0275cmp=s.Xpm({type:l,selectors:[["agm-snazzy-info-window"]],contentQueries:function(r,h,_){if(1&r&&s.Suo(_,s.Rgc,5),2&r){let w;s.iGM(w=s.CRH())&&(h._templateRef=w.first)}},viewQuery:function(r,h){if(1&r&&(s.Gf(k,5,s.SBq),s.Gf(y,5,s.s_b)),2&r){let _;s.iGM(_=s.CRH())&&(h._outerWrapper=_.first),s.iGM(_=s.CRH())&&(h._viewContainerRef=_.first)}},inputs:{isOpen:"isOpen",placement:"placement",maxWidth:"maxWidth",maxHeight:"maxHeight",openOnMarkerClick:"openOnMarkerClick",closeOnMapClick:"closeOnMapClick",closeWhenOthersOpen:"closeWhenOthersOpen",showCloseButton:"showCloseButton",panOnOpen:"panOnOpen",latitude:"latitude",longitude:"longitude",backgroundColor:"backgroundColor",padding:"padding",border:"border",borderRadius:"borderRadius",fontColor:"fontColor",fontSize:"fontSize",pointer:"pointer",shadow:"shadow",wrapperClass:"wrapperClass"},outputs:{isOpenChange:"isOpenChange",beforeOpen:"beforeOpen",afterClose:"afterClose"},features:[s.TTD],ngContentSelectors:z,decls:5,vars:0,consts:[["outerWrapper",""],["viewContainer",""]],template:function(r,h){1&r&&(s.F$t(),s.TgZ(0,"div",null,0),s._UZ(2,"div",null,1),s.qZA(),s.Hsn(4))},encapsulation:2}),l})(),x=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({}),l})()},79378:function(S,O){var f,g;f=function(k,y){"use strict";function M(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?n:o}function l(n,o){n&&o&&Object.keys(o).forEach(function(e){n[e]=o[e]})}function r(n,o){var e=/^(-{0,1}\.{0,1}\d+(\.\d+)?)[\s|\.]*(\w*)$/;if(n&&e.test(n)){var t=e.exec(n);return{value:1*t[1],units:t[3]||"px",original:n}}return o?r(o):{original:o}}function h(n,o){if(n){for(;n.firstChild;)n.removeChild(n.firstChild);o&&("string"==typeof o?n.innerHTML=o:n.appendChild(o))}}function w(n){return n.charAt(0).toUpperCase()+n.slice(1)}function E(n){if(null!=n){if(n instanceof google.maps.LatLng)return n;if(void 0!==n.lat&&void 0!==n.lng)return new google.maps.LatLng(n)}return null}Object.defineProperty(y,"__esModule",{value:!0});var R=function(){function n(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}return function(o,e,t){return e&&n(o.prototype,e),t&&n(o,t),o}}(),D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b_h="0px",b_v="3px",b_blur="6px",b_spread="0px",b_color="#000",W={placement:"top",pointer:!0,openOnMarkerClick:!0,closeOnMapClick:!0,closeWhenOthersOpen:!1,showCloseButton:!0,panOnOpen:!0,edgeOffset:{top:20,right:20,bottom:20,left:20}},H=function(n){function o(e){!function z(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);var t=M(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));if(typeof google>"u")return console.warn("Snazzy Info Window: Google Maps is not defined!"),M(t);t._html=null,t._opts=function v(n){var o={};return l(o,W),l(o,n),Object.keys(W).forEach(function(e){var t=W[e];if("object"===(void 0===t?"undefined":D(t))){var i={};l(i,t),l(i,o[e]),o[e]=i}}),o}(e),t._callbacks=t._opts.callbacks||{},t._marker=t._opts.marker,t._map=t._opts.map,t._position=E(t._opts.position),t._isOpen=!1,t._listeners=[],t._marker&&t._opts.openOnMarkerClick&&t.trackListener(google.maps.event.addListener(t._marker,"click",function(){t.getMap()||t.open()}),!0),t._position&&!t._opts.offset&&(t._opts.offset={top:"0px",left:"0px"});var i=e.placement||t._opts.position;return("string"==typeof i||i instanceof String)&&(i=i.toLowerCase()),t._opts.placement="top"!==i&&"bottom"!==i&&"left"!==i&&"right"!==i?W.placement:i,null==(i=t._opts.position)||"string"==typeof i||i instanceof String||(t._opts.position=i),void 0!==t._opts.border&&!0!==t._opts.border||(t._opts.border={}),void 0===t._opts.pointer&&(t._opts.pointer=W.pointer),void 0!==t._opts.shadow&&!0!==t._opts.shadow||(t._opts.shadow={}),t}return function x(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}(o,typeof google<"u"?google.maps.OverlayView:function(){}),R(o,[{key:"activateCallback",value:function(e){var t=this._callbacks[e];return t?t.apply(this):void 0}},{key:"trackListener",value:function(e,t){this._listeners.push({listener:e,persistent:t})}},{key:"clearListeners",value:function(e){this._listeners&&(this._listeners.forEach(function(t){!e&&t.persistent||(google.maps.event.removeListener(t.listener),t.listener=null)}),this._listeners=this._listeners.filter(function(t){return null!=t.listener}))}},{key:"isOpen",value:function(){return this._isOpen}},{key:"open",value:function(){var e=this.activateCallback("beforeOpen");(void 0===e||e)&&(this._marker?this.setMap(this._marker.getMap()):this._map&&this._position&&this.setMap(this._map))}},{key:"close",value:function(){var e=this.activateCallback("beforeClose");(void 0===e||e)&&(this.clearListeners(),this.setMap(null))}},{key:"destroy",value:function(){this.getMap()&&this.setMap(null),this.clearListeners(!0)}},{key:"setContent",value:function(e){this._opts.content=e,this._html&&this._html.content&&h(this._html.content,e)}},{key:"setPosition",value:function(e){this._position=E(e),this._isOpen&&this._position&&(this.draw(),this.resize(),this.reposition())}},{key:"setWrapperClass",value:function(e){if(this._html&&this._html.wrapper){var t=this._html.wrapper;t.className="si-wrapper-"+this._opts.placement,this._opts.border&&(t.className+=" si-has-border"),e&&(t.className+=" "+e)}this._opts.wrapperClass=e}},{key:"getWrapper",value:function(){return this._html?this._html.wrapper:null}},{key:"draw",value:function(){if(this.getMap()&&this._html&&(this._marker||this._position)){var e=this._opts.offset;e&&(e.left&&(this._html.wrapper.style.marginLeft=e.left),e.top&&(this._html.wrapper.style.marginTop=e.top));var t=this._opts.backgroundColor;if(t&&(this._html.contentWrapper.style.backgroundColor=t,this._opts.pointer&&(this._html.pointerBg.style["border"+w(this._opts.placement)+"Color"]=t)),this._opts.padding&&(this._html.contentWrapper.style.padding=this._opts.padding,this._opts.shadow&&(this._html.shadowFrame.style.padding=this._opts.padding)),this._opts.borderRadius&&(this._html.contentWrapper.style.borderRadius=this._opts.borderRadius,this._opts.shadow&&(this._html.shadowFrame.style.borderRadius=this._opts.borderRadius)),this._opts.fontSize&&(this._html.wrapper.style.fontSize=this._opts.fontSize),this._opts.fontColor&&(this._html.contentWrapper.style.color=this._opts.fontColor),this._opts.pointer&&!0!==this._opts.pointer&&(this._opts.shadow&&(this._html.shadowPointer.style.width=this._opts.pointer,this._html.shadowPointer.style.height=this._opts.pointer),this._html.pointerBorder&&(this._html.pointerBorder.style.borderWidth=this._opts.pointer),this._html.pointerBg.style.borderWidth=this._opts.pointer),this._opts.border){var i=0;if(void 0!==this._opts.border.width&&(i=r(this._opts.border.width,"0px"),this._html.contentWrapper.style.borderWidth=i.value+i.units),i=r((i=Math.round((this._html.contentWrapper.offsetWidth-this._html.contentWrapper.clientWidth)/2))+"px","0px"),this._opts.pointer){var u=Math.min(this._html.pointerBorder.offsetHeight,this._html.pointerBorder.offsetWidth);u=r(u+"px","0px");var m=Math.round(i.value*(1.41421356237-1));m=Math.min(m,u.value),this._html.pointerBg.style.borderWidth=u.value-m+u.units;var a=w(function _(n){return"top"===n?"bottom":"bottom"===n?"top":"left"===n?"right":"right"===n?"left":n}(this._opts.placement));this._html.pointerBg.style["margin"+a]=m+i.units,this._html.pointerBg.style[this._opts.placement]=-i.value+i.units}var d=this._opts.border.color;d&&(this._html.contentWrapper.style.borderColor=d,this._html.pointerBorder&&(this._html.pointerBorder.style["border"+w(this._opts.placement)+"Color"]=d))}if(this._opts.shadow){var p=this._opts.shadow,c=function(L){var B=p[L];return void 0!==B&&null!=B};if(c("h")||c("v")||c("blur")||c("spread")||c("color")){var C=r(p.h,b_h),I=r(p.v,b_v),T=r(p.blur,b_blur),j=r(p.spread,b_spread),F=p.color||b_color,A=function(L,B){return L+" "+B+" "+T.original+" "+j.original+" "+F};this._html.shadowFrame.style.boxShadow=A(C.original,I.original),this._html.shadowPointerInner&&(this._html.shadowPointerInner.style.boxShadow=A(.7071067811865474*(C.value-I.value)+C.units,.7071067811865474*(C.value+I.value)+I.units))}this._opts.shadow.opacity&&(this._html.shadowWrapper.style.opacity=this._opts.shadow.opacity)}var P=this.getProjection().fromLatLngToDivPixel(this._position||this._marker.position);P&&(this._html.floatWrapper.style.top=Math.floor(P.y)+"px",this._html.floatWrapper.style.left=Math.floor(P.x)+"px"),this._isOpen||(this._isOpen=!0,this.resize(),this.reposition(),this.activateCallback("afterOpen"),google.maps.event.trigger(this.getMap(),"snazzy-info-window-opened",this))}}},{key:"onAdd",value:function(){var e=this;if(!this._html){var t=function(a,d){if(a&&d)for(var p=0;p<d.length;p++){var c=d[p];c&&(a.className&&(a.className+=" "),a.className+="si-"+c)}},i=function(){for(var a=arguments.length,d=Array(a),p=0;p<a;p++)d[p]=arguments[p];var c=document.createElement("div");return t(c,d),c};if(this._html={},this._html.wrapper=i(),this.setWrapperClass(this._opts.wrapperClass),this._opts.shadow&&(this._html.shadowWrapper=i("shadow-wrapper-"+this._opts.placement),this._html.shadowFrame=i("frame","shadow-frame"),this._html.shadowWrapper.appendChild(this._html.shadowFrame),this._opts.pointer&&(this._html.shadowPointer=i("shadow-pointer-"+this._opts.placement),this._html.shadowPointerInner=i("shadow-inner-pointer-"+this._opts.placement),this._html.shadowPointer.appendChild(this._html.shadowPointerInner),this._html.shadowWrapper.appendChild(this._html.shadowPointer)),this._html.wrapper.appendChild(this._html.shadowWrapper)),this._html.contentWrapper=i("frame","content-wrapper"),this._html.content=i("content"),this._opts.content&&h(this._html.content,this._opts.content),this._opts.showCloseButton){if(this._opts.closeButtonMarkup){var u=document.createElement("div");h(u,this._opts.closeButtonMarkup),this._html.closeButton=u.firstChild}else this._html.closeButton=document.createElement("button"),this._html.closeButton.setAttribute("type","button"),this._html.closeButton.innerHTML="&#215;",t(this._html.closeButton,["close-button"]);this._html.contentWrapper.appendChild(this._html.closeButton)}this._html.contentWrapper.appendChild(this._html.content),this._html.wrapper.appendChild(this._html.contentWrapper),this._opts.pointer&&(this._opts.border&&(this._html.pointerBorder=i("pointer-"+this._opts.placement,"pointer-border-"+this._opts.placement),this._html.wrapper.appendChild(this._html.pointerBorder)),this._html.pointerBg=i("pointer-"+this._opts.placement,"pointer-bg-"+this._opts.placement),this._html.wrapper.appendChild(this._html.pointerBg)),this._html.floatWrapper=i("float-wrapper"),this._html.floatWrapper.appendChild(this._html.wrapper),this.getPanes().floatPane.appendChild(this._html.floatWrapper);var m=this.getMap();this.clearListeners(),this._opts.closeOnMapClick&&this.trackListener(google.maps.event.addListener(m,"click",function(){e.close()})),this._opts.closeWhenOthersOpen&&this.trackListener(google.maps.event.addListener(m,"snazzy-info-window-opened",function(a){e!==a&&e.close()})),this._previousWidth=null,this._previousHeight=null,this.trackListener(google.maps.event.addListener(m,"bounds_changed",function(){var a=m.getDiv(),d=a.offsetWidth,p=a.offsetHeight,c=e._previousWidth,C=e._previousHeight;null!==c&&null!==C&&c===d&&C===p||(e._previousWidth=d,e._previousHeight=p,e.resize())})),this._marker&&this.trackListener(google.maps.event.addListener(this._marker,"position_changed",function(){e.draw()})),this._opts.showCloseButton&&!this._opts.closeButtonMarkup&&this.trackListener(google.maps.event.addDomListener(this._html.closeButton,"click",function(a){a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation(),e.close()})),["click","dblclick","rightclick","contextmenu","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup","touchstart","touchend","touchmove","wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"].forEach(function(a){e.trackListener(google.maps.event.addDomListener(e._html.wrapper,a,function(d){d.cancelBubble=!0,d.stopPropagation&&d.stopPropagation()}))}),this.activateCallback("open")}}},{key:"onRemove",value:function(){if(this.activateCallback("close"),this._html){var e=this._html.floatWrapper.parentElement;e&&e.removeChild(this._html.floatWrapper),this._html=null}this._isOpen=!1,this.activateCallback("afterClose")}},{key:"getMapInnerBounds",value:function(){var e=this.getMap().getDiv().getBoundingClientRect(),t={top:e.top+this._opts.edgeOffset.top,right:e.right-this._opts.edgeOffset.right,bottom:e.bottom-this._opts.edgeOffset.bottom,left:e.left+this._opts.edgeOffset.left};return t.width=t.right-t.left,t.height=t.bottom-t.top,t}},{key:"reposition",value:function(){if(this._opts.panOnOpen&&this._html){var e=this.getMapInnerBounds(),t=this._html.wrapper.getBoundingClientRect(),i=0,u=0;e.left>=t.left?i=t.left-e.left:e.right<=t.right&&(i=t.left-(e.right-t.width)),e.top>=t.top?u=t.top-e.top:e.bottom<=t.bottom&&(u=t.top-(e.bottom-t.height)),0===i&&0===u||this.getMap().panBy(i,u)}}},{key:"resize",value:function(){if(this._html){var e=this.getMapInnerBounds(),t=e.width;void 0!==this._opts.maxWidth&&(t=Math.min(t,this._opts.maxWidth)),this._html.content.style.maxWidth=(t-=this._html.wrapper.offsetWidth-this._html.content.offsetWidth)+"px";var i=e.height;void 0!==this._opts.maxHeight&&(i=Math.min(i,this._opts.maxHeight)),this._html.content.style.maxHeight=(i-=this._html.wrapper.offsetHeight-this._html.content.offsetHeight)+"px"}}}]),o}();y.default=H,k.exports=y.default},void 0!==(g=f.apply(O,[S,O]))&&(S.exports=g)}}]);