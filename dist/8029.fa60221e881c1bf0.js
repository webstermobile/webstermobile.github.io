(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[8029,9226],{80601:(P,M,s)=>{"use strict";s.d(M,{N:()=>g});var E=s(3927),d=s(86181),p=s(27221),t=s(94650),f=s(80529),h=s(28555),u=s(91599);let g=(()=>{class m extends E.su{constructor(r,l,n){super(r,l),this.http=r,this.store=l,this.modelName="ParkingMemberService",this.handleError=n.createHandleError(`${this.modelName}Service`)}getParkingMember(r,l){const n=this.getUrl((0,d.U8)("carpark/api/parking-members-page",{...r,...(0,d.jq)(l)}));return this.get(n).pipe((0,p.K)(this.handleError(`${this.modelName}Filter`,{})))}getParkingMemberItems(r,l,n){const o=this.getUrl((0,d.U8)(`carpark/api/parking-members/${r}/items-page`,{...l,...(0,d.jq)(n)}));return this.get(o).pipe((0,p.K)(this.handleError(`${this.modelName}Filter`,{})))}createParkingMember(r){const l=this.getUrl("carpark/api/parking-members");return this.post(l,r)}addParkingMemberItem(r,l){const n=this.getUrl(`carpark/api/parking-members/${l}`);return this.post(n,r)}removeParkingMemberItem(r,l){const n=this.getUrl(`carpark/api/parking-members/${r}/items/remove/${l}`);return this.post(n)}getDriverCode(r){const l=this.getUrl(`carpark/api/drivers/${r}/driverCode`);return this.get(l)}getAllvehicle(){const r=this.getUrl("carpark/api/vehicle/get-vehicles");return this.get(r)}getZoneCodeList(){const r=this.getUrl("carpark/api/zone-polygons");return this.get(r)}}return m.\u0275fac=function(r){return new(r||m)(t.LFG(f.eN),t.LFG(h.yh),t.LFG(u.k))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac}),m})()},4666:(P,M,s)=>{"use strict";s.d(M,{p:()=>l}),s(38014);var d=s(3927),p=s(86181),t=s(27221),f=s(66708),h=s(94650),u=s(60097),g=s(93764),m=s(80529),a=s(28555),r=s(91599);let l=(()=>{class n extends d.su{constructor(i,e,c,_,v){super(c,_),this.carparkService=i,this.condoService=e,this.http=c,this.store=_,this.modelName="Transaction",this.handleError=v.createHandleError(`${this.modelName}Service`)}ngOnInit(){}handleDynamicUrl(){const i=JSON.parse(localStorage.getItem("user")).login;this.baseUrl=this.carparkService.isMotorist()&&f.Z.isNotNull(i)?`carpark/api/drivers/${i}/transactions`:this.condoService.isCondoOwner()?"carpark/api/working-sessions/transactions":"carpark/api/car-parks/transactions"}filterModel(i,e){return this.handleDynamicUrl(),super.filterModel(i,e).map(c=>c.data?c:{data:[],pagination:(0,p.f$)()})}fetchAbnormalTransactions(i,e){const c=(0,p.U8)("carpark/api/car-parks/transactions/abnormal",{...i,...(0,p.jq)(e)});return this.get(this.getUrl(c)).map(d.O7)}fetchAbnormalTransaction(i){return this.get(this.getUrl(`carpark/api/parking-transactions/${i}`))}verifyAbnormalTransaction(i){return this.post(this.getUrl(`carpark/api/parking-transactions/${i.id}/update`),i)}filterByVehicle(i,e){const c=this.getUrl((0,p.U8)(`carpark/api/parking-transactions/plateNo/${i}`,{...(0,p.jq)(e)}));return this.get(c).pipe((0,t.K)(this.handleError(`${this.modelName}Filter`,{}))).map(_=>Array.isArray(_)?(0,d.eC)(_):(0,d.O7)(_))}createModel(i){const e=this.getUrl("carpark/api/parking-transactions-entry");return this.post(e,i)}closeTransactions(i){const e=this.getUrl(`carpark/api/close/working-sessions/${i}`);return this.put(e,null)}getFile(i){const e=this.getUrl(`carpark/api/printTransactionReceipt/pdf/parking_transaction/${i}`);return this.get(e,{responseType:"blob"})}findIndentByPage(i,e){const c=this.getUrl(`scp-app-ordermanagement/chargepile/findIndentByPage/${e.rowsPerPage}/${e.page}`);return this.post(c,i)}exportExcellist(i,e){const c=this.getUrl("scp-app-ordermanagement/chargepile/exportFindIndent");return this.post(c,i,{responseType:"blob"})}exportExcelDetail(i,e){const c=this.getUrl("scp-app-ordermanagement/chargepile/export/detail");return this.post(c,i,{responseType:"blob"})}exportCondoOwnerExcel(i){const e=(0,p.U8)("carpark/api/working-sessions/exportParkingTransaction",{...i});return this.get(this.getUrl(e),{responseType:"blob"})}}return n.\u0275fac=function(i){return new(i||n)(h.LFG(u.x),h.LFG(g.p),h.LFG(m.eN),h.LFG(a.yh),h.LFG(r.k))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac}),n})()},98062:(P,M,s)=>{"use strict";s.d(M,{I:()=>u});var E=s(3927),d=s(86181),p=s(94650),t=s(80529),f=s(28555),h=s(91599);let u=(()=>{class g extends E.su{constructor(a,r,l){super(a,r),this.http=a,this.store=r,this.modelName="VisitorDisplays",this.baseUrl="carpark/api/condo",this.handleError=l.createHandleError(`${this.modelName}Service`)}askTableList(a,r,l){const n=this.getUrl((0,d.U8)("carpark/api/condo/queryVisitor",{...r,...(0,d.jq)(l)}));return this.post(n,a)}exportCondo(a){const r=this.getUrl("carpark/api/condo/export");return this.post(r,a,{responseType:"blob"})}}return g.\u0275fac=function(a){return new(a||g)(p.LFG(t.eN),p.LFG(f.yh),p.LFG(h.k))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac}),g})()},76916:(P,M,s)=>{"use strict";s.d(M,{G:()=>n});var E=s(34793),d=s(92198),p=s(38014),t=s(94650),f=s(89383),h=s(60097),u=s(36895);function g(o,i){if(1&o&&(t.TgZ(0,"a",14)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.label)," ")}}function m(o,i){if(1&o&&(t.TgZ(0,"a",16)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o){const e=t.oxw(),c=e.$implicit,_=e.last,v=t.oxw(2);t.Q6J("routerLink",c.url)("queryParams",_&&v.route.snapshot.queryParams),t.xp6(2),t.hij(" ",t.lcZ(3,3,c.label)," ")}}function a(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"li",10)(2,"span"),t._uU(3," > "),t.qZA()(),t.TgZ(4,"li",11),t.YNc(5,g,4,3,"a",12),t.YNc(6,m,4,5,"a",13),t.qZA(),t.BQk()),2&o){const e=i.first;t.xp6(5),t.Q6J("ngIf",e),t.xp6(1),t.Q6J("ngIf",!e)}}function r(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"h3",4),t.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),t.NdJ("click",function(){t.CHM(e);const _=t.oxw();return t.KtG(_.jumpHome())}),t._UZ(7,"i",8),t.qZA()(),t.YNc(8,a,7,2,"ng-container",9),t.qZA()(),t.TgZ(9,"div"),t.Hsn(10),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("innerHTML",e.title,t.oJD),t.xp6(5),t.Q6J("ngForOf",e.breads)}}const l=["*"];let n=(()=>{class o{constructor(e,c,_,v){this.router=e,this.route=c,this.translate=_,this._carparkService=v,this.breads=[],this.loginUser=""}ngOnInit(){let e=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=e,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(_=>{this.label=_}),this.router.events.pipe((0,d.h)(_=>_ instanceof E.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(e,c=[""],_=[]){const v=e.snapshot.url[0]&&e.snapshot.url[0].path,O=[...c,v],T={...this.extractBreadcrumb(e),url:O},U=v&&T.label?[..._,T]:_;return this.title=T.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===T.label&&(this.title="My Vehicle(s)"),e.firstChild?v?this.buildBreadCrumb(e.firstChild,O,U):this.buildBreadCrumb(e.firstChild,c,_):(this.translate.get(this.title).subscribe(D=>{this.title=D}),U)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(e){return e.snapshot.data.breadcrumb instanceof Function?e.snapshot.data.breadcrumb(e):e.snapshot.data.breadcrumb}jumpHome(){let e=JSON.parse(localStorage.getItem("user-roles"))[0]??"";this.router.navigate(e.length?[p.gpL[e]]:["/"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(E.F0),t.Y36(E.gz),t.Y36(f.sK),t.Y36(h.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-title-bar"]],ngContentSelectors:l,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],[1,"m-nav__link","m-nav__link--icon",3,"click"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(e,c){1&e&&(t.F$t(),t.YNc(0,r,11,2,"div",0)),2&e&&t.Q6J("ngIf","ROLE_TPO_PARTNER"!==c.loginUser)},dependencies:[u.sg,u.O5,E.yS,f.X$],encapsulation:2}),o})()},94327:function(P,M){var d;void 0!==(d=function(){"use strict";function t(a,r,l){var n=new XMLHttpRequest;n.open("GET",a),n.responseType="blob",n.onload=function(){m(n.response,r,l)},n.onerror=function(){console.error("could not download file")},n.send()}function f(a){var r=new XMLHttpRequest;r.open("HEAD",a,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function h(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(r)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,g=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!g?function(a,r,l){var n=u.URL||u.webkitURL,o=document.createElement("a");o.download=r=r||a.name||"download",o.rel="noopener","string"==typeof a?(o.href=a,o.origin===location.origin?h(o):f(o.href)?t(a,r,l):h(o,o.target="_blank")):(o.href=n.createObjectURL(a),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){h(o)},0))}:"msSaveOrOpenBlob"in navigator?function(a,r,l){if(r=r||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function p(a,r){return typeof r>"u"?r={autoBom:!1}:"object"!=typeof r&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,l),r);else if(f(a))t(a,r,l);else{var n=document.createElement("a");n.href=a,n.target="_blank",setTimeout(function(){h(n)})}}:function(a,r,l,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof a)return t(a,r,l);var o="application/octet-stream"===a.type,i=/constructor/i.test(u.HTMLElement)||u.safari,e=/CriOS\/[\d]+/.test(navigator.userAgent);if((e||o&&i||g)&&typeof FileReader<"u"){var c=new FileReader;c.onloadend=function(){var O=c.result;O=e?O:O.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=O:location=O,n=null},c.readAsDataURL(a)}else{var _=u.URL||u.webkitURL,v=_.createObjectURL(a);n?n.location=v:location.href=v,n=null,setTimeout(function(){_.revokeObjectURL(v)},4e4)}});u.saveAs=m.saveAs=m,P.exports=m}.apply(M,[]))&&(P.exports=d)}}]);