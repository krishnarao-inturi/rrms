// Compiled by ClojureScript 0.0-2985 {}
goog.provide('rrms.corecljs');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('bouncer.validators');
goog.require('cljs_time.predicates');
goog.require('goog.net.XhrIo');
goog.require('bouncer.core');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('cljs_time.coerce');
goog.require('goog.array');
goog.require('goog.json.Serializer');
goog.require('cljs_time.format');
goog.require('clojure.string');
goog.require('goog.date.Date');
if(typeof rrms.corecljs.storage !== 'undefined'){
} else {
rrms.corecljs.storage = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1),new cljs.core.Keyword(null,"total-pages","total-pages",685894112),(1),new cljs.core.Keyword(null,"page-location","page-location",-49184773),null,new cljs.core.Keyword(null,"villages","villages",-304040479),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"user","user",1532431356),null], null));
}
rrms.corecljs.set_key_value = (function set_key_value(k,v){
return cljs.core.reset_BANG_.call(null,rrms.corecljs.storage,cljs.core.assoc.call(null,cljs.core.deref.call(null,rrms.corecljs.storage),k,v));
});
rrms.corecljs.http_get = (function http_get(url,callback){
return goog.net.XhrIo.send(url,callback);
});
rrms.corecljs.get_value_BANG_ = (function get_value_BANG_(k){
return k.call(null,cljs.core.deref.call(null,rrms.corecljs.storage));
});
rrms.corecljs.page = (function page(){
return rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773));
});
rrms.corecljs.getinputvalue = (function getinputvalue(id){
return document.getElementById(id).value;
});
rrms.corecljs.getdata = (function getdata(res){
return res.target.getResponseJson();
});
rrms.corecljs.get_status = (function get_status(res){
return res.target.getStatus();
});
rrms.corecljs.http_post = (function http_post(url,callback,data){
return goog.net.XhrIo.send(url,callback,"POST",data,(new goog.structs.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null)))));
});
rrms.corecljs.http_put = (function http_put(url,callback,data){
return goog.net.XhrIo.send(url,callback,"PUT",data,(new goog.structs.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null)))));
});
rrms.corecljs.http_delete = (function http_delete(url,callback){
return goog.net.XhrIo.send(url,callback,"DELETE",(new goog.structs.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null)))));
});
rrms.corecljs.login_validator = (function login_validator(data_set){
return cljs.core.first.call(null,bouncer.core.validate.call(null,data_set,new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.email,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid email-id"], null)], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid password"], null)], null)));
});
rrms.corecljs.input_element = (function input_element(id,ttype,data_set,placeholder,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),ttype,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,data_set).call(null,id),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__8160_SHARP_){
return cljs.core.swap_BANG_.call(null,data_set,cljs.core.assoc,id,p1__8160_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.reset_BANG_.call(null,in_focus,"on");
})], null)], null);
});
rrms.corecljs.login_input_element = (function login_input_element(id,label,span_class,ttype,data_set,placeholder,focus){
var input_focus = reagent.core.atom.call(null,null);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.col-sm-10","div.input-group.col-sm-10",1954575656),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),span_class], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.input_element,id,ttype,data_set,placeholder,input_focus], null)], null),(cljs.core.truth_((function (){var or__3967__auto__ = cljs.core.deref.call(null,input_focus);
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return cljs.core.deref.call(null,focus);
}
})())?((cljs.core._EQ_.call(null,null,rrms.corecljs.login_validator.call(null,cljs.core.deref.call(null,data_set))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str(cljs.core.first.call(null,rrms.corecljs.login_validator.call(null,cljs.core.deref.call(null,data_set)).call(null,id)))].join('')], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null)], null);
});
;})(input_focus))
});
rrms.corecljs.submit_login = (function submit_login(data_set,focus){
if(cljs.core._EQ_.call(null,null,rrms.corecljs.login_validator.call(null,cljs.core.deref.call(null,data_set)))){
var onresp = (function (json){
if(cljs.core._EQ_.call(null,rrms.corecljs.get_status.call(null,json),(200))){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"user","user",1532431356),rrms.corecljs.getdata.call(null,json)).call(null,secretary.core.dispatch_BANG_.call(null,"/documents"));
} else {
return null;
}
});
return rrms.corecljs.http_post.call(null,"http://localhost:8193/user/authenticate",onresp,(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data_set))));
} else {
return cljs.core.reset_BANG_.call(null,focus,"on");
}
});
rrms.corecljs.submit_button = (function submit_button(data_set,focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rrms.corecljs.submit_login.call(null,data_set,focus);
})], null),"Submit"], null)], null)], null);
});
rrms.corecljs.login = (function login(){
var my_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var focus = reagent.core.atom.call(null,null);
return ((function (my_data,focus){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary.modal-dialog","div.panel.panel-primary.modal-dialog",-2128555501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Log-in"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.login_input_element,new cljs.core.Keyword(null,"email","email",1415816706),"Email","input-group-addon glyphicon glyphicon-user","email",my_data,"Email",focus], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.login_input_element,new cljs.core.Keyword(null,"password","password",417022471),"Password","input-group-addon glyphicon glyphicon-lock","password",my_data,"password",focus], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.submit_button,my_data,focus], null)], null)], null)], null);
});
;})(my_data,focus))
});
rrms.corecljs.is_authenticated_QMARK_ = (function is_authenticated_QMARK_(){
return !((rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"user","user",1532431356)) == null));
});
rrms.corecljs.set_page_BANG_ = (function set_page_BANG_(currnt_page){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),currnt_page);
});
rrms.corecljs.get_total_rec_no = (function get_total_rec_no(nos){
var totrec = cljs.core.quot.call(null,nos,(10));
if((cljs.core.mod.call(null,nos,(10)) === (0))){
return totrec;
} else {
return ((1) + totrec);
}
});
rrms.corecljs.get_range_data = (function get_range_data(data,date1,date2){
return cljs.core.filter.call(null,(function (p1__8161_SHARP_){
return cljs_time.core.within_QMARK_.call(null,cljs_time.core.interval.call(null,date1,cljs_time.core.plus.call(null,date2,cljs_time.core.days.call(null,(1)))),cljs_time.coerce.from_string.call(null,p1__8161_SHARP_.date));
}),data);
});
rrms.corecljs.included_QMARK_ = (function included_QMARK_(s,subs){
return (s.indexOf(subs) >= (0));
});
rrms.corecljs.filter_by_str = (function filter_by_str(data,lstr){
return cljs.core.filter.call(null,(function (p1__8162_SHARP_){
return (rrms.corecljs.included_QMARK_.call(null,clojure.string.lower_case.call(null,p1__8162_SHARP_.title),lstr)) || (rrms.corecljs.included_QMARK_.call(null,clojure.string.lower_case.call(null,p1__8162_SHARP_.documentname),lstr));
}),data);
});
rrms.corecljs.filter_by_str_dates = (function() {
var filter_by_str_dates = null;
var filter_by_str_dates__3 = (function (data,lstr,date1){
return cljs.core.filter.call(null,(function (p1__8163_SHARP_){
var and__3955__auto__ = (rrms.corecljs.included_QMARK_.call(null,clojure.string.lower_case.call(null,p1__8163_SHARP_.title),lstr)) || (rrms.corecljs.included_QMARK_.call(null,clojure.string.lower_case.call(null,p1__8163_SHARP_.documentname),lstr));
if(and__3955__auto__){
return cljs_time.core._EQ_.call(null,cljs_time.coerce.from_string.call(null,p1__8163_SHARP_.date),date1);
} else {
return and__3955__auto__;
}
}),data);
});
var filter_by_str_dates__4 = (function (data,lstr,date1,date2){
return cljs.core.filter.call(null,(function (p1__8164_SHARP_){
var and__3955__auto__ = (rrms.corecljs.included_QMARK_.call(null,clojure.string.lower_case.call(null,p1__8164_SHARP_.title),lstr)) || (rrms.corecljs.included_QMARK_.call(null,clojure.string.lower_case.call(null,p1__8164_SHARP_.documentname),lstr));
if(and__3955__auto__){
return cljs_time.core.within_QMARK_.call(null,cljs_time.core.interval.call(null,date1,cljs_time.core.plus.call(null,date2,cljs_time.core.days.call(null,(1)))),cljs_time.coerce.from_string.call(null,p1__8164_SHARP_.date));
} else {
return and__3955__auto__;
}
}),data);
});
filter_by_str_dates = function(data,lstr,date1,date2){
switch(arguments.length){
case 3:
return filter_by_str_dates__3.call(this,data,lstr,date1);
case 4:
return filter_by_str_dates__4.call(this,data,lstr,date1,date2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_by_str_dates.cljs$core$IFn$_invoke$arity$3 = filter_by_str_dates__3;
filter_by_str_dates.cljs$core$IFn$_invoke$arity$4 = filter_by_str_dates__4;
return filter_by_str_dates;
})()
;
rrms.corecljs.get_new_page_data = (function get_new_page_data(data,current_page,total_pages){
console.log(total_pages);

var pag_start = ((10) * (current_page - (1)));
var pag_end = (pag_start + (9));
if((total_pages <= (1))){
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),(1));

return cljs.core.clj__GT_js.call(null,cljs.core.keep_indexed.call(null,((function (pag_start,pag_end){
return (function (p1__8165_SHARP_,p2__8166_SHARP_){
if((p1__8165_SHARP_ < (10))){
return p2__8166_SHARP_;
} else {
return null;
}
});})(pag_start,pag_end))
,data));
} else {
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),total_pages);

return cljs.core.clj__GT_js.call(null,cljs.core.keep_indexed.call(null,((function (pag_start,pag_end){
return (function (p1__8167_SHARP_,p2__8168_SHARP_){
if(((p1__8167_SHARP_ >= pag_start)) && ((p1__8167_SHARP_ <= pag_end))){
return p2__8168_SHARP_;
} else {
return null;
}
});})(pag_start,pag_end))
,data));

}
});
rrms.corecljs.url_format = (function url_format(url,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary  glyphicon glyphicon-plus"], null),title], null);
});
rrms.corecljs.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531));
rrms.corecljs.filter_data = (function filter_data(data,date1,date2,search_str){
var srcstrv = clojure.string.blank_QMARK_.call(null,search_str);
var lstr = clojure.string.lower_case.call(null,search_str);
if(cljs.core.truth_((function (){var and__3955__auto__ = !((date1 == null));
if(and__3955__auto__){
var and__3955__auto____$1 = (date2 == null);
if(and__3955__auto____$1){
return srcstrv;
} else {
return and__3955__auto____$1;
}
} else {
return and__3955__auto__;
}
})())){
return cljs.core.filter.call(null,((function (srcstrv,lstr){
return (function (p1__8169_SHARP_){
return cljs_time.core._EQ_.call(null,date1,cljs_time.coerce.from_string.call(null,p1__8169_SHARP_.date));
});})(srcstrv,lstr))
,data);
} else {
if(cljs.core.truth_((function (){var and__3955__auto__ = !((date1 == null));
if(and__3955__auto__){
var and__3955__auto____$1 = !((date2 == null));
if(and__3955__auto____$1){
return srcstrv;
} else {
return and__3955__auto____$1;
}
} else {
return and__3955__auto__;
}
})())){
return rrms.corecljs.get_range_data.call(null,data,date1,date2);
} else {
if(((date1 == null)) && ((date2 == null)) && (cljs.core.not.call(null,srcstrv))){
return rrms.corecljs.filter_by_str.call(null,data,lstr);
} else {
if((!((date1 == null))) && ((date2 == null)) && (cljs.core.not.call(null,srcstrv))){
return rrms.corecljs.filter_by_str_dates.call(null,data,lstr,date1);
} else {
return rrms.corecljs.filter_by_str_dates.call(null,data,lstr,date1,date2);

}
}
}
}
});
rrms.corecljs.pager_elem = reagent.core.adapt_react_class.call(null,(ReactBootstrap["Pagination"]));
rrms.corecljs.set_pager_data = (function set_pager_data(sel_page_no){
var onres = (function (json){
var dt = rrms.corecljs.getdata.call(null,json);
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),dt.data);

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),rrms.corecljs.get_total_rec_no.call(null,dt.pagesCount));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))], null));
});
return rrms.corecljs.http_get.call(null,[cljs.core.str("http://localhost:9000/mutations?pageIndex="),cljs.core.str((rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)) - (1))),cljs.core.str("&pageSize=10")].join(''),onres);
});
rrms.corecljs.pager = (function pager(value,total_rec){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.pager_elem,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onSelect","onSelect",251862405),new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),new cljs.core.Keyword(null,"bsSize","bsSize",1786511468),new cljs.core.Keyword(null,"maxButtons","maxButtons",-262255984),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"prev","prev",-1597069226),new cljs.core.Keyword(null,"activePage","activePage",1551610359),new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"last","last",1105735132)],[(function (s1,s2){
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),s2.eventKey);

