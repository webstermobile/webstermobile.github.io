"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[7630],{76916:(S,C,t)=>{t.d(C,{G:()=>x});var h=t(34793),O=t(92198),D=t(38014),n=t(94650),p=t(89383),T=t(60097),E=t(36895);function P(e,d){if(1&e&&(n.TgZ(0,"a",14)(1,"span",15),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&e){const o=n.oxw().$implicit;n.xp6(2),n.hij(" ",n.lcZ(3,1,o.label)," ")}}function L(e,d){if(1&e&&(n.TgZ(0,"a",16)(1,"span",15),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&e){const o=n.oxw(),r=o.$implicit,s=o.last,i=n.oxw(2);n.Q6J("routerLink",r.url)("queryParams",s&&i.route.snapshot.queryParams),n.xp6(2),n.hij(" ",n.lcZ(3,3,r.label)," ")}}function B(e,d){if(1&e&&(n.ynx(0),n.TgZ(1,"li",10)(2,"span"),n._uU(3," > "),n.qZA()(),n.TgZ(4,"li",11),n.YNc(5,P,4,3,"a",12),n.YNc(6,L,4,5,"a",13),n.qZA(),n.BQk()),2&e){const o=d.first;n.xp6(5),n.Q6J("ngIf",o),n.xp6(1),n.Q6J("ngIf",!o)}}function u(e,d){if(1&e){const o=n.EpF();n.TgZ(0,"div",1)(1,"div",2)(2,"div",3),n._UZ(3,"h3",4),n.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),n.NdJ("click",function(){n.CHM(o);const s=n.oxw();return n.KtG(s.jumpHome())}),n._UZ(7,"i",8),n.qZA()(),n.YNc(8,B,7,2,"ng-container",9),n.qZA()(),n.TgZ(9,"div"),n.Hsn(10),n.qZA()()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("innerHTML",o.title,n.oJD),n.xp6(5),n.Q6J("ngForOf",o.breads)}}const U=["*"];let x=(()=>{class e{constructor(o,r,s,i){this.router=o,this.route=r,this.translate=s,this._carparkService=i,this.breads=[],this.loginUser=""}ngOnInit(){let o=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=o,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(s=>{this.label=s}),this.router.events.pipe((0,O.h)(s=>s instanceof h.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(o,r=[""],s=[]){const i=o.snapshot.url[0]&&o.snapshot.url[0].path,M=[...r,i],c={...this.extractBreadcrumb(o),url:M},f=i&&c.label?[...s,c]:s;return this.title=c.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===c.label&&(this.title="My Vehicle(s)"),o.firstChild?i?this.buildBreadCrumb(o.firstChild,M,f):this.buildBreadCrumb(o.firstChild,r,s):(this.translate.get(this.title).subscribe(A=>{this.title=A}),f)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(o){return o.snapshot.data.breadcrumb instanceof Function?o.snapshot.data.breadcrumb(o):o.snapshot.data.breadcrumb}jumpHome(){let o=JSON.parse(localStorage.getItem("user-roles"))[0]??"";this.router.navigate(o.length?[D.gpL[o]]:["/"])}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(h.F0),n.Y36(h.gz),n.Y36(p.sK),n.Y36(T.x))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-title-bar"]],ngContentSelectors:U,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],[1,"m-nav__link","m-nav__link--icon",3,"click"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(o,r){1&o&&(n.F$t(),n.YNc(0,u,11,2,"div",0)),2&o&&n.Q6J("ngIf","ROLE_TPO_PARTNER"!==r.loginUser)},dependencies:[E.sg,E.O5,h.yS,p.X$],encapsulation:2}),e})()},40405:(S,C,t)=>{t.d(C,{v:()=>I});var h=t(82174),O=t(61643),D=t(36895),n=t(80529),p=t(24006),T=t(34793),E=t(372),P=t(30329),L=t(21532),B=t(88796),u=t(89383),U=t(19832),x=t(59245),e=t(89518),d=t(3108),o=t(22630),r=t(29252),s=t(34984),i=t(15455),M=t(77530),c=t(94650);function f(v){return new U.w(v,"../assets/i18n/",".json")}let I=(()=>{class v{}return v.\u0275fac=function(y){return new(y||v)},v.\u0275mod=c.oAB({type:v}),v.\u0275inj=c.cJS({imports:[D.ez,p.u5,T.Bz,L.x,P.D,E.kn,h.su,O.r,x.mr,B.A0,e.H3,d._,o.z,p.UX,r.E7,s.Ns.forRoot({echarts:()=>t.e(4734).then(t.bind(t,14734))}),M.v,u.aw.forChild({loader:{provide:u.Zw,useFactory:f,deps:[n.eN]}}),i.e]}),v})()},37630:(S,C,t)=>{t.r(C),t.d(C,{EvownerEvcModule:()=>_,createTranslateLoader:()=>W,routes:()=>Z});var h=t(36895),O=t(80529),D=t(24006),n=t(34793),p=t(60097),T=t(67527),E=t(67556),P=t(91599),L=t(42684),B=t(51766),u=t(31289),U=t(4666),x=t(73071),e=t(30329),d=t(51013),o=t(24277),r=t(89383),s=t(19832),i=t(372),M=t(53318),c=t(71942),f=t(97640),A=t(59245),I=t(20388),v=t(21532),K=t(59501),y=t(68233),V=t(57250),J=t(43240),F=t(34152),N=t(59562),z=t(40405),R=t(899),m=t(94650);let j=(()=>{class a{constructor(){this.depot="",this.depotList=[]}ngOnInit(){this.reloadData()}reloadData(){this.depotList=["Kranji","Seletar","Loyang"];for(let l=0;l<26;l++)this.depotList.push(`Car Park ${String.fromCharCode(65+l)}`)}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=m.Xpm({type:a,selectors:[["evowner-ev-lots-overview"]],decls:1,vars:0,template:function(l,b){1&l&&m._UZ(0,"router-outlet")},dependencies:[n.lC]}),a})();var Q=t(38014),Y=t(76916),H=t(64622);let $=(()=>{class a{constructor(){}ngOnInit(){this.inputData||(this.inputData=Q.U8O)}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=m.Xpm({type:a,selectors:[["evowner-ev-lot-remote-control"]],inputs:{inputData:"inputData"},decls:6,vars:1,consts:[[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet_margin"],[1,"m-portlet__body"],[3,"inputData"]],template:function(l,b){1&l&&(m.TgZ(0,"div",0),m._UZ(1,"app-title-bar"),m.TgZ(2,"div",1)(3,"div",2)(4,"div",3),m._UZ(5,"app-evc-ev-remote",4),m.qZA()()()()),2&l&&(m.xp6(5),m.Q6J("inputData",b.inputData))},dependencies:[Y.G,H.T]}),a})();var X=t(77530);function W(a){return new s.w(a,"../assets/i18n/",".json")}const Z=[{path:"",component:K.f,children:[{path:"",redirectTo:"evowner-ev-dashboard",pathMatch:"full"},{path:"evowner-ev-dashboard",component:V.D,data:{breadcrumb:{label:"EV Charger Status"}}},{path:"evowner-ev-lot-layout",component:j,data:{breadcrumb:{label:"Lot Layout"}},loadChildren:()=>Promise.all([t.e(371),t.e(3420),t.e(3809),t.e(2693),t.e(650),t.e(6857)]).then(t.bind(t,66857)).then(a=>a.EvownerDepotModule)},{path:"evowner-ev-lot-remote-control",component:$,data:{breadcrumb:{title:"Lot Remote Control",label:"Lot Remote Control"}}},{path:"create",component:R.e,data:{breadcrumb:{label:"Create"}}},{path:"detail",component:y.t,data:{breadcrumb:()=>({title:"EV Charging"})}},{path:"settings",component:R.e,data:{breadcrumb:{title:"Charging Station Settings",label:"Charging Station Settings"}}},{path:"tariffs",component:R.e,data:{breadcrumb:{title:"Tariffs Management",label:"Tariffs Management"}}},{path:"stations",component:R.e,data:{breadcrumb:{title:"Stations Management",label:"Stations Management"}}},{path:"evowner-ev-location",component:J.V,data:{breadcrumb:{title:"EV Charger Location",label:"EV Charger Location"}}},{path:"evowner-ev-stations-management",loadChildren:()=>t.e(5724).then(t.bind(t,85724)).then(a=>a.CarParkStationModule),data:{breadcrumb:{title:"EV Stations Management",label:"EV Stations Management"}}},{path:"evowner-ev-transactions",component:N.J,data:{breadcrumb:{title:"EV Charger Transactions",label:"EV Charger Transactions"}}},{path:"evowner-ev-tariffs-setup",loadChildren:()=>Promise.all([t.e(8592),t.e(2214)]).then(t.bind(t,52214)).then(a=>a.TariffsModule),data:{breadcrumb:{title:"EV Tariffs Setup",label:"EV Tariffs Setup"}}},{path:"evowner-ev-slots-management",loadChildren:()=>t.e(3420).then(t.bind(t,33420)).then(a=>a.CarParkSlotModule),data:{breadcrumb:{title:"EV Charger Management",label:"EV Charger Management"}}},{path:"evowner-ev-quick-setup",component:F.e,data:{breadcrumb:{title:"Quick Charger EV Setup",label:"Quick Charger EV Setup"}}}]},{path:"evowner-maintenance",data:{breadcrumb:{label:M.J.evownerMaintenance}},loadChildren:()=>t.e(5936).then(t.bind(t,15936)).then(a=>a.EvownerMaintenanceModule)}];let _=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({providers:[P.k,L.e,p.x,U.p,B.C,u.K,x.K,E.z$,E.LS,E.Rq,T.Z,c.f],imports:[h.ez,n.Bz.forChild(Z),I.zk,v.x,e.D,f.a4,A.mr,i.kn,z.v,d.P,o.p,D.u5,X.v,r.aw.forChild({loader:{provide:r.Zw,useFactory:W,deps:[O.eN]}}),n.Bz]}),a})()}}]);