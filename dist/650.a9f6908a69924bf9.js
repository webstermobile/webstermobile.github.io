"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[650],{53033:(D,y,o)=>{o.d(y,{Z:()=>x,e:()=>v});var p=o(36895),_=o(94650);let x=(()=>{class s extends p.H9{transform(c,e,A,f,Z){if(!e)return"";switch(e.toUpperCase()){case"MMK":return`MMK ${c}`;case"SGD":return`$${c}`;default:return super.transform(c,e,A,f,Z)}}}return s.\u0275fac=function(){let u;return function(e){return(u||(u=_.n5z(s)))(e||s)}}(),s.\u0275pipe=_.Yjl({name:"excurrency",type:s,pure:!0}),s})(),v=(()=>{class s{transform(c){return c/100}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275pipe=_.Yjl({name:"cent2Dollar",type:s,pure:!0}),s})()},90650:(D,y,o)=>{o.d(y,{R:()=>Q});var p=o(38014),_=o(79118),x=o(15035),v=o(8929),s=o(36053),u=o(21086),c=o(72986),e=o(94650),A=o(76284),f=o(4666),Z=o(60097),L=o(36511),M=o(34793),E=o(89383),d=o(36895),O=o(40269),m=o(24006),B=o(71198),S=o(87501),I=o(53033);function w(a,r){if(1&a&&(e.TgZ(0,"option",14),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&a){const t=r.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.value)," ")}}function R(a,r){if(1&a&&(e.TgZ(0,"option",14),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&a){const t=r.$implicit;e.Q6J("value",t.code),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.name)," ")}}function j(a,r){if(1&a&&(e.TgZ(0,"option",14),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&a){const t=r.$implicit;e.Q6J("value",t.code),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.name)," ")}}const K=function(a){return["/vehicle-management",a]};function J(a,r){if(1&a&&(e.TgZ(0,"a",21)(1,"span"),e._UZ(2,"img",22),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA()()),2&a){const t=e.oxw().$implicit,n=e.oxw();e.Q6J("routerLink",e.VKq(3,K,t.vehicle.id)),e.xp6(2),e.Q6J("src",n.vehicleTypeLogo(t),e.LSH),e.xp6(2),e.Oqu(null==t.vehicle?null:t.vehicle.vehicleNumber)}}const U=function(a){return["/carparks",a]};function b(a,r){if(1&a&&(e.TgZ(0,"a",21),e._uU(1),e.qZA()),2&a){const t=e.oxw(2).$implicit;e.Q6J("routerLink",e.VKq(2,U,t.carPark.id)),e.xp6(1),e.hij(" ",null==t.carPark?null:t.carPark.name," ")}}function W(a,r){if(1&a&&(e.TgZ(0,"span"),e.YNc(1,b,2,4,"a",18),e.qZA()),2&a){const t=e.oxw().$implicit,n=e.oxw();e.Udp("width",n.originalHeaders[3].width),e.xp6(1),e.Q6J("ngIf",t.carPark)}}function k(a,r){if(1&a&&(e.TgZ(0,"a",21),e._uU(1),e.qZA()),2&a){const t=e.oxw(2).$implicit;e.Q6J("routerLink",e.VKq(2,U,t.carpark.id)),e.xp6(1),e.hij(" ",null==t.carpark?null:t.carpark.name," ")}}function q(a,r){if(1&a&&(e.TgZ(0,"span"),e.YNc(1,k,2,4,"a",18),e.qZA()),2&a){const t=e.oxw().$implicit,n=e.oxw();e.Udp("width",n.originalHeaders[3].width),e.xp6(1),e.Q6J("ngIf",t.carpark)}}function H(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"td",15),e.NdJ("click",function(){const i=e.CHM(t).index,g=e.oxw(),h=e.MAs(39);return e.KtG(g.toggleTransactions(h,i))}),e.TgZ(1,"span"),e._UZ(2,"i",16),e.qZA()(),e.TgZ(3,"td",17)(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"td",17)(7,"span"),e.YNc(8,J,5,5,"a",18),e.qZA()(),e.TgZ(9,"td",17),e.YNc(10,W,2,3,"span",19),e.YNc(11,q,2,3,"ng-template",null,20,e.W1O),e.qZA(),e.TgZ(13,"td",17)(14,"span"),e._uU(15),e.ALo(16,"date"),e._UZ(17,"br"),e._uU(18),e.ALo(19,"date"),e.qZA()(),e.TgZ(20,"td",17)(21,"span"),e._uU(22),e.ALo(23,"date"),e._UZ(24,"br"),e._uU(25),e.ALo(26,"date"),e.qZA()(),e.TgZ(27,"td",17)(28,"span"),e._uU(29),e.qZA()(),e.TgZ(30,"td",17)(31,"span"),e._uU(32),e.ALo(33,"currency"),e.qZA()(),e.TgZ(34,"td",17)(35,"span"),e._UZ(36,"span"),e._uU(37," \xa0 "),e.TgZ(38,"span"),e._uU(39),e.ALo(40,"titlecase"),e.qZA()()()}if(2&a){const t=r.$implicit,n=r.expanded,l=e.MAs(12),i=e.oxw();let g,h;e.xp6(1),e.Udp("width",i.tableHeaders[0].width),e.xp6(1),e.Q6J("ngClass",n?"fa-caret-down":"fa-caret-right"),e.xp6(2),e.Udp("width",i.originalHeaders[1].width),e.xp6(1),e.hij(" ",t.id," "),e.xp6(2),e.Udp("width",i.originalHeaders[2].width),e.xp6(1),e.Q6J("ngIf",t.vehicle),e.xp6(2),e.Q6J("ngIf",!i.isMotorist)("ngIfElse",l),e.xp6(4),e.Udp("width",i.originalHeaders[4].width),e.xp6(1),e.hij(" ",e.xi3(16,34,t.startTime,"d LLL yyyy")," "),e.xp6(3),e.hij(" ",e.xi3(19,37,t.startTime,"h:mm:ss a")," "),e.xp6(3),e.Udp("width",i.originalHeaders[5].width),e.xp6(1),e.hij(" ",e.xi3(23,40,t.endTime,"d LLL yyyy")," "),e.xp6(3),e.hij(" ",e.xi3(26,43,t.endTime,"h:mm:ss a")," "),e.xp6(3),e.Udp("width",i.originalHeaders[6].width),e.xp6(1),e.hij(" ",t.duration||0," "),e.xp6(2),e.Udp("width",i.originalHeaders[7].width),e.xp6(1),e.hij(" ",e.lcZ(33,46,(null==t.chargeSummary||null==t.chargeSummary.total?null:t.chargeSummary.total.amount)/100)," "),e.xp6(3),e.Udp("width",i.originalHeaders[8].width),e.xp6(1),e.Gre("m-badge m-badge--",(null==(g=i.getTransactionType(t.type))?null:g.color)||"info"," m-badge--dot"),e.xp6(2),e.Gre("m--font-bold m--font-",(null==(h=i.getTransactionType(t.type))?null:h.color)||"info",""),e.xp6(1),e.hij(" ",e.lcZ(40,48,i.getTransactionTypeString(t.type))," ")}}function N(a,r){if(1&a&&(e.TgZ(0,"td",17),e._UZ(1,"span"),e.qZA(),e.TgZ(2,"td",17)(3,"div",23)(4,"div",24),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",25),e._uU(8),e.ALo(9,"excurrency"),e.qZA()(),e.TgZ(10,"div",23)(11,"div",24),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"div",25),e._uU(15),e.ALo(16,"excurrency"),e.qZA()(),e.TgZ(17,"div",23)(18,"div",24),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"div",25),e._uU(22),e.ALo(23,"excurrency"),e.qZA()()()),2&a){const t=r.$implicit,n=e.oxw();e.xp6(1),e.Udp("width",n.tableHeaders[0].width),e.xp6(4),e.hij(" ",e.lcZ(6,8,"Calculation Cost")," "),e.xp6(3),e.hij(" ",e.xi3(9,10,(null==t.chargeSummary||null==t.chargeSummary.calculation?null:t.chargeSummary.calculation.amount)||0,null==t.chargeSummary||null==t.chargeSummary.calculation?null:t.chargeSummary.calculation.currency)," "),e.xp6(4),e.hij(" ",e.lcZ(13,13,"Promotions")," "),e.xp6(3),e.hij(" ",e.xi3(16,15,(null==t.chargeSummary||null==t.chargeSummary.promotion?null:t.chargeSummary.promotion.amount)||0,null==t.chargeSummary||null==t.chargeSummary.promotion?null:t.chargeSummary.promotion.currency)," "),e.xp6(4),e.hij(" ",e.lcZ(20,18,"Amount to Pay")," "),e.xp6(3),e.hij(" ",e.xi3(23,20,(null==t.chargeSummary||null==t.chargeSummary.total?null:t.chargeSummary.total.amount)||0,null==t.chargeSummary||null==t.chargeSummary.total?null:t.chargeSummary.total.currency)," ")}}const $=[{text:"",width:"30px",align:_.iW.Center},{text:"ID",column:"id",width:"100px"},{text:"Vehicle No.",column:"vehiclePlateNo",width:"120px"},{text:"Depot",column:"carParkId",width:"160px"},{text:"Entry Time",column:"entryDateTime",width:"120px"},{text:"Exit Time",column:"exitDateTime",width:"120px"},{text:"Duration(min)",column:"duration",width:"80px"},{text:"Amount",column:"paymentAmount",width:"100px"},{text:"Type",column:"type",width:"80px"}];let Q=(()=>{class a extends _.Gw{constructor(t,n,l,i,g,h,Y){super(),this.assetsService=t,this.transactionService=n,this.carParkService=l,this.codeTablesService=i,this.route=g,this.translate=h,this.carparkService=Y,this.tableHeaders=$,this.originalHeaders=this.tableHeaders,this.vehicleIcon=p.mts,this.vehiclePlateNo="",this.statusOptions=p.EKt,this.loading=!1,this.vehicleType="",this.status="",this.type="",this.timeRange=[],this.vehicle$=new v.xQ;const F=this.tableHeaders.map(T=>T.text);this.translate.get(F).subscribe(T=>{this.tableHeaders.forEach(P=>{for(const C in T)T.hasOwnProperty(C)&&P.text===C&&(P.text=T[C])})})}ngOnInit(){this.vehicle$.debounceTime(400).subscribe(()=>{this.reloadData()}),this.reloadData(),this.vehicleTypes$=this.codeTablesService.filterModelByType(p.BcL.VehicleType).pipe((0,c.q)(1)),this.statuses$=this.codeTablesService.filterModelByType(p.BcL.ParkingStatus).pipe((0,c.q)(1)),this.types$=this.codeTablesService.filterModelByType(p.BcL.ParkingType).pipe((0,c.q)(1))}get filterParams(){return{carPark:this.parkId?this.parkId:this.route.parent.snapshot.paramMap.get("id"),keyword:this.vehicle,vehicleType:this.vehicleType,status:this.status,type:this.type,from:this.timeRange[0]&&(0,x.W8)(this.timeRange[0]),to:this.timeRange[1]&&(0,x.W8)(this.timeRange[1]),sort:"entryDateTime,desc"}}reloadData(){this.reloadDataService(this.transactionService)}pageChanged(t){this.pagination=t,this.reloadData()}getTransactionType(t){return p.L0I.find(n=>n.value===t)}getTransactionTypeString(t){return"openParking"===t||"Open Parking"===t?"Hourly Parking":t}toggleTransactions(t,n){t.toggleItem(n);const l=this.data[n];l.attachments||this.getAttachments(l.chargeSummary).subscribe({next:i=>l.attachments=i})}getAttachments(t){return t.length?(0,s.aj)(t.map(n=>this.assetsService.getImageByUuid(n.assetUuid))):(0,u.of)(null)}vehicleTypeLogo(t){return p.php.filter(n=>n.value===t.vehicle.vehicleType).map(n=>n.icon)[0]}get isMotorist(){return this.carparkService.isMotorist()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(A.z),e.Y36(f.p),e.Y36(Z.x),e.Y36(L.I),e.Y36(M.gz),e.Y36(E.sK),e.Y36(Z.x))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-bus-transactions"]],inputs:{parkId:"parkId"},features:[e.qOj],decls:44,vars:31,consts:[[1,"form-group","m-form__group","m-portlet__filters"],[1,"m-portlet__filter"],[1,"col-form-label"],["name","vehicle",1,"form-control","m-input",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","carPark",1,"form-control","m-input",3,"ngModel","ngModelChange"],["name","type",1,"form-control","m-input",3,"ngModel","ngModelChange"],["bsDaterangepicker","",1,"form-control",3,"ngModel","ngModelChange"],["drp","bsDaterangepicker"],[3,"headers","items","loading","pagination","isExtended","scrollingDisabled","pageChanged"],["tableTransactions",""],["rowTemplate",""],["expandTemplate",""],[3,"value"],[1,"m-datatable__cell","text-center",3,"click"],[1,"fa","text-primary",3,"ngClass"],[1,"m-datatable__cell"],[3,"routerLink",4,"ngIf"],[3,"width",4,"ngIf","ngIfElse"],["motorist",""],[3,"routerLink"],["alt","",3,"src"],[1,"row"],[1,"col-3","col-md-2","m-font-weight-500"],[1,"col"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div")(6,"select",3),e.NdJ("ngModelChange",function(i){return n.vehicleType=i})("ngModelChange",function(){return n.reloadData()}),e.TgZ(7,"option",4),e._uU(8,"All"),e.qZA(),e.YNc(9,w,3,4,"option",5),e.ALo(10,"async"),e.qZA()()(),e.TgZ(11,"div",1)(12,"label",2),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"div")(16,"select",6),e.NdJ("ngModelChange",function(i){return n.status=i})("ngModelChange",function(){return n.reloadData()}),e.TgZ(17,"option",4),e._uU(18,"All"),e.qZA(),e.YNc(19,R,3,4,"option",5),e.ALo(20,"async"),e.qZA()()(),e.TgZ(21,"div",1)(22,"label",2),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"div")(26,"select",7),e.NdJ("ngModelChange",function(i){return n.type=i})("ngModelChange",function(){return n.reloadData()}),e.TgZ(27,"option",4),e._uU(28,"All"),e.qZA(),e.YNc(29,j,3,4,"option",5),e.ALo(30,"async"),e.qZA()()(),e.TgZ(31,"div",1)(32,"label",2),e._uU(33),e.ALo(34,"translate"),e.qZA(),e.TgZ(35,"div")(36,"input",8,9),e.NdJ("ngModelChange",function(i){return n.timeRange=i})("ngModelChange",function(){return n.reloadData()}),e.qZA()()()(),e.TgZ(38,"app-datatable",10,11),e.NdJ("pageChanged",function(i){return n.pageChanged(i)}),e.YNc(40,H,41,50,"ng-template",null,12,e.W1O),e.YNc(42,N,24,23,"ng-template",null,13,e.W1O),e.qZA()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,17,"Vehicle Type"),": "),e.xp6(3),e.Q6J("ngModel",n.vehicleType),e.xp6(3),e.Q6J("ngForOf",e.lcZ(10,19,n.vehicleTypes$)),e.xp6(4),e.hij(" ",e.lcZ(14,21,"Status"),": "),e.xp6(3),e.Q6J("ngModel",n.status),e.xp6(3),e.Q6J("ngForOf",e.lcZ(20,23,n.statuses$)),e.xp6(4),e.hij(" ",e.lcZ(24,25,"Type"),": "),e.xp6(3),e.Q6J("ngModel",n.type),e.xp6(3),e.Q6J("ngForOf",e.lcZ(30,27,n.types$)),e.xp6(4),e.hij(" ",e.lcZ(34,29,"Time Range"),": "),e.xp6(3),e.Q6J("ngModel",n.timeRange),e.xp6(2),e.Q6J("headers",n.tableHeaders)("items",n.data)("loading",n.loading)("pagination",n.pagination)("isExtended",!0)("scrollingDisabled",!0))},dependencies:[d.mk,d.sg,d.O5,O.Uo,M.yS,_.nE,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.On,B.T,S.F,d.Ov,d.rS,d.H9,d.uU,I.Z,E.X$],encapsulation:2}),a})()}}]);