return rrms.corecljs.set_pager_data.call(null,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)));
}),true,"large",(5),true,true,new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rrms.corecljs.storage)),true,new cljs.core.Keyword(null,"total-pages","total-pages",685894112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rrms.corecljs.storage)),true])], null);
});
rrms.corecljs.shared_state = (function shared_state(totalRec){
var val = reagent.core.atom.call(null,(1));
var trec = reagent.core.atom.call(null,totalRec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.pager,val,trec], null)], null);
});
rrms.corecljs.cancel = (function cancel(event){
return secretary.core.dispatch_BANG_.call(null,"/");
});
rrms.corecljs.search = (function search(event){
var dt1 = document.getElementById("dt1").value;
var dt2 = document.getElementById("dt2").value;
var dt = document.getElementById("dt").value;
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.clj__GT_js.call(null,rrms.corecljs.filter_data.call(null,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149)),cljs_time.coerce.from_string.call(null,dt1),cljs_time.coerce.from_string.call(null,dt2),dt)));

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_new_page_data.call(null,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149)),rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)))], null));
});
rrms.corecljs.form_validator = (function form_validator(data_set){
return cljs.core.first.call(null,bouncer.core.validate.call(null,data_set,new cljs.core.Keyword(null,"mutationnumber","mutationnumber",-531286185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Document Name"], null)], null),new cljs.core.Keyword(null,"nameofthefirstparty","nameofthefirstparty",724913713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Title"], null)], null),new cljs.core.Keyword(null,"nameofthesecondparty","nameofthesecondparty",153545411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Employee name"], null)], null),new cljs.core.Keyword(null,"dateofinstitution","dateofinstitution",-1389262443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.datetime,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Date"], null)], null),new cljs.core.Keyword(null,"nameofpo","nameofpo",649845769),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"dateofdecision","dateofdecision",-13671298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.datetime,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Date"], null)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"khasranumber","khasranumber",-1695102878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"subdivisionname","subdivisionname",-1005995784),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"villageid","villageid",1484658741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"o2number","o2number",-866619826),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"o4number","o4number",-433839786),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"o6number","o6number",1408324203),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"racknumber","racknumber",-1177459083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null),new cljs.core.Keyword(null,"receiveddate","receiveddate",615054197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.datetime,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Date"], null)], null),new cljs.core.Keyword(null,"remarks","remarks",1566599360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid Location"], null)], null)));
});
rrms.corecljs.form_input_element = (function form_input_element(id,label,ttype,data_set,focus){
var input_focus = reagent.core.atom.call(null,null);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.input_element,id,ttype,data_set,label,input_focus], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),(cljs.core.truth_((function (){var or__3967__auto__ = cljs.core.deref.call(null,input_focus);
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return cljs.core.deref.call(null,focus);
}
})())?((cljs.core._EQ_.call(null,null,rrms.corecljs.form_validator.call(null,cljs.core.deref.call(null,data_set))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str(cljs.core.first.call(null,rrms.corecljs.form_validator.call(null,cljs.core.deref.call(null,data_set)).call(null,id)))].join('')], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null)], null)], null)], null);
});
;})(input_focus))
});
rrms.corecljs.button = (function button(value,fun){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),fun], null),value], null);
});
rrms.corecljs.add_form_onclick = (function add_form_onclick(data_set,focus){
cljs.core.reset_BANG_.call(null,data_set,cljs.core.assoc.call(null,cljs.core.deref.call(null,data_set),new cljs.core.Keyword(null,"villageid","villageid",1484658741),(document.getElementById("districts").value | (0))));

var onres_8170 = (function (json){
return secretary.core.dispatch_BANG_.call(null,"/");
});
rrms.corecljs.http_post.call(null,"http://localhost:9000/mutations",onres_8170,(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data_set))));

