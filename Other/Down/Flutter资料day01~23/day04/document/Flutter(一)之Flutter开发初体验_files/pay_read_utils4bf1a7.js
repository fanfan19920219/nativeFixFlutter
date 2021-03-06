define("new_video/ctl.js",["common/comm_report.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
var i,n=e("common/comm_report.js");
if(parent==window)i=window;else try{
{
parent.window.location.href;
}
i=parent.window;
}catch(r){
i=window;
}
var t=i.user_uin,a=Math.floor(i.user_uin/100)%20;
t||(a=-1);
var o=function(){
return a>=0;
};
i.__webviewid||(i.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var e=i.mid,n=i.idx,r="";
r=e&&n?e+"_"+n:"";
var a=i.__webviewid,o=[t,r,a].join("_");
return o;
},s=function(i){
if(20>a)try{
var n=i.vid||"",r={};
r.__biz=parent.window.biz||"",r.vid=n,r.clienttime=+new Date;
var t=parent.window.mid,s=parent.window.idx,p="";
p=t&&s?t+"_"+s:n,r.type="undefined"!=typeof i.type?i.type:t&&s?1:2,r.id=p,r.hit_bizuin=i.hit_bizuin||"",
r.hit_vid=i.hit_vid||"",r.webviewid=d(),r.step=i.step||0,r.orderid=i.orderid||0,
r.ad_source=i.ad_source||0,r.traceid=i.traceid||0,r.ext1=i.ext1||"",r.ext2=i.ext2||"",
r.r=Math.random(),r.devicetype=parent.window.devicetype,r.version=parent.window.clientversion,
r.is_gray=o()?1:0,r.mid=t||"",r.idx=s||"",r.url=parent.window.location.href,r.screen_num=i.screen_num||0,
r.screen_height=i.screen_height||0,r.ori_status=i.ori_status||3,r.fromid=i.fromid||0,
r.sessionid=window.sessionid||"",r.appmsg_scene=window.source||(window.cgiData?window.cgiData.scene:0)||0,
!r.appmsg_scene&&r.fromid?r.appmsg_scene=r.fromid:!r.fromid&&r.appmsg_scene&&(r.fromid=r.appmsg_scene),
r.total_range=i.total_range||0,r.current_range=i.current_range||0,r.duration=i.duration||0;
var c=e("biz_wap/utils/ajax.js");
c({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:r
});
}catch(w){}
},p=function(e){
try{
var i=e.vid||"",r={};
r.BizUin=parent.window.biz||"",r.Vid=i,r.ClientTime=+new Date;
var t=parent.window.mid,a=parent.window.idx,s="";
s=t&&a?t+"_"+a:i,r.Type="undefined"!=typeof e.type?e.type:t&&a?1:2,r.Id=s,r.HitBizUin=parseInt(e.hit_bizuin)||0,
r.HitVid=e.hit_vid||"",r.WebViewId=d(),r.Step=parseInt(e.step,10)||0,r.OrderId=(e.orderid||"").toString(),
r.AdSource=parseInt(e.ad_source,10)||0,r.TraceId=(e.traceid||"").toString(),r.Ext1=(e.ext1||"").toString(),
r.Ext2=(e.ext2||"").toString(),r.r=Math.random(),r.DeviceType=parent.window.devicetype,
r.ClientVersion=parseInt(parent.window.clientversion),r.IsGray=o()?1:0,r.msgid=parseInt(t,10)||0,
r.itemidx=parseInt(a,10)||0,r.Url=parent.window.location.href,r.ScreenNum=parseInt(e.screen_num,10)||0,
r.ScreenHeight=parseInt(e.screen_height,10)||0,r.OrStatus=parseInt(e.ori_status,10)||3,
r.Fromid=parseInt(e.fromid,10)||0,r.SessionId=(window.sessionid||"").toString(),
r.AppmsgScene=parseInt(window.source||(window.cgiData?window.cgiData.scene:0),10)||0,
!r.AppmsgScene&&r.Fromid?r.AppmsgScene=r.Fromid:!r.Fromid&&r.AppmsgScene&&(r.Fromid=r.AppmsgScene),
r.AppmsgScene=parseInt(r.AppmsgScene,10)||0,r.Fromid=parseInt(r.Fromid,10)||0,r.TotalRange=parseInt(e.total_range,10)||0,
r.CurrentRange=parseInt(e.current_range,10)||0,r.Duration=parseInt(e.duration,10)||0,
r.RemindTrafficSize=parseInt(e.remind_traffic_size,10)||0,r.TrafficReminderType=parseInt(e.traffic_reminder_type,10)||0,
n.report(12710,r);
}catch(p){}
};
return{
report:s,
getWebviewid:d,
showAd:o,
commReport:p
};
});define("biz_wap/utils/hand_up_state.js",["biz_common/dom/event.js"],function(n){
"use strict";
function e(){
if("hidden"in document)return"hidden";
for(var n=["webkit","moz","ms","o"],e=0;e<n.length;e++)return n[e]+"Hidden"in document,
n[e]+"Hidden";
return null;
}
function i(){
var n=e();
return n?document[n]:!1;
}
function t(){
return r;
}
var d=n("biz_common/dom/event.js"),o=e(),r=0,u=0;
if(o){
var m=o.replace(/[H|h]idden/,"")+"visibilitychange";
d.on(document,m,function(){
i()?u=(new Date).getTime():r+=(new Date).getTime()-u;
},!1);
}
return{
getHandUpTime:t,
isHidden:i
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});define("biz_common/utils/http.js",[],function(){
"use strict";
function t(){
var t=document.getElementsByTagName("html");
if(t&&1==!!t.length){
t=t[0].innerHTML;
var e=t.replace(/[\x00-\xff]/g,""),n=t.replace(/[^\x00-\xff]/g,"");
return 1*n.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
return 0;
}
return{
htmlSize:t()
};
});define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});define("appmsg/open_url_with_webview.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),n=-1!=navigator.userAgent.indexOf("WindowsWechat"),i=function(e,i){
if(n)return location.href=e,!1;
i=i||{};
var o=i.sample||0;
o*=1e3;
var t=window.user_uin||0,s=0!==t&&Math.floor(t/100)%1e3<o;
return s?void r.invoke("openUrlWithExtraWebview",{
url:e,
openType:i.openType||1,
scene:i.scene||"",
bizUsername:i.user_name||""
},function(e){
e&&"openUrlWithExtraWebview:ok"===e.err_msg?i.resolve&&i.resolve():i.reject&&i.reject();
}):void(i.reject&&i.reject());
};
return i;
});define("appmsg/more_read.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","appmsg/more_read_tpl.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","biz_common/utils/monitor.js","common/utils.js"],function(n){
"use strict";
function i(n){
for(var i=c.getInnerHeight(),e=document.documentElement.clientWidth||window.innerWidth,t=document.body.scrollHeight||document.body.offsetHeight,s=document.body.scrollTop||document.documentElement.scrollTop,m=[],d=0;d<l.length;d++){
var w=[l[d].bizuin||window.biz||"",l[d].mid||"",l[d].idx||""].join("_");
m.push(w);
}
m=m.join("#");
var h=r[n.index].getBoundingClientRect(),p="fans_read_cnt="+l[n.index].fans_read_cnt,g={
act:n.action||0,
bizuin:window.biz||"",
msgid:window.mid||"",
idx:window.idx||"",
scene:window.source||"",
sub_scene:window.subscene||"",
get_a8_key_scene:window.ascene||"",
screen_height:i,
screen_width:e,
screen_num:Math.ceil(t/i),
action_screen_num:Math.ceil((h.top+h.height+s)/i),
start_time_ms:_,
action_time_ms:Date.now(),
more_msg:m,
a_bizuin:l[n.index].bizuin||window.biz||"",
a_msgid:l[n.index].mid||"",
a_idx:l[n.index].idx||"",
rank:n.index+1,
tip:p,
session_id:u
};
o({
url:"/mp/appmsgreport?action=more_read",
type:"POST",
data:g,
timeout:2e3,
async:!1,
mayAbort:!0
});
var b=1===n.action?4:5;
a.setSum(110809,b,1);
}
function e(){
if(l){
for(var n=0,t=c.getInnerHeight(),o=0;o<r.length;o++)if(r[o].dataset.show)n++;else{
var s=r[o].getBoundingClientRect();
s.top+s.height<t&&(r[o].dataset.show=1,i({
action:1,
index:o
}));
}
n>=r.length&&d.off(window,"scroll",e);
}
}
n("biz_common/utils/string/html.js");
var t=n("biz_common/tmpl.js"),o=n("biz_wap/utils/ajax.js"),s=n("appmsg/more_read_tpl.html.js"),m=n("biz_wap/utils/openUrl.js"),d=n("biz_common/dom/event.js"),a=n("biz_common/utils/monitor.js"),c=n("common/utils.js"),l=null,r=null,_=Date.now(),u=""+_+"_"+Math.random().toString(36).substring(2);
return d.on(window,"scroll",e),function(n,e){
l=e,n.innerHTML=t.tmpl(s,{
list:l
}),r=n.getElementsByClassName("more_read_link");
for(var o=0;o<r.length;o++)d.on(r[o],"click",function(n){
return function(){
window.__second_open__?m.openUrlWithExtraWebview(l[n].link.htmlDecode()):window.location.href=l[n].link.htmlDecode(),
i({
action:2,
index:n
});
};
}(o));
n.style.display="";
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);
}
return e;
};
define("appmsg/comment.js",["biz_common/utils/string/html.js","biz_common/dom/class.js","appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","appmsg/comment_report.js","biz_wap/utils/device.js","appmsg/retry_ajax.js","biz_common/dom/offset.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","common/utils.js","appmsg/emotion/selection.js","appmsg/i18n.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/dom.js","pages/utils.js","biz_wap/utils/mmversion.js","common/comm_report.js","biz_wap/utils/position.js","biz_common/utils/monitor.js","appmsg/emotion/emotion_pc.js","appmsg/emotion/emotion.js","appmsg/comment_tpl.html.js","appmsg/comment_pc_tpl.html.js","appmsg/friend_comment_tpl.html.js"],function(e,t,n,o){
"use strict";
function i(e){
var t=document.getElementById(e);
t.parentNode.removeChild(t);
}
function m(e,t){
e&&(e.style.display=t||"block");
}
function d(e){
e&&(e.style.display="none");
}
function s(){
Dt.mylist.children.length?(m(Dt.mylist.parentNode),Vt||G.removeClass(document.body,Jt)):(d(Dt.mylist.parentNode),
Vt||G.addClass(document.body,Jt));
}
function a(e){
Dt.el_alertContent.innerHTML=e,Dt.el_alertPanel.style.display="";
}
function c(){
Vt?(G.removeClass(document.getElementById("js_success_panel_pc"),"weui-transition_opacity-hide"),
setTimeout(function(){
G.addClass(document.getElementById("js_success_panel_pc"),"weui-transition_opacity-hide");
},750)):(setTimeout(function(){
m(Dt.toast);
},750),setTimeout(function(){
d(Dt.toast);
},1500));
}
function l(e){
return e.toString().replace(/^\s+|\s+$/g,"");
}
function r(e,t){
if(!(Math.random()<.999)){
var n=9;
"https:"===window.location.protocol&&(n=18),V.saveSpeeds({
uin:window.uin,
pid:n,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),V.send();
}
}
function _(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];
if("undefined"!=typeof e)if(jt.idkey)ut.setSum(jt.idkey,e,1);else{
var n=new Image,o=Math.random();
n.src="/mp/jsreport?key="+e+"&content="+t+"&r="+o;
}
}
function p(){
It||(It=!0,new Q({
comment_id:Et,
appmsgid:window.appmsgid,
idx:window.idx,
item_show_type:window.item_show_type||0,
biz:window.biz
}));
}
function u(){
try{
var e=Dt.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<et.getInnerHeight()&&Pt&&t&&(ut.setLogs({
id:28307,
key:45,
value:1,
lc:1,
log0:""
}),ot.off(window,"scroll",u));
}catch(n){
console.error(n);
}
}
function g(){
var e=Dt.showAll,t=et.getScrollTop(),n=pt.getY(e,"js_article");
return 0===e.clientHeight?!1:(e.clientHeight+n>=t+e.clientHeight/2&&e.clientHeight+n<=t+e.clientHeight/2+et.getInnerHeight()&&(_t.report(18832,_extends({
Actiontype:1,
Type:3,
Bizuin:0,
Msgid:0,
Itemidx:0,
Sendtimestamp:0,
Pos:0
},ft)),ut.setSum(110809,26,1),ot.off(window,"scroll",g)),!0);
}
function f(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var o=t/1e3-e,i=n/1e3-e,m=new Date(n).getFullYear(),d=new Date(1e3*e);
return 3600>o?Math.ceil(o/60)+"?????????":86400>i?Math.floor(o/60/60)+"?????????":172800>i?"??????":604800>i?Math.floor(i/24/60/60)+"??????":d.getFullYear()===m?d.getMonth()+1+"???"+d.getDate()+"???":d.getFullYear()+"???"+(d.getMonth()+1)+"???"+d.getDate()+"???";
}
function w(e){
ct.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=tn.encode(e.innerHTML);
});
}
function y(e,t,n){
var o=void 0,i=void 0,m="",d="",s=document.createElement("div");
"elected"===n?d=0:"friend"===n&&(d=1),Ft={};
for(var a=0;a<e.length;a++){
if(i=e[a],i.time=f(i.create_time),i.status="",i.logo_url=i.logo_url||nn,i.logo_url=-1!==i.logo_url.indexOf("wx.qlogo.cn")?i.logo_url.replace(/\/132$/,"/96"):i.logo_url,
i.content=i.content.htmlDecodeLite().htmlEncodeLite(),i.nick_name=i.nick_name.htmlDecodeLite().htmlEncodeLite(),
i.like_num_format=parseInt(i.like_num,10)>=1e4?(i.like_num/1e4).toFixed(1)+"???":i.like_num,
"en"===window.LANG&&(i.like_num_format=nt.dealLikeReadShow_en(i.like_num)),i.is_from_friend="friend"===n?0:i.is_from_friend||0,
i.is_from_me="mine"===n?1:i.is_from_me||0,i.reply=i.reply||{
reply_list:[]
},i.is_mine=!n,i.is_elected="elected"===n||"friend"===n?1:i.is_elected,i.is_top="friend"===n?0:i.is_top,
i.report_elected=i.is_elected||0,i.report_friend=i.is_from_friend||0,i.scene=d,i.reply.reply_list.length>0){
var c=i.reply.reply_list[0];
c.time=f(c.create_time),c.content=(c.content||"").htmlEncodeLite(),c.reply_like_status=c.reply_like_status||0,
c.reply_like_num=c.reply_like_num||0,c.reply_like_num_format=parseInt(c.reply_like_num,10)>=1e4?(c.reply_like_num/1e4).toFixed(1)+"???":c.reply_like_num,
"en"===window.LANG&&(c.reply_like_num_format=nt.dealLikeReadShow_en(c.reply_like_num));
}
i.new_appmsg=window.new_appmsg,m+=mt.tmpl(Y,i);
try{
var l=i.nick_name+i.content,r=!1,p=jt.repeatContentID;
Ft[l]&&(r=!0,p=jt.repeatContent),zt.indexOf(i.content_id)>-1&&(r=!0,p=jt.repeatContentID),
zt.push(i.content_id),Ft[l]=!0,r&&_(p,encodeURIComponent(JSON.stringify({
comment_id:Et,
content_id:i.content_id,
offset:Tt,
length:e.length,
url:Yt
})));
}catch(u){
console.error(u);
}
}
for(s.innerHTML=m,w(s);s.children.item(0);)o=s.children.item(0),t.appendChild(o);
}
function h(e){
var t=void 0,n=void 0,o=Date.now(),i=e.resp,s=e.loadTime,a=e.forceRefresh,c=document.createDocumentFragment(),l=document.createDocumentFragment();
if(Bt=i.only_fans_can_comment,_(jt.handleList,encodeURIComponent(JSON.stringify({
comment_id:Et,
offset:Tt,
url:Yt
}))),1!==i.enabled?(Zt&&(Zt.style.display="none"),$t&&d($t),i.elected_comment=[],
i.friend_comment=[],i.elected_comment_total_cnt=0,i.friend_comment_total_cnt=0):(Zt&&(Zt.style.display="block"),
$t&&m($t)),0===Tt){
if(Mt=i.logo_url,Rt=i.nick_name,a&&(zt=[]),t=i.elected_comment,t&&t.length){
if(y(t,c,"elected"),a&&(Dt.list.innerHTML=""),Dt.list.appendChild(c),m(Dt.main),
qt&&0===Wt?(document.getElementById("js_cmt_nofans1").innerHTML="?????????????????????3??????????????????",
m(document.getElementById("js_cmt_nofans1"),"block")):Bt&&0===i.is_fans?(document.getElementById("js_cmt_nofans1").innerHTML="???????????????????????????????????????",
m(document.getElementById("js_cmt_nofans1"),"block")):gt&&(Vt?(m(Dt.commentPC),m(Dt.inputPC)):m(Dt.addCmtBtn1)),
i.elected_comment_total_cnt<=10&&(m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa"))),!kt&&"5"===window.item_show_type){
var u=Date.now()-window.logs.pagetime.page_begin;
kt=!0,Math.random()<.1&&(V.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:27,
time:u
}]
}),V.send());
}
}else d(Dt.main),qt&&0===Wt?(document.getElementById("js_cmt_nofans2_inner").innerHTML="?????????????????????3??????????????????",
m(document.getElementById("js_cmt_nofans2"),"block")):Bt&&0===i.is_fans?(document.getElementById("js_cmt_nofans2_inner").innerHTML="???????????????????????????????????????",
m(document.getElementById("js_cmt_nofans2"),"block")):gt&&(Vt?(m(Dt.commentPC),m(Dt.inputPC)):m(Dt.addCmtBtn2));
n=i.friend_comment,y(n,l,"friend"),n&&0===n.length&&d($t),a&&(Dt.fdlist.innerHTML=""),
Dt.fdlist&&Dt.fdlist.appendChild(l),n&&n.length?(m(Dt.fdmain),(!Bt||Bt&&1===i.is_fans)&&(Vt||(d(Dt.addCmtBtn1),
d(Dt.addCmtBtn2),gt&&m(Dt.addCmtBtn3)))):d(Dt.fdmain);
var g=document.getElementById("js_cmt_area");
location.href.indexOf("scrolltodown")>-1&&g&&g.offsetTop&&window.scrollTo(0,g.offsetTop-25);
}else t=i.elected_comment,t&&t.length&&(y(t,c,"elected"),Dt.list.appendChild(c));
0===i.elected_comment_total_cnt?(Tt=-1,d(document.getElementById("js_cmt_loading")),
d(document.getElementById("js_cmt_statement")),d(document.getElementById("js_cmt_qa"))):Tt+Gt>=i.elected_comment_total_cnt?(Tt=-1,
d(document.getElementById("js_cmt_loading")),m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa"))):Tt+=i.elected_comment.length;
var f=5;
if(window.user_uin%2===0&&(f=8),t.length>f&&window.has_related_article){
var w=0;
m(Dt.showAll),d(document.getElementById("js_cmt_statement"));
for(var h=Dt.list.querySelectorAll("li.js_comment_item"),j=0;f>j;j++){
var C=window.getComputedStyle(h[j]);
w+=h[j].getBoundingClientRect().height+parseFloat(C.paddingTop)+parseFloat(C.paddingBottom)+parseFloat(C.borderTopWidth)+parseFloat(C.borderBottomWidth)+parseFloat(C.marginTop)+parseFloat(C.marginBottom);
}
Dt.listContainer.style.height=w+"px",Dt.showAllWording.innerText="????????????%s?????????".replace("%s",t.length-f),
ut.setSum(110809,25,1);
}
p(),lt.setTwoTabHeight("js_comment_content"),s&&r(s,Date.now()-o);
}
function j(e){
if(Et=window.comment_id,0!==Number(Et)){
var t=e.forceRefresh,n=e.cb;
t=t===!0,t&&(Tt=0);
var o=et.getScrollTop(),i=document.documentElement.scrollHeight;
if(!(Pt||-1===Tt||Tt>0&&i-o-et.getInnerHeight()>500)){
if("number"==typeof bt&&0===bt&&!t)return void h({
resp:{
enabled:1,
elected_comment:[],
friend_comment:[],
elected_comment_total_cnt:0,
my_comment:[],
only_fans_can_comment:Bt,
is_fans:Ct,
logo_url:Mt,
nick_name:Rt
}
});
var s=$.join("/mp/appmsg_comment",{
action:"getcomment",
scene:jt.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Et,
offset:Tt,
limit:Gt,
send_time:window.send_time
},!0),a=+new Date;
Pt=!0,d(Dt.tips),m(Dt.loading);
try{
Lt++,t&&(Ht=[]),Lt>1&&!t&&_(jt.moreList,encodeURIComponent(s)),Ht.indexOf(s)>-1&&_(jt.repeatList,encodeURIComponent(s)),
Ht.push(s);
}catch(c){
console.error(c);
}
en&&console.info("[????????????] ????????????????????????:",s),st("[Appmsg comment] start get comment data, url:"+s),
it({
url:s,
dataType:"json",
success:function(e){
var o=e.base_resp&&e.base_resp.ret;
0===o?n&&n({
resp:e,
forceRefresh:t,
loadTime:Date.now()-a
}):_(jt.errList,"type:resperr;url:"+encodeURIComponent(s)+";ret="+o),st("[Appmsg comment] get comment success");
},
error:function(){
_(jt.errList,"type:ajaxerr;url:"+encodeURIComponent(s)),st("[Appmsg comment] get comment ajax error");
},
complete:function(){
Pt=!1,d(Dt.loading),ot.off(window,"scroll",u);
}
});
}
}
}
function C(){
Dt.list.children.length?Dt.fdlist.children.length?(gt&&m(Dt.addCmtBtn3),d(Dt.addCmtBtn1),
d(Dt.addCmtBtn2),d(Dt.addCmtBtn4)):(gt&&m(Dt.addCmtBtn1),d(Dt.addCmtBtn2),d(Dt.addCmtBtn3),
d(Dt.addCmtBtn4)):Dt.fdlist.children.length?(gt&&m(Dt.addCmtBtn3),d(Dt.addCmtBtn4),
d(Dt.addCmtBtn1),d(Dt.addCmtBtn2)):(gt&&m(Dt.addCmtBtn2),d(Dt.addCmtBtn3),d(Dt.addCmtBtn1),
d(Dt.addCmtBtn4)),Vt&&(d(Dt.addCmtBtn1),d(Dt.addCmtBtn2),d(Dt.addCmtBtn3));
}
function b(e,t){
var n=document.createDocumentFragment();
c(),y([{
content:t,
nick_name:Rt,
create_time:Date.now()/1e3|0,
is_elected:0,
logo_url:Mt,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:e.my_id,
content_id:e.content_id
}],n,"mine"),Dt.mylist.insertBefore(n,Dt.mylist.firstChild),s(),Vt?(Dt.input.innerHTML="",
Dt.inputHolder.style.display=""):Dt.input.value="",C();
}
function v(){
ct.log("tag1");
var e=void 0,t=$.join("/mp/appmsg_comment",{
action:"addcomment",
scene:jt.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Et,
sn:window.sn
},!0);
if(e=Vt?l(At).replace(/<br\/>/g,"").replace(/\n/g,"")||"":l(Dt.input.value),ct.log("tag2"),
!G.hasClass(Dt.submit,"btn_disabled")&&Dt.submit.disabled!==!0){
if(ct.log("tag3"),e.length<1)return void a("??????????????????");
if(ct.log("tag4"),e.length>600)return void a("??????????????????600???");
Vt&&(e=At),ct.log("tag5"),Vt?Dt.submit.disabled=!0:G.addClass(Dt.submit,"btn_disabled"),
ct.log("tag6");
var n=document.getElementById("activity-name");
ct.log("tag7"),vt!==e&&(Ot=Date.now()),it({
url:t,
data:{
content:e,
title:n&&l(n.innerText),
head_img:Mt,
nickname:Rt,
client_id:Ot
},
type:"POST",
dataType:"json",
success:function(n){
switch(ct.log("tag8"),Vt||tn.hidePannel(),+n.ret){
case 0:
b(n,e);
break;

case-6:
a("??????????????????????????????????????????");
break;

case-7:
a("????????????????????????????????????????????????");
break;

case-10:
a("??????????????????600???");
break;

case-15:
a("???????????????");
break;

default:
vt=e,a("????????????????????????");
}
0!==Number(n.ret)&&_(jt.addCommentErr,"type:resperr;url:"+encodeURIComponent(t)+";ret="+n.ret);
},
error:function(e){
ct.log("shit;"+e.status+";"+e.statusText),_(jt.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(t));
},
complete:function(){
""!==Dt.input.value&&G.removeClass(Dt.submit,"btn_disabled");
}
});
}
}
function I(e){
return e.filter(function(e){
return!e.is_elected&&1!==e.is_elected;
});
}
function B(){
var e=document.getElementById("js_mycmt_loading"),t=$.join("/mp/appmsg_comment",{
action:"getmycomment",
scene:jt.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Et
},!0);
s(),0===Nt&&(Nt=1,m(e),it({
url:t,
dataType:"json",
success:function(e){
var n=e.base_resp&&e.base_resp.ret;
if(0===n){
var o=e.my_comment,i=document.createDocumentFragment();
o&&o.length&&(Vt&&(m(Dt.myareaPC),m(Dt.mylist),o=I(o)),y(o,i,"mine"),Dt.mylist.appendChild(i)),
Nt=2;
}else Nt=0,_(jt.errComment,"type:resperr;url:"+encodeURIComponent(t)+";ret="+n);
},
error:function(){
Nt=0,_(jt.errComment,"type:ajaxerr;url:"+encodeURIComponent(t));
},
complete:function(){
d(e),s();
}
}));
}
function k(e){
xt=et.getScrollTop(),d(Dt.article),m(Dt.mine),Dt.deletePanel=document.getElementById("js_delete_panel_mobile"),
Dt.deleteConfirm=document.getElementById("js_delete_confirm_mobile"),Dt.deleteCancel=document.getElementById("js_delete_cancel_mobile"),
window.__second_open__&&J.os.ios&&m(Dt.fakebar),window.scrollTo(0,0),B(),e||ct.later(function(){
Dt.input.focus();
});
}
function E(){
"1"===$.getQuery("js_my_comment")&&k(!0);
}
function T(){
return rt.isWechat?J.os.ipad?!1:rt.isInMiniProgram?!1:rt.isIOS&&rt.gtVersion("7.0.8")?!0:rt.isAndroid&&rt.gtVersion("7.0.8")?!0:et.isNativePage()&&(rt.isIOS||rt.isAndroid)?!0:!1:!1;
}
function x(){
var e=document.getElementById("activity-name");
return T()?(K.invoke("handleMPPageAction",{
action:"writeComment",
title:e&&l(e.innerText),
comment_id:Et,
style:dn?"black":"white"
}),!0):!1;
}
function P(){
d(Dt.mine),m(Dt.article),Dt.deletePanel=document.getElementById("js_delete_panel"),
Dt.deleteConfirm=document.getElementById("js_delete_confirm"),Dt.deleteCancel=document.getElementById("js_delete_cancel"),
window.scrollTo(0,xt),Dt.input.blur(),G.removeClass(document.body,Qt),G.removeClass(document.body,Jt),
et.isNativePage()||mn(dn||Ut?"#232323":"#ffffff");
}
function M(e){
var t=G.hasClass(e,"praised"),n=e.querySelector(".praise_num"),o=parseInt(n.getAttribute("data-num")||0,10),i=n.getAttribute("data-like");
t===("1"===i)&&(t?o--:o++),"en"===window.LANG?n.innerHTML=nt.dealLikeReadShow_en(o):-1===n.innerHTML.indexOf("???")&&(n.innerHTML=o),
t?(G.removeClass(e,"praised"),e.dataset.status=0):(G.addClass(e,"praised"),e.dataset.status=1);
}
function S(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(G.hasClass(t,"js_comment_praise")&&(n=t),n){
for(var o=parseInt(n.dataset.status,10),i=0===o?1:0,m=n.dataset.contentId,d=n.dataset.scene,s=document.querySelectorAll('.js_comment_praise[data-content-id="'+m+'"]'),a=0;a<s.length;a++)M(s[a]);
X({
url:"/mp/appmsg_comment?action=likecomment",
type:"POST",
data:{
like:i,
appmsgid:window.appmsgid,
comment_id:Et,
content_id:m,
item_show_type:window.item_show_type||0,
scene:d
}
});
}
}
function L(e){
for(var t=e.delegatedTarget,n=parseInt(t.dataset.status,10),o=n?0:1,i=t.dataset.contentId,m=t.dataset.replyId,d=t.dataset.scene,s=document.querySelectorAll('.js_reply_praise[data-content-id="'+i+'"]'),a=0;a<s.length;a++)M(s[a]);
it({
url:"/mp/appmsg_comment?action=like_author_reply",
type:"post",
data:{
comment_id:Et,
content_id:i,
reply_id:m,
like:o,
scene:d,
item_show_type:window.item_show_type||0
}
});
}
function H(e,t){
e.parentNode.removeChild(e),G.addClass(Dt.deletePanel,"weui-transition_opacity-hide");
for(var n=document.querySelectorAll(".cid"+t),o=0;o<n.length;o++)n[o].parentNode.removeChild(n[o]);
Dt.list.children.length?Dt.fdlist.children.length||d(Dt.fdmain):(d(Dt.main),d(document.getElementById("js_cmt_statement")),
d(document.getElementById("js_cmt_qa")),Dt.fdlist.children.length||d(Dt.fdmain)),
s(),C();
}
function D(e){
var t=void 0,n=e.delegatedTarget,i=n.getAttribute("data-my-id"),m=$.join("/mp/appmsg_comment",{
action:"delete",
scene:jt.scene,
appmsgid:window.appmsgid,
my_id:i,
comment_id:Et
},!0);
G.removeClass(Dt.deletePanel,"weui-transition_opacity-hide"),ot.on(Dt.deleteConfirm,"click",function(){
t!==i&&(t=i,it({
url:m,
dataType:"json",
success:function(e){
var t=n;
if(0===e.ret){
for(;t&&(t.nodeType!==t.ELEMENT_NODE||"li"!==t.tagName.toLowerCase());)t=t.parentNode;
t&&H(t,i);
}else o("????????????????????????");
},
error:function(){
o("????????????????????????");
}
}));
}),ot.on(Dt.deleteCancel,"click",function(){
t!==i&&(t=i,G.addClass(Dt.deletePanel,"weui-transition_opacity-hide"));
});
}
function z(e){
e&&e.preventDefault(),P(),d(Dt.fakebar);
}
function A(e,t){
return x()?void _t.report(19048,_extends({
EventType:1,
IsFans:Ct,
CommentPageType:2
},ht)):(et.isNativePage()||(G.addClass(document.body,Qt),mn("5"===window.item_show_type||Ut?"#191919":"#ffffff")),
t?(en&&console.log("FakeHash on comment"),void k()):(e.preventDefault(),window.__second_open__&&J.os.ios?k():(en&&console.log("push comment"),
dt.push("comment")),void _t.report(19048,_extends({
EventType:1,
IsFans:Ct,
CommentPageType:1
},ht))));
}
function R(e){
window.scrollTo(0,window.scrollY+e.getBoundingClientRect().height);
}
function N(e){
return e.getBoundingClientRect().top+e.getBoundingClientRect().height>=et.getInnerHeight()?!0:!1;
}
function F(){
dt.on("comment",function(){
A(null,!0);
}),dt.on("article",function(){
en&&console.log("FakeHash on article"),P();
}),dt.on(function(e){
"comment"===e&&P();
});
}
function O(){
ot.on(Dt.input,"input",function(e){
if(Vt){
var t=Dt.input.innerHTML;
""===t||"<br>"===t?(Dt.inputHolder.style.display="",Dt.input.innerHTML=""):Dt.inputHolder.style.display="none";
}
var n=l(Dt.input.value||Dt.input.innerHTML);
n.length<1?G.addClass(Dt.submit,"btn_disabled"):G.removeClass(Dt.submit,"btn_disabled"),
J.os.ios&&e.data&&on.indexOf(e.data)>-1&&(St=!0);
}),ot.on(Dt.input,"click",function(){
J.os.ios&&St&&(Dt.input.blur(),Dt.input.focus(),St=!1);
}),ot.on(Dt.el_alertConfirm,"click",function(){
Dt.el_alertPanel.style.display="none";
}),Vt&&ot.on(Dt.input,"click",function(){
d(document.getElementById("js_emotion_panel_pc"));
}),ot.on(Dt.list,"click",".js_comment_praise",S),ot.on(Dt.mylist,"click",".js_comment_praise",S),
ot.on(Dt.fdlist,"click",".js_comment_praise",S),ot.on(Dt.list,"click",".js_reply_praise",L),
ot.on(Dt.fdlist,"click",".js_reply_praise",L),ot.on(Dt.list,"click",".js_del",D),
ot.on(Dt.mylist,"click",".js_del",D),ot.on(Dt.fdlist,"click",".js_del",D),et.listenMpPageAction(function(e){
"deleteComment"===e.action&&H(document.getElementById("cid"+e.personal_comment_id),e.personal_comment_id);
}),ot.on(Dt.list,"click",".js_del",function(e){
e.preventDefault();
}),ot.on(Dt.mylist,"click",".js_del",function(e){
e.preventDefault();
}),ot.on(Dt.fdlist,"click",".js_del",function(e){
e.preventDefault();
}),ot.on(Dt.submit,"click",v),ot.on(Dt.submit,"click",function(e){
e.preventDefault();
}),Dt.goback&&(ot.on(Dt.goback,"click",z),ot.on(Dt.goback,"click",z)),window.__second_open__&&J.os.ios&&!function(){
ot.on(Dt.input,"click",function(){
d(Dt.fakebar);
}),ot.on(Dt.input,"blur",function(){
"none"!==Dt.mine.style.display&&m(Dt.fakebar);
});
var e=null,t=null;
ot.on(window,"orientationchange",function(){
"none"!==Dt.fakebar.style.display&&(clearTimeout(e),e=setTimeout(function(){
window.innerWidth!==parseFloat(getComputedStyle(Dt.fakebar).width)&&(clearTimeout(t),
Dt.mine.style.height=et.getInnerHeight()+"px",window.scrollBy&&window.scrollBy(0,1),
t=setTimeout(function(){
window.scrollBy&&window.scrollBy(0,-1),Dt.mine.style.height="";
},100));
},50));
});
}(),ot.on(window,"scroll",u),window.hasRelatedArticleInfo&&ot.on(window,"scroll",g),
ot.on(document.getElementById("js_cmt_write1"),"click",function(e){
A(e);
}),ot.on(document.getElementById("js_cmt_write2"),"click",function(e){
A(e);
}),ot.on(document.getElementById("js_cmt_write3"),"click",function(e){
A(e);
}),ot.on(document.getElementById("js_cmt_write4"),"click",function(e){
A(e);
}),ot.on(Dt.inputPC,"click",function(){
d(Dt.inputPC),m(Dt.containerPC),N(Dt.containerPC)&&R(Dt.containerPC),Dt.input.focus();
}),ot.bindVisibilityChangeEvt(function(e){
e&&et.getScrollTop()<Z.getOffset(Dt.cmtContainer).offsetTop-et.getInnerHeight()&&j({
forceRefresh:!0,
cb:h
});
}),ot.on(Dt.showAllWording,"tap",function(e){
e.preventDefault(),d(Dt.showAll),m(document.getElementById("js_cmt_statement")),
Dt.listContainer.style.height=Dt.list.clientHeight+"px",_t.report(18832,_extends({
Actiontype:2,
Type:3,
Bizuin:0,
Msgid:0,
Itemidx:0,
Sendtimestamp:0,
Pos:0
},ft)),ut.setSum(110809,27,1);
});
}
function U(){
function e(){
var e=document.createElement("div"),t="";
e.innerHTML=Dt.input.innerHTML;
for(var n=e.childNodes.length-1;n>=0;n--){
var o=e.childNodes[n];
switch(o.nodeType){
case 1:
if("BR"!==o.nodeName.toUpperCase()){
var i=void 0,m=!1;
if(i="IMG"===o.nodeName.toUpperCase()?o:"",i||(i=o.textContent||o.innerText||"",
m=!0),i){
var d=m?document.createTextNode(i):i;
e.replaceChild(d,o);
}else e.removeChild(o);
}
break;

case 3:
break;

default:
e.removeChild(o);
}
}
return t=e.innerHTML;
}
function t(){
g=tt.getRange();
}
function n(){
if(g){
var e=tt.getSelection();
if(e.addRange)e.removeAllRanges(),e.addRange(g);else{
var t=tt.getRange();
t.setEndPoint&&(t.setEndPoint("EndToEnd",g),t.setEndPoint("StartToStart",g)),t.select();
}
}
}
function o(){
Dt.input.focus(),Dt.input.scrollTop=Dt.input.scrollHeight,n();
}
function i(){
var e=l(At).replace(/<br\/>/g,"").replace(/\n/g,"").length;
y.innerText=e,e>600?(w.style.display="",G.addClass(w,"comment_primary_counter_warn"),
Dt.submit.disabled=!0):1>e?(w.style.display="none",G.removeClass(w,"comment_primary_counter_warn"),
Dt.submit.disabled=!0):(w.style.display="none",G.removeClass(w,"comment_primary_counter_warn"),
Dt.submit.disabled=!1);
}
function s(e,t){
var n=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","??","&amp;","&"],o=["&","&amp;","??","&yen;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;","`","&#96;"],i=void 0;
i=t?o:n;
for(var m=0;m<i.length;m+=2)e=e.replace(new RegExp(i[m],"g"),i[m+1]);
return e;
}
function a(){
document.execCommand("AutoUrlDetect",!1,!1);
var t=e();
t=s(t),At=tn.textFilter(t),i();
}
function c(e){
o();
var n=tt.getRange();
if(n){
if(n.createContextualFragment){
e+='<img style="width:1px;height:1px;"></img>';
var i=n.createContextualFragment(e),m=i.lastChild,d=tt.getSelection();
n.deleteContents(),n.insertNode(i),n.setStartBefore(m),n.setEndAfter(m),d.removeAllRanges(),
d.addRange(n),document.execCommand("Delete",!1,null);
}else n.pasteHTML&&e&&(n.pasteHTML(e),n.select(),n.collapse&&n.collapse(!1));
t(),a();
}
}
function r(e){
var t=e.currentTarget,n=t.getAttribute("data-index"),o=f[n].name,i='<img src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"\n      class="icon_emotion_single '+o+'" alt="mo-'+f[n].title+'"></img>';
c(i),tn.emotionPanelMove();
}
function _(){
for(var e=Dt.input,t=void 0,n=e.childNodes.length-1;n>=0;n--){
var o=e.childNodes[n];
switch(o.nodeType){
case 1:
if("BR"!==o.nodeName.toUpperCase()){
var i=void 0,m=!1;
if(i="IMG"===o.nodeName.toUpperCase()?o:"",i||(i=o.textContent||o.innerText||"",
m=!0),i){
var d=m?document.createTextNode(i):i;
t||(t=d),e.replaceChild(d,o);
}else e.removeChild(o);
}
break;

case 3:
break;

default:
e.removeChild(o);
}
}
tt.setCursorToEnd(t);
}
function p(e,t){
for(;void 0!==e&&null!==e&&null!==e.tagName&&"BODY"!==e.tagName.toUpperCase();){
if(e===t)return!0;
e=e.parentNode;
}
return!1;
}
var u=void 0,g=tt.getRange(),f=tn.edata,w=document.getElementById("js_length_notice_pc"),y=document.getElementById("js_word_length_pc");
J.os.Mac&&(window.onblur=function(){
Dt.input&&"none"!==Dt.input.display&&""!==Dt.input.innerHTML&&Dt.input.blur();
}),ot.on(Dt.input,"keyup",function(){
t(),a();
}),ot.on(Dt.input,"keydown",function(e){
return 13===e.keyCode?(c("<br/>"),t(),!1):void 0;
}),ot.on(Dt.input,"mouseup",function(){
t(),a();
}),ot.on(Dt.input,"paste",function(){
u&&clearTimeout(u),u=setTimeout(function(){
return _(),t(),a(),!1;
},10);
}),ot.on(document,"click",function(e){
var t=e.srcElement||e.delegatedTarget,n=document.getElementById("js_emotion_panel_pc");
if(!p(t,Dt.addbtnPC)&&"none"!==Dt.containerPC.style.display){
var o=Dt.input.innerHTML;
""===l(o)&&(d(Dt.containerPC),m(Dt.inputPC),d(n));
}
p(t,n)||p(t,Dt.emotionSwitchPC)||"none"===n.style.display||d(n);
},!1),ct("li.js_emotion_item").on("click",r);
}
function q(t){
if(Bt=t.only_fans_can_comment,Rt=t.nick_name,Ct=t.is_fans,Mt=t.logo_url,bt=t.comment_count,
qt=t.only_fans_days_can_comment,Wt=t.is_fans_days,window._has_comment=!0,!Xt||0===Number(Et))return void(window._has_comment=!1);
if(Zt){
var n=e("appmsg/comment_tpl.html.js"),o=e("appmsg/comment_pc_tpl.html.js");
Zt.innerHTML=mt.tmpl(n,{
new_appmsg:window.new_appmsg
}),Kt.insertAdjacentHTML("afterbegin",mt.tmpl(o,{
new_appmsg:window.new_appmsg
}));
}
if($t){
var m=e("appmsg/friend_comment_tpl.html.js");
$t.innerHTML=mt.tmpl(m,{
new_appmsg:window.new_appmsg
});
}
var d=document.createElement("div");
d.innerHTML=mt.tmpl(at,{
new_appmsg:window.new_appmsg,
isIos:J.os.ios
}),document.body.appendChild(d),Vt?(i("js_cmt_mine"),document.getElementById("js_avatar_pc").src=Mt,
G.addClass(document.body,"pages_skin_pc")):i("js_cmt_addbtn_pc"),Dt={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
goback:document.getElementById("js_cmt_goback"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById(Vt?"js_cmt_mylist_pc":"js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading"),
fdmain:document.getElementById("js_friend_cmt_main"),
fdlist:document.getElementById("js_friend_cmt_list"),
fdlisthide:document.getElementById("js_friend_cmt_list_hide"),
morefdlist:document.getElementById("js_more_friend_cmt_area"),
morefd:document.getElementById("js_more_friend_cmt"),
fakebar:document.getElementById("js_fake_bar"),
showAll:document.getElementById("js_cmt_show_all"),
showAllWording:document.getElementById("js_cmt_show_all_wording"),
listContainer:document.getElementById("js_cmt_list_container"),
cmtContainer:document.getElementById("js_cmt_container"),
inputPC:document.getElementById("js_cmt_input_pc"),
containerPC:document.getElementById("js_cmt_container_pc"),
commentPC:document.getElementById("js_comment_pc"),
addbtnPC:document.getElementById("js_cmt_addbtn_pc"),
myareaPC:document.getElementById("js_cmt_myarea_pc"),
emotionSwitchPC:document.getElementById("js_emotion_wrp_pc"),
deletePanel:document.getElementById("js_delete_panel"),
deleteConfirm:document.getElementById("js_delete_confirm"),
deleteCancel:document.getElementById("js_delete_cancel"),
inputHolder:document.getElementById("js_cmt_input_holder"),
el_alertPanel:document.getElementById("js_alert_panel"),
el_alertContent:document.getElementById("js_alert_content"),
el_alertConfirm:document.getElementById("js_alert_confirm"),
addCmtBtn1:document.getElementById("js_cmt_addbtn1"),
addCmtBtn2:document.getElementById("js_cmt_addbtn2"),
addCmtBtn3:document.getElementById("js_cmt_addbtn3"),
addCmtBtn4:document.getElementById("js_cmt_addbtn4")
},window.__second_open__&&J.os.ios&&(Dt.mine.style.marginBottom=getComputedStyle(Dt.fakebar).height),
!t.notAutoGetComment&&j({
forceRefresh:!0,
cb:h
}),E(),Vt&&B(),tn.init(),O(),Vt&&U();
}
function W(){
F();
}
e("biz_common/utils/string/html.js");
var G=e("biz_common/dom/class.js"),Y=e("appmsg/cmt_tpl.html.js"),V=e("biz_common/utils/wxgspeedsdk.js"),Q=e("appmsg/comment_report.js"),J=e("biz_wap/utils/device.js"),X=e("appmsg/retry_ajax.js"),Z=e("biz_common/dom/offset.js"),$=e("biz_common/utils/url/parse.js"),K=e("biz_wap/jsapi/core.js"),et=e("common/utils.js"),tt=e("appmsg/emotion/selection.js"),nt=e("appmsg/i18n.js"),ot=e("biz_common/dom/event.js"),it=e("biz_wap/utils/ajax.js"),mt=e("biz_common/tmpl.js"),dt=e("biz_wap/utils/fakehash.js"),st=e("appmsg/log.js"),at=e("appmsg/my_comment_tpl.html.js"),ct=e("appmsg/emotion/dom.js"),lt=e("pages/utils.js"),rt=e("biz_wap/utils/mmversion.js"),_t=e("common/comm_report.js"),pt=e("biz_wap/utils/position.js"),ut=e("biz_common/utils/monitor.js"),gt=!window.isPaySubscribe||window.isPaySubscribe&&window.isPaid,ft={
Bizuin_from:window.biz,
Msgid_from:window.parseInt(window.mid,10)||0,
Itemidx_from:window.parseInt(window.idx,10)||0,
Scene:window.parseInt(window.source,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
Sessionid:window.sessionid||"",
Enterid:window.parseInt(window.enterid,10)||0,
Useruin:1*window.user_uin
},wt=0;
try{
wt=1*window.atob(window.biz);
}catch(yt){}
var ht={
BizUin:wt,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0
},jt={
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
},Ct=void 0,bt=void 0,vt=void 0,It=void 0,Bt=void 0,kt=void 0,Et=window.comment_id,Tt=0,xt=void 0,Pt=!1,Mt="",St=!1,Lt=0,Ht=[],Dt={},zt=[],At="",Rt="???",Nt=0,Ft={},Ot=Date.now(),Ut=!1,qt=void 0,Wt=void 0,Gt=100,Yt=location.href,Vt=J.os.pc,Qt="comment_editing",Jt="my_comment_empty_data",Xt=navigator.userAgent.indexOf("MicroMessenger")>-1,Zt=document.getElementById("js_cmt_area"),$t=document.getElementById("js_friend_cmt_area"),Kt=document.getElementById("js_cmt_container"),en=Yt.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1,tn=e(Vt?"appmsg/emotion/emotion_pc.js":"appmsg/emotion/emotion.js"),nn="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0",on=["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","[]","??????","{}","()","<>"],mn=function(e){
K.invoke("setNavigationBarColor",{
color:e
}),K.invoke("setBounceBackground",{
backgroundColor:e
});
},dn=window.isOldVideoPage,sn=window.matchMedia("(prefers-color-scheme: dark)"),an=function(e){
var t=e.matches;
Ut=t,et.isNativePage()||mn(G.hasClass(document.body,Qt)?dn||Ut?"#191919":"#ffffff":dn||Ut?"#232323":"#ffffff");
};
return sn.addListener(an),an(sn),window.pageCommentReportData&&window.pageCommentReportData.idkey&&(en&&console.log("init reportData"),
jt=window.pageCommentReportData),"undefined"!=typeof window.comment_id?Et=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(Et=window.cgiData.comment_id),
Xt||(Zt&&(Zt.style.display="none"),$t&&($t.style.display="none"),Et=0),en&&console.info("[????????????] ??????ID:",Et),
W(),{
initComment:q,
getCommentData:j,
renderComment:h
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/base64.js","biz_common/utils/monitor.js","appmsg/log.js","complain/tips.js","appmsg/retry_ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/utils.js","appmsg/loading.js","appmsg/i18n.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js"],function(require,exports,module,alert){
"use strict";
function qs(e){
return document.getElementById(e);
}
function showAppToast(e,i){
JSAPI.invoke("handleMPPageAction",{
action:"showToast",
wording:e||"",
status:i||"success"
});
}
function initLikeEvent(opt){
function show(e){
e.style.display="";
}
function hide(e){
e.style.display="none";
}
function vShow(e){
e.style.visibility="visible";
}
function vHide(e){
e.style.visibility="hidden";
}
function clear(e){
e.value="";
}
function showLoading(){
commonUtils.isNativePage()?showAppToast("?????????","loading"):Loading.show("?????????");
}
function hideLoading(){
commonUtils.isNativePage()?showAppToast("","dismissloading"):Loading.hide();
}
function showToast(e){
commonUtils.isNativePage()?showAppToast(e):(el_toastMsg.innerHTML=e,show(el_likeToast),
setTimeout(function(){
hide(el_likeToast);
},1e3));
}
function newAlert(e){
el_alertContent.innerHTML=e,el_alertPanel.style.display="";
}
function alert2(e){
"0"===window.item_show_type?newAlert(e):alert(e);
}
function failAlert(e){
return e&&e.length>maxLikeCommentWord?void alert2("?????????????????????%s???".replace("%s",maxLikeCommentWord)):void alert2("??????????????????????????????");
}
function isAppCommentAvailable(){
return mmversion.isWechat?Device.os.ipad?!1:mmversion.isInMiniProgram?!1:mmversion.isIOS&&mmversion.gtVersion("7.0.8")?!0:mmversion.isAndroid&&mmversion.gtVersion("7.0.8")?!0:commonUtils.isNativePage()&&(mmversion.isIOS||mmversion.isAndroid)?!0:!1:!1;
}
var scrollTop,el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom,showType=opt.showType,prompted=opt.prompted,haokanLock=!1,startY,jumpWowLock=!1,el_likeToast=qs("js_like_toast"),el_likeBtn=qs("js_like_btn"),el_toastMsg=qs("js_toast_msg"),el_likeEducate=qs("js_like_educate"),el_friend_like=qs("js_friend_like_area"),el_go_wow=qs("js_go_wow"),el_likeComment=qs("js_like_comment"),el_bcommentPanel2=qs("js_comment_panel"),el_likeCommentShare=qs("js_like_comment_share"),el_likeCommentText=qs("js_comment_text"),el_commentCancel=qs("js_comment_cancel"),el_commentConfirm=qs("js_comment_confirm"),el_commentErrorMsg=qs("js_like_comment_msg"),el_commentCurrentCount=qs("js_like_current_cnt"),el_commentArea=qs("js_comment_area"),el_wowClosePanel=qs("wow_close_inform"),el_wowCloseAck=qs("wow_close_ack"),el_alertPanel=qs("js_alert_panel"),el_alertContent=qs("js_alert_content"),el_alertConfirm=qs("js_alert_confirm");
if(el_like&&el_likeNum){
window.appmsg_like_type&&2===window.appmsg_like_type?monitor.setSum(114217,0,1):window.appmsg_like_type&&1===window.appmsg_like_type&&monitor.setSum(114217,1,1);
var like_report=function(){
log("[Appmsg] click like");
var e=el_like.getAttribute("like"),i=el_likeNum.innerHTML,o=parseInt(e)?parseInt(e):0,t=o?0:1,n=parseInt(i)?parseInt(i):0,s=opt.appmsgid||opt.mid,l=opt.itemidx||opt.idx;
if(o){
if(1!==appmsg_like_type)return void sendRecommendAjax(0);
Class.removeClass(el_like,opt.className),el_like.setAttribute("like",0),n>0&&"100000+"!==i&&(el_likeNum.innerHTML=n-1==0?"???":n-1);
}else if(1===appmsg_like_type)el_like.setAttribute("like",1),Class.addClass(el_like,opt.className),
"100000+"!==i&&(el_likeNum.innerHTML=n+1);else if(2===appmsg_like_type)return void initRecommendPanel();
RetryAjax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+t+"&f=json&appmsgid="+s+"&itemidx="+l,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
action_type:t?1:2,
device_type:window.devicetype
},
type:"POST"
});
},initRecommendPanel=function(){
sendRecommendAjax(1,"",1);
},isBeenUnvisible=function(e){
function i(){
return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
}
return e.offsetTop+el_likeComment.offsetHeight-i()>=commonUtils.getInnerHeight()?!0:!1;
},disableMove=function(){
document.addEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.addEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.addEventListener("touchmove",preventText,!1);
},enableMove=function(){
document.removeEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.removeEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.removeEventListener("touchmove",preventText,!1);
},preventMove=function(e){
var i=e.target;
"TEXTAREA"!==i.tagName&&"BUTTON"!==i.tagName&&(e.preventDefault(),e.stopPropagation());
},getTouchStart=function(e){
var i=e.targetTouches||[];
if(i.length>0){
var o=i[0]||{};
startY=o.clientY;
}
},preventText=function(e){
var i=!1,o=e.changedTouches,t=this.scrollTop,n=this.offsetHeight,s=this.scrollHeight;
if(o.length>0){
var l=o[0]||{},a=l.clientY;
i=a>startY&&0>=t?!1:startY>a&&t+n>=s?!1:!0,i||e.preventDefault();
}
},isShow=function(e){
return"none"===e.style.display||"hidden"===e.style.visibility?!1:""===e.style.display||"block"===e.style.display||"visible"===e.style.visibility?!0:void 0;
},validataComment=function(e,i){
var o=e.value.replace(/^\s+|\s+$/g,"");
sendRecommendAjax(1,o,i);
},showEducatePanel=function(e,i,o){
show(el_likeComment);
var t=window.source||window.cgiData&&window.cgiData.source||0;
return t&&(t=parseInt(t,10),94===t)?void(e&&5===e&&hide(el_likeComment)):void(i||(show(el_likeEducate),
o&&o>0&&(el_friend_like.innerHTML="%s??????????????????,".replace("%s",o),document.getElementById("js_friend_like_word").innerText="??????????????????-?????????????????????",
show(el_friend_like)),1===showType&&(hide(el_go_wow),hide(el_likeCommentShare)),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment),educateExpose()));
},setBtnLike=function(){
el_like.setAttribute("like",1),Class.addClass(el_likeBtn,opt.className),realLikeNum+=1;
var e=el_likeNum.innerHTML;
"10???+"!==e&&(el_likeNum.innerHTML=dealLikeReadShow(realLikeNum));
},setLike2Status=function(e,i,o){
var t="??????";
switch(showType){
case 1:
switch(prompted){
case 0:
showEducatePanel(e,i,o),show(el_likeComment),prompted=1;
break;

case 1:
hide(el_likeEducate),showToast(t);
}
setBtnLike();
break;

case 2:
switch(hide(el_bcommentPanel2),clear(el_likeCommentText),prompted){
case 0:
showEducatePanel(e,i,o),5===e&&hide(el_likeCommentShare);
break;

case 1:
(4===e||5===e)&&showToast(4===e?"?????????":t);
}
5!==e&&(4===e&&"none"!==el_likeEducate.style.display?hide(el_likeCommentShare):4===e?hide(el_likeComment):(show(el_commentArea),
show(el_likeCommentShare),1===prompted&&hide(el_likeEducate),show(el_likeComment),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment))),4!==e&&setBtnLike(),
prompted=1;
}
enableMove(),commonUtils.isNativePage()&&JSAPI.invoke("handleHaokanAction",{
action:"closeComment"
});
},unsetLike2Status=function(e){
1===e?setTimeout(function(){
alert2(" ?????????????????????????????????");
},20):showToast("?????????"),2===showType&&isShow(el_likeComment)&&hide(el_likeComment);
var i=el_likeNum.innerHTML;
Class.removeClass(el_likeBtn,opt.className),el_like.setAttribute("like",0),el_likeComment&&hide(el_likeComment),
realLikeNum-=1,realLikeNum>=0&&"10???+"!==i&&(el_likeNum.innerHTML=dealLikeReadShow(realLikeNum));
},sendRecommendAjax=function sendRecommendAjax(like,comment,type,clientType){
if(!haokanLock){
showLoading();
var appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
haokanLock=!0;
var action_type;
like?(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(12),action_type=type):(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(13),
action_type=2),ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
comment:comment?comment:"",
prompted:1,
style:clientType||showType,
action_type:action_type,
passparam:window.passparam,
request_id:(new Date).getTime(),
device_type:window.devicetype
},
type:"POST",
success:function success(res){
haokanLock=!1;
var data=eval("("+res+")");
hideLoading(),0==data.base_resp.ret?(like?setLike2Status(type,data.is_eu_user,data.friend_like_num):unsetLike2Status(data.has_comment),
connectWithApp(like,comment,clientType)):failAlert(comment);
},
error:function(){
hideLoading(),failAlert(),haokanLock=!1;
}
});
}
};
JSAPI.on("menu:haokan",function(e){
var i=0===parseInt(e.recommend)?0:1;
if(0===i)sendRecommendAjax(i,"",2,clientShowType);else{
var o="";
o=e.comment;
var t=1===e.scene?4:5;
sendRecommendAjax(i,o,t,clientShowType);
}
});
var connectWithApp=function(e,i){
var o={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:i?i:""
};
JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(o)
},function(e){
console.log("handleHaokanAction",e);
}),JSAPI.invoke("handleHaokanAction",{
action:actionForClient,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
});
},goWoW=function(){
jumpWowLock||(jumpToWowClickReport(),jumpWowLock=!0,JSAPI.invoke("handleHaokanAction",{
action:"jumpToWow",
extParams:JSON.stringify({
autoDropLoad:!0
})
},function(e){
jumpWowLock=!1,console.log("jumpToWow",e),e.err_msg&&"handleHaokanAction:fail_entrance_not_open"===e.err_msg?show(el_wowClosePanel):"handleHaokanAction:fail  action not support"===e.err_msg||"handleHaokanAction:fail, action not support"===e.err_msg?alert2("??????????????????????????????????????????"):"handleHaokanAction:ok"===e.err_msg&&hide(el_likeComment),
JSAPI.invoke("handleHaokanAction",{
action:actionString,
server_data:JSON.stringify({
origin:"mp",
autoDropLoad:!0
})
},function(e){
console.log("sendAutoDropLoad",e);
});
}));
},likeClickReport=function(){
ajax({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
});
},likeExpose=function e(){
var i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,o=qs("like3").offsetTop,t=opt.appmsgid||opt.mid,n=opt.itemidx||opt.idx;
i+commonUtils.getInnerHeight()>o&&o>=i&&(ajax({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+t+"&itemidx="+n,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
}),DomEvent.off(window,"scroll",e));
},educateExpose=function i(){
var e=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
opt.appmsgid||opt.mid),o=opt.itemidx||opt.idx,t=window.item_show_type,n=window.enterid||window.cgiData&&window.cgiData.enterid||"";
el_likeEducate&&"none"!=el_likeEducate.style.display&&commonUtils.getInnerHeight()>el_likeEducate.getBoundingClientRect().top&&el_likeEducate.getBoundingClientRect().top+el_likeEducate.getBoundingClientRect().height>0&&(ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,o,window.source,window.subscene,1,t,sessionid,n]
},
async:!1,
timeout:2e3
}),DomEvent.off(window,"scroll",i));
},jumpToWowClickReport=function(){
var e=opt.appmsgid||opt.mid,i=opt.itemidx||opt.idx,o=window.enterid||window.cgiData&&window.cgiData.enterid||"";
ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,i,window.source,window.subscene,2,window.item_show_type,sessionid,o]
},
async:!1,
timeout:2e3
});
};
DomEvent.on(el_alertConfirm,"click",function(){
el_alertPanel.style.display="none";
}),DomEvent.on(el_like,"click",function(e){
return e.currentTarget.classList.contains("js_disabled")?!1:(like_report(e),!1);
}),DomEvent.on(el_wowCloseAck,"click",function(){
hide(el_wowClosePanel);
}),DomEvent.on(qs("js_mask_2"),"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_commentConfirm,"mousedown",function(){
validataComment(el_likeCommentText,4);
}),DomEvent.on(el_commentCancel,"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_likeCommentShare,"click",function(){
return commonUtils.isNativePage()?void JSAPI.invoke("handleHaokanAction",{
action:"writeComment",
style:window.isOldVideoPage?"black":"white"
}):(scrollTop=document.body.scrollTop||document.documentElement.scrollTop,show(el_bcommentPanel2),
el_likeCommentText.focus(),el_commentConfirm.setAttribute("disabled","disabled"),
disableMove(),void likeClickReport());
}),DomEvent.on(el_likeCommentText,"focus",function(){}),DomEvent.on(el_likeCommentText,"blur",function(){
window.scrollTo(0,scrollTop);
}),DomEvent.on(window,"scroll",likeExpose),DomEvent.on(window,"scroll",educateExpose),
DomEvent.on(el_go_wow,"click",goWoW);
var scrollToShow=function(e){
e.scrollIntoView(!1);
};
DomEvent.on(el_likeCommentText,"input",function(e){
var i=el_likeCommentText.value.replace(/^\s+|\s+$/g,"");
i.length>maxLikeCommentWord?(el_commentCurrentCount.innerHTML=i.length,vShow(el_commentErrorMsg)):vHide(el_commentErrorMsg),
i.length>0&&i.length<=maxLikeCommentWord?el_commentConfirm.removeAttribute("disabled"):el_commentConfirm.setAttribute("disabled","disabled"),
Device.os.ios&&e.data&&doubleInputChar.indexOf(e.data)>-1&&(focusTag=!0);
}),DomEvent.on(el_likeCommentText,"click",function(){
Device.os.ios&&focusTag&&(el_likeCommentText.blur(),el_likeCommentText.focus(),focusTag=!1);
});
}
}
function showLikeNum(e){
var i=e||{};
if(i.show){
var o=i.likeAreaDom,t=i.likeNumDom,n=document.getElementById("js_like_btn");
o&&(o.style.display=i.likeAreaDisplayValue,o.style.visibility="",i.liked&&(1===appmsg_like_type?Class.addClass(o,i.className):Class.addClass(n,i.className)),
o.setAttribute("like",i.liked?"1":"0"));
var s=1===appmsg_like_type?"???":"";
realLikeNum=i.likeNum||s,1===appmsg_like_type?(parseInt(realLikeNum)>1e5?realLikeNum="100000+":"",
t&&(t.innerHTML=realLikeNum)):2===appmsg_like_type&&(t.innerHTML=dealLikeReadShow(realLikeNum));
}
}
function dealLikeReadShow(e){
if("en"==LANG)return i18n.dealLikeReadShow_en(e);
var i="";
if(parseInt(e)>1e5)i="10???+";else if(parseInt(e)>1e4&&parseInt(e)<=1e5){
var o=""+parseInt(e)/1e4,t=o.indexOf(".");
i=-1===t?o+"???":o.substr(0,t)+"."+o.charAt(t+1)+"???";
}else i=0===parseInt(e)?"":e;
return i;
}
function showReadNum(e){
var i=e||{};
if(i.show){
var o=i.readAreaDom,t=i.readNumDom;
o&&(o.style.display=i.readAreaDisplayValue);
var n=i.readNum||1,s=window.ori_send_time||window.cgiData&&window.cgiData.ori_send_time||0,l=/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),a=1566025200,m=1565971200,r=Device.os.ios||l?a:m;
parseInt(s,10)>r&&window.item_show_type&&"5"===window.item_show_type&&("en"!=LANG&&(document.getElementById("readTxt").innerText="??????"),
n=i.videouv||0),1===appmsg_like_type?(parseInt(n)>1e5?n="100000+":"",t&&(t.innerHTML=n)):2===appmsg_like_type&&(t.innerHTML=dealLikeReadShow(n),
""===t.innerHTML&&(t.innerHTML="0"));
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),Base64=require("biz_common/base64.js"),monitor=require("biz_common/utils/monitor.js"),log=require("appmsg/log.js"),Tips=require("complain/tips.js"),RetryAjax=require("appmsg/retry_ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),actionString="submitMsgToTL",actionForClient="update_recommend_status",mmversion=require("biz_wap/utils/mmversion.js"),commonUtils=require("common/utils.js"),Loading=require("appmsg/loading.js"),realLikeNum,clientShowType=5,i18n=require("appmsg/i18n.js"),Device=require("biz_wap/utils/device.js"),payReportUtils=require("appmsg/pay_report_utils.js"),maxLikeCommentWord=200,focusTag=!1,doubleInputChar=["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","[]","??????","{}","()","<>"];
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum,
showReadNum:showReadNum
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var i=arguments[t];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);
}
return e;
};
define("appmsg/related_article.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","appmsg/related_article_tpl.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","common/utils.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","appmsg/i18n.js","common/comm_report.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function t(){
return document.documentElement.scrollTop||document.body.scrollTop;
}
function i(e){
var t=document.createElement("div");
return t.innerHTML=e,t.childNodes;
}
function n(e){
a({
url:"/mp/relatedarticle?action=getlist&count=1&begin=0&article_url="+window.encodeURIComponent(location.href)+"&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx,
type:"GET",
dataType:"json",
success:function(t){
t&&t.list&&t.list.length>0&&(window.has_related_article=!0);
var n=function(){
if(t&&t.base_resp&&1*t.base_resp.ret===0)if(h=t.article_size||0,0===t.list.length)p.addClass(z,"hide");else{
f.style.display="block";
for(var e=t.list.map(function(e){
if("en"===window.LANG)e.read_num_wording=_.dealLikeReadShow_en(e.read_num);else if(window.parseInt(e.read_num)>1e5)e.read_num_wording="10???+";else if(window.parseInt(e.read_num)>1e4&&window.parseInt(e.read_num)<=1e5){
var t=""+window.parseInt(e.read_num)/1e4,i=t.indexOf(".");
e.read_num_wording=-1===i?t+"???":t.substr(0,i)+"."+t.charAt(i+1)+"???";
}else e.read_num_wording=0===window.parseInt(e.read_num)?"":e.read_num;
return e;
}),n=d.tmpl(m,{
list:e
}),o=i(n),r=0;r<o.length;r++)y.appendChild(o[r].cloneNode(!0));
t.article_size>1&&p.removeClass(z,"hide");
}
};
"function"==typeof e?e("sucess",n):n();
},
error:function(){
"function"==typeof e&&e("error");
}
});
}
function o(e){
a({
type:"POST",
url:"/mp/relatedarticle?action=report_appmsg_expose&__biz="+window.biz,
async:!1,
timeout:2e3,
data:_extends(e,j)
});
}
function r(){
for(var e=document.getElementsByClassName("js_related_item"),i=t(),n=0;n<e.length;n++){
var r=e[n];
1*r.getAttribute("data-hasreport")!==1&&r.clientHeight+r.offsetTop>=i+r.clientHeight/2&&r.clientHeight+r.offsetTop<=i+r.clientHeight/2+u.getInnerHeight()&&!function(e,t){
var i=e.getAttribute("data-url"),n=e.getAttribute("data-time");
e.setAttribute("data-hasreport",1),o({
action_type:1,
type:1,
biz:w.getQuery("__biz",i),
mid:w.getQuery("mid",i),
idx:w.getQuery("idx",i),
send_timestamp:n,
pos:t+1
}),b.setSum(110809,21,1),g.report(18832,_extends({
Actiontype:1,
Type:1,
Bizuin:w.getQuery("__biz",i),
Msgid:window.parseInt(w.getQuery("mid",i),10)||0,
Itemidx:window.parseInt(w.getQuery("idx",i),10)||0,
Sendtimestamp:window.parseInt(n)||0,
Pos:t+1
},x));
}(r,n);
}
h>1&&1*z.getAttribute("data-hasreport")!==1&&z.clientHeight+z.offsetTop>=i+z.clientHeight/2&&z.clientHeight+z.offsetTop<=i+z.clientHeight/2+u.getInnerHeight()&&!function(e){
e.setAttribute("data-hasreport",1),o({
action_type:1,
type:2
}),b.setSum(110809,22,1),g.report(18832,_extends({
Actiontype:1,
Type:2,
Bizuin:0,
Msgid:0,
Itemidx:0,
Sendtimestamp:0,
Pos:0
},x));
}(z);
}
function s(){
l.on(y,"click",".js_related_item",function(e){
var t=e.delegatedTarget,i=t.getAttribute("data-url"),n=t.getAttribute("data-time");
o({
action_type:2,
type:1,
biz:w.getQuery("__biz",i),
mid:w.getQuery("mid",i),
idx:w.getQuery("idx",i),
send_timestamp:n,
pos:1
}),b.setSum(110809,23,1),g.report(18832,_extends({
Actiontype:2,
Type:1,
Bizuin:w.getQuery("__biz",i),
Msgid:window.parseInt(w.getQuery("mid",i),10)||0,
Itemidx:window.parseInt(w.getQuery("idx",i),10)||0,
Sendtimestamp:window.parseInt(n)||0,
Pos:1
},x)),c.openUrlWithExtraWebview(i);
}),l.on(z,"click",function(){
return o({
action_type:2,
type:2
}),b.setSum(110809,24,1),g.report(18832,_extends({
Actiontype:2,
Type:2,
Bizuin:0,
Msgid:0,
Itemidx:0,
Sendtimestamp:0,
Pos:0
},x)),c.openUrlWithExtraWebview("https://mp.weixin.qq.com/mp/relatedarticle?action=page&begin=0&article_url="+window.encodeURIComponent(location.href)+"&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sessionid="+(window.enterid||"")+"&enterid="+parseInt(Date.now()/1e3,0)+"&scene_from="+window.source+"&subscene_from="+window.subscene+"#wechat_redirect"),
!1;
}),l.on(window,"scroll",r);
}
e("biz_common/utils/string/html.js");
var d=e("biz_common/tmpl.js"),a=e("biz_wap/utils/ajax.js"),m=e("appmsg/related_article_tpl.html.js"),c=e("biz_wap/utils/openUrl.js"),l=e("biz_common/dom/event.js"),u=e("common/utils.js"),p=e("biz_common/dom/class.js"),w=e("biz_common/utils/url/parse.js"),_=e("appmsg/i18n.js"),g=e("common/comm_report.js"),b=e("biz_common/utils/monitor.js"),f=document.getElementById("js_related_area"),y=document.getElementById("js_related"),z=document.getElementById("js_related_load_more"),h=0,j={
biz_from:window.biz,
mid_from:window.mid,
idx_from:window.idx,
sessionid:window.sessionid||"",
enterid:window.enterid||"",
scene:window.source,
subscene:window.subscene
},x={
Bizuin_from:window.biz,
Msgid_from:window.parseInt(window.mid,10)||0,
Itemidx_from:window.parseInt(window.idx,10)||0,
Scene:window.parseInt(window.source,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
Sessionid:window.sessionid||"",
Enterid:window.parseInt(window.enterid,10)||0
};
return s(),n;
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">?????????????????????</div>\n            <p class="share_appmsg_desc">?????????????????????????????????????????????????????????</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","biz_common/utils/wxgspeedsdk.js"],function(e){
"use strict";
function s(e){
function s(e){
for(var s=window.location.href,t=s.indexOf("?"),i=s.substr(t+1),_=i.split("&"),a=0;a<_.length;a++){
var n=_[a].split("=");
if(n[0].toUpperCase()==e.toUpperCase())return n[1];
}
return"";
}
var r={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
related_video_sn:"",
vid:"",
is_pay_subscribe:0,
pay_subscribe_uin_count:0,
has_red_packet_cover:0,
onSuccess:function(){},
onError:function(){}
};
for(var d in e)e.hasOwnProperty(d)&&(r[d]=e[d]);
console.info("[(????????????????????????) ????????????]: ",new Date),i({
url:"/mp/getappmsgext?f=json&mock="+s("mock"),
data:{
r:Math.random(),
__biz:r.biz,
appmsg_type:r.appmsg_type,
mid:r.mid,
sn:r.sn,
idx:r.idx,
scene:r.scene,
title:encodeURIComponent(r.title.htmlDecode()),
ct:r.ct,
abtest_cookie:r.abtest_cookie,
devicetype:r.devicetype.htmlDecode(),
version:r.version.htmlDecode(),
is_need_ticket:r.is_need_ticket,
is_need_ad:r.is_need_ad,
comment_id:r.comment_id,
is_need_reward:r.is_need_reward,
both_ad:r.both_ad,
reward_uin_count:r.is_need_reward?r.reward_uin_count:0,
send_time:r.send_time,
msg_daily_idx:r.msg_daily_idx,
is_original:r.is_original,
is_only_read:r.is_only_read,
req_id:r.req_id,
pass_ticket:r.pass_ticket,
is_temp_url:r.is_temp_url,
item_show_type:r.item_show_type,
tmp_version:1,
more_read_type:r.more_read_type,
appmsg_like_type:r.appmsg_like_type,
related_video_sn:r.related_video_sn,
vid:r.vid,
is_pay_subscribe:r.is_pay_subscribe,
pay_subscribe_uin_count:r.pay_subscribe_uin_count,
has_red_packet_cover:r.has_red_packet_cover
},
type:"POST",
dataType:"json",
rtId:r.rtId,
rtKey:r.rtKey,
rtDesc:_,
async:!0,
success:function(e){
if(console.info("[(????????????????????????) ????????????]: ",new Date,e),t("[Appmsg] success get async data"),
"function"==typeof r.onSuccess&&r.onSuccess(e),e)try{
t("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(s){}else t("[Appmsg] success get async data, async data is empty");
if(!n&&"5"===window.item_show_type){
var i=Date.now()-window.logs.pagetime.page_begin;
if(n=!0,Math.random()>.1)return;
a.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:29,
time:i
}]
}),a.send();
}
},
error:function(){
t("[Appmsg] error get async data, biz="+r.biz+", mid="+r.mid),"function"==typeof r.onError&&r.onError();
}
});
}
var t=e("appmsg/log.js"),i=e("biz_wap/utils/ajax.js"),_=e("rt/appmsg/getappmsgext.rt.js"),a=e("biz_common/utils/wxgspeedsdk.js"),n=void 0;
return{
getData:s
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">??????: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function n(n){
n=n||window;
var i=n.cgiData;
return i&&2==i.ori_status&&1==i.is_mp_video&&(i.nick_name||i.hit_username)?!0:!1;
}
function i(n){
return n=n||window,!1;
}
function e(){
return-1!=r.indexOf("&vl=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var n;
if(parent==window)n=window;else try{
{
parent.window.__videoDefaultRatio;
}
n=parent.window;
}catch(i){
n=window;
}
var e=n.__videoDefaultRatio||16/9;
return"54"==n.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:i,
showReprint:n,
getRatio:o
};
});define("pages/create_txv.js",["biz_common/utils/monitor.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function o(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
n(e);
});
}
function n(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError),
r.Load({
url:c.jsUrl,
version:c.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(i){
2!=i.code&&3!=i.code||0!=i.queueIndex||(s.setSum("64728","111",1),s.setSum("64728","112",1));
var u=e.win||window,a=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(a=!0,0==i.queueIndex&&(2==i.code?s.setSum("64728","116",1):3==i.code&&s.setSum("64728","117",1))):(a=!1,
0==i.queueIndex&&(2==i.code?s.setSum("64728","114",1):3==i.code&&s.setSum("64728","115",1))),
a){
var d=t({
win:u,
options:e
});
n({
player:d
});
}else r.ClearCache({
win:u,
version:c.jsVersion,
url:c.jsUrl
}),o();
},
onError:function(o){
0==o.queueIndex&&(s.setSum("64728","111",1),s.setSum("64728","118",1),51==o.code?s.setSum("64728","119",1):52==o.code?s.setSum("64728","120",1):53==o.code&&s.setSum("64728","121",1)),
i(e);
}
});
}
function t(e){
var o=e.win||window,n=e.options,t=new o.Txp.Player({
containerId:n.containerId,
vid:n.vid,
width:n.width,
height:n.height,
autoplay:n.autoplay===!0?!0:!1,
allowFullScreen:n.allowFullScreen===!0?!0:!1
});
return t;
}
function i(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError);
var i=c.jsUrl;
i+=-1==i.indexOf("?")?"?"+c.customerParam+"="+c.jsVersion:"&"+c.customerParam+"="+c.jsVersion,
u({
win:e.win,
url:i,
timeout:1e4,
type:"JS",
callback:function(){
s.setSum("64728","122",1);
var i=e.win||window;
if(i.Txp&&"function"==typeof i.Txp.Player){
s.setSum("64728","124",1);
var r=t({
win:e.win,
options:e
});
n({
player:r
});
}else s.setSum("64728","123",1),o();
},
onerror:function(e){
switch(s.setSum("64728","122",1),1*e){
case 400:
c.jsLoadState=4,s.setSum("64728","125",1);
break;

case 500:
c.jsLoadState=5,s.setSum("64728","126",1);
break;

default:
c.jsLoadState=6,s.setSum("64728","127",1);
}
o();
}
});
}
var s=e("biz_common/utils/monitor.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),c={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:n,
createGlobalFunc:o
};
});define("appmsg/pay_read_utils.js",["biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js","appmsg/pay_report_utils.js"],function(e){
"use strict";
var n=e("biz_wap/jsapi/core.js"),i=e("biz_common/dom/event.js"),o=e("biz_wap/utils/mmversion.js"),r=e("appmsg/pay_report_utils.js"),t=function(e){
var n=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return n.querySelector(e);
},a=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var s=t("#img-content").getBoundingClientRect();
s.width&&(a=s.width);
}catch(d){
console.error(d);
}
var p=32,c=8,w={
dom:{
payFee:[t("#js_pay_panel .js_pay_fee"),t("#js_pay_panel_bottom .js_pay_fee")],
wrap:t("#js_pay_wall_wrap"),
payNum:t("#js_pay_num"),
wall:t("#js_pay_wall")
},
perLine:null,
data:{}
},_=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(o.isIOS||o.isAndroid||o.isWp)?n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(n){
-1===n.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},u=function(){
var e=w.dom,n=w.data;
e.payNum.innerHTML=n.pay_cnt;
for(var i=3*w.perLine,o="",r=0,t=n.pay_head_imgs.length;t>r&&(o+='<img src="'+n.pay_head_imgs[r]+'">',
!(r>=i-1));r++);
e.wall.innerHTML=o;
},m=function(){
i.tap(w.dom.payNum,function(){
_("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
});
},l=function(e){
if(window.isPaySubscribe){
var n=w.dom;
if(e.fee&&!window.isPaid&&!function(){
var i=Math.floor(e.fee/100);
n.payFee.forEach(function(e){
e.innerHTML="???"+i+".00",e.parentNode.dataset.ready=1;
});
}(),o.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&r.report110809(40),
r.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100)),
e.pay_cnt){
if(e.is_paid){
e.pay_head_imgs.unshift(e.my_head_img);
var i=3*w.perLine;
e.pay_head_imgs.length>i&&(e.pay_head_imgs.pop(),e.pay_head_imgs=e.pay_head_imgs.slice(0,i));
}
w.data=e,n.wrap.style.height="",n.wrap.style.marginTop="",n.wrap.style.visibility="visible",
u(),m();
}else n.wrap.style.display="none";
}
},f=function(){
if(!window.isPaySubscribe)return 0;
if(null===w.perLine){
var e=p+c;
w.perLine=Math.floor(.8*a/e),w.dom.wall.parentNode.style.width=w.perLine*e-c+"px";
}
return w.perLine;
};
return{
init:l,
getCountPerLine:f
};
});