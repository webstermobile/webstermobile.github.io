"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[2662],{85025:(b,g,n)=>{n.d(g,{x:()=>I});var d=n(82174),M=n(61643),i=n(36895),Z=n(80529),p=n(24006),P=n(34793),O=n(372),C=n(30329),E=n(21532),L=n(88796),h=n(89383),t=n(19832),D=n(59245),x=n(89518),c=n(3108),f=n(22630),U=n(29252),T=n(34984),y=n(77530),A=n(15455),v=n(94650);function S(l){return new t.w(l,"../assets/i18n/",".json")}let I=(()=>{class l{}return l.\u0275fac=function(B){return new(B||l)},l.\u0275mod=v.oAB({type:l}),l.\u0275inj=v.cJS({imports:[i.ez,p.u5,P.Bz,E.x,C.D,O.kn,d.su,M.r,D.mr,L.A0,x.H3,c._,f.z,p.UX,U.E7,T.Ns.forRoot({echarts:()=>n.e(4734).then(n.bind(n,14734))}),y.v,h.aw.forChild({loader:{provide:h.Zw,useFactory:S,deps:[Z.eN]}}),A.e]}),l})()},91004:(b,g,n)=>{n.r(g),n.d(g,{CarParkModule:()=>Mt,CarParkResolver:()=>R,createTranslateLoader:()=>J,routes:()=>Y});var d=n(36895),M=n(24006),i=n(34793),Z=n(372),p=n(36511),P=n(91599),O=n(64870),C=n(42684),E=n(85265),L=n(30329),h=n(21532),t=n(94650),D=n(76284),x=n(11481),c=n(89383),f=n(60097),U=n(71942),T=n(70853),y=n(76916),A=n(73325),v=n(29562),S=n(66616),W=n(47044),I=n(21811);const l=function(a){return[a]};function z(a,s){if(1&a&&(t.TgZ(0,"li",44),t._UZ(1,"i",45),t._uU(2),t.qZA()),2&a){const o=s.$implicit;t.Q6J("routerLink",t.VKq(4,l,o.sub)),t.xp6(1),t.Tol(o.icon),t.xp6(1),t.hij(" ",o.text," ")}}function B(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"div",36)(1,"button",37),t._UZ(2,"i",38),t.qZA(),t.TgZ(3,"nz-dropdown-menu",null,39)(5,"ul",40),t.YNc(6,z,3,6,"li",41),t.TgZ(7,"li",42),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.gotoTenant())}),t._UZ(8,"i",43),t._uU(9," Tenant Management "),t.qZA()()()()}if(2&a){const o=t.MAs(4),e=t.oxw();t.xp6(1),t.Q6J("nzDropdownMenu",o)("nzPlacement","topCenter"),t.xp6(5),t.Q6J("ngForOf",e.menuItems)}}function Q(a,s){if(1&a&&(t.TgZ(0,"div",46),t._uU(1),t.qZA()),2&a){const o=s.$implicit;t.xp6(1),t.Oqu(o.name)}}const j=function(){return["season-parking"]};function H(a,s){1&a&&(t.TgZ(0,"span")(1,"a",30),t._uU(2," Season Parking "),t.qZA()()),2&a&&(t.xp6(1),t.Q6J("routerLink",t.DdM(2,j))("routerLinkActive","active"))}const G=function(){return["lot-status"]};function V(a,s){1&a&&(t.TgZ(0,"a",30),t._uU(1," Lot Status "),t.qZA()),2&a&&t.Q6J("routerLink",t.DdM(2,G))("routerLinkActive","active")}const X=function(){return["vpgs"]};function $(a,s){1&a&&(t.TgZ(0,"li",29)(1,"a",30),t._uU(2," VPGS "),t.qZA()()),2&a&&(t.xp6(1),t.Q6J("routerLink",t.DdM(2,X))("routerLinkActive","active"))}const k=function(){return["ev-transactions"]};function _(a,s){1&a&&(t.TgZ(0,"li",29)(1,"a",30),t._uU(2," EV Transactions "),t.qZA()()),2&a&&(t.xp6(1),t.Q6J("routerLink",t.DdM(2,k))("routerLinkActive","active"))}const w=function(){return["transactions"]};let q=(()=>{class a{constructor(o,e,r,m,u,K,Zt,Pt){this.router=o,this.assetsService=e,this.sanitizer=r,this.route=m,this.translate=u,this.carparkService=K,this.vehicleService=Zt,this.busService=Pt,this.menuItems=[{icon:"la la-wrench",text:"Settings",sub:"settings"},{icon:"la la-columns",text:"Lots Management",sub:"lots"},{icon:"iconfont icon-chongdianzhuang",text:"Stations Management",sub:"stations"},{icon:"la la-usd",text:"Tariffs Management",sub:"tariffs"},{icon:"la la-map",text:"Layouts Management",sub:"layouts"},{icon:"la la-object-group",text:"Slots Management",sub:"slots"},{icon:"la la-signal",text:"Live Status",sub:"live-status"}]}gotoLink(o){this.router.navigate(["carparks",this.item.id,o.sub])}ngOnInit(){this.route.data.subscribe(({item:o})=>{this.item=o;const e=this.menuItems.map(r=>r.text.slice(r.text.indexOf("</i>")+4));this.translate.get(e).subscribe(r=>{this.menuItems.forEach(m=>{for(let u in r)if(r.hasOwnProperty(u)&&m.text.slice(m.text.indexOf("</i>")+4)===u){const K=r[u];m.text=m.text.replace(m.text.slice(m.text.indexOf("</i>")+4),K)}})})})}getNormalLots(o){return o.live?o.totalLots-o.live.availableLots-o.seasonLots:"-"}get isAdmin(){return this.carparkService.isAdmin()}get isBusAdmin(){return this.busService.isBusAdmin()}get isOwner(){return this.carparkService.isOwner()}get isOperator(){return this.vehicleService.isOperator()}get notOwnerAndOperator(){return!(this.isOperator||this.isOwner||this.isAdmin||this.isBusAdmin)}gotoTenant(){this.router.navigate(["/tenant-management-page"])}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(i.F0),t.Y36(D.z),t.Y36(x.H7),t.Y36(i.gz),t.Y36(c.sK),t.Y36(f.x),t.Y36(U.f),t.Y36(T.Z))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-carpark-detail"]],decls:92,vars:21,consts:[[1,"body-wrapper"],["class","m-dropdown m-dropdown--inline",4,"ngIf"],[1,"m-content"],[1,"m-portlet"],[1,"m-portlet__body"],[1,"row","m-row--col-separator-sm"],[1,"col-md-4"],[1,"row"],[1,"avatar","size-md","m-rounded"],["alt","",3,"src"],[1,"col","m--padding-left-20"],[1,"m--font-boldest","m--margin-bottom-5","text-main"],[1,"text-muted"],[1,"text-muted","m--margin-top-10"],[1,"la","la-map-marker","m--margin-right-10"],[1,"la","la-clock-o","m--margin-right-10"],[1,"la","la-exclamation-circle","m--margin-right-10"],[1,"col-md-8"],[1,"col-3","m--font-boldest"],[1,"m--align-center"],[1,"m--font-boldest"],[1,"m--align-center","m--margin-left-20"],[1,"row","m--margin-top-10"],[1,"row","header--stations"],["class","border m-font-weight-500",4,"ngFor","ngForOf"],[1,"m-portlet","m-portlet--tabs"],[1,"m-portlet__head"],[1,"m-portlet__head-tools"],["role","tablist",1,"nav","nav-tabs","m-tabs-line","m-tabs-line--primary","m-tabs-line--2x"],[1,"nav-item","m-tabs__item"],[1,"nav-link","m-tabs__link",3,"routerLink","routerLinkActive"],[4,"ngIf","ngIfElse"],["busAdmin",""],["class","nav-item m-tabs__item",4,"ngIf"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame"],[1,"m-dropdown","m-dropdown--inline"],["nz-dropdown","","nzTrigger","click","nz-button","","nzType","primary","nzGhost","","nzShape","circle",3,"nzDropdownMenu","nzPlacement"],[1,"la","la-ellipsis-h"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"routerLink",4,"ngFor","ngForOf"],["nz-menu-item","",3,"click"],[1,"la","la-object-group",2,"margin-right","4px"],["nz-menu-item","",3,"routerLink"],[2,"margin-right","4px"],[1,"border","m-font-weight-500"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"app-title-bar"),t.YNc(2,B,10,3,"div",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),t._UZ(10,"img",9),t.qZA(),t.TgZ(11,"div",10)(12,"h5",11),t._uU(13),t.ALo(14,"titlecase"),t.qZA(),t.TgZ(15,"div",12),t._uU(16,"Manually Payment"),t.qZA(),t.TgZ(17,"div",13)(18,"div"),t._UZ(19,"i",14),t._uU(20),t.qZA(),t.TgZ(21,"div"),t._UZ(22,"i",15),t._uU(23," Open Now "),t.qZA(),t.TgZ(24,"div"),t._UZ(25,"i",16),t._uU(26," No Fault"),t.qZA()()()()(),t.TgZ(27,"div",17)(28,"div",7)(29,"div",18),t._uU(30,"Carpark Lots"),t.qZA(),t.TgZ(31,"div",7)(32,"div",19)(33,"div",12),t._uU(34,"Total"),t.qZA(),t.TgZ(35,"h6",20),t._uU(36),t.qZA()(),t.TgZ(37,"div",21)(38,"div",12),t._uU(39,"Available"),t.qZA(),t.TgZ(40,"h6",12),t._uU(41),t.qZA()(),t.TgZ(42,"div",21)(43,"div",12),t._uU(44,"Season"),t.qZA(),t.TgZ(45,"h6",12),t._uU(46),t.qZA()(),t.TgZ(47,"div",21)(48,"div",12),t._uU(49,"Normal"),t.qZA(),t.TgZ(50,"h6",12),t._uU(51),t.qZA()(),t.TgZ(52,"div",21)(53,"div",12),t._uU(54,"Handicapped"),t.qZA(),t.TgZ(55,"h6",12),t._uU(56),t.qZA()()()(),t.TgZ(57,"div",7)(58,"div",18),t._uU(59,"Charge Lots"),t.qZA(),t.TgZ(60,"div",7)(61,"div",19)(62,"div",12),t._uU(63,"Total"),t.qZA(),t.TgZ(64,"h6",20),t._uU(65),t.qZA()(),t.TgZ(66,"div",21)(67,"div",12),t._uU(68,"Temporary"),t.qZA(),t.TgZ(69,"h6",12),t._uU(70),t.qZA()()()(),t.TgZ(71,"div",22)(72,"div",18),t._uU(73,"Stations"),t.qZA(),t.TgZ(74,"div",23),t.YNc(75,Q,2,1,"div",24),t.qZA()()()()()(),t.TgZ(76,"div",25)(77,"div",26)(78,"div",27)(79,"ul",28)(80,"li",29)(81,"a",30),t._uU(82," Transactions "),t.qZA()(),t.TgZ(83,"li",29),t.YNc(84,H,3,3,"span",31),t.YNc(85,V,2,3,"ng-template",null,32,t.W1O),t.qZA(),t.YNc(87,$,3,3,"li",33),t.YNc(88,_,3,3,"li",33),t.qZA()()(),t.TgZ(89,"div",34)(90,"div",35),t._UZ(91,"router-outlet"),t.qZA()()()()()),2&o){const r=t.MAs(86);t.xp6(2),t.Q6J("ngIf",e.isAdmin||e.isBusAdmin),t.xp6(8),t.Q6J("src",null==e.item.images[0]?null:e.item.images[0].carParkImage,t.LSH),t.xp6(3),t.Oqu(t.lcZ(14,18,e.item.name)),t.xp6(7),t.hij(" ",null==e.item.address?null:e.item.address.address," "),t.xp6(16),t.Oqu(e.item.totalLots),t.xp6(5),t.Oqu(null==e.item.live?null:e.item.live.availableLots),t.xp6(5),t.Oqu(e.item.seasonLots),t.xp6(5),t.Oqu(e.getNormalLots(e.item)),t.xp6(5),t.Oqu(e.item.handicappedLots),t.xp6(9),t.Oqu(e.item.evTotalLots),t.xp6(5),t.Oqu(e.item.evFreeLots),t.xp6(5),t.Q6J("ngForOf",e.item.stations),t.xp6(6),t.Q6J("routerLink",t.DdM(20,w))("routerLinkActive","active"),t.xp6(3),t.Q6J("ngIf",!e.isBusAdmin)("ngIfElse",r),t.xp6(3),t.Q6J("ngIf",e.notOwnerAndOperator),t.xp6(1),t.Q6J("ngIf",e.notOwnerAndOperator)}},dependencies:[d.sg,d.O5,i.lC,i.rH,i.yS,i.Od,y.G,A.wO,A.r9,v.cm,v.RR,v.wA,S.ix,W.w,I.dQ,d.rS],styles:[".btn-create[_ngcontent-%COMP%]{margin-left:auto;margin-top:auto;margin-bottom:auto}.header--stations[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:2px 4px;border-radius:4px;display:flex;justify-content:center;align-items:center}.header--stations[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-of-type){margin-left:.5rem}"]}),a})();var tt=n(42743),nt=n(77417),at=n(47800),ot=n(74074),et=n(51013),st=n(42686),rt=n(24277),N=n(8454),it=n(23175),lt=n(8387),mt=n(33420),dt=n(13309),vt=n(88796),ct=n(97640),ut=n(59245),gt=n(89518),pt=n(72986),ht=n(80529),ft=n(19832),Tt=n(4350),At=n(52093),F=n(81538);function J(a){return new ft.w(a,"../assets/i18n/",".json")}let R=(()=>{class a{constructor(o){this.carparkService=o}resolve(o){return this.carparkService.getModel(o.params.id||201).pipe((0,pt.q)(1))}}return a.\u0275fac=function(o){return new(o||a)(t.LFG(f.x))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();const Y=[{path:"",component:tt.p,resolve:{item:R},runGuardsAndResolvers:"always",children:[{path:"",component:q,children:[{path:"",redirectTo:"transactions",pathMatch:"full"},{path:"transactions",component:N.x,data:{breadcrumb:{label:"Transactions"}}},{path:"season-parking",component:st.w,data:{breadcrumb:{label:"Season Parking"}}},{path:"lot-status",component:Tt.O,data:{breadcrumb:{label:"Lot Status"}}},{path:"vpgs",component:it.w,data:{breadcrumb:{label:"VPGS"}}},{path:"ev-transactions",component:N.x,data:{breadcrumb:{label:"Transactions"}}}]},{path:"settings",component:ot._,data:{breadcrumb:{title:"Car Park Settings",label:"Car Park Settings"}}},{path:"lots",component:at.S,data:{breadcrumb:{title:"Lots Management",label:"Lots Management"}}},{path:"live-status",component:nt.F,data:{breadcrumb:{title:"Live Status",label:"Live Status"}}},{path:"tariffs",loadChildren:()=>n.e(5919).then(n.bind(n,32997)).then(a=>a.CarParkTariffModule),data:{breadcrumb:{title:"Tariffs Management",label:"Tariffs Management"}}},{path:"stations",loadChildren:()=>n.e(5724).then(n.bind(n,85724)).then(a=>a.CarParkStationModule),data:{breadcrumb:{title:"Stations Management",label:"Stations Management"}}},{path:"layouts",loadChildren:()=>n.e(3881).then(n.bind(n,63881)).then(a=>a.CarParkLayoutModule),data:{breadcrumb:{title:"Layouts Management",label:"Layouts Management"}}},{path:"slots",loadChildren:()=>Promise.resolve().then(n.bind(n,33420)).then(a=>a.CarParkSlotModule),data:{}}]}];let Mt=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[P.k,C.e,R,O.P,mt.SlotResolver,E.K,p.I,T.Z],imports:[d.ez,i.Bz.forChild(Y),F.j,h.x,L.D,et.P,ct.a4,dt.p,ut.mr,M.u5,Z.kn,vt.A0,gt.H3,lt.H,rt.p,At.r,c.aw.forChild({loader:{provide:c.Zw,useFactory:J,deps:[ht.eN]}}),i.Bz,F.j]}),a})()}}]);