webpackJsonp([24],{1862:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a,u=n(2),o=i(u),c=n(51),d=i(c),s=n(5),f=i(s),p=n(10),l=i(p),h=n(8),m=i(h),v=n(9),_=i(v),A=n(0),y=(i(A),n(253)),g=n(692),k=i(g),N=(r=(0,y.wrapper)(k.default))(a=function(t){function e(){return(0,f.default)(this,e),(0,m.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,l.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),e}(A.Component))||a;e.default=N,t.exports=e.default},1863:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new s.action(t),n=new m((0,u.default)({},t,{metaAction:e})),i=(0,u.default)({},e,n);return e.config({metaHandlers:i}),i}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=i(a),o=n(5),c=i(o);e.default=r;var d=n(0),s=(i(d),n(253)),f=n(254),p=i(f),l=n(11),h=n(611),m=function t(e){var n=this;(0,c.default)(this,t),this.onInit=function(t){var e=t.component,i=t.injections;n.component=e,n.injections=i;var r=(0,h.getInitState)(),a=r.data.currentAppName,u=l.history.getChildApp("mk-app-root")||a;r.data.currentAppName=u,i.reduce("init",{initState:r}),l.history.listen("mk-app-root",n.listen),n.onRedirect({appName:l.history.getChildApp("mk-app-root")||a})},this.listen=function(t,e,i){var r=(0,h.getInitState)().data.currentAppName,a=n.metaAction.gf("data.currentAppName")||r,u=t||r;u!=a&&n.injections.reduce("redirect",u)},this.onRedirect=function(t){var e=t.appName;l.history.pushChildApp("mk-app-root",e)},this.componentWillUnmount=function(){l.history.unlisten("mk-app-root",n.listen)},this.metaAction=e.metaAction,this.config=p.default.current};t.exports=e.default},1864:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new p.reducer(t),n=new m((0,d.default)({},t,{metaReducer:e}));return(0,d.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var a,u,o,c=n(2),d=i(c),s=n(5),f=i(s);e.default=r;var p=(n(72),n(253)),l=n(254),h=i(l),m=(n(611),n(11),u=a=function t(e){(0,f.default)(this,t),o.call(this),this.metaReducer=e.metaReducer,this.config=h.default.current},o=function(){var t=this;this.init=function(e,n){return t.metaReducer.init(e,n.initState)},this.redirect=function(e,n){return t.metaReducer.sf(e,"data.currentAppName",n)}},u);t.exports=e.default}});