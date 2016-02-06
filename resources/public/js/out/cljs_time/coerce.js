// Compiled by ClojureScript 0.0-2985 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

cljs_time.coerce.ICoerce = (function (){var obj13980 = {};
return obj13980;
})();

cljs_time.coerce.to_date_time = (function to_date_time(obj){
if((function (){var and__3955__auto__ = obj;
if(and__3955__auto__){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else {
return and__3955__auto__;
}
})()){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4611__auto__ = (((obj == null))?null:obj);
return (function (){var or__3967__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4611__auto__)]);
if(or__3967__auto__){
return or__3967__auto__;
} else {
var or__3967__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(or__3967__auto____$1){
return or__3967__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 * number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function from_long(millis){
var G__13982 = millis;
var G__13982__$1 = (((G__13982 == null))?null:goog.date.UtcDateTime.fromTimestamp.call(null,G__13982));
return G__13982__$1;
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 * returning first which parses
 */
cljs_time.coerce.from_string = (function from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__4723__auto__ = (function iter__13991(s__13992){
return (new cljs.core.LazySeq(null,(function (){
var s__13992__$1 = s__13992;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13992__$1);
if(temp__4425__auto__){
var s__13992__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13992__$2)){
var c__4721__auto__ = cljs.core.chunk_first.call(null,s__13992__$2);
var size__4722__auto__ = cljs.core.count.call(null,c__4721__auto__);
var b__13994 = cljs.core.chunk_buffer.call(null,size__4722__auto__);
if((function (){var i__13993 = (0);
while(true){
if((i__13993 < size__4722__auto__)){
var f = cljs.core._nth.call(null,c__4721__auto__,i__13993);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e13997){if((e13997 instanceof Error)){
var _ = e13997;
return null;
} else {
throw e13997;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__13994,d);

var G__13999 = (i__13993 + (1));
i__13993 = G__13999;
continue;
} else {
var G__14000 = (i__13993 + (1));
i__13993 = G__14000;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13994),iter__13991.call(null,cljs.core.chunk_rest.call(null,s__13992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13994),null);
}
} else {
var f = cljs.core.first.call(null,s__13992__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e13998){if((e13998 instanceof Error)){
var _ = e13998;
return null;
} else {
throw e13998;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,iter__13991.call(null,cljs.core.rest.call(null,s__13992__$2)));
} else {
var G__14001 = cljs.core.rest.call(null,s__13992__$2);
s__13992__$1 = G__14001;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4723__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 * js Date object.
 */
cljs_time.coerce.from_date = (function from_date(date){
var G__14003 = date;
var G__14003__$1 = (((G__14003 == null))?null:G__14003.getTime());
var G__14003__$2 = (((G__14003__$1 == null))?null:cljs_time.coerce.from_long.call(null,G__14003__$1));
return G__14003__$2;
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function to_long(obj){
var G__14005 = obj;
var G__14005__$1 = (((G__14005 == null))?null:cljs_time.coerce.to_date_time.call(null,G__14005));
var G__14005__$2 = (((G__14005__$1 == null))?null:G__14005__$1.getTime());
return G__14005__$2;
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function to_epoch(obj){
var G__14007 = obj;
var G__14007__$1 = (((G__14007 == null))?null:cljs_time.coerce.to_long.call(null,G__14007));
var G__14007__$2 = (((G__14007__$1 == null))?null:(G__14007__$1 / (1000)));
return G__14007__$2;
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function to_date(obj){
var G__14009 = obj;
var G__14009__$1 = (((G__14009 == null))?null:cljs_time.coerce.to_date_time.call(null,G__14009));
var G__14009__$2 = (((G__14009__$1 == null))?null:G__14009__$1.getTime());
var G__14009__$3 = (((G__14009__$2 == null))?null:(new Date(G__14009__$2)));
return G__14009__$3;
});
/**
 * Returns a string representation of obj in UTC time-zone
 * using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function to_string(obj){
var G__14011 = obj;
var G__14011__$1 = (((G__14011 == null))?null:cljs_time.coerce.to_date_time.call(null,G__14011));
var G__14011__$2 = (((G__14011__$1 == null))?null:cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__14011__$1));
return G__14011__$2;
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4423__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4423__auto__)){
var dt = temp__4423__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4423__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4423__auto__)){
var dt = temp__4423__auto__;
var G__14013 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__14013.setHours(dt.getHours());

G__14013.setMinutes(dt.getMinutes());

G__14013.setSeconds(dt.getSeconds());

G__14013.setMilliseconds(dt.getMilliseconds());

return G__14013;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
var G__14014 = (new goog.date.UtcDateTime());
G__14014.set(local_date__$1);

return G__14014;
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
var G__14015 = (new goog.date.UtcDateTime());
G__14015.setTime(local_date_time__$1.getTime());

return G__14015;
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map