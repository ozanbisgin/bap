!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[MenuContainer_Responsive]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[MenuContainer_Responsive]"]=t(require("react")):e["rb_wixui.thunderbolt[MenuContainer_Responsive]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={40841:function(e,t){var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.r(o),r.d(o,{components:function(){return P}});var e=r(5329),t=r.n(e),n=r(40841),a=r.n(n);const s=(...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" ");var i={menuContainer:"KLO7MJ",visible:"a6BVa5",inlineContent:"vyb81L",container:"qNR7mP",overlay:"oOL4sX",horizontallyDocked:"AESkWR",verticallyDocked:"I2F1wm",inlineContentParent:"asChkN",open:"nIzsA4"},l=r(448),c=r.n(l);const u="responsive-container-overflow",p="responsive-container-content",d=e=>{let{children:n,className:r}=e;return t().createElement("div",{className:r,tabIndex:0,"data-testid":u},n)};var f=n=>{let{containerLayoutClassName:r,overlowWrapperClassName:o,hasOverflow:s,shouldOmitWrapperLayers:i,children:l,role:u,extraRootClass:f=""}=n;return(0,e.useCallback)((e=>!i&&s?t().createElement(d,{className:a()(o,f)},e):e),[f,s,o,i])(i?t().createElement(t().Fragment,null,l()):t().createElement("div",c()({className:s?r:a()(r,f),"data-testid":p},u?{role:u}:{}),l()))},v="UjpP2K",m="SaGcIp",y="naw_Hj",b="RcfHS8",g="AVLx_K";var h=e=>{let{classNames:n,cssEditingClasses:r,layerIds:o,containerProps:s,children:i}=e;return t().createElement(t().Fragment,null,t().createElement("div",{id:o.overlay,className:a()(m,{[y]:n.includes("horizontallyDocked")})}),t().createElement("div",{id:o.container,className:a()(v)},t().createElement("div",{className:""+g}),t().createElement("div",{id:o.inlineContentParent,className:b},t().createElement(f,c()({},s,{extraRootClass:a()(b,r)}),i))))};var x={root:"mobile-menu"};const C=(t,n)=>{let{id:r,customClassNames:o=[],isOpen:l,isVisible:c,children:u,classNames:p,containerProps:d,onClick:f,onMouseEnter:v,onMouseLeave:m,open:y,close:b,animate:g}=t;l&&!c&&(c=!0),e.useImperativeHandle(n,(()=>({open:y,close:b,animate:g})));const C={overlay:"overlay-"+r,container:"container-"+r,inlineContentParent:"inlineContentParent-"+r};return e.createElement("div",{id:r,tabIndex:0,onClick:f,onMouseEnter:v,onMouseLeave:m,className:a()(i.menuContainer,p.map((e=>i[e])),{[i.visible]:c,[i.open]:l})},e.createElement(h,{containerProps:d,id:r,layerIds:C,classNames:p,cssEditingClasses:s(x.root,...o)},u))};const O=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`)),j=()=>"undefined"!=typeof window;var w;const P={MenuContainer_Responsive:{component:e.forwardRef(C),controller:(w=e=>{let{mapperProps:t,stateValues:n,controllerUtils:{updateStyles:r}}=e;const{isMobileView:o,compId:a,...s}=t,{toggle:i,...l}=n;return!0===n.isOpen&&r({"--menu-height":j()&&o?window.getComputedStyle(document.body).height:"100vh"}),{...s,...(c=l,Object.entries(c).reduce(((e,t)=>{let[n,r]=t;return void 0===r?e:{...e,[n]:r}}),{})),onClick:e=>{e.target.closest("a , #overlay-"+a)&&i&&(null==i||i(!0))}};var c},{useComponentProps:(e,t,n)=>{const r=(e=>Object.assign(Object.assign({},e),{updateStyles:t=>{const n=Object.entries(t).reduce(((e,[t,n])=>{return Object.assign(Object.assign({},e),{[(r=t,r.startsWith("--")?t:O(t))]:void 0===n?null:n});var r}),{});e.updateStyles(n)}}))(n);return w({mapperProps:e,stateValues:t,controllerUtils:r})}})}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[MenuContainer_Responsive].5eab8b38.bundle.min.js.map