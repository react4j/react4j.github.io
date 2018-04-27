function todomvc(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='todomvc',Pb='__gwt_marker_todomvc',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='8468E96D88EE9B86FBD8CBAF13EC940E',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};todomvc.onScriptLoad=function(a){todomvc=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb);Db([Z],fb);Db([X],fb);Db([R],fb);Db([_],fb+gb);Db([V],fb+gb);Db([Z],fb+gb);Db([X],fb+gb);Db([R],fb+gb);Db([_],fb+hb);Db([V],fb+hb);Db([Z],fb+hb);Db([X],fb+hb);Db([R],fb+hb);Db([_],fb+ib);Db([V],fb+ib);Db([Z],fb+ib);Db([X],fb+ib);Db([R],fb+ib);Db([_],fb+jb);Db([V],fb+jb);Db([Z],fb+jb);Db([X],fb+jb);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|interactive|complete/.test(ob.readyState)){Ib()}},mb)}
todomvc();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '8468E96D88EE9B86FBD8CBAF13EC940E';function n(){}
function Mi(){}
function Ii(){}
function cb(){}
function Yb(){}
function uc(){}
function vc(){}
function yc(){}
function bd(){}
function jd(){}
function jl(){}
function gl(){}
function il(){}
function kl(){}
function ll(){}
function Nl(){}
function Ol(){}
function Pl(){}
function gn(){}
function hn(){}
function jn(){}
function wn(){}
function In(){}
function qo(){}
function ro(){}
function To(){}
function Yo(){}
function $o(){}
function _o(){}
function bp(){}
function fp(){}
function np(){}
function pp(){}
function xp(){}
function Kq(){}
function Lq(){}
function Pr(){}
function Qr(a){}
function Mr(a){rl()}
function gd(a){fd()}
function Ui(){Ui=Ii}
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
function ij(a){this.a=a}
function vj(a){this.a=a}
function Oj(a){this.a=a}
function Tj(a){this.a=a}
function Uj(a){this.a=a}
function Vj(a){this.a=a}
function Wj(a){this.a=a}
function Sj(a){this.b=a}
function fk(a){this.c=a}
function kk(a){this.a=a}
function lk(a){this.a=a}
function ln(a){this.a=a}
function kn(a){this.a=a}
function mn(a){this.a=a}
function tn(a){this.a=a}
function un(a){this.a=a}
function vn(a){this.a=a}
function Ln(a){this.a=a}
function Mn(a){this.a=a}
function Nn(a){this.a=a}
function Fl(a){this.a=a}
function Rl(a){this.a=a}
function so(a){this.a=a}
function to(a){this.a=a}
function wo(a){this.a=a}
function yo(a){this.a=a}
function zo(a){this.a=a}
function Ao(a){this.a=a}
function Bo(a){this.a=a}
function Co(a){this.a=a}
function Eo(a){this.a=a}
function Fo(a){this.a=a}
function Go(a){this.a=a}
function Ho(a){this.a=a}
function Po(a){this.a=a}
function Qo(a){this.a=a}
function Ro(a){this.a=a}
function So(a){this.a=a}
function dp(a){this.a=a}
function ep(a){this.a=a}
function hp(a){this.a=a}
function ip(a){this.a=a}
function jp(a){this.a=a}
function kp(a){this.a=a}
function lp(a){this.a=a}
function mp(a){this.a=a}
function sp(a){this.a=a}
function Np(a){this.a=a}
function Op(a){this.a=a}
function Xp(a){this.a=a}
function Zp(a){this.a=a}
function _p(a){this.a=a}
function aq(a){this.a=a}
function bq(a){this.a=a}
function nq(a){this.a=a}
function oq(a){this.a=a}
function zq(a){this.a=a}
function Aq(a){this.a=a}
function Bq(a){this.a=a}
function Cq(a){this.a=a}
function Dq(a){this.a=a}
function Mq(a){this.a=a}
function Nq(a){this.a=a}
function Oq(a){this.a=a}
function Vo(){this.a={}}
function Xo(){this.a={}}
function rp(){this.a={}}
function wp(){this.a={}}
function zp(){this.a={}}
function Ak(){this.a=Jk()}
function Ok(){this.a=Jk()}
function Vr(){im(this.a)}
function Cr(a){Sk(this,a)}
function Lr(a){Wk(this,a)}
function Fr(a){oj(this,a)}
function hb(a){Qb((I(),a))}
function ib(a){Rb((I(),a))}
function kb(a){Sb((I(),a))}
function cq(a,b){Jp(b,a)}
function D(a,b){Cb(a.b,b)}
function ub(a,b){a.j=b}
function Ml(a,b){a.a=b}
function sb(a,b){a.b=Vk(b)}
function Eb(a){this.a=Vk(a)}
function Fb(a){this.a=Vk(a)}
function Hb(a){this.a=Vk(a)}
function Bc(a){this.a=Vk(a)}
function uk(){this.a=new tk}
function I(){I=Ii;H=new G}
function Jc(){Jc=Ii;Ic=new n}
function bb(){bb=Ii;ab=new cb}
function $c(){$c=Ii;Zc=new bd}
function Fk(){Fk=Ii;Ek=Hk()}
function rl(){rl=Ii;ql=new Ol}
function oi(a){return a.e}
function Rn(a,b){return a.q=b}
function rj(a,b){return a===b}
function Br(){return this.b}
function Ar(){return this.a}
function Kr(){return this.d}
function Nr(){return this.d<0}
function Sr(){return this.c<0}
function Xr(){return this.g<0}
function Er(){return this.a.b}
function zr(){return $l(this)}
function pj(){Gc.call(this)}
function wj(){Gc.call(this)}
function xj(a){Hc.call(this,a)}
function Ti(a){Hc.call(this,a)}
function Zo(a){lm.call(this,a)}
function ap(a){lm.call(this,a)}
function cp(a){lm.call(this,a)}
function gp(a){lm.call(this,a)}
function op(a){lm.call(this,a)}
function yr(a){return this===a}
function Rr(){return I(),I(),H}
function $j(a,b){return a.a[b]}
function Sl(a,b){Cl(a.b,a.a,b)}
function Vl(a,b){a.splice(b,1)}
function kd(a,b){return aj(a,b)}
function zl(a){nl(a);return a.a}
function Xi(a){Wi(a);return a.k}
function rn(a){eb(a.b);nb(a.a)}
function Z(a){Zd(a,12)&&a.D()}
function Kb(a){Lb(a);!a.e&&Ob(a)}
function fb(a){I();Rb(a);a.e=-2}
function gm(a,b,c){a[b]=c}
function _k(a,b,c){b.J(a.a[c])}
function Jl(a,b,c){b.J(a.a.N(c))}
function Ur(a,b){this.a.rb(a,b)}
function Wk(a,b){while(a.nb(b));}
function C(a,b,c){return A(a,c,b)}
function Dr(){return Mj(this.a)}
function Gc(){Cc(this);this.R()}
function Qc(){Qc=Ii;!!(fd(),ed)}
function Bi(){zi==null&&(zi=[])}
function G(){this.b=new Db(this)}
function Db(a){this.c=new R;Vk(a)}
function fc(a){jb(a.a);return a.e}
function gc(a){jb(a.b);return a.g}
function sq(a){jb(a.d);return a.j}
function pm(a,b){a.ref=b;return a}
function pc(a,b){this.a=a;this.b=b}
function xc(a,b){this.a=a;this.b=b}
function fj(a,b){this.a=a;this.b=b}
function Xj(a,b){this.a=a;this.b=b}
function Mj(a){return a.a.b+a.b.b}
function Md(a){return a.l|a.m<<22}
function Lk(a,b){return a.a.get(b)}
function si(a,b){return qi(a,b)==0}
function pd(a){return new Array(a)}
function Jk(){Fk();return new Ek}
function qm(a,b){a.href=b;return a}
function Il(a,b){this.a=a;this.b=b}
function Ll(a,b){this.a=a;this.b=b}
function Jn(a,b){this.a=a;this.b=b}
function Kn(a,b){this.a=a;this.b=b}
function vo(a,b){this.a=a;this.b=b}
function xo(a,b){this.a=a;this.b=b}
function Do(a,b){this.a=a;this.b=b}
function Yp(a,b){this.a=a;this.b=b}
function lq(a,b){this.a=a;this.b=b}
function pq(a,b){this.a=a;this.b=b}
function mq(a,b){this.b=a;this.a=b}
function Tl(a,b){this.b=a;this.a=b}
function Zm(a,b){fj.call(this,a,b)}
function Iq(a,b){fj.call(this,a,b)}
function Jr(a){return Ej(this.a,a)}
function tp(a){return up(new wp,a)}
function _d(a){return typeof a===Rq}
function ic(a){ec(a,(jb(a.b),a.g))}
function Hp(a){Jp(a,(jb(a.a),!a.e))}
function F(a){a.c&&a.d==0&&Bb(a.b)}
function L(a){a.b=0;a.d=0;a.c=false}
function Yc(){Nc!=0&&(Nc=0);Pc=-1}
function mk(){this.a=new $wnd.Date}
function Gr(){return new cl(this,0)}
function Ir(){return new cl(this,1)}
function Dj(a){return !a?null:a.jb()}
function ce(a){return a==null?null:a}
function Uk(a){return a!=null?q(a):0}
function Mb(a){return !a.e?a:Mb(a.e)}
function td(a){return ud(a.l,a.m,a.h)}
function $(a){return Zd(a,12)&&a.F()}
function nk(a){return a<10?'0'+a:''+a}
function Ql(a,b,c){return Bl(a.a,b,c)}
function Ul(a,b,c){a.splice(b,0,c)}
function Am(a,b){a.value=b;return a}
function vm(a,b){a.onBlur=b;return a}
function rm(a,b){a.onClick=b;return a}
function tm(a,b){a.checked=b;return a}
function wm(a,b){a.onChange=b;return a}
function tj(a,b){a.a+=''+b;return a}
function Lj(a){a.a=new Ak;a.b=new Ok}
function lb(a){this.b=new ek;this.c=a}
function cm(){cm=Ii;_l=new n;bm=new n}
function u(a){++a.d;return new Hb(a)}
function Xc(a){$wnd.clearTimeout(a)}
function Ip(a){eb(a.c);eb(a.b);eb(a.a)}
function en(a){eb(a.c);nb(a.b);T(a.a)}
function Fn(a){eb(a.c);nb(a.a);eb(a.b)}
function ho(a){return a.t=false,Vn(a)}
function qj(a,b){return a.charCodeAt(b)}
function Wr(a,b){return km(this.a,a,b)}
function Zd(a,b){return a!=null&&Xd(a,b)}
function ud(a,b,c){return {l:a,m:b,h:c}}
function $l(a){return a.$H||(a.$H=++Zl)}
function jb(a){var b;Nb((I(),b=Ib,b),a)}
function Ck(a){var b;b=a[ir];b.call(a,0)}
function ek(){this.a=md(kf,Sq,1,0,5,1)}
function R(){this.a=md(kf,Sq,1,100,5,1)}
function Hc(a){this.f=a;Cc(this);this.R()}
function sk(){this.a=new Ak;this.b=new Ok}
function tk(){this.a=new Ak;this.b=new Ok}
function xm(a,b){a.onKeyDown=b;return a}
function sm(a){a.autoFocus=true;return a}
function Gb(a){if(!a.b){a.b=true;w(a.a)}}
function w(a){--a.d;a.c&&a.d==0&&Bb(a.b)}
function Wi(a){if(a.k!=null){return}cj(a)}
function Dc(a,b){a.e=b;b!=null&&Yl(b,Zq,a)}
function Cl(a,b,c){rl();Ml(a,Ql(b,a.a,c))}
function El(a,b){!Zd(b,21)||b.L();a.J(b)}
function V(a,b){r((I(),I(),H),new X(a),b)}
function Gn(a,b){if(b!=a.g){a.g=b;ib(a.b)}}
function oo(a,b){if(b!=a.r){a.r=b;ib(a.a)}}
function Jp(a,b){if(b!=a.e){a.e=b;ib(a.a)}}
function um(a,b){a.defaultValue=b;return a}
function Bm(a,b){a.onDoubleClick=b;return a}
function Cc(a){a.g&&a.e!==Yq&&a.R();return a}
function be(a){return typeof a==='string'}
function $d(a){return typeof a==='boolean'}
function Vp(a){return lj(U(a.e).a-U(a.a).a)}
function Fj(a,b){return Gj(b,a.b)||Gj(b,a.a)}
function Rc(a,b,c){return a.apply(b,c);var d}
function Bl(a,b,c){rl();a.a.ob(b,c);return b}
function $i(a){var b;b=Zi(a);ej(a,b);return b}
function Dk(a,b){var c;c=a[ir];c.call(a,b)}
function Yl(b,c,d){try{b[c]=d}catch(a){}}
function Dl(a,b,c){this.a=a;Yk.call(this,b,c)}
function hl(a,b,c){this.c=a;this.a=b;this.b=c}
function Rk(a,b,c){this.a=a;this.b=b;this.c=c}
function uo(a,b,c){this.a=a;this.b=b;this.c=c}
function ml(){this.a=' ';this.b='';this.c=''}
function Hr(){return new Al(null,this.cb())}
function Sk(a,b){while(a.fb()){Sl(b,a.gb())}}
function kc(a,b){if(b!=a.e){a.e=Vk(b);ib(a.a)}}
function lc(a,b){if(b!=a.g){a.g=Vk(b);ib(a.b)}}
function Ac(a){if(a.b){nb(a.b);a.b=null}Z(a.a)}
function dn(a){a.t=true;a.u||a.v.forceUpdate()}
function Yj(a,b){a.a[a.a.length]=b;return true}
function up(a,b){gm(a.a,'key',Vk(b));return a}
function Zk(a,b){while(a.c<a.d){_k(a,b,a.c++)}}
function xq(a,b){if(!rk(b,a.j)){a.j=b;ib(a.d)}}
function Gl(a,b,c){if(a.a.M(c)){a.b=true;b.J(c)}}
function pb(a,b){gb(b,a);b.b.a.length>0||(b.a=1)}
function Al(a,b){rl();pl.call(this,a);this.a=b}
function xn(a,b){var c;c=b.target;Gn(a,c.value)}
function bc(a,b){a.i&&b.preventDefault();mc(a)}
function wi(a){if(_d(a)){return a|0}return Md(a)}
function xi(a){if(_d(a)){return ''+a}return Nd(a)}
function Si(){Hc.call(this,'divide by zero')}
function Pi(){Pi=Ii;Oi=$wnd.window.document}
function nj(){nj=Ii;mj=md(ff,Sq,32,256,0,1)}
function fd(){fd=Ii;var a;!hd();a=new jd;ed=a}
function bl(a){if(!a.d){a.d=a.b.$();a.c=a.b.bb()}}
function jm(a){return Zd(a,12)&&a.F()?null:a.ub()}
function Up(a){return Ui(),0==U(a.e).a?true:false}
function Ej(a,b){return be(b)?Hj(a,b):!!xk(a.a,b)}
function Kj(a,b){return b==null?zk(a.a):Nk(a.b,b)}
function Od(a,b){return ud(a.l^b.l,a.m^b.m,a.h^b.h)}
function Kk(a,b){return !(a.a.get(b)===undefined)}
function Q(a){return a.c?a.a.length-a.b+a.d:a.d-a.b}
function od(a){return Array.isArray(a)&&a.Db===Mi}
function Yd(a){return !Array.isArray(a)&&a.Db===Mi}
function qq(a){return rj(vr,a)||rj(sr,a)||rj('',a)}
function Ij(a,b,c){return be(b)?Jj(a,b,c):yk(a.a,b,c)}
function vl(a,b){ol(a);return new Al(a,new Hl(b,a.a))}
function wl(a,b){ol(a);return new Al(a,new Kl(b,a.a))}
function nl(a){if(!a.b){ol(a);a.c=true}else{nl(a.b)}}
function Jb(a){if(a.f){a.f.e||vb(a.f,1,true);qb(a.f)}}
function Qj(a){var b;b=a.a.gb();a.b=Pj(a);return b}
function ak(a,b){var c;c=a.a[b];Vl(a.a,b);return c}
function ck(a,b,c){var d;d=a.a[b];a.a[b]=c;return d}
function cd(a,b){!a&&(a=[]);a[a.length]=b;return a}
function zm(a,b){a.type=b.a!=null?b.a:''+b.b;return a}
function Vk(a){if(a==null){throw oi(new pj)}return a}
function fm(){if(am==256){_l=bm;bm=new n;am=0}++am}
function pl(a){if(!a){this.b=null;new ek}else{this.b=a}}
function al(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function Yk(a,b){this.e=a;this.d=(b&64)!=0?b|16384:b}
function cl(a,b){this.b=a;this.a=(b&4096)==0?b|64|16384:b}
function Cb(a,b){b.o=true;b.f?K(a.c,Vk(b)):J(a.c,Vk(b))}
function Hj(a,b){return b==null?!!xk(a.a,null):Kk(a.b,b)}
function rk(a,b){return ce(a)===ce(b)||a!=null&&o(a,b)}
function xr(a,b){return ce(a)===ce(b)||a!=null&&o(a,b)}
function Tr(){var a;return a=this.c<0,a||jb(this.b),!a}
function Or(){var a;return a=this.d<0,a||jb(this.c),!a}
function Yr(){var a;return a=this.g<0,a||jb(this.f),!a}
function Jq(){Hq();return qd(kd(ci,1),Sq,40,0,[Eq,Gq,Fq])}
function yi(a,b){return ri(Od(_d(a)?vi(a):a,_d(b)?vi(b):b))}
function Cj(a,b){return b===a?'(this Map)':b==null?_q:Li(b)}
function Ec(a,b){var c;c=Xi(a.Bb);return b==null?c:c+': '+b}
function _i(a,b){var c;c=Zi(a);ej(a,c);c.e=b?8:0;return c}
function jk(a){var b;b=new uk;Ij(b.a,a,b);return new lk(b)}
function bj(a){if(a.Y()){return null}var b=a.j;return Ei[b]}
function Jj(a,b,c){return b==null?yk(a.a,null,c):Mk(a.b,b,c)}
function $p(a,b,c){this.a=a;this.c=b;this.d=c;this.b=false}
function hj(a){this.f=!a?null:Ec(a,a.Q());Cc(this);this.R()}
function tq(a){eb(a.f);nb(a.e);nb(a.a);T(a.b);T(a.c);eb(a.d)}
function Vb(){var a;Kb(Ib);a=Ib.e;!a&&(Ib.a.c=true);Ib=Ib.e}
function Pn(a,b){var c;if(U(a.d)){c=b.target;oo(a,c.value)}}
function aj(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.T(b))}
function hq(a,b){Qp(a.c,''+xi(ti((new mk).a.getTime())),b)}
function Wc(a){Qc();$wnd.setTimeout(function(){throw a},0)}
function ol(a){if(a.b){ol(a.b)}else if(a.c){throw oi(new gj)}}
function bo(a){eb(a.f);nb(a.e);nb(a.b);T(a.d);eb(a.c);eb(a.a)}
function Wb(a){if(!$(a.a)&&U(a.a)){v((I(),I(),H),a.b);Z(a.c)}}
function oj(a,b){var c,d;for(d=a.$();d.fb();){c=d.gb();b.J(c)}}
function db(a,b){var c;Yj(a.b,b);c=0==b.p?1:b.p;a.a>c&&(a.a=c)}
function wk(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function Ub(a,b){Ib=new Tb(a,Ib,b);a.c=false;Jb(Ib);return Ib}
function Ki(a){function b(){}
;b.prototype=a||{};return new b}
function An(){An=Ii;var a;zn=(a=Ji(bp.prototype.vb,bp,[]),a)}
function Yn(){Yn=Ii;var a;Xn=(a=Ji(fp.prototype.vb,fp,[]),a)}
function pn(){pn=Ii;var a;on=(a=Ji(_o.prototype.vb,_o,[]),a)}
function an(){an=Ii;var a;_m=(a=Ji(Yo.prototype.vb,Yo,[]),a)}
function Jo(){Jo=Ii;var a;Io=(a=Ji(np.prototype.vb,np,[]),a)}
function Gi(a,b){for(var c in a){b[c]===undefined&&(b[c]=a[c])}}
function xk(a,b){var c;return vk(b,wk(a,b==null?0:(c=q(b),c|0)))}
function gk(a,b){return new Al(null,(Xk(b,a.length),new al(a,b)))}
function co(a,b){a.v.props[rr]===(null==b?null:b[rr])||ib(a.c)}
function T(a){if(!a.a){a.a=true;a.g=null;a.c=null;a.f.e||nb(a.f)}}
function el(a){return !a.a?a.c:a.e.length==0?a.a.a:a.a.a+(''+a.e)}
function sl(a,b){return (ol(a),zl(new Al(a,new Hl(b,a.a)))).nb(ql)}
function tl(a,b){var c;return b.b.N(yl(a,b.c.O(),(c=new Rl(b),c)))}
function ac(a,b){a.j=b;rj(b,(jb(a.a),a.e))&&lc(a,b);cc(b);mc(a)}
function vq(a){var b;b=(jb(a.d),a.j);!!b&&!!b&&b.d<0&&xq(a,null)}
function ym(a){a.placeholder='What needs to be done?';return a}
function $k(a,b){if(a.c<a.d){_k(a,b,a.c++);return true}return false}
function Tb(a,b,c){this.a=Vk(a);this.b=a.a++;this.e=b;this.f=c}
function Kl(a,b){Yk.call(this,b.mb(),b.lb()&-6);this.a=a;this.b=b}
function Bk(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function Qi(a,b,c,d){a.addEventListener(b,c,(Ui(),d?true:false))}
function Ri(a,b,c,d){a.removeEventListener(b,c,(Ui(),d?true:false))}
function Uc(a,b,c){var d;d=Sc();try{return Rc(a,b,c)}finally{Vc(d)}}
function sd(a){var b,c,d;b=a&ar;c=a>>22&ar;d=a<0?br:0;return ud(b,c,d)}
function Fc(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function dl(a,b){!a.a?(a.a=new vj(a.d)):tj(a.a,a.b);tj(a.a,b);return a}
function O(a,b){a.a[a.d]=b;++a.d;if(a.d>=a.a.length){a.d=0;a.c=true}}
function Zn(a){if(a.g>=0){a.g=-2;v((I(),I(),H),new to(a));a.g=-1}}
function eb(a){if(-2!=a.e){v((I(),I(),H),new mb(a));!!a.c&&nb(a.c)}}
function fq(a,b){tl(Sp(a.c),new hl(new kl,new jl,new gl)).Z(new Nq(b))}
function Ep(){Ep=Ii;Ap=new nc;Bp=new Wp;Cp=new kq(Bp);Dp=new yq(Bp,Ap)}
function ul(a){var b;nl(a);b=0;while(a.a.nb(new Pl)){b=pi(b,1)}return b}
function Hl(a,b){Yk.call(this,b.mb(),b.lb()&-16449);this.a=a;this.c=b}
function Pk(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function fl(a,b,c){this.b=a;this.d=b;this.e=c;this.c=this.d+(''+this.e)}
function de(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function Uo(a){return $wnd.React.createElement((an(),_m),a.a,undefined)}
function Wo(a){return $wnd.React.createElement((pn(),on),a.a,undefined)}
function qp(a){return $wnd.React.createElement((An(),zn),a.a,undefined)}
function yp(a){return $wnd.React.createElement((Jo(),Io),a.a,undefined)}
function rq(a,b){return (Hq(),Fq)==a||(Eq==a?(jb(b.a),!b.e):(jb(b.a),b.e))}
function Vc(a){a&&ad(($c(),Zc));--Nc;if(a){if(Pc!=-1){Xc(Pc);Pc=-1}}}
function $n(a){jb(a.c);return null!=a.v.props[rr]?a.v.props[rr]:null}
function eo(a){oo(a,gc((jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null)))}
function xl(a){var b;ol(a);b=new Dl(a,a.a.mb(),a.a.lb());return new Al(a,b)}
function yl(a,b,c){var d;nl(a);d=new Nl;d.a=b;a.a.eb(new Tl(d,c));return d.a}
function md(a,b,c,d,e,f){var g;g=nd(e,d);e!=10&&qd(kd(a,f),b,c,e,g);return g}
function Bb(a){var b;if(0!=a.a){return 0}else{b=0;while(Ab(a)){++b}return b}}
function Qk(a){if(a.a.c!=a.c){return Lk(a.a,a.b.value[0])}return a.b.value[1]}
function Mc(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Tc(b){Qc();return function(){return Uc(b,this,arguments);var a}}
function bk(a,b){var c;c=_j(a,b,0);if(c==-1){return false}Vl(a.a,c);return true}
function im(a){var b;b=u(a.sb());try{a.u=true;Zd(a,12)&&a.D()}finally{Gb(b)}}
function N(a,b){if(0==a.b){a.b=a.a.length-1;a.c=true}else{--a.b}a.a[a.b]=b}
function Qn(a,b){27==b.which?(no(a),xq((Ep(),Dp),null)):13==b.which&&lo(a)}
function Wl(a,b){return ld(b)!=10&&qd(p(b),b.Cb,b.__elementTypeId$,ld(b),a),a}
function ld(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function Zj(a,b){var c,d,e,f;for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.J(c)}}
function Wn(a,b){var c;c=a?sr:'';if(b){c.length==0||(c+=' ');c+='editing'}return c}
function _j(a,b,c){for(;c<a.a.length;++c){if(rk(b,a.a[c])){return c}}return -1}
function s(a,b,c){var d,e,f;f=new Eb(b);e=(d=new xb(null,f,c),d);Cb(a.b,e);return e}
function ad(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=dd(b,c)}while(a.b);a.b=c}}
function _c(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=dd(b,c)}while(a.a);a.a=c}}
function hc(a){Ri((Pi(),$wnd.window.window),Wq,a.f,false);eb(a.c);eb(a.b);eb(a.a)}
function Sn(a){Rp((Ep(),Bp),(jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null))}
function Tn(a){xq((Ep(),Dp),(jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null));no(a)}
function gq(a){tl(vl(Sp(a.c),new Lq),new hl(new kl,new jl,new gl)).Z(new Mq(a.c))}
function om(a,b){a.className=tl(gk(b,b.length),new hl(new ml,new ll,new il));return a}
function Zi(a){var b;b=new Yi;b.k='Class$'+(a?'S'+a:''+b.g);b.b=b.k;b.i=b.k;return b}
function tc(a,b){var c;c=Kj(a.i,b?b.f:null);if(c){!!c&&Ac(c);ib(a.d)}else{new zc(b)}}
function tb(b){if(b){try{b.G()}catch(a){a=ni(a);if(Zd(a,4)){I()}else throw oi(a)}}}
function ej(a,b){var c;if(!a){return}b.j=a;var d=bj(b);if(!d){Ei[a]=[b];return}d.Bb=b}
function ni(a){var b;if(Zd(a,4)){return a}b=a&&a[Zq];if(!b){b=new Lc(a);gd(b)}return b}
function Ji(a,b,c){var d=function(){return a.apply(d,arguments)};b.apply(d,c);return d}
function Ai(){Bi();var a=zi;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Td(){Td=Ii;Pd=ud(ar,ar,524287);Qd=ud(0,0,cr);Rd=sd(1);sd(2);Sd=sd(0)}
function Rj(a){this.d=a;this.c=new Pk(this.d.b);this.a=this.c;this.b=Pj(this)}
function gj(){Hc.call(this,"Stream already terminated, can't be modified or used")}
function ae(a){return a!=null&&(typeof a===Qq||typeof a==='function')&&!(a.Db===Mi)}
function Di(a,b){typeof window===Qq&&typeof window['$gwt']===Qq&&(window['$gwt'][a]=b)}
function Nb(a,b){var c;if(a.f){c=a.b;if(b.e!=c){b.e=c;Yj((!a.c&&(a.c=new ek),a.c),b)}}}
function Pb(a,b){var c;if(!a.d){c=Mb(a);!c.d&&(c.d=new ek);a.d=c.d}b.d=true;Yj(a.d,Vk(b))}
function J(a,b){var c;c=(a.c?a.a.length-a.b+a.d:a.d-a.b)+1;c>a.a.length&&M(a,c);O(a,Vk(b))}
function K(a,b){var c;c=(a.c?a.a.length-a.b+a.d:a.d-a.b)+1;c>a.a.length&&M(a,c);N(a,Vk(b))}
function Nk(a,b){var c;c=a.a.get(b);if(c===undefined){++a.c}else{Dk(a.a,b);--a.b}return c}
function Tp(a){oj(new Vj(a.i),new yc);Lj(a.i);eb(a.f);T(a.c);T(a.e);T(a.a);T(a.b);eb(a.d)}
function rb(a){I();qb(a);Zj(a.b,new zb(a));a.b.a=md(kf,Sq,1,0,5,1);a.d=true;vb(a,0,true)}
function Sp(a){jb(a.d);return wl(vl(new Al(null,new cl(new Vj(a.i),0)),new uc),new vc)}
function uq(a){var b;return b=U(a.b),tl(vl(Sp(a.k),new Oq(b)),new hl(new kl,new jl,new gl))}
function kq(a){var b;this.c=Vk(a);this.b=1;this.a=(b=new lb((I(),null)),b);this.b=2;this.b=4}
function qb(a){var b,c;for(c=new fk(a.b);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);b.a=1}}
function t(a,b,c,d){var e,f;e=new W(a,b,d);f=e.f;f.g=null;f.i=c;f.k=null;f.j=null;return e}
function zj(a,b){var c,d;for(d=b.$();d.fb();){c=d.gb();if(!a.ab(c)){return false}}return true}
function hk(a){var b,c,d;d=0;for(c=a.$();c.fb();){b=c.gb();d=d+(b!=null?q(b):0);d=d|0}return d}
function kj(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function ri(a){var b;b=a.h;if(b==0){return a.l+a.m*er}if(b==br){return a.l+a.m*er-dr}return a}
function Gj(a,b){var c,d;for(d=b.$();d.fb();){c=d.gb();if(rk(a,c.jb())){return true}}return false}
function Ed(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return ud(c&ar,d&ar,e&br)}
function Ld(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return ud(c&ar,d&ar,e&br)}
function vi(a){var b,c,d,e;e=a;d=0;if(e<0){e+=dr;d=br}c=de(e/er);b=de(e-c*er);return ud(b,c,d)}
function nm(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(rj(c,a)){return true}}return false}
function vk(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(rk(a,c.ib())){return c}}return null}
function gb(a,b){var c,d;d=a.b;bk(d,b);d.a.length==0&&!!a.c&&!a.c.a.e&&(a.d||Pb((I(),c=Ib,c),a))}
function vp(a,b){gm(a.a,rr,b);return $wnd.React.createElement((Yn(),Xn),a.a,undefined)}
function ti(a){if(fr<a&&a<dr){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return ri(Gd(a))}
function Pj(a){if(a.a.fb()){return true}if(a.a!=a.c){return false}a.a=new Bk(a.d.a);return a.a.fb()}
function Xk(a,b){if(0>a||a>b){throw oi(new Ti('fromIndex: 0, toIndex: '+a+', length: '+b))}}
function ob(b){if(!b.d){try{1!=b.p&&b.n.H(b)}catch(a){a=ni(a);if(Zd(a,4)){I()}else throw oi(a)}}}
function lm(a){$wnd.React.Component.call(this,a);this.a=this.wb();this.a.v=Vk(this);this.a.pb()}
function W(a,b,c){this.d=Vk(a);this.b=Vk(b);this.g=null;this.e=false;this.f=new xb(this,new Y(this),c)}
function Mk(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);d===undefined?++a.b:++a.c;return d}
function qd(a,b,c,d,e){e.Bb=a;e.Cb=b;e.Db=Mi;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Ni(){Ep();$wnd.ReactDOM.render(yp(new zp),(Pi(),Oi).getElementById('todoapp'),null)}
function Hq(){Hq=Ii;Eq=new Iq('ACTIVE',0);Gq=new Iq('COMPLETED',1);Fq=new Iq('ALL',2)}
function io(a){return Ui(),sl(xl(wl(new Al(null,new cl(jk(new so(a)),1)),new qo)),new ro)?true:false}
function fo(a){return Ui(),sq((Ep(),Dp))==(jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null)?true:false}
function p(a){return be(a)?nf:_d(a)?af:$d(a)?$e:Yd(a)?a.Bb:od(a)?a.Bb:a.Bb||Array.isArray(a)&&kd(Re,1)||Re}
function On(a){var b;b=U(a.d);if(!a.s&&b){a.s=true;no(a);a.q.focus();a.q.select()}else a.s&&!b&&(a.s=false)}
function wq(a){var b;b=fc(a.i);rj(vr,b)||rj(sr,b)||rj('',b)?ec(a.i,b):qq(gc(a.i))?jc(a.i):ec(a.i,'')}
function Bd(a){var b,c;c=jj(a.h);if(c==32){b=jj(a.m);return b==32?jj(a.l)+32:b+20-10}else{return c-12}}
function Hd(a){var b,c,d;b=~a.l+1&ar;c=~a.m+(b==0?1:0)&ar;d=~a.h+(b==0&&c==0?1:0)&br;return ud(b,c,d)}
function Ad(a){var b,c,d;b=~a.l+1&ar;c=~a.m+(b==0?1:0)&ar;d=~a.h+(b==0&&c==0?1:0)&br;a.l=b;a.m=c;a.h=d}
function xd(a,b,c,d,e){var f;f=Jd(a,b);c&&Ad(f);if(e){a=zd(a,b);d?(rd=Hd(a)):(rd=ud(a.l,a.m,a.h))}return f}
function U(a){jb(a.f.c);wb(a.f)&&ob(a.f);if(a.c){if(Zd(a.c,6)){throw oi(a.c)}else{throw oi(a.c)}}return a.g}
function yj(a,b){var c,d;for(d=a.$();d.fb();){c=d.gb();if(ce(b)===ce(c)||b!=null&&o(b,c)){return true}}return false}
function lj(a){var b,c;if(a>-129&&a<128){b=a+128;c=(nj(),mj)[b];!c&&(c=mj[b]=new ij(a));return c}return new ij(a)}
function Nj(a,b){var c;if(b===a){return true}if(!Zd(b,47)){return false}c=b;if(c.bb()!=a.bb()){return false}return zj(a,c)}
function qi(a,b){var c;if(_d(a)&&_d(b)){c=a-b;if(!isNaN(c)){return c}}return Fd(_d(a)?vi(a):a,_d(b)?vi(b):b)}
function pi(a,b){var c;if(_d(a)&&_d(b)){c=a+b;if(fr<c&&c<dr){return c}}return ri(Ed(_d(a)?vi(a):a,_d(b)?vi(b):b))}
function yn(a,b){var c;if(13==b.keyCode){b.preventDefault();c=sj((jb(a.b),a.g));if(c.length>0){dq((Ep(),Cp),c);Gn(a,'')}}}
function nb(a){var b;if(!a.d&&!a.e){a.e=true;tb((b=a.j,b));v((I(),I(),H),new yb(a));!!a.a&&T(a.a);!!a.c&&eb(a.c);a.e=false}}
function dc(a){var b,c;c=(b=(Pi(),$wnd.window.window).location.hash,null==b?'':b.substr(1));kc(a,c);rj(a.j,c)&&lc(a,c)}
function Lc(a){Jc();Cc(this);this.e=a;a!=null&&Yl(a,Zq,this);this.f=a==null?_q:Li(a);this.a='';this.b=a;this.a=''}
function Yi(){this.g=Vi++;this.k=null;this.i=null;this.f=null;this.d=null;this.b=null;this.j=null;this.a=null}
function xb(a,b,c){this.b=new ek;this.a=a;this.n=Vk(b);this.f=c;this.a?(this.c=new lb(this)):(this.c=null)}
function ik(a){var b,c,d;d=1;for(c=new fk(a);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=31*d+(b!=null?q(b):0);d=d|0}return d}
function em(a){cm();var b,c,d;c=':'+a;d=bm[c];if(d!=null){return de(d)}d=_l[c];b=d==null?dm(a):de(d);fm();bm[c]=b;return b}
function Li(a){var b;if(Array.isArray(a)&&a.Db===Mi){return Xi(p(a))+'@'+(b=q(a)>>>0,b.toString(16))}return a.toString()}
function wd(a,b){if(a.h==cr&&a.m==0&&a.l==0){b&&(rd=ud(0,0,0));return td((Td(),Rd))}b&&(rd=ud(a.l,a.m,a.h));return ud(0,0,0)}
function o(a,b){return be(a)?rj(a,b):_d(a)?a===b:$d(a)?a===b:Yd(a)?a.w(b):od(a)?a===b:!!a&&!!a.equals?a.equals(b):ce(a)===ce(b)}
function q(a){return be(a)?em(a):_d(a)?de(a):$d(a)?a?1231:1237:Yd(a)?a.B():od(a)?$l(a):!!a&&!!a.hashCode?a.hashCode():$l(a)}
function $m(){Ym();return qd(kd(ug,1),Sq,10,0,[Cm,Dm,Em,Fm,Gm,Hm,Im,Jm,Km,Lm,Mm,Nm,Om,Pm,Qm,Rm,Sm,Tm,Um,Vm,Wm,Xm])}
function dj(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function dk(a,b){var c,d;d=a.a.length;b.length<d&&(b=Wl(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function P(a){var b;if(0==(a.c?a.a.length-a.b+a.d:a.d-a.b)){return null}b=a.a[a.b];a.a[a.b]=null;++a.b;if(a.b>=a.a.length){a.b=0;a.c=false}return b}
function Sc(){var a;if(Nc!=0){a=Mc();if(a-Oc>2000){Oc=a;Pc=$wnd.setTimeout(Yc,10)}}if(Nc++==0){_c(($c(),Zc));return true}return false}
function km(a,b,c){var d;if(a.t){return true}if(a.v.state===c){d=mm(a.v.props,b,qd(kd(nf,1),Sq,2,6,[]));d&&a.tb(b);return d}else{return true}}
function hd(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Xl(a){switch(typeof(a)){case 'string':return em(a);case Rq:return de(a);case 'boolean':return Ui(),a?1231:1237;default:return $l(a);}}
function sn(){pn();var a,b;++hm;this.c=1;this.b=(a=new lb((I(),null)),a);this.a=(b=new xb(null,new Fb(new tn(this)),false),b);this.c=2;this.c=4}
function Xd(a,b){if(be(a)){return !!Wd[b]}else if(a.Cb){return !!a.Cb[b]}else if(_d(a)){return !!Vd[b]}else if($d(a)){return !!Ud[b]}return false}
function Sb(a){var b,c,d;if(a.b.a.length>0&&1==a.a){a.a=2;for(c=new fk(a.b);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=b.p;1==d&&vb(b,2,true)}}}
function Rb(a){var b,c,d,e;if(a.b.a.length>0&&3!=a.a){a.a=3;d=a.b;for(c=new fk(d);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);e=b.p;3!=e&&vb(b,3,true)}}}
function Qb(a){var b,c;if(a.b.a.length>0&&3!=a.a){a.a=3;for(c=new fk(a.b);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);2==b.p?vb(b,3,true):1==b.p&&(a.a=1)}}}
function r(b,c,d){var e;try{Ub(b,d);try{c.G()}finally{Vb()}}catch(a){a=ni(a);if(Zd(a,4)){e=a;throw oi(e)}else throw oi(a)}finally{b.c&&b.d==0&&Bb(b.b)}}
function v(b,c){var d;try{Ub(b,null);try{c.G()}finally{Vb()}}catch(a){a=ni(a);if(Zd(a,4)){d=a;throw oi(d)}else throw oi(a)}finally{b.c&&b.d==0&&Bb(b.b)}}
function jc(b){var c;try{v((I(),I(),H),new qc(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function mc(b){var c;try{v((I(),I(),H),new rc(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function jo(b){var c;try{v((I(),I(),H),new Co(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function ko(b){var c;try{v((I(),I(),H),new Bo(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function lo(b){var c;try{v((I(),I(),H),new yo(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function mo(b){var c;try{v((I(),I(),H),new zo(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function no(b){var c;try{v((I(),I(),H),new wo(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function Ko(b){var c;try{v((I(),I(),H),new Qo(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function Lp(b){var c;try{v((I(),I(),H),new Np(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function eq(b){var c;try{v((I(),I(),H),new nq(b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}}
function bn(){var b;try{v((I(),I(),H),new jn)}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){b=a;throw oi(b)}else if(Zd(a,4)){b=a;throw oi(new hj(b))}else throw oi(a)}}
function sj(a){var b,c,d;c=a.length;d=0;while(d<c&&a.charCodeAt(d)<=32){++d}b=c;while(b>d&&a.charCodeAt(b-1)<=32){--b}return d>0||b<c?a.substr(d,b-d):a}
function Ob(a){var b,c;b=0;if(a.d){while(a.d.a.length!=0){c=ak(a.d,a.d.a.length-1);c.d=false;if(c.b.a.length<=0){0!=c.c.p&&vb(c.c,0,true);++b}}}return b}
function zd(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return ud(c,d,e)}
function Pp(a,b,c,d){var e,f,g,h;e=new Mp(b,c,d);f=new Bc(e);g=e.f;Jj(a.i,g,f);h=(new Xb((I(),new wc(e)),new xc(a,e),true)).c;f.b=Vk(h);ib(a.d);return e}
function nd(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Dd(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&ar;a.m=d&ar;a.h=e&br;return true}
function Dn(a){return a.t=false,$wnd.React.createElement(qr,sm(wm(xm(Am(ym(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['new-todo']))),(jb(a.b),a.g)),a.f),a.e)))}
function Xb(a,b,c){Vk(a);this.b=Vk(b);this.a=t((I(),a),new Yb,new Zb(this),true);this.c=s((null,H),new $b(this),true);ub(this.c,new _b(this));c&&F((null,H))}
function A(b,c,d){var e,f;try{Ub(b,d);try{f=c.K()}finally{Vb()}return f}catch(a){a=ni(a);if(Zd(a,4)){e=a;throw oi(e)}else throw oi(a)}finally{b.c&&b.d==0&&Bb(b.b)}}
function Fd(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function Ci(b,c,d,e){Bi();var f=zi;$moduleName=c;$moduleBase=d;mi=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Pq(g)()}catch(a){b(c,a)}}else{Pq(g)()}}
function ec(b,c){var d;try{v((I(),I(),H),new pc(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function dq(b,c){var d;try{v((I(),I(),H),new pq(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function iq(b,c){var d;try{v((I(),I(),H),new mq(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function Bn(b,c){var d;try{v((I(),I(),H),new Kn(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function Cn(b,c){var d;try{v((I(),I(),H),new Jn(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function _n(b,c){var d;try{v((I(),I(),H),new Do(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function ao(b,c){var d;try{v((I(),I(),H),new xo(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function Rp(b,c){var d;try{v((I(),I(),H),new Yp(b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function Mp(a,b,c){var d,e,f;this.f=Vk(a);this.g=Vk(b);this.e=c;this.d=1;this.c=(e=new lb((I(),null)),e);this.b=(f=new lb(null),f);this.a=(d=new lb(null),d);this.d=2;this.d=4}
function Oo(){Jo();var a,b;++hm;this.d=Ji(pp.prototype.yb,pp,[]);this.c=1;this.b=(a=new lb((I(),null)),a);this.a=(b=new xb(null,new Fb(new Po(this)),false),b);this.c=2;this.c=4}
function Aj(a){var b,c,d;d=new fl(', ','[',']');for(c=a.$();c.fb();){b=c.gb();dl(d,b===a?'(this Collection)':b==null?_q:Li(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function Hk(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return Ik()}}
function Ab(a){var b,c;c=Q(a.c);if(0==a.d){if(0==c){a.a=0;return false}else if(a.a+1>a.b){a.a=0;L(a.c);return false}else{a.a=a.a+1;a.d=c}}--a.d;b=P(a.c);b.o=false;ob(b);return true}
function S(b){var c,d,e;e=b.g;try{d=b.d.K();if(!b.b.I(e,d)){b.g=d;b.c=null;hb(b.f.c)}}catch(a){a=ni(a);if(Zd(a,13)){c=a;if(!b.c){b.g=null;b.c=c;hb(b.f.c)}throw oi(c)}else throw oi(a)}}
function qk(){qk=Ii;ok=qd(kd(nf,1),Sq,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);pk=qd(kd(nf,1),Sq,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function Fi(){Ei={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function dd(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Eb()&&(c=cd(c,g)):g[0].Eb()}catch(a){a=ni(a);if(Zd(a,4)){d=a;Qc();Wc(Zd(d,43)?d.S():d)}else throw oi(a)}}return c}
function Id(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return ud(c&ar,d&ar,e&br)}
function Kd(a,b){var c,d,e,f;b&=63;c=a.h&br;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return ud(d&ar,e&ar,f&br)}
function Kc(a){var b;if(a.c==null){b=ce(a.b)===ce(Ic)?null:a.b;a.d=b==null?_q:ae(b)?b==null?null:b.name:be(b)?'String':Xi(p(b));a.a=a.a+': '+(ae(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function zk(a){var b,c,d,e;c=(b=a.a.get(0),b==null?new Array:b);for(e=0;e<c.length;e++){d=c[e];if(rk(null,d.ib())){if(c.length==1){c.length=0;Ck(a.a)}else{c.splice(e,1)}--a.b;return d.jb()}}return null}
function yk(a,b,c){var d,e,f,g,h;h=b==null?0:(g=q(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=vk(b,e);if(f){return f.kb(c)}}e[e.length]=new Xj(b,c);++a.b;return null}
function dm(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+qj(a,c++)}b=b|0;return b}
function Un(a){var b;b=(jb(a.a),a.r);if(null!=b&&b.length!=0){iq((Ep(),jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null),b);xq(Dp,null);oo(a,b)}else{Rp((Ep(),Bp),(jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null))}}
function jq(b,c){var d,e;try{v((I(),I(),H),(e=new lq(b,c),qd(kd(kf,1),Sq,1,5,[(Ui(),c?true:false)]),e))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}}
function Qp(b,c,d){var e,f;try{return A((I(),I(),H),(f=new $p(b,c,d),qd(kd(kf,1),Sq,1,5,[c,d,(Ui(),false)]),f),null)}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){e=a;throw oi(e)}else if(Zd(a,4)){e=a;throw oi(new hj(e))}else throw oi(a)}}
function nn(){var a,b;b=U((Ep(),Bp).e).a;a='item'+(b==1?'':'s');return $wnd.React.createElement('span',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['todo-count'])),$wnd.React.createElement('strong',null,''+b),' '+a+' left')}
function M(a,b){var c,d,e,f,g,h;g=a.a.length;while(g<b){g=(g-1)*2+1}c=md(kf,Sq,1,g,5,1);f=0;h=a.c?a.a.length-a.b+a.d:a.d-a.b;for(d=0;d<h;d++){e=(a.b+d)%a.a.length;c[f]=a.a[e];a.a[e]=null;++f}a.a=c;a.b=0;a.d=f;a.c=false}
function Bj(a,b){var c,d,e;c=b.ib();e=b.jb();d=be(c)?c==null?Dj(xk(a.a,null)):Lk(a.b,c):Dj(xk(a.a,c));if(!(ce(e)===ce(d)||e!=null&&o(e,d))){return false}if(d==null&&!(be(c)?Hj(a,c):!!xk(a.a,c))){return false}return true}
function fn(){an();var a,b;++hm;this.e=Ji($o.prototype.Ab,$o,[]);this.d=1;this.c=(a=new lb((I(),null)),a);this.a=t(new gn,(bb(),bb(),ab),null,false);this.b=(b=new xb(null,new Fb(new ln(this)),false),b);this.d=2;this.d=4}
function Hn(){An();var a,b,c;++hm;this.f=Ji(dp.prototype.zb,dp,[this]);this.e=Ji(ep.prototype.yb,ep,[this]);this.d=1;this.c=(b=new lb((I(),null)),b);this.b=(a=new lb(null),a);this.a=(c=new xb(null,new Fb(new Mn(this)),false),c);this.d=2;this.d=4}
function cc(a){var b;if(0==a.length){b=(Pi(),$wnd.window.window).location.pathname+(''+$wnd.window.window.location.search);$wnd.window.window.history.pushState('',Oi.title,b)}else{(Pi(),$wnd.window.window).location.hash=a}}
function jj(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Jd(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&cr)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?br:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?br:0;f=d?ar:0;e=c>>b-44}return ud(e&ar,f&ar,g&br)}
function Hi(a,b,c){var d=Ei,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Ei[b]),Ki(h));_.Cb=c;!b&&(_.Db=Mi);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.Bb=f)}
function cj(a){if(a.X()){var b=a.c;b.Y()?(a.k='['+b.j):!b.X()?(a.k='[L'+b.V()+';'):(a.k='['+b.V());a.b=b.U()+'[]';a.i=b.W()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.k=dj('.',[c,dj('$',d)]);a.b=dj('.',[c,dj('.',d)]);a.i=d[d.length-1]}
function Cd(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return kj(c)}if(b==0&&d!=0&&c==0){return kj(d)+22}if(b!=0&&d==0&&c==0){return kj(b)+44}return -1}
function wb(b){var c,d,e,f;switch(b.p){case 1:return false;case 0:case 3:return true;case 2:{for(e=new fk(b.b);e.a<e.c.a.length;){d=(e.b=e.a++,e.c.a[e.b]);if(d.c){f=d.c;c=f.a;try{U(c)}catch(a){a=ni(a);if(!Zd(a,4))throw oi(a)}if(3==b.p){return true}}}}}qb(b);return false}
function Gd(a){var b,c,d,e,f;if(isNaN(a)){return Td(),Sd}if(a<-9223372036854775808){return Td(),Qd}if(a>=9223372036854775807){return Td(),Pd}e=false;if(a<0){e=true;a=-a}d=0;if(a>=dr){d=de(a/dr);a-=d*dr}c=0;if(a>=er){c=de(a/er);a-=c*er}b=de(a);f=ud(b,c,d);e&&Ad(f);return f}
function nc(){var a,b,c,d;this.f=new sc(this);this.d=1;this.c=(c=new lb((I(),null)),c);this.b=(d=new lb(null),d);this.a=(b=new lb(null),b);this.d=2;Qi((Pi(),$wnd.window.window),Wq,this.f,false);this.j=this.e=this.g=(a=$wnd.window.window.location.hash,null==a?'':a.substr(1));this.d=4}
function mm(a,b,c){var d,e,f,g;if(null==a||null==b||!rj(typeof(a),Qq)||!rj(typeof(b),Qq)){return !(a===b)}g=$wnd.Object.keys(a);if(0==c.length&&$wnd.Object.keys(b).length!=g.length){return true}for(e=0,f=g.length;e<f;++e){d=g[e];if(!nm(d,c)&&!(a[d]===b[d])){return true}}return false}
function vb(a,b,c){var d,e;if(b!=a.p){e=a.p;a.p=b;if(!a.c&&3==b){tb((d=a.k,d));c&&(a.d||a.o||D((I(),I(),H),a))}else if(!!a.c&&1==e&&(3==b||2==b)){kb(a.c);tb((d=a.k,d));c&&(a.d||a.o||D((I(),I(),H),a))}else if(0==a.p){tb((d=a.i,d));Zj(a.b,new zb(a));a.b.a=md(kf,Sq,1,0,5,1)}else 0==e&&tb((d=a.g,d))}}
function Wp(){var a,b;this.i=new sk;this.g=1;this.f=(b=new lb((I(),null)),b);this.d=(a=new lb(null),a);this.c=t(new Zp(this),(bb(),bb(),ab),null,false);this.e=t(new _p(this),(null,ab),null,false);this.a=t(new aq(this),(null,ab),null,false);this.b=t(new bq(this),(null,ab),null,false);this.g=2;this.g=4}
function Gk(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function yq(a,b){var c,d;this.k=Vk(a);this.i=Vk(b);this.g=1;this.f=(d=new lb((I(),null)),d);this.d=(c=new lb(null),c);this.b=t(new Aq(this),(bb(),bb(),ab),null,false);this.c=t(new Bq(this),(null,ab),null,false);this.e=s((null,H),new Cq(this),false);this.a=s((null,H),new Dq(this),false);this.g=2;this.g=3;F((null,H));this.g=4}
function Nd(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==cr&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Nd(Hd(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=sd(1000000000);c=vd(c,e,true);b=''+Md(rd);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function yd(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=Bd(b)-Bd(a);g=Id(b,j);i=ud(0,0,0);while(j>=0){h=Dd(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&Ad(i);if(f){if(d){rd=Hd(a);e&&(rd=Ld(rd,(Td(),Rd)))}else{rd=ud(a.l,a.m,a.h)}}return i}
function Ym(){Ym=Ii;Cm=new Zm(jr,0);Dm=new Zm('checkbox',1);Em=new Zm('color',2);Fm=new Zm('date',3);Gm=new Zm('datetime',4);Hm=new Zm('email',5);Im=new Zm('file',6);Jm=new Zm('hidden',7);Km=new Zm('image',8);Lm=new Zm('month',9);Mm=new Zm(Rq,10);Nm=new Zm('password',11);Om=new Zm('radio',12);Pm=new Zm('range',13);Qm=new Zm('reset',14);Rm=new Zm('search',15);Sm=new Zm('submit',16);Tm=new Zm('tel',17);Um=new Zm('text',18);Vm=new Zm('time',19);Wm=new Zm('url',20);Xm=new Zm('week',21)}
function po(){Yn();var a,b,c,d;++hm;this.j=Ji(hp.prototype.zb,hp,[this]);this.o=Ji(ip.prototype.xb,ip,[this]);this.p=Ji(jp.prototype.yb,jp,[this]);this.n=Ji(kp.prototype.Ab,kp,[this]);this.k=Ji(lp.prototype.Ab,lp,[this]);this.i=Ji(mp.prototype.yb,mp,[this]);this.g=1;this.f=(b=new lb((I(),null)),b);this.c=(c=new lb(null),c);this.a=(a=new lb(null),a);this.d=t(new Ao(this),(bb(),bb(),ab),null,false);this.b=(d=new xb(null,new Fb(new Eo(this)),false),d);this.e=(new Xb(new Go(this),new Ho(this),false)).c;this.g=2;this.g=4}
function Lb(a){var b,c,d,e,f,g,h,i,j,k,l;if(!a.f){return}i=1;d=false;b=0;if(!!a.c&&!a.f.d){l=a.c.a.length;for(g=0;g<l;g++){j=$j(a.c,g);if(-1!=j.e&&-2!=j.e){j.e=-1;g!=b&&ck(a.c,b,j);++b;if(j.c){k=j.c;e=k.p;e==3&&(i=3)}}}}c=a.f.b;for(h=c.a.length-1;h>=0;h--){j=c.a[h];if(-1==j.e){j.e=0}else{gb(j,a.f);d=true}}!a.f.d&&1!=i&&a.f.p<i&&vb(a.f,i,false);if(a.c){for(f=b-1;f>=0;f--){j=$j(a.c,f);if(-1==j.e){j.e=0;db(j,a.f);d=true}}}if(a.c){for(f=a.c.a.length-1;f>=b;f--){ak(a.c,f)}d&&sb(a.f,a.c)}else{d&&sb(a.f,new ek)}!$(a.f)&&!!a.f.c&&a.f.c.b.a.length<=0&&!a.f.a.e&&Pb(a,a.f.c)}
function vd(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw oi(new Si)}if(a.l==0&&a.m==0&&a.h==0){c&&(rd=ud(0,0,0));return ud(0,0,0)}if(b.h==cr&&b.m==0&&b.l==0){return wd(a,c)}i=false;if(b.h>>19!=0){b=Hd(b);i=true}g=Cd(b);f=false;e=false;d=false;if(a.h==cr&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=td((Td(),Pd));d=true;i=!i}else{h=Jd(a,g);i&&Ad(h);c&&(rd=ud(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=Hd(a);d=true;i=!i}if(g!=-1){return xd(a,g,i,f,c)}if(Fd(a,b)<0){c&&(f?(rd=Hd(a)):(rd=ud(a.l,a.m,a.h)));return ud(0,0,0)}return yd(d?a:ud(a.l,a.m,a.h),b,i,f,e,c)}
function Mo(a){var b;return a.t=false,$wnd.React.createElement('div',null,$wnd.React.createElement('div',null,$wnd.React.createElement(tr,om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[tr])),$wnd.React.createElement('h1',null,'todos'),qp(new rp)),U((Ep(),Bp).c)?null:$wnd.React.createElement('section',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[tr])),$wnd.React.createElement(qr,wm(zm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[ur])),(Ym(),Dm)),a.d)),$wnd.React.createElement.apply(null,['ul',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['todo-list']))].concat((b=tl(wl(U(Dp.c).db(),new xp),new hl(new kl,new jl,new gl)),dk(b,pd(b.a.length)))))),U(Bp.c)?null:Uo(new Vo)))}
function Vn(a){var b,c;c=(jb(a.c),null!=a.v.props[rr]?a.v.props[rr]:null);b=(jb(c.a),c.e);return $wnd.React.createElement('li',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[Wn(b,U(a.d))])),$wnd.React.createElement('div',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['view'])),$wnd.React.createElement(qr,wm(tm(zm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['toggle'])),(Ym(),Dm)),b),a.p)),$wnd.React.createElement('label',Bm(new $wnd.Object,a.n),(jb(c.b),c.g)),$wnd.React.createElement(jr,rm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['destroy'])),a.k))),$wnd.React.createElement(qr,xm(wm(vm(um(om(pm(new $wnd.Object,Ji(sp.prototype.J,sp,[a])),qd(kd(nf,1),Sq,2,6,['edit'])),(jb(a.a),a.r)),a.o),a.i),a.j)))}
function cn(a){var b;return a.t=false,b=U((Ep(),Dp).b),$wnd.React.createElement(kr,om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[kr])),Wo(new Xo),$wnd.React.createElement('ul',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['filters'])),$wnd.React.createElement('li',null,$wnd.React.createElement('a',qm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[(Hq(),Fq)==b?lr:''])),'#'),'All')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',qm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[Eq==b?lr:''])),'#active'),'Active')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',qm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[Gq==b?lr:''])),mr),'Completed'))),U(a.a)?$wnd.React.createElement(jr,rm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[nr])),a.e),or):null)}
function Ik(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[ir]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Gk()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[ir]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
var Qq='object',Rq='number',Sq={3:1,5:1},Tq={12:1},Uq={22:1},Vq={8:1},Wq='hashchange',Xq={14:1},Yq='__noinit__',Zq='__java$exception',$q={3:1,13:1,6:1,4:1},_q='null',ar=4194303,br=1048575,cr=524288,dr=17592186044416,er=4194304,fr=-17592186044416,gr={24:1,47:1},hr={42:1},ir='delete',jr='button',kr='footer',lr='selected',mr='#completed',nr='clear-completed',or='Clear Completed',pr={12:1,21:1},qr='input',rr='todo',sr='completed',tr='header',ur='toggle-all',vr='active',wr='user.agent';var _,Ei,zi,mi=-1;Fi();Hi(1,null,{},n);_.w=yr;_.A=function(){return this.Bb};_.B=zr;_.C=function(){var a;return Xi(p(this))+'@'+(a=q(this)>>>0,a.toString(16))};_.equals=function(a){return this.w(a)};_.hashCode=function(){return this.B()};_.toString=function(){return this.C()};var Ud,Vd,Wd;Hi(63,1,{},Yi);_.T=function(a){var b;b=new Yi;b.e=4;a>1?(b.c=aj(this,a-1)):(b.c=this);return b};_.U=function(){Wi(this);return this.b};_.V=function(){return Xi(this)};_.W=function(){return Wi(this),this.i};_.X=function(){return (this.e&4)!=0};_.Y=function(){return (this.e&1)!=0};_.C=function(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(Wi(this),this.k)};_.e=0;_.g=0;var Vi=1;var kf=$i(1);var _e=$i(63);Hi(65,1,{65:1},G);_.a=1;_.c=true;_.d=0;var ee=$i(65);var H;Hi(168,1,{},R);_.b=0;_.c=false;_.d=0;var fe=$i(168);Hi(255,1,Tq);_.C=function(){var a;return Xi(this.Bb)+'@'+(a=q(this)>>>0,a.toString(16))};var ke=$i(255);Hi(139,255,Tq,W);_.D=function(){T(this)};_.F=Ar;_.a=false;_.e=false;var ie=$i(139);Hi(140,1,Uq,X);_.G=function(){S(this.a)};var ge=$i(140);Hi(141,1,{238:1},Y);_.H=function(a){V(this.a,a)};var he=$i(141);var ab;Hi(144,1,{263:1},cb);_.I=xr;var je=$i(144);Hi(11,255,{12:1,11:1},lb);_.D=function(){eb(this)};_.F=function(){return -2==this.e};_.a=1;_.d=false;_.e=0;var me=$i(11);Hi(138,1,Vq,mb);_.G=function(){fb(this.a)};var le=$i(138);Hi(23,255,{12:1,23:1},xb);_.D=function(){nb(this)};_.F=Kr;_.d=false;_.e=false;_.f=false;_.o=false;_.p=0;var pe=$i(23);Hi(142,1,Vq,yb);_.G=function(){rb(this.a)};var ne=$i(142);Hi(66,1,{},zb);_.J=function(a){pb(this.a,a)};var oe=$i(66);Hi(145,1,{},Db);_.a=0;_.b=100;_.d=0;var qe=$i(145);Hi(149,1,{238:1},Eb);_.H=function(a){r((I(),I(),H),this.a,a)};var re=$i(149);Hi(39,1,{238:1},Fb);_.H=function(a){this.a.G()};var se=$i(39);Hi(178,1,Tq,Hb);_.D=function(){Gb(this)};_.F=Br;_.b=false;var te=$i(178);Hi(167,1,{},Tb);_.C=function(){var a;return Wi(ue),ue.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.b=0;var Ib;var ue=$i(167);Hi(77,255,Tq,Xb);_.D=function(){Z(this.c)};_.F=function(){return $(this.c)};var ze=$i(77);Hi(224,1,{263:1},Yb);_.I=xr;var ve=$i(224);Hi(225,1,Uq,Zb);_.G=function(){Z(this.a.c)};var we=$i(225);Hi(226,1,Uq,$b);_.G=function(){Wb(this.a)};var xe=$i(226);Hi(227,1,Uq,_b);_.G=function(){Z(this.a.a)};var ye=$i(227);Hi(51,1,{51:1});_.e='';_.g='';_.i=true;_.j='';var Ge=$i(51);Hi(123,51,{12:1,51:1,21:1},nc);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new oc(this));this.d=-1}};_.w=yr;_.B=zr;_.F=Nr;_.L=Or;_.C=function(){var a;return Wi(Ee),Ee.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.d=0;var Ee=$i(123);Hi(124,1,Vq,oc);_.G=function(){hc(this.a)};var Ae=$i(124);Hi(125,1,Vq,pc);_.G=function(){ac(this.a,this.b)};var Be=$i(125);Hi(126,1,Vq,qc);_.G=function(){ic(this.a)};var Ce=$i(126);Hi(127,1,Vq,rc);_.G=function(){dc(this.a)};var De=$i(127);Hi(91,1,{},sc);_.handleEvent=function(a){bc(this.a,a)};var Fe=$i(91);Hi(128,1,{});var Ne=$i(128);Hi(96,1,{},uc);_.M=function(a){return !(!!a&&$(a.a))};var He=$i(96);Hi(97,1,{},vc);_.N=function(a){return a.a};var Ie=$i(97);Hi(92,1,Xq,wc);_.K=function(){return Ui(),$(this.a)?true:false};var Je=$i(92);Hi(93,1,Vq,xc);_.G=function(){Rp(this.a,this.b)};var Ke=$i(93);Hi(94,1,{},yc);_.J=function(a){Z(a)};var Le=$i(94);Hi(95,1,{},zc);_.O=function(){return 'Called destroy() passing an entity that was not in the container. Entity: '+this.a};var Me=$i(95);Hi(129,128,{});var Oe=$i(129);Hi(73,1,{12:1,73:1},Bc);_.D=function(){Ac(this)};_.F=function(){return $(this.a)};var Pe=$i(73);Hi(4,1,{3:1,4:1});_.P=function(a){return new Error(a)};_.Q=function(){return this.f};_.R=function(){var a,b,c;c=this.f==null?null:this.f.replace(new RegExp('\n','g'),' ');b=(a=Xi(this.Bb),c==null?a:a+': '+c);Dc(this,Fc(this.P(b)));gd(this)};_.C=function(){return Ec(this,this.Q())};_.e=Yq;_.g=true;var of=$i(4);Hi(13,4,{3:1,13:1,4:1});var cf=$i(13);Hi(6,13,$q);var lf=$i(6);Hi(64,6,$q);var gf=$i(64);Hi(85,64,$q);var Te=$i(85);Hi(43,85,{43:1,3:1,13:1,6:1,4:1},Lc);_.Q=function(){Kc(this);return this.c};_.S=function(){return ce(this.b)===ce(Ic)?null:this.b};var Ic;var Qe=$i(43);var Re=$i(0);Hi(241,1,{});var Se=$i(241);var Nc=0,Oc=0,Pc=-1;Hi(122,241,{},bd);var Zc;var Ue=$i(122);var ed;Hi(252,1,{});var We=$i(252);Hi(86,252,{},jd);var Ve=$i(86);var rd;var Pd,Qd,Rd,Sd;var Oi;Hi(83,1,{80:1});_.C=Ar;var Xe=$i(83);Hi(90,6,$q,Si);var Ye=$i(90);Hi(87,6,$q);var ef=$i(87);Hi(169,87,$q,Ti);var Ze=$i(169);Ud={3:1,81:1,29:1};var $e=$i(81);Hi(49,1,{3:1,49:1});var jf=$i(49);Vd={3:1,29:1,49:1};var af=$i(251);Hi(34,1,{3:1,29:1,34:1});_.w=yr;_.B=zr;_.C=function(){return this.a!=null?this.a:''+this.b};_.b=0;var bf=$i(34);Hi(9,6,$q,gj,hj);var df=$i(9);Hi(32,49,{3:1,29:1,32:1,49:1},ij);_.w=function(a){return Zd(a,32)&&a.a==this.a};_.B=Ar;_.C=function(){return ''+this.a};_.a=0;var ff=$i(32);var mj;Hi(309,1,{});Hi(88,64,$q,pj);_.P=function(a){return new TypeError(a)};var hf=$i(88);Wd={3:1,80:1,29:1,2:1};var nf=$i(2);Hi(84,83,{80:1},vj);var mf=$i(84);Hi(313,1,{});Hi(50,6,$q,wj,xj);var pf=$i(50);Hi(253,1,{24:1});_.Z=Fr;_.cb=Gr;_.db=Hr;_._=function(a){throw oi(new xj('Add not supported on this collection'))};_.ab=function(a){return yj(this,a)};_.C=function(){return Aj(this)};var qf=$i(253);Hi(256,1,{239:1});_.w=function(a){var b,c,d;if(a===this){return true}if(!Zd(a,45)){return false}d=a;if(this.a.b+this.b.b!=d.a.b+d.b.b){return false}for(c=new Rj((new Oj(d)).a);c.b;){b=Qj(c);if(!Bj(this,b)){return false}}return true};_.B=function(){return hk(new Oj(this))};_.C=function(){var a,b,c;c=new fl(', ','{','}');for(b=new Rj((new Oj(this)).a);b.b;){a=Qj(b);dl(c,Cj(this,a.ib())+'='+Cj(this,a.jb()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};var Df=$i(256);Hi(53,256,{239:1});var tf=$i(53);Hi(257,253,gr);_.cb=Ir;_.w=function(a){return Nj(this,a)};_.B=function(){return hk(this)};var Ef=$i(257);Hi(27,257,gr,Oj);_.ab=function(a){if(Zd(a,42)){return Bj(this.a,a)}return false};_.$=function(){return new Rj(this.a)};_.bb=Dr;var sf=$i(27);Hi(28,1,{},Rj);_.eb=Cr;_.gb=function(){return Qj(this)};_.fb=Br;_.b=false;var rf=$i(28);Hi(254,253,{24:1,261:1});_.cb=function(){return new cl(this,16)};_.hb=function(a,b){throw oi(new xj('Add not supported on this list'))};_._=function(a){this.hb(this.bb(),a);return true};_.w=function(a){var b,c,d,e,f;if(a===this){return true}if(!Zd(a,18)){return false}f=a;if(this.bb()!=f.a.length){return false}e=new fk(f);for(c=new fk(this);c.a<c.c.a.length;){b=(c.b=c.a++,c.c.a[c.b]);d=(e.b=e.a++,e.c.a[e.b]);if(!(ce(b)===ce(d)||b!=null&&o(b,d))){return false}}return true};_.B=function(){return ik(this)};_.$=function(){return new Sj(this)};var vf=$i(254);Hi(116,1,{},Sj);_.eb=Cr;_.fb=function(){return this.a<this.b.a.length};_.gb=function(){return $j(this.b,this.a++)};_.a=0;var uf=$i(116);Hi(68,257,gr,Tj);_.ab=Jr;_.$=function(){var a;return a=new Rj((new Oj(this.a)).a),new Uj(a)};_.bb=Dr;var xf=$i(68);Hi(54,1,{},Uj);_.eb=Cr;_.fb=Er;_.gb=function(){var a;return a=Qj(this.a),a.ib()};var wf=$i(54);Hi(69,253,{24:1},Vj);_.ab=function(a){return Fj(this.a,a)};_.$=function(){var a;a=new Rj((new Oj(this.a)).a);return new Wj(a)};_.bb=Dr;var zf=$i(69);Hi(148,1,{},Wj);_.eb=Cr;_.fb=Er;_.gb=function(){var a;a=Qj(this.a);return a.jb()};var yf=$i(148);Hi(146,1,hr);_.w=function(a){var b;if(!Zd(a,42)){return false}b=a;return rk(this.a,b.ib())&&rk(this.b,b.jb())};_.ib=Ar;_.jb=Br;_.B=function(){return Uk(this.a)^Uk(this.b)};_.kb=function(a){var b;b=this.b;this.b=a;return b};_.C=function(){return this.a+'='+this.b};var Af=$i(146);Hi(147,146,hr,Xj);var Bf=$i(147);Hi(258,1,hr);_.w=function(a){var b;if(!Zd(a,42)){return false}b=a;return rk(this.b.value[0],b.ib())&&rk(Qk(this),b.jb())};_.B=function(){return Uk(this.b.value[0])^Uk(Qk(this))};_.C=function(){return this.b.value[0]+'='+Qk(this)};var Cf=$i(258);Hi(18,254,{3:1,18:1,24:1,261:1},ek);_.hb=function(a,b){Ul(this.a,a,b)};_._=function(a){return Yj(this,a)};_.ab=function(a){return _j(this,a,0)!=-1};_.Z=function(a){Zj(this,a)};_.$=function(){return new fk(this)};_.bb=function(){return this.a.length};var Gf=$i(18);Hi(20,1,{},fk);_.eb=Cr;_.fb=function(){return this.a<this.c.a.length};_.gb=function(){return this.b=this.a++,this.c.a[this.b]};_.a=0;_.b=-1;var Ff=$i(20);Hi(150,1,{24:1});_.Z=Fr;_.cb=Gr;_.db=Hr;_._=function(a){throw oi(new wj)};_.$=function(){var a;return new kk((a=new Rj((new Oj((new Tj(this.a.a)).a)).a),new Uj(a)))};_.bb=function(){return Mj(this.a.a)};_.C=function(){return Aj(this.a)};var If=$i(150);Hi(152,1,{},kk);_.eb=Cr;_.fb=function(){return this.a.a.b};_.gb=function(){var a;return a=Qj(this.a.a),a.ib()};var Hf=$i(152);Hi(151,150,gr,lk);_.cb=Ir;_.w=function(a){return Nj(this.a,a)};_.B=function(){return hk(this.a)};var Jf=$i(151);Hi(58,1,{3:1,29:1,58:1},mk);_.w=function(a){return Zd(a,58)&&si(ti(this.a.getTime()),ti(a.a.getTime()))};_.B=function(){var a;a=ti(this.a.getTime());return wi(yi(a,ri(Kd(_d(a)?vi(a):a,32))))};_.C=function(){var a,b,c;c=-this.a.getTimezoneOffset();a=(c>=0?'+':'')+(c/60|0);b=nk($wnd.Math.abs(c)%60);return (qk(),ok)[this.a.getDay()]+' '+pk[this.a.getMonth()]+' '+nk(this.a.getDate())+' '+nk(this.a.getHours())+':'+nk(this.a.getMinutes())+':'+nk(this.a.getSeconds())+' GMT'+a+b+' '+this.a.getFullYear()};var Kf=$i(58);var ok,pk;Hi(45,53,{3:1,45:1,239:1},sk,tk);var Lf=$i(45);Hi(179,257,{3:1,24:1,47:1},uk);_._=function(a){var b;return b=Ij(this.a,a,this),b==null};_.ab=Jr;_.$=function(){var a;return a=new Rj((new Oj((new Tj(this.a)).a)).a),new Uj(a)};_.bb=Dr;var Mf=$i(179);Hi(57,1,{},Ak);_.Z=Fr;_.$=function(){return new Bk(this)};_.b=0;var Of=$i(57);Hi(72,1,{},Bk);_.eb=Cr;_.gb=function(){return this.d=this.a[this.c++],this.d};_.fb=function(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var Nf=$i(72);var Ek;Hi(56,1,{},Ok);_.Z=Fr;_.$=function(){return new Pk(this)};_.b=0;_.c=0;var Rf=$i(56);Hi(71,1,{},Pk);_.eb=Cr;_.gb=function(){return this.c=this.a,this.a=this.b.next(),new Rk(this.d,this.c,this.d.c)};_.fb=function(){return !this.a.done};var Pf=$i(71);Hi(166,258,hr,Rk);_.ib=function(){return this.b.value[0]};_.jb=function(){return Qk(this)};_.kb=function(a){return Mk(this.a,this.b.value[0],a)};_.c=0;var Qf=$i(166);Hi(154,1,{});_.eb=Lr;_.lb=Kr;_.mb=function(){return this.e};_.d=0;_.e=0;var Vf=$i(154);Hi(55,154,{});var Sf=$i(55);Hi(117,1,{});_.eb=Lr;_.lb=Br;_.mb=function(){return this.d-this.c};_.b=0;_.c=0;_.d=0;var Uf=$i(117);Hi(118,117,{},al);_.eb=function(a){Zk(this,a)};_.nb=function(a){return $k(this,a)};var Tf=$i(118);Hi(17,1,{},cl);_.lb=Ar;_.mb=function(){bl(this);return this.c};_.eb=function(a){bl(this);this.d.eb(a)};_.nb=function(a){bl(this);if(this.d.fb()){a.J(this.d.gb());return true}return false};_.a=0;_.c=0;var Wf=$i(17);Hi(44,1,{44:1},fl);_.C=function(){return el(this)};var Xf=$i(44);Hi(33,1,{},gl);_.N=function(a){return a};var Yf=$i(33);Hi(30,1,{},hl);var Zf=$i(30);Hi(121,1,{},il);_.N=function(a){return el(a)};var $f=$i(121);Hi(35,1,{},jl);_.ob=function(a,b){a._(b)};var _f=$i(35);Hi(36,1,{},kl);_.O=function(){return new ek};var ag=$i(36);Hi(120,1,{},ll);_.ob=function(a,b){dl(a,b)};var bg=$i(120);Hi(119,1,{},ml);_.O=function(){return new fl(this.a,this.b,this.c)};var cg=$i(119);Hi(153,1,{});_.c=false;var pg=$i(153);Hi(19,153,{},Al);var ql;var og=$i(19);Hi(163,55,{},Dl);_.nb=function(a){return this.a.a.nb(new Fl(a))};var eg=$i(163);Hi(164,1,{},Fl);_.J=function(a){El(this.a,a)};var dg=$i(164);Hi(70,55,{},Hl);_.nb=function(a){this.b=false;while(!this.b&&this.c.nb(new Il(this,a)));return this.b};_.b=false;var gg=$i(70);Hi(158,1,{},Il);_.J=function(a){Gl(this.a,this.b,a)};var fg=$i(158);Hi(155,55,{},Kl);_.nb=function(a){return this.b.nb(new Ll(this,a))};var ig=$i(155);Hi(157,1,{},Ll);_.J=function(a){Jl(this.a,this.b,a)};var hg=$i(157);Hi(156,1,{},Nl);_.J=function(a){Ml(this,a)};var jg=$i(156);Hi(159,1,{},Ol);_.J=Mr;var kg=$i(159);Hi(160,1,{},Pl);_.J=Mr;var lg=$i(160);Hi(161,1,{},Rl);var mg=$i(161);Hi(162,1,{},Tl);_.J=function(a){Sl(this,a)};var ng=$i(162);Hi(311,1,{});Hi(260,1,{});var qg=$i(260);Hi(308,1,{});var Zl=0;var _l,am=0,bm;Hi(773,1,{});Hi(259,1,{});_.pb=Pr;var sg=$i(259);Hi(38,259,{});_.rb=function(a,b){};_.ub=function(){return this.t=false,this.qb()};_.t=false;_.u=false;var hm=1;var rg=$i(38);Hi(37,$wnd.React.Component,{});Gi(Ei[1],_);_.render=function(){return jm(this.a)};var tg=$i(37);Hi(10,34,{3:1,29:1,34:1,10:1},Zm);var Cm,Dm,Em,Fm,Gm,Hm,Im,Jm,Km,Lm,Mm,Nm,Om,Pm,Qm,Rm,Sm,Tm,Um,Vm,Wm,Xm;var ug=_i(10,$m);Hi(193,38,{});_.qb=function(){var a;return a=U((Ep(),Dp).b),$wnd.React.createElement(kr,om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[kr])),Wo(new Xo),$wnd.React.createElement('ul',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['filters'])),$wnd.React.createElement('li',null,$wnd.React.createElement('a',qm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[(Hq(),Fq)==a?lr:''])),'#'),'All')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',qm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[Eq==a?lr:''])),'#active'),'Active')),$wnd.React.createElement('li',null,$wnd.React.createElement('a',qm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[Gq==a?lr:''])),mr),'Completed'))),U(this.a)?$wnd.React.createElement(jr,rm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[nr])),this.e),or):null)};var ph=$i(193);Hi(194,193,{});_.tb=Qr;var _m;var th=$i(194);Hi(195,194,pr,fn);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new mn(this));this.d=-1}};_.w=yr;_.sb=Rr;_.B=zr;_.F=Nr;_.L=Or;_.tb=function(b){var c;try{v((I(),I(),H),new hn)}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}};_.C=function(){var a;return Wi(Gg),Gg.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.b,new kn(this))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){b=a;throw oi(b)}else if(Zd(a,4)){b=a;throw oi(new hj(b))}else throw oi(a)}};_.d=0;var Gg=$i(195);Hi(196,1,Xq,gn);_.K=function(){return Ui(),U((Ep(),Bp).b).a>0?true:false};var vg=$i(196);Hi(199,1,Vq,hn);_.G=Pr;var wg=$i(199);Hi(200,1,Vq,jn);_.G=function(){eq((Ep(),Cp))};var xg=$i(200);Hi(201,1,Xq,kn);_.K=function(){return cn(this.a)};var yg=$i(201);Hi(197,1,Uq,ln);_.G=function(){dn(this.a)};var zg=$i(197);Hi(198,1,Vq,mn);_.G=function(){en(this.a)};var Ag=$i(198);Hi(230,38,{});_.qb=function(){return nn()};var oh=$i(230);Hi(231,230,{});_.tb=Qr;var on;var sh=$i(231);Hi(232,231,pr,sn);_.D=function(){if(this.c>=0){this.c=-2;v((I(),I(),H),new vn(this));this.c=-1}};_.w=yr;_.sb=Rr;_.B=zr;_.F=Sr;_.L=Tr;_.tb=function(b){var c;try{v((I(),I(),H),new wn)}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}};_.C=function(){var a;return Wi(Fg),Fg.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.a,new un(this))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){b=a;throw oi(b)}else if(Zd(a,4)){b=a;throw oi(new hj(b))}else throw oi(a)}};_.c=0;var Fg=$i(232);Hi(233,1,Uq,tn);_.G=function(){dn(this.a)};var Bg=$i(233);Hi(236,1,Xq,un);_.K=function(){return this.a.t=false,nn()};var Cg=$i(236);Hi(234,1,Vq,vn);_.G=function(){rn(this.a)};var Dg=$i(234);Hi(235,1,Vq,wn);_.G=Pr;var Eg=$i(235);Hi(184,38,{});_.qb=function(){return $wnd.React.createElement(qr,sm(wm(xm(Am(ym(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['new-todo']))),(jb(this.b),this.g)),this.f),this.e)))};_.g='';var Bh=$i(184);Hi(185,184,{});_.tb=Qr;var zn;var vh=$i(185);Hi(186,185,pr,Hn);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new Nn(this));this.d=-1}};_.w=yr;_.sb=Rr;_.B=zr;_.F=Nr;_.L=Or;_.tb=function(b){var c;try{v((I(),I(),H),new In)}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}};_.C=function(){var a;return Wi(Ng),Ng.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.a,new Ln(this))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){b=a;throw oi(b)}else if(Zd(a,4)){b=a;throw oi(new hj(b))}else throw oi(a)}};_.d=0;var Ng=$i(186);Hi(189,1,Vq,In);_.G=Pr;var Hg=$i(189);Hi(190,1,Vq,Jn);_.G=function(){yn(this.a,this.b)};var Ig=$i(190);Hi(191,1,Vq,Kn);_.G=function(){xn(this.a,this.b)};var Jg=$i(191);Hi(192,1,Xq,Ln);_.K=function(){return Dn(this.a)};var Kg=$i(192);Hi(187,1,Uq,Mn);_.G=function(){dn(this.a)};var Lg=$i(187);Hi(188,1,Vq,Nn);_.G=function(){Fn(this.a)};var Mg=$i(188);Hi(203,38,{});_.rb=function(a,b){On(this)};_.pb=function(){no(this)};_.qb=function(){return Vn(this)};_.s=false;var Dh=$i(203);Hi(204,203,{});_.tb=function(a){this.v.props[rr]===(null==a?null:a[rr])||ib(this.c)};var Xn;var xh=$i(204);Hi(205,204,pr,po);_.rb=function(b,c){var d;try{v((I(),I(),H),new uo(this,b,c))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){d=a;throw oi(d)}else if(Zd(a,4)){d=a;throw oi(new hj(d))}else throw oi(a)}};_.D=function(){Zn(this)};_.w=yr;_.sb=Rr;_.B=zr;_.F=Xr;_.L=Yr;_.tb=function(b){var c;try{v((I(),I(),H),new vo(this,b))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}};_.C=function(){var a;return Wi(fh),fh.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.b,new Fo(this))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){b=a;throw oi(b)}else if(Zd(a,4)){b=a;throw oi(new hj(b))}else throw oi(a)}};_.g=0;var fh=$i(205);Hi(208,1,{},qo);_.N=function(a){return a.K()};var Og=$i(208);Hi(209,1,{},ro);_.M=function(a){return Zd(a,12)&&a.F()};var Pg=$i(209);Hi(212,1,Xq,so);_.K=function(){return $n(this.a)};var Qg=$i(212);Hi(213,1,Vq,to);_.G=function(){bo(this.a)};var Rg=$i(213);Hi(214,1,Vq,uo);_.G=function(){On(this.a)};var Sg=$i(214);Hi(215,1,Vq,vo);_.G=function(){co(this.a,this.b)};var Tg=$i(215);Hi(216,1,Vq,wo);_.G=function(){eo(this.a)};var Ug=$i(216);Hi(217,1,Vq,xo);_.G=function(){Qn(this.a,this.b)};var Vg=$i(217);Hi(218,1,Vq,yo);_.G=function(){Un(this.a)};var Wg=$i(218);Hi(219,1,Vq,zo);_.G=function(){Lp($n(this.a))};var Xg=$i(219);Hi(206,1,Xq,Ao);_.K=function(){return fo(this.a)};var Yg=$i(206);Hi(220,1,Vq,Bo);_.G=function(){Tn(this.a)};var Zg=$i(220);Hi(221,1,Vq,Co);_.G=function(){Sn(this.a)};var $g=$i(221);Hi(222,1,Vq,Do);_.G=function(){Pn(this.a,this.b)};var _g=$i(222);Hi(207,1,Uq,Eo);_.G=function(){dn(this.a)};var ah=$i(207);Hi(223,1,Xq,Fo);_.K=function(){return ho(this.a)};var bh=$i(223);Hi(210,1,Xq,Go);_.K=function(){return io(this.a)};var dh=$i(210);Hi(211,1,Vq,Ho);_.G=function(){Zn(this.a)};var eh=$i(211);Hi(170,38,{});_.qb=function(){var a;return $wnd.React.createElement('div',null,$wnd.React.createElement('div',null,$wnd.React.createElement(tr,om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[tr])),$wnd.React.createElement('h1',null,'todos'),qp(new rp)),U((Ep(),Bp).c)?null:$wnd.React.createElement('section',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[tr])),$wnd.React.createElement(qr,wm(zm(om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,[ur])),(Ym(),Dm)),this.d)),$wnd.React.createElement.apply(null,['ul',om(new $wnd.Object,qd(kd(nf,1),Sq,2,6,['todo-list']))].concat((a=tl(wl(U(Dp.c).db(),new xp),new hl(new kl,new jl,new gl)),dk(a,pd(a.a.length)))))),U(Bp.c)?null:Uo(new Vo)))};var Gh=$i(170);Hi(171,170,{});_.tb=Qr;var Io;var zh=$i(171);Hi(172,171,pr,Oo);_.D=function(){if(this.c>=0){this.c=-2;v((I(),I(),H),new So(this));this.c=-1}};_.w=yr;_.sb=Rr;_.B=zr;_.F=Sr;_.L=Tr;_.tb=function(b){var c;try{v((I(),I(),H),new To)}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){c=a;throw oi(c)}else if(Zd(a,4)){c=a;throw oi(new hj(c))}else throw oi(a)}};_.C=function(){var a;return Wi(lh),lh.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.ub=function(){var b;try{return C((I(),I(),H),this.a,new Ro(this))}catch(a){a=ni(a);if(Zd(a,6)||Zd(a,7)){b=a;throw oi(b)}else if(Zd(a,4)){b=a;throw oi(new hj(b))}else throw oi(a)}};_.c=0;var lh=$i(172);Hi(173,1,Uq,Po);_.G=function(){dn(this.a)};var gh=$i(173);Hi(176,1,Vq,Qo);_.G=function(){var a;a=this.a.target;jq((Ep(),Cp),a.checked)};var hh=$i(176);Hi(177,1,Xq,Ro);_.K=function(){return Mo(this.a)};var ih=$i(177);Hi(174,1,Vq,So);_.G=function(){rn(this.a)};var jh=$i(174);Hi(175,1,Vq,To);_.G=Pr;var kh=$i(175);Hi(75,1,{},Vo);var mh=$i(75);Hi(76,1,{},Xo);var nh=$i(76);Hi(282,$wnd.Function,{},Yo);_.vb=function(a){return new Zo(a)};Hi(181,37,{},Zo);_.wb=function(){return new fn};_.componentDidMount=Pr;_.componentDidUpdate=Ur;_.componentWillUnmount=Vr;_.shouldComponentUpdate=Wr;var qh=$i(181);Hi(283,$wnd.Function,{},$o);_.Ab=function(a){bn()};Hi(293,$wnd.Function,{},_o);_.vb=function(a){return new ap(a)};Hi(202,37,{},ap);_.wb=function(){return new sn};_.componentDidMount=Pr;_.componentDidUpdate=Ur;_.componentWillUnmount=Vr;_.shouldComponentUpdate=Wr;var rh=$i(202);Hi(279,$wnd.Function,{},bp);_.vb=function(a){return new cp(a)};Hi(180,37,{},cp);_.wb=function(){return new Hn};_.componentDidMount=Pr;_.componentDidUpdate=Ur;_.componentWillUnmount=Vr;_.shouldComponentUpdate=Wr;var uh=$i(180);Hi(280,$wnd.Function,{},dp);_.zb=function(a){Cn(this.a,a)};Hi(281,$wnd.Function,{},ep);_.yb=function(a){Bn(this.a,a)};Hi(284,$wnd.Function,{},fp);_.vb=function(a){return new gp(a)};Hi(183,37,{},gp);_.wb=function(){return new po};_.componentDidMount=Pr;_.componentDidUpdate=Ur;_.componentWillUnmount=Vr;_.shouldComponentUpdate=Wr;var wh=$i(183);Hi(285,$wnd.Function,{},hp);_.zb=function(a){ao(this.a,a)};Hi(286,$wnd.Function,{},ip);_.xb=function(a){lo(this.a)};Hi(287,$wnd.Function,{},jp);_.yb=function(a){mo(this.a)};Hi(288,$wnd.Function,{},kp);_.Ab=function(a){ko(this.a)};Hi(289,$wnd.Function,{},lp);_.Ab=function(a){jo(this.a)};Hi(290,$wnd.Function,{},mp);_.yb=function(a){_n(this.a,a)};Hi(277,$wnd.Function,{},np);_.vb=function(a){return new op(a)};Hi(143,37,{},op);_.wb=function(){return new Oo};_.componentDidMount=Pr;_.componentDidUpdate=Ur;_.componentWillUnmount=Vr;_.shouldComponentUpdate=Wr;var yh=$i(143);Hi(278,$wnd.Function,{},pp);_.yb=function(a){Ko(a)};Hi(74,1,{},rp);var Ah=$i(74);Hi(292,$wnd.Function,{},sp);_.J=function(a){Rn(this.a,a)};Hi(182,1,{},wp);var Ch=$i(182);Hi(67,1,{},xp);_.N=function(a){return vp(tp(a.f),a)};var Eh=$i(67);Hi(79,1,{},zp);var Fh=$i(79);var Ap,Bp,Cp,Dp;Hi(59,1,{59:1});_.e=false;var ji=$i(59);Hi(60,59,{12:1,21:1,60:1,59:1},Mp);_.D=function(){if(this.d>=0){this.d=-2;v((I(),I(),H),new Op(this));this.d=-1}};_.w=function(a){var b;if(this===a){return true}else if(null==a||!Zd(a,60)){return false}else{b=a;return null!=this.f&&rj(this.f,b.f)}};_.B=function(){return null!=this.f?em(this.f):Xl(this)};_.F=Nr;_.L=Or;_.C=function(){var a;return Wi(Xh),Xh.k+'@'+(a=(null!=this.f?em(this.f):Xl(this))>>>0,a.toString(16))};_.d=0;var Xh=$i(60);Hi(229,1,Vq,Np);_.G=function(){Hp(this.a)};var Hh=$i(229);Hi(228,1,Vq,Op);_.G=function(){Ip(this.a)};var Ih=$i(228);Hi(52,129,{52:1});var ei=$i(52);Hi(130,52,{12:1,21:1,52:1},Wp);_.D=function(){if(this.g>=0){this.g=-2;v((I(),I(),H),new Xp(this));this.g=-1}};_.w=yr;_.B=zr;_.F=Xr;_.L=Yr;_.C=function(){var a;return Wi(Qh),Qh.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.g=0;var Qh=$i(130);Hi(135,1,Vq,Xp);_.G=function(){Tp(this.a)};var Jh=$i(135);Hi(136,1,Vq,Yp);_.G=function(){tc(this.a,this.b)};var Kh=$i(136);Hi(131,1,Xq,Zp);_.K=function(){return Up(this.a)};var Lh=$i(131);Hi(137,1,Xq,$p);_.K=function(){return Pp(this.a,this.c,this.d,this.b)};_.b=false;var Mh=$i(137);Hi(132,1,Xq,_p);_.K=function(){return lj(wi(ul(Sp(this.a))))};var Nh=$i(132);Hi(133,1,Xq,aq);_.K=function(){return lj(wi(ul(vl(Sp(this.a),new Kq))))};var Oh=$i(133);Hi(134,1,Xq,bq);_.K=function(){return Vp(this.a)};var Ph=$i(134);Hi(102,1,{});var ii=$i(102);Hi(103,102,pr,kq);_.D=function(){if(this.b>=0){this.b=-2;v((I(),I(),H),new oq(this));this.b=-1}};_.w=yr;_.B=zr;_.F=function(){return this.b<0};_.L=function(){var a;return a=this.b<0,a||jb(this.a),!a};_.C=function(){var a;return Wi(Wh),Wh.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.b=0;var Wh=$i(103);Hi(106,1,Vq,lq);_.G=function(){fq(this.a,this.b)};_.b=false;var Rh=$i(106);Hi(107,1,Vq,mq);_.G=function(){lc(this.b,this.a)};var Sh=$i(107);Hi(108,1,Vq,nq);_.G=function(){gq(this.a)};var Th=$i(108);Hi(104,1,Vq,oq);_.G=function(){eb(this.a.a)};var Uh=$i(104);Hi(105,1,Vq,pq);_.G=function(){hq(this.a,this.b)};var Vh=$i(105);Hi(109,1,{});var li=$i(109);Hi(110,109,pr,yq);_.D=function(){if(this.g>=0){this.g=-2;v((I(),I(),H),new zq(this));this.g=-1}};_.w=yr;_.B=zr;_.F=Xr;_.L=Yr;_.C=function(){var a;return Wi(bi),bi.k+'@'+(a=$l(this)>>>0,a.toString(16))};_.g=0;var bi=$i(110);Hi(115,1,Vq,zq);_.G=function(){tq(this.a)};var Yh=$i(115);Hi(111,1,Xq,Aq);_.K=function(){var a;return a=gc(this.a.i),rj(vr,a)||rj(sr,a)||rj('',a)?rj(vr,a)?(Hq(),Eq):rj(sr,a)?(Hq(),Gq):(Hq(),Fq):(Hq(),Fq)};var Zh=$i(111);Hi(112,1,Xq,Bq);_.K=function(){return uq(this.a)};var $h=$i(112);Hi(113,1,Uq,Cq);_.G=function(){vq(this.a)};var _h=$i(113);Hi(114,1,Uq,Dq);_.G=function(){wq(this.a)};var ai=$i(114);Hi(40,34,{3:1,29:1,34:1,40:1},Iq);var Eq,Fq,Gq;var ci=_i(40,Jq);Hi(98,1,{},Kq);_.M=function(a){return !fc(a)};var di=$i(98);Hi(100,1,{},Lq);_.M=function(a){return fc(a)};var fi=$i(100);Hi(101,1,{},Mq);_.J=function(a){Rp(this.a,a)};var gi=$i(101);Hi(99,1,{},Nq);_.J=function(a){cq(this.a,a)};_.a=false;var hi=$i(99);Hi(89,1,{},Oq);_.M=function(a){return rq(this.a,a)};var ki=$i(89);var Pq=(Qc(),Tc);var gwtOnLoad=gwtOnLoad=Ci;Ai(Ni);Di('permProps',[[[wr,'gecko1_8']],[[wr,'ie10']],[[wr,'ie8']],[[wr,'ie9']],[[wr,'safari']]]);if (todomvc) todomvc.onScriptLoad(gwtOnLoad);})();