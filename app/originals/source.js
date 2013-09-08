/*! jQuery v1.7.2 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */

jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Tabs 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */
(function(a){var tabId=0;a.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable}this._tabify(true)},_setData:function(b,c){if(b=="selected"){if(this.options.collapsible&&c==this.options.selected){return}this.select(c)}else{this.options[b]=c;if(b=="deselectable"){this.options.collapsible=c}this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+(++tabId)},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a.data(this.list[0]));return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(c,b){return{tab:c,panel:b,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){this.list=this.element.children("ul:first");this.lis=a("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);var p=this,d=this.options;var c=/^#.+/;this.anchors.each(function(r,o){var q=a(o).attr("href");var s=q.split("#")[0],u;if(s&&(s===location.toString().split("#")[0]||(u=a("base")[0])&&s===u.href)){q=o.hash;o.href=q}if(c.test(q)){p.panels=p.panels.add(p._sanitizeSelector(q))}else{if(q!="#"){a.data(o,"href.tabs",q);a.data(o,"load.tabs",q.replace(/#.*$/,""));var w=p._tabId(o);o.href="#"+w;var v=a("#"+w);if(!v.length){v=a(d.panelTemplate).attr("id",w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(p.panels[r-1]||p.list);v.data("destroy.tabs",true)}p.panels=p.panels.add(v)}else{d.disabled.push(r)}}});if(n){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(d.selected===undefined){if(location.hash){this.anchors.each(function(q,o){if(o.hash==location.hash){d.selected=q;return false}})}if(typeof d.selected!="number"&&d.cookie){d.selected=parseInt(p._cookie(),10)}if(typeof d.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}d.selected=d.selected||0}else{if(d.selected===null){d.selected=-1}}d.selected=((d.selected>=0&&this.anchors[d.selected])||d.selected<0)?d.selected:0;d.disabled=a.unique(d.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(q,o){return p.lis.index(q)}))).sort();if(a.inArray(d.selected,d.disabled)!=-1){d.disabled.splice(a.inArray(d.selected,d.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(d.selected>=0&&this.anchors.length){this.panels.eq(d.selected).removeClass("ui-tabs-hide");this.lis.eq(d.selected).addClass("ui-tabs-selected ui-state-active");p.element.queue("tabs",function(){p._trigger("show",null,p._ui(p.anchors[d.selected],p.panels[d.selected]))});this.load(d.selected)}a(window).bind("unload",function(){p.lis.add(p.anchors).unbind(".tabs");p.lis=p.anchors=p.panels=null})}else{d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[d.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(d.cookie){this._cookie(d.selected,d.cookie)}for(var g=0,m;(m=this.lis[g]);g++){a(m)[a.inArray(g,d.disabled)!=-1&&!a(m).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(d.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(d.event!="mouseover"){var f=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var j=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){f("hover",a(this))});this.lis.bind("mouseout.tabs",function(){j("hover",a(this))});this.anchors.bind("focus.tabs",function(){f("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var b,h;if(d.fx){if(a.isArray(d.fx)){b=d.fx[0];h=d.fx[1]}else{b=h=d.fx}}function e(i,o){i.css({display:""});if(a.browser.msie&&o.opacity){i[0].style.removeAttribute("filter")}}var k=h?function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){e(o,h);p._trigger("show",null,p._ui(i,o[0]))})}:function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");p._trigger("show",null,p._ui(i,o[0]))};var l=b?function(o,i){i.animate(b,b.duration||"normal",function(){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");e(i,b);p.element.dequeue("tabs")})}:function(o,i,q){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");p.element.dequeue("tabs")};this.anchors.bind(d.event+".tabs",function(){var o=this,r=a(this).closest("li"),i=p.panels.filter(":not(.ui-tabs-hide)"),q=a(p._sanitizeSelector(this.hash));if((r.hasClass("ui-tabs-selected")&&!d.collapsible)||r.hasClass("ui-state-disabled")||r.hasClass("ui-state-processing")||p._trigger("select",null,p._ui(this,q[0]))===false){this.blur();return false}d.selected=p.anchors.index(this);p.abort();if(d.collapsible){if(r.hasClass("ui-tabs-selected")){d.selected=-1;if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){l(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this));this.blur();return false}}}if(d.cookie){p._cookie(d.selected,d.cookie)}if(q.length){if(i.length){p.element.queue("tabs",function(){l(o,i)})}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(a.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var c=a.data(this,"href.tabs");if(c){this.href=c}var d=a(this).unbind(".tabs");a.each(["href","load","cache"],function(e,f){d.removeData(f+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(a.data(this,"destroy.tabs")){a(this).remove()}else{a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(b.cookie){this._cookie(null,b.cookie)}},add:function(e,d,c){if(c===undefined){c=this.anchors.length}var b=this,g=this.options,i=a(g.tabTemplate.replace(/#\{href\}/g,e).replace(/#\{label\}/g,d)),h=!e.indexOf("#")?e.replace("#",""):this._tabId(a("a",i)[0]);i.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var f=a("#"+h);if(!f.length){f=a(g.panelTemplate).attr("id",h).data("destroy.tabs",true)}f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(c>=this.lis.length){i.appendTo(this.list);f.appendTo(this.list[0].parentNode)}else{i.insertBefore(this.lis[c]);f.insertBefore(this.panels[c])}g.disabled=a.map(g.disabled,function(k,j){return k>=c?++k:k});this._tabify();if(this.anchors.length==1){i.addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[c],this.panels[c]))},remove:function(b){var d=this.options,e=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();if(e.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(b+(b+1<this.anchors.length?1:-1))}d.disabled=a.map(a.grep(d.disabled,function(g,f){return g!=b}),function(g,f){return g>=b?--g:g});this._tabify();this._trigger("remove",null,this._ui(e.find("a")[0],c[0]))},enable:function(b){var c=this.options;if(a.inArray(b,c.disabled)==-1){return}this.lis.eq(b).removeClass("ui-state-disabled");c.disabled=a.grep(c.disabled,function(e,d){return e!=b});this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]))},disable:function(c){var b=this,d=this.options;if(c!=d.selected){this.lis.eq(c).addClass("ui-state-disabled");d.disabled.push(c);d.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}},select:function(b){if(typeof b=="string"){b=this.anchors.index(this.anchors.filter("[href$="+b+"]"))}else{if(b===null){b=-1}}if(b==-1&&this.options.collapsible){b=this.options.selected}this.anchors.eq(b).trigger(this.options.event+".tabs")},load:function(e){var c=this,g=this.options,b=this.anchors.eq(e)[0],d=a.data(b,"load.tabs");this.abort();if(!d||this.element.queue("tabs").length!==0&&a.data(b,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(e).addClass("ui-state-processing");if(g.spinner){var f=a("span",b);f.data("label.tabs",f.html()).html(g.spinner)}this.xhr=a.ajax(a.extend({},g.ajaxOptions,{url:d,success:function(i,h){a(c._sanitizeSelector(b.hash)).html(i);c._cleanup();if(g.cache){a.data(b,"cache.tabs",true)}c._trigger("load",null,c._ui(c.anchors[e],c.panels[e]));try{g.ajaxOptions.success(i,h)}catch(j){}c.element.dequeue("tabs")}}))},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup()},url:function(c,b){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",b)},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(d,f){var b=this,g=this.options;var c=b._rotate||(b._rotate=function(h){clearTimeout(b.rotation);b.rotation=setTimeout(function(){var i=g.selected;b.select(++i<b.anchors.length?i:0)},d);if(h){h.stopPropagation()}});var e=b._unrotate||(b._unrotate=!f?function(h){if(h.clientX){b.rotate(null)}}:function(h){t=g.selected;c()});if(d){this.element.bind("tabsshow",c);this.anchors.bind(g.event+".tabs",e);c()}else{clearTimeout(b.rotation);this.element.unbind("tabsshow",c);this.anchors.unbind(g.event+".tabs",e);delete this._rotate;delete this._unrotate}}})})(jQuery);;
/*
 * jquery.qtip. The jQuery tooltip plugin
 *
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : February 2009
 * Version : 1.0.0-rc3
 * Released: Tuesday 12th May, 2009 - 00:00
 * Debug: jquery.qtip.debug.js
 */

(function(f){f.fn.qtip=function(B,u){var y,t,A,s,x,w,v,z;if(typeof B=="string"){if(typeof f(this).data("qtip")!=="object"){f.fn.qtip.log.error.call(self,1,f.fn.qtip.constants.NO_TOOLTIP_PRESENT,false)}if(B=="api"){return f(this).data("qtip").interfaces[f(this).data("qtip").current]}else{if(B=="interfaces"){return f(this).data("qtip").interfaces}}}else{if(!B){B={}}if(typeof B.content!=="object"||(B.content.jquery&&B.content.length>0)){B.content={text:B.content}}if(typeof B.content.title!=="object"){B.content.title={text:B.content.title}}if(typeof B.position!=="object"){B.position={corner:B.position}}if(typeof B.position.corner!=="object"){B.position.corner={target:B.position.corner,tooltip:B.position.corner}}if(typeof B.show!=="object"){B.show={when:B.show}}if(typeof B.show.when!=="object"){B.show.when={event:B.show.when}}if(typeof B.show.effect!=="object"){B.show.effect={type:B.show.effect}}if(typeof B.hide!=="object"){B.hide={when:B.hide}}if(typeof B.hide.when!=="object"){B.hide.when={event:B.hide.when}}if(typeof B.hide.effect!=="object"){B.hide.effect={type:B.hide.effect}}if(typeof B.style!=="object"){B.style={name:B.style}}B.style=c(B.style);s=f.extend(true,{},f.fn.qtip.defaults,B);s.style=a.call({options:s},s.style);s.user=f.extend(true,{},B)}return f(this).each(function(){if(typeof B=="string"){w=B.toLowerCase();A=f(this).qtip("interfaces");if(typeof A=="object"){if(u===true&&w=="destroy"){while(A.length>0){A[A.length-1].destroy()}}else{if(u!==true){A=[f(this).qtip("api")]}for(y=0;y<A.length;y++){if(w=="destroy"){A[y].destroy()}else{if(A[y].status.rendered===true){if(w=="show"){A[y].show()}else{if(w=="hide"){A[y].hide()}else{if(w=="focus"){A[y].focus()}else{if(w=="disable"){A[y].disable(true)}else{if(w=="enable"){A[y].disable(false)}}}}}}}}}}}else{v=f.extend(true,{},s);v.hide.effect.length=s.hide.effect.length;v.show.effect.length=s.show.effect.length;if(v.position.container===false){v.position.container=f(document.body)}if(v.position.target===false){v.position.target=f(this)}if(v.show.when.target===false){v.show.when.target=f(this)}if(v.hide.when.target===false){v.hide.when.target=f(this)}t=f.fn.qtip.interfaces.length;for(y=0;y<t;y++){if(typeof f.fn.qtip.interfaces[y]=="undefined"){t=y;break}}x=new d(f(this),v,t);f.fn.qtip.interfaces[t]=x;if(typeof f(this).data("qtip")=="object"){if(typeof f(this).attr("qtip")==="undefined"){f(this).data("qtip").current=f(this).data("qtip").interfaces.length}f(this).data("qtip").interfaces.push(x)}else{f(this).data("qtip",{current:0,interfaces:[x]})}if(v.content.prerender===false&&v.show.when.event!==false&&v.show.ready!==true){v.show.when.target.bind(v.show.when.event+".qtip-"+t+"-create",{qtip:t},function(C){z=f.fn.qtip.interfaces[C.data.qtip];z.options.show.when.target.unbind(z.options.show.when.event+".qtip-"+C.data.qtip+"-create");z.cache.mouse={x:C.pageX,y:C.pageY};p.call(z);z.options.show.when.target.trigger(z.options.show.when.event)})}else{x.cache.mouse={x:v.show.when.target.offset().left,y:v.show.when.target.offset().top};p.call(x)}}})};function d(u,t,v){var s=this;s.id=v;s.options=t;s.status={animated:false,rendered:false,disabled:false,focused:false};s.elements={target:u.addClass(s.options.style.classes.target),tooltip:null,wrapper:null,content:null,contentWrapper:null,title:null,button:null,tip:null,bgiframe:null};s.cache={mouse:{},position:{},toggle:0};s.timers={};f.extend(s,s.options.api,{show:function(y){var x,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"show")}if(s.elements.tooltip.css("display")!=="none"){return s}s.elements.tooltip.stop(true,false);x=s.beforeShow.call(s,y);if(x===false){return s}function w(){if(s.options.position.type!=="static"){s.focus()}s.onShow.call(s,y);if(f.browser.msie){s.elements.tooltip.get(0).style.removeAttribute("filter")}}s.cache.toggle=1;if(s.options.position.type!=="static"){s.updatePosition(y,(s.options.show.effect.length>0))}if(typeof s.options.show.solo=="object"){z=f(s.options.show.solo)}else{if(s.options.show.solo===true){z=f("div.qtip").not(s.elements.tooltip)}}if(z){z.each(function(){if(f(this).qtip("api").status.rendered===true){f(this).qtip("api").hide()}})}if(typeof s.options.show.effect.type=="function"){s.options.show.effect.type.call(s.elements.tooltip,s.options.show.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.show.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeIn(s.options.show.effect.length,w);break;case"slide":s.elements.tooltip.slideDown(s.options.show.effect.length,function(){w();if(s.options.position.type!=="static"){s.updatePosition(y,true)}});break;case"grow":s.elements.tooltip.show(s.options.show.effect.length,w);break;default:s.elements.tooltip.show(null,w);break}s.elements.tooltip.addClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_SHOWN,"show")},hide:function(y){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"hide")}else{if(s.elements.tooltip.css("display")==="none"){return s}}clearTimeout(s.timers.show);s.elements.tooltip.stop(true,false);x=s.beforeHide.call(s,y);if(x===false){return s}function w(){s.onHide.call(s,y)}s.cache.toggle=0;if(typeof s.options.hide.effect.type=="function"){s.options.hide.effect.type.call(s.elements.tooltip,s.options.hide.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.hide.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeOut(s.options.hide.effect.length,w);break;case"slide":s.elements.tooltip.slideUp(s.options.hide.effect.length,w);break;case"grow":s.elements.tooltip.hide(s.options.hide.effect.length,w);break;default:s.elements.tooltip.hide(null,w);break}s.elements.tooltip.removeClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_HIDDEN,"hide")},updatePosition:function(w,x){var C,G,L,J,H,E,y,I,B,D,K,A,F,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updatePosition")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_POSITION_STATIC,"updatePosition")}}G={position:{left:0,top:0},dimensions:{height:0,width:0},corner:s.options.position.corner.target};L={position:s.getPosition(),dimensions:s.getDimensions(),corner:s.options.position.corner.tooltip};if(s.options.position.target!=="mouse"){if(s.options.position.target.get(0).nodeName.toLowerCase()=="area"){J=s.options.position.target.attr("coords").split(",");for(C=0;C<J.length;C++){J[C]=parseInt(J[C])}H=s.options.position.target.parent("map").attr("name");E=f('img[usemap="#'+H+'"]:first').offset();G.position={left:Math.floor(E.left+J[0]),top:Math.floor(E.top+J[1])};switch(s.options.position.target.attr("shape").toLowerCase()){case"rect":G.dimensions={width:Math.ceil(Math.abs(J[2]-J[0])),height:Math.ceil(Math.abs(J[3]-J[1]))};break;case"circle":G.dimensions={width:J[2]+1,height:J[2]+1};break;case"poly":G.dimensions={width:J[0],height:J[1]};for(C=0;C<J.length;C++){if(C%2==0){if(J[C]>G.dimensions.width){G.dimensions.width=J[C]}if(J[C]<J[0]){G.position.left=Math.floor(E.left+J[C])}}else{if(J[C]>G.dimensions.height){G.dimensions.height=J[C]}if(J[C]<J[1]){G.position.top=Math.floor(E.top+J[C])}}}G.dimensions.width=G.dimensions.width-(G.position.left-E.left);G.dimensions.height=G.dimensions.height-(G.position.top-E.top);break;default:return f.fn.qtip.log.error.call(s,4,f.fn.qtip.constants.INVALID_AREA_SHAPE,"updatePosition");break}G.dimensions.width-=2;G.dimensions.height-=2}else{if(s.options.position.target.add(document.body).length===1){G.position={left:f(document).scrollLeft(),top:f(document).scrollTop()};G.dimensions={height:f(window).height(),width:f(window).width()}}else{if(typeof s.options.position.target.attr("qtip")!=="undefined"){G.position=s.options.position.target.qtip("api").cache.position}else{G.position=s.options.position.target.offset()}G.dimensions={height:s.options.position.target.outerHeight(),width:s.options.position.target.outerWidth()}}}y=f.extend({},G.position);if(G.corner.search(/right/i)!==-1){y.left+=G.dimensions.width}if(G.corner.search(/bottom/i)!==-1){y.top+=G.dimensions.height}if(G.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left+=(G.dimensions.width/2)}if(G.corner.search(/((left|right)Middle)|center/)!==-1){y.top+=(G.dimensions.height/2)}}else{G.position=y={left:s.cache.mouse.x,top:s.cache.mouse.y};G.dimensions={height:1,width:1}}if(L.corner.search(/right/i)!==-1){y.left-=L.dimensions.width}if(L.corner.search(/bottom/i)!==-1){y.top-=L.dimensions.height}if(L.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left-=(L.dimensions.width/2)}if(L.corner.search(/((left|right)Middle)|center/)!==-1){y.top-=(L.dimensions.height/2)}I=(f.browser.msie)?1:0;B=(f.browser.msie&&parseInt(f.browser.version.charAt(0))===6)?1:0;if(s.options.style.border.radius>0){if(L.corner.search(/Left/)!==-1){y.left-=s.options.style.border.radius}else{if(L.corner.search(/Right/)!==-1){y.left+=s.options.style.border.radius}}if(L.corner.search(/Top/)!==-1){y.top-=s.options.style.border.radius}else{if(L.corner.search(/Bottom/)!==-1){y.top+=s.options.style.border.radius}}}if(I){if(L.corner.search(/top/)!==-1){y.top-=I}else{if(L.corner.search(/bottom/)!==-1){y.top+=I}}if(L.corner.search(/left/)!==-1){y.left-=I}else{if(L.corner.search(/right/)!==-1){y.left+=I}}if(L.corner.search(/leftMiddle|rightMiddle/)!==-1){y.top-=1}}if(s.options.position.adjust.screen===true){y=o.call(s,y,G,L)}if(s.options.position.target==="mouse"&&s.options.position.adjust.mouse===true){if(s.options.position.adjust.screen===true&&s.elements.tip){K=s.elements.tip.attr("rel")}else{K=s.options.position.corner.tooltip}y.left+=(K.search(/right/i)!==-1)?-6:6;y.top+=(K.search(/bottom/i)!==-1)?-6:6}if(!s.elements.bgiframe&&f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){f("select, object").each(function(){A=f(this).offset();A.bottom=A.top+f(this).height();A.right=A.left+f(this).width();if(y.top+L.dimensions.height>=A.top&&y.left+L.dimensions.width>=A.left){k.call(s)}})}y.left+=s.options.position.adjust.x;y.top+=s.options.position.adjust.y;F=s.getPosition();if(y.left!=F.left||y.top!=F.top){z=s.beforePositionUpdate.call(s,w);if(z===false){return s}s.cache.position=y;if(x===true){s.status.animated=true;s.elements.tooltip.animate(y,200,"swing",function(){s.status.animated=false})}else{s.elements.tooltip.css(y)}s.onPositionUpdate.call(s,w);if(typeof w!=="undefined"&&w.type&&w.type!=="mousemove"){f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_POSITION_UPDATED,"updatePosition")}}return s},updateWidth:function(w){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateWidth")}else{if(w&&typeof w!=="number"){return f.fn.qtip.log.error.call(s,2,"newWidth must be of type number","updateWidth")}}x=s.elements.contentWrapper.siblings().add(s.elements.tip).add(s.elements.button);if(!w){if(typeof s.options.style.width.value=="number"){w=s.options.style.width.value}else{s.elements.tooltip.css({width:"auto"});x.hide();if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"normal"})}w=s.getDimensions().width+1;if(!s.options.style.width.value){if(w>s.options.style.width.max){w=s.options.style.width.max}if(w<s.options.style.width.min){w=s.options.style.width.min}}}}if(w%2!==0){w-=1}s.elements.tooltip.width(w);x.show();if(s.options.style.border.radius){s.elements.tooltip.find(".qtip-betweenCorners").each(function(y){f(this).width(w-(s.options.style.border.radius*2))})}if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"1"});s.elements.wrapper.width(w);if(s.elements.bgiframe){s.elements.bgiframe.width(w).height(s.getDimensions.height)}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_WIDTH_UPDATED,"updateWidth")},updateStyle:function(w){var z,A,x,y,B;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateStyle")}else{if(typeof w!=="string"||!f.fn.qtip.styles[w]){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.STYLE_NOT_DEFINED,"updateStyle")}}s.options.style=a.call(s,f.fn.qtip.styles[w],s.options.user.style);s.elements.content.css(q(s.options.style));if(s.options.content.title.text!==false){s.elements.title.css(q(s.options.style.title,true))}s.elements.contentWrapper.css({borderColor:s.options.style.border.color});if(s.options.style.tip.corner!==false){if(f("<canvas>").get(0).getContext){z=s.elements.tooltip.find(".qtip-tip canvas:first");x=z.get(0).getContext("2d");x.clearRect(0,0,300,300);y=z.parent("div[rel]:first").attr("rel");B=b(y,s.options.style.tip.size.width,s.options.style.tip.size.height);h.call(s,z,B,s.options.style.tip.color||s.options.style.border.color)}else{if(f.browser.msie){z=s.elements.tooltip.find('.qtip-tip [nodeName="shape"]');z.attr("fillcolor",s.options.style.tip.color||s.options.style.border.color)}}}if(s.options.style.border.radius>0){s.elements.tooltip.find(".qtip-betweenCorners").css({backgroundColor:s.options.style.border.color});if(f("<canvas>").get(0).getContext){A=g(s.options.style.border.radius);s.elements.tooltip.find(".qtip-wrapper canvas").each(function(){x=f(this).get(0).getContext("2d");x.clearRect(0,0,300,300);y=f(this).parent("div[rel]:first").attr("rel");r.call(s,f(this),A[y],s.options.style.border.radius,s.options.style.border.color)})}else{if(f.browser.msie){s.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function(){f(this).attr("fillcolor",s.options.style.border.color)})}}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_STYLE_UPDATED,"updateStyle")},updateContent:function(A,y){var z,x,w;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateContent")}else{if(!A){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateContent")}}z=s.beforeContentUpdate.call(s,A);if(typeof z=="string"){A=z}else{if(z===false){return}}if(f.browser.msie){s.elements.contentWrapper.children().css({zoom:"normal"})}if(A.jquery&&A.length>0){A.clone(true).appendTo(s.elements.content).show()}else{s.elements.content.html(A)}x=s.elements.content.find("img[complete=false]");if(x.length>0){w=0;x.each(function(C){f('<img src="'+f(this).attr("src")+'" />').load(function(){if(++w==x.length){B()}})})}else{B()}function B(){s.updateWidth();if(y!==false){if(s.options.position.type!=="static"){s.updatePosition(s.elements.tooltip.is(":visible"),true)}if(s.options.style.tip.corner!==false){n.call(s)}}}s.onContentUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_UPDATED,"loadContent")},loadContent:function(w,z,A){var y;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"loadContent")}y=s.beforeContentLoad.call(s);if(y===false){return s}if(A=="post"){f.post(w,z,x)}else{f.get(w,z,x)}function x(B){s.onContentLoad.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_LOADED,"loadContent");s.updateContent(B)}return s},updateTitle:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateTitle")}else{if(!w){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateTitle")}}returned=s.beforeTitleUpdate.call(s);if(returned===false){return s}if(s.elements.button){s.elements.button=s.elements.button.clone(true)}s.elements.title.html(w);if(s.elements.button){s.elements.title.prepend(s.elements.button)}s.onTitleUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_TITLE_UPDATED,"updateTitle")},focus:function(A){var y,x,w,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"focus")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_FOCUS_STATIC,"focus")}}y=parseInt(s.elements.tooltip.css("z-index"));x=6000+f("div.qtip[qtip]").length-1;if(!s.status.focused&&y!==x){z=s.beforeFocus.call(s,A);if(z===false){return s}f("div.qtip[qtip]").not(s.elements.tooltip).each(function(){if(f(this).qtip("api").status.rendered===true){w=parseInt(f(this).css("z-index"));if(typeof w=="number"&&w>-1){f(this).css({zIndex:parseInt(f(this).css("z-index"))-1})}f(this).qtip("api").status.focused=false}});s.elements.tooltip.css({zIndex:x});s.status.focused=true;s.onFocus.call(s,A);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_FOCUSED,"focus")}return s},disable:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"disable")}if(w){if(!s.status.disabled){s.status.disabled=true;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DISABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,"disable")}}else{if(s.status.disabled){s.status.disabled=false;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_ENABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,"disable")}}return s},destroy:function(){var w,x,y;x=s.beforeDestroy.call(s);if(x===false){return s}if(s.status.rendered){s.options.show.when.target.unbind("mousemove.qtip",s.updatePosition);s.options.show.when.target.unbind("mouseout.qtip",s.hide);s.options.show.when.target.unbind(s.options.show.when.event+".qtip");s.options.hide.when.target.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind("mouseover.qtip",s.focus);s.elements.tooltip.remove()}else{s.options.show.when.target.unbind(s.options.show.when.event+".qtip-create")}if(typeof s.elements.target.data("qtip")=="object"){y=s.elements.target.data("qtip").interfaces;if(typeof y=="object"&&y.length>0){for(w=0;w<y.length-1;w++){if(y[w].id==s.id){y.splice(w,1)}}}}delete f.fn.qtip.interfaces[s.id];if(typeof y=="object"&&y.length>0){s.elements.target.data("qtip").current=y.length-1}else{s.elements.target.removeData("qtip")}s.onDestroy.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DESTROYED,"destroy");return s.elements.target},getPosition:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getPosition")}w=(s.elements.tooltip.css("display")!=="none")?false:true;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x=s.elements.tooltip.offset();if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x},getDimensions:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getDimensions")}w=(!s.elements.tooltip.is(":visible"))?true:false;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x={height:s.elements.tooltip.outerHeight(),width:s.elements.tooltip.outerWidth()};if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x}})}function p(){var s,w,u,t,v,y,x;s=this;s.beforeRender.call(s);s.status.rendered=true;s.elements.tooltip='<div qtip="'+s.id+'" class="qtip '+(s.options.style.classes.tooltip||s.options.style)+'"style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;position:'+s.options.position.type+';">  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">    <div class="qtip-contentWrapper" style="overflow:hidden;">       <div class="qtip-content '+s.options.style.classes.content+'"></div></div></div></div>';s.elements.tooltip=f(s.elements.tooltip);s.elements.tooltip.appendTo(s.options.position.container);s.elements.tooltip.data("qtip",{current:0,interfaces:[s]});s.elements.wrapper=s.elements.tooltip.children("div:first");s.elements.contentWrapper=s.elements.wrapper.children("div:first").css({background:s.options.style.background});s.elements.content=s.elements.contentWrapper.children("div:first").css(q(s.options.style));if(f.browser.msie){s.elements.wrapper.add(s.elements.content).css({zoom:1})}if(s.options.hide.when.event=="unfocus"){s.elements.tooltip.attr("unfocus",true)}if(typeof s.options.style.width.value=="number"){s.updateWidth()}if(f("<canvas>").get(0).getContext||f.browser.msie){if(s.options.style.border.radius>0){m.call(s)}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color})}if(s.options.style.tip.corner!==false){e.call(s)}}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color});s.options.style.border.radius=0;s.options.style.tip.corner=false;f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,"render")}if((typeof s.options.content.text=="string"&&s.options.content.text.length>0)||(s.options.content.text.jquery&&s.options.content.text.length>0)){u=s.options.content.text}else{if(typeof s.elements.target.attr("title")=="string"&&s.elements.target.attr("title").length>0){u=s.elements.target.attr("title").replace("\\n","<br />");s.elements.target.attr("title","")}else{if(typeof s.elements.target.attr("alt")=="string"&&s.elements.target.attr("alt").length>0){u=s.elements.target.attr("alt").replace("\\n","<br />");s.elements.target.attr("alt","")}else{u=" ";f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.NO_VALID_CONTENT,"render")}}}if(s.options.content.title.text!==false){j.call(s)}s.updateContent(u);l.call(s);if(s.options.show.ready===true){s.show()}if(s.options.content.url!==false){t=s.options.content.url;v=s.options.content.data;y=s.options.content.method||"get";s.loadContent(t,v,y)}s.onRender.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_RENDERED,"render")}function m(){var F,z,t,B,x,E,u,G,D,y,w,C,A,s,v;F=this;F.elements.wrapper.find(".qtip-borderBottom, .qtip-borderTop").remove();t=F.options.style.border.width;B=F.options.style.border.radius;x=F.options.style.border.color||F.options.style.tip.color;E=g(B);u={};for(z in E){u[z]='<div rel="'+z+'" style="'+((z.search(/Left/)!==-1)?"left":"right")+":0; position:absolute; height:"+B+"px; width:"+B+'px; overflow:hidden; line-height:0.1px; font-size:1px">';if(f("<canvas>").get(0).getContext){u[z]+='<canvas height="'+B+'" width="'+B+'" style="vertical-align: top"></canvas>'}else{if(f.browser.msie){G=B*2+3;u[z]+='<v:arc stroked="false" fillcolor="'+x+'" startangle="'+E[z][0]+'" endangle="'+E[z][1]+'" style="width:'+G+"px; height:"+G+"px; margin-top:"+((z.search(/bottom/)!==-1)?-2:-1)+"px; margin-left:"+((z.search(/Right/)!==-1)?E[z][2]-3.5:-1)+'px; vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>'}}u[z]+="</div>"}D=F.getDimensions().width-(Math.max(t,B)*2);y='<div class="qtip-betweenCorners" style="height:'+B+"px; width:"+D+"px; overflow:hidden; background-color:"+x+'; line-height:0.1px; font-size:1px;">';w='<div class="qtip-borderTop" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.topLeft+u.topRight+y;F.elements.wrapper.prepend(w);C='<div class="qtip-borderBottom" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.bottomLeft+u.bottomRight+y;F.elements.wrapper.append(C);if(f("<canvas>").get(0).getContext){F.elements.wrapper.find("canvas").each(function(){A=E[f(this).parent("[rel]:first").attr("rel")];r.call(F,f(this),A,B,x)})}else{if(f.browser.msie){F.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>')}}s=Math.max(B,(B+(t-B)));v=Math.max(t-B,0);F.elements.contentWrapper.css({border:"0px solid "+x,borderWidth:v+"px "+s+"px"})}function r(u,w,s,t){var v=u.get(0).getContext("2d");v.fillStyle=t;v.beginPath();v.arc(w[0],w[1],s,0,Math.PI*2,false);v.fill()}function e(v){var t,s,x,u,w;t=this;if(t.elements.tip!==null){t.elements.tip.remove()}s=t.options.style.tip.color||t.options.style.border.color;if(t.options.style.tip.corner===false){return}else{if(!v){v=t.options.style.tip.corner}}x=b(v,t.options.style.tip.size.width,t.options.style.tip.size.height);t.elements.tip='<div class="'+t.options.style.classes.tip+'" dir="ltr" rel="'+v+'" style="position:absolute; height:'+t.options.style.tip.size.height+"px; width:"+t.options.style.tip.size.width+'px; margin:0 auto; line-height:0.1px; font-size:1px;">';if(f("<canvas>").get(0).getContext){t.elements.tip+='<canvas height="'+t.options.style.tip.size.height+'" width="'+t.options.style.tip.size.width+'"></canvas>'}else{if(f.browser.msie){u=t.options.style.tip.size.width+","+t.options.style.tip.size.height;w="m"+x[0][0]+","+x[0][1];w+=" l"+x[1][0]+","+x[1][1];w+=" "+x[2][0]+","+x[2][1];w+=" xe";t.elements.tip+='<v:shape fillcolor="'+s+'" stroked="false" filled="true" path="'+w+'" coordsize="'+u+'" style="width:'+t.options.style.tip.size.width+"px; height:"+t.options.style.tip.size.height+"px; line-height:0.1px; display:inline-block; behavior:url(#default#VML); vertical-align:"+((v.search(/top/)!==-1)?"bottom":"top")+'"></v:shape>';t.elements.tip+='<v:image style="behavior:url(#default#VML);"></v:image>';t.elements.contentWrapper.css("position","relative")}}t.elements.tooltip.prepend(t.elements.tip+"</div>");t.elements.tip=t.elements.tooltip.find("."+t.options.style.classes.tip).eq(0);if(f("<canvas>").get(0).getContext){h.call(t,t.elements.tip.find("canvas:first"),x,s)}if(v.search(/top/)!==-1&&f.browser.msie&&parseInt(f.browser.version.charAt(0))===6){t.elements.tip.css({marginTop:-4})}n.call(t,v)}function h(t,v,s){var u=t.get(0).getContext("2d");u.fillStyle=s;u.beginPath();u.moveTo(v[0][0],v[0][1]);u.lineTo(v[1][0],v[1][1]);u.lineTo(v[2][0],v[2][1]);u.fill()}function n(u){var t,w,s,x,v;t=this;if(t.options.style.tip.corner===false||!t.elements.tip){return}if(!u){u=t.elements.tip.attr("rel")}w=positionAdjust=(f.browser.msie)?1:0;t.elements.tip.css(u.match(/left|right|top|bottom/)[0],0);if(u.search(/top|bottom/)!==-1){if(f.browser.msie){if(parseInt(f.browser.version.charAt(0))===6){positionAdjust=(u.search(/top/)!==-1)?-3:1}else{positionAdjust=(u.search(/top/)!==-1)?1:2}}if(u.search(/Middle/)!==-1){t.elements.tip.css({left:"50%",marginLeft:-(t.options.style.tip.size.width/2)})}else{if(u.search(/Left/)!==-1){t.elements.tip.css({left:t.options.style.border.radius-w})}else{if(u.search(/Right/)!==-1){t.elements.tip.css({right:t.options.style.border.radius+w})}}}if(u.search(/top/)!==-1){t.elements.tip.css({top:-positionAdjust})}else{t.elements.tip.css({bottom:positionAdjust})}}else{if(u.search(/left|right/)!==-1){if(f.browser.msie){positionAdjust=(parseInt(f.browser.version.charAt(0))===6)?1:((u.search(/left/)!==-1)?1:2)}if(u.search(/Middle/)!==-1){t.elements.tip.css({top:"50%",marginTop:-(t.options.style.tip.size.height/2)})}else{if(u.search(/Top/)!==-1){t.elements.tip.css({top:t.options.style.border.radius-w})}else{if(u.search(/Bottom/)!==-1){t.elements.tip.css({bottom:t.options.style.border.radius+w})}}}if(u.search(/left/)!==-1){t.elements.tip.css({left:-positionAdjust})}else{t.elements.tip.css({right:positionAdjust})}}}s="padding-"+u.match(/left|right|top|bottom/)[0];x=t.options.style.tip.size[(s.search(/left|right/)!==-1)?"width":"height"];t.elements.tooltip.css("padding",0);t.elements.tooltip.css(s,x);if(f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){v=parseInt(t.elements.tip.css("margin-top"))||0;v+=parseInt(t.elements.content.css("margin-top"))||0;t.elements.tip.css({marginTop:v})}}function j(){var s=this;if(s.elements.title!==null){s.elements.title.remove()}s.elements.title=f('<div class="'+s.options.style.classes.title+'">').css(q(s.options.style.title,true)).css({zoom:(f.browser.msie)?1:0}).prependTo(s.elements.contentWrapper);if(s.options.content.title.text){s.updateTitle.call(s,s.options.content.title.text)}if(s.options.content.title.button!==false&&typeof s.options.content.title.button=="string"){s.elements.button=f('<a class="'+s.options.style.classes.button+'" style="float:right; position: relative"></a>').css(q(s.options.style.button,true)).html(s.options.content.title.button).prependTo(s.elements.title).click(function(t){if(!s.status.disabled){s.hide(t)}})}}function l(){var t,v,u,s;t=this;v=t.options.show.when.target;u=t.options.hide.when.target;if(t.options.hide.fixed){u=u.add(t.elements.tooltip)}if(t.options.hide.when.event=="inactive"){s=["click","dblclick","mousedown","mouseup","mousemove","mouseout","mouseenter","mouseleave","mouseover"];function y(z){if(t.status.disabled===true){return}clearTimeout(t.timers.inactive);t.timers.inactive=setTimeout(function(){f(s).each(function(){u.unbind(this+".qtip-inactive");t.elements.content.unbind(this+".qtip-inactive")});t.hide(z)},t.options.hide.delay)}}else{if(t.options.hide.fixed===true){t.elements.tooltip.bind("mouseover.qtip",function(){if(t.status.disabled===true){return}clearTimeout(t.timers.hide)})}}function x(z){if(t.status.disabled===true){return}if(t.options.hide.when.event=="inactive"){f(s).each(function(){u.bind(this+".qtip-inactive",y);t.elements.content.bind(this+".qtip-inactive",y)});y()}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.timers.show=setTimeout(function(){t.show(z)},t.options.show.delay)}function w(z){if(t.status.disabled===true){return}if(t.options.hide.fixed===true&&t.options.hide.when.event.search(/mouse(out|leave)/i)!==-1&&f(z.relatedTarget).parents("div.qtip[qtip=" + t.id + "]").length>0){z.stopPropagation();z.preventDefault();clearTimeout(t.timers.hide);return false}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.elements.tooltip.stop(true,true);t.timers.hide=setTimeout(function(){t.hide(z)},t.options.hide.delay)}if((t.options.show.when.target.add(t.options.hide.when.target).length===1&&t.options.show.when.event==t.options.hide.when.event&&t.options.hide.when.event!=="inactive")||t.options.hide.when.event=="unfocus"){t.cache.toggle=0;v.bind(t.options.show.when.event+".qtip",function(z){if(t.cache.toggle==0){x(z)}else{w(z)}})}else{v.bind(t.options.show.when.event+".qtip",x);if(t.options.hide.when.event!=="inactive"){u.bind(t.options.hide.when.event+".qtip",w)}}if(t.options.position.type.search(/(fixed|absolute)/)!==-1){t.elements.tooltip.bind("mouseover.qtip",t.focus)}if(t.options.position.target==="mouse"&&t.options.position.type!=="static"){v.bind("mousemove.qtip",function(z){t.cache.mouse={x:z.pageX,y:z.pageY};if(t.status.disabled===false&&t.options.position.adjust.mouse===true&&t.options.position.type!=="static"&&t.elements.tooltip.css("display")!=="none"){t.updatePosition(z)}})}}function o(u,v,A){var z,s,x,y,t,w;z=this;if(A.corner=="center"){return v.position}s=f.extend({},u);y={x:false,y:false};t={left:(s.left<f.fn.qtip.cache.screen.scroll.left),right:(s.left+A.dimensions.width+2>=f.fn.qtip.cache.screen.width+f.fn.qtip.cache.screen.scroll.left),top:(s.top<f.fn.qtip.cache.screen.scroll.top),bottom:(s.top+A.dimensions.height+2>=f.fn.qtip.cache.screen.height+f.fn.qtip.cache.screen.scroll.top)};x={left:(t.left&&(A.corner.search(/right/i)!=-1||(A.corner.search(/right/i)==-1&&!t.right))),right:(t.right&&(A.corner.search(/left/i)!=-1||(A.corner.search(/left/i)==-1&&!t.left))),top:(t.top&&A.corner.search(/top/i)==-1),bottom:(t.bottom&&A.corner.search(/bottom/i)==-1)};if(x.left){if(z.options.position.target!=="mouse"){s.left=v.position.left+v.dimensions.width}else{s.left=z.cache.mouse.x}y.x="Left"}else{if(x.right){if(z.options.position.target!=="mouse"){s.left=v.position.left-A.dimensions.width}else{s.left=z.cache.mouse.x-A.dimensions.width}y.x="Right"}}if(x.top){if(z.options.position.target!=="mouse"){s.top=v.position.top+v.dimensions.height}else{s.top=z.cache.mouse.y}y.y="top"}else{if(x.bottom){if(z.options.position.target!=="mouse"){s.top=v.position.top-A.dimensions.height}else{s.top=z.cache.mouse.y-A.dimensions.height}y.y="bottom"}}if(s.left<0){s.left=u.left;y.x=false}if(s.top<0){s.top=u.top;y.y=false}if(z.options.style.tip.corner!==false){s.corner=new String(A.corner);if(y.x!==false){s.corner=s.corner.replace(/Left|Right|Middle/,y.x)}if(y.y!==false){s.corner=s.corner.replace(/top|bottom/,y.y)}if(s.corner!==z.elements.tip.attr("rel")){e.call(z,s.corner)}}return s}function q(u,t){var v,s;v=f.extend(true,{},u);for(s in v){if(t===true&&s.search(/(tip|classes)/i)!==-1){delete v[s]}else{if(!t&&s.search(/(width|border|tip|title|classes|user)/i)!==-1){delete v[s]}}}return v}function c(s){if(typeof s.tip!=="object"){s.tip={corner:s.tip}}if(typeof s.tip.size!=="object"){s.tip.size={width:s.tip.size,height:s.tip.size}}if(typeof s.border!=="object"){s.border={width:s.border}}if(typeof s.width!=="object"){s.width={value:s.width}}if(typeof s.width.max=="string"){s.width.max=parseInt(s.width.max.replace(/([0-9]+)/i,"$1"))}if(typeof s.width.min=="string"){s.width.min=parseInt(s.width.min.replace(/([0-9]+)/i,"$1"))}if(typeof s.tip.size.x=="number"){s.tip.size.width=s.tip.size.x;delete s.tip.size.x}if(typeof s.tip.size.y=="number"){s.tip.size.height=s.tip.size.y;delete s.tip.size.y}return s}function a(){var s,t,u,x,v,w;s=this;u=[true,{}];for(t=0;t<arguments.length;t++){u.push(arguments[t])}x=[f.extend.apply(f,u)];while(typeof x[0].name=="string"){x.unshift(c(f.fn.qtip.styles[x[0].name]))}x.unshift(true,{classes:{tooltip:"qtip-"+(arguments[0].name||"defaults")}},f.fn.qtip.styles.defaults);v=f.extend.apply(f,x);w=(f.browser.msie)?1:0;v.tip.size.width+=w;v.tip.size.height+=w;if(v.tip.size.width%2>0){v.tip.size.width+=1}if(v.tip.size.height%2>0){v.tip.size.height+=1}if(v.tip.corner===true){v.tip.corner=(s.options.position.corner.tooltip==="center")?false:s.options.position.corner.tooltip}return v}function b(v,u,t){var s={bottomRight:[[0,0],[u,t],[u,0]],bottomLeft:[[0,0],[u,0],[0,t]],topRight:[[0,t],[u,0],[u,t]],topLeft:[[0,0],[0,t],[u,t]],topMiddle:[[0,t],[u/2,0],[u,t]],bottomMiddle:[[0,0],[u,0],[u/2,t]],rightMiddle:[[0,0],[u,t/2],[0,t]],leftMiddle:[[u,0],[u,t],[0,t/2]]};s.leftTop=s.bottomRight;s.rightTop=s.bottomLeft;s.leftBottom=s.topRight;s.rightBottom=s.topLeft;return s[v]}function g(s){var t;if(f("<canvas>").get(0).getContext){t={topLeft:[s,s],topRight:[0,s],bottomLeft:[s,0],bottomRight:[0,0]}}else{if(f.browser.msie){t={topLeft:[-90,90,0],topRight:[-90,90,-s],bottomLeft:[90,270,0],bottomRight:[90,270,-s]}}}return t}function k(){var s,t,u;s=this;u=s.getDimensions();t='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; height:'+u.height+"px; width:"+u.width+'px" />';s.elements.bgiframe=s.elements.wrapper.prepend(t).children(".qtip-bgiframe:first")}f(document).ready(function(){f.fn.qtip.cache={screen:{scroll:{left:f(window).scrollLeft(),top:f(window).scrollTop()},width:f(window).width(),height:f(window).height()}};var s;f(window).bind("resize scroll",function(t){clearTimeout(s);s=setTimeout(function(){if(t.type==="scroll"){f.fn.qtip.cache.screen.scroll={left:f(window).scrollLeft(),top:f(window).scrollTop()}}else{f.fn.qtip.cache.screen.width=f(window).width();f.fn.qtip.cache.screen.height=f(window).height()}for(i=0;i<f.fn.qtip.interfaces.length;i++){var u=f.fn.qtip.interfaces[i];if(u.status.rendered===true&&(u.options.position.type!=="static"||u.options.position.adjust.scroll&&t.type==="scroll"||u.options.position.adjust.resize&&t.type==="resize")){u.updatePosition(t,true)}}},100)});f(document).bind("mousedown.qtip",function(t){if(f(t.target).parents("div.qtip").length===0){f(".qtip[unfocus]").each(function(){var u=f(this).qtip("api");if(f(this).is(":visible")&&!u.status.disabled&&f(t.target).add(u.elements.target).length>1){u.hide(t)}})}})});f.fn.qtip.interfaces=[];f.fn.qtip.log={error:function(){return this}};f.fn.qtip.constants={};f.fn.qtip.defaults={content:{prerender:false,text:false,url:false,data:null,title:{text:false,button:false}},position:{target:false,corner:{target:"bottomRight",tooltip:"topLeft"},adjust:{x:0,y:0,mouse:true,screen:false,scroll:true,resize:true},type:"absolute",container:false},show:{when:{target:false,event:"mouseover"},effect:{type:"fade",length:100},delay:140,solo:false,ready:false},hide:{when:{target:false,event:"mouseout"},effect:{type:"fade",length:100},delay:0,fixed:false},api:{beforeRender:function(){},onRender:function(){},beforePositionUpdate:function(){},onPositionUpdate:function(){},beforeShow:function(){},onShow:function(){},beforeHide:function(){},onHide:function(){},beforeContentUpdate:function(){},onContentUpdate:function(){},beforeContentLoad:function(){},onContentLoad:function(){},beforeTitleUpdate:function(){},onTitleUpdate:function(){},beforeDestroy:function(){},onDestroy:function(){},beforeFocus:function(){},onFocus:function(){}}};f.fn.qtip.styles={defaults:{background:"white",color:"#111",overflow:"hidden",textAlign:"left",width:{min:0,max:250},padding:"5px 9px",border:{width:1,radius:0,color:"#d3d3d3"},tip:{corner:false,color:false,size:{width:13,height:13},opacity:1},title:{background:"#e1e1e1",fontWeight:"bold",padding:"7px 12px"},button:{cursor:"pointer"},classes:{target:"",tip:"qtip-tip",title:"qtip-title",button:"qtip-button",content:"qtip-content",active:"qtip-active"}},cream:{border:{width:3,radius:0,color:"#F9E98E"},title:{background:"#F0DE7D",color:"#A27D35"},background:"#FBF7AA",color:"#A27D35",classes:{tooltip:"qtip-cream"}},light:{border:{width:3,radius:0,color:"#E2E2E2"},title:{background:"#f1f1f1",color:"#454545"},background:"white",color:"#454545",classes:{tooltip:"qtip-light"}},dark:{border:{width:3,radius:0,color:"#303030"},title:{background:"#404040",color:"#f3f3f3"},background:"#505050",color:"#f3f3f3",classes:{tooltip:"qtip-dark"}},red:{border:{width:3,radius:0,color:"#CE6F6F"},title:{background:"#f28279",color:"#9C2F2F"},background:"#F79992",color:"#9C2F2F",classes:{tooltip:"qtip-red"}},green:{border:{width:3,radius:0,color:"#A9DB66"},title:{background:"#b9db8c",color:"#58792E"},background:"#CDE6AC",color:"#58792E",classes:{tooltip:"qtip-green"}},blue:{border:{width:3,radius:0,color:"#ADD9ED"},title:{background:"#D0E9F5",color:"#5E99BD"},background:"#E5F6FE",color:"#4D9FBF",classes:{tooltip:"qtip-blue"}}}})(jQuery);
/*
 * Facebox (for jQuery)
 * version: 1.3
 * @requires jQuery v1.2 or later
 * @homepage https://github.com/defunkt/facebox
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright Forever Chris Wanstrath, Kyle Neath
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=facebox]').facebox()
 *  })
 *
 *  <a href="#terms" rel="facebox">Terms</a>
 *    Loads the #terms div in the box
 *
 *  <a href="terms.html" rel="facebox">Terms</a>
 *    Loads the terms.html page in the box
 *
 *  <a href="terms.png" rel="facebox">Terms</a>
 *    Loads the terms.png image in the box
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.facebox('some html')
 *    jQuery.facebox('some html', 'my-groovy-style')
 *
 *  The above will open a facebox with "some html" as the content.
 *
 *    jQuery.facebox(function($) {
 *      $.get('blah.html', function(data) { $.facebox(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The facebox function can also display an ajax page, an image, or the contents of a div:
 *
 *    jQuery.facebox({ ajax: 'remote.html' })
 *    jQuery.facebox({ ajax: 'remote.html' }, 'my-groovy-style')
 *    jQuery.facebox({ image: 'stairs.jpg' })
 *    jQuery.facebox({ image: 'stairs.jpg' }, 'my-groovy-style')
 *    jQuery.facebox({ div: '#box' })
 *    jQuery.facebox({ div: '#box' }, 'my-groovy-style')
 *
 *  Want to close the facebox?  Trigger the 'close.facebox' document event:
 *
 *    jQuery(document).trigger('close.facebox')
 *
 *  Facebox also has a bunch of other hooks:
 *
 *    loading.facebox
 *    beforeReveal.facebox
 *    reveal.facebox (aliased as 'afterReveal.facebox')
 *    init.facebox
 *    afterClose.facebox
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.facebox', function() { ...stuff to do after the facebox and contents are revealed... })
 *
 */

(function($) {
  $.facebox = function(data, klass) {
    $.facebox.loading(data.settings || [])

    if (data.ajax) fillFaceboxFromAjax(data.ajax, klass)
    else if (data.image) fillFaceboxFromImage(data.image, klass)
    else if (data.div) fillFaceboxFromHref(data.div, klass)
    else if ($.isFunction(data)) data.call($)
    else $.facebox.reveal(data, klass)
  }

  /*
   * Public, $.facebox methods
   */

  $.extend($.facebox, {
    settings: {
      opacity      : 0.2,
      overlay      : true,
      loadingImage : '/images/ajax-loader-button-white.gif',
      closeImage   : '',
      imageTypes   : [ 'png', 'jpg', 'jpeg', 'gif' ],
      faceboxHtml  : '\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <div class="content"> \
        </div> \
        <a href="#" class="close">x</a> \
      </div> \
    </div>'
    },

    loading: function() {
      init()
      if ($('#facebox .loading').length == 1) return true
      showOverlay()

      $('#facebox .content').empty().
        append('<div class="loading"><img src="'+$.facebox.settings.loadingImage+'"/></div>')

      $('#facebox').show().css({
        top:	getPageScroll()[1] + (getPageHeight() / 10),
        left:	$(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2)
      })

      $(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27) $.facebox.close()
        return true
      })
      $(document).trigger('loading.facebox')
    },

    reveal: function(data, klass) {
      $(document).trigger('beforeReveal.facebox')
      if (klass) $('#facebox .content').addClass(klass)
      $('#facebox .content').empty().append(data)
      $('#facebox .popup').children().fadeIn('normal')
      $('#facebox').css('left', $(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2))
      $(document).trigger('reveal.facebox').trigger('afterReveal.facebox')
    },

    close: function() {
      $(document).trigger('close.facebox')
      return false
    }
  })

  /*
   * Public, $.fn methods
   */

  $.fn.facebox = function(settings) {
    if ($(this).length == 0) return

    init(settings)

    function clickHandler() {
      $.facebox.loading(true)

      // support for rel="facebox.inline_popup" syntax, to add a class
      // also supports deprecated "facebox[.inline_popup]" syntax
      var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
      if (klass) klass = klass[1]

      fillFaceboxFromHref(this.href, klass)
      return false
    }

    return this.bind('click.facebox', clickHandler)
  }

  /*
   * Private methods
   */

  // called one time to setup facebox on this page
  function init(settings) {
    if ($.facebox.settings.inited) return true
    else $.facebox.settings.inited = true

    $(document).trigger('init.facebox')
    makeCompatible()

    var imageTypes = $.facebox.settings.imageTypes.join('|')
    $.facebox.settings.imageTypesRegexp = new RegExp('\\.(' + imageTypes + ')(\\?.*)?$', 'i')

    if (settings) $.extend($.facebox.settings, settings)
    $('body').append($.facebox.settings.faceboxHtml)

    var preload = [ new Image(), new Image() ]
    //preload[0].src = $.facebox.settings.closeImage
    preload[1].src = $.facebox.settings.loadingImage

    $('#facebox').find('.b:first, .bl').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#facebox .close')
      .click($.facebox.close)
      // .append('<img src="'
      //               + $.facebox.settings.closeImage
      //               + '" class="close_image" title="close">')
  }

  // getPageScroll() by quirksmode.com
  function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
  }

  // Adapted from getPageSize() by quirksmode.com
  function getPageHeight() {
    var windowHeight
    if (self.innerHeight) {	// all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight
  }

  // Backwards compatibility
  function makeCompatible() {
    var $s = $.facebox.settings

    $s.loadingImage = $s.loading_image || $s.loadingImage
    //$s.closeImage = $s.close_image || $s.closeImage
    $s.imageTypes = $s.image_types || $s.imageTypes
    $s.faceboxHtml = $s.facebox_html || $s.faceboxHtml
  }

  // Figures out what you want to display and displays it
  // formats are:
  //     div: #id
  //   image: blah.extension
  //    ajax: anything else
  function fillFaceboxFromHref(href, klass) {
    // div
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0]
      var target = href.replace(url,'')
      if (target == '#') return
      $.facebox.reveal($(target).html(), klass)

    // image
    } else if (href.match($.facebox.settings.imageTypesRegexp)) {
      fillFaceboxFromImage(href, klass)
    // ajax
    } else {
      fillFaceboxFromAjax(href, klass)
    }
  }

  function fillFaceboxFromImage(href, klass) {
    var image = new Image()
    image.onload = function() {
      $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
    }
    image.src = href
  }

  function fillFaceboxFromAjax(href, klass) {
    $.facebox.jqxhr = $.get(href, function(data) { $.facebox.reveal(data, klass) })
  }

  function skipOverlay() {
    return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null
  }

  function showOverlay() {
    if (skipOverlay()) return

    if ($('#facebox_overlay').length == 0)
      $("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')

    $('#facebox_overlay').hide().addClass("facebox_overlayBG")
      .css('opacity', $.facebox.settings.opacity)
      .click(function() { $(document).trigger('close.facebox') })
      .fadeIn(200)
    return false
  }

  function hideOverlay() {
    if (skipOverlay()) return

    $('#facebox_overlay').fadeOut(200, function(){
      $("#facebox_overlay").removeClass("facebox_overlayBG")
      $("#facebox_overlay").addClass("facebox_hide")
      $("#facebox_overlay").remove()
    })

    return false
  }

  /*
   * Bindings
   */

  $(document).bind('close.facebox', function() {
    if ($.facebox.jqxhr) {
      $.facebox.jqxhr.abort()
      $.facebox.jqxhr = null
    }
    $(document).unbind('keydown.facebox')
    $('#facebox').fadeOut(function() {
      $('#facebox .content').removeClass().addClass('content')
      $('#facebox .loading').remove()
      $(document).trigger('afterClose.facebox')
    })
    hideOverlay()
  })

})(jQuery);
(function(){var a=(function(){var a={};var b=function(b,c,d){var e=b.split(".");for(var f=0;f<e.length-1;f++){if(!d[e[f]])d[e[f]]={};d=d[e[f]];}if(typeof c==="function")if(c.isClass)d[e[f]]=c;else d[e[f]]=function(){return c.apply(a,arguments);};else d[e[f]]=c;};var c=function(c,d,e){b(c,d,a);if(e)b(c,d,window.filepicker);};var d=function(b,d,e){if(typeof b==="function"){e=d;d=b;b='';}if(b)b+=".";var f=d.call(a);for(var g in f)c(b+g,f[g],e);};var e=function(b){b.apply(a,arguments);};return{extend:d,internal:e};})();if(!window.filepicker)window.filepicker=a;else for(attr in a)window.filepicker[attr]=a[attr];})();filepicker.extend("ajax",function(){var a=this;var b=function(a,b){b.method='GET';f(a,b);};var c=function(b,c){c.method='POST';b+=(b.indexOf('?')>=0?'&':'?')+'_cacheBust='+a.util.getId();f(b,c);};var d=function(b,c){var e=[];for(var f in b){var g=b[f];if(c)f=c+'['+f+']';var h;switch(a.util.typeOf(g)){case 'object':h=d(g,f);break;case 'array':var i={};for(var j=0;j<g.length;j++)i[j]=g[j];h=d(i,f);break;default:h=f+'='+encodeURIComponent(g);break;}if(g!==null)e.push(h);}return e.join('&');};var e=function(){try{return new window.XMLHttpRequest();}catch(a){try{return new window.ActiveXObject("Msxml2.XMLHTTP");}catch(a){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(a){return null;}}}};var f=function(b,c){b=b||"";var f=c.method?c.method.toUpperCase():"POST";var h=c.success||function(){};var i=c.error||function(){};var j=c.async===undefined?true:c.async;var k=c.data||null;var l=c.processData===undefined?true:c.processData;var m=c.headers||{};var n=a.util.parseUrl(b);var o=window.location.protocol+'//'+window.location.host;var p=o!==n.origin;var q=false;if(k&&l)k=d(c.data);var r;if(c.xhr)r=c.xhr;else{r=e();if(!r){c.error("Ajax not allowed");return r;}}if(p&&window.XDomainRequest&&!("withCredentials" in r))return g(b,c);if(c.progress&&r.upload)r.upload.addEventListener("progress",function(a){if(a.lengthComputable)c.progress(Math.round((a.loaded*95)/a.total));},false);var s=function(){if(r.readyState==4&&!q){if(c.progress)c.progress(100);if(r.status>=200&&r.status<300){var b=r.responseText;if(c.json)try{b=a.json.decode(b);}catch(d){t.call(r,"Invalid json: "+b);return;}h(b,r.status,r);q=true;}else{t.call(r,r.responseText);q=true;}}};r.onreadystatechange=s;var t=function(a){if(q)return;if(c.progress)c.progress(100);q=true;if(this.status==400){i("bad_params",this.status,this);return;}else if(this.status==403){i("not_authorized",this.status,this);return;}else if(this.status==404){i("not_found",this.status,this);return;}if(p)if(this.readyState==4&&this.status===0){i("CORS_not_allowed",this.status,this);return;}else{i("CORS_error",this.status,this);return;}i(a,this.status,this);};r.onerror=t;if(k&&f=='GET'){b+=(b.indexOf('?')!=-1?'&':'?')+k;k=null;}r.open(f,b,j);if(c.json)r.setRequestHeader('Accept','application/json, text/javascript');else r.setRequestHeader('Accept','text/javascript, text/html, application/xml, text/xml, */*');var u=m['Content-Type']||m['content-type'];if(k&&l&&(f=="POST"||f=="PUT")&&u==undefined)r.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=utf-8');if(m)for(var v in m)r.setRequestHeader(v,m[v]);r.send(k);return r;};var g=function(b,c){if(!window.XDomainRequest)return null;var e=c.method?c.method.toUpperCase():"POST";var f=c.success||function(){};var g=c.error||function(){};var h=c.data||{};if(window.location.protocol=="http:")b=b.replace("https:","http:");else if(window.location.protocol=="https:")b=b.replace("http:","https:");if(c.async)throw new a.FilepickerException("Asyncronous Cross-domain requests are not supported");if(e!="GET"&&e!="POST"){h._method=e;e="POST";}if(c.processData!==false)h=h?d(h):null;if(h&&e=='GET'){b+=(b.indexOf('?')>=0?'&':'?')+h;h=null;}b+=(b.indexOf('?')>=0?'&':'?')+'_xdr=true&_cacheBust='+a.util.getId();var i=new window.XDomainRequest();i.onload=function(){var b=i.responseText;if(c.progress)c.progress(100);if(c.json)try{b=a.json.decode(b);}catch(d){g("Invalid json: "+b,200,i);return;}f(b,200,i);};i.onerror=function(){if(c.progress)c.progress(100);g(i.responseText||"CORS_error",this.status||500,this);};i.onprogress=function(){};i.ontimeout=function(){};i.timeout=30000;i.open(e,b,true);i.send(h);return i;};return{get:b,post:c,request:f};});filepicker.extend("base64",function(){var a=this;_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var b=function(a,b){b=b||b===undefined;var c="";var e,f,g,h,i,j,k;var l=0;if(b)a=d(a);while(l<a.length){e=a.charCodeAt(l);f=a.charCodeAt(l+1);g=a.charCodeAt(l+2);l+=3;h=e>>2;i=((e&3)<<4)|(f>>4);j=((f&15)<<2)|(g>>6);k=g&63;if(isNaN(f))j=k=64;else if(isNaN(g))k=64;c=c+_keyStr.charAt(h)+_keyStr.charAt(i)+_keyStr.charAt(j)+_keyStr.charAt(k);}return c;};var c=function(a,b){b=b||b===undefined;var c="";var d,f,g;var h,i,j,k;var l=0;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(l<a.length){h=_keyStr.indexOf(a.charAt(l));i=_keyStr.indexOf(a.charAt(l+1));j=_keyStr.indexOf(a.charAt(l+2));k=_keyStr.indexOf(a.charAt(l+3));l+=4;d=(h<<2)|(i>>4);f=((i&15)<<4)|(j>>2);g=((j&3)<<6)|k;c=c+String.fromCharCode(d);if(j!=64)c=c+String.fromCharCode(f);if(k!=64)c=c+String.fromCharCode(g);}if(b)c=e(c);return c;};var d=function(a){a=a.replace(/\r\n/g,"\n");var b="";for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(d<128)b+=String.fromCharCode(d);else if((d>127)&&(d<2048)){b+=String.fromCharCode((d>>6)|192);b+=String.fromCharCode((d&63)|128);}else{b+=String.fromCharCode((d>>12)|224);b+=String.fromCharCode(((d>>6)&63)|128);b+=String.fromCharCode((d&63)|128);}}return b;};var e=function(a){var b="";var c=0;var d=c1=c2=0;while(c<a.length){d=a.charCodeAt(c);if(d<128){b+=String.fromCharCode(d);c++;}else if((d>191)&&(d<224)){c2=a.charCodeAt(c+1);b+=String.fromCharCode(((d&31)<<6)|(c2&63));c+=2;}else{c2=a.charCodeAt(c+1);c3=a.charCodeAt(c+2);b+=String.fromCharCode(((d&15)<<12)|((c2&63)<<6)|(c3&63));c+=3;}}return b;};return{encode:b,decode:c};},true);filepicker.extend("browser",function(){var a=this;var b=function(){return !!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i));};var c=function(){return !!navigator.userAgent.match(/Android/i);};var d=function(){return !!navigator.userAgent.match(/MSIE 7\.0/i);};return{isIOS:b,isAndroid:c,isIE7:d};});filepicker.extend("comm",function(){var a=this;var b="filepicker_comm_iframe";var c=function(){if(window.frames[b]===undefined){f();var c;c=document.createElement("iframe");c.id=c.name=b;c.src=a.urls.COMM;c.style.display='none';document.body.appendChild(c);}};var d=function(b){if(b.origin!=a.urls.BASE)return;var c=a.json.parse(b.data);a.handlers.run(c);};var e=false;var f=function(){if(e)return;else e=true;if(window.addEventListener)window.addEventListener("message",d,false);else if(window.attachEvent)window.attachEvent("onmessage",d);else throw new a.FilepickerException("Unsupported browser");};var g=function(){if(window.removeEventListener)window.removeEventListener("message",d,false);else if(window.attachEvent)window.detachEvent("onmessage",d);else throw new a.FilepickerException("Unsupported browser");if(!e)return;else e=false;var c=document.getElementsByName(b);for(var f=0;f<c.length;f++)c[f].parentNode.removeChild(c[f]);try{delete window.frames[b];}catch(g){}};return{openChannel:c,closeChannel:g};});filepicker.extend("comm_fallback",function(){var a=this;var b="filepicker_comm_iframe";var c="host_comm_iframe";var d="";var e=200;var f=function(){g();};var g=function(){if(window.frames[c]===undefined){var b;b=document.createElement("iframe");b.id=b.name=c;d=b.src=a.urls.constructHostCommFallback();b.style.display='none';var e=function(){d=b.contentWindow.location.href;h();};if(b.attachEvent)b.attachEvent('onload',e);else b.onload=e;document.body.appendChild(b);}};var h=function(){if(window.frames[b]===undefined){var c;c=document.createElement("iframe");c.id=c.name=b;c.src=a.urls.FP_COMM_FALLBACK+"?host_url="+encodeURIComponent(d);c.style.display='none';document.body.appendChild(c);}m();};var i=false;var j=undefined;var k="";var l=function(){var d=window.frames[b];if(!d)return;var e=d.frames[c];if(!e)return;var f=e.location.hash;if(f&&f.charAt(0)=="#")f=f.substr(1);if(f===k)return;k=f;if(!k)return;var g;try{g=a.json.parse(f);}catch(h){}if(g)a.handlers.run(g);};var m=function(){if(i)return;else i=true;j=window.setInterval(l,e);};var n=function(){window.clearInterval(j);if(!i)return;else i=false;var a=document.getElementsByName(b);for(var d=0;d<a.length;d++)a[d].parentNode.removeChild(a[d]);try{delete window.frames[b];}catch(e){}a=document.getElementsByName(c);for(d=0;d<a.length;d++)a[d].parentNode.removeChild(a[d]);try{delete window.frames[c];}catch(e){}};var o=!('postMessage' in window);var p=function(a){if(a!==o){o=!!a;if(o)r();else s();}};var q;var r=function(){q=a.comm;a.comm={openChannel:f,closeChannel:n};};var s=function(){a.comm=q;q=undefined;};if(o)r();return{openChannel:f,closeChannel:n,isEnabled:o};});filepicker.extend("conversions",function(){var a=this;var b={width:'number',height:'number',fit:'string',format:'string',watermark:'string',watermark_size:'number',watermark_position:'string',align:'string',crop:'string or array',quality:'number',text:'string',text_font:'string',text_size:'number',text_color:'string',text_align:'string',text_padding:'number',policy:'string',signature:'string',storeLocation:'string',storePath:'string'};var c=function(c){var d;for(var e in c){d=false;for(var f in b)if(e==f){d=true;if(b[f].indexOf(a.util.typeOf(c[e]))===-1)throw new a.FilepickerException("Conversion parameter "+e+" is not the right type: "+c[e]+". Should be a "+b[f]);}if(!d)throw new a.FilepickerException("Conversion parameter "+e+" is not a valid parameter.");}};var d=function(b,d,e,f,g){c(d);if(d.crop&&a.util.isArray(d.crop))d.crop=d.crop.join(",");a.ajax.post(b+'/convert',{data:d,json:true,success:function(b){e(a.util.standardizeFPFile(b));},error:function(b,c,d){if(b=="not_found")f(new a.errors.FPError(141));else if(b=="bad_params")f(new a.errors.FPError(142));else if(b=="not_authorized")f(new a.errors.FPError(403));else f(new a.errors.FPError(143));},progress:g});};return{convert:d};});filepicker.extend("cookies",function(){var a=this;var b=function(b){var c=function(c){if(c.type!=="ThirdPartyCookies")return;a.cookies.THIRD_PARTY_COOKIES=!!c.payload;if(b&&typeof b==="function")b(!!c.payload);};return c;};var c=function(c){var d=b(c);a.handlers.attach('cookies',d);a.comm.openChannel();};return{checkThirdParty:c};});filepicker.extend("dragdrop",function(){var a=this;var b=function(){return(!!window.FileReader||navigator.userAgent.indexOf("Safari")>=0)&&('draggable' in document.createElement('span'));};var c=function(c,d){var e="No DOM element found to create drop pane";if(!c)throw new a.FilepickerException(e);if(c.jquery){if(c.length===0)throw new a.FilepickerException(e);c=c[0];}if(!b()){a.util.console.error("Your browser doesn't support drag-drop functionality");return false;}d=d||{};var f=d.dragEnter||function(){};var g=d.dragLeave||function(){};var h=d.onStart||function(){};var i=d.onSuccess||function(){};var j=d.onError||function(){};var k=d.onProgress||function(){};var l=d.mimetypes;if(!l)if(d.mimetype)l=[d.mimetype];else l=["*/*"];if(a.util.typeOf(l)=='string')l=l.split(',');var m=d.extensions;if(!m)if(d.extension)m=[d.extensions];if(a.util.typeOf(m)=='string')m=m.split(',');c.addEventListener("dragenter",function(a){f();a.stopPropagation();a.preventDefault();return false;},false);c.addEventListener("dragleave",function(a){g();a.stopPropagation();a.preventDefault();return false;},false);c.addEventListener("dragover",function(a){a.preventDefault();return false;},false);c.addEventListener("drop",function(b){b.stopPropagation();b.preventDefault();var c;var d;var e;if(b.dataTransfer.items){d=b.dataTransfer.items;for(c=0;c<d.length;c++){e=d[c]&&d[c].webkitGetAsEntry?d[c].webkitGetAsEntry():undefined;if(e&&!!e.isDirectory){j("WrongType","Uploading a folder is not allowed");return;}}}var f=b.dataTransfer.files;var g=f.length;if(t(f)){h(f);for(c=0;c<f.length;c++)a.store(f[c],p(c,g),q,r(c,g));}});var n={};var o=[];var p=function(a,b){return function(c){if(!d.multiple)i([c]);else{o.push(c);if(o.length==b){i(o);o=[];}else{n[a]=100;s(b);}}};};var q=function(a){j("UploadError",a.toString());};var r=function(a,b){return function(c){n[a]=c;s(b);};};var s=function(a){var b=0;for(var c in n)b+=n[c];var d=b/a;k(d);};var t=function(b){if(b.length>0){if(b.length>1&&!d.multiple){j("TooManyFiles","Only one file at a time");return false;}var c;var e;var f;for(var g=0;g<b.length;g++){c=false;e=b[g];f=e.name||e.fileName||'"Unknown file"';for(var h=0;h<l.length;h++){var i=a.mimetypes.getMimetype(e);c=c||a.mimetypes.matchesMimetype(i,l[h]);}if(!c){j("WrongType",f+" isn't the right type of file");return false;}if(m){c=false;for(h=0;h<m.length;h++)c=c||a.util.endsWith(f,m[h]);if(!c){j("WrongType",f+" isn't the right type of file");return false;}}if(e.size&&!!d.maxSize&&e.size>d.maxSize){j("WrongSize",f+" is too large ("+e.size+" Bytes)");return false;}}return true;}else j("NoFilesFound","No files uploaded");return false;};return true;};return{enabled:b,makeDropPane:c};});filepicker.extend("errors",function(){var a=this;var b=function(a){if(this===window)return new b(a);this.code=a;if(filepicker.debug){var c=filepicker.error_map[this.code];this.message=c.message;this.moreInfo=c.moreInfo;this.toString=function(){return "FPError "+this.code+": "+this.message+". For help, see "+this.moreInfo;};}else this.toString=function(){return "FPError "+this.code+". Include filepicker_debug.js for more info";};return this;};b.isClass=true;var c=function(b){if(filepicker.debug)a.util.console.error(b.toString());};return{FPError:b,handleError:c};},true);filepicker.extend("exporter",function(){var a=this;var b=function(b){var c=function(c,d,e){if(b[d]&&!a.util.isArray(b[d]))b[d]=[b[d]];else if(b[c])b[d]=[b[c]];else if(e)b[d]=e;};if(b.mimetype&&b.extension)throw a.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the export function");c('service','services');if(b.services)for(var d=0;d<b.services.length;d++){var e=(''+b.services[d]).replace(" ","");var f=a.services[e];b.services[d]=(f===undefined?e:f);}if(b.openTo)b.openTo=a.services[b.openTo]||b.openTo;a.util.setDefault(b,'container','modal');};var c=function(b,c){var d=function(d){if(d.type!=="filepickerUrl")return;if(d.error){a.util.console.error(d.error);c(a.errors.FPError(132));}else{var e={};e.url=d.payload.url;e.filename=d.payload.data.filename;e.mimetype=d.payload.data.type;e.size=d.payload.data.size;e.isWriteable=true;b(e);}a.modal.close();};return d;};var d=function(e,f,g,h){b(f);if(f.debug){setTimeout(function(){g({url:"https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",filename:'test.png',mimetype:'image/png',size:58979});},1);return;}if(a.cookies.THIRD_PARTY_COOKIES===undefined){a.cookies.checkThirdParty(function(){d(e,f,g,h);});return;}var i=a.util.getId();var j=false;var k=function(a){j=true;g(a);};var l=function(a){j=true;h(a);};var m=function(){if(!j){j=true;h(a.errors.FPError(131));}};if(f.container=='modal'&&(f.mobile||a.window.shouldForce()))f.container='window';a.window.open(f.container,a.urls.constructExportUrl(e,f,i),m);a.handlers.attach(i,c(k,l));};return{createExporter:d};});filepicker.extend("files",function(){var a=this;var b=function(b,d,e,f,g){var h=d.base64encode===undefined;if(h)d.base64encode=true;d.base64encode=d.base64encode!==false;var i=function(b){if(h)b=a.base64.decode(b,!!d.asText);e(b);};c.call(this,b,d,i,f,g);};var c=function(b,c,d,e,f){if(c.cache!==true)c._cacheBust=a.util.getId();a.ajax.get(b,{data:c,headers:{'X-NO-STREAM':true},success:d,error:function(b,c,d){if(b=="CORS_not_allowed")e(new a.errors.FPError(113));else if(b=="CORS_error")e(new a.errors.FPError(114));else if(b=="not_found")e(new a.errors.FPError(115));else if(b=="bad_params")e(new a.errors.FPError(400));else if(b=="not_authorized")e(new a.errors.FPError(403));else e(new a.errors.FPError(118));},progress:f});};var d=function(b,c,d,e,f){if(!(window.File&&window.FileReader&&window.FileList&&window.Blob)){f(10);a.files.storeFile(b,{},function(b){f(50);a.files.readFromFPUrl(b.url,c,d,e,function(a){f(50+a/2);});},e,function(a){f(a/2);});return;}var g=!!c.base64encode;var h=!!c.asText;var i=new FileReader();i.onprogress=function(a){if(a.lengthComputable)f(Math.round((a.loaded/a.total)*100));};i.onload=function(b){f(100);if(g)d(a.base64.encode(b.target.result,h));else d(b.target.result);};i.onerror=function(b){switch(b.target.error.code){case b.target.error.NOT_FOUND_ERR:e(new a.errors.FPError(115));break;case b.target.error.NOT_READABLE_ERR:e(new a.errors.FPError(116));break;case b.target.error.ABORT_ERR:e(new a.errors.FPError(117));break;default:e(new a.errors.FPError(118));break;}};if(h||!i.readAsBinaryString)i.readAsText(b);else i.readAsBinaryString(b);};var e=function(b,c,d,e,f,g){var h=d.mimetype||'text/plain';a.ajax.post(a.urls.constructWriteUrl(b,d),{headers:{'Content-Type':h},data:c,processData:false,json:true,success:function(b){e(a.util.standardizeFPFile(b));},error:function(b,c,d){if(b=="not_found")f(new a.errors.FPError(121));else if(b=="bad_params")f(new a.errors.FPError(122));else if(b=="not_authorized")f(new a.errors.FPError(403));else f(new a.errors.FPError(123));},progress:g});};var f=function(b,c,d,e,f,g){var h=function(b,c,d){if(b=="not_found")f(new a.errors.FPError(121));else if(b=="bad_params")f(new a.errors.FPError(122));else if(b=="not_authorized")f(new a.errors.FPError(403));else f(new a.errors.FPError(123));};var i=function(b){e(a.util.standardizeFPFile(b));};k(c,a.urls.constructWriteUrl(b,d),i,h,g);};var g=function(b,c,d,e,f,g){var h=function(b,c,d){if(b=="not_found")f(new a.errors.FPError(121));else if(b=="bad_params")f(new a.errors.FPError(122));else if(b=="not_authorized")f(new a.errors.FPError(403));else f(new a.errors.FPError(123));};var i=function(b){e(a.util.standardizeFPFile(b));};d.mimetype=c.type;k(c,a.urls.constructWriteUrl(b,d),i,h,g);};var h=function(b,c,d,e,f,g){a.ajax.post(a.urls.constructWriteUrl(b,d),{data:{'url':c},json:true,success:function(b){e(a.util.standardizeFPFile(b));},error:function(b,c,d){if(b=="not_found")f(new a.errors.FPError(121));else if(b=="bad_params")f(new a.errors.FPError(122));else if(b=="not_authorized")f(new a.errors.FPError(403));else f(new a.errors.FPError(123));},progress:g});};var i=function(b,c,d,e,f){if(b.files){if(b.files.length===0)e(new a.errors.FPError(115));else j(b.files[0],c,d,e,f);return;}a.util.setDefault(c,'storage','S3');if(!c.filename)c.filename=b.value.replace("C:\\fakepath\\","")||b.name;var g=b.name;b.name="fileUpload";a.iframeAjax.post(a.urls.constructStoreUrl(c),{data:b,processData:false,json:true,success:function(c){b.name=g;d(a.util.standardizeFPFile(c));},error:function(b,c,d){if(b=="not_found")e(new a.errors.FPError(121));else if(b=="bad_params")e(new a.errors.FPError(122));else if(b=="not_authorized")e(new a.errors.FPError(403));else e(new a.errors.FPError(123));}});};var j=function(b,c,d,e,f){a.util.setDefault(c,'storage','S3');var g=function(b,c,d){if(b=="not_found")e(new a.errors.FPError(121));else if(b=="bad_params")e(new a.errors.FPError(122));else if(b=="not_authorized")e(new a.errors.FPError(403));else{a.util.console.error(b);e(new a.errors.FPError(123));}};var h=function(b){d(a.util.standardizeFPFile(b));};if(!c.filename)c.filename=b.name||b.fileName;k(b,a.urls.constructStoreUrl(c),h,g,f);};var k=function(b,c,d,e,f){if(b.files)b=b.files[0];var g=!!window.FormData&&!!window.XMLHttpRequest;if(g){data=new FormData();data.append('fileUpload',b);a.ajax.post(c,{json:true,processData:false,data:data,success:d,error:e,progress:f});}else a.iframeAjax.post(c,{data:b,json:true,success:d,error:e});};var l=function(b,c,d,e,f){a.util.setDefault(c,'storage','S3');a.util.setDefault(c,'mimetype','text/plain');a.ajax.post(a.urls.constructStoreUrl(c),{headers:{'Content-Type':c.mimetype},data:b,processData:false,json:true,success:function(b){d(a.util.standardizeFPFile(b));},error:function(b,c,d){if(b=="not_found")e(new a.errors.FPError(121));else if(b=="bad_params")e(new a.errors.FPError(122));else if(b=="not_authorized")e(new a.errors.FPError(403));else e(new a.errors.FPError(123));},progress:f});};var m=function(b,c,d,e,f){a.util.setDefault(c,'storage','S3');a.ajax.post(a.urls.constructStoreUrl(c),{data:{'url':b},json:true,success:function(b){d(a.util.standardizeFPFile(b));},error:function(b,c,d){if(b=="not_found")e(new a.errors.FPError(151));else if(b=="bad_params")e(new a.errors.FPError(152));else if(b=="not_authorized")e(new a.errors.FPError(403));else e(new a.errors.FPError(153));},progress:f});};var n=function(b,c,d,e){var f=['uploaded','modified','created'];if(c.cache!==true)c._cacheBust=a.util.getId();a.ajax.get(b+"/metadata",{json:true,data:c,success:function(a){for(var b=0;b<f.length;b++)if(a[f[b]])a[f[b]]=new Date(a[f[b]]);d(a);},error:function(b,c,d){if(b=="not_found")e(new a.errors.FPError(161));else if(b=="bad_params")e(new a.errors.FPError(400));else if(b=="not_authorized")e(new a.errors.FPError(403));else e(new a.errors.FPError(162));}});};var o=function(b,c,d,e){c.key=a.apikey;a.ajax.post(b+"/remove",{data:c,success:function(a){d();},error:function(b,c,d){if(b=="not_found")e(new a.errors.FPError(171));else if(b=="bad_params")e(new a.errors.FPError(400));else if(b=="not_authorized")e(new a.errors.FPError(403));else e(new a.errors.FPError(172));}});};return{readFromUrl:c,readFromFile:d,readFromFPUrl:b,writeDataToFPUrl:e,writeFileToFPUrl:g,writeFileInputToFPUrl:f,writeUrlToFPUrl:h,storeFileInput:i,storeFile:j,storeUrl:m,storeData:l,stat:n,remove:o};});filepicker.extend("handlers",function(){var a=this;var b={};var c=function(a,c){if(b.hasOwnProperty(a))b[a].push(c);else b[a]=[c];return c;};var d=function(a,c){var d=b[a];if(!d)return;if(c){for(var e=0;e<d.length;e++)if(d[e]===c){d.splice(e,1);break;}if(d.length===0)delete b[a];}else delete b[a];};var e=function(a){var c=a.id;if(b.hasOwnProperty(c)){var d=b[c];for(var e=0;e<d.length;e++)d[e](a);return true;}return false;};return{attach:c,detach:d,run:e};});filepicker.extend("iframeAjax",function(){var a=this;var b="ajax_iframe";var c=[];var d=false;var e=function(a,b){b.method='GET';h(a,b);};var f=function(b,c){c.method='POST';b+=(b.indexOf('?')>=0?'&':'?')+'_cacheBust='+a.util.getId();h(b,c);};var g=function(){if(c.length>0){var a=c.shift();h(a.url,a.options);}};var h=function(e,f){if(d){c.push({url:e,options:f});return;}e+=(e.indexOf('?')>=0?'&':'?')+'_cacheBust='+a.util.getId();e+="&Content-Type=text%2Fhtml";a.comm.openChannel();var g;try{g=document.createElement('<iframe name="'+b+'">');}catch(h){g=document.createElement('iframe');}g.id=g.name=b;g.style.display='none';var k=function(){d=false;};if(g.attachEvent){g.attachEvent("onload",k);g.attachEvent("onerror",k);}else g.onerror=g.onload=k;g.id=b;g.name=b;g.style.display='none';g.onerror=g.onload=function(){d=false;};document.body.appendChild(g);a.handlers.attach('upload',i(f));var l=document.createElement("form");l.method=f.method||'GET';l.action=e;l.target=b;var m=f.data;if(a.util.isFileInputElement(m)||a.util.isFile(m))l.encoding=l.enctype="multipart/form-data";document.body.appendChild(l);if(a.util.isFile(m)){var n=j(m);if(!n)throw a.FilepickerException("Couldn't find corresponding file input.");m={'fileUpload':n};}else if(a.util.isFileInputElement(m)){var o=m;m={};m.fileUpload=o;}else if(m&&a.util.isElement(m)&&m.tagName=="INPUT"){o=m;m={};m[o.name]=o;}else if(f.processData!==false)m={'data':m};m.format='iframe';var p={};for(var q in m){var r=m[q];if(a.util.isElement(r)&&r.tagName=="INPUT"){p[q]={par:r.parentNode,sib:r.nextSibling,name:r.name,input:r,focused:r==document.activeElement};r.name=q;l.appendChild(r);}else{var s=document.createElement("input");s.name=q;s.value=r;l.appendChild(s);}}d=true;window.setTimeout(function(){l.submit();for(var a in p){var b=p[a];b.par.insertBefore(b.input,b.sib);b.input.name=b.name;if(b.focused)b.input.focus();}l.parentNode.removeChild(l);},1);};var i=function(b){var c=b.success||function(){};var e=b.error||function(){};var f=function(b){if(b.type!=="Upload")return;d=false;var f=b.payload;if(f.error)e(f.error);else c(f);a.handlers.detach("upload");g();};return f;};var j=function(a){var b=document.getElementsByTagName("input");for(var c=0;c<b.length;c++){var d=b[0];if(d.type!="file"||!d.files||!d.files.length)continue;for(var e=0;e<d.files.length;e++)if(d.files[e]===a)return d;}return null;};return{get:e,post:f,request:h};});filepicker.extend("json",function(){var a=this;var b={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};var c=function(a){return b[a]||'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);};var d=function(a){a=a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');return(/^[\],:{}\s]*$/).test(a);};var e=function(b){if(window.JSON&&window.JSON.stringify)return window.JSON.stringify(b);if(b&&b.toJSON)b=b.toJSON();var d=[];switch(a.util.typeOf(b)){case 'string':return '"'+b.replace(/[\x00-\x1f\\"]/g,c)+'"';case 'array':for(var f=0;f<b.length;f++)d.push(e(b[f]));return '['+d+']';case 'object':case 'hash':var g;var h;for(h in b){g=e(b[h]);if(g)d.push(e(h)+':'+g);g=null;}return '{'+d+'}';case 'number':case 'boolean':return ''+b;case 'null':return 'null';default:return 'null';}return null;};var f=function(b,c){if(!b||a.util.typeOf(b)!='string')return null;if(window.JSON&&window.JSON.parse)return window.JSON.parse(b);else{if(c)if(!d(b))throw new Error('JSON could not decode the input; security is enabled and the value is not secure.');return eval('('+b+')');}};return{validate:d,encode:e,stringify:e,decode:f,parse:f};});filepicker.extend(function(){var a=this;a.API_VERSION="v1";var b=function(b){a.apikey=b;};var c=function(a){this.text=a;this.toString=function(){return "FilepickerException: "+this.text;};return this;};c.isClass=true;var d=function(){if(!a.apikey)throw new a.FilepickerException("API Key not found");};var e=function(b,c,e){d();if(typeof b==="function"){e=c;c=b;b={};}b=b||{};c=c||function(){};e=e||a.errors.handleError;a.picker.createPicker(b,c,e,false);};var f=function(b,c,e){d();if(typeof b==="function"){e=c;c=b;b={};}b=b||{};c=c||function(){};e=e||a.errors.handleError;a.picker.createPicker(b,c,e,true);};var g=function(b,c,e,f){d();if(!b||!c||typeof b==="function"||typeof b==="function")throw new a.FilepickerException("Not all required parameters given, missing picker or store options");f=f||a.errors.handleError;var g=!!b.multiple;var h=!!b?a.util.clone(b):{};h.storeLocation=c.location||'S3';h.storePath=c.path;if(g&&h.storePath)if(h.storePath.charAt(h.storePath.length-1)!="/")throw new a.FilepickerException("pickAndStore with multiple files requires a path that ends in '/'");var i=e;if(!g)i=function(a){e([a]);};a.picker.createPicker(h,i,f,g);};var h=function(b,c,e,f,g){d();if(!b)throw new a.FilepickerException("No input given - nothing to read!");if(typeof c==="function"){g=f;f=e;e=c;c={};}c=c||{};e=e||function(){};f=f||a.errors.handleError;g=g||function(){};if(typeof b=="string")if(a.util.isFPUrl(b))a.files.readFromFPUrl(b,c,e,f,g);else a.files.readFromUrl(b,c,e,f,g);else if(a.util.isFileInputElement(b))if(!b.files)i(b,c,e,f,g);else if(b.files.length===0)f(new a.errors.FPError(115));else a.files.readFromFile(b.files[0],c,e,f,g);else if(a.util.isFile(b))a.files.readFromFile(b,c,e,f,g);else if(b.url)a.files.readFromFPUrl(b.url,c,e,f,g);else throw new a.FilepickerException("Cannot read given input: "+b+". Not a url, file input, DOM File, or FPFile object.");};var i=function(b,c,d,e,f){f(10);a.store(b,function(b){f(50);a.read(b,c,d,e,function(a){f(50+a/2);});},e);};var j=function(b,c,e,f,g,h){d();if(!b)throw new a.FilepickerException("No fpfile given - nothing to write to!");if(c===undefined||c===null)throw new a.FilepickerException("No input given - nothing to write!");if(typeof e==="function"){h=g;g=f;f=e;e={};}e=e||{};f=f||function(){};g=g||a.errors.handleError;h=h||function(){};var i;if(a.util.isFPUrl(b))i=b;else if(b.url)i=b.url;else throw new a.FilepickerException("Invalid file to write to: "+b+". Not a filepicker url or FPFile object.");if(typeof c=="string")a.files.writeDataToFPUrl(i,c,e,f,g,h);else if(a.util.isFileInputElement(c))if(!c.files)a.files.writeFileInputToFPUrl(i,c,e,f,g,h);else if(c.files.length===0)g(new a.errors.FPError(115));else a.files.writeFileToFPUrl(i,c.files[0],e,f,g,h);else if(a.util.isFile(c))a.files.writeFileToFPUrl(i,c,e,f,g,h);else if(c.url)a.files.writeUrlToFPUrl(i,c.url,e,f,g,h);else throw new a.FilepickerException("Cannot read from given input: "+c+". Not a string, file input, DOM File, or FPFile object.");};var k=function(b,c,e,f,g,h){d();if(!b)throw new a.FilepickerException("No fpfile given - nothing to write to!");if(c===undefined||c===null)throw new a.FilepickerException("No input given - nothing to write!");if(typeof e==="function"){h=g;g=f;f=e;e={};}e=e||{};f=f||function(){};g=g||a.errors.handleError;h=h||function(){};var i;if(a.util.isFPUrl(b))i=b;else if(b.url)i=b.url;else throw new a.FilepickerException("Invalid file to write to: "+b+". Not a filepicker url or FPFile object.");a.files.writeUrlToFPUrl(i,c,e,f,g,h);};var l=function(b,c,e,f){d();if(typeof c==="function"){f=e;e=c;c={};}c=!!c?a.util.clone(c):{};e=e||function(){};f=f||a.errors.handleError;var g;if(typeof b=="string"&&a.util.isUrl(b))g=b;else if(b.url){g=b.url;if(!c.mimetype&&!c.extension)c.mimetype=b.mimetype;if(!c.suggestedFilename)c.suggestedFilename=b.filename;}else throw new a.FilepickerException("Invalid file to export: "+b+". Not a valid url or FPFile object. You may want to use filepicker.store() to get an FPFile to export");a.exporter.createExporter(g,c,e,f);};var m=function(b,c,e,f,g){d();if(typeof c==="function"){g=f;f=e;e=c;c={};}c=!!c?a.util.clone(c):{};e=e||function(){};f=f||a.errors.handleError;g=g||function(){};if(typeof b=="string")a.files.storeData(b,c,e,f,g);else if(a.util.isFileInputElement(b))if(!b.files)a.files.storeFileInput(b,c,e,f,g);else if(b.files.length===0)f(new a.errors.FPError(115));else a.files.storeFile(b.files[0],c,e,f,g);else if(a.util.isFile(b))a.files.storeFile(b,c,e,f,g);else if(b.url){if(!c.filename)c.filename=b.filename;a.files.storeUrl(b.url,c,e,f,g);}else throw new a.FilepickerException("Cannot store given input: "+b+". Not a string, file input, DOM File, or FPFile object.");};var n=function(b,c,e,f,g){d();if(typeof c==="function"){g=f;f=e;e=c;c={};}c=c||{};e=e||function(){};f=f||a.errors.handleError;g=g||function(){};a.files.storeUrl(b,c,e,f,g);};var o=function(b,c,e,f){d();if(typeof c==="function"){f=e;e=c;c={};}c=c||{};e=e||function(){};f=f||a.errors.handleError;var g;if(a.util.isFPUrl(b))g=b;else if(b.url)g=b.url;else throw new a.FilepickerException("Invalid file to get metadata for: "+b+". Not a filepicker url or FPFile object.");a.files.stat(g,c,e,f);};var p=function(b,c,e,f){d();if(typeof c==="function"){f=e;e=c;c={};}c=c||{};e=e||function(){};f=f||a.errors.handleError;var g;if(a.util.isFPUrl(b))g=b;else if(b.url)g=b.url;else throw new a.FilepickerException("Invalid file to remove: "+b+". Not a filepicker url or FPFile object.");a.files.remove(g,c,e,f);};var q=function(b,c,e,f,g,h){d();if(!b)throw new a.FilepickerException("No fpfile given - nothing to convert!");if(typeof e==="function"){h=g;g=f;f=e;e={};}options=!!c?a.util.clone(c):{};e=e||{};f=f||function(){};g=g||a.errors.handleError;h=h||function(){};if(e.location)options.storeLocation=e.location;if(e.path)options.storePath=e.path;var i;if(a.util.isFPUrl(b))i=b;else if(b.url){i=b.url;if(!a.mimetypes.matchesMimetype(b.mimetype,'image/*')){g(new a.errors.FPError(142));return;}}else throw new a.FilepickerException("Invalid file to convert: "+b+". Not a filepicker url or FPFile object.");a.conversions.convert(i,options,f,g,h);};var r=function(b){return a.widgets.constructWidget(b);};var s=function(b,c){return a.dragdrop.makeDropPane(b,c);};return{setKey:b,pick:e,pickMultiple:f,pickAndStore:g,read:h,write:j,writeUrl:k,'export':l,exportFile:l,store:m,storeUrl:n,stat:o,metadata:o,remove:p,convert:q,constructWidget:r,makeDropPane:s,FilepickerException:c};},true);filepicker.extend('mimetypes',function(){var a=this;var b={'.stl':'applicaiton/sla','.hbs':'text/html','.pdf':'application/pdf','.jpg':'image/jpeg','.jpeg':'image/jpeg','.jpe':'image/jpeg','.imp':'application/x-impressionist'};var c=['application/octet-stream','application/download','application/force-download','octet/stream','application/unknown','application/x-download','application/x-msdownload','application/x-secure-download'];var d=function(a){if(a.type){var d=a.type;d=d.toLowerCase();var e=false;for(var f=0;f<c.length;f++)e=e||d==c[f];if(!e)return a.type;}var g=a.name||a.fileName;var h=g.match(/\.\w*$/);if(h)return b[h[0].toLowerCase()]||'';else if(a.type)return a.type;else return '';};var e=function(b,d){if(!b)return d=="*/*";b=a.util.trim(b).toLowerCase();d=a.util.trim(d).toLowerCase();for(var e=0;e<c.length;e++)if(b==c[e])return true;test_parts=b.split("/");against_parts=d.split("/");if(against_parts[0]=="*")return true;if(against_parts[0]!=test_parts[0])return false;if(against_parts[1]=="*")return true;return against_parts[1]==test_parts[1];};return{getMimetype:d,matchesMimetype:e};});filepicker.extend("modal",function(){var a=this;var b="filepicker_shade";var c="filepicker_dialog_container";var d=function(b,c){var d=e(c);var h=f();var i=g(c);var j=document.createElement("iframe");j.name=a.window.WINDOW_NAME;j.id=a.window.WINDOW_NAME;var k=a.window.getSize();var l=Math.min(k[1]-40,500);j.style.width='100%';j.style.height=l-32+'px';j.style.border="none";j.style.position="relative";j.setAttribute('border',0);j.setAttribute('frameborder',0);j.setAttribute('frameBorder',0);j.setAttribute('marginwidth',0);j.setAttribute('marginheight',0);j.src=b;document.body.appendChild(d);h.appendChild(i);h.appendChild(j);document.body.appendChild(h);return j;};var e=function(a){var c=document.createElement("div");c.id=b;c.style.position='fixed';c.style.top=0;c.style.bottom=0;c.style.right=0;c.style.left=0;c.style.backgroundColor='#000000';c.style.opacity='0.5';c.style.filter='alpha(opacity=50)';c.style.zIndex=10000;c.onclick=h(a);return c;};var f=function(){var b=document.createElement("div");b.id=c;b.style.position='fixed';b.style.padding="10px";b.style.background='#ffffff url("https://www.filepicker.io/static/img/spinner.gif") no-repeat 50% 50%';b.style.top='10px';b.style.bottom='auto';b.style.right='auto';var d=a.window.getSize();var e=Math.min(d[1]-40,500);var f=Math.min(d[0]-40,800);var g=(d[0]-f-40)/2;b.style.left=g+"px";b.style.height=e+'px';b.style.width=f+'px';b.style.overflow='hidden';b.style.webkitOverflowScrolling='touch';b.style.border='1px solid #999';b.style.webkitBorderRadius='3px';b.style.borderRadius='3px';b.style.margin='0';b.style.webkitBoxShadow='0 3px 7px rgba(0, 0, 0, 0.3)';b.style.boxShadow='0 3px 7px rgba(0, 0, 0, 0.3)';b.style.zIndex=10001;b.style.boxSizing="content-box";b.style.webkitBoxSizing="content-box";b.style.mozBoxSizing="content-box";return b;};var g=function(a){var b=document.createElement("a");b.appendChild(document.createTextNode('\u00D7'));b.onclick=h(a);b.style.cssFloat="right";b.style.styleFloat="right";b.style.cursor="default";b.style.padding='0 5px 0 0px';b.style.fontSize='1.5em';b.style.color='#555555';b.style.textDecoration='none';return b;};var h=function(d,e){e=!!e;return function(){if(a.uploading&&!e)if(!window.confirm("You are currently uploading. If you choose 'OK', the window will close and your upload will not finish. Do you want to stop uploading and close the window?"))return;a.uploading=false;var f=document.getElementById(b);if(f)document.body.removeChild(f);var g=document.getElementById(c);if(g)document.body.removeChild(g);try{delete window.frames[a.window.WINDOW_NAME];}catch(h){}if(d)d();};};var i=h(function(){});return{generate:d,close:i};});filepicker.extend("picker",function(){var a=this;var b=function(b){var c=function(c,d,e){if(b[d]){if(!a.util.isArray(b[d]))b[d]=[b[d]];}else if(b[c])b[d]=[b[c]];else if(e)b[d]=e;};c('service','services');c('mimetype','mimetypes');c('extension','extensions');if(b.services)for(var d=0;d<b.services.length;d++){var e=(''+b.services[d]).replace(" ","");if(a.services[e]!==undefined)e=a.services[e];b.services[d]=e;}if(b.mimetypes&&b.extensions)throw a.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the pick function");if(!b.mimetypes&&!b.extensions)b.mimetypes=['*/*'];if(b.openTo)b.openTo=a.services[b.openTo]||b.openTo;a.util.setDefault(b,'container','modal');};var c=function(b,c){var d=function(d){if(d.type!=="filepickerUrl")return;a.uploading=false;if(d.error){a.util.console.error(d.error);c(a.errors.FPError(102));}else{var e={};e.url=d.payload.url;e.filename=d.payload.data.filename;e.mimetype=d.payload.data.type;e.size=d.payload.data.size;if(d.payload.data.key)e.key=d.payload.data.key;e.isWriteable=true;b(e);}a.modal.close();};return d;};var d=function(b){b=b||function(){};var c=function(c){if(c.type!=="uploading")return;a.uploading=!!c.payload;b(a.uploading);};return c;};var e=function(b,c){var d=function(d){if(d.type!=="filepickerUrl")return;a.uploading=false;if(d.error){a.util.console.error(d.error);c(a.errors.FPError(102));}else{var e=[];if(!a.util.isArray(d.payload))d.payload=[d.payload];for(var f=0;f<d.payload.length;f++){var g={};var h=d.payload[f];g.url=h.url;g.filename=h.data.filename;g.mimetype=h.data.type;g.size=h.data.size;if(h.data.key)g.key=h.data.key;g.isWriteable=true;e.push(g);}b(e);}a.modal.close();};return d;};var f=function(g,h,i,j){b(g);if(g.debug){setTimeout(function(){h({url:"https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",filename:'test.png',mimetype:'image/png',size:58979});},1);return;}if(a.cookies.THIRD_PARTY_COOKIES===undefined){a.cookies.checkThirdParty(function(){f(g,h,i,!!j);});return;}var k=a.util.getId();var l=false;var m=function(a){l=true;h(a);};var n=function(a){l=true;i(a);};var o=function(){if(!l){l=true;i(a.errors.FPError(101));}};if(g.container=='modal'&&(g.mobile||a.window.shouldForce()))g.container='window';a.window.open(g.container,a.urls.constructPickUrl(g,k,j),o);var p=j?e(m,n):c(m,n);a.handlers.attach(k,p);var q=k+"-upload";a.handlers.attach(q,d(function(){a.handlers.detach(q);}));};return{createPicker:f};});filepicker.extend('services',function(){return{COMPUTER:1,DROPBOX:2,FACEBOOK:3,GITHUB:4,GMAIL:5,IMAGE_SEARCH:6,URL:7,WEBCAM:8,GOOGLE_DRIVE:9,SEND_EMAIL:10,INSTAGRAM:11,FLICKR:12,VIDEO:13,EVERNOTE:14,PICASA:15,WEBDAV:16,FTP:17,ALFRESCO:18,BOX:19,SKYDRIVE:20};},true);filepicker.extend('util',function(){var a=this;var b=function(a){return a.replace(/^\s+|\s+$/g,"");};var c=/^(http|https)\:.*\/\//i;var d=function(a){return !!a.match(c);};var e=function(a){if(!a||a.charAt(0)=='/')a=window.location.protocol+"//"+window.location.host+a;var b=document.createElement('a');b.href=a;var c=b.hostname.indexOf(":")==-1?b.hostname:b.host;var d={source:a,protocol:b.protocol.replace(':',''),host:c,port:b.port,query:b.search,params:(function(){var a={},c=b.search.replace(/^\?/,'').split('&'),d=c.length,e=0,f;for(;e<d;e++){if(!c[e])continue;f=c[e].split('=');a[f[0]]=f[1];}return a;})(),file:(b.pathname.match(/\/([^\/?#]+)$/i)||[,''])[1],hash:b.hash.replace('#',''),path:b.pathname.replace(/^([^\/])/,'/$1'),relative:(b.href.match(/tps?:\/\/[^\/]+(.+)/)||[,''])[1],segments:b.pathname.replace(/^\//,'').split('/')};d.origin=d.protocol+"://"+d.host+(d.port?":"+d.port:'');return d;};var f=function(a,b){return a.indexOf(b,a.length-b.length)!==-1;};return{trim:b,parseUrl:e,isUrl:d,endsWith:f};});filepicker.extend("urls",function(){var a=this;var b="https://www.filepicker.io";if(window.filepicker.hostname)b=window.filepicker.hostname;var c=b+"/dialog/open/";var d=b+"/dialog/save/";var e=b+"/api/store/";var f=function(b,d,e){return c+"?key="+a.apikey+"&id="+d+"&referrer="+window.location.hostname+"&iframe="+(b.container!='window')+"&version="+a.API_VERSION+(b.services?"&s="+b.services.join(","):"")+(e?"&multi="+!!e:"")+(b.mimetypes!==undefined?"&m="+b.mimetypes.join(","):"")+(b.extensions!==undefined?"&ext="+b.extensions.join(","):"")+(b.openTo!==undefined?"&loc="+b.openTo:"")+(b.maxSize?"&maxsize="+b.maxSize:"")+(b.signature?"&signature="+b.signature:"")+(b.policy?"&policy="+b.policy:"")+(b.mobile!==undefined?"&mobile="+b.mobile:"")+(b.storeLocation?"&storeLocation="+b.storeLocation:"")+(b.storePath?"&storePath="+b.storePath:"");};var g=function(b,c,e){if(b.indexOf("&")>=0||b.indexOf("?")>=0)b=encodeURIComponent(b);return d+"?url="+b+"&key="+a.apikey+"&id="+e+"&referrer="+window.location.hostname+"&iframe="+(c.container!='window')+"&version="+a.API_VERSION+(c.services?"&s="+c.services.join(","):"")+(c.openTo!==undefined?"&loc="+c.openTo:"")+(c.mimetype!==undefined?"&m="+c.mimetype:"")+(c.extension!==undefined?"&ext="+c.extension:"")+(c.mobile!==undefined?"&mobile="+c.mobile:"")+(c.suggestedFilename!==undefined?"&defaultSaveasName="+c.suggestedFilename:"")+(c.signature?"&signature="+c.signature:"")+(c.policy?"&policy="+c.policy:"");};var h=function(b){return e+b.storage+"?key="+a.apikey+(b.base64decode?"&base64decode=true":"")+(b.mimetype?"&mimetype="+b.mimetype:"")+(b.filename?"&filename="+b.filename:"")+(b.path?"&path="+b.path:"")+(b.signature?"&signature="+b.signature:"")+(b.policy?"&policy="+b.policy:"");};var i=function(a,b){return a+"?nonce=fp"+(!!b.base64decode?"&base64decode=true":"")+(b.mimetype?"&mimetype="+b.mimetype:"")+(b.signature?"&signature="+b.signature:"")+(b.policy?"&policy="+b.policy:"");};var j=function(){var b=a.util.parseUrl(window.location.href);return b.origin+"/404";};return{BASE:b,COMM:b+"/dialog/comm_iframe/",FP_COMM_FALLBACK:b+"/dialog/comm_hash_iframe/",STORE:e,PICK:c,EXPORT:d,constructPickUrl:f,constructExportUrl:g,constructWriteUrl:i,constructStoreUrl:h,constructHostCommFallback:j};});filepicker.extend("util",function(){var a=this;var b=function(a){return a&&Object.prototype.toString.call(a)==='[object Array]';};var c=function(a){return a&&Object.prototype.toString.call(a)==='[object File]';};var d=function(a){if(typeof HTMLElement==="object")return a instanceof HTMLElement;else return a&&typeof a==="object"&&a.nodeType===1&&typeof a.nodeName==="string";};var e=function(a){return d(a)&&a.tagName=="INPUT"&&a.type=="file";};var f=function(a){if(a===null)return 'null';else if(b(a))return 'array';else if(c(a))return 'file';return typeof a;};var g=function(){var a=new Date();return a.getTime().toString();};var h=function(a,b,c){if(a[b]===undefined)a[b]=c;};var i=function(a){if(window.jQuery)window.jQuery(function(){a();});else{var b="load";if(window.addEventListener)window.addEventListener(b,a,false);else if(window.attachEvent)window.attachEvent("on"+b,a);else if(window.onload){var c=window.onload;window.onload=function(){c();a();};}else window.onload=a;}};var j=function(a){return typeof a=="string"&&a.match("www.filepicker.io/api/file/");};var k=function(a){return function(){if(window.console&&typeof window.console[a]=="function")try{window.console[a].apply(window.console,arguments);}catch(b){alert(Array.prototype.join.call(arguments,","));}};};var l={};l.log=k("log");l.error=k("error");var m=function(a){var b={};for(key in a)b[key]=a[key];return b;};var n=function(a){var b={};b.url=a.url;b.filename=a.filename||a.name;b.mimetype=a.mimetype||a.type;b.size=a.size;b.key=a.key||a.s3_key;b.isWriteable=!!(a.isWriteable||a.writeable);return b;};return{isArray:b,isFile:c,isElement:d,isFileInputElement:e,getId:g,setDefault:h,typeOf:f,addOnLoad:i,isFPUrl:j,console:l,clone:m,standardizeFPFile:n};});filepicker.extend("widgets",function(){var a=this;var b=function(a,b,c,d){var e=d.getAttribute(c);if(e)b[a]=e;};var c=function(a,b){var c;if(document.createEvent){c=document.createEvent('Event');c.initEvent("change",true,false);c.fpfile=b?b[0]:undefined;c.fpfiles=b;a.dispatchEvent(c);}else if(document.createEventObject){c=document.createEventObject('Event');c.eventPhase=2;c.currentTarget=c.srcElement=c.target=a;c.fpfile=b?b[0]:undefined;c.fpfiles=b;a.fireEvent('onchange',c);}else if(a.onchange)a.onchange(b);};var d=function(d){var e=document.createElement("button");e.setAttribute('type','button');e.innerHTML=d.getAttribute('data-fp-button-text')||d.getAttribute('data-fp-text')||"Pick File";e.className=d.getAttribute('data-fp-button-class')||d.getAttribute('data-fp-class')||d.className;d.style.display="none";var f={};b("container",f,"data-fp-option-container",d);b("maxSize",f,"data-fp-option-maxsize",d);b("mimetype",f,"data-fp-mimetype",d);b("mimetypes",f,"data-fp-mimetypes",d);b("extension",f,"data-fp-extension",d);b("extensions",f,"data-fp-extensions",d);b("container",f,"data-fp-container",d);b("maxSize",f,"data-fp-maxSize",d);b("openTo",f,"data-fp-openTo",d);b("debug",f,"data-fp-debug",d);b("signature",f,"data-fp-signature",d);b("policy",f,"data-fp-policy",d);b("storeLocation",f,"data-fp-store-location",d);var g=d.getAttribute("data-fp-services");if(!g)g=d.getAttribute("data-fp-option-services");if(g){g=g.split(",");for(var h=0;h<g.length;h++)g[h]=a.services[g[h].replace(" ","")];f.services=g;}var i=d.getAttribute("data-fp-service");if(i)f.service=a.services[i.replace(" ","")];if(f.mimetypes)f.mimetypes=f.mimetypes.split(",");if(f.extensions)f.extensions=f.extensions.split(",");var j=d.getAttribute("data-fp-apikey");if(j)a.setKey(j);var k=(d.getAttribute("data-fp-multiple")||d.getAttribute("data-fp-option-multiple")||"false")=="true";if(k)e.onclick=function(){e.blur();a.pickMultiple(f,function(a){var b=[];for(var e=0;e<a.length;e++)b.push(a[e].url);d.value=b.join();c(d,a);});return false;};else e.onclick=function(){e.blur();a.pick(f,function(a){d.value=a.url;c(d,[a]);});return false;};d.parentNode.insertBefore(e,d);};var e=function(d){var e=document.createElement("div");e.className=d.getAttribute('data-fp-class')||d.className;e.style.padding="1px";d.style.display="none";d.parentNode.insertBefore(e,d);var i=document.createElement("button");i.setAttribute('type','button');i.innerHTML=d.getAttribute('data-fp-button-text')||"Pick File";i.className=d.getAttribute('data-fp-button-class')||'';e.appendChild(i);var j=document.createElement("div");g(j);j.innerHTML=d.getAttribute('data-fp-drag-text')||"Or drop files here";j.className=d.getAttribute('data-fp-drag-class')||'';e.appendChild(j);var k={};b("container",k,"data-fp-option-container",d);b("maxSize",k,"data-fp-option-maxsize",d);b("mimetype",k,"data-fp-mimetype",d);b("mimetypes",k,"data-fp-mimetypes",d);b("extension",k,"data-fp-extension",d);b("extensions",k,"data-fp-extensions",d);b("container",k,"data-fp-container",d);b("maxSize",k,"data-fp-maxSize",d);b("openTo",k,"data-fp-openTo",d);b("debug",k,"data-fp-debug",d);b("signature",k,"data-fp-signature",d);b("policy",k,"data-fp-policy",d);b("storeLocation",k,"data-fp-store-location",d);var l=d.getAttribute("data-fp-services");if(!l)l=d.getAttribute("data-fp-option-services");if(l){l=l.split(",");for(var m=0;m<l.length;m++)l[m]=a.services[l[m].replace(" ","")];k.services=l;}var n=d.getAttribute("data-fp-service");if(n)k.service=a.services[n.replace(" ","")];if(k.mimetypes)k.mimetypes=k.mimetypes.split(",");if(k.extensions)k.extensions=k.extensions.split(",");var o=d.getAttribute("data-fp-apikey");if(o)a.setKey(o);var p=(d.getAttribute("data-fp-multiple")||d.getAttribute("data-fp-option-multiple")||"false")=="true";if(a.dragdrop.enabled())h(j,p,k,d);else j.innerHTML="&nbsp;";if(p)j.onclick=i.onclick=function(){i.blur();a.pickMultiple(k,function(a){var b=[];var e=[];for(var g=0;g<a.length;g++){b.push(a[g].url);e.push(a[g].filename);}d.value=b.join();f(d,j,e.join(', '));c(d,a);});return false;};else j.onclick=i.onclick=function(){i.blur();a.pick(k,function(a){d.value=a.url;f(d,j,a.filename);c(d,[a]);});return false;};};var f=function(b,d,e){d.innerHTML=e;d.style.padding="2px 4px";d.style.cursor="default";d.style.width='';var f=document.createElement("span");f.innerHTML="X";f.style.borderRadius="8px";f.style.fontSize="14px";f.style.cssFloat="right";f.style.padding="0 3px";f.style.color="#600";f.style.cursor="pointer";var h=function(e){if(!e)e=window.event;e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation();g(d);if(!a.dragdrop.enabled)d.innerHTML='&nbsp;';else d.innerHTML=b.getAttribute('data-fp-drag-text')||"Or drop files here";b.value='';c(b);return false;};if(f.addEventListener)f.addEventListener("click",h,false);else if(f.attachEvent)f.attachEvent("onclick",h);d.appendChild(f);};var g=function(a){a.style.border="1px dashed #AAA";a.style.display="inline-block";a.style.margin="0 0 0 4px";a.style.borderRadius="3px";a.style.backgroundColor="#F3F3F3";a.style.color="#333";a.style.fontSize="14px";a.style.lineHeight="22px";a.style.padding="2px 4px";a.style.verticalAlign="middle";a.style.cursor="pointer";a.style.overflow="hidden";};var h=function(b,d,e,g){var h=b.innerHTML;var j;a.dragdrop.makeDropPane(b,{multiple:d,maxSize:e.maxSize,mimetypes:e.mimetypes,mimetype:e.mimetype,extensions:e.extensions,extension:e.extension,dragEnter:function(){b.innerHTML="Drop to upload";b.style.backgroundColor="#E0E0E0";b.style.border="1px solid #000";},dragLeave:function(){b.innerHTML=h;b.style.backgroundColor="#F3F3F3";b.style.border="1px dashed #AAA";},onError:function(a,c){if(a=="TooManyFiles")b.innerHTML=c;else if(a=="WrongType")b.innerHTML=c;else if(a=="NoFilesFound")b.innerHTML=c;else if(a=="UploadError")b.innerHTML="Oops! Had trouble uploading.";},onStart:function(a){j=i(b);},onProgress:function(a){if(j)j.style.width=a+"%";},onSuccess:function(a){var d=[];var e=[];for(var h=0;h<a.length;h++){d.push(a[h].url);e.push(a[h].filename);}g.value=d.join();f(g,b,e.join(', '));c(g,a);}});};var i=function(a){var b=document.createElement("div");var c=a.offsetHeight-2;b.style.height=c+"px";b.style.backgroundColor="#0E90D2";b.style.width="2%";b.style.borderRadius="3px";a.style.width=a.offsetWidth+"px";a.style.padding="0";a.style.border="1px solid #AAA";a.style.backgroundColor="#F3F3F3";a.style.boxShadow="inset 0 1px 2px rgba(0, 0, 0, 0.1)";a.innerHTML="";a.appendChild(b);return b;};var j=function(c){c.onclick=function(){var d=c.getAttribute("data-fp-url");if(!d)return true;var e={};b("container",e,"data-fp-option-container",c);b("suggestedFilename",e,"data-fp-option-defaultSaveasName",c);b("container",e,"data-fp-container",c);b("suggestedFilename",e,"data-fp-suggestedFilename",c);b("mimetype",e,"data-fp-mimetype",c);b("extension",e,"data-fp-extension",c);var f=c.getAttribute("data-fp-services");if(!f)f=c.getAttribute("data-fp-option-services");if(f){f=f.split(",");for(var g=0;g<f.length;g++)f[g]=a.services[f[g].replace(" ","")];e.services=f;}var h=c.getAttribute("data-fp-service");if(h)e.service=a.services[h.replace(" ","")];apikey=c.getAttribute("data-fp-apikey");if(apikey)a.setKey(apikey);a.exportFile(d,e);return false;};};var k=function(){if(document.querySelectorAll){var a;var b=document.querySelectorAll('input[type="filepicker"]');for(a=0;a<b.length;a++)d(b[a]);var c=document.querySelectorAll('input[type="filepicker-dragdrop"]');for(a=0;a<c.length;a++)e(c[a]);var f=[];var g=document.querySelectorAll('button[data-fp-url]');for(a=0;a<g.length;a++)f.push(g[a]);g=document.querySelectorAll('a[data-fp-url]');for(a=0;a<g.length;a++)f.push(g[a]);g=document.querySelectorAll('input[type="button"][data-fp-url]');for(a=0;a<g.length;a++)f.push(g[a]);for(a=0;a<f.length;a++)j(f[a]);}};var l=function(a){if(a.jquery)a=a[0];var b=a.getAttribute('type');if(b=='filepicker')d(a);else if(b=='filepicker-dragdrop')e(a);else j(a);};return{constructPickWidget:d,constructDragWidget:e,constructExportWidget:j,buildWidgets:k,constructWidget:l};});filepicker.extend('window',function(){var a=this;var b={OPEN:'/dialog/open/',SAVEAS:'/dialog/save/'};var c="filepicker_dialog";var d="left=100,top=100,height=600,width=800,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=yes,dependent=yes,dialog=yes";var e=1000;var f=function(){if(document.body&&document.body.offsetWidth){winW=document.body.offsetWidth;winH=document.body.offsetHeight;}if(document.compatMode=='CSS1Compat'&&document.documentElement&&document.documentElement.offsetWidth){winW=document.documentElement.offsetWidth;winH=document.documentElement.offsetHeight;}if(window.innerWidth&&window.innerHeight){winW=window.innerWidth;winH=window.innerHeight;}return [winW,winH];};var g=function(){var b=f()[0]<768;var c=a.cookies.THIRD_PARTY_COOKIES===false;return a.browser.isIOS()||a.browser.isAndroid()||b||c;};var h=function(b,f,h){h=h||function(){};if(!b)b='modal';if(b=='modal'&&g())b='window';if(b=='window'){var i=c+a.util.getId();var j=window.open(f,i,d);var k=window.setInterval(function(){if(!j||j.closed){window.clearInterval(k);h();}},e);}else if(b=='modal')a.modal.generate(f,h);else{var l=document.getElementById(b);if(!l)throw new a.FilepickerException("Container '"+b+"' not found. This should either be set to 'window','modal', or the ID of an iframe that is currently in the document.");l.src=f;}};return{open:h,WINDOW_NAME:c,getSize:f,shouldForce:g};});(function(){filepicker.internal(function(){var a=this;a.util.addOnLoad(a.cookies.checkThirdParty);a.util.addOnLoad(a.widgets.buildWidgets);});delete filepicker.internal;delete filepicker.extend;var a=filepicker._queue||[];var b;var c=a.length;if(c)for(var d=0;d<c;d++){b=a[d];filepicker[b[0]].apply(filepicker,b[1]);}delete filepicker._queue;})();
/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */

jQuery.effects||(function(d){d.effects={version:"1.7.2",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Explode 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.explode=function(b){return this.queue(function(){var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;var h=a(this).show().css("visibility","hidden");var l=h.offset();l.top-=parseInt(h.css("marginTop"),10)||0;l.left-=parseInt(h.css("marginLeft"),10)||0;var g=h.outerWidth(true);var c=h.outerHeight(true);for(var f=0;f<k;f++){for(var d=0;d<e;d++){h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500)}}setTimeout(function(){b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();if(b.callback){b.callback.apply(h[0])}h.dequeue();a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*
 * jQuery UI Effects Fold 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.fold=function(b){return this.queue(function(){var e=a(this),k=["position","top","left"];var h=a.effects.setMode(e,b.options.mode||"hide");var o=b.options.size||15;var n=!(!b.options.horizFirst);var g=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(e,k);e.show();var d=a.effects.createWrapper(e).css({overflow:"hidden"});var i=((h=="show")!=n);var f=i?["width","height"]:["height","width"];var c=i?[d.width(),d.height()]:[d.height(),d.width()];var j=/([0-9]+)%/.exec(o);if(j){o=parseInt(j[1],10)/100*c[h=="hide"?0:1]}if(h=="show"){d.css(n?{height:0,width:o}:{height:o,width:0})}var m={},l={};m[f[0]]=h=="show"?c[0]:o;l[f[1]]=h=="show"?c[1]:0;d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){if(h=="hide"){e.hide()}a.effects.restore(e,k);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this);var g=a.effects.setMode(d,b.options.mode||"show");var f=b.options.times||5;var e=b.duration?b.duration/2:a.fx.speeds._default/2;if(g=="hide"){f--}if(d.is(":hidden")){d.css("opacity",0);d.show();d.animate({opacity:1},e,b.options.easing);f=f-2}for(var c=0;c<f;c++){d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing)}if(g=="hide"){d.animate({opacity:0},e,b.options.easing,function(){d.hide();if(b.callback){b.callback.apply(this,arguments)}})}else{d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){if(b.callback){b.callback.apply(this,arguments)}})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Scale 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.puff=function(b){return this.queue(function(){var f=a(this);var c=a.extend(true,{},b.options);var h=a.effects.setMode(f,b.options.mode||"hide");var g=parseInt(b.options.percent,10)||150;c.fade=true;var e={height:f.height(),width:f.width()};var d=g/100;f.from=(h=="hide")?e:{height:e.height*d,width:e.width*d};c.from=f.from;c.percent=(h=="hide")?g:100;c.mode=h;f.effect("scale",c,b.duration,b.callback);f.dequeue()})};a.effects.scale=function(b){return this.queue(function(){var g=a(this);var d=a.extend(true,{},b.options);var j=a.effects.setMode(g,b.options.mode||"effect");var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));var i=b.options.direction||"both";var c=b.options.origin;if(j!="effect"){d.origin=c||["middle","center"];d.restore=true}var f={height:g.height(),width:g.width()};g.from=b.options.from||(j=="show"?{height:0,width:0}:f);var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};g.to={height:f.height*e.y,width:f.width*e.x};if(b.options.fade){if(j=="show"){g.from.opacity=0;g.to.opacity=1}if(j=="hide"){g.from.opacity=1;g.to.opacity=0}}d.from=g.from;d.to=g.to;d.mode=j;g.effect("size",d,b.duration,b.callback);g.dequeue()})};a.effects.size=function(b){return this.queue(function(){var c=a(this),n=["position","top","left","width","height","overflow","opacity"];var m=["position","top","left","overflow","opacity"];var j=["width","height","overflow"];var p=["fontSize"];var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var g=a.effects.setMode(c,b.options.mode||"effect");var i=b.options.restore||false;var e=b.options.scale||"both";var o=b.options.origin;var d={height:c.height(),width:c.width()};c.from=b.options.from||d;c.to=b.options.to||d;if(o){var h=a.effects.getBaseline(o,d);c.from.top=(d.height-c.from.height)*h.y;c.from.left=(d.width-c.from.width)*h.x;c.to.top=(d.height-c.to.height)*h.y;c.to.left=(d.width-c.to.width)*h.x}var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};if(e=="box"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(k);c.from=a.effects.setTransition(c,k,l.from.y,c.from);c.to=a.effects.setTransition(c,k,l.to.y,c.to)}if(l.from.x!=l.to.x){n=n.concat(f);c.from=a.effects.setTransition(c,f,l.from.x,c.from);c.to=a.effects.setTransition(c,f,l.to.x,c.to)}}if(e=="content"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(p);c.from=a.effects.setTransition(c,p,l.from.y,c.from);c.to=a.effects.setTransition(c,p,l.to.y,c.to)}}a.effects.save(c,i?n:m);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(e=="content"||e=="both"){k=k.concat(["marginTop","marginBottom"]).concat(p);f=f.concat(["marginLeft","marginRight"]);j=n.concat(k).concat(f);c.find("*[width]").each(function(){child=a(this);if(i){a.effects.save(child,j)}var q={height:child.height(),width:child.width()};child.from={height:q.height*l.from.y,width:q.width*l.from.x};child.to={height:q.height*l.to.y,width:q.width*l.to.x};if(l.from.y!=l.to.y){child.from=a.effects.setTransition(child,k,l.from.y,child.from);child.to=a.effects.setTransition(child,k,l.to.y,child.to)}if(l.from.x!=l.to.x){child.from=a.effects.setTransition(child,f,l.from.x,child.from);child.to=a.effects.setTransition(child,f,l.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){if(i){a.effects.restore(child,j)}})})}c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(g=="hide"){c.hide()}a.effects.restore(c,i?n:m);a.effects.removeWrapper(c);if(b.callback){b.callback.apply(this,arguments)}c.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Transfer 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.transfer=function(b){return this.queue(function(){var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){c.remove();(b.callback&&b.callback.apply(f[0],arguments));f.dequeue()})})}})(jQuery);;
/* 
 * Auto Expanding Text Area (1.2.2)
 * by Chrys Bader (www.chrysbader.com)
 * chrysb@gmail.com
 *
 * Special thanks to:
 * Jake Chapa - jake@hybridstudio.com
 * John Resig - jeresig@gmail.com
 *
 * Copyright (c) 2008 Chrys Bader (www.chrysbader.com)
 * Licensed under the GPL (GPL-LICENSE.txt) license. 
 *
 *
 * NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 *
 */

 
(function(jQuery) {
		  
	var self = null;
 
	jQuery.fn.autogrow = function(o)
	{	
		return this.each(function() {
			new jQuery.autogrow(this, o);
		});
	};
	

    /**
     * The autogrow object.
     *
     * @constructor
     * @name jQuery.autogrow
     * @param Object e The textarea to create the autogrow for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     * @cat Plugins/autogrow
     */
	
	jQuery.autogrow = function (e, o)
	{
		this.options		  	= o || {};
		this.dummy			  	= null;
		this.interval	 	  	= null;
		this.line_height	  	= this.options.lineHeight || parseInt(jQuery(e).css('line-height'));
		this.min_height		  	= this.options.minHeight || parseInt(jQuery(e).css('min-height'));
		this.max_height		  	= this.options.maxHeight || parseInt(jQuery(e).css('max-height'));;
		this.textarea		  	= jQuery(e);
		
		if(isNaN(this.line_height))
		  this.line_height = 0;
		
		// Only one textarea activated at a time, the one being used
		this.init();
	};
	
	jQuery.autogrow.fn = jQuery.autogrow.prototype = {
    autogrow: '1.2.2'
  };
	
 	jQuery.autogrow.fn.extend = jQuery.autogrow.extend = jQuery.extend;
	
	jQuery.autogrow.fn.extend({
						 
		init: function() {			
			var self = this;			
			this.textarea.css({overflow: 'hidden', display: 'block'});
			this.textarea.bind('focus', function() { self.startExpand() } ).bind('blur', function() { self.stopExpand() });
			this.checkExpand();	
		},
						 
		startExpand: function() {				
		  var self = this;
      this.interval = window.setInterval(function() {self.checkExpand()}, 400);
      // this.textarea.keypress(function() {self.checkExpand()})
		},
		
		stopExpand: function() {
			clearInterval(this.interval);	
		},
		
		checkExpand: function() {
			
			if (this.dummy == null)
			{
				this.dummy = jQuery('<div></div>');
				this.dummy.css({
												'font-size'  : this.textarea.css('font-size'),
												'font-family': this.textarea.css('font-family'),
												'width'      : this.textarea.css('width'),
												'padding'    : this.textarea.css('padding'),
												'line-height': this.line_height + 'px',
												'overflow-x' : 'hidden',
												'position'   : 'absolute',
												'top'        : 0,
												'left'		 : -9999
												}).appendTo('body');
			}
			
			// Strip HTML tags
			var html = this.textarea.val().replace(/(<|>)/g, '');
			
			// IE is different, as per usual
			if ($.browser.msie)
			{
				html = html.replace(/\n/g, '<BR>new');
			}
			else
			{
				html = html.replace(/\n/g, '<br>new');
			}
			
			if (this.dummy.html() != html)
			{
				this.dummy.html(html);	
				
				if (this.max_height > 0 && (this.dummy.height() + this.line_height > this.max_height))
        {
					this.textarea.css('overflow-y', 'auto');	
				}
				else
				{
					this.textarea.css('overflow-y', 'hidden');
          // if (this.textarea.height() < this.dummy.height() + this.line_height)
          if (this.textarea.height() < this.dummy.height() + this.line_height || (this.dummy.height() + 250 < this.textarea.height()))
					{	
            this.textarea.height((this.dummy.height() + this.line_height + 75) + 'px')
            // this.textarea.animate({height: (this.dummy.height() + this.line_height) + 'px'}, 100); 
					}
				}
			}
		}
						 
	 });
})(jQuery);
/*
 * jQuery validation plug-in 1.6
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}var validator=$.data(this[0],'validator');if(validator){return validator;}validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){validator.submitButton=this;});}this.submit(function(event){if(validator.settings.debug)event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm);if(validator.submitButton){hidden.remove();}return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend({},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!=Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.errorsFor(element).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)this.element(element);else if(element.parentNode.name in this.submitted)this.element(element.parentNode)},highlight:function(element,errorClass,validClass){$(element).addClass(errorClass).removeClass(validClass);},unhighlight:function(element,errorClass,validClass){$(element).removeClass(errorClass).addClass(validClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator");validator.settings["on"+event.type]&&validator.settings["on"+event.type].call(validator,this[0]);}$(this.currentForm).delegate("focusin focusout keyup",":text, :password, :file, select, textarea",delegate).delegate("click",":radio, :checkbox, select, option",delegate);if(this.settings.invalidHandler)$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus();}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name)[0];}var rules=$(element).rules();var dependencyMismatch=false;for(method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method",e);throw e;}}if(dependencyMismatch)return;if(this.objectLength(rules))this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)return arguments[i];}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length)this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))return this.findByName(element.name).filter(':checked').length;}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}if(rules.messages){delete rules.messages}return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(previous.old!==value){previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=(previous.message=response||validator.defaultMessage(element,"remote"));errors[element.name]=$.isFunction(message)?message(value):message;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}else if(this.pending[element.name]){return"pending";}return previous.valid;},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))return"dependency-mismatch";if(/[^0-9-]+/.test(value))return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)nDigit-=9;}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var ajax=$.ajax;var pendingRequests={};$.ajax=function(settings){settings=$.extend(settings,$.extend({},$.ajaxSettings,settings));var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};})(jQuery);;(function($){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){if($.browser.msie)return false;this.addEventListener(original,$.event.special[fix].handler,true);},teardown:function(){if($.browser.msie)return false;this.removeEventListener(original,$.event.special[fix].handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};});$.extend($.fn,{delegate:function(type,delegate,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});},triggerEvent:function(type,target){return this.triggerHandler(type,[$.event.fix({type:type,target:target})]);}})})(jQuery);
/*
 * Jeditable - jQuery in place edit plugin
 *
 * Copyright (c) 2006-2009 Mika Tuupola, Dylan Verheul
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Based on editable by Dylan Verheul <dylan_at_dyve.net>:
 *    http://www.dyve.net/jquery/?editable
 *
 */

/**
  * Version 1.7.1
  *
  * ** means there is basic unit tests for this parameter. 
  *
  * @name  Jeditable
  * @type  jQuery
  * @param String  target             (POST) URL or function to send edited content to **
  * @param Hash    options            additional options 
  * @param String  options[method]    method to use to send edited content (POST or PUT) **
  * @param Function options[callback] Function to run after submitting edited content **
  * @param String  options[name]      POST parameter name of edited content
  * @param String  options[id]        POST parameter name of edited div id
  * @param Hash    options[submitdata] Extra parameters to send when submitting edited content.
  * @param String  options[type]      text, textarea or select (or any 3rd party input type) **
  * @param Integer options[rows]      number of rows if using textarea ** 
  * @param Integer options[cols]      number of columns if using textarea **
  * @param Mixed   options[height]    'auto', 'none' or height in pixels **
  * @param Mixed   options[width]     'auto', 'none' or width in pixels **
  * @param String  options[loadurl]   URL to fetch input content before editing **
  * @param String  options[loadtype]  Request type for load url. Should be GET or POST.
  * @param String  options[loadtext]  Text to display while loading external content.
  * @param Mixed   options[loaddata]  Extra parameters to pass when fetching content before editing.
  * @param Mixed   options[data]      Or content given as paramameter. String or function.**
  * @param String  options[indicator] indicator html to show when saving
  * @param String  options[tooltip]   optional tooltip text via title attribute **
  * @param String  options[event]     jQuery event such as 'click' of 'dblclick' **
  * @param String  options[submit]    submit button value, empty means no button **
  * @param String  options[cancel]    cancel button value, empty means no button **
  * @param String  options[cssclass]  CSS class to apply to input form. 'inherit' to copy from parent. **
  * @param String  options[style]     Style to apply to input form 'inherit' to copy from parent. **
  * @param String  options[select]    true or false, when true text is highlighted ??
  * @param String  options[placeholder] Placeholder text or html to insert when element is empty. **
  * @param String  options[onblur]    'cancel', 'submit', 'ignore' or function ??
  *             
  * @param Function options[onsubmit] function(settings, original) { ... } called before submit
  * @param Function options[onreset]  function(settings, original) { ... } called before reset
  * @param Function options[onerror]  function(settings, original, xhr) { ... } called on error
  *             
  * @param Hash    options[ajaxoptions]  jQuery Ajax options. See docs.jquery.com.
  *             
  */


(function($) {

    $.fn.editable = function(target, options) {
            
        if ('disable' == target) {
            $(this).data('disabled.editable', true);
            return;
        }
        if ('enable' == target) {
            $(this).data('disabled.editable', false);
            return;
        }
        if ('destroy' == target) {
            $(this)
                .unbind($(this).data('event.editable'))
                .removeData('disabled.editable')
                .removeData('event.editable');
            return;
        }
        
        var settings = $.extend({}, $.fn.editable.defaults, {target:target}, options);
        
        /* setup some functions */
        var plugin   = $.editable.types[settings.type].plugin || function() { };
        var submit   = $.editable.types[settings.type].submit || function() { };
        var buttons  = $.editable.types[settings.type].buttons 
                    || $.editable.types['defaults'].buttons;
        var content  = $.editable.types[settings.type].content 
                    || $.editable.types['defaults'].content;
        var element  = $.editable.types[settings.type].element 
                    || $.editable.types['defaults'].element;
        var reset    = $.editable.types[settings.type].reset 
                    || $.editable.types['defaults'].reset;
        var callback = settings.callback || function() { };
        var onedit   = settings.onedit   || function() { }; 
        var onsubmit = settings.onsubmit || function() { };
        var onreset  = settings.onreset  || function() { };
        var onerror  = settings.onerror  || reset;
          
        /* show tooltip */
        if (settings.tooltip) {
            $(this).attr('title', settings.tooltip);
        }
        
        settings.autowidth  = 'auto' == settings.width;
        settings.autoheight = 'auto' == settings.height;
        
        return this.each(function() {
                        
            /* save this to self because this changes when scope changes */
            var self = this;  
                   
            /* inlined block elements lose their width and height after first edit */
            /* save them for later use as workaround */
            var savedwidth  = $(self).width();
            var savedheight = $(self).height();
            
            /* save so it can be later used by $.editable('destroy') */
            $(this).data('event.editable', settings.event);
            
            /* if element is empty add something clickable (if requested) */
            if (!$.trim($(this).html())) {
                $(this).html(settings.placeholder);
            }
            
            $(this).bind(settings.event, function(e) {
                
                /* abort if disabled for this element */
                if (true === $(this).data('disabled.editable')) {
                    return;
                }
                
                /* prevent throwing an exeption if edit field is clicked again */
                if (self.editing) {
                    return;
                }
                
                /* abort if onedit hook returns false */
                if (false === onedit.apply(this, [settings, self])) {
                   return;
                }
                
                /* prevent default action and bubbling */
                e.preventDefault();
                e.stopPropagation();
                
                /* remove tooltip */
                if (settings.tooltip) {
                    $(self).removeAttr('title');
                }
                
                /* figure out how wide and tall we are, saved width and height */
                /* are workaround for http://dev.jquery.com/ticket/2190 */
                if (0 == $(self).width()) {
                    //$(self).css('visibility', 'hidden');
                    settings.width  = savedwidth;
                    settings.height = savedheight;
                } else {
                    if (settings.width != 'none') {
                        settings.width = 
                            settings.autowidth ? $(self).width()  : settings.width;
                    }
                    if (settings.height != 'none') {
                        settings.height = 
                            settings.autoheight ? $(self).height() : settings.height;
                    }
                }
                //$(this).css('visibility', '');
                
                /* remove placeholder text, replace is here because of IE */
                if ($(this).html().toLowerCase().replace(/(;|")/g, '') == 
                    settings.placeholder.toLowerCase().replace(/(;|")/g, '')) {
                        $(this).html('');
                }
                                
                self.editing    = true;
                self.revert     = $(self).html();
                $(self).html('');

                /* create the form object */
                var form = $('<form />');
                
                /* apply css or style or both */
                if (settings.cssclass) {
                    if ('inherit' == settings.cssclass) {
                        form.attr('class', $(self).attr('class'));
                    } else {
                        form.attr('class', settings.cssclass);
                    }
                }

                if (settings.style) {
                    if ('inherit' == settings.style) {
                        form.attr('style', $(self).attr('style'));
                        /* IE needs the second line or display wont be inherited */
                        form.css('display', $(self).css('display'));                
                    } else {
                        form.attr('style', settings.style);
                    }
                }

                /* add main input element to form and store it in input */
                var input = element.apply(form, [settings, self]);

                /* set input content via POST, GET, given data or existing value */
                var input_content;
                
                if (settings.loadurl) {
                    var t = setTimeout(function() {
                        input.disabled = true;
                        content.apply(form, [settings.loadtext, settings, self]);
                    }, 100);

                    var loaddata = {};
                    loaddata[settings.id] = self.id;
                    if ($.isFunction(settings.loaddata)) {
                        $.extend(loaddata, settings.loaddata.apply(self, [self.revert, settings]));
                    } else {
                        $.extend(loaddata, settings.loaddata);
                    }
                    $.ajax({
                       type : settings.loadtype,
                       url  : settings.loadurl,
                       data : loaddata,
                       async : false,
                       success: function(result) {
                          window.clearTimeout(t);
                          input_content = result;
                          input.disabled = false;
                       }
                    });
                } else if (settings.data) {
                    input_content = settings.data;
                    if ($.isFunction(settings.data)) {
                        input_content = settings.data.apply(self, [self.revert, settings]);
                    }
                } else {
                    input_content = self.revert; 
                }
                content.apply(form, [input_content, settings, self]);

                input.attr('name', settings.name);
        
                /* add buttons to the form */
                buttons.apply(form, [settings, self]);
         
                /* add created form to self */
                $(self).append(form);
         
                /* attach 3rd party plugin if requested */
                plugin.apply(form, [settings, self]);

                /* focus to first visible form element */
                $(':input:visible:enabled:first', form).focus();

                /* highlight input contents when requested */
                if (settings.select) {
                    input.select();
                }
        
                /* discard changes if pressing esc */
                input.keydown(function(e) {
                    if (e.keyCode == 27) {
                        e.preventDefault();
                        //self.reset();
                        reset.apply(form, [settings, self]);
                    }
                });

                /* discard, submit or nothing with changes when clicking outside */
                /* do nothing is usable when navigating with tab */
                var t;
                if ('cancel' == settings.onblur) {
                    input.blur(function(e) {
                        /* prevent canceling if submit was clicked */
                        t = setTimeout(function() {
                            reset.apply(form, [settings, self]);
                        }, 500);
                    });
                } else if ('submit' == settings.onblur) {
                    input.blur(function(e) {
                        /* prevent double submit if submit was clicked */
                        t = setTimeout(function() {
                            form.submit();
                        }, 200);
                    });
                } else if ($.isFunction(settings.onblur)) {
                    input.blur(function(e) {
                        settings.onblur.apply(self, [input.val(), settings]);
                    });
                } else {
                    input.blur(function(e) {
                      /* TODO: maybe something here */
                    });
                }

                form.submit(function(e) {

                    if (t) { 
                        clearTimeout(t);
                    }

                    /* do no submit */
                    e.preventDefault(); 
            
                    /* call before submit hook. */
                    /* if it returns false abort submitting */                    
                    if (false !== onsubmit.apply(form, [settings, self])) { 
                        /* custom inputs call before submit hook. */
                        /* if it returns false abort submitting */
                        if (false !== submit.apply(form, [settings, self])) { 

                          /* check if given target is function */
                          if ($.isFunction(settings.target)) {
                              var str = settings.target.apply(self, [input.val(), settings]);
                              $(self).html(str);
                              self.editing = false;
                              callback.apply(self, [self.innerHTML, settings]);
                              /* TODO: this is not dry */                              
                              if (!$.trim($(self).html())) {
                                  $(self).html(settings.placeholder);
                              }
                          } else {
                              /* add edited content and id of edited element to POST */
                              var submitdata = {};
                              submitdata[settings.name] = input.val();
                              submitdata[settings.id] = self.id;
                              /* add extra data to be POST:ed */
                              if ($.isFunction(settings.submitdata)) {
                                  $.extend(submitdata, settings.submitdata.apply(self, [self.revert, settings]));
                              } else {
                                  $.extend(submitdata, settings.submitdata);
                              }

                              /* quick and dirty PUT support */
                              if ('PUT' == settings.method) {
                                  submitdata['_method'] = 'put';
                              }

                              /* show the saving indicator */
                              $(self).html(settings.indicator);
                              
                              /* defaults for ajaxoptions */
                              var ajaxoptions = {
                                  type    : 'POST',
                                  data    : submitdata,
                                  dataType: 'html',
                                  url     : settings.target,
                                  success : function(result, status) {
                                      if (ajaxoptions.dataType == 'html') {
                                        $(self).html(result);
                                      }
                                      self.editing = false;
                                      callback.apply(self, [result, settings]);
                                      if (!$.trim($(self).html())) {
                                          $(self).html(settings.placeholder);
                                      }
                                  },
                                  error   : function(xhr, status, error) {
                                      onerror.apply(form, [settings, self, xhr]);
                                  }
                              };
                              
                              /* override with what is given in settings.ajaxoptions */
                              $.extend(ajaxoptions, settings.ajaxoptions);   
                              $.ajax(ajaxoptions);          
                              
                            }
                        }
                    }
                    
                    /* show tooltip again */
                    $(self).attr('title', settings.tooltip);
                    
                    return false;
                });
            });
            
            /* privileged methods */
            this.reset = function(form) {
                /* prevent calling reset twice when blurring */
                if (this.editing) {
                    /* before reset hook, if it returns false abort reseting */
                    if (false !== onreset.apply(form, [settings, self])) { 
                        $(self).html(self.revert);
                        self.editing   = false;
                        if (!$.trim($(self).html())) {
                            $(self).html(settings.placeholder);
                        }
                        /* show tooltip again */
                        if (settings.tooltip) {
                            $(self).attr('title', settings.tooltip);                
                        }
                    }                    
                }
            };            
        });

    };


    $.editable = {
        types: {
            defaults: {
                element : function(settings, original) {
                    var input = $('<input type="hidden"></input>');                
                    $(this).append(input);
                    return(input);
                },
                content : function(string, settings, original) {
                    $(':input:first', this).val(string);
                },
                reset : function(settings, original) {
                  original.reset(this);
                },
                buttons : function(settings, original) {
                    var form = this;
                    if (settings.submit) {
                        /* if given html string use that */
                        if (settings.submit.match(/>$/)) {
                            var submit = $(settings.submit).click(function() {
                                if (submit.attr("type") != "submit") {
                                    form.submit();
                                }
                            });
                        /* otherwise use button with given string as text */
                        } else {
                            var submit = $('<button type="submit" />');
                            submit.html(settings.submit);                            
                        }
                        $(this).append(submit);
                    }
                    if (settings.cancel) {
                        /* if given html string use that */
                        if (settings.cancel.match(/>$/)) {
                            var cancel = $(settings.cancel);
                        /* otherwise use button with given string as text */
                        } else {
                            var cancel = $('<button type="cancel" />');
                            cancel.html(settings.cancel);
                        }
                        $(this).append(cancel);

                        $(cancel).click(function(event) {
                            //original.reset();
                            if ($.isFunction($.editable.types[settings.type].reset)) {
                                var reset = $.editable.types[settings.type].reset;                                                                
                            } else {
                                var reset = $.editable.types['defaults'].reset;                                
                            }
                            reset.apply(form, [settings, original]);
                            return false;
                        });
                    }
                }
            },
            text: {
                element : function(settings, original) {
                    var input = $('<input />');
                    if (settings.width  != 'none') { input.width(settings.width);  }
                    if (settings.height != 'none') { input.height(settings.height); }
                    /* https://bugzilla.mozilla.org/show_bug.cgi?id=236791 */
                    //input[0].setAttribute('autocomplete','off');
                    input.attr('autocomplete','off');
                    $(this).append(input);
                    return(input);
                }
            },
            textarea: {
                element : function(settings, original) {
                    var textarea = $('<textarea />');
                    if (settings.rows) {
                        textarea.attr('rows', settings.rows);
                    } else if (settings.height != "none") {
                        textarea.height(settings.height);
                    }
                    if (settings.cols) {
                        textarea.attr('cols', settings.cols);
                    } else if (settings.width != "none") {
                        textarea.width(settings.width);
                    }
                    $(this).append(textarea);
                    return(textarea);
                }
            },
            select: {
               element : function(settings, original) {
                    var select = $('<select />');
                    $(this).append(select);
                    return(select);
                },
                content : function(data, settings, original) {
                    /* If it is string assume it is json. */
                    if (String == data.constructor) {      
                        eval ('var json = ' + data);
                    } else {
                    /* Otherwise assume it is a hash already. */
                        var json = data;
                    }
                    for (var key in json) {
                        if (!json.hasOwnProperty(key)) {
                            continue;
                        }
                        if ('selected' == key) {
                            continue;
                        } 
                        var option = $('<option />').val(key).append(json[key]);
                        $('select', this).append(option);    
                    }                    
                    /* Loop option again to set selected. IE needed this... */ 
                    $('select', this).children().each(function() {
                        if ($(this).val() == json['selected'] || 
                            $(this).text() == $.trim(original.revert)) {
                                $(this).attr('selected', 'selected');
                        }
                    });
                }
            }
        },

        /* Add new input type */
        addInputType: function(name, input) {
            $.editable.types[name] = input;
        }
    };

    // publicly accessible defaults
    $.fn.editable.defaults = {
        name       : 'value',
        id         : 'id',
        type       : 'text',
        width      : 'auto',
        height     : 'auto',
        event      : 'click.editable',
        onblur     : 'cancel',
        loadtype   : 'GET',
        loadtext   : 'Loading...',
        placeholder: 'Click to edit',
        loaddata   : {},
        submitdata : {},
        ajaxoptions: {}
    };

})(jQuery);
/*
 * Autogrow textarea for Jeditable
 *
 * Copyright (c) 2008 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Depends on Autogrow jQuery plugin by Chrys Bader:
 *   http://www.aclevercookie.com/facebook-like-auto-growing-textarea/
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Revision: $Id$
 *
 */

 
$.editable.addInputType('autogrow', {
    element : function(settings, original) {
        var textarea = $('<textarea />');
        if (settings.rows) {
            textarea.attr('rows', settings.rows);
        } else {
            textarea.height(settings.height);
        }
        if (settings.cols) {
            textarea.attr('cols', settings.cols);
        } else {
            textarea.width(settings.width);
        }
        $(this).append(textarea);
        return(textarea);
    },
    plugin : function(settings, original) {
        $('textarea', this).autogrow(settings.autogrow);
    }
});
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */

;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/*
 * jQuery Form Example Plugin 1.4.2
 * Populate form inputs with example text that disappears on focus.
 *
 * e.g.
 *  $('input#name').example('Bob Smith');
 *  $('input[@title]').example(function() {
 *    return $(this).attr('title');
 *  });
 *  $('textarea#message').example('Type your message here', {
 *    className: 'example_text'
 *  });
 *
 * Copyright (c) Paul Mucur (http://mucur.name), 2007-2008.
 * Dual-licensed under the BSD (BSD-LICENSE.txt) and GPL (GPL-LICENSE.txt)
 * licenses.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

(function(a){a.fn.example=function(e,c){var d=a.isFunction(e);var b=a.extend({},c,{example:e});return this.each(function(){var f=a(this);if(a.metadata){var g=a.extend({},a.fn.example.defaults,f.metadata(),b)}else{var g=a.extend({},a.fn.example.defaults,b)}if(!a.fn.example.boundClassNames[g.className]){a(window).unload(function(){a("."+g.className).val("")});a("form").live('submit', function(){a(this).find("."+g.className).val("")});a.fn.example.boundClassNames[g.className]=true}if(a.browser.msie&&!f.attr("defaultValue")&&(d||f.val()==g.example)){f.val("")}if(f.val()==""&&this!=document.activeElement){f.addClass(g.className);f.val(d?g.example.call(this):g.example)}f.focus(function(){if(a(this).is("."+g.className)){a(this).val("");a(this).removeClass(g.className)}});f.change(function(){if(a(this).is("."+g.className)){a(this).removeClass(g.className)}});f.blur(function(){if(a(this).val()==""){a(this).addClass(g.className);a(this).val(d?g.example.call(this):g.example)}})})};a.fn.example.defaults={className:"example"};a.fn.example.boundClassNames=[]})(jQuery);
(function($) {

$.fn.ajaxSubmit = function(options) {
    if (typeof options == 'function')
        options = { success: options };

    options = $.extend({
        url:  this.attr('action') || window.location,
        type: this.attr('method') || 'GET'
    }, options || {});

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    $.event.trigger('form.pre.serialize', [this, options, veto]);
    if (veto.veto) return this;

    var a = this.formToArray(options.semantic);
	if (options.data) {
	    for (var n in options.data)
	        a.push( { name: n, value: options.data[n] } );
	}

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;

    // fire vetoable 'validate' event
    $.event.trigger('form.submit.validate', [a, this, options, veto]);
    if (veto.veto) return this;

    var q = $.param(a);//.replace(/%20/g,'+');

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else
        options.data = q; // data is the query string for 'post'

    var $form = this, callbacks = [];
    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            if (this.evalScripts)
                $(options.target).attr("innerHTML", data).evalScripts().each(oldSuccess, arguments);
            else // jQuery v1.1.4
                $(options.target).html(data).each(oldSuccess, arguments);
        });
    }
    else if (options.success)
        callbacks.push(options.success);

    options.success = function(data, status) {
        for (var i=0, max=callbacks.length; i < max; i++)
            callbacks[i](data, status, $form);
    };

    // are there files to upload?
    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j=0; j < files.length; j++)
        if (files[j])
            found = true;

    if (options.iframe || found) // options.iframe allows user to force iframe mode
        fileUpload();
    else
        $.ajax(options);

    // fire 'notify' event
    $.event.trigger('form.submit.notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
        var form = $form[0];
        var opts = $.extend({}, $.ajaxSettings, options);

        var id = 'jqFormIO' + $.fn.ajaxSubmit.counter++;
        var $io = $('<iframe id="' + id + '" name="' + id + '" />');
        var io = $io[0];
        var op8 = $.browser.opera && window.opera.version() < 9;
        if ($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {}
        };

        var g = opts.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && ! $.active++) $.event.trigger("ajaxStart");
        if (g) $.event.trigger("ajaxSend", [xhr, opts]);

        var cbInvoked = 0;
        var timedOut = 0;

        // take a breath so that pending repaints get some cpu time before the upload starts
        setTimeout(function() {
            $io.appendTo('body');
            // jQuery's event binding doesn't work for iframe events in IE
            io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);

            // make sure form attrs are set
            var encAttr = form.encoding ? 'encoding' : 'enctype';
            var t = $form.attr('target');
            $form.attr({
                target:   id,
                method:  'POST',
                action:   opts.url
            });
            form[encAttr] = 'multipart/form-data';

            // support timout
            if (opts.timeout)
                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

            form.submit();
            $form.attr('target', t); // reset target
        }, 10);

        function cb() {
            if (cbInvoked++) return;

            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) throw 'timeout';
                // extract the server response from the iframe
                var data, doc;
                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                xhr.responseText = doc.body ? doc.body.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;

                if (opts.dataType == 'json' || opts.dataType == 'script') {
                    var ta = doc.getElementsByTagName('textarea')[0];
                    data = ta ? ta.value : xhr.responseText;
                    if (opts.dataType == 'json')
                        eval("data = " + data);
                    else
                        $.globalEval(data);
                }
                else if (opts.dataType == 'xml') {
                    data = xhr.responseXML;
                    if (!data && xhr.responseText != null)
                        data = toXml(xhr.responseText);
                }
                else {
                    data = xhr.responseText;
                }
            }
            catch(e){
                ok = false;
                $.handleError(opts, xhr, 'error', e);
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (ok) {
                opts.success(data, 'success');
                if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
            }
            if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
            if (g && ! --$.active) $.event.trigger("ajaxStop");
            if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

            // clean up
            setTimeout(function() {
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        };

        function toXml(s, doc) {
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
        };
    };
};
$.fn.ajaxSubmit.counter = 0; // used to create unique iframe ids

$.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().submit(submitHandler).each(function() {
        // store options in hash
        this.formPluginId = $.fn.ajaxForm.counter++;
        $.fn.ajaxForm.optionHash[this.formPluginId] = options;
        $(":submit,input:image", this).click(clickHandler);
    });
};

$.fn.ajaxForm.counter = 1;
$.fn.ajaxForm.optionHash = {};

function clickHandler(e) {
    var $form = this.form;
    $form.clk = this;
    if (this.type == 'image') {
        if (e.offsetX != undefined) {
            $form.clk_x = e.offsetX;
            $form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
            var offset = $(this).offset();
            $form.clk_x = e.pageX - offset.left;
            $form.clk_y = e.pageY - offset.top;
        } else {
            $form.clk_x = e.pageX - this.offsetLeft;
            $form.clk_y = e.pageY - this.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { $form.clk = $form.clk_x = $form.clk_y = null; }, 10);
};

function submitHandler() {
    // retrieve options from hash
    var id = this.formPluginId;
    var options = $.fn.ajaxForm.optionHash[id];
    $(this).ajaxSubmit(options);
    return false;
};

/**
 * ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
 *
 * @name   ajaxFormUnbind
 * @return jQuery
 * @cat    Plugins/Form
 * @type   jQuery
 */
$.fn.ajaxFormUnbind = function() {
    this.unbind('submit', submitHandler);
    return this.each(function() {
        $(":submit,input:image", this).unbind('click', clickHandler);
    });

};

$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for(var i=0, max=els.length; i < max; i++) {
        var el = els[i];
        var n = el.name;
        if (!n) continue;

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            continue;
        }

        var v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(var j=0, jmax=v.length; j < jmax; j++)
                a.push({name: n, value: v[j]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: n, value: v});
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle them here
        var inputs = form.getElementsByTagName("input");
        for(var i=0, max=inputs.length; i < max; i++) {
            var input = inputs[i];
            var n = input.name;
            if(n && !input.disabled && input.type == "image" && form.clk == input)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) return;
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++)
                a.push({name: n, value: v[i]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: this.name, value: v});
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
            continue;
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1))
            return null;

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) return null;
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                // extra pain for IE...
                var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
                if (one) return v;
                a.push(v);
            }
        }
        return a;
    }
    return el.value;
};

$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};


$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};


$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
            this.reset();
    });
};

})(jQuery);
/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 */
;(function($){$.fn.extend({autocomplete:function(urlOrData,options){var isUrl=typeof urlOrData=="string";options=$.extend({},$.Autocompleter.defaults,{url:isUrl?urlOrData:null,data:isUrl?null:urlOrData,delay:isUrl?$.Autocompleter.defaults.delay:10,max:options&&!options.scroll?10:150},options);options.highlight=options.highlight||function(value){return value;};options.formatMatch=options.formatMatch||options.formatItem;return this.each(function(){new $.Autocompleter(this,options);});},result:function(handler){return this.bind("result",handler);},search:function(handler){return this.trigger("search",[handler]);},flushCache:function(){return this.trigger("flushCache");},setOptions:function(options){return this.trigger("setOptions",[options]);},unautocomplete:function(){return this.trigger("unautocomplete");}});$.Autocompleter=function(input,options){var KEY={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var $input=$(input).attr("autocomplete","off").addClass(options.inputClass);var timeout;var previousValue="";var cache=$.Autocompleter.Cache(options);var hasFocus=0;var lastKeyPressCode;var config={mouseDownOnSelect:false};var select=$.Autocompleter.Select(options,input,selectCurrent,config);var blockSubmit;$.browser.opera&&$(input.form).bind("submit.autocomplete",function(){if(blockSubmit){blockSubmit=false;return false;}});$input.bind(($.browser.opera?"keypress":"keydown")+".autocomplete",function(event){hasFocus=1;lastKeyPressCode=event.keyCode;switch(event.keyCode){case KEY.UP:event.preventDefault();if(select.visible()){select.prev();}else{onChange(0,true);}break;case KEY.DOWN:event.preventDefault();if(select.visible()){select.next();}else{onChange(0,true);}break;case KEY.PAGEUP:event.preventDefault();if(select.visible()){select.pageUp();}else{onChange(0,true);}break;case KEY.PAGEDOWN:event.preventDefault();if(select.visible()){select.pageDown();}else{onChange(0,true);}break;case options.multiple&&$.trim(options.multipleSeparator)==","&&KEY.COMMA:case KEY.TAB:case KEY.RETURN:if(selectCurrent()){event.preventDefault();blockSubmit=true;return false;}break;case KEY.ESC:select.hide();break;default:clearTimeout(timeout);timeout=setTimeout(onChange,options.delay);break;}}).focus(function(){hasFocus++;}).blur(function(){hasFocus=0;if(!config.mouseDownOnSelect){hideResults();}}).click(function(){if(hasFocus++>1&&!select.visible()){onChange(0,true);}}).bind("search",function(){var fn=(arguments.length>1)?arguments[1]:null;function findValueCallback(q,data){var result;if(data&&data.length){for(var i=0;i<data.length;i++){if(data[i].result.toLowerCase()==q.toLowerCase()){result=data[i];break;}}}if(typeof fn=="function")fn(result);else $input.trigger("result",result&&[result.data,result.value]);}$.each(trimWords($input.val()),function(i,value){request(value,findValueCallback,findValueCallback);});}).bind("flushCache",function(){cache.flush();}).bind("setOptions",function(){$.extend(options,arguments[1]);if("data"in arguments[1])cache.populate();}).bind("unautocomplete",function(){select.unbind();$input.unbind();$(input.form).unbind(".autocomplete");});function selectCurrent(){var selected=select.selected();if(!selected)return false;var v=selected.result;previousValue=v;if(options.multiple){var words=trimWords($input.val());if(words.length>1){var seperator=options.multipleSeparator.length;var cursorAt=$(input).selection().start;var wordAt,progress=0;$.each(words,function(i,word){progress+=word.length;if(cursorAt<=progress){wordAt=i;return false;}progress+=seperator;});words[wordAt]=v;v=words.join(options.multipleSeparator);}v+=options.multipleSeparator;}$input.val(v);hideResultsNow();$input.trigger("result",[selected.data,selected.value]);return true;}function onChange(crap,skipPrevCheck){if(lastKeyPressCode==KEY.DEL){select.hide();return;}var currentValue=$input.val();if(!skipPrevCheck&&currentValue==previousValue)return;previousValue=currentValue;currentValue=lastWord(currentValue);if(currentValue.length>=options.minChars){$input.addClass(options.loadingClass);if(!options.matchCase)currentValue=currentValue.toLowerCase();request(currentValue,receiveData,hideResultsNow);}else{stopLoading();select.hide();}};function trimWords(value){if(!value)return[""];if(!options.multiple)return[$.trim(value)];return $.map(value.split(options.multipleSeparator),function(word){return $.trim(value).length?$.trim(word):null;});}function lastWord(value){if(!options.multiple)return value;var words=trimWords(value);if(words.length==1)return words[0];var cursorAt=$(input).selection().start;if(cursorAt==value.length){words=trimWords(value)}else{words=trimWords(value.replace(value.substring(cursorAt),""));}return words[words.length-1];}function autoFill(q,sValue){if(options.autoFill&&(lastWord($input.val()).toLowerCase()==q.toLowerCase())&&lastKeyPressCode!=KEY.BACKSPACE){$input.val($input.val()+sValue.substring(lastWord(previousValue).length));$(input).selection(previousValue.length,previousValue.length+sValue.length);}};function hideResults(){clearTimeout(timeout);timeout=setTimeout(hideResultsNow,200);};function hideResultsNow(){var wasVisible=select.visible();select.hide();clearTimeout(timeout);stopLoading();if(options.mustMatch){$input.search(function(result){if(!result){if(options.multiple){var words=trimWords($input.val()).slice(0,-1);$input.val(words.join(options.multipleSeparator)+(words.length?options.multipleSeparator:""));}else{$input.val("");$input.trigger("result",null);}}});}};function receiveData(q,data){if(data&&data.length&&hasFocus){stopLoading();select.display(data,q);autoFill(q,data[0].value);select.show();}else{hideResultsNow();}};function request(term,success,failure){if(!options.matchCase)term=term.toLowerCase();var data=cache.load(term);if(data&&data.length){success(term,data);}else if((typeof options.url=="string")&&(options.url.length>0)){var extraParams={timestamp:+new Date()};$.each(options.extraParams,function(key,param){extraParams[key]=typeof param=="function"?param():param;});$.ajax({mode:"abort",port:"autocomplete"+input.name,dataType:options.dataType,url:options.url,data:$.extend({q:lastWord(term),limit:options.max},extraParams),success:function(data){var parsed=options.parse&&options.parse(data)||parse(data);cache.add(term,parsed);success(term,parsed);}});}else{select.emptyList();failure(term);}};function parse(data){var parsed=[];var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[0],result:options.formatResult&&options.formatResult(row,row[0])||row[0]};}}return parsed;};function stopLoading(){$input.removeClass(options.loadingClass);};};$.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(row){return row[0];},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(value,term){return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");},scroll:true,scrollHeight:180};$.Autocompleter.Cache=function(options){var data={};var length=0;function matchSubset(s,sub){if(!options.matchCase)s=s.toLowerCase();var i=s.indexOf(sub);if(options.matchContains=="word"){i=s.toLowerCase().search("\\b"+sub.toLowerCase());}if(i==-1)return false;return i==0||options.matchContains;};function add(q,value){if(length>options.cacheLength){flush();}if(!data[q]){length++;}data[q]=value;}function populate(){if(!options.data)return false;var stMatchSets={},nullData=0;if(!options.url)options.cacheLength=1;stMatchSets[""]=[];for(var i=0,ol=options.data.length;i<ol;i++){var rawValue=options.data[i];rawValue=(typeof rawValue=="string")?[rawValue]:rawValue;var value=options.formatMatch(rawValue,i+1,options.data.length);if(value===false)continue;var firstChar=value.charAt(0).toLowerCase();if(!stMatchSets[firstChar])stMatchSets[firstChar]=[];var row={value:value,data:rawValue,result:options.formatResult&&options.formatResult(rawValue)||value};stMatchSets[firstChar].push(row);if(nullData++<options.max){stMatchSets[""].push(row);}};$.each(stMatchSets,function(i,value){options.cacheLength++;add(i,value);});}setTimeout(populate,25);function flush(){data={};length=0;}return{flush:flush,add:add,populate:populate,load:function(q){if(!options.cacheLength||!length)return null;if(!options.url&&options.matchContains){var csub=[];for(var k in data){if(k.length>0){var c=data[k];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub.push(x);}});}}return csub;}else
if(data[q]){return data[q];}else
if(options.matchSubset){for(var i=q.length-1;i>=options.minChars;i--){var c=data[q.substr(0,i)];if(c){var csub=[];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub[csub.length]=x;}});return csub;}}}return null;}};};$.Autocompleter.Select=function(options,input,select,config){var CLASSES={ACTIVE:"ac_over"};var listItems,active=-1,data,term="",needsInit=true,element,list;function init(){if(!needsInit)return;element=$("<div/>").hide().addClass(options.resultsClass).css("position","absolute").appendTo(document.body);list=$("<ul/>").appendTo(element).mouseover(function(event){if(target(event).nodeName&&target(event).nodeName.toUpperCase()=='LI'){active=$("li",list).removeClass(CLASSES.ACTIVE).index(target(event));$(target(event)).addClass(CLASSES.ACTIVE);}}).click(function(event){$(target(event)).addClass(CLASSES.ACTIVE);select();input.focus();return false;}).mousedown(function(){config.mouseDownOnSelect=true;}).mouseup(function(){config.mouseDownOnSelect=false;});if(options.width>0)element.css("width",options.width);needsInit=false;}function target(event){var element=event.target;while(element&&element.tagName!="LI")element=element.parentNode;if(!element)return[];return element;}function moveSelect(step){listItems.slice(active,active+1).removeClass(CLASSES.ACTIVE);movePosition(step);var activeItem=listItems.slice(active,active+1).addClass(CLASSES.ACTIVE);if(options.scroll){var offset=0;listItems.slice(0,active).each(function(){offset+=this.offsetHeight;});if((offset+activeItem[0].offsetHeight-list.scrollTop())>list[0].clientHeight){list.scrollTop(offset+activeItem[0].offsetHeight-list.innerHeight());}else if(offset<list.scrollTop()){list.scrollTop(offset);}}};function movePosition(step){active+=step;if(active<0){active=listItems.size()-1;}else if(active>=listItems.size()){active=0;}}function limitNumberOfItems(available){return options.max&&options.max<available?options.max:available;}function fillList(){list.empty();var max=limitNumberOfItems(data.length);for(var i=0;i<max;i++){if(!data[i])continue;var formatted=options.formatItem(data[i].data,i+1,max,data[i].value,term);if(formatted===false)continue;var li=$("<li/>").html(options.highlight(formatted,term)).addClass(i%2==0?"ac_even":"ac_odd").appendTo(list)[0];$.data(li,"ac_data",data[i]);}listItems=list.find("li");if(options.selectFirst){listItems.slice(0,1).addClass(CLASSES.ACTIVE);active=0;}if($.fn.bgiframe)list.bgiframe();}return{display:function(d,q){init();data=d;term=q;fillList();},next:function(){moveSelect(1);},prev:function(){moveSelect(-1);},pageUp:function(){if(active!=0&&active-8<0){moveSelect(-active);}else{moveSelect(-8);}},pageDown:function(){if(active!=listItems.size()-1&&active+8>listItems.size()){moveSelect(listItems.size()-1-active);}else{moveSelect(8);}},hide:function(){element&&element.hide();listItems&&listItems.removeClass(CLASSES.ACTIVE);active=-1;},visible:function(){return element&&element.is(":visible");},current:function(){return this.visible()&&(listItems.filter("."+CLASSES.ACTIVE)[0]||options.selectFirst&&listItems[0]);},show:function(){var offset=$(input).offset();element.css({width:typeof options.width=="string"||options.width>0?options.width:$(input).width(),top:offset.top+input.offsetHeight,left:offset.left}).show();if(options.scroll){list.scrollTop(0);list.css({maxHeight:options.scrollHeight,overflow:'auto'});if($.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var listHeight=0;listItems.each(function(){listHeight+=this.offsetHeight;});var scrollbarsVisible=listHeight>options.scrollHeight;list.css('height',scrollbarsVisible?options.scrollHeight:listHeight);if(!scrollbarsVisible){listItems.width(list.width()-parseInt(listItems.css("padding-left"))-parseInt(listItems.css("padding-right")));}}}},selected:function(){var selected=listItems&&listItems.filter("."+CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);return selected&&selected.length&&$.data(selected[0],"ac_data");},emptyList:function(){list&&list.empty();},unbind:function(){element&&element.remove();}};};$.fn.selection=function(start,end){if(start!==undefined){return this.each(function(){if(this.createTextRange){var selRange=this.createTextRange();if(end===undefined||start==end){selRange.move("character",start);selRange.select();}else{selRange.collapse(true);selRange.moveStart("character",start);selRange.moveEnd("character",end);selRange.select();}}else if(this.setSelectionRange){this.setSelectionRange(start,end);}else if(this.selectionStart){this.selectionStart=start;this.selectionEnd=end;}});}var field=this[0];if(field.createTextRange){var range=document.selection.createRange(),orig=field.value,teststring="<->",textLength=range.text.length;range.text=teststring;var caretAt=field.value.indexOf(teststring);field.value=orig;this.selection(caretAt,caretAt+textLength);return{start:caretAt,end:caretAt+textLength}}else if(field.selectionStart!==undefined){return{start:field.selectionStart,end:field.selectionEnd}}};})(jQuery);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
/*!
 * urlInternal - v1.0 - 10/7/2009
 * http://benalman.com/projects/jquery-urlinternal-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery urlInternal: Easily test URL internal-, external or fragment-ness
// 
// *Version: 1.0, Last updated: 10/7/2009*
// 
// Project Home - http://benalman.com/projects/jquery-urlinternal-plugin/
// GitHub       - http://github.com/cowboy/jquery-urlinternal/
// Source       - http://github.com/cowboy/jquery-urlinternal/raw/master/jquery.ba-urlinternal.js
// (Minified)   - http://github.com/cowboy/jquery-urlinternal/raw/master/jquery.ba-urlinternal.min.js (1.7kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates a few
// ways in which this plugin can be used.
// 
// http://benalman.com/code/projects/jquery-urlinternal/examples/urlinternal/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.7, Safari 3-4, Chrome, Opera 9.6-10.
// Unit Tests      - http://benalman.com/code/projects/jquery-urlinternal/unit/
// 
// About: Release History
// 
// 1.0 - (10/7/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // Some convenient shortcuts.
  var undefined,
    TRUE = !0,
    FALSE = !1,
    loc = window.location,
    aps = Array.prototype.slice,
    
    matches = loc.href.match( /^((https?:\/\/.*?\/)?[^#]*)#?.*$/ ),
    loc_fragbase = matches[1] + '#',
    loc_hostbase = matches[2],
    
    // Method references.
    jq_elemUrlAttr,
    jq_urlInternalHost,
    jq_urlInternalRegExp,
    jq_isUrlInternal,
    jq_isUrlExternal,
    jq_isUrlFragment,
    
    // Reused strings.
    str_elemUrlAttr = 'elemUrlAttr',
    str_href = 'href',
    str_src = 'src',
    str_urlInternal = 'urlInternal',
    str_urlExternal = 'urlExternal',
    str_urlFragment = 'urlFragment',
    
    url_regexp,
    
    // Used by jQuery.elemUrlAttr.
    elemUrlAttr_cache = {};
  
  // Why write the same function twice? Let's curry! Mmmm, curry..
  
  function curry( func ) {
    var args = aps.call( arguments, 1 );
    
    return function() {
      return func.apply( this, args.concat( aps.call( arguments ) ) );
    };
  };
  
  // Section: Methods
  // 
  // Method: jQuery.isUrlInternal
  // 
  // Test whether or not a URL is internal. Non-navigating URLs (ie. #anchor,
  // javascript:, mailto:, news:, tel:, im: or non-http/https protocol://
  // links) are not considered internal.
  // 
  // Usage:
  // 
  // > jQuery.isUrlInternal( url );
  // 
  // Arguments:
  // 
  //   url - (String) a URL to test the internal-ness of.
  // 
  // Returns:
  // 
  //  (Boolean) true if the URL is internal, false if external, or undefined if
  //  the URL is non-navigating.
  
  $.isUrlInternal = jq_isUrlInternal = function( url ) {
    
    // non-navigating: url is nonexistent or a fragment
    if ( !url || jq_isUrlFragment( url ) ) { return undefined; }
    
    // internal: url is absolute-but-internal (see $.urlInternalRegExp)
    if ( url_regexp.test(url) ) { return TRUE; }
    
    // external: url is absolute (begins with http:// or https:// or //)
    if ( /^(?:https?:)?\/\//i.test(url) ) { return FALSE; }
    
    // non-navigating: url begins with scheme:
    if ( /^[a-z\d.-]+:/i.test(url) ) { return undefined; }
    
    return TRUE;
  };
  
  // Method: jQuery.isUrlExternal
  // 
  // Test whether or not a URL is external. Non-navigating URLs (ie. #anchor,
  // mailto:, javascript:, or non-http/https protocol:// links) are not
  // considered external.
  // 
  // Usage:
  // 
  // > jQuery.isUrlExternal( url );
  // 
  // Arguments:
  // 
  //   url - (String) a URL to test the external-ness of.
  // 
  // Returns:
  // 
  //  (Boolean) true if the URL is external, false if internal, or undefined if
  //  the URL is non-navigating.
  
  $.isUrlExternal = jq_isUrlExternal = function( url ) {
    var result = jq_isUrlInternal( url );
    
    return typeof result === 'boolean'
      ? !result
      : result;
  };
  
  // Method: jQuery.isUrlFragment
  // 
  // Test whether or not a URL is a fragment in the context of the current page,
  // meaning the URL can either begin with # or be a partial URL or full URI,
  // but when it is navigated to, only the document.location.hash will change,
  // and the page will not reload.
  // 
  // Usage:
  // 
  // > jQuery.isUrlFragment( url );
  // 
  // Arguments:
  // 
  //   url - (String) a URL to test the fragment-ness of.
  // 
  // Returns:
  // 
  //  (Boolean) true if the URL is a fragment, false otherwise.
  
  $.isUrlFragment = jq_isUrlFragment = function( url ) {
    var matches = ( url || '' ).match( /^([^#]?)([^#]*#).*$/ );
    
    // url *might* be a fragment, since there were matches.
    return !!matches && (
      
      // url is just a fragment.
      matches[2] === '#'
      
      // url is absolute and contains a fragment, but is otherwise the same URI.
      || url.indexOf( loc_fragbase ) === 0
      
      // url is relative, begins with '/', contains a fragment, and is otherwise
      // the same URI.
      || ( matches[1] === '/' ? loc_hostbase + matches[2] === loc_fragbase
      
      // url is relative, but doesn't begin with '/', contains a fragment, and
      // is otherwise the same URI. This isn't even remotely efficient, but it's
      // significantly less code than parsing everything. Besides, it will only
      // even be tested on url values that contain '#', aren't absolute, and
      // don't begin with '/', which is not going to be many of them.
      : !/^https?:\/\//i.test( url ) && $('<a href="' + url + '"/>')[0].href.indexOf( loc_fragbase ) === 0 )
    );
  };
  
  // Method: jQuery.fn.urlInternal
  // 
  // Filter a jQuery collection of elements, returning only elements that have
  // an internal URL (as determined by <jQuery.isUrlInternal>). If URL cannot
  // be determined, remove the element from the collection.
  // 
  // Usage:
  // 
  // > jQuery('selector').urlInternal( [ attr ] );
  // 
  // Arguments:
  // 
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    test internal-ness against. See <jQuery.elemUrlAttr> for a list of
  //    default attributes.
  // 
  // Returns:
  // 
  //  (jQuery) A filtered jQuery collection of elements.
  
  // Method: jQuery.fn.urlExternal
  // 
  // Filter a jQuery collection of elements, returning only elements that have
  // an external URL (as determined by <jQuery.isUrlExternal>). If URL cannot
  // be determined, remove the element from the collection.
  // 
  // Usage:
  // 
  // > jQuery('selector').urlExternal( [ attr ] );
  // 
  // Arguments:
  // 
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    test external-ness against. See <jQuery.elemUrlAttr> for a list of
  //    default attributes.
  // 
  // Returns:
  // 
  //  (jQuery) A filtered jQuery collection of elements.
  
  // Method: jQuery.fn.urlFragment
  // 
  // Filter a jQuery collection of elements, returning only elements that have
  // an fragment URL (as determined by <jQuery.isUrlFragment>). If URL cannot
  // be determined, remove the element from the collection.
  // 
  // Note that in most browsers, selecting $("a[href^=#]") is reliable, but this
  // doesn't always work in IE6/7! In order to properly test whether a URL
  // attribute's value is a fragment in the context of the current page, you can
  // either make your selector a bit more complicated.. or use .urlFragment!
  // 
  // Usage:
  // 
  // > jQuery('selector').urlFragment( [ attr ] );
  // 
  // Arguments:
  // 
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    test external-ness against. See <jQuery.elemUrlAttr> for a list of
  //    default attributes.
  // 
  // Returns:
  // 
  //  (jQuery) A filtered jQuery collection of elements.
  
  function fn_filter( str, attr ) {
    return this.filter( ':' + str + (attr ? '(' + attr + ')' : '') );
  };
  
  $.fn[ str_urlInternal ] = curry( fn_filter, str_urlInternal );
  $.fn[ str_urlExternal ] = curry( fn_filter, str_urlExternal );
  $.fn[ str_urlFragment ] = curry( fn_filter, str_urlFragment );
  
  // Section: Selectors
  // 
  // Selector: :urlInternal
  // 
  // Filter a jQuery collection of elements, returning only elements that have
  // an internal URL (as determined by <jQuery.isUrlInternal>). If URL cannot
  // be determined, remove the element from the collection.
  // 
  // Usage:
  // 
  // > jQuery('selector').filter(':urlInternal');
  // > jQuery('selector').filter(':urlInternal(attr)');
  // 
  // Arguments:
  // 
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    test internal-ness against. See <jQuery.elemUrlAttr> for a list of
  //    default attributes.
  // 
  // Returns:
  // 
  //  (jQuery) A filtered jQuery collection of elements.
  
  // Selector: :urlExternal
  // 
  // Filter a jQuery collection of elements, returning only elements that have
  // an external URL (as determined by <jQuery.isUrlExternal>). If URL cannot
  // be determined, remove the element from the collection.
  // 
  // Usage:
  // 
  // > jQuery('selector').filter(':urlExternal');
  // > jQuery('selector').filter(':urlExternal(attr)');
  // 
  // Arguments:
  // 
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    test external-ness against. See <jQuery.elemUrlAttr> for a list of
  //    default attributes.
  // 
  // Returns:
  // 
  //  (jQuery) A filtered jQuery collection of elements.
  
  // Selector: :urlFragment
  // 
  // Filter a jQuery collection of elements, returning only elements that have
  // an fragment URL (as determined by <jQuery.isUrlFragment>). If URL cannot
  // be determined, remove the element from the collection.
  // 
  // Note that in most browsers, selecting $("a[href^=#]") is reliable, but this
  // doesn't always work in IE6/7! In order to properly test whether a URL
  // attribute's value is a fragment in the context of the current page, you can
  // either make your selector a bit more complicated.. or use :urlFragment!
  // 
  // Usage:
  // 
  // > jQuery('selector').filter(':urlFragment');
  // > jQuery('selector').filter(':urlFragment(attr)');
  // 
  // Arguments:
  // 
  //  attr - (String) Optional name of an attribute that will contain a URL to
  //    test fragment-ness against. See <jQuery.elemUrlAttr> for a list of
  //    default attributes.
  // 
  // Returns:
  // 
  //  (jQuery) A filtered jQuery collection of elements.
  
  function fn_selector( func, elem, i, match ) {
    var a = match[3] || jq_elemUrlAttr()[ ( elem.nodeName || '' ).toLowerCase() ] || '';
    
    return a ? !!func( elem.getAttribute( a ) ) : FALSE;
  };
  
  $.expr[':'][ str_urlInternal ] = curry( fn_selector, jq_isUrlInternal );
  $.expr[':'][ str_urlExternal ] = curry( fn_selector, jq_isUrlExternal );
  $.expr[':'][ str_urlFragment ] = curry( fn_selector, jq_isUrlFragment );
  
  // Section: Support methods
  // 
  // Method: jQuery.elemUrlAttr
  // 
  // Get the internal "Default URL attribute per tag" list, or augment the list
  // with additional tag-attribute pairs, in case the defaults are insufficient.
  // 
  // In the <jQuery.fn.urlInternal> and <jQuery.fn.urlExternal> methods, as well
  // as the <:urlInternal> and <:urlExternal> selectors, this list is used to
  // determine which attribute contains the URL to be modified, if an "attr"
  // param is not specified.
  // 
  // Default Tag-Attribute List:
  // 
  //  a      - href
  //  base   - href
  //  iframe - src
  //  img    - src
  //  input  - src
  //  form   - action
  //  link   - href
  //  script - src
  // 
  // Usage:
  // 
  // > jQuery.elemUrlAttr( [ tag_attr ] );
  // 
  // Arguments:
  // 
  //  tag_attr - (Object) An object containing a list of tag names and their
  //    associated default attribute names in the format { tag: 'attr', ... } to
  //    be merged into the internal tag-attribute list.
  // 
  // Returns:
  // 
  //  (Object) An object containing all stored tag-attribute values.
  
  // Only define function and set defaults if function doesn't already exist, as
  // the jQuery BBQ plugin will provide this method as well.
  $[ str_elemUrlAttr ] || ($[ str_elemUrlAttr ] = function( obj ) {
    return $.extend( elemUrlAttr_cache, obj );
  })({
    a: str_href,
    base: str_href,
    iframe: str_src,
    img: str_src,
    input: str_src,
    form: 'action',
    link: str_href,
    script: str_src
  });
  
  jq_elemUrlAttr = $[ str_elemUrlAttr ];
  
  // Method: jQuery.urlInternalHost
  // 
  // Constructs the regular expression that matches an absolute-but-internal
  // URL from the current page's protocol, hostname and port, allowing for any
  // number of optional hostnames. For example, if the current page is
  // http://benalman.com/test or http://www.benalman.com/test, specifying an
  // argument of "www" would yield this pattern:
  // 
  // > /^(?:http:)?\/\/(?:(?:www)\.)?benalman.com\//i
  // 
  // This pattern will match URLs beginning with both http://benalman.com/ and
  // http://www.benalman.com/. If the current page is http://benalman.com/test,
  // http://www.benalman.com/test or http://foo.benalman.com/test, specifying
  // arguments "www", "foo" would yield this pattern:
  // 
  // > /^(?:http:)?\/\/(?:(?:www|foo)\.)?benalman.com\//i
  // 
  // This pattern will match URLs beginning with http://benalman.com/,
  // http://www.benalman.com/ and http://foo.benalman.com/.
  // 
  // Not specifying any alt_hostname will disable any alt-hostname matching.
  // 
  // Note that the plugin is initialized by default to an alt_hostname of "www".
  // Should you need more control, <jQuery.urlInternalRegExp> may be used to
  // completely customize the absolute-but-internal matching pattern.
  // 
  // Usage:
  // 
  // > jQuery.urlInternalHost( [ alt_hostname [, alt_hostname ] ... ] );
  // 
  // Arguments:
  // 
  //  alt_hostname - (String) An optional alternate hostname to use when testing
  //    URL absolute-but-internal-ness. 
  // 
  // Returns:
  // 
  //  (RegExp) The absolute-but-internal pattern, as a RegExp.
  
  $.urlInternalHost = jq_urlInternalHost = function( alt_hostname ) {
    alt_hostname = alt_hostname
      ? '(?:(?:' + Array.prototype.join.call( arguments, '|' ) + ')\\.)?'
      : '';

    var loc_hostname_parts = loc.hostname.split('.')
    if (loc_hostname_parts.length > CANONICAL_DOMAIN_PARTS_LENGTH) loc_hostname_parts.shift()
    var loc_hostname = loc_hostname_parts.join(".")
    
    var re = new RegExp( '^' + alt_hostname + '(.*)', 'i' ),
      pattern = '^(?:' + loc.protocol + ')?//'
        + '(?:' + '(?:' + VALID_SUBDOMAINS.join('|') + ')' + '\.)?'
        + loc_hostname.replace(re, alt_hostname + '$1').replace( /\\?\./g, '\\.' )
        + (loc.port ? ':' + loc.port : '') + '/';
    
    return jq_urlInternalRegExp( pattern );
  };
    
  // Method: jQuery.urlInternalRegExp
  // 
  // Set or get the regular expression that matches an absolute-but-internal
  // URL.
  // 
  // Usage:
  // 
  // > jQuery.urlInternalRegExp( [ re ] );
  // 
  // Arguments:
  // 
  //  re - (String or RegExp) The regular expression pattern. If not passed,
  //    nothing is changed.
  // 
  // Returns:
  // 
  //  (RegExp) The absolute-but-internal pattern, as a RegExp.
  
  $.urlInternalRegExp = jq_urlInternalRegExp = function( re ) {
    if ( re ) {
      url_regexp = typeof re === 'string'
        ? new RegExp( re, 'i' )
        : re;
    }
    
    return url_regexp;
  };
  
  // Initialize url_regexp with a reasonable default.
  jq_urlInternalHost( 'www' );
  
})(jQuery);
/*
 * timeago: a jQuery plugin, version: 0.9 (2010-06-21)
 * @requires jQuery v1.2.3 or later
 *
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2008-2010, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */

;(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) return inWords(timestamp);
    else if (typeof timestamp == "string") return inWords($.timeago.parse(timestamp));
    else return inWords($.timeago.datetime(timestamp));
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
        distanceMillis = Math.abs(distanceMillis);
      }

      var seconds = distanceMillis / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 48 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.floor(days)) ||
        days < 60 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.floor(days / 30)) ||
        years < 2 && substitute($l.year, 1) ||
        substitute($l.years, Math.floor(years));

      return $.trim([prefix, words, suffix].join(" "));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d\d\d/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      var isTime = $(elem).get(0).tagName.toLowerCase() == "time"; // $(elem).is("time");
      var iso8601 = isTime ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0) element.attr("title", text);
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
})(jQuery);
//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Attacklab.showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


//
// Attacklab namespace
//
var Attacklab = Attacklab || {}

//
// Showdown namespace
//
Attacklab.showdown = Attacklab.showdown || {}

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Attacklab.showdown.converter = function() {

//
// Globals:
//

// Global hashes, used by various utility routines
var g_urls;
var g_titles;
var g_html_blocks;

// Used to track when we're inside an ordered or unordered list
// (see _ProcessListItems() for details):
var g_list_level = 0;


this.makeHtml = function(text) {
  
  // TOM'S ADDITION TODO
  if (text === null) {
    return;
  }
  // TOM'S ADDITION
  
//
// Main function. The order in which other subs are called here is
// essential. Link and image substitutions need to happen before
// _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
// and <img> tags get encoded.
//

	// Clear the global hashes. If we don't clear these, you get conflicts
	// from other articles when generating a page which contains more than
	// one article (e.g. an index page that shows the N most recent
	// articles):
	g_urls = new Array();
	g_titles = new Array();
	g_html_blocks = new Array();

	// attacklab: Replace ~ with ~T
	// This lets us use tilde as an escape char to avoid md5 hashes
	// The choice of character is arbitray; anything that isn't
    // magic in Markdown will work.
	text = text.replace(/~/g,"~T");

	// attacklab: Replace $ with ~D
	// RegExp interprets $ as a special character
	// when it's in a replacement string
	text = text.replace(/\$/g,"~D");

	// Standardize line endings
	text = text.replace(/\r\n/g,"\n"); // DOS to Unix
	text = text.replace(/\r/g,"\n"); // Mac to Unix

	// Make sure text begins and ends with a couple of newlines:
	text = "\n\n" + text + "\n\n";

	// Convert all tabs to spaces.
	text = _Detab(text);

	// Strip any lines consisting only of spaces and tabs.
	// This makes subsequent regexen easier to write, because we can
	// match consecutive blank lines with /\n+/ instead of something
	// contorted like /[ \t]*\n+/ .
	text = text.replace(/^[ \t]+$/mg,"");

	// Turn block-level HTML blocks into hash entries
	text = _HashHTMLBlocks(text);

	// Strip link definitions, store in hashes.
	text = _StripLinkDefinitions(text);

	text = _RunBlockGamut(text);

	text = _UnescapeSpecialChars(text);

	// attacklab: Restore dollar signs
	text = text.replace(/~D/g,"$$");

	// attacklab: Restore tildes
	text = text.replace(/~T/g,"~");
	
  // ** GFM **  Auto-link URLs and emails
  text = text.replace(/https?\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!]/g, function(wholeMatch,matchIndex){
    var left = text.slice(0, matchIndex), right = text.slice(matchIndex)
    if (left.match(/<[^>]+$/) && right.match(/^[^>]*>/)) {return wholeMatch}
    return "<a href='" + wholeMatch + "'>" + wholeMatch + "</a>";
  });
  text = text.replace(/[a-z0-9_\-+=.]+@[a-z0-9\-]+(\.[a-z0-9-]+)+/ig, function(wholeMatch){return "<a href='mailto:" + wholeMatch + "'>" + wholeMatch + "</a>";});

	return text;
}

var _StripLinkDefinitions = function(text) {
//
// Strips link definitions from text, stores the URLs and titles in
// hash references.
//

	// Link defs are in the form: ^[id]: url "optional title"

	/*
		var text = text.replace(/
				^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
				  [ \t]*
				  \n?				// maybe *one* newline
				  [ \t]*
				<?(\S+?)>?			// url = $2
				  [ \t]*
				  \n?				// maybe one newline
				  [ \t]*
				(?:
				  (\n*)				// any lines skipped = $3 attacklab: lookbehind removed
				  ["(]
				  (.+?)				// title = $4
				  [")]
				  [ \t]*
				)?					// title is optional
				(?:\n+|$)
			  /gm,
			  function(){...});
	*/
	var text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,
		function (wholeMatch,m1,m2,m3,m4) {
			m1 = m1.toLowerCase();
			g_urls[m1] = _EncodeAmpsAndAngles(m2);  // Link IDs are case-insensitive
			if (m3) {
				// Oops, found blank lines, so it's not a title.
				// Put back the parenthetical statement we stole.
				return m3+m4;
			} else if (m4) {
				g_titles[m1] = m4.replace(/"/g,"&quot;");
			}
			
			// Completely remove the definition from the text
			return "";
		}
	);

	return text;
}

var _HashHTMLBlocks = function(text) {
	// attacklab: Double up blank lines to reduce lookaround
	text = text.replace(/\n/g,"\n\n");

	// Hashify HTML blocks:
	// We only want to do this for block-level HTML tags, such as headers,
	// lists, and tables. That's because we still want to wrap <p>s around
	// "paragraphs" that are wrapped in non-block-level tags, such as anchors,
	// phrase emphasis, and spans. The list of tags we're looking for is
	// hard-coded:
	var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del"
	var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math"

	// First, look for nested blocks, e.g.:
	//   <div>
	//     <div>
	//     tags for inner block must be indented.
	//     </div>
	//   </div>
	//
	// The outermost tags must start at the left margin for this to match, and
	// the inner nested divs must be indented.
	// We need to do this before the next, more liberal match, because the next
	// match will start at the first `<div>` and stop at the first `</div>`.

	// attacklab: This regex can be expensive when it fails.
	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_a)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?\n			// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,hashElement);

	//
	// Now match more liberally, simply from `\n<tag>` to `</tag>\n`
	//

	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_b)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?				// any number of lines, minimally matching
			.*</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,hashElement);

	// Special case just for <hr />. It was easier to make a special case than
	// to make the other regex more complicated.  

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}
			(<(hr)				// start tag = $2
			\b					// word break
			([^<>])*?			// 
			\/?>)				// the matching end tag
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,hashElement);

	// Special case for standalone HTML comments:

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}			// attacklab: g_tab_width - 1
			<!
			(--[^\r]*?--\s*)+
			>
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,hashElement);

	// PHP and ASP-style processor instructions (<?...?> and <%...%>)

	/*
		text = text.replace(/
		(?:
			\n\n				// Starting after a blank line
		)
		(						// save in $1
			[ ]{0,3}			// attacklab: g_tab_width - 1
			(?:
				<([?%])			// $2
				[^\r]*?
				\2>
			)
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,hashElement);

	// attacklab: Undo double lines (see comment at top of this function)
	text = text.replace(/\n\n/g,"\n");
	return text;
}

var hashElement = function(wholeMatch,m1) {
	var blockText = m1;

	// Undo double lines
	blockText = blockText.replace(/\n\n/g,"\n");
	blockText = blockText.replace(/^\n/,"");
	
	// strip trailing blank lines
	blockText = blockText.replace(/\n+$/g,"");
	
	// Replace the element text with a marker ("~KxK" where x is its key)
	blockText = "\n\n~K" + (g_html_blocks.push(blockText)-1) + "K\n\n";
	
	return blockText;
};

var _RunBlockGamut = function(text) {
//
// These are all the transformations that form block-level
// tags like paragraphs, headers, and list items.
//
	text = _DoHeaders(text);

	// Do Horizontal Rules:
	var key = hashBlock("<hr />");
	text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,key);

	text = _DoLists(text);
	text = _DoCodeBlocks(text);
	text = _DoBlockQuotes(text);

	// We already ran _HashHTMLBlocks() before, in Markdown(), but that
	// was to escape raw HTML in the original Markdown source. This time,
	// we're escaping the markup we've just created, so that we don't wrap
	// <p> tags around block-level tags.
	text = _HashHTMLBlocks(text);
	text = _FormParagraphs(text);

	return text;
}


var _RunSpanGamut = function(text) {
//
// These are all the transformations that occur *within* block-level
// tags like paragraphs, headers, and list items.
//

	text = _DoCodeSpans(text);
	text = _EscapeSpecialCharsWithinTagAttributes(text);
	text = _EncodeBackslashEscapes(text);

	// Process anchor and image tags. Images must come first,
	// because ![foo][f] looks like an anchor.
	text = _DoImages(text);
	text = _DoAnchors(text);

	// Make links out of things like `<http://example.com/>`
	// Must come after _DoAnchors(), because you can use < and >
	// delimiters in inline links like [this](<url>).
	text = _DoAutoLinks(text);
	text = _EncodeAmpsAndAngles(text);
	text = _DoItalicsAndBold(text);

	// Do hard breaks:
	text = text.replace(/  +\n/g," <br />\n");

	return text;
}

var _EscapeSpecialCharsWithinTagAttributes = function(text) {
//
// Within tags -- meaning between < and > -- encode [\ ` * _] so they
// don't conflict with their use in Markdown for code, italics and strong.
//

	// Build a regex to find HTML tags and comments.  See Friedl's 
	// "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

	text = text.replace(regex, function(wholeMatch) {
		var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g,"$1`");
		tag = escapeCharacters(tag,"\\`*_");
		return tag;
	});

	return text;
}

var _DoAnchors = function(text) {
//
// Turn Markdown link shortcuts into XHTML <a> tags.
//
	//
	// First, handle reference-style links: [link text] [id]
	//

	/*
		text = text.replace(/
		(							// wrap whole match in $1
			\[
			(
				(?:
					\[[^\]]*\]		// allow brackets nested one level
					|
					[^\[]			// or anything else
				)*
			)
			\]

			[ ]?					// one optional space
			(?:\n[ ]*)?				// one optional newline followed by spaces

			\[
			(.*?)					// id = $3
			\]
		)()()()()					// pad remaining backreferences
		/g,_DoAnchors_callback);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeAnchorTag);

	//
	// Next, inline-style links: [link text](url "optional title")
	//

	/*
		text = text.replace(/
			(						// wrap whole match in $1
				\[
				(
					(?:
						\[[^\]]*\]	// allow brackets nested one level
					|
					[^\[\]]			// or anything else
				)
			)
			\]
			\(						// literal paren
			[ \t]*
			()						// no id, so leave $3 empty
			<?(.*?)>?				// href = $4
			[ \t]*
			(						// $5
				(['"])				// quote char = $6
				(.*?)				// Title = $7
				\6					// matching quote
				[ \t]*				// ignore any spaces/tabs between closing quote and )
			)?						// title is optional
			\)
		)
		/g,writeAnchorTag);
	*/
  // text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeAnchorTag);
  // new version same as last but it allows for an additional level of bracket nesting via \[\[[^\]]*\]\]
	text = text.replace(/(\[((?:\[[^\]]*\]|\[\[[^\]]*\]\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);

	//
	// Last, handle reference-style shortcuts: [link text]
	// These must come last in case you've also got [link test][1]
	// or [link test](/foo)
	//

	/*
		text = text.replace(/
		(		 					// wrap whole match in $1
			\[
			([^\[\]]+)				// link text = $2; can't contain '[' or ']'
			\]
		)()()()()()					// pad rest of backreferences
		/g, writeAnchorTag);
	*/
	text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

	return text;
}

var writeAnchorTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	if (m7 == undefined) m7 = "";
	var whole_match = m1;
	var link_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;
	
	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = link_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;
		
		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			if (whole_match.search(/\(\s*\)$/m)>-1) {
				// Special case for explicit empty url
				url = "";
			} else {
				return whole_match;
			}
		}
	}	
	
	url = escapeCharacters(url,"*_");
	var result = "<a href=\"" + url + "\"";
	
	if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	}
	
	result += ">" + link_text + "</a>";
	
	return result;
}


var _DoImages = function(text) {
//
// Turn Markdown image shortcuts into <img> tags.
//

	//
	// First, handle reference-style labeled images: ![alt text][id]
	//

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]

			[ ]?				// one optional space
			(?:\n[ ]*)?			// one optional newline followed by spaces

			\[
			(.*?)				// id = $3
			\]
		)()()()()				// pad rest of backreferences
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeImageTag);

	//
	// Next, handle inline images:  ![alt text](url "optional title")
	// Don't forget: encode * and _

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]
			\s?					// One optional whitespace character
			\(					// literal paren
			[ \t]*
			()					// no id, so leave $3 empty
			<?(\S+?)>?			// src url = $4
			[ \t]*
			(					// $5
				(['"])			// quote char = $6
				(.*?)			// title = $7
				\6				// matching quote
				[ \t]*
			)?					// title is optional
		\)
		)
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeImageTag);

	return text;
}

var writeImageTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	var whole_match = m1;
	var alt_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (!title) title = "";
	
	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = alt_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;
		
		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			return whole_match;
		}
	}	
	
	alt_text = alt_text.replace(/"/g,"&quot;");
	url = escapeCharacters(url,"*_");
	var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

	// attacklab: Markdown.pl adds empty title attributes to images.
	// Replicate this bug.

	//if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	//}
	
	result += " />";
	
	return result;
}


var _DoHeaders = function(text) {

	// Setext-style headers:
	//	Header 1
	//	========
	//  
	//	Header 2
	//	--------
	//
	text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
		function(wholeMatch,m1){return hashBlock("<h1>" + _RunSpanGamut(m1) + "</h1>");});

	text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
		function(matchFound,m1){return hashBlock("<h2>" + _RunSpanGamut(m1) + "</h2>");});

	// atx-style headers:
	//  # Header 1
	//  ## Header 2
	//  ## Header 2 with closing hashes ##
	//  ...
	//  ###### Header 6
	//

	/*
		text = text.replace(/
			^(\#{1,6})				// $1 = string of #'s
			[ \t]*
			(.+?)					// $2 = Header text
			[ \t]*
			\#*						// optional closing #'s (not counted)
			\n+
		/gm, function() {...});
	*/

	text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
		function(wholeMatch,m1,m2) {
			var h_level = m1.length;
			return hashBlock("<h" + h_level + ">" + _RunSpanGamut(m2) + "</h" + h_level + ">");
		});

	return text;
}

// This declaration keeps Dojo compressor from outputting garbage:
var _ProcessListItems;

var _DoLists = function(text) {
//
// Form HTML ordered (numbered) and unordered (bulleted) lists.
//

	// attacklab: add sentinel to hack around khtml/safari bug:
	// http://bugs.webkit.org/show_bug.cgi?id=11231
	text += "~0";

	// Re-usable pattern to match any entirel ul or ol list:

	/*
		var whole_list = /
		(									// $1 = whole list
			(								// $2
				[ ]{0,3}					// attacklab: g_tab_width - 1
				([*+-]|\d+[.])				// $3 = first list item marker
				[ \t]+
			)
			[^\r]+?
			(								// $4
				~0							// sentinel for workaround; should be $
			|
				\n{2,}
				(?=\S)
				(?!							// Negative lookahead for another list item marker
					[ \t]*
					(?:[*+-]|\d+[.])[ \t]+
				)
			)
		)/g
	*/
	var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

	if (g_list_level) {
		text = text.replace(whole_list,function(wholeMatch,m1,m2) {
			var list = m1;
			var list_type = (m2.search(/[*+-]/g)>-1) ? "ul" : "ol";

			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);
	
			// Trim any trailing whitespace, to put the closing `</$list_type>`
			// up on the preceding line, to get it past the current stupid
			// HTML block parser. This is a hack to work around the terrible
			// hack that is the HTML block parser.
			result = result.replace(/\s+$/,"");
			result = "<"+list_type+">" + result + "</"+list_type+">\n";
			return result;
		});
	} else {
		whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
		text = text.replace(whole_list,function(wholeMatch,m1,m2,m3) {
			var runup = m1;
			var list = m2;

			var list_type = (m3.search(/[*+-]/g)>-1) ? "ul" : "ol";
			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			var list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);
			result = runup + "<"+list_type+">\n" + result + "</"+list_type+">\n";	
			return result;
		});
	}

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

_ProcessListItems = function(list_str) {
//
//  Process the contents of a single ordered or unordered list, splitting it
//  into individual list items.
//
	// The $g_list_level global keeps track of when we're inside a list.
	// Each time we enter a list, we increment it; when we leave a list,
	// we decrement. If it's zero, we're not in a list anymore.
	//
	// We do this because when we're not inside a list, we want to treat
	// something like this:
	//
	//    I recommend upgrading to version
	//    8. Oops, now this line is treated
	//    as a sub-list.
	//
	// As a single paragraph, despite the fact that the second line starts
	// with a digit-period-space sequence.
	//
	// Whereas when we're inside a list (or sub-list), that line will be
	// treated as the start of a sub-list. What a kludge, huh? This is
	// an aspect of Markdown's syntax that's hard to parse perfectly
	// without resorting to mind-reading. Perhaps the solution is to
	// change the syntax rules such that sub-lists must start with a
	// starting cardinal number; e.g. "1." or "a.".

	g_list_level++;

	// trim trailing blank lines:
	list_str = list_str.replace(/\n{2,}$/,"\n");

	// attacklab: add sentinel to emulate \z
	list_str += "~0";

	/*
		list_str = list_str.replace(/
			(\n)?							// leading line = $1
			(^[ \t]*)						// leading whitespace = $2
			([*+-]|\d+[.]) [ \t]+			// list marker = $3
			([^\r]+?						// list item text   = $4
			(\n{1,2}))
			(?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
		/gm, function(){...});
	*/
	list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
		function(wholeMatch,m1,m2,m3,m4){
			var item = m4;
			var leading_line = m1;
			var leading_space = m2;

			if (leading_line || (item.search(/\n{2,}/)>-1)) {
				item = _RunBlockGamut(_Outdent(item));
			}
			else {
				// Recursion for sub-lists:
				item = _DoLists(_Outdent(item));
				item = item.replace(/\n$/,""); // chomp(item)
				item = _RunSpanGamut(item);
			}

			return  "<li>" + item + "</li>\n";
		}
	);

	// attacklab: strip sentinel
	list_str = list_str.replace(/~0/g,"");

	g_list_level--;
	return list_str;
}


var _DoCodeBlocks = function(text) {
//
//  Process Markdown `<pre><code>` blocks.
//  

	/*
		text = text.replace(text,
			/(?:\n\n|^)
			(								// $1 = the code block -- one or more lines, starting with a space/tab
				(?:
					(?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
					.*\n+
				)+
			)
			(\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
		/g,function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";
	
	text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
		function(wholeMatch,m1,m2) {
			var codeblock = m1;
			var nextChar = m2;
		
			codeblock = _EncodeCode( _Outdent(codeblock));
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock) + nextChar;
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

var hashBlock = function(text) {
	text = text.replace(/(^\n+|\n+$)/g,"");
	return "\n\n~K" + (g_html_blocks.push(text)-1) + "K\n\n";
}


var _DoCodeSpans = function(text) {
//
//   *  Backtick quotes are used for <code></code> spans.
// 
//   *  You can use multiple backticks as the delimiters if you want to
//	 include literal backticks in the code span. So, this input:
//	 
//		 Just type ``foo `bar` baz`` at the prompt.
//	 
//	   Will translate to:
//	 
//		 <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
//	 
//	There's no arbitrary limit to the number of backticks you
//	can use as delimters. If you need three consecutive backticks
//	in your code, use four for delimiters, etc.
//
//  *  You can use spaces to get literal backticks at the edges:
//	 
//		 ... type `` `bar` `` ...
//	 
//	   Turns to:
//	 
//		 ... type <code>`bar`</code> ...
//

	/*
		text = text.replace(/
			(^|[^\\])					// Character before opening ` can't be a backslash
			(`+)						// $2 = Opening run of `
			(							// $3 = The code block
				[^\r]*?
				[^`]					// attacklab: work around lack of lookbehind
			)
			\2							// Matching closer
			(?!`)
		/gm, function(){...});
	*/

	text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
		function(wholeMatch,m1,m2,m3,m4) {
			var c = m3;
			c = c.replace(/^([ \t]*)/g,"");	// leading whitespace
			c = c.replace(/[ \t]*$/g,"");	// trailing whitespace
			c = _EncodeCode(c);
			return m1+"<code>"+c+"</code>";
		});

	return text;
}


var _EncodeCode = function(text) {
//
// Encode/escape certain characters inside Markdown code runs.
// The point is that in code, these characters are literals,
// and lose their special Markdown meanings.
//
	// Encode all ampersands; HTML entities are not
	// entities within a Markdown code span.
	text = text.replace(/&/g,"&amp;");

	// Do the angle bracket song and dance:
	text = text.replace(/</g,"&lt;");
	text = text.replace(/>/g,"&gt;");

	// Now, escape characters that are magic in Markdown:
	text = escapeCharacters(text,"\*_{}[]\\",false);

// jj the line above breaks this:
//---

//* Item

//   1. Subitem

//            special char: *
//---

	return text;
}


var _DoItalicsAndBold = function(text) {

	// <strong> must go first:
	text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\1/g,
		"<strong>$2</strong>");

	text = text.replace(/(\w)_(\w)/g, "$1~E95E$2") // ** GFM **  "~E95E" == escaped "_"
	text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,
		"<em>$2</em>");

	return text;
}


var _DoBlockQuotes = function(text) {

	/*
		text = text.replace(/
		(								// Wrap whole match in $1
			(
				^[ \t]*>[ \t]?			// '>' at the start of a line
				.+\n					// rest of the first line
				(.+\n)*					// subsequent consecutive lines
				\n*						// blanks
			)+
		)
		/gm, function(){...});
	*/

	text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
		function(wholeMatch,m1) {
			var bq = m1;

			// attacklab: hack around Konqueror 3.5.4 bug:
			// "----------bug".replace(/^-/g,"") == "bug"

			bq = bq.replace(/^[ \t]*>[ \t]?/gm,"~0");	// trim one level of quoting

			// attacklab: clean up hack
			bq = bq.replace(/~0/g,"");

			bq = bq.replace(/^[ \t]+$/gm,"");		// trim whitespace-only lines
			bq = _RunBlockGamut(bq);				// recurse
			
			bq = bq.replace(/(^|\n)/g,"$1  ");
			// These leading spaces screw with <pre> content, so we need to fix that:
			bq = bq.replace(
					/(\s*<pre>[^\r]+?<\/pre>)/gm,
				function(wholeMatch,m1) {
					var pre = m1;
					// attacklab: hack around Konqueror 3.5.4 bug:
					pre = pre.replace(/^  /mg,"~0");
					pre = pre.replace(/~0/g,"");
					return pre;
				});
			
			return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
		});
	return text;
}


var _FormParagraphs = function(text) {
//
//  Params:
//    $text - string to process with html <p> tags
//

	// Strip leading and trailing lines:
	text = text.replace(/^\n+/g,"");
	text = text.replace(/\n+$/g,"");

	var grafs = text.split(/\n{2,}/g);
	var grafsOut = new Array();

	//
	// Wrap <p> tags.
	//
	var end = grafs.length;
	for (var i=0; i<end; i++) {
		var str = grafs[i];

		// if this is an HTML marker, copy it
		if (str.search(/~K(\d+)K/g) >= 0) {
			grafsOut.push(str);
		}
		else if (str.search(/\S/) >= 0) {
			str = _RunSpanGamut(str);
    	str = str.replace(/\n/g,"<br />");  // ** GFM **
			str = str.replace(/^([ \t]*)/g,"<p>");
			str += "</p>"
			grafsOut.push(str);
		}

	}

	//
	// Unhashify HTML blocks
	//
	end = grafsOut.length;
	for (var i=0; i<end; i++) {
		// if this is a marker for an html block...
		while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
			var blockText = g_html_blocks[RegExp.$1];
			blockText = blockText.replace(/\$/g,"$$$$"); // Escape any dollar signs
			grafsOut[i] = grafsOut[i].replace(/~K\d+K/,blockText);
		}
	}

	return grafsOut.join("\n\n");
}


var _EncodeAmpsAndAngles = function(text) {
// Smart processing for ampersands and angle brackets that need to be encoded.
	
	// Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	//   http://bumppo.net/projects/amputator/
	text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");
	
	// Encode naked <'s
	text = text.replace(/<(?![a-z\/?\$!])/gi,"&lt;");
	
	return text;
}


var _EncodeBackslashEscapes = function(text) {
//
//   Parameter:  String.
//   Returns:	The string, with after processing the following backslash
//			   escape sequences.
//

	// attacklab: The polite way to do this is with the new
	// escapeCharacters() function:
	//
	// 	text = escapeCharacters(text,"\\",true);
	// 	text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	//
	// ...but we're sidestepping its use of the (slow) RegExp constructor
	// as an optimization for Firefox.  This function gets called a LOT.

	text = text.replace(/\\(\\)/g,escapeCharacters_callback);
	text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g,escapeCharacters_callback);
	return text;
}


var _DoAutoLinks = function(text) {

	text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,"<a href=\"$1\">$1</a>");

	// Email addresses: <address@domain.foo>

	/*
		text = text.replace(/
			<
			(?:mailto:)?
			(
				[-.\w]+
				\@
				[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
			)
			>
		/gi, _DoAutoLinks_callback());
	*/
	text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
		function(wholeMatch,m1) {
			return _EncodeEmailAddress( _UnescapeSpecialChars(m1) );
		}
	);

	return text;
}


var _EncodeEmailAddress = function(addr) {
//
//  Input: an email address, e.g. "foo@example.com"
//
//  Output: the email address as a mailto link, with each character
//	of the address encoded as either a decimal or hex entity, in
//	the hopes of foiling most address harvesting spam bots. E.g.:
//
//	<a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
//	   x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
//	   &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
//
//  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
//  mailing list: <http://tinyurl.com/yu7ue>
//

	// attacklab: why can't javascript speak hex?
	function char2hex(ch) {
		var hexDigits = '0123456789ABCDEF';
		var dec = ch.charCodeAt(0);
		return(hexDigits.charAt(dec>>4) + hexDigits.charAt(dec&15));
	}

	var encode = [
		function(ch){return "&#"+ch.charCodeAt(0)+";";},
		function(ch){return "&#x"+char2hex(ch)+";";},
		function(ch){return ch;}
	];

	addr = "mailto:" + addr;

	addr = addr.replace(/./g, function(ch) {
		if (ch == "@") {
		   	// this *must* be encoded. I insist.
			ch = encode[Math.floor(Math.random()*2)](ch);
		} else if (ch !=":") {
			// leave ':' alone (to spot mailto: later)
			var r = Math.random();
			// roughly 10% raw, 45% hex, 45% dec
			ch =  (
					r > .9  ?	encode[2](ch)   :
					r > .45 ?	encode[1](ch)   :
								encode[0](ch)
				);
		}
		return ch;
	});

	addr = "<a href=\"" + addr + "\">" + addr + "</a>";
	addr = addr.replace(/">.+:/g,"\">"); // strip the mailto: from the visible part

	return addr;
}


var _UnescapeSpecialChars = function(text) {
//
// Swap back in all the special characters we've hidden.
//
	text = text.replace(/~E(\d+)E/g,
		function(wholeMatch,m1) {
			var charCodeToReplace = parseInt(m1);
			return String.fromCharCode(charCodeToReplace);
		}
	);
	return text;
}


var _Outdent = function(text) {
//
// Remove one level of line-leading tabs or spaces
//

	// attacklab: hack around Konqueror 3.5.4 bug:
	// "----------bug".replace(/^-/g,"") == "bug"

	text = text.replace(/^(\t|[ ]{1,4})/gm,"~0"); // attacklab: g_tab_width

	// attacklab: clean up hack
	text = text.replace(/~0/g,"")

	return text;
}

var _Detab = function(text) {
// attacklab: Detab's completely rewritten for speed.
// In perl we could fix it by anchoring the regexp with \G.
// In javascript we're less fortunate.

	// expand first n-1 tabs
	text = text.replace(/\t(?=\t)/g,"    "); // attacklab: g_tab_width

	// replace the nth with two sentinels
	text = text.replace(/\t/g,"~A~B");

	// use the sentinel to anchor our regex so it doesn't explode
	text = text.replace(/~B(.+?)~A/g,
		function(wholeMatch,m1,m2) {
			var leadingText = m1;
			var numSpaces = 4 - leadingText.length % 4;  // attacklab: g_tab_width

			// there *must* be a better way to do this:
			for (var i=0; i<numSpaces; i++) leadingText+=" ";

			return leadingText;
		}
	);

	// clean up sentinels
	text = text.replace(/~A/g,"    ");  // attacklab: g_tab_width
	text = text.replace(/~B/g,"");

	return text;
}


//
//  attacklab: Utility functions
//


var escapeCharacters = function(text, charsToEscape, afterBackslash) {
	// First we have to escape the escape characters so that
	// we can build a character class out of them
	var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g,"\\$1") + "])";

	if (afterBackslash) {
		regexString = "\\\\" + regexString;
	}

	var regex = new RegExp(regexString,"g");
	text = text.replace(regex,escapeCharacters_callback);

	return text;
}


var escapeCharacters_callback = function(wholeMatch,m1) {
	var charCodeToEscape = m1.charCodeAt(0);
	return "~E"+charCodeToEscape+"E";
}

} // end of Attacklab.showdown.converter


// Version 0.9 used the Showdown namespace instead of Attacklab.showdown
// The old namespace is deprecated, but we'll support it for now:
var Showdown = Attacklab.showdown;

// If anyone's interested, tell the world that this file's been loaded
if (Attacklab.fileLoaded) {
	Attacklab.fileLoaded("showdown.js");
}
;
/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 * adapted to https://github.com/RapGenius/jquery.hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */


(function(jQuery){
	
	jQuery.hotkeys = {
		version: "0.8",

		specialKeys: {
			8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
			37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
			96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 186: ";", 191: "/",
			220: "\\", 222: "'", 224: "meta"
		},
	
		shiftNums: {
			"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", 
			"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<", 
			".": ">",  "/": "?",  "\\": "|"
		}
	};

	function keyHandler( handleObj ) {
		if ( typeof handleObj.data === "string" ) {
			handleObj.data = { keys: handleObj.data };
		}

		// Only care when a possible input has been specified
		if ( !handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string" ) {
			return;
		}

		var origHandler = handleObj.handler,
			keys = handleObj.data.keys.toLowerCase().split(" "),
			textAcceptingInputTypes = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"];
	
		handleObj.handler = function( event ) {
			// Don't fire in text-accepting inputs that we didn't directly bind to
			if ( !handleObj.data.allowInTextInputField && this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||
				jQuery.inArray(event.target.type, textAcceptingInputTypes) > -1 ) ) {
				return;
			}

			var special = jQuery.hotkeys.specialKeys[ event.keyCode ],
				// character codes are available only in keypress
				character = event.which > 0 && String.fromCharCode( event.which ).toLowerCase(),
				modif = "", possible = {};

			// check combinations (alt|ctrl|shift+anything)
			if ( event.altKey && special !== "alt" ) {
				modif += "alt+";
			}

			if ( event.ctrlKey && special !== "ctrl" ) {
				modif += "ctrl+";
			}
			
			// TODO: Need to make sure this works consistently across platforms
			if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {
				modif += "meta+";
			}

			if ( event.shiftKey && special !== "shift" ) {
				modif += "shift+";
			}

			if ( special ) {
				possible[ modif + special ] = true;
			}

			if ( character ) {
				possible[ modif + character ] = true;
				possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;

				// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
				if ( modif === "shift+" ) {
					possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;
				}
			}

			for ( var i = 0, l = keys.length; i < l; i++ ) {
				if ( possible[ keys[i] ] ) {
					return origHandler.apply( this, arguments );
				}
			}
		};
	}

	jQuery.each([ "keydown", "keyup", "keypress" ], function() {
		jQuery.event.special[ this ] = { add: keyHandler };
	});

})( this.jQuery );
(function(f,h,i){function k(a,c){var b=(a[0]||0)-(c[0]||0);return b>0||!b&&a.length>0&&k(a.slice(1),c.slice(1))}function l(a){if(typeof a!=g)return a;var c=[],b="";for(var d in a){b=typeof a[d]==g?l(a[d]):[d,m?encodeURI(a[d]):a[d]].join("=");c.push(b)}return c.join("&")}function n(a){var c=[];for(var b in a)a[b]&&c.push([b,'="',a[b],'"'].join(""));return c.join(" ")}function o(a){var c=[];for(var b in a)c.push(['<param name="',b,'" value="',l(a[b]),'" />'].join(""));return c.join("")}var g="object",m=true;try{var j=i.description||function(){return(new i("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}()}catch(p){j="Unavailable"}var e=j.match(/\d+/g)||[0];f[h]={available:e[0]>0,activeX:i&&!i.name,version:{original:j,array:e,string:e.join("."),major:parseInt(e[0],10)||0,minor:parseInt(e[1],10)||0,release:parseInt(e[2],10)||0},hasVersion:function(a){a=/string|number/.test(typeof a)?a.toString().split("."):/object/.test(typeof a)?[a.major,a.minor]:a||[0,0];return k(e,a)},encodeParams:true,expressInstall:"expressInstall.swf",expressInstallIsActive:false,create:function(a){if(!a.swf||this.expressInstallIsActive||!this.available&&!a.hasVersionFail)return false;if(!this.hasVersion(a.hasVersion||1)){this.expressInstallIsActive=true;if(typeof a.hasVersionFail=="function")if(!a.hasVersionFail.apply(a))return false;a={swf:a.expressInstall||this.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:this.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:a.swf,type:"application/x-shockwave-flash",id:a.id||"flash_"+Math.floor(Math.random()*999999999),width:a.width||320,height:a.height||180,style:a.style||""};m=typeof a.useEncode!=="undefined"?a.useEncode:this.encodeParams;a.movie=a.swf;a.wmode=a.wmode||"opaque";delete a.fallback;delete a.hasVersion;delete a.hasVersionFail;delete a.height;delete a.id;delete a.swf;delete a.useEncode;delete a.width;var c=document.createElement("div");c.innerHTML=["<object ",n(attrs),">",o(a),"</object>"].join("");return c.firstChild}};f.fn[h]=function(a){var c=this.find(g).andSelf().filter(g);/string|object/.test(typeof a)&&this.each(function(){var b=f(this),d;a=typeof a==g?a:{swf:a};a.fallback=this;if(d=f[h].create(a)){b.children().remove();b.html(d)}});typeof a=="function"&&c.each(function(){var b=this;b.jsInteractionTimeoutMs=b.jsInteractionTimeoutMs||0;if(b.jsInteractionTimeoutMs<660)b.clientWidth||b.clientHeight?a.call(b):setTimeout(function(){f(b)[h](a)},b.jsInteractionTimeoutMs+66)});return c}})(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject);
/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);
/**!
 * project-site: http://plugins.jquery.com/project/AjaxManager
 * repository: http://github.com/aFarkas/Ajaxmanager
 * @author Alexander Farkas
 * @version 3.06
 * Copyright 2010, Alexander Farkas
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */


(function($){
	var managed = {},
		cache   = {}
	;
	$.manageAjax = (function(){
		function create(name, opts){
			managed[name] = new $.manageAjax._manager(name, opts);
			return managed[name];
		}
		
		function destroy(name){
			if(managed[name]){
				managed[name].clear(true);
				delete managed[name];
			}
		}

		
		var publicFns = {
			create: create,
			destroy: destroy
		};
		
		return publicFns;
	})();
	
	$.manageAjax._manager = function(name, opts){
		this.requests = {};
		this.inProgress = 0;
		this.name = name;
		this.qName = name;
		
		this.opts = $.extend({}, $.ajaxSettings, $.manageAjax.defaults, opts);
		if(opts && opts.queue && opts.queue !== true && typeof opts.queue === 'string' && opts.queue !== 'clear'){
			this.qName = opts.queue;
		}
	};
	
	$.manageAjax._manager.prototype = {
		add: function(o){
			o = $.extend({}, this.opts, o);
			
			var origCom		= o.complete || $.noop,
				origSuc		= o.success || $.noop,
				beforeSend	= o.beforeSend || $.noop,
				origError 	= o.error || $.noop,
				strData 	= (typeof o.data == 'string') ? o.data : $.param(o.data || {}),
				xhrID 		= o.type + o.url + strData,
				that 		= this,
				ajaxFn 		= this._createAjax(xhrID, o, origSuc, origCom)
			;
			
			if(this.requests[xhrID] && o.preventDoubbleRequests){
				return;
			}
			ajaxFn.xhrID = xhrID;
			o.xhrID = xhrID;
			
			o.beforeSend = function(xhr, opts){
				var ret = beforeSend.call(this, xhr, opts);
				if(ret === false){
					that._removeXHR(xhrID);
				}
				xhr = null;
				return ret;
			};
			o.complete = function(xhr, status){
				that._complete.call(that, this, origCom, xhr, status, xhrID, o);
				xhr = null;
			};
			
			o.success = function(data, status, xhr){
				that._success.call(that, this, origSuc, data, status, xhr, o);
				xhr = null;
			};
						
			//always add some error callback
			o.error =  function(ahr, status, errorStr){
				var httpStatus 	= '',
					content 	= ''
				;
				if(status !== 'timeout' && ahr){
					httpStatus = ahr.status;
					content = ahr.responseXML || ahr.responseText;
				}
				if(origError) {
					origError.call(this, ahr, status, errorStr, o);
				} else {
					setTimeout(function(){
						throw status + '| status: ' + httpStatus + ' | URL: ' + o.url + ' | data: '+ strData + ' | thrown: '+ errorStr + ' | response: '+ content;
					}, 0);
				}
				ahr = null;
			};
			
			if(o.queue === 'clear'){
				$(document).clearQueue(this.qName);
			}
			
			if(o.queue){
				$.queue(document, this.qName, ajaxFn);
				if(this.inProgress < o.maxRequests){
					$.dequeue(document, this.qName);
				}
				return xhrID;
			}
			return ajaxFn();
		},
		_createAjax: function(id, o, origSuc, origCom){
			var that = this;
			return function(){
				if(o.beforeCreate.call(o.context || that, id, o) === false){return;}
				that.inProgress++;
				if(that.inProgress === 1){
					$.event.trigger(that.name +'AjaxStart');
				}
				if(o.cacheResponse && cache[id]){
					that.requests[id] = {};
					setTimeout(function(){
						that._complete.call(that, o.context || o, origCom, cache[id], 'success', id, o);
						that._success.call(that, o.context || o, origSuc, cache[id]._successData, 'success', cache[id], o);
					}, 0);
				} else {
					if (o.async) {
						that.requests[id] = $.ajax(o);
					} else {
						$.ajax(o);
					}
				}
				return id;
			};
		},
		_removeXHR: function(xhrID){
			if(this.opts.queue){
				$.dequeue(document, this.qName);
			}
			this.inProgress--;
			this.requests[xhrID] = null;
			delete this.requests[xhrID];
		},
		_isAbort: function(xhr, o){
			var ret = !!( o.abortIsNoSuccess && ( !xhr || xhr.readyState === 0 || this.lastAbort === o.xhrID ) );
			xhr = null;
			return ret;
		},
		_complete: function(context, origFn, xhr, status, xhrID, o){
			if(this._isAbort(xhr, o)){
				status = 'abort';
				o.abort.call(context, xhr, status, o);
			}
			origFn.call(context, xhr, status, o);
			
			$.event.trigger(this.name +'AjaxComplete', [xhr, status, o]);
			
			if(o.domCompleteTrigger){
				$(o.domCompleteTrigger)
					.trigger(this.name +'DOMComplete', [xhr, status, o])
					.trigger('DOMComplete', [xhr, status, o])
				;
			}
			
			this._removeXHR(xhrID);
			if(!this.inProgress){
				$.event.trigger(this.name +'AjaxStop');
			}
			xhr = null;
		},
		_success: function(context, origFn, data, status, xhr, o){
			var that = this;
			if(this._isAbort(xhr, o)){
				xhr = null;
				return;
			}
			if(o.abortOld){
				$.each(this.requests, function(name){
					if(name === o.xhrID){
						return false;
					}
					that.abort(name);
				});
			}
			if(o.cacheResponse && !cache[o.xhrID]){
				cache[o.xhrID] = {
					status: xhr.status,
					statusText: xhr.statusText,
					responseText: xhr.responseText,
					responseXML: xhr.responseXML,
					_successData: data
				};
				if(xhr.getAllResponseHeaders){
					var responseHeaders = xhr.getAllResponseHeaders();
					$.extend(cache[o.xhrID], {
						getAllResponseHeaders: function() {return responseHeaders;},
						getResponseHeader: (function(){
							var parsedHeaders = {};
							$.each(responseHeaders.split("\n"), function(i, headerLine){
								var delimiter = headerLine.indexOf(":");
			                    parsedHeaders[headerLine.substr(0, delimiter)] = headerLine.substr(delimiter + 2);
							});
							return function(name) {return parsedHeaders[name];};
						}())
					});
				}
			}
			origFn.call(context, data, status, xhr, o);
			$.event.trigger(this.name +'AjaxSuccess', [xhr, o, data]);
			if(o.domSuccessTrigger){
				$(o.domSuccessTrigger)
					.trigger(this.name +'DOMSuccess', [data, o])
					.trigger('DOMSuccess', [data, o])
				;
			}
			xhr = null;
		},
		getData: function(id){
			if( id ){
				var ret = this.requests[id];
				if(!ret && this.opts.queue) {
					ret = $.grep($(document).queue(this.qName), function(fn, i){
						return (fn.xhrID === id);
					})[0];
				}
				return ret;
			}
			return {
				requests: this.requests,
				queue: (this.opts.queue) ? $(document).queue(this.qName) : [],
				inProgress: this.inProgress
			};
		},
		abort: function(id){
			var xhr;
			if(id){
				xhr = this.getData(id);
				
				if(xhr && xhr.abort){
					this.lastAbort = id;
					xhr.abort();
					this.lastAbort = false;
				} else {
					$(document).queue(
						this.qName, $.grep($(document).queue(this.qName), function(fn, i){
							return (fn !== xhr);
						})
					);
				}
				xhr = null;
				return;
			}
			
			var that 	= this,
				ids 	= []
			;
			$.each(this.requests, function(id){
				ids.push(id);
			});
			$.each(ids, function(i, id){
				that.abort(id);
			});
		},
		clear: function(shouldAbort){
			$(document).clearQueue(this.qName); 
			if(shouldAbort){
				this.abort();
			}
		}
	};
	$.manageAjax._manager.prototype.getXHR = $.manageAjax._manager.prototype.getData;
	$.manageAjax.defaults = {
		beforeCreate: $.noop,
		abort: $.noop,
		abortIsNoSuccess: true,
		maxRequests: 1,
		cacheResponse: false,
		domCompleteTrigger: false,
		domSuccessTrigger: false,
		preventDoubbleRequests: true,
		queue: false // true, false, clear
	};
	
	$.each($.manageAjax._manager.prototype, function(n, fn){
		if(n.indexOf('_') === 0 || !$.isFunction(fn)){return;}
		$.manageAjax[n] =  function(name, o){
			if(!managed[name]){
				if(n === 'add'){
					$.manageAjax.create(name, o);
				} else {
					return;
				}
			}
			var args = Array.prototype.slice.call(arguments, 1);
			managed[name][n].apply(managed[name], args);
		};
	});
	
})(jQuery);
// Simple Set Clipboard System
// Author: Joseph Huckaby

var ZeroClipboard = {
	
	version: "1.0.7",
	clients: {}, // registered upload clients on page, indexed by id
	moviePath: '/flash/ZeroClipboard.swf', // URL to movie
	nextId: 1, // ID of next movie
	
	$: function(thingy) {
		// simple DOM lookup utility function
		if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
		if (!thingy.addClass) {
			// extend element with a few useful methods
			thingy.hide = function() { this.style.display = 'none'; };
			thingy.show = function() { this.style.display = ''; };
			thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
			thingy.removeClass = function(name) {
				var classes = this.className.split(/\s+/);
				var idx = -1;
				for (var k = 0; k < classes.length; k++) {
					if (classes[k] == name) { idx = k; k = classes.length; }
				}
				if (idx > -1) {
					classes.splice( idx, 1 );
					this.className = classes.join(' ');
				}
				return this;
			};
			thingy.hasClass = function(name) {
				return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
			};
		}
		return thingy;
	},
	
	setMoviePath: function(path) {
		// set path to ZeroClipboard.swf
		this.moviePath = path;
	},
	
	dispatch: function(id, eventName, args) {
		// receive event from flash movie, send to client		
		var client = this.clients[id];
		if (client) {
			client.receiveEvent(eventName, args);
		}
	},
	
	register: function(id, client) {
		// register new client to receive events
		this.clients[id] = client;
	},
	
	getDOMObjectPosition: function(obj, stopObj) {
		// get absolute coordinates for dom element
		var info = {
			left: 0, 
			top: 0, 
			width: obj.width ? obj.width : obj.offsetWidth, 
			height: obj.height ? obj.height : obj.offsetHeight
		};

		while (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
			info.top += obj.offsetTop;
			obj = obj.offsetParent;
		}

		return info;
	},
	
	Client: function(elem) {
		// constructor for new simple upload client
		this.handlers = {};
		
		// unique ID
		this.id = ZeroClipboard.nextId++;
		this.movieId = 'ZeroClipboardMovie_' + this.id;
		
		// register client with singleton to receive flash events
		ZeroClipboard.register(this.id, this);
		
		// create movie
		if (elem) this.glue(elem);
	}
};

ZeroClipboard.Client.prototype = {
	
	id: 0, // unique ID for us
	ready: false, // whether movie is ready to receive events or not
	movie: null, // reference to movie object
	clipText: '', // text to copy to clipboard
	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
	cssEffects: true, // enable CSS mouse effects on dom container
	handlers: null, // user event handlers
	
	glue: function(elem, appendElem, stylesToAdd) {
		// glue to DOM element
		// elem can be ID or actual DOM element object
		this.domElement = ZeroClipboard.$(elem);
		
		// float just above object, or zIndex 99 if dom element isn't set
		var zIndex = 999999;
		if (this.domElement.style.zIndex) {
			zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
		}
		
		if (typeof(appendElem) == 'string') {
			appendElem = ZeroClipboard.$(appendElem);
		}
		else if (typeof(appendElem) == 'undefined') {
			appendElem = document.getElementsByTagName('body')[0];
		}
		
		// find X/Y position of domElement
		var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);
		
		// create floating DIV above element
		this.div = document.createElement('div');
		var style = this.div.style;
		style.position = 'absolute';
		style.left = '' + box.left + 'px';
		style.top = '' + box.top + 'px';
		style.width = '' + box.width + 'px';
		style.height = '' + box.height + 'px';
		style.zIndex = zIndex;
		
		if (typeof(stylesToAdd) == 'object') {
			for (addedStyle in stylesToAdd) {
				style[addedStyle] = stylesToAdd[addedStyle];
			}
		}
		
		// style.backgroundColor = '#f00'; // debug
		
		appendElem.appendChild(this.div);
		
		this.div.innerHTML = this.getHTML( box.width, box.height );
	},
	
	getHTML: function(width, height) {
		// return HTML for movie
		var html = '';
		var flashvars = 'id=' + this.id + 
			'&width=' + width + 
			'&height=' + height;
			
		if (navigator.userAgent.match(/MSIE/)) {
			// IE gets an OBJECT tag
			var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
			html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
		}
		else {
			// all other browsers get an EMBED tag
			html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="top" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
		}
		return html;
	},
	
	hide: function() {
		// temporarily hide floater offscreen
		if (this.div) {
			this.div.style.left = '-2000px';
		}
	},
	
	show: function() {
		// show ourselves after a call to hide()
		this.reposition();
	},
	
	destroy: function() {
		// destroy control and floater
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = '';
			
			var body = document.getElementsByTagName('body')[0];
			try { body.removeChild( this.div ); } catch(e) {;}
			
			this.domElement = null;
			this.div = null;
		}
	},
	
	reposition: function(elem) {
		// reposition our floating div, optionally to new container
		// warning: container CANNOT change size, only position
		if (elem) {
			this.domElement = ZeroClipboard.$(elem);
			if (!this.domElement) this.hide();
		}
		
		if (this.domElement && this.div) {
			var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
			var style = this.div.style;
			style.left = '' + box.left + 'px';
			style.top = '' + box.top + 'px';
		}
	},
	
	setText: function(newText) {
		// set text to be copied to clipboard
		this.clipText = newText;
		jQuery(this.div).attr('title', 'Copy ' + newText + ' to your clipboard'); // MODIFICATION
		if (this.ready) this.movie.setText(newText);
	},
	
	addEventListener: function(eventName, func) {
		// add user event listener for event
		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
		if (!this.handlers[eventName]) this.handlers[eventName] = [];
		this.handlers[eventName].push(func);
	},
	
	setHandCursor: function(enabled) {
		// enable hand cursor (true), or default arrow cursor (false)
		this.handCursorEnabled = enabled;
		if (this.ready) this.movie.setHandCursor(enabled);
	},
	
	setCSSEffects: function(enabled) {
		// enable or disable CSS effects on DOM container
		this.cssEffects = !!enabled;
	},
	
	receiveEvent: function(eventName, args) {
		// receive event from flash
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
				
		// special behavior for certain events
		switch (eventName) {
			case 'load':
				// movie claims it is ready, but in IE this isn't always the case...
				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 1 );
					return;
				}
				
				// firefox on pc needs a "kick" in order to set these in certain cases
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 100 );
					this.ready = true;
					return;
				}
				
				this.ready = true;
				this.movie.setText( this.clipText );
				this.movie.setHandCursor( this.handCursorEnabled );
				break;
			
			case 'mouseover':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('hover');
					if (this.recoverActive) this.domElement.addClass('active');
				}
				break;
			
			case 'mouseout':
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass('active')) {
						this.domElement.removeClass('active');
						this.recoverActive = true;
					}
					this.domElement.removeClass('hover');
				}
				break;
			
			case 'mousedown':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('active');
				}
				break;
			
			case 'mouseup':
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass('active');
					this.recoverActive = false;
				}
				break;
		} // switch eventName
		
		if (this.handlers[eventName]) {
			for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
				var func = this.handlers[eventName][idx];
			
				if (typeof(func) == 'function') {
					// actual function reference
					func(this, args);
				}
				else if ((typeof(func) == 'object') && (func.length == 2)) {
					// PHP style object + method, i.e. [myObject, 'myMethod']
					func[0][ func[1] ](this, args);
				}
				else if (typeof(func) == 'string') {
					// name of function
					window[func](this, args);
				}
			} // foreach event handler defined
		} // user defined handler for event
	}
	
};
/*!
 * jQuery :attached, :detached - v1.1 - 2/13/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Selectors that match elements currently attached to or detached from the DOM.

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.extend( $.expr[':'], {
    attached: attached,
    detached: function( elem ){ return !attached( elem ); }
  });
  
  function attached( elem ) {
    var contains = $.contains,
      documentElement = document.documentElement;
    
    // jQuery 1.4+
    if ( contains ) {
      return contains( documentElement, elem );
    }
    
    // jQuery 1.3.2
    while ( elem = elem.parentNode ) {
      if ( elem === documentElement ) {
        return true;
      }
    }
    return false;
  };
  
})(jQuery);
(function(a){a.embedly=a.embedly||{};if(a.embedly.version){return}a.embedly.version="2.0.0";a.extend({embedly:function(k,p,n){var b=[];var d={maxWidth:null,maxHeight:null,wmode:"opaque",autoplay:null,width:null,method:"replace",addImageStyles:true,wrapElement:"div",className:"embed",urlRe:null,key:null,elems:[],success:null};var c;if(typeof p!="undefined"){c=a.extend(d,p)}else{c=d}if(c.urlRe==null){c.urlRe=app.embedlyURLre}if(typeof k=="string"){k=new Array(k)}if(typeof n!="undefined"){c.success=n}if(c.success==null){c.success=function(i,s){var q,r=a(s.node);if(!(i)){return null}if((q=c.method)==="replace"){return r.replaceWith(i.code)}else{if(q==="after"){return r.after(i.code)}else{if(q==="afterParent"){return r.parent().after(i.code)}else{if(q==="replaceParent"){return r.parent().replaceWith(i.code)}}}}}}var m=function(i){return(i.match(c.urlRe)!==null)};var o=function(q){var i="urls="+q;if(c.maxWidth!=null){i+="&maxwidth="+c.maxWidth}else{if(typeof dimensions!="undefined"){i+="&maxwidth="+dimensions.width}}if(c.maxHeight!=null){i+="&maxheight="+c.maxHeight}i+="&wmode="+c.wmode;if(typeof c.key=="string"){i+="&key="+c.key}if(typeof c.autoplay=="string"){i+="&autoplay="+c.autoplay}if(typeof c.width!=null){i+="&width="+c.width}return i};var j=function(){return typeof c.key=="string"?"http://pro.embed.ly/1/oembed":"http://api.embed.ly/1/oembed"};var g=function(i,u){var q,s,r,t;if((q=i.type)==="photo"){t=i.title||"";r=[];if(c.addImageStyles){if(c.maxWidth){units=isNaN(parseInt(c.maxWidth))?"":"px";r.push("max-width: "+(c.maxWidth)+units)}if(c.maxHeight){units=isNaN(parseInt(c.maxHeight))?"":"px";r.push("max-height: "+(c.maxHeight)+units)}}r=r.join(";");s="<a href='"+u.url+"' target='_blank'><img style='"+r+"' src='"+i.url+"' alt='"+t+"' /></a>"}else{if(q==="video"){s=i.html}else{if(q==="rich"){s=i.html}else{t=i.title||u.url;thumb=i.thumbnail_url?'<img src="'+i.thumbnail_url+'" class="thumb" />':"";description=i.description;provider=i.provider_name?'<a href="'+i.provider_url+'" class="provider">'+i.provider_name+"</a> - ":"";s=thumb+"<a href='"+u.url+"'>"+t+"</a>";s+=provider;s+=description}}}if(c.wrapElement){s="<"+c.wrapElement+' class="'+c.className+'">'+s+"</"+c.wrapElement+">"}i.code=s;if(typeof u.node!="undefined"){a(u.node).data("oembed",i).trigger("embedly-oembed",[i])}return c.success(i,u)};var e=function(i){var r,t,s,q;s=a.map(i,function(v,u){if(u==0){if(v.node!==null){node=a(v.node);q={width:node.parent().width(),height:node.parent().height()}}}return encodeURIComponent(v.url)}).join(",");a.ajax({url:j(),dataType:"jsonp",data:o(s),success:function(u){return a.each(u,function(v,w){return w.type!="error"?g(w,i[v]):null})}})};a.each(k,function(r,q){node=typeof c.elems!=="undefined"?c.elems[r]:null;if(typeof node!="undefined"&&!(m(q)||c.key)){a(node).data("oembed",false)}return q&&(m(q)||c.key)?b.push({url:q,node:node}):null});var l=[];var h=b.length;for(var f=0;(0<=h?f<h:f>h);f+=20){l=l.concat(e(b.slice(f,f+20)))}if(c.elems){return c.elems}else{return this}}});a.fn.embedly=function(e,h){var f=typeof e!="undefined"?e:{};var b=(typeof f.key=="string")?/(https?:\/\/.*)/i:app.embedlyURLre;if(typeof h!="undefined"){e.success=h}var g=new Array();var d=new Array();this.each(function(){if(typeof a(this).attr("href")!="undefined"){if(b.test(a(this).attr("href"))){g.push(a(this).attr("href"));d.push(a(this))}}else{a(this).find("a").each(function(){if(typeof a(this).attr("href")!="undefined"&&b.test(a(this).attr("href"))){g.push(a(this).attr("href"));d.push(a(this))}})}f.elems=d});var c=a.embedly(g,f);return this}})(jQuery);
//
// CameraTagRecorder
// 

CameraTagRecorder = function(camera_el) {
  // main data objects
  var self = this;
  var $ = CameraTag.jQuery; // we keep a localized version in case your not already using jQuery
  var camera = {};
  var video = {};
  var plan = {};
  var dom_id = $(camera_el).attr("id") || $(camera_el).attr("data-uuid");
  var txt_message;
  var input_name;
  var callbacks = {};
  var css_url;
  var record_timer;
  var record_timer_count = 0;
  var record_timer_prompt = 0;
  var ul_policy;
  var ul_signature;
  var cachebuster = parseInt( Math.random() * 100000000 );
  var existing_uuid = $(camera_el).attr("data-video-uuid");
  var skipPublishOnUpload;
  var processed_timer;
  var published_timer;


  // mobile vars
  var mobile_file_input; // DOM element
  var mobile_browser;
  var mobile_upload_supported;
  var mobile_enabled;
  var mobile_date;
  var mobile_auth;


  var params = {};
  params["appserver"] = $(camera_el).attr("data-appserver");
  params["videoserver"] = $(camera_el).attr("data-videoserver");


  // overwritable params
  var hResolution;
  var vResolution;
  var fps;
  var className;
  var videoServer; // gets set by server in auth callback
  var appServer = params["appserver"] || "cameratag.com";
  var height;
  var width;
  var maxLength;
  var skipPreview;
  var videoBitRate;

  // DOM references
  var container;
  var swf;
  var start_screen;
  var playback_screen;
  var recording_screen;
  var camera_detection_screen;
  var countdown_screen;
  var countdown_status;
  var accept_screen;
  var wait_screen;
  var completed_screen;
  var error_screen;
  var error_message;
  var sms_screen;
  var sms_input;
  var parent_form;
  var thumb_bg;
  var check_phone_screen;
  var alternative_prompt;


  // Control functions
  self.play = function(){};
  self.record = function(){};
  self.stopRecording = function(){};
  self.stopPlayback = function(){};
  self.fire = function(){};
  self.observe = function(){};
  self.stopObserving = function(){};
  var connect; // for internal use only accessable- not publicly accessable


  // state management 
  var state;
  var connected = false;
  var countdown_counter = 0;
  var uploading = false;
  var error_messages = [];

  // keep a reference to this instance in the Class prototype
  CameraTag.cameras[dom_id] = self;

  var setup = function() {
    // make sure swfobject is available
    if (!swfObjectReady()) {
      setTimeout(setup, 30);
      return;
    };

    $.ajax({
      url: "//"+appServer+"/videos.json",
      type:"get",
      dataType: "jsonp",
      data: {
        referer: window.location.toString(),
        camera_id: ( $(camera_el).attr("data-uuid") || $(camera_el).attr("id") ),
        video_uuid: existing_uuid
      },
      success: function(response) {
        if (response["camera"] != undefined) {
          camera = response.camera;
          video = response.video;
          plan = response.plan;
          videoServer = params["videoserver"] || response.videoServer;
          ul_policy = response.ul_policy;
          ul_signature = response.ul_signature;
          mobile_date = response.mobile_date;
          mobile_auth = response.mobile_auth;

          // init
          init();
        }
        else {
          error_messages.push(response.error);
          init();
        }
      },
      error: function() {
        error_messages.push("error initializing recorder");
      }
    })
  };

  var init = function() {
    // setup prarms with preference to passed in as data attributes on the camera tag
    input_name = $(camera_el).attr("name") || camera.name;
    inline_styles = $(camera_el).attr("style")
    className = $(camera_el).attr("class") || camera.className || "";
    hResolution = camera.formats && camera.formats[0].hResolution || 320;
    vResolution = camera.formats && camera.formats[0].vResolution || 240;
    fps = camera.formats && camera.formats[0].fps || 24;
    width = hResolution < 640 ? 320 : hResolution / 2;
    height = vResolution < 480 ? 240 : vResolution / 2;
    maxLength = $(camera_el).attr("data-maxlength") || camera.maxLength || 30;
    css_url = camera.cssURL || "//"+appServer+"/"+CameraTag.version+"/cameratag.css";
    skipPreview = $(camera_el).attr("data-autopreview") == "false" || camera.autoPreview == false || false;
    videoBitRate = $(camera_el).attr("data-videobitrate") || 65536;
    mobile_browser = isMobile();
    mobile_upload_supported = mobileUploadSupported();
    mobile_enabled = mobile_browser && mobile_upload_supported && camera.allowMobileUploads;
    txt_message = $(camera_el).attr("data-txt-message") || camera.txtMessage || "To record this video using your mobile phone please visit <<url>> in your mobile browser";
    skipPublishOnUpload = $(camera_el).attr("data-publish-on-upload") == "false";

    // setup parent form observation
    parent_form = $(camera_el).parents("form");

    // setup video formats
    video.formats = {};
    if (camera.formats) {
      $(camera.formats).each(function(index, format){
        video.formats[format.name] = {};
      })
    }
      
    // inject our css 
    url = 'style.css';
    if (document.createStyleSheet) {
      // for IE
      document.createStyleSheet(css_url);
    }
    else {
      // for non IE
      var css_link = $('<link href="'+css_url+'" media="all" rel="stylesheet" type="text/css" />');
      $("head").append(css_link);    
    }
    
    
    // replace the camera tag with the container div
    container = $('<div id="'+dom_id+'" class="camera_tag"></div>');
    container.css({width: width+"px", height: height+"px"})
    container.attr("style", inline_styles);
    container.addClass(className);
    $(camera_el).replaceWith(container);


    if (!mobile_browser) {
      // create swf placeholder in container then embed the camera swf
      container.append("<div id='"+dom_id+"_swf_placeholder'></div>")
      embedSWF();  

      // communication to and from swf
      setupExternalInterface();
    }


    // non-campatible mobile device
    if (mobile_browser && !mobile_enabled) {
      error_messages.push("Your mobile device does not support video uploading");
    }

    // build the control elements
    buildInterfaceElements();

    // show start screen or error messages
    if (error_messages.length > 0) {
      throw_error(error_messages.join("\n"));
      return;
    }
    else {
      interfaceState(start_screen, true);  
    }
    
    // create the inputs that will get posted
    create_hidden_inputs();

    // inject filepicker if we're uploading
    if (camera.allowUploads) {
      var filepicker_js = $('<script src="https://api.filepicker.io/v1/filepicker.js"></script>');
      $("head").append(filepicker_js);  
    }
  };

  var embedSWF = function() {
    var flashvars = {
        videoServer: videoServer,
        videoUUID: video.uuid,
        cameraUUID: camera.uuid,
        domID: dom_id,
        maxLength: maxLength,
        hResolution: hResolution,
        vResolution: vResolution,
        fps: fps,
        videoBitRate: videoBitRate
    };

    var params = {
        allowfullscreen: 'true',
        allowscriptaccess: 'always',
        wmode: "transparent"
    };

    var attributes = {
        id: dom_id+"_swf",
        name: dom_id+"_swf"
    };

    swfobject.embedSWF("//"+appServer+"/"+CameraTag.version+"/camera.swf?"+cachebuster, dom_id+"_swf_placeholder", "100%", "100%", '11.1.0', 'https://'+appServer+'/'+CameraTag.version+'/expressInstall.swf', flashvars, params, attributes, function(){});
    swf = $("#"+dom_id+"_swf")[0];

    if (swf == undefined) {
      error_messages.push("Please make sure you have Flash Player 11 or higher installed");
    }
  };

  self.embed_callback = function(e) {
    swf = $("#"+dom_id+"_swf")[0];

    if (swf == undefined) {
      error_messages.push("Unable to embed video recorder. Please make sure you have Flash Player 11 or higher installed");
    }
  }

  self.upload_dialog = function() {
    filepicker.setKey('AnedmGtKNTfS1eIekIV3Qz');
    var key =  "/"+camera.uuid+"/"+video.uuid+".flv";    
    self.fire("uploadStarted");
    uploading = true;

    filepicker.pickAndStore(
      {mimetype:"video/*", maxSize: 200*1024*1024, policy: ul_policy, signature: ul_signature, services: ["COMPUTER"]},
      {location: 'S3', path: key},
      function(fpfile) {
        if (skipPublishOnUpload) {
          interfaceState(completed_screen);
          self.fire("readyToPublish");
        }
        else {
          self.publish(); // publish without s3  
        }
        
      },
      function() {
        self.fire("uploadAborted");
        uploading = false;
      }
    )
    return false;
  };

  var buildInterfaceElements = function() {
    // start screen
    start_screen = $("#"+dom_id+"-start-screen").addClass("cameratag_screen");
    if (start_screen.length == 0) {
      start_screen = $('<div class="cameratag_screen cameratag_start cameratag_record"></div>');
      var record_btn = $('<a class="cameratag_record_button"><span class="cameratag_record_circle">&#9679;</span> click to record</a>');
      start_screen.append(record_btn);
    }
    // add to DOM
    container.append(start_screen);

    // camera detection
    camera_detection_screen = $("#"+dom_id+"-camera-detection-screen").addClass("cameratag_screen");
    if (camera_detection_screen.length == 0) {
      // legacy support for old typo
      camera_detection_screen = $("#"+dom_id+"camera-detection-screen").addClass("cameratag_screen");
    }
    if (camera_detection_screen.length == 0) {
      camera_detection_screen = $('<div class="cameratag_screen cameratag_detect"></div>');
      var camera_detection_prompt = $('<div class="cameratag_prompt">wave to the camera</div>');
      camera_detection_screen.append(camera_detection_prompt);
    }
    // add to DOM
    container.append(camera_detection_screen);


    // countdown
    countdown_screen = $("#"+dom_id+"-countdown-screen").addClass("cameratag_screen");
    countdown_status = countdown_screen.find(".cameratag_countdown_status");
    if (countdown_screen.length == 0) {
      countdown_screen = $('<div class="cameratag_screen cameratag_count"></div>');
      var countdown_prompt = $('<div class="cameratag_prompt">recording in </div>');
      countdown_status = $('<div class="cameratag_countdown_status"></div>');
      countdown_screen.append(countdown_status);
      countdown_screen.append(countdown_prompt);
    }
    // add to DOM
    container.append(countdown_screen);


    // record controls
    recording_screen = $("#"+dom_id+"-recording-screen").addClass("cameratag_screen");
    record_timer_prompt = recording_screen.find(".cameratag_record_timer_prompt");
    if (recording_screen.length == 0) {
      recording_screen = $('<div class="cameratag_screen cameratag_recording cameratag_stop_recording"></div>');
      var stop_prompt = $('<div class="cameratag_prompt">click to stop recording </div>');
      record_timer_prompt = $('<span class="cameratag_record_timer_prompt">('+maxLength+')</span>');
      var recording_indicator = $('<img src="//'+appServer+'/assets/recording.gif"/>');
      stop_prompt.append(record_timer_prompt);
      recording_screen.append(stop_prompt);
      recording_screen.append(recording_indicator);
    }
    // add to DOM
    container.append(recording_screen);
  
  
    // play controls
    playback_screen = $("#"+dom_id+"-playback-screen").addClass("cameratag_screen");
    if (playback_screen.length == 0) {
      playback_screen = $('<div class="cameratag_screen cameratag_playback cameratag_stop_playback"></div>');
      var skip_prompt = $('<div class="cameratag_prompt">click to skip review</div>');
      playback_screen.append(skip_prompt);  
    }
    // add to DOM
    container.append(playback_screen);
    

    // accept controls
    accept_screen = $("#"+dom_id+"-accept-screen").addClass("cameratag_screen");
    if (accept_screen.length == 0) {
      accept_screen = $('<div class="cameratag_screen cameratag_accept"></div>');
      var accept_btn = $('<a class="cameratag_accept_btn cameratag_publish"><span class="button_label">&#10003; Accept</span></a>');
      var rerecord_btn = $('<a class="cameratag_rerecord_btn cameratag_record"><span class="button_label">&#9851; Re-record</span></a>');
      var play_btn = $('<a class="cameratag_play_btn cameratag_play"><span class="button_label">&#8629; Review Recording</span></a>');
      accept_screen.append(accept_btn);
      accept_screen.append(rerecord_btn);
      accept_screen.append(play_btn);
    }
    // add to DOM
    container.append(accept_screen);
    

    // wait screen
    wait_screen = $("#"+dom_id+"-wait-screen").addClass("cameratag_screen");
    if (wait_screen.length == 0) {
      wait_screen = $('<div class="cameratag_screen cameratag_wait"></div>');
      var spinner = $('<div class="cameratag_spinner"><img src="//'+appServer+'/assets/loading.gif"/><br/>please wait while we push pixels</div>');
      wait_screen.append(spinner);
    }
    // add to DOM
    container.append(wait_screen);


    // completed screen
    completed_screen = $("#"+dom_id+"-completed-screen").addClass("cameratag_screen");
    if (completed_screen.length == 0) {
      completed_screen = $('<div class="cameratag_screen cameratag_completed"></div>');
      thumb_bg = $('<div class="cameratag_thumb_bg"></div>');
      var check_mrk = $('<div class="cameratag_checkmark"><span class="check">&#10004;</span> published</div>');
      completed_screen.append(thumb_bg);
      completed_screen.append(check_mrk);

    }
    // add to DOM
    container.append(completed_screen);


    // error screen
    error_screen = $("#"+dom_id+"-error-screen").addClass("cameratag_screen");
    if (error_screen.length == 0) {
      error_screen = $('<div class="cameratag_screen cameratag_error"></div>');
      error_message = $('<div class="cameratag_error_message"></div>');
      error_screen.append(error_message);
    }
    // add to DOM
    container.append(error_screen);


    // sms screen
    sms_screen = $("#"+dom_id+"-sms-screen").addClass("cameratag_screen");
    sms_input = sms_screen.find(".cameratag_sms_input");
    if (sms_screen.length == 0) {
      sms_screen = $('<div class="cameratag_screen cameratag_sms"></div>');
      var sms_input_prompt = $('<div class="cameratag_sms_prompt">Enter your <b>mobile phone number</b> below and we will text you a link for mobile recording<br/></div>');
      sms_input = $('<input class="cameratag_sms_input" type="text"/>');
      var sms_submit = $('<br/><a href="javascript:" class="cameratag_send_sms">Send Mobile Link</a>&nbsp;&nbsp;<a class="cameratag_goto_start">cancel</a>');

      sms_input_prompt.append(sms_input);
      sms_input_prompt.append(sms_submit);
      sms_screen.append(sms_input_prompt);
    }
    // add to DOM
    container.append(sms_screen);


    // check phone screen
    check_phone_screen = $("#"+dom_id+"-check-phone-screen").addClass("cameratag_screen");
    if (check_phone_screen.length == 0) {
      check_phone_screen = $('<div class="cameratag_screen cameratag_check_phone"><div class="cameratag_check_phone_prompt">Check your phone for mobile recording instructions</div><div class="cameratag_check_phone_url">or vsist http://'+appServer+'/m/'+video.short_code+' your mobile browser</div></div>');
    }
    // add to DOM
    container.append(check_phone_screen);


    // mobile DOM elements
    if (mobile_enabled) {
      mobile_file_input = $('<input id="file_input" type="file" accept="video/*" style="position:absolute; width:100%; height:100%; opacity:.01;"/>');
      container.append(mobile_file_input);
      $(file_input).bind("change", mobileFileUpload);
    }

    // alternative recording prompt
    alternative_prompt = $("#"+dom_id+"-alternative-prompt");
    if (alternative_prompt.length == 0) {
      alternative_prompt = $('<div class="cameratag_alternatives"></div>'); 

      // dont display alternative if user is on mobile browser
      if (!mobile_browser) {
      
        if ( (camera.allowMobileUploads && plan.sms) || camera.allowUploads) {
          alternative_prompt.append("you may also ");
        }

        // sms link
        if (camera.allowMobileUploads && plan.sms) {
          var sms_link = $('<a href="javascript:" class="cameratag_sms_link">record by phone</a>');  
          alternative_prompt.append(sms_link);  
        }
        
        if (camera.allowMobileUploads && camera.allowUploads && plan.sms) {
          alternative_prompt.append(" or ");  
        }

        // upload link
        if (camera.allowUploads && !mobile_browser) {
          var upload_link = $('<a href="javascript:" class="cameratag_upload_link">upload a file</a>');  
          alternative_prompt.append(upload_link);      
        }
      }
    }
    // add to DOM
    container.append(alternative_prompt);
    



    //
    // SETUP ACTION CLASS OBSERVERS
    //
    if (mobile_enabled) {
      container.find(".cameratag_record").click(function(){alert("hi there")}); //mobile_file_input.click()
    }
    else if (!mobile_browser) {
      container.find(".cameratag_record").click(self.record);
      container.find(".cameratag_stop_recording").click(self.stopRecording);
      container.find(".cameratag_stop_playback").click(self.stopPlayback);
      container.find(".cameratag_play").click(self.play);
      container.find(".cameratag_publish").click(self.publish);
      container.find(".cameratag_upload_link").click(self.upload_dialog);  
      container.find(".cameratag_goto_start").click(function(){
        interfaceState(start_screen, true);
      });  
      container.find(".cameratag_send_sms").click(function(){
        self.send_sms(sms_input.val());
      });
      container.find(".cameratag_sms_link").click(function(){
        interfaceState(sms_screen);
        return false;
      });
    }
    
  };

  var isMobile = function() {
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  var mobileUploadSupported = function () {
     // Handle devices which falsely report support
     if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
       return false;
     }
     // Create test element
     var el = document.createElement("input");
     el.type = "file";
     return !el.disabled;
  }

  var mobileFileUpload = function() {
    self.fire("uploadStarted");
    uploading = true;

    $(mobile_file_input).hide();
    var selectedFile = mobile_file_input[0].files[0];
    var xml_http_req = new XMLHttpRequest();
    
    xml_http_req.upload.addEventListener("progress", mobileFileProgress, false);
    xml_http_req.open('PUT', 'http://s3.amazonaws.com/assets.cameratag.com/' + camera.uuid + '/' + video.uuid + ".flv", true);

    xml_http_req.setRequestHeader('x-amz-date', mobile_date);
    xml_http_req.setRequestHeader('Authorization', mobile_auth);     
    xml_http_req.setRequestHeader('x-amz-acl', 'public-read');
    xml_http_req.setRequestHeader('Content-Type', "application/octet-stream");
    
    xml_http_req.onload = mobileFileComplete;
    xml_http_req.send(selectedFile);
    countdown_status.html("0%");

    interfaceState(countdown_screen);
  }

  var mobileFileProgress = function(e) {
    var percent = Math.round(e.loaded / e.total * 100);
    if (percent < 0) {
      percent = "0" + percent;
    }
    countdown_status.html(percent + "%");
  }

  var mobileFileComplete = function(e) {
    self.publish();
  }

  var countdown = function(length, callback) {
    if (countdown_counter >= length) {
      countdown_counter = 0;
      countdown_screen.hide();
      callback();
      self.fire("countdownFinished");
    }
    else {
      countdown_status.html(length - countdown_counter);
      countdown_counter += 1;
      setTimeout(function(){
        countdown(length, callback);
      }, 1000);
    }
  };

  var interfaceState = function(state_container, alternatives) {
    container.find(".cameratag_screen").hide();
    if (alternatives) {
      container.find(".cameratag_alternatives").show();
    }
    else {
     container.find(".cameratag_alternatives").hide(); 
    }

    if (state_container != "none") {
      state_container.css('display','block');
    }
  };

  var recordTimerTick = function() {
    record_timer_count += 1;
    record_timer_prompt.html( "(" + (maxLength - record_timer_count) + ")" );
  }

  var throw_error = function(message) {
    error_message.html("â˜  "+message);
    interfaceState(error_screen, true);
  };

  var populate_hidden_inputs = function() {
    $("#"+input_name+"_video_uuid").val(video.uuid);
    $(camera.formats).each(function(index, format){
      // videos
      var mp4_url = "//"+appServer+"/videos/"+video.uuid+"/"+format.name+"/mp4";
      $("#"+input_name+"_"+format.name+"_video").val(mp4_url);
      video.formats[format.name]["video_url"] = mp4_url;

      $("#"+input_name+"_"+format.name+"_mp4").val(mp4_url);
      video.formats[format.name]["mp4_url"] = mp4_url;

      var webm_url = "//"+appServer+"/videos/"+video.uuid+"/"+format.name+"/webm";
      $("#"+input_name+"_"+format.name+"_webm").val(webm_url);
      video.formats[format.name]["webm_url"] = webm_url;

      // thumbnails
      var thumb_url = "//"+appServer+"/videos/"+video.uuid+"/"+format.name+"/thumb";
      $("#"+input_name+"_"+format.name+"_thumb").val(thumb_url);
      video.formats[format.name]["thumb_url"] = thumb_url;

      var small_thumb_url = "//"+appServer+"/videos/"+video.uuid+"/"+format.name+"/small_thumb";
      $("#"+input_name+"_"+format.name+"_small_thumb").val(small_thumb_url);
      video.formats[format.name]["small_thumb_url"] = small_thumb_url;
    });

  };

  var create_hidden_inputs = function() {
    container.append("<input id='"+input_name+"_video_uuid' type='hidden' name='"+input_name+"[video_uuid]' value=''>");
    $(camera.formats).each(function(index, format){
      container.append("<input id='"+input_name+"_"+format.name+"_video' type='hidden' name='"+input_name+"["+format.name+"][video]' value=''>");
      container.append("<input id='"+input_name+"_"+format.name+"_mp4' type='hidden' name='"+input_name+"["+format.name+"][mp4]' value=''>");
      container.append("<input id='"+input_name+"_"+format.name+"_webm' type='hidden' name='"+input_name+"["+format.name+"][webm]' value=''>");
      container.append("<input id='"+input_name+"_"+format.name+"_thumb' type='hidden' name='"+input_name+"["+format.name+"][thumb]' value=''>");
      container.append("<input id='"+input_name+"_"+format.name+"_small_thumb' type='hidden' name='"+input_name+"["+format.name+"][small_thumb]' value=''>");
    });
  };

  self.addVideoData = function(js_object) {
    if (typeof(js_object) != "object") {
      return
    }

    var json_string = JSON.stringify(js_object);
    
    $.ajax({
      url: "//"+appServer+"/videos/"+video.uuid+"/form_data.json",
      data:{form_data: json_string},
      type:"get",
      dataType: "jsonp",
      success: function(response) {
        return true
      },
      error: function() {
        throw_error("Unable to submit form data.");
        return false;
      }
    })
  }

  var get_form_data = function() {
    var o = {};
    var a = serialze_ct_elelments();
    $.each(a, function(index, form_el) {  
      if (o[form_el.name] !== undefined) {
          if (!o[form_el.name].push) {
              o[form_el.name] = [o[form_el.name]];
          }
          o[form_el.name].push(form_el.value || '');
      } else {
          o[form_el.name] = form_el.value || '';
      }
    });
    return o;
  }

  var serialze_ct_elelments = function() {
    if (parent_form.length == 0) {
      return "[]";
    }

    return $(parent_form[0].elements).filter(function () {
        return $(this).hasClass("cameratag_data") && this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type));
    }).map(function (i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : val.constructor == Array ? jQuery.map(val, function (val, i) {
            return {
                name: elem.name,
                value: val
            };
        }) : {
            name: elem.name,
            value: val
        };
    }).get();
  }

  //
  // publicly accessable methods
  // 

  self.send_sms = function(number) {
    if (number == "") {
      alert("please eneter your phone number!")
      return;
    }
    interfaceState(wait_screen);
    $.ajax({
      url: "//"+appServer+"/videos/"+video.uuid+"/sms",
      data:{number: number, message: txt_message},
      type:"get",
      dataType: "jsonp",
      success: function(response) {
        if (response.success) {
          interfaceState(check_phone_screen);
          self.fire("smsSent");  
        }
        else {
          interfaceState(sms_screen);
          alert("that does not appear to be a valid phone number");
        } 
      },
      error: function() {
        throw_error("Unable to send SMS.");
        return false;
      }
    })
  }

  self.publish = function() {
    self.fire("publishing");
    interfaceState(wait_screen);
    
    if (uploading) {
      if (mobile_browser) {
        data = {skip_s3: true, publish_type: "mobile"};  
      }
      else {
        data = {skip_s3: true, publish_type: "upload"};   
      }
      
    }
    else {
      data = {publish_type: "webcam"};
    }
    
    $.ajax({
      url: "//"+appServer+"/videos/"+video.uuid+"/publish.json",
      data:data,
      type:"get",
      dataType: "jsonp",
      success: function(response) {
        if (response["uuid"] == undefined) {
          throw_error(response.error);
        }
        else {
          state = "published";
          populate_hidden_inputs();
          interfaceState(completed_screen);
          self.fire("published");
          pollForProcessed();
        }
      },
      error: function() {
        throw_error("Unable to publish your recording.");
      }
    })
  };

  self.getVideo = function() {
    return video;
  };

  self.observe = function(event_name,callback) {
    CameraTag.observe(dom_id, event_name, callback);
  };

  self.fire = function(event_name,data) {
    CameraTag.fire(dom_id, event_name, data);
  };

  self.stopObserving = function(event_name,callback) {
    CameraTag.stopObserving(dom_id, event_name, callback);
  };


  var pollForProcessed = function() {
    if (camera.poll_for_processed) {
      processed_timer = setInterval(function(){
        $.ajax({
          url: "//"+appServer+"/videos/"+video.uuid+".json",
          type:"get",
          dataType: "jsonp",
          data: {
            referer: window.location.toString()
          },
          success: function(response) {
            if (response.formats[0].state == "COMPLETED") {
              self.fire("processed");
              clearInterval(processed_timer);
            }
          },
          error: function() {
          }
        })
      }, 1000);  
    }
  }

  var pollForPublished = function() {
    published_timer = setInterval(function(){
      $.ajax({
        url: "//"+appServer+"/videos/"+video.uuid+".json",
        type:"get",
        dataType: "jsonp",
        data: {
          referer: window.location.toString()
        },
        success: function(response) {
          if (response.state == "published") {
            self.fire("published");
            clearInterval(published_timer);
          }
        },
        error: function() {
        }
      })
    }, 1000);
  }

  // these methods require the swf to be in existance and are created after it's available

  var setupExternalInterface = function() {
    // communication to swf
    self.play = function() {
      if (connected) {
        swf.startPlayback();
      }
    };

    self.record = function() { // actually calls countdown which will call record_without_countdown in callback
      if (connected) {
        self.fire("countdownStarted");
        swf.setupCamera();
        swf.showRecorder();
        countdown(5, self.record_without_countdown);
      }
      else {
        interfaceState("none");
        connect();
      }
    };

    self.record_without_countdown = function() {
      swf.startRecording()
    };

    self.stopPlayback = function() {
      if (connected) {
        swf.stopPlayback();  
      }
    };

    self.stopRecording = function() {
      if (connected) {
        swf.stopRecording();  
      }
    };

    self.getState = function() {
      return state;
    };

    connect = function() {
      swf.connect();
    };

    // communication from swf

    self.observe("initialized", function() {
      state = "initialized";
    });

    self.observe("securityDialogOpen", function() {
      interfaceState("none");
    });

    self.observe("securityDialogClosed", function() {
      interfaceState(camera_detection_screen);
    });

    self.observe("detectingCamera", function() {
      interfaceState(camera_detection_screen);
    });

    self.observe("noCamera", function() {
      throw_error("No Camera Detected");
    });

    self.observe("noMic", function() {
      throw_error("No Microphone Detected");
    });

    self.observe("readyToRecord", function() {
      setTimeout(function(){
        self.record(); //starts countdown  
      }, 2000);
    });

    self.observe("cameraDenied", function() {
      throw_error("Camera Access Denied");
    });

    self.observe("serverConnected", function() {
      connected = true;
    });

    self.observe("serverError", function() {
      throw_error("Unable To Connect");
    });


    self.observe("waitingForCameraActivity", function() {
    });
    

    self.observe("serverStateUnkown", function() {
    });

    self.observe("countdownStarted", function() {
      interfaceState(countdown_screen);
    });

    self.observe("countdownFinished", function() {
    });

    self.observe("recordingStarted", function() {
      state = "recorded";
      record_timer_count = 0;
      record_timer = setInterval(function(){ recordTimerTick() }, 1000);
      interfaceState(recording_screen);
    });

    self.observe("recordingStopped", function() {
      clearInterval(record_timer);
      if (skipPreview) {
        swf.showPlayer();
        interfaceState(accept_screen);
      }
      else {
        self.play();
      }
    });

    self.observe("buffering", function() {
      interfaceState(wait_screen);
    });

    self.observe("recordingTimeOut", function() {
    });

    self.observe("playbackStarted", function() {
      interfaceState(playback_screen);
    });

    self.observe("playbackStopped", function() {
      interfaceState(accept_screen);
    });

    self.observe("publishing", function() {
      state = "publishing";
    });

    self.observe("uploadStarted", function() {
      uploading = true;
    });

    self.observe("uploadAborted", function() {
      uploading = false;
    });

    self.observe("readyToPublish", function() {
      
    });

    self.observe("smsSent", function() {
      pollForPublished();
    });

    self.observe("published", function() {
    });

    self.observe("processed", function() {
      state = "processed";
      $(".cameratag_thumb_bg").css({backgroundImage: "url(//"+appServer+"/videos/"+video.uuid+"/"+camera.formats[0].name+"/thumb)"});
    });

  }

  var swfObjectReady = function() {
    // swfobject is ready
    if ( typeof(swfobject) == "object" ) {
      CameraTag.swfobject = swfobject;
      return true;
    } 
    // embed the script if we havent already
    else if (!CameraTag.swfObjectInjected) {
      var swfobject_script = document.createElement('script');
      swfobject_script.src = '//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js';
      document.body.insertBefore( swfobject_script, document.body.firstChild );
      CameraTag.swfObjectInjected = true;
    }
    else {
      return false;  
    }
  };

  setup();
}









//
// CameraTagPlayer
//
CameraTagPlayer = function(video_el) {
  var $ = CameraTag.jQuery; // we keep a localized version in case your not already using jQuery
  var video_el = $(video_el);
  var uuid = video_el.attr("data-uuid");
  var appServer = video_el.attr("data-appserver") || "cameratag.com";
  var videojsInjected = false;
  var self = this;
  var video = {};
  var dom_id = video_el.attr("id") || uuid;

  var setup = function(){
    // make sure videojs is ready
    if (!videojsReady()) {
      setTimeout(function(){
        new CameraTagPlayer(video_el);
      }, 30);
      return;
    };

    // hit server and get formats, permission
    $.ajax({
      url: "//"+appServer+"/videos/"+uuid+".json",
      type:"get",
      dataType: "jsonp",
      data: {
        referer: window.location.toString()
      },
      success: function(response) {
        video = response;
        build_video_tag();
        init_videojs();
      },
      error: function() {
      }
    });
  }

  var find_format_by_name = function(name) {
    var result = $.grep(video.formats, function(e){ return e.name == name; });
    return result[0];
  }

  var build_video_tag = function() {
    // get format
    var format = find_format_by_name( video_el.attr("data-format") ) || video.formats[0];

    // make sure we have a DOM_ID
    video_el.attr("id", dom_id);

    // add height and width
    if (video_el.attr("height")) {
      var height = video_el.attr("height")
    }
    else {
      var height = format.height / 2;
    }
    video_el.attr("height", height);

    if (video_el.attr("width")) {
      var width = video_el.attr("width")
    }
    else {
      var width = format.width / 2;
    }
    video_el.attr("width", width);
    

    // add poster attribute
    video_el.attr("poster", "//"+appServer+"/videos/"+uuid+"/"+format.name+"/thumb")

    // add video js classes
    video_el.addClass("video-js");
    video_el.addClass("vjs-default-skin");

    // add sources to video element
    var h264_source = $('<source src="//'+appServer+'/videos/'+uuid+'/'+format.name+'/mp4" type="video/mp4" />');
    video_el.append(h264_source);

    var webm_source = $('<source src="//'+appServer+'/videos/'+uuid+'/'+format.name+'/webm" type="video/webm" />');
    video_el.append(webm_source);
  }

  var init_videojs = function() {
    var player = videojs(dom_id, { controls: true }, function(){
      // Player (this) is initialized and ready.
    });
    CameraTag.players[uuid] = player;
  }

  var videojsReady = function() {
    // videojs is ready
    if ( typeof(videojs) == "function" ) {
      CameraTag.videojs = videojs;
      return true;
    }
    // embed the script if we havent already
    else if (!CameraTag.videojsInjected) {
      var videojs_script = document.createElement('script');
      videojs_script.src = "//"+appServer+"/"+CameraTag.version+"/videojs.js";

      var videojs_css = document.createElement('link');
      videojs_css.href = "//"+appServer+"/"+CameraTag.version+"/videojs.css";
      videojs_css.rel = "stylesheet";
      videojs_css.type = "text/css";


      document.body.insertBefore( videojs_script, document.body.firstChild );
      document.body.insertBefore( videojs_css, document.body.firstChild );
      CameraTag.videojsInjected = true;

      return false
    }
    else {
      return false;  
    }
  };

  setup();
}













//
// CameraTag
//

CameraTag = {};
CameraTag.version = 1.6;

CameraTag.cameras = {};
CameraTag.players = {};

CameraTag.callbacks = {};

CameraTag.jQuery = null;
CameraTag.jQueryPreInstalled = window.jQuery && jQuery.fn && /^[1-9]/.test(jQuery.fn.jquery) || false;
CameraTag.jQueryInjected = false;
CameraTag.swfObjectInjected = false;

CameraTag.setup = function() {
  // make sure prototype is available
  if (!CameraTag.jQueryReady()) {
    setTimeout(CameraTag.setup, 30);
    return;
  };

  // create instances for each camera tag in the page
  CameraTag.instantiateCameras();

  // create instances for each video tag in the page
  CameraTag.instantiatePlayers();
}

CameraTag.jQueryReady = function() {
  // jQuery is already instaled by end user
  if ( CameraTag.jQueryPreInstalled ) {
    CameraTag.jQuery = jQuery;
    return true;
  }
  // Our version is installed
  else if (CameraTag.jQuery) {
    return true;
  } 
  // Our injected version of jQuery is ready- now let's scope it
  else if (window.jQuery && jQuery.fn && /^[1-9]/.test(jQuery.fn.jquery) ) {
    CameraTag.jQuery = jQuery.noConflict(true);
    return true;
  }
  // Cant find a jQuery because it didnt already exist and we haven't injected it yet
  else if (!CameraTag.jQuery && !CameraTag.jQueryInjected) {
    var jquery_script = document.createElement('script');
    jquery_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
    document.body.insertBefore( jquery_script, document.body.firstChild );
    CameraTag.jQueryInjected = true;
    return false;
  }
  else {
    return false;  
  }
}

CameraTag.instantiateCameras = function() {
  CameraTag.jQuery("camera").each(function(index, camera_el){
    new CameraTagRecorder(camera_el);
  });
};

CameraTag.instantiatePlayers = function() {
  CameraTag.jQuery("video[data-uuid]").each(function(index, video_el){
    new CameraTagPlayer(video_el);
  });
};

// EVENT OBSERVATION
CameraTag.observe = function(camera_dom_id,event_name,callback) {
  if ( !CameraTag.callbacks[camera_dom_id] )
    CameraTag.callbacks[camera_dom_id] = {};
  if ( !CameraTag.callbacks[camera_dom_id][event_name] )
    CameraTag.callbacks[camera_dom_id][event_name] = [];

  CameraTag.callbacks[camera_dom_id][event_name].push(callback);
};

CameraTag.fire = function(camera_dom_id,event_name,data) {
  if ( !CameraTag.callbacks[camera_dom_id] )
    CameraTag.callbacks[camera_dom_id] = {};
  if ( !CameraTag.callbacks[camera_dom_id][event_name] )
    CameraTag.callbacks[camera_dom_id][event_name] = [];
    
  for( i = 0; i < CameraTag.callbacks[camera_dom_id][event_name].length; i++ ) {
    CameraTag.callbacks[camera_dom_id][event_name][i](data);
  }
};

CameraTag.stopObserving = function(camera_dom_id,event_name,callback) {
  if ( !CameraTag.callbacks[camera_dom_id] )
    CameraTag.callbacks[camera_dom_id] = {};
  if ( !CameraTag.callbacks[camera_dom_id][event_name] )
    CameraTag.callbacks[camera_dom_id][event_name] = [];
  
  var newCallbacks = [];
  for( i = 0; i < CameraTag.callbacks[camera_dom_id][event_name].length; i++ ) {
    if( CameraTag.callbacks[camera_dom_id][event_name][i] != callback )
      newCallbacks.push(callback)
  }
  
  CameraTag.callbacks[camera_dom_id][event_name] = newCallbacks;
};

CameraTag.prototype = CameraTag;




//
// TIP THE FIRST DOMINO
//



function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
};

addLoadEvent(CameraTag.setup);
/*!
 * Pusher JavaScript Library v1.12.1
 * http://pusherapp.com/
 *
 * Copyright 2011, Pusher
 * Released under the MIT licence.
 */


(function(){if(Function.prototype.scopedTo===void 0)Function.prototype.scopedTo=function(a,c){var e=this;return function(){return e.apply(a,Array.prototype.slice.call(c||[]).concat(Array.prototype.slice.call(arguments)))}};var b=function(a,c){this.options=c||{};this.key=a;this.channels=new b.Channels;this.global_emitter=new b.EventsDispatcher;var e=this;this.checkAppKey();this.connection=new b.Connection(this.key,this.options);this.connection.bind("connected",function(){e.subscribeAll()}).bind("message",
function(c){var a=c.event.indexOf("pusher_internal:")===0;if(c.channel){var b;(b=e.channel(c.channel))&&b.emit(c.event,c.data)}a||e.global_emitter.emit(c.event,c.data)}).bind("disconnected",function(){e.channels.disconnect()}).bind("error",function(c){b.warn("Error",c)});b.instances.push(this);b.isReady&&e.connect()};b.instances=[];b.prototype={channel:function(a){return this.channels.find(a)},connect:function(){this.connection.connect()},disconnect:function(){this.connection.disconnect()},bind:function(a,
c){this.global_emitter.bind(a,c);return this},bind_all:function(a){this.global_emitter.bind_all(a);return this},subscribeAll:function(){for(channelName in this.channels.channels)this.channels.channels.hasOwnProperty(channelName)&&this.subscribe(channelName)},subscribe:function(a){var c=this,e=this.channels.add(a,this);this.connection.state==="connected"&&e.authorize(this.connection.socket_id,this.options,function(b,f){b?e.emit("pusher:subscription_error",f):c.send_event("pusher:subscribe",{channel:a,
auth:f.auth,channel_data:f.channel_data})});return e},unsubscribe:function(a){this.channels.remove(a);this.connection.state==="connected"&&this.send_event("pusher:unsubscribe",{channel:a})},send_event:function(a,c,e){return this.connection.send_event(a,c,e)},checkAppKey:function(){(this.key===null||this.key===void 0)&&b.warn("Warning","You must pass your app key when you instantiate Pusher.")}};b.Util={extend:function c(e,b){for(var f in b)e[f]=b[f]&&b[f].constructor&&b[f].constructor===Object?c(e[f]||
{},b[f]):b[f];return e},stringify:function(){for(var c=["Pusher"],b=0;b<arguments.length;b++)typeof arguments[b]==="string"?c.push(arguments[b]):window.JSON==void 0?c.push(arguments[b].toString()):c.push(JSON.stringify(arguments[b]));return c.join(" : ")},arrayIndexOf:function(c,b){var g=Array.prototype.indexOf;if(c==null)return-1;if(g&&c.indexOf===g)return c.indexOf(b);for(i=0,l=c.length;i<l;i++)if(c[i]===b)return i;return-1}};b.debug=function(){b.log&&b.log(b.Util.stringify.apply(this,arguments))};
b.warn=function(){window.console&&window.console.warn?window.console.warn(b.Util.stringify.apply(this,arguments)):b.log&&b.log(b.Util.stringify.apply(this,arguments))};b.VERSION="1.12.1";b.host="ws.pusherapp.com";b.ws_port=80;b.wss_port=443;b.channel_auth_endpoint="/pusher/auth";b.cdn_http="http://js.pusher.com/";b.cdn_https="https://d3dy5gmtp8yhk7.cloudfront.net/";b.dependency_suffix=".min";b.channel_auth_transport="ajax";b.activity_timeout=12E4;b.pong_timeout=3E4;b.isReady=!1;b.ready=function(){b.isReady=
!0;for(var c=0,e=b.instances.length;c<e;c++)b.instances[c].connect()};this.Pusher=b}).call(this);
(function(){function b(a){this.callbacks={};this.global_callbacks=[];this.failThrough=a}b.prototype.bind=function(a,c){this.callbacks[a]=this.callbacks[a]||[];this.callbacks[a].push(c);return this};b.prototype.unbind=function(a,c){if(this.callbacks[a]){var b=Pusher.Util.arrayIndexOf(this.callbacks[a],c);this.callbacks[a].splice(b,1)}return this};b.prototype.emit=function(a,c){for(var b=0;b<this.global_callbacks.length;b++)this.global_callbacks[b](a,c);var g=this.callbacks[a];if(g)for(b=0;b<g.length;b++)g[b](c);
else this.failThrough&&this.failThrough(a,c);return this};b.prototype.bind_all=function(a){this.global_callbacks.push(a);return this};this.Pusher.EventsDispatcher=b}).call(this);
(function(){function b(c,a,b){if(a[c]!==void 0)a[c](b)}function a(a,b,f){c.EventsDispatcher.call(this);this.state=void 0;this.errors=[];this.stateActions=f;this.transitions=b;this.transition(a)}var c=this.Pusher;a.prototype.transition=function(a,g){var f=this.state,h=this.stateActions;if(f&&c.Util.arrayIndexOf(this.transitions[f],a)==-1)throw this.emit("invalid_transition_attempt",{oldState:f,newState:a}),Error("Invalid transition ["+f+" to "+a+"]");b(f+"Exit",h,g);b(f+"To"+(a.substr(0,1).toUpperCase()+
a.substr(1)),h,g);b(a+"Pre",h,g);this.state=a;this.emit("state_change",{oldState:f,newState:a});b(a+"Post",h,g)};a.prototype.is=function(a){return this.state===a};a.prototype.isNot=function(a){return this.state!==a};c.Util.extend(a.prototype,c.EventsDispatcher.prototype);this.Pusher.Machine=a}).call(this);
(function(){var b=function(){var a=this;Pusher.EventsDispatcher.call(this);window.addEventListener!==void 0&&(window.addEventListener("online",function(){a.emit("online",null)},!1),window.addEventListener("offline",function(){a.emit("offline",null)},!1))};b.prototype.isOnLine=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine};Pusher.Util.extend(b.prototype,Pusher.EventsDispatcher.prototype);this.Pusher.NetInfo=b}).call(this);
(function(){function b(a){a.connectionWait=0;a.openTimeout=c.TransportType==="flash"?5E3:2E3;a.connectedTimeout=2E3;a.connectionSecure=a.compulsorySecure;a.connectionAttempts=0}function a(a,r){function k(){d.connectionWait<s&&(d.connectionWait+=g);d.openTimeout<t&&(d.openTimeout+=f);d.connectedTimeout<u&&(d.connectedTimeout+=h);if(d.compulsorySecure!==!0)d.connectionSecure=!d.connectionSecure;d.connectionAttempts++}function m(){d._machine.transition("impermanentlyClosing")}function p(){d._activityTimer&&
clearTimeout(d._activityTimer);d._activityTimer=setTimeout(function(){d.send_event("pusher:ping",{});d._activityTimer=setTimeout(function(){d.socket.close()},d.options.pong_timeout||c.pong_timeout)},d.options.activity_timeout||c.activity_timeout)}function v(){var a=d.connectionWait;if(a===0&&d.connectedAt){var c=(new Date).getTime()-d.connectedAt;c<1E3&&(a=1E3-c)}return a}function w(){d._machine.transition("open")}function x(a){a=q(a);if(a!==void 0)if(a.event==="pusher:connection_established")d._machine.transition("connected",
a.data.socket_id);else if(a.event==="pusher:error"){var c=a.data.code;d.emit("error",{type:"PusherError",data:{code:c,message:a.data.message}});c===4E3?(d.compulsorySecure=!0,d.connectionSecure=!0,d.options.encrypted=!0,m()):c<4100?d._machine.transition("permanentlyClosing"):c<4200?(d.connectionWait=1E3,d._machine.transition("waiting")):c<4300?m():d._machine.transition("permanentlyClosing")}}function y(a){p();a=q(a);if(a!==void 0){c.debug("Event recd",a);switch(a.event){case "pusher:error":d.emit("error",
{type:"PusherError",data:a.data});break;case "pusher:ping":d.send_event("pusher:pong",{})}d.emit("message",a)}}function q(a){try{var c=JSON.parse(a.data);if(typeof c.data==="string")try{c.data=JSON.parse(c.data)}catch(b){if(!(b instanceof SyntaxError))throw b;}return c}catch(e){d.emit("error",{type:"MessageParseError",error:e,data:a.data})}}function n(){d._machine.transition("waiting")}function o(a){d.emit("error",{type:"WebSocketError",error:a})}function j(a,b){var e=d.state;d.state=a;e!==a&&(c.debug("State changed",
e+" -> "+a),d.emit("state_change",{previous:e,current:a}),d.emit(a,b))}var d=this;c.EventsDispatcher.call(this);this.options=c.Util.extend({encrypted:!1},r);this.netInfo=new c.NetInfo;this.netInfo.bind("online",function(){d._machine.is("waiting")&&(d._machine.transition("connecting"),j("connecting"))});this.netInfo.bind("offline",function(){if(d._machine.is("connected"))d.socket.onclose=void 0,d.socket.onmessage=void 0,d.socket.onerror=void 0,d.socket.onopen=void 0,d.socket.close(),d.socket=void 0,
d._machine.transition("waiting")});this._machine=new c.Machine("initialized",e,{initializedPre:function(){d.compulsorySecure=d.options.encrypted;d.key=a;d.socket=null;d.socket_id=null;d.state="initialized"},waitingPre:function(){d.connectionWait>0&&d.emit("connecting_in",d.connectionWait);d.netInfo.isOnLine()&&d.connectionAttempts<=4?j("connecting"):j("unavailable");if(d.netInfo.isOnLine())d._waitingTimer=setTimeout(function(){d._machine.transition("connecting")},v())},waitingExit:function(){clearTimeout(d._waitingTimer)},
connectingPre:function(){if(d.netInfo.isOnLine()===!1)d._machine.transition("waiting"),j("unavailable");else{var a;a=c.ws_port;var b="ws://";if(d.connectionSecure||document.location.protocol==="https:")a=c.wss_port,b="wss://";a=b+c.host+":"+a+"/app/"+d.key+"?protocol=5&client=js&version="+c.VERSION+"&flash="+(c.TransportType==="flash"?"true":"false");c.debug("Connecting",a);d.socket=new c.Transport(a);d.socket.onopen=w;d.socket.onclose=n;d.socket.onerror=o;d._connectingTimer=setTimeout(m,d.openTimeout)}},
connectingExit:function(){clearTimeout(d._connectingTimer);d.socket.onopen=void 0},connectingToWaiting:function(){k()},connectingToImpermanentlyClosing:function(){k()},openPre:function(){d.socket.onmessage=x;d.socket.onerror=o;d.socket.onclose=n;d._openTimer=setTimeout(m,d.connectedTimeout)},openExit:function(){clearTimeout(d._openTimer);d.socket.onmessage=void 0},openToWaiting:function(){k()},openToImpermanentlyClosing:function(){k()},connectedPre:function(a){d.socket_id=a;d.socket.onmessage=y;d.socket.onerror=
o;d.socket.onclose=n;b(d);d.connectedAt=(new Date).getTime();p()},connectedPost:function(){j("connected")},connectedExit:function(){d._activityTimer&&clearTimeout(d._activityTimer);j("disconnected")},impermanentlyClosingPost:function(){if(d.socket)d.socket.onclose=n,d.socket.close()},permanentlyClosingPost:function(){d.socket?(d.socket.onclose=function(){b(d);d._machine.transition("permanentlyClosed")},d.socket.close()):(b(d),d._machine.transition("permanentlyClosed"))},failedPre:function(){j("failed");
c.debug("WebSockets are not available in this browser.")},permanentlyClosedPost:function(){j("disconnected")}})}var c=this.Pusher,e={initialized:["waiting","failed"],waiting:["connecting","permanentlyClosed"],connecting:["open","permanentlyClosing","impermanentlyClosing","waiting"],open:["connected","permanentlyClosing","impermanentlyClosing","waiting"],connected:["permanentlyClosing","waiting"],impermanentlyClosing:["waiting","permanentlyClosing"],permanentlyClosing:["permanentlyClosed"],permanentlyClosed:["waiting"],
failed:["permanentlyClosed"]},g=2E3,f=2E3,h=2E3,s=5*g,t=5*f,u=5*h;a.prototype.connect=function(){c.Transport===null||c.Transport===void 0?this._machine.transition("failed"):this._machine.is("initialized")?(b(this),this._machine.transition("waiting")):this._machine.is("waiting")&&this.netInfo.isOnLine()===!0?this._machine.transition("connecting"):this._machine.is("permanentlyClosed")&&(b(this),this._machine.transition("waiting"))};a.prototype.send=function(a){if(this._machine.is("connected")){var c=
this;setTimeout(function(){c.socket.send(a)},0);return!0}else return!1};a.prototype.send_event=function(a,b,e){a={event:a,data:b};e&&(a.channel=e);c.debug("Event sent",a);return this.send(JSON.stringify(a))};a.prototype.disconnect=function(){this._machine.is("permanentlyClosed")||(this._machine.is("waiting")||this._machine.is("failed")?this._machine.transition("permanentlyClosed"):this._machine.transition("permanentlyClosing"))};c.Util.extend(a.prototype,c.EventsDispatcher.prototype);this.Pusher.Connection=
a}).call(this);
(function(){Pusher.Channels=function(){this.channels={}};Pusher.Channels.prototype={add:function(a,c){var b=this.find(a);b||(b=Pusher.Channel.factory(a,c),this.channels[a]=b);return b},find:function(a){return this.channels[a]},remove:function(a){delete this.channels[a]},disconnect:function(){for(var a in this.channels)this.channels[a].disconnect()}};Pusher.Channel=function(a,c){var b=this;Pusher.EventsDispatcher.call(this,function(c){Pusher.debug("No callbacks on "+a+" for "+c)});this.pusher=c;this.name=
a;this.subscribed=!1;this.bind("pusher_internal:subscription_succeeded",function(a){b.onSubscriptionSucceeded(a)})};Pusher.Channel.prototype={init:function(){},disconnect:function(){this.subscribed=!1;this.emit("pusher_internal:disconnected")},onSubscriptionSucceeded:function(){this.subscribed=!0;this.emit("pusher:subscription_succeeded")},authorize:function(a,c,b){return b(!1,{})},trigger:function(a,c){return this.pusher.send_event(a,c,this.name)}};Pusher.Util.extend(Pusher.Channel.prototype,Pusher.EventsDispatcher.prototype);
Pusher.Channel.PrivateChannel={authorize:function(a,c,b){var g=this;return(new Pusher.Channel.Authorizer(this,Pusher.channel_auth_transport,c)).authorize(a,function(a,c){a||g.emit("pusher_internal:authorized",c);b(a,c)})}};Pusher.Channel.PresenceChannel={init:function(){this.members=new b(this)},onSubscriptionSucceeded:function(){this.subscribed=!0}};var b=function(a){var c=this,b=function(){this._members_map={};this.count=0;this.me=null};b.call(this);a.bind("pusher_internal:authorized",function(b){var e=
JSON.parse(b.channel_data);a.bind("pusher_internal:subscription_succeeded",function(b){c._members_map=b.presence.hash;c.count=b.presence.count;c.me=c.get(e.user_id);a.emit("pusher:subscription_succeeded",c)})});a.bind("pusher_internal:member_added",function(b){c.get(b.user_id)===null&&c.count++;c._members_map[b.user_id]=b.user_info;a.emit("pusher:member_added",c.get(b.user_id))});a.bind("pusher_internal:member_removed",function(b){var e=c.get(b.user_id);e&&(delete c._members_map[b.user_id],c.count--,
a.emit("pusher:member_removed",e))});a.bind("pusher_internal:disconnected",function(){b.call(c)})};b.prototype={each:function(a){for(var b in this._members_map)a(this.get(b))},get:function(a){return this._members_map.hasOwnProperty(a)?{id:a,info:this._members_map[a]}:null}};Pusher.Channel.factory=function(a,b){var e=new Pusher.Channel(a,b);a.indexOf("private-")===0?Pusher.Util.extend(e,Pusher.Channel.PrivateChannel):a.indexOf("presence-")===0&&(Pusher.Util.extend(e,Pusher.Channel.PrivateChannel),
Pusher.Util.extend(e,Pusher.Channel.PresenceChannel));e.init();return e}}).call(this);
(function(){Pusher.Channel.Authorizer=function(b,a,c){this.channel=b;this.type=a;this.authOptions=(c||{}).auth||{}};Pusher.Channel.Authorizer.prototype={composeQuery:function(b){var b="&socket_id="+encodeURIComponent(b)+"&channel_name="+encodeURIComponent(this.channel.name),a;for(a in this.authOptions.params)b+="&"+encodeURIComponent(a)+"="+encodeURIComponent(this.authOptions.params[a]);return b},authorize:function(b,a){return Pusher.authorizers[this.type].call(this,b,a)}};Pusher.auth_callbacks={};
Pusher.authorizers={ajax:function(b,a){var c;c=Pusher.XHR?new Pusher.XHR:window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");c.open("POST",Pusher.channel_auth_endpoint,!0);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var e in this.authOptions.headers)c.setRequestHeader(e,this.authOptions.headers[e]);c.onreadystatechange=function(){if(c.readyState==4)if(c.status==200){var b,e=!1;try{b=JSON.parse(c.responseText),e=!0}catch(h){a(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+
c.responseText)}e&&a(!1,b)}else Pusher.warn("Couldn't get auth info from your webapp",c.status),a(!0,c.status)};c.send(this.composeQuery(b));return c},jsonp:function(b,a){this.authOptions.headers!==void 0&&Pusher.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var c=document.createElement("script");Pusher.auth_callbacks[this.channel.name]=function(b){a(!1,b)};c.src=Pusher.channel_auth_endpoint+"?callback="+encodeURIComponent("Pusher.auth_callbacks['"+this.channel.name+
"']")+this.composeQuery(b);var e=document.getElementsByTagName("head")[0]||document.documentElement;e.insertBefore(c,e.firstChild)}}}).call(this);
var _require=function(){var b;b=document.addEventListener?function(a,b){a.addEventListener("load",b,!1)}:function(a,b){a.attachEvent("onreadystatechange",function(){(a.readyState=="loaded"||a.readyState=="complete")&&b()})};return function(a,c){function e(a,c){var c=c||function(){},e=document.getElementsByTagName("head")[0],h=document.createElement("script");h.setAttribute("src",a);h.setAttribute("type","text/javascript");h.setAttribute("async",!0);b(h,function(){var a=c;g++;f==g&&setTimeout(a,0)});
e.appendChild(h)}for(var g=0,f=a.length,h=0;h<f;h++)e(a[h],c)}}();
(function(){var b=(document.location.protocol=="http:"?Pusher.cdn_http:Pusher.cdn_https)+Pusher.VERSION,a=[];window.JSON===void 0&&a.push(b+"/json2"+Pusher.dependency_suffix+".js");if(window.WebSocket===void 0&&window.MozWebSocket===void 0)window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,a.push(b+"/flashfallback"+Pusher.dependency_suffix+".js");var c=function(){return window.WebSocket===void 0&&window.MozWebSocket===void 0?function(){window.WebSocket!==void 0&&window.MozWebSocket===void 0?(Pusher.Transport=
window.WebSocket,Pusher.TransportType="flash",window.WEB_SOCKET_SWF_LOCATION=b+"/WebSocketMain.swf",WebSocket.__addTask(function(){Pusher.ready()}),WebSocket.__initialize()):(Pusher.Transport=null,Pusher.TransportType="none",Pusher.ready())}:function(){Pusher.Transport=window.MozWebSocket!==void 0?window.MozWebSocket:window.WebSocket;Pusher.TransportType="native";Pusher.ready()}}(),e=function(a){var b=function(){document.body?a():setTimeout(b,0)};b()},g=function(){e(c)};a.length>0?_require(a,g):g()})();
var Hogan={};
(function(k,v){function o(a){return""+(null===a||void 0===a?"":a)}k.Template=function(a,b,f,d){this.r=a||this.r;this.c=f;this.options=d;this.text=b||"";this.buf=v?[]:""};k.Template.prototype={r:function(){return""},v:function(a){a=o(a);return y.test(a)?a.replace(w,"&amp;").replace(x,"&lt;").replace(l,"&gt;").replace(p,"&#39;").replace(m,"&quot;"):a},t:o,render:function(a,b,f){return this.ri([a],b||{},f)},ri:function(a,b,f){return this.r(a,b,f)},rp:function(a,b,f,d){a=f[a];if(!a)return"";this.c&&"string"==
typeof a&&(a=this.c.compile(a,this.options));return a.ri(b,f,d)},rs:function(a,b,f){var d=a[a.length-1];if(q(d))for(var c=0;c<d.length;c++)a.push(d[c]),f(a,b,this),a.pop();else f(a,b,this)},s:function(a,b,f,d,c,g,h){if(q(a)&&0===a.length)return!1;"function"==typeof a&&(a=this.ls(a,b,f,d,c,g,h));f=""===a||!!a;!d&&(f&&b)&&b.push("object"==typeof a?a:b[b.length-1]);return f},d:function(a,b,f,d){var c=a.split("."),g=this.f(c[0],b,f,d),h=null;if("."===a&&q(b[b.length-2]))return b[b.length-1];for(a=1;a<
c.length;a++)g&&"object"==typeof g&&c[a]in g?(h=g,g=g[c[a]]):g="";if(d&&!g)return!1;!d&&"function"==typeof g&&(b.push(h),g=this.lv(g,b,f),b.pop());return g},f:function(a,b,f,d){for(var c=!1,g=null,h=!1,s=b.length-1;0<=s;s--)if((g=b[s])&&"object"==typeof g&&a in g){c=g[a];h=!0;break}if(!h)return d?!1:"";!d&&"function"==typeof c&&(c=this.lv(c,b,f));return c},ho:function(a,b,f,d,c){var g=this.c,h=this.options;h.delimiters=c;d=a.call(b,d);d=null==d?""+d:d.toString();this.b(g.compile(d,h).render(b,f));
return!1},b:v?function(a){this.buf.push(a)}:function(a){this.buf+=a},fl:v?function(){var a=this.buf.join("");this.buf=[];return a}:function(){var a=this.buf;this.buf="";return a},ls:function(a,b,f,d,c,g,h){var b=b[b.length-1],s=null;if(!d&&this.c&&0<a.length)return this.ho(a,b,f,this.text.substring(c,g),h);s=a.call(b);if("function"==typeof s){if(d)return!0;if(this.c)return this.ho(s,b,f,this.text.substring(c,g),h)}return s},lv:function(a,b,f){b=b[b.length-1];a=a.call(b);return"function"==typeof a&&
(a=o(a.call(b)),this.c&&~a.indexOf("{{"))?this.c.compile(a,this.options).render(b,f):o(a)}};var w=/&/g,x=/</g,l=/>/g,p=/\'/g,m=/\"/g,y=/[&<>\"\']/,q=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}})("undefined"!==typeof exports?exports:Hogan);
(function(k){function v(c){"}"===c.n.substr(c.n.length-1)&&(c.n=c.n.substring(0,c.n.length-1))}function o(c){return c.trim?c.trim():c.replace(/^\s*|\s*$/g,"")}function w(c,a,h){if(a.charAt(h)!=c.charAt(0))return!1;for(var b=1,e=c.length;b<e;b++)if(a.charAt(h+b)!=c.charAt(b))return!1;return!0}function x(c,a,h,b){for(var a=[],e=null,d=null;0<c.length;){d=c.shift();if(!(e="#"==d.tag))if(!(e="^"==d.tag))a:{for(var e=d,f=b,n=0,k=f.length;n<k;n++)if(f[n].o==e.n){e.tag="#";e=!0;break a}e=void 0}if(e)h.push(d),
d.nodes=x(c,d.tag,h,b);else if("/"==d.tag){if(0===h.length)throw Error("Closing tag without opener: /"+d.n);e=h.pop();if(c=d.n!=e.n){a:{c=0;for(h=b.length;c<h;c++)if(b[c].c==d.n&&b[c].o==e.n){b=!0;break a}b=void 0}c=!b}if(c)throw Error("Nesting error: "+e.n+" vs. "+d.n);e.end=d.i;return a}a.push(d)}if(0<h.length)throw Error("missing closing tag: "+h.pop().n);return a}function l(c){return c.replace(f,"\\\\").replace(q,'\\"').replace(a,"\\n").replace(b,"\\r")}function p(c){return~c.indexOf(".")?"d":
"f"}function m(c){for(var a="",b=0,d=c.length;b<d;b++){var e=c[b].tag;if("#"==e)var e=c[b].nodes,f=p(c[b].n),k=c[b].i,n=c[b].end,o=c[b].otag+" "+c[b].ctag,e="if(_.s(_."+f+'("'+l(c[b].n)+'",c,p,1),c,p,0,'+k+","+n+',"'+o+'")){_.rs(c,p,function(c,p,_){'+m(e)+"});c.pop();}",a=a+e;else"^"==e?(e=c[b].nodes,e="if(!_.s(_."+p(c[b].n)+'("'+l(c[b].n)+'",c,p,1),c,p,1,0,0,"")){'+m(e)+"};",a+=e):"<"==e||">"==e?a+='_.b(_.rp("'+l(c[b].n)+'",c,p,"'+(c[b].indent||"")+'"));':"{"==e||"&"==e?(e="_.b(_.t(_."+p(c[b].n)+
'("'+l(c[b].n)+'",c,p,0)));',a+=e):"\n"==e?a+='_.b("\\n"'+(c.length-1==b?"":" + i")+");":"_v"==e?(e="_.b(_.v(_."+p(c[b].n)+'("'+l(c[b].n)+'",c,p,0)));',a+=e):void 0===e&&(e='"'+l(c[b])+'"',a+="_.b("+e+");")}return a}var y=/\S/,q=/\"/g,a=/\n/g,b=/\r/g,f=/\\/g,d={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};k.scan=function(a,b){function h(){0<r.length&&(j.push(new String(r)),r="")}function f(a,b){h();var c;if(c=a)a:{c=!0;for(var e=q;e<j.length;e++)if(c=j[e].tag&&d[j[e].tag]<d._v||!j[e].tag&&
null===j[e].match(y),!c){c=!1;break a}}if(c){c=q;for(var g;c<j.length;c++)if(!j[c].tag){if((g=j[c+1])&&">"==g.tag)g.indent=j[c].toString();j.splice(c,1)}}else b||j.push({tag:"\n"});m=!1;q=j.length}function e(a,c){var b="="+t,d=a.indexOf(b,c),e=o(a.substring(a.indexOf("=",c)+1,d)).split(" ");u=e[0];t=e[1];return d+b.length-1}var k=a.length,l=0,n=null,p=null,r="",j=[],m=!1,i=0,q=0,u="{{",t="}}";b&&(b=b.split(" "),u=b[0],t=b[1]);for(i=0;i<k;i++)0==l?w(u,a,i)?(--i,h(),l=1):"\n"==a.charAt(i)?f(m):r+=a.charAt(i):
1==l?(i+=u.length-1,n=(p=d[a.charAt(i+1)])?a.charAt(i+1):"_v","="==n?(i=e(a,i),l=0):(p&&i++,l=2),m=i):w(t,a,i)?(j.push({tag:n,n:o(r),otag:u,ctag:t,i:"/"==n?m-t.length:i+u.length}),r="",i+=t.length-1,l=0,"{"==n&&("}}"==t?i++:v(j[j.length-1]))):r+=a.charAt(i);f(m,!0);return j};k.generate=function(a,b,d){a='var _=this;_.b(i=i||"");'+m(a)+"return _.fl();";return d.asString?"function(c,p,i){"+a+";}":new k.Template(new Function("c","p","i",a),b,k,d)};k.parse=function(a,b,d){d=d||{};return x(a,"",[],d.sectionTags||
[])};k.cache={};k.compile=function(a,b){var b=b||{},d=a+"||"+!!b.asString,f=this.cache[d];if(f)return f;f=this.generate(this.parse(this.scan(a,b.delimiters),a,b),a,b);return this.cache[d]=f}})("undefined"!==typeof exports?exports:Hogan);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */

;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);
window.app = window.app || {}

window.app.twitterURLre = /((http:\/\/(twitter\.com\/.*\/status\/.*\/photo\/.*|twitter\.com\/.*\/statuses\/.*\/photo|pic\.twitter\.com\/.*|www\.twitter\.com\/.*\/statuses\/.*\/photo\/.*|mobile\.twitter\.com\/.*\/status\/.*\/photo\/.*|mobile\.twitter\.com\/.*\/statuses\/.*\/photo\/.*|twitter\.com\/.*\/status\/.*|twitter\.com\/.*\/statuses\/.*|www\.twitter\.com\/.*\/status\/.*|www\.twitter\.com\/.*\/statuses\/.*|mobile\.twitter\.com\/.*\/status\/.*|mobile\.twitter\.com\/.*\/statuses\/.*))|(https:\/\/(twitter\.com\/.*\/status\/.*\/photo\/.*|twitter\.com\/.*\/statuses\/.*\/photo\/.*|www\.twitter\.com\/.*\/status\/.*\/photo\/.*|www\.twitter\.com\/.*\/statuses\/.*\/photo\/.*|mobile\.twitter\.com\/.*\/status\/.*\/photo\/.*|mobile\.twitter\.com\/.*\/statuses\/.*\/photo\/.*|twitter\.com\/.*\/status\/.*|twitter\.com\/.*\/statuses\/.*|www\.twitter\.com\/.*\/status\/.*|www\.twitter\.com\/.*\/statuses\/.*|mobile\.twitter\.com\/.*\/status\/.*|mobile\.twitter\.com\/.*\/statuses\/.*)))/i
  
window.app.embedlyURLre = /((https?:\/\/(.*yfrog\..*\/.*|www\.flickr\.com\/photos\/.*|flic\.kr\/.*|twitpic\.com\/.*|www\.twitpic\.com\/.*|twitpic\.com\/photos\/.*|www\.twitpic\.com\/photos\/.*|.*imgur\.com\/.*|.*\.posterous\.com\/.*|post\.ly\/.*|twitgoo\.com\/.*|i.*\.photobucket\.com\/albums\/.*|s.*\.photobucket\.com\/albums\/.*|phodroid\.com\/.*\/.*\/.*|www\.mobypicture\.com\/user\/.*\/view\/.*|moby\.to\/.*|xkcd\.com\/.*|www\.xkcd\.com\/.*|imgs\.xkcd\.com\/.*|www\.asofterworld\.com\/index\.php\?id=.*|www\.asofterworld\.com\/.*\.jpg|asofterworld\.com\/.*\.jpg|www\.qwantz\.com\/index\.php\?comic=.*|23hq\.com\/.*\/photo\/.*|www\.23hq\.com\/.*\/photo\/.*|.*dribbble\.com\/shots\/.*|drbl\.in\/.*|.*\.smugmug\.com\/.*|.*\.smugmug\.com\/.*#.*|emberapp\.com\/.*\/images\/.*|emberapp\.com\/.*\/images\/.*\/sizes\/.*|emberapp\.com\/.*\/collections\/.*\/.*|emberapp\.com\/.*\/categories\/.*\/.*\/.*|embr\.it\/.*|picasaweb\.google\.com.*\/.*\/.*#.*|picasaweb\.google\.com.*\/lh\/photo\/.*|picasaweb\.google\.com.*\/.*\/.*|dailybooth\.com\/.*\/.*|brizzly\.com\/pic\/.*|pics\.brizzly\.com\/.*\.jpg|img\.ly\/.*|www\.tinypic\.com\/view\.php.*|tinypic\.com\/view\.php.*|www\.tinypic\.com\/player\.php.*|tinypic\.com\/player\.php.*|www\.tinypic\.com\/r\/.*\/.*|tinypic\.com\/r\/.*\/.*|.*\.tinypic\.com\/.*\.jpg|.*\.tinypic\.com\/.*\.png|meadd\.com\/.*\/.*|meadd\.com\/.*|.*\.deviantart\.com\/art\/.*|.*\.deviantart\.com\/gallery\/.*|.*\.deviantart\.com\/#\/.*|fav\.me\/.*|.*\.deviantart\.com|.*\.deviantart\.com\/gallery|.*\.deviantart\.com\/.*\/.*\.jpg|.*\.deviantart\.com\/.*\/.*\.gif|.*\.deviantart\.net\/.*\/.*\.jpg|.*\.deviantart\.net\/.*\/.*\.gif|www\.fotopedia\.com\/.*\/.*|fotopedia\.com\/.*\/.*|photozou\.jp\/photo\/show\/.*\/.*|photozou\.jp\/photo\/photo_only\/.*\/.*|instagr\.am\/p\/.*|instagram\.com\/p\/.*|skitch\.com\/.*\/.*\/.*|img\.skitch\.com\/.*|share\.ovi\.com\/media\/.*\/.*|www\.questionablecontent\.net\/|questionablecontent\.net\/|www\.questionablecontent\.net\/view\.php.*|questionablecontent\.net\/view\.php.*|questionablecontent\.net\/comics\/.*\.png|www\.questionablecontent\.net\/comics\/.*\.png|picplz\.com\/user\/.*\/pic\/.*\/|twitrpix\.com\/.*|.*\.twitrpix\.com\/.*|www\.someecards\.com\/.*\/.*|someecards\.com\/.*\/.*|some\.ly\/.*|www\.some\.ly\/.*|pikchur\.com\/.*|achewood\.com\/.*|www\.achewood\.com\/.*|achewood\.com\/index\.php.*|www\.achewood\.com\/index\.php.*|www\.whosay\.com\/content\/.*|www\.whosay\.com\/photos\/.*|www\.whosay\.com\/videos\/.*|say\.ly\/.*|ow\.ly\/i\/.*|color\.com\/s\/.*|bnter\.com\/convo\/.*|mlkshk\.com\/p\/.*|lockerz\.com\/s\/.*|soundcloud\.com\/.*|soundcloud\.com\/.*\/.*|soundcloud\.com\/.*\/sets\/.*|soundcloud\.com\/groups\/.*|snd\.sc\/.*|www\.last\.fm\/music\/.*|www\.last\.fm\/music\/+videos\/.*|www\.last\.fm\/music\/+images\/.*|www\.last\.fm\/music\/.*\/_\/.*|www\.last\.fm\/music\/.*\/.*|www\.mixcloud\.com\/.*\/.*\/|www\.radionomy\.com\/.*\/radio\/.*|radionomy\.com\/.*\/radio\/.*|www\.hark\.com\/clips\/.*|www\.rdio\.com\/#\/artist\/.*\/album\/.*|www\.rdio\.com\/artist\/.*\/album\/.*|www\.zero-inch\.com\/.*|.*\.bandcamp\.com\/|.*\.bandcamp\.com\/track\/.*|.*\.bandcamp\.com\/album\/.*|freemusicarchive\.org\/music\/.*|www\.freemusicarchive\.org\/music\/.*|freemusicarchive\.org\/curator\/.*|www\.freemusicarchive\.org\/curator\/.*|www\.npr\.org\/.*\/.*\/.*\/.*\/.*|www\.npr\.org\/.*\/.*\/.*\/.*\/.*\/.*|www\.npr\.org\/.*\/.*\/.*\/.*\/.*\/.*\/.*|www\.npr\.org\/templates\/story\/story\.php.*|huffduffer\.com\/.*\/.*|www\.audioboo\.fm\/boos\/.*|audioboo\.fm\/boos\/.*|boo\.fm\/b.*|www\.xiami\.com\/song\/.*|xiami\.com\/song\/.*|www\.saynow\.com\/playMsg\.html.*|www\.saynow\.com\/playMsg\.html.*|grooveshark\.com\/s\/.*|listen\.grooveshark\.com\/s\/.*|radioreddit\.com\/songs.*|www\.radioreddit\.com\/songs.*|radioreddit\.com\/\?q=songs.*|www\.radioreddit\.com\/\?q=songs.*|www\.gogoyoko\.com\/song\/.*|.*amazon\..*\/gp\/product\/.*|.*amazon\..*\/.*\/dp\/.*|.*amazon\..*\/dp\/.*|.*amazon\..*\/o\/ASIN\/.*|.*amazon\..*\/gp\/offer-listing\/.*|.*amazon\..*\/.*\/ASIN\/.*|.*amazon\..*\/gp\/product\/images\/.*|.*amazon\..*\/gp\/aw\/d\/.*|www\.amzn\.com\/.*|amzn\.com\/.*|www\.shopstyle\.com\/browse.*|www\.shopstyle\.com\/action\/apiVisitRetailer.*|api\.shopstyle\.com\/action\/apiVisitRetailer.*|www\.shopstyle\.com\/action\/viewLook.*|gist\.github\.com\/.*|twitter\.com\/.*\/status\/.*|twitter\.com\/.*\/statuses\/.*|www\.twitter\.com\/.*\/status\/.*|www\.twitter\.com\/.*\/statuses\/.*|mobile\.twitter\.com\/.*\/status\/.*|mobile\.twitter\.com\/.*\/statuses\/.*|www\.crunchbase\.com\/.*\/.*|crunchbase\.com\/.*\/.*|www\.slideshare\.net\/.*\/.*|www\.slideshare\.net\/mobile\/.*\/.*|slidesha\.re\/.*|scribd\.com\/doc\/.*|www\.scribd\.com\/doc\/.*|scribd\.com\/mobile\/documents\/.*|www\.scribd\.com\/mobile\/documents\/.*|screenr\.com\/.*|polldaddy\.com\/community\/poll\/.*|polldaddy\.com\/poll\/.*|answers\.polldaddy\.com\/poll\/.*|www\.5min\.com\/Video\/.*|www\.howcast\.com\/videos\/.*|www\.screencast\.com\/.*\/media\/.*|screencast\.com\/.*\/media\/.*|www\.screencast\.com\/t\/.*|screencast\.com\/t\/.*|issuu\.com\/.*\/docs\/.*|www\.kickstarter\.com\/projects\/.*\/.*|www\.scrapblog\.com\/viewer\/viewer\.aspx.*|ping\.fm\/p\/.*|chart\.ly\/symbols\/.*|chart\.ly\/.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*\.craigslist\.org\/.*\/.*|my\.opera\.com\/.*\/albums\/show\.dml\?id=.*|my\.opera\.com\/.*\/albums\/showpic\.dml\?album=.*&picture=.*|tumblr\.com\/.*|.*\.tumblr\.com\/post\/.*|www\.polleverywhere\.com\/polls\/.*|www\.polleverywhere\.com\/multiple_choice_polls\/.*|www\.polleverywhere\.com\/free_text_polls\/.*|www\.quantcast\.com\/wd:.*|www\.quantcast\.com\/.*|siteanalytics\.compete\.com\/.*|statsheet\.com\/statplot\/charts\/.*\/.*\/.*\/.*|statsheet\.com\/statplot\/charts\/e\/.*|statsheet\.com\/.*\/teams\/.*\/.*|statsheet\.com\/tools\/chartlets\?chart=.*|.*\.status\.net\/notice\/.*|identi\.ca\/notice\/.*|brainbird\.net\/notice\/.*|shitmydadsays\.com\/notice\/.*|www\.studivz\.net\/Profile\/.*|www\.studivz\.net\/l\/.*|www\.studivz\.net\/Groups\/Overview\/.*|www\.studivz\.net\/Gadgets\/Info\/.*|www\.studivz\.net\/Gadgets\/Install\/.*|www\.studivz\.net\/.*|www\.meinvz\.net\/Profile\/.*|www\.meinvz\.net\/l\/.*|www\.meinvz\.net\/Groups\/Overview\/.*|www\.meinvz\.net\/Gadgets\/Info\/.*|www\.meinvz\.net\/Gadgets\/Install\/.*|www\.meinvz\.net\/.*|www\.schuelervz\.net\/Profile\/.*|www\.schuelervz\.net\/l\/.*|www\.schuelervz\.net\/Groups\/Overview\/.*|www\.schuelervz\.net\/Gadgets\/Info\/.*|www\.schuelervz\.net\/Gadgets\/Install\/.*|www\.schuelervz\.net\/.*|myloc\.me\/.*|pastebin\.com\/.*|pastie\.org\/.*|www\.pastie\.org\/.*|redux\.com\/stream\/item\/.*\/.*|redux\.com\/f\/.*\/.*|www\.redux\.com\/stream\/item\/.*\/.*|www\.redux\.com\/f\/.*\/.*|cl\.ly\/.*|cl\.ly\/.*\/content|speakerdeck\.com\/u\/.*\/p\/.*|www\.kiva\.org\/lend\/.*|www\.timetoast\.com\/timelines\/.*|storify\.com\/.*\/.*|.*meetup\.com\/.*|meetu\.ps\/.*|www\.dailymile\.com\/people\/.*\/entries\/.*|.*\.kinomap\.com\/.*|www\.metacdn\.com\/api\/users\/.*\/content\/.*|www\.metacdn\.com\/api\/users\/.*\/media\/.*|prezi\.com\/.*\/.*|.*\.uservoice\.com\/.*\/suggestions\/.*|formspring\.me\/.*|www\.formspring\.me\/.*|formspring\.me\/.*\/q\/.*|www\.formspring\.me\/.*\/q\/.*|twitlonger\.com\/show\/.*|www\.twitlonger\.com\/show\/.*|tl\.gd\/.*|www\.qwiki\.com\/q\/.*|crocodoc\.com\/.*|.*\.crocodoc\.com\/.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|.*justin\.tv\/.*|.*justin\.tv\/.*\/b\/.*|.*justin\.tv\/.*\/w\/.*|www\.ustream\.tv\/recorded\/.*|www\.ustream\.tv\/channel\/.*|www\.ustream\.tv\/.*|qik\.com\/video\/.*|qik\.com\/.*|qik\.ly\/.*|.*revision3\.com\/.*|.*\.dailymotion\.com\/video\/.*|.*\.dailymotion\.com\/.*\/video\/.*|collegehumor\.com\/video:.*|collegehumor\.com\/video\/.*|www\.collegehumor\.com\/video:.*|www\.collegehumor\.com\/video\/.*|.*twitvid\.com\/.*|www\.break\.com\/.*\/.*|vids\.myspace\.com\/index\.cfm\?fuseaction=vids\.individual&videoid.*|www\.myspace\.com\/index\.cfm\?fuseaction=.*&videoid.*|www\.metacafe\.com\/watch\/.*|www\.metacafe\.com\/w\/.*|blip\.tv\/file\/.*|.*\.blip\.tv\/file\/.*|video\.google\.com\/videoplay\?.*|.*revver\.com\/video\/.*|video\.yahoo\.com\/watch\/.*\/.*|video\.yahoo\.com\/network\/.*|.*viddler\.com\/explore\/.*\/videos\/.*|liveleak\.com\/view\?.*|www\.liveleak\.com\/view\?.*|animoto\.com\/play\/.*|dotsub\.com\/view\/.*|www\.overstream\.net\/view\.php\?oid=.*|www\.livestream\.com\/.*|www\.worldstarhiphop\.com\/videos\/video.*\.php\?v=.*|worldstarhiphop\.com\/videos\/video.*\.php\?v=.*|teachertube\.com\/viewVideo\.php.*|www\.teachertube\.com\/viewVideo\.php.*|www1\.teachertube\.com\/viewVideo\.php.*|www2\.teachertube\.com\/viewVideo\.php.*|bambuser\.com\/v\/.*|bambuser\.com\/channel\/.*|bambuser\.com\/channel\/.*\/broadcast\/.*|www\.schooltube\.com\/video\/.*\/.*|bigthink\.com\/ideas\/.*|bigthink\.com\/series\/.*|sendables\.jibjab\.com\/view\/.*|sendables\.jibjab\.com\/originals\/.*|www\.xtranormal\.com\/watch\/.*|socialcam\.com\/v\/.*|www\.socialcam\.com\/v\/.*|dipdive\.com\/media\/.*|dipdive\.com\/member\/.*\/media\/.*|dipdive\.com\/v\/.*|.*\.dipdive\.com\/media\/.*|.*\.dipdive\.com\/v\/.*|v\.youku\.com\/v_show\/.*\.html|v\.youku\.com\/v_playlist\/.*\.html|www\.snotr\.com\/video\/.*|snotr\.com\/video\/.*|video\.jardenberg\.se\/.*|www\.clipfish\.de\/.*\/.*\/video\/.*|www\.myvideo\.de\/watch\/.*|www\.whitehouse\.gov\/photos-and-video\/video\/.*|www\.whitehouse\.gov\/video\/.*|wh\.gov\/photos-and-video\/video\/.*|wh\.gov\/video\/.*|www\.hulu\.com\/watch.*|www\.hulu\.com\/w\/.*|hulu\.com\/watch.*|hulu\.com\/w\/.*|.*crackle\.com\/c\/.*|www\.fancast\.com\/.*\/videos|www\.funnyordie\.com\/videos\/.*|www\.funnyordie\.com\/m\/.*|funnyordie\.com\/videos\/.*|funnyordie\.com\/m\/.*|www\.vimeo\.com\/groups\/.*\/videos\/.*|www\.vimeo\.com\/.*|vimeo\.com\/groups\/.*\/videos\/.*|vimeo\.com\/.*|vimeo\.com\/m\/#\/.*|www\.ted\.com\/talks\/.*\.html.*|www\.ted\.com\/talks\/lang\/.*\/.*\.html.*|www\.ted\.com\/index\.php\/talks\/.*\.html.*|www\.ted\.com\/index\.php\/talks\/lang\/.*\/.*\.html.*|.*nfb\.ca\/film\/.*|www\.thedailyshow\.com\/watch\/.*|www\.thedailyshow\.com\/full-episodes\/.*|www\.thedailyshow\.com\/collection\/.*\/.*\/.*|movies\.yahoo\.com\/movie\/.*\/video\/.*|movies\.yahoo\.com\/movie\/.*\/trailer|movies\.yahoo\.com\/movie\/.*\/video|www\.colbertnation\.com\/the-colbert-report-collections\/.*|www\.colbertnation\.com\/full-episodes\/.*|www\.colbertnation\.com\/the-colbert-report-videos\/.*|www\.comedycentral\.com\/videos\/index\.jhtml\?.*|www\.theonion\.com\/video\/.*|theonion\.com\/video\/.*|wordpress\.tv\/.*\/.*\/.*\/.*\/|www\.traileraddict\.com\/trailer\/.*|www\.traileraddict\.com\/clip\/.*|www\.traileraddict\.com\/poster\/.*|www\.escapistmagazine\.com\/videos\/.*|www\.trailerspy\.com\/trailer\/.*\/.*|www\.trailerspy\.com\/trailer\/.*|www\.trailerspy\.com\/view_video\.php.*|www\.atom\.com\/.*\/.*\/|fora\.tv\/.*\/.*\/.*\/.*|www\.spike\.com\/video\/.*|www\.gametrailers\.com\/video\/.*|gametrailers\.com\/video\/.*|www\.koldcast\.tv\/video\/.*|www\.koldcast\.tv\/#video:.*|techcrunch\.tv\/watch.*|techcrunch\.tv\/.*\/watch.*|mixergy\.com\/.*|video\.pbs\.org\/video\/.*|www\.zapiks\.com\/.*|tv\.digg\.com\/diggnation\/.*|tv\.digg\.com\/diggreel\/.*|tv\.digg\.com\/diggdialogg\/.*|www\.trutv\.com\/video\/.*|www\.nzonscreen\.com\/title\/.*|nzonscreen\.com\/title\/.*|app\.wistia\.com\/embed\/medias\/.*|hungrynation\.tv\/.*\/episode\/.*|www\.hungrynation\.tv\/.*\/episode\/.*|hungrynation\.tv\/episode\/.*|www\.hungrynation\.tv\/episode\/.*|indymogul\.com\/.*\/episode\/.*|www\.indymogul\.com\/.*\/episode\/.*|indymogul\.com\/episode\/.*|www\.indymogul\.com\/episode\/.*|channelfrederator\.com\/.*\/episode\/.*|www\.channelfrederator\.com\/.*\/episode\/.*|channelfrederator\.com\/episode\/.*|www\.channelfrederator\.com\/episode\/.*|tmiweekly\.com\/.*\/episode\/.*|www\.tmiweekly\.com\/.*\/episode\/.*|tmiweekly\.com\/episode\/.*|www\.tmiweekly\.com\/episode\/.*|99dollarmusicvideos\.com\/.*\/episode\/.*|www\.99dollarmusicvideos\.com\/.*\/episode\/.*|99dollarmusicvideos\.com\/episode\/.*|www\.99dollarmusicvideos\.com\/episode\/.*|ultrakawaii\.com\/.*\/episode\/.*|www\.ultrakawaii\.com\/.*\/episode\/.*|ultrakawaii\.com\/episode\/.*|www\.ultrakawaii\.com\/episode\/.*|barelypolitical\.com\/.*\/episode\/.*|www\.barelypolitical\.com\/.*\/episode\/.*|barelypolitical\.com\/episode\/.*|www\.barelypolitical\.com\/episode\/.*|barelydigital\.com\/.*\/episode\/.*|www\.barelydigital\.com\/.*\/episode\/.*|barelydigital\.com\/episode\/.*|www\.barelydigital\.com\/episode\/.*|threadbanger\.com\/.*\/episode\/.*|www\.threadbanger\.com\/.*\/episode\/.*|threadbanger\.com\/episode\/.*|www\.threadbanger\.com\/episode\/.*|vodcars\.com\/.*\/episode\/.*|www\.vodcars\.com\/.*\/episode\/.*|vodcars\.com\/episode\/.*|www\.vodcars\.com\/episode\/.*|confreaks\.net\/videos\/.*|www\.confreaks\.net\/videos\/.*|video\.allthingsd\.com\/video\/.*|videos\.nymag\.com\/.*|aniboom\.com\/animation-video\/.*|www\.aniboom\.com\/animation-video\/.*|clipshack\.com\/Clip\.aspx\?.*|www\.clipshack\.com\/Clip\.aspx\?.*|grindtv\.com\/.*\/video\/.*|www\.grindtv\.com\/.*\/video\/.*|ifood\.tv\/recipe\/.*|ifood\.tv\/video\/.*|ifood\.tv\/channel\/user\/.*|www\.ifood\.tv\/recipe\/.*|www\.ifood\.tv\/video\/.*|www\.ifood\.tv\/channel\/user\/.*|logotv\.com\/video\/.*|www\.logotv\.com\/video\/.*|lonelyplanet\.com\/Clip\.aspx\?.*|www\.lonelyplanet\.com\/Clip\.aspx\?.*|streetfire\.net\/video\/.*\.htm.*|www\.streetfire\.net\/video\/.*\.htm.*|trooptube\.tv\/videos\/.*|www\.trooptube\.tv\/videos\/.*|sciencestage\.com\/v\/.*\.html|sciencestage\.com\/a\/.*\.html|www\.sciencestage\.com\/v\/.*\.html|www\.sciencestage\.com\/a\/.*\.html|www\.godtube\.com\/featured\/video\/.*|godtube\.com\/featured\/video\/.*|www\.godtube\.com\/watch\/.*|godtube\.com\/watch\/.*|www\.tangle\.com\/view_video.*|mediamatters\.org\/mmtv\/.*|www\.clikthrough\.com\/theater\/video\/.*|espn\.go\.com\/video\/clip.*|espn\.go\.com\/.*\/story.*|abcnews\.com\/.*\/video\/.*|abcnews\.com\/video\/playerIndex.*|washingtonpost\.com\/wp-dyn\/.*\/video\/.*\/.*\/.*\/.*|www\.washingtonpost\.com\/wp-dyn\/.*\/video\/.*\/.*\/.*\/.*|www\.boston\.com\/video.*|boston\.com\/video.*|www\.facebook\.com\/photo\.php.*|www\.facebook\.com\/video\/video\.php.*|www\.facebook\.com\/v\/.*|cnbc\.com\/id\/.*\?.*video.*|www\.cnbc\.com\/id\/.*\?.*video.*|cnbc\.com\/id\/.*\/play\/1\/video\/.*|www\.cnbc\.com\/id\/.*\/play\/1\/video\/.*|cbsnews\.com\/video\/watch\/.*|www\.google\.com\/buzz\/.*\/.*\/.*|www\.google\.com\/buzz\/.*|www\.google\.com\/profiles\/.*|google\.com\/buzz\/.*\/.*\/.*|google\.com\/buzz\/.*|google\.com\/profiles\/.*|www\.cnn\.com\/video\/.*|edition\.cnn\.com\/video\/.*|money\.cnn\.com\/video\/.*|today\.msnbc\.msn\.com\/id\/.*\/vp\/.*|www\.msnbc\.msn\.com\/id\/.*\/vp\/.*|www\.msnbc\.msn\.com\/id\/.*\/ns\/.*|today\.msnbc\.msn\.com\/id\/.*\/ns\/.*|multimedia\.foxsports\.com\/m\/video\/.*\/.*|msn\.foxsports\.com\/video.*|www\.globalpost\.com\/video\/.*|www\.globalpost\.com\/dispatch\/.*|guardian\.co\.uk\/.*\/video\/.*\/.*\/.*\/.*|www\.guardian\.co\.uk\/.*\/video\/.*\/.*\/.*\/.*|bravotv\.com\/.*\/.*\/videos\/.*|www\.bravotv\.com\/.*\/.*\/videos\/.*|video\.nationalgeographic\.com\/.*\/.*\/.*\.html|dsc\.discovery\.com\/videos\/.*|animal\.discovery\.com\/videos\/.*|health\.discovery\.com\/videos\/.*|investigation\.discovery\.com\/videos\/.*|military\.discovery\.com\/videos\/.*|planetgreen\.discovery\.com\/videos\/.*|science\.discovery\.com\/videos\/.*|tlc\.discovery\.com\/videos\/.*|video\.forbes\.com\/fvn\/.*|vine\.co\/v\/.*|www\.vine\.co\/v\/.*)))/i
;
/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2012, John Dyer (http://j.hn)
* License: MIT
*
*/
var mejs=mejs||{};mejs.version="2.10.3";mejs.meIndex=0;
mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",g,f=document.getElementsByTagName("script"),h=f.length,l=a.length;b<h;b++){g=f[b].src;for(c=0;c<l;c++){e=a[c];if(g.indexOf(e)>
-1){d=g.substring(0,g.indexOf(e));break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;var e=Math.floor(a/3600)%24,g=Math.floor(a/60)%60,f=Math.floor(a%60);a=Math.floor((a%1*d).toFixed(3));return(b||e>0?(e<10?"0"+e:e)+":":"")+(g<10?"0"+g:g)+":"+(f<10?"0"+f:f)+(c?":"+(a<10?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;a=a.split(":");b=parseInt(a[0],
10);var e=parseInt(a[1],10),g=parseInt(a[2],10),f=0,h=0;if(c)f=parseInt(a[3])/d;return h=b*3600+e*60+g+f},convertSMPTEtoSeconds:function(a){if(typeof a!="string")return false;a=a.replace(",",".");var b=0,c=a.indexOf(".")!=-1?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++){d=1;if(e>0)d=Math.pow(60,e);b+=Number(a[e])*d}return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);if(b&&b.nodeName=="OBJECT")if(mejs.MediaFeatures.isIE){b.style.display=
"none";(function(){b.readyState==4?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)})()}else b.parentNode.removeChild(b)},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)if(typeof a[b]=="function")a[b]=null;a.parentNode.removeChild(a)}}};
mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],g;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&
!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(g=new ActiveXObject(c))e=d(g)}catch(f){}return e}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,g,f){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[g]+=f;e[g]-=f};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});
mejs.MediaFeatures={init:function(){var a=this,b=document,c=mejs.PluginDetector.nav,d=mejs.PluginDetector.ua.toLowerCase(),e,g=["source","track","audio","video"];a.isiPad=d.match(/ipad/i)!==null;a.isiPhone=d.match(/iphone/i)!==null;a.isiOS=a.isiPhone||a.isiPad;a.isAndroid=d.match(/android/i)!==null;a.isBustedAndroid=d.match(/android 2\.[12]/)!==null;a.isIE=c.appName.toLowerCase().indexOf("microsoft")!=-1;a.isChrome=d.match(/chrome/gi)!==null;a.isFirefox=d.match(/firefox/gi)!==null;a.isWebkit=d.match(/webkit/gi)!==
null;a.isGecko=d.match(/gecko/gi)!==null&&!a.isWebkit;a.isOpera=d.match(/opera/gi)!==null;a.hasTouch="ontouchstart"in window;a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(c=0;c<g.length;c++)e=document.createElement(g[c]);a.supportsMediaTag=typeof e.canPlayType!=="undefined"||a.isBustedAndroid;a.hasSemiNativeFullScreen=typeof e.webkitEnterFullscreen!=="undefined";a.hasWebkitNativeFullScreen=typeof e.webkitRequestFullScreen!=="undefined";
a.hasMozNativeFullScreen=typeof e.mozRequestFullScreen!=="undefined";a.hasTrueNativeFullScreen=a.hasWebkitNativeFullScreen||a.hasMozNativeFullScreen;a.nativeFullScreenEnabled=a.hasTrueNativeFullScreen;if(a.hasMozNativeFullScreen)a.nativeFullScreenEnabled=e.mozFullScreenEnabled;if(this.isChrome)a.hasSemiNativeFullScreen=false;if(a.hasTrueNativeFullScreen){a.fullScreenEventName=a.hasWebkitNativeFullScreen?"webkitfullscreenchange":"mozfullscreenchange";a.isFullScreen=function(){if(e.mozRequestFullScreen)return b.mozFullScreen;
else if(e.webkitRequestFullScreen)return b.webkitIsFullScreen};a.requestFullScreen=function(f){if(a.hasWebkitNativeFullScreen)f.webkitRequestFullScreen();else a.hasMozNativeFullScreen&&f.mozRequestFullScreen()};a.cancelFullScreen=function(){if(a.hasWebkitNativeFullScreen)document.webkitCancelFullScreen();else a.hasMozNativeFullScreen&&document.mozCancelFullScreen()}}if(a.hasSemiNativeFullScreen&&d.match(/mac os x 10_5/i)){a.hasNativeFullScreen=false;a.hasSemiNativeFullScreen=false}}};mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if(typeof a=="string")this.src=a;else{var c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.src=c.src;break}}}},setVideoSize:function(a,b){this.width=a;this.height=b}};
mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={};this.attributes={}};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.playVideo():this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginType!="youtube"&&this.pluginApi.loadMedia();this.paused=
false}},pause:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia();this.paused=true}},stop:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.stopVideo():this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return true}return false},
positionFullscreenButton:function(a,b,c){this.pluginApi!=null&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(a,b,c)},hideFullscreenButton:function(){this.pluginApi!=null&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
this.src=mejs.Utility.absolutizeUrl(a);break}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.setVolume(a*100):this.pluginApi.setVolume(a);this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"){a?this.pluginApi.mute():this.pluginApi.unMute();this.muted=a;this.dispatchEvent("volumechange")}else this.pluginApi.setMuted(a);
this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(true)},exitFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&
this.setFullscreen(false)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(i=0;i<c.length;i++)if(c[i]===b){this.events[a].splice(i,1);return true}return false},dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}},hasAttribute:function(a){return a in
this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){if(this.hasAttribute(a))return this.attributes[a];return""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id)}};
mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case "flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case "silverlight":b.pluginElement=document.getElementById(b.id);b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,
c)}},fireEvent:function(a,b,c){var d,e;a=this.pluginMediaElements[a];b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:false,silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,
success:function(){},error:function(){}};mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};
mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase(),g=e==="audio"||e==="video",f=g?d.getAttribute("src"):d.getAttribute("href");e=d.getAttribute("poster");var h=d.getAttribute("autoplay"),l=d.getAttribute("preload"),j=d.getAttribute("controls"),k;for(k in b)c[k]=b[k];f=typeof f=="undefined"||f===null||f==""?null:f;e=typeof e=="undefined"||e===null?"":e;l=typeof l=="undefined"||l===null||l==="false"?
"none":l;h=!(typeof h=="undefined"||h===null||h==="false");j=!(typeof j=="undefined"||j===null||j==="false");k=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,g,f);k.url=k.url!==null?mejs.Utility.absolutizeUrl(k.url):"";if(k.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){d.src=k.url;d.addEventListener("click",function(){d.play()},false)}return this.updateNative(k,c,h,l)}else if(k.method!=="")return this.createPlugin(k,c,e,h,l,j);else{this.createErrorMessage(k,c,e);return this}},
determinePlayback:function(a,b,c,d,e){var g=[],f,h,l,j={method:"",url:"",htmlMediaElement:a,isVideo:a.tagName.toLowerCase()!="audio"},k;if(typeof b.type!="undefined"&&b.type!=="")if(typeof b.type=="string")g.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)g.push({type:b.type[f],url:e});else if(e!==null){l=this.formatType(e,a.getAttribute("type"));g.push({type:l,url:e})}else for(f=0;f<a.childNodes.length;f++){h=a.childNodes[f];if(h.nodeType==1&&h.tagName.toLowerCase()=="source"){e=h.getAttribute("src");
l=this.formatType(e,h.getAttribute("type"));h=h.getAttribute("media");if(!h||!window.matchMedia||window.matchMedia&&window.matchMedia(h).matches)g.push({type:l,url:e})}}if(!d&&g.length>0&&g[0].url!==null&&this.getTypeFromFile(g[0].url).indexOf("audio")>-1)j.isVideo=false;if(mejs.MediaFeatures.isBustedAndroid)a.canPlayType=function(m){return m.match(/video\/(mp4|m4v)/gi)!==null?"maybe":""};if(c&&(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="native")){if(!d){f=document.createElement(j.isVideo?
"video":"audio");a.parentNode.insertBefore(f,a);a.style.display="none";j.htmlMediaElement=a=f}for(f=0;f<g.length;f++)if(a.canPlayType(g[f].type).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""){j.method="native";j.url=g[f].url;break}if(j.method==="native"){if(j.url!==null)a.src=j.url;if(b.mode!=="auto_plugin")return j}}if(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="shim")for(f=0;f<g.length;f++){l=g[f].type;for(a=0;a<b.plugins.length;a++){e=b.plugins[a];
h=mejs.plugins[e];for(c=0;c<h.length;c++){k=h[c];if(k.version==null||mejs.PluginDetector.hasPluginVersion(e,k.version))for(d=0;d<k.types.length;d++)if(l==k.types[d]){j.method=e;j.url=g[f].url;return j}}}}if(b.mode==="auto_plugin"&&j.method==="native")return j;if(j.method===""&&g.length>0)j.url=g[0].url;return j},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];a=a.substring(a.lastIndexOf(".")+
1);return(/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case "mp4":case "m4v":return"mp4";case "webm":case "webma":case "webmv":return"webm";case "ogg":case "oga":case "ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px";e.style.height=d.height+"px"}catch(g){}e.innerHTML=
c!==""?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>";d.parentNode.insertBefore(e,d);d.style.display="none";b.error(d)},createPlugin:function(a,b,c,d,e,g){c=a.htmlMediaElement;var f=1,h=1,l="me_"+a.method+"_"+mejs.meIndex++,j=new mejs.PluginMediaElement(l,a.method,a.url),k=document.createElement("div"),m;j.tagName=c.tagName;for(m=0;m<c.attributes.length;m++){var n=c.attributes[m];n.specified==true&&j.setAttribute(n.name,
n.value)}for(m=c.parentNode;m!==null&&m.tagName.toLowerCase()!="body";){if(m.parentNode.tagName.toLowerCase()=="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(a.isVideo){f=b.videoWidth>0?b.videoWidth:c.getAttribute("width")!==null?c.getAttribute("width"):b.defaultVideoWidth;h=b.videoHeight>0?b.videoHeight:c.getAttribute("height")!==null?c.getAttribute("height"):b.defaultVideoHeight;f=mejs.Utility.encodeUrl(f);h=mejs.Utility.encodeUrl(h)}else if(b.enablePluginDebug){f=
320;h=240}j.success=b.success;mejs.MediaPluginBridge.registerPluginElement(l,j,c);k.className="me-plugin";k.id=l+"_container";a.isVideo?c.parentNode.insertBefore(k,c):document.body.insertBefore(k,document.body.childNodes[0]);d=["id="+l,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+f,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+h];if(a.url!==null)a.method=="flash"?d.push("file="+mejs.Utility.encodeUrl(a.url)):
d.push("file="+a.url);b.enablePluginDebug&&d.push("debug=true");b.enablePluginSmoothing&&d.push("smoothing=true");g&&d.push("controls=true");if(b.pluginVars)d=d.concat(b.pluginVars);switch(a.method){case "silverlight":k.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+l+'" name="'+l+'" width="'+f+'" height="'+h+'"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+
b.pluginPath+b.silverlightName+'" /></object>';break;case "flash":if(mejs.MediaFeatures.isIE){a=document.createElement("div");k.appendChild(a);a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+l+'" width="'+f+'" height="'+h+'"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else k.innerHTML=
'<embed id="'+l+'" name="'+l+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+f+'" height="'+h+'"></embed>';break;case "youtube":b=a.url.substr(a.url.lastIndexOf("=")+1);youtubeSettings={container:k,containerId:k.id,pluginMediaElement:j,pluginId:l,videoId:b,
height:h,width:f};mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case "vimeo":j.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1);k.innerHTML='<iframe src="http://player.vimeo.com/video/'+j.vimeoid+'?portrait=0&byline=0&title=0" width="'+f+'" height="'+h+'" frameborder="0"></iframe>'}c.style.display="none";return j},updateNative:function(a,b){var c=a.htmlMediaElement,d;for(d in mejs.HtmlMediaElement)c[d]=
mejs.HtmlMediaElement[d];b.success(c,c);return c}};
mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="http://www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded)this.createIframe(a);else{this.loadIframeApi();this.iframeQueue.push(a)}},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,
{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c;mejs.MediaPluginBridge.initPlugin(a.pluginId);setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,c,b)}}})},createEvent:function(a,b,c){c={type:c,target:b};if(a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime();b.duration=c.duration=a.getDuration();c.paused=b.paused;
c.ended=b.ended;c.muted=a.isMuted();c.volume=a.getVolume()/100;c.bytesTotal=a.getVideoBytesTotal();c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=true;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=
a;var b,c="http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(mejs.MediaFeatures.isIE){b=document.createElement("div");a.container.appendChild(b);b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'"><param name="movie" value="'+c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else a.container.innerHTML=
'<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; "><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c;mejs.MediaPluginBridge.initPlugin(a);c.cueVideoById(b.videoId);a=b.containerId+"_callback";window[a]=function(e){mejs.YouTubeApi.handleStateChange(e,
c,d)};c.addEventListener("onStateChange",a);setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250)},handleStateChange:function(a,b,c){switch(a){case -1:c.paused=true;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"play");mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;mejs.YouTubeApi.createEvent(b,
c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}};function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}window.mejs=mejs;window.MediaElement=mejs.MediaElement;
(function(a,b,c){var d={locale:{strings:{}},methods:{}};d.locale.getLanguage=function(){return{language:navigator.language}};d.locale.INIT_LANGUAGE=d.locale.getLanguage();d.methods.checkPlain=function(e){var g,f,h={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};e=String(e);for(g in h)if(h.hasOwnProperty(g)){f=RegExp(g,"g");e=e.replace(f,h[g])}return e};d.methods.formatString=function(e,g){for(var f in g){switch(f.charAt(0)){case "@":g[f]=d.methods.checkPlain(g[f]);break;case "!":break;default:g[f]=
'<em class="placeholder">'+d.methods.checkPlain(g[f])+"</em>"}e=e.replace(f,g[f])}return e};d.methods.t=function(e,g,f){if(d.locale.strings&&d.locale.strings[f.context]&&d.locale.strings[f.context][e])e=d.locale.strings[f.context][e];if(g)e=d.methods.formatString(e,g);return e};d.t=function(e,g,f){if(typeof e==="string"&&e.length>0){var h=d.locale.getLanguage();f=f||{context:h.language};return d.methods.t(e,g,f)}else throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."};
};c.i18n=d})(jQuery,document,mejs);(function(a){a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schlie\u00dfen"}})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2012, John Dyer (http://j.hn/)
 * License: MIT
 *
 */if(typeof jQuery!="undefined")mejs.$=jQuery;else if(typeof ender!="undefined")mejs.$=ender;
(function(f){mejs.MepDefaults={poster:"",defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return a.duration*0.05},defaultSeekForwardInterval:function(a){return a.duration*0.05},audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,clickToPlayPause:true,
iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?b.play():b.pause()}},{keys:[38],action:function(a,b){b.setVolume(Math.min(b.volume+0.1,1))}},{keys:[40],action:function(a,b){b.setVolume(Math.max(b.volume-0.1,0))}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&
b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){if(typeof a.enterFullScreen!="undefined")a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}}]};
mejs.mepIndex=0;mejs.players=[];mejs.MediaElementPlayer=function(a,b){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,b);this.$media=this.$node=f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else this.node.player=this;if(typeof b=="undefined")b=this.$node.data("mejsoptions");this.options=f.extend({},mejs.MepDefaults,b);mejs.players.push(this);this.init();return this};mejs.MediaElementPlayer.prototype={hasFocus:false,
controlsAreVisible:true,init:function(){var a=this,b=mejs.MediaFeatures,c=f.extend(true,{},a.options,{success:function(e,g){a.meReady(e,g)},error:function(e){a.handleError(e)}}),d=a.media.tagName.toLowerCase();a.isDynamic=d!=="audio"&&d!=="video";a.isVideo=a.isDynamic?a.options.isVideo:d!=="audio"&&a.options.isVideo;if(b.isiPad&&a.options.iPadUseNativeControls||b.isiPhone&&a.options.iPhoneUseNativeControls){a.$media.attr("controls","controls");if(b.isiPad&&a.media.getAttribute("autoplay")!==null){a.media.load();
a.media.play()}}else if(!(b.isAndroid&&a.options.AndroidUseNativeControls)){a.$media.removeAttr("controls");a.id="mep_"+mejs.mepIndex++;a.container=f('<div id="'+a.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);a.container.addClass((b.isAndroid?"mejs-android ":
"")+(b.isiOS?"mejs-ios ":"")+(b.isiPad?"mejs-ipad ":"")+(b.isiPhone?"mejs-iphone ":"")+(a.isVideo?"mejs-video ":"mejs-audio "));if(b.isiOS){b=a.$media.clone();a.container.find(".mejs-mediaelement").append(b);a.$media.remove();a.$node=a.$media=b;a.node=a.media=b[0]}else a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");b=a.isVideo?"video":"audio";d=b.substring(0,1).toUpperCase()+b.substring(1);a.width=a.options[b+
"Width"]>0||a.options[b+"Width"].toString().indexOf("%")>-1?a.options[b+"Width"]:a.media.style.width!==""&&a.media.style.width!==null?a.media.style.width:a.media.getAttribute("width")!==null?a.$media.attr("width"):a.options["default"+d+"Width"];a.height=a.options[b+"Height"]>0||a.options[b+"Height"].toString().indexOf("%")>-1?a.options[b+"Height"]:a.media.style.height!==""&&a.media.style.height!==null?a.media.style.height:a.$media[0].getAttribute("height")!==null?a.$media.attr("height"):a.options["default"+
d+"Height"];a.setPlayerSize(a.width,a.height);c.pluginWidth=a.height;c.pluginHeight=a.width}mejs.MediaElement(a.$media[0],c);a.container.trigger("controlsshown")},showControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!b.controlsAreVisible){if(a){b.controls.css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true;b.container.trigger("controlsshown")});b.container.find(".mejs-control").css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=
true})}else{b.controls.css("visibility","visible").css("display","block");b.container.find(".mejs-control").css("visibility","visible").css("display","block");b.controlsAreVisible=true;b.container.trigger("controlsshown")}b.setControlsSize()}},hideControls:function(a){var b=this;a=typeof a=="undefined"||a;if(b.controlsAreVisible)if(a){b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")});
b.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block")})}else{b.controls.css("visibility","hidden").css("display","block");b.container.find(".mejs-control").css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")}},controlsTimer:null,startControlsTimer:function(a){var b=this;a=typeof a!="undefined"?a:1500;b.killControlsTimer("start");b.controlsTimer=setTimeout(function(){b.hideControls();
b.killControlsTimer("hide")},a)},killControlsTimer:function(){if(this.controlsTimer!==null){clearTimeout(this.controlsTimer);delete this.controlsTimer;this.controlsTimer=null}},controlsEnabled:true,disableControls:function(){this.killControlsTimer();this.hideControls(false);this.controlsEnabled=false},enableControls:function(){this.showControls(false);this.controlsEnabled=true},meReady:function(a,b){var c=this,d=mejs.MediaFeatures,e=b.getAttribute("autoplay");e=!(typeof e=="undefined"||e===null||
e==="false");var g;if(!c.created){c.created=true;c.media=a;c.domNode=b;if(!(d.isAndroid&&c.options.AndroidUseNativeControls)&&!(d.isiPad&&c.options.iPadUseNativeControls)&&!(d.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media);c.buildkeyboard(c,c.controls,c.layers,c.media);c.buildoverlays(c,c.controls,c.layers,c.media);c.findTracks();for(g in c.options.features){d=c.options.features[g];if(c["build"+d])try{c["build"+d](c,c.controls,c.layers,c.media)}catch(k){}}c.container.trigger("controlsready");
c.setPlayerSize(c.width,c.height);c.setControlsSize();if(c.isVideo){if(mejs.MediaFeatures.hasTouch)c.$media.bind("touchstart",function(){if(c.controlsAreVisible)c.hideControls(false);else c.controlsEnabled&&c.showControls(false)});else{c.media.addEventListener("click",function(){if(c.options.clickToPlayPause)c.media.paused?c.media.play():c.media.pause()});c.container.bind("mouseenter mouseover",function(){if(c.controlsEnabled)if(!c.options.alwaysShowControls){c.killControlsTimer("enter");c.showControls();
c.startControlsTimer(2500)}}).bind("mousemove",function(){if(c.controlsEnabled){c.controlsAreVisible||c.showControls();c.options.alwaysShowControls||c.startControlsTimer(2500)}}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&c.startControlsTimer(1E3)})}e&&!c.options.alwaysShowControls&&c.hideControls();c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(h){if(c.options.videoHeight<=0&&c.domNode.getAttribute("height")===null&&
!isNaN(h.target.videoHeight)){c.setPlayerSize(h.target.videoWidth,h.target.videoHeight);c.setControlsSize();c.media.setVideoSize(h.target.videoWidth,h.target.videoHeight)}},false)}a.addEventListener("play",function(){for(var h=0,o=mejs.players.length;h<o;h++){var n=mejs.players[h];n.id!=c.id&&c.options.pauseOtherPlayers&&!n.paused&&!n.ended&&n.pause();n.hasFocus=false}c.hasFocus=true},false);c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(h){}c.media.pause();
c.setProgressRail&&c.setProgressRail();c.setCurrentRail&&c.setCurrentRail();if(c.options.loop)c.media.play();else!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},false);c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&c.updateDuration();c.updateCurrent&&c.updateCurrent();if(!c.isFullScreen){c.setPlayerSize(c.width,c.height);c.setControlsSize()}},false);setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50);f(window).resize(function(){c.isFullScreen||
mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height);c.setControlsSize()});c.media.pluginType=="youtube"&&c.container.find(".mejs-overlay-play").hide()}if(e&&a.pluginType=="native"){a.load();a.play()}if(c.options.success)typeof c.options.success=="string"?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)}},handleError:function(a){this.controls.hide();this.options.error&&this.options.error(a)},setPlayerSize:function(a,
b){if(typeof a!="undefined")this.width=a;if(typeof b!="undefined")this.height=b;if(this.height.toString().indexOf("%")>0||this.$node.css("max-width")==="100%"||this.$node[0].currentStyle&&this.$node[0].currentStyle.maxWidth==="100%"){var c=this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:this.options.defaultVideoWidth:this.options.defaultAudioWidth,d=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:this.options.defaultVideoHeight:
this.options.defaultAudioHeight,e=this.container.parent().closest(":visible").width();c=this.isVideo||!this.options.autosizeProgress?parseInt(e*d/c,10):d;if(this.container.parent()[0].tagName.toLowerCase()==="body"){e=f(window).width();c=f(window).height()}if(c!=0&&e!=0){this.container.width(e).height(c);this.$media.width("100%").height("100%");this.container.find("object, embed, iframe").width("100%").height("100%");this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(e,c);this.layers.children(".mejs-layer").width("100%").height("100%")}}else{this.container.width(this.width).height(this.height);
this.layers.children(".mejs-layer").width(this.width).height(this.height)}},setControlsSize:function(){var a=0,b=0,c=this.controls.find(".mejs-time-rail"),d=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");var e=c.siblings();if(this.options&&!this.options.autosizeProgress)b=parseInt(c.css("width"));if(b===0||!b){e.each(function(){if(f(this).css("position")!="absolute")a+=f(this).outerWidth(true)});b=this.controls.width()-a-(c.outerWidth(true)-
c.width())}c.width(b);d.width(b-(d.outerWidth(true)-d.width()));this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()},buildposter:function(a,b,c,d){var e=f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);b=a.$media.attr("poster");if(a.options.poster!=="")b=a.options.poster;b!==""&&b!=null?this.setPoster(b):e.hide();d.addEventListener("play",function(){e.hide()},false)},setPoster:function(a){var b=this.container.find(".mejs-poster"),c=b.find("img");if(c.length==
0)c=f('<img width="100%" height="100%" />').appendTo(b);c.attr("src",a)},buildoverlays:function(a,b,c,d){var e=this;if(a.isVideo){var g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),k=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),h=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function(){if(e.options.clickToPlayPause)d.paused?
d.play():d.pause()});d.addEventListener("play",function(){h.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);d.addEventListener("playing",function(){h.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);d.addEventListener("seeking",function(){g.show();b.find(".mejs-time-buffering").show()},false);d.addEventListener("seeked",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);d.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||h.show()},
false);d.addEventListener("waiting",function(){g.show();b.find(".mejs-time-buffering").show()},false);d.addEventListener("loadeddata",function(){g.show();b.find(".mejs-time-buffering").show()},false);d.addEventListener("canplay",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);d.addEventListener("error",function(){g.hide();b.find(".mejs-time-buffering").hide();k.show();k.find("mejs-overlay-error").html("Error loading this resource")},false)}},buildkeyboard:function(a,b,c,d){f(document).keydown(function(e){if(a.hasFocus&&
a.options.enableKeyboard)for(var g=0,k=a.options.keyActions.length;g<k;g++)for(var h=a.options.keyActions[g],o=0,n=h.keys.length;o<n;o++)if(e.keyCode==h.keys[o]){e.preventDefault();h.action(a,d,e.keyCode);return false}return true});f(document).click(function(e){if(f(e.target).closest(".mejs-container").length==0)a.hasFocus=false})},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[];b.each(function(c,d){d=f(d);a.tracks.push({srclang:d.attr("srclang").toLowerCase(),src:d.attr("src"),
kind:d.attr("kind"),label:d.attr("label")||"",entries:[],isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.media.play()},pause:function(){this.media.pause()},load:function(){this.media.load()},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},
getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){if(this.media.pluginType==="flash")this.media.remove();else this.media.pluginType==="native"&&this.$media.prop("controls",true);this.isDynamic||this.$node.insertBefore(this.container);this.container.remove()}};if(typeof jQuery!="undefined")jQuery.fn.mediaelementplayer=function(a){return this.each(function(){new mejs.MediaElementPlayer(this,a)})};f(document).ready(function(){f(".mejs-player").mediaelementplayer()});
window.MediaElementPlayer=mejs.MediaElementPlayer})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{playpauseText:"Play/Pause"});f.extend(MediaElementPlayer.prototype,{buildplaypause:function(a,b,c,d){var e=f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'"></button></div>').appendTo(b).click(function(g){g.preventDefault();d.paused?d.play():d.pause();return false});d.addEventListener("play",function(){e.removeClass("mejs-play").addClass("mejs-pause")},false);
d.addEventListener("playing",function(){e.removeClass("mejs-play").addClass("mejs-pause")},false);d.addEventListener("pause",function(){e.removeClass("mejs-pause").addClass("mejs-play")},false);d.addEventListener("paused",function(){e.removeClass("mejs-pause").addClass("mejs-play")},false)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{stopText:"Stop"});f.extend(MediaElementPlayer.prototype,{buildstop:function(a,b,c,d){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'"></button></div>').appendTo(b).click(function(){d.paused||d.pause();if(d.currentTime>0){d.setCurrentTime(0);d.pause();b.find(".mejs-time-current").width("0px");b.find(".mejs-time-handle").css("left","0px");b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-poster").show()}})}})})(mejs.$);
(function(f){f.extend(MediaElementPlayer.prototype,{buildprogress:function(a,b,c,d){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);b.find(".mejs-time-buffering").hide();var e=
b.find(".mejs-time-total");c=b.find(".mejs-time-loaded");var g=b.find(".mejs-time-current"),k=b.find(".mejs-time-handle"),h=b.find(".mejs-time-float"),o=b.find(".mejs-time-float-current"),n=function(m){m=m.pageX;var q=e.offset(),i=e.outerWidth(true),j=0,l=j=0;if(d.duration){if(m<q.left)m=q.left;else if(m>i+q.left)m=i+q.left;l=m-q.left;j=l/i;j=j<=0.02?0:j*d.duration;p&&j!==d.currentTime&&d.setCurrentTime(j);if(!mejs.MediaFeatures.hasTouch){h.css("left",l);o.html(mejs.Utility.secondsToTimeCode(j));
h.show()}}},p=false;e.bind("mousedown",function(m){if(m.which===1){p=true;n(m);f(document).bind("mousemove.dur",function(q){n(q)}).bind("mouseup.dur",function(){p=false;h.hide();f(document).unbind(".dur")});return false}}).bind("mouseenter",function(){f(document).bind("mousemove.dur",function(m){n(m)});mejs.MediaFeatures.hasTouch||h.show()}).bind("mouseleave",function(){if(!p){f(document).unbind(".dur");h.hide()}});d.addEventListener("progress",function(m){a.setProgressRail(m);a.setCurrentRail(m)},
false);d.addEventListener("timeupdate",function(m){a.setProgressRail(m);a.setCurrentRail(m)},false);this.loaded=c;this.total=e;this.current=g;this.handle=k},setProgressRail:function(a){var b=a!=undefined?a.target:this.media,c=null;if(b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration)c=b.buffered.end(0)/b.duration;else if(b&&b.bytesTotal!=undefined&&b.bytesTotal>0&&b.bufferedBytes!=undefined)c=b.bufferedBytes/b.bytesTotal;else if(a&&a.lengthComputable&&a.total!=0)c=a.loaded/a.total;if(c!==
null){c=Math.min(1,Math.max(0,c));this.loaded&&this.total&&this.loaded.width(this.total.width()*c)}},setCurrentRail:function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=this.total.width()*this.media.currentTime/this.media.duration,b=a-this.handle.outerWidth(true)/2;this.current.width(a);this.handle.css("left",b)}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:" <span> | </span> "});f.extend(MediaElementPlayer.prototype,{buildcurrent:function(a,b,c,d){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(b);this.currenttime=this.controls.find(".mejs-currenttime");d.addEventListener("timeupdate",function(){a.updateCurrent()},false)},buildduration:function(a,
b,c,d){if(b.children().last().find(".mejs-currenttime").length>0)f(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(b.find(".mejs-time"));else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(b)}this.durationD=this.controls.find(".mejs-duration");d.addEventListener("timeupdate",function(){a.updateDuration()},
false)},updateCurrent:function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600);if(this.media.duration&&this.durationD)this.durationD.html(mejs.Utility.secondsToTimeCode(this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,
this.options.framesPerSecond||25))}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{muteText:"Mute Toggle",hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});f.extend(MediaElementPlayer.prototype,{buildvolume:function(a,b,c,d){if(!(mejs.MediaFeatures.hasTouch&&this.options.hideVolumeOnTouchDevices)){var e=this.isVideo?this.options.videoVolume:this.options.audioVolume,g=e=="horizontal"?f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+this.id+'" title="'+this.options.muteText+
'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b):f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+this.id+'" title="'+this.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
k=this.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),h=this.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),o=this.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),n=this.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),p=function(j,l){if(!k.is(":visible")&&typeof l=="undefined"){k.show();p(j,true);k.hide()}else{j=Math.max(0,j);j=Math.min(j,1);j==0?g.removeClass("mejs-mute").addClass("mejs-unmute"):g.removeClass("mejs-unmute").addClass("mejs-mute");
if(e=="vertical"){var r=h.height(),s=h.position(),t=r-r*j;n.css("top",Math.round(s.top+t-n.height()/2));o.height(r-t);o.css("top",s.top+t)}else{r=h.width();s=h.position();r=r*j;n.css("left",Math.round(s.left+r-n.width()/2));o.width(Math.round(r))}}},m=function(j){var l=null,r=h.offset();if(e=="vertical"){l=h.height();parseInt(h.css("top").replace(/px/,""),10);l=(l-(j.pageY-r.top))/l;if(r.top==0||r.left==0)return}else{l=h.width();l=(j.pageX-r.left)/l}l=Math.max(0,l);l=Math.min(l,1);p(l);l==0?d.setMuted(true):
d.setMuted(false);d.setVolume(l)},q=false,i=false;g.hover(function(){k.show();i=true},function(){i=false;!q&&e=="vertical"&&k.hide()});k.bind("mouseover",function(){i=true}).bind("mousedown",function(j){m(j);f(document).bind("mousemove.vol",function(l){m(l)}).bind("mouseup.vol",function(){q=false;f(document).unbind(".vol");!i&&e=="vertical"&&k.hide()});q=true;return false});g.find("button").click(function(){d.setMuted(!d.muted)});d.addEventListener("volumechange",function(){if(!q)if(d.muted){p(0);
g.removeClass("mejs-mute").addClass("mejs-unmute")}else{p(d.volume);g.removeClass("mejs-unmute").addClass("mejs-mute")}},false);if(this.container.is(":visible")){p(a.options.startVolume);d.pluginType==="native"&&d.setVolume(a.options.startVolume)}}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")});f.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,docStyleOverflow:null,isInIframe:false,buildfullscreen:function(a,b,c,d){if(a.isVideo){a.isInIframe=window.location!=window.parent.location;if(mejs.MediaFeatures.hasTrueNativeFullScreen){c=null;c=mejs.MediaFeatures.hasMozNativeFullScreen?f(document):a.container;c.bind(mejs.MediaFeatures.fullScreenEventName,
function(){if(mejs.MediaFeatures.isFullScreen()){a.isNativeFullScreen=true;a.setControlsSize()}else{a.isNativeFullScreen=false;a.exitFullScreen()}})}var e=this,g=f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+e.id+'" title="'+e.options.fullscreenText+'"></button></div>').appendTo(b);if(e.media.pluginType==="native"||!e.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||
a.isFullScreen?a.exitFullScreen():a.enterFullScreen()});else{var k=null;if(function(){var i=document.createElement("x"),j=document.documentElement,l=window.getComputedStyle;if(!("pointerEvents"in i.style))return false;i.style.pointerEvents="auto";i.style.pointerEvents="x";j.appendChild(i);l=l&&l(i,"").pointerEvents==="auto";j.removeChild(i);return!!l}()&&!mejs.MediaFeatures.isOpera){var h=false,o=function(){if(h){n.hide();p.hide();m.hide();g.css("pointer-events","");e.controls.css("pointer-events",
"");h=false}},n=f('<div class="mejs-fullscreen-hover" />').appendTo(e.container).mouseover(o),p=f('<div class="mejs-fullscreen-hover"  />').appendTo(e.container).mouseover(o),m=f('<div class="mejs-fullscreen-hover"  />').appendTo(e.container).mouseover(o),q=function(){var i={position:"absolute",top:0,left:0};n.css(i);p.css(i);m.css(i);n.width(e.container.width()).height(e.container.height()-e.controls.height());i=g.offset().left-e.container.offset().left;fullScreenBtnWidth=g.outerWidth(true);p.width(i).height(e.controls.height()).css({top:e.container.height()-
e.controls.height()});m.width(e.container.width()-i-fullScreenBtnWidth).height(e.controls.height()).css({top:e.container.height()-e.controls.height(),left:i+fullScreenBtnWidth})};f(document).resize(function(){q()});g.mouseover(function(){if(!e.isFullScreen){var i=g.offset(),j=a.container.offset();d.positionFullscreenButton(i.left-j.left,i.top-j.top,false);g.css("pointer-events","none");e.controls.css("pointer-events","none");n.show();m.show();p.show();q();h=true}});d.addEventListener("fullscreenchange",
function(){o()})}else g.mouseover(function(){if(k!==null){clearTimeout(k);delete k}var i=g.offset(),j=a.container.offset();d.positionFullscreenButton(i.left-j.left,i.top-j.top,true)}).mouseout(function(){if(k!==null){clearTimeout(k);delete k}k=setTimeout(function(){d.hideFullscreenButton()},1500)})}a.fullscreenBtn=g;f(document).bind("keydown",function(i){if((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||e.isFullScreen)&&i.keyCode==27)a.exitFullScreen()})}},enterFullScreen:function(){var a=
this;if(!(a.media.pluginType!=="native"&&(mejs.MediaFeatures.isFirefox||a.options.usePluginFullScreen))){docStyleOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden";normalHeight=a.container.height();normalWidth=a.container.width();if(a.media.pluginType==="native")if(mejs.MediaFeatures.hasTrueNativeFullScreen){mejs.MediaFeatures.requestFullScreen(a.container[0]);a.isInIframe&&setTimeout(function c(){if(a.isNativeFullScreen)f(window).width()!==screen.width?
a.exitFullScreen():setTimeout(c,500)},500)}else if(mejs.MediaFeatures.hasSemiNativeFullScreen){a.media.webkitEnterFullscreen();return}if(a.isInIframe){var b=a.options.newWindowCallback(this);if(b!=="")if(mejs.MediaFeatures.hasTrueNativeFullScreen)setTimeout(function(){if(!a.isNativeFullScreen){a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no")}},250);else{a.pause();window.open(b,a.id,"top=0,left=0,width="+
screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");return}}a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");setTimeout(function(){a.container.css({width:"100%",height:"100%"});a.setControlsSize()},500);if(a.pluginType==="native")a.$media.width("100%").height("100%");else{a.container.find("object, embed, iframe").width("100%").height("100%");a.media.setVideoSize(f(window).width(),f(window).height())}a.layers.children("div").width("100%").height("100%");
a.fullscreenBtn&&a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();a.isFullScreen=true}},exitFullScreen:function(){if(this.media.pluginType!=="native"&&mejs.MediaFeatures.isFirefox)this.media.setFullscreen(false);else{if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||this.isFullScreen))mejs.MediaFeatures.cancelFullScreen();document.documentElement.style.overflow=docStyleOverflow;this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
if(this.pluginType==="native")this.$media.width(normalWidth).height(normalHeight);else{this.container.find("object embed").width(normalWidth).height(normalHeight);this.media.setVideoSize(normalWidth,normalHeight)}this.layers.children("div").width(normalWidth).height(normalHeight);this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");this.setControlsSize();this.isFullScreen=false}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",tracksText:"Captions/Subtitles"});f.extend(MediaElementPlayer.prototype,{hasChapters:false,buildtracks:function(a,b,c,d){if(a.isVideo)if(a.tracks.length!=0){var e;a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();a.captions=f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();a.captionsText=a.captions.find(".mejs-captions-text");
a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">None</label></li></ul></div></div>').appendTo(b).hover(function(){f(this).find(".mejs-captions-selector").css("visibility","visible")},function(){f(this).find(".mejs-captions-selector").css("visibility",
"hidden")}).delegate("input[type=radio]","click",function(){lang=this.value;if(lang=="none")a.selectedTrack=null;else for(e=0;e<a.tracks.length;e++)if(a.tracks[e].srclang==lang){a.selectedTrack=a.tracks[e];a.captions.attr("lang",a.selectedTrack.srclang);a.displayCaptions();break}});a.options.alwaysShowControls?a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):a.container.bind("controlsshown",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",
function(){d.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;for(e=0;e<a.tracks.length;e++)a.tracks[e].kind=="subtitles"&&a.addTrackButton(a.tracks[e].srclang,a.tracks[e].label);a.loadNextTrack();d.addEventListener("timeupdate",function(){a.displayCaptions()},false);d.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){if(a.hasChapters){a.chapters.css("visibility",
"visible");a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())}},function(){a.hasChapters&&!d.paused&&a.chapters.fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden")}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else this.isLoadingTrack=false},loadTrack:function(a){var b=
this,c=b.tracks[a];f.ajax({url:c.src,dataType:"text",success:function(d){c.entries=typeof d=="string"&&/<tt\s+xml/ig.exec(d)?mejs.TrackFormatParser.dfxp.parse(d):mejs.TrackFormatParser.webvvt.parse(d);c.isLoaded=true;b.enableTrackButton(c.srclang,c.label);b.loadNextTrack();c.kind=="chapters"&&b.media.addEventListener("play",function(){b.media.duration>0&&b.displayChapters(c)},false)},error:function(){b.loadNextTrack()}})},enableTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("input[value="+
a+"]").prop("disabled",false).siblings("label").html(b);this.options.startLanguage==a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},addTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+" (loading)</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+
a+"]").remove()},adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},displayCaptions:function(){if(typeof this.tracks!="undefined"){var a,b=this.selectedTrack;if(b!=null&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop){this.captionsText.html(b.entries.text[a]);
this.captions.show().height(0);return}this.captions.hide()}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind=="chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);this.hasChapters=true;break}},drawChapters:function(a){var b=this,c,d,e=d=0;b.chapters.empty();for(c=0;c<a.entries.times.length;c++){d=a.entries.times[c].stop-a.entries.times[c].start;d=Math.floor(d/b.media.duration*100);if(d+e>100||c==a.entries.times.length-1&&d+e<100)d=100-e;b.chapters.append(f('<div class="mejs-chapter" rel="'+
a.entries.times[c].start+'" style="left: '+e.toString()+"%;width: "+d.toString()+'%;"><div class="mejs-chapter-block'+(c==a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[c].stop)+"</span></div></div>"));e+=d}b.chapters.find("div.mejs-chapter").click(function(){b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
b.media.paused&&b.media.play()});b.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",
ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={webvvt:{pattern_identifier:/^([a-zA-z]+-)?[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
parse:function(a){var b=0;a=mejs.TrackFormatParser.split2(a,/\r?\n/);for(var c={text:[],times:[]},d,e;b<a.length;b++)if(this.pattern_identifier.exec(a[b])){b++;if((d=this.pattern_timecode.exec(a[b]))&&b<a.length){b++;e=a[b];for(b++;a[b]!==""&&b<a.length;){e=e+"\n"+a[b];b++}e=f.trim(e).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(e);c.times.push({start:mejs.Utility.convertSMPTEtoSeconds(d[1])==0?0.2:mejs.Utility.convertSMPTEtoSeconds(d[1]),
stop:mejs.Utility.convertSMPTEtoSeconds(d[3]),settings:d[5]})}}return c}},dfxp:{parse:function(a){a=f(a).filter("tt");var b=0;b=a.children("div").eq(0);var c=b.find("p");b=a.find("#"+b.attr("style"));var d,e;a={text:[],times:[]};if(b.length){e=b.removeAttr("id").get(0).attributes;if(e.length){d={};for(b=0;b<e.length;b++)d[e[b].name.split(":")[1]]=e[b].value}}for(b=0;b<c.length;b++){var g;e={start:null,stop:null,style:null};if(c.eq(b).attr("begin"))e.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
if(!e.start&&c.eq(b-1).attr("end"))e.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b-1).attr("end"));if(c.eq(b).attr("end"))e.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));if(!e.stop&&c.eq(b+1).attr("begin"))e.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b+1).attr("begin"));if(d){g="";for(var k in d)g+=k+":"+d[k]+";"}if(g)e.style=g;if(e.start==0)e.start=0.2;a.times.push(e);e=f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
"<a href='$1' target='_blank'>$1</a>");a.text.push(e);if(a.times.start==0)a.times.start=2}return a}},split2:function(a,b){return a.split(b)}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,b){var c=[],d="",e;for(e=0;e<a.length;e++){d+=a.substring(e,e+1);if(b.test(d)){c.push(d.replace(b,""));d=""}}c.push(d);return c}})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){if(typeof a.enterFullScreen=="undefined")return null;return a.isFullScreen?"Turn off Fullscreen":"Go Fullscreen"},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?"Unmute":"Mute"},click:function(a){a.media.muted?a.setMuted(false):a.setMuted(true)}},{isSeparator:true},{render:function(){return"Download Video"},click:function(a){window.location.href=a.media.currentSrc}}]});
f.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(a){a.contextMenu=f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();a.container.bind("contextmenu",function(b){if(a.isContextMenuEnabled){b.preventDefault();a.renderContextMenu(b.clientX-1,b.clientY-1);return false}});a.container.bind("click",function(){a.contextMenu.hide()});a.contextMenu.bind("mouseleave",function(){a.startContextMenuTimer()})},isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=
true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer();a.contextMenuTimer=setTimeout(function(){a.hideContextMenu();a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;if(a!=null){clearTimeout(a);delete a}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(a,b){for(var c=this,d="",e=c.options.contextMenuItems,g=0,k=e.length;g<
k;g++)if(e[g].isSeparator)d+='<div class="mejs-contextmenu-separator"></div>';else{var h=e[g].render(c);if(h!=null)d+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+Math.random()*1E6+'">'+h+"</div>"}c.contextMenu.empty().append(f(d)).css({top:b,left:a}).show();c.contextMenu.find(".mejs-contextmenu-item").each(function(){var o=f(this),n=parseInt(o.data("itemindex"),10),p=c.options.contextMenuItems[n];typeof p.show!="undefined"&&p.show(o,c);o.click(function(){typeof p.click!=
"undefined"&&p.click(c);c.contextMenu.hide()})});setTimeout(function(){c.killControlsTimer("rev3")},100)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});f.extend(MediaElementPlayer.prototype,{buildpostroll:function(a,b,c){var d=this.container.find('link[rel="postroll"]').attr("href");if(typeof d!=="undefined"){a.postroll=f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();this.media.addEventListener("ended",
function(){f.ajax({dataType:"html",url:d,success:function(e){c.find(".mejs-postroll-layer-content").html(e)}});a.postroll.show()},false)}}})})(mejs.$);
// Set default handling of translation fallbacks to false
I18n.fallbacks = false;

// Set default separator
I18n.defaultSeparator = ".";

// Set the placeholder format. Accepts `{{placeholder}}` and `%{placeholder}`.
I18n.PLACEHOLDER = /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm;

I18n.isValidNode = function(obj, node, undefined) {
    return obj[node] !== null && obj[node] !== undefined;
}

I18n.lookup = function(scope, options) {
  var options = options || {}
    , lookupInitialScope = scope
    , translations = this.prepareOptions(I18n.translations)
    , messages = translations[options.locale || I18n.currentLocale()]
    , options = this.prepareOptions(options)
    , currentScope
  ;

  if (!messages){
    return;
  }

  if (typeof(scope) == "object") {
    scope = scope.join(this.defaultSeparator);
  }

  if (options.scope) {
    scope = options.scope.toString() + this.defaultSeparator + scope;
  }

  scope = scope.split(this.defaultSeparator);

  while (scope.length > 0) {
    currentScope = scope.shift();
    messages = messages[currentScope];

    if (!messages) {
      if (I18n.fallbacks && !options.fallback) {
        messages = I18n.lookup(lookupInitialScope, this.prepareOptions({ locale: I18n.defaultLocale, fallback: true }, options));
      }
      break;
    }
  }

  if (!messages && this.isValidNode(options, "defaultValue")) {
    messages = options.defaultValue;
  }

  return messages;
};

// Merge serveral hash options, checking if value is set before
// overwriting any value. The precedence is from left to right.
//
//   I18n.prepareOptions({name: "John Doe"}, {name: "Mary Doe", role: "user"});
//   #=> {name: "John Doe", role: "user"}
//
I18n.prepareOptions = function() {
  var options = {}
    , opts
    , count = arguments.length
  ;

  for (var i = 0; i < count; i++) {
    opts = arguments[i];

    if (!opts) {
      continue;
    }

    for (var key in opts) {
      if (!this.isValidNode(options, key)) {
        options[key] = opts[key];
      }
    }
  }

  return options;
};

I18n.interpolate = function(message, options) {
  options = this.prepareOptions(options);
  var matches = message.match(this.PLACEHOLDER)
    , placeholder
    , value
    , name
  ;

  if (!matches) {
    return message;
  }

  for (var i = 0; placeholder = matches[i]; i++) {
    name = placeholder.replace(this.PLACEHOLDER, "$1");

    value = options[name];

    if (!this.isValidNode(options, name)) {
      value = "[missing " + placeholder + " value]";
    }

    regex = new RegExp(placeholder.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}"));
    message = message.replace(regex, value);
  }

  return message;
};

I18n.translate = function(scope, options) {
  options = this.prepareOptions(options);
  var translation = this.lookup(scope, options);

  try {
    if (typeof(translation) == "object") {
      if (typeof(options.count) == "number") {
        return this.pluralize(options.count, scope, options);
      } else {
        return translation;
      }
    } else {
      return this.interpolate(translation, options);
    }
  } catch(err) {
    return this.missingTranslation(scope);
  }
};

I18n.localize = function(scope, value) {
  switch (scope) {
    case "currency":
      return this.toCurrency(value);
    case "number":
      scope = this.lookup("number.format");
      return this.toNumber(value, scope);
    case "percentage":
      return this.toPercentage(value);
    default:
      if (scope.match(/^(date|time)/)) {
        return this.toTime(scope, value);
      } else {
        return value.toString();
      }
  }
};

I18n.parseDate = function(date) {
  var matches, convertedDate;

  // we have a date, so just return it.
  if (typeof(date) == "object") {
    return date;
  };

  // it matches the following formats:
  //   yyyy-mm-dd
  //   yyyy-mm-dd[ T]hh:mm::ss
  //   yyyy-mm-dd[ T]hh:mm::ss
  //   yyyy-mm-dd[ T]hh:mm::ssZ
  //   yyyy-mm-dd[ T]hh:mm::ss+0000
  //
  matches = date.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?(Z|\+0000)?/);

  if (matches) {
    for (var i = 1; i <= 6; i++) {
      matches[i] = parseInt(matches[i], 10) || 0;
    }

    // month starts on 0
    matches[2] -= 1;

    if (matches[7]) {
      convertedDate = new Date(Date.UTC(matches[1], matches[2], matches[3], matches[4], matches[5], matches[6]));
    } else {
      convertedDate = new Date(matches[1], matches[2], matches[3], matches[4], matches[5], matches[6]);
    }
  } else if (typeof(date) == "number") {
    // UNIX timestamp
    convertedDate = new Date();
    convertedDate.setTime(date);
  } else if (date.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/)) {
    // a valid javascript format with timezone info
    convertedDate = new Date();
    convertedDate.setTime(Date.parse(date))
  } else {
    // an arbitrary javascript string
    convertedDate = new Date();
    convertedDate.setTime(Date.parse(date));
  }

  return convertedDate;
};

I18n.toTime = function(scope, d) {
  var date = this.parseDate(d)
    , format = this.lookup(scope)
  ;

  if (date.toString().match(/invalid/i)) {
    return date.toString();
  }

  if (!format) {
    return date.toString();
  }

  return this.strftime(date, format);
};

I18n.strftime = function(date, format) {
  var options = this.lookup("date");

  if (!options) {
    return date.toString();
  }

  options.meridian = options.meridian || ["AM", "PM"];

  var weekDay = date.getDay()
    , day = date.getDate()
    , year = date.getFullYear()
    , month = date.getMonth() + 1
    , hour = date.getHours()
    , hour12 = hour
    , meridian = hour > 11 ? 1 : 0
    , secs = date.getSeconds()
    , mins = date.getMinutes()
    , offset = date.getTimezoneOffset()
    , absOffsetHours = Math.floor(Math.abs(offset / 60))
    , absOffsetMinutes = Math.abs(offset) - (absOffsetHours * 60)
    , timezoneoffset = (offset > 0 ? "-" : "+") + (absOffsetHours.toString().length < 2 ? "0" + absOffsetHours : absOffsetHours) + (absOffsetMinutes.toString().length < 2 ? "0" + absOffsetMinutes : absOffsetMinutes)
  ;

  if (hour12 > 12) {
    hour12 = hour12 - 12;
  } else if (hour12 === 0) {
    hour12 = 12;
  }

  var padding = function(n) {
    var s = "0" + n.toString();
    return s.substr(s.length - 2);
  };

  var f = format;
  f = f.replace("%a", options.abbr_day_names[weekDay]);
  f = f.replace("%A", options.day_names[weekDay]);
  f = f.replace("%b", options.abbr_month_names[month]);
  f = f.replace("%B", options.month_names[month]);
  f = f.replace("%d", padding(day));
  f = f.replace("%e", day);
  f = f.replace("%-d", day);
  f = f.replace("%H", padding(hour));
  f = f.replace("%-H", hour);
  f = f.replace("%I", padding(hour12));
  f = f.replace("%-I", hour12);
  f = f.replace("%m", padding(month));
  f = f.replace("%-m", month);
  f = f.replace("%M", padding(mins));
  f = f.replace("%-M", mins);
  f = f.replace("%p", options.meridian[meridian]);
  f = f.replace("%S", padding(secs));
  f = f.replace("%-S", secs);
  f = f.replace("%w", weekDay);
  f = f.replace("%y", padding(year));
  f = f.replace("%-y", padding(year).replace(/^0+/, ""));
  f = f.replace("%Y", year);
  f = f.replace("%z", timezoneoffset);

  return f;
};

I18n.toNumber = function(number, options) {
  options = this.prepareOptions(
    options,
    this.lookup("number.format"),
    {precision: 3, separator: ".", delimiter: ",", strip_insignificant_zeros: false}
  );

  var negative = number < 0
    , string = Math.abs(number).toFixed(options.precision).toString()
    , parts = string.split(".")
    , precision
    , buffer = []
    , formattedNumber
  ;

  number = parts[0];
  precision = parts[1];

  while (number.length > 0) {
    buffer.unshift(number.substr(Math.max(0, number.length - 3), 3));
    number = number.substr(0, number.length -3);
  }

  formattedNumber = buffer.join(options.delimiter);

  if (options.precision > 0) {
    formattedNumber += options.separator + parts[1];
  }

  if (negative) {
    formattedNumber = "-" + formattedNumber;
  }

  if (options.strip_insignificant_zeros) {
    var regex = {
        separator: new RegExp(options.separator.replace(/\./, "\\.") + "$")
      , zeros: /0+$/
    };

    formattedNumber = formattedNumber
      .replace(regex.zeros, "")
      .replace(regex.separator, "")
    ;
  }

  return formattedNumber;
};

I18n.toCurrency = function(number, options) {
  options = this.prepareOptions(
    options,
    this.lookup("number.currency.format"),
    this.lookup("number.format"),
    {unit: "$", precision: 2, format: "%u%n", delimiter: ",", separator: "."}
  );

  number = this.toNumber(number, options);
  number = options.format
    .replace("%u", options.unit)
    .replace("%n", number)
  ;

  return number;
};

I18n.toHumanSize = function(number, options) {
  var kb = 1024
    , size = number
    , iterations = 0
    , unit
    , precision
  ;

  while (size >= kb && iterations < 4) {
    size = size / kb;
    iterations += 1;
  }

  if (iterations === 0) {
    unit = this.t("number.human.storage_units.units.byte", {count: size});
    precision = 0;
  } else {
    unit = this.t("number.human.storage_units.units." + [null, "kb", "mb", "gb", "tb"][iterations]);
    precision = (size - Math.floor(size) === 0) ? 0 : 1;
  }

  options = this.prepareOptions(
    options,
    {precision: precision, format: "%n%u", delimiter: ""}
  );

  number = this.toNumber(size, options);
  number = options.format
    .replace("%u", unit)
    .replace("%n", number)
  ;

  return number;
};

I18n.toPercentage = function(number, options) {
  options = this.prepareOptions(
    options,
    this.lookup("number.percentage.format"),
    this.lookup("number.format"),
    {precision: 3, separator: ".", delimiter: ""}
  );

  number = this.toNumber(number, options);
  return number + "%";
};

I18n.pluralize = function(count, scope, options) {
  var translation;

  try {
    translation = this.lookup(scope, options);
  } catch (error) {}

  if (!translation) {
    return this.missingTranslation(scope);
  }

  var message;
  options = this.prepareOptions(options);
  options.count = count.toString();

  switch(Math.abs(count)) {
    case 0:
      message = this.isValidNode(translation, "zero") ? translation.zero :
                this.isValidNode(translation, "none") ? translation.none :
                this.isValidNode(translation, "other") ? translation.other :
                this.missingTranslation(scope, "zero");
      break;
    case 1:
      message = this.isValidNode(translation, "one") ? translation.one : this.missingTranslation(scope, "one");
      break;
    default:
      message = this.isValidNode(translation, "other") ? translation.other : this.missingTranslation(scope, "other");
  }

  return this.interpolate(message, options);
};

I18n.missingTranslation = function() {
  var message = '[missing "' + this.currentLocale()
    , count = arguments.length
  ;

  for (var i = 0; i < count; i++) {
    message += "." + arguments[i];
  }

  message += '" translation]';

  return message;
};

I18n.currentLocale = function() {
  return (I18n.locale || I18n.defaultLocale);
};

I18n.t = I18n.translate;
I18n.l = I18n.localize;
I18n.p = I18n.pluralize;
// Returns whether or not a result set has results in it
$.fn.outer_html = function() {
  return $('<div>').append( this.eq(0).clone() ).html();
};

$.fn.flash_orange = function(options) {
  var defaults = {
    back_to: 'white',
    duration: 1500
  };
  var opts = $.extend({}, defaults, options);
  return this.each(function() {
    $(this).css('background-color', 'orange').animate({backgroundColor: opts.back_to}, opts.duration);
  });
}

$.fn.is_scrolled_into_view = function() {
  elem = this;
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
    && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}

$.expr[':'].inner_text_matches = function(obj, index, meta, stack) {
  var regex = new RegExp(meta[3], "i")
  return regex.test($.trim($(obj).text()))
};

$.fn.scrollToCenterOfScreen = function(options) {
  options = options || {}
  
  if (!this.length) return this
  
  var scroller = $(options.scroller || (MOBILE_DEVICE ? "#container" : document))
  var screen_height = $(window).height()
  var element_height = this.height()

  if (MOBILE_DEVICE && !Modernizr.has_native_scrolling) {
    app.iscrollers[scroller.attr('id')].scrollTo(0, this.position().top * -1, 0);
  } else {
    scroller.scrollTo(this, {
      offset: (element_height / 2) - (screen_height / 2),
      onAfter: options.onAfter || function() {}
    }); 
  }
  
  return this
}

$.fn.reloadTooltip = function() {
  try { var api = this.qtip('api') } catch(e) { return this }
  
  api.updateContent('Loading...')
  api.loadContent(api.options.content.url)
  return this
}

$.fn.update_iscroll = function() {
  if (Modernizr.has_native_scrolling) return
  
  var elem = this
  setTimeout(function() { app.iscrollers[$(elem).attr('id')].refresh() }, 10)
  setTimeout(function() { app.iscrollers[$(elem).attr('id')].refresh() }, 500)
  return this
}

$.fn.tap = function(selector, tap_function) {
  $(this).hammer().bind("touchstart touchend touchmove", function(ev) {
    var $target = $(ev.originalEvent.target), handlers = {}, touchstart_data    
    $target = ($target.is(selector)) ? $target : $target.closest(selector)

    if ($target.length == 0) return true
    
    handlers = {
      touchstart: function() {
        var touches = ev.originalEvent.touches[0]
        $target.attr({ "data-touch-x": touches.clientX, "data-touch-y": touches.clientY })
        
        app.touch_active_waiter = window.setTimeout(function(){
          $('.tappable_active').removeClass("tappable_active")  
          $target.addClass('tappable_active')
        }, 100)
      },
      
      touchmove: function() {
        if (app.touch_active_waiter) window.clearTimeout(app.touch_active_waiter) 
      },
      
      touchend: function() {
        ev.preventDefault()
        ev.stopPropagation()
        
        $(document).on("click.ghostnommer", "*", function(){ return false })
        window.setTimeout(function(){ $(document).off("click.ghostnommer", "*") }, 350 )
        
        var tap_start = ev.originalEvent.changedTouches[0] 
        if (Math.abs(tap_start.clientX - $target.attr("data-touch-x")) > 15 || 
          Math.abs(tap_start.clientY - $target.attr("data-touch-y")) > 15) {
            $('.tappable_active').removeClass("tappable_active")  
            return false
          }
        
        $('.tappable_active').removeClass("tappable_active")  
        $target.addClass('tappable_active')
        
        if (typeof tap_function === 'function') tap_function(ev, $target)
      }
    }
    
    handlers[ev.type]()   
  })
  $(this).on("click", selector, function(){ return false })
}

$.fn.counter_value = function() {
  return parseInt(this.text().replace(/[^0-9]/g, ""))
}

$.fn.change_counter_value_by = function(n) {
  this.text(this.text().replace(/[0-9]+/, this.counter_value() + n))
}

$.fn.detect = function(condition) {
  var result = null
  this.each(function() {
    if (condition.call(this)) {
      result = this
      return false
    }
  })
  
  return result
}

$.fn.insertAtCursor = function(myValue) {
  return this.each(function() {
    if (document.selection) {
      this.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == "0") {
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    }
    else {
      this.value += myValue;
      this.focus();
    }
  });
}

$.fn.submitWithAjaxQueue = function (args) {
  return this.each(function () {
    app.ajaxQueue.add($.extend({
      type: this.method,
      url: this.action,
      data: $(this).serialize()
    }, args))
  })
}

$.trim = function(text) {
  return (text || "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}

$.capitalize_first_letter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
;
/*! jquery.atwho - v0.2.0 - 2013-05-31
* http://ichord.github.com/At.js/
* Copyright (c) 2013 ichord; Licensed MIT */

(function(){var e=[].slice;(function(e){return typeof define=="function"&&define.amd?define(["jquery"],e):e(window.jQuery)})(function(t){var n,r,i,s,o,u,a,f,l;return i=function(){function e(e){this.current_flag=null,this.controllers={},this.$inputor=t(e),this.listen()}return e.prototype.controller=function(e){return this.controllers[e||this.current_flag]},e.prototype.set_context_for=function(e){return this.current_flag=e,this},e.prototype.reg=function(e,t){var n,r;return n=(r=this.controllers)[e]||(r[e]=new s(this,e)),t.alias&&(this.controllers[t.alias]=n),n.init(t),this},e.prototype.listen=function(){var e=this;return this.$inputor.on("keyup.atwho",function(t){return e.on_keyup(t)}).on("keydown.atwho",function(t){return e.on_keydown(t)}).on("scroll.atwho",function(t){var n;return(n=e.controller())!=null?n.view.hide():void 0}).on("blur.atwho",function(t){var n;if(n=e.controller())return n.view.hide(n.get_opt("display_timeout"))})},e.prototype.dispatch=function(){var e=this;return t.map(this.controllers,function(t){if(t.look_up())return e.set_context_for(t.key)})},e.prototype.on_keyup=function(e){var n;switch(e.keyCode){case a.ESC:e.preventDefault(),(n=this.controller())!=null&&n.view.hide();break;case a.DOWN:case a.UP:t.noop();break;default:this.dispatch()}},e.prototype.on_keydown=function(e){var n,r;n=(r=this.controller())!=null?r.view:void 0;if(!n||!n.visible())return;switch(e.keyCode){case a.ESC:e.preventDefault(),n.hide();break;case a.UP:e.preventDefault(),n.prev();break;case a.DOWN:e.preventDefault(),n.next();break;case a.TAB:case a.ENTER:if(!n.visible())return;e.preventDefault(),n.choose();break;default:t.noop()}},e}(),s=function(){function s(e,i){this.app=e,this.key=i,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||r(),this.setting=null,this.query=null,this.pos=0,n.append(this.$el=t("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new f(this),this.view=new l(this)}var r,i;return i=0,r=function(){return i+=1},s.prototype.init=function(e){return this.setting=t.extend({},this.setting||t.fn.atwho["default"],e),this.model.reload(this.setting.data)},s.prototype.super_call=function(){var n,r;r=arguments[0],n=2<=arguments.length?e.call(arguments,1):[];try{return o[r].apply(this,n)}catch(i){return t.error(""+i+" Or maybe At.js doesn't have function "+r)}},s.prototype.trigger=function(e,t){var n,r;return t.push(this),n=this.get_opt("alias"),r=n?""+e+"-"+n+".atwho":""+e+".atwho",this.$inputor.trigger(r,t)},s.prototype.callbacks=function(e){return this.get_opt("callbacks")[e]||o[e]},s.prototype.get_opt=function(e,t){try{return this.setting[e]}catch(n){return null}},s.prototype.catch_query=function(){var e,t,n,r,i,s;return t=this.$inputor.val(),e=this.$inputor.caret("pos"),s=t.slice(0,e),r=this.callbacks("matcher").call(this,this.key,s),typeof r=="string"&&r.length<=this.get_opt("max_len",20)?(i=e-r.length,n=i+r.length,this.pos=i,r={text:r.toLowerCase(),head_pos:i,end_pos:n},this.trigger("matched",[this.key,r.text])):this.view.hide(),this.query=r},s.prototype.rect=function(){var e,t;return e=this.$inputor.caret("offset",this.pos-1),t=document.selection?0:2,{left:e.left,top:e.top,bottom:e.top+e.height+t}},s.prototype.insert=function(e){var t,n,r,i,s;return t=this.$inputor,e=""+e,r=t.val(),n=this.get_opt("display_flag")?0:this.key.length,i=r.slice(0,(this.query.head_pos||0)-n),s=""+i+e+" "+r.slice(this.query.end_pos||0),t.val(s),t.caret("pos",i.length+e.length+1),t.change()},s.prototype.render_view=function(e){var t;return t=this.get_opt("search_key"),e=this.callbacks("sorter").call(this,this.query.text,e.slice(0,1001),t),this.view.render(e.slice(0,this.get_opt("limit")))},s.prototype.look_up=function(){var e,n;if(!(e=this.catch_query()))return;return n=function(e){return e&&e.length>0?this.render_view(e):this.view.hide()},this.model.query(e.text,t.proxy(n,this)),e},s}(),f=function(){function n(e){this.context=e,this.key=this.context.key}var e;return e={},n.prototype.saved=function(){return this.fetch()>0},n.prototype.query=function(e,t){var n,r,i;n=this.fetch(),r=this.context.get_opt("search_key"),t(n=this.context.callbacks("filter").call(this.context,e,n,r));if(!(n&&n.length>0))return(i=this.context.callbacks("remote_filter"))!=null?i.call(this.context,e,t):void 0},n.prototype.fetch=function(){return e[this.key]||[]},n.prototype.save=function(t){return e[this.key]=this.context.callbacks("before_save").call(this.context,t||[])},n.prototype.load=function(e){if(!this.saved()&&!!e)return this._load(e)},n.prototype.reload=function(e){return this._load(e)},n.prototype._load=function(e){var n=this;return typeof e=="string"?t.ajax(e,{dataType:"json"}).done(function(e){return n.save(e)}):this.save(e)},n}(),l=function(){function e(e){this.context=e,this.key=this.context.key,this.id=this.context.get_opt("alias")||"at-view-"+this.key.charCodeAt(0),this.$el=t("<div id='"+this.id+"' class='atwho-view'><ul id='"+this.id+"-ul' class='atwho-view-url'></ul></div>"),this.timeout_id=null,this.context.$el.append(this.$el),this.bind_event()}return e.prototype.bind_event=function(){var e,n=this;return e=this.$el.find("ul"),e.on("mouseenter.view","li",function(n){return e.find(".cur").removeClass("cur"),t(n.currentTarget).addClass("cur")}).on("click",function(e){return n.choose(),e.preventDefault()})},e.prototype.visible=function(){return this.$el.is(":visible")},e.prototype.choose=function(){var e;return e=this.$el.find(".cur"),this.context.insert(this.context.callbacks("before_insert").call(this.context,e.data("value"),e)),this.context.trigger("inserted",[e]),this.hide()},e.prototype.reposition=function(){var e,n;return n=this.context.rect(),n.bottom+this.$el.height()-t(window).scrollTop()>t(window).height()&&(n.bottom=n.top-this.$el.height()),e={left:n.left,top:n.bottom},this.$el.offset(e),this.context.trigger("reposition",[e])},e.prototype.next=function(){var e,t;return e=this.$el.find(".cur").removeClass("cur"),t=e.next(),t.length||(t=this.$el.find("li:first")),t.addClass("cur")},e.prototype.prev=function(){var e,t;return e=this.$el.find(".cur").removeClass("cur"),t=e.prev(),t.length||(t=this.$el.find("li:last")),t.addClass("cur")},e.prototype.show=function(){return this.visible()||this.$el.show(),this.reposition()},e.prototype.hide=function(e){var t,n=this;return isNaN(e&&this.visible())?this.$el.hide():(t=function(){return n.hide()},clearTimeout(this.timeout_id),this.timeout_id=setTimeout(t,e))},e.prototype.render=function(e){var n,r,i,s,o,a,f;if(!t.isArray(e||e.length<=0)){this.hide();return}this.$el.find("ul").empty(),r=this.$el.find("ul"),o=this.context.get_opt("tpl",u);for(a=0,f=e.length;a<f;a++)i=e[a],s=this.context.callbacks("tpl_eval").call(this.context,o,i),n=t(this.context.callbacks("highlighter").call(this.context,s,this.context.query.text)),n.data("atwho-info",i),r.append(n);return this.show(),r.find("li:first").addClass("cur")},e}(),a={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13},o={before_save:function(e){var n,r,i,s;if(!t.isArray(e))return e;s=[];for(r=0,i=e.length;r<i;r++)n=e[r],t.isPlainObject(n)?s.push(n):s.push({name:n});return s},matcher:function(e,t){var n,r;return e="(?:^|\\s)"+e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),r=new RegExp(e+"([A-Za-z0-9_+-]*)$|"+e+"([^\\x00-\\xff]*)$","gi"),n=r.exec(t),n?n[2]||n[1]:null},filter:function(e,t,n){var r,i,s,o;o=[];for(i=0,s=t.length;i<s;i++)r=t[i],~r[n].toLowerCase().indexOf(e)&&o.push(r);return o},remote_filter:null,sorter:function(e,t,n){var r,i,s,o;if(!e)return t;o=[];for(i=0,s=t.length;i<s;i++)r=t[i],r.atwho_order=r[n].toLowerCase().indexOf(e),r.atwho_order>-1&&o.push(r);return o.sort(function(e,t){return e.atwho_order-t.atwho_order})},tpl_eval:function(e,t){try{return e.replace(/\$\{([^\}]*)\}/g,function(e,n,r){return t[n]})}catch(n){return""}},highlighter:function(e,t){var n;return t?(n=new RegExp(">\\s*(\\w*)("+t.replace("+","\\+")+")(\\w*)\\s*<","ig"),e.replace(n,function(e,t,n,r){return"> "+t+"<strong>"+n+"</strong>"+r+" <"})):e},before_insert:function(e,t){return e}},u="<li data-value='${name}'>${name}</li>",r={init:function(e){var n,r;return r=(n=t(this)).data("atwho"),r||n.data("atwho",r=new i(this)),r.reg(e.at,e)},load:function(e,t){var n;if(n=this.controller(e))return n.model.load(t)},run:function(){return this.dispatch()}},n=t("<div id='atwho-container'></div>"),t.fn.atwho=function(e){var i;return i=arguments,t("body").append(n),this.filter("textarea, input").each(function(){var n;if(typeof e=="object"||!e)return r.init.apply(this,i);if(!r[e])return t.error("Method "+e+" does not exist on jQuery.caret");if(n=t(this).data("atwho"))return r[e].apply(n,Array.prototype.slice.call(i,1))})},t.fn.atwho["default"]={at:void 0,alias:void 0,data:null,tpl:u,callbacks:o,search_key:"name",limit:5,max_len:20,display_flag:!0,display_timeout:300}})}).call(this),function(){(function(e){return typeof define=="function"&&define.amd?define(["jquery"],e):e(window.jQuery)})(function(e){"use strict";var t,n,r,i;return i="caret",t=function(){function t(e){this.$inputor=e,this.domInputor=this.$inputor[0]}return t.prototype.getPos=function(){var e,t,n,r,i,s,o,u,a;return n=this.domInputor,n.focus(),document.selection?(o=document.selection.createRange(),s=0,o&&o.parentElement()===n&&(i=n.value.replace(/\r\n/g,"\n"),r=i.length,a=n.createTextRange(),a.moveToBookmark(o.getBookmark()),t=n.createTextRange(),t.collapse(!1),a.compareEndPoints("StartToEnd",t)>-1?u=e=r:(u=-a.moveStart("character",-r),e=-a.moveEnd("character",-r)))):u=n.selectionStart,u},t.prototype.setPos=function(e){var t,n;return t=this.domInputor,document.selection?(n=t.createTextRange(),n.move("character",e),n.select()):t.setSelectionRange(e,e)},t.prototype.getPosition=function(e){var t,r,i,s,o,u,a,f,l;return t=this.$inputor,i=function(e){return e.replace(/</g,"&lt").replace(/>/g,"&gt").replace(/`/g,"&#96").replace(/"/g,"&quot").replace(/\r\n|\r|\n/g,"<br />")},e=e||this.getPos(),a=t.val().slice(0,e),o="<span>"+i(a)+"</span>",o+="<span id='caret'>|</span>",u=new n(t),r=u.create(o).rect(),f=r.left-t.scrollLeft(),l=r.top-t.scrollTop(),s=r.height,{left:f,top:l,height:s}},t.prototype.getOffset=function(t){var n,r,i,s,o,u,a;return n=this.$inputor,document.selection?(o=this.domInputor.createTextRange(),t&&o.move("character",t),u=o.boundingLeft+n.scrollLeft(),a=o.boundingTop+e(window).scrollTop()+n.scrollTop(),r=o.boundingHeight):(i=n.offset(),s=this.getPosition(t),u=i.left+s.left,a=i.top+s.top,r=s.height),{left:u,top:a,height:r}},t}(),n=function(){function t(e){this.$inputor=e}return t.prototype.css_attr=["overflowY","height","width","paddingTop","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom","fontFamily","borderStyle","borderWidth","wordWrap","fontSize","lineHeight","overflowX","text-align"],t.prototype.mirrorCss=function(){var t,n=this;return t={position:"absolute",left:-9999,top:0,zIndex:-2e4,"white-space":"pre-wrap"},e.each(this.css_attr,function(e,r){return t[r]=n.$inputor.css(r)}),t},t.prototype.create=function(t){return this.$mirror=e("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(t),this.$inputor.after(this.$mirror),this},t.prototype.rect=function(){var e,t,n;return e=this.$mirror.find("#caret"),t=e.position(),n={left:t.left,top:t.top,height:e.height()},this.$mirror.remove(),n},t}(),r={pos:function(e){return e?this.setPos(e):this.getPos()},position:function(e){return this.getPosition(e)},offset:function(e){return this.getOffset(e)}},e.fn.caret=function(n){var i;return i=new t(this),r[n]?r[n].apply(i,Array.prototype.slice.call(arguments,1)):e.error("Method "+n+" does not exist on jQuery.caret")}})}.call(this);







































// need this for both desktop and mobile but it depends on stuff in application.js
// (so we have to require it here rather than in *_requires.js)



window.log = function() {
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

window.app = window.app || {}

$.extend(window.app, {
  ajaxQueue: jQuery.manageAjax.create('queue', { queue: true }),
  
  delete_annotation: function(annotation_id) {
    var data = { "_method": "delete" }
    var login = $("#explain_as").attr("login")
    if (login) data['explain_as'] = login

    app.ajaxQueue.add({
      type: 'post',
      url: "/annotations/" + annotation_id,
      data: data
    });
  },
  
  ajax_with_retry: function(options) {
    defaults = {
      retry_limit: 2,
      type: 'get',
      dataType: 'html',
      success: function(data) {},
      data: {}
    }
    
    options = $.extend({}, defaults, options)
    
    $.ajax({
      url: options.url,
      type: options.type,
      data: options.data,
      dataType: options.dataType,
      try_count: 0,
      retry_limit: options.retry_limit,
      success: options.success,
      error: function(xhr, textStatus, errorThrown) {
        this.try_count++
        if (this.try_count <= this.retry_limit) {
          $.ajax(this)
          return
        }
        return
      }
    });
  },

  is_on_song_page: function() { return $("body.act-show.cont-songs").length > 0 && $('.lyrics').length > 0 },
  
  set_up_tooltip_lyric_editor: function() {
    var edit_form = $(".edit_annotation_form:visible");
    var annotation_id = edit_form.closest(".annotation_container").attr('data-id');
    
    if ($('.lyrics').hasClass("user_can_edit")) {
      var lyric = app.clean_up_lyrics($("div.lyrics a[data-id='" + annotation_id + "']").html());
      edit_form.find('.lyric_text').val(lyric).data('old-value', lyric);
    } else {
      edit_form.find('.lyric_editor').remove()
    }
  },
  
  clean_up_lyrics: function(lyrics) {
    return $.trim($('<div>').append(lyrics).find('a').each(function() {
      var $a = $(this);
      if ($a.html().match(/<br[\s\/]?>$/i)) {
        $a.find("br:last").remove();
        $a.after("<br>");
      }
    }).end()
    .find('#exegize_button').remove().end()
    .html().replace(/\s*<br[\s\/]?>([ \t]*)\s*/gi, "\n$1"));
  },
  
  ie_fail: function() {
    $.facebox("<h1>Sorry, this doesn't work in Internet Explorer yet</h1>");
  },

  set_up_vidyard_id_container: function(annotation_unit) {
    var edit_form = annotation_unit.nextAll(".edit_annotation_form")
    var video_id = annotation_unit.find("[data-video_id]:first").attr('data-video_id')

    if (annotation_unit.hasClass('current_user_can_change_video_id_on_this_annotation')) {
      edit_form.find('.video_id_container').show().find('.video_id').val(video_id)
    }
  },
  
  set_up_tooltip_for_impersonation: function(tooltip) {
    tooltip.find(".editor_links").hide()
    
    var impersonatable_units = tooltip.find(".annotation_unit[data-created_by-login=" + $("#explain_as").attr("login") + "]")
    impersonatable_units.find(".editor_links").show()
    
    var add_verified = tooltip.find('.add_verified_explanation');
    
    if (impersonatable_units.length) {
      add_verified.remove();
    } else {
      var add_link = $("<a>", {'class': "add_verified_explanation",
                               text: "Click here to add a verified " + app.sc('annotation.singular_noun') + " as " + $("#explain_as").attr("artist_name") })
      
      add_verified.length ? add_verified.replaceWith(add_link) : tooltip.find(".annotation_unit.not_verified").before(add_link)
    }
  },
  
  convert_markdown_anchors: function(text) {
    var escapeCharacters = function(text, charsToEscape, afterBackslash) {
    	// First we have to escape the escape characters so that
    	// we can build a character class out of them
    	var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g,"\\$1") + "])";

    	if (afterBackslash) {
    		regexString = "\\\\" + regexString;
    	}

    	var regex = new RegExp(regexString,"g");
    	text = text.replace(regex,escapeCharacters_callback);

    	return text;
    }

    var escapeCharacters_callback = function(wholeMatch,m1) {
    	var charCodeToEscape = m1.charCodeAt(0);
    	return "~E"+charCodeToEscape+"E";
    }

    var writeAnchorTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
    	if (m7 == undefined) m7 = "";
    	var whole_match = m1;
    	var link_text   = m2;
    	var link_id	 = m3.toLowerCase();
    	var url		= m4;
    	var title	= m7;

    	if (url == "") {
    		if (link_id == "") {
    			// lower-case and turn embedded newlines into spaces
    			link_id = link_text.toLowerCase().replace(/ ?\n/g," ");
    		}
    		url = "#"+link_id;

    		if (g_urls[link_id] != undefined) {
    			url = g_urls[link_id];
    			if (g_titles[link_id] != undefined) {
    				title = g_titles[link_id];
    			}
    		}
    		else {
    			if (whole_match.search(/\(\s*\)$/m)>-1) {
    				// Special case for explicit empty url
    				url = "";
    			} else {
    				return whole_match;
    			}
    		}
    	}	

    	url = escapeCharacters(url,"*_");
    	var result = "<a href=\"" + url + "\"";

    	if (title != "") {
    		title = title.replace(/"/g,"&quot;");
    		title = escapeCharacters(title,"*_");
    		result +=  " title=\"" + title + "\"";
    	}

    	result += ">" + link_text + "</a>";

    	return result;
    }

    // return text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);
    // new version same as last but it allows for an additional level of bracket nesting via \[\[[^\]]*\]\]
    return text.replace(/(\[((?:\[[^\]]*\]|\[\[[^\]]*\]\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);
  },
  
  get_selection: function() {
    var txt = '';
    if (document.selection) {
      txt = document.selection.createRange();
      txt.toString = function() { return this.text };
      txt.toHtml = function() { return this.htmlText };
    } else {
      txt = (window.getSelection || document.getSelection || $.noop)()
    }
    return txt;
  },
  
  markdown_to_html: function(markdown, target, partial_callback) {
    var callback = function() {
      (partial_callback || $.noop)(target)
      app.setup_embedly()
    }
    
    var client_side_logic = function(md) {
      var converter = new Attacklab.showdown.converter();

      var lone_image_url_regex = /(?:^|\s+)https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)(?=$|\s+)/igm;
      md = md.replace(lone_image_url_regex, function(match) {
        return "\n\n![](" + $.trim(match) + ")";
      });

      var html = converter.makeHtml(md);

      return $('<div>').append(html).find('a').each(function() {
        var $a = $(this);
        if ($a.attr('href').match(/^\d+$/)) {
          $a.attr('href', '/' + $a.attr('href'));
        }
      }).end().html();
    }
    
    if (target == null) {
      return client_side_logic(markdown)
    }
    
    var needsMentionsAutolinked = target.attr('data-autolink-mentions') && markdown.match(/@\S/)
    if (markdown.indexOf("[[") > -1 || needsMentionsAutolinked) {
      app.ajax_with_retry({
        url: "/utils/markdown_preview",
        type: "POST",
        data: { 'md': markdown, 'autolink_mentions': needsMentionsAutolinked },
        success: function(data) {
          target.html(data)
          callback()
        }
      })
    } else {
      target.html(client_side_logic(markdown))
      callback()
    }
    
    return target
  },
  
  setup_form_example_text: function() {
    $("input[placeholder], textarea[placeholder]").each(function() {
      var $this = $(this);
      $this.example($this.attr('placeholder'));
    });
  },
  
  delayed_nav: function(href) {
    setTimeout(function() {document.location = href}, 100);
    return false;
  },
  
  fix_webkit_autocomplete_bug: function() {
    if ($("input.quick_search").length > 0) {
      $("input[type='text']").not('.annotation_link').attr('autocomplete', 'off');
    }
  },
  
  set_up_comments: function() {
    if (!$("#disqus_thread").length) {
      return false;
    }

    $("a.show_comments").click(function(e) {
      $("#disqus_thread").show('normal');
      $(this).remove();
      return false;
    });

    var domain = 'rapexegesis';
    // var domain = 'rapgenius'
    // window.disqus_url = window.location.href.replace(/rapgenius/, "rapexegesis");

    $.getScript('http://disqus.com/forums/' + domain + '/embed.js')
  },
  
  get_comment_counts: function() {
    if (!$("a[href$='#disqus_thread']").length) {
      return false;
    }

    var domain = 'rapexegesis';

    var query = '?';
    $("a").each(function(i) {
      if (this.href && this.href.match(/#disqus_thread/)) {
        query += 'url' + i + '=' + encodeURIComponent(this.href) + '&';
      }
    });  

    $.getScript('http://disqus.com/forums/' + domain + '/get_num_replies.js' + query, function() {

    });
  },
  
  unobfuscate_url: function(url) {
    return atob(url);
  },
  
  set_up_rg_audio_players: function() {
    mejs.MediaElementDefaults.flashName = '/flash/mediaelement.swf'
    $('audio[data-decode="true"]').each(function(i, el) {
      var $el = $(el);
      $el.attr('src', app.unobfuscate_url($el.attr('data-src'))).removeAttr('data-decode')
    });
    
    $('audio').mediaelementplayer({audioWidth: '100%', enableKeyboard: false});
  },
  
  set_up_bop_fm_player: function() {
    if ($('#bopPlayer').length > 0) {
      $.getScript("http://assets.bop.fm/embed.js")
    }
  },
  
  load_vidyard_players: function($elements, load_invisible_players) {
    var $elements = $($elements || 'body').find(".vidyard_container[data-vidyard-id]")
    if (!load_invisible_players) $elements = $elements.filter(':visible')
    
    $elements.each(function() {
      var $this = $(this)
      
      var vidyard_id = $this.attr('data-vidyard-id')
      var existing_already_loaded_player = $('#vidyard_' + vidyard_id + ':first')
      
      if (existing_already_loaded_player.length) {
        $this.replaceWith(existing_already_loaded_player.remove())
      } else {
        $this.attr('id', 'vidyard_' + vidyard_id).removeAttr('data-vidyard-id')
        
        var width_param = MOBILE_DEVICE ? '?width=' + $this.parent().width() : ''

        $.getScript("http://embed.vidyard.com/embed/"+ vidyard_id +"/iframe/"+ width_param, function() {
          $this.removeClass('loading_with_indicator')
        })
      }
    })
  },
  
  setup_addthis: function() {
    $.getScript('http://s7.addthis.com/js/250/addthis_widget.js#username=rapgenius&domready=1')
  },
  
  set_up_facebook_likebox_and_twitter_follow_buttons: function() {
    $(".fb_likebox").each(function() {
      var $this = $(this)
      var facebook_name = $this.attr('data-facebook-name')
      var width = $this.attr('data-width')
      var height = $this.attr('data-height')
      $this.html('<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F' + facebook_name + '&amp;width=' + width + '&amp;colorscheme=dark&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=' + height + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:' + width + 'px; height:' + height + 'px;" allowTransparency="true"></iframe>')
    });
    $.getScript("//platform.twitter.com/widgets.js")
  },
  
  load_deferred_images: function(element) {
    var element = $(element || 'body')
    element.find("img[data-src]").each(function() {
      var $this = $(this)
      $this.attr('src', $this.attr('data-src')).removeAttr('data-src')
    })
  },
  
  process_auto_load_containers: function(elements) {
    var $elements = $(elements || ".auto_load_url:visible, .auto_load_url.load_if_not_visible")
    $elements.each(function() {
      var $this = $(this);
      
      app.ajax_with_retry({
        url: $this.attr('data-url'),
        success: function(data) {
          if ($.trim(data) == '') return $this.remove()
          
          $this.html(data).removeClass("auto_load_url")
          setTimeout(function() {$this.find('.more').click();}, 250);
        }
      })
    });
  },
  
  load_song_metadata: function() {
    if (!app.is_on_song_page()) return
    
    app.ajax_with_retry({
      url: "/songs/"+ $('div.lyrics').attr("data-id") +"/metadata",
      dataType: 'json',
      success: function(data) {
        for (selector in data) {
          $(selector).html(data[selector])
        }
      }
    });
  },
  
  get_annotation_units: function(id) {
    return $("div.annotation_unit[data-id=" + id + "]");
  },
  
  update_bulk_loaded_annotation: function(new_annotation_container) {
    if (!app.bulk_annotations) return
    
    var $new_annotation_container = $(new_annotation_container)
    var base_id = $new_annotation_container.attr('data-id')
    app.bulk_annotations[base_id] = $new_annotation_container
  },
  
  setup_annotations: function() {
    if (!app.is_on_song_page()) return
    
    var annotation_body_loader = this.load_annotation_containers
    
    if (!MOBILE_DEVICE) {
      $('div.lyrics a:not(.no_annotation, [data-id=pending])').live('mousedown', function() {
        var $this = $(this)

        if (!$this.data('qtip')) {
          app.setup_annotation_qtip($this, 'prerender')
          $this.qtip("show")
          return false;
        }
      }).live('click', function() {return false})
      
      var annotation_note_id = (window.location.hash.match(/note-(\d+)$/) || [])[1]
      if (annotation_note_id) {
        var old_annotation_body_loader = annotation_body_loader
        var annotation_body_loader = function() {
          app.open_annotation_by_id(annotation_note_id, {scroll: true}, old_annotation_body_loader)
        }
      }
    }

    annotation_body_loader()
    this.load_annotation_metadata()
  },
  
  load_annotation_containers: function(song_id) {
    var song_id = song_id || $('div.lyrics').attr("data-id")
    app.ajax_with_retry({
      type: "GET",
      url: "/annotations/for_song_page",
      dataType: 'json',
      data: { song_id: song_id },
      success: function(data) {
        app.trigger_one_time_event('bulk_annotations:loaded', data)
      }
    });
  },
  
  loaded_annotation_container: function(id) {
    return this.bulk_annotations && this.bulk_annotations[id]
  },
  
  load_annotation_full_credits: (function() {
    var full_credits_ajax_started = false

    return function() {
      if (full_credits_ajax_started) return
      
      app.ajax_with_retry({
        url: "/annotations/full_credits",
        dataType: 'json',
        data: {song_id: $("div.lyrics").attr("data-id")},
        success: function(data) {
          app.trigger_one_time_event('bulk_annotations:full_credits:loaded', data)
          
          if (MOBILE_DEVICE) $("#explanation_overlay").update_iscroll()
        }
      })
      
      full_credits_ajax_started = true
    }
  })(),
  
  setup_annotation_credits_button: function() {
    $("a.show_credits").live('click', function() {
      var $this = $(this)
      var $target = $( $this.toggleClass('pressed').attr('data-target') )

      $target.toggle();

      if ($this.closest('.stand_alone').length > 0 || $this.closest('.activity_stream_event_unit').length > 0) {
        if (!$target.hasClass('loading')) return

        app.ajax_with_retry({
          url: "/annotations/full_credits",
          data: {annotation_id: $target.attr("data-id")},
          success: function(data) {
            $target.html(data).removeClass('loading')
            if (MOBILE_DEVICE) $("#explanation_overlay").update_iscroll()
          }
        })
      } else { app.load_annotation_full_credits() }
    })
  },
  
  load_annotation_metadata: function() {
    var song_id = $("div.lyrics").attr("data-id")
    
    app.ajax_with_retry({
      url: "/annotations/footers",
      dataType: 'json',
      data: {song_id: song_id},
      success: function(data) {
        app.trigger_one_time_event('bulk_annotations:footers:loaded', data)
      }
    })
    
    app.ajax_with_retry({
      url: "/annotations/comments",
      dataType: 'json',
      data: {song_id: song_id},
      success: function(data) {
        app.trigger_one_time_event('bulk_annotations:comments:loaded', data)
      }
    })
  },
  
  show_edit_buttons: function() {
    $("a.edit_lyrics").show();
    $('form.edit_song').show();
  },
  
  fixRange: function(range) {
    var rangeString = range.toString();
    try {
      while (rangeString[0] != " " && rangeString[0] != "\n") {
        range.setStart(range.startContainer, range.startOffset - 1);
        rangeString = range.toString();
      }
      range.setStart(range.startContainer, range.startOffset + 1);
      } catch (e) {}
    try {
      while (rangeString[rangeString.length - 1] != " " && rangeString[rangeString.length - 1] != "\n" ) {
        range.setEnd(range.endContainer, range.endOffset + 1);
        rangeString = range.toString();
      }
    range.setEnd(range.endContainer, range.endOffset - 1);
    } catch (e) {}
    return range;
  },
  
  get_referent_text_by_annotation_id: function(annotation_id) {
    return $(".lyrics a[data-id=" + annotation_id + "]").text().replace(/\n/g, ' / ')
  },
  
  open_annotation_by_id: function(id, options, callback) {
    var callback = callback || $.noop
    var id = parseInt(id, 10)
    var target = $(".lyrics a[data-id="+ id +"]")
    
    options = options || {}
    
    if (options.scroll) target.scrollToCenterOfScreen()
    
    if (MOBILE_DEVICE) {
      $("body").addClass('loading')
      
      var line = app.get_referent_text_by_annotation_id(id)
      target.addClass("active_referent").siblings().removeClass("active_referent")

      if (app.loaded_annotation_container(id)) {
        $('#explanation_scroller').html(app.loaded_annotation_container(id).clone())
        app.setup_annotation_display($('#explanation_scroller'), line)
      } else {
        $.get("/annotations/" + id, function(data) {
          $("#explanation_scroller").html(data)
          app.setup_annotation_display($('#explanation_scroller'), line)
        })
      }
      callback()
    } else {
      window.setTimeout(function() {target.mousedown(); callback()}, 1)
    }
    
    return !!target.length;
  },
  
  setup_no_annotation_anchors: function() {
    var hash = (location.href.split("#")[1] || "") // http://stackoverflow.com/questions/1703552
    var match = hash.match(/^lyric-(.*)/)
    var encoded_referent;
    if (match) {
      encoded_referent = match[1];
      location.hash = 'lyric';
    }
    
    $("a.no_annotation").each(function() {
      var $this = $(this);
      
      if (encoded_referent && this.href.split('?')[1].toLowerCase().indexOf(encoded_referent.toLowerCase()) != -1) {
        $this.addClass('highlight').removeAttr('href');
        setTimeout(function() {
          $this.scrollToCenterOfScreen()
        }, 1)
      } else {
        $this.replaceWith($this.html());
      }
    });
    
    $(".lyrics").mousedown(function() {
      app.kill_no_annotation_anchors();
    }).bind("make_editable", function() {
      app.kill_no_annotation_anchors();
    });
  },
  
  kill_no_annotation_anchors: function() {
    $("a.no_annotation").each(function() {
      var $this = $(this);
      $this.replaceWith($this.html());
    });
  },
  
  setup_zeroclipboard: function() {
    $(".copy_to_clipboard.inactive").live('mouseenter', function() {
      var $this = $(this);
      var clip = new ZeroClipboard.Client();
      var back_to = '#efefef'
      var container = $this.closest('.qtip')
      if (container.length == 0) container = $this.closest('.stand_alone_annotation_container')
      if (container.length == 0) container = $this.parent();
      
      clip.glue($this[0], container[0]);
      clip.setText($this.attr('title'));
      clip.addEventListener('complete', function(client, text) {
        $(client.domElement).text("Copied!").addClass('copied')
      });
      
      $this.removeClass('inactive');
    })
  },
  
  activate_faceboxes: function(parent) {
    $('a.facebox, a[rel*=facebox]').live('mousedown', function(){
      $(this).unbind("click").facebox()
    })
  },
  
  event_happened_in_field: function(event) {
    return (/textarea|select/i.test( event.target.nodeName ) || event.target.type === "text" || event.target.type === "password")
  },
  
  setup_sharing_in_container: function(container) {
    var $container = $(container);
    var $addthis_code = $container.find('.addthis_code');
    $addthis_code.each(function() {
      var $this = $(this);
      $this.replaceWith($this.attr('data-code') || $this.val())
    })
    
    var to_wait = 1;
    if (typeof(addthis) == 'undefined') to_wait = 1500
    window.setTimeout(function() {
      try {
        var toolbox = $container.find('.addthis_toolbox.inactive')
        toolbox.each(function() {
          addthis.toolbox(this);
          $(this).removeClass('inactive');  
        })
        // from http://goo.gl/2vwoJ (until addthis fixes the twitter bug)
        // $.getScript('http://platform.twitter.com/widgets.js');
      } catch(e) {}
      if (MOBILE_DEVICE) {
        $("#mobile_sharing_container").html( $container.find(".share").html() )
      }
    }, to_wait) // in case addthis hasn't loaded yet    
  },
  
  setup_annotation_display: function(container, line) {
    var $container = $(container)
    
    if (MOBILE_DEVICE) {
      $("body").addClass("explanation_showing").removeClass("loading")
      $('#explanation_overlay #annotated_line').text(line)
    } else {
      app.activate_generic_tool_tips($container);
    }
    
    app.load_deferred_images($container)
    app.set_up_timeago($container)
    
    var setup_extra_stuff = function() {
      app.setup_form_example_text();
      
      app.setup_embedly($container)
      app.setup_embedly_pro($container)
      app.load_vidyard_players($container, "load_invisible_players")
      
      if (MOBILE_DEVICE) {
        $("#explanation_overlay").update_iscroll()
        $("#explanation_overlay .body img").load(function() { $("#explanation_overlay").update_iscroll() })
        $("#explanation_overlay .toggle_sharable_options").bind("touchstart", function() {
          app.setup_sharing_in_container($container)
        })
      }
    }
    
    MOBILE_DEVICE ? window.setTimeout(setup_extra_stuff, 100) : setup_extra_stuff()
  },
  
  kill_orphaned_tooltips: function() {
    $(".qtip:visible").each(function() {
      var $this = $(this);
      if ($this.qtip('api').elements.target.is(":detached")) {
        $this.qtip('destroy').hide();
      }
    });
  },
  
  hide_all_rg_tooltips: function() {
    $(".toggle_rg_tooltip.pressed").removeClass('pressed')
    $(".rg_tooltip").hide().removeClass('active')
  },
  
  setup_embedly_pro: function(container) {
    container = container || ".embedly_pro:visible"
    
    $(container).find("a:inner_text_matches(^https?://)").each(function() {
      if (app.embedlyURLre.test(this.href)) return true
      var $this = $(this)
      var width = $this.closest('[data-embedly-width]').attr('data-embedly-width') 
                  || $this.parent().width() - 10

      $.embedly(this.href, {key: EMBEDLY_KEY, width: ''}, function(oembed, dict) {
        if(!oembed.description || $this.parent().contents().last()[0] !== $this[0] || !$this.is(':only-child')) {
          $this.text(oembed.title)
          return
        }

        var html = '<div class="embedly_pro_preview has_thumb"><img class="thumb" src="'+ oembed.thumbnail_url +'"> \
                      <div class="text"><a class="title" href="'+ oembed.url +'">'+ oembed.title +'</a> \
                      <div class="description">'+ oembed.description +'</div></div></div>'
        if (!oembed.thumbnail_url) {
          html = $(html).removeClass("has_thumb").find('img.thumb').remove().end().outer_html()
        }

        $this.replaceWith(html)
      });
    });
  },
  
  setup_embedly: function(container) {
    var $container = $(container || ".embedly:visible")
    
    $container.find("a:inner_text_matches(^https?://)").each(function() {
      var $this = $(this), match
      
      if ($this.parent().is('.embed')) return true

      if (app.twitterURLre.test(this.href)) {
        $this.replaceWith($(app.templates.twitter_embed.render({tweet_url: this.href})))
        $.getScript("//platform.twitter.com/widgets.js")
      }
      else if (match = this.href.match(/https?:\/\/embed\.vidyard\.com\/(landingpage|share)\/(.*)/i)) {
        $this.addClass('vidyard_container').attr('data-vidyard-id', match[2]).removeAttr('href')
                                                                              // so embedly pro doesn't catch it
        app.load_vidyard_players($container)
        return true
      }
      else if (app.embedlyURLre.test(this.href)) {
        var width = $this.closest('[data-embedly-width]').attr('data-embedly-width') 
                    || $this.parent().width() - 10
        if (MOBILE_DEVICE) width = $this.parent().width()
      
        var options = { maxWidth: width, key: EMBEDLY_KEY, width: '' }
        $this.embedly(options);
      }
      else {
        return true;
      }
      
      $this.text("Loading embed...")
    });
    
    app.setup_embedly_pro();
  },
  
  ajaxify_pagination_links: function() {
    var ajaxify_new_pagination_links = function() {
      $("div.pagination").each(function() {
        var $this = $(this);

        if (! $this.find("a.next_page").length) {
          if ($this.find("span.disabled.next_page").length) {
            $this.remove();
          }
          return true;
        }

        var url = $this.find("a.next_page").attr('href');

        $this.html($("<a>more</a>").addClass("more button").attr("href", url));
      });
    }
    
    ajaxify_new_pagination_links()
    
    $("div.pagination a.more").live('click', function() {
      var a = $(this);

      a.addClass("loading")
      
      app.ajax_with_retry({
        url: a.attr('href'),
        success: function(data) {
          a.closest('div').before(data);
          a.closest('div').remove();
          try{app.get_comment_counts()} catch(e) {}
        }
      })

      return false;
    });

    $(window).scroll(function() {
      $.doTimeout('window_scroll', 250, function() {
        pixelsFromWindowBottomToBottom = 0 + $(document).height() - ($(window).scrollTop()) - $(window).height()

        if (pixelsFromWindowBottomToBottom < 2000) {
          $("a.more:visible:not(.loading, .no_auto_more a)").click()
        }
      })
    })

    $("div.pagination a.more").live('mousedown', function() {
      var path = this.href.replace(jQuery.urlInternalRegExp(), '');
      var non_qs = path.split("?")[0];
      var page = path.split("?")[1].match(/page=(\d+)/)[1];
      _gaq.push(['_trackEvent', 'Pagination', non_qs + " page " + page]);
    });
    
    $(document).ajaxComplete(function() {
      ajaxify_new_pagination_links();
    })
    
    $(window).load(function() {
      window.setTimeout(function() {
        $("a.more:not(.loading, .no_auto_more a)").click();
      }, 250);
    })
  },
  
  setup_markdown_previews: function() {
    if (!$("html").hasClass('on_load_event_fired')) return // it's gonna run onload anyway
    
    $('textarea.markdown_preview').each(function() {
      var $textarea = $(this);
      $textarea.after(
        '<div class="markdown_preview_container"> \
          <div class="preview embedly embedly_pro" ' + ($textarea.attr('data-mentions-autocomplete') ? 'data-autolink-mentions="true"' : '') + '>Start typing to see a preview</div> \
        </div>'
      )
      $textarea.next().andSelf().wrapAll('<div class="clearfix">');

      var identifier = "md_preview_" + +(new Date);
      var old_value = null

      var regenerate_markdown_preview = function() {
        $(this).doTimeout(identifier, 250, function() {
          var new_value = $textarea.val()
          if (new_value === old_value) return
          
          app.markdown_to_html(new_value, $textarea.siblings(".markdown_preview_container").find('.preview'), function() {
            old_value = new_value
          })
        })
      }

      $textarea.keyup(regenerate_markdown_preview).removeClass("markdown_preview").addClass("markdown_preview_setup_complete")
      regenerate_markdown_preview()
    });
  },
  
  setup_messages_button: function() {
    if (!CURRENT_USER) return
    
    app.ajax_with_retry({
      url: "/messages/count",
      success: function(data) {
        var num = parseInt(data, 10)
        if (num > 0) $("#unread_message_count").text(num).parent().addClass("has_unread_messages")
      }
    })
  },
  
  setup_activity_stream_button: function() {
    if (!CURRENT_USER) return
    
    app.ajax_with_retry({
      url: "/activity_stream/count",
      success: function(data) {
        var num = parseInt(data, 10)
        if (num > 0) $("#unread_activity_stream_items_count").text(num).parent().addClass("has_unread_activity_stream_items")
      }
    })
  },
  
  setup_iscroll: function() {
    if (Modernizr.has_native_scrolling) return

    app.iscrollers = app.iscrollers || {}
    var iscroll_options = {checkDOMChanges: true, hScrollbar: false, bounce: false, bounceLock: true}
    
    $(".iscrollable").each(function() {
      var $this = $(this)
      var id = $this.attr("id")

      app.iscrollers[id] = new iScroll(id, iscroll_options)
      $this.removeClass('iscrollable').addClass('iscrolled') // so we can run the method again without double-adding
    })
  },
  
  mobile_scroller: function(override_current_scroller) {
    var current_scroller = $("body").hasClass("explanation_showing") ? "explanation_overlay" : "container"
    if (override_current_scroller) current_scroller = override_current_scroller
    return (Modernizr.has_native_scrolling) ? $("#" + current_scroller) : app.iscrollers[current_scroller]
  },
  
  optimize_mobile_address_bar: function() {
    $('#header').click(function() {
      app.mobile_scroller().scrollTo(0, 250)
      $("html").addClass("show_url_bar")
      window.setTimeout(function() { $("html").removeClass("show_url_bar") }, 300)
    })
        
    if (!Modernizr.supports_url_bar_hiding) return
        
    $(window).bind("orientationchange", function() { window.scrollTo(0, 0) })
    window.setTimeout(function(){ $(window).trigger("orientationchange") }, 100)
    
    window.setInterval(function() {
      var user_scrolled_past_bottom = window.pageYOffset > 0
      
      if (user_scrolled_past_bottom || app.mobile_scroller().scrollTop() > 50) window.scrollTo(0, 0)
    }, 250)
  },

  wrap_ajax_posts: function(event, request, settings) {
    // this is causing problems with $.getJSON, but whatever for now..
    request.setRequestHeader("Accept", "application/x-javascript, text/javascript, text/html, application/xml, text/xml, */*");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // http://www.viget.com/extend/ie-jquery-rails-and-http-oh-my
    if (typeof(AUTH_TOKEN) == "undefined") return;
    if (settings.type.match(/^get$/i)) return;

    request.setRequestHeader('X-CSRF-Token', AUTH_TOKEN)

    settings.data = settings.data || "";
    settings.data += ((settings.data == "") ? "" : "&") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);
    if ($("div.song_updated_by_human_at").length > 0) {
      settings.data += "&song[updated_by_human_at]=" + encodeURIComponent($("div.song_updated_by_human_at").text());
    }
  },

  sc: function(key, scope) {
    if (typeof(scope) == "undefined") scope = CURRENT_CHANNEL

    return I18n.translate(key, {scope: scope, defaultValue: I18n.translate(key)})
  },

  set_up_timeago: (function() {
    var interval = null;
    var set_times = function(selector) {
      var $selector = $(selector || 'body')
      $selector.find('[data-timeago]').each(function() {
        var $this = $(this)
        var time_ago = $.timeago($this.attr('data-timeago')).replace(/^about /, '')
        if (time_ago !== $this.text()) {
          $this.text(time_ago)
        }
      })
    }

    return function(selector) {
      set_times(selector)

      if (!interval) {
        interval = setInterval(function() { set_times() }, 1000 * 60)
      }
    }
  })()
});

(function() {
  var callbacks = {}
  var triggered_events = {}

  var run_callbacks = function(event_name) {
    if (triggered_events[event_name]) {
      $.each(callbacks[event_name] || [], function(idx, cb) {      
        cb($.extend(true, {}, triggered_events[event_name]).data)
      })
      delete callbacks[event_name]
    }
  }

  $.extend(window.app, {
    add_callback_once: function(event_name, callback) {
      callbacks[event_name] = callbacks[event_name] || []
      callbacks[event_name].push(callback)

      run_callbacks(event_name)
    },

    trigger_one_time_event: function(event_name, data) {
      triggered_events[event_name] = {data: data}

      run_callbacks(event_name)
    }
  })
})()
;
$.extend(window.app, {
  activate_generic_tool_tips: function(parent) {
    if (typeof(parent) === 'undefined')
      var $collection = $("[tooltip]");
    else {
      var $collection = $(parent).find("[tooltip]");
    }

    $collection.each(function() {
      var $this = $(this);
      if (!!$this.data('qtip')) return true;

      var text = $this.attr('tooltip');
      var url = false;
      if ($this.attr('tooltip').match(/^\//) || $this.attr('tooltip').match(/^http/)) {
        text = "<h4 style='text-align:center'>Loading...</h4>";
        url = $this.attr('tooltip');
      }

      $this.qtip({
        content: { 
          text: text,
          url: url,
          title: {
            text: $this.attr("tt-title") || false
          }
        },
        position: {
          adjust: {
            screen: true
          },
          corner: {
            target: $this.attr('tt-target-corner') || 'bottomMiddle',
            tooltip: $this.attr('tt-tooltip-corner') || 'topMiddle'
          }        
        },
        hide: {
          fixed: !!$this.attr('tt-fixed'),
          delay: $this.attr('tt-hide-delay') || 0,
          effect: {length: 0},
          when: {
            event: $this.attr("tt-hide") || 'mouseout'
          }
        },
        show: {
          effect: {length: 0},
          delay: $this.attr('tt-delay') || 140,
          // effect: {length: 0},
          when: {
            event: $this.attr('tt-show') || 'mouseover'
          }
        },
        style: {
          width: {
            min: 0,
            max: $this.attr('tt-width') || 200
          },
          border: {
            radius: 0
            // radius: 5
          },
          classes: {
            tooltip: $this.attr('tt-class') || 'rg_tooltip'
          },
          tip: true,
          name: $this.attr('tt-theme') || 'dark'
        },
        api: {
          beforePositionUpdate: function() {
            if(!$(this.elements.target).is(":visible")) {
              $(this.elements.tooltip).qtip("hide");
            }
          }
        }
      });
    });
  },

  setup_annotation_qtip: function($element, prerender) {
    if ($element.data('qtip')) return
    
    var already_loaded_tooltip_content = app.loaded_annotation_container($element.attr('data-id'))
    
    if (already_loaded_tooltip_content) {
      app.annotation_qtip($element, {content: { text: already_loaded_tooltip_content.clone(),
                                                prerender: !!prerender }})
    } else {
      app.setup_lazy_loading_annotation_qtip($element, prerender)
    }
  },
  
  setup_lazy_loading_annotation_qtip: function($element, prerender) {
    var id = $element.attr('data-id');

    app.annotation_qtip($element, {
      content: {
        text: $('<div class="annotation_is_loading"></div>'),
        url: $element.attr('href'),
        prerender: !!prerender,
      }
    })
  },

  annotation_qtip: function($element, options) {
    var default_options = {
      content: {
        prerender: false,
      },
      position: {
        adjust: ANNOTATION_QTIP_POSITION.adjustments,
        corner: {
          target: ANNOTATION_QTIP_POSITION.target,
          tooltip: ANNOTATION_QTIP_POSITION.tooltip
        }        
      },
      hide: {
        when: {
          event: 'unfocus'
          // event: 'mouseout',
          // fixed: true
        },
        effect: {length: 0}
      },
      show: {
        delay: 0,
        effect: {length: 0},
        solo: true,
        when: {
          event: 'mousedown'
          // event: 'mouseover'
        }
      },
      api: {
        reposition: function() {
          this.hide().show()
        },
        
        onShow: function() {
          if (this.onShowAdditions) this.onShowAdditions()
          
          var $target = $(this.elements.target)
          var $tooltip = $(this.elements.tooltip)
          
           _gaq.push(['_trackEvent', 'Explanations', "Open " + $target.attr('data-id')]);
      
          $target.addClass('active');

          app.setup_annotation_display($tooltip)

          var tt = this
          window.setTimeout(function() {
            // the tooltip shouldn't move after it appears
            tt.beforePositionUpdate = function() {return false};
            
            if ($("#explain_as").attr("login")) app.set_up_tooltip_for_impersonation($tooltip)
          }, 1)
        },
        onHide: function() {
          $(this.elements.target).removeClass('active');
          this.beforePositionUpdate = function() {return true};
        }
      },
      style: {
        width: 500,
        classes: {
          tooltip: 'explanation qtip-light'
        },
        border: {
          radius: 0
          // radius: 10
        },
        // tip: 'leftMiddle',
        name: 'light'
        // name: 'dark'
      }
    }
    return $element.qtip($.extend(true, default_options, options))
  }
});


(function() {
  var annotations = {
    update_bodies: function(bodies) {
      for (id in bodies) {
        bodies[id] = $(bodies[id])
        app.load_deferred_images(bodies[id])
      }
      
      app.bulk_annotations = bodies
    },

    update_metadata: function(selector, metadata) {
      for (base_id in app.bulk_annotations) {
        app.bulk_annotations[base_id].find('.annotation_unit').each(function() {
          var $this = $(this)
          var id = $this.attr('data-id')
          $this.find(selector).replaceWith(metadata[id])
        })
      }

      $('.annotation_unit').each(function() {
        var $this = $(this)
        $this.find(selector).replaceWith(metadata[$this.attr('data-id')])
      })
    }
  }

  app.add_callback_once('bulk_annotations:loaded', function(content) {
    annotations.update_bodies(content)
    
    app.add_callback_once('bulk_annotations:comments:loaded', function(comments) {
      annotations.update_metadata('.comment_placeholder', comments)
    })
    
    app.add_callback_once('bulk_annotations:footers:loaded', function(footers) {
      annotations.update_metadata('.footer_placeholder', footers)
    })

    app.add_callback_once('bulk_annotations:full_credits:loaded', function(full_credits) {
      annotations.update_metadata('.full_credits_placeholder', full_credits)
    })
  })
})()
;
$.extend(window.app, {
  on_document_load: function() {
    app.pusher = new Pusher(PUSHER_APP_KEY);
    
    app.setup_messages_button()
    app.setup_markdown_previews()
    app.setup_activity_stream_button()
    app.setup_no_annotation_anchors()
    app.activate_generic_tool_tips();
    app.setup_annotations()
    app.load_song_metadata()
    app.activate_faceboxes();
    app.setup_zeroclipboard();
    app.setup_form_example_text();
    app.setup_annotation_credits_button()
    app.ajaxify_pagination_links();
    app.set_up_comments();
    app.get_comment_counts();
    $("#wmd-input, .autogrow").autogrow();
    app.set_up_timeago()
    
    app.setup_addthis();
    app.process_auto_load_containers();
    
    app.set_up_rg_audio_players()
    app.set_up_bop_fm_player()
    app.setup_embedly();
    app.load_vidyard_players()
    
    app.set_up_facebook_likebox_and_twitter_follow_buttons()
    app.set_up_mentions_autocomplete()
  },
  
  on_window_load: function() {
    if (!PRODUCTION_ENV || ADMIN_LOGGED_IN) {
      log("Client load time: " + ((new Date()).getTime() - _sf_startpt) / 1000)
      log("Server load time: " + $("#request_time").text())
    }
    
    $("html").addClass("on_load_event_fired");
    app.load_deferred_images();
  },
  
  on_ajax_complete: function() {
    app.setup_form_example_text();
    app.setup_markdown_previews();
    app.fix_webkit_autocomplete_bug();
    app.activate_generic_tool_tips();
    app.kill_orphaned_tooltips();
    app.set_up_timeago()
    $("#wmd-input, .autogrow").autogrow();
    app.setup_embedly();
    app.load_vidyard_players();
    if (typeof(addthis) != 'undefined') {
      $('.addthis_toolbox.inactive').each(function() {
        var $this = $(this)
        if (!$this.children('.atclear').length) {
          addthis.toolbox(this)
        }
        $this.removeClass('inactive')
      })
    }
  }
});

$(document).ajaxError(function(e, xhr, options, error) {
  if (xhr.readyState === 0) return

  if (xhr.status == 401) {
    $.facebox(xhr.responseText);
  } else if (xhr.status == 400 && (xhr.getResponseHeader('content-type') || "").indexOf("javascript") > 0) {
    $.globalEval(xhr.responseText)
  } else {
    if (options.retry_limit) return
    
    $.facebox(app.templates.ajax_error_message);
    $(document).bind('close.facebox', function() {
      if (PRODUCTION_ENV) window.location.reload(true);
    });
  }
}).ajaxComplete(function() {
  app.on_ajax_complete();
}).ajaxSend(function(event, request, settings) {
  app.wrap_ajax_posts(event, request, settings)
});

$(document).ready(function() {
  app.on_document_load();
})

$(window).load(function() {
  app.on_window_load();
})

window.onbeforeunload = function() {
  if (app.ajaxQueue.inProgress === 1) {
    return "Something is saving in the background. You should chill for a few seconds";
  } else if (app.cameraTagUploadInProgress) {
    return 'Your video is uploading. Click "Don\'t Reload" to wait until it finishes';
  }
}
;
$(document).ready(function() {
  $(".annotation_body a, .description a, .post_body a, .message_container .message a").live('click', function(event) {
    if ($.isUrlInternal(this.href)) {
      var path = this.href.replace(jQuery.urlInternalRegExp(), '');
      var anno_id = path.split('/')[0]
      if (app.open_annotation_by_id(anno_id, {scroll: true})) {
        event.preventDefault();
      }
    }
    
    // don't open (e.g.) footnotes and other hash fragments in a new window
    if (!$.isUrlFragment(this.href)) {
      $(this).attr("target", "_blank");
    }
  });
  
  $("a:urlExternal").live('click', function(event) {
    if (app.embedlyURLre.test(this.href)) {
      // disabling this for now b/c a) it's kind of confusing, and b) you can get into
      // an infinite loop situation if (say) you're dealing with a unembeddable youtuve video
      
      // var $this = $(this)
      // 
      // $this.text($this.text() + " (Loading...)")
      // _gaq.push(['_trackEvent', 'Inline Embedly', this.href]);
      // var options = PRODUCTION_ENV ? { maxWidth: $this.parent().width() - 10, key: EMBEDLY_KEY } :
      //               { maxWidth: $this.parent().width() - 10 }
      // $this.embedly(options);
    } else {
      event.preventDefault();
      
      _gaq.push(['_trackEvent', 'Outbound Links', this.href]);
      window.open(this.href);
    }
  });
  
  $(".submit_on_blur").blur(function() {
    var closest_form = $(this).closest('form');
    var form = closest_form.length == 0 ? $('form.edit_song') : closest_form;
    
    $.doTimeout('submit-on-blur', 500, function() {
      form.submit();
    });
  });
  
  $("input.submit_on_click").click(function() {
    var closest_form = $(this).closest('form');
    var form = closest_form.length == 0 ? $('form.edit_song') : closest_form;
    
    $.doTimeout('submit-on-click', 500, function() {
      form.submit();
    });
  });
  
	$("form.global_search").submit(function() {
	  if ($.trim($("#q").val()) === '') return false;
	});
	
	$("form.global_search .submit_search").click(function(){
	  $(this).closest("form.global_search").submit()
	})
	
  $("form.bulk_edit input[type='checkbox']").click(function(){$(this).closest('form').submit() })
  
  $("a.more_by_this_artist").click(function() {
    _gaq.push(['_trackEvent', 'Go To Box', "More by this artist"]);
    return app.delayed_nav(this.href);
  });
  
  $("ul.radio").click(function() {
    $("li", $(this)).removeClass('selected').filter( ':has(:checked)' ).addClass( 'selected' );
  });
  
  $("a.before").click(function() {
    var $anchor = $(this);
    $.get(this.href, function(data) {
      $anchor.before(data);
    });
    return false;
  });
  
  $("a.load_in_parent").live('click', function(e) {
    var $parent = $(this).parent()
    
    $parent.addClass("loading_with_indicator")
    app.ajax_with_retry({
      url: this.href,
      success: function(data) {
        $parent.html(data).removeClass("loading_with_indicator")
      }
    })

    e.stopImmediatePropagation()
    return false
  })
  
  $("[data-delegates-click]").live("click", function(e) {
    if ($(e.target).is("a")) return
    $(this).find("[data-delegated-click-target]")[0].click()
  })
  
  $(".toggle_target").live('click', function(e) {
    var $this = $(this).toggleClass('pressed')
    var $target = $this.attr('data-relative') ? $this.find($this.attr('data-target')) : $($this.attr('data-target'));
    var focus = $this.attr("data-focus")
    
    $target.toggle();
    if (focus) $(focus).focus()
    
    e.stopImmediatePropagation()
    return false;
  });
  
  $("a.prevent_default").live('click', function(e) {
    e.preventDefault()
  })
  
  $('.condensed textarea, .condensed input').live('focus', function() {
    $(this).closest('.condensed').removeClass('condensed')
  })
  
  $(".toggle_rg_tooltip:not(.pressed)").live('click', function(e) {
    var $this = $(this)
    var $target = ($this.attr("data-relative")) ? $this.find($this.attr('data-target')) : $($this.attr('data-target'))
    
    // todo: hack – use a real tooltip with a real callback
    if (!MOBILE_DEVICE) app.setup_sharing_in_container($target)
    
    app.hide_all_rg_tooltips()
    
    $target.show().addClass('active').find('.close').click(function(){ app.hide_all_rg_tooltips(); return false; })
    $this.addClass('pressed')
    $('body').addClass('hide_all_rg_tooltips_on_click')

    e.stopImmediatePropagation()
    return false;
  })
  
  $('.hide_all_rg_tooltips_on_click').live('click', function(e) {
    var $target = $(e.target)
    if ($target.is(".rg_tooltip") || $target.is('embed[id*="ZeroClipboardMovie"]') || !!$target.closest('.rg_tooltip').length) return
    app.hide_all_rg_tooltips()
    $(this).removeClass('hide_all_rg_tooltips')
  })

  $('.double_toggle a').live('click', function(e){
    $($(this).siblings('a').removeClass('active').attr('data-target')).hide()
    $($(this).toggleClass('active').attr('data-target')).toggle();

    e.stopImmediatePropagation()
    return false;
  })
  
  $("a.disabled").live('click', function(e) {
    e.stopImmediatePropagation()
    return false;
  });
  
  $("input#embed_song_mp3_url").keyup(function() {
    var val = this.value;
    var result = '<object height="24" width="290" data="/flash/player.swf" type="application/x-shockwave-flash"> \
    <param value="/flash/player.swf" name="movie"> \
    <param value="playerID=1&amp;bg=0xf8f8f8&amp;leftbg=0x000000&amp;lefticon=0xFFAD5A&amp;rightbg=0xcccccc&amp;rightbghover=0x999999&amp;righticon=0x666666&amp;righticonhover=0xffffff&amp;text=0x666666&amp;slider=0xFFAD5A&amp;track=0xFFFFFF&amp;border=0x000000&amp;loader=0x222222&amp;soundFile='+val+'" name="FlashVars">\
    <param value="high" name="quality"><param value="false" name="menu"><param value="transparent" name="wmode"></object>';
    $("#embed_song_html").val(result);
  }).keyup();
  
  $("input#postlet_image_url").bind('keyup blur', function() {
    var val = this.value;
    
    $(".postlet_unit img").attr('src', val);
    if ($.trim(val) !== '') {
      $(".postlet_unit .sample").removeClass("no_image");
    } else {
      $(".postlet_unit .sample").addClass("no_image");
    }
  }).keyup()
  
  $("#postlet_sample").bind('keyup blur', function() {
    var value = this.value
    $.doTimeout('postlet_sample', 500, function() {
      app.markdown_to_html(value, $('.postlet_unit .sample'));
    })
  }).keyup()
  
  $("#postlet_body").bind('keyup blur', function() {
    var value = this.value
    $.doTimeout('postlet_body', 500, function() {
      app.markdown_to_html(value, $(".postlet_unit .body.embedly"));
    })
  }).keyup()
  
  $("#new_editorial_feedback").live("submit", function(e) {
    $(this).ajaxSubmit({dataType : 'script'});
    e.stopImmediatePropagation()
    return false;
  });
  
  $("a.reveal_next_element_and_remove").click(function() {
    $(this).next().show().end().remove();
    return false;
  });
  
  $(".custom_share.twitter").live('click', function(e) {
    var $this = $(this)
    
    var base_url = 'https://twitter.com/intent/tweet'
    var url = encodeURIComponent($this.attr('data-url'))
    var text = encodeURIComponent($this.attr('data-text'))
    
    var final_url = base_url + "?url="+ url +"&text="+ text
    
    window.open(final_url, '', 'scrollbars=yes, width=550, height=252')
    e.stopImmediatePropagation()
    return false
  })
  
  $(".custom_share.facebook").live('click', function(e) {
    var $this = $(this)
    
    var base_url = 'http://www.facebook.com/sharer.php'
    var url = encodeURIComponent($this.attr('data-url'))
        
    var final_url = base_url + "?u=" + url
    
    window.open(final_url, '', 'scrollbars=yes, width=660, height=328')
    e.stopImmediatePropagation()
    return false
  })

  $("form").live('submit', function (e) {
    if (typeof(AUTH_TOKEN) === "undefined") return;
    $(this).find('input[name="authenticity_token"]').val(AUTH_TOKEN);
  })
});
window.app = window.app || {}

app.templates = {
  ajax_error_message: '<h1>Looks like you came up short!</h1> \
      <h3>Something went wrong; we have to reload the page</h3> \
      <p><a class="facebox" href="/feedback/new">Contact us</a> if this keeps happening</p>',
  twitter_embed: Hogan.compile('<blockquote class="twitter-tweet"><a href="{{tweet_url}}"></a></blockquote>')
};
window.app.activity_stream = window.app.activity_stream || {};

$.extend(window.app.activity_stream, {
  shown: false,
  
  record_activity_stream_shown: function() {
    $("#activity_stream_icon").removeClass("has_unread_activity_stream_items")
    app.activity_stream.shown = true;
    
    app.activity_stream.mark_visible_as_read();
  },

  record_activity_stream_hidden: function() {
    app.activity_stream.shown = false;
  },
  
  mark_visible_as_read: function() {
    var $form = $('form#mark_activity_stream_read')
    if (!$form.length || !app.activity_stream.shown) return
    
    $.post($form.attr('action'), $form.serialize());
    $form.remove()
  }
});

$(window).load(function() {
  $("#activity_stream_icon").qtip({
    content: {
      prerender: true,
      url: "/activity_stream",
      data: { event_id_to_expand: $.deparam.querystring()['event_id_to_expand'] },
      text: $("<div>", {"class": "qtip-loading-bar"})
    },
    position: {
      adjust: {
        x: 302,
        y: 20,
        screen: true
      },
      corner: {
        target: "bottomLeft",
        tooltip: "topRight"
      }
    },
    hide: {
      effect: {length: 0},
      when: {event: 'unfocus'}
    },
    show: {
      effect: {length: 0},
      delay: 0,
      when: {event: 'click'}
    },
    style: {
      name: 'light',
      tip: {
        corner: 'topRight',
        size: { x: 20, y: 20 }
      },
      width: {
        min: 580,
        max: 580
      },
      border: {
        radius: 0, 
        width: 0, 
        color: 'transparent'
      },
      classes: {
        tooltip: 'activity_stream_tooltip',
        content: 'activity_stream_tooltip_content',
        tip: 'activity_stream_tip'
      }
    },
    api: {
      onContentUpdate: app.activity_stream.mark_visible_as_read,
      onShow: app.activity_stream.record_activity_stream_shown,
      onHide: app.activity_stream.record_activity_stream_hidden
    }
  });
});

$(document).ready(function() {
  $('.show_all_activity_stream_names').live('click', function() {
    var $parent = $(this).parent()
    $parent.prev('.all_actor_names').show();
    $parent.prev('.summary_actor_names').hide().end().remove();
    return false;
  });
  
  $('.action_summary').live('click', function() {
    var $event_unit = $(this).closest('.activity_stream_event_unit'), $target = $event_unit.find('.target')
            
    if (!$event_unit.hasClass("details_loaded")) {
      $event_unit.addClass("loading")
      app.ajax_with_retry({
        url: $target.attr('data-get-url'),
        success: function(data) {
          $event_unit.addClass('active details_loaded').removeClass("loading")
          app.setup_embedly($target.find('.event_context').html(data))
        }
      })
    } else {
      $event_unit.toggleClass('active')
    }
  })
  
  $('.show_more_activites').live('click', function() {
    var $this = $(this).addClass('loading')
    app.ajax_with_retry({
      url: this.href,
      success: function(data) {
        $this.before(data).remove()
        app.activity_stream.mark_visible_as_read();
      }
    })
    return false
  }) 
})
;
$(function() {
  var $song_list = $('.song_list')
  if ($song_list.hasClass('can_edit_album')) {
    var new_track_template = Hogan.compile($('#new_track_template').html())

    $("#add_song_to_album").autocomplete($("input.quick_search").attr("data-url"), {
      delay: 250,
      scrollHeight: 500,
      matchSubset: false,
      max: 20,
      minChars: 4,
      selectFirst: true,
      dataType: 'html'
    }).result(function(event, data, formatted) {
      app.ajaxQueue.add({
        type: 'post',
        url: $('form.edit_album').attr('action') + '/album_appearances',
        data: { 'album_appearance[song_id]': data[2] },
        dataType: 'json',
        success: function(response){
          $("#add_song_to_album").val('')
          $song_list.append(new_track_template.render(response.album_appearance))
        }
      })
    });

    $(".remove_song_from_album").live('click', function() {
      if (!confirm("Are you surreeeeee?!?!")) return false
      
      app.ajaxQueue.add({
        type: 'post',
        url: $(this).siblings('select').attr('data-url'),
        data: { '_method' : 'delete' }
      })

      $(this).parent().slideUp('fast', function() {
        $(this).remove()
      })
      return false;
    });

    $('.song_list select').live('change', function(){
      app.ajaxQueue.add({
        type: 'post',
        url: $(this).attr('data-url'),
        data: { '_method': 'put', 'album_appearance[track_number]': $(this).val() },
        dataType: 'json'
      })
    })
  }
});
window._bopPlayerReady = function(data) { // This function gets run when the bop.fm js completes loading
  if (!data.available) return

  var $bopPlayer = $('#bopPlayer')
  $bopPlayer.closest('.sidebar_unit.media').addClass('bop_available')

  $bopPlayer.show();

  var container = $('<div>', {'class': 'flashContainer'});
  var control_container = $('<div>', {'class': 'control_container', 'style': 'display: none;'}).appendTo(container);

  if (typeof(window.envoOptions) !== 'undefined') {
    control_container.addClass("envolve_chat_present")
  }

  var control = $('<div>', {'class': 'controlDiv play'}).appendTo(control_container);
  var progress = $('<div>', {'class': 'progressBar'}).appendTo(control_container);
  var elapsed =  $('<div>', {'class': 'elapsed'}).appendTo(progress);
  container.appendTo($bopPlayer.parent());

  control.click(function() {
    container.hasClass('playing') ? Bop.pause() : Bop.play()
  });

  progress.click(function(e) {
    var ratio = (e.pageX - progress.offset().left) / progress.outerWidth();
    Bop.seek(ratio); // Accepts a ratio/float percentage only. should always be between 0 and 1.
    return false;
  });

  // Registers an event handler when the playing head is changed. depending on service, fires every 500ms-1000ms
  // data is a javascript object containing time and perc:
  // {time: currentTimeInSeconds, perc: currentPercentageAsFloat}
  // e.g. {time: 221, perc: 88.3}
  Bop.on('positionChange', function(data) {
    elapsed.width(data.perc + '%');
  });

  // Registers an event handler when the service (rdio/spotify/youtube/soundcloud) is detected and/or manually switched
  // data is a javascript object containing service:
  // {service: currentServiceString} - can be one of rdio, spotify, youtube, soundcloud, itunes, or possibly more in the future.
  // e.g. {service: 'rdio'}
  Bop.on('serviceSwitch', function(data) {
    // Spotify's player doesn't have the ability to control it (yet), so hide controls when spotify.
    if (data.service == "spotify") {
      control_container.hide();
    } else {
      if (data.service) control_container.show();
    }
  });

  // Registers an event handler when the playing state is changed. This will happen on load, play, pause, and end of song.
  // data is a javascript object containing state:
  // {state: integer}
  // e.g. {state: 1} legend: 0 = paused, 1 = playing, 2 = ended, 3 = buffering, 4 = error
  //
  // NOTE: with some services playingState of ended may be fired before the song has started.
  // So to do something when the song has ended, you'll need to save when the playingState 'playing' has fired.
  var BOP_PLAYING_STATES = {
    paused: 0,
    playing: 1,
    ended: 2,
    buffering: 3,
    error: 4
  };

  Bop.on('playingStateChange', function(data) {
    if (data.state == BOP_PLAYING_STATES.playing) {
      control.removeClass('play replay').addClass('pause');
      container.addClass('playing');
    } else {
      control.removeClass('pause').addClass('play');
      container.removeClass('playing');
    }
  });
};
$(document).ready(function() {
  $(".activate_sharing_on_mouseover").live('mouseenter', function() {
    app.setup_sharing_in_container(this);
  });
  
  $(".new_user, .new_feedback").live('submit', function() {
    var $form = $(this);
    if ($form.attr('data-action')) $form.attr('action', $form.attr('data-action'))
    $form.find(".example").val('');
    var validator = $form.validate();

    if (validator.form()) {
        // setTimeout is necessary due to an IE bug
      window.setTimeout(function() {$form.find("input[type='submit']").attr('disabled', "true").val("Loading...")}, 1);
      return true;
    } else {
      validator.showErrors();
    }
    return false;
  });
  
  $("form.comment").live('submit', function() {
    var $form = $(this);
    $form.find(".example").val('');
    var validator = $form.validate();

    if (validator.form()) {
      var identifier = "new_comment_" + +(new Date);
      
      $form.submitWithAjaxQueue({
        complete: function(data) {
          if (CURRENT_USER) {
            $("#" + identifier).find(".comment_footer").
            append('<div class="destroy_comment"><a class="destroy_comment" href="/comments/'+ data.responseText +'">delete this comment</a></div>')
          }
        }
      });
      
      var name = CURRENT_USER ? $('.user_badge:first').outer_html() : $form.find("[name='comment[name]']").val()
      var email = CURRENT_USER ? '' : $form.find("[name='comment[email]']").val()
      var registration_form = $("#footer .post_comment_message").clone()
      registration_form.find("[name='user[login]']").val(name)
      registration_form.find("[name='user[email]']").val(email)

      var com = '<div class="comment_unit" id="'+ identifier +'"> \
        <div class="comment"> \
          <div class="header"> \
            <div class="name"> \
              '+ name +' \
            </div> \
          </div> \
          <div class="body embedly"> \
            '+ app.markdown_to_html($form.find("[name='comment[body]']").val()) +' \
          </div> \
        </div> \
        <div class="comment_footer"></div> \
      </div>'

      $form.siblings(".comment_container").append($(com))
      var $comment_section = $form.parents('.comment_section')
      $form.replaceWith(registration_form.fadeIn(250))
      _gaq.push(['_trackEvent', 'Comments', 'Create comment']);
    } else {
      validator.showErrors();
    }
    return false;
  });
  
  $("form.bulk_edit").ajaxForm({
	  beforeSubmit: function() {
	    var indicator = $("<span>", {'class': 'indicator', 'text': 'Saving...'}).appendTo('body');
	  },
	  success: function() {
	    $("span.indicator").remove();
	  }
	});
  
  $("input.quick_search").autocomplete($("input.quick_search").attr("data-url"), {
    delay: 250,
    scrollHeight: 500,
    matchSubset: false,
    max: 20,
    minChars: 4,
    selectFirst: false,
    formatResult: function(item) {
      return item[1] ? "Loading..." : ' ';
    }
	}).result(function(event, data, formatted) {
    if (data && data[1]) {
      $("form.global_search :submit").attr('disabled', 'disabled');
      window.location.href = data[1];
    }
	});
	
	$("table.songs_edit input[name='song[primary_artist]'], #song_primary_artist, .single_artist_autocomplete").autocomplete('/search/artist_autocomplete', {
		delay: 250,
		scrollHeight: 400,
		matchSubset: false,
		minChars: 3,
		selectFirst: false
	});

	$(".verified_artist_autocomplete").autocomplete('/search/artist_autocomplete', {
		extraParams: {"song_id": $(".lyrics").attr("data-id"), "verified_only": true},
		delay: 250,
		scrollHeight: 400,
		matchSubset: false,
		minChars: 3,
		selectFirst: false
	}).result(function(event, data, formatted) {
        $(this).attr({"artist_name": data[0], "login": data[1]})
        $("#explain_as_container").hide()
        $(".explain_as_message").show().find("strong").text(data[0])
        $("a.explain_as").text($.capitalize_first_letter(app.sc('annotation.present_tense')) + " as someone else...").show()
	  });
	      
  $.extend(window.app, {
    reset_album_autocomplete: function(){
      $(".album_autocomplete").autocomplete('/search/album_autocomplete', {
        delay: 250,
        scrollHeight: 400,
        selectFirst: false,
        minChars: 3,
        matchSubset: false,
      });
    }
  })
  app.reset_album_autocomplete()

  $("table.songs_edit input[name='song[featured_artists]'], #song_featured_artists, #song_producer_artists").autocomplete('/search/artist_autocomplete', {
    multiple: true,
    multipleSeparator: ", ",
    delay: 250,
    scrollHeight: 400,
    selectFirst: false,
    minChars: 3,
    matchSubset: false
  });
  
  filepicker.setKey(FILEPICKER_API_KEY);
  $(".upload_photo").live('click', function() {
    filepicker.pick({
      mimetypes: ["image/jpeg", "image/png", "image/gif"],
      services: ["COMPUTER", "URL", "FACEBOOK", "INSTAGRAM", "IMAGE_SEARCH", "WEBCAM"],
      policy: FILEPICKER_POLICY,
      signature: FILEPICKER_SIGNATURE
    },
    // FPFile is the filepicker.io object for the uploaded image.
    function(FPFile) {
      var avatars = $(".user_avatar_" + CURRENT_USER.id)
      avatars.wrap('<div class="loading_with_indicator">')
      
      app.ajax_with_retry({
        url: "/account",
        type: "POST",
        data: {_method: "put", user: {photo_url: FPFile.url}},
        success: function(ret) {
          var signed_url = FPFile.url + "?policy=" + FILEPICKER_POLICY + "&signature=" + FILEPICKER_SIGNATURE
          avatars.attr("src", signed_url).unwrap()

          $("#avatar_solicitation").remove()
        }
      })
    })
    return false
  });

  $(".image_adder").live('click', function() {
    var $link = $(this);
    filepicker.pickAndStore({
      mimetypes: ["image/jpeg", "image/png", "image/gif"],
      services: ["IMAGE_SEARCH", "COMPUTER"],
      openTo: "IMAGE_SEARCH",
      policy: FILEPICKER_POLICY,
      signature: FILEPICKER_SIGNATURE
    }, {}, function(FPFiles) {
      var s3_url = 'http://s3.amazonaws.com/' + S3_IMAGE_BUCKET + '/' + encodeURIComponent(FPFiles[0].key)
      $link.closest(".annotation_text_wrapper").find("textarea.annotation_text").insertAtCursor(s3_url)
    })
    return false
  });

  $('a.formatting_help_toggle').live('click', function() {
    $(this).closest('em').nextAll(".extended_explanation_instructions").toggle()
    $(this).toggleClass('expanded')
    return false
  })
})
;
$.fn.youTubeEmbed = function(settings){
  // Settings can be either a URL string,
  // or an object
  
  if(typeof settings == 'string'){
    settings = {'video' : settings}
  }

  // Default values

  var def = {
    width   : 640,
    progressBar : true,
    start: 0
  };

  settings = $.extend(def,settings);
  
  var elements = {
    originalDIV         : this, // The "this" of the plugin
    container           : null, // A container div, inserted by the plugin
    control_container   : null, // The control play/pause button
    control             : null, // The control play/pause button
    player              : null, // The flash player
    progress            : null, // Progress bar
    elapsed             : null, // The light blue elapsed bar
    api                 : {}    // Container for utility functions
  };


  try{  

    settings.videoID = settings.video.match(/v=(.{11})/)[1];

    // The safeID is a stripped version of the
    // videoID, ready for use as a function name

    settings.safeID = settings.videoID.replace(/[^a-z0-9]/ig,'');

  } catch (e){
    // If the url was invalid, just return the "this"
    elements.originalDIV.parent().addClass("invalid_video")
    return elements.originalDIV;
  }

  // Fetch data about the video from YouTube's API

  var youtubeAPI = 'http://gdata.youtube.com/feeds/api/videos/' + settings.videoID + '?v=2&alt=jsonc';

  $.get(youtubeAPI,{},function(response){

    var data = response.data;

                if(!data) { // Video not found
                  elements.originalDIV.parent().addClass("video_not_found");
                  return elements.originalDIV;
                } else if (data.accessControl.embed!="allowed") { // Video found, but embedding not allowed
                  var youTubeWatchURL = "http://youtube.com/watch?v=" + settings.videoID;
                  var youTubeLink = $("<a>", {href: youTubeWatchURL, target: '_blank', text: 'Open YouTube video in new window'});
                  elements.originalDIV.parent().append(youTubeLink);
                  return elements.originalDIV;
                }

    // data holds API info about the video:

    settings.ratio = 3/4;
    // if(data.aspectRatio == "widescreen"){ TOM: isn't everything 16:9 these days?
      settings.ratio = 9/16;
    // }

    settings.height = Math.round(settings.width*settings.ratio);

    // Creating a container inside the original div, which will
    // hold the object/embed code of the video

    elements.container = $('<div>',{'class':'flashContainer',css:{
      width : settings.width,
      height  : settings.height
    }}).appendTo(elements.originalDIV);

    // Embedding the YouTube chromeless player
    // and loading the video inside it:

    elements.container.flash({
      swf     : 'http://www.youtube.com/apiplayer?enablejsapi=1&version=3&start=' + settings.start,
      id      : 'video_'+settings.safeID,
      height  : settings.height,
      width   : settings.width,
      allowScriptAccess:'always',
      wmode   : 'transparent',
      flashvars : {
        "video_id"    : settings.videoID,
        "playerapiid" : settings.safeID
      }
    });

    // We use get, because we need the DOM element
    // itself, and not a jquery object:

    elements.player = elements.container.flash().get(0);
    
    elements.api = {
      playing: function() {
        var player_state = function() {
          var player = elements.player;
          try {return player.getPlayerState()}
          catch(e) {return null}
        }
        return (player_state() == 1 || player_state() == 3)
      },
      
      seek_n_seconds: function(seconds, direction) {
        var player = elements.player
        var time = player.getCurrentTime()
        var new_time = (direction == 'forward' ? time + seconds : time - seconds)
        player.seekTo(new_time);
      }
    }
    
    // TOM ADDITION: container for play/pause button and progress bar
    
    elements.control_container= $('<div>',{'class':'control_container'})
               .appendTo(elements.container)
               
    if (typeof(envoOptions) != 'undefined') {
      $(".control_container").addClass("envolve_chat_present")
    }
    

    // Creating the control Div. It will act as a ply/pause button

    elements.control = $('<div>',{'class':'controlDiv play'})
               .appendTo(elements.control_container);

    // If the user wants to show the progress bar:

    if(settings.progressBar){
      elements.progress = $('<div>',{'class':'progressBar'})
                .appendTo(elements.control_container);

      elements.elapsed =  $('<div>',{'class':'elapsed'})
                .appendTo(elements.progress);

      elements.progress.click(function(e){

        // When a click occurs on the progress bar, seek to the
        // appropriate moment of the video.

        var ratio = (e.pageX-elements.progress.offset().left)/elements.progress.outerWidth();

        elements.elapsed.width(ratio*100+'%');
        elements.player.seekTo(Math.round(elements.player.getDuration()*ratio), true);
        return false;
      });

    }

    var initialized = false;

    // Creating a global event listening function for the video
    // (required by YouTube's player API):
    // console.log(settings.safeID);

    // window.onYouTubePlayerReady = function(status){
    window['eventListener_'+settings.safeID] = function(status){

      var interval;
      
      if (status == 1 && !elements.container.hasClass('playing')) {
        elements.control.click();
      }

      if(status==-1)  // video is loaded
      {
        if(!initialized)
        {
          // Listen for a click on the control button:

          elements.control.click(function(){
            if(!elements.container.hasClass('playing')){
              // If the video is not currently playing, start it:

              elements.control.removeClass('play replay').addClass('pause');
              elements.container.addClass('playing');
              elements.player.playVideo();

              if(settings.progressBar){
                interval = window.setInterval(function(){
                  elements.elapsed.width(
                    ((elements.player.getCurrentTime()/elements.player.getDuration())*100)+'%'
                  );
                },500);
                // },50);
                // },250);
                // },1000);
              }

            } else {

              // If the video is currently playing, pause it:

              elements.control.removeClass('pause').addClass('play');
              elements.container.removeClass('playing');
              elements.player.pauseVideo();

              if(settings.progressBar){
                window.clearInterval(interval);
              }
            }
          });

          initialized = true;
        }
        else{
          // This will happen if the user has clicked on the
          // YouTube logo and has been redirected to youtube.com

          if(elements.container.hasClass('playing'))
          {
            elements.control.click();
          }
        }
      }

      if(status==0){ // video has ended
        elements.control.removeClass('pause').addClass('replay');
        elements.container.removeClass('playing');
      }
    }

    // This global function is called when the player is loaded.
    // It is shared by all the videos on the page:
    window.onYouTubePlayerReady = function(playerID){
      var on_state_change_function_name = 'eventListener_' + playerID
      
      document.getElementById('video_'+playerID).addEventListener('onStateChange', on_state_change_function_name);
      
      // This should happen automatically (i.e., as soon as the player is ready it should broadcast a state
      // of -1), but for some reason it isn't. So I'm doing it manually.
      window.setTimeout(function() {
	window[on_state_change_function_name](elements.player.getPlayerState())
      }, 50)
    }
  },'jsonp');
  
  elements.originalDIV.data("yt", elements);

  return elements.originalDIV;
}
// 
// $(document).ready(function() {
//   $("[data-youtube_video_id]").each(function() {
//     $this = $(this);
//     $this.youTubeEmbed({
//       video: 'http://www.youtube.com/watch?v=' + $this.attr('data-youtube_video_id'),
//       width: 1,
//       start: $this.attr('data-start')
//       // width: $this.attr('data-width')
//     });
//   });
// });
$(function() {
  var $firehose = $('#firehose')
  if ($firehose.length) {
    var buffer = ""

    app.pusher.subscribe(FIREHOSE_PUSHER_CHANNEL).bind_all(function(event, data) {
      switch (event) {
        case 'new_activity':
          buffer += data
        break;
      }
    })

    setInterval(function() {
      if (buffer.length > 0) {
        $firehose.prepend($(buffer).fadeIn('slow'))
        $firehose.find('.activity_stream_event_unit:gt(200)').remove()
        buffer = ""
      }
    }, 500)
  }
})
;
$(function() {
  $("a.toggle_follow.new_status_unfollow").live('hover', function(e) {
    if (e.type === "mouseenter") $(this).text("Unfollow!")
    if (e.type === "mouseleave") $(this).text("Following")
  })

  $("a.toggle_follow.new_status_follow").live("rg:toggled", function (e) {
    var $this = $(this);
    
    $this.removeClass('new_status_follow').addClass('new_status_unfollow just_clicked_follow').
      text('Following').one('mouseout', function() {
        $this.removeClass("just_clicked_follow")
      })
  })
  
  $("a.toggle_follow.new_status_unfollow").live("rg:toggled", function (e) {
    $(this).removeClass('new_status_unfollow').addClass('new_status_follow').
      text('Follow')
  })

  var handleClick = function (method) {
    return function (e) {
      e.preventDefault()
      var $this = $(this)
      if ($this.hasClass('just_clicked_follow')) return false
      
      app.ajaxQueue.add({
        url: this.href,
        type: 'post',
        data: method ? { '_method': method } : {}
      })
      
      if (CURRENT_USER) $this.trigger('rg:toggled')
    }
  };

  $("a.toggle_follow.new_status_follow").live('click', handleClick());
  $("a.toggle_follow.new_status_unfollow").live('click', handleClick('delete'));

  $("a.ignore_follow_suggestion").live('click', function(e) {
    e.preventDefault()

    app.ajaxQueue.add({
      url: this.href,
      type: 'post',
      data: {_method: 'put'}
    })

    $(this).trigger('rg:ignored')
  });

  $(".follow_suggestions_full a.ignore_follow_suggestion").live('rg:ignored', function (e) {
    var $li = $(this).closest('li')
    $li.slideUp($li.remove)
  })

  var load_new_follow_suggestion = function (e) {
    var $this = $(this)
    var $widget = $this.closest('.follow_suggestions_mini')
    var $suggestion = $this.closest('.follow_suggestion')
    var current_suggestion_ids = $widget.
      find('[data-follow-suggestion-id]').
      map(function () { return $(this).attr('data-follow-suggestion-id') }).
      toArray()

    app.ajaxQueue.add({
      url: $widget.attr('data-refresh-path'),
      data: {except: current_suggestion_ids},
      success: function (response) {
        $suggestion.parent().append(response)
        $suggestion.slideUp(function () {
          $suggestion.remove()
          if ($widget.find('.follow_suggestion').size() === 0) {
            $widget.fadeOut()
          }
        });
      }
    })
  }

  $(".follow_suggestions_mini a.ignore_follow_suggestion").live('rg:ignored', load_new_follow_suggestion)

  $(".follow_suggestions_mini a.toggle_follow.new_status_follow").live('rg:toggled', load_new_follow_suggestion)

  $("a.follow_all").live('click', function(e) {
    e.preventDefault()
    
    var $followables = $(this).closest('.follow_suggestions_container').find('[data-followable-id]')
    var data = {}

    $followables.each(function() {
      var $this = $(this)
      var followable_type = $this.attr('data-followable-type')
      var followable_ids = data[followable_type] || (data[followable_type] = [])
      followable_ids.push($this.attr('data-followable-id'))
    })
    
    $followables.find('.new_status_follow').trigger('rg:toggled');
    app.ajaxQueue.add({url: this.href, type: 'post', data: {followables: data}})
  });
});
$(function() {
  
  $("#new_discussion").submit(function() {
    var $form = $(this);
    $form.find(".example").val('');
    var validator = $form.validate();
    
    if (validator.form()) {
      window.setTimeout(function() {$form.find("input[type='submit']").attr('disabled', "true").val("Loading...")}, 1);
      return true;
    } else {
      validator.showErrors();
      return false;
    }
  })
    
  $("#new_forum_post").live("submit", function() {
    var $form = $(this);
    $form.find(".example").val('');
    var validator = $form.validate();
    
    if (validator.form()) {
      $form.submitWithAjaxQueue()
      
      var badge = $('.user_badge:first').outer_html()
      
      var post = '<div class="forum_post_unit"> \
                    <div class="header"> \
                      <div class="name">'+ badge +'</div> \
                    </div> \
                    <div class="body embedly" data-autolink-mentions="true"></div> \
                  </div>'

      var $post = $(post)
      app.markdown_to_html($form.find("[name='forum_post[body]']").val(), $post.find('.body'))
        
      $(".forum_post_container").find('.reply_container').before($post)
      window.setTimeout(function() {$form.find('textarea').val(''); $form.find('.preview').html('')}, 1)
    } else {
      validator.showErrors();
    }
    return false;
  });
  
});
$(document).ready(function() {
  $(document).bind('keypress', {keys: 'shift+return', allowInTextInputField: true}, function(e) {
    $("button.submit_annotation:visible:first").click();

    $form  = $(e.target).closest('form')
    if ($form.parent().is("div.lyrics") || $form.parent().is("div.description_body")
        || $form.is('#new_post') || $form.is(".edit_post") || $form.is(".edit_postlet")) {
      $form.submit();
    }
    return false;
  });
  
  // $(document).bind('keypress', 'esc', function(e) {
  //   $("button.cancel_annotation:visible:first").click();
  // 
  //   $form  = $(e.target).closest('form')
  //   if ($form.parent().is("div.lyrics") || $form.parent().is("div.description_body")
  //       || $form.is('#new_post') || $form.is(".edit_post") || $form.is(".edit_postlet")) {
  //     $form.find("[type='cancel']").click()
  //   }
  //   return false;
  // });
  
  $(document).bind('keypress', 'shift+l', function(event) {
    if (app.event_happened_in_field(event)) return
    $("a.edit_lyrics").click();
    $("div.lyrics form").focus();
    return false;
  });
  
  $(window).bind('keydown', 'ctrl+shift+m', function(event) {
    var control = $(".controlDiv");
    if (!!control.length) {
      control.click(); return false;
    }
  });
  
  $(document).bind('keypress', 'shift+e', function(event) {
    if (app.event_happened_in_field(event)) return
    $(".edit_annotation:visible").click()

    return false;
  });
  
  $(window).keydown(function(event) {
    if (event.keyCode == 39) {
      if (app.event_happened_in_field(event)) return
      
      if (event.shiftKey) {
        try { Bop.seekRelative(5) } catch(e) {return null}
      } else {
        app.move_open_explanation('next');
      }
    }
    
    if (event.keyCode == 37) {
      if (app.event_happened_in_field(event)) return
      
      if (event.shiftKey) {
        try { Bop.seekRelative(-5) } catch(e) {return null}
      } else {
        app.move_open_explanation('prev');
      }
    }
  })
});
if (typeof(google) != 'undefined' && typeof(google.maps) != 'undefined') {
  $.extend(window.app, {
    gmap: {
      info_window: new google.maps.InfoWindow(),
      location_get_request: null,
      markers: {},
      
      init: function(map_selector){
        var meme_location = $(".location_unit[meme='true']")
        
        this.map = new google.maps.Map($(map_selector)[0], {
          zoom: 14,
          center: new google.maps.LatLng(meme_location.attr("lat"), meme_location.attr("lng")),
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          backgroundColor: "#212121",
          mapTypeControl: false,
          navigationControlOptions: {position: google.maps.ControlPosition.TOP_LEFT}
        });
    
        google.maps.event.addListener(this.map, 'click', function() {
          app.gmap.info_window.close();
        });
    
        this.set_up_markers();
      },
      
      set_up_markers: function() {
        $(".location_unit").each(function() {
          var $this = $(this);
      
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng($this.attr('lat'), $this.attr('lng')),
            icon: new google.maps.MarkerImage("/images/headphone_marker.png",
              new google.maps.Size(32, 37),
              new google.maps.Point(0, 0),
              new google.maps.Point(0, 0)
              ),
            shadow: new google.maps.MarkerImage("/images/headphone_marker_shadow.png",
              new google.maps.Size(51, 37),
              new google.maps.Point(0, 0),
              new google.maps.Point(-3, 0)
              ),
            map: app.gmap.map,
            title: $this.attr("data-name")
          });
      
          marker.slug = $this.attr("id");
          marker.path = $this.attr("data-path")
          marker.content = $this[0];
          marker.image_url = $this.attr('image-url')

          google.maps.event.addListener(marker, 'click', function() {
            if (app.gmap.location_get_request) app.gmap.location_get_request.abort();
            
            if ($(marker.content).hasClass("content_loaded")) {
              app.gmap.open_info_window_with_marker_content(marker)
            } else {
              app.gmap.location_get_request = $.get(marker.path, function(html) {
                marker.content = html;
                app.gmap.open_info_window_with_marker_content(marker)
              });
              
              app.gmap.open_info_window_with_marker_content(marker)
            }
          });
          
          google.maps.event.addListener(marker, 'mouseover', function() {
            app.gmap.load_images_in_marker(marker)
          });
          
          app.gmap.markers[marker.slug] = marker;
        });
      },
      
      open_info_window_with_marker_content: function(marker) {
        $("#image_loading_message_container").addClass('active')
        this.load_images_in_marker(marker)
        
        $(marker.content).find('img:first').one('load', function() {
          app.gmap.open_info_window_with_content(marker, marker.content)
          $("#image_loading_message_container").removeClass('active')
        }).each(function() {
          if (this.complete) $(this).load()
        });
      },
      
      open_info_window_with_content: function(marker, content) {
        this.info_window.close();
        this.info_window.setContent(content)
        this.info_window.open(app.gmap.map, marker);
      },
      
      load_images_in_marker: function(marker) {
        marker.content = $(marker.content).find('img:first').attr('src', marker.image_url).end()[0];
      },
      
      open_info_window_by_slug: function(slug) {
        if (typeof(this.markers[slug]) === 'undefined') {
          return false;
        }
        
        google.maps.event.trigger(this.markers[slug], 'click')
        return true;
      }
    }
  });
  
  $(document).ready(function() {
    app.gmap.init("#map");
    
    if (!($.trim(window.location.hash) && app.gmap.open_info_window_by_slug(window.location.hash.substr(1)))) {
      app.gmap.open_info_window_by_slug($(".location_unit[meme='true']").attr("id"));
    }
    window.location.hash = ''
    
    app.ajax_with_retry({
      type: "GET",
      url: "/locations/bulk_load_locations",
      dataType: 'json',
      success: function(data) {
        for (slug in data) {
          app.gmap.markers[slug].content = data[slug]
        }
      }
    });
    
    $("a").click(function() {
      var path = this.href.split('/').pop();
      if (app.gmap.open_info_window_by_slug(path)) {
        return false;
      }
    }).mouseover(function() {
      var slug = this.href.split('/').pop()
      
      if (app.gmap.markers[slug]) google.maps.event.trigger(app.gmap.markers[slug], 'mouseover')
    })
    
    $(".reference_city").click(function() {
      var location = $.trim($(this).text());
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({ 'address': location }, function(results, status) {
        app.gmap.map.panTo(results[0].geometry.location);
      });
    });
  });
}
;
window.app = window.app || {}

$.extend(window.app, {
  set_up_mentions_autocomplete: function() {
    $('[data-mentions-autocomplete]').atwho({
      at: "@",
      tpl: '<li data-value="${value}">${name}</li>',
      callbacks: {
        sorter: function(query, items, search_key) {
          return items
        },
        remote_filter: (function() {
          var currentRequest = null
          var cache = {}

          return function(query, callback) {
            if (currentRequest) currentRequest.abort()

            var query = query || ''
            if (query.length < 1 || query[0] == ' ') return

            if (query in cache) {
              callback(cache[query])
              return
            }

            var self = this

            $.doTimeout('mentions_autocomplete', 300, function() {
              currentRequest = $.ajax({
                url: self.$inputor.attr('data-mentions-autocomplete'),
                dataType: 'json',
                data: { q: query },
                success: function(data) {
                  cache[query] = data
                  callback(data)
                }
              })
            })
          }
        })()
      }
    })
  }
})
;
$(window).load(function() {
  $("#inbox_icon").qtip({
    content: {
      prerender: true,
      url: "/messages",
      text: "Loading..."
    },
    position: {
      adjust: {
        x: 24,
        screen: true
      },
      corner: {
        target: "bottomLeft",
        tooltip: "topRight"
      }
    },
    hide: {
      effect: {length: 0},
      when: {event: 'unfocus'}
    },
    show: {
      effect: {length: 0},
      delay: 0,
      when: {event: 'click'}
    },
    style: {
      name: 'light',
      tip: {
        corner: 'topRight',
        size: { x: 20, y: 20 }
      },
      width: {
        min: 455,
        max: 455
      },
      border: {radius: 0, width: 5}
    },
    api: {
      onRender: function() {
        // $("#inbox_icon").removeClass("has_unread_messages")
      }
    }
  });
  
  $("form.new_message").live('submit', function() {
    var $form = $(this);
    $form.find(".example").val('');
    var validator = $form.validate();
    
    if (validator.form()) {
      $form.submitWithAjaxQueue()
      
      var message = '<div class="message"> \
        <a href="'+ CURRENT_USER.profile_path +'" class="avatar_container"> \
          <img src="'+ CURRENT_USER.avatar_url +'"> \
        </a> \
        <div class="right"> \
          <a target="_blank" href="'+ CURRENT_USER.profile_path +'" class="sender_info"> \
            <div class="name_and_avatar"> \
              '+ CURRENT_USER.login +' \
              <span class="iq">'+ app.sc("iq") +' – '+ CURRENT_USER.iq[CURRENT_CHANNEL] +'</span> \
            </div> \
          </a> \
          <div class="body">'+ app.markdown_to_html($form.find("[name='message[body]']").val()) +'</div> \
        </div> \
      </div>'
      
      $form.siblings('.messages').append($(message).flash_orange({'back_to': '#E2E2E2'}))
      $form.prev().remove()
      $form.replaceWith("<h1 class='confirmation'>Sent!</h1>");
      
      // setTimeout(function() {$.facebox.close()}, 250)
    } else {
      validator.showErrors();
    }
    
    return false;
  });
  
  $(".user_badge .send_message, .annotation_unit .send_message, .send_message.rate_limit_response").live('click', function() {
    var path = $(this).attr('data-path') || this.href
    
    $.facebox(function() {
      $.get(path, function(data) {$.facebox(data)})
    })
    return false;
  })
  
  if (location.hash == "#show-inbox") {
    location.hash = ''
    $("#inbox_icon").click()
  }

  $("a.message_snippet").live("mouseup", function() { // 'click' unbound for facebox, so use 'mouseup' instead
    var $unread_from_sender = $(this).find(".unread_messages_from_this_sender")
    if ($unread_from_sender.length > 0) {
      $("#unread_message_count").change_counter_value_by(-1 * $unread_from_sender.counter_value())
      if ($("#unread_message_count").counter_value() == 0) $("#unread_message_count").hide().parent().removeClass("has_unread_messages")
      $unread_from_sender.remove()
    }
  })
});
$(document).ready(function() {
  $("#new_song").find("#song_title, #song_primary_artist").keyup(function() {
    $(this).doTimeout('song-suggestions', 500, function() {      
      var val = $("#new_song").find("#song_title, #song_primary_artist").map(function(){return this.value}).get().join(" ");
      var target = $("#new_song .suggestions");
      target.empty()
      if (val.length < 5) return
    
      target.addClass("loading");
      $.ajax({
        type: "get",
        url: "/search/quick.html",
        data: {q: val, limit: 3},
        success: function(data) {
          target.removeClass("loading").html(data);
        }
      });
    });
  });
  
  $("#new_song").submit(function() {
    var $form = $(this)
    $form.find(".example").val('')
    var validator = $form.validate()
    
    if (validator.form()) {
        // setTimeout is necessary due to an IE bug
      window.setTimeout(function() {$form.find("input[type='submit']").attr('disabled', "true").val("Loading...")}, 1)
      return true
    } else {
      validator.showErrors()
    }
    return false
  });
});
$(function() {
  $(".news_activity a.expand_details").live('click', function(e) {
    var $this = $(this)
    var old_inner_html = $this.html()
    
    $this.html("loading...")
    $.get(this.href, function(data) {
      $this.nextAll(".preview_content").prepend(data).end().replaceWith(old_inner_html)
    })
  
    e.stopImmediatePropagation()
    return false  
  })
})
;
app.pop_up_video = {
  set_up_video: function() {
    $('#pop_up_video_player').empty();
    $('#pop_up_video_player').youTubeEmbed({
      video: $('#song_youtube_url').val(),
  	  width: $('#pop_up_video_player').outerWidth()
  	});
  },
  
  seconds_to_human: function(seconds) {
    minutes = parseInt(seconds / 60, 10)
    seconds = seconds % 60;
    return minutes + ":" + Math.round(seconds * 10) / 10
  },
  
  parse_script: function() {
    var text = $("#song_video_script_user_input").val()
    return $.map(text.split("\n"), function(i) {
      var ary = i.split(/\s+/)
      var time = ary[0].split(':')
      var minutes = time[0]
      var seconds = time[1]
      time = parseInt(minutes, 10) * 60 + parseFloat(seconds)
      return [[time, ary[1]]]
    })
  },
  
  set_up_script: function() {
    app.pop_up_video.current_script = app.pop_up_video.parse_script().sort(function(a, b) {
      return a[0] - b[0]
    }).reverse()
  },
  
  current_script: [],
  
  how_long_to_show: 10
};

$(function() {
  $("form.edit_song_video").submit(function() {
    var yt_url = $("#song_youtube_url").val();
    var new_yt_id = yt_url.match(/v=(.{11})/)[1];
    var old_yt_id = $('#pop_up_video_player').data('yt').player.getVideoUrl().match(/v=(.{11})/)[1]
    
    if (new_yt_id != old_yt_id) {
      app.pop_up_video.set_up_video();
    }
    
    var script = app.pop_up_video.parse_script();
    app.pop_up_video.set_up_script()
    
    $("#song_submit").val("Saving...").attr('disabled', 'disabled');
    app.ajaxQueue.add({
      dataType: 'script',
      type: 'post',
      url: this.action,
      data: {'song[youtube_url]': yt_url, 'song[video_script_user_input]': script, '_method': '_put'},
      complete: function() {$("#song_submit").val("Save").removeAttr('disabled')}
    });
    return false;
  });

  var $pop_up_video_player = $('#pop_up_video_player')
	if ($pop_up_video_player.length) {
    app.load_annotation_containers($pop_up_video_player.attr('data-id'))
    
    app.add_callback_once('bulk_annotations:loaded', function(bodies) {
      app.pop_up_video.set_up_video();
      app.pop_up_video.set_up_script();

      var $lyrics = $($pop_up_video_player.attr('data-lyrics'))
      
      window.setInterval(function() {
        var yt_data = $pop_up_video_player.data('yt')
        if (!yt_data || !yt_data.api.playing || !yt_data.api.playing()) return
        
        var current_time = $pop_up_video_player.data('yt').player.getCurrentTime();
        $("#time").text(app.pop_up_video.seconds_to_human(current_time));
    
        $.each(app.pop_up_video.current_script, function(i, v) {
          var body = bodies[v[1]]
          if (!body) return true

          var time_to_fade_in = v[0];
          var time_to_fade_out = time_to_fade_in + app.pop_up_video.how_long_to_show;
          var time_next_one_fades_in = i == 0 ? Number.MAX_VALUE : app.pop_up_video.current_script[i - 1][0];
      
          if (current_time > time_to_fade_in && current_time < time_to_fade_out) {
            if ($("#pop_up").is(':hidden')) {
              $("#pop_up").fadeIn('fast');
            }
        
            var updated_html = $("<blockquote class='lyric'>" +
              $lyrics.filter("a[data-id=" + v[1] + "]:last").attr('target','_blank').outer_html() +
              "<span class='explanation_number'> (Explanation&nbsp;#:&nbsp;" + v[1] + ")"+
              "</blockquote>" +
              $(body).find(".annotation_body .body_text").html())
            app.setup_annotation_display(updated_html)
            
            if ($("#pop_up").attr('data-current') != v[1]) {
              $("#pop_up").html(updated_html).attr('data-current', v[1]);
            }
            
            return false;
          } else if (current_time < time_next_one_fades_in && current_time > time_to_fade_out) {
            $("#pop_up").fadeOut('fast');
          }
        });
    
      }, 100);
    })
  }
});
$(document).ready(function() {
  $('#about_me.editable #about_body').editable(function(value, settings) { 
      $.post("/account/", { "_method": "put", "user[about_me]": value });
      $(".about_me_markdown_version").val(value);
      app.markdown_to_html(value, $("#about_body"));
   }, { 
      placeholder: "<p>Tell us about yourself (what your interests are, which artists you love, etc.)</p>",
      type: 'textarea',
      submit: 'Save',
      cancel: 'Cancel',
      onblur: 'ignore',
      submit: "Save",
      event: 'make_editable',
      cssclass: "edit_mode",
      data: function(value, settings) {
        return $.trim($(".about_me_markdown_version").val());
      },
      onreset: function() {
        $('#about_me').removeClass("editing");
      },
      callback: function() {
        $('#about_me').removeClass("editing");
      }
  });
  
  $('.editable .edit_about_me').live('click', function() {
    $("#about_me.editable").addClass("editing").find("#about_body").trigger('make_editable');
    return false;
  })

  $('#linked_accounts input[type="checkbox"]').live('change', function () {
    $(this).closest('form').submitWithAjaxQueue();
  })
});
$(document).ready(function() {
  $(document).unbind('mousedown.qtip')
  
  $(document).bind('mousedown.qtip', function(event) {
    if (
        $(event.target).parents('div.qtip').length !== 0 ||
        $(event.target).parents('#facebox').length !== 0 ||
        $(event.target).is('#facebox_overlay') ||
        $(event.target).parents('.flashContainer').length !== 0
      ) {
      return true
    }
    
    $('.qtip[unfocus]').each(function() {
      var api = $(this).qtip("api");
      
      if (($(this).is(':visible') && !api.status.disabled &&
          $(event.target).add(api.elements.target).length > 1)) {
        api.hide(event);
      }
    })
  })
});
$(function() {
  $("body.act-show.cont-searches #hide_unexplained_songs").click(function() {
    var params = { 'hide_unexplained_songs' : $(this).attr('checked') };
    document.location = $.param.querystring(document.location.href, params);
  });
});
$(document).ready(function() {
  if (!!$("body.act-show.cont-songs")[0]) {
    app.song_pusher_channel = app.pusher.subscribe($("div.lyrics").attr("data-pusher_channel"))
    
    app.song_pusher_channel.bind_all(function(event, data) {
      switch (event) {
        case 'verified-video-ready':
          $(".annotation_body[data-id="+ data.annotation_id +"]").
          find(".video_processing_message").
          replaceWith("<div data-vidyard-id='"+ data.video_id +"' class='vidyard_container'>")
          app.load_vidyard_players()
        break;
      }
    })
  }
});
$.extend(window.app, {
  move_open_explanation: function(direction) {
    var active_referent = $(".lyrics a.active:first")
    
    if (!active_referent.length) return true
    
    var id = active_referent.attr('data-id')
    var func = (direction == "next" ? 'nextAll' : 'prevAll')
    var next_explanation = active_referent[func]("a:first")
    if (!next_explanation.length) return
    
    app.open_annotation_by_id(next_explanation.attr('data-id'), {
      scroll: !next_explanation.is_scrolled_into_view()
    })
  },
  
  selection_contains_annotation: function(selection) {
    if (!!selection.toHtml) { //ie only
      return !!($(selection.toHtml()).is("a") || $(selection.toHtml()).find('a').length)
    } else {
      return !!$('.lyrics a').detect(function() { return selection.containsNode(this, true) })
    }
  },
})

$(document).ready(function() {
  var update_editorial_state = function(base_annotation_id, editorial_state) {
    $('.lyrics a[data-id=' + base_annotation_id + '], .annotation_container[data-id=' + base_annotation_id + ']').
      attr('data-editorial-state', editorial_state)
  }

  $("#exegize_button").live('mousedown', function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    var selection = app.get_selection();
    var $this = $(this)
    
    if ($this.hasClass('loading')) return false
    
    if ($.trim(selection.toString()) === '') {
      $.facebox('<h1>Select some lyrics first</h1>');
      $this.remove();
      return false;
    }

    var contains_an_annotation = app.selection_contains_annotation(selection)
    
    if (contains_an_annotation) {
      $.facebox("<h1>An " + app.sc('annotation.singular_noun') + " cannot contain another " + app.sc('annotation.singular_noun') + "</h1>");
      $this.remove();
      return false;
    }
    
    $this.addClass('loading')
    
    var referent = ''
    
    if (!!selection.getRangeAt) {
      var range = selection.getRangeAt(0);
      
      while (range.toString().match(/^\s/)) {
        range.setStart(range.startContainer, range.startOffset + 1);
      }
      while (range.toString().match(/\s$/)) {
        range.setEnd(range.endContainer, range.endOffset - 1)
      }
      
      var anchor = $('<a>', {html: range.extractContents(), href: '#', 'data-id': 'pending'});
      referent = anchor.clone().find('#exegize_button').remove().end().text()
      range.insertNode(anchor[0])
      range.collapse(true);
    } else {
      if (selection.toHtml().match(/^\s/)) {
        selection.moveStart('word');
      }
      if (selection.toHtml().match(/\s$/)) {
        selection.moveEnd('character', -1);
      }
      
      referent = selection.toString()
      
      var old_html = selection.toHtml();
      var new_html = '<a href="#" data-id="pending">' + old_html + '</a>';
      selection.pasteHTML(new_html);
    }
    
    var params = {'annotation[song_id]': $(".lyrics").attr('data-id'), 'referent': referent}
    var login = $("#explain_as").attr("login")
    if (login) params['explain_as'] = login

    app.ajaxQueue.add({
      type: "POST",
      url: "/annotations",
      dataType: 'json',
      data: params,
      success: function(data) {
        $this.remove();
        
        var id = data.id;
        var base_id = data.base_id;
        var tt_content = data.tooltip_content;
        var target_class = data.target_class;

        if (!id) return false;

        $(".lyrics a[data-id='pending']").attr('data-id', base_id)

        tt_content = $("<div>").append(tt_content).find('.annotation_unit[data-id='+id+']').
                                addClass('un_edited').hide().after($("#edit_annotation_form").html()).
                                end().html()

        app.annotation_qtip($("div.lyrics a[data-id='" + base_id + "']"), {
            content: {
              text: tt_content,
              prerender: true
            },

            api: {
              onRender: function() {
                $('form.edit_song').submit();
                $("#exegize_button").remove();
                window.setTimeout(function() {$(".qtip:visible").find("textarea.annotation_text").focus();}, 100);
                if ($("#explain_as").attr("login")) {
                  $(".annotation_container").addClass("current_user_can_add_verified_to_this_song")
                  $(".annotation_container .explain_as_message").show().find("strong").text($("#explain_as").attr("artist_name"))
                }

                app.setup_sharing_in_container(this.elements.tooltip);

                var annotation_unit = this.elements.tooltip.find('.annotation_unit[data-id='+id+']')
                app.set_up_vidyard_id_container(annotation_unit)
              },

              onShowAdditions: function() {
                $(this.elements.target).addClass(target_class)
              },

              beforeHide: function() { return false; }
            }
        }).qtip('show').click(function() {return false;});

        app.set_up_tooltip_lyric_editor();
      }
    });
  });

  $('.add_verified_explanation').live('click', function() {
    var $this = $(this)
    if ($this.hasClass('loading')) return false
    
    var annotation_container = $this.closest('.annotation_container')
    var base_annotation_id = annotation_container.attr('data-id')
    var target = $("div.lyrics a[data-id='" + base_annotation_id + "']")
    var referent = app.clean_up_lyrics(target.html())
    
    annotation_container.addClass("current_user_can_add_verified_to_this_song has_verified_annotation")

    var params = {'annotation[song_id]': $(".lyrics").attr('data-id'),
           'annotation[base_annotation_id]': base_annotation_id, 'referent': referent }

    var login = $("#explain_as").attr("login")
    if (login) params['explain_as'] = login
    
    app.ajaxQueue.add({
      type: "POST",
      url: "/annotations",
      dataType: 'json',
      data: params,
      success: function(data) {
        $this.addClass("inactive").removeClass('loading')
        
        var annotation_unit = $(data.tooltip_content).find('.annotation_unit[data-id='+data.id+']')
        annotation_container.find('.annotation_unit:not(.verified)').before(annotation_unit)
        annotation_unit.addClass('un_edited').hide().after($("#edit_annotation_form").html())
        app.set_up_tooltip_lyric_editor()
        app.set_up_vidyard_id_container(annotation_unit)
        target.addClass(data.target_class)
      }
    });
    
    $this.addClass('loading')
    return false;
  });

  $('.add_non_verified_explanation.logged_in').live('click', function() {
    $(this).siblings(".editor_links").find(".edit_annotation").click()
    return false;
  });

  if (app.is_on_song_page()) {
    $('body').mouseup(function(e) {
      if ($(e.target).is('.lyrics')) return true

      $("#exegize_button:not(.loading)").remove();
    })
  }
  
  $('.lyrics').mouseup(function(e) {
    if ($(e.target).is("#exegize_button, textarea")) return true
    
    $("#exegize_button:not(.loading)").remove();
    if (!!$(".edit_annotation_form:visible").length) return true;

    setTimeout(function() {
      var selection = app.get_selection();
      var selection_text = selection && selection.toString();

      if ($.trim(selection_text) === '') {
        return true;
      }

      var selection_button = $('<span>', {id: 'exegize_button',
                                          text: $.capitalize_first_letter(app.sc('annotation.present_tense'))})[0];
      
      if (!!selection.getRangeAt) {
        var range = selection.getRangeAt(0);
        var new_range = document.createRange();
        new_range.setStart(selection.focusNode, range.endOffset);
        new_range.insertNode(selection_button);
      } else {
        selection.expand("word");
        selection.moveEnd("character", -2);
        selection.moveStart("character", -2);
        var new_range = selection.duplicate();
        new_range.collapse(false);
        new_range.pasteHTML(selection_button.outerHTML)
      }
    }, 5);
  });
  
  $(".edit_annotation").live('click', function(){
    if (!!$(".edit_annotation_form:visible").length) return false;
    var $this = $(this);
    
    var tooltip = $this.closest('.qtip');
    if (tooltip.length) {
      tooltip.qtip('api').beforeHide = function(){return false;};
    }
    
    var annotation_unit = $this.closest(".annotation_unit")
    var annotation_id = annotation_unit.attr('data-id');

    var accepted_comment_text = annotation_unit.find('.comment.accepted').remove().text();
    annotation_unit.hide().after($("#edit_annotation_form").html());
    var edit_form = annotation_unit.nextAll(".edit_annotation_form").addClass("editing_explanation")
    
    if ($.trim(accepted_comment_text) != '') {
      edit_form.prepend("<h3 style='color:darkred'>Now integrate the suggestion into the annotation. Please keep the writing high-quality!</h3>");
    }

    var data = $.trim(annotation_unit.find('.markdown_version').val() + accepted_comment_text);
    edit_form.find('.annotation_text').val(data).focus();      
    
    app.set_up_vidyard_id_container(annotation_unit);
    
    app.set_up_tooltip_lyric_editor();
    if ($("#explain_as").attr("login")) $(".annotation_container").addClass("current_user_can_add_verified_to_this_song")
    
    return false;
  });
  
  $(".edit_annotation_form .record_video").live('click', function() {
    if (DISABLE_VIDEO_RECORDING) return false
    var $this = $(this)
    var id = "camera_tag_" + +(new Date)

    var $qtip = $this.closest(".qtip")
    var edit_form = $this.closest('.edit_annotation_form')
    var annotation_unit = edit_form.prev('.annotation_unit')
    var annotation_id = annotation_unit.attr('data-id')

    var cameraTag = $('<camera>', {'data-uuid': CAMERA_TAG_UUID, 'id': id,
                                   'style': 'width: '+ CAMERA_TAG_WIDTH +'px; height: '+ CAMERA_TAG_HEIGHT +'px'})
    $('#accept-screen').clone().attr('id', id + '-accept-screen').appendTo('#custom_cameratag_screens')
    edit_form.find('.video_recorder_container').append(cameraTag)
    
    CameraTag.prototype.setup()
    var camera = CameraTag.prototype.cameras[id];
    setTimeout(function() { edit_form.addClass("video_mode") }, 200)
    
    CameraTag.prototype.observe(id, 'initialized', function() {
      camera.record()
    });

    camera.observe('publishing', function() {
      app.cameraTagUploadInProgress = true;
    });

    camera.observe('published', function() {
      app.cameraTagUploadInProgress = false;
      
      var data = { "_method": "put",
                   "annotation[video_id]": camera.getVideo().uuid,
                   "annotation[video_processing]": 'true' }

      var login = $("#explain_as").attr("login")
      if (login) data['explain_as'] = login

      app.ajaxQueue.add({
        type: 'post',
        url: "/annotations/" + annotation_id,
        data: data
      });
      
      annotation_unit.find(".vidyard_container").remove().end().addClass('video_processing')
      edit_form.removeClass("video_mode").find('.submit_annotation').click()
    });
  });

  $(".delete_annotation").live('click', function(){
    var $this = $(this);
    if (typeof($this.data('no-confirm')) == "undefined" && !confirm("Are you sure?")) {
      return false;
    }

    var annotation_unit = $this.closest("div.annotation_unit")
    var sibling_annotation_units = annotation_unit.siblings(".annotation_unit")
    var annotation_id = annotation_unit.attr('data-id');
    var annotation_container = $this.closest('.annotation_container')
    var tooltip = $this.closest('.qtip');
    
    if (tooltip.length) {
      var api = tooltip.qtip('api');
      var target = api.elements.target;
      var kill_tooltip = false
      
      app.get_annotation_units(annotation_id).remove();
      
      if (annotation_unit.hasClass('verified')) {
        annotation_container.find('.add_verified_explanation').removeClass('inactive')
        
        var other_verified_annotations_count = sibling_annotation_units.filter(".verified").length
        var base_annotation_body = sibling_annotation_units.filter(".not_verified").find(".annotation_body .body_text")
        
        if ($.trim(base_annotation_body.text()) == '?' && other_verified_annotations_count == 0) kill_tooltip = true
        } else {
        if (annotation_container.find(".annotation_unit.verified").length == 0) kill_tooltip = true
      }
            
      if (kill_tooltip) {
        target.replaceWith(target.html());
        api.destroy();
      }
    } else {
      $this.closest(".stand_alone.annotation_unit").remove();
    }
    
    app.delete_annotation(annotation_id);
    return false;
  });

  $(".cancel_annotation").live('click', function(){
    var $this = $(this);
    
    var edit_form = $this.closest('.edit_annotation_form');
    var annotation_unit = edit_form.prev('.annotation_unit');
    var annotation_id = annotation_unit.attr('data-id');
    var tooltip = $this.closest('.qtip');
    
    if (tooltip.length) {
      var api = tooltip.qtip('api');
      var target = api.elements.target;
      api.beforeHide = function(){return true;};
      
      // this condition is true if the current user just clicked 'explain' or 'add_verified_explanation'
      if (annotation_unit.hasClass('un_edited')) {
        annotation_unit.find(".delete_annotation").data("no-confirm", true).click()
      }
    }
    edit_form.remove();
    annotation_unit.show();
    
    tooltip.length && tooltip.qtip('api').reposition()
    
    return false
  });

  $(".submit_annotation").live('click', function(event) {
    var $this = $(this);
   
    var edit_form = $this.closest('.edit_annotation_form');
    var annotation_unit = edit_form.prev('.annotation_unit');
    var annotation_container = annotation_unit.closest('.annotation_container')
    var annotation_id = annotation_unit.attr('data-id');
    var base_annotation_id = annotation_container.attr('data-id');
    var stand_alone = annotation_unit.hasClass("stand_alone")
    
    var annotation_text = $.trim(edit_form.find('.annotation_text').val());
    var video_id = $.trim(edit_form.find('.video_id').val())
    
    var annotation_content_present = annotation_text || video_id || annotation_unit.hasClass('video_processing')
    
    if (!annotation_content_present && !annotation_unit.hasClass('verified')) {
      return false;
    }
    
    data = { "_method": "put", "annotation[body]": annotation_text }
    if (video_id) data['annotation[video_id]'] = video_id

    var login = $("#explain_as").attr("login")
    if (login) data['explain_as'] = login
    
    if (annotation_content_present) {
      app.ajaxQueue.add({
        type: 'post',
        url: "/annotations/" + annotation_id,
        data: data,
        success: function(data) {
          update_editorial_state(base_annotation_id, data.editorial_state)

          if (data.user_can_clear_votes) {
            annotation_unit.find('.footer .voting_links').addClass('user_can_clear_votes')
          }
        }
      });
    };
    
    annotation_unit.find('.markdown_version').text(annotation_text);
    annotation_unit.removeClass("being_created")
    
    if (edit_form.find('.lyric_editor').length > 0) {
      var old_val = edit_form.find('.lyric_text').data('old-value');
      var new_val = $.trim(edit_form.find('.lyric_text').val());
      
      if (new_val != '' && new_val != old_val) {
        var target = $("div.lyrics a[data-id='" + base_annotation_id + "']");
        var new_html = new_val.replace(/\n/gi, "<br>");
        if (target.html().match(/<br[\s\/]?>$/i)) {
          new_html += "<br>"
        }
        target.html(new_html);
        $('form.edit_song').submit();
      }

      if (!annotation_content_present && annotation_unit.hasClass('verified')) {
        annotation_container.find("button.cancel_annotation").click()
        return false;
      }
    }
    
    if (!stand_alone) {
      var $tooltip = $this.closest('.qtip');
      var $target = $($tooltip.qtip('api').elements.target);
      
      $tooltip.qtip('api').beforeHide = function(){return true;}
      
      if (annotation_text.match(/^\?$/)) {
        annotation_unit.addClass('needs_exegesis')
      } else {
        annotation_unit.removeClass('needs_exegesis')
      }
    }
    
    edit_form.remove();
    app.markdown_to_html(annotation_text, annotation_unit.find('.annotation_body .body_text'), function(body_text) {
      if (!stand_alone) {
        $tooltip.qtip('api').reposition()
        app.update_bulk_loaded_annotation($tooltip.find('.annotation_container'))
      }
    })
    
    annotation_unit.show().addClass('just_submitted_edit').removeClass('un_edited').
      closest('.annotation_container').addClass('just_submitted_edit');
      
    !stand_alone && $tooltip.qtip('api').reposition()
  });

  $('form.edit_song').submit(function() { 
    var lyrics = app.clean_up_lyrics( $(".lyrics").html() );

    $("#song_lyrics").val(lyrics);
    $("#song_youtube_url").val( $("input.song.youtube_url").val() );
    $("#song_youtube_start").val( $("input.song.youtube_start").val() );
    $("#song_spotify_uri").val( $("input.song.spotify_uri").val() );
    $("#song_channel_id").val( $(".channel_selectors input[type='radio']:checked").val() );
    $("#song_soundcloud_url").val( $("input.song.soundcloud_url").val() );
    
    $("#song_submit, .song_submit").val("Saving...").attr('disabled', 'disabled');
    app.ajaxQueue.add({
      dataType: 'script',
      type: 'post',
      url: this.action,
      data: $(this).serializeArray(),
      complete: function() {$("#song_submit, .song_submit").val("Save").removeAttr('disabled')}
    });
    return false; 
  });
  
  $("input.song_submit").click(function() {
    $('form.edit_song').submit(); return false;
  })

  $('.lyrics').editable(function(value, settings) { 
      return(value);
   }, { 
      placeholder : "<h1>Add some lyrics!</h1>",
      type: 'autogrow',
      submit: 'Save',
      cancel: 'Cancel',
      onblur: 'ignore',
      submit: "Save (shift+enter)",
      event: 'make_editable',
      data: function(value, settings) {
        $(".edit_lyrics").hide();
        $('form.edit_song').hide();
        $('#edit_lyrics_instructions').show();
        app.activate_generic_tool_tips();
        value = app.clean_up_lyrics(value);
        var attr_hash = {};
        value = $('<div>').append(value).find('a').each(function() {
          var $a = $(this);
          attr_hash[$a.attr('data-id')] = {'class': $a.attr('class'),
                                           'data-editorial-state': $a.attr('data-editorial-state')}
          $a.replaceWith("[" + $a.html() + "](" + $a.attr("data-id") + ")");
        }).end().html();
        $(".lyrics").data('old_attrs', attr_hash);
        return value;
      },
      onreset: function() {
        setTimeout(function(){ app.activate_generic_tool_tips(); }, 250);
        app.show_edit_buttons();
        $('#edit_lyrics_instructions').hide();
      },
      callback: function(value, settings) {
        app.show_edit_buttons();
        $('#edit_lyrics_instructions').hide();
        $(".lyrics_container").css("width", "");
        $(this).html( app.convert_markdown_anchors(value.replace(/\n/gi, "<br>")) );
        var old_attrs = $(".lyrics").data('old_attrs');
        $(this).find('a').each(function() {
          $a = $(this);
          $a.attr('href', $.trim($a.attr('href')));
          if (!!$a.attr('href').match(/^\d+$/)) {
            $a.attr('data-id', $a.attr('href')).attr('href', '/' + $a.attr('data-id'))
            .attr(old_attrs[$a.attr('data-id')]);
          } else { // the "[Hook](2x)" case
            $a.replaceWith("[" + $a.html() + "](" + $a.attr("href") + ")");
          }
        });
        $('form.edit_song').submit();
      }
  });

  $(".edit_lyrics").click(function() {
    if ($.browser.msie) {
      app.ie_fail(); return false;
    }

    $(".lyrics").trigger('make_editable');
  });

  $("button[data-action], a[data-action]").live('click', function() {
    var $this = $(this);
    
    var confirmation_message = $this.attr("data-confirmation-message") || "Are you sure?"
    
    if (!confirm(confirmation_message)) {
      return false;
    }
    
    app.ajaxQueue.add({
      type: 'post',
      url: "/songs/" + $(".lyrics").attr('data-id') + "/" + $this.attr('data-action'),
      data: { "_method": "put" },
      dataType: 'script'
    });
  });

  $('.description.editable .description_body').editable(function(value, settings) { 
    app.ajaxQueue.add({
      type: 'post',
      url: "/songs/" + $(".lyrics").attr('data-id'),
      data: { "_method": "put", "song[description]": value },
      dataType: 'script'
    });
    $(".description_markdown_version").text(value);
    
    app.markdown_to_html(value, $(".description_body"));
    // hideous hack to get around the fact that webkit ignores the margin-bottom defined in the CSS file here (for some reason!)
    window.setTimeout(function() {$(".description_body").find('p').css('margin-bottom', '1em')}, 1250);
   }, { 
      placeholder : $("#sle_explanation").html(),
      type: 'autogrow',
      submit: 'Save',
      cancel: 'Cancel',
      onblur: 'ignore',
      submit: "Save (shift+enter)",
      event: 'make_editable',
      data: function(value, settings) {
        return $.trim($(".description_markdown_version").val());
      },
      onreset: function() {
        $('.description.editable').removeClass("editing");
      },
      callback: function() {
        $('.description.editable').removeClass("editing");
      }
  });

  $('.edit_description').live('click', function(e) {
    $(".description.editable").addClass("editing").find(".description_body").trigger('make_editable');
    return false;
  })
  
  $("a.change_annotation_state").live('click', function(e) {
    var $this = $(this);
    var state_event = $this.attr('state_event');
    
    var $annotation_unit = $this.closest('.annotation_unit')
    var stand_alone = $annotation_unit.hasClass("stand_alone")
    
    $annotation_unit.find(".edit_annotation.disabled, .delete_annotation.disabled").removeClass('disabled').removeAttr('tooltip');
    
    app.ajaxQueue.add({
      type: 'post',
      url: this.href,
      data: {"_method" : 'put', 'state_event' : state_event, stand_alone: stand_alone},
      success: function(data) {
        var $new_container = $(data.annotation_container)
        var container_selector = stand_alone ? '.stand_alone_annotation_container' : '.annotation_container'
        
        $annotation_unit.closest(container_selector).replaceWith($new_container.fadeIn('fast'))
        
        if (!stand_alone) {
          update_editorial_state(data.base_id, data.editorial_state)
          
          var qtip = $new_container.closest('.qtip')
          if (qtip.is(':visible')) qtip.qtip('api').reposition()
          
          app.update_bulk_loaded_annotation($new_container)
        }
        
        if (data.should_delete) {
          $new_container.find('.annotation_unit[data-id='+ data.id +'] .delete_annotation').
            data("no-confirm", true).click()
        }
      }
    });
    
    $annotation_unit.find(".moderate_annotation").addClass('loading_with_indicator')
    e.preventDefault();
  });
  
  $("a.destroy_comment").live('click', function(e) {
    app.ajaxQueue.add({
      type: 'post',
      url: this.href,
      data: {"_method" : 'delete'}
    });
    
    $(this).parents(".comment_unit").slideUp('fast');
    e.preventDefault();
  });
  
  $("a.change_comment_state").live('click', function(e) {
    if (this.href.match(/comments.*state_event=mark_spam/) && !confirm('Are you sure you want to mark this comment as spam?')) {
      return e.preventDefault()
    }
    app.ajaxQueue.add({
      type: 'post',
      url: this.href,
      data: {"_method" : 'put'}
    });
    
    var $comment_unit = $(this).closest(".comment_unit")
    $comment_unit.slideUp('fast');
    
    if (this.href.match(/comments.*state_event=accept/)) {
      var $comment = $comment_unit.find('.comment')
      $comment.addClass("accepted");
      $comment.hide().text("\n\nACCEPTED COMMENT: " + $comment.find('.comment_markdown_version').val());
      $comment.closest(".annotation_unit").find(".edit_annotation").click()
    }
    
    e.preventDefault();
  });
  
  $('.album_name a.remove').live('click', function(e) {
    e.preventDefault()
    
    var $parent = $(this).parents('.album_name')
    var $delete_field = $parent.find('input[id$="_destroy"]')
    $delete_field.val(1)
    $delete_field.length ? $parent.hide() : $parent.remove()
  })

  var $new_album_template = Hogan.compile($('#new-album-template').html() || '')
  $('#add_album_name').click(function(e) {
    e.preventDefault()

    var $album_appearances = $('#album_appearances')
    var next_index = $album_appearances.find('.album_name').length
    var new_album = $new_album_template.render({ index: next_index })

    $(new_album).appendTo($album_appearances)
    app.reset_album_autocomplete()
  })
  
  $(".upload_audio").click(function() {
    filepicker.pick({
      extensions: ['.mp3'],
      services: ["COMPUTER", "DROPBOX", "URL"],
      maxSize: 30 * 1024 * 1024,
      policy: FILEPICKER_POLICY,
      signature: FILEPICKER_SIGNATURE
    }, function(FPFile) {
      var signed_url = FPFile.url + "?policy=" + FILEPICKER_POLICY + "&signature=" + FILEPICKER_SIGNATURE

      if (!$(".rg_player").length) {
        var $container = $(".player.rg")
        var $player = $("<div>", {"class": "rg_player"}).append($("<audio>"))
        $container.append($player)
        $container.find(".upload_audio").text("Change Audio!")
      }
      $(".rg_player audio").attr("src", signed_url).attr("type", FPFile.mimetype)
      app.set_up_rg_audio_players()

      $("#song_audio_url").val(FPFile.url)
      $('form.edit_song').submit()
    })
    
    return false
  })
});
$(document).ready(function() {
  if (CURRENT_USER) {
    app.user_pusher_channel = app.pusher.subscribe(CURRENT_USER.pusher_channel)
    
    app.user_pusher_channel.bind_all(function(event, data) {
      switch (event) {
        case 'new-message':
          app.setup_messages_button()
          $("#inbox_icon").reloadTooltip()
        break;
        
        case 'new-activity-stream-event':
          app.setup_activity_stream_button()
          $("#activity_stream_icon").reloadTooltip()
        break;
        
        case 'iq-changed':
          $(".user_badge[data-id="+ CURRENT_USER.id +"] .iq .iq_value").text(data[CURRENT_CHANNEL])
        break;

        case 'placed-in-penalty-box':
          $('.env-font').remove()
        break;
      }
    })
  }
});
$(document).ready(function() {
  $('a.impersonate').live('click', function() {
    var to_impersonate = prompt("Who do you want to impersonate? (Enter the nickname or email of the user you want to sign in as)")

    if ($.trim(to_impersonate) !== '') {
      $.post('/users/impersonate', {login: to_impersonate}, function(data) {
        window.location.reload(true);
      })
      $.facebox("<h1>JUST A SEC!! DON'T COME IN!!!</h1>")
    }
  });
  
  $('a.search_user_aliases').live('click', function() {
    var alias = prompt("Find all users who've ever had this login")

    if ($.trim(alias) !== '') {
      window.location.href = "/users/aliases?alias=" + encodeURIComponent(alias);
    }
  });
  
  $("#user_followers > button[data-tab]").live("click", function() {
    $("a[href=" + $(this).attr("data-tab") + "]").click();
  });
});
$(document).ready(function() {
  if ($("body").is(".act-claim-your-verified-account.cont-static")) {
    
    $(".new_feedback").submit(function() {
      var $form = $(this);
      $form.find(".example").val('');
      var validator = $form.validate();

      if (validator.form()) {
        window.setTimeout(function() {$form.find("input[type='submit']").attr('disabled', "true").val("Loading...")}, 1);
        
        $form.submitWithAjaxQueue({dataType: 'text'})
        
        $form.addClass("success")
      } else {
        validator.showErrors();
      }
      return false;
    });
    
  }  
})

;
$("a.vote").live('click', function() {
  var $this = $(this);
  
  var direction = $this.hasClass('toggled') ? 'middle' : $this.attr('data-direction')
  
  $.post(this.href, {'direction': direction}, function(data) {
    $this.closest('.voting_links').replaceWith(data);
  });
  
  $this.siblings('.vote').removeClass('toggled');
  $this.toggleClass("toggled");
  return false;
});

$("a.clear_votes").live('click', function() {
  var $this = $(this);
  if (!confirm($this.attr('data-confirm'))) return false

  $.post(this.href, function(data) {
    $this.closest('.qtip').qtip('api').elements.target.closest('.voting_links').replaceWith(data)
  });
  return false
});






