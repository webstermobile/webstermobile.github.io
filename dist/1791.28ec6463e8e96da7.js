"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[1791],{4483:(y,m,n)=>{n.d(m,{y:()=>f}),n(38014);var o=n(3927),t=n(27221),d=n(26245),g=n(94650),_=n(80529),v=n(28555),E=n(91599);let f=(()=>{class l extends o.su{constructor(i,a,c){super(i,a),this.http=i,this.store=a,this.modelName="tenantManagement-ticket",this.baseUrl="carpark/api/card",this.handleError=c.createHandleError(`${this.modelName}Service`)}filterModel(i,a){const c=(0,d.U8)(`${this.baseUrl}/list`,{...i,...(0,d.jq)(a)});return this.get(this.getUrl(c)).pipe((0,t.K)(this.handleError(`${this.modelName}Filter`,{}))).map(r=>Array.isArray(r)?(0,o.eC)(r):(0,o.O7)(r))}getTicketDashboardData(i=""){let a=this.getUrl("carpark/api/card/statisticsStatus");return i&&(a+=`?tenantId=${i}`),this.get(a)}getTenantsDashboardData(i=""){let a=this.getUrl("carpark/api/tenant/statisticsStatus");return i&&(a+=`?tenantId=${i}`),this.get(a)}exportTemplate(){const i=this.getUrl("carpark/api/card/template");return this.get(i,{responseType:"blob"})}importTicket(i){const a=this.getUrl("carpark/api/card/importList");return this.post(a,i)}deleteTicket(i){const a=this.getUrl(`carpark/api/card/deleteByIdList?idList=${i}`);return this.delete(a)}stopUse(i){const a=this.getUrl(`carpark/api/card/deactivate/${i}`);return this.put(a,null)}lostHandle(i){const a=this.getUrl(`carpark/api/card/lost/${i}`);return this.put(a,null)}cancellostHandle(i){const a=this.getUrl(`carpark/api/card/cancelLost/${i}`);return this.put(a,null)}tenantList(){const i=this.getUrl("carpark/api/tenant/list");return this.get(i)}assignTicketToTenant(i){const a=this.getUrl("carpark/api/card/assignTenant");return this.put(a,i)}getTenantsInformation(){const i=this.getUrl("carpark/api/tenant/getMyTenant");return this.get(i)}getTenantDriver(i){const a=this.getUrl(`carpark/api/tenantDriver/getNoCardDriver?tenantId=${i}`);return this.get(a)}getCarsByDriverId(i){const a=this.getUrl(`carpark/api/drivers/${i}/vehicles`);return this.get(a)}postAssignTicket(i){const a=this.getUrl("carpark/api/card/assignDriver");return this.put(a,i)}getDeLinkTicket(i){const a=this.getUrl(`carpark/api/card/deLink/${i}`);return this.put(a,null)}getInfoByTenantDriverId(i){const a=this.getUrl(`carpark/api/tenantDriver/getTenantDriverById/${i}`);return this.get(a)}}return l.\u0275fac=function(i){return new(i||l)(g.LFG(_.eN),g.LFG(v.yh),g.LFG(E.k))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac}),l})()},76916:(y,m,n)=>{n.d(m,{G:()=>i});var u=n(34793),o=n(92198),t=n(94650),d=n(89383),g=n(60097),_=n(36895);function v(a,c){if(1&a&&(t.TgZ(0,"a",14)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&a){const r=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,r.label)," ")}}function E(a,c){if(1&a&&(t.TgZ(0,"a",16)(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&a){const r=t.oxw(),e=r.$implicit,s=r.last,h=t.oxw(2);t.Q6J("routerLink",e.url)("queryParams",s&&h.route.snapshot.queryParams),t.xp6(2),t.hij(" ",t.lcZ(3,3,e.label)," ")}}function f(a,c){if(1&a&&(t.ynx(0),t.TgZ(1,"li",10)(2,"span"),t._uU(3," > "),t.qZA()(),t.TgZ(4,"li",11),t.YNc(5,v,4,3,"a",12),t.YNc(6,E,4,5,"a",13),t.qZA(),t.BQk()),2&a){const r=c.first;t.xp6(5),t.Q6J("ngIf",r),t.xp6(1),t.Q6J("ngIf",!r)}}function l(a,c){if(1&a&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"h3",4),t.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),t._UZ(7,"i",8),t.qZA()(),t.YNc(8,f,7,2,"ng-container",9),t.qZA()(),t.TgZ(9,"div"),t.Hsn(10),t.qZA()()()),2&a){const r=t.oxw();t.xp6(3),t.Q6J("innerHTML",r.title,t.oJD),t.xp6(5),t.Q6J("ngForOf",r.breads)}}const p=["*"];let i=(()=>{class a{constructor(r,e,s,h){this.router=r,this.route=e,this.translate=s,this._carparkService=h,this.breads=[],this.loginUser=""}ngOnInit(){let r=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=r,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(s=>{this.label=s}),this.router.events.pipe((0,o.h)(s=>s instanceof u.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(r,e=[""],s=[]){const h=r.snapshot.url[0]&&r.snapshot.url[0].path,C=[...e,h],M={...this.extractBreadcrumb(r),url:C},L=h&&M.label?[...s,M]:s;return this.title=M.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===M.label&&(this.title="My Vehicle(s)"),r.firstChild?h?this.buildBreadCrumb(r.firstChild,C,L):this.buildBreadCrumb(r.firstChild,e,s):(this.translate.get(this.title).subscribe(O=>{this.title=O}),L)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(r){return r.snapshot.data.breadcrumb instanceof Function?r.snapshot.data.breadcrumb(r):r.snapshot.data.breadcrumb}}return a.\u0275fac=function(r){return new(r||a)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(d.sK),t.Y36(g.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-title-bar"]],ngContentSelectors:p,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(r,e){1&r&&(t.F$t(),t.YNc(0,l,11,2,"div",0)),2&r&&t.Q6J("ngIf","ROLE_TPO_PARTNER"!==e.loginUser)},dependencies:[_.sg,_.O5,u.yS,d.X$],encapsulation:2}),a})()},34984:(y,m,n)=>{n.d(m,{Ns:()=>a,_w:()=>i});var u=n(15861),o=n(94650),t=n(21086),d=n(68896),g=n(8929),_=n(20353),v=n(34202),E=n(66753),f=n(87545);class l{constructor(r){this.changes=r}static of(r){return new l(r)}notEmpty(r){if(this.changes[r]){const e=this.changes[r].currentValue;if(null!=e)return(0,t.of)(e)}return d.E}has(r){return this.changes[r]?(0,t.of)(this.changes[r].currentValue):d.E}notFirst(r){return this.changes[r]&&!this.changes[r].isFirstChange()?(0,t.of)(this.changes[r].currentValue):d.E}notFirstAndEmpty(r){if(this.changes[r]&&!this.changes[r].isFirstChange()){const e=this.changes[r].currentValue;if(null!=e)return(0,t.of)(e)}return d.E}}const p=new o.OlP("NGX_ECHARTS_CONFIG");let i=(()=>{class c{constructor(e,s,h){this.el=s,this.ngZone=h,this.autoResize=!0,this.loadingType="default",this.chartInit=new o.vpe,this.optionsError=new o.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new g.xQ,this.echarts=e.echarts}ngOnChanges(e){const s=l.of(e);s.notFirstAndEmpty("options").subscribe(h=>this.onOptionsChange(h)),s.notFirstAndEmpty("merge").subscribe(h=>this.setOption(h)),s.has("loading").subscribe(h=>this.toggleLoading(!!h)),s.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,E.p)(100,_.z,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart&&(e?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(e,s){if(this.chart)try{this.chart.setOption(e,s)}catch(h){console.error(h),this.optionsError.emit(h)}}refreshChart(){var e=this;return(0,u.Z)(function*(){e.dispose(),yield e.initChart()})()}createChart(){const e=this.el.nativeElement;if(window&&window.getComputedStyle){const s=window.getComputedStyle(e,null).getPropertyValue("height");(!s||"0px"===s)&&(!e.style.height||"0px"===e.style.height)&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:h})=>h(e,this.theme,this.initOpts)))}initChart(){var e=this;return(0,u.Z)(function*(){yield e.onOptionsChange(e.options),e.merge&&e.chart&&e.setOption(e.merge)})()}onOptionsChange(e){var s=this;return(0,u.Z)(function*(){!e||(s.chart||(s.chart=yield s.createChart(),s.chartInit.emit(s.chart)),s.setOption(s.options,!0))})()}createLazyEvent(e){return this.chartInit.pipe((0,f.w)(s=>new v.y(h=>(s.on(e,C=>this.ngZone.run(()=>h.next(C))),()=>{this.chart&&(this.chart.isDisposed()||s.off(e))}))))}}return c.\u0275fac=function(e){return new(e||c)(o.Y36(p),o.Y36(o.SBq),o.Y36(o.R0b))},c.\u0275dir=o.lG2({type:c,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[o.TTD]}),c})(),a=(()=>{class c{static forRoot(e){return{ngModule:c,providers:[{provide:p,useValue:e}]}}static forChild(){return{ngModule:c}}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({}),c})()}}]);