return cljs.core.reset_BANG_.call(null,focus,"on");
});
rrms.corecljs.update_form_onclick = (function update_form_onclick(data_set,focus){
var onres = (function (data){
return secretary.core.dispatch_BANG_.call(null,"/");
});
return rrms.corecljs.http_put.call(null,[cljs.core.str("http://localhost:9000/mutations/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_set)))].join(''),onres,(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,data_set))));
});
rrms.corecljs.form_cancel = (function form_cancel(event){
return secretary.core.dispatch_BANG_.call(null,"/");
});
rrms.corecljs.on_change = (function on_change(event){
var ele = document.getElementById("id");
var eval = ele.value;
var onresp = ((function (ele,eval){
return (function (json){
var dt = rrms.corecljs.getdata.call(null,json);
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),dt);
});})(ele,eval))
;
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),cljs.core.PersistentVector.EMPTY);

if(((1) > eval.length)){
return null;
} else {
return rrms.corecljs.http_get.call(null,[cljs.core.str("http://localhost:9000/villages/search?name="),cljs.core.str(eval)].join(''),onresp);
}
});
rrms.corecljs.input = (function input(label,type,id){
return rrms.corecljs.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),rrms.corecljs.on_change], null)], null));
});
rrms.corecljs.get_villages = (function get_villages(){
var onres = (function (json){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),rrms.corecljs.getdata.call(null,json)).call(null);
});
return rrms.corecljs.http_get.call(null,"http://localhost:9000/villages",onres);
});
rrms.corecljs.tags_template = (function tags_template(data_set){
if((cljs.core.deref.call(null,data_set) == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"districts"], null),(function (){var iter__4723__auto__ = (function iter__8179(s__8180){
return (new cljs.core.LazySeq(null,(function (){
var s__8180__$1 = s__8180;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8180__$1);
if(temp__4425__auto__){
var s__8180__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8180__$2)){
var c__4721__auto__ = cljs.core.chunk_first.call(null,s__8180__$2);
var size__4722__auto__ = cljs.core.count.call(null,c__4721__auto__);
var b__8182 = cljs.core.chunk_buffer.call(null,size__4722__auto__);
if((function (){var i__8181 = (0);
while(true){
if((i__8181 < size__4722__auto__)){
var d = cljs.core._nth.call(null,c__4721__auto__,i__8181);
cljs.core.chunk_append.call(null,b__8182,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),d.id], null),d.villagename], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),d.id], null)));

var G__8187 = (i__8181 + (1));
i__8181 = G__8187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8182),iter__8179.call(null,cljs.core.chunk_rest.call(null,s__8180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8182),null);
}
} else {
var d = cljs.core.first.call(null,s__8180__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),d.id], null),d.villagename], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),d.id], null)),iter__8179.call(null,cljs.core.rest.call(null,s__8180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4723__auto__.call(null,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479)));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"districts"], null),(function (){var iter__4723__auto__ = (function iter__8183(s__8184){
return (new cljs.core.LazySeq(null,(function (){
var s__8184__$1 = s__8184;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8184__$1);
if(temp__4425__auto__){
var s__8184__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8184__$2)){
var c__4721__auto__ = cljs.core.chunk_first.call(null,s__8184__$2);
var size__4722__auto__ = cljs.core.count.call(null,c__4721__auto__);
var b__8186 = cljs.core.chunk_buffer.call(null,size__4722__auto__);
if((function (){var i__8185 = (0);
while(true){
if((i__8185 < size__4722__auto__)){
var d = cljs.core._nth.call(null,c__4721__auto__,i__8185);
cljs.core.chunk_append.call(null,b__8186,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,data_set).id,d.id))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),d.id,new cljs.core.Keyword(null,"selected","selected",574897764),true], null),d.villagename], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),d.id], null),d.villagename], null)));

