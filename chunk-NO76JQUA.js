import{D as Ie,T as qe,ba as Io,ka as Po,la as xt,na as Fo,o as Dt,pa as _e,qa as No,sa as Wo,ta as Ro,ua as Eo,va as Lo}from"./chunk-DDPNZYS2.js";import{Ab as wo,Cb as So,Db as Mo,Fa as P,Jb as Je,Lb as dn,Na as ln,Qa as vt,Ra as un,Sa as Ce,T as yt,Ta as se,U as sn,Ua as je,Va as ye,Yb as Y,Z as ie,Zb as Do,_b as hn,ab as ae,bb as O,c as bo,ca as an,db as kt,e as Ga,f as Za,fa as po,fb as wt,fc as xo,ga as Z,kb as Ye,lb as $e,ma as _t,mb as he,mc as To,nb as St,ob as Mt,oc as Oo,pb as yo,pc as Co,qa as mo,qc as Yo,rb as _o,rc as fn,sb as V,tb as vo,tc as $o,ub as ko,vb as ze,wa as go,xb as Ge,yb as Ze,zb as cn}from"./chunk-GPHNUKZC.js";var jo=Ga((pn,Pe)=>{"use strict";(function(i,u){typeof pn=="object"&&typeof Pe<"u"?Pe.exports=u():typeof define=="function"&&define.amd?define(u):i.moment=u()})(pn,function(){"use strict";var i;function u(){return i.apply(null,arguments)}function a(e){i=e}function h(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function d(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(m(e,t))return!1;return!0}function N(e){return e===void 0}function J(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Fe(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function gn(e,t){var n=[],o,r=e.length;for(o=0;o<r;++o)n.push(t(e[o],o));return n}function le(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function B(e,t,n,o){return Bn(e,t,n,o,!0).utc()}function Zo(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(e){return e._pf==null&&(e._pf=Zo()),e._pf}var Tt;Array.prototype.some?Tt=Array.prototype.some:Tt=function(e){var t=Object(this),n=t.length>>>0,o;for(o=0;o<n;o++)if(o in t&&e.call(this,t[o],o,t))return!0;return!1};function Ot(e){var t=null,n=!1,o=e._d&&!isNaN(e._d.getTime());if(o&&(t=y(e),n=Tt.call(t.parsedDateParts,function(r){return r!=null}),o=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(o=o&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=o;else return o;return e._isValid}function Qe(e){var t=B(NaN);return e!=null?le(y(t),e):y(t).userInvalidated=!0,t}var yn=u.momentProperties=[],Ct=!1;function Yt(e,t){var n,o,r,s=yn.length;if(N(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),N(t._i)||(e._i=t._i),N(t._f)||(e._f=t._f),N(t._l)||(e._l=t._l),N(t._strict)||(e._strict=t._strict),N(t._tzm)||(e._tzm=t._tzm),N(t._isUTC)||(e._isUTC=t._isUTC),N(t._offset)||(e._offset=t._offset),N(t._pf)||(e._pf=y(t)),N(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)o=yn[n],r=t[o],N(r)||(e[o]=r);return e}function Ne(e){Yt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ct===!1&&(Ct=!0,u.updateOffset(this),Ct=!1)}function A(e){return e instanceof Ne||e!=null&&e._isAMomentObject!=null}function _n(e){u.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function R(e,t){var n=!0;return le(function(){if(u.deprecationHandler!=null&&u.deprecationHandler(null,e),n){var o=[],r,s,l,f=arguments.length;for(s=0;s<f;s++){if(r="",typeof arguments[s]=="object"){r+=`
[`+s+"] ";for(l in arguments[0])m(arguments[0],l)&&(r+=l+": "+arguments[0][l]+", ");r=r.slice(0,-2)}else r=arguments[s];o.push(r)}_n(e+`
Arguments: `+Array.prototype.slice.call(o).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var vn={};function kn(e,t){u.deprecationHandler!=null&&u.deprecationHandler(e,t),vn[e]||(_n(t),vn[e]=!0)}u.suppressDeprecationWarnings=!1,u.deprecationHandler=null;function j(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Jo(e){var t,n;for(n in e)m(e,n)&&(t=e[n],j(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function $t(e,t){var n=le({},e),o;for(o in t)m(t,o)&&(d(e[o])&&d(t[o])?(n[o]={},le(n[o],e[o]),le(n[o],t[o])):t[o]!=null?n[o]=t[o]:delete n[o]);for(o in e)m(e,o)&&!m(t,o)&&d(e[o])&&(n[o]=le({},n[o]));return n}function It(e){e!=null&&this.set(e)}var Pt;Object.keys?Pt=Object.keys:Pt=function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var qo={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Qo(e,t,n){var o=this._calendar[e]||this._calendar.sameElse;return j(o)?o.call(t,n):o}function z(e,t,n){var o=""+Math.abs(e),r=t-o.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+o}var Ft=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Xe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Nt={},ve={};function p(e,t,n,o){var r=o;typeof o=="string"&&(r=function(){return this[o]()}),e&&(ve[e]=r),t&&(ve[t[0]]=function(){return z(r.apply(this,arguments),t[1],t[2])}),n&&(ve[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function Xo(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Ko(e){var t=e.match(Ft),n,o;for(n=0,o=t.length;n<o;n++)ve[t[n]]?t[n]=ve[t[n]]:t[n]=Xo(t[n]);return function(r){var s="",l;for(l=0;l<o;l++)s+=j(t[l])?t[l].call(r,e):t[l];return s}}function Ke(e,t){return e.isValid()?(t=wn(t,e.localeData()),Nt[t]=Nt[t]||Ko(t),Nt[t](e)):e.localeData().invalidDate()}function wn(e,t){var n=5;function o(r){return t.longDateFormat(r)||r}for(Xe.lastIndex=0;n>=0&&Xe.test(e);)e=e.replace(Xe,o),Xe.lastIndex=0,n-=1;return e}var er={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function tr(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Ft).map(function(o){return o==="MMMM"||o==="MM"||o==="DD"||o==="dddd"?o.slice(1):o}).join(""),this._longDateFormat[e])}var nr="Invalid date";function or(){return this._invalidDate}var rr="%d",ir=/\d{1,2}/;function sr(e){return this._ordinal.replace("%d",e)}var ar={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function lr(e,t,n,o){var r=this._relativeTime[n];return j(r)?r(e,t,n,o):r.replace(/%d/i,e)}function ur(e,t){var n=this._relativeTime[e>0?"future":"past"];return j(n)?n(t):n.replace(/%s/i,t)}var Sn={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function E(e){return typeof e=="string"?Sn[e]||Sn[e.toLowerCase()]:void 0}function Wt(e){var t={},n,o;for(o in e)m(e,o)&&(n=E(o),n&&(t[n]=e[o]));return t}var cr={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function dr(e){var t=[],n;for(n in e)m(e,n)&&t.push({unit:n,priority:cr[n]});return t.sort(function(o,r){return o.priority-r.priority}),t}var Mn=/\d/,W=/\d\d/,Dn=/\d{3}/,Rt=/\d{4}/,et=/[+-]?\d{6}/,M=/\d\d?/,xn=/\d\d\d\d?/,Tn=/\d\d\d\d\d\d?/,tt=/\d{1,3}/,Et=/\d{1,4}/,nt=/[+-]?\d{1,6}/,ke=/\d+/,ot=/[+-]?\d+/,hr=/Z|[+-]\d\d:?\d\d/gi,rt=/Z|[+-]\d\d(?::?\d\d)?/gi,fr=/[+-]?\d+(\.\d{1,3})?/,We=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,we=/^[1-9]\d?/,Lt=/^([1-9]\d|\d)/,it;it={};function b(e,t,n){it[e]=j(t)?t:function(o,r){return o&&n?n:t}}function br(e,t){return m(it,e)?it[e](t._strict,t._locale):new RegExp(pr(e))}function pr(e){return q(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,o,r,s){return n||o||r||s}))}function q(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function L(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=L(t)),n}var At={};function S(e,t){var n,o=t,r;for(typeof e=="string"&&(e=[e]),J(t)&&(o=function(s,l){l[t]=_(s)}),r=e.length,n=0;n<r;n++)At[e[n]]=o}function Re(e,t){S(e,function(n,o,r,s){r._w=r._w||{},t(n,r._w,r,s)})}function mr(e,t,n){t!=null&&m(At,e)&&At[e](t,n._a,n,e)}function st(e){return e%4===0&&e%100!==0||e%400===0}var I=0,Q=1,G=2,C=3,U=4,X=5,pe=6,gr=7,yr=8;p("Y",0,0,function(){var e=this.year();return e<=9999?z(e,4):"+"+e}),p(0,["YY",2],0,function(){return this.year()%100}),p(0,["YYYY",4],0,"year"),p(0,["YYYYY",5],0,"year"),p(0,["YYYYYY",6,!0],0,"year"),b("Y",ot),b("YY",M,W),b("YYYY",Et,Rt),b("YYYYY",nt,et),b("YYYYYY",nt,et),S(["YYYYY","YYYYYY"],I),S("YYYY",function(e,t){t[I]=e.length===2?u.parseTwoDigitYear(e):_(e)}),S("YY",function(e,t){t[I]=u.parseTwoDigitYear(e)}),S("Y",function(e,t){t[I]=parseInt(e,10)});function Ee(e){return st(e)?366:365}u.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var On=Se("FullYear",!0);function _r(){return st(this.year())}function Se(e,t){return function(n){return n!=null?(Cn(this,e,n),u.updateOffset(this,t),this):Le(this,e)}}function Le(e,t){if(!e.isValid())return NaN;var n=e._d,o=e._isUTC;switch(t){case"Milliseconds":return o?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return o?n.getUTCSeconds():n.getSeconds();case"Minutes":return o?n.getUTCMinutes():n.getMinutes();case"Hours":return o?n.getUTCHours():n.getHours();case"Date":return o?n.getUTCDate():n.getDate();case"Day":return o?n.getUTCDay():n.getDay();case"Month":return o?n.getUTCMonth():n.getMonth();case"FullYear":return o?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Cn(e,t,n){var o,r,s,l,f;if(!(!e.isValid()||isNaN(n))){switch(o=e._d,r=e._isUTC,t){case"Milliseconds":return void(r?o.setUTCMilliseconds(n):o.setMilliseconds(n));case"Seconds":return void(r?o.setUTCSeconds(n):o.setSeconds(n));case"Minutes":return void(r?o.setUTCMinutes(n):o.setMinutes(n));case"Hours":return void(r?o.setUTCHours(n):o.setHours(n));case"Date":return void(r?o.setUTCDate(n):o.setDate(n));case"FullYear":break;default:return}s=n,l=e.month(),f=e.date(),f=f===29&&l===1&&!st(s)?28:f,r?o.setUTCFullYear(s,l,f):o.setFullYear(s,l,f)}}function vr(e){return e=E(e),j(this[e])?this[e]():this}function kr(e,t){if(typeof e=="object"){e=Wt(e);var n=dr(e),o,r=n.length;for(o=0;o<r;o++)this[n[o].unit](e[n[o].unit])}else if(e=E(e),j(this[e]))return this[e](t);return this}function wr(e,t){return(e%t+t)%t}var T;Array.prototype.indexOf?T=Array.prototype.indexOf:T=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Ut(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=wr(t,12);return e+=(t-n)/12,n===1?st(e)?29:28:31-n%7%2}p("M",["MM",2],"Mo",function(){return this.month()+1}),p("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),p("MMMM",0,0,function(e){return this.localeData().months(this,e)}),b("M",M,we),b("MM",M,W),b("MMM",function(e,t){return t.monthsShortRegex(e)}),b("MMMM",function(e,t){return t.monthsRegex(e)}),S(["M","MM"],function(e,t){t[Q]=_(e)-1}),S(["MMM","MMMM"],function(e,t,n,o){var r=n._locale.monthsParse(e,o,n._strict);r!=null?t[Q]=r:y(n).invalidMonth=e});var Sr="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Yn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),$n=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Mr=We,Dr=We;function xr(e,t){return e?h(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||$n).test(t)?"format":"standalone"][e.month()]:h(this._months)?this._months:this._months.standalone}function Tr(e,t){return e?h(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[$n.test(t)?"format":"standalone"][e.month()]:h(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Or(e,t,n){var o,r,s,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],o=0;o<12;++o)s=B([2e3,o]),this._shortMonthsParse[o]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[o]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(r=T.call(this._shortMonthsParse,l),r!==-1?r:null):(r=T.call(this._longMonthsParse,l),r!==-1?r:null):t==="MMM"?(r=T.call(this._shortMonthsParse,l),r!==-1?r:(r=T.call(this._longMonthsParse,l),r!==-1?r:null)):(r=T.call(this._longMonthsParse,l),r!==-1?r:(r=T.call(this._shortMonthsParse,l),r!==-1?r:null))}function Cr(e,t,n){var o,r,s;if(this._monthsParseExact)return Or.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),o=0;o<12;o++){if(r=B([2e3,o]),n&&!this._longMonthsParse[o]&&(this._longMonthsParse[o]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[o]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!n&&!this._monthsParse[o]&&(s="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[o]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[o].test(e))return o;if(n&&t==="MMM"&&this._shortMonthsParse[o].test(e))return o;if(!n&&this._monthsParse[o].test(e))return o}}function In(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=_(t);else if(t=e.localeData().monthsParse(t),!J(t))return e}var n=t,o=e.date();return o=o<29?o:Math.min(o,Ut(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,o):e._d.setMonth(n,o),e}function Pn(e){return e!=null?(In(this,e),u.updateOffset(this,!0),this):Le(this,"Month")}function Yr(){return Ut(this.year(),this.month())}function $r(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Fn.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Mr),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Ir(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Fn.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Dr),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Fn(){function e(g,v){return v.length-g.length}var t=[],n=[],o=[],r,s,l,f;for(r=0;r<12;r++)s=B([2e3,r]),l=q(this.monthsShort(s,"")),f=q(this.months(s,"")),t.push(l),n.push(f),o.push(f),o.push(l);t.sort(e),n.sort(e),o.sort(e),this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Pr(e,t,n,o,r,s,l){var f;return e<100&&e>=0?(f=new Date(e+400,t,n,o,r,s,l),isFinite(f.getFullYear())&&f.setFullYear(e)):f=new Date(e,t,n,o,r,s,l),f}function Ae(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function at(e,t,n){var o=7+t-n,r=(7+Ae(e,0,o).getUTCDay()-t)%7;return-r+o-1}function Nn(e,t,n,o,r){var s=(7+n-o)%7,l=at(e,o,r),f=1+7*(t-1)+s+l,g,v;return f<=0?(g=e-1,v=Ee(g)+f):f>Ee(e)?(g=e+1,v=f-Ee(e)):(g=e,v=f),{year:g,dayOfYear:v}}function Ue(e,t,n){var o=at(e.year(),t,n),r=Math.floor((e.dayOfYear()-o-1)/7)+1,s,l;return r<1?(l=e.year()-1,s=r+K(l,t,n)):r>K(e.year(),t,n)?(s=r-K(e.year(),t,n),l=e.year()+1):(l=e.year(),s=r),{week:s,year:l}}function K(e,t,n){var o=at(e,t,n),r=at(e+1,t,n);return(Ee(e)-o+r)/7}p("w",["ww",2],"wo","week"),p("W",["WW",2],"Wo","isoWeek"),b("w",M,we),b("ww",M,W),b("W",M,we),b("WW",M,W),Re(["w","ww","W","WW"],function(e,t,n,o){t[o.substr(0,1)]=_(e)});function Fr(e){return Ue(e,this._week.dow,this._week.doy).week}var Nr={dow:0,doy:6};function Wr(){return this._week.dow}function Rr(){return this._week.doy}function Er(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Lr(e){var t=Ue(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}p("d",0,"do","day"),p("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),p("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),p("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),p("e",0,0,"weekday"),p("E",0,0,"isoWeekday"),b("d",M),b("e",M),b("E",M),b("dd",function(e,t){return t.weekdaysMinRegex(e)}),b("ddd",function(e,t){return t.weekdaysShortRegex(e)}),b("dddd",function(e,t){return t.weekdaysRegex(e)}),Re(["dd","ddd","dddd"],function(e,t,n,o){var r=n._locale.weekdaysParse(e,o,n._strict);r!=null?t.d=r:y(n).invalidWeekday=e}),Re(["d","e","E"],function(e,t,n,o){t[o]=_(e)});function Ar(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Ur(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ht(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Hr="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Wn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Vr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Br=We,jr=We,zr=We;function Gr(e,t){var n=h(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Ht(n,this._week.dow):e?n[e.day()]:n}function Zr(e){return e===!0?Ht(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Jr(e){return e===!0?Ht(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function qr(e,t,n){var o,r,s,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],o=0;o<7;++o)s=B([2e3,1]).day(o),this._minWeekdaysParse[o]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[o]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[o]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(r=T.call(this._weekdaysParse,l),r!==-1?r:null):t==="ddd"?(r=T.call(this._shortWeekdaysParse,l),r!==-1?r:null):(r=T.call(this._minWeekdaysParse,l),r!==-1?r:null):t==="dddd"?(r=T.call(this._weekdaysParse,l),r!==-1||(r=T.call(this._shortWeekdaysParse,l),r!==-1)?r:(r=T.call(this._minWeekdaysParse,l),r!==-1?r:null)):t==="ddd"?(r=T.call(this._shortWeekdaysParse,l),r!==-1||(r=T.call(this._weekdaysParse,l),r!==-1)?r:(r=T.call(this._minWeekdaysParse,l),r!==-1?r:null)):(r=T.call(this._minWeekdaysParse,l),r!==-1||(r=T.call(this._weekdaysParse,l),r!==-1)?r:(r=T.call(this._shortWeekdaysParse,l),r!==-1?r:null))}function Qr(e,t,n){var o,r,s;if(this._weekdaysParseExact)return qr.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),o=0;o<7;o++){if(r=B([2e3,1]).day(o),n&&!this._fullWeekdaysParse[o]&&(this._fullWeekdaysParse[o]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[o]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[o]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[o]||(s="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[o]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[o].test(e))return o;if(n&&t==="ddd"&&this._shortWeekdaysParse[o].test(e))return o;if(n&&t==="dd"&&this._minWeekdaysParse[o].test(e))return o;if(!n&&this._weekdaysParse[o].test(e))return o}}function Xr(e){if(!this.isValid())return e!=null?this:NaN;var t=Le(this,"Day");return e!=null?(e=Ar(e,this.localeData()),this.add(e-t,"d")):t}function Kr(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function ei(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Ur(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function ti(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Vt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=Br),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ni(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Vt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=jr),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function oi(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Vt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=zr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vt(){function e(F,re){return re.length-F.length}var t=[],n=[],o=[],r=[],s,l,f,g,v;for(s=0;s<7;s++)l=B([2e3,1]).day(s),f=q(this.weekdaysMin(l,"")),g=q(this.weekdaysShort(l,"")),v=q(this.weekdays(l,"")),t.push(f),n.push(g),o.push(v),r.push(f),r.push(g),r.push(v);t.sort(e),n.sort(e),o.sort(e),r.sort(e),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Bt(){return this.hours()%12||12}function ri(){return this.hours()||24}p("H",["HH",2],0,"hour"),p("h",["hh",2],0,Bt),p("k",["kk",2],0,ri),p("hmm",0,0,function(){return""+Bt.apply(this)+z(this.minutes(),2)}),p("hmmss",0,0,function(){return""+Bt.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)}),p("Hmm",0,0,function(){return""+this.hours()+z(this.minutes(),2)}),p("Hmmss",0,0,function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)});function Rn(e,t){p(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Rn("a",!0),Rn("A",!1);function En(e,t){return t._meridiemParse}b("a",En),b("A",En),b("H",M,Lt),b("h",M,we),b("k",M,we),b("HH",M,W),b("hh",M,W),b("kk",M,W),b("hmm",xn),b("hmmss",Tn),b("Hmm",xn),b("Hmmss",Tn),S(["H","HH"],C),S(["k","kk"],function(e,t,n){var o=_(e);t[C]=o===24?0:o}),S(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),S(["h","hh"],function(e,t,n){t[C]=_(e),y(n).bigHour=!0}),S("hmm",function(e,t,n){var o=e.length-2;t[C]=_(e.substr(0,o)),t[U]=_(e.substr(o)),y(n).bigHour=!0}),S("hmmss",function(e,t,n){var o=e.length-4,r=e.length-2;t[C]=_(e.substr(0,o)),t[U]=_(e.substr(o,2)),t[X]=_(e.substr(r)),y(n).bigHour=!0}),S("Hmm",function(e,t,n){var o=e.length-2;t[C]=_(e.substr(0,o)),t[U]=_(e.substr(o))}),S("Hmmss",function(e,t,n){var o=e.length-4,r=e.length-2;t[C]=_(e.substr(0,o)),t[U]=_(e.substr(o,2)),t[X]=_(e.substr(r))});function ii(e){return(e+"").toLowerCase().charAt(0)==="p"}var si=/[ap]\.?m?\.?/i,ai=Se("Hours",!0);function li(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Ln={calendar:qo,longDateFormat:er,invalidDate:nr,ordinal:rr,dayOfMonthOrdinalParse:ir,relativeTime:ar,months:Sr,monthsShort:Yn,week:Nr,weekdays:Hr,weekdaysMin:Vr,weekdaysShort:Wn,meridiemParse:si},x={},He={},Ve;function ui(e,t){var n,o=Math.min(e.length,t.length);for(n=0;n<o;n+=1)if(e[n]!==t[n])return n;return o}function An(e){return e&&e.toLowerCase().replace("_","-")}function ci(e){for(var t=0,n,o,r,s;t<e.length;){for(s=An(e[t]).split("-"),n=s.length,o=An(e[t+1]),o=o?o.split("-"):null;n>0;){if(r=lt(s.slice(0,n).join("-")),r)return r;if(o&&o.length>=n&&ui(s,o)>=n-1)break;n--}t++}return Ve}function di(e){return!!(e&&e.match("^[^/\\\\]*$"))}function lt(e){var t=null,n;if(x[e]===void 0&&typeof Pe<"u"&&Pe&&Pe.exports&&di(e))try{t=Ve._abbr,n=bo,n("./locale/"+e),ue(t)}catch{x[e]=null}return x[e]}function ue(e,t){var n;return e&&(N(t)?n=ee(e):n=jt(e,t),n?Ve=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Ve._abbr}function jt(e,t){if(t!==null){var n,o=Ln;if(t.abbr=e,x[e]!=null)kn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),o=x[e]._config;else if(t.parentLocale!=null)if(x[t.parentLocale]!=null)o=x[t.parentLocale]._config;else if(n=lt(t.parentLocale),n!=null)o=n._config;else return He[t.parentLocale]||(He[t.parentLocale]=[]),He[t.parentLocale].push({name:e,config:t}),null;return x[e]=new It($t(o,t)),He[e]&&He[e].forEach(function(r){jt(r.name,r.config)}),ue(e),x[e]}else return delete x[e],null}function hi(e,t){if(t!=null){var n,o,r=Ln;x[e]!=null&&x[e].parentLocale!=null?x[e].set($t(x[e]._config,t)):(o=lt(e),o!=null&&(r=o._config),t=$t(r,t),o==null&&(t.abbr=e),n=new It(t),n.parentLocale=x[e],x[e]=n),ue(e)}else x[e]!=null&&(x[e].parentLocale!=null?(x[e]=x[e].parentLocale,e===ue()&&ue(e)):x[e]!=null&&delete x[e]);return x[e]}function ee(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Ve;if(!h(e)){if(t=lt(e),t)return t;e=[e]}return ci(e)}function fi(){return Pt(x)}function zt(e){var t,n=e._a;return n&&y(e).overflow===-2&&(t=n[Q]<0||n[Q]>11?Q:n[G]<1||n[G]>Ut(n[I],n[Q])?G:n[C]<0||n[C]>24||n[C]===24&&(n[U]!==0||n[X]!==0||n[pe]!==0)?C:n[U]<0||n[U]>59?U:n[X]<0||n[X]>59?X:n[pe]<0||n[pe]>999?pe:-1,y(e)._overflowDayOfYear&&(t<I||t>G)&&(t=G),y(e)._overflowWeeks&&t===-1&&(t=gr),y(e)._overflowWeekday&&t===-1&&(t=yr),y(e).overflow=t),e}var bi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,pi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mi=/Z|[+-]\d\d(?::?\d\d)?/,ut=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],gi=/^\/?Date\((-?\d+)/i,yi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,_i={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Un(e){var t,n,o=e._i,r=bi.exec(o)||pi.exec(o),s,l,f,g,v=ut.length,F=Gt.length;if(r){for(y(e).iso=!0,t=0,n=v;t<n;t++)if(ut[t][1].exec(r[1])){l=ut[t][0],s=ut[t][2]!==!1;break}if(l==null){e._isValid=!1;return}if(r[3]){for(t=0,n=F;t<n;t++)if(Gt[t][1].exec(r[3])){f=(r[2]||" ")+Gt[t][0];break}if(f==null){e._isValid=!1;return}}if(!s&&f!=null){e._isValid=!1;return}if(r[4])if(mi.exec(r[4]))g="Z";else{e._isValid=!1;return}e._f=l+(f||"")+(g||""),Jt(e)}else e._isValid=!1}function vi(e,t,n,o,r,s){var l=[ki(e),Yn.indexOf(t),parseInt(n,10),parseInt(o,10),parseInt(r,10)];return s&&l.push(parseInt(s,10)),l}function ki(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function wi(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Si(e,t,n){if(e){var o=Wn.indexOf(e),r=new Date(t[0],t[1],t[2]).getDay();if(o!==r)return y(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Mi(e,t,n){if(e)return _i[e];if(t)return 0;var o=parseInt(n,10),r=o%100,s=(o-r)/100;return s*60+r}function Hn(e){var t=yi.exec(wi(e._i)),n;if(t){if(n=vi(t[4],t[3],t[2],t[5],t[6],t[7]),!Si(t[1],n,e))return;e._a=n,e._tzm=Mi(t[8],t[9],t[10]),e._d=Ae.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function Di(e){var t=gi.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Un(e),e._isValid===!1)delete e._isValid;else return;if(Hn(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:u.createFromInputFallback(e)}u.createFromInputFallback=R("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Me(e,t,n){return e??t??n}function xi(e){var t=new Date(u.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Zt(e){var t,n,o=[],r,s,l;if(!e._d){for(r=xi(e),e._w&&e._a[G]==null&&e._a[Q]==null&&Ti(e),e._dayOfYear!=null&&(l=Me(e._a[I],r[I]),(e._dayOfYear>Ee(l)||e._dayOfYear===0)&&(y(e)._overflowDayOfYear=!0),n=Ae(l,0,e._dayOfYear),e._a[Q]=n.getUTCMonth(),e._a[G]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=o[t]=r[t];for(;t<7;t++)e._a[t]=o[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[C]===24&&e._a[U]===0&&e._a[X]===0&&e._a[pe]===0&&(e._nextDay=!0,e._a[C]=0),e._d=(e._useUTC?Ae:Pr).apply(null,o),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[C]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(y(e).weekdayMismatch=!0)}}function Ti(e){var t,n,o,r,s,l,f,g,v;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,l=4,n=Me(t.GG,e._a[I],Ue(D(),1,4).year),o=Me(t.W,1),r=Me(t.E,1),(r<1||r>7)&&(g=!0)):(s=e._locale._week.dow,l=e._locale._week.doy,v=Ue(D(),s,l),n=Me(t.gg,e._a[I],v.year),o=Me(t.w,v.week),t.d!=null?(r=t.d,(r<0||r>6)&&(g=!0)):t.e!=null?(r=t.e+s,(t.e<0||t.e>6)&&(g=!0)):r=s),o<1||o>K(n,s,l)?y(e)._overflowWeeks=!0:g!=null?y(e)._overflowWeekday=!0:(f=Nn(n,o,r,s,l),e._a[I]=f.year,e._dayOfYear=f.dayOfYear)}u.ISO_8601=function(){},u.RFC_2822=function(){};function Jt(e){if(e._f===u.ISO_8601){Un(e);return}if(e._f===u.RFC_2822){Hn(e);return}e._a=[],y(e).empty=!0;var t=""+e._i,n,o,r,s,l,f=t.length,g=0,v,F;for(r=wn(e._f,e._locale).match(Ft)||[],F=r.length,n=0;n<F;n++)s=r[n],o=(t.match(br(s,e))||[])[0],o&&(l=t.substr(0,t.indexOf(o)),l.length>0&&y(e).unusedInput.push(l),t=t.slice(t.indexOf(o)+o.length),g+=o.length),ve[s]?(o?y(e).empty=!1:y(e).unusedTokens.push(s),mr(s,o,e)):e._strict&&!o&&y(e).unusedTokens.push(s);y(e).charsLeftOver=f-g,t.length>0&&y(e).unusedInput.push(t),e._a[C]<=12&&y(e).bigHour===!0&&e._a[C]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[C]=Oi(e._locale,e._a[C],e._meridiem),v=y(e).era,v!==null&&(e._a[I]=e._locale.erasConvertYear(v,e._a[I])),Zt(e),zt(e)}function Oi(e,t,n){var o;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(o=e.isPM(n),o&&t<12&&(t+=12),!o&&t===12&&(t=0)),t)}function Ci(e){var t,n,o,r,s,l,f=!1,g=e._f.length;if(g===0){y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(r=0;r<g;r++)s=0,l=!1,t=Yt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[r],Jt(t),Ot(t)&&(l=!0),s+=y(t).charsLeftOver,s+=y(t).unusedTokens.length*10,y(t).score=s,f?s<o&&(o=s,n=t):(o==null||s<o||l)&&(o=s,n=t,l&&(f=!0));le(e,n||t)}function Yi(e){if(!e._d){var t=Wt(e._i),n=t.day===void 0?t.date:t.day;e._a=gn([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(o){return o&&parseInt(o,10)}),Zt(e)}}function $i(e){var t=new Ne(zt(Vn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Vn(e){var t=e._i,n=e._f;return e._locale=e._locale||ee(e._l),t===null||n===void 0&&t===""?Qe({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),A(t)?new Ne(zt(t)):(Fe(t)?e._d=t:h(n)?Ci(e):n?Jt(e):Ii(e),Ot(e)||(e._d=null),e))}function Ii(e){var t=e._i;N(t)?e._d=new Date(u.now()):Fe(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Di(e):h(t)?(e._a=gn(t.slice(0),function(n){return parseInt(n,10)}),Zt(e)):d(t)?Yi(e):J(t)?e._d=new Date(t):u.createFromInputFallback(e)}function Bn(e,t,n,o,r){var s={};return(t===!0||t===!1)&&(o=t,t=void 0),(n===!0||n===!1)&&(o=n,n=void 0),(d(e)&&$(e)||h(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=r,s._l=n,s._i=e,s._f=t,s._strict=o,$i(s)}function D(e,t,n,o){return Bn(e,t,n,o,!1)}var Pi=R("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=D.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Qe()}),Fi=R("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=D.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Qe()});function jn(e,t){var n,o;if(t.length===1&&h(t[0])&&(t=t[0]),!t.length)return D();for(n=t[0],o=1;o<t.length;++o)(!t[o].isValid()||t[o][e](n))&&(n=t[o]);return n}function Ni(){var e=[].slice.call(arguments,0);return jn("isBefore",e)}function Wi(){var e=[].slice.call(arguments,0);return jn("isAfter",e)}var Ri=function(){return Date.now?Date.now():+new Date},Be=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ei(e){var t,n=!1,o,r=Be.length;for(t in e)if(m(e,t)&&!(T.call(Be,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(o=0;o<r;++o)if(e[Be[o]]){if(n)return!1;parseFloat(e[Be[o]])!==_(e[Be[o]])&&(n=!0)}return!0}function Li(){return this._isValid}function Ai(){return H(NaN)}function ct(e){var t=Wt(e),n=t.year||0,o=t.quarter||0,r=t.month||0,s=t.week||t.isoWeek||0,l=t.day||0,f=t.hour||0,g=t.minute||0,v=t.second||0,F=t.millisecond||0;this._isValid=Ei(t),this._milliseconds=+F+v*1e3+g*6e4+f*1e3*60*60,this._days=+l+s*7,this._months=+r+o*3+n*12,this._data={},this._locale=ee(),this._bubble()}function dt(e){return e instanceof ct}function qt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ui(e,t,n){var o=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),s=0,l;for(l=0;l<o;l++)(n&&e[l]!==t[l]||!n&&_(e[l])!==_(t[l]))&&s++;return s+r}function zn(e,t){p(e,0,0,function(){var n=this.utcOffset(),o="+";return n<0&&(n=-n,o="-"),o+z(~~(n/60),2)+t+z(~~n%60,2)})}zn("Z",":"),zn("ZZ",""),b("Z",rt),b("ZZ",rt),S(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Qt(rt,e)});var Hi=/([\+\-]|\d\d)/gi;function Qt(e,t){var n=(t||"").match(e),o,r,s;return n===null?null:(o=n[n.length-1]||[],r=(o+"").match(Hi)||["-",0,0],s=+(r[1]*60)+_(r[2]),s===0?0:r[0]==="+"?s:-s)}function Xt(e,t){var n,o;return t._isUTC?(n=t.clone(),o=(A(e)||Fe(e)?e.valueOf():D(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+o),u.updateOffset(n,!1),n):D(e).local()}function Kt(e){return-Math.round(e._d.getTimezoneOffset())}u.updateOffset=function(){};function Vi(e,t,n){var o=this._offset||0,r;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Qt(rt,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(r=Kt(this)),this._offset=e,this._isUTC=!0,r!=null&&this.add(r,"m"),o!==e&&(!t||this._changeInProgress?qn(this,H(e-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,u.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?o:Kt(this)}function Bi(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function ji(e){return this.utcOffset(0,e)}function zi(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Kt(this),"m")),this}function Gi(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Qt(hr,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Zi(e){return this.isValid()?(e=e?D(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Ji(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function qi(){if(!N(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Yt(e,this),e=Vn(e),e._a?(t=e._isUTC?B(e._a):D(e._a),this._isDSTShifted=this.isValid()&&Ui(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Qi(){return this.isValid()?!this._isUTC:!1}function Xi(){return this.isValid()?this._isUTC:!1}function Gn(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Ki=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,es=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function H(e,t){var n=e,o=null,r,s,l;return dt(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:J(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(o=Ki.exec(e))?(r=o[1]==="-"?-1:1,n={y:0,d:_(o[G])*r,h:_(o[C])*r,m:_(o[U])*r,s:_(o[X])*r,ms:_(qt(o[pe]*1e3))*r}):(o=es.exec(e))?(r=o[1]==="-"?-1:1,n={y:me(o[2],r),M:me(o[3],r),w:me(o[4],r),d:me(o[5],r),h:me(o[6],r),m:me(o[7],r),s:me(o[8],r)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(l=ts(D(n.from),D(n.to)),n={},n.ms=l.milliseconds,n.M=l.months),s=new ct(n),dt(e)&&m(e,"_locale")&&(s._locale=e._locale),dt(e)&&m(e,"_isValid")&&(s._isValid=e._isValid),s}H.fn=ct.prototype,H.invalid=Ai;function me(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zn(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function ts(e,t){var n;return e.isValid()&&t.isValid()?(t=Xt(t,e),e.isBefore(t)?n=Zn(e,t):(n=Zn(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Jn(e,t){return function(n,o){var r,s;return o!==null&&!isNaN(+o)&&(kn(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=o,o=s),r=H(n,o),qn(this,r,e),this}}function qn(e,t,n,o){var r=t._milliseconds,s=qt(t._days),l=qt(t._months);e.isValid()&&(o=o??!0,l&&In(e,Le(e,"Month")+l*n),s&&Cn(e,"Date",Le(e,"Date")+s*n),r&&e._d.setTime(e._d.valueOf()+r*n),o&&u.updateOffset(e,s||l))}var ns=Jn(1,"add"),os=Jn(-1,"subtract");function Qn(e){return typeof e=="string"||e instanceof String}function rs(e){return A(e)||Fe(e)||Qn(e)||J(e)||ss(e)||is(e)||e===null||e===void 0}function is(e){var t=d(e)&&!$(e),n=!1,o=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,s,l=o.length;for(r=0;r<l;r+=1)s=o[r],n=n||m(e,s);return t&&n}function ss(e){var t=h(e),n=!1;return t&&(n=e.filter(function(o){return!J(o)&&Qn(e)}).length===0),t&&n}function as(e){var t=d(e)&&!$(e),n=!1,o=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,s;for(r=0;r<o.length;r+=1)s=o[r],n=n||m(e,s);return t&&n}function ls(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function us(e,t){arguments.length===1&&(arguments[0]?rs(arguments[0])?(e=arguments[0],t=void 0):as(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||D(),o=Xt(n,this).startOf("day"),r=u.calendarFormat(this,o)||"sameElse",s=t&&(j(t[r])?t[r].call(this,n):t[r]);return this.format(s||this.localeData().calendar(r,this,D(n)))}function cs(){return new Ne(this)}function ds(e,t){var n=A(e)?e:D(e);return this.isValid()&&n.isValid()?(t=E(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function hs(e,t){var n=A(e)?e:D(e);return this.isValid()&&n.isValid()?(t=E(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function fs(e,t,n,o){var r=A(e)?e:D(e),s=A(t)?t:D(t);return this.isValid()&&r.isValid()&&s.isValid()?(o=o||"()",(o[0]==="("?this.isAfter(r,n):!this.isBefore(r,n))&&(o[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function bs(e,t){var n=A(e)?e:D(e),o;return this.isValid()&&n.isValid()?(t=E(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(o=n.valueOf(),this.clone().startOf(t).valueOf()<=o&&o<=this.clone().endOf(t).valueOf())):!1}function ps(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ms(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function gs(e,t,n){var o,r,s;if(!this.isValid())return NaN;if(o=Xt(e,this),!o.isValid())return NaN;switch(r=(o.utcOffset()-this.utcOffset())*6e4,t=E(t),t){case"year":s=ht(this,o)/12;break;case"month":s=ht(this,o);break;case"quarter":s=ht(this,o)/3;break;case"second":s=(this-o)/1e3;break;case"minute":s=(this-o)/6e4;break;case"hour":s=(this-o)/36e5;break;case"day":s=(this-o-r)/864e5;break;case"week":s=(this-o-r)/6048e5;break;default:s=this-o}return n?s:L(s)}function ht(e,t){if(e.date()<t.date())return-ht(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),o=e.clone().add(n,"months"),r,s;return t-o<0?(r=e.clone().add(n-1,"months"),s=(t-o)/(o-r)):(r=e.clone().add(n+1,"months"),s=(t-o)/(r-o)),-(n+s)||0}u.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",u.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function ys(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function _s(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Ke(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):j(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ke(n,"Z")):Ke(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function vs(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,o,r,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',o=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+o+r+s)}function ks(e){e||(e=this.isUtc()?u.defaultFormatUtc:u.defaultFormat);var t=Ke(this,e);return this.localeData().postformat(t)}function ws(e,t){return this.isValid()&&(A(e)&&e.isValid()||D(e).isValid())?H({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ss(e){return this.from(D(),e)}function Ms(e,t){return this.isValid()&&(A(e)&&e.isValid()||D(e).isValid())?H({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ds(e){return this.to(D(),e)}function Xn(e){var t;return e===void 0?this._locale._abbr:(t=ee(e),t!=null&&(this._locale=t),this)}var Kn=R("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function eo(){return this._locale}var ft=1e3,De=60*ft,bt=60*De,to=(365*400+97)*24*bt;function xe(e,t){return(e%t+t)%t}function no(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-to:new Date(e,t,n).valueOf()}function oo(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-to:Date.UTC(e,t,n)}function xs(e){var t,n;if(e=E(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?oo:no,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=xe(t+(this._isUTC?0:this.utcOffset()*De),bt);break;case"minute":t=this._d.valueOf(),t-=xe(t,De);break;case"second":t=this._d.valueOf(),t-=xe(t,ft);break}return this._d.setTime(t),u.updateOffset(this,!0),this}function Ts(e){var t,n;if(e=E(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?oo:no,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=bt-xe(t+(this._isUTC?0:this.utcOffset()*De),bt)-1;break;case"minute":t=this._d.valueOf(),t+=De-xe(t,De)-1;break;case"second":t=this._d.valueOf(),t+=ft-xe(t,ft)-1;break}return this._d.setTime(t),u.updateOffset(this,!0),this}function Os(){return this._d.valueOf()-(this._offset||0)*6e4}function Cs(){return Math.floor(this.valueOf()/1e3)}function Ys(){return new Date(this.valueOf())}function $s(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Is(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ps(){return this.isValid()?this.toISOString():null}function Fs(){return Ot(this)}function Ns(){return le({},y(this))}function Ws(){return y(this).overflow}function Rs(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}p("N",0,0,"eraAbbr"),p("NN",0,0,"eraAbbr"),p("NNN",0,0,"eraAbbr"),p("NNNN",0,0,"eraName"),p("NNNNN",0,0,"eraNarrow"),p("y",["y",1],"yo","eraYear"),p("y",["yy",2],0,"eraYear"),p("y",["yyy",3],0,"eraYear"),p("y",["yyyy",4],0,"eraYear"),b("N",en),b("NN",en),b("NNN",en),b("NNNN",Zs),b("NNNNN",Js),S(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,o){var r=n._locale.erasParse(e,o,n._strict);r?y(n).era=r:y(n).invalidEra=e}),b("y",ke),b("yy",ke),b("yyy",ke),b("yyyy",ke),b("yo",qs),S(["y","yy","yyy","yyyy"],I),S(["yo"],function(e,t,n,o){var r;n._locale._eraYearOrdinalRegex&&(r=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[I]=n._locale.eraYearOrdinalParse(e,r):t[I]=parseInt(e,10)});function Es(e,t){var n,o,r,s=this._eras||ee("en")._eras;for(n=0,o=s.length;n<o;++n){switch(typeof s[n].since){case"string":r=u(s[n].since).startOf("day"),s[n].since=r.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":r=u(s[n].until).startOf("day").valueOf(),s[n].until=r.valueOf();break}}return s}function Ls(e,t,n){var o,r,s=this.eras(),l,f,g;for(e=e.toUpperCase(),o=0,r=s.length;o<r;++o)if(l=s[o].name.toUpperCase(),f=s[o].abbr.toUpperCase(),g=s[o].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(f===e)return s[o];break;case"NNNN":if(l===e)return s[o];break;case"NNNNN":if(g===e)return s[o];break}else if([l,f,g].indexOf(e)>=0)return s[o]}function As(e,t){var n=e.since<=e.until?1:-1;return t===void 0?u(e.since).year():u(e.since).year()+(t-e.offset)*n}function Us(){var e,t,n,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),o[e].since<=n&&n<=o[e].until||o[e].until<=n&&n<=o[e].since)return o[e].name;return""}function Hs(){var e,t,n,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),o[e].since<=n&&n<=o[e].until||o[e].until<=n&&n<=o[e].since)return o[e].narrow;return""}function Vs(){var e,t,n,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),o[e].since<=n&&n<=o[e].until||o[e].until<=n&&n<=o[e].since)return o[e].abbr;return""}function Bs(){var e,t,n,o,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=r[e].since<=r[e].until?1:-1,o=this.clone().startOf("day").valueOf(),r[e].since<=o&&o<=r[e].until||r[e].until<=o&&o<=r[e].since)return(this.year()-u(r[e].since).year())*n+r[e].offset;return this.year()}function js(e){return m(this,"_erasNameRegex")||tn.call(this),e?this._erasNameRegex:this._erasRegex}function zs(e){return m(this,"_erasAbbrRegex")||tn.call(this),e?this._erasAbbrRegex:this._erasRegex}function Gs(e){return m(this,"_erasNarrowRegex")||tn.call(this),e?this._erasNarrowRegex:this._erasRegex}function en(e,t){return t.erasAbbrRegex(e)}function Zs(e,t){return t.erasNameRegex(e)}function Js(e,t){return t.erasNarrowRegex(e)}function qs(e,t){return t._eraYearOrdinalRegex||ke}function tn(){var e=[],t=[],n=[],o=[],r,s,l,f,g,v=this.eras();for(r=0,s=v.length;r<s;++r)l=q(v[r].name),f=q(v[r].abbr),g=q(v[r].narrow),t.push(l),e.push(f),n.push(g),o.push(l),o.push(f),o.push(g);this._erasRegex=new RegExp("^("+o.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}p(0,["gg",2],0,function(){return this.weekYear()%100}),p(0,["GG",2],0,function(){return this.isoWeekYear()%100});function pt(e,t){p(0,[e,e.length],0,t)}pt("gggg","weekYear"),pt("ggggg","weekYear"),pt("GGGG","isoWeekYear"),pt("GGGGG","isoWeekYear"),b("G",ot),b("g",ot),b("GG",M,W),b("gg",M,W),b("GGGG",Et,Rt),b("gggg",Et,Rt),b("GGGGG",nt,et),b("ggggg",nt,et),Re(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,o){t[o.substr(0,2)]=_(e)}),Re(["gg","GG"],function(e,t,n,o){t[o]=u.parseTwoDigitYear(e)});function Qs(e){return ro.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Xs(e){return ro.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ks(){return K(this.year(),1,4)}function ea(){return K(this.isoWeekYear(),1,4)}function ta(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function na(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function ro(e,t,n,o,r){var s;return e==null?Ue(this,o,r).year:(s=K(e,o,r),t>s&&(t=s),oa.call(this,e,t,n,o,r))}function oa(e,t,n,o,r){var s=Nn(e,t,n,o,r),l=Ae(s.year,0,s.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}p("Q",0,"Qo","quarter"),b("Q",Mn),S("Q",function(e,t){t[Q]=(_(e)-1)*3});function ra(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}p("D",["DD",2],"Do","date"),b("D",M,we),b("DD",M,W),b("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),S(["D","DD"],G),S("Do",function(e,t){t[G]=_(e.match(M)[0])});var io=Se("Date",!0);p("DDD",["DDDD",3],"DDDo","dayOfYear"),b("DDD",tt),b("DDDD",Dn),S(["DDD","DDDD"],function(e,t,n){n._dayOfYear=_(e)});function ia(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}p("m",["mm",2],0,"minute"),b("m",M,Lt),b("mm",M,W),S(["m","mm"],U);var sa=Se("Minutes",!1);p("s",["ss",2],0,"second"),b("s",M,Lt),b("ss",M,W),S(["s","ss"],X);var aa=Se("Seconds",!1);p("S",0,0,function(){return~~(this.millisecond()/100)}),p(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),p(0,["SSS",3],0,"millisecond"),p(0,["SSSS",4],0,function(){return this.millisecond()*10}),p(0,["SSSSS",5],0,function(){return this.millisecond()*100}),p(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),p(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),p(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),p(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),b("S",tt,Mn),b("SS",tt,W),b("SSS",tt,Dn);var ce,so;for(ce="SSSS";ce.length<=9;ce+="S")b(ce,ke);function la(e,t){t[pe]=_(("0."+e)*1e3)}for(ce="S";ce.length<=9;ce+="S")S(ce,la);so=Se("Milliseconds",!1),p("z",0,0,"zoneAbbr"),p("zz",0,0,"zoneName");function ua(){return this._isUTC?"UTC":""}function ca(){return this._isUTC?"Coordinated Universal Time":""}var c=Ne.prototype;c.add=ns,c.calendar=us,c.clone=cs,c.diff=gs,c.endOf=Ts,c.format=ks,c.from=ws,c.fromNow=Ss,c.to=Ms,c.toNow=Ds,c.get=vr,c.invalidAt=Ws,c.isAfter=ds,c.isBefore=hs,c.isBetween=fs,c.isSame=bs,c.isSameOrAfter=ps,c.isSameOrBefore=ms,c.isValid=Fs,c.lang=Kn,c.locale=Xn,c.localeData=eo,c.max=Fi,c.min=Pi,c.parsingFlags=Ns,c.set=kr,c.startOf=xs,c.subtract=os,c.toArray=$s,c.toObject=Is,c.toDate=Ys,c.toISOString=_s,c.inspect=vs,typeof Symbol<"u"&&Symbol.for!=null&&(c[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),c.toJSON=Ps,c.toString=ys,c.unix=Cs,c.valueOf=Os,c.creationData=Rs,c.eraName=Us,c.eraNarrow=Hs,c.eraAbbr=Vs,c.eraYear=Bs,c.year=On,c.isLeapYear=_r,c.weekYear=Qs,c.isoWeekYear=Xs,c.quarter=c.quarters=ra,c.month=Pn,c.daysInMonth=Yr,c.week=c.weeks=Er,c.isoWeek=c.isoWeeks=Lr,c.weeksInYear=ta,c.weeksInWeekYear=na,c.isoWeeksInYear=Ks,c.isoWeeksInISOWeekYear=ea,c.date=io,c.day=c.days=Xr,c.weekday=Kr,c.isoWeekday=ei,c.dayOfYear=ia,c.hour=c.hours=ai,c.minute=c.minutes=sa,c.second=c.seconds=aa,c.millisecond=c.milliseconds=so,c.utcOffset=Vi,c.utc=ji,c.local=zi,c.parseZone=Gi,c.hasAlignedHourOffset=Zi,c.isDST=Ji,c.isLocal=Qi,c.isUtcOffset=Xi,c.isUtc=Gn,c.isUTC=Gn,c.zoneAbbr=ua,c.zoneName=ca,c.dates=R("dates accessor is deprecated. Use date instead.",io),c.months=R("months accessor is deprecated. Use month instead",Pn),c.years=R("years accessor is deprecated. Use year instead",On),c.zone=R("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Bi),c.isDSTShifted=R("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",qi);function da(e){return D(e*1e3)}function ha(){return D.apply(null,arguments).parseZone()}function ao(e){return e}var w=It.prototype;w.calendar=Qo,w.longDateFormat=tr,w.invalidDate=or,w.ordinal=sr,w.preparse=ao,w.postformat=ao,w.relativeTime=lr,w.pastFuture=ur,w.set=Jo,w.eras=Es,w.erasParse=Ls,w.erasConvertYear=As,w.erasAbbrRegex=zs,w.erasNameRegex=js,w.erasNarrowRegex=Gs,w.months=xr,w.monthsShort=Tr,w.monthsParse=Cr,w.monthsRegex=Ir,w.monthsShortRegex=$r,w.week=Fr,w.firstDayOfYear=Rr,w.firstDayOfWeek=Wr,w.weekdays=Gr,w.weekdaysMin=Jr,w.weekdaysShort=Zr,w.weekdaysParse=Qr,w.weekdaysRegex=ti,w.weekdaysShortRegex=ni,w.weekdaysMinRegex=oi,w.isPM=ii,w.meridiem=li;function mt(e,t,n,o){var r=ee(),s=B().set(o,t);return r[n](s,e)}function lo(e,t,n){if(J(e)&&(t=e,e=void 0),e=e||"",t!=null)return mt(e,t,n,"month");var o,r=[];for(o=0;o<12;o++)r[o]=mt(e,o,n,"month");return r}function nn(e,t,n,o){typeof e=="boolean"?(J(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,J(t)&&(n=t,t=void 0),t=t||"");var r=ee(),s=e?r._week.dow:0,l,f=[];if(n!=null)return mt(t,(n+s)%7,o,"day");for(l=0;l<7;l++)f[l]=mt(t,(l+s)%7,o,"day");return f}function fa(e,t){return lo(e,t,"months")}function ba(e,t){return lo(e,t,"monthsShort")}function pa(e,t,n){return nn(e,t,n,"weekdays")}function ma(e,t,n){return nn(e,t,n,"weekdaysShort")}function ga(e,t,n){return nn(e,t,n,"weekdaysMin")}ue("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=_(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),u.lang=R("moment.lang is deprecated. Use moment.locale instead.",ue),u.langData=R("moment.langData is deprecated. Use moment.localeData instead.",ee);var te=Math.abs;function ya(){var e=this._data;return this._milliseconds=te(this._milliseconds),this._days=te(this._days),this._months=te(this._months),e.milliseconds=te(e.milliseconds),e.seconds=te(e.seconds),e.minutes=te(e.minutes),e.hours=te(e.hours),e.months=te(e.months),e.years=te(e.years),this}function uo(e,t,n,o){var r=H(t,n);return e._milliseconds+=o*r._milliseconds,e._days+=o*r._days,e._months+=o*r._months,e._bubble()}function _a(e,t){return uo(this,e,t,1)}function va(e,t){return uo(this,e,t,-1)}function co(e){return e<0?Math.floor(e):Math.ceil(e)}function ka(){var e=this._milliseconds,t=this._days,n=this._months,o=this._data,r,s,l,f,g;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=co(on(n)+t)*864e5,t=0,n=0),o.milliseconds=e%1e3,r=L(e/1e3),o.seconds=r%60,s=L(r/60),o.minutes=s%60,l=L(s/60),o.hours=l%24,t+=L(l/24),g=L(ho(t)),n+=g,t-=co(on(g)),f=L(n/12),n%=12,o.days=t,o.months=n,o.years=f,this}function ho(e){return e*4800/146097}function on(e){return e*146097/4800}function wa(e){if(!this.isValid())return NaN;var t,n,o=this._milliseconds;if(e=E(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+o/864e5,n=this._months+ho(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(on(this._months)),e){case"week":return t/7+o/6048e5;case"day":return t+o/864e5;case"hour":return t*24+o/36e5;case"minute":return t*1440+o/6e4;case"second":return t*86400+o/1e3;case"millisecond":return Math.floor(t*864e5)+o;default:throw new Error("Unknown unit "+e)}}function ne(e){return function(){return this.as(e)}}var fo=ne("ms"),Sa=ne("s"),Ma=ne("m"),Da=ne("h"),xa=ne("d"),Ta=ne("w"),Oa=ne("M"),Ca=ne("Q"),Ya=ne("y"),$a=fo;function Ia(){return H(this)}function Pa(e){return e=E(e),this.isValid()?this[e+"s"]():NaN}function ge(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fa=ge("milliseconds"),Na=ge("seconds"),Wa=ge("minutes"),Ra=ge("hours"),Ea=ge("days"),La=ge("months"),Aa=ge("years");function Ua(){return L(this.days()/7)}var oe=Math.round,Te={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Ha(e,t,n,o,r){return r.relativeTime(t||1,!!n,e,o)}function Va(e,t,n,o){var r=H(e).abs(),s=oe(r.as("s")),l=oe(r.as("m")),f=oe(r.as("h")),g=oe(r.as("d")),v=oe(r.as("M")),F=oe(r.as("w")),re=oe(r.as("y")),de=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||l<=1&&["m"]||l<n.m&&["mm",l]||f<=1&&["h"]||f<n.h&&["hh",f]||g<=1&&["d"]||g<n.d&&["dd",g];return n.w!=null&&(de=de||F<=1&&["w"]||F<n.w&&["ww",F]),de=de||v<=1&&["M"]||v<n.M&&["MM",v]||re<=1&&["y"]||["yy",re],de[2]=t,de[3]=+e>0,de[4]=o,Ha.apply(null,de)}function Ba(e){return e===void 0?oe:typeof e=="function"?(oe=e,!0):!1}function ja(e,t){return Te[e]===void 0?!1:t===void 0?Te[e]:(Te[e]=t,e==="s"&&(Te.ss=t-1),!0)}function za(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,o=Te,r,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(o=Object.assign({},Te,t),t.s!=null&&t.ss==null&&(o.ss=t.s-1)),r=this.localeData(),s=Va(this,!n,o,r),n&&(s=r.pastFuture(+this,s)),r.postformat(s)}var rn=Math.abs;function Oe(e){return(e>0)-(e<0)||+e}function gt(){if(!this.isValid())return this.localeData().invalidDate();var e=rn(this._milliseconds)/1e3,t=rn(this._days),n=rn(this._months),o,r,s,l,f=this.asSeconds(),g,v,F,re;return f?(o=L(e/60),r=L(o/60),e%=60,o%=60,s=L(n/12),n%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",g=f<0?"-":"",v=Oe(this._months)!==Oe(f)?"-":"",F=Oe(this._days)!==Oe(f)?"-":"",re=Oe(this._milliseconds)!==Oe(f)?"-":"",g+"P"+(s?v+s+"Y":"")+(n?v+n+"M":"")+(t?F+t+"D":"")+(r||o||e?"T":"")+(r?re+r+"H":"")+(o?re+o+"M":"")+(e?re+l+"S":"")):"P0D"}var k=ct.prototype;k.isValid=Li,k.abs=ya,k.add=_a,k.subtract=va,k.as=wa,k.asMilliseconds=fo,k.asSeconds=Sa,k.asMinutes=Ma,k.asHours=Da,k.asDays=xa,k.asWeeks=Ta,k.asMonths=Oa,k.asQuarters=Ca,k.asYears=Ya,k.valueOf=$a,k._bubble=ka,k.clone=Ia,k.get=Pa,k.milliseconds=Fa,k.seconds=Na,k.minutes=Wa,k.hours=Ra,k.days=Ea,k.weeks=Ua,k.months=La,k.years=Aa,k.humanize=za,k.toISOString=gt,k.toString=gt,k.toJSON=gt,k.locale=Xn,k.localeData=eo,k.toIsoString=R("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",gt),k.lang=Kn,p("X",0,0,"unix"),p("x",0,0,"valueOf"),b("x",ot),b("X",fr),S("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)}),S("x",function(e,t,n){n._d=new Date(_(e))});return u.version="2.30.1",a(D),u.fn=c,u.min=Ni,u.max=Wi,u.now=Ri,u.utc=B,u.unix=da,u.months=fa,u.isDate=Fe,u.locale=ue,u.invalid=Qe,u.duration=H,u.isMoment=A,u.weekdays=pa,u.parseZone=ha,u.localeData=ee,u.isDuration=dt,u.monthsShort=ba,u.weekdaysMin=ga,u.defineLocale=jt,u.updateLocale=hi,u.locales=fi,u.weekdaysShort=ma,u.normalizeUnits=E,u.relativeTimeRounding=Ba,u.relativeTimeThreshold=ja,u.calendarFormat=ls,u.prototype=c,u.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},u})});var Ao=(()=>{class i extends _e{autofocus=!1;_autofocus=!1;focused=!1;platformId=ie(go);document=ie(xo);host=ie(mo);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){$o(this.platformId)&&this._autofocus&&setTimeout(()=>{let a=No.getFocusableElements(this.host?.nativeElement);a.length===0&&this.host.nativeElement.focus(),a.length>0&&a[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275dir=Ce({type:i,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",Y],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[je,se]})}return i})();var Uo=(()=>{class i extends Eo{pathId;ngOnInit(){this.pathId="url(#"+Io()+")"}static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275cmp=vt({type:i,selectors:[["SpinnerIcon"]],features:[se],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(h,d){h&1&&(po(),Ye(0,"svg",0)(1,"g"),he(2,"path",1),$e(),Ye(3,"defs")(4,"clipPath",2),he(5,"rect",3),$e()()()),h&2&&(wt(d.getClassNames()),ae("aria-label",d.ariaLabel)("aria-hidden",d.ariaHidden)("role",d.role),P(),ae("clip-path",d.pathId),P(3),O("id",d.pathId))},encapsulation:2})}return i})();var qa=({dt:i})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${i("button.primary.color")};
    background: ${i("button.primary.background")};
    border: 1px solid ${i("button.primary.border.color")};
    padding-block: ${i("button.padding.y")};
    padding-inline: ${i("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${i("button.transition.duration")}, color ${i("button.transition.duration")}, border-color ${i("button.transition.duration")},
            outline-color ${i("button.transition.duration")}, box-shadow ${i("button.transition.duration")};
    border-radius: ${i("button.border.radius")};
    outline-color: transparent;
    gap: ${i("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${i("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${i("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${i("button.sm.font.size")};
    padding-block: ${i("button.sm.padding.y")};
    padding-inline: ${i("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${i("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${i("button.lg.font.size")};
    padding-block: ${i("button.lg.padding.y")};
    padding-inline: ${i("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${i("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${i("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${i("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${i("button.primary.hover.background")};
    border: 1px solid ${i("button.primary.hover.border.color")};
    color: ${i("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${i("button.primary.active.background")};
    border: 1px solid ${i("button.primary.active.border.color")};
    color: ${i("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${i("button.primary.focus.ring.shadow")};
    outline: ${i("button.focus.ring.width")} ${i("button.focus.ring.style")} ${i("button.primary.focus.ring.color")};
    outline-offset: ${i("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${i("button.badge.size")};
    height: ${i("button.badge.size")};
    line-height: ${i("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${i("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${i("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${i("button.secondary.background")};
    border: 1px solid ${i("button.secondary.border.color")};
    color: ${i("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${i("button.secondary.hover.background")};
    border: 1px solid ${i("button.secondary.hover.border.color")};
    color: ${i("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${i("button.secondary.active.background")};
    border: 1px solid ${i("button.secondary.active.border.color")};
    color: ${i("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${i("button.secondary.focus.ring.color")};
    box-shadow: ${i("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${i("button.success.background")};
    border: 1px solid ${i("button.success.border.color")};
    color: ${i("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${i("button.success.hover.background")};
    border: 1px solid ${i("button.success.hover.border.color")};
    color: ${i("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${i("button.success.active.background")};
    border: 1px solid ${i("button.success.active.border.color")};
    color: ${i("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${i("button.success.focus.ring.color")};
    box-shadow: ${i("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${i("button.info.background")};
    border: 1px solid ${i("button.info.border.color")};
    color: ${i("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${i("button.info.hover.background")};
    border: 1px solid ${i("button.info.hover.border.color")};
    color: ${i("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${i("button.info.active.background")};
    border: 1px solid ${i("button.info.active.border.color")};
    color: ${i("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${i("button.info.focus.ring.color")};
    box-shadow: ${i("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${i("button.warn.background")};
    border: 1px solid ${i("button.warn.border.color")};
    color: ${i("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${i("button.warn.hover.background")};
    border: 1px solid ${i("button.warn.hover.border.color")};
    color: ${i("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${i("button.warn.active.background")};
    border: 1px solid ${i("button.warn.active.border.color")};
    color: ${i("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${i("button.warn.focus.ring.color")};
    box-shadow: ${i("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${i("button.help.background")};
    border: 1px solid ${i("button.help.border.color")};
    color: ${i("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${i("button.help.hover.background")};
    border: 1px solid ${i("button.help.hover.border.color")};
    color: ${i("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${i("button.help.active.background")};
    border: 1px solid ${i("button.help.active.border.color")};
    color: ${i("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${i("button.help.focus.ring.color")};
    box-shadow: ${i("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${i("button.danger.background")};
    border: 1px solid ${i("button.danger.border.color")};
    color: ${i("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${i("button.danger.hover.background")};
    border: 1px solid ${i("button.danger.hover.border.color")};
    color: ${i("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${i("button.danger.active.background")};
    border: 1px solid ${i("button.danger.active.border.color")};
    color: ${i("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${i("button.danger.focus.ring.color")};
    box-shadow: ${i("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${i("button.contrast.background")};
    border: 1px solid ${i("button.contrast.border.color")};
    color: ${i("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${i("button.contrast.hover.background")};
    border: 1px solid ${i("button.contrast.hover.border.color")};
    color: ${i("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${i("button.contrast.active.background")};
    border: 1px solid ${i("button.contrast.active.border.color")};
    color: ${i("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${i("button.contrast.focus.ring.color")};
    box-shadow: ${i("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${i("button.outlined.primary.border.color")};
    color: ${i("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${i("button.outlined.primary.hover.background")};
    border-color: ${i("button.outlined.primary.border.color")};
    color: ${i("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${i("button.outlined.primary.active.background")};
    border-color: ${i("button.outlined.primary.border.color")};
    color: ${i("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${i("button.outlined.secondary.border.color")};
    color: ${i("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${i("button.outlined.secondary.hover.background")};
    border-color: ${i("button.outlined.secondary.border.color")};
    color: ${i("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${i("button.outlined.secondary.active.background")};
    border-color: ${i("button.outlined.secondary.border.color")};
    color: ${i("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${i("button.outlined.success.border.color")};
    color: ${i("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${i("button.outlined.success.hover.background")};
    border-color: ${i("button.outlined.success.border.color")};
    color: ${i("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${i("button.outlined.success.active.background")};
    border-color: ${i("button.outlined.success.border.color")};
    color: ${i("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${i("button.outlined.info.border.color")};
    color: ${i("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${i("button.outlined.info.hover.background")};
    border-color: ${i("button.outlined.info.border.color")};
    color: ${i("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${i("button.outlined.info.active.background")};
    border-color: ${i("button.outlined.info.border.color")};
    color: ${i("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${i("button.outlined.warn.border.color")};
    color: ${i("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${i("button.outlined.warn.hover.background")};
    border-color: ${i("button.outlined.warn.border.color")};
    color: ${i("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${i("button.outlined.warn.active.background")};
    border-color: ${i("button.outlined.warn.border.color")};
    color: ${i("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${i("button.outlined.help.border.color")};
    color: ${i("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${i("button.outlined.help.hover.background")};
    border-color: ${i("button.outlined.help.border.color")};
    color: ${i("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${i("button.outlined.help.active.background")};
    border-color: ${i("button.outlined.help.border.color")};
    color: ${i("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${i("button.outlined.danger.border.color")};
    color: ${i("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${i("button.outlined.danger.hover.background")};
    border-color: ${i("button.outlined.danger.border.color")};
    color: ${i("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${i("button.outlined.danger.active.background")};
    border-color: ${i("button.outlined.danger.border.color")};
    color: ${i("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${i("button.outlined.contrast.border.color")};
    color: ${i("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${i("button.outlined.contrast.hover.background")};
    border-color: ${i("button.outlined.contrast.border.color")};
    color: ${i("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${i("button.outlined.contrast.active.background")};
    border-color: ${i("button.outlined.contrast.border.color")};
    color: ${i("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${i("button.outlined.plain.border.color")};
    color: ${i("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${i("button.outlined.plain.hover.background")};
    border-color: ${i("button.outlined.plain.border.color")};
    color: ${i("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${i("button.outlined.plain.active.background")};
    border-color: ${i("button.outlined.plain.border.color")};
    color: ${i("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${i("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${i("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${i("button.text.primary.active.background")};
    border-color: transparent;
    color: ${i("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${i("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${i("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${i("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${i("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${i("button.text.success.hover.background")};
    border-color: transparent;
    color: ${i("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${i("button.text.success.active.background")};
    border-color: transparent;
    color: ${i("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${i("button.text.info.hover.background")};
    border-color: transparent;
    color: ${i("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${i("button.text.info.active.background")};
    border-color: transparent;
    color: ${i("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${i("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${i("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${i("button.text.warn.active.background")};
    border-color: transparent;
    color: ${i("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${i("button.text.help.hover.background")};
    border-color: transparent;
    color: ${i("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${i("button.text.help.active.background")};
    border-color: transparent;
    color: ${i("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${i("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${i("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${i("button.text.danger.active.background")};
    border-color: transparent;
    color: ${i("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${i("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${i("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${i("button.text.plain.active.background")};
    border-color: transparent;
    color: ${i("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${i("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${i("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${i("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${i("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${i("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${i("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${i("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${i("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Qa={root:({instance:i,props:u})=>["p-button p-component",{"p-button-icon-only":i.hasIcon&&!u.label&&!u.badge,"p-button-vertical":(u.iconPos==="top"||u.iconPos==="bottom")&&u.label,"p-button-loading":u.loading,"p-button-link":u.link,[`p-button-${u.severity}`]:u.severity,"p-button-raised":u.raised,"p-button-rounded":u.rounded,"p-button-text":u.text,"p-button-outlined":u.outlined,"p-button-sm":u.size==="small","p-button-lg":u.size==="large","p-button-plain":u.plain,"p-button-fluid":u.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:i})=>["p-button-icon",{[`p-button-icon-${i.iconPos}`]:i.label}],label:"p-button-label"},be=(()=>{class i extends Fo{name="button";theme=qa;classes=Qa;static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275prov=yt({token:i,factory:i.\u0275fac})}return i})();var Xa=["content"],Ka=["loading"],el=["icon"],tl=["*"],Bo=i=>({class:i});function nl(i,u){i&1&&yo(0)}function ol(i,u){if(i&1&&he(0,"span",8),i&2){let a=V(3);O("ngClass",a.iconClass()),ae("aria-hidden",!0)("data-pc-section","loadingicon")}}function rl(i,u){if(i&1&&he(0,"SpinnerIcon",9),i&2){let a=V(3);O("styleClass",a.spinnerIconClass())("spin",!0),ae("aria-hidden",!0)("data-pc-section","loadingicon")}}function il(i,u){if(i&1&&(St(0),ye(1,ol,1,3,"span",6)(2,rl,1,4,"SpinnerIcon",7),Mt()),i&2){let a=V(2);P(),O("ngIf",a.loadingIcon),P(),O("ngIf",!a.loadingIcon)}}function sl(i,u){}function al(i,u){if(i&1&&ye(0,sl,0,0,"ng-template",10),i&2){let a=V(2);O("ngIf",a.loadingIconTemplate||a._loadingIconTemplate)}}function ll(i,u){if(i&1&&(St(0),ye(1,il,3,2,"ng-container",2)(2,al,1,1,null,5),Mt()),i&2){let a=V();P(),O("ngIf",!a.loadingIconTemplate&&!a._loadingIconTemplate),P(),O("ngTemplateOutlet",a.loadingIconTemplate||a._loadingIconTemplate)("ngTemplateOutletContext",dn(3,Bo,a.iconClass()))}}function ul(i,u){if(i&1&&he(0,"span",8),i&2){let a=V(2);wt(a.icon),O("ngClass",a.iconClass()),ae("data-pc-section","icon")}}function cl(i,u){}function dl(i,u){if(i&1&&ye(0,cl,0,0,"ng-template",10),i&2){let a=V(2);O("ngIf",!a.icon&&(a.iconTemplate||a._iconTemplate))}}function hl(i,u){if(i&1&&(St(0),ye(1,ul,1,4,"span",11)(2,dl,1,1,null,5),Mt()),i&2){let a=V();P(),O("ngIf",a.icon&&!a.iconTemplate&&!a._iconTemplate),P(),O("ngTemplateOutlet",a.iconTemplate||a._iconTemplate)("ngTemplateOutletContext",dn(3,Bo,a.iconClass()))}}function fl(i,u){if(i&1&&(Ye(0,"span",12),So(1),$e()),i&2){let a=V();ae("aria-hidden",a.icon&&!a.label)("data-pc-section","label"),P(),Mo(a.label)}}function bl(i,u){if(i&1&&he(0,"p-badge",13),i&2){let a=V();O("value",a.badge)("severity",a.badgeSeverity)}}var fe={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Ho=(()=>{class i extends _e{_componentStyle=ie(be);static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275dir=Ce({type:i,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(h,d){h&2&&kt("p-button-label",!0)},features:[Je([be]),se]})}return i})(),Vo=(()=>{class i extends _e{_componentStyle=ie(be);static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275dir=Ce({type:i,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(h,d){h&2&&kt("p-button-icon",!0)},features:[Je([be]),se]})}return i})(),Jl=(()=>{class i extends _e{iconPos="left";loadingIcon;set label(a){this._label=a,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(a){this._icon=a,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(a){this._loading=a,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=ln(Vo);labelSignal=ln(Ho);isIconOnly=hn(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(a){this._buttonProps=a,a&&typeof a=="object"&&Object.entries(a).forEach(([h,d])=>this[`_${h}`]!==d&&(this[`_${h}`]=d))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(fe);isTextButton=hn(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=ie(be);ngAfterViewInit(){super.ngAfterViewInit(),Dt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(a){super.ngOnChanges(a);let{buttonProps:h}=a;if(h){let d=h.currentValue;for(let m in d)this[m]=d[m]}}getStyleClass(){let a=[fe.button,fe.component];return this.icon&&!this.label&&qe(this.htmlElement.textContent)&&a.push(fe.iconOnly),this.loading&&(a.push(fe.disabled,fe.loading),!this.icon&&this.label&&a.push(fe.labelOnly),this.icon&&!this.label&&!qe(this.htmlElement.textContent)&&a.push(fe.iconOnly)),this.text&&a.push("p-button-text"),this.severity&&a.push(`p-button-${this.severity}`),this.plain&&a.push("p-button-plain"),this.raised&&a.push("p-button-raised"),this.size&&a.push(`p-button-${this.size}`),this.outlined&&a.push("p-button-outlined"),this.rounded&&a.push("p-button-rounded"),this.size==="small"&&a.push("p-button-sm"),this.size==="large"&&a.push("p-button-lg"),this.hasFluid&&a.push("p-button-fluid"),a}get hasFluid(){let h=this.el.nativeElement.closest("p-fluid");return qe(this.fluid)?!!h:this.fluid}setStyleClass(){let a=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...a)}createLabel(){if(!Ie(this.htmlElement,".p-button-label")&&this.label){let h=this.document.createElement("span");this.icon&&!this.label&&h.setAttribute("aria-hidden","true"),h.className="p-button-label",h.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(h)}}createIcon(){if(!Ie(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let h=this.document.createElement("span");h.className="p-button-icon",h.setAttribute("aria-hidden","true");let d=this.label?"p-button-icon-"+this.iconPos:null;d&&Dt(h,d);let m=this.getIconClass();m&&Dt(h,m),!this.loadingIcon&&this.loading&&(h.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(h,this.htmlElement.firstChild)}}updateLabel(){let a=Ie(this.htmlElement,".p-button-label");if(!this.label){a&&this.htmlElement.removeChild(a);return}a?a.textContent=this.label:this.createLabel()}updateIcon(){let a=Ie(this.htmlElement,".p-button-icon"),h=Ie(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&a?a.innerHTML=this.spinnerIcon:a?.innerHTML&&(a.innerHTML=""),a?this.iconPos?a.className="p-button-icon "+(h?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():a.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275dir=Ce({type:i,selectors:[["","pButton",""]],contentQueries:function(h,d,m){h&1&&(cn(m,d.iconSignal,Vo,5),cn(m,d.labelSignal,Ho,5)),h&2&&wo(2)},hostVars:4,hostBindings:function(h,d){h&2&&kt("p-button-icon-only",d.isIconOnly())("p-button-text",d.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",Y],rounded:[2,"rounded","rounded",Y],text:[2,"text","text",Y],outlined:[2,"outlined","outlined",Y],size:"size",plain:[2,"plain","plain",Y],fluid:[2,"fluid","fluid",Y],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[Je([be]),je,se,an]})}return i})(),pl=(()=>{class i extends _e{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new _t;onFocus=new _t;onBlur=new _t;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(a){this._buttonProps=a,a&&typeof a=="object"&&Object.entries(a).forEach(([h,d])=>this[`_${h}`]!==d&&(this[`_${h}`]=d))}get hasFluid(){let h=this.el.nativeElement.closest("p-fluid");return qe(this.fluid)?!!h:this.fluid}_componentStyle=ie(be);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(a=>{switch(a.getType()){case"content":this.contentTemplate=a.template;break;case"icon":this.iconTemplate=a.template;break;case"loadingicon":this.loadingIconTemplate=a.template;break;default:this.contentTemplate=a.template;break}})}ngOnChanges(a){super.ngOnChanges(a);let{buttonProps:h}=a;if(h){let d=h.currentValue;for(let m in d)this[m]=d[m]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,a])=>!!a).reduce((a,[h])=>a+` ${h}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let a;return function(d){return(a||(a=Z(i)))(d||i)}})();static \u0275cmp=vt({type:i,selectors:[["p-button"]],contentQueries:function(h,d,m){if(h&1&&(ze(m,Xa,5),ze(m,Ka,5),ze(m,el,5),ze(m,Po,4)),h&2){let $;Ge($=Ze())&&(d.contentTemplate=$.first),Ge($=Ze())&&(d.loadingIconTemplate=$.first),Ge($=Ze())&&(d.iconTemplate=$.first),Ge($=Ze())&&(d.templates=$)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",Y],loading:[2,"loading","loading",Y],loadingIcon:"loadingIcon",raised:[2,"raised","raised",Y],rounded:[2,"rounded","rounded",Y],text:[2,"text","text",Y],plain:[2,"plain","plain",Y],severity:"severity",outlined:[2,"outlined","outlined",Y],link:[2,"link","link",Y],tabindex:[2,"tabindex","tabindex",Do],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",Y],fluid:[2,"fluid","fluid",Y],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Je([be]),je,se,an],ngContentSelectors:tl,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(h,d){h&1&&(vo(),Ye(0,"button",0),_o("click",function($){return d.onClick.emit($)})("focus",function($){return d.onFocus.emit($)})("blur",function($){return d.onBlur.emit($)}),ko(1),ye(2,nl,1,0,"ng-container",1)(3,ll,3,5,"ng-container",2)(4,hl,3,5,"ng-container",2)(5,fl,2,3,"span",3)(6,bl,1,2,"p-badge",4),$e()),h&2&&(O("ngStyle",d.style)("disabled",d.disabled||d.loading)("ngClass",d.buttonClass)("pAutoFocus",d.autofocus),ae("type",d.type)("aria-label",d.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",d.tabindex),P(2),O("ngTemplateOutlet",d.contentTemplate||d._contentTemplate),P(),O("ngIf",d.loading),P(),O("ngIf",!d.loading),P(),O("ngIf",!d.contentTemplate&&!d._contentTemplate&&d.label),P(),O("ngIf",!d.contentTemplate&&!d._contentTemplate&&d.badge))},dependencies:[fn,To,Oo,Yo,Co,Lo,Ao,Uo,Ro,Wo,xt],encapsulation:2,changeDetection:0})}return i})(),ql=(()=>{class i{static \u0275fac=function(h){return new(h||i)};static \u0275mod=un({type:i});static \u0275inj=sn({imports:[fn,pl,xt,xt]})}return i})();var mn=Za(jo());function zo(i,u){var a=mn.default.utc(i.createdAt),h=mn.default.utc(u.createdAt),d=h.diff(a);return d}var Go=class i{storageToken="dotnet-codengen-configurations";clearState=[];constructor(){localStorage.getItem(this.storageToken)||localStorage.setItem(this.storageToken,JSON.stringify(this.clearState))}clearConfigurations(){localStorage.clear()}getConfiguration(u){var a=localStorage.getItem(this.storageToken);if(a!=null){var h=JSON.parse(a);return h.find(d=>d.id==u)}}getAllConfigurations(){var u=localStorage.getItem(this.storageToken);return u==null?[]:JSON.parse(u).sort(zo)}saveConfiguration(u){var a=localStorage.getItem(this.storageToken);if(a==null)localStorage.setItem(this.storageToken,JSON.stringify([u]));else{var h=JSON.parse(a);h.push(u),localStorage.setItem(this.storageToken,JSON.stringify(h))}}deleteConfiguration(u){var a=localStorage.getItem(this.storageToken);if(a==null)localStorage.setItem(this.storageToken,JSON.stringify([]));else{var h=JSON.parse(a);h=h.filter(d=>d.id!==u),localStorage.setItem(this.storageToken,JSON.stringify(h))}}static \u0275fac=function(a){return new(a||i)};static \u0275prov=yt({token:i,factory:i.\u0275fac,providedIn:"root"})};export{Ao as a,Uo as b,Jl as c,pl as d,ql as e,jo as f,Go as g};
