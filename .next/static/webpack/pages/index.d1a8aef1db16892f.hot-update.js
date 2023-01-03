"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nconst Timeline = ()=>{\n    _s();\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const scroll = (node, left)=>{\n        return node.scrollTo({\n            left,\n            behavior: \"smooth\"\n        });\n    };\n    const handleClick = (e, i)=>{\n        e.preventDefault();\n        if (carouselRef.current) {\n            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    const handleScroll = ()=>{\n        if (carouselRef.current) {\n            const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n            setActiveItem(index);\n        }\n    };\n    // snap back to beginning of scroll when window is resized\n    // avoids a bug where content is covered up if coming from smaller screen\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            scroll(carouselRef.current, 0);\n        };\n        window.addEventListener(\"resize\", handleResize);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTextAbout, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"With an excellent background in the software development and industrial automation space, i am well poised to deliver industry-standard, best-practice API and front-end software solutions using the MERN stack. I have worked with various programming languages and gained proficiency in NodeJS and associated technologies including RESTful API with ExpressJS, NoSQL Database such as MongoDB,\"\n                    }, void 0, false, {\n                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"SQL databases such as SQLite and Postgres, Containerization and DevOps tools including Docker and Kubernates as well as front-end solutions with React.js and React.ts. My strengths are problem-solving skills (including debugging, troubleshooting and fixing), ability to quickly grasp new technologies and adapt them to solve problems in the fast-paced IT space.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                onScroll: handleScroll,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel__item-\".concat(index),\n                                active: activeItem,\n                                onClick: (e)=>handleClick(e, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                        children: [\n                                            \"\".concat(item.year),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                                width: \"208\",\n                                                height: \"6\",\n                                                viewBox: \"0 0 208 6\",\n                                                fill: \"none\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        fillRule: \"evenodd\",\n                                                        clipRule: \"evenodd\",\n                                                        d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                        fill: \"url(#paint0_linear)\",\n                                                        fillOpacity: \"0.33\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                            id: \"paint0_linear\",\n                                                            x1: \"-4.30412e-10\",\n                                                            y1: \"0.5\",\n                                                            x2: \"208\",\n                                                            y2: \"0.500295\",\n                                                            gradientUnits: \"userSpaceOnUse\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    stopColor: \"white\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                                    lineNumber: 125,\n                                                                    columnNumber: 25\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    offset: \"0.79478\",\n                                                                    stopColor: \"white\",\n                                                                    stopOpacity: \"0\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                                    lineNumber: 126,\n                                                                    columnNumber: 25\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                            lineNumber: 117,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: activeItem,\n                        onClick: (e)=>handleClick(e, index),\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n                            active: activeItem\n                        }, void 0, false, {\n                            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 151,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 144,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEyRDtBQVlqQztBQU1hO0FBQ2tCO0FBRXpELE1BQU1rQix1QkFBdUJELHFFQUFtQjtBQUVoRCxNQUFNRyxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHckIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTXNCLGNBQWNyQiw2Q0FBTUE7SUFFMUIsTUFBTXNCLFNBQVMsQ0FBQ0MsTUFBTUMsT0FBUztRQUM3QixPQUFPRCxLQUFLRSxRQUFRLENBQUM7WUFBRUQ7WUFBTUUsVUFBVTtRQUFTO0lBQ2xEO0lBRUEsTUFBTUMsY0FBYyxDQUFDQyxHQUFHQyxJQUFNO1FBQzVCRCxFQUFFRSxjQUFjO1FBRWhCLElBQUlULFlBQVlVLE9BQU8sRUFBRTtZQUN2QixNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQzNCYixZQUFZVSxPQUFPLENBQUNJLFdBQVcsR0FBRyxNQUFPTixDQUFBQSxJQUFJZCxxRUFBbUI7WUFHbEVPLE9BQU9ELFlBQVlVLE9BQU8sRUFBRUM7UUFDOUIsQ0FBQztJQUNIO0lBRUEsTUFBTUksZUFBZSxJQUFNO1FBQ3pCLElBQUlmLFlBQVlVLE9BQU8sRUFBRTtZQUN2QixNQUFNTSxRQUFRSixLQUFLSyxLQUFLLENBQ3RCLFlBQWFQLE9BQU8sQ0FBQ0MsVUFBVSxHQUM1QlgsQ0FBQUEsWUFBWVUsT0FBTyxDQUFDSSxXQUFXLEdBQUcsR0FBRSxJQUNyQ3BCLHFFQUFtQjtZQUd2QkssY0FBY2lCO1FBQ2hCLENBQUM7SUFDSDtJQUVBLDBEQUEwRDtJQUMxRCx5RUFBeUU7SUFDekVwQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXNDLGVBQWUsSUFBTTtZQUN6QmpCLE9BQU9ELFlBQVlVLE9BQU8sRUFBRTtRQUM5QjtRQUVBUyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVRjtJQUNwQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzVCLDZEQUFPQTtRQUFDK0IsSUFBRzs7MEJBQ1YsOERBQUM1QixrRUFBWUE7MEJBQUM7Ozs7OzswQkFDZCw4REFBQ0Qsc0VBQWdCQTs7a0NBQ2YsOERBQUM4QjtrQ0FBSTs7Ozs7O2tDQVFMLDhEQUFDQTtrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQVNQLDhEQUFDdEMsOERBQWlCQTtnQkFBQ3VDLEtBQUt2QjtnQkFBYXdCLFVBQVVUOzBCQUM3Qzs4QkFDR3JCLGtFQUFnQixDQUFDLENBQUNnQyxNQUFNVixzQkFDdkIsOERBQUMzQixxRUFBd0JBOzRCQUV2QnNDLE9BQU9YLFVBQVVyQix1QkFBdUI7c0NBRXhDLDRFQUFDVix5REFBWUE7Z0NBQ1grQixPQUFPQTtnQ0FDUEssSUFBSSxrQkFBd0IsT0FBTkw7Z0NBQ3RCWSxRQUFROUI7Z0NBQ1IrQixTQUFTLENBQUN0QixJQUFNRCxZQUFZQyxHQUFHUzs7a0RBRS9CLDhEQUFDNUIsOERBQWlCQTs7NENBQ2QsR0FBWSxPQUFWc0MsS0FBS0ksSUFBSTswREFDYiw4REFBQzVDLDREQUFlQTtnREFDZDZDLE9BQU07Z0RBQ05DLFFBQU87Z0RBQ1BDLFNBQVE7Z0RBQ1JDLE1BQUs7Z0RBQ0xDLE9BQU07O2tFQUVOLDhEQUFDQzt3REFDQ0MsVUFBUzt3REFDVEMsVUFBUzt3REFDVEMsR0FBRTt3REFDRkwsTUFBSzt3REFDTE0sYUFBWTs7Ozs7O2tFQUVkLDhEQUFDQztrRUFDQyw0RUFBQ0M7NERBQ0NyQixJQUFHOzREQUNIc0IsSUFBRzs0REFDSEMsSUFBRzs0REFDSEMsSUFBRzs0REFDSEMsSUFBRzs0REFDSEMsZUFBYzs7OEVBRWQsOERBQUNDO29FQUFLQyxXQUFVOzs7Ozs7OEVBQ2hCLDhEQUFDRDtvRUFDQ0UsUUFBTztvRUFDUEQsV0FBVTtvRUFDVkUsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBTXRCLDhEQUFDaEUsNkRBQWdCQTtrREFBRXVDLEtBQUswQixJQUFJOzs7Ozs7Ozs7Ozs7MkJBNUN6QnBDOzs7Ozs7Ozs7OzswQkFrRGIsOERBQUNqQyw0REFBZUE7MEJBQ2JXLGtFQUFnQixDQUFDLENBQUNnQyxNQUFNVixRQUFVO29CQUNqQyxxQkFDRSw4REFBQ25DLDJEQUFjQTt3QkFFYm1DLE9BQU9BO3dCQUNQWSxRQUFROUI7d0JBQ1IrQixTQUFTLENBQUN0QixJQUFNRCxZQUFZQyxHQUFHUzt3QkFDL0JxQyxNQUFLO2tDQUVMLDRFQUFDdkUsOERBQWlCQTs0QkFBQzhDLFFBQVE5Qjs7Ozs7O3VCQU50QmtCOzs7OztnQkFTWDs7Ozs7OzBCQUVGLDhEQUFDekIsb0VBQWNBOzs7Ozs7Ozs7OztBQUdyQjtHQXZJTU07S0FBQUE7QUF5SU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/OTEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIENhcm91c2VsQnV0dG9uLFxuICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgQ2Fyb3VzZWxCdXR0b25zLFxuICBDYXJvdXNlbENvbnRhaW5lcixcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbEl0ZW1JbWcsXG4gIENhcm91c2VsSXRlbVRleHQsXG4gIENhcm91c2VsSXRlbVRpdGxlLFxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHRBYm91dCxcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG4gICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKVxuICAgICAgKTtcblxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb25UZXh0QWJvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgV2l0aCBhbiBleGNlbGxlbnQgYmFja2dyb3VuZCBpbiB0aGUgc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kXG4gICAgICAgICAgaW5kdXN0cmlhbCBhdXRvbWF0aW9uIHNwYWNlLCBpIGFtIHdlbGwgcG9pc2VkIHRvIGRlbGl2ZXJcbiAgICAgICAgICBpbmR1c3RyeS1zdGFuZGFyZCwgYmVzdC1wcmFjdGljZSBBUEkgYW5kIGZyb250LWVuZCBzb2Z0d2FyZSBzb2x1dGlvbnNcbiAgICAgICAgICB1c2luZyB0aGUgTUVSTiBzdGFjay4gSSBoYXZlIHdvcmtlZCB3aXRoIHZhcmlvdXMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzXG4gICAgICAgICAgYW5kIGdhaW5lZCBwcm9maWNpZW5jeSBpbiBOb2RlSlMgYW5kIGFzc29jaWF0ZWQgdGVjaG5vbG9naWVzIGluY2x1ZGluZ1xuICAgICAgICAgIFJFU1RmdWwgQVBJIHdpdGggRXhwcmVzc0pTLCBOb1NRTCBEYXRhYmFzZSBzdWNoIGFzIE1vbmdvREIsXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFNRTCBkYXRhYmFzZXMgc3VjaCBhcyBTUUxpdGUgYW5kIFBvc3RncmVzLCBDb250YWluZXJpemF0aW9uIGFuZCBEZXZPcHNcbiAgICAgICAgICB0b29scyBpbmNsdWRpbmcgRG9ja2VyIGFuZCBLdWJlcm5hdGVzIGFzIHdlbGwgYXMgZnJvbnQtZW5kIHNvbHV0aW9uc1xuICAgICAgICAgIHdpdGggUmVhY3QuanMgYW5kIFJlYWN0LnRzLiBNeSBzdHJlbmd0aHMgYXJlIHByb2JsZW0tc29sdmluZyBza2lsbHNcbiAgICAgICAgICAoaW5jbHVkaW5nIGRlYnVnZ2luZywgdHJvdWJsZXNob290aW5nIGFuZCBmaXhpbmcpLCBhYmlsaXR5IHRvIHF1aWNrbHlcbiAgICAgICAgICBncmFzcCBuZXcgdGVjaG5vbG9naWVzIGFuZCBhZGFwdCB0aGVtIHRvIHNvbHZlIHByb2JsZW1zIGluIHRoZVxuICAgICAgICAgIGZhc3QtcGFjZWQgSVQgc3BhY2UuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uVGV4dEFib3V0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLnllYXJ9YH1cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDUuNUMzLjg4MDcxIDUuNSA1IDQuMzgwNzEgNSAzVjMuNUwyMDggMy41MDAwMlYyLjUwMDAyTDUgMi41VjNDNSAxLjYxOTI5IDMuODgwNzEgMC41IDIuNSAwLjVDMS4xMTkyOSAwLjUgMCAxLjYxOTI5IDAgM0MwIDQuMzgwNzEgMS4xMTkyOSA1LjUgMi41IDUuNVpcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT1cIjAuMzNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT1cIi00LjMwNDEyZS0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjAuNTAwMjk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XG4gICAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHRBYm91dCIsIlNlY3Rpb25UaXRsZSIsIlRpbWVMaW5lRGF0YSIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwibGVuZ3RoIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJkaXYiLCJyZWYiLCJvblNjcm9sbCIsIm1hcCIsIml0ZW0iLCJmaW5hbCIsImFjdGl2ZSIsIm9uQ2xpY2siLCJ5ZWFyIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJkIiwiZmlsbE9wYWNpdHkiLCJkZWZzIiwibGluZWFyR3JhZGllbnQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImdyYWRpZW50VW5pdHMiLCJzdG9wIiwic3RvcENvbG9yIiwib2Zmc2V0Iiwic3RvcE9wYWNpdHkiLCJ0ZXh0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});