(function(){var p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return q.apply(null,arguments)};var w=(new Date).getTime();var da=function(){},y=function(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),y(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ea(f,c),c.push(":"),y(a,e,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},A={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ea=function(a,b){b.push('"');b.push(a.replace(fa,function(a){if(a in A)return A[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return A[a]=f+b.toString(16)}));b.push('"')};var ga=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,B={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},C={"'":"\\'"},E=function(a,b){return a<b?-1:a>b?1:0};var F=function(a){F[" "](a);return a};F[" "]=function(){};var G=function(a){try{var b;if(b=!!a&&null!=a.location.href)t:{try{F(a.foo);b=!0;break t}catch(c){}b=!1}return b}catch(d){return!1}},H=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},na=/^(-?[0-9.]{1,30})$/,I=function(a){return na.test(a)&&(a=Number(a),!isNaN(a))?a:null};var oa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var pa=document,J=window;var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},L=function(a){return!!a&&"function"==typeof a&&!!a.call},qa=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},ra=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",a)},sa=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},ta=function(a){a=
a.google_unique_id;return"number"==typeof a?a:0},ua=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},M=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},va=/(^| )adsbygoogle($| )/;var wa={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},xa=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];K(a,function(a,d){if(null!=a){var f;try{var e=[];y(new da,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\\|\//,"\\$&"),qa(b,d,"=",f,";"))}});return b.join("")};var ya={anchor:1,vignette:2};var N=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},O=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},za=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Aa=function(a,b){if(!a)return b;var c=a.match(za);return c?c[0]:b};var Ba=N("0.15"),Ca=N("0.002"),Da=N("0.001"),Ea=N("0.01"),Fa=N("0.0"),Ga=N("0.1"),Ha=O("true",!1),Ia=N("0.01"),Ja=N("0.001"),Ka=N("0.2"),La=O("true",
!0),Ma=N("0.05"),Na=parseInt("100",10),Oa=isNaN(Na)?100:Na;var Pa=O("false",!1),Qa=O("false",!1);var Ra=!!window.google_async_iframe_id,Sa=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&qa(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Ta=!0,Ua={},Xa=function(a,b,c,d){var f=Va,e,g=Ta;try{e=b()}catch(k){try{var h=oa(k);b="";k.fileName&&(b=k.fileName);var l=-1;k.lineNumber&&(l=k.lineNumber);g=f(a,h,b,l,c)}catch(m){try{var r=oa(m);a="";m.fileName&&(a=m.fileName);c=-1;m.lineNumber&&(c=m.lineNumber);Va("pAR",r,a,c,void 0,void 0)}catch(v){Wa({context:"mRE",msg:v.toString()+"\n"+(v.stack||"")},void 0)}}if(!g)throw k;}finally{if(d)try{d()}catch(x){}}return e},Va=function(a,b,c,d,f,e){var g={};if(f)try{f(g)}catch(k){}g.context=a;g.msg=
b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=pa.URL.substring(0,512);g.ref=pa.referrer.substring(0,512);Ya(g);Wa(g,e);return Ta},Wa=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Za(a),d="http"+("http:"==J.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,d=d.substring(0,2E3);J.google_image_requests||(J.google_image_requests=[]);var f=J.document.createElement("img");f.src=d;J.google_image_requests.push(f)}}catch(e){}},Ya=function(a){var b=
a||{};K(Ua,function(a,d){b[d]=J[a]})},$a=function(a,b){return function(){var c=arguments;return Xa(a,function(){return b.apply(void 0,c)},void 0,void 0)}},ab=function(a,b){return $a(a,b)},bb=function(a){return $a("aa:reactiveTag",a)},Za=function(a){var b="";K(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var cb=null,db=function(){if(!cb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,G(a))b=a;else break;cb=b}return cb};var P=function(a){var b=arguments.length;if(1==b&&"array"==aa(arguments[0]))return P.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var eb={M:"google_instream_debug",N:"google_anchor_debug",O:"google_infinite_debug",P:"google_inflate_debug",R:"google_ia_debug",S:"google_ia_debug_fb",T:"google_ia_debug_fr",V:"google_ia_debug_spa",U:"google_ia_debug_scr",W:"google_ladder_debug",X:"google_lat_debug",Y:"google_lat_debug_all",Z:"google_resize_debug",Q:"google_inflate_debug_all"};var Q=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}},gb=function(a){var b=!1;K(eb,function(c){fb(a,c)&&(b=!0)});return b},fb=function(a,b){if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;var c=hb(b);return-1!=a.indexOf(c)?!0:!1},hb=function(a){var b="";K(a.split("_"),function(a){b+=a.substr(0,2)});return b};var ib={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var jb=/^([0-9.]+)px$/,kb=/^([0-9.]+)$/,R=function(a){return(a=jb.exec(a))?Number(a[1]):null},lb=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var e;e=(e=R(a[c[d]]))?Math.round(e):null;null!=e&&(b[f]=e)}}},mb=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-d.top}catch(f){return 0}};var nb={rectangle:1,horizontal:2,vertical:4},ob=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},{width:120,height:600,format:4},{width:120,
height:240,format:4}],pb=function(a,b){return b.width-a.width||b.height-a.height},qb={A:"ECOMB",w:"CCOMB"};P("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));P("action","cite","data","formaction","href","manifest","poster","src");P("embed","iframe","link","object","script","style","template");var S;t:{var rb=p.navigator;if(rb){var sb=rb.userAgent;if(sb){S=sb;break t}}S=""};var tb=-1!=S.indexOf("Opera")||-1!=S.indexOf("OPR"),T=-1!=S.indexOf("Trident")||-1!=S.indexOf("MSIE"),ub=-1!=S.indexOf("Gecko")&&-1==S.toLowerCase().indexOf("webkit")&&!(-1!=S.indexOf("Trident")||-1!=S.indexOf("MSIE")),vb=-1!=S.toLowerCase().indexOf("webkit"),wb=function(){var a=p.document;return a?a.documentMode:void 0},xb=function(){var a="",b;if(tb&&p.opera)return a=p.opera.version,"function"==aa(a)?a():a;ub?b=/rv\:([^\);]+)(\)|;)/:T?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:vb&&(b=/WebKit\/(\S+)/);
b&&(a=(a=b.exec(S))?a[1]:"");return T&&(b=wb(),b>parseFloat(a))?String(b):a}(),yb={},zb=function(a){if(!yb[a]){for(var b=0,c=ga(String(xb)).split("."),d=ga(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",k=d[e]||"",h=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=h.exec(g)||["","",""],r=l.exec(k)||["","",""];if(0==m[0].length&&0==r[0].length)break;b=E(0==m[1].length?0:parseInt(m[1],10),0==r[1].length?0:parseInt(r[1],10))||E(0==m[2].length,0==
r[2].length)||E(m[2],r[2])}while(0==b)}yb[a]=0<=b}},Ab=p.document,Bb=Ab&&T?wb()||("CSS1Compat"==Ab.compatMode?parseInt(xb,10):5):void 0;var Cb;if(!(Cb=!ub&&!T)){var Db;if(Db=T)Db=T&&9<=Bb;Cb=Db}Cb||ub&&zb("1.9.1");T&&zb("9");var Eb=function(a,b){this.q=[0,0];this.n=a||"";this.k=b||""},U=function(a,b){0>a.n.indexOf(b)&&(a.n=b+a.n)};Eb.prototype.toString=function(){return[this.q[0],this.q[1],this.n,this.k].join("|")};var Fb=function(a,b){if(3!=a.nodeType&&1==a.nodeType){if(a.nodeName.toLowerCase()in{$:1,style:1})return 0;try{var c=M(a,b)}catch(d){}if(c){if("none"==c.display)return 0;if("absolute"==c.position||"fixed"==c.position)return 1}return 2}return 0};var Gb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};Ta=!Pa;Ua={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Hb=function(a,b,c){c||(c=Qa?"https":"http");return[c,"://",a,b].join("")};var V=null;var W=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.K,this)});this.H=a.google_iframe_oncopy},Ib;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(ha,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(ia,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(ja,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(ka,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(la,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(ma,"&#0;")));Ib=X;W.prototype.set=function(a,b){this.H.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",q(this.C,this,a),!1)};
W.prototype.C=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};W.prototype.K=function(a,b){var c=Jb("rx",a),d;t:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break t}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Jb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var Kb=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Y,Z=function(a){this.m=[];this.j=a||window;this.i=0;this.l=null;this.v=0},Lb=function(a,b){this.D=a;this.L=b};Z.prototype.B=function(a,b){0!=this.i||0!=this.m.length||b&&b!=window?this.r(a,b):(this.i=2,this.u(new Lb(a,window)))};Z.prototype.r=function(a,b){this.m.push(new Lb(a,b||this.j));Mb(this)};Z.prototype.F=function(a){this.i=1;if(a){var b=ab("sjr::timeout",q(this.t,this,!0));this.l=this.j.setTimeout(b,a)}};
Z.prototype.t=function(a){a&&++this.v;1==this.i&&(null!=this.l&&(this.j.clearTimeout(this.l),this.l=null),this.i=0);Mb(this)};Z.prototype.G=function(){return!(!window||!Array)};Z.prototype.I=function(){return this.v};Z.prototype.nq=Z.prototype.B;Z.prototype.nqa=Z.prototype.r;Z.prototype.al=Z.prototype.F;Z.prototype.rl=Z.prototype.t;Z.prototype.sz=Z.prototype.G;Z.prototype.tc=Z.prototype.I;var Mb=function(a){var b=ab("sjr::tryrun",q(a.J,a));a.j.setTimeout(b,0)};
Z.prototype.J=function(){if(0==this.i&&this.m.length){var a=this.m.shift();this.i=2;var b=ab("sjr::run",q(this.u,this,a));a.L.setTimeout(b,0);Mb(this)}};Z.prototype.u=function(a){this.i=0;a.D()};
var Nb=function(a){try{return a.sz()}catch(b){return!1}},Ob=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Nb(a)&&L(a.nq)&&L(a.nqa)&&L(a.al)&&L(a.rl)},Pb=function(){if(Y&&Nb(Y))return Y;var a=db(),b=a.google_jobrunner;return Ob(b)?Y=b:a.google_jobrunner=Y=new Z(a)},Qb=function(a,b){Pb().nq(a,b)},Rb=function(a,b){Pb().nqa(a,b)};var Sb=Ra?1==ta(J):!ta(J),Tb=function(){var a=F("script"),b;b=Aa("","pagead2.googlesyndication.com");return["<",a,' src="',Hb(b,"/pagead/js/r20150203/r20141212/show_ads_impl.js",""),'"></',a,">"].join("")},Ub=function(a,b,c,d){return function(){var f=!1;d&&Pb().al(3E4);var e=a.document.getElementById(b);e&&!G(e.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{if(G(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,k=g.document;k.body&&k.body.firstChild||(k.open(),g.google_async_iframe_close=!0,k.write(c))}else{var h=a.document.getElementById(b).contentWindow,l;e=c;e=String(e);if(e.quote)l=e.quote();else{g=['"'];for(k=0;k<e.length;k++){var m=e.charAt(k),r=m.charCodeAt(0),v=k+1,x;if(!(x=B[m])){var u;if(31<r&&127>r)u=m;else{var n=m;if(n in C)u=C[n];else if(n in
B)u=C[n]=B[n];else{var z=n,t=n.charCodeAt(0);if(31<t&&127>t)z=n;else{if(256>t){if(z="\\x",16>t||256<t)z+="0"}else z="\\u",4096>t&&(z+="0");z+=t.toString(16).toUpperCase()}u=C[n]=z}}x=u}g[v]=x}g.push('"');l=g.join("")}h.location.replace("javascript:"+l)}f=!0}catch(D){h=db().google_jobrunner,Ob(h)&&h.rl()}f&&(f=Jb("google_async_rrc",c),(new W(a)).set(b,Ub(a,b,f,!1)))}},Vb=function(a){var b=["<iframe"];K(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},Xb=function(a,
b,c){Wb(a,b,c,function(a,b,e){a=a.document;for(var g=b.id,k=0;!g||a.getElementById(g);)g="aswift_"+k++;b.id=g;b.name=g;g=Number(e.google_ad_width);k=Number(e.google_ad_height);16==e.google_reactive_ad_format?(e=a.createElement("div"),e.innerHTML=Sa(b,g,k),c.appendChild(e.firstChild)):c.innerHTML=Sa(b,g,k);return b.id})},Wb=function(a,b,c,d){var f=F("script"),e={},g=b.google_ad_height;e.width='"'+b.google_ad_width+'"';e.height='"'+g+'"';e.frameborder='"0"';e.marginwidth='"0"';e.marginheight='"0"';
e.vspace='"0"';e.hspace='"0"';e.allowtransparency='"true"';e.scrolling='"no"';e.allowfullscreen='"true"';e.onload='"'+Ib+'"';d=d(a,e,b);var e=Yb(b)?H(["c","e"],Ka):null,k=b.google_ad_output,g=b.google_ad_format;g||"html"!=k&&null!=k||(g=b.google_ad_width+"x"+b.google_ad_height,"e"==e&&(g+="_as"));k=!b.google_ad_slot||Yb(b);g=g&&k?g.toLowerCase():"";b.google_ad_format=g;for(var g=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],k=[],h=0,l=c;l&&25>h;l=l.parentNode,
++h)k.push(9!=l.nodeType&&l.id||"");(k=k.join())&&g.push(k);b.google_ad_unit_key=ua(g.join(":")).toString();g=a.google_adk2_experiment=a.google_adk2_experiment||H(["C","E"],Ja)||"N";if("E"==g){g=[];for(k=0;c&&25>k;++k){h=(h=9!=c.nodeType&&c.id)?"/"+h:"";t:{if(c&&c.nodeName&&c.parentElement)for(var l=c.nodeName.toLowerCase(),m=c.parentElement.childNodes,r=0,v=0;v<m.length;++v){var x=m[v];if(x.nodeName&&x.nodeName.toLowerCase()==l){if(c==x){l="."+r;break t}++r}}l=""}g.push((c.nodeName&&c.nodeName.toLowerCase())+
h+l);c=c.parentElement}c=g.join()+":";g=a;k=[];if(g)try{for(var u=g.parent,h=0;u&&u!=g&&25>h;++h){for(var n=u.frames,l=0;l<n.length;++l)if(g==n[l]){k.push(l);break}g=u;u=g.parent}}catch(z){}b.google_ad_unit_key_2=ua(c+k.join()).toString()}else"C"==g&&(b.google_ad_unit_key_2="ctrl");var u=xa(b),t;b=b.google_ad_client;if(n=Sb){if(!V)e:{c=[J.top];n=[];for(g=0;k=c[g++];){n.push(k);try{if(k.frames)for(var D=k.frames.length,h=0;h<D&&1024>c.length;++h)c.push(k.frames[h])}catch(mc){}}for(D=0;D<n.length;D++)try{if(t=
n[D].frames.google_esf){V=t;break e}}catch(nc){}V=null}n=!V}n?(t={style:"display:none"},t["data-ad-client"]=Kb(b),t.id="google_esf",t.name="google_esf",t.src=Hb(Aa("","googleads.g.doubleclick.net"),"/pagead/html/r20150203/r20141212/zrt_lookup.html"),t=Vb(t)):t="";D=(new Date).getTime();b=a.google_top_experiment;if(n=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;c=a.google_always_use_delayed_impressions_experiment;
g=a.google_floating_ads_js_experiment;e=["<!doctype html><html><body>",t,"<",f,">",u,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',w,";",b?'google_top_experiment="'+b+'";':"",n?'google_async_for_oa_experiment="'+n+'";':"",c?'google_always_use_delayed_impressions_experiment="'+c+'";':"",e?'google_append_as_for_format_override="'+e+'";':"",g?'google_floating_ads_js_experiment="'+g+'";':"","google_bpp=",D>w?D-w:1,";google_async_rrc=0;</",
f,">",Tb(),"</body></html>"].join("");(a.document.getElementById(d)?Qb:Rb)(Ub(a,d,e,!0))},Zb=Math.floor(1E6*Math.random()),$b=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var f=c[d].indexOf("=");-1!=f&&(b[c[d].substr(0,f)]=c[d].substr(f+1))}}catch(e){}c=b[3];if(b[1]==Zb&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();
window.google_top_js_callbacks.length=0}},Yb=function(a){return a.google_override_format||!ib[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},ac=function(a,b){var c=navigator;if(La&&a&&b&&c){var d=a.document,c=d.createElement("script"),f=Kb(b);c.async=!0;c.type="text/javascript";c.src=Hb("www.gstatic.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var bc=function(a){return va.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},dc=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");cc(a,b,c)},cc=function(a,b,c){ec(a,b,c);if(!fc(a,b,c)){sa(c);1==ta(c)&&ac(c,b.google_ad_client);K(wa,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&"html"!=d)throw Error("No support for google_ad_output="+d);Xa("aa::main",function(){Xb(c,b,a)})}},fc=function(a,b,c){var d;var f=b.google_ad_slot;
d=window.google_ad_modifications;if(!d||Gb(d.ad_whitelist,f,b.google_tag_origin))d=null;else{var e=d.space_collapsing||"none";d=(f=Gb(d.ad_blacklist,f))?{p:!0,o:f.space_collapsing||e}:d.remove_ads_by_default?{p:!0,o:e}:null}if(d&&d.p){if("none"==d.o)return!0;if(null!==I(a.getAttribute("width"))||null!==I(a.getAttribute("height")))a.setAttribute("width",0),a.setAttribute("height",0);a.style.width="0px";a.style.height="0px";if("slot_and_pub"==d.o)for(b=a.ownerDocument,b=b.defaultView||b.parentWindow,
c=new Eb;a;){try{var g=M(a,b)}catch(k){0>c.k.indexOf("c")&&(c.k="c"+c.k)}e=b;d=a;f=c;try{var h=d.style}catch(l){0>f.k.indexOf("s")&&(f.k="s"+f.k)}var m=void 0;if(d&&d.parentElement)for(var m=0,r=d.parentElement.childNodes,v=0;v<r.length;v++){var x=r[v];x!==d&&(m|=Fb(x,e))}else m=0;3==m?U(f,"m"):(e=d.getAttribute("width"),I(e),d=d.getAttribute("height"),I(d),(d=h?h.width:null)&&R(d),h&&h.height&&R(h.height));if(g)if("none"==g.display){U(c,"n");break}else if("absolute"==g.position){U(c,"a");break}else if("fixed"==
g.position){U(c,"f");break}else if("hidden"==g.visibility||"collapse"==g.visibility){U(c,"v");break}else"hidden"==g.overflow&&U(c,"o");a=a.parentElement;if(!a)try{a=b.frameElement;var u=b.parent;u&&u!=b&&(b=u)}catch(n){U(c,"c");break}}return!0}return!(g=M(a,c))||"none"!=g.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||b.google_reactive_ads_config?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
!0)},ec=function(a,b,c){for(var d=a.attributes,f=d.length,e=0;e<f;e++){var g=d[e];if(/data-/.test(g.name)){var k=g.name.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(k)||(g=g.value,"google_reactive_ad_format"==k&&(g=+g,g=isNaN(g)?null:g),null===g||(b[k]=g))}}gb(c.location.hash)&&(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=Q(c).clientWidth,void 0===window.google_floating_ads_js_experiment&&(window.google_floating_ads_js_experiment=
H(["4091000","4091001"],Ma)),"4091001"==window.google_floating_ads_js_experiment?b.google_ad_height=Oa:b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=Q(c).clientWidth||0,b.google_ad_height=Q(c).clientHeight||0,a.style.display="none",fb(c.location.hash,"google_ia_debug_spa")&&(b.google_vignette_manual_trigger=!0);else if(d=b.google_ad_format,
"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){void 0===b.google_responsive_combined_experiment&&(d=["CCOMB","ECOMB"],f=Ha?Ga:Fa,b.google_responsive_combined_experiment=488>Q(c).clientWidth?H(d,f):"-");d=["IC","IE"];f=a.offsetWidth;d=320==Q(window).clientWidth&&300<=f&&320>f?H(d,Ia):null;b.google_responsive_optimization_experiment=d||H(["SC","SE"],Ea)||"-";var d=a.offsetWidth,f=b.google_ad_format,h;if("auto"==f)h=Q(c).clientWidth,h=Math.min(1200,h),h=.25>=d/h?4:3;else{e=0;for(h in nb)-1!=
f.indexOf(h)&&(e|=nb[h]);h=e}b&&(b.google_responsive_formats=h);t:{e=ob.sort(pb);if(k=a&&488>Q(c).clientWidth)k=Math.min(Q(c).clientHeight,16*Q(c).clientWidth/9),k=mb(a,c)<k-100;for(g=0;g<e.length;g++){var l=e[g];if(e[g].width<=d&&l.format&h){var m=qb,r=(b||{}).google_responsive_combined_experiment;if(k&&250<=l.height&&(b&&(b.s=!0),Ha?r!=m.w:r==m.A))continue;h=l;break t}}h=null}e=h;if(!e)throw Error("Cannot find a responsive size for a container of width="+d+"px and data-ad-format="+f);h=b.google_responsive_optimization_experiment;
("SC"==h||"SE"==h?e.width!=(300<d&&300<e.height?e.width:1200<d?1200:Math.round(d)):"IC"!=h&&"IE"!=h||234==e.width&&60==e.height)||(b.google_responsive_optimization_experiment=void 0);h=b.google_responsive_combined_experiment;f=b.s;b.s=void 0;if("CCOMB"!=h&&"ECOMB"!=h||!(f||320==e.width&&50==e.height))b.google_responsive_combined_experiment=void 0;k=b.google_responsive_optimization_experiment;f=b.google_responsive_combined_experiment;h="SE"==k?e.width:300<d&&300<e.height?e.width:1200<d?1200:Math.round(d);
f=(Ha?"CCOMB"!=f:"ECOMB"==f)&&320==e.width&&50==e.height?100:e.height;if(e=234==e.width&&60==e.height&&"IE"==k){e=Q(c).clientWidth||0;if(!(d=!(320==e&&300<=d&&320>d)))e:{d=a;for(k=0;10>k&&d.parentElement;k++){d=d.parentElement;g=M(d,c);if(!g)break;g=g.overflowX||g.overflow;if("hidden"==g||"scroll"==g||"auto"==g)break;if(d.clientWidth>=e){d=!1;break e}}d=!0}d?e=!1:(c=M(a,c),d=a.getBoundingClientRect(),c&&d?(d=d.left,0>=d?e=!1:(e-=d+a.offsetWidth,"rtl"!=c.direction?(c=R(c.marginLeft)||0,a.style.marginLeft=
c-d+"px"):(c=R(c.marginRight)||0,a.style.marginRight=c-e+"px"),e=!0)):e=!1)}e&&(h=320,f=100);b.google_ad_width=h;b.google_ad_height=f;a.style.height=b.google_ad_height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else{if(!kb.test(b.google_ad_width)&&!jb.test(a.style.width)||!kb.test(b.google_ad_height)&&!jb.test(a.style.height))d=M(a,c),a.style.width=d.width,a.style.height=d.height,lb(d,b),b.google_loader_features_used=256;else{lb(a.style,b);t:{if(!(b.google_ad_output&&
"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height)&&(d=Q(c).clientHeight,mb(a,c)>1.5*d&&(d=H(["C","E"],Ca)))){"E"==d&&(h=a.style.width,a.style.width="100%",f=a.offsetWidth,a.style.width=h,b.google_available_width=f);break t}d=void 0}b.google_efmwe=d}d=b.google_ad_width;h=b.google_ad_height;if(d&&h&&!ib[d+"x"+h]){if((h=d=H(["C","E","CI","EI"],Da))&&!(h="C"==d)){h="E"==d||"EI"==d;r:{f=a;for(e=0;10>e&&f.parentElement;e++)if(f=f.parentElement,f.clientHeight>=a.offsetHeight+30)break r;
f=null}c=!f||f.clientWidth>=a.offsetWidth+30?!1:(c=M(f,c))?(c=R(c.width))&&160>c?!1:a.offsetWidth>c:!1;c?(c=b.google_ad_width,f=a.style.width||"",a.style.width="100%",e=a.offsetWidth,160>e||e>=c?(a.style.width=f,a=!1):(h?(b.google_original_width=c,b.google_ad_width=Math.round(e),a.style.width=e+"px"):a.style.width=f,a=!0)):a=!1;h=a||"EI"!=d&&"CI"!=d}h&&(b.google_overflowing_ads_experiment=d)}}},gc=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(bc(d)&&
(!a||d.id==a))return d;return null},hc=!1,ic=function(a){var b={};K(ya,function(c,d){a.hasOwnProperty(d)&&(b[d]=a[d])});var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);var d=a.params||{};d.google_reactive_ads_config=b;d.google_ad_client=a.google_ad_client;dc(c,d)},jc=function(a){if(hc)throw Error("adsbygoogle.push(): Only one 'enable_page_level_ads'  allowed per page.");hc=!0;document.body?ic(a):ra(bb(function(){ic(a)}))},kc=function(a){var b;
t:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){b=!0;break t}throw Error("adsbygoogle.push(): 'google_ad_client' is missing from the tag config.");}b=!1}if(b)jc(a);else{b=a.element;a=a.params||{};if(b){if(!bc(b)&&(b=b.id&&gc(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=gc(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
dc(b,a)}},lc=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:G(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=J.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=H(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],Ba),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",$b,!1):a.attachEvent&&a.attachEvent("onmessage",$b);window.google_top_js_status=
3;a={0:"google_loc_request",1:Zb};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{kc(a)}catch(f){throw window.setTimeout(lc,0),f;}d&&d.loaded||(window.adsbygoogle={push:kc,loaded:!0})};lc();})();