var G__8188 = (i__8185 + (1));
i__8185 = G__8188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8186),iter__8183.call(null,cljs.core.chunk_rest.call(null,s__8184__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8186),null);
}
} else {
var d = cljs.core.first.call(null,s__8184__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,data_set).id,d.id))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),d.id,new cljs.core.Keyword(null,"selected","selected",574897764),true], null),d.villagename], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),d.id], null),d.villagename], null)),iter__8183.call(null,cljs.core.rest.call(null,s__8184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4723__auto__.call(null,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479)));
})()], null);
}
});
rrms.corecljs.mutation_template = (function mutation_template(doc_name,data_set,focus,save_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary.model-dialog","div.panel.panel-primary.model-dialog",1028714197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),doc_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-boby","div.panel-boby",26381404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"mutationnumber","mutationnumber",-531286185),"mutationnumber","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"nameofthefirstparty","nameofthefirstparty",724913713),"nameofthefirstparty","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"nameofthesecondparty","nameofthesecondparty",153545411),"nameofthesecondparty","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"dateofinstitution","dateofinstitution",-1389262443),"dateofinstitution","date",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"nameofpo","nameofpo",649845769),"nameofpo","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"dateofdecision","dateofdecision",-13671298),"dateofdecision","date",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"title","title",636505583),"title","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"khasranumber","khasranumber",-1695102878),"khasranumber","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"area","area",472007256),"area","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"khatakhatuninumber","khatakhatuninumber",-1885945379),"khatakhatuninumber","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"subdivisionname","subdivisionname",-1005995784),"subdivisionname","text",data_set,focus], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"villagename"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#tagdiv","div#tagdiv",-2086747738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.tags_template,data_set], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"o2number","o2number",-866619826),"o2number","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"o4number","o4number",-433839786),"o4number","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"o6number","o6number",1408324203),"o6number","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"racknumber","racknumber",-1177459083),"racknumber","text",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"receiveddate","receiveddate",615054197),"receiveddate","date",data_set,focus], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.form_input_element,new cljs.core.Keyword(null,"remarks","remarks",1566599360),"remarks","text",data_set,focus], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.button,"Save",save_function], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.button,"cancel",rrms.corecljs.form_cancel], null)], null)], null)], null)], null)], null);
});
rrms.corecljs.mutation_add_template = (function mutation_add_template(){
var add_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isactive","isactive",-1343645553),true], null));
var focus = reagent.core.atom.call(null,null);
return ((function (add_data,focus){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.mutation_template,"Mutation",add_data,focus,((function (add_data,focus){
return (function (){
return rrms.corecljs.add_form_onclick.call(null,add_data,focus);
});})(add_data,focus))
], null);
});
;})(add_data,focus))
});
rrms.corecljs.mutation_update_template = (function mutation_update_template(id,dmt){
var update_data = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remarks","remarks",1566599360),new cljs.core.Keyword(null,"khasranumber","khasranumber",-1695102878),new cljs.core.Keyword(null,"nameofthesecondparty","nameofthesecondparty",153545411),new cljs.core.Keyword(null,"nameofpo","nameofpo",649845769),new cljs.core.Keyword(null,"o6number","o6number",1408324203),new cljs.core.Keyword(null,"villagename","villagename",530021325),new cljs.core.Keyword(null,"o2number","o2number",-866619826),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"districtname","districtname",1845208560),new cljs.core.Keyword(null,"nameofthefirstparty","nameofthefirstparty",724913713),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"villageid","villageid",1484658741),new cljs.core.Keyword(null,"dateofinstitution","dateofinstitution",-1389262443),new cljs.core.Keyword(null,"racknumber","racknumber",-1177459083),new cljs.core.Keyword(null,"receiveddate","receiveddate",615054197),new cljs.core.Keyword(null,"o4number","o4number",-433839786),new cljs.core.Keyword(null,"mutationnumber","mutationnumber",-531286185),new cljs.core.Keyword(null,"subdivisionname","subdivisionname",-1005995784),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"khatakhatuninumber","khatakhatuninumber",-1885945379),new cljs.core.Keyword(null,"dateofdecision","dateofdecision",-13671298)],[dmt.remarks,dmt.khasranumber,dmt.nameofthesecondparty,dmt.nameofpo,dmt.o6number,dmt.villagename,dmt.o2number,dmt.title,dmt.districtname,dmt.nameofthefirstparty,(id | (0)),dmt.villageid,dmt.dateofinstitution,dmt.racknumber,dmt.receiveddate,dmt.o4number,dmt.mutationnumber,dmt.subdivisionname,dmt.area,dmt.khasranumber,dmt.dateofdecision]));
var focus = reagent.core.atom.call(null,null);
return ((function (update_data,focus){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.mutation_template,"Update Mutations",update_data,focus,((function (update_data,focus){
return (function (){
return rrms.corecljs.update_form_onclick.call(null,update_data,focus);
});})(update_data,focus))
], null);
});
;})(update_data,focus))
});
rrms.corecljs.click_update = (function click_update(id){
return secretary.core.dispatch_BANG_.call(null,[cljs.core.str("/mutations/update/"),cljs.core.str(id)].join(''));
});
rrms.corecljs.delete$ = (function delete$(id){
var onres = (function (json){
return secretary.core.dispatch_BANG_.call(null,"/");
});
return rrms.corecljs.http_delete.call(null,[cljs.core.str("http://localhost:9000/mutations/"),cljs.core.str(id)].join(''),onres);
});
rrms.corecljs.add = (function add(event){
return secretary.core.dispatch_BANG_.call(null,"/mutations/add");
});
rrms.corecljs.get_all_click = (function get_all_click(event){
var onres = (function (json){
var mt = rrms.corecljs.getdata.call(null,json);
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),mt);

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"pagesCount","pagesCount",-1076869574),rrms.corecljs.get_total_rec_no.call(null,mt));

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_new_page_data.call(null,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149)),rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)))], null));
});
return rrms.corecljs.http_get.call(null,"http://localhost:9000/mutations?pageIndex=0&pageSize=10",onres);
});
rrms.corecljs.render_mutations = (function render_mutations(mutations){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#add","div#add",-2124044919)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#update","div#update",-623624071)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"box"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"box-header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"List of Documents"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"dt1",new cljs.core.Keyword(null,"type","type",1174270348),"date"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"dt2",new cljs.core.Keyword(null,"type","type",1174270348),"date"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"dt",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter search text.."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Search",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rrms.corecljs.search], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rrms.corecljs.add], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"getall",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Refresh",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rrms.corecljs.get_all_click], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"box-body"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-bordered table-striped dataTable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"MutationNumber"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name of the FirstParty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name of The SecondParty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name of P.O"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"SubDivisionName"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)," "], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4723__auto__ = (function iter__8193(s__8194){
return (new cljs.core.LazySeq(null,(function (){
var s__8194__$1 = s__8194;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8194__$1);
if(temp__4425__auto__){
var s__8194__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8194__$2)){
var c__4721__auto__ = cljs.core.chunk_first.call(null,s__8194__$2);
var size__4722__auto__ = cljs.core.count.call(null,c__4721__auto__);
var b__8196 = cljs.core.chunk_buffer.call(null,size__4722__auto__);
if((function (){var i__8195 = (0);
while(true){
if((i__8195 < size__4722__auto__)){
var mt = cljs.core._nth.call(null,c__4721__auto__,i__8195);
cljs.core.chunk_append.call(null,b__8196,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.mutationnumber], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.nameofthefirstparty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.nameofthesecondparty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.nameofpo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.subdivisionname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8195,mt,c__4721__auto__,size__4722__auto__,b__8196,s__8194__$2,temp__4425__auto__){
return (function (){
return rrms.corecljs.click_update.call(null,mt.id);
});})(i__8195,mt,c__4721__auto__,size__4722__auto__,b__8196,s__8194__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-success btn-sm glyphicon glyphicon-edit"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8195,mt,c__4721__auto__,size__4722__auto__,b__8196,s__8194__$2,temp__4425__auto__){
return (function (){
return rrms.corecljs.delete$.call(null,mt.id);
});})(i__8195,mt,c__4721__auto__,size__4722__auto__,b__8196,s__8194__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger btn-sm glyphicon glyphicon-remove"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),mt.id], null)));

var G__8197 = (i__8195 + (1));
i__8195 = G__8197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8196),iter__8193.call(null,cljs.core.chunk_rest.call(null,s__8194__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8196),null);
}
} else {
var mt = cljs.core.first.call(null,s__8194__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.mutationnumber], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.nameofthefirstparty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.nameofthesecondparty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.nameofpo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mt.subdivisionname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mt,s__8194__$2,temp__4425__auto__){
return (function (){
return rrms.corecljs.click_update.call(null,mt.id);
});})(mt,s__8194__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-success btn-sm glyphicon glyphicon-edit"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mt,s__8194__$2,temp__4425__auto__){
return (function (){
return rrms.corecljs.delete$.call(null,mt.id);
});})(mt,s__8194__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger btn-sm glyphicon glyphicon-remove"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),mt.id], null)),iter__8193.call(null,cljs.core.rest.call(null,s__8194__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4723__auto__.call(null,mutations);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-6 col-centered col-max"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.shared_state,(0)], null)], null)], null)], null)], null)], null)], null);
});
rrms.corecljs.table_mount = (function table_mount(){
return $(document).ready((function (){
return $("#example1").DataTable();
}));
});
rrms.corecljs.home = (function home(documents){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),rrms.corecljs.render_mutations,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rrms.corecljs.table_mount], null));
});
var action__6908__auto___8200 = (function (params__6909__auto__){
if(cljs.core.map_QMARK_.call(null,params__6909__auto__)){
var map__8198 = params__6909__auto__;
var map__8198__$1 = ((cljs.core.seq_QMARK_.call(null,map__8198))?cljs.core.apply.call(null,cljs.core.hash_map,map__8198):map__8198);
var onres = ((function (map__8198,map__8198__$1){
return (function (json){
var dt = rrms.corecljs.getdata.call(null,json);
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),dt.data);

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),rrms.corecljs.get_total_rec_no.call(null,dt.pagesCount));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))], null));
});})(map__8198,map__8198__$1))
;
return rrms.corecljs.http_get.call(null,[cljs.core.str("http://localhost:9000/mutations?pageIndex="),cljs.core.str((rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)) - (1))),cljs.core.str("&pageSize=10")].join(''),onres);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6909__auto__)){
var vec__8199 = params__6909__auto__;
var onres = ((function (vec__8199){
return (function (json){
var dt = rrms.corecljs.getdata.call(null,json);
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),dt.data);

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),rrms.corecljs.get_total_rec_no.call(null,dt.pagesCount));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))], null));
});})(vec__8199))
;
return rrms.corecljs.http_get.call(null,[cljs.core.str("http://localhost:9000/mutations?pageIndex="),cljs.core.str((rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)) - (1))),cljs.core.str("&pageSize=10")].join(''),onres);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__6908__auto___8200);

