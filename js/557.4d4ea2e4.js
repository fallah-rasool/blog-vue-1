"use strict";(self["webpackChunkbootstrap"]=self["webpackChunkbootstrap"]||[]).push([[557],{1493:function(t,s,o){o.d(s,{Z:function(){return w}});var n=o(3396),e=o(7139);const l={class:"card",style:{width:"23rem"}},r={class:"list-group list-group-flush"},i={class:"list-group-item"},a={class:"list-group-item"},c=(0,n.Uk)(" محتوا :"),u=(0,n._)("br",null,null,-1);function d(t,s,o,d,p,f){const g=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("ul",r,[(0,n.Wm)(g,{to:{name:"postId",params:{id:o.post.id}}},{default:(0,n.w5)((()=>[(0,n.Uk)(" مشاهده پست شماره : "+(0,e.zw)(o.post.id),1)])),_:1},8,["to"]),(0,n._)("li",i," عنوان : "+(0,e.zw)(o.post.title),1),(0,n._)("li",a,[c,u,(0,n.Uk)(" "+(0,e.zw)(o.post.body),1)])])])}var p={name:"PostCardViwe",props:{post:Object}},f=o(89);const g=(0,f.Z)(p,[["render",d]]);var w=g},6557:function(t,s,o){o.r(s),o.d(s,{default:function(){return k}});var n=o(3396);const e={key:0,class:"row"},l=(0,n._)("div",{class:"col align-self-center justify-content-center"},[(0,n._)("div",{class:"spinner-border text-info",role:"status"},[(0,n._)("span",{class:"visually-hidden"},"Loading...")])],-1),r=[l],i={key:1,class:"row"},a=(0,n._)("div",{class:"alert alert-primary",role:"alert"}," لیست پست ",-1);function c(t,s,o,l,c,u){const d=(0,n.up)("PostCardViwe");return l.loding?((0,n.wg)(),(0,n.iD)("div",e,r)):((0,n.wg)(),(0,n.iD)("div",i,[a,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.posts,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"col-4 g-3",key:t.id},[(0,n.Wm)(d,{post:t},null,8,["post"])])))),128))]))}var u=o(6265),d=o.n(u),p=o(4870),f=o(1493),g=o(2483),w={name:"Index",components:{PostCardViwe:f.Z},setup(){const t=(0,p.iH)(!0),s=(0,p.iH)([]),o=(0,g.yj)();function n(){d().get("https://jsonplaceholder.typicode.com/posts").then((function(o){console.log(o.data),s.value=o.data,t.value=!1})).catch((function(t){}))}return console.log(o.params.id),n(),{posts:s,loding:t,route:o}}},v=o(89);const m=(0,v.Z)(w,[["render",c]]);var k=m}}]);
//# sourceMappingURL=557.4d4ea2e4.js.map