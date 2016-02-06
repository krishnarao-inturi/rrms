// Compiled by ClojureScript 0.0-2985 {}
goog.provide('rrms.login');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('bouncer.validators');
goog.require('bouncer.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
rrms.login.validator = (function validator(data_set){
return cljs.core.first.call(null,bouncer.core.validate.call(null,data_set,new cljs.core.Keyword(null,"username-email","username-email",1251871435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.email,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid email-id"], null)], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid password"], null)], null)));
});
rrms.login.input_element = (function input_element(id,ttype,data_set,placeholder,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),ttype,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,data_set).call(null,id),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6993_SHARP_){
return cljs.core.swap_BANG_.call(null,data_set,cljs.core.assoc,id,p1__6993_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.reset_BANG_.call(null,in_focus,true);
})], null)], null);
});
rrms.login.input_validate = (function input_validate(id,label,span_class,ttype,data_set,placeholder,focus){
var input_focus = reagent.core.atom.call(null,null);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.col-sm-10","div.input-group.col-sm-10",1954575656),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),span_class], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.login.input_element,id,ttype,data_set,placeholder,input_focus], null)], null),(cljs.core.truth_((function (){var or__3967__auto__ = cljs.core.deref.call(null,input_focus);
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return cljs.core.deref.call(null,focus);
}
})())?((cljs.core._EQ_.call(null,null,rrms.login.validator.call(null,cljs.core.deref.call(null,data_set))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str(cljs.core.first.call(null,rrms.login.validator.call(null,cljs.core.deref.call(null,data_set)).call(null,id)))].join('')], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null)], null);
});
;})(input_focus))
});
rrms.login.button = (function button(value,ttype,data_set,focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),ttype,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.call(null,null,rrms.login.validator.call(null,cljs.core.deref.call(null,data_set)))){
return alert("You are successfully Registered");
} else {
return cljs.core.reset_BANG_.call(null,focus,true);
}
})], null),value], null)], null)], null);
});
rrms.login.home = (function home(){
var my_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var focus = reagent.core.atom.call(null,null);
return ((function (my_data,focus){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary.modal-dialog","div.panel.panel-primary.modal-dialog",-2128555501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Log-in form"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.login.input_validate,new cljs.core.Keyword(null,"username-email","username-email",1251871435),"Username or Email","input-group-addon glyphicon glyphicon-user","email",my_data,"eg.,Siva or siva@***.com",focus], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.login.input_validate,new cljs.core.Keyword(null,"password","password",417022471),"Password","input-group-addon glyphicon glyphicon-lock","password",my_data,"eg., ..........",focus], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.login.button,"Sign-in","button",my_data,focus], null)], null)], null)], null);
});
;})(my_data,focus))
});
rrms.login.render_sample = (function render_sample(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrms.login.home], null),document.getElementById("app"));
});
rrms.login.render_sample.call(null);

//# sourceMappingURL=login.js.map