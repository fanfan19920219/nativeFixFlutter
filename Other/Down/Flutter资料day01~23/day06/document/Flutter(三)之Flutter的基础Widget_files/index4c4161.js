define("biz_common/tmpl.js",[],function(){
"use strict";
function n(n,e){
var r="";
return r=n.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
r=e?r.replace(/\t==(.*?)#>/g,"',$1,'").replace(/\t=(.*?)#>/g,"', String($1).replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):r.replace(/\t=(.*?)#>/g,"',$1,'"),
r=r.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
}
var e=function(e,r,t){
var p=n(e,t),i=function(){};
try{
i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+p+"');}return p.join('');");
}catch(c){
e=e.replace(/\'/g,"&#39;").replace(/'/g,"&#39;"),p=n(e,t),i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+p+"');}return p.join('');");
}
return i(r);
},r=function(n,r,t){
var p=document.getElementById(n);
return p?e(p.innerHTML,r,t):"";
};
return{
render:r,
tmpl:e
};
});define("appmsg/set_font_size.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","biz_common/dom/class.js"],function(e){
"use strict";
function t(e,t){
for(var o=[],n=document.createTreeWalker(e,4);n.nextNode();){
var i=n.currentNode.parentNode,s=i.getAttribute("mp-original-font-size");
s||(s=getComputedStyle(i).fontSize,i.setAttribute("mp-original-font-size",s)),o.push([i,s]);
}
o.forEach(function(e){
e[0].style.fontSize=parseFloat(e[1])*t+"px";
});
}
function o(e){
"function"==typeof e&&c.push(e);
}
var n=e("biz_wap/utils/mmversion.js"),i=e("biz_wap/jsapi/core.js"),s=e("biz_wap/utils/device.js"),a=e("biz_common/dom/class.js"),c=[];
return n.isIOS&&location.href.match(/fontScale=\d+/)&&i.on("menu:setfont",function(e){
parseFloat(e.fontScale)<=0&&(e.fontScale=100),s.os.ipad&&s.os.getNumVersion()>=13?t(document.getElementsByTagName("html").item(0),e.fontScale/100):document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%",
a.addClass(document.getElementsByTagName("body").item(0),"appmsg_skin_fontscale_"+e.fontSize),
window.ipados13_font_scale=e.fontScale,c.forEach(function(t){
return t(e);
});
}),{
setFontSize:t,
onFontScaleChange:o
};
});define("biz_wap/ui/weui.js",[],function(){
"use strict";
function e(){
for(var e=document.getElementsByTagName("link"),i=/^http(s)?:\/\/res\.wx\.qq\.com\/open\/libs\/weui\/([^\/]*)\/weui(\.min)?\.css$/,n=0;n<e.length;n++){
var t=(e[n].href.match(i)||[])[2];
if(t){
if("1"===t[0])return!0;
console.warn("Weui.css("+t+") in page is deprecated. Weui.css(1.0+) will be insert in page automatically.");
}
}
return!1;
}
function i(){
var e=["actionSheet","alert","confirm","dialog","validate","checkIfBlur","gallery","loading","picker","datePicker","searchBar","slider","tab","toast","topTips","uploader"];
window.weui={};
for(var i=0;i<e.length;i++)!function(i){
window.weui[e[i]]=function(){
a.push({
name:e[i],
args:arguments
}),console.info(e[i]+" will be executed after weui.js loaded.");
};
}(i);
}
function n(){
var e=document.createElement("script");
e.onload=function(){
for(var e=0;e<a.length;e++)window.weui[a[e].name].apply(window,a[e].args);
},e.onerror=function(){
throw new Error("weui.js loaded fail.");
},e.src=r,document.body.appendChild(e);
}
var t="https://res.wx.qq.com/open/libs/weui/2.2.0/weui.min.css",r="https://res.wx.qq.com/open/libs/weuijs/1.2.1/weui.min.js",a=[];
if(!e()){
var o=document.createElement("link");
o.href=t,o.rel="stylesheet",document.head.appendChild(o);
}
i(),n();
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("appmsg/index.js",["biz_wap/ui/weui.js","appmsg/set_font_size.js","biz_common/tmpl.js","cps/tpl/banner_tpl.html.js","cps/tpl/card_tpl.html.js","cps/tpl/list_tpl.html.js","biz_common/utils/string/html.js","appmsg/weapp_common.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/moment.js","appmsg/appmsg_report.js","biz_common/utils/url/parse.js","a/mpAdAsync.js","biz_wap/utils/wapsdk.js","common/utils.js","complain/localstorage.js","appmsg/popup_report.js","appmsg/pay_report_utils.js","appmsg/loading.js","appmsg/finance_communicate.js","biz_common/utils/monitor.js","common/comm_report.js","appmsg/getForbidConfig.js","page/appmsg_new/combo.css","page/appmsg_new/not_in_mm.css","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/review_image.js","appmsg/product.js","appmsg/page_pos.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","redpackage/redpacketcover.js","appmsg/autoread.js","appmsg/voicemsg.js","appmsg/weproduct.js","appmsg/weapp.js","question_answer/appmsg.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/appmsg_copy_report.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport_without_localstorage.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e){
"use strict";
function t(e){
for(var t=window.location.search,o=t.substring(1,t.length).split("&"),i=0;i<o.length;i++){
var n=o[i].split("=");
if(n[0].toUpperCase()===e.toUpperCase())return n[1];
}
return"";
}
function o(){
function o(e){
if(e&&0!=e.length){
for(var t={
batch_no:A.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:e.length
},o=0;o<e.length;o++){
var i=e[o],n=o+1;
for(var r in i)i.hasOwnProperty(r)&&(t[r+""+n]=i[r]);
}
l({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
function T(){
Z&&clearTimeout(Z),Z=setTimeout(function(){
try{
Z=null;
for(var e=0;e<Q.length;e++){
var t=Q[e],i=w.attr(t,"data-showed");
if("no"==i){
var n=t.getElementsByClassName("js_product_loop_content");
if(n.length>0){
n=n[0];
var r=n.getBoundingClientRect(),a=r.height||r.bottom-r.top;
if(a>0&&r.top<x.getInnerHeight()&&r.bottom>0){
t.setAttribute("data-showed","yes");
var s=n.getAttribute("data-pid");
s&&o([{
wxa_appid:n.getAttribute("data-wxaappid"),
pid:s,
type:3,
absolute_order:e+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
}
}
}
}catch(d){}
},100);
}
function C(e){
try{
for(var c=window.pageYOffset||document.documentElement.scrollTop,m=0;m<Q.length;m+=D){
var u=Q[m];
if(!(u.offsetTop>c+x.getInnerHeight()+100)){
var g=w.attr(u,"data-cpsstatus");
if("hide"==g){
u.setAttribute("data-cpsstatus","loading");
for(var f=""+m,y=1,v=m+1;v<Q.length&&m+D>v;v++)f=f+"%2c"+v,y++;
var b=Math.ceil(1e7*Math.random());
if(""!==t("mockcps"))var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+f+"&sn="+window.sn+"&mockcps="+t("mockcps");else var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+f+"&sn="+window.sn+"&istempurl="+(window.is_temp_url||0)+"&random="+b;
!function(e,t,c){
l({
url:t,
type:"GET",
dataType:"json",
async:!0,
error:function(){
try{
window.__addIdKeyReport("64469","18",c);
}catch(e){}
},
success:function(e){
try{
window.__addIdKeyReport("64469","16",e.product_list.length),e.product_list.length<c&&window.__addIdKeyReport("64469","18",c-e.product_list.length);
for(var t=0;t<e.product_list.length;t++){
e.product_list[t].data.cps_isready=!0,e.product_list[t].data.pid_type=e.product_list[t].data.pid_type||e.product_list[t].attr.pid_type;
var m=Q[e.product_list[t].index],l=e.product_list[t].template_id;
"list"==l?m.innerHTML=n.tmpl(s,e.product_list[t].data):"banner"==l?m.innerHTML=n.tmpl(r,e.product_list[t].data):"card"==l&&(m.innerHTML=n.tmpl(a,e.product_list[t].data)),
e.product_list[t].weapp_username&&(e.product_list[t].attr.weapp_username=e.product_list[t].weapp_username),
e.product_list[t].weapp_version&&(e.product_list[t].attr.weapp_version=e.product_list[t].weapp_version),
m.setAttribute("data-cpsstatus","complete");
for(var u=m.getElementsByClassName("js_product_loop_content"),g=0;g<u.length;g++)for(var f in e.product_list[t].attr)u[g].setAttribute("data-"+f,e.product_list[t].attr[f]);
for(var y=m.getElementsByTagName("img"),g=0;g<y.length;g++)y[g].src=w.attr(y[g],"data-src");
!function(e,t){
if(h.on(e,"tap",".js_product_loop_content",function(e){
try{
var i=e.delegatedTarget,n=i.getAttribute("data-wxaappid"),r=i.getAttribute("data-wxapath"),a=i.getAttribute("data-pid"),s=i.getAttribute("data-appid"),p=i.getAttribute("data-cpspackage"),c=Math.floor((new Date).getTime()/1e3)+5184e3,m=i.getAttribute("data-weapp_username"),l=i.getAttribute("data-weapp_version");
d.jumpUrl({
cps_weapp_username:m,
cps_weapp_version:l,
privateExtraData:{
cookies:"cps_package="+encodeURIComponent(p)+"; expires="+c+"; busid=mmbiz_ad_cps; domain=*; spread=*"
},
sourceAppId:s,
appid:n,
path:r,
scene:1091,
sceneNote:encodeURIComponent(location.href)+":"+encodeURIComponent(a),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&a&&o([{
wxa_appid:n,
pid:a,
type:4,
absolute_order:t+1,
appid:i.getAttribute("data-appid")||"",
templateid:i.getAttribute("data-templateid")||"",
relative_order:1*i.getAttribute("data-order"),
packid:i.getAttribute("data-packid")||""
}]);
}
});
}catch(e){}
return!1;
}),_.isIOS&&location.href.match(/fontScale=\d+/)&&p.os.ipad&&p.os.getNumVersion()>=13){
var n=location.href.match(/fontScale=(\d+)/);
i(e,parseFloat(n[1])/100);
}
}(m,e.product_list[t].index);
}
T();
}catch(v){
window.__addIdKeyReport("64469","18",e.product_list.length);
}
}
});
}(f,A,y);
}
}
}
}catch(e){
console.log(e);
}
}
function R(e){
try{
X&&clearTimeout(X),X=setTimeout(function(){
C(e);
},300);
}catch(e){}
}
function V(){
var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
if(e>=40&&!W)if(W=!0,L){
if(y.invoke("currentMpInfoShow",{
userName:window.user_name,
brandName:K
},function(){}),!F){
var t={
BizUin:biz,
AppMsgID:1*mid,
ItemIndex:1*idx,
Scene:1*source,
SubScene:1*subscene,
EnterId:13===enterid.toString().length?Math.floor(enterid/1e3):1*enterid,
SessionId:sessionid+"",
Event:1,
CurrScreen:0,
ItemShowType:1*window.item_show_type,
ExitHeight:0
};
O.report(17335,t),F=!0;
}
}else document.title=window.title;else 40>e&&W&&(W=!1,L?y.invoke("currentMpInfoHide",function(){}):document.title="");
}
function H(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},i=new Image;
i.onload=function(){
var o=i.width>0&&i.height>0;
t(e,o);
},i.onerror=function(){
t(e,!1);
},i.src="data:image/webp;base64,"+o[e];
}
function U(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e.timing){
var t=e.timing;
m("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&m("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}
"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&B.setSum(24729,94,1);
var o=Math.random();
.001>o&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&B.setSum(24729,95,1),
window.__wxjs_is_wkwebview&&window.__addIdKeyReport("28307",67);
}
try{
var Q=document.getElementsByTagName("mpcps");
window.__addIdKeyReport("64469","15",Q.length);
for(var G=0;G<Q.length;G++){
Q[G].setAttribute("data-cpsstatus","hide"),Q[G].setAttribute("data-showed","no");
var Y={
cps_isready:!1,
cps_state:"",
pid_type:"",
img_url:"",
title:"",
desc:"",
source_name:"",
source_logo_url:"",
is_ad:1
},J=w.attr(Q[G],"data-templateid");
"list"==J?Q[G].innerHTML=n.tmpl(s,Y):"banner"==J?Q[G].innerHTML=n.tmpl(r,Y):"card"==J&&(Q[G].innerHTML=n.tmpl(a,Y));
}
}catch($){
console.log($);
}
var X,Z=null;
T(),h.on(window,"scroll",T),C(),h.on(window,"scroll",R),y.on("topbar:click",function(){
var e={
BizUin:biz,
AppMsgID:1*mid,
ItemIndex:1*idx,
Scene:1*source,
SubScene:1*subscene,
EnterId:13===enterid.toString().length?Math.floor(enterid/1e3):1*enterid,
SessionId:sessionid+"",
Event:3,
CurrScreen:Math.ceil((window.pageYOffset||document.documentElement.scrollTop)/x.getInnerHeight()),
ItemShowType:1*window.item_show_type,
ExitHeight:1*((window.pageYOffset||document.documentElement.scrollTop)+x.getInnerHeight())
};
O.report(17335,e);
}),window.is_new_msg&&-1!=navigator.userAgent.indexOf("MicroMessenger")&&(window.title&&(window.title=window.title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
window.msg_title&&(window.msg_title=window.msg_title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
hd_head_img||j.jsmonitor({
id:115849,
key:26,
value:1
}),y.invoke("currentMpInfo",{
userName:window.user_name,
brandName:K,
title:window.msg_title||"",
brandIcon:hd_head_img.replace(/\/0$/,"/132"),
itemShowType:window.item_show_type,
isPaySubscribe:window.isPaySubscribe,
topBarStyle:L?1:0,
topBarShowed:!1,
forbidForward:window.isPaySubscribe?1:0,
isMenuShowBrandInfo:1
},function(){}),y.invoke("createWebViewForFastLoad",{
scene:1
},function(e){
console.log(e);
}),h.on(window,"load",V),h.on(window,"scroll",V));
var et=document.getElementsByTagName("body");
if(!et||!et[0])return!1;
et=et[0],_.isInMiniProgram&&(document.getElementById("js_name")&&c.addClass(document.getElementById("js_name"),"tips_global_primary"),
document.getElementsByClassName("account_nickname_inner").length&&c.addClass(document.getElementsByClassName("account_nickname_inner")[0],"tips_global_primary"),
document.getElementById("js_share_author")&&c.addClass(document.getElementById("js_share_author"),"tips_global_primary")),
function(){
function e(){
if(i.length)for(var e=document.documentElement.scrollTop||document.body.scrollTop,t=0;t<i.length;t++)if(1!=i[t].getAttribute("hasload")){
var o=i[t].getBoundingClientRect();
(o.top<d+e&&o.top>e||o.top+o.height>e&&o.top+o.height<d+e)&&i[t].getAttribute("href").length>0&&(i[t].setAttribute("hasload",1),
y.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:i[t].getAttribute("data-itemshowtype"),
url:i[t].getAttribute("href")
}]
},function(e){
console.log(e);
}),i.splice(t,1),t--);
}
}
function t(){
for(var e=0;e<a.length;e++){
var t=a[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(a.splice(e,1),e--,S.report([1,S.getRedirectType(t.parentNode.getAttribute("href")),"",img_popup?1:0,window.source,S.getUrlData(t.parentNode.getAttribute("href"))]));
}
for(var e=0;e<s.length;e++){
var t=s[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(s.splice(e,1),e--,S.report([1,1,"",img_popup?1:0,window.source,t.getAttribute("data-miniprogram-appid")]));
}
}
function o(){
e(),t();
}
for(var i=[],n=document.getElementById("js_content").getElementsByTagName("a"),r=0;r<n.length;r++)null!==n[r].getAttribute("data-itemshowtype")&&i.push(n[r]);
var a=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("h5_image_link"),function(e){
e.parentNode.getAttribute("href")&&e.parentNode.getAttribute("href").length>0&&a.push(e);
});
var s=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("weapp_image_link"),function(e){
s.push(e);
});
var d=window.innerHeight||document.documentElement.clientHeight;
h.on(window,"scroll",o),o();
}(),function(){
window.isPaySubscribe&&(y.on("onScreenShot",function(){
E.reportPayAppmsg(6);
}),window.isPaid||!function(){
var e="isPaid-"+window.biz+"-"+window.mid+"-"+window.idx,t=document.getElementById("js_pay_panel"),o=t.getElementsByClassName("js_pay_btn")[0],i=document.getElementById("js_pay_panel_bottom"),n=window.getComputedStyle(i),r=40+parseInt(n.paddingTop,10)+parseInt(n.paddingBottom,10),a=_.isWindows||_.isMac&&!_.isIOS,s=_.isGooglePlay;
if(_.isAndroid&&(y.invoke("handleMPPageAction",{
action:"isGPVersion"
},function(e){
console.log("GPVersion",e),e.err_msg.indexOf("ok")>-1&&(s=1*e.GPVersion);
}),"1"===window.localStorage.getItem(e)&&E.report110809(30)),a)for(var d=document.getElementsByClassName("js_pay_qrcode"),p="/mp/paysubqrcode?action=get_article_qrcode&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"#wechat_redirect",m=0,w=d.length;w>m;m++)d[m].src=p;
_.isInMiniProgram&&(c.addClass(o,"btn_disabled"),c.addClass(i.getElementsByClassName("js_pay_btn")[0],"btn_disabled")),
_.isIOS&&window.payShowIAPPrice&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),E.reportOverseaPay("",0,1,0,"",2,"");
},3e3),o=Date.now();
y.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(n){
if("number"==typeof e){
clearTimeout(e);
var r=Date.now()-o;
if(console.log("getIAPProductInfo",n,r+"ms"),-1!==n.err_msg.indexOf(":ok")){
if(E.report110809(38),window.payProductId!==n.productId)return void E.report110809(44);
var a=[t.getElementsByClassName("js_pay_fee")[0],i.getElementsByClassName("js_pay_fee")[0]];
a.forEach(function(e){
e.innerHTML=n.currencySymbol+n.price.toFixed(2),e.parentNode.dataset.ready=1;
}),window.oriProductFee?("CNY"!==n.currencyCode&&E.report110809(40),E.reportOverseaPay(n.currencyCode,100*n.price.toFixed(2),1,r,n.countryCode,0,n.err_msg+(n.err_desc?"__"+n.err_desc:""))):(window.IAPProductInfo=n,
window.IAPProductInfo.invokeTime=r);
}else E.report110809(39),E.reportOverseaPay("",0,1,0,"",1,n.err_msg+(n.err_desc?"__"+n.err_desc:""));
}
});
}(),window.jump2pay&&h.on(window,"load",function(){
window.scrollTo(0,t.getBoundingClientRect().top-x.getInnerHeight()/3);
});
var u=function(){
var e=o.getBoundingClientRect().top;
if(e+r>window.innerHeight){
if(1*window.previewPercent===0)return;
i.className="pay pay__notice pay__notice_show";
}else i.className="pay pay__notice",window.is_finished_preview=1;
};
u(),h.on(window,"scroll",u);
var g=!1,f=function v(t,o){
if(E.report110809ForDevice(32),!_.isInMiniProgram){
if(s)return void window.weui.alert("????????????Google Play???????????????????????????????????????????????????????????????");
if(!o){
if(!a&&g)return;
if(!_.isWechat&&!a)return void window.weui.alert("???????????????????????????");
g=!0;
}
var i=t.currentTarget;
if(!a&&1*i.dataset.ready===0)return!o&&k.show("???????????????"),setTimeout(v,100,{
currentTarget:i
},!0);
if(E.reportPayAppmsg(9),window.is_temp_url)window.weui.alert("???????????????????????????????????????????????????????????????",function(){
g=!1,location.replace(location.href+"&temp_is_paid=1");
});else if(a){
var n=function(){
var e="js_pay_qrcode_wrap",t=i.nextElementSibling;
if("block"===t.style.display)return{
v:void 0
};
i.classList.contains("js_article_bottom")&&t.classList[i.getBoundingClientRect().top<300?"add":"remove"]("pay__notice-qrcode_bottom");
var o=function n(o){
if("none"!==t.style.display){
for(var r=o.target;!(null===r||r.classList&&r.classList.contains(e)||r===i);)r=r.parentNode;
r!==i&&(null!==r&&r.classList.contains(e)||(t.style.display="none",h.off(window,"click",n)));
}
};
h.on(window,"click",o),t.style.display="block";
}();
if("object"===("undefined"==typeof n?"undefined":_typeof(n)))return n.v;
}else{
var r=function(){
if(_.isIOS&&_.ltVersion("7.0.10")||_.isAndroid&&_.ltVersion("7.0.10"))return location.replace("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=page/common_page__upgrade&btn_text=btn_text_0&text=text000"),
{
v:void 0
};
_.isAndroid&&"1"===window.localStorage.getItem(e)&&E.report110809(31),E.report110809ForDevice(34);
var t=function(){
E.reportPayAppmsg(1),y.invoke("handleMPPageAction",{
action:"paySuccess",
fullUrl:window.location.href,
itemShowType:item_show_type
},function(t){
g=!1,E.report110809(t.err_msg.indexOf("ok")>-1?19:20),window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem(e,"1"),
window.__second_open__?window.location.href=window.location.href+"&r="+Math.random()+"#wechat_redirect":window.location.reload();
});
};
k.show("???????????????"),l({
url:"/mp/paysub?action=create_order",
type:"POST",
dataType:"json",
data:{
__biz:window.biz,
mid:window.mid,
idx:window.idx,
sn:window.sn,
version:window.clientversion.htmlDecode(),
is_from_pc:window.jump2pay
},
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret)!function(){
E.report110809(13),E.report110809ForDevice(36);
var o=Math.round(new Date/1e3);
if(_.isIOS){
var i=e.iap_info;
y.invoke("requestVirtualPayment",{
appID:i.appid,
priceLevel:i.price_level,
busiType:23,
busiId:i.busi_id,
productDesc:i.desc,
sign:i.sign,
extInfo:i.ext_info
},function(i){
console.log("requestVirtualPayment res: ",i),i.err_msg.indexOf("ok")>-1?(E.report110809(15),
E.reportPay(o,1,e.order_id),t()):i.err_msg.indexOf("cancel")>-1?(g=!1,E.report110809(28),
E.reportPay(o,2,e.order_id),console.log("pay cancel")):i.err_msg.indexOf("fail")>-1?(g=!1,
E.report110809(16),E.reportPay(o,3,e.order_id,i.err_msg,i.err_code,i.err_domain),
window.weui.alert(i.err_msg.slice(i.err_msg.indexOf("fail")+4))):(g=!1,window.weui.alert(i.err_msg));
}),window.payShowIAPPrice&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),E.reportOverseaPay("",0,2,0,"",2,"");
},3e3),t=Date.now();
y.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(o){
if("number"==typeof e){
clearTimeout(e);
var i=Date.now()-t;
if(console.log("getIAPProductInfo",o,i+"ms"),-1!==o.err_msg.indexOf(":ok")){
if(E.report110809(41),window.payProductId!==o.productId)return void E.report110809(44);
window.IAPProductInfo?window.IAPProductInfo.currencySymbol!==o.currencySymbol&&E.report110809(43):window.oriProductFee&&"???"!==o.currencySymbol&&E.report110809(43),
E.reportOverseaPay(o.currencyCode,100*o.price.toFixed(2),2,i,o.countryCode,0,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}else E.report110809(42),E.reportOverseaPay("",0,2,0,"",1,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}
});
}();
}else{
var n=e.midas_info;
window.h5sdk.directPay({
sandbox:!!n.sandbox,
ontimeout:function(){
g=!1,window.weui.alert("??????????????????????????????");
},
methods:{
onPayEnd:function(i,n){
console.log("directPay res: ",i,n),1===i?(E.report110809(17),E.reportPay(o,1,e.order_id,n,i),
t()):-1===i&&/:cancel$/.test(n)?(g=!1,E.report110809(29),E.reportPay(o,2,e.order_id,n,i),
console.log("pay cancel")):(g=!1,E.report110809(18),E.reportPay(o,3,e.order_id,n,i),
window.weui.alert("??????????????????????????????"));
}
}
},{
pf:n.pf,
appid:n.appid,
type:"goods",
openid:n.openid,
extend:{
hideOfferName:1
},
goodstokenurl:n.url_params,
usewxappid:"1",
wx_h5pay:0,
direct_pay_channel:"wechat"
});
}
}();else switch(g=!1,e&&e.base_resp&&e.base_resp.ret){
case 202600:
window.weui.alert("??????????????????");
break;

case 202601:
window.weui.alert("????????????????????????????????????????????????");
break;

case 202602:
window.weui.alert("?????????????????????????????????????????????",t);
break;

case 202604:
window.weui.alert("?????????????????????????????????????????????");
break;

case 202607:
window.weui.alert("????????????Google Play???????????????????????????????????????????????????????????????");
break;

case 202608:
location.replace("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=page/common_page__upgrade&btn_text=btn_text_0&text=text000");
break;

case 202609:
window.weui.alert("???????????????????????????????????????????????????????????????");
break;

case 202612:
window.weui.alert("???????????????????????????????????????????????????");
break;

default:
E.report110809(14),window.weui.alert("????????????????????????????????????");
}
},
error:function(){
g=!1,window.weui.alert("??????????????????????????????");
},
complete:function(){
k.hide();
}
});
}();
if("object"===("undefined"==typeof r?"undefined":_typeof(r)))return r.v;
}
}
};
h.tap(o,f),h.tap(i.getElementsByClassName("js_pay_btn")[0],f);
}());
}(),function(){
var e=document.getElementById("js_hotspot_area"),t=0===window.hotspotInfoList.length,o=function i(o){
if(!t){
var n=x.getInnerHeight()+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);
e.offsetTop<n?(t=!0,h.off(window,"scroll",i),B.setSum(59977,15,1),b.hotspotReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
})):"function"==typeof o&&o();
}
};
o(function(){
h.on(window,"scroll",o);
});
}();
var tt=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&location.href&&tt.test(location.href))&&!window.isSg)throw new Error("in iframe");
}catch($){
var ot="",it=new Image;
it.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+ot+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&!window.__second_open__){
var nt=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,nt+"rd2werd=1#wechat_redirect"));
}
var rt=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var at=!_.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
e("appmsg/share.js");
var st=v(1e3*parseInt(window.modify_time)),dt=st.format("YYYY-MM-DD"),pt=document.getElementById("js_modify_time");
if(pt&&(pt.innerHTML=dt),window.isSg||"mp.weixin.qq.com"==location.host){
var ct=e("biz_common/log/jserr.js");
ct({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var mt=-1!=navigator.userAgent.indexOf("TBS/"),lt=function(e,t){
H(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var i=window.logs.webplog,n=Math.random();
mt&&1>=n&&(i.lossy=i.lossless=i.alpha=1,window.logs.webplog=i);
var r=i.lossy&i.lossless&i.alpha;
t(!!r);
}
});
},wt=function(e){
for(var t=document.getElementsByTagName("img"),o=!1,i=!1,n=0,r=t.length;r>n;n++){
var a=t[n].getAttribute("data-src");
a&&a.canHevc()&&(o=!0),a&&a.isGif()&&(i=!0);
}
var s=_.gtVersion("6.5.13",!0)&&i,d=_.gtVersion("6.8.0",!0)&&o,p=!1;
try{
{
top.window.document;
}
}catch(c){
p=!0;
}
(N||navigator.userAgent.indexOf("Br_trunk")>-1)&&_.isIOS&&(s||d)&&!p?(console.info("[HEVC??????] ????????????????????????HEVC??????"),
y.invoke("imageProxyInit",{},function(t){
t.err_msg.indexOf(":ok")>-1?(M=t.serverUrl,window.__addIdKeyReport("28307",117)):t.err_msg.indexOf(":fail")>-1&&window.__addIdKeyReport("28307",118),
e();
})):e();
},ut=function(e){
lt("lossy",e),lt("lossless",e),lt("alpha",e),lt("animation",e);
};
window.webp=!1,wt(function(){
ut(function(t){
function o(e){
e.width<40||e.height<40||-1==e.className.indexOf("img_loading")&&(e.className+=" img_loading");
}
function i(e){
if(!(e.width<40||e.height<40)){
var t=e.src;
if(e.className=e.className.replace("img_loading",""),-1==e.className.indexOf("img_loadederror")){
e.className+=" img_loadederror",e.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51);
var i=function(){
window.__addIdKeyReport("28307",66),n(e),o(e);
var i=e.__retryload;
return i=0,t=t.https2http(),e.__retryload=i,e.src=rt.addParam(t,"retryload",i,!0),
!1;
};
h.on(e,"click",i);
}
}
}
function n(e){
e.className=e.className.replace("img_loading",""),e.className=e.className.replace("img_loadederror","");
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var r=document.getElementById("js_cover");
if(r){
var a=r.getAttribute("data-src");
a&&(a.isCDN()&&(a=a.imgChange640(),t&&(a=rt.addParam(a,"tp","webp",!0)),a=rt.addParam(a,"wxfrom","5",!0),
is_https_res||q?a=a.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(a=a.https2http())),
setTimeout(function(){
r.onload=function(){
u(r,"height","auto","important"),u(r,"visibility","visible","important");
},r.setAttribute("src",a);
},0),window.logs.img.read[a]=!0,window.logs.img.load[a]=!0,r.removeAttribute("data-src"));
}
var s=e("biz_wap/ui/lazyload_img.js"),d=2;
window.logs.outer_pic=0;
for(var p=document.getElementsByTagName("img"),l=0,w=p.length;w>l;l++){
{
var g=p[l].getAttribute("data-src");
p[l].getAttribute("src");
}
g&&g.isGif()&&p[l].className.indexOf("__bg_gif")<0&&(p[l].className+=" __bg_gif");
}
for(var f=document.getElementsByClassName("__bg_gif"),l=0,w=f.length;w>l;++l)f[l].setAttribute("data-order",l);
var y=function(e){
try{
var t=e,o=t.getAttribute("data-src");
if(!/^https?\:\/\/mmbiz\.qpic\.cn/.test(o))return;
var i=t.parentNode,n=!1;
c.hasClass(i,"js_jump_icon")&&(n=!0);
for(var r=!1;i.tagName&&"body"!=i.tagName.toLowerCase();){
if("a"==i.tagName.toLowerCase()){
var a=i.getAttribute("href")||"";
null!=a.match(/^http/)&&(r=!0);
break;
}
i=i.parentNode;
}
if(n&&!r){
var s=t.parentNode,d=s.parentNode;
if(d){
for(var p=document.createDocumentFragment();s.firstChild;)p.appendChild(s.firstChild);
d.insertBefore(p,s),d.removeChild(s);
}
}else if(!n&&r){
var m=document.createElement("span"),l=getComputedStyle(t);
"static"!=l.positon&&(m.style.position=l.positon),m.style.left=l.left,m.style.top=l.top,
m.style.right=l.right,m.style.bottom=l.bottom,m.style.margin=l.margin,c.addClass(m,"js_jump_icon"),
c.addClass(m,"h5_image_link"),t.style.position="static",t.style.margin="0px",t.parentNode.insertBefore(m,t),
m.appendChild(t),window.__addIdKeyReport("111535",0);
}
}catch(w){}
},v=function k(e){
try{
var t=e.childNodes,o=getComputedStyle(e);
(o.backgroundImage.match(/https\:\/\/mmbiz\.qpic\.cn/)||o.backgroundImage.match(/http\:\/\/mmbiz\.qpic\.cn/))&&window.__addIdKeyReport("111535",2);
for(var i=0;i<t.length;i++)"a"!=t[i].tagName.toLowerCase()&&k(t[i]);
}catch(n){}
};
try{
for(var b=document.getElementsByTagName("a"),A=0;A<b.length;A++){
var I=b.item(A),x=I.getAttribute("href")||"";
null!=x.match(/^http/)&&v(I);
}
}catch(S){}
var E=!1;
new s({
attrKey:"data-src",
imgOccupied:!0,
crossOrigin:!0,
lazyloadHeightWhenWifi:function(){
var e,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var i=e.getHours();
return i>=20&&23>i&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t){
if(!t)return"";
var o=t;
if(t.isCDN()){
o=o.imgChange640();
var i,n=window.navigator.userAgent,r=/TBS\/([\d\.]+)/i,a=n.match(r);
a&&a[1]&&(i=parseInt(a[1]));
var s,d=/XWEB\/([\d\.]+)/i,p=n.match(d);
p&&p[1]&&(s=parseInt(p[1]));
var c=1e3,l=window.user_uin||0,w=0!==l&&Math.floor(l/100)%1e3<c,u=(i>=43305&&44206!=i||s>=16)&&o.isGif(),g=0!==l&&Math.floor(l/100)%1e3<=500,f=s>=564&&o.canHevc()&&_.gtVersion("6.8.0",!0)&&g;
w&&(u||f)?(o=rt.addParam(o,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(o=rt.addParam(o,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),o=rt.addParam(o,"wxfrom","5",!0),is_https_res||q?(o=o.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(o=o.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var r=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
r.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(h){}
var y=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
o=o.replace(y,"http://m.qpic.cn"),/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i.test(o)&&!window.webp&&(o=rt.addParam(o,"t","",!0)),
o=rt.addParam(o,"wx_lazy","1",!0);
var v=_.gtVersion("6.5.13",!0)&&!_.eqVersion("7.0.9")&&o.isGif(),b=_.gtVersion("6.8.0",!0)&&o.canHevc()&&!(_.eqVersion("7.0.9")&&o.isGif());
return M&&(v||b)&&(window.__addIdKeyReport("28307",106),o=rt.addParam(o,"tp","wxpic",!0),
o=M+"hevc?url="+encodeURIComponent(o)+"&type="+o.getOriginImgType()),"anonymous"==e.crossOrigin&&(o=rt.addParam(o,"wx_co","1",!0)),
window.logs.img.load[o]=!0,m("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+o),
e.start_load_time=+new Date,o;
},
onerror:function(e,t){
var o=t?t.__retryload||0:0;
if(2==o&&i(t),e&&!(o>d)){
if(!e.isCDN()){
if(!M)return;
if(-1==e.indexOf(M))return;
}
var n=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+n),1>=o&&window.__addIdKeyReport("28307",75+1*o+n),
e.isWxpic()?(window.__addIdKeyReport("28307",93),1>=o&&window.__addIdKeyReport("28307",96+1*o)):e.isWebp()&&(window.__addIdKeyReport("28307",86),
1>=o&&window.__addIdKeyReport("28307",89+1*o)),M&&e.indexOf(M)>-1&&window.__addIdKeyReport("28307",108),
d>o){
if(o++,t.__retryload=o,1==o&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==o&&e.indexOf("https://")>-1?(window.__addIdKeyReport("28307",61),
window.__addIdKeyReport("28307",77)):2==o&&e.indexOf("mmbiz.qpic.cn")>-1&&(e=e.replace("mmbiz.qpic.cn","mmbiz.qlogo.cn"),
e.indexOf(!1)&&(e=e.http2https())),M&&e.indexOf(M)>-1){
var r=e.split("hevc?url=")[1];
r=r.split("&type")[0],r=decodeURIComponent(r),r=r.replace("tp=wxpic",""),e=r.https2http();
}
t.start_load_time=+new Date,t.src=rt.addParam(e,"retryload",o,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
m("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnerror))for(var a=0,s=t.lazyLoadOnerror.length;s>a;a++)"function"==typeof t.lazyLoadOnerror[a]&&t.lazyLoadOnerror[a].call(t);
}catch(p){}
var c=10;
/tp\=webp/.test(e)&&(c=11);
var l=new Image;
l.src="http://mp.weixin.qq.com/mp/jsreport?key="+c+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
if(!window.__second_open__&&!E){
var o=window.performance||window.msPerformance||window.webkitPerformance;
if(!o||!o.timing)return;
var i=window.location.protocol;
j.saveSpeeds({
uin:uin,
pid:"https:"==i?462:417,
speeds:{
sid:35,
time:Date.now()-window.performance.timing.navigationStart
}
}),j.send(),E=!0;
}
n(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var r=t?t.__retryload||0:0;
if(!(r>d)){
m("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+r),
t.setAttribute("data-fail",0),y(t);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnload))for(var a=0,s=t.lazyLoadOnload.length;s>a;a++)"function"==typeof t.lazyLoadOnload[a]&&t.lazyLoadOnload[a].call(t);
}catch(p){}
var c=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+c),1>=r&&window.__addIdKeyReport("28307",73+1*r+c),
e.isWxpic()?(window.__addIdKeyReport("28307",92),1>=r&&window.__addIdKeyReport("28307",94+1*r)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
1>=r&&window.__addIdKeyReport("28307",87+1*r)),M&&e.indexOf(M)>-1&&window.__addIdKeyReport("28307",107),
window.__has_imgsucceed||(window.__has_imgsucceed=!0,window.__addIdKeyReport("28307",64)),
1==r&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),1==r&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var l=Math.random(),w=+new Date-t.start_load_time;
w&&0==e.indexOf("https://")&&.5>l?(window.__addIdKeyReport("27822",121,w),window.__addIdKeyReport("27822",122)):w&&5e-4>l&&(window.__addIdKeyReport("27822",124,w),
window.__addIdKeyReport("27822",125)),"none"!=getComputedStyle(t).filter&&(t.style.transform="translateZ(0)",
t.style.webkitTransform="translateZ(0)");
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),e("appmsg/async.js"),!window.isSg;
var gt=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("profileBt"),t=document.getElementById("copyright_info"),o=[];
if(_.isInMiniProgram&&t&&c.addClass(t,"disabled"),e){
var i="57";
"28"==window.source&&(i="96"),"29"==window.source&&(i="39"),"15"==window.source&&(i="121"),
o.push({
dom:e,
username:user_name_new||user_name,
profileReportInfo:window.profileReportInfo||"",
scene:i
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"161"
});
var n=document.getElementById("js_share_headimg");
n&&o.push({
dom:n,
username:source_username,
scene:"172"
});
var r=document.getElementById("js_share_author");
r&&o.push({
dom:r,
username:source_username,
scene:"172"
});
for(var a=0,s=o.length;s>a;a++)!function(e){
h.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
if(_.isInMiniProgram)return!1;
gt.card_click_report({
scene:"0"
});
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")?location.href=t:y.invoke("profile",{
username:source_username,
scene:e.scene+""
});
}else{
if(m("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
b.profileReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
}),profileReportInfo){
var o=String(profileReportInfo).split("_");
3==o.length&&l({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+o[1]+"&tid="+o[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
_.isInMiniProgram||(1==isprofileblock?y.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect");
}):y.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene+""
},function(t){
window.__addIdKeyReport("28307","1"),m("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
}));
}
return!1;
}),_.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[a]);
}(),function(){
function e(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function t(){
var t=e();
return t?document[t]:!1;
}
function o(){
if(t())for(var e=0;e<window.parent.originalVideoAdFrames.length;e++)window.parent.originalVideoAdFrames[e].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");else{
var o=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
o>=40&&y.invoke("currentMpInfo",{
userName:window.user_name,
brandName:K,
title:window.msg_title||"",
brandIcon:hd_head_img.replace(/\/0$/,"/132"),
itemShowType:window.item_show_type,
isPaySubscribe:window.isPaySubscribe,
topBarStyle:L?1:0,
topBarShowed:!0,
forbidForward:window.isPaySubscribe?1:0
},function(){}),window.originalVideoAdCurrentFrame&&window.originalVideoAdCurrentFrame.contentWindow.postMessage({
action:"playAd"
},"*");
}
}
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",o,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",o,!1):document.visibilityState&&document.addEventListener("visibilitychange",o,!1);
}();
try{
var _t=document.getElementById("js_author_name");
if(_t){
var ft="";
h.on(_t,"click",function(){
return c.hasClass(_t,"rich_media_meta_link")?window.is_temp_url?(window.weui.alert("???????????????????????????"),
!1):_t.getAttribute("data-rewardsn")?1!=_t.getAttribute("data-canreward")?!1:(ft="https://mp.weixin.qq.com/mp/author?action=show&author_id="+author_id+"&rewardsn="+_t.getAttribute("data-rewardsn")+"&timestamp="+_t.getAttribute("data-timestamp")+"&__biz="+window.biz+"&appmsgid="+window.appmsgid+"&idx="+window.idx+"&scene=142&rscene=129#wechat_redirect",
_.isInMiniProgram?!1:(-1!=navigator.userAgent.indexOf("MicroMessenger")&&(_.isIOS||_.isAndroid||_.isWp)?(window.__addIdKeyReport("110809","1"),
y.invoke("openUrlWithExtraWebview",{
url:ft,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=ft);
})):location.href=ft,!1)):!1:!1;
});
}
}catch($){}
var ht=e("appmsg/outer_link.js");
if(new ht({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(!e||0!=e.indexOf("http://mp.weixin.qq.com/")&&0!=e.indexOf("https://mp.weixin.qq.com/")){
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}else{
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}
return e;
}
}),!at){
var yt=e("appmsg/review_image.js"),vt=document.getElementById("js_cover"),bt=[];
vt&&bt.push(vt),new yt({
container:document.getElementById("js_content"),
is_https_res:is_https_res,
imgs:bt
});
}
e("appmsg/product.js");
var At=e("appmsg/page_pos.js");
At.init({
hasSpAd:!0,
disableScroll:window.isPaySubscribe&&!window.isPaid&&window.jump2pay
}),function(){
try{
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return;
var t=function(e){
var t=e.getAttribute("class");
if(t){
for(var o=t.split(/\s+/),i=[],n=0,r=o.length;r>n;++n){
var a=o[n];
if(a&&-1!=window.whiteList.indexOf(a))i.push(a);else for(var s=0,d=window.whiteListReg.length;d>s;s++)if(window.whiteListReg[s].test(a)){
i.push(a);
break;
}
}
e.setAttribute("class",i.join(" "));
}
};
e.querySelectorAll("*").forEach(function(e){
if(e&&e.tagName){
var o=e.tagName.toLowerCase();
"iframe"!==o?t(e):"video_ad_iframe"===e.getAttribute("class")&&e.setAttribute("class","");
}
});
}catch(o){
console.error(o);
}
}(),function(){
window.originalVideoAdFrames=[],window.originalVideoAdCurrentFrame=null,window.originalVideoAdFramesUnsetList=[],
window.addEventListener("message",function(e){
var t="",o=document.getElementsByTagName("iframe");
if(e.data&&"originalVideoAdNeedData"==e.data.action&&e.data.vid)if(window.originalVideoAdFramesAdData){
window.originalVideoAdFramesAdData&&window.originalVideoAdFramesAdData[e.data.vid]&&(t=window.originalVideoAdFramesAdData[e.data.vid]);
for(var i=0;i<o.length;i++)o[i].dataset&&o[i].dataset.mpvid==e.data.vid&&o[i].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:e.data.vid,
adData:t
},"*");
}else console.log(e.data.vid," has no ad data yet"),window.originalVideoAdFramesUnsetList.push(e.data.vid);
});
}(),window.fromWeixinCached||e("appmsg/iframe.js"),I.getAdData(window.reportVid),
e("appmsg/qqmusic.js"),e("appmsg/voice.js"),e("redpackage/redpacketcover.js"),window.__appmsgCgiData&&1==window.__appmsgCgiData.show_msg_voice&&e("appmsg/autoread.js"),
"1"==window.show_msg_voice&&(console.log("load voicemsg"),e("appmsg/voicemsg.js")),
!window.__appmsgCgiData||1!=window.__appmsgCgiData.wxa_product&&1!=window.__appmsgCgiData.wxa_cps||e("appmsg/weproduct.js"),
e("appmsg/weapp.js"),e("question_answer/appmsg.js"),e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js");
var It=e("appmsg/appmsg_copy_report.js");
new It({
biz:window.biz,
isPaySubscribe:window.isPaySubscribe,
container:document.getElementById("js_content"),
logid:18504,
baseData:["",window.biz,window.mid,window.idx,window.location.href,window.msg_title]
}),setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
h.tap(document.getElementById("copyright_logo"),function(){
var e="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
window.__second_open__?y.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}),g(),f(),h.tap(document.getElementById("js_hotspot_area"),function(e){
if(c.hasClass(e.target,"js_hotspot")){
var t=e.target.dataset.id;
if(!t)return;
t="https://search.weixin.qq.com/cgi-bin/searchweb/clientjump?scene=306&tag=mp_topic&topic_id="+t+"#wechat_redirect",
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(_.isIOS||_.isAndroid||_.isWp)?y.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}):location.href=t;
}
}),e("appmsg/report_and_source.js"),function(){
if(at){
document.title=window.msg_title.htmlDecode(),c.addClass(et,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var n=document.getElementById("js_profile_qrcode"),r=document.getElementById("js_profile_arrow_wrp"),a=document.getElementById("profileBt");
if(n&&a&&r){
var s=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return n.style.display="block",r.style.left=a.offsetWidth/2-8+"px",!1;
};
h.on(a,"click",s),h.on(n,"click",s),h.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=a&&t!=n&&(n.style.display="none");
});
}
}else{
var d=document.getElementById("js_report_article3");
!!d&&(d.style.display="");
}
}(),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=document.getElementById("img-content");
if(e&&t&&t.getBoundingClientRect){
var o=t.getBoundingClientRect().height;
window.scrollTo(0,o);
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,i=t.length;i>o;++o)t[o].parentNode.removeChild(t[o]);
if(gt.card_pv_report(),Math.random()<.01)try{
var n="https://js.aq.qq.com/js/aq_common.js",r=document.createElement("script");
r.src=n;
var a=document.getElementsByTagName("head")[0];
a.appendChild(r);
}catch(s){}
var d=document.getElementById("js_close_temp");
h.on(d,"click",function(){
d.parentNode.parentNode.removeChild(d.parentNode),c.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(p.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=function(){
return 90===Math.abs(window.orientation)?1:2;
};
e.push({
ori:o(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var i=(new Date).getHours();
h.on(window,t,function(){
var t=e.length-2,n=o();
if(P=+new Date,t>=0){
{
var r=e[t];
r.ori;
}
e[e.length-1].istouchmove||(i>=11&&17>=i&&window.__report(63),setTimeout(function(){
window.scrollTo(0,r.scroll);
},100));
}
e.push({
ori:n,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
});
var n=document.getElementById("js_hotspot_area"),r=0===n.children.length;
h.on(window,"scroll",function(){
var t=e.length-1,i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=+new Date;
if(-1!=P){
if(console.log("[??????????????????]",a-P),500>a-P)return void(P=-1);
}else P=-1;
if(e[t].ori==o()&&(e[t].scroll=i,e[t].istouchmove=!0,!r)){
var s=x.getInnerHeight()+i;
n.offsetTop<s&&(r=!0,B.setSum(59977,15,1));
}
});
}
}(),m("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",U,!1):window.attachEvent&&window.attachEvent("onload",U),
e(window.moon&&moon.clearSample?"appmsg/fereport_without_localstorage.js":"appmsg/fereport.js"),
function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
B.setSum(28307,18,1),_.isIOS&&B.setSum(28307,19,1),_.isAndroid&&B.setSum(28307,20,1);
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
B.setLogs({
id:28307,
key:49,
value:1,
lc:1,
log0:"[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href)
});
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var i=t.querySelectorAll("*["+o+"]");
if(i&&i.length>0){
e();
for(var n=0;n<i.length;++n)i[n]&&i[n].removeAttribute&&i[n].removeAttribute(o);
}
return;
}
var r=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
r&&r.length)for(var n=0;n<r.length;++n)filterContenteditable(r[n]);
}catch(a){}
},i=document.getElementById("js_content"),n=0;n<t.length;++n)t[n]&&o(i,t[n]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",i=(new Date).getHours();
if(!(11>i||i>16||Math.random()<.99)){
var n=new Image;
n.onload=function(){
var o=n.naturalWidth||n.width,i=n.naturalHeight||n.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},n.src=o;
var r=new Image;
r.onload=function(){
var o=r.naturalWidth||r.width,i=r.naturalHeight||r.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307",126),window.__addIdKeyReport("28307",127);
},r.src="https://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0";
}
},3e3);
var jt=Math.random();
if(2e-4>jt)try{
for(var xt=document.getElementsByTagName("img"),St=window.screen.height,Et=window.screen.width,kt=0,Pt=window.devicePixelRatio,kt="",G=0,zt=xt.length;zt>G;G++){
var Bt=xt[G].getAttribute("data-src");
if(Bt){
var Ot=xt[G].getBoundingClientRect();
kt+=Et+"|"+St+"|"+Ot.left.toFixed(2)+"|"+(Et-Ot.right).toFixed(2)+"|"+Ot.width.toFixed(2)+"|"+Pt.toFixed(2)+"|"+Bt+";";
}
}
l({
url:"/mp/wapreport?action=img_display_report",
data:{
key:kt
},
type:"POST",
dataType:"json",
async:!0
});
}catch($){}
setTimeout(function(){
z&&z.postPageHeightMessage&&z.postPageHeightMessage("updatePageHeight");
},2e3),_.isIOS&&location.href.match(/fontScale=\d+/)&&p.os.ipad&&p.os.getNumVersion()>=13&&setTimeout(function(){
if(!window.ipados13_font_scale){
var e=location.href.match(/fontScale=(\d+)/);
window.ipados13_font_scale=parseFloat(e[1]),i(document.getElementsByTagName("html").item(0),window.ipados13_font_scale/100);
}
},500);
}
e("biz_wap/ui/weui.js");
var i=e("appmsg/set_font_size.js").setFontSize,n=e("biz_common/tmpl.js"),r=e("cps/tpl/banner_tpl.html.js"),a=e("cps/tpl/card_tpl.html.js"),s=e("cps/tpl/list_tpl.html.js");
e("biz_common/utils/string/html.js");
var d=e("appmsg/weapp_common.js"),p=e("biz_wap/utils/device.js"),c=e("biz_common/dom/class.js"),m=e("appmsg/log.js"),l=e("biz_wap/utils/ajax.js"),w=e("biz_common/dom/attr.js"),u=w.setProperty,g=e("appmsg/max_age.js"),_=e("biz_wap/utils/mmversion.js"),f=e("appmsg/test.js"),h=e("biz_common/dom/event.js"),y=e("biz_wap/jsapi/core.js"),v=e("biz_common/moment.js"),b=e("appmsg/appmsg_report.js"),A=e("biz_common/utils/url/parse.js"),I=e("a/mpAdAsync.js"),j=e("biz_wap/utils/wapsdk.js"),x=e("common/utils.js"),S=(e("complain/localstorage.js"),
e("appmsg/popup_report.js")),E=e("appmsg/pay_report_utils.js"),k=e("appmsg/loading.js"),P=-1,z=e("appmsg/finance_communicate.js"),B=e("biz_common/utils/monitor.js"),O=e("common/comm_report.js"),T=e("appmsg/getForbidConfig.js");
window.new_appmsg&&(e("page/appmsg_new/combo.css"),e("page/appmsg_new/not_in_mm.css")),
e("appmsg/finance_communicate.js");
var C=window.user_uin||0,R=Math.floor(C/100)%1e3,q=0!==C&&1001>R,N=!0,M="",D=5,L=_.isIOS&&_.gtVersion("7.0.10",!0)||_.isAndroid&&_.gtVersion("7.0.12",!0),K=L&&""===window.nickname&&""===window.nickname_new?"??????????????????":window.title;
if(window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.info("[????????????] ?????????:",window.biz,window.mid,window.idx),
console.info("[????????????] ????????????: ????????????",p.os.android,"??????IOS",p.os.ios,"??????????????????",window.__second_open__,"????????????",p.os.version,"??????uin",window.user_uin),
m("[Appmsg] start run index.js init"),function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var i=e+"_"+t;
o=o||1,window.logs.idkeys[i]||(window.logs.idkeys[i]={
val:0
}),window.logs.idkeys[i].val+=o;
},i=e>=11&&17>=e&&Math.random()<1,n=function(e,o){
i&&t(e,o);
};
window.__report=t,window.__commonVideoReport=n,window.__addIdKeyReport=o;
}(),o(),!window.__second_open__){
var V=window.performance||window.msPerformance||window.webkitPerformance;
if(!V||!V.timing)return;
var H=window.location.protocol;
j.saveSpeeds({
uin:uin,
pid:"https:"==H?462:417,
speeds:{
sid:34,
time:Date.now()-window.performance.timing.navigationStart
}
}),j.send(),T({
isPaySubscribe:window.isPaySubscribe
});
}
!function(){
(_.isIOS||_.isAndroid)&&!function(){
j.jsmonitor({
id:125350,
key:window.__second_open__?_.isIOS?0:2:_.isIOS?1:3
});
var e=!1;
h.on(window,"beforeunload",function(){
e||(e=!0,j.jsmonitor({
id:125350,
key:window.__second_open__?_.isIOS?4:6:_.isIOS?5:7
}));
}),h.on(window,"unload",function(){
e||(e=!0,j.jsmonitor({
id:125350,
key:window.__second_open__?_.isIOS?8:10:_.isIOS?9:11
}));
});
}();
}();
var W=!1,F=!1;
});