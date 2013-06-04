/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com

(function(){var e,t,n;(function(r){function d(e,t){return h.call(e,t)}function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(e){if(d(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!d(a,e)&&!d(c,e))throw new Error("No "+e);return a[e]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(e,t,n,i){var s,l,h,p,v,g=[],w;i=i||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(v=0;v<t.length;v+=1){p=o(t[v],i),l=p.f;if(l==="require")g[v]=u.require(e);else if(l==="exports")g[v]=u.exports(e),w=!0;else if(l==="module")s=g[v]=u.module(e);else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=n.apply(a[e],g);if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!w)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){return typeof e=="string"?u[e]?u[e](t):b(o(e,t).f):(e.splice||(l=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s)},s.config=function(e){return l=e,l.deps&&s(l.deps,l.callback),s},n=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("../vendor/almond",function(){}),function(e){function r(e,t){return function(n){return l(e.call(this,n),t)}}function i(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function s(){}function o(e){a(this,e)}function u(e){var t=this._data={},n=e.years||e.year||e.y||0,r=e.months||e.month||e.M||0,i=e.weeks||e.week||e.w||0,s=e.days||e.day||e.d||0,o=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,a=e.seconds||e.second||e.s||0,l=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=l+a*1e3+u*6e4+o*36e5,this._days=s+i*7,this._months=r+n*12,t.milliseconds=l%1e3,a+=f(l/1e3),t.seconds=a%60,u+=f(a/60),t.minutes=u%60,o+=f(u/60),t.hours=o%24,s+=f(o/24),s+=i*7,t.days=s%30,r+=f(s/30),t.months=r%12,n+=f(r/12),t.years=n}function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function f(e){return e<0?Math.ceil(e):Math.floor(e)}function l(e,t){var n=e+"";while(n.length<t)n="0"+n;return n}function c(e,t,n){var r=t._milliseconds,i=t._days,s=t._months,o;r&&e._d.setTime(+e+r*n),i&&e.date(e.date()+i*n),s&&(o=e.date(),e.date(1).month(e.month()+s*n).date(Math.min(o,e.daysInMonth())))}function h(e){return Object.prototype.toString.call(e)==="[object Array]"}function p(e,t){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)~~e[s]!==~~t[s]&&i++;return i+r}function d(e,t){return t.abbr=e,j[e]||(j[e]=new s),j[e].set(t),j[e]}function v(e){return e?(!j[e]&&F&&t("./lang/"+e),j[e]):D.fn._lang}function m(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function g(e){var t=e.match(q),n,r;for(n=0,r=t.length;n<r;n++)ut[t[n]]?t[n]=ut[t[n]]:t[n]=m(t[n]);return function(i){var s="";for(n=0;n<r;n++)s+=typeof t[n].call=="function"?t[n].call(i,e):t[n];return s}}function y(e,t){function n(t){return e.lang().longDateFormat(t)||t}var r=5;while(r--&&R.test(t))t=t.replace(R,n);return it[t]||(it[t]=g(t)),it[t](e)}function b(e){switch(e){case"DDDD":return X;case"YYYY":return V;case"YYYYY":return $;case"S":case"SS":case"SSS":case"DDD":return W;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return J;case"X":return G;case"Z":case"ZZ":return K;case"T":return Q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return z;default:return new RegExp(e.replace("\\",""))}}function w(e,t,n){var r,i,s=n._a;switch(e){case"M":case"MM":s[1]=t==null?0:~~t-1;break;case"MMM":case"MMMM":r=v(n._l).monthsParse(t),r!=null?s[1]=r:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":t!=null&&(s[2]=~~t);break;case"YY":s[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~t;break;case"a":case"A":n._isPm=(t+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":s[3]=~~t;break;case"m":case"mm":s[4]=~~t;break;case"s":case"ss":s[5]=~~t;break;case"S":case"SS":case"SSS":s[6]=~~(("0."+t)*1e3);break;case"X":n._d=new Date(parseFloat(t)*1e3);break;case"Z":case"ZZ":n._useUTC=!0,r=(t+"").match(tt),r&&r[1]&&(n._tzh=~~r[1]),r&&r[2]&&(n._tzm=~~r[2]),r&&r[0]==="+"&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}t==null&&(n._isValid=!1)}function E(e){var t,n,r=[];if(e._d)return;for(t=0;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];r[3]+=e._tzh||0,r[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(r[0],r[1],r[2]),n.setUTCHours(r[3],r[4],r[5],r[6])):(n.setFullYear(r[0],r[1],r[2]),n.setHours(r[3],r[4],r[5],r[6])),e._d=n}function S(e){var t=e._f.match(q),n=e._i,r,i;e._a=[];for(r=0;r<t.length;r++)i=(b(t[r]).exec(n)||[])[0],i&&(n=n.slice(n.indexOf(i)+i.length)),ut[t[r]]&&w(t[r],i,e);e._isPm&&e._a[3]<12&&(e._a[3]+=12),e._isPm===!1&&e._a[3]===12&&(e._a[3]=0),E(e)}function x(e){var t,n,r,i=99,s,u,f;while(e._f.length){t=a({},e),t._f=e._f.pop(),S(t),n=new o(t);if(n.isValid()){r=n;break}f=p(t._a,n.toArray()),f<i&&(i=f,r=n)}a(e,r)}function T(e){var t,n=e._i;if(Y.exec(n)){e._f="YYYY-MM-DDT";for(t=0;t<4;t++)if(et[t][1].exec(n)){e._f+=et[t][0];break}K.exec(n)&&(e._f+=" Z"),S(e)}else e._d=new Date(n)}function N(t){var n=t._i,r=I.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):typeof n=="string"?T(t):h(n)?(t._a=n.slice(0),E(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function C(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function k(e,t,n){var r=H(Math.abs(e)/1e3),i=H(r/60),s=H(i/60),o=H(s/24),u=H(o/365),a=r<45&&["s",r]||i===1&&["m"]||i<45&&["mm",i]||s===1&&["h"]||s<22&&["hh",s]||o===1&&["d"]||o<=25&&["dd",o]||o<=45&&["M"]||o<345&&["MM",H(o/30)]||u===1&&["y"]||["yy",u];return a[2]=t,a[3]=e>0,a[4]=n,C.apply({},a)}function L(e,t,n){var r=n-t,i=n-e.day();return i>r&&(i-=7),i<r-7&&(i+=7),Math.ceil(D(e).add("d",i).dayOfYear()/7)}function A(e){var t=e._i,n=e._f;return t===null||t===""?null:(typeof t=="string"&&(e._i=t=v().preparse(t)),D.isMoment(t)?(e=a({},t),e._d=new Date(+t._d)):n?h(n)?x(e):S(e):N(e),new o(e))}function O(e,t){D.fn[e]=D.fn[e+"s"]=function(e){var n=this._isUTC?"UTC":"";return e!=null?(this._d["set"+n+t](e),this):this._d["get"+n+t]()}}function M(e){D.duration.fn[e]=function(){return this._data[e]}}function _(e,t){D.duration.fn["as"+e]=function(){return+this/t}}var D,P="2.0.0",H=Math.round,B,j={},F=typeof module!="undefined"&&module.exports,I=/^\/?Date\((\-?\d+)/i,q=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,R=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,U=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,z=/\d\d?/,W=/\d{1,3}/,X=/\d{3}/,V=/\d{1,4}/,$=/[+\-]?\d{1,6}/,J=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,K=/Z|[\+\-]\d\d:?\d\d/i,Q=/T/i,G=/[\+\-]?\d+(\.\d{1,3})?/,Y=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Z="YYYY-MM-DDTHH:mm:ssZ",et=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],tt=/([\+\-]|\d\d)/gi,nt="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),rt={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},it={},st="DDD w W M D d".split(" "),ot="M D H h m s w W".split(" "),ut={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return l(this.year()%100,2)},YYYY:function(){return l(this.year(),4)},YYYYY:function(){return l(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return l(~~(this.milliseconds()/10),2)},SSS:function(){return l(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+l(~~(e/60),2)+":"+l(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+l(~~(10*e/6),4)},X:function(){return this.unix()}};while(st.length)B=st.pop(),ut[B+"o"]=i(ut[B]);while(ot.length)B=ot.pop(),ut[B+B]=r(ut[B],2);ut.DDDD=r(ut.DDD,3),s.prototype={set:function(e){var t,n;for(n in e)t=e[n],typeof t=="function"?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,r,i;this._monthsParse||(this._monthsParse=[]);for(t=0;t<12;t++){this._monthsParse[t]||(n=D([2e3,t]),r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(r.replace(".",""),"i"));if(this._monthsParse[t].test(e))return t}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n=="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i=="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n=="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return L(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},D=function(e,t,n){return A({_i:e,_f:t,_l:n,_isUTC:!1})},D.utc=function(e,t,n){return A({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},D.unix=function(e){return D(e*1e3)},D.duration=function(e,t){var n=D.isDuration(e),r=typeof e=="number",i=n?e._data:r?{}:e,s;return r&&(t?i[t]=e:i.milliseconds=e),s=new u(i),n&&e.hasOwnProperty("_lang")&&(s._lang=e._lang),s},D.version=P,D.defaultFormat=Z,D.lang=function(e,t){var n;if(!e)return D.fn._lang._abbr;t?d(e,t):j[e]||v(e),D.duration.fn._lang=D.fn._lang=v(e)},D.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),v(e)},D.isMoment=function(e){return e instanceof o},D.isDuration=function(e){return e instanceof u},D.fn=o.prototype={clone:function(){return D(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return D.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return this._isValid==null&&(this._a?this._isValid=!p(this._a,(this._isUTC?D.utc(this._a):D(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var t=y(this,e||D.defaultFormat);return this.lang().postformat(t)},add:function(e,t){var n;return typeof e=="string"?n=D.duration(+t,e):n=D.duration(e,t),c(this,n,1),this},subtract:function(e,t){var n;return typeof e=="string"?n=D.duration(+t,e):n=D.duration(e,t),c(this,n,-1),this},diff:function(e,t,n){var r=this._isUTC?D(e).utc():D(e).local(),i=(this.zone()-r.zone())*6e4,s,o;return t&&(t=t.replace(/s$/,"")),t==="year"||t==="month"?(s=(this.daysInMonth()+r.daysInMonth())*432e5,o=(this.year()-r.year())*12+(this.month()-r.month()),o+=(this-D(this).startOf("month")-(r-D(r).startOf("month")))/s,t==="year"&&(o/=12)):(s=this-r-i,o=t==="second"?s/1e3:t==="minute"?s/6e4:t==="hour"?s/36e5:t==="day"?s/864e5:t==="week"?s/6048e5:s),n?o:f(o)},from:function(e,t){return D.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(D(),e)},calendar:function(){var e=this.diff(D().startOf("day"),"days",!0),t=e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(t,this))},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<D([this.year()]).zone()||this.zone()<D([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e==null?t:this.add({d:e-t})},startOf:function(e){e=e.replace(/s$/,"");switch(e){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return e==="week"&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(e,t){return t=typeof t!="undefined"?t:"millisecond",+this.clone().startOf(t)>+D(e).startOf(t)},isBefore:function(e,t){return t=typeof t!="undefined"?t:"millisecond",+this.clone().startOf(t)<+D(e).startOf(t)},isSame:function(e,t){return t=typeof t!="undefined"?t:"millisecond",+this.clone().startOf(t)===+D(e).startOf(t)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return D.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var t=H((D(this).startOf("day")-D(this).startOf("year"))/864e5)+1;return e==null?t:this.add("d",e-t)},isoWeek:function(e){var t=L(this,1,4);return e==null?t:this.add("d",(e-t)*7)},week:function(e){var t=this.lang().week(this);return e==null?t:this.add("d",(e-t)*7)},lang:function(t){return t===e?this._lang:(this._lang=v(t),this)}};for(B=0;B<nt.length;B++)O(nt[B].toLowerCase().replace(/s$/,""),nt[B]);O("year","FullYear"),D.fn.days=D.fn.day,D.fn.weeks=D.fn.week,D.fn.isoWeeks=D.fn.isoWeek,D.duration.fn=u.prototype={weeks:function(){return f(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(e){var t=+this,n=k(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:D.fn.lang};for(B in rt)rt.hasOwnProperty(B)&&(_(B,rt[B]),M(B.toLowerCase()));_("Weeks",6048e5),D.lang("en",{ordinal:function(e){var t=e%10,n=~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),F&&(module.exports=D),typeof ender=="undefined"&&(this.moment=D),typeof n=="function"&&n.amd&&n("moment",[],function(){return D})}.call(this),n("util/util",[],function(){var e=function(e,t){for(var n=0;n<e.length;n++)t.call(e[n],e[n],n)},t=function(t,n){var r=[];return e(t,function(e){r.push(n(e))}),r},n=function(){var t=[],n=function(e){t.push(e)},r=function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)},i=function(n){e(t,function(e){e(n)})};return{add:n,remove:r,notify:i}};return{each:e,map:t,observable:n}}),n("serializers/time_span_serializer",[],function(){var e=function(e){var t=e.clone();return t.add(e.zone(),"minutes"),t},t=function(t){var n={time_span:{start:e(t.start())}};return t.end()&&(n.time_span.end=e(t.end())),JSON.stringify(n)};return{serialize:t}}),n("models/time_span",["moment","util/util","serializers/time_span_serializer"],function(e,t,n){var r=function(){var r,i,s=t.observable(),o=t.observable(),u=t.observable();r=e();var a=function(e){return e&&(r=e,u.notify(this)),r},f=function(e){return e&&(i=e,u.notify(this)),i},l=function(){var t=f()||e();return e.duration(t.diff(a()))},c=function(){var e=l(),t="";return t+=e.hours(),t+=":",e.minutes()>9?t+=e.minutes():t+="0"+e.minutes(),t},h=function(t){this.end(t||e()),o.notify(this)},p=function(){return n.serialize(this)};return{start:a,end:f,checkOut:h,duration:l,toString:c,toJSON:p,trackCheckin:s.add,trackCheckout:o.add,trackChange:u.add,isCheckedOut:function(){return!!f()}}};return{create:r}}),n("services/time_span_service",["models/time_span","util/util"],function(e,t){return{create:function(){var n=[],r=t.observable(),i=t.observable(),s=function(){return n.length},o=function(e){var t=s();return n.indexOf(e)===-1&&(t=n.push(e),r.notify(e)),t},u=function(){return o(e.create())},a=function(){return n[0]},f=function(){return n[n.length-1]},l=function(e){var t=n.indexOf(e);if(t>-1)return n.splice(t,1)},c=function(){n.splice(0,n.length),i.notify()};return{all:n,addNew:u,add:o,remove:l,delete_all:c,first:a,last:f,count:s,track_add:r.add,track_delete:i.add}}}}),n("models/simple_storage",[],function(){return{create:function(e){var t={};return e&&(t=e),{save:function(e,n){t[e]=n},fetch:function(e){return t[e]},reset:function(){t.clear?t.clear():t={}}}}}}),n("serializers/time_span_deserializer",["models/time_span","moment"],function(e,t){var n=function(n){var r=JSON.parse(n).time_span,i=e.create();return i.start(t(r.start)),r.end&&i.end(t(r.end)),i};return{deserialize:n,from_object:function(e){return n(JSON.stringify(e))}}}),n("services/local_storage_time_span_service",["services/time_span_service","models/simple_storage","serializers/time_span_serializer","serializers/time_span_deserializer","util/util"],function(e,t,n,r,i){return{create:function(n){var s=n||t.create(),o=e.create(),u=function(){s.save("time_spans",JSON.stringify(o.all))};o.track_add(function(e){u(),e.trackChange(function(e){u()})}),o.track_delete(function(){s.reset()});var a=s.fetch("time_spans");if(a){var f=JSON.parse(a);i.each(f,function(e){o.add(r.deserialize(e))})}return o}}}),n("presenters/time_presenter",["moment"],function(e){return{present:function(t,n){var n=n||e(),r="";if(t){var t=e(t);t.isSame(n,"day")?r=t.format("HH:mm"):t.isSame(n,"week")?r=t.format("ddd HH:mm"):t.isSame(n,"year")?r=t.format("DD/MM HH:mm"):r=t.format("DD/MM-YYYY HH:mm")}return r}}}),n("util/dom",[],function(){var e=e||function(){var e=function(e,t){var t=t||document;return t.querySelectorAll(e)};return e}();return e}),n("views/check_in_view",["util/dom"],function(e){var t=function(e,t){var n=e.className;e.className=n.replace(t,"")},n=function(e,t){var n=e.className;n.indexOf(t)===-1&&(e.className=n+" "+t)};return{create:function(r,i){var s=e("#check-in",i)[0],o=e("#check-out",i)[0],u=function(e){e.preventDefault(),r.addNew(),n(s,"hidden"),t(o,"hidden"),t(o,"disabled")},a=function(e){e.preventDefault(),r.last().checkOut(),t(s,"hidden"),n(o,"hidden")};s.addEventListener("click",u),o.addEventListener("click",a);var f=r.last();f&&(f.isCheckedOut()||(n(s,"hidden"),t(o,"hidden"),t(o,"disabled")))}}}),n("views/cleanup_view",["util/dom"],function(e){return{create:function(t,n){var r=e("#cleanup",n)[0],i=function(e){e.preventDefault(),t.delete_all()};r.addEventListener("click",i)}}}),n("views/status_view",["util/dom","presenters/time_presenter"],function(e,t){return{create:function(n,r){var i=e(".punch-clock",r)[0],s,o=function(e){var n="Check-in at ";n+=t.present(e.start()),n+=" ("+e+")",i.textContent=n},u=function(e){var n=t.present(e.start());n+=" - "+t.present(e.end()),n+=" ("+e+")",i.textContent=n,clearInterval(s)},a=function(e){o(e),e.trackCheckout(u),s=setInterval(function(){o(e)},3e4)};n.track_add(a);var f=n.last();f&&(f.isCheckedOut()?u(f):a(f))}}}),t.config({paths:{moment:"moment.min"}}),t(["services/local_storage_time_span_service","models/simple_storage","presenters/time_presenter","views/check_in_view","views/cleanup_view","views/status_view"],function(e,t,n,r,i,s){var o=t.create(window.localStorage),u=e.create(o),a=s.create(u),f=i.create(u),l=r.create(u)}),n("defaults",function(){})})();