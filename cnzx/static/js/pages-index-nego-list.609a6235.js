(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-nego-list"],{"53ae":function(t,e,a){"use strict";a.r(e);var i=a("bf8f"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"66d8":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container wrapperPage pageBacGray pad-t-10"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"font-size-20 font-bold"},[t._v("远程协商")]),a("v-uni-view",{staticClass:"bac-color-normal dashboard text-center font-color-fff mar-t-10 pad-t-20 pad-b-20"},[a("v-uni-view",[a("v-uni-text",{staticClass:"font-size-60 font-500"},[t._v(t._s(t.dashboard.total_num))]),a("v-uni-text",{staticClass:"mar-l-3 font-size-20"},[t._v("场")])],1),a("v-uni-view",{staticClass:"flex mar-t-20"},[a("v-uni-view",{staticClass:"flex-1"},[t._v("互动"+t._s(t.dashboard.comments_num))]),a("v-uni-view",{staticClass:"flex-1"},[t._v("点赞"+t._s(t.dashboard.likes_num))]),a("v-uni-view",{staticClass:"flex-1"},[t._v("浏览"+t._s(t.dashboard.views_num))])],1)],1)],1),a("v-uni-view",{staticClass:"nego-list "},t._l(t.list,(function(e,i){return a("v-uni-navigator",{key:i,staticClass:"nego-list-item flex mar-t-15",attrs:{url:"/pages/index/nego/detail?id="+e.id,redirect:!0,"hover-class":"className"}},[a("v-uni-image",{attrs:{src:e.image,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"flex-1 mar-l-10 flex justify-between flex-column"},[a("v-uni-view",{staticClass:"title font-size-16 tq-text-line2 "},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"font-size-12 font-color-999 mar-t-3"},[t._v(t._s(t.transformTime(e.create_time)))])],1),a("v-uni-view",[a("v-uni-view",{staticClass:"tag  font-size-10 font-color-fff bac-color-price text-center radius-3"},[t._v("报告")])],1)],1)})),1)],1)},s=[]},7662:function(t,e,a){"use strict";var i=a("e29a"),n=a.n(i);n.a},bf8f:function(t,e,a){"use strict";var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var n=i(a("2909")),s=a("751a"),o={data:function(){return{index_page:0,total_page:1,list:[],dashboard:""}},methods:{negoDashboard:function(){var t=this;(0,s.negoDashboard)().then((function(e){e&&(t.dashboard=e)}))},negoList:function(){var t=this;(0,s.negoList)({page:this.index_page+1}).then((function(e){e&&(t.index_page=e.current_page,t.total_page=e.last_page,t.list=[].concat((0,n.default)(t.list),(0,n.default)(e.data)))}))}},onLoad:function(){this.setJsBridge(),this.negoDashboard(),this.negoList()},onPullDownRefresh:function(){this.index_page=0,this.total_page=1,this.list=[],this.negoList()},onReachBottom:function(){this.index_page<this.total_page&&this.cate_list&&this.negoList()}};e.default=o},c9b0:function(t,e,a){"use strict";a.r(e);var i=a("66d8"),n=a("53ae");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("7662");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3b7910e8",null,!1,i["a"],o);e["default"]=c.exports},e29a:function(t,e,a){var i=a("e8ee");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7055fb9c",i,!0,{sourceMap:!1,shadowMode:!1})},e8ee:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,".dashboard[data-v-3b7910e8]{padding:26px 5px;border-radius:8px}.nego-list-item uni-image[data-v-3b7910e8]{height:90px;width:130px;background-color:#ccc}.nego-list-item .tag[data-v-3b7910e8]{padding:1px 5px}",""]),t.exports=e}}]);