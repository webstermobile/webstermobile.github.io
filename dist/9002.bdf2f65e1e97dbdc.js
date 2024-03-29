"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[9002],{76284:(A,O,a)=>{a.d(O,{z:()=>c});var e=a(3927),_=a(94650),h=a(80529),v=a(28555),g=a(11481),u=a(91599);let c=(()=>{class p extends e.su{constructor(l,o,i,M){super(l,o),this.http=l,this.store=o,this.sanitizer=i,this.modelName="User",this.baseUrl="",this.handleError=M.createHandleError(`${this.modelName}Service`)}uploadImage(l){const o=this.getUrl("carpark/api/assets/img"),i=new FormData;return i.append("file",l,l.name),this.post(o,i).map(({uuid:M})=>this.getImage(M))}getImage(l){return this.getUrl(`carpark/api/resources/${l}`)}getImageByUuid(l,o){return this.get(this.getUrl(`carpark/api/resources/${l}`),{responseType:"blob"}).map(i=>o?this._getSafeFileUrl(i):this.getSafeFileUrl(i))}getSafeFileUrl(l){return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(l))}_getSafeFileUrl(l){return{imgUrl:this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(l)),type:l.type}}requestSessionImage(l,o){const i=this.getUrl(`carpark/api/anpr/request/${l}/${o}`);return this.get(i,{responseType:"text"})}getSessionImage(l){return this.get(this.getUrl(`carpark/api/anpr/assets/${l}/1`),{responseType:"blob"}).map(o=>this.getSafeFileUrl(o))}}return p.\u0275fac=function(l){return new(l||p)(_.LFG(h.eN),_.LFG(v.yh),_.LFG(g.H7),_.LFG(u.k))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac}),p})()},64870:(A,O,a)=>{a.d(O,{P:()=>p});var e=a(3927),_=a(26245),h=a(27221),v=a(94650),g=a(28555),u=a(80529),c=a(91599);let p=(()=>{class t extends e.su{constructor(o,i,M){super(i,o),this.store=o,this.http=i,this.modelName="Layout",this.baseUrl="carpark/api/car-park-layouts",this.handleError=M.createHandleError(`${this.modelName}Service`)}filterModelByCarPark(o,i){const M=(0,_.U8)(`${this.baseUrl}/byCarParkId/page`,{...o,...(0,_.jq)(i)});return this.get(this.getUrl(M)).pipe((0,h.K)(this.handleError(`${this.modelName}Filter`,{}))).map(m=>Array.isArray(m)?(0,e.eC)(m):(0,e.O7)(m))}getList(o){const i=(0,_.U8)(`${this.baseUrl}/byCarParkId/list`,{...o});return this.get(this.getUrl(i))}updateModel(o){return this.put(this.getUrl(`${this.baseUrl}`),o).pipe((0,h.K)(this.handleError(`${this.modelName}Update`,{})))}}return t.\u0275fac=function(o){return new(o||t)(v.LFG(g.yh),v.LFG(u.eN),v.LFG(c.k))},t.\u0275prov=v.Yz7({token:t,factory:t.\u0275fac}),t})()},51766:(A,O,a)=>{a.d(O,{C:()=>o});var e=a(3927),_=a(26245),h=a(591),v=a(27221),g=a(66708),u=a(94650),c=a(60097),p=a(28555),t=a(80529),l=a(91599);let o=(()=>{class i extends e.su{constructor(m,n,r,d){super(r,n),this.carparkService=m,this.store=n,this.http=r,this.$seasonData=new h.X({}),this.modelName="Carpark",this.handleError=d.createHandleError(`${this.modelName}Service`)}ngOnInit(){}handleDynamicUrl(){const m=JSON.parse(localStorage.getItem("user")).login;this.baseUrl=this.carparkService.isMotorist()&&g.Z.isNotNull(m)?`carpark/api/drivers/${m}/seasons`:"carpark/api/season-parkings"}filterModel(m,n){return this.handleDynamicUrl(),super.filterModel(m,n).map(r=>r.data?r:{data:[],pagination:(0,_.f$)()})}filterModelOfCarpark(m,n,r){const d=this.getUrl((0,_.U8)(`carpark/api/season-parking/${m}/getList`,{...n,...(0,_.jq)(r)}));return this.get(d).pipe((0,v.K)(this.handleError(`${this.modelName}Filter`,{}))).map(s=>Array.isArray(s)?(0,e.eC)(s.slice(0,r.rowsPerPage+1)):(0,e.O7)(s))}filterModelOfVehicle(m,n,r){const d=this.getUrl((0,_.U8)(`carpark/api/vehicles/${m}/seasons`,{...n,...(0,_.jq)(r)}));return this.get(d).pipe((0,v.K)(this.handleError(`${this.modelName}Filter`,{}))).map(s=>Array.isArray(s)?(0,e.eC)(s.slice(0,r.rowsPerPage+1)):(0,e.O7)(s))}getIdentity(m){const n=this.getUrl(`carpark/api/seasons/applications/${m}`);return this.get(n)}downloadSessonPdf(m){const n=this.getUrl(`carpark/api/printBilling/seasoncode/pdf/${m}`);return this.get(n,{responseType:"blob"}).pipe((0,v.K)(this.handleError(`${this.modelName}Get`,{})))}getGroupSeason(m){const n=this.getUrl(`carpark/api/season-group/query/${m}`);return this.get(n)}applyHandle(m){return this.post(this.getUrl("carpark/api/season-group"),m)}clearHandle(m){return this.delete(this.getUrl(`carpark/api/season-group/clear/${m}`))}}return i.\u0275fac=function(m){return new(m||i)(u.LFG(c.x),u.LFG(p.yh),u.LFG(t.eN),u.LFG(l.k))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac}),i})()},85265:(A,O,a)=>{a.d(O,{K:()=>p});var e=a(3927),_=a(26245),h=a(27221),v=a(94650),g=a(28555),u=a(80529),c=a(91599);let p=(()=>{class t extends e.su{constructor(o,i,M){super(i,o),this.store=o,this.http=i,this.modelName="Slot",this.baseUrl="carpark/api/car-park-slots",this.handleError=M.createHandleError(`${this.modelName}Service`)}filterModelByCarPark(o,i){const M=(0,_.U8)(`${this.baseUrl}/byCarParkId/page`,{...o,...(0,_.jq)(i)});return this.get(this.getUrl(M)).pipe((0,h.K)(this.handleError(`${this.modelName}Filter`,{}))).map(m=>Array.isArray(m)?(0,e.eC)(m):(0,e.O7)(m))}getList(o){const i=(0,_.U8)(`${this.baseUrl}/byCarParkId/list`,{...o});return this.get(this.getUrl(i))}updateModel(o){return this.put(this.getUrl(`${this.baseUrl}`),o).pipe((0,h.K)(this.handleError(`${this.modelName}Update`,{})))}askTariffsList(){const i=this.getUrl("scp-mg-devicemgt/costmode/findAll");return this.post(i,{companyName:"",costmodeName:"",ownerId:"",pageNum:1,pageSize:9999})}askChargerAndPlug(){const o=this.getUrl("scp-mg-devicemgt/chargingPileService/getStakeAndConnectorInfo");return this.get(o)}bindHandle(o){const i=this.getUrl("scp-mg-devicemgt/chargingPileService/stakeFeeModelRel");return this.post(i,o)}}return t.\u0275fac=function(o){return new(o||t)(v.LFG(g.yh),v.LFG(u.eN),v.LFG(c.k))},t.\u0275prov=v.Yz7({token:t,factory:t.\u0275fac}),t})()},31289:(A,O,a)=>{a.d(O,{K:()=>u});var e=a(94650),_=a(3927),h=a(28555),v=a(80529),g=a(91599);let u=(()=>{class c extends _.su{constructor(t,l,o){super(l,t),this.store=t,this.http=l,this.modelName="Tariff",this.baseUrl="carpark/api/tariffs",this.tariffEventer=new e.vpe,this.handleError=o.createHandleError(`${this.modelName}Service`)}updateModel(t){const l=this.getUrl(this.baseUrl);return this.put(l,t)}addOrUpdateEvTariff(t){const l=this.getUrl("scp-mg-devicemgt/costmode/addOrUpdateEvTariff");return this.post(l,t)}}return c.\u0275fac=function(t){return new(t||c)(e.LFG(h.yh),e.LFG(v.eN),e.LFG(g.k))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c})()},4666:(A,O,a)=>{a.d(O,{p:()=>i}),a(38014);var _=a(3927),h=a(26245),v=a(27221),g=a(66708),u=a(94650),c=a(60097),p=a(93764),t=a(80529),l=a(28555),o=a(91599);let i=(()=>{class M extends _.su{constructor(n,r,d,s,T){super(d,s),this.carparkService=n,this.condoService=r,this.http=d,this.store=s,this.modelName="Transaction",this.handleError=T.createHandleError(`${this.modelName}Service`)}ngOnInit(){}handleDynamicUrl(){const n=JSON.parse(localStorage.getItem("user")).login;this.baseUrl=this.carparkService.isMotorist()&&g.Z.isNotNull(n)?`carpark/api/drivers/${n}/transactions`:this.condoService.isCondoOwner()?"carpark/api/working-sessions/transactions":"carpark/api/car-parks/transactions"}filterModel(n,r){return this.handleDynamicUrl(),super.filterModel(n,r).map(d=>d.data?d:{data:[],pagination:(0,h.f$)()})}fetchAbnormalTransactions(n,r){const d=(0,h.U8)("carpark/api/car-parks/transactions/abnormal",{...n,...(0,h.jq)(r)});return this.get(this.getUrl(d)).map(_.O7)}fetchAbnormalTransaction(n){return this.get(this.getUrl(`carpark/api/parking-transactions/${n}`))}verifyAbnormalTransaction(n){return this.post(this.getUrl(`carpark/api/parking-transactions/${n.id}/update`),n)}filterByVehicle(n,r){const d=this.getUrl((0,h.U8)(`carpark/api/parking-transactions/plateNo/${n}`,{...(0,h.jq)(r)}));return this.get(d).pipe((0,v.K)(this.handleError(`${this.modelName}Filter`,{}))).map(s=>Array.isArray(s)?(0,_.eC)(s):(0,_.O7)(s))}createModel(n){const r=this.getUrl("carpark/api/parking-transactions-entry");return this.post(r,n)}closeTransactions(n){const r=this.getUrl(`carpark/api/close/working-sessions/${n}`);return this.put(r,null)}getFile(n){const r=this.getUrl(`carpark/api/printTransactionReceipt/pdf/parking_transaction/${n}`);return this.get(r,{responseType:"blob"})}findIndentByPage(n,r){const d=this.getUrl(`scp-app-ordermanagement/chargepile/findIndentByPage/${r.rowsPerPage}/${r.page}`);return this.post(d,n)}exportExcellist(n,r){const d=this.getUrl("scp-app-ordermanagement/chargepile/exportFindIndent");return this.post(d,n,{responseType:"blob"})}exportExcelDetail(n,r){const d=this.getUrl("scp-app-ordermanagement/chargepile/export/detail");return this.post(d,n,{responseType:"blob"})}exportCondoOwnerExcel(n){const r=(0,h.U8)("carpark/api/working-sessions/exportParkingTransaction",{...n});return this.get(this.getUrl(r),{responseType:"blob"})}}return M.\u0275fac=function(n){return new(n||M)(u.LFG(c.x),u.LFG(p.p),u.LFG(t.eN),u.LFG(l.yh),u.LFG(o.k))},M.\u0275prov=u.Yz7({token:M,factory:M.\u0275fac}),M})()},71942:(A,O,a)=>{a.d(O,{f:()=>i});var e=a(38014),_=a(3927),h=a(26245),v=a(21086),g=a(27221),u=a(66708),c=a(94650),p=a(60097),t=a(80529),l=a(28555),o=a(91599);let i=(()=>{class M extends _.su{constructor(n,r,d,s){super(r,d),this.carparkService=n,this.http=r,this.store=d,this.modelName="Vehicle",this.handleError=s.createHandleError(`${this.modelName}Service`),this.handleDynamicUrl()}ngOnInit(){}handleDynamicUrl(){const n=JSON.parse(localStorage.getItem("user")).login;this.baseUrl=this.carparkService.isMotorist()&&u.Z.isNotNull(n)?`carpark/api/drivers/${n}/vehicles`:"carpark/api/vehicle/get-vehicles"}getTelList(n,r){console.log(n);const d=this.getUrl((0,h.U8)("carpark/api/vehicle/vehicles",{...n,...(0,h.jq)(r)}));return this.get(d)}filterModel(n,r){const d=this.getUrl((0,h.U8)(this.baseUrl,{...n,...(0,h.jq)(r)}));return this.get(d).pipe((0,g.K)(this.handleError(`${this.modelName}Filter`,{}))).map(s=>Array.isArray(s)?(0,_.eC)(s):(0,_.O7)(s))}updateVehicle(n){const r=this.getUrl(`carpark/api/drivers/${n.driverCode}/vehicles/${n.vehicleId}`);return this.patch(r,n.vehicle).pipe((0,g.K)(this.handleError(`${this.modelName}Update`,{})))}getModel(n){const r=this.getUrl(`carpark/api/vehicle/${n}`);return this.get(r).pipe((0,g.K)(this.handleError(`${this.modelName}Get`,{})))}deleteModel(n,r){const d=this.getUrl(`carpark/api/drivers/${n}/vehicles/${r}`);return this.delete(d).pipe((0,g.K)(this.handleError(`${this.modelName}Delete`)))}deleteAdminModel(n){const r=this.getUrl(`carpark/api/admin/vehicle/${n}`);return this.delete(r).pipe((0,g.K)(this.handleError(`${this.modelName}Delete`)))}createVehicle(n,r){const d=this.getUrl(`carpark/api/drivers/${n}/vehicles`);return this.post(d,r)}putUpdateVehicle(n,r){const d=this.getUrl(`carpark/api/drivers/${n}/vehicles/${r.id}`);return this.put(d,r)}getDriverCode(n){const r=this.getUrl(`carpark/api/drivers/${n}/driverCode`);return this.get(r)}createModel(n,r){const d=this.getUrl(`carpark/api/drivers/${n}/vehicles`);return this.post(d,r).pipe((0,g.K)(this.handleError(`${this.modelName}Create`,{})))}createVehicleAdmin(n){const r=this.getUrl(`carpark/api/admin/vehicles/${n.mobile}`);return this.post(r,n).pipe((0,g.K)(this.handleError(`${this.modelName}Create`,{})))}updateModel(n){const r=this.getUrl("carpark/api/admin/vehicle-changes");return this.post(r,n).pipe((0,g.K)(this.handleError(`${this.modelName}Update`,{})))}getSimpleList(){const n=this.getUrl("carpark/api/vehicle/simple-vehicles-list");return this.get(n).pipe((0,g.K)(this.handleError(`${this.modelName}SimpleList`,{})))}filterModelByDriver(n){const r=this.getUrl(`carpark/api/drivers/${n}/vehicles`);return this.get(r).pipe((0,g.K)(()=>(0,v.of)([])))}isOperator(){const n=JSON.parse(localStorage.getItem("user-roles"));return!(!u.Z.isNotNull(n)||!n.includes(e.i44.Operator))}getUserVehicle(n,r){this.baseUrl=`carpark/api/drivers/${n}/vehicles`;const d=this.getUrl((0,h.U8)(this.baseUrl,{...(0,h.jq)(r)}));return this.get(d).pipe((0,g.K)(this.handleError(`${this.modelName}Filter`,{}))).map(s=>Array.isArray(s)?(0,_.eC)(s):(0,_.O7)(s))}}return M.\u0275fac=function(n){return new(n||M)(c.LFG(p.x),c.LFG(t.eN),c.LFG(l.yh),c.LFG(o.k))},M.\u0275prov=c.Yz7({token:M,factory:M.\u0275fac}),M})()},11917:(A,O,a)=>{a.d(O,{X:()=>c});var e=a(94650),_=a(34793),h=a(20388),v=a(66616),g=a(47044),u=a(21811);let c=(()=>{class p{constructor(l,o){this.router=l,this.bsModalRef=o,this.cancel=new e.vpe,this.submit=new e.vpe}doSubmit(){this.submit.emit()}doCancel(){this.cancel.emit()}}return p.\u0275fac=function(l){return new(l||p)(e.Y36(_.F0),e.Y36(h.UZ))},p.\u0275cmp=e.Xpm({type:p,selectors:[["confirm-modal"]],inputs:{options:"options"},outputs:{cancel:"cancel",submit:"submit"},decls:10,vars:4,consts:[[1,"modal-body"],[1,"modal-title"],[1,"modal-msg"],[1,"modal-btns"],["type","button","nz-button","","nzType","primary","nzGhost","",3,"click"],["type","button","nz-button","","nzType","primary",3,"click"]],template:function(l,o){1&l&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return o.doCancel()}),e._uU(7),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.doSubmit()}),e._uU(9),e.qZA()()()),2&l&&(e.xp6(2),e.hij(" ",o.options.title," "),e.xp6(2),e.Oqu(o.options.message),e.xp6(3),e.hij(" ",o.options.cancelText||"Cancel"," "),e.xp6(2),e.hij(" ",o.options.submitText||"Submit"," "))},dependencies:[v.ix,g.w,u.dQ],styles:[".modal-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-items:center;align-items:center}.modal-body[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#6c6e86}.modal-body[_ngcontent-%COMP%]   .modal-msg[_ngcontent-%COMP%]{color:#868aa8}.modal-body[_ngcontent-%COMP%]   .modal-btns[_ngcontent-%COMP%]{margin-top:20px}.modal-body[_ngcontent-%COMP%]   .modal-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px}"]}),p})()},60086:(A,O,a)=>{a.d(O,{G:()=>c});var e=a(94650),_=a(36895),h=a(34984);function v(p,t){1&p&&e._UZ(0,"img",9),2&p&&e.Q6J("src","assets/app/media/img/icons/park-placeholder.png",e.LSH)}const g=function(p){return{"border-color":p}};function u(p,t){if(1&p&&(e.TgZ(0,"div",5),e._UZ(1,"div",6),e.TgZ(2,"div",7),e.YNc(3,v,1,1,"img",8),e.qZA()()),2&p){const l=t.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngStyle",e.VKq(3,g,o.setBorderColor(l.status,1))),e.xp6(1),e.Q6J("ngStyle",e.VKq(5,g,o.setBorderColor(l.status,2))),e.xp6(1),e.Q6J("ngIf",0!==l.status)}}let c=(()=>{class p{constructor(){this.xAxisData=[{name:"Smart_100EV_3.3KW"},{name:"Smart_100EV_6.63KW"},{name:"Smart_900EV_3.3KW"},{name:"Smart_900EV_6.6KW"}],this.evStatusList=[{status:0},{status:1},{status:2},{status:0},{status:1}]}ngOnInit(){this.setEvStatusEcharts()}setEvStatusEcharts(){const l=Array.from(new Array(24).keys()).map(i=>(i<10?`0${i}`:`${i}`)+":00"),o=this.xAxisData.map(i=>i.name);this.xAxisData.forEach(i=>{i.type="line",i.smooth=!0,i.data=l.map(()=>Math.floor(1e4*Math.random()))}),this.option={title:{text:"Power Consumption comparison for smart charging scenario",left:"center",textStyle:{fontSize:14}},tooltip:{trigger:"axis"},legend:{data:o,bottom:0},grid:{left:"5%",right:"4%",bottom:"12%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:l},yAxis:{type:"value",name:"Power [KW]",nameLocation:"middle",nameGap:50},series:this.xAxisData}}setBorderColor(l,o){return 0!==l&&1!==o?"#000":{0:"#22b14c",1:"#fff200",2:"#ed1c24"}[l]}}return p.\u0275fac=function(l){return new(l||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-carpark-ev-status"]],decls:6,vars:2,consts:[[1,"evc-status-container","row"],[1,"col-md-6"],["echarts","",3,"options"],[1,"status-main"],["class","status-item",4,"ngFor","ngForOf"],[1,"status-item"],[1,"border-status",3,"ngStyle"],[1,"car-container",3,"ngStyle"],["width","50px","height","50px","class","m--img-rounded m--img-centered","alt","",3,"src",4,"ngIf"],["width","50px","height","50px","alt","",1,"m--img-rounded","m--img-centered",3,"src"]],template:function(l,o){1&l&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.qZA(),e.TgZ(3,"div",1)(4,"div",3),e.YNc(5,u,4,7,"div",4),e.qZA()()()),2&l&&(e.xp6(2),e.Q6J("options",o.option),e.xp6(3),e.Q6J("ngForOf",o.evStatusList))},dependencies:[_.sg,_.O5,_.PC,h._w],styles:[".ev-status-container[_ngcontent-%COMP%]{display:flex}.status-main[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;margin-top:40px}.status-item[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;flex-wrap:nowrap;align-items:center}.border-status[_ngcontent-%COMP%]{width:30px;height:30px;border:5px solid #000;border-radius:50%;margin-bottom:10px}.car-container[_ngcontent-%COMP%]{width:60px;height:80px;border:5px solid #000;display:flex;align-items:center;justify-content:center;border-radius:10%}"]}),p})()},24277:(A,O,a)=>{a.d(O,{p:()=>C});var e=a(36895),_=a(80529),h=a(24006),v=a(34793),g=a(372),u=a(85265),c=a(30329),p=a(21532),t=a(8387),l=a(13309),o=a(88796),i=a(89383),M=a(19832),m=a(97640),n=a(59245),r=a(89518),d=a(34984),s=a(94650);function T(I){return new M.w(I,"../assets/i18n/",".json")}let C=(()=>{class I{}return I.\u0275fac=function(y){return new(y||I)},I.\u0275mod=s.oAB({type:I}),I.\u0275inj=s.cJS({providers:[u.K],imports:[e.ez,p.x,v.Bz,c.D,m.a4,l.p,n.mr,h.u5,g.kn,o.A0,r.H3,t.H,i.aw.forChild({loader:{provide:i.Zw,useFactory:T,deps:[_.eN]}}),d.Ns.forRoot({echarts:()=>a.e(4734).then(a.bind(a,14734))})]}),I})()},23175:(A,O,a)=>{a.d(O,{w:()=>n});var e=a(94650),_=a(64870),h=a(34793),v=a(89383),g=a(36895),u=a(38231),c=a(24006),p=a(11194);function t(r,d){if(1&r&&e._UZ(0,"nz-option",12),2&r){const s=d.$implicit;e.Q6J("nzValue",s)("nzLabel",s)}}function l(r,d){if(1&r&&(e.TgZ(0,"h4"),e._uU(1),e.qZA()),2&r){const s=e.oxw(2);e.xp6(1),e.hij("Section ",null==s.layout?null:s.layout.section,"")}}function o(r,d){if(1&r&&e._UZ(0,"img",13),2&r){const s=e.oxw(2);e.Q6J("src",s.layout.layout,e.LSH)}}function i(r,d){if(1&r){const s=e.EpF();e.TgZ(0,"li")(1,"a",24),e.NdJ("click",function(){const I=e.CHM(s).index,x=e.oxw(3);return e.KtG(x.sectionIdx=I)}),e._uU(2),e.qZA()()}if(2&r){const s=d.index,T=e.oxw(3);e.xp6(1),e.Q6J("ngClass",s===T.sectionIdx?"m-datatable__pager-link--active":""),e.xp6(1),e.Oqu(s+1)}}function M(r,d){if(1&r){const s=e.EpF();e.TgZ(0,"ul",14)(1,"li")(2,"a",15),e.NdJ("click",function(){e.CHM(s);const C=e.oxw(2);return e.KtG(C.sectionIdx=0)}),e._UZ(3,"i",16),e.qZA()(),e.TgZ(4,"li")(5,"a",17),e.NdJ("click",function(){e.CHM(s);const C=e.oxw(2);return e.KtG(0!==C.sectionIdx&&(C.sectionIdx=C.sectionIdx-1))}),e._UZ(6,"i",18),e.qZA()(),e.YNc(7,i,3,2,"li",19),e.TgZ(8,"li")(9,"a",20),e.NdJ("click",function(){e.CHM(s);const C=e.oxw(2);return e.KtG(C.sectionIdx!==C.sections[C.level].length-1&&(C.sectionIdx=C.sectionIdx+1))}),e._UZ(10,"i",21),e.qZA()(),e.TgZ(11,"li")(12,"a",22),e.NdJ("click",function(){e.CHM(s);const C=e.oxw(2);return e.KtG(C.sectionIdx=C.sections[C.level].length-1)}),e._UZ(13,"i",23),e.qZA()()()}if(2&r){const s=e.oxw(2);e.xp6(2),e.Q6J("ngClass",0!==s.sectionIdx?"":"m-datatable__pager-link--disabled"),e.xp6(3),e.Q6J("ngClass",0!==s.sectionIdx?"":"m-datatable__pager-link--disabled"),e.xp6(2),e.Q6J("ngForOf",s.sections[s.level]),e.xp6(2),e.Q6J("ngClass",s.sectionIdx!==s.sections[s.level].length-1?"":"m-datatable__pager-link--disabled"),e.xp6(3),e.Q6J("ngClass",s.sectionIdx!==s.sections[s.level].length-1?"":"m-datatable__pager-link--disabled")}}function m(r,d){if(1&r){const s=e.EpF();e.ynx(0),e.TgZ(1,"div",2)(2,"div",3)(3,"label",4)(4,"span",5),e._uU(5,"*"),e.qZA(),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",6)(9,"nz-select",7),e.NdJ("ngModelChange",function(C){e.CHM(s);const I=e.oxw();return e.KtG(I.level=C)})("ngModelChange",function(){e.CHM(s);const C=e.oxw();return e.KtG(C.changeLevel())}),e.YNc(10,t,1,2,"nz-option",8),e.qZA()()(),e.YNc(11,l,2,1,"h4",0),e.YNc(12,o,1,1,"img",9),e.TgZ(13,"div",10),e.YNc(14,M,14,5,"ul",11),e.qZA()(),e.BQk()}if(2&r){const s=e.oxw();e.xp6(6),e.hij(" ",e.lcZ(7,6,"Level")," "),e.xp6(3),e.Q6J("ngModel",s.level),e.xp6(1),e.Q6J("ngForOf",s.levels),e.xp6(1),e.Q6J("ngIf",s.layout),e.xp6(1),e.Q6J("ngIf",s.layout),e.xp6(2),e.Q6J("ngIf",s.sections[s.level])}}let n=(()=>{class r{constructor(s,T,C){this.layoutService=s,this.route=T,this.translate=C,this.sections={}}set sectionIdx(s){this._sectionIdx=s,this.reloadData()}get sectionIdx(){return this._sectionIdx}ngOnInit(){this.layoutService.getList({carPark:this.parkId?this.parkId:this.route.parent.snapshot.paramMap.get("id")}).subscribe(s=>{this.layouts=s,s.forEach(T=>{this.sections[T.level]=this.sections[T.level]?[...this.sections[T.level],T.section]:[T.section]}),this.levels=Object.keys(this.sections),this.level=this.levels[0],this.sectionIdx=0})}changeLevel(){this.sectionIdx=0}reloadData(){this.layout=this.layouts.find(s=>s.level===this.level&&s.section===this.sections[this.level][this.sectionIdx])}}return r.\u0275fac=function(s){return new(s||r)(e.Y36(_.P),e.Y36(h.gz),e.Y36(v.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-carpark-vpgs"]],inputs:{parkId:"parkId"},decls:3,vars:3,consts:[[4,"ngIf"],[3,"allowActions","parkId"],[1,"m-datatable--default","m-datatable--brand","m-datatable--loaded"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-2"],[1,"m--font-danger"],[1,"col-3"],["name","level","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["style","width: 100%;",3,"src",4,"ngIf"],[1,"m-datatable__pager","m-datatable--paging-loaded","clearfix"],["class","m-datatable__pager-nav",4,"ngIf"],[3,"nzValue","nzLabel"],[2,"width","100%",3,"src"],[1,"m-datatable__pager-nav"],["title","First",1,"m-datatable__pager-link","m-datatable__pager-link--first",3,"ngClass","click"],[1,"la","la-angle-double-left"],["title","Previous",1,"m-datatable__pager-link","m-datatable__pager-link--prev",3,"ngClass","click"],[1,"la","la-angle-left"],[4,"ngFor","ngForOf"],["title","Next",1,"m-datatable__pager-link","m-datatable__pager-link--next",3,"ngClass","click"],[1,"la","la-angle-right"],["title","Last",1,"m-datatable__pager-link","m-datatable__pager-link--last",3,"ngClass","click"],[1,"la","la-angle-double-right"],[1,"m-datatable__pager-link","m-datatable__pager-link-number",3,"ngClass","click"]],template:function(s,T){1&s&&(e.YNc(0,m,15,8,"ng-container",0),e.TgZ(1,"div"),e._UZ(2,"app-slots-table",1),e.qZA()),2&s&&(e.Q6J("ngIf",T.layouts),e.xp6(2),e.Q6J("allowActions",!1)("parkId",T.parkId))},dependencies:[g.mk,g.sg,g.O5,u.Ip,u.Vq,c.JJ,c.On,p.E,v.X$],encapsulation:2}),r})()},8387:(A,O,a)=>{a.d(O,{H:()=>l});var e=a(36895),_=a(24006),h=a(34793),v=a(30329),g=a(80529),u=a(89383),c=a(19832),p=a(94650);function t(o){return new c.w(o,"../assets/i18n/",".json")}let l=(()=>{class o{}return o.\u0275fac=function(M){return new(M||o)},o.\u0275mod=p.oAB({type:o}),o.\u0275inj=p.cJS({imports:[e.ez,_.u5,h.Bz,v.D,u.aw.forChild({loader:{provide:u.Zw,useFactory:t,deps:[g.eN]}})]}),o})()},11194:(A,O,a)=>{a.d(O,{E:()=>J});var e=a(38014),_=a(79118),h=a(28555),v=a(8929),g=a(17489),p=(a(19612),a(52746)),t=a(94650),l=a(20388),o=a(85265),i=a(34793),M=a(36511),m=a(89383),n=a(36895),r=a(24006),d=a(11917),s=a(40269),T=a(38231),C=a(35635),I=a(66616),x=a(47044),y=a(21811);function R(D,L){if(1&D&&(t._UZ(0,"nz-option",18),t.ALo(1,"titlecase")),2&D){const E=L.$implicit;t.Q6J("nzValue",E.value)("nzLabel",t.lcZ(1,2,E.value))}}function W(D,L){if(1&D&&(t._UZ(0,"nz-option",18),t.ALo(1,"titlecase")),2&D){const E=L.$implicit;t.Q6J("nzValue",E)("nzLabel",t.lcZ(1,2,E))}}function Z(D,L){if(1&D&&(t._UZ(0,"nz-option",18),t.ALo(1,"titlecase")),2&D){const E=L.$implicit;t.Q6J("nzValue",E)("nzLabel",t.lcZ(1,2,E))}}function z(D,L){if(1&D&&t._uU(0),2&D){const E=L.range;t.lnq(" ",E[0],"-",E[1]," of ",L.$implicit," items\n")}}function b(D,L){if(1&D&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&D){const E=L.$implicit;t.xp6(1),t.Oqu(E.text)}}const k=function(D){return[D,"update"]};function N(D,L){if(1&D){const E=t.EpF();t.TgZ(0,"td")(1,"a",20),t._UZ(2,"i",21),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){t.CHM(E);const U=t.oxw().$implicit,f=t.oxw(),S=t.MAs(44);return t.KtG(f.openModal(S,U.id))}),t._UZ(4,"i",23),t.qZA()()}if(2&D){const E=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,k,"../"+E.id))}}function F(D,L){if(1&D&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"titlecase"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"titlecase"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"titlecase"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.YNc(18,N,5,3,"td",19),t.qZA()),2&D){const E=L.$implicit,P=L.index,U=t.oxw();t.ekj("ant-table-row-odd",P%2==1),t.xp6(2),t.Oqu(E.id),t.xp6(2),t.Oqu(E.code),t.xp6(2),t.Oqu(E.plot),t.xp6(2),t.Oqu(t.lcZ(9,10,E.reservationType)),t.xp6(3),t.Oqu(t.lcZ(12,12,E.status)),t.xp6(3),t.Oqu(t.lcZ(15,14,E.type)),t.xp6(3),t.Oqu(E.vehiclePlateNo),t.xp6(1),t.Q6J("ngIf",U.tableHeaders[7])}}function $(D,L){if(1&D){const E=t.EpF();t.TgZ(0,"confirm-modal",24),t.NdJ("cancel",function(){t.CHM(E);const U=t.oxw();return t.KtG(U.hideModal())})("submit",function(){t.CHM(E);const U=t.oxw();return t.KtG(U.deleteSlot())}),t.qZA()}if(2&D){const E=t.oxw();t.Q6J("options",E.deleteModalOptions)}}const K=[{text:"ID",width:"80px",align:_.iW.Center},{text:"Code",width:"80px"},{text:"Plot",width:"120px"},{text:"Reservation",width:"120px"},{text:"Status",width:"120px"},{text:"Type",width:"120px"},{text:"Vehicle Plate No",width:"150px"}];let J=(()=>{class D extends p.t{constructor(E,P,U,f,S,G,B){super(),this.modalService=E,this.slotService=P,this.router=U,this.route=f,this.codeTablesService=S,this.translate=G,this.store=B,this.allowActions=!0,this.deleteModalOptions={title:"Do you want to delete this slot?",message:"This can not be reverted"},this.vehicleType="",this.RESERVATION_TYPES=e.x5Q,this.reservationType="",this.SLOT_STATUSES=e.n$S,this.slotStatus="",this.keyword="",this.keyword$=new v.xQ,this.alive=!0,this.user$=B.pipe((0,h.Ys)("global"))}get filterParams(){return{carPark:this.carPark.id,type:this.vehicleType,reservationType:this.reservationType,status:this.slotStatus,keyword:this.keyword}}get carPark(){return this.parkId?this.parkId:{id:this.router.url.replace(/[^0-9]/gi,"")}}ngOnInit(){this.tableHeaders=this.allowActions?[...K,{text:"Action",width:"100px"}]:K,this.vehicleTypes$=this.codeTablesService.filterModelByType(e.BcL.VehicleType),this.keyword$.debounceTime(500).subscribe(()=>{this.reloadData()}),this.reloadData();const E=this.tableHeaders.map(P=>P.text);this.translate.get(E).subscribe(P=>{this.tableHeaders.forEach(U=>{for(let f in P)P.hasOwnProperty(f)&&U.text===f&&(U.text=P[f])})}),this.user$.takeWhile(()=>this.alive).subscribe(({user:P})=>{this.viewOnly=(0,g.intersection)([e.i44.ThirdParty,e.i44.Tester,e.i44.Auditor],P.authorities).length>0})}reloadData(){this.reloadDataService(this.slotService,"filterModelByCarPark")}pageChanged(E){this.pagination=E,this.reloadData()}openModal(E,P){this.selectedSlotId=P,this.modalRef=this.modalService.show(E,{class:"modal-dialog-centered"})}hideModal(){this.modalRef.hide()}deleteSlot(){this.slotService.deleteModel(this.selectedSlotId).subscribe(()=>{this.modalRef.hide(),this.reloadData()})}gotoCreate(){this.router.navigate([`${this.router.url}/create`])}}return D.\u0275fac=function(E){return new(E||D)(t.Y36(l.tT),t.Y36(o.K),t.Y36(i.F0),t.Y36(i.gz),t.Y36(M.I),t.Y36(m.sK),t.Y36(h.yh))},D.\u0275cmp=t.Xpm({type:D,selectors:[["app-slots-table"]],inputs:{allowActions:"allowActions",parkId:"parkId"},features:[t.qOj],decls:45,vars:32,consts:[[1,"form-group","m-form__group","m-portlet__filters"],[1,"m-portlet__filter"],[1,"col-form-label"],["name","vehicle","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["name","reservation","nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],["nzPlaceHolder","Please Select",2,"width","100%",3,"ngModel","ngModelChange"],[1,"m-input-icon","m-input-icon--left"],["type","text","nz-input","","placeholder","",3,"ngModel","ngModelChange"],[1,"m-portlet__filter",2,"margin-top","10px"],["nz-button","","nzType","primary","nzGhost","","nzShape","round",3,"disabled","click"],[1,"la","la-plus"],["rangeTemplate",""],[3,"nzData","nzFrontPagination","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzShowSizeChanger","nzShowTotal","nzQueryParams"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"ant-table-row-odd",4,"ngFor","ngForOf"],["deleteConfirm",""],[3,"nzValue","nzLabel"],[4,"ngIf"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"routerLink"],[1,"la","la-edit"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"click"],[1,"la","la-close"],[3,"options","cancel","submit"]],template:function(E,P){if(1&E&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div")(6,"nz-select",3),t.NdJ("ngModelChange",function(f){return P.vehicleType=f})("ngModelChange",function(){return P.reloadData()}),t.YNc(7,R,2,4,"nz-option",4),t.ALo(8,"async"),t.qZA()()(),t.TgZ(9,"div",1)(10,"label",2),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div")(14,"nz-select",5),t.NdJ("ngModelChange",function(f){return P.reservationType=f})("ngModelChange",function(){return P.reloadData()}),t.YNc(15,W,2,4,"nz-option",4),t.qZA()()(),t.TgZ(16,"div",1)(17,"label",2),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"div")(21,"nz-select",6),t.NdJ("ngModelChange",function(f){return P.slotStatus=f})("ngModelChange",function(){return P.reloadData()}),t.YNc(22,Z,2,4,"nz-option",4),t.qZA()()(),t.TgZ(23,"div",1)(24,"label",2),t._uU(25," Code / Plot / Vehicle Plate No. "),t.qZA(),t.TgZ(26,"div",7)(27,"input",8),t.NdJ("ngModelChange",function(f){return P.keyword=f})("ngModelChange",function(f){return P.keyword$.next(f)}),t.qZA()()(),t.TgZ(28,"div",9)(29,"button",10),t.NdJ("click",function(){return P.gotoCreate()}),t._UZ(30,"i",11),t.TgZ(31,"span"),t._uU(32),t.ALo(33,"translate"),t.qZA()()()(),t.YNc(34,z,1,3,"ng-template",null,12,t.W1O),t.TgZ(36,"nz-table",13,14),t.NdJ("nzQueryParams",function(f){return P.onQueryParamsChange(f)}),t.TgZ(38,"thead")(39,"tr"),t.YNc(40,b,2,1,"th",15),t.qZA()(),t.TgZ(41,"tbody"),t.YNc(42,F,19,16,"tr",16),t.qZA()(),t.YNc(43,$,1,1,"ng-template",null,17,t.W1O)),2&E){const U=t.MAs(35),f=t.MAs(37);t.xp6(3),t.hij(" ",t.lcZ(4,22,"Type"),": "),t.xp6(3),t.Q6J("ngModel",P.vehicleType),t.xp6(1),t.Q6J("ngForOf",t.lcZ(8,24,P.vehicleTypes$)),t.xp6(4),t.hij(" ",t.lcZ(12,26,"Reservation Type"),": "),t.xp6(3),t.Q6J("ngModel",P.reservationType),t.xp6(1),t.Q6J("ngForOf",P.RESERVATION_TYPES),t.xp6(3),t.hij(" ",t.lcZ(19,28,"Status"),": "),t.xp6(3),t.Q6J("ngModel",P.slotStatus),t.xp6(1),t.Q6J("ngForOf",P.SLOT_STATUSES),t.xp6(5),t.Q6J("ngModel",P.keyword),t.xp6(2),t.Q6J("disabled",P.viewOnly),t.xp6(3),t.hij(" ",t.lcZ(33,30,"Add New Slot")," "),t.xp6(4),t.Q6J("nzData",P.listData)("nzFrontPagination",!1)("nzLoading",P.loading)("nzTotal",P.pagination.totalCount)("nzPageSize",P.pagination.rowsPerPage)("nzPageIndex",P.pagination.page)("nzShowSizeChanger",!0)("nzShowTotal",U),t.xp6(4),t.Q6J("ngForOf",P.tableHeaders),t.xp6(2),t.Q6J("ngForOf",f.data)}},dependencies:[n.sg,n.O5,r.Fj,r.JJ,r.On,i.yS,d.X,s.N8,s.Uo,s._C,s.Om,s.p0,s.$Z,T.Ip,T.Vq,C.Zp,I.ix,x.w,y.dQ,n.Ov,n.rS,m.X$],encapsulation:2}),D})()},3108:(A,O,a)=>{a.d(O,{_:()=>l});var e=a(36895),_=a(24006),h=a(34793),v=a(30329),g=a(80529),u=a(89383),c=a(19832),p=a(94650);function t(o){return new c.w(o,"../assets/i18n/",".json")}let l=(()=>{class o{}return o.\u0275fac=function(M){return new(M||o)},o.\u0275mod=p.oAB({type:o}),o.\u0275inj=p.cJS({imports:[e.ez,_.u5,h.Bz,v.D,u.aw.forChild({loader:{provide:u.Zw,useFactory:t,deps:[g.eN]}})]}),o})()},13309:(A,O,a)=>{a.d(O,{p:()=>T});var e=a(36895),_=a(24006),h=a(34793),v=a(372),g=a(60097),u=a(4666),c=a(30329),p=a(21532),t=a(88796),l=a(59245),o=a(89518),i=a(36511),M=a(80529),m=a(89383),n=a(19832),r=a(29252),d=a(94650);function s(C){return new n.w(C,"../assets/i18n/",".json")}let T=(()=>{class C{}return C.\u0275fac=function(x){return new(x||C)},C.\u0275mod=d.oAB({type:C}),C.\u0275inj=d.cJS({providers:[u.p,g.x,i.I],imports:[e.ez,_.u5,h.Bz,p.x,c.D,v.kn,l.mr,t.A0,o.H3,r.E7,m.aw.forChild({loader:{provide:m.Zw,useFactory:s,deps:[M.eN]}})]}),C})()},15035:(A,O,a)=>{a.d(O,{W8:()=>u});var e=a(21837),_=(()=>((_||(_={})).Med="yyyy-LL-dd",_))();function u(c,p=_.Med){return c?e.ou.fromJSDate(c).toFormat(p):null}},7499:(A,O,a)=>{Object.defineProperty(O,"__esModule",{value:!0});var e=a(77415),_=a(67694);e.Observable.prototype.takeWhile=_.takeWhile},67694:(A,O,a)=>{Object.defineProperty(O,"__esModule",{value:!0});var e=a(41451);O.takeWhile=function _(h){return e.takeWhile(h)(this)}},19612:(A,O,a)=>{a(7499)}}]);