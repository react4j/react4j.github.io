function todomvc(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='todomvc',Pb='__gwt_marker_todomvc',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='B1A35F51917CF8A7FA8DA45E146010BB',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};todomvc.onScriptLoad=function(a){todomvc=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb);Db([Z],fb);Db([X],fb);Db([R],fb);Db([_],fb+gb);Db([V],fb+gb);Db([Z],fb+gb);Db([X],fb+gb);Db([R],fb+gb);Db([_],fb+hb);Db([V],fb+hb);Db([Z],fb+hb);Db([X],fb+hb);Db([R],fb+hb);Db([_],fb+ib);Db([V],fb+ib);Db([Z],fb+ib);Db([X],fb+ib);Db([R],fb+ib);Db([_],fb+jb);Db([V],fb+jb);Db([Z],fb+jb);Db([X],fb+jb);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|complete/.test(ob.readyState)){Ib()}},mb)}
todomvc();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'B1A35F51917CF8A7FA8DA45E146010BB';function n(){}
function Ni(){}
function Ji(){}
function cb(){}
function Yb(){}
function uc(){}
function vc(){}
function yc(){}
function cd(){}
function kd(){}
function kl(){}
function hl(){}
function jl(){}
function ll(){}
function ml(){}
function Ol(){}
function Pl(){}
function Ql(){}
function hn(){}
function jn(){}
function kn(){}
function xn(){}
function Jn(){}
function ro(){}
function so(){}
function Uo(){}
function Zo(){}
function _o(){}
function ap(){}
function cp(){}
function gp(){}
function op(){}
function qp(){}
function yp(){}
function Mq(){}
function Nq(){}
function Rr(){}
function Sr(a){}
function Or(a){sl()}
function hd(a){gd()}
function Vi(){Vi=Ji}
function X(a){this.a=a}
function Y(a){this.a=a}
function mb(a){this.a=a}
function yb(a){this.a=a}
function zb(a){this.a=a}
function Zb(a){this.a=a}
function $b(a){this.a=a}
function _b(a){this.a=a}
function oc(a){this.a=a}
function qc(a){this.a=a}
function rc(a){this.a=a}
function sc(a){this.a=a}
function wc(a){this.a=a}
function zc(a){this.a=a}
function jj(a){this.a=a}
function wj(a){this.a=a}
function Pj(a){this.a=a}
function Uj(a){this.a=a}
function Vj(a){this.a=a}
function Wj(a){this.a=a}
function Xj(a){this.a=a}
function Tj(a){this.b=a}
function gk(a){this.c=a}
function lk(a){this.a=a}
function mk(a){this.a=a}
function mn(a){this.a=a}
function ln(a){this.a=a}
function nn(a){this.a=a}
function un(a){this.a=a}
function vn(a){this.a=a}
function wn(a){this.a=a}
function Mn(a){this.a=a}
function Nn(a){this.a=a}
function On(a){this.a=a}
function Gl(a){this.a=a}
function Sl(a){this.a=a}
function to(a){this.a=a}
function uo(a){this.a=a}
function xo(a){this.a=a}
function zo(a){this.a=a}
function Ao(a){this.a=a}
function Bo(a){this.a=a}
function Co(a){this.a=a}
function Do(a){this.a=a}
function Fo(a){this.a=a}
function Go(a){this.a=a}
function Ho(a){this.a=a}
function Io(a){this.a=a}
function Qo(a){this.a=a}
function Ro(a){this.a=a}
function So(a){this.a=a}
function To(a){this.a=a}
function ep(a){this.a=a}
function fp(a){this.a=a}
function ip(a){this.a=a}
function jp(a){this.a=a}
function kp(a){this.a=a}
function lp(a){this.a=a}
function mp(a){this.a=a}
function np(a){this.a=a}
function tp(a){this.a=a}
function Pp(a){this.a=a}
function Qp(a){this.a=a}
function Zp(a){this.a=a}
function _p(a){this.a=a}
function bq(a){this.a=a}
function cq(a){this.a=a}
function dq(a){this.a=a}
function pq(a){this.a=a}
function qq(a){this.a=a}
function Bq(a){this.a=a}
function Cq(a){this.a=a}
function Dq(a){this.a=a}
function Eq(a){this.a=a}
function Fq(a){this.a=a}
function Oq(a){this.a=a}
function Pq(a){this.a=a}
function Qq(a){this.a=a}
function Wo(){this.a={}}
function Yo(){this.a={}}
function sp(){this.a={}}
function xp(){this.a={}}
function Ap(){this.a={}}
function Bk(){this.a=Kk()}
function Pk(){this.a=Kk()}
function Xr(){jm(this.a)}
function Er(a){Tk(this,a)}
function Nr(a){Xk(this,a)}
function Hr(a){pj(this,a)}
function hb(a){Qb((I(),a))}
function ib(a){Rb((I(),a))}
function kb(a){Sb((I(),a))}
function eq(a,b){Lp(b,a)}
function D(a,b){Cb(a.b,b)}
function ub(a,b){a.j=b}
function Nl(a,b){a.a=b}
function sb(a,b){a.b=Wk(b)}
function Eb(a){this.a=Wk(a)}
function Fb(a){this.a=Wk(a)}
function Hb(a){this.a=Wk(a)}
function Cc(a){this.a=Wk(a)}
function vk(){this.a=new uk}
function I(){I=Ji;H=new G}
function Kc(){Kc=Ji;Jc=new n}
function bb(){bb=Ji;ab=new cb}
function _c(){_c=Ji;$c=new cd}
function Gk(){Gk=Ji;Fk=Ik()}
function sl(){sl=Ji;rl=new Pl}
function pi(a){return a.e}
function Sn(a,b){return a.q=b}
function sj(a,b){return a===b}
function Dr(){return this.b}
function Cr(){return this.a}
function Mr(){return this.d}
function Pr(){return this.d<0}
function Ur(){return this.c<0}
function Zr(){return this.g<0}
function Gr(){return this.a.b}
function Br(){return _l(this)}
function qj(){Hc.call(this)}
function xj(){Hc.call(this)}
function yj(a){Ic.call(this,a)}
function Ui(a){Ic.call(this,a)}
function $o(a){mm.call(this,a)}
function bp(a){mm.call(this,a)}
function dp(a){mm.call(this,a)}
function hp(a){mm.call(this,a)}
function pp(a){mm.call(this,a)}
function Ar(a){return this===a}
function Tr(){return I(),I(),H}
function _j(a,b){return a.a[b]}
function Tl(a,b){Dl(a.b,a.a,b)}
function al(a,b,c){b.J(a.a[c])}
function hm(a,b,c){a[b]=c}
function Wl(a,b){a.splice(b,1)}
function ld(a,b){return bj(a,b)}
function Ac(a){return !a||Gp(a)}
function Fr(){return Nj(this.a)}
function Hc(){Dc(this);this.R()}
function Z(a){$d(a,12)&&a.D()}
function sn(a){eb(a.b);nb(a.a)}
function Kb(a){Lb(a);!a.e&&Ob(a)}
function Yi(a){Xi(a);return a.k}
function Al(a){ol(a);return a.a}
function Kk(){Gk();return new Fk}
function fc(a){jb(a.a);return a.e}
function gc(a){jb(a.b);return a.g}
function C(a,b,c){return A(a,c,b)}
function Wr(a,b){this.a.rb(a,b)}
function Xk(a,b){while(a.nb(b));}
function Kl(a,b,c){b.J(a.a.N(c))}
function fb(a){I();Rb(a);a.e=-2}
function Nd(a){return a.l|a.m<<22}
function Nj(a){return a.a.b+a.b.b}
function ic(a){ec(a,(jb(a.b),a.g))}
function Rc(){Rc=Ji;!!(gd(),fd)}
function Ci(){Ai==null&&(Ai=[])}
function G(){this.b=new Db(this)}
function Db(a){this.c=new R;Wk(a)}
function qd(a){return new Array(a)}
function ti(a,b){return ri(a,b)==0}
function Mk(a,b){return a.a.get(b)}
function pc(a,b){this.a=a;this.b=b}
function xc(a,b){this.a=a;this.b=b}
function gj(a,b){this.a=a;this.b=b}
function Yj(a,b){this.a=a;this.b=b}
function Jl(a,b){this.a=a;this.b=b}
function Ml(a,b){this.a=a;this.b=b}
function Kn(a,b){this.a=a;this.b=b}
function Ln(a,b){this.a=a;this.b=b}
function wo(a,b){this.a=a;this.b=b}
function yo(a,b){this.a=a;this.b=b}
function Eo(a,b){this.a=a;this.b=b}
function Ul(a,b){this.b=a;this.a=b}
function $p(a,b){this.a=a;this.b=b}
function nq(a,b){this.a=a;this.b=b}
function oq(a,b){this.b=a;this.a=b}
function rq(a,b){this.a=a;this.b=b}
function Kq(a,b){gj.call(this,a,b)}
function $m(a,b){gj.call(this,a,b)}
function Lr(a){return Fj(this.a,a)}
function up(a){return vp(new xp,a)}
function ae(a){return typeof a===Tq}
function uq(a){jb(a.d);return a.j}
function qm(a,b){a.ref=b;return a}
function rm(a,b){a.href=b;return a}
function Bm(a,b){a.value=b;return a}
function uj(a,b){a.a+=''+b;return a}
function Vl(a,b,c){a.splice(b,0,c)}
function F(a){a.c&&a.d==0&&Bb(a.b)}
function L(a){a.b=0;a.d=0;a.c=false}
function Zc(){Oc!=0&&(Oc=0);Qc=-1}
function nk(){this.a=new $wnd.Date}
function Mj(a){a.a=new Bk;a.b=new Pk}
function u(a){++a.d;return new Hb(a)}
function Ir(){return new dl(this,0)}
function Kr(){return new dl(this,1)}
function Ej(a){return !a?null:a.jb()}
function de(a){return a==null?null:a}
function Vk(a){return a!=null?q(a):0}
function Mb(a){return !a.e?a:Mb(a.e)}
function ud(a){return vd(a.l,a.m,a.h)}
function $(a){return $d(a,12)&&a.F()}
function ok(a){return a<10?'0'+a:''+a}
function io(a){return a.t=false,Wn(a)}
function Rl(a,b,c){return Cl(a.a,b,c)}
function Jp(a){Lp(a,(jb(a.a),!a.e))}
function fn(a){eb(a.c);nb(a.b);T(a.a)}
function Gn(a){eb(a.c);nb(a.a);eb(a.b)}
function Kp(a){eb(a.c);eb(a.b);eb(a.a)}
function Yc(a){$wnd.clearTimeout(a)}
function um(a,b){a.checked=b;return a}
function wm(a,b){a.onBlur=b;return a}
function sm(a,b){a.onClick=b;return a}
function xm(a,b){a.onChange=b;return a}
function ym(a,b){a.onKeyDown=b;return a}
function lb(a){this.b=new fk;this.c=a}
function fk(){this.a=nd(lf,Uq,1,0,5,1)}
function R(){this.a=nd(lf,Uq,1,100,5,1)}
function jb(a){var b;Nb((I(),b=Ib,b),a)}
function Dk(a){var b;b=a[kr];b.call(a,0)}
function Yr(a,b){return lm(this.a,a,b)}
function $d(a,b){return a!=null&&Yd(a,b)}
function rj(a,b){return a.charCodeAt(b)}
function vd(a,b,c){return {l:a,m:b,h:c}}
function _l(a){return a.$H||(a.$H=++$l)}
function ce(a){return typeof a==='string'}
function tm(a){a.autoFocus=true;return a}
function Gb(a){if(!a.b){a.b=true;w(a.a)}}
function w(a){--a.d;a.c&&a.d==0&&Bb(a.b)}
function Xi(a){if(a.k!=null){return}dj(a)}
function Ec(a,b){a.e=b;b!=null&&Zl(b,_q,a)}
function Dl(a,b,c){sl();Nl(a,Rl(b,a.a,c))}
function Fl(a,b){!$d(b,21)||b.L();a.J(b)}
function V(a,b){r((I(),I(),H),new X(a),b)}
function Hn(a,b){if(b!=a.g){a.g=b;ib(a.b)}}
function po(a,b){if(b!=a.r){a.r=b;ib(a.a)}}
function Lp(a,b){if(b!=a.e){a.e=b;ib(a.a)}}
function vm(a,b){a.defaultValue=b;return a}
function Cm(a,b){a.onDoubleClick=b;return a}
function dm(){dm=Ji;am=new n;cm=new n}
function tk(){this.a=new Bk;this.b=new Pk}
function uk(){this.a=new Bk;this.b=new Pk}
function Ic(a){this.f=a;Dc(this);this.R()}
function Jr(){return new Bl(null,this.cb())}
function Xp(a){return mj(U(a.e).a-U(a.a).a)}
function Gj(a,b){return Hj(b,a.b)||Hj(b,a.a)}
function Sc(a,b,c){return a.apply(b,c);var d}
function Cl(a,b,c){sl();a.a.ob(b,c);return b}
function _i(a){var b;b=$i(a);fj(a,b);return b}
function Dc(a){a.g&&a.e!==$q&&a.R();return a}
function _d(a){return typeof a==='boolean'}
function Ek(a,b){var c;c=a[kr];c.call(a,b)}
function El(a,b,c){this.a=a;Zk.call(this,b,c)}
function il(a,b,c){this.c=a;this.a=b;this.b=c}
function Sk(a,b,c){this.a=a;this.b=b;this.c=c}
function vo(a,b,c){this.a=a;this.b=b;this.c=c}
function nl(){this.a=' ';this.b='';this.c=''}
function Ti(){Ic.call(this,'divide by zero')}
function Qi(){Qi=Ji;Pi=$wnd.window.document}
function oj(){oj=Ji;nj=nd(gf,Uq,32,256,0,1)}
function gd(){gd=Ji;var a;!jd();a=new kd;fd=a}
function Bc(a){if(a.b){nb(a.b);a.b=null}Z(a.a)}
function kc(a,b){if(b!=a.e){a.e=Wk(b);ib(a.a)}}
function lc(a,b){if(b!=a.g){a.g=Wk(b);ib(a.b)}}
function zq(a,b){if(!sk(b,a.j)){a.j=b;ib(a.d)}}
function Tk(a,b){while(a.fb()){Tl(b,a.gb())}}
function $k(a,b){while(a.c<a.d){al(a,b,a.c++)}}
function Hl(a,b,c){if(a.a.M(c)){a.b=true;b.J(c)}}
function vp(a,b){hm(a.a,'key',Wk(b));return a}
function Zj(a,b){a.a[a.a.length]=b;return true}
function bc(a,b){a.i&&b.preventDefault();mc(a)}
function yn(a,b){var c;c=b.target;Hn(a,c.value)}
function pb(a,b){gb(b,a);b.b.a.length>0||(b.a=1)}
function Bl(a,b){sl();ql.call(this,a);this.a=b}
function Lj(a,b){return b==null?Ak(a.a):Ok(a.b,b)}
function Fj(a,b){return ce(b)?Ij(a,b):!!yk(a.a,b)}
function Lk(a,b){return !(a.a.get(b)===undefined)}
function km(a){return $d(a,12)&&a.F()?null:a.ub()}
function Wp(a){return Vi(),0==U(a.e).a?true:false}
function pd(a){return Array.isArray(a)&&a.Db===Ni}
function Zd(a){return !Array.isArray(a)&&a.Db===Ni}
function cl(a){if(!a.d){a.d=a.b.$();a.c=a.b.bb()}}
function en(a){a.t=true;a.u||a.v.forceUpdate()}
function Zl(b,c,d){try{b[c]=d}catch(a){}}
function xi(a){if(ae(a)){return a|0}return Nd(a)}
function yi(a){if(ae(a)){return ''+a}return Od(a)}
function Wk(a){if(a==null){throw pi(new qj)}return a}
function dd(a,b){!a&&(a=[]);a[a.length]=b;return a}
function dk(a,b,c){var d;d=a.a[b];a.a[b]=c;return d}
function bk(a,b){var c;c=a.a[b];Wl(a.a,b);return c}
function Gp(a){var b;b=a.d<0;b||jb(a.c);return !b}
function Rj(a){var b;b=a.a.gb();a.b=Qj(a);return b}
function Q(a){return a.c?a.a.length-a.b+a.d:a.d-a.b}
function Pd(a,b){return vd(a.l^b.l,a.m^b.m,a.h^b.h)}
function Jj(a,b,c){return ce(b)?Kj(a,b,c):zk(a.a,b,c)}
function sk(a,b){return de(a)===de(b)||a!=null&&o(a,b)}
function zr(a,b){return de(a)===de(b)||a!=null&&o(a,b)}
function sq(a){return sj(xr,a)||sj(ur,a)||sj('',a)}
function ol(a){if(!a.b){pl(a);a.c=true}else{ol(a.b)}}
function Jb(a){if(a.f){a.f.e||vb(a.f,1,true);qb(a.f)}}
function wl(a,b){pl(a);return new Bl(a,new Il(b,a.a))}
function xl(a,b){pl(a);return new Bl(a,new Ll(b,a.a))}
function Ij(a,b){return b==null?!!yk(a.a,null):Lk(a.b,b)}
function Cb(a,b){b.o=true;b.f?K(a.c,Wk(b)):J(a.c,Wk(b))}
function Am(a,b){a.type=b.a!=null?b.a:''+b.b;return a}
function aj(a,b){var c;c=$i(a);fj(a,c);c.e=b?8:0;return c}
function bl(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function Zk(a,b){this.e=a;this.d=(b&64)!=0?b|16384:b}
function dl(a,b){this.b=a;this.a=(b&4096)==0?b|64|16384:b}
function aq(a,b,c){this.a=a;this.c=b;this.d=c;this.b=false}
function ql(a){if(!a){this.b=null;new fk}else{this.b=a}}
function cj(a){if(a.Y()){return null}var b=a.j;return Fi[b]}
function Qr(){var a;return a=this.d<0,a||jb(this.c),!a}
function Vr(){var a;return a=this.c<0,a||jb(this.b),!a}
function $r(){var a;return a=this.g<0,a||jb(this.f),!a}
function Lq(){Jq();return rd(ld(di,1),Uq,40,0,[Gq,Iq,Hq])}
function zi(a,b){return si(Pd(ae(a)?wi(a):a,ae(b)?wi(b):b))}
function Dj(a,b){return b===a?'(this Map)':b==null?br:Mi(b)}
function Kj(a,b,c){return b==null?zk(a.a,null,c):Nk(a.b,b,c)}
function ij(a){this.f=!a?null:Fc(a,a.Q());Dc(this);this.R()}
function kk(a){var b;b=new vk;Jj(b.a,a,b);return new mk(b)}
function Fc(a,b){var c;c=Yi(a.Bb);return b==null?c:c+': '+b}
function Qn(a,b){var c;if(U(a.d)){c=b.target;po(a,c.value)}}
function Bn(){Bn=Ji;var a;An=(a=Ki(cp.prototype.vb,cp,[]),a)}
function qn(){qn=Ji;var a;pn=(a=Ki(ap.prototype.vb,ap,[]),a)}
function Zn(){Zn=Ji;var a;Yn=(a=Ki(gp.prototype.vb,gp,[]),a)}
function bn(){bn=Ji;var a;an=(a=Ki(Zo.prototype.vb,Zo,[]),a)}
function Ko(){Ko=Ji;var a;Jo=(a=Ki(op.prototype.vb,op,[]),a)}
function Li(a){function b(){}
;b.prototype=a||{};return new b}
function Ub(a,b){Ib=new Tb(a,Ib,b);a.c=false;Jb(Ib);return Ib}
function co(a){eb(a.f);nb(a.e);nb(a.b);T(a.d);eb(a.c);eb(a.a)}
function vq(a){eb(a.f);nb(a.e);nb(a.a);T(a.b);T(a.c);eb(a.d)}
function Wb(a){if(!$(a.a)&&U(a.a)){v((I(),I(),H),a.b);Z(a.c)}}
function pl(a){if(a.b){pl(a.b)}else if(a.c){throw pi(new hj)}}
function Xc(a){Rc();$wnd.setTimeout(function(){throw a},0)}
function gm(){if(bm==256){am=cm;cm=new n;bm=0}++bm}
function jq(a,b){Sp(a.c,''+yi(ui((new nk).a.getTime())),b)}
function db(a,b){var c;Zj(a.b,b);c=0==b.p?1:b.p;a.a>c&&(a.a=c)}
function pj(a,b){var c,d;for(d=a.$();d.fb();){c=d.gb();b.J(c)}}
function bj(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.T(b))}
function xk(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function yk(a,b){var c;return wk(b,xk(a,b==null?0:(c=q(b),c|0)))}
function hk(a,b){return new Bl(null,(Yk(b,a.length),new bl(a,b)))}
function eo(a,b){a.v.props[tr]===(null==b?null:b[tr])||ib(a.c)}
function T(a){if(!a.a){a.a=true;a.g=null;a.c=null;a.f.e||nb(a.f)}}
function fl(a){return !a.a?a.c:a.e.length==0?a.a.a:a.a.a+(''+a.e)}
function Vb(){var a;Kb(Ib);a=Ib.e;!a&&(Ib.a.c=true);Ib=Ib.e}
function xq(a){var b;b=(jb(a.d),a.j);!!b&&!!b&&b.d<0&&zq(a,null)}
function ac(a,b){a.j=b;sj(b,(jb(a.a),a.e))&&lc(a,b);cc(b);mc(a)}
function ul(a,b){var c;return b.b.N(zl(a,b.c.O(),(c=new Sl(b),c)))}
function tl(a,b){return (pl(a),Al(new Bl(a,new Il(b,a.a)))).nb(rl)}
function Hi(a,b){for(var c in a){b[c]===undefined&&(b[c]=a[c])}}
function Ri(a,b,c,d){a.addEventListener(b,c,(Vi(),d?true:false))}
function Si(a,b,c,d){a.removeEventListener(b,c,(Vi(),d?true:false))}
function Vc(a,b,c){var d;d=Tc();try{return Sc(a,b,c)}finally{Wc(d)}}
function Tb(a,b,c){this.a=Wk(a);this.b=a.a++;this.e=b;this.f=c}
function Ll(a,b){Zk.call(this,b.mb(),b.lb()&-6);this.a=a;this.b=b}
function Ck(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function Il(a,b){Zk.call(this,b.mb(),b.lb()&-16449);this.a=a;this.c=b}
function O(a,b){a.a[a.d]=b;++a.d;if(a.d>=a.a.length){a.d=0;a.c=true}}
function $n(a){if(a.g>=0){a.g=-2;v((I(),I(),H),new uo(a));a.g=-1}}
function eb(a){if(-2!=a.e){v((I(),I(),H),new mb(a));!!a.c&&nb(a.c)}}
function _k(a,b){if(a.c<a.d){al(a,b,a.c++);return true}return false}
function el(a,b){!a.a?(a.a=new wj(a.d)):uj(a.a,a.b);uj(a.a,b);return a}
function zm(a){a.placeholder='What needs to be done?';return a}
function vl(a){var b;ol(a);b=0;while(a.a.nb(new Ql)){b=qi(b,1)}return b}
function Gc(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function hq(a,b){ul(Up(a.c),new il(new ll,new kl,new hl)).Z(new Pq(b))}
function Fp(){Fp=Ji;Bp=new nc;Cp=new Yp;Dp=new mq(Cp);Ep=new Aq(Cp,Bp)}
function td(a){var b,c,d;b=a&cr;c=a>>22&cr;d=a<0?dr:0;return vd(b,c,d)}
function Vo(a){return $wnd.React.createElement((bn(),an),a.a,undefined)}
function Xo(a){return $wnd.React.createElement((qn(),pn),a.a,undefined)}
function rp(a){return $wnd.React.createElement((Bn(),An),a.a,undefined)}
function zp(a){return $wnd.React.createElement((Ko(),Jo),a.a,undefined)}
function ee(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function Wc(a){a&&bd((_c(),$c));--Oc;if(a){if(Qc!=-1){Yc(Qc);Qc=-1}}}
function tq(a,b){return (Jq(),Hq)==a||(Gq==a?(jb(b.a),!b.e):(jb(b.a),b.e))}
function gl(a,b,c){this.b=a;this.d=b;this.e=c;this.c=this.d+(''+this.e)}
function Qk(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function _n(a){jb(a.c);return null!=a.v.props[tr]?a.v.props[tr]:null}
function fo(a){po(a,gc((jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null)))}
function yl(a){var b;pl(a);b=new El(a,a.a.mb(),a.a.lb());return new Bl(a,b)}
function zl(a,b,c){var d;ol(a);d=new Ol;d.a=b;a.a.eb(new Ul(d,c));return d.a}
function nd(a,b,c,d,e,f){var g;g=od(e,d);e!=10&&rd(ld(a,f),b,c,e,g);return g}
function Bb(a){var b;if(0!=a.a){return 0}else{b=0;while(Ab(a)){++b}return b}}
function Rk(a){if(a.a.c!=a.c){return Mk(a.a,a.b.value[0])}return a.b.value[1]}
function Nc(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Uc(b){Rc();return function(){return Vc(b,this,arguments);var a}}
function ck(a,b){var c;c=ak(a,b,0);if(c==-1){return false}Wl(a.a,c);return true}
function ak(a,b,c){for(;c<a.a.length;++c){if(sk(b,a.a[c])){return c}}return -1}
function N(a,b){if(0==a.b){a.b=a.a.length-1;a.c=true}else{--a.b}a.a[a.b]=b}
function Rn(a,b){27==b.which?(oo(a),zq((Fp(),Ep),null)):13==b.which&&mo(a)}
function Xl(a,b){return md(b)!=10&&rd(p(b),b.Cb,b.__elementTypeId$,md(b),a),a}
function md(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function jm(a){var b;b=u(a.sb());try{a.u=true;$d(a,12)&&a.D()}finally{Gb(b)}}
function tb(b){if(b){try{b.G()}catch(a){a=oi(a);if($d(a,4)){I()}else throw pi(a)}}}
function Tn(a){Tp((Fp(),Cp),(jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null))}
function hc(a){Si((Qi(),$wnd.window.window),Yq,a.f,false);eb(a.c);eb(a.b);eb(a.a)}
function ad(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=ed(b,c)}while(a.a);a.a=c}}
function bd(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=ed(b,c)}while(a.b);a.b=c}}
function s(a,b,c){var d,e,f;f=new Eb(b);e=(d=new xb(null,f,c),d);Cb(a.b,e);return e}
function $j(a,b){var c,d,e,f;for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.J(c)}}
function Xn(a,b){var c;c=a?ur:'';if(b){c.length==0||(c+=' ');c+='editing'}return c}
function $i(a){var b;b=new Zi;b.k='Class$'+(a?'S'+a:''+b.g);b.b=b.k;b.i=b.k;return b}
function tc(a,b){var c;c=Lj(a.i,b?b.f:null);if(c){!!c&&Bc(c);ib(a.d)}else{new zc(b)}}
function fj(a,b){var c;if(!a){return}b.j=a;var d=cj(b);if(!d){Fi[a]=[b];return}d.Bb=b}
function pm(a,b){a.className=ul(hk(b,b.length),new il(new nl,new ml,new jl));return a}
function iq(a){ul(wl(Up(a.c),new Nq),new il(new ll,new kl,new hl)).Z(new Oq(a.c))}
function Sj(a){this.d=a;this.c=new Qk(this.d.b);this.a=this.c;this.b=Qj(this)}
function Ud(){Ud=Ji;Qd=vd(cr,cr,524287);Rd=vd(0,0,er);Sd=td(1);td(2);Td=td(0)}
function Jq(){Jq=Ji;Gq=new Kq('ACTIVE',0);Iq=new Kq('COMPLETED',1);Hq=new Kq('ALL',2)}
function Up(a){jb(a.d);return xl(wl(new Bl(null,new dl(new Wj(a.i),0)),new uc),new vc)}
function wp(a,b){hm(a.a,tr,b);return $wnd.React.createElement((Zn(),Yn),a.a,undefined)}
function Ki(a,b,c){var d=function(){return a.apply(d,arguments)};b.apply(d,c);return d}
function oi(a){var b;if($d(a,4)){return a}b=a&&a[_q];if(!b){b=new Mc(a);hd(b)}return b}
function lj(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function Nb(a,b){var c;if(a.f){c=a.b;if(b.e!=c){b.e=c;Zj((!a.c&&(a.c=new fk),a.c),b)}}}
function Pb(a,b){var c;if(!a.d){c=Mb(a);!c.d&&(c.d=new fk);a.d=c.d}b.d=true;Zj(a.d,Wk(b))}
function J(a,b){var c;c=(a.c?a.a.length-a.b+a.d:a.d-a.b)+1;c>a.a.length&&M(a,c);O(a,Wk(b))}
function K(a,b){var c;c=(a.c?a.a.length-a.b+a.d:a.d-a.b)+1;c>a.a.length&&M(a,c);N(a,Wk(b))}
function Ok(a,b){var c;c=a.a.get(b);if(c===undefined){++a.c}else{Ek(a.a,b);--a.b}return c}
function Vp(a){pj(new Wj(a.i),new yc);Mj(a.i);eb(a.f);T(a.c);T(a.e);T(a.a);T(a.b);eb(a.d)}
function rb(a){I();qb(a);$j(a.b,new zb(a));a.b.a=nd(lf,Uq,1,0,5,1);a.d=true;vb(a,0,true)}
function qb(a){var b,c;for(c=new gk(a.b);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);b.a=1}}
function Bi(){Ci();var a=Ai;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function hj(){Ic.call(this,"Stream already terminated, can't be modified or used")}
function be(a){return a!=null&&(typeof a===Sq||typeof a==='function')&&!(a.Db===Ni)}
function Ei(a,b){typeof window===Sq&&typeof window['$gwt']===Sq&&(window['$gwt'][a]=b)}
function Yk(a,b){if(0>a||a>b){throw pi(new Ui('fromIndex: 0, toIndex: '+a+', length: '+b))}}
function ui(a){if(hr<a&&a<fr){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return si(Hd(a))}
function si(a){var b;b=a.h;if(b==0){return a.l+a.m*gr}if(b==dr){return a.l+a.m*gr-fr}return a}
function Aj(a,b){var c,d;for(d=b.$();d.fb();){c=d.gb();if(!a.ab(c)){return false}}return true}
function ik(a){var b,c,d;d=0;for(c=a.$();c.fb();){b=c.gb();d=d+(b!=null?q(b):0);d=d|0}return d}
function Hj(a,b){var c,d;for(d=b.$();d.fb();){c=d.gb();if(sk(a,c.jb())){return true}}return false}
function Fd(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return vd(c&cr,d&cr,e&dr)}
function Md(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return vd(c&cr,d&cr,e&dr)}
function wi(a){var b,c,d,e;e=a;d=0;if(e<0){e+=fr;d=dr}c=ee(e/gr);b=ee(e-c*gr);return vd(b,c,d)}
function om(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(sj(c,a)){return true}}return false}
function wk(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(sk(a,c.ib())){return c}}return null}
function t(a,b,c,d){var e,f;e=new W(a,b,d);f=e.f;f.g=null;f.i=c;f.k=null;f.j=null;return e}
function Un(a){zq((Fp(),Ep),(jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null));oo(a)}
function wq(a){var b;return b=U(a.b),ul(wl(Up(a.k),new Qq(b)),new il(new ll,new kl,new hl))}
function jo(a){return Vi(),tl(yl(xl(new Bl(null,new dl(kk(new to(a)),1)),new ro)),new so)?true:false}
function go(a){return Vi(),uq((Fp(),Ep))==(jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null)?true:false}
function Qj(a){if(a.a.fb()){return true}if(a.a!=a.c){return false}a.a=new Ck(a.d.a);return a.a.fb()}
function mm(a){$wnd.React.Component.call(this,a);this.a=this.wb();this.a.v=Wk(this);this.a.pb()}
function mq(a){var b;this.c=Wk(a);this.b=1;this.a=(b=new lb((I(),null)),b);this.b=2;this.b=4}
function W(a,b,c){this.d=Wk(a);this.b=Wk(b);this.g=null;this.e=false;this.f=new xb(this,new Y(this),c)}
function gb(a,b){var c,d;d=a.b;ck(d,b);d.a.length==0&&!!a.c&&!a.c.a.e&&(a.d||Pb((I(),c=Ib,c),a))}
function yq(a){var b;b=fc(a.i);sj(xr,b)||sj(ur,b)||sj('',b)?ec(a.i,b):sq(gc(a.i))?jc(a.i):ec(a.i,'')}
function Cd(a){var b,c;c=kj(a.h);if(c==32){b=kj(a.m);return b==32?kj(a.l)+32:b+20-10}else{return c-12}}
function Id(a){var b,c,d;b=~a.l+1&cr;c=~a.m+(b==0?1:0)&cr;d=~a.h+(b==0&&c==0?1:0)&dr;return vd(b,c,d)}
function Bd(a){var b,c,d;b=~a.l+1&cr;c=~a.m+(b==0?1:0)&cr;d=~a.h+(b==0&&c==0?1:0)&dr;a.l=b;a.m=c;a.h=d}
function Nk(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);d===undefined?++a.b:++a.c;return d}
function yd(a,b,c,d,e){var f;f=Kd(a,b);c&&Bd(f);if(e){a=Ad(a,b);d?(sd=Id(a)):(sd=vd(a.l,a.m,a.h))}return f}
function rd(a,b,c,d,e){e.Bb=a;e.Cb=b;e.Db=Ni;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Oi(){Fp();$wnd.ReactDOM.render(zp(new Ap),(Qi(),Pi).getElementById('todoapp'),null)}
function ob(b){if(!b.d){try{1!=b.p&&b.n.H(b)}catch(a){a=oi(a);if($d(a,4)){I()}else throw pi(a)}}}
function U(a){jb(a.f.c);wb(a.f)&&ob(a.f);if(a.c){if($d(a.c,6)){throw pi(a.c)}else{throw pi(a.c)}}return a.g}
function zj(a,b){var c,d;for(d=a.$();d.fb();){c=d.gb();if(de(b)===de(c)||b!=null&&o(b,c)){return true}}return false}
function mj(a){var b,c;if(a>-129&&a<128){b=a+128;c=(oj(),nj)[b];!c&&(c=nj[b]=new jj(a));return c}return new jj(a)}
function ri(a,b){var c;if(ae(a)&&ae(b)){c=a-b;if(!isNaN(c)){return c}}return Gd(ae(a)?wi(a):a,ae(b)?wi(b):b)}
function qi(a,b){var c;if(ae(a)&&ae(b)){c=a+b;if(hr<c&&c<fr){return c}}return si(Fd(ae(a)?wi(a):a,ae(b)?wi(b):b))}
function Oj(a,b){var c;if(b===a){return true}if(!$d(b,47)){return false}c=b;if(c.bb()!=a.bb()){return false}return Aj(a,c)}
function Mi(a){var b;if(Array.isArray(a)&&a.Db===Ni){return Yi(p(a))+'@'+(b=q(a)>>>0,b.toString(16))}return a.toString()}
function Pn(a){var b;b=U(a.d);if(!a.s&&b){a.s=true;oo(a);a.q.focus();a.q.select()}else a.s&&!b&&(a.s=false)}
function nb(a){var b;if(!a.d&&!a.e){a.e=true;tb((b=a.j,b));v((I(),I(),H),new yb(a));!!a.a&&T(a.a);!!a.c&&eb(a.c);a.e=false}}
function zn(a,b){var c;if(13==b.keyCode){b.preventDefault();c=tj((jb(a.b),a.g));if(c.length>0){fq((Fp(),Dp),c);Hn(a,'')}}}
function dc(a){var b,c;c=(b=(Qi(),$wnd.window.window).location.hash,null==b?'':b.substr(1));kc(a,c);sj(a.j,c)&&lc(a,c)}
function Mc(a){Kc();Dc(this);this.e=a;a!=null&&Zl(a,_q,this);this.f=a==null?br:Mi(a);this.a='';this.b=a;this.a=''}
function Zi(){this.g=Wi++;this.k=null;this.i=null;this.f=null;this.d=null;this.b=null;this.j=null;this.a=null}
function xb(a,b,c){this.b=new fk;this.a=a;this.n=Wk(b);this.f=c;this.a?(this.c=new lb(this)):(this.c=null)}
function p(a){return ce(a)?of:ae(a)?bf:_d(a)?_e:Zd(a)?a.Bb:pd(a)?a.Bb:a.Bb||Array.isArray(a)&&ld(Se,1)||Se}
function q(a){return ce(a)?fm(a):ae(a)?ee(a):_d(a)?a?1231:1237:Zd(a)?a.B():pd(a)?_l(a):!!a&&!!a.hashCode?a.hashCode():_l(a)}
function o(a,b){return ce(a)?sj(a,b):ae(a)?a===b:_d(a)?a===b:Zd(a)?a.w(b):pd(a)?a===b:!!a&&!!a.equals?a.equals(b):de(a)===de(b)}
function xd(a,b){if(a.h==er&&a.m==0&&a.l==0){b&&(sd=vd(0,0,0));return ud((Ud(),Sd))}b&&(sd=vd(a.l,a.m,a.h));return vd(0,0,0)}
function fm(a){dm();var b,c,d;c=':'+a;d=cm[c];if(d!=null){return ee(d)}d=am[c];b=d==null?em(a):ee(d);gm();cm[c]=b;return b}
function jk(a){var b,c,d;d=1;for(c=new gk(a);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=31*d+(b!=null?q(b):0);d=d|0}return d}
function Sb(a){var b,c,d;if(a.b.a.length>0&&1==a.a){a.a=2;for(c=new gk(a.b);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=b.p;1==d&&vb(b,2,true)}}}
function ek(a,b){var c,d;d=a.a.length;b.length<d&&(b=Xl(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function ej(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function _m(){Zm();return rd(ld(vg,1),Uq,10,0,[Dm,Em,Fm,Gm,Hm,Im,Jm,Km,Lm,Mm,Nm,Om,Pm,Qm,Rm,Sm,Tm,Um,Vm,Wm,Xm,Ym])}
function Tc(){var a;if(Oc!=0){a=Nc();if(a-Pc>2000){Pc=a;Qc=$wnd.setTimeout(Zc,10)}}if(Oc++==0){ad((_c(),$c));return true}return false}
function lm(a,b,c){var d;if(a.t){return true}if(a.v.state===c){d=nm(a.v.props,b,rd(ld(of,1),Uq,2,6,[]));d&&a.tb(b);return d}else{return true}}
function jd(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Yl(a){switch(typeof(a)){case 'string':return fm(a);case Tq:return ee(a);case 'boolean':return Vi(),a?1231:1237;default:return _l(a);}}
function tn(){qn();var a,b;++im;this.c=1;this.b=(a=new lb((I(),null)),a);this.a=(b=new xb(null,new Fb(new un(this)),false),b);this.c=2;this.c=4}
function Yd(a,b){if(ce(a)){return !!Xd[b]}else if(a.Cb){return !!a.Cb[b]}else if(ae(a)){return !!Wd[b]}else if(_d(a)){return !!Vd[b]}return false}
function P(a){var b;if(0==(a.c?a.a.length-a.b+a.d:a.d-a.b)){return null}b=a.a[a.b];a.a[a.b]=null;++a.b;if(a.b>=a.a.length){a.b=0;a.c=false}return b}
function r(b,c,d){var e;try{Ub(b,d);try{c.G()}finally{Vb()}}catch(a){a=oi(a);if($d(a,4)){e=a;throw pi(e)}else throw pi(a)}finally{b.c&&b.d==0&&Bb(b.b)}}
function v(b,c){var d;try{Ub(b,null);try{c.G()}finally{Vb()}}catch(a){a=oi(a);if($d(a,4)){d=a;throw pi(d)}else throw pi(a)}finally{b.c&&b.d==0&&Bb(b.b)}}
function tj(a){var b,c,d;c=a.length;d=0;while(d<c&&a.charCodeAt(d)<=32){++d}b=c;while(b>d&&a.charCodeAt(b-1)<=32){--b}return d>0||b<c?a.substr(d,b-d):a}
function Ob(a){var b,c;b=0;if(a.d){while(a.d.a.length!=0){c=bk(a.d,a.d.a.length-1);c.d=false;if(c.b.a.length<=0){0!=c.c.p&&vb(c.c,0,true);++b}}}return b}
function Rb(a){var b,c,d,e;if(a.b.a.length>0&&3!=a.a){a.a=3;d=a.b;for(c=new gk(d);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);e=b.p;3!=e&&vb(b,3,true)}}}
function Qb(a){var b,c;if(a.b.a.length>0&&3!=a.a){a.a=3;for(c=new gk(a.b);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);2==b.p?vb(b,3,true):1==b.p&&(a.a=1)}}}
function Ad(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return vd(c,d,e)}
function Rp(a,b,c,d){var e,f,g,h;e=new Op(b,c,d);f=new Cc(e);g=e.f;Kj(a.i,g,f);h=(new Xb((I(),new wc(e)),new xc(a,e),true)).c;f.b=Wk(h);ib(a.d);return e}
function od(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Ed(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&cr;a.m=d&cr;a.h=e&dr;return true}
function En(a){return a.t=false,$wnd.React.createElement(sr,tm(xm(ym(Bm(zm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['new-todo']))),(jb(a.b),a.g)),a.f),a.e)))}
function Xb(a,b,c){Wk(a);this.b=Wk(b);this.a=t((I(),a),new Yb,new Zb(this),true);this.c=s((null,H),new $b(this),true);ub(this.c,new _b(this));c&&F((null,H))}
function cn(){var b;try{v((I(),I(),H),new kn)}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){b=a;throw pi(b)}else if($d(a,4)){b=a;throw pi(new ij(b))}else throw pi(a)}}
function jc(b){var c;try{v((I(),I(),H),new qc(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function mc(b){var c;try{v((I(),I(),H),new rc(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function mo(b){var c;try{v((I(),I(),H),new zo(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function ko(b){var c;try{v((I(),I(),H),new Do(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function lo(b){var c;try{v((I(),I(),H),new Co(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function no(b){var c;try{v((I(),I(),H),new Ao(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function oo(b){var c;try{v((I(),I(),H),new xo(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function Lo(b){var c;try{v((I(),I(),H),new Ro(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function Np(b){var c;try{v((I(),I(),H),new Pp(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function gq(b){var c;try{v((I(),I(),H),new pq(b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}}
function fq(b,c){var d;try{v((I(),I(),H),new rq(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function kq(b,c){var d;try{v((I(),I(),H),new oq(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function ec(b,c){var d;try{v((I(),I(),H),new pc(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function Cn(b,c){var d;try{v((I(),I(),H),new Ln(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function Dn(b,c){var d;try{v((I(),I(),H),new Kn(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function ao(b,c){var d;try{v((I(),I(),H),new Eo(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function bo(b,c){var d;try{v((I(),I(),H),new yo(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function Tp(b,c){var d;try{v((I(),I(),H),new $p(b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function A(b,c,d){var e,f;try{Ub(b,d);try{f=c.K()}finally{Vb()}return f}catch(a){a=oi(a);if($d(a,4)){e=a;throw pi(e)}else throw pi(a)}finally{b.c&&b.d==0&&Bb(b.b)}}
function Gd(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function Di(b,c,d,e){Ci();var f=Ai;$moduleName=c;$moduleBase=d;ni=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Rq(g)()}catch(a){b(c,a)}}else{Rq(g)()}}
function Op(a,b,c){var d,e,f;this.f=Wk(a);this.g=Wk(b);this.e=c;this.d=1;this.c=(e=new lb((I(),null)),e);this.b=(f=new lb(null),f);this.a=(d=new lb(null),d);this.d=2;this.d=4}
function Po(){Ko();var a,b;++im;this.d=Ki(qp.prototype.yb,qp,[]);this.c=1;this.b=(a=new lb((I(),null)),a);this.a=(b=new xb(null,new Fb(new Qo(this)),false),b);this.c=2;this.c=4}
function Bj(a){var b,c,d;d=new gl(', ','[',']');for(c=a.$();c.fb();){b=c.gb();el(d,b===a?'(this Collection)':b==null?br:Mi(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function Ik(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return Jk()}}
function Ab(a){var b,c;c=Q(a.c);if(0==a.d){if(0==c){a.a=0;return false}else if(a.a+1>a.b){a.a=0;L(a.c);return false}else{a.a=a.a+1;a.d=c}}--a.d;b=P(a.c);b.o=false;ob(b);return true}
function S(b){var c,d,e;e=b.g;try{d=b.d.K();if(!b.b.I(e,d)){b.g=d;b.c=null;hb(b.f.c)}}catch(a){a=oi(a);if($d(a,13)){c=a;if(!b.c){b.g=null;b.c=c;hb(b.f.c)}throw pi(c)}else throw pi(a)}}
function rk(){rk=Ji;pk=rd(ld(of,1),Uq,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);qk=rd(ld(of,1),Uq,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function Gi(){Fi={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function ed(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Eb()&&(c=dd(c,g)):g[0].Eb()}catch(a){a=oi(a);if($d(a,4)){d=a;Rc();Xc($d(d,43)?d.S():d)}else throw pi(a)}}return c}
function Jd(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return vd(c&cr,d&cr,e&dr)}
function Ld(a,b){var c,d,e,f;b&=63;c=a.h&dr;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return vd(d&cr,e&cr,f&dr)}
function Lc(a){var b;if(a.c==null){b=de(a.b)===de(Jc)?null:a.b;a.d=b==null?br:be(b)?b==null?null:b.name:ce(b)?'String':Yi(p(b));a.a=a.a+': '+(be(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function Ak(a){var b,c,d,e;c=(b=a.a.get(0),b==null?new Array:b);for(e=0;e<c.length;e++){d=c[e];if(sk(null,d.ib())){if(c.length==1){c.length=0;Dk(a.a)}else{c.splice(e,1)}--a.b;return d.jb()}}return null}
function zk(a,b,c){var d,e,f,g,h;h=b==null?0:(g=q(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=wk(b,e);if(f){return f.kb(c)}}e[e.length]=new Yj(b,c);++a.b;return null}
function em(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+rj(a,c++)}b=b|0;return b}
function Vn(a){var b;b=(jb(a.a),a.r);if(null!=b&&b.length!=0){kq((Fp(),jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null),b);zq(Ep,null);po(a,b)}else{Tp((Fp(),Cp),(jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null))}}
function lq(b,c){var d,e;try{v((I(),I(),H),(e=new nq(b,c),rd(ld(lf,1),Uq,1,5,[(Vi(),c?true:false)]),e))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}}
function Sp(b,c,d){var e,f;try{return A((I(),I(),H),(f=new aq(b,c,d),rd(ld(lf,1),Uq,1,5,[c,d,(Vi(),false)]),f),null)}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){e=a;throw pi(e)}else if($d(a,4)){e=a;throw pi(new ij(e))}else throw pi(a)}}
function on(){var a,b;b=U((Fp(),Cp).e).a;a='item'+(b==1?'':'s');return $wnd.React.createElement('span',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['todo-count'])),$wnd.React.createElement('strong',null,''+b),' '+a+' left')}
function M(a,b){var c,d,e,f,g,h;g=a.a.length;while(g<b){g=(g-1)*2+1}c=nd(lf,Uq,1,g,5,1);f=0;h=a.c?a.a.length-a.b+a.d:a.d-a.b;for(d=0;d<h;d++){e=(a.b+d)%a.a.length;c[f]=a.a[e];a.a[e]=null;++f}a.a=c;a.b=0;a.d=f;a.c=false}
function Cj(a,b){var c,d,e;c=b.ib();e=b.jb();d=ce(c)?c==null?Ej(yk(a.a,null)):Mk(a.b,c):Ej(yk(a.a,c));if(!(de(e)===de(d)||e!=null&&o(e,d))){return false}if(d==null&&!(ce(c)?Ij(a,c):!!yk(a.a,c))){return false}return true}
function gn(){bn();var a,b;++im;this.e=Ki(_o.prototype.Ab,_o,[]);this.d=1;this.c=(a=new lb((I(),null)),a);this.a=t(new hn,(bb(),bb(),ab),null,false);this.b=(b=new xb(null,new Fb(new mn(this)),false),b);this.d=2;this.d=4}
function In(){Bn();var a,b,c;++im;this.f=Ki(ep.prototype.zb,ep,[this]);this.e=Ki(fp.prototype.yb,fp,[this]);this.d=1;this.c=(b=new lb((I(),null)),b);this.b=(a=new lb(null),a);this.a=(c=new xb(null,new Fb(new Nn(this)),false),c);this.d=2;this.d=4}
function cc(a){var b;if(0==a.length){b=(Qi(),$wnd.window.window).location.pathname+(''+$wnd.window.window.location.search);$wnd.window.window.history.pushState('',Pi.title,b)}else{(Qi(),$wnd.window.window).location.hash=a}}
function kj(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Kd(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&er)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?dr:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?dr:0;f=d?cr:0;e=c>>b-44}return vd(e&cr,f&cr,g&dr)}
function Ii(a,b,c){var d=Fi,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Fi[b]),Li(h));_.Cb=c;!b&&(_.Db=Ni);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.Bb=f)}
function dj(a){if(a.X()){var b=a.c;b.Y()?(a.k='['+b.j):!b.X()?(a.k='[L'+b.V()+';'):(a.k='['+b.V());a.b=b.U()+'[]';a.i=b.W()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.k=ej('.',[c,ej('$',d)]);a.b=ej('.',[c,ej('.',d)]);a.i=d[d.length-1]}
function Dd(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return lj(c)}if(b==0&&d!=0&&c==0){return lj(d)+22}if(b!=0&&d==0&&c==0){return lj(b)+44}return -1}
function wb(b){var c,d,e,f;switch(b.p){case 1:return false;case 0:case 3:return true;case 2:{for(e=new gk(b.b);e.a<e.c.a.length;){d=(e.b=e.a++,e.c.a[e.b]);if(d.c){f=d.c;c=f.a;try{U(c)}catch(a){a=oi(a);if(!$d(a,4))throw pi(a)}if(3==b.p){return true}}}}}qb(b);return false}
function Hd(a){var b,c,d,e,f;if(isNaN(a)){return Ud(),Td}if(a<-9223372036854775808){return Ud(),Rd}if(a>=9223372036854775807){return Ud(),Qd}e=false;if(a<0){e=true;a=-a}d=0;if(a>=fr){d=ee(a/fr);a-=d*fr}c=0;if(a>=gr){c=ee(a/gr);a-=c*gr}b=ee(a);f=vd(b,c,d);e&&Bd(f);return f}
function nc(){var a,b,c,d;this.f=new sc(this);this.d=1;this.c=(c=new lb((I(),null)),c);this.b=(d=new lb(null),d);this.a=(b=new lb(null),b);this.d=2;Ri((Qi(),$wnd.window.window),Yq,this.f,false);this.j=this.e=this.g=(a=$wnd.window.window.location.hash,null==a?'':a.substr(1));this.d=4}
function nm(a,b,c){var d,e,f,g;if(null==a||null==b||!sj(typeof(a),Sq)||!sj(typeof(b),Sq)){return !(a===b)}g=$wnd.Object.keys(a);if(0==c.length&&$wnd.Object.keys(b).length!=g.length){return true}for(e=0,f=g.length;e<f;++e){d=g[e];if(!om(d,c)&&!(a[d]===b[d])){return true}}return false}
function vb(a,b,c){var d,e;if(b!=a.p){e=a.p;a.p=b;if(!a.c&&3==b){tb((d=a.k,d));c&&(a.d||a.o||D((I(),I(),H),a))}else if(!!a.c&&1==e&&(3==b||2==b)){kb(a.c);tb((d=a.k,d));c&&(a.d||a.o||D((I(),I(),H),a))}else if(0==a.p){tb((d=a.i,d));$j(a.b,new zb(a));a.b.a=nd(lf,Uq,1,0,5,1)}else 0==e&&tb((d=a.g,d))}}
function Yp(){var a,b;this.i=new tk;this.g=1;this.f=(b=new lb((I(),null)),b);this.d=(a=new lb(null),a);this.c=t(new _p(this),(bb(),bb(),ab),null,false);this.e=t(new bq(this),(null,ab),null,false);this.a=t(new cq(this),(null,ab),null,false);this.b=t(new dq(this),(null,ab),null,false);this.g=2;this.g=4}
function Hk(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function Aq(a,b){var c,d;this.k=Wk(a);this.i=Wk(b);this.g=1;this.f=(d=new lb((I(),null)),d);this.d=(c=new lb(null),c);this.b=t(new Cq(this),(bb(),bb(),ab),null,false);this.c=t(new Dq(this),(null,ab),null,false);this.e=s((null,H),new Eq(this),false);this.a=s((null,H),new Fq(this),false);this.g=2;this.g=3;F((null,H));this.g=4}
function Od(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==er&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Od(Id(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=td(1000000000);c=wd(c,e,true);b=''+Nd(sd);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function zd(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=Cd(b)-Cd(a);g=Jd(b,j);i=vd(0,0,0);while(j>=0){h=Ed(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&Bd(i);if(f){if(d){sd=Id(a);e&&(sd=Md(sd,(Ud(),Sd)))}else{sd=vd(a.l,a.m,a.h)}}return i}
function Zm(){Zm=Ji;Dm=new $m(lr,0);Em=new $m('checkbox',1);Fm=new $m('color',2);Gm=new $m('date',3);Hm=new $m('datetime',4);Im=new $m('email',5);Jm=new $m('file',6);Km=new $m('hidden',7);Lm=new $m('image',8);Mm=new $m('month',9);Nm=new $m(Tq,10);Om=new $m('password',11);Pm=new $m('radio',12);Qm=new $m('range',13);Rm=new $m('reset',14);Sm=new $m('search',15);Tm=new $m('submit',16);Um=new $m('tel',17);Vm=new $m('text',18);Wm=new $m('time',19);Xm=new $m('url',20);Ym=new $m('week',21)}
function qo(){Zn();var a,b,c,d;++im;this.j=Ki(ip.prototype.zb,ip,[this]);this.o=Ki(jp.prototype.xb,jp,[this]);this.p=Ki(kp.prototype.yb,kp,[this]);this.n=Ki(lp.prototype.Ab,lp,[this]);this.k=Ki(mp.prototype.Ab,mp,[this]);this.i=Ki(np.prototype.yb,np,[this]);this.g=1;this.f=(b=new lb((I(),null)),b);this.c=(c=new lb(null),c);this.a=(a=new lb(null),a);this.d=t(new Bo(this),(bb(),bb(),ab),null,false);this.b=(d=new xb(null,new Fb(new Fo(this)),false),d);this.e=(new Xb(new Ho(this),new Io(this),false)).c;this.g=2;this.g=4}
function Lb(a){var b,c,d,e,f,g,h,i,j,k,l;if(!a.f){return}i=1;d=false;b=0;if(!!a.c&&!a.f.d){l=a.c.a.length;for(g=0;g<l;g++){j=_j(a.c,g);if(-1!=j.e&&-2!=j.e){j.e=-1;g!=b&&dk(a.c,b,j);++b;if(j.c){k=j.c;e=k.p;e==3&&(i=3)}}}}c=a.f.b;for(h=c.a.length-1;h>=0;h--){j=c.a[h];if(-1==j.e){j.e=0}else{gb(j,a.f);d=true}}!a.f.d&&1!=i&&a.f.p<i&&vb(a.f,i,false);if(a.c){for(f=b-1;f>=0;f--){j=_j(a.c,f);if(-1==j.e){j.e=0;db(j,a.f);d=true}}}if(a.c){for(f=a.c.a.length-1;f>=b;f--){bk(a.c,f)}d&&sb(a.f,a.c)}else{d&&sb(a.f,new fk)}!$(a.f)&&!!a.f.c&&a.f.c.b.a.length<=0&&!a.f.a.e&&Pb(a,a.f.c)}
function wd(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw pi(new Ti)}if(a.l==0&&a.m==0&&a.h==0){c&&(sd=vd(0,0,0));return vd(0,0,0)}if(b.h==er&&b.m==0&&b.l==0){return xd(a,c)}i=false;if(b.h>>19!=0){b=Id(b);i=true}g=Dd(b);f=false;e=false;d=false;if(a.h==er&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=ud((Ud(),Qd));d=true;i=!i}else{h=Kd(a,g);i&&Bd(h);c&&(sd=vd(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=Id(a);d=true;i=!i}if(g!=-1){return yd(a,g,i,f,c)}if(Gd(a,b)<0){c&&(f?(sd=Id(a)):(sd=vd(a.l,a.m,a.h)));return vd(0,0,0)}return zd(d?a:vd(a.l,a.m,a.h),b,i,f,e,c)}
function No(a){var b;return a.t=false,$wnd.React.createElement('div',null,$wnd.React.createElement('div',null,$wnd.React.createElement(vr,pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[vr])),$wnd.React.createElement('h1',null,'todos'),rp(new sp)),U((Fp(),Cp).c)?null:$wnd.React.createElement('section',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[vr])),$wnd.React.createElement(sr,xm(Am(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[wr])),(Zm(),Em)),a.d)),$wnd.React.createElement.apply(null,['ul',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['todo-list']))].concat((b=ul(xl(U(Ep.c).db(),new yp),new il(new ll,new kl,new hl)),ek(b,qd(b.a.length)))))),U(Cp.c)?null:Vo(new Wo)))}
function Wn(a){var b,c;c=(jb(a.c),null!=a.v.props[tr]?a.v.props[tr]:null);b=(jb(c.a),c.e);return $wnd.React.createElement('li',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[Xn(b,U(a.d))])),$wnd.React.createElement('div',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['view'])),$wnd.React.createElement(sr,xm(um(Am(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['toggle'])),(Zm(),Em)),b),a.p)),$wnd.React.createElement('label',Cm(new $wnd.Object,a.n),(jb(c.b),c.g)),$wnd.React.createElement(lr,sm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['destroy'])),a.k))),$wnd.React.createElement(sr,ym(xm(wm(vm(pm(qm(new $wnd.Object,Ki(tp.prototype.J,tp,[a])),rd(ld(of,1),Uq,2,6,['edit'])),(jb(a.a),a.r)),a.o),a.i),a.j)))}
function dn(a){var b;return a.t=false,b=U((Fp(),Ep).b),$wnd.React.createElement(mr,pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[mr])),Xo(new Yo),$wnd.React.createElement('ul',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['filters'])),$wnd.React.createElement('li',null,$wnd.React.createElement('a',rm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[(Jq(),Hq)==b?nr:''])),'#'),'All')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',rm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[Gq==b?nr:''])),'#active'),'Active')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',rm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[Iq==b?nr:''])),or),'Completed'))),U(a.a)?$wnd.React.createElement(lr,sm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[pr])),a.e),qr):null)}
function Jk(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[kr]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Hk()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[kr]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
var Sq='object',Tq='number',Uq={3:1,5:1},Vq={12:1},Wq={22:1},Xq={8:1},Yq='hashchange',Zq={14:1},$q='__noinit__',_q='__java$exception',ar={3:1,13:1,6:1,4:1},br='null',cr=4194303,dr=1048575,er=524288,fr=17592186044416,gr=4194304,hr=-17592186044416,ir={24:1,47:1},jr={42:1},kr='delete',lr='button',mr='footer',nr='selected',or='#completed',pr='clear-completed',qr='Clear Completed',rr={12:1,21:1},sr='input',tr='todo',ur='completed',vr='header',wr='toggle-all',xr='active',yr='user.agent';var _,Fi,Ai,ni=-1;Gi();Ii(1,null,{},n);_.w=Ar;_.A=function(){return this.Bb};_.B=Br;_.C=function(){var a;return Yi(p(this))+'@'+(a=q(this)>>>0,a.toString(16))};_.equals=function(a){return this.w(a)};_.hashCode=function(){return this.B()};_.toString=function(){return this.C()};var Vd,Wd,Xd;Ii(63,1,{},Zi);_.T=function(a){var b;b=new Zi;b.e=4;a>1?(b.c=bj(this,a-1)):(b.c=this);return b};_.U=function(){Xi(this);return this.b};_.V=function(){return Yi(this)};_.W=function(){return Xi(this),this.i};_.X=function(){return (this.e&4)!=0};_.Y=function(){return (this.e&1)!=0};_.C=function(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(Xi(this),this.k)};_.e=0;_.g=0;var Wi=1;var lf=_i(1);var af=_i(63);Ii(65,1,{65:1},G);_.a=1;_.c=true;_.d=0;var fe=_i(65);var H;Ii(168,1,{},R);_.b=0;_.c=false;_.d=0;var ge=_i(168);Ii(255,1,Vq);_.C=function(){var a;return Yi(this.Bb)+'@'+(a=q(this)>>>0,a.toString(16))};var le=_i(255);Ii(139,255,Vq,W);_.D=function(){T(this)};_.F=Cr;_.a=false;_.e=false;var je=_i(139);Ii(140,1,Wq,X);_.G=function(){S(this.a)};var he=_i(140);Ii(141,1,{238:1},Y);_.H=function(a){V(this.a,a)};var ie=_i(141);var ab;Ii(144,1,{263:1},cb);_.I=zr;var ke=_i(144);Ii(11,255,{12:1,11:1},lb);_.D=function(){eb(this)};_.F=function(){return -2==this.e};_.a=1;_.d=false;_.e=0;var ne=_i(11);Ii(138,1,Xq,mb);_.G=function(){fb(this.a)};var me=_i(138);Ii(23,255,{12:1,23:1},xb);_.D=function(){nb(this)};_.F=Mr;_.d=false;_.e=false;_.f=false;_.o=false;_.p=0;var qe=_i(23);Ii(142,1,Xq,yb);_.G=function(){rb(this.a)};var oe=_i(142);Ii(66,1,{},zb);_.J=function(a){pb(this.a,a)};var pe=_i(66);Ii(145,1,{},Db);_.a=0;_.b=100;_.d=0;var re=_i(145);Ii(149,1,{238:1},Eb);_.H=function(a){r((I(),I(),H),this.a,a)};var se=_i(149);Ii(39,1,{238:1},Fb);_.H=function(a){this.a.G()};var te=_i(39);Ii(178,1,Vq,Hb);_.D=function(){Gb(this)};_.F=Dr;_.b=false;var ue=_i(178);Ii(167,1,{},Tb);_.C=function(){var a;return Xi(ve),ve.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.b=0;var Ib;var ve=_i(167);Ii(77,255,Vq,Xb);_.D=function(){Z(this.c)};_.F=function(){return $(this.c)};var Ae=_i(77);Ii(224,1,{263:1},Yb);_.I=zr;var we=_i(224);Ii(225,1,Wq,Zb);_.G=function(){Z(this.a.c)};var xe=_i(225);Ii(226,1,Wq,$b);_.G=function(){Wb(this.a)};var ye=_i(226);Ii(227,1,Wq,_b);_.G=function(){Z(this.a.a)};var ze=_i(227);Ii(51,1,{51:1});_.e='';_.g='';_.i=true;_.j='';var He=_i(51);Ii(123,51,{12:1,51:1,21:1},nc);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new oc(this));this.d=-1}};_.w=Ar;_.B=Br;_.F=Pr;_.L=Qr;_.C=function(){var a;return Xi(Fe),Fe.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.d=0;var Fe=_i(123);Ii(124,1,Xq,oc);_.G=function(){hc(this.a)};var Be=_i(124);Ii(125,1,Xq,pc);_.G=function(){ac(this.a,this.b)};var Ce=_i(125);Ii(126,1,Xq,qc);_.G=function(){ic(this.a)};var De=_i(126);Ii(127,1,Xq,rc);_.G=function(){dc(this.a)};var Ee=_i(127);Ii(91,1,{},sc);_.handleEvent=function(a){bc(this.a,a)};var Ge=_i(91);Ii(128,1,{});var Oe=_i(128);Ii(96,1,{},uc);_.M=function(a){return !(!!a&&$(a.a))};var Ie=_i(96);Ii(97,1,{},vc);_.N=function(a){return a.a};var Je=_i(97);Ii(92,1,Zq,wc);_.K=function(){return Vi(),Ac(this.a)?false:true};var Ke=_i(92);Ii(93,1,Xq,xc);_.G=function(){Tp(this.a,this.b)};var Le=_i(93);Ii(94,1,{},yc);_.J=function(a){Z(a)};var Me=_i(94);Ii(95,1,{},zc);_.O=function(){return 'Called destroy() passing an entity that was not in the container. Entity: '+this.a};var Ne=_i(95);Ii(129,128,{});var Pe=_i(129);Ii(73,1,{12:1,73:1},Cc);_.D=function(){Bc(this)};_.F=function(){return $(this.a)};var Qe=_i(73);Ii(4,1,{3:1,4:1});_.P=function(a){return new Error(a)};_.Q=function(){return this.f};_.R=function(){var a,b,c;c=this.f==null?null:this.f.replace(new RegExp('\n','g'),' ');b=(a=Yi(this.Bb),c==null?a:a+': '+c);Ec(this,Gc(this.P(b)));hd(this)};_.C=function(){return Fc(this,this.Q())};_.e=$q;_.g=true;var pf=_i(4);Ii(13,4,{3:1,13:1,4:1});var df=_i(13);Ii(6,13,ar);var mf=_i(6);Ii(64,6,ar);var hf=_i(64);Ii(85,64,ar);var Ue=_i(85);Ii(43,85,{43:1,3:1,13:1,6:1,4:1},Mc);_.Q=function(){Lc(this);return this.c};_.S=function(){return de(this.b)===de(Jc)?null:this.b};var Jc;var Re=_i(43);var Se=_i(0);Ii(241,1,{});var Te=_i(241);var Oc=0,Pc=0,Qc=-1;Ii(122,241,{},cd);var $c;var Ve=_i(122);var fd;Ii(252,1,{});var Xe=_i(252);Ii(86,252,{},kd);var We=_i(86);var sd;var Qd,Rd,Sd,Td;var Pi;Ii(83,1,{80:1});_.C=Cr;var Ye=_i(83);Ii(90,6,ar,Ti);var Ze=_i(90);Ii(87,6,ar);var ff=_i(87);Ii(169,87,ar,Ui);var $e=_i(169);Vd={3:1,81:1,29:1};var _e=_i(81);Ii(49,1,{3:1,49:1});var kf=_i(49);Wd={3:1,29:1,49:1};var bf=_i(251);Ii(34,1,{3:1,29:1,34:1});_.w=Ar;_.B=Br;_.C=function(){return this.a!=null?this.a:''+this.b};_.b=0;var cf=_i(34);Ii(9,6,ar,hj,ij);var ef=_i(9);Ii(32,49,{3:1,29:1,32:1,49:1},jj);_.w=function(a){return $d(a,32)&&a.a==this.a};_.B=Cr;_.C=function(){return ''+this.a};_.a=0;var gf=_i(32);var nj;Ii(309,1,{});Ii(88,64,ar,qj);_.P=function(a){return new TypeError(a)};var jf=_i(88);Xd={3:1,80:1,29:1,2:1};var of=_i(2);Ii(84,83,{80:1},wj);var nf=_i(84);Ii(313,1,{});Ii(50,6,ar,xj,yj);var qf=_i(50);Ii(253,1,{24:1});_.Z=Hr;_.cb=Ir;_.db=Jr;_._=function(a){throw pi(new yj('Add not supported on this collection'))};_.ab=function(a){return zj(this,a)};_.C=function(){return Bj(this)};var rf=_i(253);Ii(256,1,{239:1});_.w=function(a){var b,c,d;if(a===this){return true}if(!$d(a,45)){return false}d=a;if(this.a.b+this.b.b!=d.a.b+d.b.b){return false}for(c=new Sj((new Pj(d)).a);c.b;){b=Rj(c);if(!Cj(this,b)){return false}}return true};_.B=function(){return ik(new Pj(this))};_.C=function(){var a,b,c;c=new gl(', ','{','}');for(b=new Sj((new Pj(this)).a);b.b;){a=Rj(b);el(c,Dj(this,a.ib())+'='+Dj(this,a.jb()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};var Ef=_i(256);Ii(53,256,{239:1});var uf=_i(53);Ii(257,253,ir);_.cb=Kr;_.w=function(a){return Oj(this,a)};_.B=function(){return ik(this)};var Ff=_i(257);Ii(27,257,ir,Pj);_.ab=function(a){if($d(a,42)){return Cj(this.a,a)}return false};_.$=function(){return new Sj(this.a)};_.bb=Fr;var tf=_i(27);Ii(28,1,{},Sj);_.eb=Er;_.gb=function(){return Rj(this)};_.fb=Dr;_.b=false;var sf=_i(28);Ii(254,253,{24:1,261:1});_.cb=function(){return new dl(this,16)};_.hb=function(a,b){throw pi(new yj('Add not supported on this list'))};_._=function(a){this.hb(this.bb(),a);return true};_.w=function(a){var b,c,d,e,f;if(a===this){return true}if(!$d(a,18)){return false}f=a;if(this.bb()!=f.a.length){return false}e=new gk(f);for(c=new gk(this);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=(e.b=e.a++,e.c.a[e.b]);if(!(de(b)===de(d)||b!=null&&o(b,d))){return false}}return true};_.B=function(){return jk(this)};_.$=function(){return new Tj(this)};var wf=_i(254);Ii(116,1,{},Tj);_.eb=Er;_.fb=function(){return this.a<this.b.a.length};_.gb=function(){return _j(this.b,this.a++)};_.a=0;var vf=_i(116);Ii(68,257,ir,Uj);_.ab=Lr;_.$=function(){var a;return a=new Sj((new Pj(this.a)).a),new Vj(a)};_.bb=Fr;var yf=_i(68);Ii(54,1,{},Vj);_.eb=Er;_.fb=Gr;_.gb=function(){var a;return a=Rj(this.a),a.ib()};var xf=_i(54);Ii(69,253,{24:1},Wj);_.ab=function(a){return Gj(this.a,a)};_.$=function(){var a;a=new Sj((new Pj(this.a)).a);return new Xj(a)};_.bb=Fr;var Af=_i(69);Ii(148,1,{},Xj);_.eb=Er;_.fb=Gr;_.gb=function(){var a;a=Rj(this.a);return a.jb()};var zf=_i(148);Ii(146,1,jr);_.w=function(a){var b;if(!$d(a,42)){return false}b=a;return sk(this.a,b.ib())&&sk(this.b,b.jb())};_.ib=Cr;_.jb=Dr;_.B=function(){return Vk(this.a)^Vk(this.b)};_.kb=function(a){var b;b=this.b;this.b=a;return b};_.C=function(){return this.a+'='+this.b};var Bf=_i(146);Ii(147,146,jr,Yj);var Cf=_i(147);Ii(258,1,jr);_.w=function(a){var b;if(!$d(a,42)){return false}b=a;return sk(this.b.value[0],b.ib())&&sk(Rk(this),b.jb())};_.B=function(){return Vk(this.b.value[0])^Vk(Rk(this))};_.C=function(){return this.b.value[0]+'='+Rk(this)};var Df=_i(258);Ii(18,254,{3:1,18:1,24:1,261:1},fk);_.hb=function(a,b){Vl(this.a,a,b)};_._=function(a){return Zj(this,a)};_.ab=function(a){return ak(this,a,0)!=-1};_.Z=function(a){$j(this,a)};_.$=function(){return new gk(this)};_.bb=function(){return this.a.length};var Hf=_i(18);Ii(20,1,{},gk);_.eb=Er;_.fb=function(){return this.a<this.c.a.length};_.gb=function(){return this.b=this.a++,this.c.a[this.b]};_.a=0;_.b=-1;var Gf=_i(20);Ii(150,1,{24:1});_.Z=Hr;_.cb=Ir;_.db=Jr;_._=function(a){throw pi(new xj)};_.$=function(){var a;return new lk((a=new Sj((new Pj((new Uj(this.a.a)).a)).a),new Vj(a)))};_.bb=function(){return Nj(this.a.a)};_.C=function(){return Bj(this.a)};var Jf=_i(150);Ii(152,1,{},lk);_.eb=Er;_.fb=function(){return this.a.a.b};_.gb=function(){var a;return a=Rj(this.a.a),a.ib()};var If=_i(152);Ii(151,150,ir,mk);_.cb=Kr;_.w=function(a){return Oj(this.a,a)};_.B=function(){return ik(this.a)};var Kf=_i(151);Ii(58,1,{3:1,29:1,58:1},nk);_.w=function(a){return $d(a,58)&&ti(ui(this.a.getTime()),ui(a.a.getTime()))};_.B=function(){var a;a=ui(this.a.getTime());return xi(zi(a,si(Ld(ae(a)?wi(a):a,32))))};_.C=function(){var a,b,c;c=-this.a.getTimezoneOffset();a=(c>=0?'+':'')+(c/60|0);b=ok($wnd.Math.abs(c)%60);return (rk(),pk)[this.a.getDay()]+' '+qk[this.a.getMonth()]+' '+ok(this.a.getDate())+' '+ok(this.a.getHours())+':'+ok(this.a.getMinutes())+':'+ok(this.a.getSeconds())+' GMT'+a+b+' '+this.a.getFullYear()};var Lf=_i(58);var pk,qk;Ii(45,53,{3:1,45:1,239:1},tk,uk);var Mf=_i(45);Ii(179,257,{3:1,24:1,47:1},vk);_._=function(a){var b;return b=Jj(this.a,a,this),b==null};_.ab=Lr;_.$=function(){var a;return a=new Sj((new Pj((new Uj(this.a)).a)).a),new Vj(a)};_.bb=Fr;var Nf=_i(179);Ii(57,1,{},Bk);_.Z=Hr;_.$=function(){return new Ck(this)};_.b=0;var Pf=_i(57);Ii(72,1,{},Ck);_.eb=Er;_.gb=function(){return this.d=this.a[this.c++],this.d};_.fb=function(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var Of=_i(72);var Fk;Ii(56,1,{},Pk);_.Z=Hr;_.$=function(){return new Qk(this)};_.b=0;_.c=0;var Sf=_i(56);Ii(71,1,{},Qk);_.eb=Er;_.gb=function(){return this.c=this.a,this.a=this.b.next(),new Sk(this.d,this.c,this.d.c)};_.fb=function(){return !this.a.done};var Qf=_i(71);Ii(166,258,jr,Sk);_.ib=function(){return this.b.value[0]};_.jb=function(){return Rk(this)};_.kb=function(a){return Nk(this.a,this.b.value[0],a)};_.c=0;var Rf=_i(166);Ii(154,1,{});_.eb=Nr;_.lb=Mr;_.mb=function(){return this.e};_.d=0;_.e=0;var Wf=_i(154);Ii(55,154,{});var Tf=_i(55);Ii(117,1,{});_.eb=Nr;_.lb=Dr;_.mb=function(){return this.d-this.c};_.b=0;_.c=0;_.d=0;var Vf=_i(117);Ii(118,117,{},bl);_.eb=function(a){$k(this,a)};_.nb=function(a){return _k(this,a)};var Uf=_i(118);Ii(17,1,{},dl);_.lb=Cr;_.mb=function(){cl(this);return this.c};_.eb=function(a){cl(this);this.d.eb(a)};_.nb=function(a){cl(this);if(this.d.fb()){a.J(this.d.gb());return true}return false};_.a=0;_.c=0;var Xf=_i(17);Ii(44,1,{44:1},gl);_.C=function(){return fl(this)};var Yf=_i(44);Ii(33,1,{},hl);_.N=function(a){return a};var Zf=_i(33);Ii(30,1,{},il);var $f=_i(30);Ii(121,1,{},jl);_.N=function(a){return fl(a)};var _f=_i(121);Ii(35,1,{},kl);_.ob=function(a,b){a._(b)};var ag=_i(35);Ii(36,1,{},ll);_.O=function(){return new fk};var bg=_i(36);Ii(120,1,{},ml);_.ob=function(a,b){el(a,b)};var cg=_i(120);Ii(119,1,{},nl);_.O=function(){return new gl(this.a,this.b,this.c)};var dg=_i(119);Ii(153,1,{});_.c=false;var qg=_i(153);Ii(19,153,{},Bl);var rl;var pg=_i(19);Ii(163,55,{},El);_.nb=function(a){return this.a.a.nb(new Gl(a))};var fg=_i(163);Ii(164,1,{},Gl);_.J=function(a){Fl(this.a,a)};var eg=_i(164);Ii(70,55,{},Il);_.nb=function(a){this.b=false;while(!this.b&&this.c.nb(new Jl(this,a)));return this.b};_.b=false;var hg=_i(70);Ii(158,1,{},Jl);_.J=function(a){Hl(this.a,this.b,a)};var gg=_i(158);Ii(155,55,{},Ll);_.nb=function(a){return this.b.nb(new Ml(this,a))};var jg=_i(155);Ii(157,1,{},Ml);_.J=function(a){Kl(this.a,this.b,a)};var ig=_i(157);Ii(156,1,{},Ol);_.J=function(a){Nl(this,a)};var kg=_i(156);Ii(159,1,{},Pl);_.J=Or;var lg=_i(159);Ii(160,1,{},Ql);_.J=Or;var mg=_i(160);Ii(161,1,{},Sl);var ng=_i(161);Ii(162,1,{},Ul);_.J=function(a){Tl(this,a)};var og=_i(162);Ii(311,1,{});Ii(260,1,{});var rg=_i(260);Ii(308,1,{});var $l=0;var am,bm=0,cm;Ii(773,1,{});Ii(259,1,{});_.pb=Rr;var tg=_i(259);Ii(38,259,{});_.rb=function(a,b){};_.ub=function(){return this.t=false,this.qb()};_.t=false;_.u=false;var im=1;var sg=_i(38);Ii(37,$wnd.React.Component,{});Hi(Fi[1],_);_.render=function(){return km(this.a)};var ug=_i(37);Ii(10,34,{3:1,29:1,34:1,10:1},$m);var Dm,Em,Fm,Gm,Hm,Im,Jm,Km,Lm,Mm,Nm,Om,Pm,Qm,Rm,Sm,Tm,Um,Vm,Wm,Xm,Ym;var vg=aj(10,_m);Ii(193,38,{});_.qb=function(){var a;return a=U((Fp(),Ep).b),$wnd.React.createElement(mr,pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[mr])),Xo(new Yo),$wnd.React.createElement('ul',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['filters'])),$wnd.React.createElement('li',null,$wnd.React.createElement('a',rm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[(Jq(),Hq)==a?nr:''])),'#'),'All')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',rm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[Gq==a?nr:''])),'#active'),'Active')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',rm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[Iq==a?nr:''])),or),'Completed'))),U(this.a)?$wnd.React.createElement(lr,sm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[pr])),this.e),qr):null)};var qh=_i(193);Ii(194,193,{});_.tb=Sr;var an;var uh=_i(194);Ii(195,194,rr,gn);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new nn(this));this.d=-1}};_.w=Ar;_.sb=Tr;_.B=Br;_.F=Pr;_.L=Qr;_.tb=function(b){var c;try{v((I(),I(),H),new jn)}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}};_.C=function(){var a;return Xi(Hg),Hg.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.b,new ln(this))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){b=a;throw pi(b)}else if($d(a,4)){b=a;throw pi(new ij(b))}else throw pi(a)}};_.d=0;var Hg=_i(195);Ii(196,1,Zq,hn);_.K=function(){return Vi(),U((Fp(),Cp).b).a>0?true:false};var wg=_i(196);Ii(199,1,Xq,jn);_.G=Rr;var xg=_i(199);Ii(200,1,Xq,kn);_.G=function(){gq((Fp(),Dp))};var yg=_i(200);Ii(201,1,Zq,ln);_.K=function(){return dn(this.a)};var zg=_i(201);Ii(197,1,Wq,mn);_.G=function(){en(this.a)};var Ag=_i(197);Ii(198,1,Xq,nn);_.G=function(){fn(this.a)};var Bg=_i(198);Ii(230,38,{});_.qb=function(){return on()};var ph=_i(230);Ii(231,230,{});_.tb=Sr;var pn;var th=_i(231);Ii(232,231,rr,tn);_.D=function(){if(this.c>=0){this.c=-2;v((I(),I(),H),new wn(this));this.c=-1}};_.w=Ar;_.sb=Tr;_.B=Br;_.F=Ur;_.L=Vr;_.tb=function(b){var c;try{v((I(),I(),H),new xn)}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}};_.C=function(){var a;return Xi(Gg),Gg.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.a,new vn(this))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){b=a;throw pi(b)}else if($d(a,4)){b=a;throw pi(new ij(b))}else throw pi(a)}};_.c=0;var Gg=_i(232);Ii(233,1,Wq,un);_.G=function(){en(this.a)};var Cg=_i(233);Ii(236,1,Zq,vn);_.K=function(){return this.a.t=false,on()};var Dg=_i(236);Ii(234,1,Xq,wn);_.G=function(){sn(this.a)};var Eg=_i(234);Ii(235,1,Xq,xn);_.G=Rr;var Fg=_i(235);Ii(184,38,{});_.qb=function(){return $wnd.React.createElement(sr,tm(xm(ym(Bm(zm(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['new-todo']))),(jb(this.b),this.g)),this.f),this.e)))};_.g='';var Ch=_i(184);Ii(185,184,{});_.tb=Sr;var An;var wh=_i(185);Ii(186,185,rr,In);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new On(this));this.d=-1}};_.w=Ar;_.sb=Tr;_.B=Br;_.F=Pr;_.L=Qr;_.tb=function(b){var c;try{v((I(),I(),H),new Jn)}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}};_.C=function(){var a;return Xi(Og),Og.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.a,new Mn(this))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){b=a;throw pi(b)}else if($d(a,4)){b=a;throw pi(new ij(b))}else throw pi(a)}};_.d=0;var Og=_i(186);Ii(189,1,Xq,Jn);_.G=Rr;var Ig=_i(189);Ii(190,1,Xq,Kn);_.G=function(){zn(this.a,this.b)};var Jg=_i(190);Ii(191,1,Xq,Ln);_.G=function(){yn(this.a,this.b)};var Kg=_i(191);Ii(192,1,Zq,Mn);_.K=function(){return En(this.a)};var Lg=_i(192);Ii(187,1,Wq,Nn);_.G=function(){en(this.a)};var Mg=_i(187);Ii(188,1,Xq,On);_.G=function(){Gn(this.a)};var Ng=_i(188);Ii(203,38,{});_.rb=function(a,b){Pn(this)};_.pb=function(){oo(this)};_.qb=function(){return Wn(this)};_.s=false;var Eh=_i(203);Ii(204,203,{});_.tb=function(a){this.v.props[tr]===(null==a?null:a[tr])||ib(this.c)};var Yn;var yh=_i(204);Ii(205,204,rr,qo);_.rb=function(b,c){var d;try{v((I(),I(),H),new vo(this,b,c))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){d=a;throw pi(d)}else if($d(a,4)){d=a;throw pi(new ij(d))}else throw pi(a)}};_.D=function(){$n(this)};_.w=Ar;_.sb=Tr;_.B=Br;_.F=Zr;_.L=$r;_.tb=function(b){var c;try{v((I(),I(),H),new wo(this,b))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}};_.C=function(){var a;return Xi(gh),gh.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.b,new Go(this))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){b=a;throw pi(b)}else if($d(a,4)){b=a;throw pi(new ij(b))}else throw pi(a)}};_.g=0;var gh=_i(205);Ii(208,1,{},ro);_.N=function(a){return a.K()};var Pg=_i(208);Ii(209,1,{},so);_.M=function(a){return $d(a,12)&&a.F()};var Qg=_i(209);Ii(212,1,Zq,to);_.K=function(){return _n(this.a)};var Rg=_i(212);Ii(213,1,Xq,uo);_.G=function(){co(this.a)};var Sg=_i(213);Ii(214,1,Xq,vo);_.G=function(){Pn(this.a)};var Tg=_i(214);Ii(215,1,Xq,wo);_.G=function(){eo(this.a,this.b)};var Ug=_i(215);Ii(216,1,Xq,xo);_.G=function(){fo(this.a)};var Vg=_i(216);Ii(217,1,Xq,yo);_.G=function(){Rn(this.a,this.b)};var Wg=_i(217);Ii(218,1,Xq,zo);_.G=function(){Vn(this.a)};var Xg=_i(218);Ii(219,1,Xq,Ao);_.G=function(){Np(_n(this.a))};var Yg=_i(219);Ii(206,1,Zq,Bo);_.K=function(){return go(this.a)};var Zg=_i(206);Ii(220,1,Xq,Co);_.G=function(){Un(this.a)};var $g=_i(220);Ii(221,1,Xq,Do);_.G=function(){Tn(this.a)};var _g=_i(221);Ii(222,1,Xq,Eo);_.G=function(){Qn(this.a,this.b)};var ah=_i(222);Ii(207,1,Wq,Fo);_.G=function(){en(this.a)};var bh=_i(207);Ii(223,1,Zq,Go);_.K=function(){return io(this.a)};var dh=_i(223);Ii(210,1,Zq,Ho);_.K=function(){return jo(this.a)};var eh=_i(210);Ii(211,1,Xq,Io);_.G=function(){$n(this.a)};var fh=_i(211);Ii(170,38,{});_.qb=function(){var a;return $wnd.React.createElement('div',null,$wnd.React.createElement('div',null,$wnd.React.createElement(vr,pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[vr])),$wnd.React.createElement('h1',null,'todos'),rp(new sp)),U((Fp(),Cp).c)?null:$wnd.React.createElement('section',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[vr])),$wnd.React.createElement(sr,xm(Am(pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,[wr])),(Zm(),Em)),this.d)),$wnd.React.createElement.apply(null,['ul',pm(new $wnd.Object,rd(ld(of,1),Uq,2,6,['todo-list']))].concat((a=ul(xl(U(Ep.c).db(),new yp),new il(new ll,new kl,new hl)),ek(a,qd(a.a.length)))))),U(Cp.c)?null:Vo(new Wo)))};var Hh=_i(170);Ii(171,170,{});_.tb=Sr;var Jo;var Ah=_i(171);Ii(172,171,rr,Po);_.D=function(){if(this.c>=0){this.c=-2;v((I(),I(),H),new To(this));this.c=-1}};_.w=Ar;_.sb=Tr;_.B=Br;_.F=Ur;_.L=Vr;_.tb=function(b){var c;try{v((I(),I(),H),new Uo)}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){c=a;throw pi(c)}else if($d(a,4)){c=a;throw pi(new ij(c))}else throw pi(a)}};_.C=function(){var a;return Xi(mh),mh.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.a,new So(this))}catch(a){a=oi(a);if($d(a,6)||$d(a,7)){b=a;throw pi(b)}else if($d(a,4)){b=a;throw pi(new ij(b))}else throw pi(a)}};_.c=0;var mh=_i(172);Ii(173,1,Wq,Qo);_.G=function(){en(this.a)};var hh=_i(173);Ii(176,1,Xq,Ro);_.G=function(){var a;a=this.a.target;lq((Fp(),Dp),a.checked)};var ih=_i(176);Ii(177,1,Zq,So);_.K=function(){return No(this.a)};var jh=_i(177);Ii(174,1,Xq,To);_.G=function(){sn(this.a)};var kh=_i(174);Ii(175,1,Xq,Uo);_.G=Rr;var lh=_i(175);Ii(75,1,{},Wo);var nh=_i(75);Ii(76,1,{},Yo);var oh=_i(76);Ii(282,$wnd.Function,{},Zo);_.vb=function(a){return new $o(a)};Ii(181,37,{},$o);_.wb=function(){return new gn};_.componentDidMount=Rr;_.componentDidUpdate=Wr;_.componentWillUnmount=Xr;_.shouldComponentUpdate=Yr;var rh=_i(181);Ii(283,$wnd.Function,{},_o);_.Ab=function(a){cn()};Ii(293,$wnd.Function,{},ap);_.vb=function(a){return new bp(a)};Ii(202,37,{},bp);_.wb=function(){return new tn};_.componentDidMount=Rr;_.componentDidUpdate=Wr;_.componentWillUnmount=Xr;_.shouldComponentUpdate=Yr;var sh=_i(202);Ii(279,$wnd.Function,{},cp);_.vb=function(a){return new dp(a)};Ii(180,37,{},dp);_.wb=function(){return new In};_.componentDidMount=Rr;_.componentDidUpdate=Wr;_.componentWillUnmount=Xr;_.shouldComponentUpdate=Yr;var vh=_i(180);Ii(280,$wnd.Function,{},ep);_.zb=function(a){Dn(this.a,a)};Ii(281,$wnd.Function,{},fp);_.yb=function(a){Cn(this.a,a)};Ii(284,$wnd.Function,{},gp);_.vb=function(a){return new hp(a)};Ii(183,37,{},hp);_.wb=function(){return new qo};_.componentDidMount=Rr;_.componentDidUpdate=Wr;_.componentWillUnmount=Xr;_.shouldComponentUpdate=Yr;var xh=_i(183);Ii(285,$wnd.Function,{},ip);_.zb=function(a){bo(this.a,a)};Ii(286,$wnd.Function,{},jp);_.xb=function(a){mo(this.a)};Ii(287,$wnd.Function,{},kp);_.yb=function(a){no(this.a)};Ii(288,$wnd.Function,{},lp);_.Ab=function(a){lo(this.a)};Ii(289,$wnd.Function,{},mp);_.Ab=function(a){ko(this.a)};Ii(290,$wnd.Function,{},np);_.yb=function(a){ao(this.a,a)};Ii(277,$wnd.Function,{},op);_.vb=function(a){return new pp(a)};Ii(143,37,{},pp);_.wb=function(){return new Po};_.componentDidMount=Rr;_.componentDidUpdate=Wr;_.componentWillUnmount=Xr;_.shouldComponentUpdate=Yr;var zh=_i(143);Ii(278,$wnd.Function,{},qp);_.yb=function(a){Lo(a)};Ii(74,1,{},sp);var Bh=_i(74);Ii(292,$wnd.Function,{},tp);_.J=function(a){Sn(this.a,a)};Ii(182,1,{},xp);var Dh=_i(182);Ii(67,1,{},yp);_.N=function(a){return wp(up(a.f),a)};var Fh=_i(67);Ii(79,1,{},Ap);var Gh=_i(79);var Bp,Cp,Dp,Ep;Ii(59,1,{59:1});_.e=false;var ki=_i(59);Ii(60,59,{12:1,21:1,60:1,59:1},Op);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new Qp(this));this.d=-1}};_.w=function(a){var b;if(this===a){return true}else if(null==a||!$d(a,60)){return false}else{b=a;return null!=this.f&&sj(this.f,b.f)}};_.B=function(){return null!=this.f?fm(this.f):Yl(this)};_.F=Pr;_.L=function(){return Gp(this)};_.C=function(){var a;return Xi(Yh),Yh.k+'@'+(a=(null!=this.f?fm(this.f):Yl(this))>>>0,a.toString(16))};_.d=0;var Yh=_i(60);Ii(229,1,Xq,Pp);_.G=function(){Jp(this.a)};var Ih=_i(229);Ii(228,1,Xq,Qp);_.G=function(){Kp(this.a)};var Jh=_i(228);Ii(52,129,{52:1});var fi=_i(52);Ii(130,52,{12:1,21:1,52:1},Yp);_.D=function(){if(this.g>=0){this.g=-2;v((I(),I(),H),new Zp(this));this.g=-1}};_.w=Ar;_.B=Br;_.F=Zr;_.L=$r;_.C=function(){var a;return Xi(Rh),Rh.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.g=0;var Rh=_i(130);Ii(135,1,Xq,Zp);_.G=function(){Vp(this.a)};var Kh=_i(135);Ii(136,1,Xq,$p);_.G=function(){tc(this.a,this.b)};var Lh=_i(136);Ii(131,1,Zq,_p);_.K=function(){return Wp(this.a)};var Mh=_i(131);Ii(137,1,Zq,aq);_.K=function(){return Rp(this.a,this.c,this.d,this.b)};_.b=false;var Nh=_i(137);Ii(132,1,Zq,bq);_.K=function(){return mj(xi(vl(Up(this.a))))};var Oh=_i(132);Ii(133,1,Zq,cq);_.K=function(){return mj(xi(vl(wl(Up(this.a),new Mq))))};var Ph=_i(133);Ii(134,1,Zq,dq);_.K=function(){return Xp(this.a)};var Qh=_i(134);Ii(102,1,{});var ji=_i(102);Ii(103,102,rr,mq);_.D=function(){if(this.b>=0){this.b=-2;v((I(),I(),H),new qq(this));this.b=-1}};_.w=Ar;_.B=Br;_.F=function(){return this.b<0};_.L=function(){var a;return a=this.b<0,a||jb(this.a),!a};_.C=function(){var a;return Xi(Xh),Xh.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.b=0;var Xh=_i(103);Ii(106,1,Xq,nq);_.G=function(){hq(this.a,this.b)};_.b=false;var Sh=_i(106);Ii(107,1,Xq,oq);_.G=function(){lc(this.b,this.a)};var Th=_i(107);Ii(108,1,Xq,pq);_.G=function(){iq(this.a)};var Uh=_i(108);Ii(104,1,Xq,qq);_.G=function(){eb(this.a.a)};var Vh=_i(104);Ii(105,1,Xq,rq);_.G=function(){jq(this.a,this.b)};var Wh=_i(105);Ii(109,1,{});var mi=_i(109);Ii(110,109,rr,Aq);_.D=function(){if(this.g>=0){this.g=-2;v((I(),I(),H),new Bq(this));this.g=-1}};_.w=Ar;_.B=Br;_.F=Zr;_.L=$r;_.C=function(){var a;return Xi(ci),ci.k+'@'+(a=_l(this)>>>0,a.toString(16))};_.g=0;var ci=_i(110);Ii(115,1,Xq,Bq);_.G=function(){vq(this.a)};var Zh=_i(115);Ii(111,1,Zq,Cq);_.K=function(){var a;return a=gc(this.a.i),sj(xr,a)||sj(ur,a)||sj('',a)?sj(xr,a)?(Jq(),Gq):sj(ur,a)?(Jq(),Iq):(Jq(),Hq):(Jq(),Hq)};var $h=_i(111);Ii(112,1,Zq,Dq);_.K=function(){return wq(this.a)};var _h=_i(112);Ii(113,1,Wq,Eq);_.G=function(){xq(this.a)};var ai=_i(113);Ii(114,1,Wq,Fq);_.G=function(){yq(this.a)};var bi=_i(114);Ii(40,34,{3:1,29:1,34:1,40:1},Kq);var Gq,Hq,Iq;var di=aj(40,Lq);Ii(98,1,{},Mq);_.M=function(a){return !fc(a)};var ei=_i(98);Ii(100,1,{},Nq);_.M=function(a){return fc(a)};var gi=_i(100);Ii(101,1,{},Oq);_.J=function(a){Tp(this.a,a)};var hi=_i(101);Ii(99,1,{},Pq);_.J=function(a){eq(this.a,a)};_.a=false;var ii=_i(99);Ii(89,1,{},Qq);_.M=function(a){return tq(this.a,a)};var li=_i(89);var Rq=(Rc(),Uc);var gwtOnLoad=gwtOnLoad=Di;Bi(Oi);Ei('permProps',[[[yr,'gecko1_8']],[[yr,'ie10']],[[yr,'ie8']],[[yr,'ie9']],[[yr,'safari']]]);if (todomvc) todomvc.onScriptLoad(gwtOnLoad);})();