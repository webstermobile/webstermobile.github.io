"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[3085],{33085:(It,p,r)=>{r.r(p),r.d(p,{TenantDriverPageModule:()=>Ot});var g=r(36895),P=r(34793),Z=r(59501),k=r(21532),A=r(88796),c=r(24006),y=r(372),z=r(30329),w=r(34984),m=r(20388),O=r(59245),_=(r(26245),r(8929)),I=r(591),u=r(15439),S=r(94327),U=r(52746),t=r(94650),h=r(15770),v=r(4483),f=r(37037),T=r(49651),N=r(76916),q=r(35635),J=r(47423),x=r(73325),D=r(29562),C=r(66616),G=r(47044),H=r(21811),b=r(834),d=r(40269),M=r(136);const F=["confirmModal"],Q=["confirmModalImportant"],L=["confirmCarparkList"],E=["confirmDeleteCarpark"],K=["inputfilePDF"],Y=["inputfile"],R=["inputfileDriver"],j=["confirmAssignTenant"],$=["confirmDeleteDriver"],B=["unBindingCardModal"];function V(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"h6"),t._uU(2,"tips"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"div",18)(6,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(7,"No"),t.qZA(),t.TgZ(8,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModalYes())}),t._uU(9,"Yes"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Oqu(e.errMsg)}}function W(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"h6"),t._uU(2,"tips"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"div",18)(6,"button",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(7,"ok"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Oqu(e.importantMsg)}}function X(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.chooseTenantCarpark(a))}),t._uU(1),t.qZA()}if(2&o){const e=s.$implicit;t.Q6J("disabled",e.disabled),t.xp6(1),t.Oqu(e.name)}}function tt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"h5"),t._uU(2,"Please select Car parks"),t.qZA(),t.TgZ(3,"div",22),t.YNc(4,X,2,2,"button",23),t.qZA(),t.TgZ(5,"div",18)(6,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(7,"ok"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.AllCarpark)}}function et(o,s){if(1&o&&(t.TgZ(0,"button",29),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.sn)}}function nt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteTicketSure())}),t._uU(1,"Delete"),t.qZA()}}function it(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteManyTicketSure())}),t._uU(1,"Batch deletion "),t.qZA()}}function ot(o,s){if(1&o&&(t.TgZ(0,"div",17)(1,"h5"),t._uU(2,"Tips:"),t.qZA(),t.TgZ(3,"div"),t._uU(4," Confirm Delete ticket? "),t.qZA(),t.TgZ(5,"div",22),t.YNc(6,et,2,1,"button",26),t.qZA(),t.TgZ(7,"div",27),t.YNc(8,nt,2,0,"button",28),t.YNc(9,it,2,0,"button",28),t.qZA()()),2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.waitActionTicket),t.xp6(2),t.Q6J("ngIf","true"==e.deleteOneTicket),t.xp6(1),t.Q6J("ngIf","true"!==e.deleteOneTicket)}}function at(o,s){if(1&o&&(t.TgZ(0,"option",35),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.tenantId),t.xp6(1),t.hij(" ",e.tenantName," ")}}function rt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"h5"),t._uU(2,"Please choose Tenant:"),t.qZA(),t.TgZ(3,"select",30),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.ticketAssignAimTenantChoose=i)}),t.TgZ(4,"option",31),t._uU(5,"All"),t.qZA(),t.YNc(6,at,2,2,"option",32),t.qZA(),t.TgZ(7,"div",33)(8,"button",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.SureAssign())}),t._uU(9," Sure Assign "),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.ticketAssignAimTenantChoose),t.xp6(3),t.Q6J("ngForOf",e.ticketAssignAimTenant)}}function st(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",36)(2,"h5"),t._uU(3,"Confirm Delete \uff1f"),t.qZA(),t.TgZ(4,"span",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(5,"X"),t.qZA()(),t._UZ(6,"br"),t.TgZ(7,"span"),t._uU(8," Remove employee from list of drivers? Ticket will be removed from driver "),t.qZA(),t._UZ(9,"div",22),t.TgZ(10,"div",27)(11,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(12,"Cancel"),t.qZA(),t.TgZ(13,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.okDeleteDriver())}),t._uU(14,"Delete"),t.qZA()()()}}function ct(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",36)(2,"span",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(3,"X"),t.qZA()(),t.TgZ(4,"div")(5,"h5"),t._uU(6,"Confirm De-link?"),t.qZA(),t.TgZ(7,"h5"),t._uU(8," Remove ticket from driver? "),t.qZA()(),t._UZ(9,"div",22),t.TgZ(10,"div",27)(11,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeModal())}),t._uU(12,"Cancel"),t.qZA(),t.TgZ(13,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkUnbingCard())}),t._uU(14,"De-link"),t.qZA()()()}}function lt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",38)(1,"div",39)(2,"button",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.downloadImportTemplateDriver())}),t._UZ(3,"span",41),t._uU(4,"Download Template"),t.qZA(),t.TgZ(5,"div",42)(6,"input",43,44),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.importDriver(i.target.files[0]))}),t.qZA(),t.TgZ(8,"button",45),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.loadDriver())}),t._UZ(9,"span",46),t._uU(10," Load Driver(s) "),t.qZA()(),t.TgZ(11,"button",47),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addDriverOne())}),t._UZ(12,"span",48),t._uU(13,"Driver"),t.qZA()(),t.TgZ(14,"div",49)(15,"div",50)(16,"div",51)(17,"span",52),t._uU(18,"Search:"),t.qZA(),t.TgZ(19,"input",53),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.driverKeyword=i)})("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.driverKeyword$.next(i))}),t.qZA()()(),t.TgZ(20,"div",50)(21,"div",51)(22,"span",52),t._uU(23,"Created On:"),t.qZA(),t.TgZ(24,"nz-range-picker",54),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.timeRangeDriver=i)})("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.getVisitDateDriver(i))}),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(19),t.Q6J("ngModel",e.driverKeyword),t.xp6(5),t.Q6J("ngModel",e.timeRangeDriver)}}function dt(o,s){if(1&o&&t._uU(0),2&o){const e=s.range;t.lnq(" ",e[0],"-",e[1]," of ",s.$implicit," items ")}}function gt(o,s){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.text)}}function pt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"li",63),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.unBindingCard(i.tenantDriverId))}),t._UZ(1,"i",68),t.TgZ(2,"span"),t._uU(3,"Delink"),t.qZA()()}}function mt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"date"),t.ALo(14,"date"),t.qZA(),t.TgZ(15,"td")(16,"button",59),t._UZ(17,"i",60),t.qZA(),t.TgZ(18,"nz-dropdown-menu",null,61)(20,"ul",62)(21,"li",63),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.editDriver(a,!1))}),t._UZ(22,"i",64),t.TgZ(23,"span"),t._uU(24,"View"),t.qZA()(),t.TgZ(25,"li",63),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.editDriver(a,!0))}),t._UZ(26,"i",65),t.TgZ(27,"span"),t._uU(28,"Edit"),t.qZA()(),t.YNc(29,pt,4,0,"li",66),t.TgZ(30,"li",63),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.deleteDriver(a))}),t._UZ(31,"i",67),t.TgZ(32,"span"),t._uU(33,"Delete"),t.qZA()()()()()()}if(2&o){const e=s.$implicit,n=s.index,i=t.MAs(19);t.ekj("ant-table-row-odd",n%2==1),t.xp6(2),t.Oqu(e.tenantDriverId),t.xp6(2),t.Oqu(e.employeeId),t.xp6(2),t.Oqu(e.driverHpNumber),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.cardSn),t.xp6(2),t.AsE(" ",t.xi3(13,12,e.updateTime,"d LLL yyyy")," ",t.xi3(14,15,e.updateTime,"h:mm:ss a")," "),t.xp6(4),t.Q6J("nzDropdownMenu",i)("nzPlacement","topCenter"),t.xp6(13),t.Q6J("ngIf",e.cardSn)}}function _t(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"nz-table",55,56),t.NdJ("nzPageSizeChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.handlePageSizeChange(i))})("nzPageIndexChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.handlePageIndexChange(i))}),t.TgZ(2,"thead")(3,"tr"),t.YNc(4,gt,2,1,"th",57),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,mt,34,18,"tr",58),t.qZA()()}if(2&o){const e=t.MAs(1),n=t.oxw(),i=t.MAs(44);t.Q6J("nzData",n.listData)("nzFrontPagination",!1)("nzLoading",n.loading)("nzTotal",n.pagination.totalCount)("nzPageSize",n.pagination.rowsPerPage)("nzPageIndex",n.pagination.page)("nzShowSizeChanger",!0)("nzShowTotal",i),t.xp6(4),t.Q6J("ngForOf",n.tableHeadersDriver),t.xp6(2),t.Q6J("ngForOf",e.data)}}function ut(o,s){1&o&&(t.TgZ(0,"h5"),t._uU(1,"Add Driver"),t.qZA())}function ht(o,s){1&o&&(t.TgZ(0,"h5"),t._uU(1,"View Driver"),t.qZA())}function vt(o,s){1&o&&(t.TgZ(0,"h5"),t._uU(1,"Edit Driver"),t.qZA())}function ft(o,s){1&o&&(t.TgZ(0,"div",82),t._uU(1),t.qZA()),2&o&&(t.xp6(1),t.hij(" ","Field is required."," "))}function Tt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",69)(1,"div",70)(2,"label",71),t._uU(3),t.qZA(),t.TgZ(4,"div",73)(5,"input",83),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.actionDriverMoreData.name=i)}),t.qZA()()(),t.TgZ(6,"div",70)(7,"label",71),t._uU(8),t.qZA(),t.TgZ(9,"div",73)(10,"input",83),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.actionDriverMoreData.status=i)}),t.qZA()()()()}if(2&o){const e=t.oxw(2);t.xp6(3),t.hij(" ","Name",": "),t.xp6(2),t.Q6J("ngModel",e.actionDriverMoreData.name),t.xp6(3),t.hij(" ","Status",": "),t.xp6(2),t.Q6J("ngModel",e.actionDriverMoreData.status)}}function xt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",69)(1,"div",70)(2,"label",71),t._uU(3," Remaining Quota: "),t.qZA(),t.TgZ(4,"div",73)(5,"p-inputNumber",84),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.actionDriverData.consumptionQuota=i)}),t.qZA()()()()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("ngModel",e.actionDriverData.consumptionQuota)("showButtons",!1)("min",0)("max",e.quotaAvailable)}}function Dt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",85),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.toEditDriver())}),t._uU(1," Edit "),t.qZA()}}function Ct(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",86),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.sureAddDriver())}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("disabled",!e.actionDriverData.hpNumber),t.xp6(1),t.hij(" ",e.isEdit?"Update":"Save"," ")}}function bt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,ut,2,0,"h5",16),t.YNc(2,ht,2,0,"h5",16),t.YNc(3,vt,2,0,"h5",16),t.TgZ(4,"div",69)(5,"div",70)(6,"label",71)(7,"span",72),t._uU(8,"*"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"div",73)(11,"input",74,75),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.actionDriverData.hpNumber=i)}),t.qZA(),t.YNc(13,ft,2,1,"div",76),t.qZA()(),t.TgZ(14,"div",70)(15,"label",71),t._uU(16),t.qZA(),t.TgZ(17,"div",73)(18,"input",77),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.actionDriverData.employeeId=i)}),t.qZA()()()(),t.YNc(19,Tt,11,4,"div",78),t.YNc(20,xt,6,4,"div",78),t.TgZ(21,"div",79)(22,"button",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.gobackDriverList())}),t._uU(23," Back "),t.qZA(),t.YNc(24,Dt,2,0,"button",80),t.YNc(25,Ct,2,2,"button",81),t.qZA()()}if(2&o){const e=t.MAs(12),n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.isTableAction),t.xp6(1),t.Q6J("ngIf",n.isTableAction&&n.isView),t.xp6(1),t.Q6J("ngIf",n.isTableAction&&n.isEdit),t.xp6(6),t.hij(" ","Mobile No.",": "),t.xp6(2),t.Q6J("disabled",n.isTableAction)("ngModel",n.actionDriverData.hpNumber),t.xp6(2),t.Q6J("ngIf",e.invalid&&(e.dirty||e.touched)),t.xp6(3),t.hij(" ","Employee ID.",": "),t.xp6(2),t.Q6J("disabled",n.isTableAction&&!n.isEdit)("ngModel",n.actionDriverData.employeeId),t.xp6(1),t.Q6J("ngIf",n.isTableAction),t.xp6(1),t.Q6J("ngIf",!n.isTableAction),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView)}}const Mt=function(){return{"background-color":"#a6a6a6"}},Pt=function(){return{"background-color":"#692475"}},Zt=function(){return{"background-color":"#0061a8"}},kt=function(){return{"background-color":"#5f9460"}};let At=(()=>{class o extends U.t{constructor(e,n,i,a,l){super(),this.tenantManagementPageservicetService=e,this.ticketManagementPageservicetService=n,this.driverManagementPageservicetService=i,this.modalService=a,this.message=l,this.keyword="",this.keyword$=new _.xQ,this.ticketKeyword="",this.startDate="",this.endDate="",this.ticketsDashboardData=[],this.tenantsDashboardData=[],this.ticketStatus="list",this.deleteOneTicket="true",this.ticketAssignAimTenant=[],this.ticketAssignAimTenantChoose="",this.tenantId$=new I.X(""),this.ticketStatusSearch=[{name:"UNASSIGNED",value:0},{name:"ASSIGNED ",value:1},{name:"INACTIVE ",value:2},{name:"ACTIVE ",value:3},{name:"LOST ",value:4},{name:"DEACTIVATED ",value:5}],this.ticketStatusChoose="",this.ticketListChoose=[],this.importantMsg="",this.errMsg="Confirm Delete Tenant?",this.actionTenantId=null,this.waitActionTicket=[],this.tableHeadersThree=[{text:"Tower",column:"",width:"130px"},{text:"Level",column:"",width:"110px"}],this.AllCarpark=[],this.dialogChooseCarparks=[],this.data=[],this.driverKeyword="",this.driverKeyword$=new _.xQ,this.driverStatusChoose="",this.timeRangeDriver=[],this.driverShow="list",this.actionDriverData={employeeId:"",hpNumber:"",tenantId:"",consumptionQuota:0},this.actionDriverMoreData={name:void 0,status:void 0,cardSn:void 0,isDeLink:!1},this.startDriverDate="",this.endDriverDate="",this.tableHeadersDriver=[{text:"#",column:"",width:"50px"},{text:"Employee ID",column:"",width:"110px"},{text:"Mobile No.",column:"",width:"110px"},{text:"Name",column:"name",width:"110px"},{text:"Ticket No.",column:"",width:"110px"},{text:"Created On",column:"",width:"110px"},{text:"Action",column:"",width:"110px"}],this.actionDriver={},this.quotaAvailable=0,this.isTableAction=!1,this.isEdit=!1,this.isView=!1,this.editTenantDriverId="",this.showDeLinkBtn=!0}get filterParams(){return{beginTime:this.startDriverDate,endTime:this.endDriverDate,keyword:this.driverKeyword,tenantId:localStorage.getItem("tenantId")?localStorage.getItem("tenantId"):this.tenantId$.getValue()}}reloadData(){this.ticketManagementPageservicetService.getTicketDashboardData(localStorage.getItem("tenantId")).subscribe(e=>{this.ticketsDashboardData=e.data}),this.ticketManagementPageservicetService.getTenantsDashboardData(localStorage.getItem("tenantId")).subscribe(e=>{this.tenantsDashboardData=e.data}),this.reloadDataService(this.driverManagementPageservicetService),this.actionDriverData.tenantId=localStorage.getItem("tenantId")}pageChanged(e){this.pagination=e,this.reloadData()}handlePageSizeChange(e){this.pagination={...this.pagination,rowsPerPage:e},this.reloadData()}handlePageIndexChange(e){this.pagination={...this.pagination,page:e},this.reloadData()}ngOnInit(){this.reloadData(),this.keywordListener=this.keyword$?.debounceTime(500).subscribe(()=>{this.reloadData()}),localStorage.getItem("tenantId")||(this.tenantIdListener=this.tenantId$.subscribe(e=>{this.reloadData()}),this.ticketManagementPageservicetService.getTenantsInformation().subscribe(e=>{localStorage.setItem("tenantId",e.data.tenantId),this.tenantId$.next(e.data.tenantId)})),this.driverKeyword$.debounceTime(500).subscribe(()=>{this.reloadData()})}ngOnDestroy(){this.tenantIdListener?.unsubscribe(),this.keywordListener?.unsubscribe()}ticketCheckChange(e){this.waitActionTicket.push(e)}deleteTicketSure(){this.modalRef.hide(),this.ticketManagementPageservicetService.deleteTicket(this.waitActionTicket[0].cardId).subscribe(n=>{200==n.code&&(this.waitActionTicket=[],this.reloadData())})}deleteManyTicketSure(){let e="";this.waitActionTicket.forEach(i=>{e+=i.cardId+","});let n=e.substring(0,e.length-1);this.ticketManagementPageservicetService.deleteTicket(n).subscribe(i=>{200==i.code&&(this.waitActionTicket=[],this.closeModal(),this.reloadData())})}AssignTicketHandle(){let e=[];e=[...new Set(this.waitActionTicket)];let n=[];n=e.filter(i=>1==i.checked),this.waitActionTicket=n,this.modalRef=this.modalService.show(this.confirmAssignTenant,{class:"modal-md"}),this.ticketManagementPageservicetService.tenantList().subscribe(i=>{this.ticketAssignAimTenant=i.content})}SureAssign(){let e=[];this.waitActionTicket.forEach(a=>{e.push(a.cardId)});let i=this;i.ticketManagementPageservicetService.assignTicketToTenant({cardIdList:e,tenantId:this.ticketAssignAimTenantChoose}).subscribe(a=>{200==a.code?(i.modalRef.hide(),i.reloadData()):(i.modalRef.hide(),i.importantMsg=a.msg,i.modalRef=this.modalService.show(this.confirmModalImportant,{class:"modal-md"}))})}stopUse(e){this.ticketManagementPageservicetService.stopUse(e.cardId).subscribe(n=>{200==n.code&&this.reloadData()})}lost(e){this.ticketManagementPageservicetService.lostHandle(e.cardId).subscribe(n=>{200==n.code&&this.reloadData()})}cancelLost(e){this.ticketManagementPageservicetService.cancellostHandle(e.cardId).subscribe(n=>{200==n.code&&this.reloadData()})}deleteTantentHandle(e){this.actionTenantId=e.tenantId,this.modalRef=this.modalService.show(this.confirmModal,{class:"modal-md"})}closeModal(){this.modalRef.hide()}closeModalYes(){this.modalRef.hide(),this.tenantManagementPageservicetService.deleteOneTenant(this.actionTenantId).subscribe(e=>{console.log(e,"\u7ed3\u679c"),200==e.code&&this.reloadData()})}downLoadTenants(){console.log("===================================="),console.log("\u56e2\u961f\u4e0b\u8f7d"),console.log("====================================")}tenantAddCapark(){let e=this;e.modalRef=e.modalService.show(e.confirmCarparkList,{class:"modal-md"})}chooseTenantCarpark(e){this.dialogChooseCarparks.push(e),this.AllCarpark.forEach(i=>{i.id==e.id&&(i.disabled=!0)})}reduceCur(e){this.AllCarpark.forEach(i=>{i.id==e.id&&(i.disabled=!1)});let n=-1;for(let i=0;i<this.dialogChooseCarparks.length;i++)this.dialogChooseCarparks[i].id==e.id&&(n=i);n>-1&&this.dialogChooseCarparks.splice(n,1)}addDriverOne(){this.ticketManagementPageservicetService.getTenantsInformation().subscribe(e=>{if(200===e.code){let n=e.data.consumptionQuota?e.data.consumptionQuota:0;this.quotaAvailable=n,this.actionDriverData.consumptionQuota=n,this.actionDriverData.tenantId=localStorage.getItem("tenantId")?localStorage.getItem("tenantId"):e.data.tenantId}else this.message.create("error","Failed to obtain quota info"),this.quotaAvailable=0,this.actionDriverData.consumptionQuota=0,this.actionDriverData.tenantId=localStorage.getItem("tenantId")?localStorage.getItem("tenantId"):e.data.tenantId;this.driverShow="addDriver"},e=>{this.message.create("error","Failed to obtain quota info"),this.quotaAvailable=0,this.actionDriverData.consumptionQuota=0,this.driverShow="addDriver"})}gobackDriverList(){this.driverShow="list",this.isTableAction=!1,this.isEdit=!1,this.isView=!1,this.actionDriverData={employeeId:"",hpNumber:"",tenantId:"",consumptionQuota:0},this.actionDriverMoreData={name:void 0,status:void 0,cardSn:void 0,isDeLink:!1}}sureAddDriver(){if(this.isTableAction&&this.isEdit)this.driverManagementPageservicetService.postUpdateDriverInfo({tenantDriverId:this.editTenantDriverId,employeeId:this.actionDriverData.employeeId}).subscribe(n=>{200===n.code?(this.message.success(n.msg),this.reloadData(),this.gobackDriverList()):this.message.error(n.msg)});else{let e=this;e.driverManagementPageservicetService.sureAddDriver(e.actionDriverData).subscribe(n=>{500===n.code||500===n.status?(e.importantMsg=n.msg,e.modalRef=e.modalService.show(e.confirmModalImportant,{class:"modal-md"})):(this.reloadData(),this.gobackDriverList())})}}deleteDriver(e){this.actionDriver=e,this.modalRef=this.modalService.show(this.confirmDeleteDriver,{class:"modal-md"})}okDeleteDriver(){console.log(this.actionDriver.tenantDriverId);let e=this;e.driverManagementPageservicetService.deleteDriver(e.actionDriver.tenantDriverId).subscribe(n=>{200==n.code&&(this.modalRef.hide(),e.reloadData())})}downloadImportTemplateDriver(){this.driverManagementPageservicetService.exportTemplate().subscribe(e=>{(0,S.saveAs)(e,"Driver Import Template.xlsx")})}getVisitDateDriver(e){this.startDriverDate=e.length?u(e[0]).format("YYYY-MM-DD HH:mm:ss"):"",this.endDriverDate=e.length?u(e[1]).format("YYYY-MM-DD HH:mm:ss"):"",this.reloadData()}loadDriver(){this.inputfileDriver.nativeElement.click()}importDriver(e){let n=this;n.driverManagementPageservicetService.importManyDriver(e,8).subscribe(i=>{200==i.code?(n.importantMsg="success !",n.reloadData(),n.modalRef=n.modalService.show(n.confirmModalImportant,{class:"modal-md"})):(n.importantMsg="Import error,Incorrect information !",n.modalRef=n.modalService.show(n.confirmModalImportant,{class:"modal-md"}))})}editDriver(e,n){console.log("data==============>",e),this.isTableAction=!0;let i=this.ticketStatusSearch.filter(a=>a.value===e.status);this.actionDriverMoreData.name=e.name??void 0,this.actionDriverMoreData.status=i[0].name,this.actionDriverMoreData.cardSn=e.cardSn??void 0,this.actionDriverMoreData.isDeLink=!e.cardSn,this.editTenantDriverId=e.tenantDriverId,this.showDeLinkBtn=!!e.cardSn,this.actionDriverData={employeeId:e.employeeId,hpNumber:e.driverHpNumber,tenantId:e.tenantId,consumptionQuota:e.consumptionQuota},n?(this.isView=!1,this.isEdit=!0):(this.isView=!0,this.isEdit=!1),this.driverShow="addDriver"}toEditDriver(){this.isView=!1,this.isEdit=!0}unBindingCard(e){this.modalRef=this.modalService.show(this.unBindingCardModal,{class:"modal-md modal-center"}),this.editTenantDriverId=e}checkUnbingCard(){this.modalRef.hide(),this.driverManagementPageservicetService.getDeLinkDriver(this.editTenantDriverId).subscribe(e=>{200===e.code?(this.message.success(e.msg??"Delink Success!"),this.reloadData()):this.message.error(e.msg)})}confirmDeLink(){this.actionDriverMoreData.cardSn="",this.actionDriverMoreData.isDeLink=!0,this.showDeLinkBtn=!1}cancelDeLink(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.D),t.Y36(v.y),t.Y36(f.p),t.Y36(m.tT),t.Y36(T.dD))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tenant-driver-page"]],viewQuery:function(e,n){if(1&e&&(t.Gf(F,5),t.Gf(Q,5),t.Gf(L,5),t.Gf(E,5),t.Gf(K,5),t.Gf(Y,5),t.Gf(R,5),t.Gf(j,5),t.Gf($,5),t.Gf(B,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.confirmModal=i.first),t.iGM(i=t.CRH())&&(n.confirmModalImportant=i.first),t.iGM(i=t.CRH())&&(n.confirmCarparkList=i.first),t.iGM(i=t.CRH())&&(n.confirmDeleteCarpark=i.first),t.iGM(i=t.CRH())&&(n.inputfilePDF=i.first),t.iGM(i=t.CRH())&&(n.inputfile=i.first),t.iGM(i=t.CRH())&&(n.inputfileDriver=i.first),t.iGM(i=t.CRH())&&(n.confirmAssignTenant=i.first),t.iGM(i=t.CRH())&&(n.confirmDeleteDriver=i.first),t.iGM(i=t.CRH())&&(n.unBindingCardModal=i.first)}},features:[t.qOj],decls:47,vars:19,consts:[[1,"body-wrapper"],["confirmModal",""],["confirmModalImportant",""],["confirmCarparkList",""],["confirmDeleteCarpark",""],["confirmAssignTenant",""],["confirmDeleteDriver",""],["unBindingCardModal",""],[1,"m-content"],[1,"m-portlet","m-portlet--tabs"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"dash-box"],[1,"border-none","box-normal"],["class","action-line",4,"ngIf"],["rangeTemplate",""],[3,"nzData","nzFrontPagination","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzShowSizeChanger","nzShowTotal","nzPageSizeChange","nzPageIndexChange",4,"ngIf"],[4,"ngIf"],[1,"modal-body","text-center"],[2,"display","flex","justify-content","space-evenly"],["nz-button","","nzType","primary","nzGhost","","type","button",3,"click"],["nz-button","","nzType","primary","type","button",1,"mgl16",3,"click"],["nz-button","","nzGhost","","nzType","primary","type","button",3,"click"],[1,"list-group",2,"height","auto","width","auto"],["nz-button","","nzType","primary","class","list-group-item",3,"disabled","click",4,"ngFor","ngForOf"],["nz-button","","nzType","primary","type","button",3,"click"],["nz-button","","nzType","primary",1,"list-group-item",3,"disabled","click"],["nz-button","","nzType","primary","class","list-group-item",4,"ngFor","ngForOf"],[2,"display","flex","justify-content","space-evenly","margin-top","16px"],["nz-button","","nzType","primary","type","button",3,"click",4,"ngIf"],["nz-button","","nzType","primary",1,"list-group-item"],["name","tenantName",1,"form-control","m-input",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[2,"margin-top","16px","display","flex","justify-content","center"],["nz-button","","nzType","primary",3,"click"],[3,"value"],[1,"modal-header-unbingding"],[3,"click"],[1,"action-line"],[2,"display","flex","justify-content","flex-end"],["nz-button","","nzType","primary","nzGhost","","nzShape","round",3,"click"],["nz-icon","","nzType","download","nzTheme","outline"],[1,"m-portlet__filter","tit-options-40","mgl16"],["type","file","name","video","id","video","accept","image/*,video/*,image/*MIME_type",2,"display","none",3,"change"],["inputfileDriver",""],["nz-button","","nzType","primary","nzShape","round",3,"click"],["nz-icon","","nzType","upload","nzTheme","outline"],["nz-button","","nzType","primary","nzShape","round",1,"mgl16",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[2,"display","flex","margin-top","16px"],[1,"filter-wrap"],[1,"filter-item"],[1,"filter-label"],["nz-input","","type","text","placeholder","Keywords",2,"width","160px",3,"ngModel","ngModelChange"],["nzFormat","dd/MM/yyyy",3,"ngModel","ngModelChange"],[3,"nzData","nzFrontPagination","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzShowSizeChanger","nzShowTotal","nzPageSizeChange","nzPageIndexChange"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"ant-table-row-odd",4,"ngFor","ngForOf"],["nz-dropdown","","nzTrigger","click",1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--outline-2x","m-btn--pill","no-border",3,"nzDropdownMenu","nzPlacement"],[1,"la","la-ellipsis-h"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],[1,"la","la-eye",2,"margin-right","4px"],[1,"la","la-edit",2,"margin-right","4px"],["nz-menu-item","",3,"click",4,"ngIf"],[1,"la","la-trash",2,"margin-right","4px"],[1,"la","la-unlink",2,"margin-right","4px"],[2,"display","flex"],[1,"row","form-group","col-6"],[1,"col-form-label","col-4","text-right"],[1,"m--font-danger"],[1,"col-8"],["nz-input","","type","text","name","driverMobileNo","required","",3,"disabled","ngModel","ngModelChange"],["driverMobileNo","ngModel"],["class","form-control-feedback",4,"ngIf"],["nz-input","","type","text","name","employeeId",3,"disabled","ngModel","ngModelChange"],["style","display: flex;",4,"ngIf"],[2,"display","flex","justify-content","flex-end","margin-top","100px"],["nz-button","","nzShape","round","nzType","primary","class","mgl16",3,"click",4,"ngIf"],["class","mgl16","nz-button","","nzType","primary","nzShape","round",3,"disabled","click",4,"ngIf"],[1,"form-control-feedback"],["nz-input","","disabled","","type","text",3,"ngModel","ngModelChange"],["ngDefaultControl","","mode","decimal","readonly","","disabled","",1,"readonly-input",3,"ngModel","showButtons","min","max","ngModelChange"],["nz-button","","nzShape","round","nzType","primary",1,"mgl16",3,"click"],["nz-button","","nzType","primary","nzShape","round",1,"mgl16",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-bar"),t.YNc(2,V,10,1,"ng-template",null,1,t.W1O),t.YNc(4,W,8,1,"ng-template",null,2,t.W1O),t.YNc(6,tt,8,1,"ng-template",null,3,t.W1O),t.YNc(8,ot,10,3,"ng-template",null,4,t.W1O),t.YNc(10,rt,10,2,"ng-template",null,5,t.W1O),t.YNc(12,st,15,0,"ng-template",null,6,t.W1O),t.YNc(14,ct,15,0,"ng-template",null,7,t.W1O),t.TgZ(16,"div",8)(17,"div",9)(18,"section")(19,"div",10)(20,"div",11)(21,"div",12)(22,"span"),t._uU(23,"Lots Quota"),t.qZA(),t.TgZ(24,"span"),t._uU(25),t.qZA()(),t.TgZ(26,"div",12)(27,"span"),t._uU(28,"Tickets Allocated"),t.qZA(),t.TgZ(29,"span"),t._uU(30),t.qZA()(),t.TgZ(31,"div",12)(32,"span"),t._uU(33,"Total Drivers"),t.qZA(),t.TgZ(34,"span"),t._uU(35),t.qZA()(),t.TgZ(36,"div",12)(37,"span"),t._uU(38,"Remaining Tickets"),t.qZA(),t.TgZ(39,"span"),t._uU(40),t.qZA()()(),t._UZ(41,"hr"),t.YNc(42,lt,25,2,"div",13),t.YNc(43,dt,1,3,"ng-template",null,14,t.W1O),t.YNc(45,_t,7,10,"nz-table",15),t.YNc(46,bt,26,14,"div",16),t.qZA()()()()()),2&e&&(t.xp6(21),t.Akn(t.DdM(15,Mt)),t.xp6(4),t.Oqu(n.ticketsDashboardData.active||0),t.xp6(1),t.Akn(t.DdM(16,Pt)),t.xp6(4),t.Oqu(n.ticketsDashboardData.total||0),t.xp6(1),t.Akn(t.DdM(17,Zt)),t.xp6(4),t.Oqu(n.tenantsDashboardData.total||0),t.xp6(1),t.Akn(t.DdM(18,kt)),t.xp6(4),t.Oqu(n.ticketsDashboardData.assigned||0),t.xp6(2),t.Q6J("ngIf","list"==n.driverShow),t.xp6(3),t.Q6J("ngIf","list"==n.driverShow),t.xp6(1),t.Q6J("ngIf","addDriver"==n.driverShow))},dependencies:[g.sg,g.O5,N.G,q.Zp,J.Ls,x.wO,x.r9,D.cm,D.RR,C.ix,G.w,H.dQ,b.uw,b.wS,d.N8,d.Uo,d._C,d.Om,d.p0,d.$Z,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.Q7,c.On,M.Rn,g.uU],styles:[".dash-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#fff}.box-normal[_ngcontent-%COMP%]{height:120px;display:flex;flex-direction:column;justify-content:space-evenly;margin-bottom:12px;width:24%;padding:15px}.box-normal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:16px}.box-normal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{text-align:right;font-size:28px}.border-none[_ngcontent-%COMP%]{box-sizing:border-box;border:none}.modal-header-unbingding[_ngcontent-%COMP%]{position:relative}.modal-header-unbingding[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 auto}.modal-header-unbingding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;right:0;cursor:pointer;font-size:20px;font-weight:700}.de-link-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.de-link-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.readonly-input[_ngcontent-%COMP%]{background-color:#d3d3d3}",'@charset "UTF-8";.backbtn[_ngcontent-%COMP%]:hover{color:#000!important}.text-right[_ngcontent-%COMP%]{font-weight:500!important;font-size:16px!important}.CilckStyle[_ngcontent-%COMP%]{border-bottom:3px solid #00bdb5}.top-line[_ngcontent-%COMP%]{display:flex}.top-line-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin-right:40px}.top-line-right[_ngcontent-%COMP%]{display:flex}.top-line-right-options[_ngcontent-%COMP%]{margin:0 20px;font-weight:500}.action-line[_ngcontent-%COMP%]{margin-bottom:6px;display:flex;align-items:center;justify-content:space-between}.SearchBox[_ngcontent-%COMP%]{display:flex;width:25%;margin:0 20px;font-size:16px;font-weight:500;position:relative;padding-bottom:0!important}.time-search[_ngcontent-%COMP%]{display:flex;width:20%;margin:0 20px 0 0;font-size:16px;font-weight:500;position:relative}.SearchLabel[_ngcontent-%COMP%]{margin-right:16px;font-size:16px;font-weight:500}.addCardTitle[_ngcontent-%COMP%]{margin:0 16px}.actionLineBtn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.actionLineBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:16px}.addCardFooter[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.addCardFooter[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{margin:0 16px}.assignSelectTitle[_ngcontent-%COMP%]{display:flex;align-items:center}.assignSelect[_ngcontent-%COMP%]{margin-left:20px}.assignSelect-topLine[_ngcontent-%COMP%]{margin:16px 0}.action-btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:16px}.action-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:16px}.editAction[_ngcontent-%COMP%], .view-icon[_ngcontent-%COMP%], .deleteAction[_ngcontent-%COMP%], .lostAction[_ngcontent-%COMP%], .stopUseAction[_ngcontent-%COMP%], .cancellostAction[_ngcontent-%COMP%]{cursor:pointer}.reduceBtn[_ngcontent-%COMP%]{line-height:40px!important;justify-content:center!important;border-radius:40px!important;width:40px!important;height:40px!important;background-color:#fff!important;border:2px solid #00bdb5!important;color:#00bdb5!important;font-size:1px}.border-none[_ngcontent-%COMP%]{box-sizing:border-box;border:none}.border-style[_ngcontent-%COMP%]{border-bottom:1px solid white}.dash-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#fff}.box-unnormal[_ngcontent-%COMP%]{height:120px;margin-bottom:12px;padding:12px}.box-unnormal[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]{box-sizing:border-box;padding:0 1px 0 0;border-right:1px solid white;display:flex;flex-direction:column;justify-content:space-between}.box-unnormal[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:16px}.box-unnormal[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-size:28px}.box-unnormal[_ngcontent-%COMP%]   .assign-info-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly}.box-unnormal[_ngcontent-%COMP%]   .assign-info-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:16px}.box-unnormal[_ngcontent-%COMP%]   .assign-info-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0}.box-normal[_ngcontent-%COMP%]{height:120px;display:flex;flex-direction:column;justify-content:space-evenly;margin-bottom:12px;padding:15px}.box-normal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:16px}.box-normal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{text-align:right;font-size:28px}.status-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:100%;border-radius:30%;text-align:center;font-weight:600}.modal-header[_ngcontent-%COMP%]{position:relative}.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 auto}.modal-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;right:0;cursor:pointer;font-size:20px;font-weight:700}.tenant-table-action[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.tenant-table-action[_ngcontent-%COMP%]   .tenant-btn-group[_ngcontent-%COMP%]{display:flex;width:auto}.m-font-weight-600[_ngcontent-%COMP%]{font-weight:600}.m-font-weight-500[_ngcontent-%COMP%]{font-weight:500}.td-word-wrap[_ngcontent-%COMP%]{word-break:break-all!important}.action-btn-font[_ngcontent-%COMP%]{font-size:16px}']}),o})();var yt=r(77750),zt=r(6497);const wt=[{path:"",component:Z.f,children:[{path:"",component:At}]}];let Ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[h.D,v.y,f.p],imports:[g.ez,k.x,P.Bz.forChild(wt),A.A0,c.u5,c.UX,z.D,y.kn,O.mr,w.Ns.forRoot({echarts:()=>r.e(4734).then(r.bind(r,14734))}),m.zk,M.L$,yt.z,C.sL,zt._p,T.gR]}),o})()}}]);