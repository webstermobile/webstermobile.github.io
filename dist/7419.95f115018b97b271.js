"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[7419],{76916:(K,b,l)=>{l.d(b,{G:()=>J});var f=l(34793),C=l(92198),s=l(94650),Z=l(89383),S=l(60097),k=l(36895);function P(u,x){if(1&u&&(s.TgZ(0,"a",14)(1,"span",15),s._uU(2),s.ALo(3,"translate"),s.qZA()()),2&u){const m=s.oxw().$implicit;s.xp6(2),s.hij(" ",s.lcZ(3,1,m.label)," ")}}function L(u,x){if(1&u&&(s.TgZ(0,"a",16)(1,"span",15),s._uU(2),s.ALo(3,"translate"),s.qZA()()),2&u){const m=s.oxw(),p=m.$implicit,t=m.last,_=s.oxw(2);s.Q6J("routerLink",p.url)("queryParams",t&&_.route.snapshot.queryParams),s.xp6(2),s.hij(" ",s.lcZ(3,3,p.label)," ")}}function w(u,x){if(1&u&&(s.ynx(0),s.TgZ(1,"li",10)(2,"span"),s._uU(3," > "),s.qZA()(),s.TgZ(4,"li",11),s.YNc(5,P,4,3,"a",12),s.YNc(6,L,4,5,"a",13),s.qZA(),s.BQk()),2&u){const m=x.first;s.xp6(5),s.Q6J("ngIf",m),s.xp6(1),s.Q6J("ngIf",!m)}}function F(u,x){if(1&u&&(s.TgZ(0,"div",1)(1,"div",2)(2,"div",3),s._UZ(3,"h3",4),s.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),s._UZ(7,"i",8),s.qZA()(),s.YNc(8,w,7,2,"ng-container",9),s.qZA()(),s.TgZ(9,"div"),s.Hsn(10),s.qZA()()()),2&u){const m=s.oxw();s.xp6(3),s.Q6J("innerHTML",m.title,s.oJD),s.xp6(5),s.Q6J("ngForOf",m.breads)}}const M=["*"];let J=(()=>{class u{constructor(m,p,t,_){this.router=m,this.route=p,this.translate=t,this._carparkService=_,this.breads=[],this.loginUser=""}ngOnInit(){let m=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=m,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(t=>{this.label=t}),this.router.events.pipe((0,C.h)(t=>t instanceof f.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(m,p=[""],t=[]){const _=m.snapshot.url[0]&&m.snapshot.url[0].path,z=[...p,_],v={...this.extractBreadcrumb(m),url:z},y=_&&v.label?[...t,v]:t;return this.title=v.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===v.label&&(this.title="My Vehicle(s)"),m.firstChild?_?this.buildBreadCrumb(m.firstChild,z,y):this.buildBreadCrumb(m.firstChild,p,t):(this.translate.get(this.title).subscribe(d=>{this.title=d}),y)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(m){return m.snapshot.data.breadcrumb instanceof Function?m.snapshot.data.breadcrumb(m):m.snapshot.data.breadcrumb}}return u.\u0275fac=function(m){return new(m||u)(s.Y36(f.F0),s.Y36(f.gz),s.Y36(Z.sK),s.Y36(S.x))},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-title-bar"]],ngContentSelectors:M,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(m,p){1&m&&(s.F$t(),s.YNc(0,F,11,2,"div",0)),2&m&&s.Q6J("ngIf","ROLE_TPO_PARTNER"!==p.loginUser)},dependencies:[k.sg,k.O5,f.yS,Z.X$],encapsulation:2}),u})()},87419:(K,b,l)=>{l.r(b),l.d(b,{CarParksModule:()=>ae,createTranslateLoader:()=>H,routes:()=>E});var f=l(36895),C=l(34793),s=l(60097),Z=l(91599),S=l(42684),k=l(51766),P=l(31289),L=l(4666),w=l(73071),F=l(30329),M=l(97640),J=l(59245),u=l(21532),x=l(59501),m=l(51013),p=l(38014),t=l(94650),_=l(89383),z=l(67556),v=l(58650),y=l(78735),d=l(40269),O=l(66616),N=l(47044),U=l(21811),G=l(95496);function $(n,o){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.text)}}function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"a",13),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.form.splice(i,1))}),t._UZ(15,"i",14),t.qZA()()()}if(2&n){const e=o.$implicit;t.ekj("ant-table-row-odd",o.index%2==1),t.xp6(2),t.Oqu(e.code),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.ip),t.xp6(2),t.Oqu(e.port),t.xp6(2),t.Oqu(e.type),t.xp6(2),t.Oqu(e.status)}}function D(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.cancel())}),t._UZ(1,"i",16),t._uU(2),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(2),t.hij(" ",e.cancelText," ")}}function V(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.gotoCreate())}),t._UZ(4,"span",4),t._uU(5,"Add New Station"),t.qZA(),t._UZ(6,"div",5),t.qZA(),t.TgZ(7,"div",6)(8,"div",7)(9,"nz-table",8)(10,"thead")(11,"tr"),t.YNc(12,$,2,1,"th",9),t.qZA()(),t.TgZ(13,"tbody"),t.YNc(14,B,16,8,"tr",10),t.qZA()()()(),t.TgZ(15,"div",2),t.YNc(16,D,3,1,"button",11),t.TgZ(17,"button",12),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.submit())}),t._uU(18),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(12),t.Q6J("ngForOf",e.tableHeaders),t.xp6(2),t.Q6J("ngForOf",e.form),t.xp6(2),t.Q6J("ngIf",e.cancelText),t.xp6(1),t.ekj("m--margin-left-30",e.cancelText),t.xp6(1),t.Oqu(e.submitText)}}function j(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"app-stations-form",17),t.NdJ("canceled",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.itemCancel())})("submitted",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.itemSubmit(r))}),t.qZA()()}}let W=(()=>{class n{constructor(e){this.translate=e,this.form=[],this.submitText="Submit",this.submitted=new t.vpe,this.canceled=new t.vpe,this.tableHeaders=[{text:"Station ID",column:"code",width:"80px"},{text:"Station Name",column:"name",width:"120px"},{text:"IP",column:"ip",width:"120px"},{text:"Port",column:"port",width:"120px"},{text:"Type",column:"type",width:"100px"},{text:"Status",column:"status",width:"100px"},{text:"Actions",width:"100px"}],this.managementStatus=p.AnP.Viewing}ngOnInit(){const e=this.tableHeaders.map(a=>a.text);this.translate.get(e).subscribe(a=>{this.tableHeaders.forEach(r=>{for(let i in a)a.hasOwnProperty(i)&&r.text===i&&(r.text=a[i])})})}gotoCreate(){this.managementStatus=p.AnP.Creating}itemCancel(){this.managementStatus=p.AnP.Viewing}itemSubmit(e){this.form.push(e),this.managementStatus=p.AnP.Viewing}cancel(){this.canceled.emit()}submit(){this.submitted.emit(this.form)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carpark-form-stations"]],inputs:{form:"form",submitText:"submitText",cancelText:"cancelText"},outputs:{submitted:"submitted",canceled:"canceled"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"m-form","m-form--label-align-right","m--margin-top-20","m--margin-bottom-30"],[1,"m-form__actions","m-form__actions--right"],["nz-button","","nzType","primary","nzSize","large","nzShape","round",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[1,"m-separator","m-separator--dashed","d-xl-none"],[1,"m-portlet__body"],[1,"m_datatable","m-datatable","m-datatable--default","m-datatable--brand","m-datatable--loaded"],["nzTemplateMode",""],[4,"ngFor","ngForOf"],[3,"ant-table-row-odd",4,"ngFor","ngForOf"],["nz-button","","nzType","primary","nzSize","large","class","btn-form-ops","nzGhost","",3,"click",4,"ngIf"],["nz-button","","nzType","primary","nzSize","large",1,"btn-form-ops",3,"click"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"click"],[1,"la","la-trash"],["nz-button","","nzType","primary","nzSize","large","nzGhost","",1,"btn-form-ops",3,"click"],[1,"la","la-arrow-left"],[3,"canceled","submitted"]],template:function(e,a){1&e&&(t.YNc(0,V,19,6,"div",0),t.YNc(1,j,2,0,"div",0)),2&e&&(t.Q6J("ngIf","viewing"===a.managementStatus),t.xp6(1),t.Q6J("ngIf","viewing"!==a.managementStatus))},dependencies:[f.sg,f.O5,d.N8,d.Uo,d._C,d.Om,d.p0,d.$Z,O.ix,N.w,U.dQ,G.S],encapsulation:2}),n})();var I=l(79118),q=l(52746),X=l(50007),T=l(24006),A=l(38231),R=l(28213),tt=l(69659);const et=["evcTable"];function nt(n,o){if(1&n&&t._uU(0),2&n){const e=o.range;t.lnq(" ",e[0],"-",e[1]," of ",o.$implicit," items ")}}function at(n,o){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.text)}}function rt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"label",22),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw();return t.KtG(c.choosenTariffIds[i.id]=r)}),t.qZA()}if(2&n){const e=t.oxw().$implicit,a=t.oxw();t.MGl("name","tariff",e.id,""),t.Q6J("ngModel",a.choosenTariffIds[e.id])}}function ot(n,o){1&n&&(t.TgZ(0,"span",23),t._UZ(1,"i",24),t.qZA())}const it=function(n){return["../../tariffs",n]};function st(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t.YNc(2,rt,1,2,"label",17),t.YNc(3,ot,2,0,"span",18),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td")(9,"span"),t._UZ(10,"img",19),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"titlecase"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"titlecase"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"date"),t.qZA(),t.TgZ(22,"td")(23,"a",20),t._UZ(24,"i",21),t.qZA()()()),2&n){const e=o.$implicit,a=o.index,r=t.oxw();t.ekj("ant-table-row-odd",a%2==1),t.xp6(2),t.Q6J("ngIf",r.isValidTariff(e)),t.xp6(1),t.Q6J("ngIf",!r.isValidTariff(e)),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.tariffName),t.xp6(3),t.Q6J("src",r.vehicleIcon(e.vehicleTypeCode),t.LSH),t.xp6(2),t.Oqu(e.vehicleTypeCode),t.xp6(2),t.Oqu(t.lcZ(15,12,e.ownerName)),t.xp6(3),t.Oqu(t.lcZ(18,14,e.operatorName)),t.xp6(3),t.Oqu(t.lcZ(21,16,e.created)),t.xp6(3),t.Q6J("routerLink",t.VKq(18,it,e.id))}}function lt(n,o){if(1&n&&(t.TgZ(0,"div",25)(1,"div",26)(2,"div",27)(3,"h3",28),t._uU(4),t.ALo(5,"translate"),t.qZA()()()(),t.TgZ(6,"div",6),t._UZ(7,"app-evc-tariff-table",29,30),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,2,"EV Charging Tariff")," "),t.xp6(3),t.Q6J("selectedCostmode",e.evcForm)}}function ct(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.cancel())}),t._UZ(1,"i",32),t._uU(2),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.cancelText," ")}}function pt(n,o){if(1&n&&t._UZ(0,"nz-option",39),2&n){const e=o.$implicit;t.Q6J("nzValue",e)("nzLabel",e.text)}}function mt(n,o){if(1&n&&t._UZ(0,"nz-option",39),2&n){const e=o.$implicit;t.Q6J("nzValue",e)("nzLabel",e.text)}}function _t(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",33)(1,"span",34),t._uU(2,"*"),t.qZA(),t.TgZ(3,"label"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"nz-select",35),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.vehicleType=r)}),t.YNc(7,pt,1,2,"nz-option",36),t.TgZ(8,"nz-option",37),t._uU(9,"EVC"),t.qZA()()(),t.TgZ(10,"div",33)(11,"span",34),t._uU(12,"*"),t.qZA(),t.TgZ(13,"label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"nz-select",38),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.tariffType=r)}),t.YNc(17,mt,1,2,"nz-option",36),t.TgZ(18,"nz-option",37),t._uU(19,"EVC"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.hij("",t.lcZ(5,8,"Vehicle Type"),":"),t.xp6(2),t.Q6J("ngModel",e.vehicleType),t.xp6(1),t.Q6J("ngForOf",e.vehicleTypes),t.xp6(1),t.Q6J("nzValue",e.vehicleTypeEVC.value),t.xp6(6),t.hij("",t.lcZ(15,10,"Tariff Type"),":"),t.xp6(2),t.Q6J("ngModel",e.tariffType),t.xp6(1),t.Q6J("ngForOf",e.tariffTypes),t.xp6(1),t.Q6J("nzValue",e.tariffTypeEVC.value)}}function dt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",40),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.handleCancel())}),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"button",41),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.goNext())}),t._uU(4),t.ALo(5,"translate"),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,3,"Cancel")),t.xp6(2),t.Q6J("disabled",!e.vehicleType||!e.tariffType),t.xp6(1),t.Oqu(t.lcZ(5,5,"Next"))}}let ut=(()=>{class n extends q.t{constructor(e,a,r,i){super(),this.router=e,this.tariffService=a,this.translate=r,this.nzModalService=i,this.form=[],this.evcForm=[],this.submitText="Submit",this.submitted=new t.vpe,this.evcSubmit=new t.vpe,this.canceled=new t.vpe,this.tableHeaders=[{text:"",align:I.iW.Center,width:"80px"},{text:"Tariff ID",width:"120px"},{text:"Tariff Name",width:"100px"},{text:"Vehicle Type",width:"120px"},{text:"Owner",width:"100px"},{text:"Operator",width:"100px"},{text:"Date Created",width:"120px"},{text:"Actions",width:"80px"}],this.vehicleIcon=p.mts,this.choosenTariffIds={},this.tariffTypes=p.ltJ,this.vehicleTypes=p.php,this.tariffType=null,this.vehicleType=null,this.modalIns=null,this.vehicleTypeEVC=p.wxy,this.tariffTypeEVC=p.oJe}submit(){const e=Object.keys(this.choosenTariffIds).filter(r=>r),a=this.listData.filter(r=>e.indexOf(`${r.id}`)>-1);this.submitted.emit(a),this.evcSubmit.emit(this.evcTable?.evcEvcTariff())}cancel(){this.canceled.emit()}reloadData(){this.reloadDataService(this.tariffService)}pageChanged(e){this.pagination=e,this.reloadData()}gotoCreate(){this.router.navigate(["/tariffs/create"])}openModal(e,a){this.modalIns=this.nzModalService.create({nzTitle:"Create Tariff",nzContent:e,nzFooter:a})}handleCancel(){this.modalIns.destroy()}goNext(){this.modalIns.destroy(),this.router.navigate(["/tariffs/create"],"EVC"===this.vehicleType?{queryParams:{type:"evc",vehicleType:"evc",model:"add"}}:{queryParams:{type:this.tariffType.value,vehicleType:this.vehicleType.value}})}isValidTariff(e){return e.ownerId===this.carpark.carParkOwnerId&&e.operatorId===this.carpark.carParkOperatorId}ngOnInit(){this.reloadData(),this.form.forEach(r=>{this.choosenTariffIds[r.id]=!0});const e=this.tableHeaders.map(r=>r.text);this.translate.get(e).subscribe(r=>{this.tableHeaders.forEach(i=>{for(let c in r)r.hasOwnProperty(c)&&i.text===c&&(i.text=r[c])})});const a=this.vehicleTypes.map(r=>(console.log(r.text),r.text));this.translate.get(a).subscribe(r=>{this.vehicleTypes.forEach(i=>{for(let c in r)r.hasOwnProperty(c)&&i.text===c&&(i.text=r[c])})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.F0),t.Y36(P.K),t.Y36(_.sK),t.Y36(X.Sf))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carpark-form-tariffs"]],viewQuery:function(e,a){if(1&e&&t.Gf(et,5),2&e){let r;t.iGM(r=t.CRH())&&(a.evcTable=r.first)}},inputs:{carpark:"carpark",form:"form",evcForm:"evcForm",submitText:"submitText",cancelText:"cancelText",chargingPile:"chargingPile"},outputs:{submitted:"submitted",evcSubmit:"evcSubmit",canceled:"canceled"},features:[t.qOj],decls:29,vars:18,consts:[[1,"m-form","m-form--fit","m-form--label-align-right"],[1,"m-portlet"],[1,"m-form__actions","m-form__actions--right"],[1,"btn","btn-main","m-btn","m-btn--custom","m-btn--icon","m-btn--air","m-btn--pill",3,"click"],[1,"la","la-plus"],[1,"m-separator","m-separator--dashed","d-xl-none"],[1,"m-portlet__body"],["rangeTemplate",""],[3,"nzData","nzFrontPagination","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzShowSizeChanger","nzShowTotal","nzQueryParams"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"ant-table-row-odd",4,"ngFor","ngForOf"],[3,"ngIf"],["nz-button","","nzType","primary","nzSize","large","nzGhost","","class","btn-form-ops float-left",3,"click",4,"ngIf"],["nz-button","","nzType","primary","nzSize","large",3,"click"],["template",""],["tplFooter",""],["nz-checkbox","",3,"name","ngModel","ngModelChange",4,"ngIf"],["class","m--padding-right-10",4,"ngIf"],["alt","",3,"src"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"routerLink"],[1,"la","la-eye"],["nz-checkbox","",3,"name","ngModel","ngModelChange"],[1,"m--padding-right-10"],[1,"la","la-ban"],[1,"m-portlet__head"],[1,"m-portlet__head-caption"],[1,"m-portlet__head-title"],[1,"m-portlet__head-text"],["createCarpark","true",3,"selectedCostmode"],["evcTable",""],["nz-button","","nzType","primary","nzSize","large","nzGhost","",1,"btn-form-ops","float-left",3,"click"],[1,"la","la-arrow-left"],[1,"form-group","m-form__group"],[1,"m--font-danger"],["name","vehicleType","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue"],["name","tariffType","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",3,"disabled","click"]],template:function(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){t.CHM(r);const c=t.MAs(26),h=t.MAs(28);return t.KtG(a.openModal(c,h))}),t.TgZ(4,"span"),t._UZ(5,"i",4),t.TgZ(6,"span"),t._uU(7),t.ALo(8,"translate"),t.qZA()()(),t._UZ(9,"div",5),t.qZA(),t.TgZ(10,"div",6),t.YNc(11,nt,1,3,"ng-template",null,7,t.W1O),t.TgZ(13,"nz-table",8,9),t.NdJ("nzQueryParams",function(c){return a.onQueryParamsChange(c)}),t.TgZ(15,"thead")(16,"tr"),t.YNc(17,at,2,1,"th",10),t.qZA()(),t.TgZ(18,"tbody"),t.YNc(19,st,25,20,"tr",11),t.qZA()()(),t.YNc(20,lt,9,4,"ng-template",12),t.TgZ(21,"div",2),t.YNc(22,ct,3,1,"button",13),t.TgZ(23,"button",14),t.NdJ("click",function(){return a.submit()}),t._uU(24),t.qZA()()()(),t.YNc(25,_t,20,12,"ng-template",null,15,t.W1O),t.YNc(27,dt,6,7,"ng-template",null,16,t.W1O)}if(2&e){const r=t.MAs(12),i=t.MAs(14);t.xp6(7),t.hij(" ",t.lcZ(8,16,"Create Tariff")," "),t.xp6(6),t.Q6J("nzData",a.listData)("nzFrontPagination",!1)("nzLoading",a.loading)("nzTotal",a.pagination.totalCount)("nzPageSize",a.pagination.rowsPerPage)("nzPageIndex",a.pagination.page)("nzShowSizeChanger",!0)("nzShowTotal",r),t.xp6(4),t.Q6J("ngForOf",a.tableHeaders),t.xp6(2),t.Q6J("ngForOf",i.data),t.xp6(1),t.Q6J("ngIf",a.chargingPile),t.xp6(2),t.Q6J("ngIf",a.cancelText),t.xp6(1),t.ekj("m--margin-left-30",a.cancelText),t.xp6(1),t.Oqu(a.submitText)}},dependencies:[f.sg,f.O5,T._Y,T.JJ,T.JL,T.On,T.F,d.N8,d.Uo,d._C,d.Om,d.p0,d.$Z,A.Ip,A.Vq,O.ix,N.w,U.dQ,R.Ie,C.yS,tt.q,f.rS,f.uU,_.X$],encapsulation:2}),n})();function ft(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-carpark-form-basic",18),t.NdJ("submitted",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.onBasicSubmitted(r))}),t.ALo(1,"translate"),t.qZA()}if(2&n){const e=t.oxw();t.s9C("submitText",t.lcZ(1,2,"Save & Continue")),t.Q6J("form",e.carParkForm)}}function gt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-carpark-form-lots",19),t.NdJ("submitted",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.onLotsSubmitted(r))})("canceled",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.goBack())}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.qZA()}if(2&n){const e=t.oxw();t.s9C("submitText",t.lcZ(1,4,"Save & Continue")),t.s9C("cancelText",t.lcZ(2,6,"Back")),t.Q6J("form",e.carParkForm)("chargingPile",e.carParkForm.chargingPile)}}function ht(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-carpark-form-tariffs",20),t.NdJ("submitted",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.onTariffsSubmitted(r))})("evcSubmit",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.onEvcTariffsSubmitted(r))})("canceled",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.goBack())}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.qZA()}if(2&n){const e=t.oxw();t.s9C("submitText",t.lcZ(1,6,"Save & Continue")),t.s9C("cancelText",t.lcZ(2,8,"Back")),t.Q6J("carpark",e.carParkForm)("form",e.carParkForm.tariffs)("evcForm",e.evcForm.tariffs)("chargingPile",e.carParkForm.chargingPile)}}function Ct(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-carpark-form-stations",21),t.NdJ("submitted",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.onStationsSubmitted(r))})("canceled",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.goBack())}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.qZA()}if(2&n){const e=t.oxw();t.s9C("submitText",t.lcZ(1,3,"Submit")),t.s9C("cancelText",t.lcZ(2,5,"Back")),t.Q6J("form",e.carParkForm.stations)}}let xt=(()=>{class n{constructor(e,a,r,i){this.router=e,this.carparkService=a,this.translate=r,this.evcService=i,this.model={},this.carParkForm={...(0,p.aq7)(),...(0,p.fo4)(),tariffs:[],stations:[]},this.evcForm={tariffs:[]},this.allElectricPriceArr=[],this.currentStep=0}changeStep(e){this.currentStep=e}goBack(){0!==this.currentStep&&(this.currentStep=this.currentStep-1)}onLotsSubmitted(e){this.carParkForm={...this.carParkForm,...e},this.currentStep=2}onBasicSubmitted(e){this.carParkForm={...this.carParkForm,...e},this.currentStep=1}onTariffsSubmitted(e){this.carParkForm={...this.carParkForm,tariffs:e},this.currentStep=3}onStationsSubmitted(e){this.carParkForm={...this.carParkForm,stations:e,addressListId:2},console.log(this.selectEvcTariff),this.carparkService.createModel(this.carParkForm).subscribe(a=>{if(0!==this.selectEvcTariff.length){const r=this.allElectricPriceArr.filter(c=>c.companyId==this.selectEvcTariff[0].companyId)[0];this.evcService.carparkEvcCostmode({carparkId:a.id,costmodeId:this.selectEvcTariff[0].costmodeId,electricityfee:r.note,priceType:0,remark:null,servicefee:0,servicefeeComm:null,unifyPrice:0,zoneId:0}).subscribe(c=>{console.log(c),this.router.navigate(["/carparks"])})}this.router.navigate(["/carparks"])})}onEvcTariffsSubmitted(e){this.selectEvcTariff=e,this.evcForm={tariffs:e}}currentStepClass(e){return this.currentStep>e?"complete":this.currentStep===e?"active":"disabled"}goStep(e){this.currentStep=e}getAllElecticPrice(){this.evcService.getAllElectricPrice({companyName:"",pageNum:1,pageSize:99999}).subscribe(a=>{"00000"==a.messageCode&&(this.allElectricPriceArr=a.data.content)})}ngOnInit(){this.getAllElecticPrice()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.F0),t.Y36(s.x),t.Y36(_.sK),t.Y36(z.z$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carpark-create"]],decls:44,vars:20,consts:[[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi"],[1,"m-portlet__head"],[1,"row","smpl-step"],[1,"col-3","smpl-step-step",3,"ngClass"],[1,"progress"],[1,"progress-bar"],[1,"smpl-step-icon"],[1,"icon"],[1,"la","la-info"],[1,"smpl-step-info","text-center"],[1,"la","la-columns"],[1,"la","la-dollar"],[1,"la","la-subway"],[3,"form","submitText","submitted",4,"ngIf"],[3,"form","submitText","cancelText","chargingPile","submitted","canceled",4,"ngIf"],[3,"carpark","form","evcForm","submitText","cancelText","chargingPile","submitted","evcSubmit","canceled",4,"ngIf"],[3,"form","submitText","cancelText","submitted","canceled",4,"ngIf"],[3,"form","submitText","submitted"],[3,"form","submitText","cancelText","chargingPile","submitted","canceled"],[3,"carpark","form","evcForm","submitText","cancelText","chargingPile","submitted","evcSubmit","canceled"],[3,"form","submitText","cancelText","submitted","canceled"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"div",6),t.qZA(),t.TgZ(7,"a",7)(8,"span",8),t._UZ(9,"i",9),t.qZA()(),t.TgZ(10,"div",10),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"div",4)(14,"div",5),t._UZ(15,"div",6),t.qZA(),t.TgZ(16,"a",7)(17,"span",8),t._UZ(18,"i",11),t.qZA()(),t.TgZ(19,"div",10),t._uU(20),t.ALo(21,"translate"),t.qZA()(),t.TgZ(22,"div",4)(23,"div",5),t._UZ(24,"div",6),t.qZA(),t.TgZ(25,"a",7)(26,"span",8),t._UZ(27,"i",12),t.qZA()(),t.TgZ(28,"div",10),t._uU(29),t.ALo(30,"translate"),t.qZA()(),t.TgZ(31,"div",4)(32,"div",5),t._UZ(33,"div",6),t.qZA(),t.TgZ(34,"a",7)(35,"span",8),t._UZ(36,"i",13),t.qZA()(),t.TgZ(37,"div",10),t._uU(38),t.ALo(39,"translate"),t.qZA()()()(),t.YNc(40,ft,2,4,"app-carpark-form-basic",14),t.YNc(41,gt,3,8,"app-carpark-form-lots",15),t.YNc(42,ht,3,10,"app-carpark-form-tariffs",16),t.YNc(43,Ct,3,7,"app-carpark-form-stations",17),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngClass",a.currentStepClass(0)),t.xp6(7),t.hij(" 1. ",t.lcZ(12,12,"Basic Info")," "),t.xp6(2),t.Q6J("ngClass",a.currentStepClass(1)),t.xp6(7),t.hij(" 2. ",t.lcZ(21,14,"Lots")," "),t.xp6(2),t.Q6J("ngClass",a.currentStepClass(2)),t.xp6(7),t.hij(" 3. ",t.lcZ(30,16,"Tariffs")," "),t.xp6(2),t.Q6J("ngClass",a.currentStepClass(3)),t.xp6(7),t.hij(" 4. ",t.lcZ(39,18,"Stations")," "),t.xp6(2),t.Q6J("ngIf",0===a.currentStep),t.xp6(1),t.Q6J("ngIf",1===a.currentStep),t.xp6(1),t.Q6J("ngIf",2===a.currentStep),t.xp6(1),t.Q6J("ngIf",3===a.currentStep))},dependencies:[f.mk,f.O5,v.y,y.X,W,ut,_.X$],encapsulation:2}),n})();var Y=l(28555),Tt=l(17489),Q=(l(19612),l(71942)),vt=l(76916),bt=l(47423),Zt=l(52615),kt=l(35635);function Pt(n,o){if(1&n&&t._UZ(0,"nz-option",18),2&n){const e=o.$implicit;t.Q6J("nzValue",e.value)("nzLabel",e.text)}}function zt(n,o){if(1&n&&t._UZ(0,"nz-option",18),2&n){const e=o.$implicit;t.Q6J("nzValue",e.value)("nzLabel",e.text)}}function yt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"span",11),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"nz-select",19),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw(2);return t.KtG(i.paymentMethod=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.reloadData())}),t._UZ(6,"nz-option",13),t.ALo(7,"translate"),t.YNc(8,zt,1,2,"nz-option",14),t.qZA()()()}if(2&n){const e=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,4,"Payment Method:")),t.xp6(2),t.Q6J("ngModel",e.paymentMethod),t.xp6(1),t.Q6J("nzLabel",t.lcZ(7,6,"All")),t.xp6(2),t.Q6J("ngForOf",e.paymentMethods)}}function At(n,o){if(1&n&&t._UZ(0,"nz-option",18),2&n){const e=o.$implicit;t.Q6J("nzValue",e.value)("nzLabel",e.text)}}function St(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"span",11),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"nz-select",19),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw(2);return t.KtG(i.fault=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.reloadData())}),t._UZ(6,"nz-option",13),t.ALo(7,"translate"),t.YNc(8,At,1,2,"nz-option",14),t.qZA()()()}if(2&n){const e=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,4,"Fault:")),t.xp6(2),t.Q6J("ngModel",e.fault),t.xp6(1),t.Q6J("nzLabel",t.lcZ(7,6,"All")),t.xp6(2),t.Q6J("ngForOf",e.faults)}}function Lt(n,o){if(1&n&&t._UZ(0,"nz-option",18),2&n){const e=o.$implicit;t.Q6J("nzValue",e.value)("nzLabel",e.text)}}function wt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"span",11),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"nz-select",19),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw(2);return t.KtG(i.group=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.reloadData())}),t._UZ(6,"nz-option",13),t.ALo(7,"translate"),t.YNc(8,Lt,1,2,"nz-option",14),t.qZA()()()}if(2&n){const e=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,4,"Group:")),t.xp6(2),t.Q6J("ngModel",e.group),t.xp6(1),t.Q6J("nzLabel",t.lcZ(7,6,"All")),t.xp6(2),t.Q6J("ngForOf",e.groups)}}function Ft(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"span",11),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"nz-select",12),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.status=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.reloadData())}),t._UZ(7,"nz-option",13),t.ALo(8,"translate"),t.YNc(9,Pt,1,2,"nz-option",14),t.qZA()()(),t.YNc(10,yt,9,8,"div",15),t.YNc(11,St,9,8,"div",15),t.YNc(12,wt,9,8,"div",15),t.TgZ(13,"div",16)(14,"div",10)(15,"span",11),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"input",17),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.keyword=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.reloadData())}),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(4),t.hij("",t.lcZ(5,9,"Status"),":"),t.xp6(2),t.Q6J("ngModel",e.status),t.xp6(1),t.Q6J("nzLabel",t.lcZ(8,11,"All")),t.xp6(2),t.Q6J("ngForOf",e.statuses),t.xp6(1),t.Q6J("ngIf",!e.isOwner),t.xp6(1),t.Q6J("ngIf",!e.isOwner),t.xp6(1),t.Q6J("ngIf",!e.isOwner),t.xp6(4),t.Oqu(t.lcZ(17,13,"Car Park Name")),t.xp6(2),t.Q6J("ngModel",e.keyword)}}function Mt(n,o){if(1&n&&t._uU(0),2&n){const e=o.range;t.lnq(" ",e[0],"-",e[1]," of ",o.$implicit," items ")}}function Jt(n,o){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.text)}}function Ot(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.id)}}function Nt(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.carParkCode)}}function Ut(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.name)}}function Qt(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.totalLots)}}const It=function(n,o){return{width:n,color:o}};function qt(n,o){if(1&n&&(t.TgZ(0,"td")(1,"span",21),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit,a=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.WLB(2,It,a.setTableContent("availableLots").width,a.vacancyColor.Available)),t.xp6(1),t.hij(" ",null==e.live?null:e.live.availableLots," ")}}const Yt=function(n){return{color:n}};function Ht(n,o){if(1&n&&(t.TgZ(0,"td")(1,"span",21),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit,a=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(2,Yt,a.vacancyColor.Normal)),t.xp6(1),t.hij(" ",a.getNormalLots(e)," ")}}function Et(n,o){if(1&n&&(t.TgZ(0,"td")(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit,a=t.oxw();t.xp6(2),t.hij(" ",a.getStatus(null==e.live?null:e.live.availability)," ")}}function Kt(n,o){1&n&&(t.TgZ(0,"td"),t._uU(1,"-"),t.qZA())}function Gt(n,o){1&n&&(t.TgZ(0,"td"),t._uU(1,"-"),t.qZA())}const $t=function(n){return[n]};function Bt(n,o){if(1&n&&(t.TgZ(0,"td")(1,"a",22),t._UZ(2,"i",23),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,$t,e.id))}}function Dt(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"tr"),t.YNc(2,Ot,2,1,"td",20),t.YNc(3,Nt,2,1,"td",20),t.YNc(4,Ut,2,1,"td",20),t.YNc(5,Qt,2,1,"td",20),t.YNc(6,qt,3,5,"td",20),t.YNc(7,Ht,3,4,"td",20),t.YNc(8,Et,3,1,"td",20),t.YNc(9,Kt,2,0,"td",20),t.YNc(10,Gt,2,0,"td",20),t.YNc(11,Bt,3,3,"td",20),t.qZA(),t.BQk()),2&n){const e=o.index,a=t.oxw();t.xp6(1),t.ekj("ant-table-row-odd",e%2==1),t.xp6(1),t.Q6J("ngIf",a.setTableContent("id").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("carParkCode").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("name").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("totalLots").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("availableLots").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("usedNormalLots").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("availability").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("method").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("fault").show),t.xp6(1),t.Q6J("ngIf",a.setTableContent("action").show)}}let Vt=(()=>{class n extends q.t{constructor(e,a,r,i){super(),this.router=e,this.carParkService=a,this.translate=r,this.vehicleService=i,this.tableHeaders=[{text:"#",width:"40px",column:"id",align:I.iW.Center},{text:"Car Park No.",column:"carParkCode",width:"100px"},{text:"Car Park Name",column:"name",width:"140px"},{text:"Total Lots",column:"totalLots",width:"80px"},{text:"Available",column:"availableLots",width:"80px"},{text:"Hourly parking",column:"usedNormalLots",width:"140px"},{text:"Status",column:"availability",width:"80px"},{text:"Payment Method",column:"method",width:"140px"},{text:"Fault",column:"fault",width:"80px"},{text:"Actions",column:"action",width:"80px"}],this.statuses=p.$Id,this.status="",this.paymentMethods=p.Hl7,this.paymentMethod="",this.faults=p.cPJ,this.fault="",this.groups=[],this.group="",this.vacancies=[],this.vacancyColor=p.M8c,this.keyword="",this.setTableHeaders()}get data(){return this._data}set data(e){this._data=e,this.vacancies=e&&e.map(a=>a.type!==p.D63.Closed?[{value:a.availableLots,color:p.M8c.Available},{value:a.seasonLots,color:p.M8c.Season},{value:a.usedNormalLots,color:p.M8c.Normal}]:[])}get filterParams(){return{type:this.status,paymentMethod:this.paymentMethod,fault:this.fault,group:this.group,keyword:this.keyword}}setTableHeaders(){let e=[];e=this.isOperator?["id","name","totalLots","availableLots","usedNormalLots","availability","method","fault","action"]:this.isOwner?["id","name","totalLots","availableLots","availability","action"]:this.isAdmin?["id","carParkCode","name","totalLots","availableLots","availability","method","fault","action"]:["id","carParkCode","name","totalLots","availableLots","usedNormalLots","availability","method","fault","action"],this.tableHeaders=this.tableHeaders.filter(a=>e.includes(a.column))}setTableContent(e){let a={width:null,show:!1};const r=this.tableHeaders.filter(i=>i.column===e);return r.length&&(a={width:r[0].width,show:!0}),a}setTableHeaderWidth(e){return this.tableHeaders[0].width}ngOnInit(){this.reloadData();const e=this.tableHeaders.map(c=>c.text);this.translate.get(e).subscribe(c=>{this.tableHeaders.forEach(h=>{for(const g in c)c.hasOwnProperty(g)&&h.text===g&&(h.text=c[g])})});const a=this.statuses.map(c=>c.text);this.translate.get(a).subscribe(c=>{this.statuses.forEach(h=>{for(const g in c)c.hasOwnProperty(g)&&h.text===g&&(h.text=c[g])})});const r=this.paymentMethods.map(c=>c.text);this.translate.get(r).subscribe(c=>{this.paymentMethods.forEach(h=>{for(const g in c)c.hasOwnProperty(g)&&h.text===g&&(h.text=c[g])})});const i=this.faults.map(c=>c.text);this.translate.get(i).subscribe(c=>{this.faults.forEach(h=>{for(const g in c)c.hasOwnProperty(g)&&h.text===g&&(h.text=c[g])})})}reloadData(){this.reloadDataService(this.carParkService)}pageChanged(e){this.pagination=e,this.reloadData()}getStatus(e){const a=p.$Id.find(r=>r.value===e);return e?a&&a.text:"-"}getNormalLots(e){return e.live?e.totalLots-e.live.availableLots-e.seasonLots:"-"}get isOperator(){return this.vehicleService.isOperator()}get isOwner(){return this.carParkService.isOwner()}get isAdmin(){return this.carParkService.isAdmin()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.F0),t.Y36(s.x),t.Y36(_.sK),t.Y36(Q.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carpark-list"]],features:[t.qOj],decls:13,vars:11,consts:[[1,"m-portlet"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame"],["class","form-group m-form__group m-portlet__filters",4,"ngIf"],["rangeTemplate",""],[3,"nzData","nzFrontPagination","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzShowSizeChanger","nzShowTotal","nzQueryParams"],["basicTable",""],[4,"ngFor","ngForOf"],[1,"form-group","m-form__group","m-portlet__filters"],[1,"filter-wrap"],[1,"filter-item"],[1,"filter-label"],["name","status",2,"width","160px",3,"ngModel","ngModelChange"],["nzValue","",3,"nzLabel"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["class","filter-wrap",4,"ngIf"],[1,"filter-wrap",2,"margin-left","auto"],["type","text","nz-input","","placeholder","Car Park Name",2,"width","160px",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel"],[2,"width","160px",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"ngStyle"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"routerLink"],[1,"la","la-eye"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,Ft,19,15,"div",3),t.YNc(4,Mt,1,3,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-table",5,6),t.NdJ("nzQueryParams",function(i){return a.onQueryParamsChange(i)}),t.TgZ(8,"thead")(9,"tr"),t.YNc(10,Jt,2,1,"th",7),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,Dt,12,12,"ng-container",7),t.qZA()()()()()),2&e){const r=t.MAs(5),i=t.MAs(7);t.xp6(3),t.Q6J("ngIf",!a.isOperator),t.xp6(3),t.Q6J("nzData",a.listData)("nzFrontPagination",!1)("nzLoading",a.loading)("nzTotal",a.pagination.totalCount)("nzPageSize",a.pagination.rowsPerPage)("nzPageIndex",a.pagination.page)("nzShowSizeChanger",!0)("nzShowTotal",r),t.xp6(4),t.Q6J("ngForOf",a.tableHeaders),t.xp6(2),t.Q6J("ngForOf",i.data)}},dependencies:[f.sg,f.O5,f.PC,T.Fj,T.JJ,T.On,d.N8,d.Uo,d._C,d.Om,d.p0,d.$Z,A.Ip,A.Vq,kt.Zp,C.yS,_.X$],encapsulation:2}),n})();function jt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.gotoCreate())}),t._UZ(1,"span",11),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&n&&(t.xp6(2),t.hij("",t.lcZ(3,1,"Create Car Park")," "))}function Wt(n,o){1&n&&t._UZ(0,"app-carpark-list")}function Xt(n,o){1&n&&t._UZ(0,"app-carpark-map",12)}let Rt=(()=>{class n{constructor(e,a,r,i,c){this.router=e,this.translate=a,this.store=r,this.vehicleService=i,this.carparkService=c,this.alive=!0,this.currentTab="map",this.user$=r.pipe((0,Y.Ys)("global"))}changeTab(e){this.currentTab=e}gotoCreate(){this.router.navigate(["/carparks/create"])}tabClass(e){return e===this.currentTab?"active":""}ngOnInit(){this.user$.takeWhile(()=>this.alive).subscribe(({user:e})=>{this.viewOnly=(0,Tt.intersection)([p.i44.ThirdParty,p.i44.Tester,p.i44.Auditor],e.authorities).length>0})}get isOperator(){return this.vehicleService.isOperator()}get isOwner(){return this.carparkService.isOwner()}get createOrNot(){return!(this.isOperator||this.isOwner)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.F0),t.Y36(_.sK),t.Y36(Y.yh),t.Y36(Q.f),t.Y36(s.x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carparks-home"]],decls:11,vars:5,consts:[[1,"body-wrapper"],["role","group","aria-label","...",1,"m-btn-group","m-btn-group--pill","btn-group","mr-2"],["nz-button","","nzType","primary","nzSize","large","type","button",2,"border-radius","40px 0 0 40px",3,"nzGhost","click"],[1,"la","la-th-list"],["nz-button","","nzType","primary","nzSize","large","type","button",2,"border-radius","0 40px 40px 0",3,"nzGhost","click"],[1,"la","la-map"],["nz-button","","nzType","primary","nzSize","large","nzShape","round",3,"click",4,"ngIf"],[1,"m-content"],[4,"ngIf"],["style","display:flex;",4,"ngIf"],["nz-button","","nzType","primary","nzSize","large","nzShape","round",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[2,"display","flex"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"app-title-bar")(2,"div",1)(3,"button",2),t.NdJ("click",function(){return a.changeTab("list")}),t._UZ(4,"i",3),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return a.changeTab("map")}),t._UZ(6,"i",5),t.qZA()(),t.YNc(7,jt,4,3,"button",6),t.qZA(),t.TgZ(8,"div",7),t.YNc(9,Wt,1,0,"app-carpark-list",8),t.YNc(10,Xt,1,0,"app-carpark-map",9),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("nzGhost","list"!==a.currentTab),t.xp6(2),t.Q6J("nzGhost","map"!==a.currentTab),t.xp6(2),t.Q6J("ngIf",a.createOrNot),t.xp6(2),t.Q6J("ngIf","list"===a.currentTab),t.xp6(1),t.Q6J("ngIf","map"===a.currentTab))},dependencies:[f.O5,vt.G,bt.Ls,O.ix,N.w,U.dQ,Zt.a,Vt,_.X$]}),n})();var te=l(80529),ee=l(19832);function H(n){return new ee.w(n,"../assets/i18n/",".json")}const E=[{path:"",component:x.f,children:[{path:"",component:Rt},{path:"create",component:xt,data:{breadcrumb:{label:"Create"}}},{path:":id",loadChildren:()=>Promise.all([l.e(7530),l.e(3420),l.e(5312),l.e(2662)]).then(l.bind(l,91004)).then(n=>n.CarParkModule),data:{breadcrumb:n=>({label:`Car Park ${n.snapshot.params.id}`,title:`Car Park ${n.snapshot.params.id}`})}}]}];let ae=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Z.k,S.e,s.x,L.p,k.C,P.K,w.K,Q.f],imports:[f.ez,C.Bz.forChild(E),u.x,F.D,M.a4,J.mr,m.P,_.aw.forChild({loader:{provide:_.Zw,useFactory:H,deps:[te.eN]}}),C.Bz]}),n})()}}]);