(self.webpackChunkcv_thibaud_ritzenthaler=self.webpackChunkcv_thibaud_ritzenthaler||[]).push([[127],{801:function(e,t,n){!function(e,t,r,i){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var a="default"in r?r.default:r,o="default"in i?i.default:i;function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){var r,i,a;r=e,a=n[i=t],i in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,r=m(t);return d(this,n?(e=m(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments))}}function b(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){var e=b(["\n    @media "," {\n      ","\n    }\n  "]);return v=function(){return e},e}var h="awesomegrid",y=["xs","sm","md","lg","xl"],x={mediaQuery:"only screen",columns:{xs:4,sm:8,md:8,lg:12,xl:12},gutterWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},paddingWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},container:{xs:"full",sm:"full",md:"full",lg:90,xl:90},breakpoints:{xs:1,sm:48,md:64,lg:90,xl:120}},E=[],w=function(e){return JSON.stringify(e.theme&&e.theme[h]||{})},N=function(e){var t=e.theme&&e.theme[h]||{},n=u(u({},x),t);return n.media=Object.keys(n.breakpoints).reduce((function(e,t){var i,a=n.breakpoints[t];return e[t]=(i=[n.mediaQuery,0<=a&&"(min-width: ".concat(a,"rem)")].filter(Boolean).join(" and "),function(){return r.css(v(),i,r.css.apply(void 0,arguments))}),e}),{}),n};function j(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=w(e);if(E[0]===t)return E[1];var n=N(e);return E[0]=t,E[1]=n}function k(){var e=b(["\n      background-color: #5901ad40;\n      outline: #fff solid 1px;\n    "]);return k=function(){return e},e}function O(){var e=b(["\n      ","\n    "]);return O=function(){return e},e}function S(){var e=b(["\n      ","\n    "]);return S=function(){return e},e}function z(){var e=b(["\n      padding-left: ","rem;\n      padding-right: ","rem;\n    "]);return z=function(){return e},e}function C(){var e=b(["\n    ","\n  "]);return C=function(){return e},e}function P(){var e=b(["\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 100%;\n  box-sizing: border-box;\n\n  ","\n  \n\n  ","\n\n  ","\n"]);return P=function(){return e},e}var F=a.div(P(),(function(e){return r.css(C(),y.map((function(t){return j(e).container[t]&&j(e).media[t](z(),j(e).paddingWidth[t],j(e).paddingWidth[t])})))}),(function(e){return!e.fluid&&r.css(S(),y.map((function(t){return j(e).container[t]&&j(e).media[t](O(),"number"==typeof j(e).container[t]?"max-width: ".concat(j(e).container[t],"rem;"):"width: 100%;")})))}),(function(e){return e.debug&&r.css(k())}));function T(){var e=b(["\n      background-color: #5901ad40;\n      outline: #fff solid 1px;\n    "]);return T=function(){return e},e}function A(){var e=b(["",""]);return A=function(){return e},e}function I(){var e=b(["\n      ","\n    "]);return I=function(){return e},e}function L(){var e=b(["",""]);return L=function(){return e},e}function D(){var e=b(["\n      ","\n    "]);return D=function(){return e},e}function R(){var e=b(["\n         ",";\n        \n      "]);return R=function(){return e},e}function W(){var e=b(["\n      ","\n    "]);return W=function(){return e},e}function B(){var e=b(["\n      margin-left: -","rem;\n      margin-right: -","rem;\n    "]);return B=function(){return e},e}function M(){var e=b(["\n    ","\n  "]);return M=function(){return e},e}function U(){var e=b(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  \n  ","\n\n  ","\n\n  ","\n  \n  ","\n\n  ","\n"]);return U=function(){return e},e}F.displayName="Container",F.propTypes={fluid:t.bool,children:t.node,debug:t.bool};var Z=a.div(U(),(function(e){return r.css(M(),y.map((function(t){return j(e).container[t]&&j(e).media[t](B(),j(e).gutterWidth[t]/2,j(e).gutterWidth[t]/2)})))}),(function(e){return e.reverse&&r.css(W(),Array.isArray(e.reverse)?y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](R(),-1!==e.reverse.indexOf(t)?"\n             flex-direction: row-reverse;\n             flex-wrap: wrap-reverse;\n             ":"\n                 flex-direction: row;\n                 flex-wrap: wrap;\n               ")})):"\n            flex-direction: row-reverse;\n            flex-wrap: wrap-reverse;\n          ")}),(function(e){return e.align&&r.css(D(),"object"===c(e.align)?y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](L(),e.align[t]&&"align-items: ".concat(e.align[t]))})):"align-items: ".concat(e.align,";"))}),(function(e){return e.justify&&r.css(I(),"object"===c(e.justify)?y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](A(),e.justify[t]&&"justify-content: ".concat(e.justify[t]))})):"justify-content: ".concat(e.justify,";"))}),(function(e){return e.debug&&r.css(T())}));Z.displayName="Row";var H=t.oneOfType([t.bool,t.array]),V=t.oneOfType([t.string,t.object]);function q(){var e=b(["\n    background-color: #5901ad40;\n    outline: #fff solid 1px;\n  "]);return q=function(){return e},e}function G(){var e=b(["",""]);return G=function(){return e},e}function J(){var e=b(["\n    ","\n  "]);return J=function(){return e},e}function Y(){var e=b(["",""]);return Y=function(){return e},e}function Q(){var e=b(["\n    ","\n  "]);return Q=function(){return e},e}function $(){var e=b(["\n        flex-direction: ",";\n      "]);return $=function(){return e},e}function K(){var e=b(["\n    ","\n  "]);return K=function(){return e},e}function X(){var e=b(["\n    ",";\n    "]);return X=function(){return e},e}function ee(){var e=b(["\n    ","\n  "]);return ee=function(){return e},e}function te(){var e=b(["\n    ",";\n    "]);return te=function(){return e},e}function ne(){var e=b(["\n    ","\n  "]);return ne=function(){return e},e}function re(){var e=b(["\n      flex: 1 1 ","%;\n      max-width: ","%;\n    "]);return re=function(){return e},e}function ie(){var e=b(["\n    ","\n  "]);return ie=function(){return e},e}function ae(){var e=b(["\n      padding-right: ","rem;\n      padding-left: ","rem;\n    "]);return ae=function(){return e},e}function oe(){var e=b(["\n    ","\n  "]);return oe=function(){return e},e}function ce(){var e=b(["\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n  \n  ","\n  \n  ","\n"]);return ce=function(){return e},e}Z.propTypes={reverse:H,align:V,justify:V,children:t.node,debug:t.bool};var le=a.div(ce(),(function(e){return!e.noGutter&&r.css(oe(),y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](ae(),j(e).gutterWidth[t]/2,j(e).gutterWidth[t]/2)})))}),(function(e){return r.css(ie(),y.map((function(t){return e[t]&&j(e).breakpoints[t]&&j(e).media[t](re(),e[t]/j(e).columns[t]*100,e[t]/j(e).columns[t]*100)})))}),(function(e){return e.offset&&r.css(ne(),y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](te(),"object"===c(e.offset)?void 0!==e.offset[t]&&"margin-left: ".concat(0<e.offset[t]?e.offset[t]/j(e).columns[t]*100:0,"%"):"margin-left: ".concat(e.offset/j(e).columns.xs*100,"%"))})))}),(function(e){return void 0!==e.order&&r.css(ee(),y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](X(),"object"===c(e.order)?void 0!==e.order[t]&&"order: ".concat(e.order[t]):"order: ".concat(e.order))})))}),(function(e){return e.reverse&&r.css(K(),Array.isArray(e.reverse)?y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t]($(),-1!==e.reverse.indexOf(t)?"column-reverse":"column")})):"flex-direction: column-reverse;")}),(function(e){return e.align&&r.css(Q(),"object"===c(e.align)?y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](Y(),e.align[t]&&"align-items: ".concat(e.align[t]))})):"align-items: ".concat(e.align,";"))}),(function(e){return e.justify&&r.css(J(),"object"===c(e.justify)?y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](G(),e.justify[t]&&"justify-content: ".concat(e.justify[t]))})):"justify-content: ".concat(e.justify,";"))}),(function(e){return e.debug&&r.css(q())}));le.displayName="Col";var se=t.oneOfType([t.string,t.number]),ue=t.oneOfType([t.string,t.object]),me=t.oneOfType([t.number,t.object]),fe=t.oneOfType([t.bool,t.array]);function de(e,t,r){void 0===r&&(r=n.g);var a=i.useRef();i.useEffect((function(){a.current=t}),[t]),i.useEffect((function(){if(r&&r.addEventListener){var t=function(e){return a.current(e)};return r.addEventListener(e,t),function(){r.removeEventListener(e,t)}}}),[e,r])}function pe(){return"undefined"!=typeof window&&window.innerWidth?window.innerWidth:null}function be(){var e,t=y,n=j(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).breakpoints,r="undefined"!=typeof window&&window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size").replace("px","")||16,i=Object.values(n).map((function(e){return e*r})),a=pe();return a&&(e=t[0],i[1]&&a>=i[1]&&(e=t[1]),i[2]&&a>=i[2]&&(e=t[2]),i[3]&&a>=i[3]&&(e=t[3]),i[4]&&a>=i[4]&&(e=t[4])),e}function ge(e){function t(){var e=be({theme:s});f!==e&&d(e)}var n=e.xs,r=e.sm,a=e.md,c=e.lg,l=e.xl,s=e.theme,u=e.children,m=g(i.useState("xs"),2),f=m[0],d=m[1];return i.useEffect((function(){t()}),[]),de("orientationchange",t),de("resize",t),!function(){switch(f){case"xs":return n;case"sm":return r;case"md":return a;case"lg":return c;case"xl":return l}}()&&o.createElement(o.Fragment,null,u)}le.propTypes={xs:se,sm:se,md:se,lg:se,xl:se,align:ue,justify:ue,order:me,offSet:me,reverse:fe,noGutter:t.bool,children:t.node,debug:t.bool};var _e={xs:!(ge.displayName="Hidden"),sm:!1,md:!1,lg:!1,xl:!1,children:null,theme:{}},ve={xs:t.bool,sm:t.bool,md:t.bool,lg:t.bool,xl:t.bool,theme:t.object,children:t.node};function he(e){function t(){var e=be({theme:s});f!==e&&d(e)}var n=e.xs,r=e.sm,a=e.md,c=e.lg,l=e.xl,s=e.theme,u=e.children,m=g(i.useState("xs"),2),f=m[0],d=m[1];return i.useEffect((function(){t()}),[]),de("orientationchange",t),de("resize",t),!!function(){switch(f){case"xs":return n;case"sm":return r;case"md":return a;case"lg":return c;case"xl":return l}}()&&o.createElement(o.Fragment,null,u)}ge.defaultProps=_e,ge.propTypes=ve;var ye=r.withTheme(ge);he.displayName="Visible",he.defaultProps=_e,he.propTypes=ve;var xe=r.withTheme(he),Ee=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,i.Component);var e,t,n,r=p(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=r.call(this)).setScreen=function(){var t=e.state.screen,n=be(e.props);t&&t===n||(t=n,e.setState({screen:n}))},e.state={screen:"xs"},e}return e=a,(t=[{key:"componentDidMount",value:function(){this.setScreen(),"undefined"!=typeof window&&(window.addEventListener("orientationchange",this.setScreen,!1),window.addEventListener("resize",this.setScreen,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("orientationchange",this.setScreen),window.removeEventListener("resize",this.setScreen)}},{key:"render",value:function(){var e=this.props.render;return o.createElement(o.Fragment,null,e&&e(this.state.screen))}}])&&l(e.prototype,t),n&&l(e,n),a}();Ee.defaultProps={theme:{}},Ee.displayName="ScreenClass",Ee.propTypes={render:t.func};var we=r.withTheme(Ee);function Ne(){var e=b(["\n      ::before {\n        content: '","'\n      }\n    "]);return Ne=function(){return e},e}function je(){var e=b(["\n    ","\n  "]);return je=function(){return e},e}function ke(){var e=b(["\n    z-index: 10;\n    position: fixed;\n    font-size: 1.5rem;\n    font-weight: bold;\n    right: 10px;\n    bottom: 10px;\n    width: 50px;\n    height: 30px;\n    background-color: #5901ad40;\n    display: flex;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n  ","\n"]);return ke=function(){return e},e}var Oe=a.div(ke(),(function(e){return r.css(je(),y.map((function(t){return j(e).breakpoints[t]&&j(e).media[t](Ne(),t)})))}));Oe.displayName="ScreenBadge";var Se={getScreenClass:be,getViewPort:pe};e.Col=le,e.Container=F,e.Hidden=ye,e.Row=Z,e.ScreenBadge=Oe,e.ScreenClass=we,e.Visible=xe,e.config=j,e.util=Se,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5697),n(9),n(7294))},7249:function(e,t){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.Z=function(e,t){return fetch(e,t).then((function(e){var t={};for(var r in e)"function"!=typeof e[r]&&(t[r]=e[r]);return e.status>=200&&e.status<300?new Promise((function(r,i){return e.json().then((function(e){return r(n({},t,{json:e}))}),(function(e){return i(n({},t,{error:e}))}))})):new Promise((function(r,i){return e.json().then((function(e){return i(n({},t,{json:e}))}),(function(e){return i(n({},t,{error:e}))}))}))}))}},7886:function(e,t,n){"use strict";n.d(t,{CL:function(){return m},RS:function(){return R},TS:function(){return L},yu:function(){return W},VM:function(){return i.Z},Ar:function(){return r.Z},xd:function(){return a.Z},TY:function(){return b},im:function(){return o.Z}});var r=n(3652),i=n(287),a=n(6046),o=n(3673),c=n(7294),l=n(3201),s=n(9),u=(0,s.default)((function(e){var t=e.className,n=e.title,r=e.name,i=e.icon;return c.createElement("div",{className:t,name:r},i,c.createElement("h1",{className:"header__title"},n))})).withConfig({displayName:"sectionTitle",componentId:"sc-nkq750-0"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:24px;.header__title{margin-bottom:0;margin-left:10px;}"]),m=function(e){var t=e.title,n=void 0===t?"about":t,r=e.siteConfig,i=void 0===r?"":r;return c.createElement(c.Fragment,null,c.createElement(u,{title:n,name:"about",icon:c.createElement(l.FaUserAlt,{size:28})}),c.createElement("p",{dangerouslySetInnerHTML:{__html:i.authorDescription}}))},f=function(e){var t=e.className,n=e.name;e.level;return c.createElement("div",{className:t},c.createElement("label",{htmlFor:n+"-bar"},n),c.createElement("div",{id:n+"-bar",className:"skill__bar"},c.createElement("div",{className:"skill__level"})))};f.displaName="SkillBar";(0,s.default)(f).withConfig({displayName:"skill-bar",componentId:"sc-k09n8t-0"})([".skill__bar{height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],(function(e){return e.level||0}));var d,p=n(801),b=(0,s.default)((function(e){var t=e.title,n=e.className,r=e.siteConfig;return c.createElement("div",{className:n},c.createElement(u,{title:t,name:"experience",icon:c.createElement(l.FaSuitcase,{size:28})}),r.jobs&&r.jobs.list.map((function(e){return c.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},c.createElement("div",{className:"inner"},c.createElement("span",{className:"timeline__date"},c.createElement("span",{className:"timeline__month"},e.begin.month),c.createElement("span",{className:"timeline__year"},e.begin.year)),c.createElement("h2",{className:"timeline__title"},e.occupation,r.jobs.labelAt,c.createElement("span",{className:"timeline__company"},c.createElement("a",{href:e.company.link,target:"_blank",rel:"noopener noreferrer"},e.company.name)),c.createElement("br",null),c.createElement("small",{className:"timeline__title--small"},e.location," "),c.createElement("small",{className:"timeline__title--small timeline__title--right"},e.duration||r.jobs.labelToday)),c.createElement("p",null,c.createElement("i",null,e.contract)," - ",e.description)))})))})).withConfig({displayName:"timeline",componentId:"sc-d6aegx-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303b;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303b;}.timeline__date{display:block;width:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303b;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';display:none;position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n + 2) div.inner{float:right;}.timeline__title{background:#25303b;}.timeline__company{transition:font-size 0.35s;}.timeline__company:hover{font-size:21px;}.timeline__company a{text-decoration:none;font-style:normal;color:#E5E8B6;}.timeline__title:after{background:#25303b;}.timeline__title--small{font-size:10px;}.timeline__title--right{float:right;margin-top:8px;}",""],(function(e){return(0,p.config)(void 0).media.sm(d||(t=["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    display: block;\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "],n||(n=t.slice(0)),t.raw=n,d=t));var t,n})),g=n(5861),_=n(1721),v=n(7757),h=n.n(v),y=n(7249),x=n(3710),E=n.n(x),w=(0,s.default)((function(e){var t=e.className;return c.createElement("div",{className:t},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null),c.createElement("div",null))})).withConfig({displayName:"loader",componentId:"sc-nccjrt-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),N="https://api.github.com/users/"+E().githubUsername+"/repos?type=owner&sort=updated&per_page=5&page=1",j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={repos:[],status:"loading"},n}(0,_.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,g.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.Z)(N);case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.state.status;return c.createElement("div",{className:this.props.className},c.createElement("h2",null,"Latest repositories on Github"),"loading"===e&&c.createElement("div",{className:"repositories__loader"},c.createElement(w,null)),"ready"===e&&this.state.repos&&c.createElement(c.Fragment,null,c.createElement("div",{className:"repositories__content"},this.state.repos.map((function(e){return c.createElement(c.Fragment,{key:e.name},c.createElement("div",{className:"repositories__repo"},c.createElement("a",{className:"repositories__repo-link",href:e.html_url},c.createElement("strong",null,e.name)),c.createElement("div",null,e.description),c.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),c.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),c.createElement("hr",null))})))))},t}(c.Component);(0,s.default)(j).withConfig({displayName:"repositories",componentId:"sc-cm0nqu-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link{text-decoration:none;color:#25303B;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]),(0,s.default)((function(e){var t=e.className;return c.createElement("div",{className:t},c.createElement(u,{title:"Publications",name:"publications",icon:c.createElement(l.FaBook,{size:28})}),c.createElement("div",{className:"publications__content"},E().publications&&E().publications.map((function(e,t){return c.createElement(c.Fragment,{key:e.title},c.createElement("div",{className:"publications_pub"},c.createElement("div",{className:"publications_pub-header"},c.createElement("span",{className:"publications__pub-title"},e.title),c.createElement("span",{className:"publications__pub-date"},e.date.month," ",e.date.year)),c.createElement("span",{className:"publications__pub-company"},e.company_medium),c.createElement("span",{className:"publications__pub-description"},e.description),c.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"publications__pub-link"},e.link)),t<E().publications.length-1&&c.createElement("hr",null))}))))})).withConfig({displayName:"publications",componentId:"sc-xxa84q-0"})(["position:relative;.publications__content{margin-bottom:40px;}.publications_pub{display:flex;flex-direction:column;margin-bottom:20px;}.publications_pub-header{display:flex;flex-direction:row;justify-content:space-between;}.publications__pub-title{font-weight:bold;}.publications__pub-date{color:#bbb;font-size:10px;}.publications__pub-company{font-size:16px;font-style:italic;}.publications__pub-description{color:#656565;font-size:14px;}.publications__pub-link{margin-top:10px;font-size:14px;}"]);function k(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=Object.defineProperty,z=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,A=function(e,t,n){return t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},I=(0,c.forwardRef)((function(e,t){var n,r,i=e,a=i.code,o=i.alt,l=void 0===o?a:o,s=i.size,u=void 0===s?24:s,m=i.width,f=void 0===m?u:m,d=i.height,p=void 0===d?u:d,b=function(e,t){var n={};for(var r in e)F.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&P){var i,a=k(P(e));try{for(a.s();!(i=a.n()).done;)r=i.value,t.indexOf(r)<0&&T.call(e,r)&&(n[r]=e[r])}catch(o){a.e(o)}finally{a.f()}}return n}(i,["code","alt","size","width","height"]);return c.createElement("img",(n=function(e,t){for(var n in t||(t={}))F.call(t,n)&&A(e,n,t[n]);if(P){var r,i=k(P(t));try{for(i.s();!(r=i.n()).done;)n=r.value,T.call(t,n)&&A(e,n,t[n])}catch(a){i.e(a)}finally{i.f()}}return e}({},b),r={ref:t,alt:l,width:f,height:p,src:"https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/".concat(a,".svg")},z(n,C(r))))}));I.displayName="FlagIcon";var L=(0,s.default)((function(e){var t=e.title,n=e.siteConfig,r=e.className;return c.createElement("div",{className:r},c.createElement(u,{title:t,name:"education",icon:c.createElement(l.FaUniversity,{size:28})}),c.createElement("div",{className:"education__content"},n.education&&n.education.map((function(e,t){return c.createElement(c.Fragment,{key:e.field+"_"+e.degree},c.createElement("div",{className:"education__edu"},c.createElement("div",{className:"education__edu-header"},c.createElement("span",{className:"education__edu-studies"},e.degree,", ",e.field),c.createElement("span",{className:"education__edu-date"},e.startYear," - ",e.endYear||"Aujourd'hui")),c.createElement("span",{className:"education__edu-school"},e.additionalInfo&&e.additionalInfo+" - ",c.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.school))),t<n.education.length-1&&c.createElement("hr",null))})),n.languages.list&&c.createElement(c.Fragment,null,c.createElement("h3",null,n.languages.title),c.createElement("ul",null,n.languages.list.map((function(e){var t=e.code,n=e.language,r=e.level;return c.createElement("li",{className:"education__lang_li",key:t+"-"+n},c.createElement("div",{className:"education__lang"},t&&c.createElement(I,{className:"education__lang__flag",code:t,size:18}),c.createElement("div",{className:t?"":"education__lang__text--noflag"},c.createElement("strong",null,n,":")," ",r)))}))))))})).withConfig({displayName:"education",componentId:"sc-1ybm95y-0"})(["position:relative;.education__content{margin-bottom:40px;}.education__edu{display:flex;flex-direction:column;margin-bottom:20px;}.education__edu-header{display:flex;flex-direction:row;justify-content:space-between;}.education__edu-studies{font-weight:bold;}.education__edu-date{color:#bbb;font-size:10px;min-width:60px;}.education__edu-school{font-size:16px;font-style:italic;}.education__edu-school a{color:#4F657D;text-decoration:none;font-style:normal;transition:color 0.5s;}.education__edu-school a:visited{}.education__edu-school a:hover{color:#758EA9;}.education__lang_li{list-style:none;}.education__lang{display:flex;align-items:center;}.education__lang__flag{margin:0;margin-right:6px;}.education__lang__text--noflag{margin-left:24px;}"]),D=((0,s.default)((function(e){var t=e.className;return c.createElement("div",{className:t},c.createElement(u,{title:"Hobbies",name:"hobbies",icon:c.createElement(l.FaCoffee,{size:28})}),c.createElement("div",{className:"hobbies__content"},E().hobbies&&E().hobbies.map((function(e){var t=n(3201)[e.icon];return c.createElement("div",{className:"hobbies_item",key:e.name},c.createElement(t,{size:32}),c.createElement("span",null,e.name))}))))})).withConfig({displayName:"hobbies",componentId:"sc-1xl39ew-0"})([".hobbies__content{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));}.hobbies_item{min-height:120px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:10px;text-align:center;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);border-radius:3px;}"]),(0,s.default)((function(e){var t=e.className,n=(0,c.useState)(""),r=n[0],i=n[1];return c.createElement("div",{className:t},c.createElement(u,{title:"Contact",name:"contact",icon:c.createElement(l.FaEnvelope,{size:28})}),c.createElement("div",{className:"contact__content"},c.createElement("form",{name:"contact-form",method:"POST",className:"contact__form","data-netlify":"true"},c.createElement("div",{className:"contact__form__item"},c.createElement("label",{htmlFor:"name",className:"contact__form__label"},"Name:"),c.createElement("input",{type:"text",placeholder:"name",name:"name"})),c.createElement("div",{className:"contact__form__item"},c.createElement("label",{htmlFor:"category",className:"contact__form__label"},"Category:"),c.createElement("select",{value:r,name:"category",onChange:function(e){return i(e.target.value)}},c.createElement("option",{value:"",disabled:!0},"Select category"),c.createElement("option",{value:"general"},"General inquiry"),c.createElement("option",{value:"job"},"Job offer"),c.createElement("option",{value:"training"},"Training offer"))),"training"===r&&c.createElement("div",{className:"contact__form__item"},c.createElement("label",{htmlFor:"location",className:"contact__form__label"},"Location:"),c.createElement("input",{type:"text",placeholder:"location",name:"location"})),"job"===r&&c.createElement("div",{className:"contact__form__item"},c.createElement("label",{htmlFor:"job_type",className:"contact__form__label"},"Job type:"),c.createElement("div",{className:"contact__form_radioContainer"},c.createElement("label",{htmlFor:"perm",className:"contact__form_radioLabel"},"Permanent"),c.createElement("input",{type:"radio",id:"perm",name:"job_type",value:"perm"})),c.createElement("div",{className:"contact__form_radioContainer"},c.createElement("label",{htmlFor:"contract",className:"contact__form_radioLabel"},"Contract"),c.createElement("input",{type:"radio",id:"contract",name:"job_type",value:"contract"}))),c.createElement("div",{className:"contact__form__item"},c.createElement("label",{htmlFor:"message",className:"contact__form__label"},"Message:"),c.createElement("textarea",{rows:"4",cols:"50",name:"message"})),c.createElement("button",{type:"submit"},"Send"))))})).withConfig({displayName:"contact",componentId:"sc-k4061d-0"})([".contact__form{display:flex;flex-direction:column;}.contact__form__item{margin:10px;display:flex;align-items:center;}.contact__form__label{min-width:150px;display:inline-block;}.contact__form_radioContainer{display:inline-block;margin-right:20px;}.contact__form_radioLabel{margin-right:5px;}"]),n(1597)),R=(0,s.default)((function(e){var t=e.title,n=e.className,r=e.siteConfig;return c.createElement("div",{className:n},c.createElement(u,{title:t,name:"activities",icon:c.createElement(l.FaHandsHelping,{size:28})}),c.createElement("div",{className:"activities__content"},r.activities&&r.activities.map((function(e){var t=(0,D.withPrefix)(e.image);return c.createElement("div",{className:"activity_item",key:e.structure.name,onClick:function(){e.link&&(window.location.href=e.link)}},c.createElement("img",{className:"activity_item_image",src:t,alt:e.structure.name}),c.createElement("div",{className:"activity_item_desc"},c.createElement("p",null,c.createElement("strong",null,e.structure.name),c.createElement("br",null),c.createElement("b",null,e.structure.desc),c.createElement("br",null),c.createElement("i",null,e.position))))}))))})).withConfig({displayName:"activities",componentId:"sc-199n17o-0"})([".activities__content{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));}.activity_item{min-height:120px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:10px;text-align:center;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);border-radius:3px;cursor:pointer;}.activity_item_image{max-height:100px;margin:10px 10px 0 10px;}.activity_item_desc{font-size:0.8em;margin:0 10px 0 10px;}.activity_item_desc p strong{font-size:1.2em;}.activity_item_desc h4{font-size:0.9em;}"]),W=(0,s.default)((function(e){var t=e.title,r=e.siteConfig,i=e.className;return c.createElement("div",{className:i},c.createElement(u,{title:t,name:"expertise",icon:c.createElement(l.FaCode,{size:28})}),c.createElement("div",{className:"expertise__content"},r.expertise&&r.expertise.map((function(e){var t;return"fa"===e.icon.library?t=n(3201)[e.icon.name]:"si"===e.icon.library&&(t=n(9463)[e.icon.name]),c.createElement("div",{className:"expertise_item",key:e.name},c.createElement(t,{size:32}),c.createElement("span",null,e.name))}))))})).withConfig({displayName:"expertise",componentId:"sc-15ejghf-0"})([".expertise__content{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));flex-flow:column wrap;}.expertise_item{min-height:120px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:10px;text-align:center;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);border-radius:3px;}"]);n(3491)},5017:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#180808","images":{"fallback":{"src":"/static/d68fe759deeff8a6b531ea4518199b9c/6761a/avatar.png","srcSet":"/static/d68fe759deeff8a6b531ea4518199b9c/bf8e1/avatar.png 128w,\\n/static/d68fe759deeff8a6b531ea4518199b9c/acb7c/avatar.png 256w,\\n/static/d68fe759deeff8a6b531ea4518199b9c/6761a/avatar.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/d68fe759deeff8a6b531ea4518199b9c/6766a/avatar.webp 128w,\\n/static/d68fe759deeff8a6b531ea4518199b9c/22bfc/avatar.webp 256w,\\n/static/d68fe759deeff8a6b531ea4518199b9c/6d0d4/avatar.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":511}')}}]);
//# sourceMappingURL=c1dcaf347079c47bccdc10c1be120605aa7ef23a-f59ccf21a11b917400b9.js.map