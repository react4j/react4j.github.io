hello_world.onScriptDownloaded(["var $wnd = $wnd || window.parent;var __gwtModuleFunction = $wnd.hello_world;var $sendStats = __gwtModuleFunction.__sendStats;$sendStats('moduleStartup', 'moduleEvalStart');var $gwt_version = \"2.8.2\";var $strongName = 'D4AB5C308616F451B640799A1086CABA';var $gwt = {};var $doc = $wnd.document;var $moduleName, $moduleBase;function __gwtStartLoadingFragment(frag) {var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';return __gwtModuleFunction.__startLoadingFragment(fragFile);}function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}function __gwt_isKnownPropertyValue(propName, propValue) {return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);}function __gwt_getMetaProperty(name) {return __gwtModuleFunction.__gwt_getMetaProperty(name);}var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;function k(){}\nfunction Q(){}\nfunction Y(){}\nfunction Vb(){}\nfunction Sb(){}\nfunction ab(){}\nfunction Zb(){Zb=Sb}\nfunction Jb(a){return a.b}\nfunction bb(a,b){return fc(a,b)}\nfunction ac(a){_b(a);return a.i}\nfunction V(a){U();T.n(a)}\nfunction s(){s=Sb;r=new k}\nfunction N(){N=Sb;M=new Q}\nfunction C(){C=Sb;!!(U(),T)}\nfunction L(){w!=0&&(w=0);B=-1}\nfunction Mb(){Kb==null&&(Kb=[])}\nfunction mb(a){return a==null?null:a}\nfunction ib(a,b){return a!=null&&gb(a,b)}\nfunction oc(a,b){return a.charCodeAt(b)}\nfunction rc(a){return a.$H||(a.$H=++qc)}\nfunction kb(a){return typeof a==='number'}\nfunction lb(a){return typeof a==='string'}\nfunction jb(a){return typeof a==='boolean'}\nfunction K(a){$wnd.clearTimeout(a)}\nfunction _b(a){if(a.i!=null){return}jc(a)}\nfunction o(a,b){a.b=b;b!=null&&pc(b,Cc,a)}\nfunction vc(){vc=Sb;sc=new k;uc=new k}\nfunction Yb(){Yb=Sb;Xb=$wnd.window.document}\nfunction n(a){a.d&&a.b!==Bc&&a.l();return a}\nfunction R(a,b){!a&&(a=[]);a[a.length]=b;return a}\nfunction D(a,b,c){return a.apply(b,c);var d}\nfunction pc(b,c,d){try{b[c]=d}catch(a){}}\nfunction yc(){if(tc==256){sc=uc;uc=new k;tc=0}++tc}\nfunction U(){U=Sb;var a,b;b=!X();a=new ab;T=b?new Y:a}\nfunction cb(a){return Array.isArray(a)&&a.w===Vb}\nfunction hb(a){return !Array.isArray(a)&&a.w===Vb}\nfunction hc(a){if(a.t()){return null}var b=a.h;return Pb[b]}\nfunction Tb(a){function b(){}\n;b.prototype=a||{};return new b}\nfunction p(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}\nfunction J(a){C();$wnd.setTimeout(function(){throw a},0)}\nfunction I(a){a&&P((N(),M));--w;if(a){if(B!=-1){K(B);B=-1}}}\nfunction H(a,b,c){var d;d=F();try{return D(a,b,c)}finally{I(d)}}\nfunction fc(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.o(b))}\nfunction dc(a,b,c){var d,e;d=(e=new bc,e.f=a,e.d=b,e);nc(c,d);return d}\nfunction nc(a,b){var c;if(!a){return}b.h=a;var d=hc(b);if(!d){Pb[a]=[b];return}d.u=b}\nfunction Ib(a){var b;if(ib(a,4)){return a}b=a&&a[Cc];if(!b){b=new t(a);V(b)}return b}\nfunction v(){if(Date.now){return Date.now()}return (new Date).getTime()}\nfunction G(b){C();return function(){return H(b,this,arguments);var a}}\nfunction nb(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}\nfunction O(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=S(b,c)}while(a.a);a.a=c}}\nfunction P(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=S(b,c)}while(a.b);a.b=c}}\nfunction Lb(){Mb();var a=Kb;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}\nfunction t(a){s();n(this);this.b=a;a!=null&&pc(a,Cc,this);this.c=a==null?'null':Ub(a);this.a=a}\nfunction bc(){++$b;this.i=null;this.g=null;this.f=null;this.d=null;this.b=null;this.h=null;this.a=null}\nfunction W(a){var b=/function(?:\\s+([\\w$]+))?\\s*\\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}\nfunction Ob(a,b){typeof window==='object'&&typeof window['$gwt']==='object'&&(window['$gwt'][a]=b)}\nfunction Wb(){$wnd.ReactDOM.render($wnd.React.createElement('h1',null,'Hello World'),(Yb(),Xb).getElementById('app'),null)}\nfunction F(){var a;if(w!=0){a=v();if(a-A>2000){A=a;B=$wnd.setTimeout(L,10)}}if(w++==0){O((N(),M));return true}return false}\nfunction xc(a){vc();var b,c,d;c=':'+a;d=uc[c];if(d!=null){return nb(d)}d=sc[c];b=d==null?wc(a):nb(d);yc();uc[c]=b;return b}\nfunction mc(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}\nfunction X(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}\nfunction gb(a,b){if(lb(a)){return !!fb[b]}else if(a.v){return !!a.v[b]}else if(kb(a)){return !!eb[b]}else if(jb(a)){return !!db[b]}return false}\nfunction Nb(b,c,d,e){Mb();var f=Kb;$moduleName=c;$moduleBase=d;Hb=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}\nif(b){try{zc(g)()}catch(a){b(c,a)}}else{zc(g)()}}\nfunction S(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].A()&&(c=R(c,g)):g[0].A()}catch(a){a=Ib(a);if(ib(a,4)){d=a;C();J(ib(d,10)?d.m():d)}else throw Jb(a)}}return c}\nfunction Qb(){Pb={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}\n!Date.now&&(Date.now=b)}\nfunction wc(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+oc(a,c++)}b=b|0;return b}\nfunction Rb(a,b,c){var d=Pb,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Pb[b]),Tb(h));_.v=c;!b&&(_.w=Vb);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.u=f)}\nfunction jc(a){if(a.s()){var b=a.c;b.t()?(a.i='['+b.h):!b.s()?(a.i='[L'+b.q()+';'):(a.i='['+b.q());a.b=b.p()+'[]';a.g=b.r()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.i=mc('.',[c,mc('$',d)]);a.b=mc('.',[c,mc('.',d)]);a.g=d[d.length-1]}\nfunction Ub(a){var b;if(Array.isArray(a)&&a.w===Vb){return ac(lb(a)?Fb:kb(a)?zb:jb(a)?xb:hb(a)?a.u:cb(a)?a.u:a.u||Array.isArray(a)&&bb(pb,1)||pb)+'@'+(b=(lb(a)?xc(a):kb(a)?nb(a):jb(a)?a?1231:1237:hb(a)?a.k():cb(a)?rc(a):!!a&&!!a.hashCode?a.hashCode():rc(a))>>>0,b.toString(16))}return a.toString()}\nvar Ac='java.lang',Bc='__noinit__',Cc='__java$exception',Dc={3:1,4:1},Ec='com.google.gwt.core.client.impl',Fc='com.google.gwt.core.client';var _,Pb,Kb,Hb=-1;Qb();Rb(1,null,{},k);_.j=function l(){return this.u};_.k=function m(){return rc(this)};_.hashCode=function(){return this.k()};Rb(14,1,{},bc);_.o=function cc(a){var b;b=new bc;b.e=4;a>1?(b.c=fc(this,a-1)):(b.c=this);return b};_.p=function ec(){_b(this);return this.b};_.q=function gc(){return ac(this)};_.r=function ic(){_b(this);return this.g};_.s=function kc(){return (this.e&4)!=0};_.t=function lc(){return (this.e&1)!=0};_.e=0;var $b=1;var Db=dc(Ac,'Object',1);var yb=dc(Ac,'Class',14);Rb(4,1,Dc);_.l=function q(){var a,b,c;c=this.c==null?null:this.c.replace(new RegExp('\\n','g'),' ');b=(a=ac(this.u),c==null?a:a+': '+c);o(this,p(new Error(b)));V(this)};_.b=Bc;_.d=true;var Gb=dc(Ac,'Throwable',4);Rb(12,4,Dc);var Ab=dc(Ac,'Exception',12);Rb(13,12,Dc);var Eb=dc(Ac,'RuntimeException',13);Rb(17,13,Dc);var Bb=dc(Ac,'JsException',17);Rb(18,17,Dc);var rb=dc(Ec,'JavaScriptExceptionBase',18);Rb(10,18,{10:1,3:1,4:1},t);_.m=function u(){return mb(this.a)===mb(r)?null:this.a};var r;var ob=dc(Fc,'JavaScriptException',10);var pb=dc(Fc,'JavaScriptObject$',0);Rb(24,1,{});var qb=dc(Fc,'Scheduler',24);var w=0,A=0,B=-1;Rb(22,24,{},Q);var M;var sb=dc(Ec,'SchedulerImpl',22);var T;Rb(37,1,{});var wb=dc(Ec,'StackTraceCreator/Collector',37);Rb(19,37,{},Y);_.n=function Z(a){var b={},j;var c=[];a['fnStack']=c;var d=arguments.callee.caller;while(d){var e=(U(),d.name||(d.name=W(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};var tb=dc(Ec,'StackTraceCreator/CollectorLegacy',19);Rb(38,37,{});_.n=function $(a){};var vb=dc(Ec,'StackTraceCreator/CollectorModern',38);Rb(20,38,{},ab);var ub=dc(Ec,'StackTraceCreator/CollectorModernNoSourceMap',20);var db,eb,fb;var Xb;db={3:1,16:1};var xb=dc(Ac,'Boolean',34);Rb(35,1,{3:1});var Cb=dc(Ac,'Number',35);eb={3:1,16:1};var zb=dc(Ac,'Double',36);Rb(60,1,{});fb={3:1,42:1,16:1,2:1};var Fb=dc(Ac,'String',2);Rb(64,1,{});Rb(62,1,{});Rb(59,1,{});var qc=0;var sc,tc=0,uc;Rb(514,1,{});var zc=(C(),G);var gwtOnLoad=gwtOnLoad=Nb;Lb(Wb);Ob('permProps',[[]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);\n//# sourceURL=hello_world-0.js\n"]);
