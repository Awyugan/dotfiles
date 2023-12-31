/*! For license information please see lsplugin.user.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LSPluginEntry=t():e.LSPluginEntry=t();}(self,(function(){return (()=>{var e={227:(e,t,n)=>{var r=n(155);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r));})),t.splice(o,0,n);},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug");}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug");}catch(e){}return !e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e},t.useColors=function(){return !("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return ()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(447)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return "[UnexpectedJSONParseError]: "+e.message}};},447:(e,t,n)=>{e.exports=function(e){function t(e){let n,o=null;function i(...e){if(!i.enabled)return;const r=i,o=Number(new Date),a=o-(n||o);r.diff=a,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=t.formatters[o];if("function"==typeof i){const t=e[s];n=i.call(r,t),e.splice(s,1),s--;}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e);}return i.namespace=e,i.useColors=t.useColors(),i.color=t.selectColor(e),i.extend=r,i.destroy=t.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:()=>null===o?t.enabled(e):o,set:e=>{o=e;}}),"function"==typeof t.init&&t.init(i),i}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));},t.enabled=function(e){if("*"===e[e.length-1])return !0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return !1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return !0;return !1},t.humanize=n(824),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(e).forEach((n=>{t[n]=e[n];})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t};},856:function(e){e.exports=function(){var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,s=Object.create,c="undefined"!=typeof Reflect&&Reflect,l=c.apply,u=c.construct;l||(l=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var p,f=x(Array.prototype.forEach),d=x(Array.prototype.pop),h=x(Array.prototype.push),m=x(String.prototype.toLowerCase),g=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),_=x(RegExp.prototype.test),w=(p=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(p,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(e,t,r)}}function C(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=m(i);a!==i&&(n(r)||(r[o]=a),i=a);}e[i]=!0;}return e}function S(t){var n=s(null),r=void 0;for(r in t)l(e,t,[r])&&(n[r]=t[r]);return n}function O(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e);}return function(e){return console.warn("fallback value for",e),null}}var j=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),A=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),T=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),E=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),L=i(["#text"]),I=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),M=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),N=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),R=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),D=a(/<%[\s\S]*|[\s\S]*%>/gm),P=a(/^data-[\-\w.\u00B7-\uFFFF]/),U=a(/^aria-[\-\w]+$/),$=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),H=a(/^(?:\w+script|data):/i),B=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function G(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var J=function(){return "undefined"==typeof window?null:window},q=function(e,t){if("object"!==(void 0===e?"undefined":W(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),n=function(t){return e(t)};if(n.version="2.3.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,c=t.Node,l=t.Element,u=t.NodeFilter,p=t.NamedNodeMap,x=void 0===p?t.NamedNodeMap||t.MozNamedAttrMap:p,Z=t.Text,V=t.Comment,K=t.DOMParser,Y=t.trustedTypes,X=l.prototype,Q=O(X,"cloneNode"),ee=O(X,"nextSibling"),te=O(X,"childNodes"),ne=O(X,"parentNode");if("function"==typeof s){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument);}var oe=q(Y,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,se=ae.implementation,ce=ae.createNodeIterator,le=ae.createDocumentFragment,ue=ae.getElementsByTagName,pe=r.importNode,fe={};try{fe=S(o).documentMode?o.documentMode:{};}catch(e){}var de={};n.isSupported="function"==typeof ne&&se&&void 0!==se.createHTMLDocument&&9!==fe;var he=z,me=D,ge=P,ye=U,ve=H,be=B,_e=$,we=null,xe=C({},[].concat(G(j),G(A),G(T),G(k),G(L))),Ce=null,Se=C({},[].concat(G(I),G(M),G(N),G(R))),Oe=null,je=null,Ae=!0,Te=!0,Ee=!1,ke=!1,Fe=!1,Le=!1,Ie=!1,Me=!1,Ne=!1,Re=!0,ze=!1,De=!0,Pe=!0,Ue=!1,$e={},He=null,Be=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),We=null,Ge=C({},["audio","video","img","source","image","track"]),Je=null,qe=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml",Ye=Ke,Xe=!1,Qe=null,et=o.createElement("form"),tt=function(e){Qe&&Qe===e||(e&&"object"===(void 0===e?"undefined":W(e))||(e={}),e=S(e),we="ALLOWED_TAGS"in e?C({},e.ALLOWED_TAGS):xe,Ce="ALLOWED_ATTR"in e?C({},e.ALLOWED_ATTR):Se,Je="ADD_URI_SAFE_ATTR"in e?C(S(qe),e.ADD_URI_SAFE_ATTR):qe,We="ADD_DATA_URI_TAGS"in e?C(S(Ge),e.ADD_DATA_URI_TAGS):Ge,He="FORBID_CONTENTS"in e?C({},e.FORBID_CONTENTS):Be,Oe="FORBID_TAGS"in e?C({},e.FORBID_TAGS):{},je="FORBID_ATTR"in e?C({},e.FORBID_ATTR):{},$e="USE_PROFILES"in e&&e.USE_PROFILES,Ae=!1!==e.ALLOW_ARIA_ATTR,Te=!1!==e.ALLOW_DATA_ATTR,Ee=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=e.SAFE_FOR_TEMPLATES||!1,Fe=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Ne=e.RETURN_DOM_FRAGMENT||!1,Re=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Ie=e.FORCE_BODY||!1,De=!1!==e.SANITIZE_DOM,Pe=!1!==e.KEEP_CONTENT,Ue=e.IN_PLACE||!1,_e=e.ALLOWED_URI_REGEXP||_e,Ye=e.NAMESPACE||Ke,ke&&(Te=!1),Ne&&(Me=!0),$e&&(we=C({},[].concat(G(L))),Ce=[],!0===$e.html&&(C(we,j),C(Ce,I)),!0===$e.svg&&(C(we,A),C(Ce,M),C(Ce,R)),!0===$e.svgFilters&&(C(we,T),C(Ce,M),C(Ce,R)),!0===$e.mathMl&&(C(we,k),C(Ce,N),C(Ce,R))),e.ADD_TAGS&&(we===xe&&(we=S(we)),C(we,e.ADD_TAGS)),e.ADD_ATTR&&(Ce===Se&&(Ce=S(Ce)),C(Ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&C(Je,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(He===Be&&(He=S(He)),C(He,e.FORBID_CONTENTS)),Pe&&(we["#text"]=!0),Fe&&C(we,["html","head","body"]),we.table&&(C(we,["tbody"]),delete Oe.tbody),i&&i(e),Qe=e);},nt=C({},["mi","mo","mn","ms","mtext"]),rt=C({},["foreignobject","desc","title","annotation-xml"]),ot=C({},A);C(ot,T),C(ot,E);var it=C({},k);C(it,F);var at=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Ke,tagName:"template"});var n=m(e.tagName),r=m(t.tagName);if(e.namespaceURI===Ve)return t.namespaceURI===Ke?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===r||nt[r]):Boolean(ot[n]);if(e.namespaceURI===Ze)return t.namespaceURI===Ke?"math"===n:t.namespaceURI===Ve?"math"===n&&rt[r]:Boolean(it[n]);if(e.namespaceURI===Ke){if(t.namespaceURI===Ve&&!rt[r])return !1;if(t.namespaceURI===Ze&&!nt[r])return !1;var o=C({},["title","style","font","a","script"]);return !it[n]&&(o[n]||!ot[n])}return !1},st=function(e){h(n.removed,{element:e});try{e.parentNode.removeChild(e);}catch(t){try{e.outerHTML=ie;}catch(t){e.remove();}}},ct=function(e,t){try{h(n.removed,{attribute:t.getAttributeNode(e),from:t});}catch(e){h(n.removed,{attribute:null,from:t});}if(t.removeAttribute(e),"is"===e&&!Ce[e])if(Me||Ne)try{st(t);}catch(e){}else try{t.setAttribute(e,"");}catch(e){}},lt=function(e){var t=void 0,n=void 0;if(Ie)e="<remove></remove>"+e;else {var r=g(e,/^[\r\n\t ]+/);n=r&&r[0];}var i=oe?oe.createHTML(e):e;if(Ye===Ke)try{t=(new K).parseFromString(i,"text/html");}catch(e){}if(!t||!t.documentElement){t=se.createDocument(Ye,"template",null);try{t.documentElement.innerHTML=Xe?"":i;}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ye===Ke?ue.call(t,Fe?"html":"body")[0]:Fe?t.documentElement:a},ut=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},pt=function(e){return !(e instanceof Z||e instanceof V||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ft=function(e){return "object"===(void 0===c?"undefined":W(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":W(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function(e,t,r){de[e]&&f(de[e],(function(e){e.call(n,t,r,Qe);}));},ht=function(e){var t=void 0;if(dt("beforeSanitizeElements",e,null),pt(e))return st(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return st(e),!0;var r=m(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:r,allowedTags:we}),!ft(e.firstElementChild)&&(!ft(e.content)||!ft(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return st(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return st(e),!0;if(!we[r]||Oe[r]){if(Pe&&!He[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e));}return st(e),!0}return e instanceof l&&!at(e)?(st(e),!0):"noscript"!==r&&"noembed"!==r||!_(/<\/no(script|embed)/i,e.innerHTML)?(ke&&3===e.nodeType&&(t=e.textContent,t=y(t,he," "),t=y(t,me," "),e.textContent!==t&&(h(n.removed,{element:e.cloneNode()}),e.textContent=t)),dt("afterSanitizeElements",e,null),!1):(st(e),!0)},mt=function(e,t,n){if(De&&("id"===t||"name"===t)&&(n in o||n in et))return !1;if(Te&&!je[t]&&_(ge,t));else if(Ae&&_(ye,t));else {if(!Ce[t]||je[t])return !1;if(Je[t]);else if(_(_e,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!We[e])if(Ee&&!_(ve,y(n,be,"")));else if(n)return !1}return !0},gt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ce};for(i=a.length;i--;){var c=t=a[i],l=c.name,u=c.namespaceURI;if(r=b(t.value),o=m(l),s.attrName=o,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,s),r=s.attrValue,!s.forceKeepAttr&&(ct(l,e),s.keepAttr))if(_(/\/>/i,r))ct(l,e);else {ke&&(r=y(r,he," "),r=y(r,me," "));var p=e.nodeName.toLowerCase();if(mt(p,o,r))try{u?e.setAttributeNS(u,l,r):e.setAttribute(l,r),d(n.removed);}catch(e){}}}dt("afterSanitizeAttributes",e,null);}},yt=function e(t){var n=void 0,r=ut(t);for(dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)dt("uponSanitizeShadowNode",n,null),ht(n)||(n.content instanceof a&&e(n.content),gt(n));dt("afterSanitizeShadowDOM",t,null);};return n.sanitize=function(e,o){var i=void 0,s=void 0,l=void 0,u=void 0,p=void 0;if((Xe=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ft(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===W(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ft(e))return t.toStaticHTML(e.outerHTML)}return e}if(Le||tt(o),n.removed=[],"string"==typeof e&&(Ue=!1),Ue);else if(e instanceof c)1===(s=(i=lt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else {if(!Me&&!ke&&!Fe&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(i=lt(e)))return Me?null:ie}i&&Ie&&st(i.firstChild);for(var f=ut(Ue?e:i);l=f.nextNode();)3===l.nodeType&&l===u||ht(l)||(l.content instanceof a&&yt(l.content),gt(l),u=l);if(u=null,Ue)return e;if(Me){if(Ne)for(p=le.call(i.ownerDocument);i.firstChild;)p.appendChild(i.firstChild);else p=i;return Re&&(p=pe.call(r,p,!0)),p}var d=Fe?i.outerHTML:i.innerHTML;return ke&&(d=y(d,he," "),d=y(d,me," ")),oe&&ze?oe.createHTML(d):d},n.setConfig=function(e){tt(e),Le=!0;},n.clearConfig=function(){Qe=null,Le=!1;},n.isValidAttribute=function(e,t,n){Qe||tt({});var r=m(e),o=m(t);return mt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],h(de[e],t));},n.removeHook=function(e){de[e]&&d(de[e]);},n.removeHooks=function(e){de[e]&&(de[e]=[]);},n.removeAllHooks=function(){de={};},n}()}();},729:e=>{var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1;}function i(e,t,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t];}function s(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,o,i,a){var s=n?n+e:e;if(!this._events[s])return !1;var c,l,u=this._events[s],p=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),p){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,o),!0;case 5:return u.fn.call(u.context,t,r,o,i),!0;case 6:return u.fn.call(u.context,t,r,o,i,a),!0}for(l=1,c=new Array(p-1);l<p;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var f,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),p){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,o);break;default:if(!c)for(f=1,c=new Array(p-1);f<p;f++)c[f-1]=arguments[f];u[l].fn.apply(u[l].context,c);}}return !0},s.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==t||o&&!s.once||r&&s.context!==r||a(this,i);else {for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||o&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[i]=1===l.length?l[0]:l:a(this,i);}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s;},717:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e;};},824:e=>{var t=1e3,n=60*t,r=60*n,o=24*r;function i(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,a){a=a||{};var s,c,l=typeof e;if("string"===l&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(i){var a=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*r;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if("number"===l&&isFinite(e))return a.long?(s=e,(c=Math.abs(s))>=o?i(s,c,o,"day"):c>=r?i(s,c,r,"hour"):c>=n?i(s,c,n,"minute"):c>=t?i(s,c,t,"second"):s+" ms"):function(e){var i=Math.abs(e);return i>=o?Math.round(e/o)+"d":i>=r?Math.round(e/r)+"h":i>=n?Math.round(e/n)+"m":i>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};},520:(e,t,n)=>{var r=n(155),o="win32"===r.platform,i=n(539);function a(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o));}return n}function s(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function p(e){var t=c.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function f(e){var t=c.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function d(e){return "\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var e="",t="",n=!1,o=arguments.length-1;o>=-1;o--){var s;if(o>=0?s=arguments[o]:e?(s=r.env["="+e])&&s.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(s=e+"\\"):s=r.cwd(),!i.isString(s))throw new TypeError("Arguments to path.resolve must be strings");if(s){var c=f(s),l=c.device,u=c.isUnc,p=c.isAbsolute,h=c.tail;if((!l||!e||l.toLowerCase()===e.toLowerCase())&&(e||(e=l),n||(t=h+"\\"+t,n=p),e&&n))break}}return u&&(e=d(e)),e+(n?"\\":"")+(t=a(t.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(e){var t=f(e),n=t.device,r=t.isUnc,o=t.isAbsolute,i=t.tail,s=/[\\\/]$/.test(i);return (i=a(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&s&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(e){return f(e).isAbsolute},u.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n);}var r=e.join("\\");return /^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(e,t){e=u.resolve(e),t=u.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),o=s(t.split("\\")),i=s(n.split("\\")),a=s(r.split("\\")),c=Math.min(i.length,a.length),l=c,p=0;p<c;p++)if(i[p]!==a[p]){l=p;break}if(0==l)return t;var f=[];for(p=l;p<i.length;p++)f.push("..");return (f=f.concat(o.slice(l))).join("\\")},u._makeLong=function(e){if(!i.isString(e))return e;if(!e)return "";var t=u.resolve(e);return /^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},u.dirname=function(e){var t=p(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(e,t){var n=p(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},u.extname=function(e){return p(e)[3]},u.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=p(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return {root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(e){return h.exec(e).slice(1)}m.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o[0]);}return (t?"/":"")+(e=a(e.split("/"),!t).join("/"))||"."},m.normalize=function(e){var t=m.isAbsolute(e),n=e&&"/"===e[e.length-1];return (e=a(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},m.isAbsolute=function(e){return "/"===e.charAt(0)},m.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n);}return m.normalize(e)},m.relative=function(e,t){e=m.resolve(e).substr(1),t=m.resolve(t).substr(1);for(var n=s(e.split("/")),r=s(t.split("/")),o=Math.min(n.length,r.length),i=o,a=0;a<o;a++)if(n[a]!==r[a]){i=a;break}var c=[];for(a=i;a<n.length;a++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(e){return e},m.dirname=function(e){var t=g(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(e,t){var n=g(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},m.extname=function(e){return g(e)[3]},m.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return (e.dir?e.dir+m.sep:"")+(e.base||"")},m.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=g(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},m.sep="/",m.delimiter=":",e.exports=o?u:m,e.exports.posix=m,e.exports.win32=u;},155:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o;}catch(e){t=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(e){n=i;}}();var s,c=[],l=!1,u=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&f());}function f(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length;}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function d(e,t){this.fun=e,this.array=t;}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||a(f);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return []},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},539:(e,t,n)=>{var r=n(155),o=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,(function(e){if("%%"===e)return "%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return "[Circular]"}default:return e}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?a+=" "+c:a+=" "+s(c);return a},t.deprecate=function(e,o){if(v(n.g.process))return function(){return t.deprecate(e,o).apply(this,arguments)};if(!0===r.noDeprecation)return e;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0;}return e.apply(this,arguments)}};var i,a={};function s(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,e,r.depth)}function c(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function l(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&C(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return y(o)||(o=u(e,o,r)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return g(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}(e,n);if(i)return i;var a=Object.keys(n),s=function(e){var t={};return e.forEach((function(e,n){t[e]=!0;})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(n);if(0===a.length){if(C(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return p(n)}var l,_="",S=!1,O=["{","}"];return d(n)&&(S=!0,O=["[","]"]),C(n)&&(_=" [Function"+(n.name?": "+n.name:"")+"]"),b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+p(n)),0!==a.length||S&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=S?function(e,t,n,r,o){for(var i=[],a=0,s=t.length;a<s;++a)T(t,String(a))?i.push(f(e,t,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(f(e,t,n,r,o,!0));})),i}(e,n,r,s,a):a.map((function(t){return f(e,n,r,s,t,S)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(l,_,O)):O[0]+_+O[1]}function p(e){return "["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o,i){var a,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),T(r,o)||(a="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=m(n)?u(e,c.value,null):u(e,c.value,n-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return "   "+e})).join("\n")):s=e.stylize("[Circular]","special")),v(a)){if(i&&o.match(/^\d+$/))return s;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"));}return a+": "+s}function d(e){return Array.isArray(e)}function h(e){return "boolean"==typeof e}function m(e){return null===e}function g(e){return "number"==typeof e}function y(e){return "string"==typeof e}function v(e){return void 0===e}function b(e){return _(e)&&"[object RegExp]"===S(e)}function _(e){return "object"==typeof e&&null!==e}function w(e){return _(e)&&"[object Date]"===S(e)}function x(e){return _(e)&&("[object Error]"===S(e)||e instanceof Error)}function C(e){return "function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function O(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!a[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;a[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r);};}else a[e]=function(){};return a[e]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=y,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=v,t.isRegExp=b,t.isObject=_,t.isDate=w,t.isError=x,t.isFunction=C,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var e=new Date,t=[O(e.getHours()),O(e.getMinutes()),O(e.getSeconds())].join(":");return [e.getDate(),j[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",A(),t.format.apply(t,arguments));},t.inherits=n(717),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Rt,setupPluginUserInstance:()=>zt});var e=n(520);n(856);const t=function(e,t){return e===t||e!=e&&t!=t},o=function(e,n){for(var r=e.length;r--;)if(t(e[r][0],n))return r;return -1};var i=Array.prototype.splice;function a(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}a.prototype.clear=function(){this.__data__=[],this.size=0;},a.prototype.delete=function(e){var t=this.__data__,n=o(t,e);return !(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))},a.prototype.get=function(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]},a.prototype.has=function(e){return o(this.__data__,e)>-1},a.prototype.set=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};const s=a,c="object"==typeof global&&global&&global.Object===Object&&global;var l="object"==typeof self&&self&&self.Object===Object&&self;const u=c||l||Function("return this")(),p=u.Symbol;var f=Object.prototype,d=f.hasOwnProperty,h=f.toString,m=p?p.toStringTag:void 0;var g=Object.prototype.toString;var y=p?p.toStringTag:void 0;const v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?function(e){var t=d.call(e,m),n=e[m];try{e[m]=void 0;var r=!0;}catch(e){}var o=h.call(e);return r&&(t?e[m]=n:delete e[m]),o}(e):function(e){return g.call(e)}(e)},b=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_=function(e){if(!b(e))return !1;var t=v(e);return "[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},w=u["__core-js_shared__"];var x,C=(x=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var S=Function.prototype.toString;var O=/^\[object .+?Constructor\]$/,j=Function.prototype,A=Object.prototype,T=j.toString,E=A.hasOwnProperty,k=RegExp("^"+T.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const F=function(e){return !(!b(e)||(t=e,C&&C in t))&&(_(e)?k:O).test(function(e){if(null!=e){try{return S.call(e)}catch(e){}try{return e+""}catch(e){}}return ""}(e));var t;},L=function(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return F(n)?n:void 0},I=L(u,"Map"),M=L(Object,"create");var N=Object.prototype.hasOwnProperty;var R=Object.prototype.hasOwnProperty;function z(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}z.prototype.clear=function(){this.__data__=M?M(null):{},this.size=0;},z.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},z.prototype.get=function(e){var t=this.__data__;if(M){var n=t[e];return "__lodash_hash_undefined__"===n?void 0:n}return N.call(t,e)?t[e]:void 0},z.prototype.has=function(e){var t=this.__data__;return M?void 0!==t[e]:R.call(t,e)},z.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=M&&void 0===t?"__lodash_hash_undefined__":t,this};const D=z,P=function(e,t){var n,r,o=e.__data__;return ("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map};function U(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}U.prototype.clear=function(){this.size=0,this.__data__={hash:new D,map:new(I||s),string:new D};},U.prototype.delete=function(e){var t=P(this,e).delete(e);return this.size-=t?1:0,t},U.prototype.get=function(e){return P(this,e).get(e)},U.prototype.has=function(e){return P(this,e).has(e)},U.prototype.set=function(e,t){var n=P(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};const $=U;function H(e){var t=this.__data__=new s(e);this.size=t.size;}H.prototype.clear=function(){this.__data__=new s,this.size=0;},H.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},H.prototype.get=function(e){return this.__data__.get(e)},H.prototype.has=function(e){return this.__data__.has(e)},H.prototype.set=function(e,t){var n=this.__data__;if(n instanceof s){var r=n.__data__;if(!I||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new $(r);}return n.set(e,t),this.size=n.size,this};const B=H,W=function(){try{var e=L(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),G=function(e,t,n){"__proto__"==t&&W?W(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n;},J=function(e,n,r){(void 0!==r&&!t(e[n],r)||void 0===r&&!(n in e))&&G(e,n,r);},q=function(e,t,n){for(var r=-1,o=Object(e),i=n(e),a=i.length;a--;){var s=i[++r];if(!1===t(o[s],s,o))break}return e};var Z="object"==typeof exports&&exports&&!exports.nodeType&&exports,V=Z&&"object"==typeof module&&module&&!module.nodeType&&module,K=V&&V.exports===Z?u.Buffer:void 0,Y=K?K.allocUnsafe:void 0;const X=u.Uint8Array,Q=function(e,t){var n,r,o=t?(n=e.buffer,r=new n.constructor(n.byteLength),new X(r).set(new X(n)),r):e.buffer;return new e.constructor(o,e.byteOffset,e.length)};var ee=Object.create;const te=function(){function e(){}return function(t){if(!b(t))return {};if(ee)return ee(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),ne=(re=Object.getPrototypeOf,oe=Object,function(e){return re(oe(e))});var re,oe,ie=Object.prototype;const ae=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ie)},se=function(e){return null!=e&&"object"==typeof e},ce=function(e){return se(e)&&"[object Arguments]"==v(e)};var le=Object.prototype,ue=le.hasOwnProperty,pe=le.propertyIsEnumerable;const fe=ce(function(){return arguments}())?ce:function(e){return se(e)&&ue.call(e,"callee")&&!pe.call(e,"callee")},de=Array.isArray,he=function(e){return "number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},me=function(e){return null!=e&&he(e.length)&&!_(e)};var ge="object"==typeof exports&&exports&&!exports.nodeType&&exports,ye=ge&&"object"==typeof module&&module&&!module.nodeType&&module,ve=ye&&ye.exports===ge?u.Buffer:void 0;const be=(ve?ve.isBuffer:void 0)||function(){return !1};var _e=Function.prototype,we=Object.prototype,xe=_e.toString,Ce=we.hasOwnProperty,Se=xe.call(Object);var Oe={};Oe["[object Float32Array]"]=Oe["[object Float64Array]"]=Oe["[object Int8Array]"]=Oe["[object Int16Array]"]=Oe["[object Int32Array]"]=Oe["[object Uint8Array]"]=Oe["[object Uint8ClampedArray]"]=Oe["[object Uint16Array]"]=Oe["[object Uint32Array]"]=!0,Oe["[object Arguments]"]=Oe["[object Array]"]=Oe["[object ArrayBuffer]"]=Oe["[object Boolean]"]=Oe["[object DataView]"]=Oe["[object Date]"]=Oe["[object Error]"]=Oe["[object Function]"]=Oe["[object Map]"]=Oe["[object Number]"]=Oe["[object Object]"]=Oe["[object RegExp]"]=Oe["[object Set]"]=Oe["[object String]"]=Oe["[object WeakMap]"]=!1;var je="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ae=je&&"object"==typeof module&&module&&!module.nodeType&&module,Te=Ae&&Ae.exports===je&&c.process,Ee=function(){try{return Ae&&Ae.require&&Ae.require("util").types||Te&&Te.binding&&Te.binding("util")}catch(e){}}(),ke=Ee&&Ee.isTypedArray;const Fe=ke?function(e){return function(t){return e(t)}}(ke):function(e){return se(e)&&he(e.length)&&!!Oe[v(e)]},Le=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]};var Ie=Object.prototype.hasOwnProperty;const Me=function(e,n,r){var o=e[n];Ie.call(e,n)&&t(o,r)&&(void 0!==r||n in e)||G(e,n,r);};var Ne=/^(?:0|[1-9]\d*)$/;const Re=function(e,t){var n=typeof e;return !!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Ne.test(e))&&e>-1&&e%1==0&&e<t};var ze=Object.prototype.hasOwnProperty;const De=function(e,t){var n=de(e),r=!n&&fe(e),o=!n&&!r&&be(e),i=!n&&!r&&!o&&Fe(e),a=n||r||o||i,s=a?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],c=s.length;for(var l in e)!t&&!ze.call(e,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Re(l,c))||s.push(l);return s};var Pe=Object.prototype.hasOwnProperty;const Ue=function(e){if(!b(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=ae(e),n=[];for(var r in e)("constructor"!=r||!t&&Pe.call(e,r))&&n.push(r);return n},$e=function(e){return me(e)?De(e,!0):Ue(e)},He=function(e){return function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],c=r?r(n[s],e[s],s,n,e):void 0;void 0===c&&(c=e[s]),o?G(n,s,c):Me(n,s,c);}return n}(e,$e(e))},Be=function(e,t,n,r,o,i,a){var s,c=Le(e,n),l=Le(t,n),u=a.get(l);if(u)J(e,n,u);else {var p=i?i(c,l,n+"",e,t,a):void 0,f=void 0===p;if(f){var d=de(l),h=!d&&be(l),m=!d&&!h&&Fe(l);p=l,d||h||m?de(c)?p=c:se(s=c)&&me(s)?p=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(c):h?(f=!1,p=function(e,t){if(t)return e.slice();var n=e.length,r=Y?Y(n):new e.constructor(n);return e.copy(r),r}(l,!0)):m?(f=!1,p=Q(l,!0)):p=[]:function(e){if(!se(e)||"[object Object]"!=v(e))return !1;var t=ne(e);if(null===t)return !0;var n=Ce.call(t,"constructor")&&t.constructor;return "function"==typeof n&&n instanceof n&&xe.call(n)==Se}(l)||fe(l)?(p=c,fe(c)?p=He(c):b(c)&&!_(c)||(p=function(e){return "function"!=typeof e.constructor||ae(e)?{}:te(ne(e))}(l))):f=!1;}f&&(a.set(l,p),o(p,l,r,i,a),a.delete(l)),J(e,n,p);}},We=function e(t,n,r,o,i){t!==n&&q(n,(function(a,s){if(i||(i=new B),b(a))Be(t,n,s,r,e,o,i);else {var c=o?o(Le(t,s),a,s+"",t,n,i):void 0;void 0===c&&(c=a),J(t,s,c);}}),$e);},Ge=function(e){return e},Je=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)};var qe=Math.max;const Ze=W?function(e,t){return W(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n;}:Ge;var Ve=Date.now;const Ke=function(e){var t=0,n=0;return function(){var r=Ve(),o=16-(r-n);if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(Ze),Ye=(Qe=function(e,t,n){We(e,t,n);},function(e,t){return Ke(function(e,t,n){return t=qe(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=qe(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=r[o];return s[t]=n(a),Je(e,this,s)}}(e,t,Ge),e+"")}((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=Qe.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(e,n,r){if(!b(r))return !1;var o=typeof n;return !!("number"==o?me(r)&&Re(n,r.length):"string"==o&&n in r)&&t(r[n],e)}(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var s=n[r];s&&Qe(e,s,r);}return e}))),Xe="win32"===navigator.platform.toLowerCase()?e.win32:e.posix;var Qe;const et=Ye;function tt(e,t){let n,r,o=!1;const i=t=>n=>{e&&clearTimeout(e),t(n),o=!0;},a=new Promise(((o,a)=>{n=i(o),r=i(a),e&&(e=setTimeout((()=>r(new Error(`[deferred timeout] ${t}`))),e));}));return {created:Date.now(),setTag:e=>t=e,resolve:n,reject:r,promise:a,get settled(){return o}}}var nt=n(227),rt=n.n(nt);const ot="application/x-postmate-v1+json";let it=0;const at={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},st=(e,t)=>!("string"==typeof t&&e.origin!==t||!e.data||"object"==typeof e.data&&!("postmate"in e.data)||e.data.type!==ot||!at[e.data.postmate]);class ct{parent;frame;child;events={};childOrigin;listener;constructor(e){this.parent=e.parent,this.frame=e.frame,this.child=e.child,this.childOrigin=e.childOrigin,this.listener=e=>{if(!st(e,this.childOrigin))return !1;const{data:t,name:n}=((e||{}).data||{}).value||{};"emit"===e.data.postmate&&n in this.events&&this.events[n].forEach((e=>{e.call(this,t);}));},this.parent.addEventListener("message",this.listener,!1);}get(e){return new Promise((t=>{const n=++it,r=e=>{e.data.uid===n&&"reply"===e.data.postmate&&(this.parent.removeEventListener("message",r,!1),t(e.data.value));};this.parent.addEventListener("message",r,!1),this.child.postMessage({postmate:"request",type:ot,property:e,uid:n},this.childOrigin);}))}call(e,t){this.child.postMessage({postmate:"call",type:ot,property:e,data:t},this.childOrigin);}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t);}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame);}}class lt{model;parent;parentOrigin;child;constructor(e){this.model=e.model,this.parent=e.parent,this.parentOrigin=e.parentOrigin,this.child=e.child,this.child.addEventListener("message",(e=>{if(!st(e,this.parentOrigin))return;const{property:t,uid:n,data:r}=e.data;"call"!==e.data.postmate?((e,t)=>{const n="function"==typeof e[t]?e[t]():e[t];return Promise.resolve(n)})(this.model,t).then((r=>{e.source.postMessage({property:t,postmate:"reply",type:ot,uid:n,value:r},e.origin);})):t in this.model&&"function"==typeof this.model[t]&&this.model[t](r);}));}emit(e,t){this.parent.postMessage({postmate:"emit",type:ot,value:{name:e,data:t}},this.parentOrigin);}}class ut{static debug=!1;container;parent;frame;child;childOrigin;url;model;static Model;constructor(e){this.container=e.container,this.url=e.url,this.parent=window,this.frame=document.createElement("iframe"),e.id&&(this.frame.id=e.id),e.name&&(this.frame.name=e.name),this.frame.classList.add.apply(this.frame.classList,e.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=e.model||{};}sendHandshake(e){const t=(e=>{const t=document.createElement("a");t.href=e;const n=t.protocol.length>4?t.protocol:window.location.protocol,r=t.host.length?"80"===t.port||"443"===t.port?t.hostname:t.host:window.location.host;return t.origin||`${n}//${r}`})(e=e||this.url);let n,r=0;return new Promise(((o,i)=>{const a=e=>!!st(e,t)&&("handshake-reply"===e.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",a,!1),this.childOrigin=e.origin,o(new ct(this))):i("Failed handshake"));this.parent.addEventListener("message",a,!1);const s=()=>{r++,this.child.postMessage({postmate:"handshake",type:ot,model:this.model},t),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{s(),n=setInterval(s,500);})),this.frame.src=e;}))}}class pt{child;model;parent;parentOrigin;constructor(e){this.child=window,this.model=e,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((e,t)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:ot},r.origin),this.parentOrigin=r.origin;const t=r.data.model;return t&&Object.keys(t).forEach((e=>{this.model[e]=t[e];})),e(new lt(this))}return t("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1);}))}}var ft=n(729),dt=n.n(ft);const{importHTML:ht,createSandboxContainer:mt}=window.QSandbox||{};function gt(e,t){return e.startsWith("http")?fetch(e,t):(e=e.replace("file://",""),new Promise((async(t,n)=>{try{const n=await window.apis.doAction(["readFile",e]);t({text:()=>n});}catch(e){console.error(e),n(e);}})))}class yt extends(dt()){_pluginLocal;_frame;_root;_loaded=!1;_unmountFns=[];constructor(e){super(),this._pluginLocal=e,e._dispose((()=>{this._unmount();}));}async load(){const{name:e,entry:t}=this._pluginLocal.options;if(this.loaded||!t)return;const{template:n,execScripts:r}=await ht(t,{fetch:gt});this._mount(n,document.body);const o=mt(e,{elementGetter:()=>this._root?.firstChild}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Rt(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0;}_mount(e,t){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${e}</div>`,t.appendChild(n),this.emit("mounted");}_unmount(){for(const e of this._unmountFns)e&&e.call(null);}destroy(){this.frame?.parentNode?.removeChild(this.frame);}get loaded(){return this._loaded}get document(){return this._root?.firstChild}get frame(){return this._frame}}const vt=rt()("LSPlugin:caller"),bt="#await#response#",_t="#lspmsg#error#",wt=e=>`#lspmsg#${e}`;class xt extends(dt()){_pluginLocal;_connected=!1;_parent;_child;_shadow;_status;_userModel={};_call;_callUserModel;_debugTag="";constructor(e){super(),this._pluginLocal=e,e&&(this._debugTag=e.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:e}=this._pluginLocal;e?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(e={}){if(this._connected)return;const t=this,n=null!=this._pluginLocal;let o=0;const i=new Map,a=tt(5e3),s=this._extendUserModel({"#lspmsg#ready#":async e=>{s[wt(e?.pid)]=({type:e,payload:n})=>{vt(`[call from host (_call)] ${this._debugTag}`,e,n),t.emit(e,n);},await a.resolve();},"#lspmsg#beforeunload#":async e=>{const n=tt(1e4);t.emit("beforeunload",Object.assign({actor:n},e)),await n.promise;},"#lspmsg#settings#":async({type:e,payload:n})=>{t.emit("settings:changed",n);},"#lspmsg#":async({ns:e,type:n,payload:r})=>{vt(`[call from host (async)] ${this._debugTag}`,e,n,r),e&&e.startsWith("hook")?t.emit(`${e}:${n}`,r):t.emit(n,r);},"#lspmsg#reply#":({_sync:e,result:t})=>{if(vt(`[sync reply] #${e}`,t),i.has(e)){const n=i.get(e);n&&(t?.hasOwnProperty(_t)?n.reject(t[_t]):n.resolve(t),i.delete(e));}},...e});if(n)return await a.promise,JSON.parse(JSON.stringify(this._pluginLocal?.toJSON()));const c=new pt(s).sendHandshakeReply();return this._status="pending",await c.then((e=>{this._child=e,this._connected=!0,this._call=async(t,n={},r)=>{if(r){const e=++o;i.set(e,r),n._sync=e,r.setTag(`async call #${e}`),vt("async call #",e);}return e.emit(wt(s.baseInfo.id),{type:t,payload:n}),r?.promise},this._callUserModel=async(e,t)=>{try{s[e](t);}catch(t){vt(`[model method] #${e} not existed`);}},setInterval((()=>{if(i.size>100)for(const[e,t]of i)t.settled&&i.delete(e);}),18e5);})).finally((()=>{this._status=void 0;})),await a.promise,s.baseInfo}async call(e,t={}){return this._call?.call(this,e,t)}async callAsync(e,t={}){const n=tt(1e4);return this._call?.call(this,e,t,n)}async callUserModel(e,t={}){return this._callUserModel?.call(this,e,t)}async _setupIframeSandbox(){const e=this._pluginLocal,t=e.id,n=new URL(e.options.entry);n.searchParams.set("__v__",e.options.version);const r=document.querySelector(`#${t}`);r&&r.parentElement.removeChild(r);const o=document.createElement("div");o.classList.add("lsp-iframe-sandbox-container"),o.id=t;try{const e=(await this._pluginLocal._loadLayoutsData())?.$$0;if(e){o.dataset.inited_layout="true";const{width:t,height:n,left:r,top:i}=e;Object.assign(o.style,{width:t+"px",height:n+"px",left:r+"px",top:i+"px"});}}catch(e){console.error("[Restore Layout Error]",e);}document.body.appendChild(o);let i,a=new ut({id:t+"_iframe",container:o,url:n.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(e.toJSON()))}}).sendHandshake();return this._status="pending",new Promise(((t,n)=>{i=setTimeout((()=>{n(new Error("handshake Timeout"));}),3e3),a.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(wt(e.id),(({type:e,payload:t})=>{vt("[call from plugin] ",e,t),this._pluginLocal?.emit(e,t||{});})),this._call=async(...t)=>{await n.call(wt(e.id),{type:t[0],payload:Object.assign(t[1]||{},{$$pid:e.id})});},this._callUserModel=async(e,t)=>{if(e.startsWith(bt))return await n.get(e.replace(bt,""));n.call(e,t);},t(null);})).catch((e=>{n(e);})).finally((()=>{clearTimeout(i);}));})).catch((e=>{throw vt("[iframe sandbox] error",e),e})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const e=this._pluginLocal,t=this._shadow=new yt(e);try{this._status="pending",await t.load(),this._connected=!0,this.emit("connected"),this._call=async(t,n={},r)=>(r&&(n.actor=r),this._pluginLocal?.emit(t,Object.assign(n,{$$pid:e.id})),r?.promise),this._callUserModel=async(...e)=>{let t=e[0];t?.startsWith(bt)&&(t=t.replace(bt,""));const n=e[1]||{},r=this._userModel[t];"function"==typeof r&&await r.call(null,n);};}catch(e){throw vt("[shadow sandbox] error",e),e}finally{this._status=void 0;}}_extendUserModel(e){return Object.assign(this._userModel,e)}_getSandboxIframeContainer(){return this._parent?.frame.parentNode}_getSandboxShadowContainer(){return this._shadow?.frame.parentNode}_getSandboxIframeRoot(){return this._parent?.frame}_getSandboxShadowRoot(){return this._shadow?.frame}set debugTag(e){this._debugTag=e;}async destroy(){let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),e?.parentNode.removeChild(e);}}var Ct=function(){return (Ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function St(e){return e.toLowerCase()}var Ot=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],jt=/[^A-Z0-9]+/gi;function At(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}class Tt{ctx;constructor(e){this.ctx=e;}get ctxId(){return this.ctx.baseInfo.id}setItem(e,t){return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,e,t]})}getItem(e){return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,e]})}removeItem(e){return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,e]})}clear(){return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId]})}hasItem(e){return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,e]})}}const Et=Symbol.for("proxy-continue"),kt=rt()("LSPlugin:user");function Ft(e,t,n){if("function"!=typeof n)return !1;const{key:r,label:o,desc:i,palette:a,keybinding:s}=t,c=`SimpleCommandHook${r}${++It}`;this.Editor["on"+c](n),this.caller?.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:r,label:o,type:e,desc:i,keybinding:s},["editor/hook",c]],a]});}const Lt={registerCommand:Ft,registerCommandPalette(e,t){const{key:n,label:r,keybinding:o}=e;return Ft.call(this,"global-palette-command",{key:n,label:r,palette:!0,keybinding:o},t)},registerUIItem(e,t){const n=this.baseInfo.id;this.caller?.call("api:call",{method:"register-plugin-ui-item",args:[n,e,t]});},registerPageMenuItem(e,t){if("function"!=typeof t)return !1;const n=e+"_"+this.baseInfo.id,r=e;Ft.call(this,"page-menu-item",{key:n,label:r},t);},setFullScreen(e){const t=(...e)=>this._callWin("setFullScreen",...e);"toggle"===e?this._callWin("isFullScreen").then((e=>{e?t():t(!0);})):e?t(!0):t();}};let It=0;const Mt={registerSlashCommand(e,t){kt("Register slash command #",this.baseInfo.id,e,t),"function"==typeof t&&(t=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",t]]),t=t.map((e=>{const[t,...n]=e;switch(t){case"editor/hook":let r=n[0],o=()=>{this.caller?.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${t}${++It}`;e[1]=i,this.Editor["on"+i](o);}return e})),this.caller?.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[e,t]]});},registerBlockContextMenuItem(e,t){if("function"!=typeof t)return !1;const n=e+"_"+this.baseInfo.id,r=e;Ft.call(this,"block-context-menu-item",{key:n,label:r},t);},scrollToBlockInPage(e,t){const n="block-content-"+t;this.App.pushState("page",{name:e},{anchor:n});}},Nt={};class Rt extends(dt()){_baseInfo;_caller;_settingsSchema;_connected=!1;_ui=new Map;_fileStorage;_beforeunloadCallback;constructor(e,t){super(),this._baseInfo=e,this._caller=t,t.on("sys:ui:visible",(e=>{e?.toggle&&this.toggleMainUI();})),t.on("settings:changed",(e=>{const t=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,e);this.emit("settings:changed",{...n},t);})),t.on("beforeunload",(async e=>{const{actor:n,...r}=e,o=this._beforeunloadCallback;try{o&&await o(r),n?.resolve(null);}catch(e){console.debug(`${t.debugTag} [beforeunload] `,e),n?.reject(e);}})),this._fileStorage=new Tt(this);}async ready(e,t){if(!this._connected)try{"function"==typeof e&&(t=e,e={});let n=await this._caller.connectToParent(e);this._connected=!0,n=et(this._baseInfo,n),this._settingsSchema&&(n.settings=function(e,t){const n=(t||[]).reduce(((e,t)=>("default"in t&&(e[t.key]=t.default),e)),{});return Object.assign(n,e)}(n.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema)),n?.id&&(this._caller.debugTag=`#${n.id} [${n.name}]`),t&&t.call(this,n);}catch(e){console.error("[LSPlugin Ready Error]",e);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(e){"function"==typeof e&&(this._beforeunloadCallback=e);}provideModel(e){return this.caller._extendUserModel(e),this}provideTheme(e){return this.caller.call("provider:theme",e),this}provideStyle(e){return this.caller.call("provider:style",e),this}provideUI(e){return this.caller.call("provider:ui",e),this}useSettingsSchema(e){return this.connected&&this.caller.call("settings:schema",{schema:e,isSync:!0}),this._settingsSchema=e,this}updateSettings(e){this.caller.call("settings:update",e);}onSettingsChanged(e){const t="settings:changed";return this.on(t,e),()=>this.off(t,e)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1});}setMainUIAttrs(e){this.caller.call("main-ui:attrs",e);}setMainUIInlineStyle(e){this.caller.call("main-ui:style",e);}hideMainUI(e){const t={key:0,visible:!1,cursor:e?.restoreEditingCursor};this.caller.call("main-ui:visible",t),this.emit("ui:visible:changed",t),this._ui.set(t.key,t);}showMainUI(e){const t={key:0,visible:!0,autoFocus:e?.autoFocus};this.caller.call("main-ui:visible",t),this.emit("ui:visible:changed",t),this._ui.set(t.key,t);}toggleMainUI(){const e=this._ui.get(0);e&&e.visible?this.hideMainUI():this.showMainUI();}get isMainUIVisible(){const e=this._ui.get(0);return Boolean(e&&e.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get settings(){return this.baseInfo?.settings}get caller(){return this._caller}resolveResourceFullUrl(e){if(this.ensureConnected(),e)return e=e.replace(/^[.\\/]+/,""),function(e,...t){try{const n=new URL(e);if(!n.origin)throw new Error(null);const r=Xe.join(e.substr(n.origin.length),...t);return n.origin+r}catch(n){return Xe.join(e,...t)}}(this._baseInfo.lsr,e)}_makeUserProxy(e,t){const n=this,r=this.caller;return new Proxy(e,{get(e,o,i){const a=e[o];return function(...e){if(!a||a.apply(n,e)===Et){if(t){const n=o.toString().match(/^(once|off|on)/i);if(null!=n){const o=n[0].toLowerCase(),a=n.input.slice(o.length),c=`hook:${t}:${i=a,void 0===s&&(s={}),function(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?Ot:n,o=t.stripRegexp,i=void 0===o?jt:o,a=t.transform,s=void 0===a?St:a,c=t.delimiter,l=void 0===c?" ":c,u=At(At(e,r,"$1\0$2"),i,"\0"),p=0,f=u.length;"\0"===u.charAt(p);)p++;for(;"\0"===u.charAt(f-1);)f--;return u.slice(p,f).split("\0").map(s).join(l)}(e,Ct({delimiter:"."},t))}(i,Ct({delimiter:"_"},s))}`,l=e[0];return r[o](c,l),"off"!==o?()=>r.off(c,l):void 0}}var i,s;return r.callAsync("api:call",{tag:t,method:o,args:e})}}}})}_callWin(...e){return this._caller.callAsync("api:call",{method:"_callMainWin",args:e})}get App(){return this._makeUserProxy(Lt,"app")}get Editor(){return this._makeUserProxy(Mt,"editor")}get DB(){return this._makeUserProxy(Nt)}get FileStorage(){return this._fileStorage}}function zt(e,t){return new Rt(e,t)}if(null==window.__LSP__HOST__){const e=new xt(null);window.logseq=zt({},e);}})(),r})()}));

const DEFAULT_LOCALE = "en";
let locale = DEFAULT_LOCALE;
let translations = {};
async function setup({ urlTemplate, defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale === defaultLocale)
        return;
    if (builtinTranslations?.[locale] != null) {
        translations = builtinTranslations;
    }
    else {
        const url = urlTemplate.replace("${locale}", locale);
        try {
            const res = await fetch(url);
            if (res.ok) {
                const remoteTranslations = await res.json();
                translations = { [locale]: remoteTranslations };
            }
        }
        catch (err) {
            console.error("translation fetch failed.\n", err);
        }
    }
}
function t(key, args) {
    const template = translations[locale]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

var zhCN = {
	"Export page": "导出页面",
	"Toggle document view": "开启关闭文档视图",
	"It defines whether or not to show the \"Linked Reference\" section.": "是否在文档视图中显示有关联的页面。",
	"It defines how many levels you want to unindent while in the document view. Mininum is 0.": "设置要在文档视图中去掉多少级的缩进。最小为0。",
	"It defines a shortcut for toggling the document view.": "设置切换文档视图状态的快捷键。"
};

const docSvg = `<svg class="kef-doc-svg" viewBox="0 0 20 20">
<path fill="none" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"></path>
<circle fill="none" cx="9.98" cy="9.446" r="1.629"></circle>
</svg>`;
const downloadSvg = `<svg class="kef-doc-svg" viewBox="0 0 20 20">
<path fill="none" d="M9.634,10.633c0.116,0.113,0.265,0.168,0.414,0.168c0.153,0,0.308-0.06,0.422-0.177l4.015-4.111c0.229-0.235,0.225-0.608-0.009-0.836c-0.232-0.229-0.606-0.222-0.836,0.009l-3.604,3.689L6.35,5.772C6.115,5.543,5.744,5.55,5.514,5.781C5.285,6.015,5.29,6.39,5.522,6.617L9.634,10.633z"></path>
<path fill="none" d="M17.737,9.815c-0.327,0-0.592,0.265-0.592,0.591v2.903H2.855v-2.903c0-0.327-0.264-0.591-0.591-0.591c-0.327,0-0.591,0.265-0.591,0.591V13.9c0,0.328,0.264,0.592,0.591,0.592h15.473c0.327,0,0.591-0.264,0.591-0.592v-3.494C18.328,10.08,18.064,9.815,17.737,9.815z"></path>
</svg>`;
const backTopSvg = `<svg class="kef-doc-inline-icon" t="1658397135915" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1599" width="200" height="200"><path d="M904 692c0 8.189-3.124 16.379-9.372 22.628-12.497 12.496-32.759 12.496-45.256 0L512 377.255 174.628 714.628c-12.497 12.496-32.758 12.496-45.255 0-12.497-12.498-12.497-32.758 0-45.256l360-360c12.497-12.496 32.758-12.496 45.255 0l360 360C900.876 675.621 904 683.811 904 692z" p-id="1600"></path></svg>`;
const EVENTS_TO_PREVENT = [
    "mousedown",
    "mousemove",
    "mouseup",
    "click",
    "keydown", 
];
const KEYS_TO_PREVENT = new Set([
    "Enter",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Backspace", 
]);
let uiModalOverlay = null;
function preventEditing(e) {
    // keydown
    if (e.type === "keydown") {
        if (KEYS_TO_PREVENT.has(e.key) && uiModalOverlay?.classList.contains("opacity-0")) {
            e.stopPropagation();
        }
        return;
    }
    // mouse and click
    const path = e.composedPath();
    // Let go of any links.
    if (path[0]?.tagName.toLowerCase() === "a") return;
    for(let i = 0; i < path.length; i++){
        // Let go of block refs.
        if (path[i].classList?.contains("block-ref")) return;
        // Let go of tocgen links.
        if (path[i].classList?.contains("kef-tocgen-page")) return;
        if (path[i].classList?.contains("kef-tocgen-block")) return;
        // Let go of CodeMirror code blocks.
        if (path[i].classList?.contains("CodeMirror")) return;
        if (path[i].id === "left-container") {
            if (path[i - 1]?.id === "main-container") {
                if (parent.document.querySelector(".cp__plugins-page") == null) {
                    // Stop if in main container but in plugins page.
                    e.stopPropagation();
                }
            }
            return;
        }
    }
}
async function prepareDoc() {
    const graphName = (await logseq.App.getCurrentGraph()).name;
    const mainContent = parent.document.getElementById("main-content-container");
    const html = parent.document.documentElement.cloneNode();
    const head = parent.document.head.cloneNode(true);
    const body = parent.document.body.cloneNode();
    const rootDiv = parent.document.body.firstElementChild.cloneNode();
    const themeDiv = parent.document.body.firstElementChild.firstElementChild.cloneNode();
    const themeInnerDiv = parent.document.body.firstElementChild.firstElementChild.firstElementChild.cloneNode();
    const appDiv = parent.document.getElementById("app-container").cloneNode();
    const mainDiv = mainContent.cloneNode();
    for (const node of head.children){
        if (node.rel === "stylesheet" && node.attributes.href.value.startsWith(".")) {
            node.attributes.href.value = node.href;
        } else if (node.rel === "stylesheet" && node.attributes.href.value.startsWith("assets://")) {
            node.attributes.href.value = node.attributes.href.value.replace("assets://", "file://");
        } else if (node.nodeName.toLowerCase() === "script" && node.attributes.src.value.startsWith(".")) {
            node.attributes.src.value = node.src;
        }
    }
    html.classList.add("kef-doc-exported");
    html.appendChild(head);
    html.appendChild(body);
    body.appendChild(rootDiv);
    rootDiv.appendChild(themeDiv);
    themeDiv.appendChild(themeInnerDiv);
    themeInnerDiv.appendChild(appDiv);
    appDiv.appendChild(mainDiv);
    // Generate static images for canvases.
    const canvases = mainContent.querySelectorAll("canvas");
    for (const canvas of canvases){
        const img = parent.document.createElement("img");
        img.src = canvas.toDataURL();
        img.style.transform = "translateX(-100%)";
        canvas.parentElement.parentElement.append(img);
    }
    mainDiv.innerHTML = parent.document.getElementById("main-content-container").innerHTML;
    // Remove static images generated for canvases.
    for (const canvas1 of canvases){
        canvas1.parentElement.parentElement.lastElementChild.remove();
    }
    const imgs = mainDiv.querySelectorAll("img");
    for (const img of imgs){
        if (img.src.startsWith("assets://")) {
            img.src = img.src.replace("assets://", "file://");
        }
    }
    // Handle links
    const pageA = mainDiv.querySelector("a.page-title");
    if (pageA) {
        pageA.href = `logseq://graph/${graphName}?page=${encodeURIComponent(pageA.firstElementChild.dataset.ref)}`;
    }
    const pageRefs = mainDiv.querySelectorAll("a[data-ref]");
    for (const a of pageRefs){
        a.href = `logseq://graph/${graphName}?page=${encodeURIComponent(a.dataset.ref)}`;
    }
    const blockRefs = mainDiv.querySelectorAll(".block-ref > [blockid]");
    for (const div of blockRefs){
        const a = parent.document.createElement("a");
        a.href = `logseq://graph/${graphName}?block-id=${div.getAttribute("blockid")}`;
        div.replaceWith(a);
        a.appendChild(div);
    }
    prepareForTocGen(graphName, mainDiv);
    return `<!DOCTYPE html>\n${html.outerHTML}`;
}
function prepareForTocGen(graphName, mainDiv) {
    prepareTocs(mainDiv);
    prepareBlockRefs(graphName, mainDiv);
    preparePageRefs(graphName, mainDiv);
}
function prepareTocs(mainDiv) {
    const tocRenderers = mainDiv.querySelectorAll("[id^='logseq-tocgen--toc-slot']");
    for (const renderer of tocRenderers){
        const ancestor = renderer.closest("[level]");
        if (ancestor) {
            ancestor.replaceWith(renderer);
            const anchor = parent.document.createElement("a");
            anchor.name = renderer.id;
            renderer.insertAdjacentElement("beforebegin", anchor);
        }
    }
}
function prepareBlockRefs(graphName, mainDiv) {
    const tocBlockRefs = mainDiv.querySelectorAll(".kef-tocgen-block [data-ref], .kef-tocgen-page .block[data-ref]");
    for (const blockRef of tocBlockRefs){
        writeAnchor(blockRef, mainDiv);
        wrapBlockWithLink(blockRef, graphName, mainDiv);
    }
}
function writeAnchor(blockRef, mainDiv) {
    const toc = blockRef.closest("[id^='logseq-tocgen--toc-slot']");
    const block = mainDiv.querySelector(`.block-content[blockid="${blockRef.dataset.ref}"] > div > div`);
    if (block == null) return;
    if (toc != null) {
        const backToToc = parent.document.createElement("a");
        backToToc.innerHTML = backTopSvg;
        backToToc.style.marginLeft = "5px";
        backToToc.style.marginTop = "-3px";
        backToToc.setAttribute("href", `#${toc.id}`);
        block.appendChild(backToToc);
        block.style.display = "inline-flex";
        block.style.alignItems = "center";
    }
    const anchor = parent.document.createElement("a");
    anchor.name = block.parentElement.parentElement.getAttribute("blockid");
    block.insertAdjacentElement("beforebegin", anchor);
}
function wrapBlockWithLink(blockRef, graphName, mainDiv) {
    const ref = blockRef.dataset.ref;
    const destEl = mainDiv.querySelector(`[class~="${ref}"]`);
    const a = parent.document.createElement("a");
    if (destEl) {
        a.href = `#${ref}`;
    } else {
        a.href = `logseq://graph/${graphName}?block-id=${ref}`;
    }
    blockRef.replaceWith(a);
    a.appendChild(blockRef);
}
function preparePageRefs(graphName, mainDiv) {
    const tocPageRefs = mainDiv.querySelectorAll(".kef-tocgen-page .page[data-ref]");
    for (const pageRef of tocPageRefs){
        wrapPageWithLink(pageRef, graphName);
    }
}
function wrapPageWithLink(pageRef, graphName) {
    const a = parent.document.createElement("a");
    a.href = `logseq://graph/${graphName}?page=${encodeURIComponent(pageRef.dataset.ref)}`;
    pageRef.replaceWith(a);
    a.appendChild(pageRef);
}
function saveDoc(doc) {
    const blob = new Blob([
        doc
    ], {
        type: "text/plain"
    });
    const link = document.createElement("a");
    link.download = "doc.html";
    link.href = URL.createObjectURL(blob);
    link.onclick = ()=>URL.revokeObjectURL(blob);
    link.click();
}
function injectStyles() {
    // Unindent all blocks by default.
    const unindentLevel = +logseq.settings?.unindentLevel === 0 ? 0 : Math.max(0, +logseq.settings?.unindentLevel || 999);
    logseq.provideStyle({
        key: "kef-doc-base",
        style: `
      .kef-doc-container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      }
      .kef-doc-icon {
        display: flex;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
      }
      .kef-doc-svg {
        width: 20px;
        height: 20px;
      }
      .kef-doc-svg path,
      .kef-doc-svg polygon,
      .kef-doc-svg rect {
        fill: var(--ls-icon-color);
      }
      .kef-doc-svg circle {
        stroke: var(--ls-icon-color);
        stroke-width: 1;
      }
      .kef-doc-icon:hover {
        background: var(--ls-tertiary-background-color);
      }
      .kef-doc-icon:hover .kef-doc-svg path,
      .kef-doc-icon:hover .kef-doc-svg polygon,
      .kef-doc-icon:hover .kef-doc-svg rect {
        fill: var(--ls-primary-text-color);
      }
      .kef-doc-icon:hover .kef-doc-svg circle {
        stroke: var(--ls-primary-text-color);
      }
      .kef-doc .kef-doc-icon:not(.kef-doc-download) path,
      .kef-doc .kef-doc-icon:not(.kef-doc-download) polygon,
      .kef-doc .kef-doc-icon:not(.kef-doc-download) react {
        fill: var(--ls-link-ref-text-color);
      }
      .kef-doc .kef-doc-icon:not(.kef-doc-download) circle {
        stroke: var(--ls-link-ref-text-color);
      }
      .kef-doc .kef-doc-icon:hover:not(.kef-doc-download) path,
      .kef-doc .kef-doc-icon:hover:not(.kef-doc-download) polygon,
      .kef-doc .kef-doc-icon:hover:not(.kef-doc-download) react {
        fill: var(--ls-link-ref-text-color);
      }
      .kef-doc .kef-doc-icon:hover:not(.kef-doc-download) circle {
        stroke: var(--ls-link-ref-text-color);
      }
      .kef-doc-download {
        display: none;
      }
      .kef-doc .kef-doc-download {
        display: flex;
      }
      .kef-doc-inline-icon {
        width: 15px;
        height: 15px;
        fill: gray;
      }

      .kef-doc ~ .cp__sidebar-help-btn {
        display: none;
      }
      .kef-doc.kef-doc-show-refs #main-content-container .page.relative .lazy-visibility,
      .kef-doc.kef-doc-show-refs #main-content-container .page.relative .references {
        display: block;
      }
      .kef-doc .open-block-ref-link {
        display: none;
      }
      .kef-doc .draw .my-1 {
        display: none;
      }
      .kef-doc .excalidraw > .layer-ui__wrapper {
        display: none;
      }
      .kef-doc .excalidraw > .excalidraw-textEditorContainer {
        display: none;
      }
      .kef-doc #main-content-container .page.relative .references,
      .kef-doc #main-content-container .page.relative .page-hierarchy,
      .kef-doc #main-content-container .page.relative .lazy-visibility {
        display: none;
      }
      .kef-doc .cp__sidebar-main-content > div {
        margin-bottom: 0 !important;
      }
      .kef-doc #main-content-container .block-children-left-border {
        display: none;
      }
      .kef-doc #main-content-container .block-children {
        border-left: 0 !important;
      }
      .kef-doc #main-content-container .block-content-wrapper > .flex-row > *:not(:first-child) {
        display: none;
      }
      .kef-doc #main-content-container .kef-tocgen-to {
        display: none;
      }
    `
    });
    if (unindentLevel > 0) {
        logseq.provideStyle({
            key: "kef-doc-unindent",
            style: `
        .kef-doc .ls-page-title {
          padding-left: 0;
        }
        .kef-doc #main-content-container .page-blocks-inner {
          margin-left: 0 !important;
        }
        .kef-doc #main-content-container .page.relative > .relative:first-child > div:first-child > div.mb-4 {
          display: none;
        }
        .kef-doc #main-content-container .block-content {
          margin-bottom: 0.4em;
        }
        .kef-doc #main-content-container span.inline {
          line-height: 1.6;
        }
        .kef-doc #main-content-container .tag {
          display: none !important;
        }
        .kef-doc #main-content-container div[blockid][haschild] > div:first-child > div:first-child {
          display: none;
        }
        .kef-doc #main-content-container .block-children-container {
          margin-left: 0 !important;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ul"'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child > .block-control,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child > .block-control,
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ol"'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child > .block-control,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child > .block-control {
          display: none;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ul"'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child,
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ol"'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol'] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul-nested'] div[blockid] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol-nested'] div[blockid] > .block-children-container > .block-children > div[blockid] > div:first-child > div:first-child {
          display: flex;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ul"'] > .block-children-container > .block-children > div[blockid] > .block-children-container,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul'] > .block-children-container > .block-children > div[blockid] > .block-children-container {
          margin-left: 22px !important;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul-nested'] > .block-children-container .block-children > div[blockid] > .block-children-container {
          margin-left: 22px !important;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ol"'] > .block-children-container > .block-children > div[blockid] > .block-children-container,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol'] > .block-children-container > .block-children > div[blockid] > .block-children-container {
          margin-left: 29px !important;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol-nested'] > .block-children-container > .block-children > div[blockid] > .block-children-container {
          margin-left: 0 !important;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ul"'] div[blockid] .block-control,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul'] div[blockid] .block-control,
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ol"'] div[blockid] .block-control,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol'] div[blockid] .block-control {
          min-width: 0;
        }
        .kef-doc #main-content-container div[level="${unindentLevel}"] > .block-children-container .block-children-container {
          margin-left: 29px !important;
        }
        .kef-doc #main-content-container div[level="${unindentLevel}"] > .block-children-container div[blockid] > div:first-child > div:first-child {
          display: flex;
        }
        .kef-doc #main-content-container div[level="${unindentLevel}"] div[blockid] .block-control {
          min-width: 11px;
        }
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ul"'] div[blockid] .control-show,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ul'] div[blockid] .control-show,
        .kef-doc #main-content-container div[blockid][data-refs-self*='"ol"'] div[blockid] .control-show,
        .kef-doc #main-content-container div[blockid][data-refs-self*='".ol'] div[blockid] .control-show {
          display: none;
        }
      `
        });
    } else {
        logseq.provideStyle({
            key: "kef-doc-unindent",
            style: "/**/"
        });
    }
}
const model = {
    async toggleDocView () {
        const appContainer = parent.document.getElementById("app-container");
        if (appContainer.classList.contains("kef-doc")) {
            for (const event of EVENTS_TO_PREVENT){
                parent.document.body.removeEventListener(event, preventEditing, {
                    capture: true
                });
            }
            appContainer.classList.remove("kef-doc", "kef-doc-show-refs");
            parent.document.body.style.height = null;
        } else {
            await logseq.Editor.exitEditingMode();
            parent.document.body.style.height = "auto";
            appContainer.classList.add(...[
                "kef-doc",
                ...logseq.settings?.showReferences ? [
                    "kef-doc-show-refs"
                ] : [], 
            ]);
            for (const event of EVENTS_TO_PREVENT){
                parent.document.body.addEventListener(event, preventEditing, {
                    capture: true,
                    passive: true
                });
            }
        }
    },
    async startDownload () {
        const doc = await prepareDoc();
        saveDoc(doc);
    }
};
async function main() {
    const l10nSetup = setup({
        urlTemplate: "https://raw.githubusercontent.com/sethyuan/logseq-plugin-doc/master/src/translations/${locale}.json",
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });
    uiModalOverlay = parent.document.querySelector(".ui__modal-overlay");
    injectStyles();
    await l10nSetup;
    logseq.App.registerUIItem("toolbar", {
        key: t("doc-view-exporter"),
        template: `<div class="kef-doc-container"><a class="kef-doc-icon kef-doc-download" data-on-click="startDownload" title="${t("Export page")}">${downloadSvg}</a>
    <a class="kef-doc-icon" data-on-click="toggleDocView" title="${t("Toggle document view")}">${docSvg}</a></div>`
    });
    logseq.App.registerCommandPalette({
        key: "toggle-doc-view",
        label: t("Toggle document view"),
        ...logseq.settings?.shortcut && {
            keybinding: {
                binding: logseq.settings.shortcut
            }
        }
    }, (e)=>{
        model.toggleDocView();
    });
    logseq.beforeunload(()=>{
        for (const event of EVENTS_TO_PREVENT){
            parent.document.body.removeEventListener(event, preventEditing, {
                capture: true
            });
        }
        const appContainer = parent.document.getElementById("app-container");
        appContainer.classList.remove("kef-doc");
        parent.document.body.style.overflow = null;
    });
    logseq.useSettingsSchema([
        {
            key: "showReferences",
            type: "boolean",
            default: false,
            description: t('It defines whether or not to show the "Linked Reference" section.')
        },
        {
            key: "unindentLevel",
            type: "number",
            default: 999,
            description: t("It defines how many levels you want to unindent while in the document view. Mininum is 0.")
        },
        {
            key: "shortcut",
            type: "string",
            default: "mod+shift+d",
            description: t("It defines a shortcut for toggling the document view.")
        }, 
    ]);
    logseq.onSettingsChanged((current, old)=>{
        injectStyles();
    });
    console.log("#doc loaded");
}
logseq.ready(model, main).catch(console.error);
