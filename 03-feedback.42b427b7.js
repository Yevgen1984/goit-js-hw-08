var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function h(){var e=m();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return v?d(n,i-(e-c)):n}(e))}function w(e){return f=void 0,y&&o?b(e):(o=r=void 0,a)}function O(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(v)return f=setTimeout(h,t),b(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector("form"),b={};y.addEventListener("input",t((function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(b),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state")),t=document.querySelector("textarea"),n=document.querySelector("input");localStorage.getItem("feedback-form-state")&&(t.value=e.message,n.value=e.email)}();
//# sourceMappingURL=03-feedback.42b427b7.js.map