/**
 * @param {...*} var_args
 */
rrms.corecljs.home_path = ((function (action__6908__auto___8200){
return (function() { 
var home_path__delegate = function (args__6907__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__6907__auto__);
};
var home_path = function (var_args){
var args__6907__auto__ = null;
if (arguments.length > 0) {
var G__8201__i = 0, G__8201__a = new Array(arguments.length -  0);
while (G__8201__i < G__8201__a.length) {G__8201__a[G__8201__i] = arguments[G__8201__i + 0]; ++G__8201__i;}
  args__6907__auto__ = new cljs.core.IndexedSeq(G__8201__a,0);
} 
return home_path__delegate.call(this,args__6907__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__8202){
var args__6907__auto__ = cljs.core.seq(arglist__8202);
return home_path__delegate(args__6907__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__6908__auto___8200))
;
var action__6908__auto___8205 = (function (params__6909__auto__){
if(cljs.core.map_QMARK_.call(null,params__6909__auto__)){
var map__8203 = params__6909__auto__;
var map__8203__$1 = ((cljs.core.seq_QMARK_.call(null,map__8203))?cljs.core.apply.call(null,cljs.core.hash_map,map__8203):map__8203);
var onres = ((function (map__8203,map__8203__$1){
return (function (json){
var dt = rrms.corecljs.getdata.call(null,json);
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),dt.data);

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),rrms.corecljs.get_total_rec_no.call(null,dt.pagesCount));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))], null));
});})(map__8203,map__8203__$1))
;
return rrms.corecljs.http_get.call(null,[cljs.core.str("http://localhost:9000/mutations?pageIndex="),cljs.core.str((rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)) - (1))),cljs.core.str("&pageSize=10")].join(''),onres);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6909__auto__)){
var vec__8204 = params__6909__auto__;
var onres = ((function (vec__8204){
return (function (json){
var dt = rrms.corecljs.getdata.call(null,json);
rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149),dt.data);

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"total-pages","total-pages",685894112),rrms.corecljs.get_total_rec_no.call(null,dt.pagesCount));

return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))], null));
});})(vec__8204))
;
return rrms.corecljs.http_get.call(null,[cljs.core.str("http://localhost:9000/mutations?pageIndex="),cljs.core.str((rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)) - (1))),cljs.core.str("&pageSize=10")].join(''),onres);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mutations",action__6908__auto___8205);

