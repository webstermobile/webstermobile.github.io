"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[5724],{85724:(tt,S,i)=>{i.r(S),i.d(S,{CarParkStationModule:()=>W});var c=i(36895),l=i(34793),d=i(60097),T=i(91599),x=i(42684),P=i(3927),t=i(94650),y=i(28555),z=i(80529);let M=(()=>{class a extends P.su{constructor(n,e,o){super(e,n),this.store=n,this.http=e,this.modelName="Station",this.baseUrl="carpark/api/car-park-stations",this.handleError=o.createHandleError(`${this.modelName}Service`)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(y.yh),t.LFG(z.eN),t.LFG(T.k))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();var A=i(30329),U=i(21532),F=i(3108),h=i(76916),_=i(95496);let J=(()=>{class a{constructor(n,e,o){this.router=n,this.route=e,this.carParkService=o,this.breadcrumbs=[{text:"Create Station"}]}ngOnInit(){this.carpark=this.route.parent.parent.snapshot.data.item}onCanceled(){this.router.navigate(["carparks",this.carpark.id,"stations"])}onSubmitted(n){const e={...this.carpark,stations:[...this.carpark.stations,n]};this.carParkService.updateModel(e.id,e).subscribe(()=>{this.router.navigate(["carparks",this.carpark.id,"stations"])})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(d.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-stations-create"]],decls:4,vars:0,consts:[[1,"body-wrapper"],[1,"m-content"],[3,"canceled","submitted"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-bar"),t.TgZ(2,"div",1)(3,"app-stations-form",2),t.NdJ("canceled",function(){return e.onCanceled()})("submitted",function(s){return e.onSubmitted(s)}),t.qZA()()())},dependencies:[h.G,_.S],encapsulation:2}),a})();var O=i(26245),u=i(38014),N=i(20388),k=i(89383),g=i(24006),Y=i(11917),p=i(40269),v=i(38231),Q=i(35635),w=i(66616),L=i(47044),H=i(21811);function I(a,r){if(1&a&&t._UZ(0,"nz-option",18),2&a){const n=r.$implicit;t.Q6J("nzValue",n.value)("nzLabel",n.text)}}function G(a,r){if(1&a&&t._UZ(0,"nz-option",18),2&a){const n=r.$implicit;t.Q6J("nzValue",n.value)("nzLabel",n.text)}}function $(a,r){if(1&a&&t._uU(0),2&a){const n=r.range;t.lnq(" ",n[0],"-",n[1]," of ",r.$implicit," items\n")}}function E(a,r){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.xp6(1),t.Oqu(n.text)}}const j=function(a){return[a,"update"]};function q(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"span",19),t._uU(11," \xa0 "),t.TgZ(12,"span",20),t._uU(13),t.ALo(14,"titlecase"),t.qZA()(),t.TgZ(15,"td")(16,"span",21),t._uU(17),t.qZA()(),t.TgZ(18,"td")(19,"a",22),t._UZ(20,"i",23),t.qZA(),t.TgZ(21,"button",24),t.NdJ("click",function(){const s=t.CHM(n).$implicit,C=t.oxw(),b=t.MAs(33);return t.KtG(C.openModal(b,s.id))}),t._UZ(22,"i",25),t.qZA()()()}if(2&a){const n=r.$implicit,e=r.index,o=t.oxw();t.ekj("ant-table-row-odd",e%2==1),t.xp6(2),t.Oqu(n.code),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.ip),t.xp6(2),t.Oqu(n.port),t.xp6(5),t.Oqu(t.lcZ(14,10,n.type)),t.xp6(3),t.Q6J("ngClass","m-badge--"+o.conditionProp(n.status,"className")),t.xp6(1),t.hij(" ",o.conditionProp(n.status,"text")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(12,j,n.id))}}function K(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"confirm-modal",26),t.NdJ("cancel",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.hideModal())})("submit",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.deleteStation())}),t.qZA()}if(2&a){const n=t.oxw();t.Q6J("options",n.deleteModalOptions)}}const V=function(){return["create"]},X=[{text:"Station ID",width:"100px"},{text:"Station Name",width:"100px"},{text:"IP",width:"100px"},{text:"Port",width:"100px"},{text:"Type",width:"100px"},{text:"Status",width:"100px"},{text:"Actions",width:"100px"}];let D=(()=>{class a{constructor(n,e,o,s,C){this.modalService=n,this.carParkService=e,this.router=o,this.route=s,this.translate=C,this.tableHeaders=X,this.deleteModalOptions={title:"Do you want to delete this station?",message:"This can not be reverted"},this.stationType="",this.stationTypes=u.zpQ,this.stationStatus="",this.stationStatuses=u.gHT,this.keyword="",this.stations=[];const b=this.tableHeaders.map(m=>m.text);this.translate.get(b).subscribe(m=>{this.tableHeaders.forEach(Z=>{for(let f in m)m.hasOwnProperty(f)&&Z.text===f&&(Z.text=m[f])})})}conditionProp(n,e){return(0,u.e9Z)(u.gHT,n,e)}ngOnInit(){this.route.parent.parent.data.subscribe(({item:n})=>{this.carpark=n,this.filterStations()})}filterStations(){try{return this.stations=this.carpark.stations.filter(n=>(!this.stationStatus||n.status===this.stationStatus)&&(!this.stationType||n.type===this.stationType)&&n.name.search(new RegExp(this.keyword,"gi"))>-1)}catch{return this.stations=[]}}openModal(n,e){this.selectedStationId=e,this.modalRef=this.modalService.show(n,{class:"modal-dialog-centered"})}hideModal(){this.modalRef.hide()}deleteStation(){const n=this.carpark.stations.filter(o=>o.id!==this.selectedStationId),e={...this.carpark,stations:n};this.carParkService.updateModel(e.id,e).subscribe(()=>{this.modalRef.hide(),this.router.navigate(["carparks",this.carpark.id,"stations"])})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(N.tT),t.Y36(d.x),t.Y36(l.F0),t.Y36(l.gz),t.Y36(k.sK))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-stations-table"]],decls:34,vars:20,consts:[[1,"row","form-group","m-form__group","m--margin-bottom-30"],[1,"col-xl-8","order-2","order-xl-1"],[1,"row"],[1,"col-form-label","col-lg-1","col-sm-6"],[1,"col-lg-3","col-sm-6"],["nzPlaceHolder","Please Select",2,"width","160px",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"m-input-icon","m-input-icon--left","col-lg-4"],["type","text","nz-input","","placeholder","","placeholder","keyword",3,"ngModel","ngModelChange"],[1,"col-xl-4","order-1","order-xl-2","m--align-right"],["nz-button","","nzType","primary","nzShape","round",3,"routerLink"],[1,"la","la-plus"],[1,"m-separator","m-separator--dashed","d-xl-none"],["rangeTemplate",""],["nzTemplateMode","",3,"nzTotal","nzShowTotal"],[4,"ngFor","ngForOf"],[3,"ant-table-row-odd",4,"ngFor","ngForOf"],["deleteConfirm",""],[3,"nzValue","nzLabel"],[1,"m-badge","m-badge--info","m-badge--dot"],[1,"m--font-bold","m--font-info"],[1,"m-badge","m-badge--wide",3,"ngClass"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"routerLink"],[1,"la","la-edit"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"click"],[1,"la","la-close"],[3,"options","cancel","submit"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"div",4)(7,"nz-select",5),t.NdJ("ngModelChange",function(s){return e.stationStatus=s})("ngModelChange",function(){return e.filterStations()}),t.YNc(8,I,1,2,"nz-option",6),t.qZA()(),t.TgZ(9,"label",3),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div",4)(13,"nz-select",5),t.NdJ("ngModelChange",function(s){return e.stationType=s})("ngModelChange",function(){return e.filterStations()}),t.YNc(14,G,1,2,"nz-option",6),t.qZA()(),t.TgZ(15,"div",7)(16,"input",8),t.NdJ("ngModelChange",function(s){return e.keyword=s})("ngModelChange",function(){return e.filterStations()}),t.qZA()()()(),t.TgZ(17,"div",9)(18,"button",10),t._UZ(19,"i",11),t.TgZ(20,"span"),t._uU(21),t.ALo(22,"translate"),t.qZA()(),t._UZ(23,"div",12),t.qZA()(),t.YNc(24,$,1,3,"ng-template",null,13,t.W1O),t.TgZ(26,"nz-table",14)(27,"thead")(28,"tr"),t.YNc(29,E,2,1,"th",15),t.qZA()(),t.TgZ(30,"tbody"),t.YNc(31,q,23,14,"tr",16),t.qZA()(),t.YNc(32,K,1,1,"ng-template",null,17,t.W1O)),2&n){const o=t.MAs(25);t.xp6(4),t.hij(" ",t.lcZ(5,13,"Status")," "),t.xp6(3),t.Q6J("ngModel",e.stationStatus),t.xp6(1),t.Q6J("ngForOf",e.stationStatuses),t.xp6(2),t.hij(" ",t.lcZ(11,15,"Type")," "),t.xp6(3),t.Q6J("ngModel",e.stationType),t.xp6(1),t.Q6J("ngForOf",e.stationTypes),t.xp6(2),t.Q6J("ngModel",e.keyword),t.xp6(2),t.Q6J("routerLink",t.DdM(19,V)),t.xp6(3),t.hij(" ",t.lcZ(22,17,"Add New Station")," "),t.xp6(5),t.Q6J("nzTotal",e.stations.length)("nzShowTotal",o),t.xp6(3),t.Q6J("ngForOf",e.tableHeaders),t.xp6(2),t.Q6J("ngForOf",e.stations)}},dependencies:[c.mk,c.sg,g.Fj,g.JJ,g.On,l.rH,l.yS,Y.X,p.N8,p.Uo,p._C,p.Om,p.p0,p.$Z,v.Ip,v.Vq,Q.Zp,w.ix,L.w,H.dQ,c.rS,k.X$],encapsulation:2}),a})();function R(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"a",5),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onCanceled())}),t._UZ(1,"i",6),t.qZA()}}const B=[{path:"",component:(()=>{class a{constructor(n,e,o){this.router=n,this.route=e,this.carparkService=o,this.item=null,this.breadcrumbs=[]}onSubmitted(n){this.carparkService.updateModel(this.item.id,n).subscribe(()=>this.onCanceled())}onCanceled(){this.router.navigate([`/${(0,O.pO)()}/`,this.item.id])}ngOnInit(){this.route.parent.parent.data.subscribe(({item:n})=>{this.item=n})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(d.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-stations"]],decls:7,vars:1,consts:[[1,"body-wrapper"],["class","m-portlet__nav-link btn btn-lg btn-outline-main m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill",3,"click",4,"ngIf"],[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi","m--padding-top-30"],[1,"m-portlet__body"],[1,"m-portlet__nav-link","btn","btn-lg","btn-outline-main","m-btn","m-btn--outline-2x","m-btn--air","m-btn--icon","m-btn--icon-only","m-btn--pill",3,"click"],[1,"la","la-reply"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"app-title-bar"),t.YNc(2,R,2,0,"a",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4),t._UZ(6,"app-stations-table"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("ngIf",e.item))},dependencies:[c.O5,h.G,D],encapsulation:2}),a})()},{path:"create",component:J,data:{breadcrumb:{label:"Create"}}},{path:":stationId/update",component:(()=>{class a{constructor(n,e,o){this.router=n,this.route=e,this.carParkService=o}ngOnInit(){this.carpark=this.route.parent.parent.snapshot.data.item,this.station=this.carpark.stations.find(n=>n.id===Number(this.route.snapshot.paramMap.get("stationId")))}onCanceled(){this.router.navigate(["carparks",this.carpark.id,"stations"])}onSubmitted(n){const e=this.carpark.stations.map(o=>o.id===this.station.id?n:o);this.carParkService.updateModel(this.carpark.id,{...this.carpark,stations:e}).subscribe(()=>{this.router.navigate(["carparks",this.carpark.id,"stations"])})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(d.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-stations-update"]],decls:4,vars:1,consts:[[1,"body-wrapper"],[1,"m-content"],[3,"form","canceled","submitted"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-bar"),t.TgZ(2,"div",1)(3,"app-stations-form",2),t.NdJ("canceled",function(){return e.onCanceled()})("submitted",function(s){return e.onSubmitted(s)}),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("form",e.station))},dependencies:[h.G,_.S],encapsulation:2}),a})(),data:{breadcrumb:{label:"Update"}}}];let W=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[T.k,x.e,d.x,M],imports:[c.ez,l.Bz.forChild(B),U.x,A.D,F._,l.Bz]}),a})()}}]);