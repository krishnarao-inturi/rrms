// Compiled by ClojureScript 0.0-2985 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_7308 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_7308;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj7310 = {};
return obj7310;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * @param {...*} var_args
 */
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__7314__delegate = function (x,p__7311){
var map__7313 = p__7311;
var map__7313__$1 = ((cljs.core.seq_QMARK_.call(null,map__7313))?cljs.core.apply.call(null,cljs.core.hash_map,map__7313):map__7313);
var meta = cljs.core.get.call(null,map__7313__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__7313__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__7314 = function (x,var_args){
var p__7311 = null;
if (arguments.length > 1) {
var G__7315__i = 0, G__7315__a = new Array(arguments.length -  1);
while (G__7315__i < G__7315__a.length) {G__7315__a[G__7315__i] = arguments[G__7315__i + 1]; ++G__7315__i;}
  p__7311 = new cljs.core.IndexedSeq(G__7315__a,0);
} 
return G__7314__delegate.call(this,x,p__7311);};
G__7314.cljs$lang$maxFixedArity = 1;
G__7314.cljs$lang$applyTo = (function (arglist__7316){
var x = cljs.core.first(arglist__7316);
var p__7311 = cljs.core.rest(arglist__7316);
return G__7314__delegate(x,p__7311);
});
G__7314.cljs$core$IFn$_invoke$arity$variadic = G__7314__delegate;
return G__7314;
})()
;
atom = function(x,var_args){
var p__7311 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__7317 = null;
if (arguments.length > 1) {
var G__7318__i = 0, G__7318__a = new Array(arguments.length -  1);
while (G__7318__i < G__7318__a.length) {G__7318__a[G__7318__i] = arguments[G__7318__i + 1]; ++G__7318__i;}
G__7317 = new cljs.core.IndexedSeq(G__7318__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__7317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__7325 = self__.ratom;
if(G__7325){
var bit__4648__auto__ = (G__7325.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4648__auto__) || (G__7325.cljs$core$IDeref$)){
return true;
} else {
if((!G__7325.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7325);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7325);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__7320_SHARP_,p2__7319_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__7319_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__7322_SHARP_,p2__7321_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__7321_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__7324_SHARP_,p2__7323_SHARP_){
return self__.ratom.call(null,self__.path,p2__7323_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_7326 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_7326;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__7331 = path;
if(G__7331){
var bit__4648__auto__ = (G__7331.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4648__auto__) || (G__7331.cljs$core$IDeref$)){
return true;
} else {
if((!G__7331.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7331);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7331);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__7332 = path;
if(G__7332){
var bit__4648__auto__ = null;
if(cljs.core.truth_((function (){var or__3967__auto__ = bit__4648__auto__;
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return G__7332.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__7332.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7332);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__3967__auto__ = (function (){var G__7334 = src;
if(G__7334){
var bit__4648__auto__ = null;
if(cljs.core.truth_((function (){var or__3967__auto__ = bit__4648__auto__;
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return G__7334.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__7334.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7334);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7334);
}
})();
if(or__3967__auto__){
return or__3967__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj7336 = {};
return obj7336;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3955__auto__ = this$;
if(and__3955__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3955__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4611__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3967__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4611__auto__)]);
if(or__3967__auto__){
return or__3967__auto__;
} else {
var or__3967__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3967__auto____$1){
return or__3967__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj7338 = {};
return obj7338;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3955__auto__ = this$;
if(and__3955__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3955__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4611__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3967__auto__ = (reagent.ratom.run[goog.typeOf(x__4611__auto__)]);
if(or__3967__auto__){
return or__3967__auto__;
} else {
var or__3967__auto____$1 = (reagent.ratom.run["_"]);
if(or__3967__auto____$1){
return or__3967__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj7340 = {};
return obj7340;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3955__auto__ = this$;
if(and__3955__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3955__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4611__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3967__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4611__auto__)]);
if(or__3967__auto__){
return or__3967__auto__;
} else {
var or__3967__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3967__auto____$1){
return or__3967__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3955__auto__ = k;
if(and__3955__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3955__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4611__auto__ = (((k == null))?null:k);
return (function (){var or__3967__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4611__auto__)]);
if(or__3967__auto__){
return or__3967__auto__;
} else {
var or__3967__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3967__auto____$1){
return or__3967__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function _peek_at(this$){
if((function (){var and__3955__auto__ = this$;
if(and__3955__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__3955__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4611__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3967__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__4611__auto__)]);
if(or__3967__auto__){
return or__3967__auto__;
} else {
var or__3967__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__3967__auto____$1){
return or__3967__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3955__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3955__auto__)){
return !((oldval === newval));
} else {
return and__3955__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3967__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__7341_7354 = cljs.core.seq.call(null,derefed);
var chunk__7342_7355 = null;
var count__7343_7356 = (0);
var i__7344_7357 = (0);
while(true){
if((i__7344_7357 < count__7343_7356)){
var w_7358 = cljs.core._nth.call(null,chunk__7342_7355,i__7344_7357);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_7358)){
} else {
cljs.core.add_watch.call(null,w_7358,this$__$1,reagent.ratom._handle_change);
}

var G__7359 = seq__7341_7354;
var G__7360 = chunk__7342_7355;
var G__7361 = count__7343_7356;
var G__7362 = (i__7344_7357 + (1));
seq__7341_7354 = G__7359;
chunk__7342_7355 = G__7360;
count__7343_7356 = G__7361;
i__7344_7357 = G__7362;
continue;
} else {
var temp__4425__auto___7363 = cljs.core.seq.call(null,seq__7341_7354);
if(temp__4425__auto___7363){
var seq__7341_7364__$1 = temp__4425__auto___7363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7341_7364__$1)){
var c__4754__auto___7365 = cljs.core.chunk_first.call(null,seq__7341_7364__$1);
var G__7366 = cljs.core.chunk_rest.call(null,seq__7341_7364__$1);
var G__7367 = c__4754__auto___7365;
var G__7368 = cljs.core.count.call(null,c__4754__auto___7365);
var G__7369 = (0);
seq__7341_7354 = G__7366;
chunk__7342_7355 = G__7367;
count__7343_7356 = G__7368;
i__7344_7357 = G__7369;
continue;
} else {
var w_7370 = cljs.core.first.call(null,seq__7341_7364__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_7370)){
} else {
cljs.core.add_watch.call(null,w_7370,this$__$1,reagent.ratom._handle_change);
}

var G__7371 = cljs.core.next.call(null,seq__7341_7364__$1);
var G__7372 = null;
var G__7373 = (0);
var G__7374 = (0);
seq__7341_7354 = G__7371;
chunk__7342_7355 = G__7372;
count__7343_7356 = G__7373;
i__7344_7357 = G__7374;
continue;
}
} else {
}
}
break;
}

var seq__7345_7375 = cljs.core.seq.call(null,self__.watching);
var chunk__7346_7376 = null;
var count__7347_7377 = (0);
var i__7348_7378 = (0);
while(true){
if((i__7348_7378 < count__7347_7377)){
var w_7379 = cljs.core._nth.call(null,chunk__7346_7376,i__7348_7378);
if(cljs.core.contains_QMARK_.call(null,derefed,w_7379)){
} else {
cljs.core.remove_watch.call(null,w_7379,this$__$1);
}

var G__7380 = seq__7345_7375;
var G__7381 = chunk__7346_7376;
var G__7382 = count__7347_7377;
var G__7383 = (i__7348_7378 + (1));
seq__7345_7375 = G__7380;
chunk__7346_7376 = G__7381;
count__7347_7377 = G__7382;
i__7348_7378 = G__7383;
continue;
} else {
var temp__4425__auto___7384 = cljs.core.seq.call(null,seq__7345_7375);
if(temp__4425__auto___7384){
var seq__7345_7385__$1 = temp__4425__auto___7384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7345_7385__$1)){
var c__4754__auto___7386 = cljs.core.chunk_first.call(null,seq__7345_7385__$1);
var G__7387 = cljs.core.chunk_rest.call(null,seq__7345_7385__$1);
var G__7388 = c__4754__auto___7386;
var G__7389 = cljs.core.count.call(null,c__4754__auto___7386);
var G__7390 = (0);
seq__7345_7375 = G__7387;
chunk__7346_7376 = G__7388;
count__7347_7377 = G__7389;
i__7348_7378 = G__7390;
continue;
} else {
var w_7391 = cljs.core.first.call(null,seq__7345_7385__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_7391)){
} else {
cljs.core.remove_watch.call(null,w_7391,this$__$1);
}

var G__7392 = cljs.core.next.call(null,seq__7345_7385__$1);
var G__7393 = null;
var G__7394 = (0);
var G__7395 = (0);
seq__7345_7375 = G__7392;
chunk__7346_7376 = G__7393;
count__7347_7377 = G__7394;
i__7348_7378 = G__7395;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_7349 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_7349;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__7350_7396 = cljs.core.seq.call(null,self__.watching);
var chunk__7351_7397 = null;
var count__7352_7398 = (0);
var i__7353_7399 = (0);
while(true){
if((i__7353_7399 < count__7352_7398)){
var w_7400 = cljs.core._nth.call(null,chunk__7351_7397,i__7353_7399);
cljs.core.remove_watch.call(null,w_7400,this$__$1);

var G__7401 = seq__7350_7396;
var G__7402 = chunk__7351_7397;
var G__7403 = count__7352_7398;
var G__7404 = (i__7353_7399 + (1));
seq__7350_7396 = G__7401;
chunk__7351_7397 = G__7402;
count__7352_7398 = G__7403;
i__7353_7399 = G__7404;
continue;
} else {
var temp__4425__auto___7405 = cljs.core.seq.call(null,seq__7350_7396);
if(temp__4425__auto___7405){
var seq__7350_7406__$1 = temp__4425__auto___7405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7350_7406__$1)){
var c__4754__auto___7407 = cljs.core.chunk_first.call(null,seq__7350_7406__$1);
var G__7408 = cljs.core.chunk_rest.call(null,seq__7350_7406__$1);
var G__7409 = c__4754__auto___7407;
var G__7410 = cljs.core.count.call(null,c__4754__auto___7407);
var G__7411 = (0);
seq__7350_7396 = G__7408;
chunk__7351_7397 = G__7409;
count__7352_7398 = G__7410;
i__7353_7399 = G__7411;
continue;
} else {
var w_7412 = cljs.core.first.call(null,seq__7350_7406__$1);
cljs.core.remove_watch.call(null,w_7412,this$__$1);

var G__7413 = cljs.core.next.call(null,seq__7350_7406__$1);
var G__7414 = null;
var G__7415 = (0);
var G__7416 = (0);
seq__7350_7396 = G__7413;
chunk__7351_7397 = G__7414;
count__7352_7398 = G__7415;
i__7353_7399 = G__7416;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__3967__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3967__auto__)){
return or__3967__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_7417 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_7417 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_7417,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
 * @param {...*} var_args
 */
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__7418){
var map__7420 = p__7418;
var map__7420__$1 = ((cljs.core.seq_QMARK_.call(null,map__7420))?cljs.core.apply.call(null,cljs.core.hash_map,map__7420):map__7420);
var auto_run = cljs.core.get.call(null,map__7420__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__7420__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__7420__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var derefed = cljs.core.get.call(null,map__7420__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__7418 = null;
if (arguments.length > 1) {
var G__7421__i = 0, G__7421__a = new Array(arguments.length -  1);
while (G__7421__i < G__7421__a.length) {G__7421__a[G__7421__i] = arguments[G__7421__i + 1]; ++G__7421__i;}
  p__7418 = new cljs.core.IndexedSeq(G__7421__a,0);
} 
return make_reaction__delegate.call(this,f,p__7418);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__7422){
var f = cljs.core.first(arglist__7422);
var p__7418 = cljs.core.rest(arglist__7422);
return make_reaction__delegate(f,p__7418);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3955__auto__ = self__.changed;
if(cljs.core.truth_(and__3955__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__3955__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4554__auto__,writer__4555__auto__,opt__4556__auto__){
return cljs.core._write.call(null,writer__4555__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map