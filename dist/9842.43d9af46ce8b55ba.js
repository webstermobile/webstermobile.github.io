"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[9842],{71636:(T,E,n)=>{n.d(E,{w:()=>s}),n(38014);var g=n(3927),a=n(27221),c=n(26245),h=n(94650),p=n(80529),u=n(28555),O=n(91599);let s=(()=>{class _ extends g.su{constructor(o,e,i){super(o,e),this.http=o,this.store=e,this.modelName="newTransaction",this.baseUrl="maintenance/api/transaction",this.handleError=i.createHandleError(`${this.modelName}Service`)}filterModel(o,e){const i=(0,c.U8)(`${this.baseUrl}/queryByParam`,{...o,...(0,c.jq)(e)});return this.get(this.getUrl(i)).pipe((0,a.K)(this.handleError(`${this.modelName}Filter`,{}))).map(r=>Array.isArray(r)?(0,g.eC)(r):(0,g.O7)(r))}clearHandle(o){const e=this.getUrl(`maintenance/api/transaction?id=${o||""}`);return console.log(e,"\u8def\u5f84"),this.delete(e)}exportCondo(o,e){const i=(0,c.U8)(`${this.baseUrl}/export`,{...o,...(0,c.jq)(e)});return this.get(this.getUrl(i),{responseType:"blob"})}getCitySelect(){const o=this.getUrl("maintenance/api/station/city");return this.get(o)}getTrainLineSelect(o){const e=this.getUrl("maintenance/api/station/lineCode");return this.post(e,o)}getStationSelect(o){const e=this.getUrl("maintenance/api/station/stationName");return this.post(e,o)}instationLocationSelect(o){const e=this.getUrl("maintenance/api/station/inStationLocation");return this.post(e,o)}doorWaySelect(o){const e=this.getUrl("maintenance/api/station/doorwayNumber");return this.post(e,o)}systemSelect(){const o=this.getUrl("maintenance/api/asset/getByParamWithoutStation");return this.get(o)}subSystemSelect(o){const e=this.getUrl(`maintenance/api/asset/getByParamWithoutStation?${o}`);return this.get(e)}itemOptionsSelect(o){const e=this.getUrl(`maintenance/api/asset/getByParamWithoutStation?${o}`);return this.get(e)}}return _.\u0275fac=function(o){return new(o||_)(h.LFG(p.eN),h.LFG(u.yh),h.LFG(O.k))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac}),_})()},92935:(T,E,n)=>{n.d(E,{$:()=>s}),n(38014);var g=n(3927),a=n(27221),c=n(26245),h=n(94650),p=n(80529),u=n(28555),O=n(91599);let s=(()=>{class _ extends g.su{constructor(o,e,i){super(o,e),this.http=o,this.store=e,this.modelName="WalkInRecord",this.baseUrl="carpark/api/condo/queryVisitorWalkIn",this.handleError=i.createHandleError(`${this.modelName}Service`)}filterModel(o,e){const i=(0,c.U8)(`${this.baseUrl}`,{...o,...(0,c.jq)(e)});return this.get(this.getUrl(i)).pipe((0,a.K)(this.handleError(`${this.modelName}Filter`,{}))).map(r=>Array.isArray(r)?(0,g.eC)(r):(0,g.O7)(r))}clearHandle(o){const e=this.getUrl(`maintenance/api/transaction?id=${o||""}`);return console.log(e,"\u8def\u5f84"),this.delete(e)}exportEecel(o,e){const i=(0,c.U8)("carpark/api/condo/exportWalkIn",{...o,...(0,c.jq)(e)});return this.get(this.getUrl(i),{responseType:"blob"})}}return _.\u0275fac=function(o){return new(o||_)(h.LFG(p.eN),h.LFG(u.yh),h.LFG(O.k))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac}),_})()},76916:(T,E,n)=>{n.d(E,{G:()=>o});var t=n(34793),g=n(92198),a=n(94650),c=n(89383),h=n(60097),p=n(36895);function u(e,i){if(1&e&&(a.TgZ(0,"a",14)(1,"span",15),a._uU(2),a.ALo(3,"translate"),a.qZA()()),2&e){const r=a.oxw().$implicit;a.xp6(2),a.hij(" ",a.lcZ(3,1,r.label)," ")}}function O(e,i){if(1&e&&(a.TgZ(0,"a",16)(1,"span",15),a._uU(2),a.ALo(3,"translate"),a.qZA()()),2&e){const r=a.oxw(),m=r.$implicit,d=r.last,M=a.oxw(2);a.Q6J("routerLink",m.url)("queryParams",d&&M.route.snapshot.queryParams),a.xp6(2),a.hij(" ",a.lcZ(3,3,m.label)," ")}}function s(e,i){if(1&e&&(a.ynx(0),a.TgZ(1,"li",10)(2,"span"),a._uU(3," > "),a.qZA()(),a.TgZ(4,"li",11),a.YNc(5,u,4,3,"a",12),a.YNc(6,O,4,5,"a",13),a.qZA(),a.BQk()),2&e){const r=i.first;a.xp6(5),a.Q6J("ngIf",r),a.xp6(1),a.Q6J("ngIf",!r)}}function _(e,i){if(1&e&&(a.TgZ(0,"div",1)(1,"div",2)(2,"div",3),a._UZ(3,"h3",4),a.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),a._UZ(7,"i",8),a.qZA()(),a.YNc(8,s,7,2,"ng-container",9),a.qZA()(),a.TgZ(9,"div"),a.Hsn(10),a.qZA()()()),2&e){const r=a.oxw();a.xp6(3),a.Q6J("innerHTML",r.title,a.oJD),a.xp6(5),a.Q6J("ngForOf",r.breads)}}const l=["*"];let o=(()=>{class e{constructor(r,m,d,M){this.router=r,this.route=m,this.translate=d,this._carparkService=M,this.breads=[],this.loginUser=""}ngOnInit(){let r=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=r,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(d=>{this.label=d}),this.router.events.pipe((0,g.h)(d=>d instanceof t.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(r,m=[""],d=[]){const M=r.snapshot.url[0]&&r.snapshot.url[0].path,P=[...m,M],U={...this.extractBreadcrumb(r),url:P},D=M&&U.label?[...d,U]:d;return this.title=U.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===U.label&&(this.title="My Vehicle(s)"),r.firstChild?M?this.buildBreadCrumb(r.firstChild,P,D):this.buildBreadCrumb(r.firstChild,m,d):(this.translate.get(this.title).subscribe(A=>{this.title=A}),D)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(r){return r.snapshot.data.breadcrumb instanceof Function?r.snapshot.data.breadcrumb(r):r.snapshot.data.breadcrumb}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(t.F0),a.Y36(t.gz),a.Y36(c.sK),a.Y36(h.x))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-title-bar"]],ngContentSelectors:l,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(r,m){1&r&&(a.F$t(),a.YNc(0,_,11,2,"div",0)),2&r&&a.Q6J("ngIf","ROLE_TPO_PARTNER"!==m.loginUser)},dependencies:[p.sg,p.O5,t.yS,c.X$],encapsulation:2}),e})()},99889:(T,E,n)=>{n.r(E),n.d(E,{EvLoadManagementModule:()=>m});var t=n(25698),g=n(36895),a=n(59501),c=n(34793),h=n(88796),p=n(24006),u=n(30329),O=n(372),s=n(59245),_=n(71636),l=n(34984),o=n(92935),e=n(21532),i=n(94650);const r=[{path:"",component:a.f,children:[{path:"",component:t.S}]}];let m=(()=>{class d{}return d.\u0275fac=function(P){return new(P||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({providers:[_.w,o.$],imports:[g.ez,e.x,c.Bz.forChild(r),h.A0,p.u5,p.UX,u.D,O.kn,s.mr,l.Ns.forRoot({echarts:()=>n.e(4734).then(n.bind(n,14734))})]}),d})()},25698:(T,E,n)=>{n.d(E,{S:()=>O});var t=n(94650),g=n(36895),a=n(48521),c=n(24006);function h(s,_){if(1&s&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&s){const l=t.oxw().$implicit;t.xp6(1),t.hij("",l.currentPower,"KW")}}function p(s,_){1&s&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&s&&(t.xp6(1),t.hij("",0,"KW"))}function u(s,_){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,h,2,1,"div",21),t.YNc(2,p,2,1,"div",21),t.O4$(),t.TgZ(3,"svg",12),t._UZ(4,"path",13),t.qZA(),t.kcU(),t.TgZ(5,"div"),t._uU(6),t.qZA()()),2&s){const l=_.$implicit;t.xp6(1),t.Q6J("ngIf",2==l.stakeEntity.status),t.xp6(1),t.Q6J("ngIf",2!==l.stakeEntity.status),t.xp6(4),t.Oqu(l.stakeEntity.deviceId)}}let O=(()=>{class s{constructor(){this.info={},this.chargersArr=[],this.radioValue="Equal-Share"}ngOnInit(){let l=JSON.parse(localStorage.getItem("chargerInformation"));this.info=l,this.chargersArr=this.info.ammeters[0].chargers,console.log(this.chargersArr)}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-ev-load-management"]],decls:109,vars:3,consts:[[2,"padding","16px","color","#00bdb5","margin","0"],[1,"main-box"],[1,"box-child"],[2,"display","none"],[1,"box-middle"],["id",""],[1,"total-number"],[1,"shuxian"],[1,"three-line"],[4,"ngFor","ngForOf"],["id","",2,"display","none"],[1,"db-number"],["t","1656490243758","viewBox","0 0 1109 1024","version","1.1","xmlns","http://www.w3.org/2000/svg","p-id","2539","width","100","height","100",1,"icon"],["d","M1066.666667 341.333333h-42.666667v405.333334a149.333333 149.333333 0 0 1-298.666667 0V298.666667a42.666667 42.666667 0 0 0-42.666666-42.666667v682.666667h85.333333v85.333333H0v-85.333333h85.333333V85.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h426.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v85.333334a128 128 0 0 1 128 128v448a64 64 0 0 0 128 0V341.333333h-42.666667a42.666667 42.666667 0 0 1-42.666667-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666v-21.333334a21.333333 21.333333 0 0 1 42.666667 0V170.666667h85.333333v-21.333334a21.333333 21.333333 0 0 1 42.666667 0V170.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v85.333334a42.666667 42.666667 0 0 1-42.666666 42.666666zM341.333333 810.666667l170.666667-170.666667H384v-128l-128 170.666667h128z m256-682.666667H170.666667v256h426.666666V128z m426.666667 85.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 0-85.333334z","p-id","2540","fill","#1a6a07"],[1,"box-child-2"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","FIFO","nzDisabled",""],["nz-radio","","nzValue","Equal-Share"],["nz-radio","","nzValue","VIP","nzDisabled",""],["type","radio","name","2",1,"checkboxs"],["type","radio","name","3",1,"checkboxs"],["class","db-number",4,"ngIf"]],template:function(l,o){1&l&&(t.TgZ(0,"h3",0),t._uU(1," ST Jurong East Car park\n"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div"),t._uU(5,"DB 1"),t.qZA(),t.TgZ(6,"div",3),t._uU(7,"DB 2"),t.qZA(),t.TgZ(8,"div",3),t._uU(9,"DB 3"),t.qZA()(),t.TgZ(10,"div",4)(11,"div",5)(12,"div",6)(13,"span",7),t._uU(14,"| "),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"div",8),t.YNc(17,u,7,3,"div",9),t.qZA()(),t.TgZ(18,"div",10)(19,"div",6)(20,"span",7),t._uU(21,"| "),t.qZA(),t._uU(22,"MAX 20A"),t.qZA(),t.TgZ(23,"div",8)(24,"div")(25,"div",11),t._uU(26,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(27,"svg",12),t._UZ(28,"path",13),t.qZA()(),t.kcU(),t.TgZ(29,"div")(30,"div",11),t._uU(31,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(32,"svg",12),t._UZ(33,"path",13),t.qZA()(),t.kcU(),t.TgZ(34,"div")(35,"div",11),t._uU(36,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(37,"svg",12),t._UZ(38,"path",13),t.qZA()(),t.kcU(),t.TgZ(39,"div")(40,"div",11),t._uU(41,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(42,"svg",12),t._UZ(43,"path",13),t.qZA()(),t.kcU(),t.TgZ(44,"div")(45,"div",11),t._uU(46,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(47,"svg",12),t._UZ(48,"path",13),t.qZA()()()(),t.kcU(),t.TgZ(49,"div",10)(50,"div",6)(51,"span",7),t._uU(52,"| "),t.qZA(),t._uU(53,"MAX 20A"),t.qZA(),t.TgZ(54,"div",8)(55,"div")(56,"div",11),t._uU(57,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(58,"svg",12),t._UZ(59,"path",13),t.qZA()(),t.kcU(),t.TgZ(60,"div")(61,"div",11),t._uU(62,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(63,"svg",12),t._UZ(64,"path",13),t.qZA()(),t.kcU(),t.TgZ(65,"div")(66,"div",11),t._uU(67,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(68,"svg",12),t._UZ(69,"path",13),t.qZA()(),t.kcU(),t.TgZ(70,"div")(71,"div",11),t._uU(72,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(73,"svg",12),t._UZ(74,"path",13),t.qZA()(),t.kcU(),t.TgZ(75,"div")(76,"div",11),t._uU(77,"3.7KW"),t.qZA(),t.O4$(),t.TgZ(78,"svg",12),t._UZ(79,"path",13),t.qZA()()()()(),t.kcU(),t.TgZ(80,"div",14)(81,"div")(82,"nz-radio-group",15),t.NdJ("ngModelChange",function(i){return o.radioValue=i}),t.TgZ(83,"label",16),t._uU(84,"FIFO"),t.qZA(),t.TgZ(85,"label",17),t._uU(86,"Equal-Share"),t.qZA(),t.TgZ(87,"label",18),t._uU(88,"VIP"),t.qZA()()(),t.TgZ(89,"div",3)(90,"div"),t._UZ(91,"input",19),t._uU(92,"FIFO "),t.qZA(),t.TgZ(93,"div"),t._UZ(94,"input",19),t._uU(95,"Equal-Share"),t.qZA(),t.TgZ(96,"div"),t._UZ(97,"input",19),t._uU(98,"VIP"),t.qZA()(),t.TgZ(99,"div",3)(100,"div"),t._UZ(101,"input",20),t._uU(102,"FIFO "),t.qZA(),t.TgZ(103,"div"),t._UZ(104,"input",20),t._uU(105,"Equal-Share"),t.qZA(),t.TgZ(106,"div"),t._UZ(107,"input",20),t._uU(108,"VIP"),t.qZA()()()()),2&l&&(t.xp6(15),t.hij(" MAX",o.info.maxCurrent,"A"),t.xp6(2),t.Q6J("ngForOf",o.chargersArr),t.xp6(65),t.Q6J("ngModel",o.radioValue))},dependencies:[g.sg,g.O5,a.Of,a.Dg,c.JJ,c.On],styles:[".main-box[_ngcontent-%COMP%]{box-sizing:border-box;min-height:78vh;height:auto;margin:16px;background-color:#fff;padding:16px;display:flex;justify-content:space-between}.box-child[_ngcontent-%COMP%]{width:6vw;display:flex;flex-direction:column;justify-content:flex-start;padding-top:5%}.box-middle[_ngcontent-%COMP%]{width:50vw;display:flex;flex-direction:column;justify-content:flex-start;box-sizing:border-box}.total-number[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:500}.three-line[_ngcontent-%COMP%]{display:flex;border-top:3px solid #5b9bd5;justify-content:space-between}.db-number[_ngcontent-%COMP%]{text-align:center;margin:16px auto}.shuxian[_ngcontent-%COMP%]{font-size:48px;color:#5b9bd5}.box-child-2[_ngcontent-%COMP%]{width:12vw;display:flex;flex-direction:column;justify-content:flex-start;font-size:24px;box-sizing:border-box;padding-top:5%}.box-child[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:180px;height:40px;border:2px solid black;border-radius:5px;display:flex;justify-content:center;align-items:center;font-size:24px}.box-child[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(1){background-color:#6ccec5;color:#fff;font-weight:800}.box-child[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(2){background-color:#66c0bc;color:#fff;font-weight:800}.box-child[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(3){background-color:#3bbba6;color:#fff;font-weight:800}.checkboxs[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:16px}[nz-radio][_ngcontent-%COMP%]{display:block;height:32px;line-height:32px}"]}),s})()},59241:(T,E,n)=>{n.r(E),n.d(E,{EvcModule:()=>N,createTranslateLoader:()=>L,routes:()=>x});var t=n(36895),g=n(80529),a=n(34793),c=n(60097),h=n(24006),p=n(67527),u=n(67556),O=n(91599),s=n(42684),_=n(51766),l=n(31289),o=n(4666),e=n(73071),i=n(30329),r=n(51013),m=n(82307),d=n(89383),M=n(19832),P=n(97640),U=n(59245),D=n(20388),A=n(21532),B=n(59501),I=n(15455),C=n(899),W=n(68233),K=n(43240),R=n(59562),b=n(34152),y=n(99889),S=n(24277),V=n(57250),z=n(372),f=n(77530),F=n(53782),Z=n(94650);function L(v){return new M.w(v,"../assets/i18n/",".json")}const x=[{path:"",component:B.f,children:[{path:"",redirectTo:"ev-dashboard",pathMatch:"full"},{path:"ev-dashboard",component:V.D,data:{breadcrumb:{label:"EV Charger Status"}}},{path:"create",component:C.e,data:{breadcrumb:{label:"Create"}}},{path:"detail",component:W.t,data:{breadcrumb:()=>({title:"EV Charging"})}},{path:"settings",component:C.e,data:{breadcrumb:{title:"Charging Station Settings",label:"Charging Station Settings"}}},{path:"tariffs",component:C.e,data:{breadcrumb:{title:"Tariffs Management",label:"Tariffs Management"}}},{path:"stations",component:C.e,data:{breadcrumb:{title:"Stations Management",label:"Stations Management"}}},{path:"ev-location",component:K.V,data:{breadcrumb:{title:"EV Charger Location",label:"EV Charger Location"}}},{path:"ev-stations-management",loadChildren:()=>n.e(5724).then(n.bind(n,85724)).then(v=>v.CarParkStationModule),data:{breadcrumb:{title:"EV Stations Management",label:"EV Stations Management"}}},{path:"ev-transactions",component:R.J,data:{breadcrumb:{title:"EV Charger Transactions",label:"EV Charger Transactions"}}},{path:"ev-tariffs-setup",loadChildren:()=>Promise.all([n.e(8592),n.e(2214)]).then(n.bind(n,52214)).then(v=>v.TariffsModule),data:{breadcrumb:{title:"EV Tariffs Setup",label:"EV Tariffs Setup"}}},{path:"ev-slots-management",loadChildren:()=>n.e(3420).then(n.bind(n,33420)).then(v=>v.CarParkSlotModule),data:{breadcrumb:{title:"EV Charger Management",label:"EV Charger Management"}}},{path:"ev-quick-setup",component:b.e,data:{breadcrumb:{title:"Quick Charger EV Setup",label:"Quick Charger EV Setup"}}},{path:"evc-dashboard",component:F.J,data:{breadcrumb:{title:"EV Dashboard",label:"EV Dashboard"}}}]}];let N=(()=>{class v{}return v.\u0275fac=function(J){return new(J||v)},v.\u0275mod=Z.oAB({type:v}),v.\u0275inj=Z.cJS({providers:[O.k,s.e,c.x,o.p,_.C,l.K,e.K,u.z$,u.LS,u.Rq,p.Z],imports:[t.ez,a.Bz.forChild(x),D.zk,A.x,i.D,P.a4,U.mr,z.kn,I.e,r.P,m.y,y.EvLoadManagementModule,S.p,h.u5,f.v,d.aw.forChild({loader:{provide:d.Zw,useFactory:L,deps:[g.eN]}}),a.Bz,f.v]}),v})()}}]);