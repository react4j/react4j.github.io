function todomvc_dev(){var O='bootstrap',P='begin',Q='gwt.codesvr.todomvc_dev=',R='gwt.codesvr=',S='todomvc_dev',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='position:absolute; width:0; height:0; border:none; left: -1000px;',Z=' top: -1000px;',$='CSS1Compat',_='<!doctype html>',ab='',bb='<html><head><\/head><body><\/body><\/html>',cb='undefined',db='readystatechange',eb=10,fb='Chrome',gb='eval("',hb='");',ib='script',jb='javascript',kb='moduleStartup',lb='moduleRequested',mb='Failed to load ',nb='head',ob='meta',pb='name',qb='todomvc_dev::',rb='::',sb='gwt:property',tb='content',ub='=',vb='gwt:onPropertyErrorFn',wb='Bad handler "',xb='" for "gwt:onPropertyErrorFn"',yb='gwt:onLoadErrorFn',zb='" for "gwt:onLoadErrorFn"',Ab='#',Bb='?',Cb='/',Db='img',Eb='clear.cache.gif',Fb='baseUrl',Gb='todomvc_dev.nocache.js',Hb='base',Ib='//',Jb='selectingPermutation',Kb='todomvc_dev.devmode.js',Lb='6E20E3E2687BBD5D426EDAF1B3956BAF',Mb=':',Nb='.cache.js',Ob='loadExternalRefs',Pb='end',Qb='http:',Rb='file:',Sb='_gwt_dummy_',Tb='__gwtDevModeHook:todomvc_dev',Ub='Ignoring non-whitelisted Dev Mode URL: ',Vb=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
todomvc_dev.__sendStats=r;todomvc_dev.__moduleName=S;todomvc_dev.__errFn=null;todomvc_dev.__moduleBase=U;todomvc_dev.__softPermutationId=V;todomvc_dev.__computePropValue=null;todomvc_dev.__getPropMap=null;todomvc_dev.__installRunAsyncCode=function(){};todomvc_dev.__gwtStartLoadingFragment=function(){return null};todomvc_dev.__gwt_isKnownPropertyValue=function(){return false};todomvc_dev.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};todomvc_dev.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[todomvc_dev.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.id=S;a.style.cssText=Y+Z;a.tabIndex=-1;p.body.appendChild(a);u=a.contentWindow.document;u.open();var b=document.compatMode==$?_:ab;u.write(b+bb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==cb){return typeof p.body!=cb&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(db,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(db,d,false)}var e=setInterval(function(){d()},eb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(fb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(gb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(hb));g=e.createElement(ib);g.language=jb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(ib);g.language=jb;g.text=c[i];f.appendChild(g);d(f,g)}}}
todomvc_dev.onScriptDownloaded=function(a){l(function(){m(a)})};r(kb,lb);var n=p.createElement(ib);n.src=k;if(todomvc_dev.__errFn){n.onerror=function(){todomvc_dev.__errFn(S,new Error(mb+code))}}p.getElementsByTagName(nb)[V].appendChild(n)}
todomvc_dev.__startLoadingFragment=function(a){return D(a)};todomvc_dev.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(ib);d.language=jb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(ob);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(pb),k;if(j){j=j.replace(qb,ab);if(j.indexOf(rb)>=V){continue}if(j==sb){k=i.getAttribute(tb);if(k){var l,m=k.indexOf(ub);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=ab}c[j]=l}}else if(j==vb){k=i.getAttribute(tb);if(k){try{d=eval(k)}catch(a){alert(wb+k+xb)}}}else if(j==yb){k=i.getAttribute(tb);if(k){try{e=eval(k)}catch(a){alert(wb+k+zb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;todomvc_dev.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Ab);if(b==-1){b=a.length}var c=a.indexOf(Bb);if(c==-1){c=a.length}var d=a.lastIndexOf(Cb,Math.min(c,b));return d>=V?a.substring(V,d+W):ab}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Db);b.src=a+Eb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Fb);if(a!=null){return a}return ab}
function h(){var a=p.getElementsByTagName(ib);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Gb)!=-1){return e(a[b].src)}}return ab}
function i(){var a=p.getElementsByTagName(Hb);if(a.length>V){return a[a.length-W].href}return ab}
function j(){var a=p.location;return a.href==a.protocol+Ib+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==ab){k=h()}if(k==ab){k=i()}if(k==ab&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return todomvc_dev.__moduleBase+a}
function F(){var f=[];var g=V;var h=[];var i=[];function j(a){var b=i[a](),c=h[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
__gwt_isKnownPropertyValue=function(a,b){return b in h[a]};todomvc_dev.__getPropMap=function(){var a={};for(var b in h){if(h.hasOwnProperty(b)){a[b]=j(b)}}return a};todomvc_dev.__computePropValue=j;o.__gwt_activeModules[S].bindings=todomvc_dev.__getPropMap;r(O,Jb);if(q()){return D(Kb)}var k;try{k=Lb;var l=k.indexOf(Mb);if(l!=-1){g=parseInt(k.substring(l+W),eb);k=k.substring(V,l)}}catch(a){}todomvc_dev.__softPermutationId=g;return D(k+Nb)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Ob,P);r(Ob,Pb)}
B();todomvc_dev.__moduleBase=C();t[S].moduleBase=todomvc_dev.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Qb||o.location.protocol==Rb);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=Sb;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=Tb;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(Ub+L)}L=ab}if(L&&!o[K]){o[K]=true;o[K+Vb]=C();var M=p.createElement(ib);M.src=L;var N=p.getElementsByTagName(nb)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Pb);A(H);return true}
todomvc_dev.succeeded=todomvc_dev();