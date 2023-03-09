"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[1613],{71942:(I,y,s)=>{s.d(y,{f:()=>E});var m=s(38014),p=s(3927),f=s(86181),T=s(21086),d=s(27221),v=s(66708),_=s(94650),C=s(60097),U=s(80529),M=s(28555),O=s(91599);let E=(()=>{class x extends p.su{constructor(r,i,c,h){super(i,c),this.carparkService=r,this.http=i,this.store=c,this.modelName="Vehicle",this.handleError=h.createHandleError(`${this.modelName}Service`),this.handleDynamicUrl()}ngOnInit(){}handleDynamicUrl(){const r=JSON.parse(localStorage.getItem("user")).login;this.baseUrl=this.carparkService.isMotorist()&&v.Z.isNotNull(r)?`carpark/api/drivers/${r}/vehicles`:"carpark/api/vehicle/get-vehicles"}getTelList(r,i){console.log(r);const c=this.getUrl((0,f.U8)("carpark/api/vehicle/vehicles",{...r,...(0,f.jq)(i)}));return this.get(c)}filterModel(r,i){const c=this.getUrl((0,f.U8)(this.baseUrl,{...r,...(0,f.jq)(i)}));return this.get(c).pipe((0,d.K)(this.handleError(`${this.modelName}Filter`,{}))).map(h=>Array.isArray(h)?(0,p.eC)(h):(0,p.O7)(h))}updateVehicle(r){const i=this.getUrl(`carpark/api/drivers/${r.driverCode}/vehicles/${r.vehicleId}`);return this.patch(i,r.vehicle).pipe((0,d.K)(this.handleError(`${this.modelName}Update`,{})))}getModel(r){const i=this.getUrl(`carpark/api/vehicle/${r}`);return this.get(i).pipe((0,d.K)(this.handleError(`${this.modelName}Get`,{})))}deleteModel(r,i){const c=this.getUrl(`carpark/api/drivers/${r}/vehicles/${i}`);return this.delete(c).pipe((0,d.K)(this.handleError(`${this.modelName}Delete`)))}deleteAdminModel(r){const i=this.getUrl(`carpark/api/admin/vehicle/${r}`);return this.delete(i).pipe((0,d.K)(this.handleError(`${this.modelName}Delete`)))}createVehicle(r,i){const c=this.getUrl(`carpark/api/drivers/${r}/vehicles`);return this.post(c,i)}putUpdateVehicle(r,i){const c=this.getUrl(`carpark/api/drivers/${r}/vehicles/${i.id}`);return this.put(c,i)}getDriverCode(r){const i=this.getUrl(`carpark/api/drivers/${r}/driverCode`);return this.get(i)}createModel(r,i){const c=this.getUrl(`carpark/api/drivers/${r}/vehicles`);return this.post(c,i).pipe((0,d.K)(this.handleError(`${this.modelName}Create`,{})))}createVehicleAdmin(r){const i=this.getUrl(`carpark/api/admin/vehicles/${r.mobile}`);return this.post(i,r).pipe((0,d.K)(this.handleError(`${this.modelName}Create`,{})))}updateModel(r){const i=this.getUrl("carpark/api/admin/vehicle-changes");return this.post(i,r).pipe((0,d.K)(this.handleError(`${this.modelName}Update`,{})))}getSimpleList(){const r=this.getUrl("carpark/api/vehicle/simple-vehicles-list");return this.get(r).pipe((0,d.K)(this.handleError(`${this.modelName}SimpleList`,{})))}filterModelByDriver(r){const i=this.getUrl(`carpark/api/drivers/${r}/vehicles`);return this.get(i).pipe((0,d.K)(()=>(0,T.of)([])))}isOperator(){const r=JSON.parse(localStorage.getItem("user-roles"));return!(!v.Z.isNotNull(r)||!r.includes(m.i44.Operator))}getUserVehicle(r,i){this.baseUrl=`carpark/api/drivers/${r}/vehicles`;const c=this.getUrl((0,f.U8)(this.baseUrl,{...(0,f.jq)(i)}));return this.get(c).pipe((0,d.K)(this.handleError(`${this.modelName}Filter`,{}))).map(h=>Array.isArray(h)?(0,p.eC)(h):(0,p.O7)(h))}}return x.\u0275fac=function(r){return new(r||x)(_.LFG(C.x),_.LFG(U.eN),_.LFG(M.yh),_.LFG(O.k))},x.\u0275prov=_.Yz7({token:x,factory:x.\u0275fac}),x})()},53033:(I,y,s)=>{s.d(y,{Z:()=>f,e:()=>T});var m=s(36895),p=s(94650);let f=(()=>{class d extends m.H9{transform(_,C,U,M,O){if(!C)return"";switch(C.toUpperCase()){case"MMK":return`MMK ${_}`;case"SGD":return`$${_}`;default:return super.transform(_,C,U,M,O)}}}return d.\u0275fac=function(){let v;return function(C){return(v||(v=p.n5z(d)))(C||d)}}(),d.\u0275pipe=p.Yjl({name:"excurrency",type:d,pure:!0}),d})(),T=(()=>{class d{transform(_){return _/100}}return d.\u0275fac=function(_){return new(_||d)},d.\u0275pipe=p.Yjl({name:"cent2Dollar",type:d,pure:!0}),d})()},77512:(I,y,s)=>{s.r(y),s.d(y,{BusTransactionModule:()=>ue});var m=s(36895),p=s(24006),f=s(34793),T=s(60097),d=s(36511),v=s(91599),_=s(42684),C=s(4666),U=s(71942),M=s(30329),O=s(59501),E=s(88796),x=s(64050),o=s(54405),r=s(44466),i=s(29252),c=s(4358),h=s(1236),b=s(21532),L=s(13309),F=s(70362),A=s(37340),H=s(83513),D=s(66708),N=s(27221),B=s(92198),Z=s(21086),P=s(9648),e=s(94650),w=s(20388),R=s(83845),z=s(69436),$=s(76916),K=s(11415),J=s(1649);const W=["welcomeNewRegistration"],V=["modalMsg"];function G(a,u){if(1&a&&(e.TgZ(0,"div",12)(1,"alert",13),e._uU(2),e.qZA()()),2&a){const t=u.$implicit;e.Q6J("hidden",!t.type),e.xp6(1),e.Q6J("type",t.type)("dismissOnTimeout",t.timeout),e.xp6(1),e.Oqu(t.msg)}}function k(a,u){if(1&a&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",6),e.YNc(3,G,3,4,"div",7),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9)(6,"div",10),e._UZ(7,"app-bus-transactions-table",11),e.qZA()()()()),2&a){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.alerts),e.xp6(4),e.Q6J("isExtended",!0)}}function j(a,u){1&a&&(e.ynx(0),e._UZ(1,"app-bus-transaction-overview"),e.BQk())}function Q(a,u){1&a&&(e.TgZ(0,"div"),e._UZ(1,"img",22),e.TgZ(2,"h4",23),e._uU(3,"Fast Search"),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"Find available lots on the go."),e.qZA()())}function Y(a,u){if(1&a&&(e.TgZ(0,"div"),e._UZ(1,"img",24),e.TgZ(2,"h4",23),e._uU(3,"Flexible Parking Time"),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"Adjust on-street parking sessions conveniently."),e.qZA()()),2&a){const t=e.oxw(3);e.Q6J("@toggleClick",t.isBlockInstruction)}}function X(a,u){if(1&a&&(e.TgZ(0,"div"),e._UZ(1,"img",25),e.TgZ(2,"h4",23),e._uU(3,"Cashless Parking"),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"No more handling of cash."),e.qZA()()),2&a){const t=e.oxw(3);e.Q6J("@toggleClick",t.isBlockInstruction)}}function q(a,u){if(1&a&&(e.TgZ(0,"div"),e._UZ(1,"img",26),e.TgZ(2,"h4",23),e._uU(3,"Parking Made Simple"),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"Discover more."),e.qZA()()),2&a){const t=e.oxw(3);e.Q6J("@toggleClick",t.isBlockInstruction)}}function ee(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16)(2,"h2",17),e._uU(3,"Welcome to GoParkin"),e.qZA()()(),e.TgZ(4,"div",18),e.YNc(5,Q,6,0,"ng-template",14),e.YNc(6,Y,6,1,"ng-template",14),e.YNc(7,X,6,1,"ng-template",14),e.YNc(8,q,6,1,"ng-template",14),e.qZA(),e.TgZ(9,"div",19)(10,"div",20)(11,"button",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onNextOfInstruction())}),e._uU(12),e.qZA()()()}if(2&a){const t=e.oxw(2);e.xp6(5),e.Q6J("ngIf",1===t.currentStepOfInstruction),e.xp6(1),e.Q6J("ngIf",2===t.currentStepOfInstruction),e.xp6(1),e.Q6J("ngIf",3===t.currentStepOfInstruction),e.xp6(1),e.Q6J("ngIf",4===t.currentStepOfInstruction),e.xp6(4),e.hij(" ",t.btnTextInstruction," ")}}function te(a,u){1&a&&(e.TgZ(0,"div",49),e._uU(1," Field is required. "),e.qZA())}function re(a,u){1&a&&(e.TgZ(0,"div",49),e._uU(1," Invalid Email Address "),e.qZA())}function ie(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"div",12)(1,"alert",52),e.NdJ("onClosed",function(){const g=e.CHM(t).$implicit,S=e.oxw(4);return e.KtG(S.onClosed(g))}),e._uU(2),e.qZA()()}if(2&a){const t=u.$implicit,l=e.oxw(4);e.Q6J("hidden",!t.type),e.xp6(1),e.Q6J("type",t.type)("dismissOnTimeout",t.timeout)("dismissible",l.dismissible),e.xp6(1),e.hij("",t.msg," ")}}function ne(a,u){if(1&a&&(e.TgZ(0,"div",50)(1,"div",51),e.YNc(2,ie,3,5,"div",7),e.qZA()()),2&a){const t=e.oxw(3);e.xp6(2),e.Q6J("ngForOf",t.popUpMessage)}}function se(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"button",46),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.goBack())}),e._uU(1," Back "),e.qZA()}}function ae(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"button",53),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onNext())}),e._uU(1," Next "),e.qZA()}if(2&a){const t=e.oxw(3);e.Q6J("disabled",""===t.yourProfileForm.username)}}function oe(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"button",53),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onComplete())}),e._uU(1," Done "),e.qZA()}if(2&a){const t=e.oxw(3);e.Q6J("disabled",!t.enableAddCard)}}function ce(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"div",15)(1,"p-steps",27),e.NdJ("activeIndexChange",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.activeIndexStepWelcome=n)}),e.qZA()(),e.TgZ(2,"div",28)(3,"div",29)(4,"h5"),e._uU(5,"Personal Information"),e.qZA(),e.TgZ(6,"div",30)(7,"label",31)(8,"span",32),e._uU(9,"*"),e.qZA(),e._uU(10," Name: "),e.qZA(),e.TgZ(11,"div",33)(12,"input",34,35),e.NdJ("ngModelChange",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.yourProfileForm.username=n)}),e.qZA(),e.YNc(14,te,2,0,"div",36),e.qZA(),e.TgZ(15,"label",31),e._uU(16," Email: "),e.qZA(),e.TgZ(17,"div",33)(18,"input",37,38),e.NdJ("ngModelChange",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.yourProfileForm.email=n)}),e.qZA(),e.YNc(20,re,2,0,"div",36),e.qZA()(),e.TgZ(21,"div",30)(22,"label",31),e._uU(23," Mailing Address: "),e.qZA(),e.TgZ(24,"div",33)(25,"input",39,40),e.NdJ("ngModelChange",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.yourProfileForm.address=n)}),e.qZA()()(),e.TgZ(27,"div",41)(28,"span",32),e._uU(29,"*"),e.qZA(),e._uU(30," Required field(s) "),e.qZA()(),e.TgZ(31,"div",29)(32,"h5"),e._uU(33,"Payment Method"),e.qZA(),e.TgZ(34,"app-card",42),e.NdJ("calledAddNew",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onCalledAddNew(n))})("enableAddCard",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onGetEnableAddCard(n))})("eCardNumberError",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onGetCardNumberError(n))}),e.qZA()(),e.TgZ(35,"div",29)(36,"h5"),e._uU(37,"Add your first Vehicle"),e.qZA(),e.TgZ(38,"app-create-vehicle-form",43),e.NdJ("submitted",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onSubmitCreateVehicle(n))})("firstVehicleValid",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onGetCreateVehicleFormValid(n))}),e.qZA()(),e.YNc(39,ne,3,1,"ng-template",14),e.qZA(),e.TgZ(40,"div",44)(41,"div",45)(42,"button",46),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onSkip())}),e._uU(43," Skip "),e.qZA(),e.TgZ(44,"div"),e.YNc(45,se,2,0,"button",47),e.YNc(46,ae,2,1,"button",48),e.YNc(47,oe,2,1,"button",48),e.qZA()()()}if(2&a){const t=e.MAs(13),l=e.MAs(19),n=e.oxw(2);e.xp6(1),e.Q6J("activeIndex",n.activeIndexStepWelcome)("model",n.items),e.xp6(2),e.Q6J("hidden",1!==n.currentStep),e.xp6(9),e.Q6J("ngModel",n.yourProfileForm.username),e.xp6(2),e.Q6J("ngIf",t.invalid&&(t.dirty||t.touched||!n.yourProfileForm.username&&n.popUpMessage.length>0)),e.xp6(4),e.Q6J("ngModel",n.yourProfileForm.email),e.xp6(2),e.Q6J("ngIf",l.invalid&&(l.dirty||l.touched)&&(null==l.errors?null:l.errors.pattern)),e.xp6(5),e.Q6J("ngModel",n.yourProfileForm.address),e.xp6(6),e.Q6J("hidden",n.currentStep!==n.maxStep),e.xp6(3),e.Q6J("updateCard",n.updateCard),e.xp6(1),e.Q6J("hidden",2!==n.currentStep),e.xp6(3),e.Q6J("createVehicle",n.isCreated),e.xp6(1),e.Q6J("ngIf",n.popUpMessage.length>0),e.xp6(6),e.Q6J("ngIf",1!==n.currentStep),e.xp6(1),e.Q6J("ngIf",n.currentStep<n.maxStep),e.xp6(1),e.Q6J("ngIf",n.currentStep>=n.maxStep)}}function le(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"div",54)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"button",55),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.closeModal())}),e._uU(4,"Okay"),e.qZA()()}if(2&a){const t=e.oxw(2);e.xp6(2),e.Oqu(t.successfullyRegisteredMsg)}}function he(a,u){if(1&a&&(e.YNc(0,ee,13,5,"ng-template",14),e.YNc(1,ce,48,16,"ng-template",14),e.YNc(2,le,5,1,"ng-template",14)),2&a){const t=e.oxw();e.Q6J("ngIf",t.isInstruction&&!t.showAlert),e.xp6(1),e.Q6J("ngIf",!t.isInstruction&&!t.showAlert),e.xp6(1),e.Q6J("ngIf",!t.isInstruction&&t.showAlert)}}const de=[{path:"",component:O.f,children:[{path:"",component:(()=>{class a{constructor(t,l,n,g,S,me){this.router=t,this.modalService=l,this.vehicleService=n,this._profileSettingsServices=g,this.carparkService=S,this._zone=me,this.currentStep=1,this.maxStep=3,this.updateCard=!1,this.yourProfileForm=new H.y,this.isCreated=!1,this.breadcrumbs=[{text:"Transactions"}],this.carParks=[],this.isInstruction=!0,this.currentStepOfInstruction=1,this.maxStepOfInstruction=4,this.btnTextInstruction="Next",this.activeIndexStepWelcome=0,this.isBlockInstruction="false",this.updateVehicleInfo={id:null},this.dismissible=!0,this.successfullyRegisteredMsg="Your account has been successfully registered!",this.showAlert=!1,this.configModal={ignoreBackdropClick:!0,class:"gray modal-md"},this.alerts=[{type:null,msg:null,timeout:0}],this.popUpMessage=[{type:null,msg:null,timeout:0}],this.currentTab="list"}changeTab(t){this.currentTab=t}ngOnInit(){this.getProfile(),this.items=[{label:"1. Personal Information",icon:"pi pi-plus"},{label:"2. Vehicle Information",icon:"pi pi-download"},{label:"3. Payment Method"}],localStorage.getItem("newRegistration")&&setTimeout(()=>{this.openModalWithClass(this.welcomeNewRegistration,this.configModal)},1e3),localStorage.removeItem("newRegistration")}onNextOfInstruction(){this.isBlockInstruction="true"===this.isBlockInstruction?"false":"true",this.currentStepOfInstruction+=1,this.currentStepOfInstruction>this.maxStepOfInstruction&&(this.modalService.hide(1),this.configModal.class="gray modal-lg",setTimeout(()=>{this.isInstruction=!1,this.openModalWithClass(this.welcomeNewRegistration,this.configModal)},1e3)),this.currentStepOfInstruction===this.maxStepOfInstruction&&(this.btnTextInstruction="Let's Get Started")}onGetCreateVehicleFormValid(t){}gotoCreate(){this.router.navigate(["/transactions/create"])}getProfile(){this._profileSettingsServices.getUpdateProfileDetails().subscribe(t=>{this.yourProfileForm=t})}openModalWithClass(t,l){this.modalRef=this.modalService.show(t,this.configModal)}onSkip(){this.onPopUpNoError(),this.currentStep>this.maxStep&&setTimeout(()=>{this.showAlert=!0},1e3)}onNext(){if(1===this.currentStep){if(!this.yourProfileForm.username)return void this.popUpMessage.push({type:"warning",msg:"Ensure all required fields are completed.",timeout:P.W.middleTime});if(this.yourProfileForm.username.length<3)return void this.popUpMessage.push({type:"warning",msg:"Name field needs at least 3 characters",timeout:P.W.middleTime});if(this.yourProfileForm.email&&!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.yourProfileForm.email))return;this.subscription=this._profileSettingsServices.submitUpdateProfileForm({address:this.yourProfileForm.address,email:this.yourProfileForm.email,id:this.yourProfileForm.id,facebookId:this.yourProfileForm.facebookId,nationality:this.yourProfileForm.nationality,username:this.yourProfileForm.username}).subscribe(l=>{D.Z.isNotNull(l.id)&&this.onPopUpNoError()},l=>{const{error:n}=l;this.popUpMessage.push({type:"warning",msg:`${n.status} ${n.message}`,timeout:P.W.middleTime})})}else 2===this.currentStep&&(this.isCreated=!this.isCreated)}goBack(){1!==this.currentStep&&(2===this.currentStep&&this.getProfile(),this.currentStep-=1,this.activeIndexStepWelcome-=1,this.popUpMessage=[])}onPopUpNoError(){this.currentStep+=1,this.activeIndexStepWelcome+=1,this.popUpMessage=[]}onCalledAddNew(t){t&&setTimeout(()=>{this.showAlert=!0},1e3)}onGetEnableAddCard(t){this.enableAddCard=t}onGetCardNumberError(t){this._zone.run(()=>{D.Z.isNotNull(t.error)?this.popUpMessage.push({type:"warning",msg:`${t.status} ${t.error.message}`,timeout:P.W.middleTime}):("invalid_cvc"===t.code&&this.popUpMessage.push({type:"warning",msg:"Invalid CVV/CVC number.",timeout:P.W.middleTime}),("incorrect_number"===t.code||"invalid_number"===t.code)&&this.popUpMessage.push({type:"warning",msg:"Invalid card number.",timeout:P.W.middleTime}))})}onComplete(){this.updateCard=!this.updateCard}updateVehicle(t,l){this.vehicleService.putUpdateVehicle(t,l).pipe((0,N.K)(n=>(this.setErrorMessage(n.error),(0,Z.of)(null))),(0,B.h)(n=>n)).subscribe(n=>{this.updateVehicleInfo=n,this.onPopUpNoError()})}onSubmitCreateVehicle(t){if(t.errorMsg)return void this.popUpMessage.push({type:"warning",msg:"Ensure all required fields are completed",timeout:P.W.middleTime});const l=JSON.parse(localStorage.getItem("user")).login;this.vehicleService.createVehicle(l,t).pipe((0,N.K)(n=>{const{error:g}=n;if(this.popUpMessage.push({type:"warning",msg:`${g.status} ${g.message}`,timeout:P.W.middleTime}),404!==n.error.status||!this.updateVehicleInfo.id)return this.setErrorMessage(n.error),(0,Z.of)(null);{const S={...t,id:this.updateVehicleInfo.id};this.updateVehicle(l,S)}}),(0,B.h)(n=>n)).subscribe(n=>{this.updateVehicleInfo=n,this.onPopUpNoError()})}checkVehicleForDriver(t,l){return this.vehicleService.getDriverCode(t).subscribe(n=>n===l&&this.onPopUpNoError(),n=>n.error&&n.error.text===l&&this.onPopUpNoError()),!0}setErrorMessage(t){this.updateVehicleInfo={id:null},this.popUpMessage.push({type:"warning",msg:`${t.message}`,timeout:P.W.middleTime})}get isMotorist(){return this.carparkService.isMotorist()}onClosed(t){this.alerts=this.alerts.filter(l=>l!==t)}closeModal(){this.modalService.hide(1),setTimeout(()=>{this.showAlert=!1},1e3)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(f.F0),e.Y36(w.tT),e.Y36(U.f),e.Y36(o.x),e.Y36(T.x),e.Y36(e.R0b))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-bus-transactions-home"]],viewQuery:function(t,l){if(1&t&&(e.Gf(W,5),e.Gf(V,5)),2&t){let n;e.iGM(n=e.CRH())&&(l.welcomeNewRegistration=n.first),e.iGM(n=e.CRH())&&(l.modalMsg=n.first)}},decls:6,vars:2,consts:[[1,"body-wrapper"],["class","m-content",4,"ngIf"],[4,"ngIf"],["welcomeNewRegistration",""],[1,"m-content"],[1,"row"],[1,"col-sm-4","mx-auto"],["class","mt-3 mt-3",3,"hidden",4,"ngFor","ngForOf"],[1,"m-portlet","m-portlet--bordered-semi","m--padding-top-40"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame"],[3,"isExtended"],[1,"mt-3","mt-3",3,"hidden"],[3,"type","dismissOnTimeout"],[3,"ngIf"],[1,"modal-header"],[1,"row","mx-auto"],[1,"col-sm-12","text-muted"],[1,"modal-body","m-form","m-form--fit","m-form--label-align-right","text-center"],[1,"m-portlet__foot","bg-light-gray","text-center"],[1,"my-3","m-form__actions","m-form__actions--right"],[1,"btn","btn-main","m--margin-left-30",3,"click"],["src","./assets/app/media/img/misc/instruction-step-1.jpg","alt","Fast Parking Search",1,"w-50"],[1,"text-main"],["src","./assets/app/media/img/misc/instruction-step-2.jpg","alt","Adjust Time To Suit You",1,"w-50"],["src","./assets/app/media/img/misc/instruction-step-3.jpg","alt","Cashless Parking",1,"w-50"],["src","./assets/app/media/img/misc/instruction-step-4.jpg","alt","Go & Park in the Easiest Way",1,"w-50"],[1,"w-75","mx-auto",3,"activeIndex","model","activeIndexChange"],[1,"modal-body","m-form","m-form--fit","m-form--label-align-right"],[3,"hidden"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-lg-2","col-sm-12"],[1,"m--font-danger"],[1,"col-lg-4","col-sm-12"],["type","text","placeholder","","required","","name","username",1,"form-control","m-input",3,"ngModel","ngModelChange"],["username","ngModel"],["class","form-control-feedback",4,"ngIf"],["type","email","placeholder","","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","name","email",1,"form-control","m-input",3,"ngModel","ngModelChange"],["email","ngModel"],["type","text","placeholder","","name","address",1,"form-control","m-input",3,"ngModel","ngModelChange"],["address","ngModel"],[1,"row","form-group","m-form__group","requiredText"],[3,"updateCard","calledAddNew","enableAddCard","eCardNumberError"],[3,"createVehicle","submitted","firstVehicleValid"],[1,"m-portlet__foot","bg-light-gray"],[1,"my-3","m-form__actions","m-form__actions--right","mr-5","skipLeft"],[1,"btn","btn-outline-main","m--margin-left-30",3,"click"],["class","btn btn-outline-main m--margin-left-30",3,"click",4,"ngIf"],["class","btn btn-main m--margin-left-30 float-right mr-4",3,"disabled","click",4,"ngIf"],[1,"form-control-feedback"],[1,"row","mt-3"],[1,"col-lg-9","mx-auto"],[1,"text-center",3,"type","dismissOnTimeout","dismissible","onClosed"],[1,"btn","btn-main","m--margin-left-30","float-right","mr-4",3,"disabled","click"],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default","mr-3",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-title-bar"),e.YNc(2,k,8,2,"div",1),e.YNc(3,j,2,0,"ng-container",2),e.qZA(),e.YNc(4,he,3,3,"ng-template",null,3,e.W1O)),2&t&&(e.xp6(2),e.Q6J("ngIf","list"===l.currentTab),e.xp6(1),e.Q6J("ngIf","overveiw"===l.currentTab))},dependencies:[m.sg,m.O5,R.G,z.A,$.G,K.t,J.d,p.Fj,p.JJ,p.Q7,p.c5,p.On,c.wx,h.R],styles:[".modal-header .ui-steps .ui-steps-item{width:30%}.modal-header .ui-steps .ui-steps-item.ui-state-highlight .ui-steps-number{background:#00bdb5!important}.modal-header .ui-steps .ui-steps-item.ui-state-highlight .ui-steps-title{color:#6c757d!important}.requiredText{color:#3f4047;font-size:16px;font-weight:400}.skipLeft{display:flex;justify-content:space-between;width:100%}\n"],encapsulation:2,data:{animation:[(0,A.X$)("toggleClick",[(0,A.SB)("false",(0,A.oB)({backgroundColor:"transparent"})),(0,A.SB)("true",(0,A.oB)({backgroundColor:"transparent"})),(0,A.eR)("false => true",[(0,A.jt)("5s 10ms cubic-bezier(.17,.67,.88,.1)")]),(0,A.eR)("true => false",[(0,A.jt)("5s 10ms cubic-bezier(.17,.67,.88,.1)")])])]}}),a})()}]}];let ue=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[v.k,_.e,C.p,T.x,U.f,d.I,x.F,o.x],imports:[m.ez,r.m,f.Bz.forChild(de),L.p,b.x,M.D,F.X,E.A0,p.u5,c.nM,i.E7,h.q,f.Bz]}),a})()},12719:(I,y,s)=>{s.d(y,{X:()=>O});var m=s(92340),p=s(65136),f=s(21086),T=s(80529),d=s(59973),v=s(24850),_=s(27221),C=s(94650),U=s(28555),M=s(91599);let O=(()=>{class E extends p.b{constructor(o,r,i){super(r,o),this.store=o,this.http=r,this.httpErrorHandler=i,this._stripeDevConfig={apiHost:m.N.stripeVersion,secretKey:m.N.publishStripeKey,defaultCustomer:"cus_CUVxrGmL9yA2OQ"},this.handleError=i.createHandleError("WalletService")}getStatusCreditCard(o){return this.get(`${m.N.apiHost}/carpark/api/credit-cards/search?userId=${o}`)}getListBillingHistory(o,r=null){let i="";if(i=`${m.N.apiHost}/carpark/api/payment/drivers/wallet/billings`,o&&(i=`${m.N.apiHost}/carpark/api/payment/drivers/${o}/wallet/billings`),r){let c="";for(let h in r)c+=c?`&${h}=${r[h]}`:`?${h}=${r[h]}`;i+=c}return this.get(i)}getBillingHistoryDetail(o){return this.post(`${m.N.apiHost}/carpark/api/drivers/wallet/billings`,o)}getAccInformations(o){return this.get(`${m.N.apiHost}/carpark/api/account-informations/${o}`)}submitTopupPayment(o,r){return this.post(`${m.N.apiHost}/carpark/api/top-up-payments/${o}`,r)}postPayToggle(o){return this.post(`${m.N.apiHost}/carpark/api/account-profiles/update`,o)}getCardDetail(o){return this.getRequest(`${this._stripeDevConfig.apiHost}/customers/${o}/sources`)}deleteCardNumber(o,r){return this.deleteRequest(`${this._stripeDevConfig.apiHost}/customers/${o}/sources/${r}`)}addCreditCards(o){return this.post(`${m.N.apiHost}/carpark/api/credit-cards`,o)}deleteCreditCards(o,r){return this.delete(`${m.N.apiHost}/carpark/api/credit-cards/${r}`,{body:o})}addCardNumberStepTwo(o,r){return this.postRequest(`${this._stripeDevConfig.apiHost}/customers/${o}/sources?source=${r}`)}addCardNumberStepOne(o){return this.postRequest(`${this._stripeDevConfig.apiHost}/tokens?${o}`)}getCreditPacks(){return this.get(`${m.N.apiHost}/carpark/api/credit-packs`)}setHeaderStripe(){return new T.WM({accept:"application/json","Content-Type":"application/x-www-form-urlencoded ",Authorization:`Bearer ${this._stripeDevConfig.secretKey}`})}getRequest(o,r=null){r&&(r=JSON.stringify(r));const i=this.setHeaderStripe();return this.http.get(o,{headers:i,params:r}).pipe((0,d.X)(1),(0,v.U)(c=>c),(0,_.K)(c=>(0,f.of)(c)))}postRequest(o,r){const i=this.setHeaderStripe();return this.http.post(o,r,{headers:i}).pipe((0,v.U)(c=>c))}deleteRequest(o){const r=this.setHeaderStripe();return this.http.delete(o,{headers:r}).pipe((0,v.U)(i=>i),(0,_.K)(this.handleError()))}makePayment(o){const r=this.getUrl("carpark/api/drivers/wallet/billings/payment");return this.post(r,o)}}return E.\u0275fac=function(o){return new(o||E)(C.LFG(U.yh),C.LFG(T.eN),C.LFG(M.k))},E.\u0275prov=C.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},34984:(I,y,s)=>{s.d(y,{Ns:()=>x,_w:()=>E});var m=s(15861),p=s(94650),f=s(21086),T=s(68896),d=s(8929),v=s(20353),_=s(34202),C=s(66753),U=s(87545);class M{constructor(r){this.changes=r}static of(r){return new M(r)}notEmpty(r){if(this.changes[r]){const i=this.changes[r].currentValue;if(null!=i)return(0,f.of)(i)}return T.E}has(r){return this.changes[r]?(0,f.of)(this.changes[r].currentValue):T.E}notFirst(r){return this.changes[r]&&!this.changes[r].isFirstChange()?(0,f.of)(this.changes[r].currentValue):T.E}notFirstAndEmpty(r){if(this.changes[r]&&!this.changes[r].isFirstChange()){const i=this.changes[r].currentValue;if(null!=i)return(0,f.of)(i)}return T.E}}const O=new p.OlP("NGX_ECHARTS_CONFIG");let E=(()=>{class o{constructor(i,c,h){this.el=c,this.ngZone=h,this.autoResize=!0,this.loadingType="default",this.chartInit=new p.vpe,this.optionsError=new p.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new d.xQ,this.echarts=i.echarts}ngOnChanges(i){const c=M.of(i);c.notFirstAndEmpty("options").subscribe(h=>this.onOptionsChange(h)),c.notFirstAndEmpty("merge").subscribe(h=>this.setOption(h)),c.has("loading").subscribe(h=>this.toggleLoading(!!h)),c.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,C.p)(100,v.z,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(i){this.chart&&(i?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(i,c){if(this.chart)try{this.chart.setOption(i,c)}catch(h){console.error(h),this.optionsError.emit(h)}}refreshChart(){var i=this;return(0,m.Z)(function*(){i.dispose(),yield i.initChart()})()}createChart(){const i=this.el.nativeElement;if(window&&window.getComputedStyle){const c=window.getComputedStyle(i,null).getPropertyValue("height");(!c||"0px"===c)&&(!i.style.height||"0px"===i.style.height)&&(i.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:h})=>h(i,this.theme,this.initOpts)))}initChart(){var i=this;return(0,m.Z)(function*(){yield i.onOptionsChange(i.options),i.merge&&i.chart&&i.setOption(i.merge)})()}onOptionsChange(i){var c=this;return(0,m.Z)(function*(){!i||(c.chart||(c.chart=yield c.createChart(),c.chartInit.emit(c.chart)),c.setOption(c.options,!0))})()}createLazyEvent(i){return this.chartInit.pipe((0,U.w)(c=>new _.y(h=>(c.on(i,b=>this.ngZone.run(()=>h.next(b))),()=>{this.chart&&(this.chart.isDisposed()||c.off(i))}))))}}return o.\u0275fac=function(i){return new(i||o)(p.Y36(O),p.Y36(p.SBq),p.Y36(p.R0b))},o.\u0275dir=p.lG2({type:o,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[p.TTD]}),o})(),x=(()=>{class o{static forRoot(i){return{ngModule:o,providers:[{provide:O,useValue:i}]}}static forChild(){return{ngModule:o}}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=p.oAB({type:o}),o.\u0275inj=p.cJS({}),o})()}}]);