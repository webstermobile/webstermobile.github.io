"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[9943],{76916:(P,u,a)=>{a.d(u,{G:()=>M});var h=a(34793),b=a(92198),t=a(94650),v=a(89383),x=a(60097),g=a(36895);function f(s,m){if(1&s&&(t.TgZ(0,"a",14)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&s){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,n.label)," ")}}function e(s,m){if(1&s&&(t.TgZ(0,"a",16)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&s){const n=t.oxw(),o=n.$implicit,l=n.last,c=t.oxw(2);t.Q6J("routerLink",o.url)("queryParams",l&&c.route.snapshot.queryParams),t.xp6(2),t.hij(" ",t.lcZ(3,3,o.label)," ")}}function T(s,m){if(1&s&&(t.ynx(0),t.TgZ(1,"li",10)(2,"span"),t._uU(3," > "),t.qZA()(),t.TgZ(4,"li",11),t.YNc(5,f,4,3,"a",12),t.YNc(6,e,4,5,"a",13),t.qZA(),t.BQk()),2&s){const n=m.first;t.xp6(5),t.Q6J("ngIf",n),t.xp6(1),t.Q6J("ngIf",!n)}}function Z(s,m){if(1&s&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"h3",4),t.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),t._UZ(7,"i",8),t.qZA()(),t.YNc(8,T,7,2,"ng-container",9),t.qZA()(),t.TgZ(9,"div"),t.Hsn(10),t.qZA()()()),2&s){const n=t.oxw();t.xp6(3),t.Q6J("innerHTML",n.title,t.oJD),t.xp6(5),t.Q6J("ngForOf",n.breads)}}const C=["*"];let M=(()=>{class s{constructor(n,o,l,c){this.router=n,this.route=o,this.translate=l,this._carparkService=c,this.breads=[],this.loginUser=""}ngOnInit(){let n=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=n,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(l=>{this.label=l}),this.router.events.pipe((0,b.h)(l=>l instanceof h.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(n,o=[""],l=[]){const c=n.snapshot.url[0]&&n.snapshot.url[0].path,r=[...o,c],p={...this.extractBreadcrumb(n),url:r},i=c&&p.label?[...l,p]:l;return this.title=p.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===p.label&&(this.title="My Vehicle(s)"),n.firstChild?c?this.buildBreadCrumb(n.firstChild,r,i):this.buildBreadCrumb(n.firstChild,o,l):(this.translate.get(this.title).subscribe(d=>{this.title=d}),i)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(n){return n.snapshot.data.breadcrumb instanceof Function?n.snapshot.data.breadcrumb(n):n.snapshot.data.breadcrumb}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(h.F0),t.Y36(h.gz),t.Y36(v.sK),t.Y36(x.x))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-title-bar"]],ngContentSelectors:C,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(n,o){1&n&&(t.F$t(),t.YNc(0,Z,11,2,"div",0)),2&n&&t.Q6J("ngIf","ROLE_TPO_PARTNER"!==o.loginUser)},dependencies:[g.sg,g.O5,h.yS,v.X$],encapsulation:2}),s})()},49943:(P,u,a)=>{a.r(u),a.d(u,{PreventiveMaintenanceModule:()=>c});var h=a(36895),b=a(24006),t=a(34793),v=a(30329),x=a(21532),g=a(59501),f=a(79118),e=a(94650),T=a(89383),Z=a(76916),C=a(40269);function M(r,p){if(1&r&&(e.TgZ(0,"td",9),e._UZ(1,"span"),e.qZA(),e.TgZ(2,"td",10),e._UZ(3,"span"),e.qZA(),e.TgZ(4,"td",10),e._UZ(5,"span"),e.qZA(),e.TgZ(6,"td",10),e._UZ(7,"span"),e.qZA(),e.TgZ(8,"td",10),e._UZ(9,"span"),e.qZA(),e.TgZ(10,"td",10),e._UZ(11,"span"),e.qZA()),2&r){const i=e.oxw();e.xp6(1),e.Udp("width",i.tableHeaders[0].width),e.xp6(2),e.Udp("width",i.tableHeaders[1].width),e.xp6(2),e.Udp("width",i.tableHeaders[2].width),e.xp6(2),e.Udp("width",i.tableHeaders[3].width),e.xp6(2),e.Udp("width",i.tableHeaders[4].width),e.xp6(2),e.Udp("width",i.tableHeaders[5].width)}}const s=function(r){return[r]},m=[{text:"#",width:"60px"},{text:"ID",width:"60px"},{text:"Car Park",width:"120px"},{text:"Date",width:"120px"},{text:"Remark",width:"400px"},{text:"Action",width:"80px"}];let n=(()=>{class r extends f.Gw{constructor(i){super(),this.translate=i,this.tableHeaders=m}pageChanged(i){}reloadData(){}ngOnInit(){const i=this.tableHeaders.map(d=>d.text);this.translate.get(i).subscribe(d=>{this.tableHeaders.forEach(U=>{for(let _ in d)d.hasOwnProperty(_)&&U.text===_&&(U.text=d[_])})})}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(T.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-maintenance-preventive-maintenance"]],features:[e.qOj],decls:12,vars:7,consts:[[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi","m--padding-top-40"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame"],[1,"form-group","m-form__group","m-portlet__filters"],[3,"headers","items","loading","pagination","scrollingDisabled","pageChanged"],["tableTransactions",""],["rowTemplate",""],[1,"m-datatable__cell","text-center"],[1,"m-datatable__cell"]],template:function(i,d){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"app-title-bar"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"div",5)(7,"div",5),e.TgZ(8,"app-datatable",6,7),e.NdJ("pageChanged",function(_){return d.pageChanged(_)}),e.YNc(10,M,12,12,"ng-template",null,8,e.W1O),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("headers",d.tableHeaders)("items",e.VKq(5,s,d.data))("loading",d.loading)("pagination",d.pagination)("scrollingDisabled",!0))},dependencies:[Z.G,C.Uo,f.nE],encapsulation:2}),r})();var o=a(60097);const l=[{path:"",component:g.f,children:[{path:"",component:n}]}];let c=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[o.x],imports:[h.ez,t.Bz.forChild(l),x.x,v.D,b.u5,t.Bz]}),r})()}}]);