/**
 * @param {...*} var_args
 */
rrms.corecljs.mutations_list = ((function (action__6908__auto___8205){
return (function() { 
var mutations_list__delegate = function (args__6907__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/mutations",args__6907__auto__);
};
var mutations_list = function (var_args){
var args__6907__auto__ = null;
if (arguments.length > 0) {
var G__8206__i = 0, G__8206__a = new Array(arguments.length -  0);
while (G__8206__i < G__8206__a.length) {G__8206__a[G__8206__i] = arguments[G__8206__i + 0]; ++G__8206__i;}
  args__6907__auto__ = new cljs.core.IndexedSeq(G__8206__a,0);
} 
return mutations_list__delegate.call(this,args__6907__auto__);};
mutations_list.cljs$lang$maxFixedArity = 0;
mutations_list.cljs$lang$applyTo = (function (arglist__8207){
var args__6907__auto__ = cljs.core.seq(arglist__8207);
return mutations_list__delegate(args__6907__auto__);
});
mutations_list.cljs$core$IFn$_invoke$arity$variadic = mutations_list__delegate;
return mutations_list;
})()
;})(action__6908__auto___8205))
;
var action__6908__auto___8210 = (function (params__6909__auto__){
if(cljs.core.map_QMARK_.call(null,params__6909__auto__)){
var map__8208 = params__6909__auto__;
var map__8208__$1 = ((cljs.core.seq_QMARK_.call(null,map__8208))?cljs.core.apply.call(null,cljs.core.hash_map,map__8208):map__8208);
var onres = ((function (map__8208,map__8208__$1){
return (function (json){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),rrms.corecljs.getdata.call(null,json)).call(null,rrms.corecljs.set_page_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.mutation_add_template], null)));
});})(map__8208,map__8208__$1))
;
return rrms.corecljs.http_get.call(null,"http://localhost:9000/villages",onres);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6909__auto__)){
var vec__8209 = params__6909__auto__;
var onres = ((function (vec__8209){
return (function (json){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),rrms.corecljs.getdata.call(null,json)).call(null,rrms.corecljs.set_page_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.mutation_add_template], null)));
});})(vec__8209))
;
return rrms.corecljs.http_get.call(null,"http://localhost:9000/villages",onres);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mutations/add",action__6908__auto___8210);

