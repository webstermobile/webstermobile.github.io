(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[6525,9226],{76916:(L,w,r)=>{"use strict";r.d(w,{G:()=>x});var b=r(34793),T=r(92198),i=r(94650),f=r(89383),Z=r(60097),M=r(36895);function t(s,m){if(1&s&&(i.TgZ(0,"a",14)(1,"span",15),i._uU(2),i.ALo(3,"translate"),i.qZA()()),2&s){const l=i.oxw().$implicit;i.xp6(2),i.hij(" ",i.lcZ(3,1,l.label)," ")}}function y(s,m){if(1&s&&(i.TgZ(0,"a",16)(1,"span",15),i._uU(2),i.ALo(3,"translate"),i.qZA()()),2&s){const l=i.oxw(),u=l.$implicit,_=l.last,h=i.oxw(2);i.Q6J("routerLink",u.url)("queryParams",_&&h.route.snapshot.queryParams),i.xp6(2),i.hij(" ",i.lcZ(3,3,u.label)," ")}}function A(s,m){if(1&s&&(i.ynx(0),i.TgZ(1,"li",10)(2,"span"),i._uU(3," > "),i.qZA()(),i.TgZ(4,"li",11),i.YNc(5,t,4,3,"a",12),i.YNc(6,y,4,5,"a",13),i.qZA(),i.BQk()),2&s){const l=m.first;i.xp6(5),i.Q6J("ngIf",l),i.xp6(1),i.Q6J("ngIf",!l)}}function d(s,m){if(1&s&&(i.TgZ(0,"div",1)(1,"div",2)(2,"div",3),i._UZ(3,"h3",4),i.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),i._UZ(7,"i",8),i.qZA()(),i.YNc(8,A,7,2,"ng-container",9),i.qZA()(),i.TgZ(9,"div"),i.Hsn(10),i.qZA()()()),2&s){const l=i.oxw();i.xp6(3),i.Q6J("innerHTML",l.title,i.oJD),i.xp6(5),i.Q6J("ngForOf",l.breads)}}const p=["*"];let x=(()=>{class s{constructor(l,u,_,h){this.router=l,this.route=u,this.translate=_,this._carparkService=h,this.breads=[],this.loginUser=""}ngOnInit(){let l=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=l,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(_=>{this.label=_}),this.router.events.pipe((0,T.h)(_=>_ instanceof b.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(l,u=[""],_=[]){const h=l.snapshot.url[0]&&l.snapshot.url[0].path,v=[...u,h],C={...this.extractBreadcrumb(l),url:v},U=h&&C.label?[..._,C]:_;return this.title=C.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===C.label&&(this.title="My Vehicle(s)"),l.firstChild?h?this.buildBreadCrumb(l.firstChild,v,U):this.buildBreadCrumb(l.firstChild,u,_):(this.translate.get(this.title).subscribe(O=>{this.title=O}),U)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(l){return l.snapshot.data.breadcrumb instanceof Function?l.snapshot.data.breadcrumb(l):l.snapshot.data.breadcrumb}}return s.\u0275fac=function(l){return new(l||s)(i.Y36(b.F0),i.Y36(b.gz),i.Y36(f.sK),i.Y36(Z.x))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-title-bar"]],ngContentSelectors:p,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(l,u){1&l&&(i.F$t(),i.YNc(0,d,11,2,"div",0)),2&l&&i.Q6J("ngIf","ROLE_TPO_PARTNER"!==u.loginUser)},dependencies:[M.sg,M.O5,b.yS,f.X$],encapsulation:2}),s})()},16525:(L,w,r)=>{"use strict";r.r(w),r.d(w,{CmrlAssetListModule:()=>Q});var b=r(36895),T=r(79118),i=r(26245),f=r(8929),Z=r(15439),M=r(94327),t=r(94650),A=(r(38014),r(3927)),d=r(27221),p=r(80529),x=r(28555),s=r(91599);let m=(()=>{class c extends A.su{constructor(e,o,n){super(e,o),this.http=e,this.store=o,this.modelName="cmrlAssetList",this.baseUrl="maintenance/api/asset",this.handleError=n.createHandleError(`${this.modelName}Service`)}filterModel(e,o){const n=(0,i.U8)(`${this.baseUrl}/getByParamPage`,{...e,...(0,i.jq)(o)});return this.get(this.getUrl(n)).pipe((0,d.K)(this.handleError(`${this.modelName}Filter`,{}))).map(a=>Array.isArray(a)?(0,A.eC)(a):(0,A.O7)(a))}changeInformation(e){const o=this.getUrl("maintenance/api/asset");return this.put(o,e)}AddOneData(e){const o=this.getUrl("maintenance/api/asset");return this.post(o,e)}clearHandle(e){const o=this.getUrl(`maintenance/api/transaction?id=${e||""}`);return this.delete(o)}exportCondo(e,o){const n=(0,i.U8)(`${this.baseUrl}/exportData`,{...e,...(0,i.jq)(o)});return this.get(this.getUrl(n),{responseType:"blob"})}importCondo(e){const o=this.getUrl("maintenance/api/asset/importData");return this.post(o,e)}}return c.\u0275fac=function(e){return new(e||c)(t.LFG(p.eN),t.LFG(x.yh),t.LFG(s.k))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac}),c})();var l=r(89383),u=r(76916),_=r(40269),h=r(24006),v=r(59245);const C=["inputfile"];function U(c,g){1&c&&(t.TgZ(0,"div",14),t._uU(1," success! "),t.qZA())}function O(c,g){if(1&c){const e=t.EpF();t.TgZ(0,"ul",35)(1,"li",36),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.editOneData(n))}),t.TgZ(2,"a",37)(3,"span"),t._UZ(4,"i",38),t.qZA(),t.TgZ(5,"span"),t._uU(6,"Edit"),t.qZA()()()()}}function D(c,g){if(1&c){const e=t.EpF();t.TgZ(0,"td",26),t.NdJ("click",function(){const a=t.CHM(e).index;t.oxw();const F=t.MAs(35);return t.KtG(F.toggleItem(a))}),t.TgZ(1,"span"),t._UZ(2,"i",27),t.qZA()(),t.TgZ(3,"td",28)(4,"span"),t._uU(5),t.qZA()(),t.TgZ(6,"td",28)(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"td",28)(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"td",28)(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"td",28)(16,"span"),t._uU(17),t.qZA()(),t.TgZ(18,"td",28)(19,"span"),t._uU(20),t.qZA()(),t.TgZ(21,"td",28)(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"td",29)(25,"span",30)(26,"div",31)(27,"button",32),t._UZ(28,"i",33),t.qZA(),t.YNc(29,O,7,0,"ul",34),t.qZA()()()}if(2&c){const e=g.$implicit,o=g.expanded,n=t.oxw(2);t.xp6(1),t.Udp("width",n.tableHeaders[0].width),t.xp6(1),t.Q6J("ngClass",o?"fa-caret-down":"fa-caret-right"),t.xp6(2),t.Udp("width",n.tableHeaders[1].width),t.xp6(1),t.hij(" ",e.system," "),t.xp6(2),t.Udp("width",n.tableHeaders[2].width),t.xp6(1),t.hij(" ",e.subSystem," "),t.xp6(2),t.Udp("width",n.tableHeaders[3].width),t.xp6(1),t.hij(" ",e.item," "),t.xp6(2),t.Udp("width",n.tableHeaders[4].width),t.xp6(1),t.hij(" ",e.module," "),t.xp6(2),t.Udp("width",n.tableHeaders[5].width),t.xp6(1),t.hij(" ",e.videoUrl," "),t.xp6(2),t.Udp("width",n.tableHeaders[6].width),t.xp6(1),t.hij(" ",e.pdfUrl," "),t.xp6(2),t.Udp("width",n.tableHeaders[7].width),t.xp6(1),t.hij(" ",e.serialNumber," "),t.xp6(2),t.Udp("width",n.tableHeaders[8].width)}}function P(c,g){if(1&c){const e=t.EpF();t.TgZ(0,"div",15)(1,"div",16)(2,"div",17)(3,"label",18),t._uU(4),t.qZA(),t.TgZ(5,"div",19)(6,"input",20),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.System=n)})("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.System$.next(n))}),t.qZA(),t.TgZ(7,"span",21)(8,"span"),t._UZ(9,"i",22),t.qZA()()()(),t.TgZ(10,"div",17)(11,"label",18),t._uU(12),t.qZA(),t.TgZ(13,"div",19)(14,"input",20),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.subsystem=n)})("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.subsystem$.next(n))}),t.qZA(),t.TgZ(15,"span",21)(16,"span"),t._UZ(17,"i",22),t.qZA()()()(),t.TgZ(18,"div",17)(19,"label",18),t._uU(20),t.qZA(),t.TgZ(21,"div",19)(22,"input",20),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.Item=n)})("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.Item$.next(n))}),t.qZA(),t.TgZ(23,"span",21)(24,"span"),t._UZ(25,"i",22),t.qZA()()()(),t.TgZ(26,"div",17)(27,"label",18),t._uU(28),t.qZA(),t.TgZ(29,"div",19)(30,"input",20),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.description=n)})("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.description$.next(n))}),t.qZA(),t.TgZ(31,"span",21)(32,"span"),t._UZ(33,"i",22),t.qZA()()()()(),t.TgZ(34,"app-datatable",23,24),t.NdJ("pageChanged",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.pageChanged(n))}),t.YNc(36,D,30,26,"ng-template",null,25,t.W1O),t.qZA()()}if(2&c){const e=t.oxw();t.xp6(4),t.hij(" ","System",": "),t.xp6(2),t.Q6J("ngModel",e.System),t.xp6(6),t.hij(" ","subsystem",": "),t.xp6(2),t.Q6J("ngModel",e.subsystem),t.xp6(6),t.hij(" ","Item",": "),t.xp6(2),t.Q6J("ngModel",e.Item),t.xp6(6),t.hij(" ","description",": "),t.xp6(2),t.Q6J("ngModel",e.description),t.xp6(4),t.Q6J("headers",e.tableHeaders)("items",e.data)("pagination",e.pagination)}}function E(c,g){1&c&&(t.TgZ(0,"h1"),t._uU(1," Change Data "),t.qZA())}function S(c,g){1&c&&(t.TgZ(0,"h1"),t._uU(1," Add Data "),t.qZA())}function H(c,g){if(1&c){const e=t.EpF();t.TgZ(0,"div",39),t.YNc(1,E,2,0,"h1",40),t.YNc(2,S,2,0,"h1",40),t.TgZ(3,"div",41)(4,"div",42),t._uU(5," System: "),t.qZA(),t.TgZ(6,"div",43)(7,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.system=n)}),t.qZA()()(),t.TgZ(8,"div",41)(9,"div",42),t._uU(10," Subsystem: "),t.qZA(),t.TgZ(11,"div",43)(12,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.subSystem=n)}),t.qZA()()(),t.TgZ(13,"div",41)(14,"div",42),t._uU(15," Item: "),t.qZA(),t.TgZ(16,"div",43)(17,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.item=n)}),t.qZA()()(),t.TgZ(18,"div",41)(19,"div",42),t._uU(20," Module/Description: "),t.qZA(),t.TgZ(21,"div",43)(22,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.module=n)}),t.qZA()()(),t.TgZ(23,"div",41)(24,"div",42),t._uU(25," Video Url: "),t.qZA(),t.TgZ(26,"div",43)(27,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.videoUrl=n)}),t.qZA()()(),t.TgZ(28,"div",41)(29,"div",42),t._uU(30," Pdf Url: "),t.qZA(),t.TgZ(31,"div",43)(32,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.pdfUrl=n)}),t.qZA()()(),t.TgZ(33,"div",41)(34,"div",42),t._uU(35," Serial Number: "),t.qZA(),t.TgZ(36,"div",43)(37,"input",44),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.changeData.serialNumber=n)}),t.qZA()()(),t.TgZ(38,"div",45)(39,"button",46),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cancelHandle())}),t._uU(40,"CANCEL"),t.qZA(),t.TgZ(41,"button",47),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.saveHandle())}),t._uU(42,"SAVE"),t.qZA()()()}if(2&c){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",1==e.changeTitle),t.xp6(1),t.Q6J("ngIf",0==e.changeTitle),t.xp6(5),t.Q6J("ngModel",e.changeData.system),t.xp6(5),t.Q6J("ngModel",e.changeData.subSystem),t.xp6(5),t.Q6J("ngModel",e.changeData.item),t.xp6(5),t.Q6J("ngModel",e.changeData.module),t.xp6(5),t.Q6J("ngModel",e.changeData.videoUrl),t.xp6(5),t.Q6J("ngModel",e.changeData.pdfUrl),t.xp6(5),t.Q6J("ngModel",e.changeData.serialNumber)}}let J=(()=>{class c extends T.Gw{constructor(e,o){super(),this.cmrlAssetList=e,this.translate=o,this.changeData={},this.keyword="",this.keyword$=new f.xQ,this.System="",this.System$=new f.xQ,this.subsystem="",this.subsystem$=new f.xQ,this.Item="",this.Item$=new f.xQ,this.description="",this.description$=new f.xQ,this.dataShow=!0,this.changeTitle=!0,this.successShow=!1,this.carPark="",this.carParkss=[{value:1,name:"\u5f20\u4e09"}],this.tableHeaders=[{text:"",width:"20px"},{text:"System",column:"Location",width:"150px"},{text:"Subsystem",column:"Location",width:"150px"},{text:"Item",column:"Location",width:"150px"},{text:"Module/Description",column:"Location",width:"200px"},{text:"Video Url",column:"Location",width:"150px"},{text:"Pdf Url",column:"Location",width:"150px"},{text:"Serial Number",column:"Location",width:"150px"},{text:"Actions",width:"100px"}],this.loading=!1,this.data=[]}get filterParams(){return{sort:"id,desc",system:this.System,subSystem:this.subsystem,item:this.Item,description:this.description}}reloadData(){this.reloadDataService(this.cmrlAssetList)}pageChanged(e){this.pagination=e,this.reloadData()}getDaySeasonList(){this.loading=!0}ngOnInit(){this.System$.debounceTime(500).subscribe(()=>{this.reloadData()}),this.subsystem$.debounceTime(500).subscribe(()=>{this.reloadData()}),this.Item$.debounceTime(500).subscribe(()=>{this.reloadData()}),this.description$.debounceTime(500).subscribe(()=>{this.reloadData()}),this.reloadData()}editOneData(e){this.changeData=e,this.dataShow=!1,this.changeTitle=!0}cancelHandle(){this.changeData={},this.dataShow=!0}saveHandle(){1==this.changeTitle?(this.cmrlAssetList.changeInformation(this.changeData).subscribe(e=>{this.reloadDataService(this.cmrlAssetList)}),this.dataShow=!0,this.changeData={}):(this.cmrlAssetList.AddOneData(this.changeData).subscribe(e=>{this.reloadDataService(this.cmrlAssetList)}),this.dataShow=!0,this.changeData={})}clearHandle(e){this.cmrlAssetList.clearHandle(e).subscribe(o=>{this.reloadDataService(this.cmrlAssetList)})}getVisitDate(e){this.startTime=Z(e[0]).format(),this.endTime=Z(e[1]).format(),console.log(this.startTime,this.endTime),this.reloadDataService(this.cmrlAssetList)}exportExcel(){this.cmrlAssetList.exportCondo(this.filterParams,this.pagination).subscribe(e=>{(0,M.saveAs)(e,"CMRL Asset List.csv")})}importExcel(){this.inputfile.nativeElement.click()}importMembers(e){const o=new FormData;o.append("file",e),this.cmrlAssetList.importCondo(o).subscribe(n=>{n.total&&(this.successShow=!0,setTimeout(()=>{this.successShow=!1},2e3))})}createOneData(){this.dataShow=!1,this.changeTitle=!1,console.log(this.changeTitle)}}return c.\u0275fac=function(e){return new(e||c)(t.Y36(m),t.Y36(l.sK))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-cmrl-asset-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(C,5),2&e){let n;t.iGM(n=t.CRH())&&(o.inputfile=n.first)}},features:[t.qOj],decls:18,vars:3,consts:[[1,"body-wrapper"],[1,"head-line"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"right-btn"],["type","file","accept",".csv,audio/*,video/*,image/*",2,"display","none",3,"change"],["inputfile",""],["type","button",1,"btn","btn-default","importBtn",3,"click"],["type","button",1,"btn","btn-default","exportBtn",3,"click"],["type","button",1,"btn","btn-default","btn-save","create-btn",3,"click"],[1,"m-content"],[1,"m-portlet","m-portlet--tabs"],[1,"m-portlet__body","m-portlet__body--scrollable"],["class","m-portlet__frame",4,"ngIf"],["class","m-portlet__frame  create-data-form",4,"ngIf"],["role","alert",1,"alert","alert-success"],[1,"m-portlet__frame"],[1,"form-group"],[1,"m-portlet__filter"],[1,"col-form-label","col-form-label-nowrap"],[1,"m-input-icon","m-input-icon--left"],["type","text","placeholder","",1,"form-control","m-input","selectAreas",3,"ngModel","ngModelChange"],[1,"m-input-icon__icon","m-input-icon__icon--left"],[1,"la","la-search"],[3,"headers","items","pagination","pageChanged"],["driverTable",""],["rowTemplate",""],[1,"m-datatable__cell","text-center",3,"click"],[1,"fa","text-primary",3,"ngClass"],[1,"m-datatable__cell"],[1,"m-datatable__cell","action-cell"],[1,"cell-actions"],["dropdown","","placement","bottom right"],["dropdownToggle","",1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--outline-2x","m-btn--pill","no-border"],[1,"la","la-ellipsis-h"],["class","dropdown-menu dropdown-menu-right","role","menu",4,"dropdownMenu"],["role","menu",1,"dropdown-menu","dropdown-menu-right"],[3,"click"],[1,"dropdown-item"],[1,"la","la-edit"],[1,"m-portlet__frame","create-data-form"],[4,"ngIf"],[1,"row"],[1,"col-md-3"],[1,"col-md-8"],["type","text",1,"col-md-12",3,"ngModel","ngModelChange"],[1,"btn-area"],["type","button",1,"btn","btn-default","btn-calcel",3,"click"],["type","button",1,"btn","btn-default","btn-save",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-title-bar"),t.YNc(3,U,2,0,"div",2),t.TgZ(4,"div",3)(5,"input",4,5),t.NdJ("change",function(a){return o.importMembers(a.target.files[0])}),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){return o.importExcel()}),t._uU(8," import"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.exportExcel()}),t._uU(10," export"),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){return o.createOneData()}),t._uU(12," + New Asset"),t.qZA()()(),t.TgZ(13,"div",9)(14,"div",10)(15,"div",11),t.YNc(16,P,38,11,"div",12),t.YNc(17,H,43,9,"div",13),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.successShow),t.xp6(13),t.Q6J("ngIf",1==o.dataShow),t.xp6(1),t.Q6J("ngIf",0==o.dataShow))},dependencies:[b.mk,b.O5,u.G,_.Uo,h.Fj,h.JJ,h.On,T.nE,v.Hz,v.Mq,v.TO],styles:["h1[_ngcontent-%COMP%]{font-weight:500;font-size:24px}.selectAreas[_ngcontent-%COMP%]{width:300px}.head-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.create-btn[_ngcontent-%COMP%]{height:40px;width:200px!important}.btnss[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btnss[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:200px;height:42px;display:flex;justify-content:center;align-items:center;border-radius:5px;border:1px solid #00bdb5;margin-right:20px;font-size:16x;cursor:pointer;font-weight:500}.col-form-label[_ngcontent-%COMP%]{font-weight:500;font-size:16px;width:90px}.btnss[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:120px!important;margin-left:20px}.btnss[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(1){color:#00bdb5}.btnss[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(2){color:#fff;background-color:#00bdb5}.form-group[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between}.m-portlet__filter[_ngcontent-%COMP%]{display:flex;margin-right:10px!important;justify-content:center;align-items:center;width:24%}.form-control[_ngcontent-%COMP%]{width:200px!important}.col-form-label-nowrap[_ngcontent-%COMP%]{width:auto;text-align:end}.create-data-form[_ngcontent-%COMP%]{border-radius:20px;height:70vh;box-sizing:border-box;padding:20px}.location[_ngcontent-%COMP%]{font-size:20px}.choose-titles[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between!important}.tit-options[_ngcontent-%COMP%]{width:20%;font-size:20px}.form-control[_ngcontent-%COMP%]{width:20%;height:40px}.big-title[_ngcontent-%COMP%]{margin-top:20px}.tit-options-33[_ngcontent-%COMP%]{width:30%;font-size:20px}.form-control-33[_ngcontent-%COMP%]{width:30%;height:40px}.tit-options-40[_ngcontent-%COMP%]{width:40%;font-size:20px;margin-top:20px}.btn-area[_ngcontent-%COMP%]{display:flex!important;justify-content:flex-end!important}.btn-default[_ngcontent-%COMP%]{width:100px;margin-right:30px}.btn-calcel[_ngcontent-%COMP%]{border-color:#00bdb5;color:#00bdb5}.btn-save[_ngcontent-%COMP%]{color:#fff;background-color:#00bdb5}.selectAreas[_ngcontent-%COMP%]{width:200px}.exportBtn[_ngcontent-%COMP%]{color:#fff;background-color:#00bdb5;height:40px}.right-btn[_ngcontent-%COMP%]{display:flex;width:30%}.importBtn[_ngcontent-%COMP%]{color:#00bdb5;background-color:#fff;height:40px}.row[_ngcontent-%COMP%]{font-size:24px;display:flex!important;margin-top:20px;margin-bottom:20px}.col-md-3[_ngcontent-%COMP%]{text-align:end}"]}),c})();var N=r(59501),I=r(34793),j=r(21532),B=r(88796),q=r(30329),K=r(372);const k=[{path:"",component:N.f,children:[{path:"",component:J}]}];let Q=(()=>{class c{}return c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({providers:[m],imports:[b.ez,j.x,I.Bz.forChild(k),B.A0,h.u5,h.UX,q.D,K.kn,v.mr]}),c})()},94327:function(L,w){var T;void 0!==(T=function(){"use strict";function f(d,p,x){var s=new XMLHttpRequest;s.open("GET",d),s.responseType="blob",s.onload=function(){A(s.response,p,x)},s.onerror=function(){console.error("could not download file")},s.send()}function Z(d){var p=new XMLHttpRequest;p.open("HEAD",d,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function M(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(p)}}var t="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,y=t.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),A=t.saveAs||("object"!=typeof window||window!==t?function(){}:"download"in HTMLAnchorElement.prototype&&!y?function(d,p,x){var s=t.URL||t.webkitURL,m=document.createElement("a");m.download=p=p||d.name||"download",m.rel="noopener","string"==typeof d?(m.href=d,m.origin===location.origin?M(m):Z(m.href)?f(d,p,x):M(m,m.target="_blank")):(m.href=s.createObjectURL(d),setTimeout(function(){s.revokeObjectURL(m.href)},4e4),setTimeout(function(){M(m)},0))}:"msSaveOrOpenBlob"in navigator?function(d,p,x){if(p=p||d.name||"download","string"!=typeof d)navigator.msSaveOrOpenBlob(function i(d,p){return typeof p>"u"?p={autoBom:!1}:"object"!=typeof p&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\ufeff",d],{type:d.type}):d}(d,x),p);else if(Z(d))f(d,p,x);else{var s=document.createElement("a");s.href=d,s.target="_blank",setTimeout(function(){M(s)})}}:function(d,p,x,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof d)return f(d,p,x);var m="application/octet-stream"===d.type,l=/constructor/i.test(t.HTMLElement)||t.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||m&&l||y)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var C=_.result;C=u?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=C:location=C,s=null},_.readAsDataURL(d)}else{var h=t.URL||t.webkitURL,v=h.createObjectURL(d);s?s.location=v:location.href=v,s=null,setTimeout(function(){h.revokeObjectURL(v)},4e4)}});t.saveAs=A.saveAs=A,L.exports=A}.apply(w,[]))&&(L.exports=T)}}]);