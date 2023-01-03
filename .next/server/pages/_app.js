"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBb0M7QUFFckIsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUNFO2tCQUNFLDRFQUFDSCxxREFBS0E7c0JBQ0osNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lPlxuICAgIDwvPlxuICApO1xufVxuICJdLCJuYW1lcyI6WyJUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n\n  }\n  body {\n    font-family: ${(props)=>props.theme.fonts.main};\n    font-size: 1.6rem;\n    background: ${(props)=>props.theme.colors.background1};\n    color: ${(props)=>props.theme.colors.primary1};\n    cursor: default;\n\n  }\n  h1,h2,h3,h4,h5,h6,button {\n    font-family: ${(props)=>props.theme.fonts.title};\n  }\n  a {\n    text-decoration: none;\n  }\n  li{\n    list-style: none;\n  }\n\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Q7QUFDVDtBQUU3QyxNQUFNRSxlQUFlRixnRUFBaUIsQ0FBQztFQUNyQyxFQUFFQyx1REFBU0EsQ0FBQzs7Ozs7Ozs7Ozs7OztpQkFhRyxFQUFFRSxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDOztnQkFFbkMsRUFBRUgsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxDQUFDRyxNQUFNLENBQUNDLFdBQVcsQ0FBQztXQUMvQyxFQUFFTCxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLENBQUNHLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDOzs7OztpQkFLakMsRUFBRU4sQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxDQUFDQyxLQUFLLENBQUNLLEtBQUssQ0FBQzs7Ozs7Ozs7O0FBU3BELENBQUM7QUFFRCxpRUFBZVIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvc3R5bGVzL2dsb2JhbHMuanM/ZDQ1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3N0eWxlZC1ub3JtYWxpemUnO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtub3JtYWxpemV9O1xuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICB9XG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRzLm1haW59O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQxfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeTF9O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICB9XG4gIGgxLGgyLGgzLGg0LGg1LGg2LGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMudGl0bGV9O1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBsaXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlczsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJub3JtYWxpemUiLCJHbG9iYWxTdHlsZXMiLCJwcm9wcyIsInRoZW1lIiwiZm9udHMiLCJtYWluIiwiY29sb3JzIiwiYmFja2dyb3VuZDEiLCJwcmltYXJ5MSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/globals.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ \"./src/themes/default.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ \"./src/styles/globals.js\");\n\n\n\n\nconst Theme = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/styles/theme.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/styles/theme.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUVaO0FBQ0Q7QUFFckMsTUFBTUcsUUFBUSxDQUFDLEVBQUVDLFNBQVEsRUFBRSxpQkFDekIsOERBQUNKLDREQUFhQTtRQUFDQyxPQUFPQSx1REFBS0E7OzBCQUN6Qiw4REFBQ0MsZ0RBQVlBOzs7OztZQUNaRTs7Ozs7OztBQUlMLGlFQUFlRCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9zdHlsZXMvdGhlbWUuanM/MTlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lcy9kZWZhdWx0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4vZ2xvYmFscyc7XG5cbmNvbnN0IFRoZW1lID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICB7Y2hpbGRyZW59XG4gIDwvVGhlbWVQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lOyJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJUaGVtZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Temp fonts\n    fonts: {\n        title: \"Space Grotesk, sans-serif\",\n        main: \"Space Grotesk, sans-serif\"\n    },\n    // Colors for layout\n    colors: {\n        primary1: \"hsl(204,23.8%,95.9%)\",\n        background1: \"#0F1624\",\n        accent1: \"hsl(34.9,98.6%,72.9%)\",\n        button: \"hsl(205.1,100%,36.1%)\",\n        background2: \"hsl(232.7,27.3%,23.7%)\"\n    },\n    // Breakpoints for responsive design\n    breakpoints: {\n        sm: \"screen and (max-width: 640px)\",\n        md: \"screen and (max-width: 768px)\",\n        lg: \"screen and (max-width: 1024px)\",\n        xl: \"screen and (max-width: 1280px)\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0lBQ2IsYUFBYTtJQUNiQSxPQUFPO1FBQ0xDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0Esb0JBQW9CO0lBQ3BCQyxRQUFRO1FBQ05DLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLFFBQVE7UUFDUkMsYUFBYTtJQUNmO0lBQ0Esb0NBQW9DO0lBQ3BDQyxhQUFhO1FBQ1hDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7SUFDTjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3RoZW1lcy9kZWZhdWx0LmpzP2IxZTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBUZW1wIGZvbnRzXG4gIGZvbnRzOiB7XG4gICAgdGl0bGU6IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiLFxuICAgIG1haW46IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIC8vIENvbG9ycyBmb3IgbGF5b3V0XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnkxOiBcImhzbCgyMDQsMjMuOCUsOTUuOSUpXCIsXG4gICAgYmFja2dyb3VuZDE6IFwiIzBGMTYyNFwiLFxuICAgIGFjY2VudDE6IFwiaHNsKDM0LjksOTguNiUsNzIuOSUpXCIsXG4gICAgYnV0dG9uOiBcImhzbCgyMDUuMSwxMDAlLDM2LjElKVwiLFxuICAgIGJhY2tncm91bmQyOiBcImhzbCgyMzIuNywyNy4zJSwyMy43JSlcIixcbiAgfSxcbiAgLy8gQnJlYWtwb2ludHMgZm9yIHJlc3BvbnNpdmUgZGVzaWduXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXG4gICAgbWQ6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KScsXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCknLFxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJ1xuICB9LFxufVxuIl0sIm5hbWVzIjpbImZvbnRzIiwidGl0bGUiLCJtYWluIiwiY29sb3JzIiwicHJpbWFyeTEiLCJiYWNrZ3JvdW5kMSIsImFjY2VudDEiLCJidXR0b24iLCJiYWNrZ3JvdW5kMiIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/themes/default.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();