/**
 * @param {...*} var_args
 */
rrms.corecljs.documents_path = ((function (action__6908__auto___8210){
return (function() { 
var documents_path__delegate = function (args__6907__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/mutations/add",args__6907__auto__);
};
var documents_path = function (var_args){
var args__6907__auto__ = null;
if (arguments.length > 0) {
var G__8211__i = 0, G__8211__a = new Array(arguments.length -  0);
while (G__8211__i < G__8211__a.length) {G__8211__a[G__8211__i] = arguments[G__8211__i + 0]; ++G__8211__i;}
  args__6907__auto__ = new cljs.core.IndexedSeq(G__8211__a,0);
} 
return documents_path__delegate.call(this,args__6907__auto__);};
documents_path.cljs$lang$maxFixedArity = 0;
documents_path.cljs$lang$applyTo = (function (arglist__8212){
var args__6907__auto__ = cljs.core.seq(arglist__8212);
return documents_path__delegate(args__6907__auto__);
});
documents_path.cljs$core$IFn$_invoke$arity$variadic = documents_path__delegate;
return documents_path;
})()
;})(action__6908__auto___8210))
;
var action__6908__auto___8215 = (function (params__6909__auto__){
if(cljs.core.map_QMARK_.call(null,params__6909__auto__)){
var map__8213 = params__6909__auto__;
var map__8213__$1 = ((cljs.core.seq_QMARK_.call(null,map__8213))?cljs.core.apply.call(null,cljs.core.hash_map,map__8213):map__8213);
var id = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var onres = ((function (map__8213,map__8213__$1,id){
return (function (json){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),rrms.corecljs.getdata.call(null,json)).call(null,rrms.corecljs.set_page_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.mutation_update_template,id,cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__8213,map__8213__$1,id){
return (function (obj){
return cljs.core._EQ_.call(null,obj.id,window.parseInt(id));
});})(map__8213,map__8213__$1,id))
,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))))], null)));
});})(map__8213,map__8213__$1,id))
;
return rrms.corecljs.http_get.call(null,"http://localhost:9000/villages",onres);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6909__auto__)){
var vec__8214 = params__6909__auto__;
var id = cljs.core.nth.call(null,vec__8214,(0),null);
var onres = ((function (vec__8214,id){
return (function (json){
return rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"villages","villages",-304040479),rrms.corecljs.getdata.call(null,json)).call(null,rrms.corecljs.set_page_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.mutation_update_template,id,cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__8214,id){
return (function (obj){
return cljs.core._EQ_.call(null,obj.id,window.parseInt(id));
});})(vec__8214,id))
,rrms.corecljs.get_value_BANG_.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149))))], null)));
});})(vec__8214,id))
;
return rrms.corecljs.http_get.call(null,"http://localhost:9000/villages",onres);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mutations/update/:id",action__6908__auto___8215);

