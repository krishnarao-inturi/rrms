// Compiled by ClojureScript 0.0-2985 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__13839_13843 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__13840_13844 = null;
var count__13841_13845 = (0);
var i__13842_13846 = (0);
while(true){
if((i__13842_13846 < count__13841_13845)){
var k_13847 = cljs.core._nth.call(null,chunk__13840_13844,i__13842_13846);
var v_13848 = (b[k_13847]);
(a[k_13847] = v_13848);

var G__13849 = seq__13839_13843;
var G__13850 = chunk__13840_13844;
var G__13851 = count__13841_13845;
var G__13852 = (i__13842_13846 + (1));
seq__13839_13843 = G__13849;
chunk__13840_13844 = G__13850;
count__13841_13845 = G__13851;
i__13842_13846 = G__13852;
continue;
} else {
var temp__4425__auto___13853 = cljs.core.seq.call(null,seq__13839_13843);
if(temp__4425__auto___13853){
var seq__13839_13854__$1 = temp__4425__auto___13853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13839_13854__$1)){
var c__4754__auto___13855 = cljs.core.chunk_first.call(null,seq__13839_13854__$1);
var G__13856 = cljs.core.chunk_rest.call(null,seq__13839_13854__$1);
var G__13857 = c__4754__auto___13855;
var G__13858 = cljs.core.count.call(null,c__4754__auto___13855);
var G__13859 = (0);
seq__13839_13843 = G__13856;
chunk__13840_13844 = G__13857;
count__13841_13845 = G__13858;
i__13842_13846 = G__13859;
continue;
} else {
var k_13860 = cljs.core.first.call(null,seq__13839_13854__$1);
var v_13861 = (b[k_13860]);
(a[k_13860] = v_13861);

var G__13862 = cljs.core.next.call(null,seq__13839_13854__$1);
var G__13863 = null;
var G__13864 = (0);
var G__13865 = (0);
seq__13839_13843 = G__13862;
chunk__13840_13844 = G__13863;
count__13841_13845 = G__13864;
i__13842_13846 = G__13865;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__13866 = (i + (2));
var G__13867 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__13866;
ret = G__13867;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13868_13872 = cljs.core.seq.call(null,v);
var chunk__13869_13873 = null;
var count__13870_13874 = (0);
var i__13871_13875 = (0);
while(true){
if((i__13871_13875 < count__13870_13874)){
var x_13876 = cljs.core._nth.call(null,chunk__13869_13873,i__13871_13875);
ret.push(x_13876);

var G__13877 = seq__13868_13872;
var G__13878 = chunk__13869_13873;
var G__13879 = count__13870_13874;
var G__13880 = (i__13871_13875 + (1));
seq__13868_13872 = G__13877;
chunk__13869_13873 = G__13878;
count__13870_13874 = G__13879;
i__13871_13875 = G__13880;
continue;
} else {
var temp__4425__auto___13881 = cljs.core.seq.call(null,seq__13868_13872);
if(temp__4425__auto___13881){
var seq__13868_13882__$1 = temp__4425__auto___13881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13868_13882__$1)){
var c__4754__auto___13883 = cljs.core.chunk_first.call(null,seq__13868_13882__$1);
var G__13884 = cljs.core.chunk_rest.call(null,seq__13868_13882__$1);
var G__13885 = c__4754__auto___13883;
var G__13886 = cljs.core.count.call(null,c__4754__auto___13883);
var G__13887 = (0);
seq__13868_13872 = G__13884;
chunk__13869_13873 = G__13885;
count__13870_13874 = G__13886;
i__13871_13875 = G__13887;
continue;
} else {
var x_13888 = cljs.core.first.call(null,seq__13868_13882__$1);
ret.push(x_13888);

var G__13889 = cljs.core.next.call(null,seq__13868_13882__$1);
var G__13890 = null;
var G__13891 = (0);
var G__13892 = (0);
seq__13868_13872 = G__13889;
chunk__13869_13873 = G__13890;
count__13870_13874 = G__13891;
i__13871_13875 = G__13892;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13893_13897 = cljs.core.seq.call(null,v);
var chunk__13894_13898 = null;
var count__13895_13899 = (0);
var i__13896_13900 = (0);
while(true){
if((i__13896_13900 < count__13895_13899)){
var x_13901 = cljs.core._nth.call(null,chunk__13894_13898,i__13896_13900);
ret.push(x_13901);

var G__13902 = seq__13893_13897;
var G__13903 = chunk__13894_13898;
var G__13904 = count__13895_13899;
var G__13905 = (i__13896_13900 + (1));
seq__13893_13897 = G__13902;
chunk__13894_13898 = G__13903;
count__13895_13899 = G__13904;
i__13896_13900 = G__13905;
continue;
} else {
var temp__4425__auto___13906 = cljs.core.seq.call(null,seq__13893_13897);
if(temp__4425__auto___13906){
var seq__13893_13907__$1 = temp__4425__auto___13906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13893_13907__$1)){
var c__4754__auto___13908 = cljs.core.chunk_first.call(null,seq__13893_13907__$1);
var G__13909 = cljs.core.chunk_rest.call(null,seq__13893_13907__$1);
var G__13910 = c__4754__auto___13908;
var G__13911 = cljs.core.count.call(null,c__4754__auto___13908);
var G__13912 = (0);
seq__13893_13897 = G__13909;
chunk__13894_13898 = G__13910;
count__13895_13899 = G__13911;
i__13896_13900 = G__13912;
continue;
} else {
var x_13913 = cljs.core.first.call(null,seq__13893_13907__$1);
ret.push(x_13913);

var G__13914 = cljs.core.next.call(null,seq__13893_13907__$1);
var G__13915 = null;
var G__13916 = (0);
var G__13917 = (0);
seq__13893_13897 = G__13914;
chunk__13894_13898 = G__13915;
count__13895_13899 = G__13916;
i__13896_13900 = G__13917;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13918_13922 = cljs.core.seq.call(null,v);
var chunk__13919_13923 = null;
var count__13920_13924 = (0);
var i__13921_13925 = (0);
while(true){
if((i__13921_13925 < count__13920_13924)){
var x_13926 = cljs.core._nth.call(null,chunk__13919_13923,i__13921_13925);
ret.push(x_13926);

var G__13927 = seq__13918_13922;
var G__13928 = chunk__13919_13923;
var G__13929 = count__13920_13924;
var G__13930 = (i__13921_13925 + (1));
seq__13918_13922 = G__13927;
chunk__13919_13923 = G__13928;
count__13920_13924 = G__13929;
i__13921_13925 = G__13930;
continue;
} else {
var temp__4425__auto___13931 = cljs.core.seq.call(null,seq__13918_13922);
if(temp__4425__auto___13931){
var seq__13918_13932__$1 = temp__4425__auto___13931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13918_13932__$1)){
var c__4754__auto___13933 = cljs.core.chunk_first.call(null,seq__13918_13932__$1);
var G__13934 = cljs.core.chunk_rest.call(null,seq__13918_13932__$1);
var G__13935 = c__4754__auto___13933;
var G__13936 = cljs.core.count.call(null,c__4754__auto___13933);
var G__13937 = (0);
seq__13918_13922 = G__13934;
chunk__13919_13923 = G__13935;
count__13920_13924 = G__13936;
i__13921_13925 = G__13937;
continue;
} else {
var x_13938 = cljs.core.first.call(null,seq__13918_13932__$1);
ret.push(x_13938);

var G__13939 = cljs.core.next.call(null,seq__13918_13932__$1);
var G__13940 = null;
var G__13941 = (0);
var G__13942 = (0);
seq__13918_13922 = G__13939;
chunk__13919_13923 = G__13940;
count__13920_13924 = G__13941;
i__13921_13925 = G__13942;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__13951 = obj;
G__13951.push(kfn.call(null,k),vfn.call(null,v));

return G__13951;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x13952 = cljs.core.clone.call(null,handlers);
x13952.forEach = ((function (x13952,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__13953 = cljs.core.seq.call(null,coll);
var chunk__13954 = null;
var count__13955 = (0);
var i__13956 = (0);
while(true){
if((i__13956 < count__13955)){
var vec__13957 = cljs.core._nth.call(null,chunk__13954,i__13956);
var k = cljs.core.nth.call(null,vec__13957,(0),null);
var v = cljs.core.nth.call(null,vec__13957,(1),null);
f.call(null,v,k);

var G__13959 = seq__13953;
var G__13960 = chunk__13954;
var G__13961 = count__13955;
var G__13962 = (i__13956 + (1));
seq__13953 = G__13959;
chunk__13954 = G__13960;
count__13955 = G__13961;
i__13956 = G__13962;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13953);
if(temp__4425__auto__){
var seq__13953__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13953__$1)){
var c__4754__auto__ = cljs.core.chunk_first.call(null,seq__13953__$1);
var G__13963 = cljs.core.chunk_rest.call(null,seq__13953__$1);
var G__13964 = c__4754__auto__;
var G__13965 = cljs.core.count.call(null,c__4754__auto__);
var G__13966 = (0);
seq__13953 = G__13963;
chunk__13954 = G__13964;
count__13955 = G__13965;
i__13956 = G__13966;
continue;
} else {
var vec__13958 = cljs.core.first.call(null,seq__13953__$1);
var k = cljs.core.nth.call(null,vec__13958,(0),null);
var v = cljs.core.nth.call(null,vec__13958,(1),null);
f.call(null,v,k);

var G__13967 = cljs.core.next.call(null,seq__13953__$1);
var G__13968 = null;
var G__13969 = (0);
var G__13970 = (0);
seq__13953 = G__13967;
chunk__13954 = G__13968;
count__13955 = G__13969;
i__13956 = G__13970;
continue;
}
} else {
return null;
}
}
break;
}
});})(x13952,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x13952;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t13974 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t13974 = (function (write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta13975){
this.write_handler = write_handler;
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta13975 = meta13975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t13974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13976,meta13975__$1){
var self__ = this;
var _13976__$1 = this;
return (new cognitect.transit.t13974(self__.write_handler,self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta13975__$1));
});

cognitect.transit.t13974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13976){
var self__ = this;
var _13976__$1 = this;
return self__.meta13975;
});

cognitect.transit.t13974.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t13974.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t13974.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t13974.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t13974.cljs$lang$type = true;

cognitect.transit.t13974.cljs$lang$ctorStr = "cognitect.transit/t13974";

cognitect.transit.t13974.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"cognitect.transit/t13974");
});

cognitect.transit.__GT_t13974 = (function __GT_t13974(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13975){
return (new cognitect.transit.t13974(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13975));
});

}

return (new cognitect.transit.t13974(write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var or__3967__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map