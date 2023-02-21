"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[3220],{63115:(U,b,i)=>{i.d(b,{J:()=>M});var l=i(94650),t=i(21837),e=i(36895),y=i(60883);let M=(()=>{class v{constructor(){this._value=new Date,this.format="hh:mm a, dd LLLL yyyy",this.bsValueChange=new l.vpe,this.bsConfig={containerClass:"theme-light",showWeekNumbers:!1},this.showPicker=!1,this.showDate=!0,this.showTime=!0,this.closeButton={show:!0,label:"Close",cssClass:"btn btn-sm btn-primary"}}get value(){return this._value}set value(d){d?("string"==typeof d&&(this._value=new Date(d)),this._value=d):this._value=null}get displayText(){return this.format=this.formatTime?"dd LLLL yyyy  /  hh:mm a":this.format,this.value?t.ou.fromJSDate(this.value).toFormat(this.format):null}onTogglePicker(){!1===this.showPicker&&(this.showPicker=!0)}onValueChange(d){this.bsValueChange.emit(d)}isValid(){return this.value&&"string"!=typeof this.value&&!isNaN(this.value.getTime())}}return v.\u0275fac=function(d){return new(d||v)},v.\u0275cmp=l.Xpm({type:v,selectors:[["app-datetimepicker"]],inputs:{value:"value",formatTime:"formatTime",format:"format"},outputs:{bsValueChange:"bsValueChange"},decls:6,vars:7,consts:[[1,"m-input-icon","m-input-icon--right",3,"ngClass"],["type","text","placement","bottom","readonly","",1,"form-control","m-input",3,"value","click"],[1,"m-input-icon__icon","m-input-icon__icon--right"],[1,"la","la-calendar"],[3,"value","showPopup","showDate","showTime","closeButton","valueChange","showPopupChange"]],template:function(d,p){1&d&&(l.TgZ(0,"div",0)(1,"input",1),l.NdJ("click",function(){return p.onTogglePicker()}),l.qZA(),l.TgZ(2,"span",2)(3,"span"),l._UZ(4,"i",3),l.qZA()()(),l.TgZ(5,"datetime-popup",4),l.NdJ("valueChange",function(Z){return p.onValueChange(Z)})("showPopupChange",function(Z){return p.showPicker=Z}),l.qZA()),2&d&&(l.Q6J("ngClass",p.rounded?"rounded":""),l.xp6(1),l.Q6J("value",p.displayText),l.xp6(4),l.Q6J("value",p.value)("showPopup",p.showPicker)("showDate",p.showDate)("showTime",p.showTime)("closeButton",p.closeButton))},dependencies:[e.mk,y.U],encapsulation:2}),v})()},76916:(U,b,i)=>{i.d(b,{G:()=>_});var l=i(34793),t=i(92198),e=i(94650),y=i(89383),M=i(60097),v=i(36895);function A(m,C){if(1&m&&(e.TgZ(0,"a",14)(1,"span",15),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&m){const r=e.oxw().$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,1,r.label)," ")}}function d(m,C){if(1&m&&(e.TgZ(0,"a",16)(1,"span",15),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&m){const r=e.oxw(),h=r.$implicit,g=r.last,T=e.oxw(2);e.Q6J("routerLink",h.url)("queryParams",g&&T.route.snapshot.queryParams),e.xp6(2),e.hij(" ",e.lcZ(3,3,h.label)," ")}}function p(m,C){if(1&m&&(e.ynx(0),e.TgZ(1,"li",10)(2,"span"),e._uU(3," > "),e.qZA()(),e.TgZ(4,"li",11),e.YNc(5,A,4,3,"a",12),e.YNc(6,d,4,5,"a",13),e.qZA(),e.BQk()),2&m){const r=C.first;e.xp6(5),e.Q6J("ngIf",r),e.xp6(1),e.Q6J("ngIf",!r)}}function P(m,C){if(1&m&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._UZ(3,"h3",4),e.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),e._UZ(7,"i",8),e.qZA()(),e.YNc(8,p,7,2,"ng-container",9),e.qZA()(),e.TgZ(9,"div"),e.Hsn(10),e.qZA()()()),2&m){const r=e.oxw();e.xp6(3),e.Q6J("innerHTML",r.title,e.oJD),e.xp6(5),e.Q6J("ngForOf",r.breads)}}const Z=["*"];let _=(()=>{class m{constructor(r,h,g,T){this.router=r,this.route=h,this.translate=g,this._carparkService=T,this.breads=[],this.loginUser=""}ngOnInit(){let r=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=r,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(g=>{this.label=g}),this.router.events.pipe((0,t.h)(g=>g instanceof l.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(r,h=[""],g=[]){const T=r.snapshot.url[0]&&r.snapshot.url[0].path,D=[...h,T],x={...this.extractBreadcrumb(r),url:D},I=T&&x.label?[...g,x]:g;return this.title=x.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===x.label&&(this.title="My Vehicle(s)"),r.firstChild?T?this.buildBreadCrumb(r.firstChild,D,I):this.buildBreadCrumb(r.firstChild,h,g):(this.translate.get(this.title).subscribe(S=>{this.title=S}),I)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(r){return r.snapshot.data.breadcrumb instanceof Function?r.snapshot.data.breadcrumb(r):r.snapshot.data.breadcrumb}}return m.\u0275fac=function(r){return new(r||m)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(y.sK),e.Y36(M.x))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-title-bar"]],ngContentSelectors:Z,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(r,h){1&r&&(e.F$t(),e.YNc(0,P,11,2,"div",0)),2&r&&e.Q6J("ngIf","ROLE_TPO_PARTNER"!==h.loginUser)},dependencies:[v.sg,v.O5,l.yS,y.X$],encapsulation:2}),m})()},43220:(U,b,i)=>{i.r(b),i.d(b,{SimulatorModule:()=>z,createTranslateLoader:()=>F});var l=i(36895),t=i(94650),e=i(34793),y=i(76916),M=i(89383);const v=function(){return["entry"]},A=function(){return["exit"]};let d=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-simulator-home"]],decls:17,vars:12,consts:[[1,"m-content"],[1,"m-portlet","m-portlet--tabs"],[1,"m-portlet__head"],[1,"m-portlet__head-tools"],["role","tablist",1,"nav","nav-tabs","m-tabs-line","m-tabs-line--primary","m-tabs-line--2x"],[1,"nav-item","m-tabs__item"],[1,"nav-link","m-tabs__link",3,"routerLink","routerLinkActive"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame"]],template:function(o,n){1&o&&(t._UZ(0,"app-title-bar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"li",5)(11,"a",6),t._uU(12),t.ALo(13,"translate"),t.qZA()()()()(),t.TgZ(14,"div",7)(15,"div",8),t._UZ(16,"router-outlet"),t.qZA()()()()),2&o&&(t.xp6(7),t.Q6J("routerLink",t.DdM(10,v))("routerLinkActive","active"),t.xp6(1),t.hij(" ",t.lcZ(9,6,"Entry")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(11,A))("routerLinkActive","active"),t.xp6(1),t.hij(" ",t.lcZ(13,8,"Exit")," "))},dependencies:[e.lC,e.yS,e.Od,y.G,M.X$]}),a})();var p=i(59501),P=i(21532),Z=i(30329),_=i(24006),m=i(80529),C=i(19832),r=i(38014),h=i(8929),g=i(1059),T=i(80013),D=i(75778),x=i(2994),I=i(87545),S=i(15439),J=i(60097),O=i(3927),B=i(28555),Y=i(91599);let N=(()=>{class a extends O.su{constructor(o,n,s){super(o,n),this.http=o,this.store=n,this.modelName="Simulator",this.baseUrl="",this.handleError=s.createHandleError(`${this.modelName}Service`)}entrySimulator(o){const n=this.getUrl("carpark/api/newcontroller/entry");return this.post(n,o)}exitSimulator(o){const n=this.getUrl("carpark/api/newcontroller/exit");return this.post(n,o)}}return a.\u0275fac=function(o){return new(o||a)(t.LFG(m.eN),t.LFG(B.yh),t.LFG(Y.k))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();var w=i(20388),G=i(63115),E=i(88796),k=i(29252);const Q=["formVehicle"],R=["msgModal"];function j(a,u){1&a&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"*Required field"),". "))}function q(a,u){if(1&a&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const o=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,o.vehicleNoMessage),". At least 3 characters. ")}}function H(a,u){1&a&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"*Required field"),". "))}function V(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"div",5)(1,"label",6)(2,"span",7),t._uU(3,"*"),t.qZA(),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"div",8)(7,"app-datetimepicker",25),t.NdJ("bsValueChange",function(s){t.CHM(o);const c=t.oxw();return t.KtG(c.getSessionId("entryDateTime",s))}),t.qZA()(),t.TgZ(8,"label",6)(9,"span",7),t._uU(10,"*"),t.qZA(),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",8)(14,"input",26,27),t.NdJ("ngModelChange",function(s){t.CHM(o);const c=t.oxw();return t.KtG(c.form.entryGateId=s)}),t.qZA(),t.YNc(16,H,3,3,"div",11),t.qZA()()}if(2&a){const o=t.MAs(15),n=t.oxw(),s=t.MAs(2);t.xp6(4),t.hij(" ",t.lcZ(5,5,"Entry Date"),": "),t.xp6(3),t.Q6J("value",n.form.entryDateTime),t.xp6(4),t.hij(" ",t.lcZ(12,7,"Entry Gate Id"),": "),t.xp6(3),t.Q6J("ngModel",n.form.entryGateId),t.xp6(2),t.Q6J("ngIf",o.invalid&&(o.dirty||o.touched||s.submitted))}}function K(a,u){1&a&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"*Required field"),". "))}function $(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"div",5)(1,"label",6)(2,"span",7),t._uU(3,"*"),t.qZA(),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"div",8)(7,"app-datetimepicker",25),t.NdJ("bsValueChange",function(s){t.CHM(o);const c=t.oxw();return t.KtG(c.getSessionId("exitDateTime",s))}),t.qZA()(),t.TgZ(8,"label",6)(9,"span",7),t._uU(10,"*"),t.qZA(),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",8)(14,"input",28,29),t.NdJ("ngModelChange",function(s){t.CHM(o);const c=t.oxw();return t.KtG(c.form.exitGateId=s)}),t.qZA(),t.YNc(16,K,3,3,"div",11),t.qZA()()}if(2&a){const o=t.MAs(15),n=t.oxw(),s=t.MAs(2);t.xp6(4),t.hij(" ",t.lcZ(5,5,"Exit Date"),": "),t.xp6(3),t.Q6J("value",n.form.exitDateTime),t.xp6(4),t.hij(" ",t.lcZ(12,7,"Exit Gate Id"),": "),t.xp6(3),t.Q6J("ngModel",n.form.exitGateId),t.xp6(2),t.Q6J("ngIf",o.invalid&&(o.dirty||o.touched||s.submitted))}}function W(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"div",30)(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"button",31),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.closeModal())}),t._uU(4,"Close"),t.qZA()()}if(2&a){const o=t.oxw();t.xp6(2),t.Oqu(o.msg)}}let L=(()=>{class a{constructor(o,n,s,c){this.carParkService=o,this.route=n,this.simulatorService=s,this.modalService=c,this.form=(0,r.zgS)(),this.carParkInput$=new h.xQ,this.entryDateTime=new Date,this.routeName="",this.vehicleNoMessage=r.vwt.VehicleNo,this.Dateformat="YYYY-MM-DDTHH:mm:ssZ",this.msg="",this.successResponse=!1,this.routeName=this.route.snapshot.routeConfig.path}ngOnInit(){this.carParks$=this.carParkInput$.pipe((0,g.O)(""),(0,T.b)(200),(0,D.x)(),(0,x.b)(()=>this.carParkLoading=!0),(0,I.w)(o=>this.carParkService.getSimpleList(o).pipe((0,x.b)(()=>{this.carParkLoading=!1,this.route.queryParams.subscribe(n=>{n&&(this.form.carParkId=Number(n.carparkId),this.form.carPlateNo=n.vehicle)})}))))}getSessionId(o,n){let s="";"entry"==this.routeName?(this.form.entryDateTime=n||new Date,s=S(this.form.entryDateTime).format(this.Dateformat)):(this.form.exitDateTime=n||new Date,s=S(this.form.exitDateTime).format(this.Dateformat)),this.form.sessionId=`web_${s}_${this.form.carPlateNo||""}`}openModal(o){this.modalRef=this.modalService.show(o,{class:"modal-md"})}submit(o){o.valid&&(this.successResponse=!1,"entry"==this.routeName?(this.form.entryGateId=+this.form.entryGateId,this.form.entryDateTime=S(this.form.entryDateTime).format("YYYY-MM-DDTHH:mm:ssZ"),this.simulatorService.entrySimulator(this.form).subscribe(n=>{this.msg=n.statusMessage,this.openModal(this.msgModal),this.successResponse=!0},n=>{this.successResponse=!1,this.msg=n.error.message,this.openModal(this.msgModal)})):(this.form.exitGateId=+this.form.exitGateId,this.form.exitDateTime=S(this.form.exitDateTime).format("YYYY-MM-DDTHH:mm:ssZ"),this.simulatorService.exitSimulator(this.form).subscribe(n=>{console.log(n),this.successResponse=!0,this.msg=n.statusMessage,this.openModal(this.msgModal)},n=>{this.msg=n.error.message,this.successResponse=!1,this.openModal(this.msgModal)})))}closeModal(){this.modalRef.hide(),this.successResponse&&this.formVehicle.reset()}cancel(){this.formVehicle.reset()}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(J.x),t.Y36(e.gz),t.Y36(N),t.Y36(w.tT))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-simulator-form"]],viewQuery:function(o,n){if(1&o&&(t.Gf(Q,5),t.Gf(R,5)),2&o){let s;t.iGM(s=t.CRH())&&(n.formVehicle=s.first),t.iGM(s=t.CRH())&&(n.msgModal=s.first)}},decls:48,vars:27,consts:[[1,"m-content"],[1,"m-form","m-form--fit","m-form--label-align-right",3,"ngSubmit"],["formVehicle","ngForm"],[1,"m-portlet"],[1,"m-portlet__body"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-lg-2","col-sm-12"],[1,"m--font-danger"],[1,"col-lg-4","col-sm-12"],["name","carParkId","bindLabel","name","bindValue","id","required","",3,"items","ngModel","typeahead","loading","ngModelChange"],["carParkId","ngModel"],["class","form-control-feedback",4,"ngIf"],["type","text","name","carPlateNo","maxlength","8","pattern","^[A-Z0-9]+$","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["carPlateNo","ngModel"],["class","row form-group m-form__group",4,"ngIf","ngIfElse"],["exitComponent",""],["type","text","name","sessionId","readonly","","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["sessionId","ngModel"],[1,"m-portlet__foot","bg-light-gray"],[1,"row","btnContainer"],[1,"m-form__actions","m-form__actions--right"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-main","m--margin-left-30"],["msgModal",""],[1,"form-control-feedback"],[3,"value","bsValueChange"],["type","text","digitOnly","","name","entryGateId","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["entryGateId","ngModel"],["type","text","digitOnly","","name","exitGateId","required","",1,"form-control","m-input",3,"ngModel","ngModelChange"],["exitGateId","ngModel"],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default","mr-3",3,"click"]],template:function(o,n){if(1&o){const s=t.EpF();t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){t.CHM(s);const f=t.MAs(2);return t.KtG(n.submit(f))}),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6)(7,"span",7),t._uU(8,"*"),t.qZA(),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div",8)(12,"ng-select",9,10),t.NdJ("ngModelChange",function(f){return n.form.carParkId=f}),t.ALo(14,"async"),t.qZA(),t.YNc(15,j,3,3,"div",11),t.qZA(),t.TgZ(16,"label",6)(17,"span",7),t._uU(18,"*"),t.qZA(),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"div",8)(22,"input",12,13),t.NdJ("ngModelChange",function(f){return n.form.carPlateNo=f})("ngModelChange",function(){return n.getSessionId("carPlateNo")}),t.qZA(),t.YNc(24,q,3,3,"div",11),t.qZA()(),t.YNc(25,V,17,9,"div",14),t.YNc(26,$,17,9,"ng-template",null,15,t.W1O),t.TgZ(28,"div",5)(29,"label",6)(30,"span",7),t._uU(31,"*"),t.qZA(),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"div",8)(35,"input",16,17),t.NdJ("ngModelChange",function(f){return n.form.sessionId=f}),t.qZA()()()(),t.TgZ(37,"div",18)(38,"div",19)(39,"div",20)(40,"button",21),t.NdJ("click",function(){return n.cancel()}),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"button",22),t._uU(44),t.ALo(45,"translate"),t.qZA()()()()()()(),t.YNc(46,W,5,1,"ng-template",null,23,t.W1O)}if(2&o){const s=t.MAs(2),c=t.MAs(13),f=t.MAs(23),tt=t.MAs(27);t.xp6(9),t.hij(" ",t.lcZ(10,15,"Car Park"),": "),t.xp6(3),t.Q6J("items",t.lcZ(14,17,n.carParks$))("ngModel",n.form.carParkId)("typeahead",n.carParkInput$)("loading",n.carParkLoading),t.xp6(3),t.Q6J("ngIf",c.invalid&&(c.dirty||c.touched||s.submitted)),t.xp6(4),t.hij(" ",t.lcZ(20,19,"Vehicle No."),": "),t.xp6(3),t.Q6J("ngModel",n.form.carPlateNo),t.xp6(2),t.Q6J("ngIf",f.invalid&&(f.dirty||f.touched||s.submitted)),t.xp6(1),t.Q6J("ngIf","entry"==n.routeName)("ngIfElse",tt),t.xp6(7),t.hij(" ",t.lcZ(33,21,"Session Id"),": "),t.xp6(3),t.Q6J("ngModel",n.form.sessionId),t.xp6(6),t.hij(" ",t.lcZ(42,23,"Cancel")," "),t.xp6(3),t.hij(" ",t.lcZ(45,25,"Submit")," ")}},dependencies:[l.O5,G.J,_._Y,_.Fj,_.JJ,_.JL,_.Q7,_.nD,_.c5,_.On,_.F,E.w9,k.L,l.Ov,M.X$],styles:[".btnContainer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),a})();function F(a){return new C.w(a,"../assets/i18n/",".json")}const X=[{path:"",component:p.f,children:[{path:"",component:d,children:[{path:"",redirectTo:"entry",pathMatch:"full"},{path:"entry",component:L,data:{breadcrumb:{label:"Entry"}}},{path:"exit",component:L,data:{breadcrumb:{label:"Exit"}}}]}]}];let z=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[N],imports:[l.ez,e.Bz.forChild(X),P.x,Z.D,_.u5,E.A0,k.E7,M.aw.forChild({loader:{provide:M.Zw,useFactory:F,deps:[m.eN]}})]}),a})()}}]);