/**
 * @param {...*} var_args
 */
rrms.corecljs.documents_path1 = ((function (action__6908__auto___8215){
return (function() { 
var documents_path1__delegate = function (args__6907__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/mutations/update/:id",args__6907__auto__);
};
var documents_path1 = function (var_args){
var args__6907__auto__ = null;
if (arguments.length > 0) {
var G__8216__i = 0, G__8216__a = new Array(arguments.length -  0);
while (G__8216__i < G__8216__a.length) {G__8216__a[G__8216__i] = arguments[G__8216__i + 0]; ++G__8216__i;}
  args__6907__auto__ = new cljs.core.IndexedSeq(G__8216__a,0);
} 
return documents_path1__delegate.call(this,args__6907__auto__);};
documents_path1.cljs$lang$maxFixedArity = 0;
documents_path1.cljs$lang$applyTo = (function (arglist__8217){
var args__6907__auto__ = cljs.core.seq(arglist__8217);
return documents_path1__delegate(args__6907__auto__);
});
documents_path1.cljs$core$IFn$_invoke$arity$variadic = documents_path1__delegate;
return documents_path1;
})()
;})(action__6908__auto___8215))
;
var action__6908__auto___8220 = (function (params__6909__auto__){
if(cljs.core.map_QMARK_.call(null,params__6909__auto__)){
var map__8218 = params__6909__auto__;
var map__8218__$1 = ((cljs.core.seq_QMARK_.call(null,map__8218))?cljs.core.apply.call(null,cljs.core.hash_map,map__8218):map__8218);
return alert("<h1>Not Found Page</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__6909__auto__)){
var vec__8219 = params__6909__auto__;
return alert("<h1>Not Found Page</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__6908__auto___8220);

rrms.corecljs.main = (function main(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

rrms.corecljs.set_key_value.call(null,new cljs.core.Keyword(null,"page-location","page-location",-49184773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.render_mutations], null));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.corecljs.page], null),document.getElementById("app1"));

var history = (new goog.History());
goog.events.listen(history,"navigate",((function (history){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(history))
);

return history.setEnabled(true);
});
rrms.corecljs.nav_BANG_ = (function nav_BANG_(token){
return (new goog.History()).setToken(token);
});
rrms.corecljs.main.call(null);

//# sourceMappingURL=corecljs.js.map