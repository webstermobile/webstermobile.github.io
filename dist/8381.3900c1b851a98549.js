(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[8381],{83513:(N,x,t)=>{"use strict";t.d(x,{r:()=>d,y:()=>e});class e{constructor(D,A,g,_,E,T,i,a){this.email=D,this.id=A,this.username=g,this.address=_,this.nric=E,this.facebookId=T,this.race=i,this.nationality=a}}class d{constructor(D,A,g,_,E,T,i,a,O,u,C,p,m,n){this.login=D,this.name=A,this.email=g,this.department=_,this.contactNo=E,this.address=T,this.unitNumber=i,this.buildingName=a,this.postalCode=O,this.active=u,this.roadName=C,this.floorNumber=p,this.unitNoApplicable=m,this.blockNo=n}}},54405:(N,x,t)=>{"use strict";t.d(x,{x:()=>_});var e=t(3927),d=t(92340),f=t(94650),D=t(80529),A=t(28555),g=t(91599);let _=(()=>{class E extends e.su{constructor(i,a,O){super(i,a),this.http=i,this.store=a,this.modelName="Profile",this.baseUrl="carpark/api/motorist-profiles",this.accountBaseUrl="api/account",this.handleError=O.createHandleError(`${this.modelName}Service`)}getUpdateProfileDetails(){return this.get(this.getUrl(this.baseUrl)).map(i=>this.profile=i)}getUpdateProfileTicket(){return this.get(`${d.N.apiHost}/carpark/api/organization-profile/NTU/me`).map(a=>this.profile=a)}submitUpdateProfileForm(i=null){return this.post(`${d.N.apiHost}/${this.baseUrl}`,i)}submitUpdateProfileTicket(i){return this.post(`${d.N.apiHost}/carpark/api/organization-profile/NTU/me`,i)}submitChangePasswordForm(i=null){return this.post(`${d.N.apiHost}/${this.accountBaseUrl}/change_password`,i)}searchMsg(i){return this.http.get(`https://developers.onemap.sg/commonapi/search?searchVal=${i}&returnGeom=N&getAddrDetails=Y`)}}return E.\u0275fac=function(i){return new(i||E)(f.LFG(D.eN),f.LFG(A.yh),f.LFG(g.k))},E.\u0275prov=f.Yz7({token:E,factory:E.\u0275fac}),E})()},4666:(N,x,t)=>{"use strict";t.d(x,{p:()=>O}),t(38014);var d=t(3927),f=t(26245),D=t(27221),A=t(66708),g=t(94650),_=t(60097),E=t(93764),T=t(80529),i=t(28555),a=t(91599);let O=(()=>{class u extends d.su{constructor(p,m,n,l,r){super(n,l),this.carparkService=p,this.condoService=m,this.http=n,this.store=l,this.modelName="Transaction",this.handleError=r.createHandleError(`${this.modelName}Service`)}ngOnInit(){}handleDynamicUrl(){const p=JSON.parse(localStorage.getItem("user")).login;this.baseUrl=this.carparkService.isMotorist()&&A.Z.isNotNull(p)?`carpark/api/drivers/${p}/transactions`:this.condoService.isCondoOwner()?"carpark/api/working-sessions/transactions":"carpark/api/car-parks/transactions"}filterModel(p,m){return this.handleDynamicUrl(),super.filterModel(p,m).map(n=>n.data?n:{data:[],pagination:(0,f.f$)()})}fetchAbnormalTransactions(p,m){const n=(0,f.U8)("carpark/api/car-parks/transactions/abnormal",{...p,...(0,f.jq)(m)});return this.get(this.getUrl(n)).map(d.O7)}fetchAbnormalTransaction(p){return this.get(this.getUrl(`carpark/api/parking-transactions/${p}`))}verifyAbnormalTransaction(p){return this.post(this.getUrl(`carpark/api/parking-transactions/${p.id}/update`),p)}filterByVehicle(p,m){const n=this.getUrl((0,f.U8)(`carpark/api/parking-transactions/plateNo/${p}`,{...(0,f.jq)(m)}));return this.get(n).pipe((0,D.K)(this.handleError(`${this.modelName}Filter`,{}))).map(l=>Array.isArray(l)?(0,d.eC)(l):(0,d.O7)(l))}createModel(p){const m=this.getUrl("carpark/api/parking-transactions-entry");return this.post(m,p)}closeTransactions(p){const m=this.getUrl(`carpark/api/close/working-sessions/${p}`);return this.put(m,null)}getFile(p){const m=this.getUrl(`carpark/api/printTransactionReceipt/pdf/parking_transaction/${p}`);return this.get(m,{responseType:"blob"})}findIndentByPage(p,m){const n=this.getUrl(`scp-app-ordermanagement/chargepile/findIndentByPage/${m.rowsPerPage}/${m.page}`);return this.post(n,p)}exportExcellist(p,m){const n=this.getUrl("scp-app-ordermanagement/chargepile/exportFindIndent");return this.post(n,p,{responseType:"blob"})}exportExcelDetail(p,m){const n=this.getUrl("scp-app-ordermanagement/chargepile/export/detail");return this.post(n,p,{responseType:"blob"})}exportCondoOwnerExcel(p){const m=(0,f.U8)("carpark/api/working-sessions/exportParkingTransaction",{...p});return this.get(this.getUrl(m),{responseType:"blob"})}}return u.\u0275fac=function(p){return new(p||u)(g.LFG(_.x),g.LFG(E.p),g.LFG(T.eN),g.LFG(i.yh),g.LFG(a.k))},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac}),u})()},69436:(N,x,t)=>{"use strict";t.d(x,{A:()=>p});var e=t(94650),d=t(15439),D=t(21837),A=t(38014),g=t(66708),_=t(12719),E=t(36895),T=t(24006),i=t(35635),a=t(96599),O=t(29252);function u(m,n){1&m&&(e.TgZ(0,"div",19)(1,"span",8),e._uU(2,"* Required field "),e.qZA()())}function C(m,n){1&m&&(e.TgZ(0,"div",19)(1,"span",8),e._uU(2,"* Required field "),e.qZA()())}let p=(()=>{class m{constructor(l){this.walletService=l,this.updateCard=!1,this.calledAddNew=new e.vpe(!1),this.enableAddCard=new e.vpe,this.eCardNumberError=new e.vpe,this.existAccount=!0,this.sourceStripe={},this.driverCode=JSON.parse(localStorage.getItem("user")).login,this.timeExpiredDate={value:[D.ou.local().minus({weeks:1}).toJSDate(),new Date],type:A.Nxg.Month},this.alerts=[{type:null,msg:null,timeout:0}]}ngOnInit(){this.onGetStatusCreditCard(),this.initExpiredDate()}ngOnChanges(l){g.Z.isNotNull(l.updateCard.previousValue)&&l.updateCard.currentValue!==l.updateCard.previousValue&&this.onAddNewCard()}ngDoCheck(){g.Z.isUndefinedOrNull(this.cardNumber)||g.Z.isUndefinedOrNull(this.cvc)||""===this.cardNumber||""===this.cvc?this.enableAddCard.emit(!1):this.enableAddCard.emit(!0)}ngOnDestroy(){}changeStartDate(l){Array.isArray(l)||(this.timeExpiredDate=l,this.sourceStripe.exp_year=d(l.value[0],"DD/MM/YYYY").format("YYYY"),this.sourceStripe.exp_month=d(l.value[0],"DD/MM/YYYY").format("MM"))}onAddNewCard(){window.Stripe?(this.sourceStripe.number=this.cardNumber.replace(/\s+/g,""),""!==[this.sourceStripe.number,this.sourceStripe.exp_month||d(this.timeExpiredDate.value[0],"DD/MM/YYYY").format("MM"),this.sourceStripe.exp_year||d(this.timeExpiredDate.value[0],"DD/MM/YYYY").format("YYYY")][0]?g.Z.isUndefinedOrNull(this.cvc)||""===this.cvc?this.calledAddNew.emit(!0):window.Stripe.card.createToken({number:this.sourceStripe.number,exp_month:this.sourceStripe.exp_month?this.sourceStripe.exp_month:d(this.timeExpiredDate.value[0],"DD/MM/YYYY").format("MM"),exp_year:this.sourceStripe.exp_year?this.sourceStripe.exp_year:d(this.timeExpiredDate.value[0],"DD/MM/YYYY").format("YYYY"),cvc:this.cvc},(r,s)=>{if(200===r){const{card:o}=s,v={apiVersion:"1.0",tokCard:s.id,userId:this.driverCode,customerId:this.stripeCustomerId,cardId:o.id,last4:o.last4,expYear:JSON.stringify(o.exp_year),expMonth:JSON.stringify(o.exp_month),brand:o.brand,funding:o.funding,country:o.country,remarks:""};this.walletService.addCreditCards(v).subscribe(y=>{this.calledAddNew.emit(!0)},y=>{this.calledAddNew.emit(!1),this.eCardNumberError.emit(y)})}else{const{error:o}=s;this.eCardNumberError.emit(o)}}):this.calledAddNew.emit(!0)):console.log("Oops! Stripe did not initialize properly.")}onGetStatusCreditCard(){this.walletService.getStatusCreditCard(this.driverCode).subscribe(l=>{l.cardholderName===this.driverCode?(this.accInformations=l,this.accInformations.exp_month=d(this.accInformations.expiryDate).format("MM"),this.accInformations.exp_year=d(this.accInformations.expiryDate).format("YYYY"),this.existAccount=!0):this.existAccount=!1},l=>this.existAccount=!1)}initExpiredDate(){this.timeExpiredDate={value:[D.ou.local().plus({month:1}).toJSDate(),new Date],type:A.Nxg.Month}}}return m.\u0275fac=function(l){return new(l||m)(e.Y36(_.X))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-card"]],inputs:{updateCard:"updateCard"},outputs:{calledAddNew:"calledAddNew",enableAddCard:"enableAddCard",eCardNumberError:"eCardNumberError"},features:[e.TTD],decls:49,vars:7,consts:[[1,"m-content","p-0"],[1,"m-form","m-form--fit","m-form--label-align-right"],[1,""],[1,"m-portlet__body","pt-0"],[1,"row"],[1,"col-lg-9","mx-auto"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-lg-4","col-sm-12"],[1,"m--font-danger"],[1,"col-lg-8","col-sm-12"],["nz-input","","type","text","placeholder","Input your card number","digitOnly","","inputmode","numeric","maxlength","19","credit-card","","name","cardNumber",3,"ngModel","ngModelChange"],["class","form-control-feedback",4,"ngIf"],[1,"row","my-3"],[3,"data","isScopeMonth","headerDatePicker","select"],["nz-input","","type","text","placeholder","Input CVV","digitOnly","","inputmode","numeric","maxlength","3",3,"ngModel","ngModelChange"],[1,"row","mt-3"],[1,"la","la-cc-visa","font-size-3rem","wallet-visa-ic"],[1,"la","la-cc-mastercard","font-size-3rem","wallet-mastercard-ic"],[1,"col-lg-10","mx-auto"],[1,"form-control-feedback"]],template:function(l,r){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"label",7)(8,"span",8),e._uU(9,"*"),e.qZA(),e._uU(10," Credit/Debit Card: "),e.qZA(),e.TgZ(11,"div",9)(12,"input",10),e.NdJ("ngModelChange",function(o){return r.cardNumber=o}),e.qZA(),e.YNc(13,u,3,0,"div",11),e.qZA()()()(),e.TgZ(14,"div",12)(15,"div",5)(16,"div",6)(17,"label",7)(18,"span",8),e._uU(19,"*"),e.qZA(),e._uU(20," Expiry Date: "),e.qZA(),e.TgZ(21,"div",9)(22,"app-datepicker-tab",13),e.NdJ("select",function(o){return r.changeStartDate(o)}),e.qZA()()()()(),e.TgZ(23,"div",4)(24,"div",5)(25,"div",6)(26,"label",7)(27,"span",8),e._uU(28,"*"),e.qZA(),e._uU(29," CVV/CVC: "),e.qZA(),e.TgZ(30,"div",9)(31,"input",14),e.NdJ("ngModelChange",function(o){return r.cvc=o}),e.qZA(),e.YNc(32,C,3,0,"div",11),e.qZA()()()(),e.TgZ(33,"div",15)(34,"div",5)(35,"div",6),e._UZ(36,"label",7),e.TgZ(37,"div",9)(38,"span"),e._UZ(39,"i",16),e.qZA(),e.TgZ(40,"span"),e._UZ(41,"i",17),e.qZA()()()()(),e.TgZ(42,"div",12)(43,"div",18)(44,"div",6)(45,"label",7)(46,"span",8),e._uU(47,"*"),e.qZA(),e._uU(48," Required field(s). "),e.qZA()()()()()()()()),2&l&&(e.xp6(12),e.Q6J("ngModel",r.cardNumber),e.xp6(1),e.Q6J("ngIf",""===r.cardNumber),e.xp6(9),e.Q6J("data",r.timeExpiredDate)("isScopeMonth",!0)("headerDatePicker",!1),e.xp6(9),e.Q6J("ngModel",r.cvc),e.xp6(1),e.Q6J("ngIf",""===r.cvc))},dependencies:[E.O5,T.Fj,T.JJ,T.nD,T.On,i.Zp,a.K,O.L],styles:[".font-size-3rem[_ngcontent-%COMP%]{font-size:3rem}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[_ngcontent-%COMP%]{-moz-appearance:textfield}"]}),m})()},13309:(N,x,t)=>{"use strict";t.d(x,{p:()=>r});var e=t(36895),d=t(24006),f=t(34793),D=t(372),A=t(60097),g=t(4666),_=t(30329),E=t(21532),T=t(88796),i=t(59245),a=t(89518),O=t(36511),u=t(80529),C=t(89383),p=t(19832),m=t(29252),n=t(94650);function l(s){return new p.w(s,"../assets/i18n/",".json")}let r=(()=>{class s{}return s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({providers:[g.p,A.x,O.I],imports:[e.ez,d.u5,f.Bz,E.x,_.D,D.kn,i.mr,T.A0,a.H3,m.E7,C.aw.forChild({loader:{provide:C.Zw,useFactory:l,deps:[u.eN]}})]}),s})()},83845:(N,x,t)=>{"use strict";t.d(x,{G:()=>J});var e=t(94650),d=t(38014),f=t(8929),D=t(1059),A=t(80013),g=t(75778),_=t(2994),E=t(87545),T=t(88117),i=t(72986),a=t(66708),O=t(89383),u=t(34793),C=t(64050),p=t(60097),m=t(36895),n=t(24006),l=t(35635),r=t(38231),s=t(29252);const o=["fieldsFormValid"];function v(h,P){if(1&h&&(e.TgZ(0,"div",29)(1,"div",30)(2,"div",31)(3,"h3",32),e._uU(4),e.qZA()()()()),2&h){const c=e.oxw();e.xp6(4),e.hij(" ",c.item.vehicleNumber," ")}}function y(h,P){if(1&h&&e._UZ(0,"nz-option",33),2&h){const c=P.$implicit;e.Q6J("nzValue",c.areaCode)("nzLabel",c.name)}}function L(h,P){if(1&h&&e._UZ(0,"nz-option",33),2&h){const c=P.$implicit;e.Q6J("nzValue",c.value)("nzLabel",c.text)}}function Z(h,P){if(1&h){const c=e.EpF();e.TgZ(0,"label",6)(1,"span",7),e._uU(2,"*"),e.qZA(),e._uU(3," Vehicle Type: "),e.qZA(),e.TgZ(4,"div",8)(5,"nz-select",34),e.NdJ("ngModelChange",function(U){e.CHM(c);const I=e.oxw();return e.KtG(I.form.vehicleType=U)}),e.YNc(6,L,1,2,"nz-option",10),e.qZA()()}if(2&h){const c=e.oxw();e.xp6(5),e.Q6J("ngModel",c.form.vehicleType),e.xp6(1),e.Q6J("ngForOf",c.vehicleTypes)}}function R(h,P){if(1&h&&(e.TgZ(0,"div",35),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&h){const c=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,c.vehicleNoMessage)," At least 3 characters. ")}}function B(h,P){if(1&h&&(e.TgZ(0,"div",36),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&h){const c=e.oxw(2);e.xp6(1),e.hij(" ",e.lcZ(2,1,c.vehicleNoMessage)," At least 3 characters. ")}}function Y(h,P){if(1&h&&e.YNc(0,B,3,3,"ng-template",11),2&h){const c=e.oxw();e.Q6J("ngIf",c.vehicleNumberErrMsg)}}function K(h,P){1&h&&(e.TgZ(0,"span",7),e._uU(1,"*"),e.qZA())}function V(h,P){1&h&&(e.TgZ(0,"div",35),e._uU(1," Numeric characters only. "),e.qZA())}function W(h,P){1&h&&(e.TgZ(0,"div",36),e._uU(1," IU number has to be 10 digits. "),e.qZA())}function k(h,P){if(1&h&&e.YNc(0,W,2,0,"ng-template",11),2&h){const c=e.oxw();e.Q6J("ngIf",c.iuNumberErrMsg)}}function w(h,P){if(1&h){const c=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(c);const U=e.oxw();return e.KtG(U.delete())}),e._UZ(1,"i",37),e._uU(2," Delete "),e.qZA()}}let J=(()=>{class h{constructor(c,M,U,I){this.translate=c,this.router=M,this.driverService=U,this.carparkService=I,this.deleted=new e.vpe,this.canceled=new e.vpe,this.submitted=new e.vpe,this.firstVehicleValid=new e.vpe,this.vehicleTypes=d.php,this.driverInput$=new f.xQ,this.isSingapore=65,this.vehicleNoMessage=d.vwt.VehicleNo,this.vehicleNumberErrMsg=!1,this.iuNumberErrMsg=!1,this.listAreaCode=[{areaCode:65,value:65,name:"Singapore"},{areaCode:60,value:60,name:"Malaysia"}]}ngOnInit(){this.form=this.item||(0,d.wky)(),a.Z.isUndefinedOrNull(this.form.countryCode)&&(this.form.countryCode=65),this.isMotorist?this.driver=JSON.parse(localStorage.getItem("user")).hpNumber:(this.driver$=this.driverInput$.pipe((0,D.O)(""),(0,A.b)(200),(0,g.x)(),(0,_.b)(()=>this.driverLoading=!0),(0,E.w)(c=>this.driverService.searchModel(c).pipe((0,_.b)(()=>{this.driverLoading=!1}))),(0,T.B)()),this.driver$.pipe((0,i.q)(1)).subscribe(c=>{this.driver=this.form.driver?this.form.driver:c[0]}))}ngOnChanges(c){a.Z.isNotNull(c.createVehicle.previousValue)&&c.createVehicle.currentValue!==c.createVehicle.previousValue&&this.submit()}ngAfterViewChecked(){a.Z.isNotNull(this.fieldsFormValid.nativeElement)&&this.getFirstVehicleValid!==this.fieldsFormValid.nativeElement.value&&(this.getFirstVehicleValid=this.fieldsFormValid.nativeElement.value,this.firstVehicleValid.emit(this.getFirstVehicleValid))}onChangeAreaCode(c){this.form.countryCode=parseInt(c,10)}get isMotorist(){return this.carparkService.isMotorist()}delete(){this.deleted.emit()}cancel(){this.canceled.emit()}submit(){if(this.vehicleNumberErrMsg=!1,this.iuNumberErrMsg=!1,!this.form.vehicleNumber||this.form.vehicleNumber.length<3)return this.vehicleNumberErrMsg=!0,void(this.form.iuNumber||(this.iuNumberErrMsg=65==this.form.countryCode&&!this.iuNumberErrMsg,this.submitted.emit({...this.form,errorMsg:!0})));this.form.iuNumber&&this.form.iuNumber.length<10?this.iuNumberErrMsg=65==this.form.countryCode&&!this.iuNumberErrMsg:this.submitted.emit({...this.form,driverCode:this.driver.userName,driver:this.driver})}displayDriverOption(c){return[[c.firstName,c.lastName].filter(U=>U).join(" "),c.mobile,c.email].filter(U=>U&&U.length).join(", ")}changeVehicleInfo(c){"iuNumber"==c&&(this.iuNumberErrMsg=!1),"vehicleNumber"==c&&(this.vehicleNumberErrMsg=!1)}}return h.\u0275fac=function(c){return new(c||h)(e.Y36(O.sK),e.Y36(u.F0),e.Y36(C.F),e.Y36(p.x))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-create-vehicle-form"]],viewQuery:function(c,M){if(1&c&&e.Gf(o,5),2&c){let U;e.iGM(U=e.CRH())&&(M.fieldsFormValid=U.first)}},inputs:{item:"item",createVehicle:"createVehicle"},outputs:{deleted:"deleted",canceled:"canceled",submitted:"submitted",firstVehicleValid:"firstVehicleValid"},features:[e.TTD],decls:49,vars:14,consts:[[1,"m-form","m-form--fit","m-form--label-align-right"],["fieldsForm","ngForm"],[1,""],["class","m-portlet__head",4,"ngIf"],[1,"m-portlet__body"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-lg-2","col-sm-12"],[1,"m--font-danger"],[1,"col-lg-4","col-sm-12"],["id","countryCode","name","countryCode","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"ngIf"],["nz-input","","type","text","name","vehicleNumber","maxlength","8","pattern","^[a-zA-Z0-9]+$","oninput","this.value = this.value.toUpperCase()","minlength","3","placeholder","","required","",3,"ngModel","ngModelChange","change"],["vehicleNumber","ngModel"],["class","form-control-feedback",4,"ngIf","ngIfElse"],["vehicleNumberErr",""],["class","m--font-danger",4,"ngIf"],["nz-input","","type","text","name","iuNumber","pattern","^[0-9]+$","digitOnly","","inputmode","numeric","placeholder","","maxlength","10",3,"ngModel","required","ngModelChange","change"],["iuNumber","ngModel"],["iuNumberErr",""],[1,"row","form-group","m-form__group","requiredText",2,"color","#3F4047","font-size","16px","font-weight","400"],[1,"row"],[1,"m-form__actions","col","py-0"],["class","btn btn-outline-main","hidden","",3,"click",4,"ngIf"],[1,"m-form__actions","m-form__actions--right","row","py-0"],["hidden","",1,"btn","btn-outline-main",3,"click"],["hidden","",1,"btn","btn-main","m--margin-left-30",3,"click"],["type","hidden","name","isFirstVehicleValid",3,"ngModel","ngModelChange"],["fieldsFormValid",""],[1,"m-portlet__head"],[1,"m-portlet__head-caption"],[1,"m-portlet__head-title"],[1,"m-portlet__head-text"],[3,"nzValue","nzLabel"],["name","vehicleType","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[1,"form-control-feedback"],[1,"form-control-feedback",2,"color","#f4516c","text-align","left"],[1,"la","la-trash"]],template:function(c,M){if(1&c){const U=e.EpF();e.TgZ(0,"form",0,1)(2,"div",2),e.YNc(3,v,5,1,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"label",6)(7,"span",7),e._uU(8,"*"),e.qZA(),e._uU(9," Country of Registration: "),e.qZA(),e.TgZ(10,"div",8)(11,"nz-select",9),e.NdJ("ngModelChange",function(b){return M.form.countryCode=b})("ngModelChange",function(b){return M.onChangeAreaCode(b)}),e.YNc(12,y,1,2,"nz-option",10),e.qZA()(),e.YNc(13,Z,7,2,"ng-template",11),e.qZA(),e.TgZ(14,"div",5)(15,"label",6)(16,"span",7),e._uU(17,"*"),e.qZA(),e._uU(18," Vehicle No.: "),e.qZA(),e.TgZ(19,"div",8)(20,"input",12,13),e.NdJ("ngModelChange",function(b){return M.form.vehicleNumber=b})("change",function(){return M.changeVehicleInfo("vehicleNumber")}),e.qZA(),e.YNc(22,R,3,3,"div",14),e.YNc(23,Y,1,1,"ng-template",null,15,e.W1O),e.qZA(),e.TgZ(25,"label",6),e.YNc(26,K,2,0,"span",16),e._uU(27," IU No.: "),e.qZA(),e.TgZ(28,"div",8)(29,"input",17,18),e.NdJ("ngModelChange",function(b){return M.form.iuNumber=b})("change",function(){return M.changeVehicleInfo("iuNumber")}),e.qZA(),e.YNc(31,V,2,0,"div",14),e.YNc(32,k,1,1,"ng-template",null,19,e.W1O),e.qZA()(),e.TgZ(34,"div",20)(35,"span",7),e._uU(36,"*"),e.qZA(),e._uU(37," Required field(s) "),e.qZA()(),e.TgZ(38,"div",2)(39,"div",21)(40,"div",22),e.YNc(41,w,3,0,"button",23),e.qZA(),e.TgZ(42,"div",24)(43,"button",25),e.NdJ("click",function(){return M.cancel()}),e._uU(44," Cancel "),e.qZA(),e.TgZ(45,"button",26),e.NdJ("click",function(){return M.submit()}),e._uU(46," Submit "),e.qZA()(),e.TgZ(47,"input",27,28),e.NdJ("ngModelChange",function(b){e.CHM(U);const S=e.MAs(1);return e.KtG(S.valid=b)}),e.qZA()()()()()}if(2&c){const U=e.MAs(1),I=e.MAs(21),b=e.MAs(24),S=e.MAs(30),z=e.MAs(33);e.xp6(3),e.Q6J("ngIf",M.item),e.xp6(8),e.Q6J("ngModel",M.form.countryCode),e.xp6(1),e.Q6J("ngForOf",M.listAreaCode),e.xp6(1),e.Q6J("ngIf",M.form.countryCode!==M.isSingapore),e.xp6(7),e.Q6J("ngModel",M.form.vehicleNumber),e.xp6(2),e.Q6J("ngIf",I.invalid&&(I.dirty||I.touched))("ngIfElse",b),e.xp6(4),e.Q6J("ngIf",M.form.countryCode===M.isSingapore),e.xp6(3),e.Q6J("ngModel",M.form.iuNumber)("required",M.form.countryCode===M.isSingapore),e.xp6(2),e.Q6J("ngIf",S.invalid&&(S.dirty||S.touched))("ngIfElse",z),e.xp6(10),e.Q6J("ngIf",M.item),e.xp6(6),e.Q6J("ngModel",U.valid)}},dependencies:[m.sg,m.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.wO,n.nD,n.c5,n.On,n.F,l.Zp,r.Ip,r.Vq,s.L,O.X$],encapsulation:2}),h})()},15035:(N,x,t)=>{"use strict";t.d(x,{W8:()=>g});var e=t(21837),d=(()=>((d||(d={})).Med="yyyy-LL-dd",d))();function g(_,E=d.Med){return _?e.ou.fromJSDate(_).toFormat(E):null}},94327:function(N,x){var d;void 0!==(d=function(){"use strict";function D(i,a,O){var u=new XMLHttpRequest;u.open("GET",i),u.responseType="blob",u.onload=function(){T(u.response,a,O)},u.onerror=function(){console.error("could not download file")},u.send()}function A(i){var a=new XMLHttpRequest;a.open("HEAD",i,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function g(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(a)}}var _="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,E=_.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),T=_.saveAs||("object"!=typeof window||window!==_?function(){}:"download"in HTMLAnchorElement.prototype&&!E?function(i,a,O){var u=_.URL||_.webkitURL,C=document.createElement("a");C.download=a=a||i.name||"download",C.rel="noopener","string"==typeof i?(C.href=i,C.origin===location.origin?g(C):A(C.href)?D(i,a,O):g(C,C.target="_blank")):(C.href=u.createObjectURL(i),setTimeout(function(){u.revokeObjectURL(C.href)},4e4),setTimeout(function(){g(C)},0))}:"msSaveOrOpenBlob"in navigator?function(i,a,O){if(a=a||i.name||"download","string"!=typeof i)navigator.msSaveOrOpenBlob(function f(i,a){return typeof a>"u"?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\ufeff",i],{type:i.type}):i}(i,O),a);else if(A(i))D(i,a,O);else{var u=document.createElement("a");u.href=i,u.target="_blank",setTimeout(function(){g(u)})}}:function(i,a,O,u){if((u=u||open("","_blank"))&&(u.document.title=u.document.body.innerText="downloading..."),"string"==typeof i)return D(i,a,O);var C="application/octet-stream"===i.type,p=/constructor/i.test(_.HTMLElement)||_.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||C&&p||E)&&typeof FileReader<"u"){var n=new FileReader;n.onloadend=function(){var s=n.result;s=m?s:s.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=s:location=s,u=null},n.readAsDataURL(i)}else{var l=_.URL||_.webkitURL,r=l.createObjectURL(i);u?u.location=r:location.href=r,u=null,setTimeout(function(){l.revokeObjectURL(r)},4e4)}});_.saveAs=T.saveAs=T,N.exports=T}.apply(x,[]))&&(N.exports=d)},1236:(N,x,t)=>{"use strict";t.d(x,{R:()=>p,q:()=>m});var e=t(94650),d=t(36895),f=t(34793),D=t(77750);function A(n,l){if(1&n&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&n){const r=e.oxw(2).$implicit;e.xp6(1),e.Oqu(r.label)}}function g(n,l){if(1&n&&e._UZ(0,"span",12),2&n){const r=e.oxw(2).$implicit;e.Q6J("innerHTML",r.label,e.oJD)}}const _=function(){return{exact:!1}};function E(n,l){if(1&n){const r=e.EpF();e.TgZ(0,"a",7),e.NdJ("click",function(o){e.CHM(r);const v=e.oxw(),y=v.$implicit,L=v.index,Z=e.oxw();return e.KtG(Z.itemClick(o,y,L))})("keydown.enter",function(o){e.CHM(r);const v=e.oxw(),y=v.$implicit,L=v.index,Z=e.oxw();return e.KtG(Z.itemClick(o,y,L))}),e.TgZ(1,"span",8),e._uU(2),e.qZA(),e.YNc(3,A,2,1,"span",9),e.YNc(4,g,1,1,"ng-template",null,10,e.W1O),e.qZA()}if(2&n){const r=e.MAs(5),s=e.oxw(),o=s.$implicit,v=s.index,y=e.oxw();e.Q6J("routerLink",o.routerLink)("queryParams",o.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",o.routerLinkActiveOptions||e.DdM(16,_))("target",o.target)("fragment",o.fragment)("queryParamsHandling",o.queryParamsHandling)("preserveFragment",o.preserveFragment)("skipLocationChange",o.skipLocationChange)("replaceUrl",o.replaceUrl)("state",o.state),e.uIk("id",o.id)("tabindex",o.disabled||y.readonly?null:o.tabindex?o.tabindex:"0"),e.xp6(2),e.Oqu(v+1),e.xp6(1),e.Q6J("ngIf",!1!==o.escape)("ngIfElse",r)}}function T(n,l){if(1&n&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&n){const r=e.oxw(2).$implicit;e.xp6(1),e.Oqu(r.label)}}function i(n,l){if(1&n&&e._UZ(0,"span",12),2&n){const r=e.oxw(2).$implicit;e.Q6J("innerHTML",r.label,e.oJD)}}function a(n,l){if(1&n){const r=e.EpF();e.TgZ(0,"a",13),e.NdJ("click",function(o){e.CHM(r);const v=e.oxw(),y=v.$implicit,L=v.index,Z=e.oxw();return e.KtG(Z.itemClick(o,y,L))})("keydown.enter",function(o){e.CHM(r);const v=e.oxw(),y=v.$implicit,L=v.index,Z=e.oxw();return e.KtG(Z.itemClick(o,y,L))}),e.TgZ(1,"span",8),e._uU(2),e.qZA(),e.YNc(3,T,2,1,"span",9),e.YNc(4,i,1,1,"ng-template",null,14,e.W1O),e.qZA()}if(2&n){const r=e.MAs(5),s=e.oxw(),o=s.$implicit,v=s.index,y=e.oxw();e.Q6J("target",o.target),e.uIk("href",o.url,e.LSH)("id",o.id)("tabindex",o.disabled||v!==y.activeIndex&&y.readonly?null:o.tabindex?o.tabindex:"0"),e.xp6(2),e.Oqu(v+1),e.xp6(1),e.Q6J("ngIf",!1!==o.escape)("ngIfElse",r)}}const O=function(n,l){return{"p-highlight p-steps-current":n,"p-disabled":l}};function u(n,l){if(1&n&&(e.TgZ(0,"li",3,4),e.YNc(2,E,6,17,"a",5),e.YNc(3,a,6,7,"ng-template",null,6,e.W1O),e.qZA()),2&n){const r=l.$implicit,s=l.index,o=e.MAs(4),v=e.oxw();e.Tol(r.styleClass),e.Q6J("ngStyle",r.style)("tooltipOptions",r.tooltipOptions)("ngClass",e.WLB(9,O,v.isActive(r,s),r.disabled||v.readonly&&!v.isActive(r,s))),e.uIk("aria-selected",s===v.activeIndex)("aria-expanded",s===v.activeIndex),e.xp6(2),e.Q6J("ngIf",v.isClickableRouterLink(r))("ngIfElse",o)}}const C=function(n){return{"p-steps p-component":!0,"p-readonly":n}};let p=(()=>{class n{constructor(r,s,o){this.router=r,this.route=s,this.cd=o,this.activeIndex=0,this.readonly=!0,this.activeIndexChange=new e.vpe}ngOnInit(){this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}itemClick(r,s,o){this.readonly||s.disabled?r.preventDefault():(this.activeIndexChange.emit(o),!s.url&&!s.routerLink&&r.preventDefault(),s.command&&s.command({originalEvent:r,item:s,index:o}))}isClickableRouterLink(r){return r.routerLink&&!this.readonly&&!r.disabled}isActive(r,s){if(r.routerLink){let o=Array.isArray(r.routerLink)?r.routerLink:[r.routerLink];return this.router.isActive(this.router.createUrlTree(o,{relativeTo:this.route}).toString(),!1)}return s===this.activeIndex}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(f.F0),e.Y36(f.gz),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-steps"]],hostAttrs:[1,"p-element"],inputs:{activeIndex:"activeIndex",model:"model",readonly:"readonly",style:"style",styleClass:"styleClass"},outputs:{activeIndexChange:"activeIndexChange"},decls:3,vars:7,consts:[[3,"ngClass","ngStyle"],["role","tablist"],["class","p-steps-item","role","tab","pTooltip","",3,"ngStyle","class","tooltipOptions","ngClass",4,"ngFor","ngForOf"],["role","tab","pTooltip","",1,"p-steps-item",3,"ngStyle","tooltipOptions","ngClass"],["menuitem",""],["role","presentation","class","p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter",4,"ngIf","ngIfElse"],["elseBlock",""],["role","presentation",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter"],[1,"p-steps-number"],["class","p-steps-title",4,"ngIf","ngIfElse"],["htmlLabel",""],[1,"p-steps-title"],[1,"p-steps-title",3,"innerHTML"],["role","presentation",1,"p-menuitem-link",3,"target","click","keydown.enter"],["htmlRouteLabel",""]],template:function(r,s){1&r&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,u,5,12,"li",2),e.qZA()()),2&r&&(e.Tol(s.styleClass),e.Q6J("ngClass",e.VKq(5,C,s.readonly))("ngStyle",s.style),e.xp6(2),e.Q6J("ngForOf",s.model))},dependencies:[d.mk,d.sg,d.O5,d.PC,f.yS,f.Od,D.u],styles:[".p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}\n"],encapsulation:2,changeDetection:0}),n})(),m=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,f.Bz,D.z,f.Bz,D.z]}),n})()}}]);