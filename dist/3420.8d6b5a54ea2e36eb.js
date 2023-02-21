"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[3420],{33420:(H,g,l)=>{l.r(g),l.d(g,{CarParkSlotModule:()=>D,SlotResolver:()=>u});var m=l(36895),s=l(34793),f=l(60097),C=l(36511),M=l(91599),P=l(42684),d=l(85265),y=l(30329),x=l(21532),F=l(8387),t=l(94650),p=l(38014),_=l(89383),c=l(24006);function J(o,r){1&o&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Field is required.")," "))}function U(o,r){1&o&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Field is required.")," "))}function N(o,r){if(1&o&&(t.TgZ(0,"option",27),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",t.lcZ(2,2,e)," ")}}function L(o,r){if(1&o&&(t.TgZ(0,"option",27),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",t.lcZ(2,2,e)," ")}}function Y(o,r){if(1&o&&(t.TgZ(0,"option",27),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",t.lcZ(2,2,e.value)," ")}}function O(o,r){1&o&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Field is required.")," "))}let b=(()=>{class o{constructor(e,n){this.codeTablesService=e,this.translate=n,this.form={code:"",plot:"",reservationType:p.UQH.Internal,status:p.NNo.Available,type:"",vehiclePlateNo:""},this.RESERVATION_TYPES=p.x5Q,this.SLOT_STATUSES=p.n$S,this.submitText="Submit",this.submitted=new t.vpe,this.canceled=new t.vpe}ngOnInit(){this.vehicleTypes$=this.codeTablesService.filterModelByType(p.BcL.VehicleType).map(e=>(this.form.type=this.form.type||e[0]&&e[0].value,e))}cancel(){this.canceled.emit()}submit(){this.submitted.emit(this.form)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.I),t.Y36(_.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slot-form"]],inputs:{form:"form",submitText:"submitText",cancelText:"cancelText"},outputs:{submitted:"submitted",canceled:"canceled"},decls:67,vars:39,consts:[[1,"m-form","m-form--fit","m-form--label-align-right"],[1,"m-portlet","m-portlet--bordered-semi"],[1,"m-portlet__head"],[1,"m-portlet__head-caption"],[1,"m-portlet__head-title"],[1,"m-portlet__head-text"],[1,"m-portlet__body"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-lg-2","col-sm-12"],[1,"col-lg-4","col-sm-12"],["type","text","name","code","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["code","ngModel"],["class","form-control-feedback",4,"ngIf"],["type","text","name","plot","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["plot","ngModel"],[1,"m--font-danger"],["name","reservationType",1,"form-control","m-input",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","status",1,"form-control","m-input",3,"ngModel","ngModelChange"],["name","vehicleType",1,"form-control","m-input",3,"ngModel","ngModelChange"],["type","text","name","vehiclePlateNo","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["vehiclePlateNo","ngModel"],[1,"m-form__actions","m-form__actions--right"],[1,"btn","btn-outline-main",3,"click"],[1,"la","la-arrow-left"],[1,"btn","btn-main","m--margin-left-30",3,"click"],[1,"form-control-feedback"],[3,"value"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA()()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"label",8),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",9)(14,"input",10,11),t.NdJ("ngModelChange",function(i){return n.form.code=i}),t.qZA(),t.YNc(16,J,3,3,"div",12),t.qZA(),t.TgZ(17,"label",8),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"div",9)(21,"input",13,14),t.NdJ("ngModelChange",function(i){return n.form.plot=i}),t.qZA(),t.YNc(23,U,3,3,"div",12),t.qZA()(),t.TgZ(24,"div",7)(25,"label",8)(26,"span",15),t._uU(27,"*"),t.qZA(),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.TgZ(30,"div",9)(31,"select",16),t.NdJ("ngModelChange",function(i){return n.form.reservationType=i}),t.YNc(32,N,3,4,"option",17),t.qZA()(),t.TgZ(33,"label",8)(34,"span",15),t._uU(35,"*"),t.qZA(),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"div",9)(39,"select",18),t.NdJ("ngModelChange",function(i){return n.form.status=i}),t.YNc(40,L,3,4,"option",17),t.qZA()()(),t.TgZ(41,"div",7)(42,"label",8)(43,"span",15),t._uU(44,"*"),t.qZA(),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"div",9)(48,"select",19),t.NdJ("ngModelChange",function(i){return n.form.type=i}),t.YNc(49,Y,3,4,"option",17),t.ALo(50,"async"),t.qZA()(),t.TgZ(51,"label",8)(52,"span",15),t._uU(53,"*"),t.qZA(),t._uU(54),t.ALo(55,"translate"),t.qZA(),t.TgZ(56,"div",9)(57,"input",20,21),t.NdJ("ngModelChange",function(i){return n.form.vehiclePlateNo=i}),t.qZA(),t.YNc(59,O,3,3,"div",12),t.qZA()()()(),t.TgZ(60,"div",22)(61,"button",23),t.NdJ("click",function(){return n.cancel()}),t._UZ(62,"i",24),t._uU(63),t.ALo(64,"translate"),t.qZA(),t.TgZ(65,"button",25),t.NdJ("click",function(){return n.submit()}),t._uU(66),t.qZA()()()),2&e){const a=t.MAs(15),i=t.MAs(22),v=t.MAs(58);t.xp6(6),t.hij(" ",t.lcZ(7,21,"Car Park Slot")," "),t.xp6(5),t.hij(" ",t.lcZ(12,23,"Code")," "),t.xp6(3),t.Q6J("ngModel",n.form.code),t.xp6(2),t.Q6J("ngIf",a.invalid&&(a.dirty||a.touched)),t.xp6(2),t.hij(" ",t.lcZ(19,25,"Plot")," "),t.xp6(3),t.Q6J("ngModel",n.form.plot),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.hij(" ",t.lcZ(29,27,"Reservation Type")," "),t.xp6(3),t.Q6J("ngModel",n.form.reservationType),t.xp6(1),t.Q6J("ngForOf",n.RESERVATION_TYPES),t.xp6(4),t.hij(" ",t.lcZ(37,29,"Status")," "),t.xp6(3),t.Q6J("ngModel",n.form.status),t.xp6(1),t.Q6J("ngForOf",n.SLOT_STATUSES),t.xp6(5),t.hij(" ",t.lcZ(46,31,"Vehicle Type")," "),t.xp6(3),t.Q6J("ngModel",n.form.type),t.xp6(1),t.Q6J("ngForOf",t.lcZ(50,33,n.vehicleTypes$)),t.xp6(5),t.hij(" ",t.lcZ(55,35,"Vehicle Plate No")," "),t.xp6(3),t.Q6J("ngModel",n.form.vehiclePlateNo),t.xp6(2),t.Q6J("ngIf",v.invalid&&(v.dirty||v.touched)),t.xp6(4),t.hij(" ",t.lcZ(64,37,"Cancel")," "),t.xp6(3),t.Oqu(n.submitText)}},dependencies:[m.sg,m.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.Q7,c.On,c.F,m.Ov,m.rS,_.X$],encapsulation:2}),o})(),Q=(()=>{class o{constructor(e,n,a){this.router=e,this.route=n,this.slotService=a}get carPark(){return this.route.parent.parent.snapshot.data.item||{id:this.router.url.replace(/[^0-9]/gi,"")}}ngOnInit(){}onCanceled(){const e=this.router.url.indexOf("slots"),n=-1!==e?this.router.url.slice(0,e+5):"";this.router.navigate([n])}onSubmitted(e){this.slotService.createModel({...e,carParkId:this.carPark.id}).subscribe(()=>{this.onCanceled()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(d.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slot-create"]],decls:1,vars:0,consts:[[3,"canceled","submitted"]],template:function(e,n){1&e&&(t.TgZ(0,"app-slot-form",0),t.NdJ("canceled",function(){return n.onCanceled()})("submitted",function(i){return n.onSubmitted(i)}),t.qZA())},dependencies:[b],encapsulation:2}),o})();var T=l(76916);function I(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"a",5),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.goBack())}),t._UZ(1,"i",6),t.qZA()}}const q=function(){return["park"]};function E(o,r){1&o&&(t.TgZ(0,"li",11)(1,"a",12),t._uU(2," Park "),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.DdM(2,q))("routerLinkActive","active"))}const j=function(){return["charge"]};function R(o,r){if(1&o&&(t.TgZ(0,"div",7)(1,"div",8)(2,"ul",9),t.YNc(3,E,3,3,"li",10),t.TgZ(4,"li",11)(5,"a",12),t._uU(6," Chargers "),t.qZA()()()()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",e.showPark),t.xp6(2),t.Q6J("routerLink",t.DdM(3,j))("routerLinkActive","active")}}let z=(()=>{class o{constructor(e,n,a){this.router=e,this.route=n,this.carparkService=a,this.item=null,this.showPark=!1,this.breadcrumbs=[]}onSubmitted(e){this.carparkService.updateModel(this.item.id,e).subscribe(()=>this.router.navigate(["/carparks/",this.item.id]))}onCanceled(){this.router.navigate(["/carparks/",this.item.id])}ngOnInit(){this.route.parent.parent.data.subscribe(({item:e})=>{this.item=e}),this.router.url.includes("ev-slots-management")||(this.showPark=!0)}tabChange(){}get isCreate(){return this.router.url.includes("create")||this.router.url.includes("edit")}onCheckShowTabs(){return!this.isCreate}goBack(){const e=this.router.url.indexOf("create"),n=this.router.url.indexOf("edit");let a=this.router.url;-1!==e?a=this.router.url.slice(0,e-1):-1!==n&&(a=this.router.url.slice(0,n-1)),this.router.navigate([a])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(f.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slots"]],decls:9,vars:6,consts:[[1,"body-wrapper"],["class","m-portlet__nav-link btn btn-lg btn-outline-main m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill",3,"click",4,"ngIf"],[1,"m-content"],[1,"m-portlet","m-portlet--tabs"],["class","m-portlet__head",4,"ngIf"],[1,"m-portlet__nav-link","btn","btn-lg","btn-outline-main","m-btn","m-btn--outline-2x","m-btn--air","m-btn--icon","m-btn--icon-only","m-btn--pill",3,"click"],[1,"la","la-reply"],[1,"m-portlet__head"],[1,"m-portlet__head-tools"],["role","tablist",1,"nav","nav-tabs","m-tabs-line","m-tabs-line--primary","m-tabs-line--2x"],["class","nav-item m-tabs__item",4,"ngIf"],[1,"nav-item","m-tabs__item"],[1,"nav-link","m-tabs__link",3,"routerLink","routerLinkActive"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"app-title-bar"),t.YNc(2,I,2,0,"a",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,R,7,4,"div",4),t.TgZ(6,"div")(7,"div"),t._UZ(8,"router-outlet"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",null==n.item?null:n.item.id),t.xp6(3),t.Q6J("ngIf",n.onCheckShowTabs()),t.xp6(1),t.Tol(n.onCheckShowTabs()?"m-portlet__body m-portlet__body--scrollable":"m-portlet__body m-portlet__body--scrollable p-0"),t.xp6(1),t.Tol(n.onCheckShowTabs()?"m-portlet__frame":""))},dependencies:[m.O5,s.lC,s.yS,s.Od,T.G],encapsulation:2}),o})(),$=(()=>{class o{constructor(e,n,a){this.router=e,this.route=n,this.slotService=a}get carpark(){return this.route.parent.parent.snapshot.data.item}ngOnInit(){this.slot=this.route.snapshot.data.slot}onCanceled(){this.router.navigate(["carparks",this.carpark.id,"slots"])}onSubmitted(e){this.slotService.updateModel(e).subscribe(()=>{this.router.navigate(["carparks",this.carpark.id,"slots"])})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(d.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slot-update"]],decls:4,vars:1,consts:[[1,"body-wrapper"],[1,"m-content"],[3,"form","canceled","submitted"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-bar"),t.TgZ(2,"div",1)(3,"app-slot-form",2),t.NdJ("canceled",function(){return n.onCanceled()})("submitted",function(i){return n.onSubmitted(i)}),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("form",n.slot))},dependencies:[T.G,b],encapsulation:2}),o})();var S=l(72986),B=l(15455),V=l(28044),Z=l(67556),K=l(11194),k=l(472);let A=(()=>{class o{constructor(e){this.evcService=e}resolve(e){return this.evcService.getEvcPileData(e.paramMap.get("id")).pipe((0,S.q)(1))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(Z.z$))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var G=l(40394);let u=(()=>{class o{constructor(e){this.slotService=e}resolve(e){return this.slotService.getModel(e.params.slotId).pipe((0,S.q)(1))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.K))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const h=JSON.parse(localStorage.getItem("user-roles")),X=h.includes(p.i44.BusAdmin)||h.includes(p.i44.EVOwner)||h.includes(p.i44.Admin),w=[{path:"",component:z,children:[{path:"",redirectTo:"charge",pathMatch:"full"},{path:"park",data:{breadcrumb:{title:"Slots Management",label:"Slots Management"}},children:[{path:"",component:K.E},{path:"create",component:Q,data:{breadcrumb:{label:"Create"}}},{path:":slotId/update",component:$,resolve:{slot:u},data:{breadcrumb:{label:"Update"}}}]},{path:"charge",children:[{path:"",component:X?G.$:V.x},{path:"create",component:k.M,data:{breadcrumb:{label:"Create"}}},{path:"edit/:id",component:k.M,data:{breadcrumb:{label:"Edit"}},resolve:{item:A}}],data:{breadcrumb:{title:"EVC Management",label:"EVC Management"}}}]}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[M.k,P.e,f.x,u,d.K,C.I,Z.z$,A],imports:[m.ez,s.Bz.forChild(w),x.x,y.D,F.H,B.e,s.Bz]}),o})()}}]);