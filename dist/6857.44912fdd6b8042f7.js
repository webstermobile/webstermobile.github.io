"use strict";(self.webpackChunkst_admin=self.webpackChunkst_admin||[]).push([[6857],{75191:(S,f,n)=>{n.d(f,{B:()=>g,P:()=>d});var u=n(8929),o=n(591),e=n(94650),d=(()=>{return(_=d||(d={})).Season_Applications_Data="Season_Applications_Data",_.Billing_History_Detail_Data="Billing_History_Detail_Data",_.Detail_Depot_List_Data="Detail_Depot_List_Data",_.Detail_SEASON_GROUP="Detail_SEASON_GROUP",d;var _})();let g=(()=>{class _{constructor(){this.subject$||(this.subject$=new u.xQ),this.bSubject$||(this.bSubject$=new o.X(null))}getSubject(){return this.subject$.asObservable()}setSubject(b){this.subject$.next(b)}getBSubject(){return this.bSubject$.asObservable()}setBSubject(b){this.bSubject$.next(b)}resetBSubjcet(){this.bSubject$.next(null)}}return _.\u0275fac=function(b){return new(b||_)},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac}),_})()},42110:(S,f,n)=>{n.d(f,{l:()=>Z});var u=n(38014),o=n(75191),e=n(94650),d=n(34793),g=n(76284),_=n(11481),h=n(89383),b=n(60097),y=n(71942),A=n(70853),l=n(36895);function T(s,m){if(1&s&&(e.TgZ(0,"div",19)(1,"p",20),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"p",21),e._uU(5),e.qZA()()),2&s){const i=m.$implicit,c=e.oxw(2);e.xp6(1),e.Q6J("ngClass",i),e.xp6(1),e.Oqu(e.lcZ(3,3,c.detailData.lotsData[i])),e.xp6(3),e.Oqu(c.capitalFirst(i))}}function t(s,m){if(1&s&&(e.TgZ(0,"div",17),e.YNc(1,T,6,5,"div",18),e.qZA()),2&s){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.objectKeys(null==i.detailData?null:i.detailData.lotsData))}}function M(s,m){if(1&s&&(e.TgZ(0,"div",23)(1,"p",24),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"p",25),e._uU(5),e.qZA()()),2&s){const i=m.$implicit,c=e.oxw(2);e.xp6(1),e.Q6J("ngClass",i),e.xp6(1),e.Oqu(e.lcZ(3,3,c.detailData.chargers[i])),e.xp6(3),e.Oqu(c.capitalFirst(i))}}function O(s,m){if(1&s&&(e.TgZ(0,"div",17),e.YNc(1,M,6,5,"div",22),e.qZA()),2&s){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.objectKeys(null==i.detailData?null:i.detailData.chargers))}}function P(s,m){if(1&s&&(e.TgZ(0,"p",25),e._uU(1),e.qZA()),2&s){const i=e.oxw(3);e.xp6(1),e.Oqu(i.capacityLabels[0].text)}}function I(s,m){if(1&s&&(e.TgZ(0,"div",23)(1,"p",24),e._uU(2),e.ALo(3,"number"),e.qZA(),e.YNc(4,P,2,1,"p",26),e.qZA()),2&s){const i=m.$implicit,c=e.oxw(2);e.xp6(1),e.Q6J("ngClass",i),e.xp6(1),e.Oqu(e.lcZ(3,3,c.detailData.capacity[i])),e.xp6(2),e.Q6J("ngIf",c.capacityLabels)}}function D(s,m){if(1&s&&(e.TgZ(0,"div",17),e.YNc(1,I,5,5,"div",22),e.qZA()),2&s){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.objectKeys(null==i.detailData?null:i.detailData.capacity))}}let Z=(()=>{class s{constructor(i,c,C,k,L,E,U,B,R){this.router=i,this.assetsService=c,this.sanitizer=C,this.route=k,this.translate=L,this.carparkService=E,this.vehicleService=U,this.busService=B,this.bully=R,this.menuItems=[{text:'<i class="la la-wrench"></i>Settings',sub:"settings"},{text:'<i class="la la-columns"></i>Lots Management',sub:"lots"},{text:'<i class="iconfont icon-chongdianzhuang"></i>Stations Management',sub:"stations"},{text:'<i class="la la-usd"></i>Tariffs Management',sub:"tariffs"},{text:'<i class="la la-map"></i>Layouts Management',sub:"layouts"},{text:'<i class="la la-object-group"></i>Slots Management',sub:"slots"},{text:'<i class="la la-signal"></i>Live Status',sub:"live-status"}],this.subscription=[],this.objectKeys=Object.keys,this.capacityLabels=u.CFx}ngOnInit(){const i=this.bully.getBSubject().subscribe(c=>{if(c&&c.type===o.P.Detail_Depot_List_Data){const C=c.data;C.name=C.name.replace(/\b(?:carpark|car park)\b/gi,L=>"Depot"),this.item=C;const k=this.menuItems.map(L=>L.text.slice(L.text.indexOf("</i>")+4));this.translate.get(k).subscribe(L=>{console.log(L),this.menuItems.forEach(E=>{for(let U in L)if(L.hasOwnProperty(U)&&E.text.slice(E.text.indexOf("</i>")+4)===U){const B=L[U];E.text=E.text.replace(E.text.slice(E.text.indexOf("</i>")+4),B)}})})}});this.subscription.push(i),this.getData()}ngOnDestroy(){for(const i of this.subscription)i&&i.unsubscribe();this.subscription=[]}getData(){this.subscription.push(this.busService.getDepotDetail().subscribe(i=>{this.detailData=i}))}getNormalLots(i){return i.live?i.totalLots-i.live.availableLots-i.seasonLots:"-"}get isAdmin(){return this.carparkService.isAdmin()||this.busService.isBusAdmin()}get isOwner(){return this.carparkService.isOwner()}get isOperator(){return this.vehicleService.isOperator()}get notOwnerAndOperator(){return!(this.isOperator||this.isOwner||this.isAdmin)}capitalFirst(i){return`${i.charAt(0).toUpperCase()}${i.slice(1)}`}}return s.\u0275fac=function(i){return new(i||s)(e.Y36(d.F0),e.Y36(g.z),e.Y36(_.H7),e.Y36(d.gz),e.Y36(h.sK),e.Y36(b.x),e.Y36(y.f),e.Y36(A.Z),e.Y36(o.B))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-detail-depot"]],decls:32,vars:8,consts:[[1,"row","m-row--col-separator-sm"],[1,"col-md-3"],[1,"row"],[1,"avatar","size-md","m-rounded"],["alt","",3,"src"],[1,"col","m--padding-left-20"],[1,"m--font-boldest","m--margin-bottom-5","text-main"],[1,"text-muted"],[1,"text-muted","m--margin-top-10"],[1,"la","la-map-marker","m--margin-right-10"],[1,"la","la-clock-o","m--margin-right-10"],[1,"col-md-6","m-section"],[1,"col-6"],[1,"col-6","m--font-boldest"],["class","row lot-main text-center",4,"ngIf"],[1,"col-8","m--font-boldest"],[1,"col-8"],[1,"row","lot-main","text-center"],["class","col-4",4,"ngFor","ngForOf"],[1,"col-4"],[1,"lot-value",3,"ngClass"],[1,"lot-key"],["class","col-3",4,"ngFor","ngForOf"],[1,"col-3"],[1,"charger-value",3,"ngClass"],[1,"charger-key"],["class","charger-key",4,"ngIf"]],template:function(i,c){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"h5",6),e._uU(7),e.ALo(8,"titlecase"),e.qZA(),e.TgZ(9,"div",7),e._uU(10,"SBS"),e.qZA(),e.TgZ(11,"div",8)(12,"div"),e._UZ(13,"i",9),e._uU(14),e.qZA(),e.TgZ(15,"div"),e._UZ(16,"i",10),e._uU(17," Open Now "),e.qZA()()()()(),e.TgZ(18,"div",11)(19,"div",2)(20,"div",12)(21,"div",13),e._uU(22,"Lots Overview"),e.qZA(),e.YNc(23,t,2,1,"div",14),e.qZA(),e.TgZ(24,"div",12)(25,"div",15),e._uU(26,"Chargers and connectors"),e.qZA(),e.YNc(27,O,2,1,"div",14),e.qZA(),e.TgZ(28,"div",16)(29,"div",13),e._uU(30,"Capacity"),e.qZA(),e.YNc(31,D,2,1,"div",14),e.qZA()()()()),2&i&&(e.xp6(4),e.Q6J("src",null==c.item.images[0]?null:c.item.images[0].carParkImage,e.LSH),e.xp6(3),e.Oqu(e.lcZ(8,6,c.item.name)),e.xp6(7),e.hij(" ",null==c.item.address?null:c.item.address.address," "),e.xp6(9),e.Q6J("ngIf",c.detailData),e.xp6(4),e.Q6J("ngIf",c.detailData),e.xp6(4),e.Q6J("ngIf",c.detailData))},dependencies:[l.mk,l.sg,l.O5,l.JJ,l.rS],styles:[".lot-main[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}.lot-value[_ngcontent-%COMP%], .charger-value[_ngcontent-%COMP%]{font-size:26px;font-weight:600;margin-top:1rem}.available[_ngcontent-%COMP%]{color:#2fba6a}.charging[_ngcontent-%COMP%], .inUse[_ngcontent-%COMP%]{color:#01b1f0}.idle[_ngcontent-%COMP%]{color:#c56532}.occupied[_ngcontent-%COMP%]{color:#ff0405}"]}),s})()},62068:(S,f,n)=>{n.d(f,{L:()=>d});var u=n(94650),o=n(70853),e=n(11415);let d=(()=>{class g{constructor(h){this.busService=h,this.transactionData=[{text:"Total Lots",key:"totalLot"},{text:"Reserved Lots",key:"reservedLot"},{text:"Total Transactions",key:"totalTransaction"},{text:"Total Revenue",key:"totalRevenue"}],this.data={},this.objectKeys=Object.keys}ngOnInit(){this.reloadData()}reloadData(){this.busService.getDepotListData().subscribe(h=>{this.data=h.detail.transaction})}}return g.\u0275fac=function(h){return new(h||g)(u.Y36(o.Z))},g.\u0275cmp=u.Xpm({type:g,selectors:[["app-detail-transactions"]],decls:4,vars:2,consts:[[1,"row"],[1,"m-portlet","m-portlet--bordered-semi","m--padding-top-40"],[1,"m-portlet__body"],[3,"isExtended","isShowChart"]],template:function(h,b){1&h&&(u.TgZ(0,"div",0)(1,"div",1)(2,"div",2),u._UZ(3,"app-bus-transactions-table",3),u.qZA()()()),2&h&&(u.xp6(3),u.Q6J("isExtended",!0)("isShowChart",!1))},dependencies:[e.t]}),g})()},59533:(S,f,n)=>{n.d(f,{y:()=>e});var u=n(36895),o=n(94650);let e=(()=>{class d{}return d.\u0275fac=function(_){return new(_||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[u.ez]}),d})()},42743:(S,f,n)=>{n.d(f,{p:()=>e});var u=n(94650),o=n(34793);let e=(()=>{class d{constructor(){}}return d.\u0275fac=function(_){return new(_||d)},d.\u0275cmp=u.Xpm({type:d,selectors:[["app-carpark-home"]],decls:1,vars:0,template:function(_,h){1&_&&u._UZ(0,"router-outlet")},dependencies:[o.lC],encapsulation:2}),d})()},77417:(S,f,n)=>{n.d(f,{F:()=>I});var u=n(86181),o=n(94650),e=n(34793),d=n(60097),g=n(36895),_=n(76916),h=n(35635),b=n(66616),y=n(47044),A=n(21811),l=n(24006);function T(D,Z){1&D&&(o.TgZ(0,"div",29),o._uU(1," Field is required. "),o.qZA())}function t(D,Z){1&D&&(o.TgZ(0,"div",29),o._uU(1," Field is required. "),o.qZA())}function M(D,Z){1&D&&(o.TgZ(0,"div",29),o._uU(1," Field is required. "),o.qZA())}function O(D,Z){1&D&&(o.TgZ(0,"div",29),o._uU(1," Field is required. "),o.qZA())}function P(D,Z){1&D&&(o.TgZ(0,"div",29),o._uU(1," Field is required. "),o.qZA())}let I=(()=>{class D{constructor(s,m,i){this.router=s,this.carparkService=m,this.route=i,this.form={totalLots:0,handicappedLots:0,reservedLots:0,bookingLots:0,adhocLots:0}}submit(s){return s.valid&&this.carparkService.updateModel(this.item.id,{...this.item,...s}).subscribe(()=>this.cancel())}cancel(){this.router.navigate([`/${(0,u.pO)()}/`,this.item.id])}ngOnInit(){this.route.parent.data.subscribe(({item:s})=>{this.item=s})}}return D.\u0275fac=function(s){return new(s||D)(o.Y36(e.F0),o.Y36(d.x),o.Y36(e.gz))},D.\u0275cmp=o.Xpm({type:D,selectors:[["app-carpark-live-status"]],decls:62,vars:10,consts:[[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi"],[1,"m-portlet__body"],[1,"m-form","m-form--fit","m-form--label-align-right",3,"ngSubmit"],["formRef","ngForm"],[1,"m-portlet__head"],[1,"m-portlet__head-caption"],[1,"m-portlet__head-title"],[1,"m-portlet__head-text"],[1,"row","form-group","m-form__group"],[1,"col-form-label","col-lg-2","col-sm-12"],[1,"m--font-danger"],[1,"col-lg-4","col-sm-12"],["nz-input","","type","number","name","totalLots","required","",3,"ngModel","ngModelChange"],["totalLotsRef","ngModel"],["class","form-control-feedback",4,"ngIf"],["nz-input","","type","number","name","handicappedLots","required","",3,"ngModel","ngModelChange"],["handicappedLotsRef","ngModel"],["nz-input","","type","number","min","0","name","reservedLots","required","",3,"ngModel","ngModelChange"],["reservedLotsRef","ngModel"],["nz-input","","type","number","min","0","name","bookingLots","required","",3,"ngModel","ngModelChange"],["bookingLotsRef","ngModel"],["nz-input","","type","number","min","0","name","adhocLots","required","",3,"ngModel","ngModelChange"],["adhocLotsRef","ngModel"],[1,"m-form__actions","m-form__actions--right"],["nz-button","","nzType","primary","nzSize","large","nzGhost","","type","button",1,"btn-form-ops",3,"click"],[1,"la","la-arrow-left"],["nz-button","","nzType","primary","nzSize","large","type","submit",1,"btn-form-ops","m--margin-left-30"],[1,"form-control-feedback"]],template:function(s,m){if(1&s){const i=o.EpF();o.TgZ(0,"div",0),o._UZ(1,"app-title-bar"),o.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"form",4,5),o.NdJ("ngSubmit",function(){o.CHM(i);const C=o.MAs(6);return o.KtG(m.submit(C))}),o.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"h3",9),o._uU(11," Live Status "),o.qZA()()()(),o.TgZ(12,"div",3)(13,"div",10)(14,"label",11)(15,"span",12),o._uU(16,"*"),o.qZA(),o._uU(17," Total Lots "),o.qZA(),o.TgZ(18,"div",13)(19,"input",14,15),o.NdJ("ngModelChange",function(C){return m.form.totalLots=C}),o.qZA(),o.YNc(21,T,2,0,"div",16),o.qZA()(),o.TgZ(22,"div",10)(23,"label",11)(24,"span",12),o._uU(25,"*"),o.qZA(),o._uU(26," Handicapped Lots "),o.qZA(),o.TgZ(27,"div",13)(28,"input",17,18),o.NdJ("ngModelChange",function(C){return m.form.handicappedLots=C}),o.qZA(),o.YNc(30,t,2,0,"div",16),o.qZA(),o.TgZ(31,"label",11)(32,"span",12),o._uU(33,"*"),o.qZA(),o._uU(34," Reserved Lots "),o.qZA(),o.TgZ(35,"div",13)(36,"input",19,20),o.NdJ("ngModelChange",function(C){return m.form.reservedLots=C}),o.qZA(),o.YNc(38,M,2,0,"div",16),o.qZA()(),o.TgZ(39,"div",10)(40,"label",11)(41,"span",12),o._uU(42,"*"),o.qZA(),o._uU(43," Booking Lots "),o.qZA(),o.TgZ(44,"div",13)(45,"input",21,22),o.NdJ("ngModelChange",function(C){return m.form.bookingLots=C}),o.qZA(),o.YNc(47,O,2,0,"div",16),o.qZA(),o.TgZ(48,"label",11)(49,"span",12),o._uU(50,"*"),o.qZA(),o._uU(51," Adhoc Lots "),o.qZA(),o.TgZ(52,"div",13)(53,"input",23,24),o.NdJ("ngModelChange",function(C){return m.form.adhocLots=C}),o.qZA(),o.YNc(55,P,2,0,"div",16),o.qZA()()(),o.TgZ(56,"div",25)(57,"button",26),o.NdJ("click",function(){return m.cancel()}),o._UZ(58,"i",27),o._uU(59," Cancel "),o.qZA(),o.TgZ(60,"button",28),o._uU(61,"Submit"),o.qZA()()()()()()()}if(2&s){const i=o.MAs(6),c=o.MAs(20),C=o.MAs(29),k=o.MAs(37),L=o.MAs(46),E=o.MAs(54);o.xp6(19),o.Q6J("ngModel",m.form.totalLots),o.xp6(2),o.Q6J("ngIf",c.invalid&&(c.dirty||c.touched||i.submitted)),o.xp6(7),o.Q6J("ngModel",m.form.handicappedLots),o.xp6(2),o.Q6J("ngIf",C.invalid&&(C.dirty||C.touched||i.submitted)),o.xp6(6),o.Q6J("ngModel",m.form.reservedLots),o.xp6(2),o.Q6J("ngIf",k.invalid&&(k.dirty||k.touched||i.submitted)),o.xp6(7),o.Q6J("ngModel",m.form.bookingLots),o.xp6(2),o.Q6J("ngIf",L.invalid&&(L.dirty||L.touched||i.submitted)),o.xp6(6),o.Q6J("ngModel",m.form.adhocLots),o.xp6(2),o.Q6J("ngIf",E.invalid&&(E.dirty||E.touched||i.submitted))}},dependencies:[g.O5,_.G,h.Zp,b.ix,y.w,A.dQ,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.qQ,l.On,l.F],encapsulation:2}),D})()},47800:(S,f,n)=>{n.d(f,{S:()=>A});var u=n(38014),o=n(86181),e=n(94650),d=n(34793),g=n(60097),_=n(36895),h=n(76916),b=n(78735);function y(l,T){if(1&l){const t=e.EpF();e.TgZ(0,"div")(1,"div",1),e._UZ(2,"app-title-bar"),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"app-carpark-form-lots",5),e.NdJ("submitted",function(O){e.CHM(t);const P=e.oxw();return e.KtG(P.onSubmitted(O))})("canceled",function(O){e.CHM(t);const P=e.oxw();return e.KtG(P.onCanceled(O))}),e.qZA()()()()()()}if(2&l){const t=e.oxw();e.xp6(6),e.Q6J("form",t.form)}}let A=(()=>{class l{constructor(t,M,O){this.router=t,this.carparkService=M,this.route=O,this.breadcrumbs=[]}onSubmitted(t){this.carparkService.updateModel(this.item.id,{...this.item,...t}).subscribe(()=>this.onCanceled())}onCanceled(){this.router.navigate([`/${(0,o.pO)()}/`,this.item.id])}ngOnInit(){this.route.parent.data.subscribe(({item:t})=>{this.item=t,this.form=(0,u.fo4)(t)})}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(d.F0),e.Y36(g.x),e.Y36(d.gz))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-carpark-lots"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi"],[1,"m-portlet__body"],["submitText","Save","cancelText","Cancel",3,"form","submitted","canceled"]],template:function(t,M){1&t&&e.YNc(0,y,7,1,"div",0),2&t&&e.Q6J("ngIf",M.item)},dependencies:[_.O5,h.G,b.X],encapsulation:2}),l})()},74074:(S,f,n)=>{n.d(f,{_:()=>A});var u=n(48285),o=n(86181),e=n(94650),d=n(34793),g=n(60097),_=n(36895),h=n(76916),b=n(58650);function y(l,T){if(1&l){const t=e.EpF();e.TgZ(0,"div")(1,"div",1),e._UZ(2,"app-title-bar"),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"app-carpark-form-basic",5),e.NdJ("submitted",function(O){e.CHM(t);const P=e.oxw();return e.KtG(P.onSubmitted(O))})("canceled",function(O){e.CHM(t);const P=e.oxw();return e.KtG(P.onCanceled(O))}),e.qZA()()()()()()}if(2&l){const t=e.oxw();e.xp6(6),e.Q6J("form",t.form)}}let A=(()=>{class l{constructor(t,M,O){this.router=t,this.carparkService=M,this.route=O}onSubmitted(t){this.carparkService.updateModel(this.item.id,{...this.item,...t}).subscribe(()=>this.onCanceled())}onCanceled(){this.router.navigate([`/${(0,o.pO)()}/`,this.item.id])}ngOnInit(){this.route.parent.data.subscribe(({item:t})=>{this.item=t,this.form=(0,u.aq)(this.item)})}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(d.F0),e.Y36(g.x),e.Y36(d.gz))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-carpark-settings"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"body-wrapper"],[1,"m-content"],[1,"m-portlet","m-portlet--bordered-semi"],[1,"m-portlet__body"],["submitText","Save","cancelText","Cancel",3,"form","submitted","canceled"]],template:function(t,M){1&t&&e.YNc(0,y,7,1,"div",0),2&t&&e.Q6J("ngIf",M.item)},dependencies:[_.O5,h.G,b.y],encapsulation:2}),l})()},81538:(S,f,n)=>{n.d(f,{j:()=>T});var u=n(36895),_=(n(42743),n(74074),n(47800),n(77417),n(21532)),h=n(51013),b=n(24006),y=n(34793),A=n(94650);let T=(()=>{class t{}return t.\u0275fac=function(O){return new(O||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[u.ez,_.x,h.P,b.u5,y.Bz]}),t})()},66857:(S,f,n)=>{n.r(f),n.d(f,{CarParkResolver:()=>K,EvownerDepotModule:()=>xt,createTranslateLoader:()=>W,routes:()=>Y});var u=n(36895),o=n(24006),e=n(34793),d=n(372),g=n(36511),_=n(91599),h=n(64870),b=n(42684),y=n(85265),A=n(30329),l=n(21532),T=n(75191),t=n(94650),M=n(76284),O=n(11481),P=n(89383),I=n(60097),D=n(71942),Z=n(70853),s=n(76916),m=n(59245),i=n(90371);const c=function(r){return[r]};function C(r,v){if(1&r&&(t.TgZ(0,"li",43),t._UZ(1,"a",44),t.qZA()),2&r){const a=v.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,c,a.sub))("innerHTML",a.text,t.oJD)}}function k(r,v){if(1&r&&(t.TgZ(0,"ul",41),t.YNc(1,C,2,4,"li",42),t.qZA()),2&r){const a=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",a.menuItems)}}function L(r,v){1&r&&(t.TgZ(0,"div",37)(1,"button",38),t._UZ(2,"i",39),t.qZA(),t.YNc(3,k,2,1,"ul",40),t.qZA())}function E(r,v){if(1&r&&(t.TgZ(0,"app-title-bar"),t.YNc(1,L,4,0,"div",36),t.qZA()),2&r){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.isAdmin)}}function U(r,v){if(1&r&&(t.TgZ(0,"option",45),t._uU(1),t.qZA()),2&r){const a=v.$implicit;t.Q6J("value",a),t.xp6(1),t.hij(" ",a," ")}}function B(r,v){if(1&r&&(t.TgZ(0,"slide",46),t._UZ(1,"img",47),t.qZA()),2&r){const a=v.$implicit;t.xp6(1),t.Q6J("src",a,t.LSH)}}const R=function(){return["detail-depot"]},Q=function(){return["detail-transactions"]},j=function(){return["lot-status"]},z=function(r){return{"m-portlet__body--scrollable":r}};let H=(()=>{class r{constructor(a,p,x,N,w,Et,Zt,At,yt){this.router=a,this.assetsService=p,this.sanitizer=x,this.route=N,this.translate=w,this.carparkService=Et,this.vehicleService=Zt,this.busService=At,this.bully=yt,this.isLotOverview=!1,this.lotOverview=!1,this.lotLayout=!1,this.menuItems=[{text:'<i class="la la-wrench"></i>Settings',sub:"settings"},{text:'<i class="la la-columns"></i>Lots Management',sub:"lots"},{text:'<i class="iconfont icon-chongdianzhuang"></i>Stations Management',sub:"stations"},{text:'<i class="la la-usd"></i>Tariffs Management',sub:"tariffs"},{text:'<i class="la la-map"></i>Layouts Management',sub:"layouts"},{text:'<i class="la la-object-group"></i>Slots Management',sub:"slots"},{text:'<i class="la la-signal"></i>Live Status',sub:"live-status"}],this.listImages=["./assets/app/media/img/bg/depot_detail2.png"],this.depot="",this.depotList=[]}gotoLink(a){this.router.navigate(["carparks",this.item.id,a.sub])}ngOnInit(){this.route.data.subscribe(({item:a})=>{this.bully.setBSubject({type:T.P.Detail_Depot_List_Data,data:a})}),this.setHidden(),this.reloadData()}setHidden(){const a=this.router.url;this.isLotOverview=-1!==a.indexOf("bus-ev-dashboard"),this.lotOverview=-1!==a.indexOf("evowner-ev-dashboard"),this.lotLayout=-1!==a.indexOf("evowner-ev-lot-layout")}reloadData(){this.depotList=["Kranji","Seletar","Loyang"];for(let a=0;a<26;a++)this.depotList.push(`Car Park ${String.fromCharCode(65+a)}`)}getNormalLots(a){return a.live?a.totalLots-a.live.availableLots-a.seasonLots:"-"}get isAdmin(){return this.carparkService.isAdmin()||this.busService.isBusAdmin()}get isOwner(){return this.carparkService.isOwner()}get isOperator(){return this.vehicleService.isOperator()}get notOwnerAndOperator(){return!(this.isOperator||this.isOwner||this.isAdmin)}showScroll(){return-1!==this.router.url.indexOf("detail-transactions")}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(e.F0),t.Y36(M.z),t.Y36(O.H7),t.Y36(e.gz),t.Y36(P.sK),t.Y36(I.x),t.Y36(D.f),t.Y36(Z.Z),t.Y36(T.B))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-depot-detail"]],decls:66,vars:22,consts:[[1,"body-wrapper"],[4,"ngIf"],[1,"m-content"],[1,"m-portlet"],[1,"m-portlet__body"],[1,"m-portlet__body","m-portlet__body--scrollable"],[1,"m-portlet__frame",2,"overflow","hidden"],[1,"form-group","m-form__group","m-portlet__filters"],[1,"m-portlet__filter"],[1,"col-form-label"],["name","status",1,"form-control","m-input",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row"],[1,"col-9","mb-5"],[1,"depot-carousel-wrapper"],[1,"depot-carousel"],["class","mx-auto",4,"ngFor","ngForOf"],[1,"col-md-3","m-section","d-flex","align-items-end"],[2,"display","flex","font-size","12px","align-items","center","width","100%"],[2,"flex","1","display","flex"],[2,"background-color","#00b050","height","40px","width","40px"],[2,"background-color","#ff0000","height","40px","width","40px"],[2,"display","flex","flex-direction","column","justify-content","space-around"],[2,"margin","0 5px"],[2,"background-color","#00b0f0","height","40px","width","40px"],[2,"background-color","#00b050","height","80px","width","40px"],[1,"row","m-row--col-separator-sm"],[1,"m-portlet","m-portlet--tabs"],[1,"m-portlet__head"],[1,"m-portlet__head-tools"],["role","tablist",1,"nav","nav-tabs","m-tabs-line","m-tabs-line--primary","m-tabs-line--2x"],[1,"nav-item","m-tabs__item"],[1,"nav-link","m-tabs__link",3,"routerLink","routerLinkActive"],[1,"m-portlet__body",3,"ngClass"],[1,"m-portlet__frame"],["dropdown","","class","m-dropdown m-dropdown--inline",4,"ngIf"],["dropdown","",1,"m-dropdown","m-dropdown--inline"],["dropdownToggle","",1,"m-portlet__nav-link","btn","btn-lg","btn-outline-main","m-btn","m-btn--outline-2x","m-btn--air","m-btn--icon","m-btn--icon-only","m-btn--pill"],[1,"la","la-ellipsis-h"],["class","dropdown-menu dropdown-menu-right","role","menu",4,"dropdownMenu"],["role","menu",1,"dropdown-menu","dropdown-menu-right"],["role","menuitem",4,"ngFor","ngForOf"],["role","menuitem"],[1,"dropdown-item",3,"routerLink","innerHTML"],[3,"value"],[1,"mx-auto"],[1,"carousel-image-pic","w-100",3,"src"]],template:function(a,p){1&a&&(t.TgZ(0,"div",0),t.YNc(1,E,2,1,"app-title-bar",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"label",9),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div")(13,"select",10),t.NdJ("ngModelChange",function(N){return p.depot=N})("ngModelChange",function(){return p.reloadData()}),t.TgZ(14,"option",11),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.YNc(17,U,2,2,"option",12),t.qZA()()()()()(),t.TgZ(18,"div",13)(19,"div",14)(20,"div",15)(21,"carousel",16),t.YNc(22,B,2,1,"slide",17),t.qZA()()(),t.TgZ(23,"div",18)(24,"div",19)(25,"div",20)(26,"div"),t._UZ(27,"div",21)(28,"div",22),t.qZA(),t.TgZ(29,"div",23)(30,"div",24),t._uU(31,"Fully charged"),t.qZA(),t.TgZ(32,"div",24),t._uU(33,"lot not available"),t.qZA()()(),t.TgZ(34,"div",20)(35,"div"),t._UZ(36,"div",25)(37,"div",22),t.qZA(),t.TgZ(38,"div",23)(39,"div",24),t._uU(40,"Charging"),t.qZA(),t.TgZ(41,"div",24),t._uU(42,"lot not available"),t.qZA()()(),t.TgZ(43,"div",20)(44,"div"),t._UZ(45,"div",26),t.qZA(),t.TgZ(46,"div",23)(47,"div",24),t._uU(48,"lot and Charger available"),t.qZA()()()()()(),t._UZ(49,"div",27),t.qZA()(),t.TgZ(50,"div",28)(51,"div",29)(52,"div",30)(53,"ul",31)(54,"li",32)(55,"a",33),t._uU(56," CarPark Detail "),t.qZA()(),t.TgZ(57,"li",32)(58,"a",33),t._uU(59," Transactions History "),t.qZA()(),t.TgZ(60,"li",32)(61,"a",33),t._uU(62," Lot Status "),t.qZA()()()()(),t.TgZ(63,"div",34)(64,"div",35),t._UZ(65,"router-outlet"),t.qZA()()()()()),2&a&&(t.xp6(1),t.Q6J("ngIf",!p.isLotOverview),t.xp6(9),t.hij(" ",t.lcZ(11,13,"Car Park"),": "),t.xp6(3),t.Q6J("ngModel",p.depot),t.xp6(2),t.Oqu(t.lcZ(16,15,"All")),t.xp6(2),t.Q6J("ngForOf",p.depotList),t.xp6(5),t.Q6J("ngForOf",p.listImages),t.xp6(33),t.Q6J("routerLink",t.DdM(17,R))("routerLinkActive","active"),t.xp6(3),t.Q6J("routerLink",t.DdM(18,Q))("routerLinkActive","active"),t.xp6(3),t.Q6J("routerLink",t.DdM(19,j))("routerLinkActive","active"),t.xp6(2),t.Q6J("ngClass",t.VKq(20,z,p.showScroll())))},dependencies:[u.mk,u.sg,u.O5,e.lC,e.yS,e.Od,s.G,m.Hz,m.Mq,m.TO,o.YN,o.Kr,o.EJ,o.JJ,o.On,i.o6,i.Fy,P.X$],styles:[".btn-create[_ngcontent-%COMP%]{margin-left:auto;margin-top:auto;margin-bottom:auto}.header--stations[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:3rem;height:3rem;display:flex;justify-content:center;align-items:center}.header--stations[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-of-type){margin-left:1.5rem}.depot-carousel-wrapper[_ngcontent-%COMP%]{position:relative;width:890px;margin:0 auto}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]{position:relative}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]   .carousel-image-info[_ngcontent-%COMP%]{position:relative;width:60%;margin:0 auto}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]   .carousel-image-pic[_ngcontent-%COMP%]{position:relative;width:60%;margin:0 auto;margin-bottom:1rem}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]{position:relative;right:0;bottom:0;left:0;padding-top:10px;padding-bottom:50px}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .carousel-title[_ngcontent-%COMP%]{color:#666}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-indicators{top:101%!important}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-indicators li{background-color:#0000004d}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-indicators .active{background-color:#00000080}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-control-prev{left:3rem}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-control-next{right:3rem}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.depot-carousel-wrapper[_ngcontent-%COMP%]   .depot-carousel[_ngcontent-%COMP%]     .carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}"]}),r})();var $=n(38014),G=n(19848),J=n(64622);function X(r,v){if(1&r){const a=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"app-evc-ev-carpark",8),t.NdJ("parkSelect",function(x){t.CHM(a);const N=t.oxw(2);return t.KtG(N.parkSelect(x))}),t.qZA()()()()}if(2&r){const a=v.$implicit;t.xp6(3),t.Q6J("horizontal",!1)("data",a)}}function V(r,v){if(1&r&&(t.TgZ(0,"div",3),t.YNc(1,X,4,2,"div",4),t.qZA()),2&r){const a=t.oxw();t.xp6(1),t.Q6J("ngForOf",a.carparkDatas)}}function q(r,v){if(1&r){const a=t.EpF();t.ynx(0),t.TgZ(1,"div",9)(2,"button",10),t.NdJ("click",function(){t.CHM(a);const x=t.oxw();return t.KtG(x.closeRemoteBtn())}),t._UZ(3,"i",11),t.qZA()(),t._UZ(4,"app-evc-ev-remote",12),t.BQk()}if(2&r){const a=t.oxw();t.xp6(4),t.Q6J("inputData",a.currentCarparkData)}}const F=$.cqm;let tt=(()=>{class r{constructor(a,p){this.router=a,this.route=p,this.carparkDatas=[],this.currentCarparkData=null}ngOnInit(){for(let a in F.data){const p=F.data[a],x={deviceId:p[0].deviceId,stakeOwner:p[0].stakeOwner,carparkId:p[0].carparkId,carparkName:p[0].carparkName,carparkTotalPower:p[0].carparkTotalPower,deviceConnectorTotalPower:p[0].deviceConnectorTotalPower,carparkAvailablePower:p[0].carparkAvailablePower,enable:p[0].enable,connectorList:[]};p.forEach(N=>{N.connectorList.forEach(w=>{x.connectorList.push(w)})}),this.carparkDatas.push(x)}}closeRemoteBtn(){this.currentCarparkData=null}parkSelect(a){this.currentCarparkData=a}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(e.F0),t.Y36(e.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-ev-charger-zone"]],decls:3,vars:2,consts:[[1,"m-content"],["class","row",4,"ngIf"],[4,"ngIf"],[1,"row"],["class","m--padding-right-10 col-lg-6 ev-carpark-list",4,"ngFor","ngForOf"],[1,"m--padding-right-10","col-lg-6","ev-carpark-list"],[1,"m-portlet"],[1,"m-portlet__body"],[3,"horizontal","data","parkSelect"],[2,"text-align","right"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"click"],[1,"la","la-close"],[3,"inputData"]],template:function(a,p){1&a&&(t.TgZ(0,"div",0),t.YNc(1,V,2,1,"div",1),t.YNc(2,q,5,1,"ng-container",2),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",!p.currentCarparkData),t.xp6(1),t.Q6J("ngIf",p.currentCarparkData))},dependencies:[u.sg,u.O5,G.i,J.T],styles:["[_nghost-%COMP%]     .m-portlet .m-portlet__body{padding:1.1rem;position:relative}[_nghost-%COMP%]     .m-portlet .m-portlet__body .m-btn--icon.m-btn--custom.m-btn--icon-only{position:absolute;right:0;top:10px}.ev-carpark-list[_ngcontent-%COMP%]:nth-child(3n+1)   .m-portlet[_ngcontent-%COMP%]   .m-portlet__body[_ngcontent-%COMP%]{background-color:#f2f3f8}.ev-carpark-list[_ngcontent-%COMP%]:nth-child(3n+2)   .m-portlet[_ngcontent-%COMP%]   .m-portlet__body[_ngcontent-%COMP%]{background-color:#edeef5}.ev-carpark-list[_ngcontent-%COMP%]:nth-child(3n+0)   .m-portlet[_ngcontent-%COMP%]   .m-portlet__body[_ngcontent-%COMP%]{background-color:#f2e3eb}"]}),r})();var et=n(51013),ot=n(24277),nt=n(8387),at=n(33420),rt=n(88796),it=n(97640),st=n(89518),lt=n(72986),ct=n(80529),pt=n(19832),dt=n(90650);function ut(r,v){if(1&r&&(t.ynx(0),t.TgZ(1,"div",4)(2,"div",5)(3,"div",9)(4,"div",7)(5,"div",10),t._uU(6),t.qZA(),t.TgZ(7,"div",11),t._uU(8),t.qZA()()()()(),t.BQk()),2&r){const a=v.$implicit,p=t.oxw(2);t.xp6(6),t.hij(" ",a.text," "),t.xp6(2),t.hij(" ",p.data[a.key]," ")}}function mt(r,v){if(1&r){const a=t.EpF();t.TgZ(0,"div",2),t.YNc(1,ut,9,2,"ng-container",3),t.TgZ(2,"div",4)(3,"div",5)(4,"div",6),t.NdJ("click",function(){t.CHM(a);const x=t.oxw();return t.KtG(x.clickRomote())}),t.TgZ(5,"div",7)(6,"div",8),t._uU(7," Charger Remote Control "),t.qZA()()()()(),t.TgZ(8,"div",4)(9,"div",5)(10,"div",6),t.NdJ("click",function(){t.CHM(a);const x=t.oxw();return t.KtG(x.goToTransaction())}),t.TgZ(11,"div",7)(12,"div",8),t._uU(13," Lot Transaction History "),t.qZA()()()()()()}if(2&r){const a=t.oxw();t.xp6(1),t.Q6J("ngForOf",a.lotStatusData)}}function _t(r,v){if(1&r){const a=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"button",14),t.NdJ("click",function(){t.CHM(a);const x=t.oxw();return t.KtG(x.closeRemoteBtn())}),t._UZ(3,"i",15),t.qZA()(),t._UZ(4,"app-evc-ev-remote",16),t.qZA()}if(2&r){const a=t.oxw();t.xp6(4),t.Q6J("inputData",a.currentCarparkData)}}const vt={plot:{deviceNo:"201120175342QUDW",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},carPark:{deviceId:"201120175342QUDW",stakeOwner:null,carparkId:"1424",carparkName:null,carparkTotalPower:1e3,deviceConnectorTotalPower:0,carparkAvailablePower:1e3,enable:0,connectorList:[{deviceNo:"201120175342QUDW",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201120175342QUDW",connectorNo:"01",status:4,soc:null,activePower:null,parkNu:"L1002"},{deviceNo:"201124163254ITHV",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L1002"},{deviceNo:"201124163326ITRS",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124163401OVHT",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124163459YRWP",connectorNo:"01",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124163752QIEZ",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124163844ATMC",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124164128SZIL",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124164237YAMH",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201124164325RISM",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L1002"},{deviceNo:"201124164436DCBT",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L1002"},{deviceNo:"201124164612GBSK",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"201208140807OUXD",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L1002"},{deviceNo:"201208140807OUXD",connectorNo:"01",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"210331134330RDWA",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"210331141402QLLE",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:""},{deviceNo:"210401110948AZWF",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"210401113944LOEZ",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:null},{deviceNo:"stee-0001",connectorNo:"01",status:4,soc:null,activePower:null,parkNu:"L11001"},{deviceNo:"stee-0001",connectorNo:"00",status:4,soc:null,activePower:null,parkNu:"L11001"}]}};let gt=(()=>{class r{constructor(a,p){this.busService=a,this.router=p,this.currentCarparkData=null,this.lotStatusData=[{text:"Lot No.",key:"lotNo"},{text:"Vehicle No.",key:"vehicleNo"},{text:"Model",key:"model"},{text:"Charger Id",key:"chargerId"},{text:"Initial SOC%",key:"soc"},{text:"Real-time SOC%",key:"realTimeSoc"},{text:"Real-time Temperature(\u02daC)",key:"realTimeTemp"},{text:"Total Consumed(kWh)",key:"totalConsumedPower"},{text:"Total Energy Delivered Today(kWh)",key:"totalEnergyDelivered"},{text:"Total Successful Transactions",key:"totalSuccessTransaction"}],this.data={},this.objectKeys=Object.keys}ngOnInit(){this.reloadData()}reloadData(){this.busService.getDepotListData().subscribe(a=>{this.data=a.detail.lotStatus})}clickRomote(){this.currentCarparkData=vt}closeRemoteBtn(){this.currentCarparkData=null}goToTransaction(){const a=this.router.url.split("/");a.splice(-1,1,"detail-transactions"),this.router.navigate([a.join("/")])}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(Z.Z),t.Y36(e.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-lot-status"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],[3,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-sm-3","m--padding-left-10","m--padding-right-10","m--margin-bottom-20"],[1,"m-portlet","h-100","m--margin-bottom-20"],[1,"m-portlet__body","h-100","d-flex","align-items-center","button",3,"click"],[1,"card-statistics"],[1,""],[1,"m-portlet__body"],[1,"stats-title"],[1,"stats-value","text-main"],[1,"m-content"],[2,"text-align","right"],[1,"btn","btn-outline-primary","m-btn","m-btn--icon","m-btn--icon-only","m-btn--custom","m-btn--pill","no-border",3,"click"],[1,"la","la-close"],[3,"inputData"]],template:function(a,p){1&a&&(t.YNc(0,mt,14,1,"div",0),t.YNc(1,_t,5,1,"ng-template",1)),2&a&&(t.Q6J("ngIf",!p.currentCarparkData),t.xp6(1),t.Q6J("ngIf",p.currentCarparkData))},dependencies:[u.sg,u.O5,J.T],styles:[".m-content[_ngcontent-%COMP%]{width:100%}.button[_ngcontent-%COMP%]{background-color:#00bdb5;color:#fff;cursor:pointer}"]}),r})();var ht=n(40405),Ct=n(77417),ft=n(47800),Mt=n(74074),Ot=n(42110),Dt=n(62068),bt=n(42743),Tt=n(81538),Pt=n(59533),Lt=n(70362);function W(r){return new pt.w(r,"../assets/i18n/",".json")}let K=(()=>{class r{constructor(a){this.carparkService=a}resolve(a){return this.carparkService.getModel(a.params.id||201).pipe((0,lt.q)(1))}}return r.\u0275fac=function(a){return new(a||r)(t.LFG(I.x))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})();const Y=[{path:"",component:bt.p,resolve:{item:K},runGuardsAndResolvers:"always",children:[{path:"",component:H,children:[{path:"",redirectTo:"detail-transactions",pathMatch:"full"},{path:"transactions",component:dt.R,data:{breadcrumb:{label:"Transactions"}}},{path:"detail-transactions",component:Dt.L,data:{breadcrumb:{label:"Transactions"}}},{path:"ev-charger-zone",component:tt,data:{breadcrumb:{label:"Ev Charger Zone"}}},{path:"lot-status",component:gt,data:{breadcrumb:{label:"Lot Status"}}},{path:"detail-depot",component:Ot.l,data:{breadcrumb:{label:"Detail Depot"}}}]},{path:"settings",component:Mt._,data:{breadcrumb:{title:"Car Park Settings",label:"Car Park Settings"}}},{path:"lots",component:ft.S,data:{breadcrumb:{title:"Lots Management",label:"Lots Management"}}},{path:"live-status",component:Ct.F,data:{breadcrumb:{title:"Live Status",label:"Live Status"}}},{path:"tariffs",loadChildren:()=>n.e(5919).then(n.bind(n,32997)).then(r=>r.CarParkTariffModule),data:{breadcrumb:{title:"Tariffs Management",label:"Tariffs Management"}}},{path:"stations",loadChildren:()=>n.e(5724).then(n.bind(n,85724)).then(r=>r.CarParkStationModule),data:{breadcrumb:{title:"Stations Management",label:"Stations Management"}}},{path:"layouts",loadChildren:()=>n.e(3881).then(n.bind(n,63881)).then(r=>r.CarParkLayoutModule),data:{breadcrumb:{title:"Layouts Management",label:"Layouts Management"}}},{path:"slots",loadChildren:()=>Promise.resolve().then(n.bind(n,33420)).then(r=>r.CarParkSlotModule),data:{}}]}];let xt=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[_.k,b.e,K,h.P,at.SlotResolver,y.K,g.I,Z.Z,T.B],imports:[u.ez,e.Bz.forChild(Y),l.x,A.D,et.P,it.a4,m.mr,o.u5,d.kn,rt.A0,st.H3,nt.H,ot.p,Lt.X,ht.v,Tt.j,Pt.y,i.bB.forRoot(),P.aw.forChild({loader:{provide:P.Zw,useFactory:W,deps:[ct.eN]}}),e.Bz]}),r})()}}]);