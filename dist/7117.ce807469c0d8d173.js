"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[7117],{76916:(y,C,a)=>{a.d(C,{G:()=>A});var _=a(34793),M=a(92198),e=a(94650),f=a(89383),P=a(60097),O=a(36895);function T(r,d){if(1&r&&(e.TgZ(0,"a",14)(1,"span",15),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r){const i=e.oxw().$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,1,i.label)," ")}}function S(r,d){if(1&r&&(e.TgZ(0,"a",16)(1,"span",15),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r){const i=e.oxw(),g=i.$implicit,m=i.last,h=e.oxw(2);e.Q6J("routerLink",g.url)("queryParams",m&&h.route.snapshot.queryParams),e.xp6(2),e.hij(" ",e.lcZ(3,3,g.label)," ")}}function B(r,d){if(1&r&&(e.ynx(0),e.TgZ(1,"li",10)(2,"span"),e._uU(3," > "),e.qZA()(),e.TgZ(4,"li",11),e.YNc(5,T,4,3,"a",12),e.YNc(6,S,4,5,"a",13),e.qZA(),e.BQk()),2&r){const i=d.first;e.xp6(5),e.Q6J("ngIf",i),e.xp6(1),e.Q6J("ngIf",!i)}}function Z(r,d){if(1&r&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._UZ(3,"h3",4),e.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),e._UZ(7,"i",8),e.qZA()(),e.YNc(8,B,7,2,"ng-container",9),e.qZA()(),e.TgZ(9,"div"),e.Hsn(10),e.qZA()()()),2&r){const i=e.oxw();e.xp6(3),e.Q6J("innerHTML",i.title,e.oJD),e.xp6(5),e.Q6J("ngForOf",i.breads)}}const t=["*"];let A=(()=>{class r{constructor(i,g,m,h){this.router=i,this.route=g,this.translate=m,this._carparkService=h,this.breads=[],this.loginUser=""}ngOnInit(){let i=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=i,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(m=>{this.label=m}),this.router.events.pipe((0,M.h)(m=>m instanceof _.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(i,g=[""],m=[]){const h=i.snapshot.url[0]&&i.snapshot.url[0].path,b=[...g,h],p={...this.extractBreadcrumb(i),url:b},v=h&&p.label?[...m,p]:m;return this.title=p.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===p.label&&(this.title="My Vehicle(s)"),i.firstChild?h?this.buildBreadCrumb(i.firstChild,b,v):this.buildBreadCrumb(i.firstChild,g,m):(this.translate.get(this.title).subscribe(x=>{this.title=x}),v)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(i){return i.snapshot.data.breadcrumb instanceof Function?i.snapshot.data.breadcrumb(i):i.snapshot.data.breadcrumb}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(_.F0),e.Y36(_.gz),e.Y36(f.sK),e.Y36(P.x))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-title-bar"]],ngContentSelectors:t,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(i,g){1&i&&(e.F$t(),e.YNc(0,Z,11,2,"div",0)),2&i&&e.Q6J("ngIf","ROLE_TPO_PARTNER"!==g.loginUser)},dependencies:[O.sg,O.O5,_.yS,f.X$],encapsulation:2}),r})()},27117:(y,C,a)=>{a.r(C),a.d(C,{BusChargingSessionModule:()=>D});var _=a(36895),M=a(24006),e=a(34793),f=a(70853),P=a(30329),O=a(21532),T=a(59501),S=a(59857),B=a(15439),Z=a(61715),t=a(94650),A=a(76916);const r=["scollRight"];function d(s,l){if(1&s&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&s){const n=l.$implicit;t.xp6(2),t.Oqu(n)}}function i(s,l){if(1&s&&(t.TgZ(0,"div",17)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div",18),t._uU(4),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA()()),2&s){const n=l.$implicit,o=t.oxw();t.xp6(2),t.Oqu(n.name),t.xp6(1),t.Q6J("ngStyle",o.showStatus(n)),t.xp6(1),t.Oqu(n.busStatus),t.xp6(2),t.Oqu(n.mode)}}const g=function(s){return{left:s}};function m(s,l){if(1&s&&(t.TgZ(0,"div",19),t._uU(1),t._UZ(2,"div",20),t.qZA()),2&s){const n=l.$implicit,o=t.oxw();t.xp6(1),t.hij("",n.text," "),t.xp6(1),t.Q6J("ngStyle",t.VKq(2,g,o.getHourAndTime(n.text)+"px"))}}function h(s,l){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.value)}}function b(s,l){}function p(s,l){if(1&s&&(t.TgZ(0,"div",18),t.YNc(1,h,2,1,"span",23),t.YNc(2,b,0,0,"ng-template",null,24,t.W1O),t.qZA()),2&s){const n=l.$implicit,o=t.MAs(3),c=t.oxw(2);t.Q6J("ngStyle",c.showBusStatus(n)),t.xp6(1),t.Q6J("ngIf","Heating"!==n.value)("ngIfElse",o)}}function v(s,l){if(1&s&&(t.TgZ(0,"div",21),t.YNc(1,p,4,3,"div",22),t.qZA()),2&s){const n=l.$implicit;t.xp6(1),t.Q6J("ngForOf",n.timeArr)}}const w=[{path:"",component:T.f,children:[{path:"",component:(()=>{class s{constructor(n){this.busService=n,this.tableHeader=[],this.tableData=[],this.timeList=[],this.subscription$=[],this.colorList=S.Q}ngOnInit(){this.init()}init(){this.now=new Date;for(let n=0;n<24;n++)this.timeList.push({text:`${n<10?"0"+n:n}:00`,current:!1});this.subscription$.push((0,Z.F)(1e3).subscribe(n=>{this.now=new Date,0===n&&(this.scollRight.nativeElement.scrollLeft=this.getHourAndTime(null,!0))},()=>{this.subscription$.forEach(n=>{n.unsubscribe()})},()=>{this.subscription$.forEach(n=>{n.unsubscribe()})})),this.busService.isBusAdmin()?(this.tableHeader=["Bus","Status","Mode"],this.subscription$.push(this.busService.getVehicleSessionData().subscribe(n=>{this.tableData=n.list,this.getCurrentStatus()}))):(this.tableHeader=["Charger","Status","Mode"],this.subscription$.push(this.busService.getEVownerVehicleSessionData().subscribe(n=>{this.tableData=n.list,this.getCurrentStatus()})))}getCurrentStatus(){const n=B().format("HH:mm");for(let o=0;o<this.tableData.length;o++){const c=this.tableData[o].timeArr;this.tableData[o].busStatus="Idle";for(let u=0;u<c.length;u++)if(c[u].start<=n&&n<=c[u].end){this.tableData[o].busStatus=c[u].status;break}}}showStatus(n){let o={background:"#fff",color:"#fff"};if(n.busStatus){const c=n.busStatus.toLowerCase();o={background:this.colorList[c],color:"idle"===n.busStatus.toLowerCase()?"#fff":"#000"}}return o}showBusStatus(n){if(n.status){const o=n.status.toLowerCase(),c=n.value.toLowerCase();let u=+(""+(this.getHourAndTime(n.end)-this.getHourAndTime(n.start)));if(u<0&&(u=+(""+(this.getHourAndTime("24:00")-this.getHourAndTime(n.start)))),"heating"!==c)return{background:"heating"===c?this.colorList[c]:this.colorList[o],left:`${this.getHourAndTime(n.start)}px`,width:`${u}px`}}return{background:"#fff"}}getHourAndTime(n,o){let c=0,u=0;return o||([c,u]=n.split(":").map(E=>+E)),o&&this.now&&(c=this.now.getHours(),u=this.now.getMinutes()),Number(60*c+ +u/60*60)+30}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(f.Z))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-bus-charging-session"]],viewQuery:function(n,o){if(1&n&&t.Gf(r,5),2&n){let c;t.iGM(c=t.CRH())&&(o.scollRight=c.first)}},decls:19,vars:7,consts:[[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi","m--padding-top-40"],[1,"m-portlet__body"],[1,"session-container"],[1,"main"],[1,"left-fixed"],[1,"name",2,"margin-bottom","20px"],[4,"ngFor","ngForOf"],["class","label",4,"ngFor","ngForOf"],[1,"right-time-main"],["scollRight",""],[1,"time-container",2,"margin-bottom","20px"],["class","time-item",4,"ngFor","ngForOf"],["class","status-container",4,"ngFor","ngForOf"],[1,"now-line",3,"ngStyle"],[1,"now"],[1,"label"],[1,"status",3,"ngStyle"],[1,"time-item"],[1,"time-line",3,"ngStyle"],[1,"status-container"],["class","status",3,"ngStyle",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["heating",""]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-bar"),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7),t.YNc(9,d,3,1,"ng-container",8),t.qZA(),t.YNc(10,i,7,4,"div",9),t.qZA(),t.TgZ(11,"div",10,11)(13,"div",12),t.YNc(14,m,3,4,"div",13),t.qZA(),t.YNc(15,v,2,1,"div",14),t.TgZ(16,"div",15)(17,"div",16),t._uU(18,"Now"),t.qZA()()()()()()()()()),2&n&&(t.xp6(9),t.Q6J("ngForOf",o.tableHeader),t.xp6(1),t.Q6J("ngForOf",o.tableData),t.xp6(4),t.Q6J("ngForOf",o.timeList),t.xp6(1),t.Q6J("ngForOf",o.tableData),t.xp6(1),t.Q6J("ngStyle",t.VKq(5,g,o.getHourAndTime("",!0)+"px")))},dependencies:[_.sg,_.O5,_.PC,A.G],styles:[".session-container[_ngcontent-%COMP%]{position:relative;width:100%}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-flow:row;width:100%;align-items:center}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]{width:240px;display:flex;flex-wrap:wrap;margin-right:10px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{width:100%;display:flex}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:33.3%;flex:auto;text-align:center;padding:5px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], .session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-fixed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-weight:bolder;margin-bottom:20px;border-radius:10px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]{flex:1;height:100%;overflow-x:auto;overflow-y:hidden;display:flex;position:relative;flex-direction:column;border-left:1px solid rgba(161,161,161,.75)}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{display:flex;height:32px;margin-bottom:4px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-item[_ngcontent-%COMP%]{width:60px;text-align:center;flex-shrink:0;padding:5px 0;border-right:0}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-item[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]{position:absolute;height:100%;border-left:1px solid rgba(161,161,161,.75);top:42px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{display:flex;position:relative;height:32px;margin-bottom:20px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{height:32px;position:absolute;padding:5px 0;font-weight:bolder;text-align:center;border-radius:10px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .now-line[_ngcontent-%COMP%]{position:absolute;height:100%;border-left:2px dashed rgba(161,161,161,.75);top:42px}.session-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-time-main[_ngcontent-%COMP%]   .now-line[_ngcontent-%COMP%]   .now[_ngcontent-%COMP%]{position:absolute;top:-20px;left:-15px}"]}),s})()}]}];let D=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[f.Z],imports:[_.ez,O.x,M.u5,P.D,e.Bz.forChild(w)]}),s})()}}]);