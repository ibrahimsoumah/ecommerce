window.wp=window.wp||{},window.wp.keyboardShortcuts=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=426)}({13:function(t,e){t.exports=window.wp.compose},16:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(27);var o=r(38),u=r(29);function i(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(u.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},19:function(t,e){t.exports=window.wp.keycodes},2:function(t,e){t.exports=window.lodash},27:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},29:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(27);function o(t,e){if(t){if("string"==typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},38:function(t,e,r){"use strict";function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r.d(e,"a",(function(){return n}))},39:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return n}))},4:function(t,e){t.exports=window.wp.data},40:function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(e,"a",(function(){return n}))},426:function(t,e,r){"use strict";r.r(e),r.d(e,"useShortcut",(function(){return k}));var n={};r.r(n),r.d(n,"registerShortcut",(function(){return l})),r.d(n,"unregisterShortcut",(function(){return d}));var o={};r.r(o),r.d(o,"getShortcutKeyCombination",(function(){return m})),r.d(o,"getShortcutRepresentation",(function(){return j})),r.d(o,"getShortcutDescription",(function(){return w})),r.d(o,"getShortcutAliases",(function(){return S})),r.d(o,"getAllShortcutRawKeyCombinations",(function(){return x})),r.d(o,"getCategoryShortcuts",(function(){return T}));var u=r(4),i=r(6),a=r(2);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REGISTER_SHORTCUT":return f(f({},t),{},Object(i.a)({},e.name,{category:e.category,keyCombination:e.keyCombination,aliases:e.aliases,description:e.description}));case"UNREGISTER_SHORTCUT":return Object(a.omit)(t,e.name)}return t};function l(t){var e=t.name,r=t.category,n=t.description;return{type:"REGISTER_SHORTCUT",name:e,category:r,keyCombination:t.keyCombination,aliases:t.aliases,description:n}}function d(t){return{type:"UNREGISTER_SHORTCUT",name:t}}var p=r(9),b=r(16),y=r(49),h=r(19),v=[],O={display:h.displayShortcut,raw:h.rawShortcut,ariaLabel:h.shortcutAriaLabel};function g(t,e){return t?t.modifier?O[e][t.modifier](t.character):t.character:null}function m(t,e){return t[e]?t[e].keyCombination:null}function j(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"display",n=m(t,e);return g(n,r)}function w(t,e){return t[e]?t[e].description:null}function S(t,e){return t[e]&&t[e].aliases?t[e].aliases:v}var x=Object(y.a)((function(t,e){return Object(a.compact)([g(m(t,e),"raw")].concat(Object(b.a)(S(t,e).map((function(t){return g(t,"raw")})))))}),(function(t,e){return[t[e]]})),T=Object(y.a)((function(t,e){return Object.entries(t).filter((function(t){return Object(p.a)(t,2)[1].category===e})).map((function(t){return Object(p.a)(t,1)[0]}))}),(function(t){return[t]})),R=(Object(u.registerStore)("core/keyboard-shortcuts",{reducer:s,actions:n,selectors:o}),r(13));var k=function(t,e,r){var n=Object(u.useSelect)((function(e){return e("core/keyboard-shortcuts").getAllShortcutRawKeyCombinations(t)}),[t]);Object(R.useKeyboardShortcut)(n,e,r)}},49:function(t,e,r){"use strict";var n,o;function u(t){return[t]}function i(){var t={clear:function(){t.head=null}};return t}function a(t,e,r){var n;if(t.length!==e.length)return!1;for(n=r;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}n={},o="undefined"!=typeof WeakMap,e.a=function(t,e){var r,c;function f(){r=o?new WeakMap:i()}function s(){var r,n,o,u,i,f=arguments.length;for(u=new Array(f),o=0;o<f;o++)u[o]=arguments[o];for(i=e.apply(null,u),(r=c(i)).isUniqueByDependants||(r.lastDependants&&!a(i,r.lastDependants,0)&&r.clear(),r.lastDependants=i),n=r.head;n;){if(a(n.args,u,1))return n!==r.head&&(n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=r.head,n.prev=null,r.head.prev=n,r.head=n),n.val;n=n.next}return n={val:t.apply(null,u)},u[0]=null,n.args=u,r.head&&(r.head.prev=n,n.next=r.head),r.head=n,n.val}return e||(e=u),c=o?function(t){var e,o,u,a,c,f=r,s=!0;for(e=0;e<t.length;e++){if(o=t[e],!(c=o)||"object"!=typeof c){s=!1;break}f.has(o)?f=f.get(o):(u=new WeakMap,f.set(o,u),f=u)}return f.has(n)||((a=i()).isUniqueByDependants=s,f.set(n,a)),f.get(n)}:function(){return r},s.getDependants=e,s.clear=f,f(),s}},6:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},9:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(39);var o=r(29),u=r(40);function i(t,e){return Object(n.a)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}}(t,e)||Object(o.a)(t,e)||Object(u.a)()}}});