(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[9226],{76916:(A,x,l)=>{"use strict";l.d(x,{G:()=>i});var m=l(34793),v=l(92198),b=l(38014),t=l(94650),g=l(89383),f=l(60097),c=l(36895);function E(a,d){if(1&a&&(t.TgZ(0,"a",14)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.label)," ")}}function h(a,d){if(1&a&&(t.TgZ(0,"a",16)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&a){const e=t.oxw(),r=e.$implicit,s=e.last,u=t.oxw(2);t.Q6J("routerLink",r.url)("queryParams",s&&u.route.snapshot.queryParams),t.xp6(2),t.hij(" ",t.lcZ(3,3,r.label)," ")}}function n(a,d){if(1&a&&(t.ynx(0),t.TgZ(1,"li",10)(2,"span"),t._uU(3," > "),t.qZA()(),t.TgZ(4,"li",11),t.YNc(5,E,4,3,"a",12),t.YNc(6,h,4,5,"a",13),t.qZA(),t.BQk()),2&a){const e=d.first;t.xp6(5),t.Q6J("ngIf",e),t.xp6(1),t.Q6J("ngIf",!e)}}function o(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"h3",4),t.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.jumpHome())}),t._UZ(7,"i",8),t.qZA()(),t.YNc(8,n,7,2,"ng-container",9),t.qZA()(),t.TgZ(9,"div"),t.Hsn(10),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(3),t.Q6J("innerHTML",e.title,t.oJD),t.xp6(5),t.Q6J("ngForOf",e.breads)}}const _=["*"];let i=(()=>{class a{constructor(e,r,s,u){this.router=e,this.route=r,this.translate=s,this._carparkService=u,this.breads=[],this.loginUser=""}ngOnInit(){let e=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=e,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(s=>{this.label=s}),this.router.events.pipe((0,v.h)(s=>s instanceof m.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(e,r=[""],s=[]){const u=e.snapshot.url[0]&&e.snapshot.url[0].path,p=[...r,u],T={...this.extractBreadcrumb(e),url:p},B=u&&T.label?[...s,T]:s;return this.title=T.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===T.label&&(this.title="My Vehicle(s)"),e.firstChild?u?this.buildBreadCrumb(e.firstChild,p,B):this.buildBreadCrumb(e.firstChild,r,s):(this.translate.get(this.title).subscribe(C=>{this.title=C}),B)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(e){return e.snapshot.data.breadcrumb instanceof Function?e.snapshot.data.breadcrumb(e):e.snapshot.data.breadcrumb}jumpHome(){let e=JSON.parse(localStorage.getItem("user-roles"))[0]??"";this.router.navigate(e.length?[b.gpL[e]]:["/"])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(m.F0),t.Y36(m.gz),t.Y36(g.sK),t.Y36(f.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-title-bar"]],ngContentSelectors:_,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],[1,"m-nav__link","m-nav__link--icon",3,"click"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(e,r){1&e&&(t.F$t(),t.YNc(0,o,11,2,"div",0)),2&e&&t.Q6J("ngIf","ROLE_TPO_PARTNER"!==r.loginUser)},dependencies:[c.sg,c.O5,m.yS,g.X$],encapsulation:2}),a})()},94327:function(A,x){var v;void 0!==(v=function(){"use strict";function t(n,o,_){var i=new XMLHttpRequest;i.open("GET",n),i.responseType="blob",i.onload=function(){h(i.response,o,_)},i.onerror=function(){console.error("could not download file")},i.send()}function g(n){var o=new XMLHttpRequest;o.open("HEAD",n,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function f(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(o)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,E=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!E?function(n,o,_){var i=c.URL||c.webkitURL,a=document.createElement("a");a.download=o=o||n.name||"download",a.rel="noopener","string"==typeof n?(a.href=n,a.origin===location.origin?f(a):g(a.href)?t(n,o,_):f(a,a.target="_blank")):(a.href=i.createObjectURL(n),setTimeout(function(){i.revokeObjectURL(a.href)},4e4),setTimeout(function(){f(a)},0))}:"msSaveOrOpenBlob"in navigator?function(n,o,_){if(o=o||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function b(n,o){return typeof o>"u"?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,_),o);else if(g(n))t(n,o,_);else{var i=document.createElement("a");i.href=n,i.target="_blank",setTimeout(function(){f(i)})}}:function(n,o,_,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof n)return t(n,o,_);var a="application/octet-stream"===n.type,d=/constructor/i.test(c.HTMLElement)||c.safari,e=/CriOS\/[\d]+/.test(navigator.userAgent);if((e||a&&d||E)&&typeof FileReader<"u"){var r=new FileReader;r.onloadend=function(){var p=r.result;p=e?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=p:location=p,i=null},r.readAsDataURL(n)}else{var s=c.URL||c.webkitURL,u=s.createObjectURL(n);i?i.location=u:location.href=u,i=null,setTimeout(function(){s.revokeObjectURL(u)},4e4)}});c.saveAs=h.saveAs=h,A.exports=h}.apply(x,[]))&&(A.exports=v)}}]);