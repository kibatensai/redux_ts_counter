(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c,n=a(1),u=a(0),r=a.n(u),s=a(5),i=a.n(s),l=(a(16),a(3)),o=(a(23),a(24),a(25),function(e){var t=e.callBack,a=e.disabled,c=e.name;return Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){t&&t()},disabled:a,className:"button",children:c})})}),j=a(2),b=function(){try{var e=localStorage.getItem("state");return null===e?{startValue:0,maxValue:5}:JSON.parse(e)}catch(t){return}};!function(e){e.INCREMENT="INCREMENT",e.DECREMENT="DECREMENT",e.SET_VALUE_FROM_LS="SET-VALUE-FROM-LS",e.SET_MAX_VALUE="SET-MAX-VALUE",e.SET_START_VALUE="SET-START-VALUE",e.SET_VIEWMODE="SET-VIEWMODE"}(c||(c={}));var O={startValue:b().startValue,maxValue:b().maxValue},d={startValue:O.startValue,maxValue:O.maxValue,counter:1,viewMode:!1},V=function(e){return{type:c.SET_VALUE_FROM_LS,value:e}},E=function(e){return{type:c.SET_MAX_VALUE,value:e}},x=function(e){return{type:c.SET_START_VALUE,value:e}},m=function(e){return{type:c.SET_VIEWMODE,viewMode:e}},v=function(e){var t=e.checkOptions,a=Object(l.b)(),u=Object(l.c)((function(e){return e.counter})),r=u.counter===u.maxValue?"counter_end":"counter";return Object(n.jsx)("div",{className:"screen_wrapper",children:Object(n.jsxs)("div",{className:"main_screen",children:[Object(n.jsx)("div",{className:r,children:t?"Incorrect value!":u.counter}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(o,{name:"inc",callBack:function(){u.counter!==u.maxValue&&a({type:c.INCREMENT})},disabled:u.counter===u.maxValue}),Object(n.jsx)(o,{name:"dec",callBack:function(){u.counter!==u.startValue&&a({type:c.DECREMENT})},disabled:u.counter===u.startValue}),Object(n.jsx)(o,{name:"reset",callBack:function(){return a(V(u.startValue))},disabled:u.counter===u.startValue}),Object(n.jsx)(o,{name:"settings",callBack:function(){a(m(!0))},disabled:t})]})]})})},f=(a(26),function(e){var t=e.getNewValue,a=e.initialValue,c=e.checkOptions?"bad_value_style":"good_value_style";return Object(n.jsx)("div",{className:"input",children:Object(n.jsx)("input",{className:c,value:a,onChange:function(e){t(e.currentTarget.value)}})})}),h=(a(27),function(e){var t=e.checkOptions,a=Object(l.c)((function(e){return e.counter})),c=Object(l.b)();return Object(n.jsx)("div",{className:"settings_wrapper",children:Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsxs)("div",{className:"input_container",children:[Object(n.jsx)(f,{getNewValue:function(e){isFinite(+e)&&c(E(+e))},initialValue:+a.maxValue,checkOptions:t}),Object(n.jsx)("label",{children:"Max Value"})]}),Object(n.jsxs)("div",{className:"input_container",children:[Object(n.jsx)(f,{getNewValue:function(e){isFinite(+e)&&c(x(+e))},initialValue:+a.startValue,checkOptions:t}),Object(n.jsx)("label",{children:"Start Value"})]}),Object(n.jsx)("div",{children:Object(n.jsx)(o,{name:"set",callBack:function(){c(x(a.startValue)),c(E(a.maxValue)),c(V(a.startValue)),c(m(!1))},disabled:t})})]})})});var T=function(){var e=Object(l.c)((function(e){return e.counter})),t=!(!isNaN(e.startValue)&&!isNaN(e.maxValue))||(e.startValue===e.maxValue||(e.startValue>e.maxValue||(e.startValue<0||e.maxValue<0)));return Object(n.jsx)("div",{className:"App",children:e.viewMode?Object(n.jsx)(v,{checkOptions:t}):Object(n.jsx)(h,{checkOptions:t})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,u=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),u(e),r(e)}))},_=a(4),N=Object(_.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.INCREMENT:return Object(j.a)(Object(j.a)({},e),{},{counter:+e.counter+1});case c.DECREMENT:return Object(j.a)(Object(j.a)({},e),{},{counter:+e.counter-1});case c.SET_VALUE_FROM_LS:return Object(j.a)(Object(j.a)({},e),{},{counter:+t.value});case c.SET_MAX_VALUE:return Object(j.a)(Object(j.a)({},e),{},{maxValue:t.value});case c.SET_START_VALUE:return Object(j.a)(Object(j.a)({},e),{},{startValue:t.value});case c.SET_VIEWMODE:return Object(j.a)(Object(j.a)({},e),{},{viewMode:!t.viewMode});default:return e}}}),S=Object(_.c)(N,b());S.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({startValue:S.getState().counter.startValue,maxValue:S.getState().counter.maxValue})})),i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(l.a,{store:S,children:Object(n.jsx)(T,{})})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.b5655db1.chunk.js.map