"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[8662],{76916:(O,p,n)=>{n.d(p,{G:()=>C});var l=n(34793),c=n(92198),e=n(94650),d=n(89383),f=n(60097),u=n(36895);function y(o,r){if(1&o&&(e.TgZ(0,"a",14)(1,"span",15),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&o){const a=e.oxw().$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,1,a.label)," ")}}function _(o,r){if(1&o&&(e.TgZ(0,"a",16)(1,"span",15),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&o){const a=e.oxw(),t=a.$implicit,i=a.last,s=e.oxw(2);e.Q6J("routerLink",t.url)("queryParams",i&&s.route.snapshot.queryParams),e.xp6(2),e.hij(" ",e.lcZ(3,3,t.label)," ")}}function E(o,r){if(1&o&&(e.ynx(0),e.TgZ(1,"li",10)(2,"span"),e._uU(3," > "),e.qZA()(),e.TgZ(4,"li",11),e.YNc(5,y,4,3,"a",12),e.YNc(6,_,4,5,"a",13),e.qZA(),e.BQk()),2&o){const a=r.first;e.xp6(5),e.Q6J("ngIf",a),e.xp6(1),e.Q6J("ngIf",!a)}}function m(o,r){if(1&o&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._UZ(3,"h3",4),e.TgZ(4,"ul",5)(5,"li",6)(6,"a",7),e._UZ(7,"i",8),e.qZA()(),e.YNc(8,E,7,2,"ng-container",9),e.qZA()(),e.TgZ(9,"div"),e.Hsn(10),e.qZA()()()),2&o){const a=e.oxw();e.xp6(3),e.Q6J("innerHTML",a.title,e.oJD),e.xp6(5),e.Q6J("ngForOf",a.breads)}}const v=["*"];let C=(()=>{class o{constructor(a,t,i,s){this.router=a,this.route=t,this.translate=i,this._carparkService=s,this.breads=[],this.loginUser=""}ngOnInit(){let a=JSON.parse(localStorage.getItem("user-roles"))[0];this.loginUser=a,console.log(this.loginUser,"\u4fe1\u606f"),this.breads=this.buildBreadCrumb(this.route.root),this.translate.get(this.breads[0].label).subscribe(i=>{this.label=i}),this.router.events.pipe((0,c.h)(i=>i instanceof l.m2)).subscribe(()=>{this.breads=this.buildBreadCrumb(this.route.root)})}buildBreadCrumb(a,t=[""],i=[]){const s=a.snapshot.url[0]&&a.snapshot.url[0].path,h=[...t,s],g={...this.extractBreadcrumb(a),url:h},b=s&&g.label?[...i,g]:i;return this.title=g.title||this.title||"",this.isMotorist&&"My Vehicle(s)"===g.label&&(this.title="My Vehicle(s)"),a.firstChild?s?this.buildBreadCrumb(a.firstChild,h,b):this.buildBreadCrumb(a.firstChild,t,i):(this.translate.get(this.title).subscribe(M=>{this.title=M}),b)}get isMotorist(){return this._carparkService.isMotorist()}extractBreadcrumb(a){return a.snapshot.data.breadcrumb instanceof Function?a.snapshot.data.breadcrumb(a):a.snapshot.data.breadcrumb}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(d.sK),e.Y36(f.x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-title-bar"]],ngContentSelectors:v,decls:1,vars:1,consts:[["class","m-subheader",4,"ngIf"],[1,"m-subheader"],[1,"d-flex","align-items-center"],[1,"mr-auto"],[1,"m-subheader__title","m-subheader__title--separator","text-main",3,"innerHTML"],[1,"m-subheader__breadcrumbs","m-nav","m-nav--inline"],[1,"m-nav__item","m-nav__item--home"],["routerLink","/",1,"m-nav__link","m-nav__link--icon"],[1,"m-nav__link-icon","la","la-home"],[4,"ngFor","ngForOf"],[1,"m-nav__separator"],[1,"m-nav__item"],["class","m-nav__link",4,"ngIf"],["class","m-nav__link",3,"routerLink","queryParams",4,"ngIf"],[1,"m-nav__link"],[1,"m-nav__link-text"],[1,"m-nav__link",3,"routerLink","queryParams"]],template:function(a,t){1&a&&(e.F$t(),e.YNc(0,m,11,2,"div",0)),2&a&&e.Q6J("ngIf","ROLE_TPO_PARTNER"!==t.loginUser)},dependencies:[u.sg,u.O5,l.yS,d.X$],encapsulation:2}),o})()},68662:(O,p,n)=>{n.r(p),n.d(p,{MaintenanceDashBroadModule:()=>t});var l=n(36895),c=n(14734),e=n(94650),d=n(76916);let f=(()=>{class i{constructor(){}ngOnInit(){this.initCharts()}initCharts(){const h=c;h.init(document.getElementById("mainbox")).setOption({title:{text:"Latest Active Incidents"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]}]}),h.init(document.getElementById("mainbox2")).setOption({tooltip:{trigger:"item"},title:{text:"Problems by category"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"A"},{value:735,name:"B"},{value:580,name:"C"},{value:484,name:"D"},{value:300,name:"E"}]}]}),h.init(document.getElementById("mainbox3")).setOption({tooltip:{trigger:"item"},title:{text:"Incidents by category"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"A"},{value:735,name:"B"},{value:580,name:"C"},{value:484,name:"D"},{value:300,name:"E"}]}]})}}return i.\u0275fac=function(h){return new(h||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["maintenance-dash-broad"]],decls:61,vars:6,consts:[[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet--tabs"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame"],[1,"row","col-sm-12"],[1,"col-sm-4","m--padding-left-10"],[1,"m-portlet","m--margin-bottom-20"],[1,"m-portlet__body"],[1,"card-statistics"],[1,"stats-title"],[1,"stats-value","text-f1"],["id","mainbox",1,"col-sm-6",2,"height","400px"],["id","mainbox2",1,"col-sm-3",2,"height","400px"],["id","mainbox3",1,"col-sm-3",2,"height","400px"]],template:function(h,g){1&h&&(e.TgZ(0,"div",0),e._UZ(1,"app-title-bar"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10),e._uU(12," New WSO "),e.qZA(),e.TgZ(13,"div",11),e._uU(14),e.qZA()()()()(),e.TgZ(15,"div",6)(16,"div",7)(17,"div",8)(18,"div",9)(19,"div",10),e._uU(20," WSO Closed "),e.qZA(),e.TgZ(21,"div",11),e._uU(22),e.qZA()()()()(),e.TgZ(23,"div",6)(24,"div",7)(25,"div",8)(26,"div",9)(27,"div",10),e._uU(28," New Problems "),e.qZA(),e.TgZ(29,"div",11),e._uU(30),e.qZA()()()()()(),e.TgZ(31,"div",5)(32,"div",6)(33,"div",7)(34,"div",8)(35,"div",9)(36,"div",10),e._uU(37," Devices "),e.qZA(),e.TgZ(38,"div",11),e._uU(39),e.qZA()()()()(),e.TgZ(40,"div",6)(41,"div",7)(42,"div",8)(43,"div",9)(44,"div",10),e._uU(45," Notable Alerts "),e.qZA(),e.TgZ(46,"div",11),e._uU(47),e.qZA()()()()(),e.TgZ(48,"div",6)(49,"div",7)(50,"div",8)(51,"div",9)(52,"div",10),e._uU(53," Remote Connection "),e.qZA(),e.TgZ(54,"div",11),e._uU(55),e.qZA()()()()()(),e.TgZ(56,"div",5),e._UZ(57,"div",12)(58,"div",13)(59,"div",14),e.qZA(),e._UZ(60,"div",5),e.qZA()()()()()),2&h&&(e.xp6(14),e.hij(" ",42," "),e.xp6(8),e.hij(" ",17," "),e.xp6(8),e.hij(" ",34," "),e.xp6(9),e.hij(" ",77," "),e.xp6(8),e.hij(" ",86," "),e.xp6(8),e.hij(" ",621," "))},dependencies:[d.G],styles:[".row[_ngcontent-%COMP%]{display:flex!important;justify-content:space-evenly!important}"]}),i})();var u=n(24006),y=n(34793),_=n(88796),E=n(59245),m=n(30329),v=n(372),C=n(59501),o=n(21532),r=n(34984);const a=[{path:"",component:C.f,children:[{path:"",component:f}]}];let t=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,o.x,y.Bz.forChild(a),_.A0,u.u5,u.UX,r.Ns.forRoot({echarts:()=>Promise.resolve().then(n.bind(n,14734))}),m.D,v.kn,E.mr]}),i})()},34984:(O,p,n)=>{n.d(p,{Ns:()=>o,_w:()=>C});var l=n(15861),c=n(94650),e=n(21086),d=n(68896),f=n(8929),u=n(20353),y=n(34202),_=n(66753),E=n(87545);class m{constructor(a){this.changes=a}static of(a){return new m(a)}notEmpty(a){if(this.changes[a]){const t=this.changes[a].currentValue;if(null!=t)return(0,e.of)(t)}return d.E}has(a){return this.changes[a]?(0,e.of)(this.changes[a].currentValue):d.E}notFirst(a){return this.changes[a]&&!this.changes[a].isFirstChange()?(0,e.of)(this.changes[a].currentValue):d.E}notFirstAndEmpty(a){if(this.changes[a]&&!this.changes[a].isFirstChange()){const t=this.changes[a].currentValue;if(null!=t)return(0,e.of)(t)}return d.E}}const v=new c.OlP("NGX_ECHARTS_CONFIG");let C=(()=>{class r{constructor(t,i,s){this.el=i,this.ngZone=s,this.autoResize=!0,this.loadingType="default",this.chartInit=new c.vpe,this.optionsError=new c.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new f.xQ,this.echarts=t.echarts}ngOnChanges(t){const i=m.of(t);i.notFirstAndEmpty("options").subscribe(s=>this.onOptionsChange(s)),i.notFirstAndEmpty("merge").subscribe(s=>this.setOption(s)),i.has("loading").subscribe(s=>this.toggleLoading(!!s)),i.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,_.p)(100,u.z,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(t){this.chart&&(t?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(t,i){if(this.chart)try{this.chart.setOption(t,i)}catch(s){console.error(s),this.optionsError.emit(s)}}refreshChart(){var t=this;return(0,l.Z)(function*(){t.dispose(),yield t.initChart()})()}createChart(){const t=this.el.nativeElement;if(window&&window.getComputedStyle){const i=window.getComputedStyle(t,null).getPropertyValue("height");(!i||"0px"===i)&&(!t.style.height||"0px"===t.style.height)&&(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:s})=>s(t,this.theme,this.initOpts)))}initChart(){var t=this;return(0,l.Z)(function*(){yield t.onOptionsChange(t.options),t.merge&&t.chart&&t.setOption(t.merge)})()}onOptionsChange(t){var i=this;return(0,l.Z)(function*(){!t||(i.chart||(i.chart=yield i.createChart(),i.chartInit.emit(i.chart)),i.setOption(i.options,!0))})()}createLazyEvent(t){return this.chartInit.pipe((0,E.w)(i=>new y.y(s=>(i.on(t,h=>this.ngZone.run(()=>s.next(h))),()=>{this.chart&&(this.chart.isDisposed()||i.off(t))}))))}}return r.\u0275fac=function(t){return new(t||r)(c.Y36(v),c.Y36(c.SBq),c.Y36(c.R0b))},r.\u0275dir=c.lG2({type:r,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[c.TTD]}),r})(),o=(()=>{class r{static forRoot(t){return{ngModule:r,providers:[{provide:v,useValue:t}]}}static forChild(){return{ngModule:r}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({}),r})()}}]);