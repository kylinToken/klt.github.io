(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-nego-detail"],{"0a39":function(t,e,i){var n=i("4bad");e=n(!1),e.push([t.i,".banner[data-v-384fe248]{width:100%;min-height:150px;background:#ccc}.title-tag[data-v-384fe248]{height:15px;width:15px;border-radius:3px;background:#222}.do-chat .user-avatar[data-v-384fe248]{width:38px;height:38px;border-radius:4px}.do-chat .chat-input[data-v-384fe248]{height:38px;line-height:38px;background-color:#f2f2f2;padding-left:10px;border-radius:5px}.do-comment[data-v-384fe248]{z-index:999;bottom:0;width:100%;background-color:#fff;min-height:200px}.comment-content[data-v-384fe248]{overflow:hidden}.comment-content uni-textarea[data-v-384fe248]{width:100%;font-size:15px}#save_add[data-v-384fe248]{background-color:#f2f2f2;color:#ccc;padding:5px 10px!important;display:inline-block;border-radius:3px}#save_add.active[data-v-384fe248]{background-color:#0092ff;color:#fff}",""]),t.exports=e},"12e5":function(t,e,i){"use strict";var n=i("cc29"),a=i.n(n);a.a},"22c1":function(t,e,i){var n=i("4bad");e=n(!1),e.push([t.i,".pj-user-avator[data-v-2ddc54da]{\r\n    /* background-color: #cccccc; */height:35px;width:35px}.pj-user-avator uni-image[data-v-2ddc54da]{height:35px;width:35px;border-radius:5px\r\n    /* border-radius: 100%; */}.child-comments[data-v-2ddc54da]{background-color:#fafafa;\r\n    /* padding-left: 10px; */margin-left:35px;padding:10px}.child-comments .child-user-avatar[data-v-2ddc54da]{height:20px;width:20px;background-color:#ccc;border-radius:5px}.child-content[data-v-2ddc54da]{margin-left:20px}",""]),t.exports=e},"29c4":function(t,e,i){"use strict";i.r(e);var n=i("9421"),a=i("5d7d");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("ef65");var c,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"f647e8de",null,!1,n["a"],c);e["default"]=r.exports},"2c79":function(t,e,i){"use strict";var n=i("f71c"),a=i.n(n);a.a},"3f82":function(t,e,i){"use strict";i.r(e);var n=i("b830"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},4264:function(t,e,i){"use strict";var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af");var a=n(i("2909")),s=i("751a"),c={props:["list","timestamp"],data:function(){return{}},methods:{reply:function(t,e){this.$emit("update:current_comment_index",t),this.$emit("reply",e)},like:function(t,e){var i=this.list[t];if("undefined"!=typeof e){var n=i.child.data[e];1==n.is_like?(this.likeCancel(n.id,"comments",t,e),n.is_like=!1,n.likes_num--):(this.likeCreate(n.id,"comments",t,e),n.is_like=!0,n.likes_num++)}else 1==i.is_like?(this.likeCancel(i.id,"comments",t),i.is_like=!1,i.likes_num--):(this.likeCreate(i.id,"comments",t),i.is_like=!0,i.likes_num++)},likeCreate:function(t,e,i){(0,s.likeCreate)({liketable_id:t,liketable_type:e}).then((function(t){}))},likeCancel:function(t,e,i){(0,s.likeCancel)({liketable_id:t,liketable_type:e}).then((function(t){}))},morecomments:function(t){var e=this,i=this.list[t],n=this.list[t].child,c=1==n.per_page?n.current_page:n.current_page+1;(0,s.commentsList)({type:"comments",pid:i.id,page:c,timestamp:this.timestamp}).then((function(i){i&&(1==i.current_page?e.list[t].child=i:(n.current_page=i.current_page,n.per_page=i.per_page,n.last_page=i.last_page,e.list[t].child.data=[].concat((0,a.default)(n.data),(0,a.default)(i.data))))}))}}};e.default=c},4613:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list.length?i("v-uni-view",t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:" list mar-t-10"},[i("v-uni-view",{staticClass:"list-item  mar-t-20"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"pj-user-avator"},[e.user&&e.user.avatar?i("v-uni-image",{attrs:{src:e.user.avatar}}):t._e()],1),i("v-uni-view",{staticClass:"flex-1 mar-l-10"},[i("v-uni-view",{staticClass:"pj-user-name flex align-center"},[i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-text",{staticClass:"font-color-333 font-size-16 font-bold"},[t._v(t._s(e.user.realname?e.user.realname:e.user.nickname))]),"agent"==e.user.user_type?i("i",{staticClass:"iconfont iconfont-user font-color-yellow mar-l-3 mar-r-3",staticStyle:{width:"20px"}}):t._e()],1),i("v-uni-view",{staticClass:"font-color-b4 flex align-center"},[i("v-uni-view",{staticClass:"flex-1 flex align-center"},[i("mk-icon",{attrs:{src:"/static/icons/comment.png",height:24,width:24}}),i("v-uni-view",[t._v(t._s(e.comments_num))])],1),i("v-uni-view",{staticClass:"flex-1 flex align-center mar-l-10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.like(n)}}},[i("v-uni-text",{staticClass:"iconfont iconfont-good",class:e.is_like?"font-color-price":""}),i("v-uni-view",[t._v(t._s(e.likes_num))])],1)],1)],1),i("v-uni-view",{staticClass:" mar-t-10"},[i("v-uni-text",{staticClass:"font-color-333 font-size-13"},[t._v(t._s(e.content))])],1),i("v-uni-view",{staticClass:"mar-t-10"},[i("v-uni-text",{staticClass:"font-color-A7AABB"},[t._v(t._s(t.timeToCn(e.create_time)))]),i("v-uni-text",{staticClass:"mar-l-5 font-color-A7AABB"},[t._v("|")]),i("v-uni-text",{staticClass:"mar-l-5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reply(n)}}},[t._v("回复TA")])],1)],1)],1)],1),e.child&&e.child.total>0?i("v-uni-view",{staticClass:" child mar-t-15 "},t._l(e.child.data,(function(e,a){return i("v-uni-view",{key:a,staticClass:"child-comments flex-1 "},[i("v-uni-view",{staticClass:"flex align-center "},[e.user&&e.user.avatar?i("v-uni-image",{staticClass:"child-user-avatar",attrs:{src:e.user.avatar,mode:"scaleToFill"}}):t._e(),i("v-uni-view",{staticClass:"flex-1 mar-l-5 font-color-555 font-fa-me font-500 flex align-center"},[i("v-uni-text",[t._v(t._s(e.user.realname?e.user.realname:e.user.nickname))]),i("mk-icon",{attrs:{src:"/static/icons/reply-right.png",height:24,width:24}}),i("v-uni-text",[t._v(t._s(e.user.realname?e.user.realname:e.user.nickname))])],1),i("v-uni-view",{staticClass:"font-color-A7AABB flex align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.like(n,a)}}})],1),i("v-uni-view",{staticClass:"child-content mar-t-5"},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"child-content mar-t-5"},[i("v-uni-text",{staticClass:"font-color-A7AABB"},[t._v(t._s(t.timeToCn(e.create_time)))]),i("v-uni-text",{staticClass:"mar-l-5 font-color-A7AABB"},[t._v("|")]),i("v-uni-text",{staticClass:"mar-l-5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reply(n,a)}}},[t._v("回复TA")])],1)],1)})),1):t._e(),e.child.last_page>e.child.current_page?i("v-uni-view",{staticClass:"font-color-A7AABB mar-l-40 mar-t-10 pad-l-5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.morecomments(n)}}},[t._v("查看更多")]):t._e()],1)})),1):t._e()},s=[]},"4e1d":function(t,e,i){"use strict";i.r(e);var n=i("4264"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"5d7d":function(t,e,i){"use strict";i.r(e);var n=i("f248"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},9421:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},s=[]},"9c9c":function(t,e,i){"use strict";i.r(e);var n=i("bbf3"),a=i("3f82");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("12e5");var c,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"384fe248",null,!1,n["a"],c);e["default"]=r.exports},b830:function(t,e,i){"use strict";(function(t){var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4de4"),i("99af");var a=n(i("53ca")),s=n(i("2909")),c=n(i("29c4")),o=i("751a"),r=n(i("f054")),l={data:function(){return{id:"",type:"nego",info:"",show_pingjia:!1,current_comment_index:"",pid:0,remark:"",placeholder:"建议意见...",index_page:0,total_page:1,list:[],timestamp:""}},components:{uniLink:c.default,commentList:r.default},computed:{user_info:function(){return this.$store.state.user_info}},methods:{addLike:function(e){var i=this;t.log("addLike");var n={liketable_id:e.id,liketable_type:"nego"};e.likes?(0,o.likeCancel)(n).then((function(t){t&&(i.info.likes=null,i.info.likes_num--)})):(0,o.likeCreate)(n).then((function(t){t&&(i.info.likes=!0,i.info.likes_num++)}))},serverTimeStamp:function(){var t=this;(0,o.serverTimeStamp)().then((function(e){t.timestamp=e}))},negoDetail:function(){var e=this;(0,o.negoDetail)({id:this.id}).then((function(i){t.log(i),i&&(e.info=i,e.timestamp=i.timestamp)}))},getCommentsList:function(){var e=this;t.log("===============getCommentsList=================="),(0,o.commentsList)({type:this.type,related_id:this.id,timestamp:this.timestamp,page:this.index_page+1}).then((function(i){if(i){var n=i.data;n=n.filter((function(t){return null!=t.user})),t.log("commentsList",n),e.index_page=i.current_page,e.total_page=i.last_page,e.list=[].concat((0,s.default)(e.list),(0,s.default)(n))}}))},reply:function(t){this.show_pingjia=!0;var e=this.list[this.current_comment_index];if(this.remark="",this.pid=e.id,"undefined"!=typeof t){var i=e.child.data[t];this.reply_id=i.id,this.placeholder="回复:"+i.user.realname}else this.reply_id=e.id,this.placeholder="回复:"+e.user.realname},doChat:function(){var e=this;if(this.remark){this.pid>0?(t.log("回复"),(0,o.commentsCreate)({id:this.reply_id,type:"comments",content:this.remark,pid:this.pid}).then((function(t){if(t){var i=e.list[e.current_comment_index].child.data;"object"==(0,a.default)(i)&&(e.list[e.current_comment_index].child.total++,e.list[e.current_comment_index].child.data.unshift(t))}e.init()}))):(0,o.commentsCreate)({type:this.type,id:this.id,content:this.remark}).then((function(t){t&&(t.child={current_page:1,data:[],last_page:0,per_page:1,total:1},e.list.unshift(t)),e.init()}))}else this.errorToShow("请填写评价内容")},init:function(){this.show_pingjia=!1,this.pid=0,this.current_comment_index="",this.remark="",this.placeholder="建议意见..."},comment:function(){this.init()}},onReachBottom:function(){this.index_page<this.total_page&&this.getCommentsList()},onLoad:function(t){this.id=t.id,this.setJsBridge(),this.negoDetail(),this.getCommentsList(),this.serverTimeStamp()}};e.default=l}).call(this,i("5a52")["default"])},bbf3:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("2ba4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.info?i("v-uni-view",{staticClass:"wrapperPage"},[i("v-uni-image",{staticClass:"banner",attrs:{src:t.info.image,mode:"widthFix"}}),i("v-uni-view",{staticClass:"container mar-t-10"},[i("v-uni-view",{staticClass:"flex title align-center"},[i("v-uni-view",{staticClass:"title-tag"}),i("v-uni-view",{staticClass:"flex-1 font-size-15 font-color-222 font-bold mar-l-5"},[t._v(t._s(t.info.title))])],1),i("v-uni-view",{staticClass:"content mar-t-20"},[i("v-uni-rich-text",{attrs:{nodes:t.info.content}}),t.info.files&&t.info.files.length?i("v-uni-view",{staticClass:"files"},t._l(t.info.files,(function(e,n){return i("v-uni-view",{key:n,staticClass:"pad-t-10 font-color-555 font-size-16"},[t._v("附件："),i("a",{attrs:{href:e.file}},[t._v(t._s(e.file_name))])])})),1):t._e(),i("v-uni-view",{staticClass:"content-footer flex font-color-c7c7c7 mar-t-10 align-center"},[i("v-uni-view",{staticClass:"flex-1"},[t._v(t._s(t.transformTime(t.info.create_time)))]),i("v-uni-view",{staticClass:"flex font-color-c7c7c7 align-center"},[i("v-uni-view",{staticClass:"flex align-center"},[i("v-uni-text",{staticClass:"iconfont iconfont-browse"}),i("v-uni-text",{staticClass:"mar-l-3"},[t._v(t._s(t.info.views_num))])],1),i("v-uni-view",{staticClass:"flex align-center mar-l-10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addLike(t.info)}}},[i("v-uni-text",{staticClass:"iconfont iconfont-good",class:t.info.likes?"font-color-price":""}),i("v-uni-text",{staticClass:"mar-l-3"},[t._v(t._s(t.info.likes_num))])],1)],1)],1),i("v-uni-view",{staticClass:"do-chat flex mar-t-10 border-b-1 pad-b-10"},[i("v-uni-image",{staticClass:"user-avatar",attrs:{src:t.user_info.avatar}}),i("v-uni-input",{staticClass:"chat-input flex-1 mar-l-10",attrs:{type:"text",disabled:!0,placeholder:"建议意见..."},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show_pingjia=!0}}})],1)],1),i("commentList",{staticClass:"pad-b-40",attrs:{list:t.list,timestamp:t.timestamp,current_comment_index:t.current_comment_index},on:{reply:function(e){arguments[0]=e=t.$handleEvent(e),t.reply.apply(void 0,arguments)},"update:current_comment_index":function(e){arguments[0]=e=t.$handleEvent(e),t.current_comment_index=e}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show_pingjia,expression:"show_pingjia"}],staticClass:"mask ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comment.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"do-comment pos-fixed",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"container pad-t-20"},[i("v-uni-view",{staticClass:"flex align-center"},[i("v-uni-view",{staticClass:"cancel"},[i("uni-icons",{attrs:{type:"close",color:"#999",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comment.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"text-center flex-1 font-bold font-size-16"},[t._v("填写评论")]),i("v-uni-view",{class:{active:t.remark},attrs:{id:"save_add"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doChat.apply(void 0,arguments)}}},[t._v("提交")])],1),i("v-uni-view",{staticClass:"comment-content mar-t-10"},[i("v-uni-textarea",{attrs:{name:"",id:"comment-info",placeholder:t.placeholder},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1)],1)],1)],1):t._e()},s=[]},c139:function(t,e,i){var n=i("eb20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("64c40b82",n,!0,{sourceMap:!1,shadowMode:!1})},cc29:function(t,e,i){var n=i("0a39");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("62e40f33",n,!0,{sourceMap:!1,shadowMode:!1})},eb20:function(t,e,i){var n=i("4bad");e=n(!1),e.push([t.i,"\n.uni-link[data-v-f647e8de]{cursor:pointer}\n.uni-link--withline[data-v-f647e8de]{text-decoration:underline}",""]),t.exports=e},ef65:function(t,e,i){"use strict";var n=i("c139"),a=i.n(n);a.a},f054:function(t,e,i){"use strict";i.r(e);var n=i("4613"),a=i("4e1d");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("2c79");var c,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2ddc54da",null,!1,n["a"],c);e["default"]=r.exports},f248:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("2ca0");var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},f71c:function(t,e,i){var n=i("22c1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6bd22192",n,!0,{sourceMap:!1,shadowMode:!1})}}]);