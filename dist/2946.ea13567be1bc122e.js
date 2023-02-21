"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[2946],{77407:(_,p,n)=>{n.d(p,{B:()=>y});var g=n(65136),h=n(92340),l=n(94650),u=n(80529),v=n(28555),E=n(91599);let y=(()=>{class d extends g.b{constructor(t,a,i){super(t,a),this.http=t,this.store=a,this.baseUrl="carpark/api/dashboard-statistics",this.baseUrl02="batchservice/api/dashboard-statistics",this.baseUr3="carpark/api/evDashboard",this.handleError=i.createHandleError("StatisticService")}getOverallStatistics(t){const a=this.getUrl(`${this.baseUrl02}/overall-statistics`);return this.post(a,t)}getDurationStatistics(t){const a=this.getUrl(`${this.baseUrl02}/overall-statistics`);return this.post(a,t)}getFaultStatistics(t){const a=this.getUrl(`${this.baseUrl}/fault`);return this.post(a,t)}getOccupancyStatistics(t){const a=this.getUrl(`${this.baseUrl02}/occupancy`);return this.post(a,t)}getOccupancyPrediction(t){const a=this.getUrl(`${this.baseUrl}/occupancy-prediction`);return this.post(a,t)}getDailyOccupancyStatistics(t){const a=this.getUrl(`${this.baseUrl02}/occupancy-per-day`);return this.post(a,t)}getMaxNormalSeasonalLotsStatistics(t){const a=this.getUrl(`${this.baseUrl02}/max-normal-seasonal-slots`);return this.post(a,t)}getRevenueStatistics(t){const a=this.getUrl(`${this.baseUrl02}/revenue`);return this.post(a,t).map(i=>({carParkId:i.carParkId,carParkCode:i.carParkCode,carParkRevenue:i.carParkRevenue}))}getTransactionStatistics(t){const a=this.getUrl(`${this.baseUrl02}/transaction`);return this.post(a,t)}getVehicleTypeStatistics(t){const a=this.getUrl(`${this.baseUrl02}/overall-statistics`);return this.post(a,t)}dashboardGetData(){return this.get(`${h.N.apiHost}/scp-mg-report/report/report/getHomePageReport`)}getDashboardFlag(){return this.get(`${h.N.apiHost}/carpark/api/userDashboardConfig`)}putDashboardFlag(t){return this.put(`${h.N.apiHost}/carpark/api/userDashboardConfig`,t)}getTransactionsEnergyRevenue(t,a){const i=this.getUrl(`carpark/api/evDashboard/totalAnalysisTransactionsEnergyRevenue?endDate=${a}&startDate=${t}`);return this.get(i)}getChargersUpDown(t,a){const i=this.getUrl(`carpark/api/evDashboard/totalAnalysisChargersUpDown?endDate=${a}&startDate=${t}`);return this.get(i)}getConnectorsTotalAvailableInuseDown(t,a){const i=this.getUrl(`carpark/api/evDashboard/totalAnalysisConnectorsTotalAvailableInuseDown?endDate=${a}&startDate=${t}`);return this.get(i)}getgetAverageFirst(t,a){const i=this.getUrl(`carpark/api/evDashboard/averageAnalysisEnergyRevenueOfSession?endDate=${a}&startDate=${t}`);return this.get(i)}getevRevenueAnalysis(t,a){const i=this.getUrl(`carpark/api/evDashboard/evRevenueAnalysis?endDate=${a}&startDate=${t}`);return this.get(i)}top10CarparwithHighest(t,a){const i=this.getUrl(`carpark/api/evDashboard/top10CarParkWithHighestRevenue?endDate=${a}&startDate=${t}`);return this.get(i)}}return d.\u0275fac=function(t){return new(t||d)(l.LFG(u.eN),l.LFG(v.yh),l.LFG(E.k))},d.\u0275prov=l.Yz7({token:d,factory:d.\u0275fac}),d})()},34984:(_,p,n)=>{n.d(p,{Ns:()=>C,_w:()=>i});var g=n(15861),h=n(94650),l=n(21086),u=n(68896),v=n(8929),E=n(20353),y=n(34202),d=n(66753),D=n(87545);class t{constructor(r){this.changes=r}static of(r){return new t(r)}notEmpty(r){if(this.changes[r]){const e=this.changes[r].currentValue;if(null!=e)return(0,l.of)(e)}return u.E}has(r){return this.changes[r]?(0,l.of)(this.changes[r].currentValue):u.E}notFirst(r){return this.changes[r]&&!this.changes[r].isFirstChange()?(0,l.of)(this.changes[r].currentValue):u.E}notFirstAndEmpty(r){if(this.changes[r]&&!this.changes[r].isFirstChange()){const e=this.changes[r].currentValue;if(null!=e)return(0,l.of)(e)}return u.E}}const a=new h.OlP("NGX_ECHARTS_CONFIG");let i=(()=>{class c{constructor(e,s,o){this.el=s,this.ngZone=o,this.autoResize=!0,this.loadingType="default",this.chartInit=new h.vpe,this.optionsError=new h.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new v.xQ,this.echarts=e.echarts}ngOnChanges(e){const s=t.of(e);s.notFirstAndEmpty("options").subscribe(o=>this.onOptionsChange(o)),s.notFirstAndEmpty("merge").subscribe(o=>this.setOption(o)),s.has("loading").subscribe(o=>this.toggleLoading(!!o)),s.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,d.p)(100,E.z,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart&&(e?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(e,s){if(this.chart)try{this.chart.setOption(e,s)}catch(o){console.error(o),this.optionsError.emit(o)}}refreshChart(){var e=this;return(0,g.Z)(function*(){e.dispose(),yield e.initChart()})()}createChart(){const e=this.el.nativeElement;if(window&&window.getComputedStyle){const s=window.getComputedStyle(e,null).getPropertyValue("height");(!s||"0px"===s)&&(!e.style.height||"0px"===e.style.height)&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:o})=>o(e,this.theme,this.initOpts)))}initChart(){var e=this;return(0,g.Z)(function*(){yield e.onOptionsChange(e.options),e.merge&&e.chart&&e.setOption(e.merge)})()}onOptionsChange(e){var s=this;return(0,g.Z)(function*(){!e||(s.chart||(s.chart=yield s.createChart(),s.chartInit.emit(s.chart)),s.setOption(s.options,!0))})()}createLazyEvent(e){return this.chartInit.pipe((0,D.w)(s=>new y.y(o=>(s.on(e,m=>this.ngZone.run(()=>o.next(m))),()=>{this.chart&&(this.chart.isDisposed()||s.off(e))}))))}}return c.\u0275fac=function(e){return new(e||c)(h.Y36(a),h.Y36(h.SBq),h.Y36(h.R0b))},c.\u0275dir=h.lG2({type:c,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[h.TTD]}),c})(),C=(()=>{class c{static forRoot(e){return{ngModule:c,providers:[{provide:a,useValue:e}]}}static forChild(){return{ngModule:c}}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=h.oAB({type:c}),c.\u0275inj=h.cJS({}),c})()}}]);