function todomvc(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='todomvc',Pb='__gwt_marker_todomvc',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='9B9E1FD997E1B8FDC10000A6D1128963',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};todomvc.onScriptLoad=function(a){todomvc=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb);Db([Z],fb);Db([X],fb);Db([R],fb);Db([_],fb+gb);Db([V],fb+gb);Db([Z],fb+gb);Db([X],fb+gb);Db([R],fb+gb);Db([_],fb+hb);Db([V],fb+hb);Db([Z],fb+hb);Db([X],fb+hb);Db([R],fb+hb);Db([_],fb+ib);Db([V],fb+ib);Db([Z],fb+ib);Db([X],fb+ib);Db([R],fb+ib);Db([_],fb+jb);Db([V],fb+jb);Db([Z],fb+jb);Db([X],fb+jb);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|interactive|complete/.test(ob.readyState)){Ib()}},mb)}
todomvc();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '9B9E1FD997E1B8FDC10000A6D1128963';function n(){}
function U(){}
function de(){}
function _d(){}
function _g(){}
function $g(){}
function ab(){}
function rf(){}
function tf(){}
function uf(){}
function vf(){}
function wf(){}
function Rf(){}
function Sf(){}
function ih(){}
function kh(){}
function oh(){}
function vh(){}
function Lh(){}
function Xh(){}
function Zh(){}
function gi(){}
function Fi(){}
function Hi(){}
function Ii(){}
function Ui(){}
function Z(a){Y()}
function wj(a){a()}
function nh(){mh()}
function ke(){ke=_d}
function Qf(a,b){a.a=b}
function Ei(a,b){b.a=a}
function Ie(a){this.a=a}
function Ke(a){this.b=a}
function Ve(a){this.c=a}
function Uf(a){this.a=a}
function xh(a){this.a=a}
function yh(a){this.a=a}
function zh(a){this.a=a}
function Nh(a){this.a=a}
function Oh(a){this.a=a}
function Ph(a){this.a=a}
function Qh(a){this.a=a}
function Rh(a){this.a=a}
function Sh(a){this.a=a}
function Th(a){this.a=a}
function Ti(a){this.a=a}
function ai(a){this.a=a}
function Gi(a){this.a=a}
function Ji(a){this.a=a}
function Si(a){this.a=a}
function Vi(a){this.a=a}
function ei(){this.a={}}
function eh(){this.a={}}
function bh(){this.a={}}
function _h(){this.a={}}
function ii(){this.a={}}
function tj(a){df(this,a)}
function Jd(a){return a.e}
function uj(){return this.a}
function Ee(a,b){return a===b}
function Ai(a,b){Me(a.b,b)}
function Oi(a,b){Me(a.a,b)}
function kg(a,b){lg(a.j,b)}
function hg(a,b,c){a[b]=c}
function Nf(a,b,c){b.O(fi(c))}
function Le(a,b,c){Wf(a.a,b,c)}
function kf(a,b,c){b.O(a.a[c])}
function Oe(a,b){return a.a[b]}
function Bh(a,b){return a.g=b}
function sj(){return _f(this)}
function je(a){u.call(this,a)}
function jh(a){mg.call(this,a)}
function ph(a){mg.call(this,a)}
function wh(a){mg.call(this,a)}
function Mh(a){mg.call(this,a)}
function Yh(a){mg.call(this,a)}
function Ce(){q(this);this.s()}
function w(){w=_d;v=new n}
function R(){R=_d;Q=new U}
function H(){H=_d;!!(Y(),X)}
function P(){D!=0&&(D=0);G=-1}
function Ud(){Sd==null&&(Sd=[])}
function Xf(a,b){a.splice(b,1)}
function lg(a,b){a.state=cf(b)}
function bb(a,b){return se(a,b)}
function gb(a){return new Array(a)}
function Db(a){return a.l|a.m<<22}
function ne(a){me(a);return a.k}
function og(a,b){a.ref=b;return a}
function pg(a,b){a.href=b;return a}
function xe(a,b){this.a=a;this.b=b}
function Mf(a,b){this.a=a;this.b=b}
function Pf(a,b){this.a=a;this.b=b}
function Vf(a,b){this.b=a;this.a=b}
function Yg(a,b){xe.call(this,a,b)}
function qi(a,b){xe.call(this,a,b)}
function Ef(a,b){yf(a);a.a.L(b)}
function df(a,b){while(a.M(b));}
function Wf(a,b,c){a.splice(b,0,c)}
function Jf(a,b,c){Qf(a,Tf(b,a.a,c))}
function zg(a,b){a.value=b;return a}
function ug(a,b){a.onBlur=b;return a}
function Ge(a,b){a.a+=''+b;return a}
function Xe(){this.a=new $wnd.Date}
function nf(a){this.b=a;this.a=16464}
function O(a){$wnd.clearTimeout(a)}
function fi(a){return di(bi(a.b),a)}
function bi(a){return ci(new ei,a)}
function kb(a){return lb(a.l,a.m,a.h)}
function Sb(a){return typeof a===Yi}
function Vb(a){return a==null?null:a}
function Ye(a){return a<10?'0'+a:''+a}
function Te(a){return a.a<a.c.a.length}
function Tf(a,b,c){return If(a.a,b,c)}
function lb(a,b,c){return {l:a,m:b,h:c}}
function De(a,b){return a.charCodeAt(b)}
function _f(a){return a.$H||(a.$H=++$f)}
function dg(){dg=_d;ag=new n;cg=new n}
function sg(a,b){a.checked=b;return a}
function qg(a,b){a.onClick=b;return a}
function vg(a,b){a.onChange=b;return a}
function wg(a,b){a.onKeyDown=b;return a}
function If(a,b,c){a.a.N(b,c);return b}
function rg(a){a.autoFocus=true;return a}
function jg(a,b){a.j.setState(b,null)}
function Ni(a,b){a.b=b;Ne(a.a,new Ui)}
function xi(a,b){return Pe(a.a,b,0)!=-1}
function Qb(a,b){return a!=null&&Ob(a,b)}
function r(a,b){a.e=b;b!=null&&Zf(b,$i,a)}
function me(a){if(a.k!=null){return}ue(a)}
function Ue(a){a.b=a.a++;return a.c.a[a.b]}
function tg(a,b){a.defaultValue=b;return a}
function Hf(a,b){Af.call(this,a);this.a=b}
function u(a){this.f=a;q(this);this.s()}
function Se(){this.a=db(pc,hj,1,0,5,1)}
function Di(){this.a=new Se;this.b=new Se}
function yi(a,b){Qe(a.a,b);Ne(a.b,new Hi)}
function Bi(a,b){Qf(b,!b.a);Ne(a.b,new Hi)}
function ig(a,b){var c;c={};c[a]=b;return c}
function Ag(a,b){a.onDoubleClick=b;return a}
function q(a){a.g&&a.e!==Zi&&a.s();return a}
function Ub(a){return typeof a==='string'}
function Rb(a){return typeof a==='boolean'}
function I(a,b,c){return a.apply(b,c);var d}
function zi(a,b,c){b.c=cf(c);Ne(a.b,new Hi)}
function qe(a){var b;b=pe(a);we(a,b);return b}
function ci(a,b){hg(a.a,'key',cf(b));return a}
function Me(a,b){a.a[a.a.length]=b;return true}
function Pd(a){if(Sb(a)){return a|0}return Db(a)}
function V(a,b){!a&&(a=[]);a[a.length]=b;return a}
function hf(a,b){while(a.c<a.d){kf(a,b,a.c++)}}
function sf(a,b,c){this.c=a;this.a=b;this.b=c}
function xf(){this.a=' ';this.b='';this.c=''}
function Y(){Y=_d;var a;!$();a=new ab;X=a}
function li(){li=_d;ji=new Di;ki=new Qi(ji)}
function ge(){ge=_d;fe=$wnd.window.document}
function ie(){u.call(this,'divide by zero')}
function Zf(b,c,d){try{b[c]=d}catch(a){}}
function Kf(a,b,c){if(a.a.Q(c)){a.b=true;b.O(c)}}
function ff(a,b){ef(b,a.length);return new lf(a,b)}
function Qd(a){if(Sb(a)){return ''+a}return Eb(a)}
function cf(a){if(a==null){throw Jd(new Ce)}return a}
function gg(){if(bg==256){ag=cg;cg=new n;bg=0}++bg}
function yf(a){if(!a.b){zf(a);a.c=true}else{yf(a.b)}}
function Df(a,b){zf(a);return new Hf(a,new Lf(b,a.a))}
function Ff(a,b){zf(a);return new Hf(a,new Of(b,a.a))}
function Fb(a,b){return lb(a.l^b.l,a.m^b.m,a.h^b.h)}
function Ri(a,b){return (pi(),ni)==a||(mi==a?!b.a:b.a)}
function fb(a){return Array.isArray(a)&&a.db===de}
function Pb(a){return !Array.isArray(a)&&a.db===de}
function bf(a,b){return Vb(a)===Vb(b)||!!a&&Vb(a)===Vb(b)}
function gf(a,b){this.e=a;this.d=(b&64)!=0?b|16384:b}
function lf(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function ti(a,b){this.b=cf(a);this.c=cf(b);this.a=false}
function Af(a){if(!a){this.b=null;new Se}else{this.b=a}}
function mf(a){if(!a.d){a.d=new Ve(a.b);a.c=a.b.a.length}}
function te(a){if(a.C()){return null}var b=a.j;return Xd[b]}
function yg(a,b){a.type=b.a!=null?b.a:''+b.b;return a}
function re(a,b){var c;c=pe(a);we(a,c);c.e=b?8:0;return c}
function s(a,b){var c;c=ne(a.bb);return b==null?c:c+': '+b}
function Rd(a,b){return Ld(Fb(Sb(a)?Od(a):a,Sb(b)?Od(b):b))}
function ri(){pi();return hb(bb(vd,1),hj,22,0,[mi,oi,ni])}
function Wh(){Vh();this.a=ae(Zh.prototype.$,Zh,[])}
function hh(){gh();this.a=ae(kh.prototype.ab,kh,[])}
function gh(){gh=_d;var a;fh=(a=ae(ih.prototype.W,ih,[]),a)}
function mh(){mh=_d;var a;lh=(a=ae(oh.prototype.W,oh,[]),a)}
function sh(){sh=_d;var a;rh=(a=ae(vh.prototype.W,vh,[]),a)}
function Fh(){Fh=_d;var a;Eh=(a=ae(Lh.prototype.W,Lh,[]),a)}
function Vh(){Vh=_d;var a;Uh=(a=ae(Xh.prototype.W,Xh,[]),a)}
function be(a){function b(){}
;b.prototype=a||{};return new b}
function t(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function xg(a){a.placeholder='What needs to be done?';return a}
function Je(){u.call(this,'Add not supported on this collection')}
function Of(a,b){gf.call(this,b.K(),b.J()&-6);this.a=a;this.b=b}
function zf(a){if(a.b){zf(a.b)}else if(a.c){throw Jd(new ye)}}
function N(a){H();$wnd.setTimeout(function(){throw a},0)}
function he(a,b,c,d){a.addEventListener(b,c,(ke(),d?true:false))}
function L(a,b,c){var d;d=J();try{return I(a,b,c)}finally{M(d)}}
function se(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.u(b))}
function Zd(a,b){for(var c in a){b[c]===undefined&&(b[c]=a[c])}}
function Bf(a,b){var c;return b.b.P(Gf(a,b.c.R(),(c=new Uf(b),c)))}
function Pi(a){var b;b=a.b;!!b&&!xi(a.c,b)&&(a.b=null,Ne(a.a,new Ui))}
function pf(a){return !a.a?a.c:a.e.length==0?a.a.a:a.a.a+(''+a.e)}
function af(a,b){while(a.a<a.c.a.length){b.O((a.b=a.a++,a.c.a[a.b]))}}
function of(a,b){!a.a?(a.a=new Ie(a.d)):Ge(a.a,a.b);Ge(a.a,b);return a}
function jf(a,b){if(a.c<a.d){kf(a,b,a.c++);return true}return false}
function C(){if(Date.now){return Date.now()}return (new Date).getTime()}
function K(b){H();return function(){return L(b,this,arguments);var a}}
function ah(a){return $wnd.React.createElement((gh(),fh),a.a,undefined)}
function dh(a){return $wnd.React.createElement((mh(),lh),a.a,undefined)}
function Wb(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function $h(a){return $wnd.React.createElement((sh(),rh),a.a,undefined)}
function hi(a){return $wnd.React.createElement((Vh(),Uh),a.a,undefined)}
function Ci(a,b){Ef(new Hf(null,new nf(a.a)),new Ji(b));Ne(a.b,new Hi)}
function Gf(a,b,c){var d;yf(a);d=new Rf;d.a=b;a.a.L(new Vf(d,c));return d.a}
function Cf(a){var b;yf(a);b=0;while(a.a.M(new Sf)){b=Kd(b,1)}return b}
function M(a){a&&T((R(),Q));--D;if(a){if(G!=-1){O(G);G=-1}}}
function Hh(a){Bi((li(),ji),null!=a.j.props[oj]?a.j.props[oj]:null)}
function Jh(a){yi((li(),ji),null!=a.j.props[oj]?a.j.props[oj]:null)}
function th(a,b){var c;c=b.target;jg(a,ae(xh.prototype.V,xh,[c.value]))}
function Qe(a,b){var c;c=Pe(a,b,0);if(c==-1){return false}Xf(a.a,c);return true}
function db(a,b,c,d,e,f){var g;g=eb(e,d);e!=10&&hb(bb(a,f),b,c,e,g);return g}
function Pe(a,b,c){for(;c<a.a.length;++c){if(bf(b,a.a[c])){return c}}return -1}
function Lf(a,b){gf.call(this,b.K(),b.J()&-16449);this.a=a;this.c=b}
function qf(a,b,c){this.b=a;this.d=b;this.e=c;this.c=this.d+(''+this.e)}
function jb(a){var b,c,d;b=a&aj;c=a>>22&aj;d=a<0?bj:0;return lb(b,c,d)}
function Ne(a,b){var c,d,e,f;for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.O(c)}}
function Dh(a,b){var c;c=a?kj:'';if(b){c.length==0||(c+=' ');c+='editing'}return c}
function pe(a){var b;b=new oe;b.k='Class$'+(a?'S'+a:''+b.g);b.b=b.k;b.i=b.k;return b}
function Id(a){var b;if(Qb(a,5)){return a}b=a&&a[$i];if(!b){b=new B(a);Z(b)}return b}
function T(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=W(b,c)}while(a.b);a.b=c}}
function S(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=W(b,c)}while(a.a);a.a=c}}
function we(a,b){var c;if(!a){return}b.j=a;var d=te(b);if(!d){Xd[a]=[b];return}d.bb=b}
function Yf(a,b){return cb(b)!=10&&hb(o(b),b.cb,b.__elementTypeId$,cb(b),a),a}
function cb(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function Tb(a){return a!=null&&(typeof a===Xi||typeof a==='function')&&!(a.db===de)}
function Wd(a,b){typeof window===Xi&&typeof window['$gwt']===Xi&&(window['$gwt'][a]=b)}
function ui(a,b){Me(a.a,new ti(''+Qd(Md((new Xe).a.getTime())),b));Ne(a.b,new Hi)}
function di(a,b){hg(a.a,oj,b);return $wnd.React.createElement((Fh(),Eh),a.a,undefined)}
function ae(a,b,c){var d=function(){return a.apply(d,arguments)};b.apply(d,c);return d}
function Ae(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function Ld(a){var b;b=a.h;if(b==0){return a.l+a.m*ej}if(b==bj){return a.l+a.m*ej-dj}return a}
function Od(a){var b,c,d,e;e=a;d=0;if(e<0){e+=dj;d=bj}c=Wb(e/ej);b=Wb(e-c*ej);return lb(b,c,d)}
function Kb(){Kb=_d;Gb=lb(aj,aj,524287);Hb=lb(0,0,cj);Ib=jb(1);jb(2);Jb=jb(0)}
function pi(){pi=_d;mi=new qi('ACTIVE',0);oi=new qi('COMPLETED',1);ni=new qi('ALL',2)}
function vj(){$wnd.ReactDOM.render(hi(new ii),(ge(),fe).getElementById(gj),null)}
function ye(){u.call(this,"Stream already terminated, can't be modified or used")}
function Td(){Ud();var a=Sd;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Be(a,b){var c,d;for(d=new Ve(a);d.a<d.c.a.length;){c=(d.b=d.a++,d.c.a[d.b]);yi(b.a,c)}}
function vb(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return lb(c&aj,d&aj,e&bj)}
function Cb(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return lb(c&aj,d&aj,e&bj)}
function yb(a){var b,c,d;b=~a.l+1&aj;c=~a.m+(b==0?1:0)&aj;d=~a.h+(b==0&&c==0?1:0)&bj;return lb(b,c,d)}
function rb(a){var b,c,d;b=~a.l+1&aj;c=~a.m+(b==0?1:0)&aj;d=~a.h+(b==0&&c==0?1:0)&bj;a.l=b;a.m=c;a.h=d}
function sb(a){var b,c;c=ze(a.h);if(c==32){b=ze(a.m);return b==32?ze(a.l)+32:b+20-10}else{return c-12}}
function ob(a,b,c,d,e){var f;f=Ab(a,b);c&&rb(f);if(e){a=qb(a,b);d?(ib=yb(a)):(ib=lb(a.l,a.m,a.h))}return f}
function hb(a,b,c,d,e){e.bb=a;e.cb=b;e.db=de;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function ng(a,b){a.className=Bf(new Hf(null,ff(b,b.length)),new sf(new xf,new wf,new tf));return a}
function vi(a){Bf(Df(new Hf(null,new nf(a.a)),new Fi),new sf(new vf,new uf,new rf)).D(new Gi(a))}
function wi(a){return Pd(Cf(new Hf(null,new nf(a.a))))-Pd(Cf(Df(new Hf(null,new nf(a.a)),new Ii)))}
function ef(a,b){if(0>a||a>b){throw Jd(new je('fromIndex: 0, toIndex: '+a+', length: '+b))}}
function Md(a){if(fj<a&&a<dj){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return Ld(xb(a))}
function uh(){sh();this.b=ae(yh.prototype._,yh,[this]);this.a=ae(zh.prototype.$,zh,[this])}
function mg(a){$wnd.React.Component.call(this,a);this.a=this.X();this.a.j=cf(this);this.a.T()}
function oe(){this.g=le++;this.k=null;this.i=null;this.f=null;this.d=null;this.b=null;this.j=null;this.a=null}
function B(a){w();q(this);this.e=a;a!=null&&Zf(a,$i,this);this.f=a==null?'null':ce(a);this.a='';this.b=a;this.a=''}
function fg(a){dg();var b,c,d;c=':'+a;d=cg[c];if(d!=null){return Wb(d)}d=ag[c];b=d==null?eg(a):Wb(d);gg();cg[c]=b;return b}
function Kd(a,b){var c;if(Sb(a)&&Sb(b)){c=a+b;if(fj<c&&c<dj){return c}}return Ld(vb(Sb(a)?Od(a):a,Sb(b)?Od(b):b))}
function o(a){return Ub(a)?sc:Sb(a)?hc:Rb(a)?fc:Pb(a)?a.bb:fb(a)?a.bb:a.bb||Array.isArray(a)&&bb(Yb,1)||Yb}
function p(a){return Ub(a)?fg(a):Sb(a)?Wb(a):Rb(a)?a?1231:1237:Pb(a)?a.o():fb(a)?_f(a):!!a&&!!a.hashCode?a.hashCode():_f(a)}
function ce(a){var b;if(Array.isArray(a)&&a.db===de){return ne(o(a))+'@'+(b=p(a)>>>0,b.toString(16))}return a.toString()}
function nb(a,b){if(a.h==cj&&a.m==0&&a.l==0){b&&(ib=lb(0,0,0));return kb((Kb(),Ib))}b&&(ib=lb(a.l,a.m,a.h));return lb(0,0,0)}
function J(){var a;if(D!=0){a=C();if(a-F>2000){F=a;G=$wnd.setTimeout(P,10)}}if(D++==0){S((R(),Q));return true}return false}
function $(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Zg(){Xg();return hb(bb($c,1),hj,6,0,[Bg,Cg,Dg,Eg,Fg,Gg,Hg,Ig,Jg,Kg,Lg,Mg,Ng,Og,Pg,Qg,Rg,Sg,Tg,Ug,Vg,Wg])}
function We(a){var b,c,d;d=1;for(c=new Ve(a);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=31*d+(b!=null?p(b):0);d=d|0}return d}
function Re(a,b){var c,d;d=a.a.length;b.length<d&&(b=Yf(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function ve(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function Ah(a,b){var c;if((li(),ki).b==(null!=a.j.props[oj]?a.j.props[oj]:null)){c=b.target;jg(a,ae(Nh.prototype.V,Nh,[c.value]))}}
function Ih(a){Ni((li(),ki),null!=a.j.props[oj]?a.j.props[oj]:null);jg(a,ae(Nh.prototype.V,Nh,[(null!=a.j.props[oj]?a.j.props[oj]:null).c]))}
function Gh(a,b){27==b.which?(jg(a,ae(Nh.prototype.V,Nh,[(null!=a.j.props[oj]?a.j.props[oj]:null).c])),Ni((li(),ki),null)):13==b.which&&Ch(a)}
function Qi(a){this.a=new Se;this.c=cf(a);he((ge(),$wnd.window.window),'hashchange',new Si(this),false);Ai(a,ae(Ti.prototype.Y,Ti,[this]))}
function qh(a,b){var c;if(13==b.keyCode){b.preventDefault();c=Fe(a.j.state[mj]);if(c.length>0){ui((li(),ji),c);jg(a,ae(xh.prototype.V,xh,['']))}}}
function Ob(a,b){if(Ub(a)){return !!Nb[b]}else if(a.cb){return !!a.cb[b]}else if(Sb(a)){return !!Mb[b]}else if(Rb(a)){return !!Lb[b]}return false}
function ee(){Ai((li(),ji),ae($g.prototype.Y,$g,[]));Oi(ki,ae(_g.prototype.Y,_g,[]));$wnd.ReactDOM.render(hi(new ii),(ge(),fe).getElementById(gj),null)}
function Fe(a){var b,c,d;c=a.length;d=0;while(d<c&&a.charCodeAt(d)<=32){++d}b=c;while(b>d&&a.charCodeAt(b-1)<=32){--b}return d>0||b<c?a.substr(d,b-d):a}
function qb(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return lb(c,d,e)}
function zb(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return lb(c&aj,d&aj,e&bj)}
function Bb(a,b){var c,d,e,f;b&=63;c=a.h&bj;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return lb(d&aj,e&aj,f&bj)}
function eb(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function ub(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&aj;a.m=d&aj;a.h=e&bj;return true}
function Li(a,b){var c,d;b.preventDefault();c=(d=(ge(),$wnd.window.window).location.hash,null==d?'':d.substr(1));Ee(jj,c)||Ee(kj,c)||Ee('',c)?Ne(a.a,new Ui):Mi()}
function wb(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function Vd(b,c,d,e){Ud();var f=Sd;$moduleName=c;$moduleBase=d;Hd=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Wi(g)()}catch(a){b(c,a)}}else{Wi(g)()}}
function _e(){_e=_d;Ze=hb(bb(sc,1),hj,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);$e=hb(bb(sc,1),hj,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function W(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].eb()&&(c=V(c,g)):g[0].eb()}catch(a){a=Id(a);if(Qb(a,5)){d=a;H();N(Qb(d,24)?d.t():d)}else throw Jd(a)}}return c}
function Yd(){Xd={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function A(a){var b;if(a.c==null){b=Vb(a.b)===Vb(v)?null:a.b;a.d=b==null?'null':Tb(b)?b==null?null:b.name:Ub(b)?'String':ne(o(b));a.a=a.a+': '+(Tb(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function eg(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+De(a,c++)}b=b|0;return b}
function Ch(a){var b;b=a.j.state[pj];if(b.length!=0){zi((li(),ji),null!=a.j.props[oj]?a.j.props[oj]:null,b);Ni(ki,null);jg(a,ae(Nh.prototype.V,Nh,[b]))}else{yi((li(),ji),null!=a.j.props[oj]?a.j.props[oj]:null)}}
function Mi(){var a;if(0==''.length){a=(ge(),$wnd.window.window).location.pathname+(''+$wnd.window.window.location.search);$wnd.window.window.history.pushState('',fe.title,a)}else{(ge(),$wnd.window.window).location.hash=''}}
function ze(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Ab(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&cj)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?bj:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?bj:0;f=d?aj:0;e=c>>b-44}return lb(e&aj,f&aj,g&bj)}
function $d(a,b,c){var d=Xd,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Xd[b]),be(h));_.cb=c;!b&&(_.db=de);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.bb=f)}
function Kh(){Fh();this.b=ae(Oh.prototype._,Oh,[this]);this.e=ae(Ph.prototype.Z,Ph,[this]);this.f=ae(Qh.prototype.$,Qh,[this]);this.d=ae(Rh.prototype.ab,Rh,[this]);this.c=ae(Sh.prototype.ab,Sh,[this]);this.a=ae(Th.prototype.$,Th,[this])}
function ue(a){if(a.B()){var b=a.c;b.C()?(a.k='['+b.j):!b.B()?(a.k='[L'+b.w()+';'):(a.k='['+b.w());a.b=b.v()+'[]';a.i=b.A()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.k=ve('.',[c,ve('$',d)]);a.b=ve('.',[c,ve('.',d)]);a.i=d[d.length-1]}
function Ki(a){var b,c,d;b=(d=(c=(ge(),$wnd.window.window).location.hash,null==c?'':c.substr(1)),Ee(jj,d)||Ee(kj,d)||Ee('',d)?Ee(jj,d)?(pi(),mi):Ee(kj,d)?(pi(),oi):(pi(),ni):(pi(),ni));return Bf(Df(new Hf(null,new nf(a.c.a)),new Vi(b)),new sf(new vf,new uf,new rf))}
function tb(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return Ae(c)}if(b==0&&d!=0&&c==0){return Ae(d)+22}if(b!=0&&d==0&&c==0){return Ae(b)+44}return -1}
function xb(a){var b,c,d,e,f;if(isNaN(a)){return Kb(),Jb}if(a<-9223372036854775808){return Kb(),Hb}if(a>=9223372036854775807){return Kb(),Gb}e=false;if(a<0){e=true;a=-a}d=0;if(a>=dj){d=Wb(a/dj);a-=d*dj}c=0;if(a>=ej){c=Wb(a/ej);a-=c*ej}b=Wb(a);f=lb(b,c,d);e&&rb(f);return f}
function Eb(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==cj&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Eb(yb(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=jb(1000000000);c=mb(c,e,true);b=''+Db(ib);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function pb(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=sb(b)-sb(a);g=zb(b,j);i=lb(0,0,0);while(j>=0){h=ub(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&rb(i);if(f){if(d){ib=yb(a);e&&(ib=Cb(ib,(Kb(),Ib)))}else{ib=lb(a.l,a.m,a.h)}}return i}
function Xg(){Xg=_d;Bg=new Yg(ij,0);Cg=new Yg('checkbox',1);Dg=new Yg('color',2);Eg=new Yg('date',3);Fg=new Yg('datetime',4);Gg=new Yg('email',5);Hg=new Yg('file',6);Ig=new Yg('hidden',7);Jg=new Yg('image',8);Kg=new Yg('month',9);Lg=new Yg(Yi,10);Mg=new Yg('password',11);Ng=new Yg('radio',12);Og=new Yg('range',13);Pg=new Yg('reset',14);Qg=new Yg('search',15);Rg=new Yg('submit',16);Sg=new Yg('tel',17);Tg=new Yg('text',18);Ug=new Yg('time',19);Vg=new Yg('url',20);Wg=new Yg('week',21)}
function mb(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw Jd(new ie)}if(a.l==0&&a.m==0&&a.h==0){c&&(ib=lb(0,0,0));return lb(0,0,0)}if(b.h==cj&&b.m==0&&b.l==0){return nb(a,c)}i=false;if(b.h>>19!=0){b=yb(b);i=true}g=tb(b);f=false;e=false;d=false;if(a.h==cj&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=kb((Kb(),Gb));d=true;i=!i}else{h=Ab(a,g);i&&rb(h);c&&(ib=lb(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=yb(a);d=true;i=!i}if(g!=-1){return ob(a,g,i,f,c)}if(wb(a,b)<0){c&&(f?(ib=yb(a)):(ib=lb(a.l,a.m,a.h)));return lb(0,0,0)}return pb(d?a:lb(a.l,a.m,a.h),b,i,f,e,c)}
var Xi='object',Yi='number',Zi='__noinit__',$i='__java$exception',_i={3:1,7:1,5:1},aj=4194303,bj=1048575,cj=524288,dj=17592186044416,ej=4194304,fj=-17592186044416,gj='todoapp',hj={3:1,4:1},ij='button',jj='active',kj='completed',lj='selected',mj='todoText',nj='input',oj='todo',pj='editText',qj='header',rj='user.agent';var _,Xd,Sd,Hd=-1;Yd();$d(1,null,{},n);_.n=function(){return this.bb};_.o=sj;_.p=function(){var a;return ne(o(this))+'@'+(a=p(this)>>>0,a.toString(16))};_.hashCode=function(){return this.o()};_.toString=function(){return this.p()};var Lb,Mb,Nb;$d(36,1,{},oe);_.u=function(a){var b;b=new oe;b.e=4;a>1?(b.c=se(this,a-1)):(b.c=this);return b};_.v=function(){me(this);return this.b};_.w=function(){return ne(this)};_.A=function(){me(this);return this.i};_.B=function(){return (this.e&4)!=0};_.C=function(){return (this.e&1)!=0};_.p=function(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(me(this),this.k)};_.e=0;_.g=0;var le=1;var pc=qe(1);var gc=qe(36);$d(5,1,{3:1,5:1});_.q=function(a){return new Error(a)};_.r=function(){return this.f};_.s=function(){var a,b,c;c=this.f==null?null:this.f.replace(new RegExp('\n','g'),' ');b=(a=ne(this.bb),c==null?a:a+': '+c);r(this,t(this.q(b)));Z(this)};_.p=function(){return s(this,this.r())};_.e=Zi;_.g=true;var tc=qe(5);$d(27,5,{3:1,5:1});var jc=qe(27);$d(7,27,_i);var qc=qe(7);$d(37,7,_i);var mc=qe(37);$d(48,37,_i);var $b=qe(48);$d(24,48,{24:1,3:1,7:1,5:1},B);_.r=function(){A(this);return this.c};_.t=function(){return Vb(this.b)===Vb(v)?null:this.b};var v;var Xb=qe(24);var Yb=qe(0);$d(99,1,{});var Zb=qe(99);var D=0,F=0,G=-1;$d(63,99,{},U);var Q;var _b=qe(63);var X;$d(112,1,{});var bc=qe(112);$d(49,112,{},ab);var ac=qe(49);var ib;var Gb,Hb,Ib,Jb;var fe;$d(46,1,{43:1});_.p=uj;var cc=qe(46);$d(61,7,_i,ie);var dc=qe(61);$d(51,7,_i);var lc=qe(51);$d(83,51,_i,je);var ec=qe(83);Lb={3:1,18:1};var fc=qe(109);$d(110,1,{3:1});var oc=qe(110);Mb={3:1,18:1};var hc=qe(111);$d(20,1,{3:1,18:1,20:1});_.o=sj;_.p=function(){return this.a!=null?this.a:''+this.b};_.b=0;var ic=qe(20);$d(50,7,_i,ye);var kc=qe(50);$d(174,1,{});$d(52,37,_i,Ce);_.q=function(a){return new TypeError(a)};var nc=qe(52);Nb={3:1,43:1,18:1,2:1};var sc=qe(2);$d(47,46,{43:1},Ie);var rc=qe(47);$d(178,1,{});$d(53,7,_i,Je);var uc=qe(53);$d(113,1,{96:1});_.D=function(a){Be(this,a)};_.F=function(a){throw Jd(new Je)};_.p=function(){var a,b,c;c=new qf(', ','[',']');for(b=this.G();b.H();){a=b.I();of(c,a===this?'(this Collection)':a==null?'null':ce(a))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};var vc=qe(113);$d(114,113,{96:1,121:1});_.F=function(a){Le(this,this.a.length,a);return true};_.o=function(){return We(this)};_.G=function(){return new Ke(this)};var xc=qe(114);$d(62,1,{},Ke);_.H=function(){return this.a<this.b.a.length};_.I=function(){return Oe(this.b,this.a++)};_.a=0;var wc=qe(62);$d(11,114,{3:1,11:1,96:1,121:1},Se);_.F=function(a){return Me(this,a)};_.D=function(a){Ne(this,a)};_.G=function(){return new Ve(this)};var zc=qe(11);$d(15,1,{},Ve);_.H=function(){return Te(this)};_.I=function(){return Ue(this)};_.a=0;_.b=-1;var yc=qe(15);$d(33,1,{3:1,18:1,33:1},Xe);_.o=function(){var a;a=Md(this.a.getTime());return Pd(Rd(a,Ld(Bb(Sb(a)?Od(a):a,32))))};_.p=function(){var a,b,c;c=-this.a.getTimezoneOffset();a=(c>=0?'+':'')+(c/60|0);b=Ye($wnd.Math.abs(c)%60);return (_e(),Ze)[this.a.getDay()]+' '+$e[this.a.getMonth()]+' '+Ye(this.a.getDate())+' '+Ye(this.a.getHours())+':'+Ye(this.a.getMinutes())+':'+Ye(this.a.getSeconds())+' GMT'+a+b+' '+this.a.getFullYear()};var Ac=qe(33);var Ze,$e;$d(73,1,{});_.L=tj;_.J=function(){return this.d};_.K=function(){return this.e};_.d=0;_.e=0;var Ec=qe(73);$d(40,73,{});var Bc=qe(40);$d(64,1,{});_.L=tj;_.J=function(){return this.b};_.K=function(){return this.d-this.c};_.b=0;_.c=0;_.d=0;var Dc=qe(64);$d(65,64,{},lf);_.L=function(a){hf(this,a)};_.M=function(a){return jf(this,a)};var Cc=qe(65);$d(10,1,{},nf);_.J=uj;_.K=function(){mf(this);return this.c};_.L=function(a){mf(this);af(this.d,a)};_.M=function(a){mf(this);if(Te(this.d)){a.O(Ue(this.d));return true}return false};_.a=0;_.c=0;var Fc=qe(10);$d(28,1,{28:1},qf);_.p=function(){return pf(this)};var Gc=qe(28);$d(32,1,{},rf);_.P=function(a){return a};var Hc=qe(32);$d(25,1,{},sf);var Ic=qe(25);$d(68,1,{},tf);_.P=function(a){return pf(a)};var Jc=qe(68);$d(30,1,{},uf);_.N=function(a,b){a.F(b)};var Kc=qe(30);$d(31,1,{},vf);_.R=function(){return new Se};var Lc=qe(31);$d(67,1,{},wf);_.N=function(a,b){of(a,b)};var Mc=qe(67);$d(66,1,{},xf);_.R=function(){return new qf(this.a,this.b,this.c)};var Nc=qe(66);$d(72,1,{});_.c=false;var Xc=qe(72);$d(9,72,{},Hf);var Wc=qe(9);$d(75,40,{},Lf);_.M=function(a){this.b=false;while(!this.b&&this.c.M(new Mf(this,a)));return this.b};_.b=false;var Pc=qe(75);$d(78,1,{},Mf);_.O=function(a){Kf(this.a,this.b,a)};var Oc=qe(78);$d(74,40,{},Of);_.M=function(a){return this.b.M(new Pf(this,a))};var Rc=qe(74);$d(77,1,{},Pf);_.O=function(a){Nf(this.a,this.b,a)};var Qc=qe(77);$d(76,1,{},Rf);_.O=function(a){Qf(this,a)};var Sc=qe(76);$d(79,1,{},Sf);_.O=function(a){};var Tc=qe(79);$d(80,1,{},Uf);var Uc=qe(80);$d(81,1,{},Vf);_.O=function(a){Jf(this.b,this.a,a)};var Vc=qe(81);$d(176,1,{});$d(173,1,{});var $f=0;var ag,bg=0,cg;$d(553,1,{});$d(115,1,{});_.S=function(a,b){};_.T=function(){};var Yc=qe(115);$d(21,$wnd.React.Component,{});Zd(Xd[1],_);_.render=function(){return this.a.U()};var Zc=qe(21);$d(6,20,{3:1,18:1,20:1,6:1},Yg);var Bg,Cg,Dg,Eg,Fg,Gg,Hg,Ig,Jg,Kg,Lg,Mg,Ng,Og,Pg,Qg,Rg,Sg,Tg,Ug,Vg,Wg;var $c=re(6,Zg);$d(127,$wnd.Function,{44:1},$g);_.Y=vj;$d(128,$wnd.Function,{44:1},_g);_.Y=vj;$d(118,115,{});_.U=function(){var a,b,c;a=(li(),c=(b=(ge(),$wnd.window.window).location.hash,null==b?'':b.substr(1)),Ee(jj,c)||Ee(kj,c)||Ee('',c)?Ee(jj,c)?(pi(),mi):Ee(kj,c)?(pi(),oi):(pi(),ni):(pi(),ni));return $wnd.React.createElement('footer',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['footer'])),dh(new eh),$wnd.React.createElement('ul',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['filters'])),$wnd.React.createElement('li',null,$wnd.React.createElement('a',pg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,[(pi(),ni)==a?lj:''])),'#'),'All')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',pg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,[mi==a?lj:''])),'#active'),'Active')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',pg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,[oi==a?lj:''])),'#completed'),'Completed'))),wi(ji)>0?$wnd.React.createElement(ij,qg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['clear-completed'])),this.a),'Clear Completed'):null)};var cd=qe(118);$d(85,1,{},bh);var _c=qe(85);$d(120,115,{});_.U=function(){var a,b;b=Pd(Cf(new Hf(null,new nf((li(),ji).a))));a='item'+(b==1?'':'s');return $wnd.React.createElement('span',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['todo-count'])),$wnd.React.createElement('strong',null,''+b),' '+a+' left')};var bd=qe(120);$d(93,1,{},eh);var ad=qe(93);$d(88,118,{},hh);var fh;var gd=qe(88);$d(147,$wnd.Function,{},ih);_.W=function(a){return new jh(a)};$d(89,21,{},jh);_.X=function(){return new hh};var dd=qe(89);$d(148,$wnd.Function,{},kh);_.ab=function(a){vi((li(),ji))};$d(94,120,{},nh);var lh;var fd=qe(94);$d(158,$wnd.Function,{},oh);_.W=function(a){return new ph(a)};$d(95,21,{},ph);_.X=function(){return new nh};var ed=qe(95);$d(117,115,{});_.T=function(){kg(this,ig(mj,''))};_.U=function(){return $wnd.React.createElement(nj,rg(vg(wg(zg(xg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['new-todo']))),this.j.state[mj]),this.b),this.a)))};var pd=qe(117);$d(86,117,{},uh);var rh;var jd=qe(86);$d(144,$wnd.Function,{},vh);_.W=function(a){return new wh(a)};$d(87,21,{},wh);_.X=function(){return new uh};var hd=qe(87);$d(123,$wnd.Function,{},xh);_.V=function(a,b){return sh(),ig(mj,this.a)};$d(145,$wnd.Function,{},yh);_._=function(a){qh(this.a,a)};$d(146,$wnd.Function,{},zh);_.$=function(a){th(this.a,a)};$d(119,115,{});_.S=function(a,b){var c;c=(li(),ki).b==(null!=this.j.props[oj]?this.j.props[oj]:null);if(!this.i&&c){this.i=true;jg(this,ae(Nh.prototype.V,Nh,[(null!=this.j.props[oj]?this.j.props[oj]:null).c]));this.g.focus();this.g.select()}else this.i&&!c&&(this.i=false)};_.T=function(){kg(this,ig(pj,(null!=this.j.props[oj]?this.j.props[oj]:null).c))};_.U=function(){var a,b;b=null!=this.j.props[oj]?this.j.props[oj]:null;a=b.a;return $wnd.React.createElement('li',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,[Dh(a,(li(),ki).b==(null!=this.j.props[oj]?this.j.props[oj]:null))])),$wnd.React.createElement('div',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['view'])),$wnd.React.createElement(nj,vg(sg(yg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['toggle'])),(Xg(),Cg)),a),this.f)),$wnd.React.createElement('label',Ag(new $wnd.Object,this.d),b.c),$wnd.React.createElement(ij,qg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['destroy'])),this.c))),$wnd.React.createElement(nj,wg(vg(ug(tg(ng(og(new $wnd.Object,ae(ai.prototype.O,ai,[this])),hb(bb(sc,1),hj,2,6,['edit'])),this.j.state[pj]),this.e),this.a),this.b)))};_.i=false;var rd=qe(119);$d(91,119,{},Kh);var Eh;var ld=qe(91);$d(149,$wnd.Function,{},Lh);_.W=function(a){return new Mh(a)};$d(92,21,{},Mh);_.X=function(){return new Kh};_.componentDidUpdate=function(a,b){this.a.S(a,b)};var kd=qe(92);$d(35,$wnd.Function,{},Nh);_.V=function(a,b){return Fh(),ig(pj,this.a)};$d(150,$wnd.Function,{},Oh);_._=function(a){Gh(this.a,a)};$d(151,$wnd.Function,{},Ph);_.Z=function(a){Ch(this.a)};$d(152,$wnd.Function,{},Qh);_.$=function(a){Hh(this.a)};$d(153,$wnd.Function,{},Rh);_.ab=function(a){Ih(this.a)};$d(154,$wnd.Function,{},Sh);_.ab=function(a){Jh(this.a)};$d(155,$wnd.Function,{},Th);_.$=function(a){Ah(this.a,a)};$d(116,115,{});_.U=function(){var a;return $wnd.React.createElement('div',null,$wnd.React.createElement('div',null,$wnd.React.createElement(qj,ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,[qj])),$wnd.React.createElement('h1',null,'todos'),$h(new _h)),0!=Pd(Cf(new Hf(null,new nf((li(),ji).a))))?$wnd.React.createElement('section',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,[qj])),$wnd.React.createElement(nj,vg(yg(ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['toggle-all'])),(Xg(),Cg)),this.a)),$wnd.React.createElement.apply(null,['ul',ng(new $wnd.Object,hb(bb(sc,1),hj,2,6,['todo-list']))].concat((a=Bf(Ff(new Hf(null,new nf(Ki(ki))),new gi),new sf(new vf,new uf,new rf)),Re(a,gb(a.a.length)))))):null,0!=Pd(Cf(new Hf(null,new nf(ji.a))))?ah(new bh):null))};var ud=qe(116);$d(69,116,{},Wh);var Uh;var nd=qe(69);$d(142,$wnd.Function,{},Xh);_.W=function(a){return new Yh(a)};$d(70,21,{},Yh);_.X=function(){return new Wh};var md=qe(70);$d(143,$wnd.Function,{},Zh);_.$=function(a){var b;b=a.target;Ci((li(),ji),b.checked)};$d(84,1,{},_h);var od=qe(84);$d(157,$wnd.Function,{},ai);_.O=function(a){Bh(this.a,a)};$d(90,1,{},ei);var qd=qe(90);$d(71,1,{},gi);_.P=function(a){return fi(a)};var sd=qe(71);$d(26,1,{},ii);var td=qe(26);var ji,ki;$d(22,20,{3:1,18:1,20:1,22:1},qi);var mi,ni,oi;var vd=re(22,ri);$d(39,1,{39:1},ti);_.a=false;var Cd=qe(39);$d(38,1,{38:1},Di);var Bd=qe(38);$d(56,1,{},Fi);_.Q=function(a){return a.a};var wd=qe(56);$d(57,1,{},Gi);_.O=function(a){yi(this.a,a)};var xd=qe(57);$d(19,1,{},Hi);_.O=wj;var yd=qe(19);$d(54,1,{},Ii);_.Q=function(a){return !a.a};var zd=qe(54);$d(55,1,{},Ji);_.O=function(a){Ei(this.a,a)};_.a=false;var Ad=qe(55);$d(58,1,{},Qi);var Gd=qe(58);$d(59,1,{},Si);_.handleEvent=function(a){Li(this.a,a)};var Dd=qe(59);$d(132,$wnd.Function,{44:1},Ti);_.Y=function(){Pi(this.a)};$d(29,1,{},Ui);_.O=wj;var Ed=qe(29);$d(60,1,{},Vi);_.Q=function(a){return Ri(this.a,a)};var Fd=qe(60);var Wi=(H(),K);var gwtOnLoad=gwtOnLoad=Vd;Td(ee);Wd('permProps',[[[rj,'gecko1_8']],[[rj,'ie10']],[[rj,'ie8']],[[rj,'ie9']],[[rj,'safari']]]);if (todomvc) todomvc.onScriptLoad(gwtOnLoad);})();