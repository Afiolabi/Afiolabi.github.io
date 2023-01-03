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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nconst Timeline = ()=>{\n    _s();\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const scroll = (node, left)=>{\n        return node.scrollTo({\n            left,\n            behavior: \"smooth\"\n        });\n    };\n    const handleClick = (e, i)=>{\n        e.preventDefault();\n        if (carouselRef.current) {\n            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    const handleScroll = ()=>{\n        if (carouselRef.current) {\n            const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n            setActiveItem(index);\n        }\n    };\n    // snap back to beginning of scroll when window is resized\n    // avoids a bug where content is covered up if coming from smaller screen\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            scroll(carouselRef.current, 0);\n        };\n        window.addEventListener(\"resize\", handleResize);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"With an excellent background in the software development and industrial automation space, i am well poised to deliver industry-standard, best-practice API and front-end software solutions using the MERN stack. I have worked with various programming languages and gained proficiency in NodeJS and associated technologies including RESTful API with ExpressJS, NoSQL Database such as MongoDB, SQL databases such as SQLite and Postgres, Containerization\"\n                    }, void 0, false, {\n                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"and DevOps tools including Docker and Kubernates as well as front-end solutions with ReactJS and ReactTs. My strengths are problem-solving skills (including debugging, troubleshooting and fixing), ability to quickly grasp new technologies and adapt them to solve problems in the fast-paced IT space. PLCs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                onScroll: handleScroll,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel__item-\".concat(index),\n                                active: activeItem,\n                                onClick: (e)=>handleClick(e, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                        children: [\n                                            \"\".concat(item.year),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                                width: \"208\",\n                                                height: \"6\",\n                                                viewBox: \"0 0 208 6\",\n                                                fill: \"none\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        fillRule: \"evenodd\",\n                                                        clipRule: \"evenodd\",\n                                                        d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                        fill: \"url(#paint0_linear)\",\n                                                        fillOpacity: \"0.33\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 110,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                            id: \"paint0_linear\",\n                                                            x1: \"-4.30412e-10\",\n                                                            y1: \"0.5\",\n                                                            x2: \"208\",\n                                                            y2: \"0.500295\",\n                                                            gradientUnits: \"userSpaceOnUse\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    stopColor: \"white\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                                    lineNumber: 126,\n                                                                    columnNumber: 25\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    offset: \"0.79478\",\n                                                                    stopColor: \"white\",\n                                                                    stopOpacity: \"0\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                                    lineNumber: 127,\n                                                                    columnNumber: 25\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                            lineNumber: 118,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 117,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: activeItem,\n                        onClick: (e)=>handleClick(e, index),\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n                            active: activeItem\n                        }, void 0, false, {\n                            fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 152,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n                fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/administrator/Desktop/DECAGON/Afiolabi.github.io/src/components/TimeLine/TimeLine.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEyRDtBQVlqQztBQU1hO0FBQ2tCO0FBRXpELE1BQU1rQix1QkFBdUJELHFFQUFtQjtBQUVoRCxNQUFNRyxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHckIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTXNCLGNBQWNyQiw2Q0FBTUE7SUFFMUIsTUFBTXNCLFNBQVMsQ0FBQ0MsTUFBTUMsT0FBUztRQUM3QixPQUFPRCxLQUFLRSxRQUFRLENBQUM7WUFBRUQ7WUFBTUUsVUFBVTtRQUFTO0lBQ2xEO0lBRUEsTUFBTUMsY0FBYyxDQUFDQyxHQUFHQyxJQUFNO1FBQzVCRCxFQUFFRSxjQUFjO1FBRWhCLElBQUlULFlBQVlVLE9BQU8sRUFBRTtZQUN2QixNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQzNCYixZQUFZVSxPQUFPLENBQUNJLFdBQVcsR0FBRyxNQUFPTixDQUFBQSxJQUFJZCxxRUFBbUI7WUFHbEVPLE9BQU9ELFlBQVlVLE9BQU8sRUFBRUM7UUFDOUIsQ0FBQztJQUNIO0lBRUEsTUFBTUksZUFBZSxJQUFNO1FBQ3pCLElBQUlmLFlBQVlVLE9BQU8sRUFBRTtZQUN2QixNQUFNTSxRQUFRSixLQUFLSyxLQUFLLENBQ3RCLFlBQWFQLE9BQU8sQ0FBQ0MsVUFBVSxHQUM1QlgsQ0FBQUEsWUFBWVUsT0FBTyxDQUFDSSxXQUFXLEdBQUcsR0FBRSxJQUNyQ3BCLHFFQUFtQjtZQUd2QkssY0FBY2lCO1FBQ2hCLENBQUM7SUFDSDtJQUVBLDBEQUEwRDtJQUMxRCx5RUFBeUU7SUFDekVwQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXNDLGVBQWUsSUFBTTtZQUN6QmpCLE9BQU9ELFlBQVlVLE9BQU8sRUFBRTtRQUM5QjtRQUVBUyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVRjtJQUNwQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzVCLDZEQUFPQTtRQUFDK0IsSUFBRzs7MEJBQ1YsOERBQUM1QixrRUFBWUE7MEJBQUM7Ozs7OzswQkFDZCw4REFBQ0QsaUVBQVdBOztrQ0FDViw4REFBQzhCO2tDQUFJOzs7Ozs7a0NBU0wsOERBQUNBO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBU1AsOERBQUN0Qyw4REFBaUJBO2dCQUFDdUMsS0FBS3ZCO2dCQUFhd0IsVUFBVVQ7MEJBQzdDOzhCQUNHckIsa0VBQWdCLENBQUMsQ0FBQ2dDLE1BQU1WLHNCQUN2Qiw4REFBQzNCLHFFQUF3QkE7NEJBRXZCc0MsT0FBT1gsVUFBVXJCLHVCQUF1QjtzQ0FFeEMsNEVBQUNWLHlEQUFZQTtnQ0FDWCtCLE9BQU9BO2dDQUNQSyxJQUFJLGtCQUF3QixPQUFOTDtnQ0FDdEJZLFFBQVE5QjtnQ0FDUitCLFNBQVMsQ0FBQ3RCLElBQU1ELFlBQVlDLEdBQUdTOztrREFFL0IsOERBQUM1Qiw4REFBaUJBOzs0Q0FDZCxHQUFZLE9BQVZzQyxLQUFLSSxJQUFJOzBEQUNiLDhEQUFDNUMsNERBQWVBO2dEQUNkNkMsT0FBTTtnREFDTkMsUUFBTztnREFDUEMsU0FBUTtnREFDUkMsTUFBSztnREFDTEMsT0FBTTs7a0VBRU4sOERBQUNDO3dEQUNDQyxVQUFTO3dEQUNUQyxVQUFTO3dEQUNUQyxHQUFFO3dEQUNGTCxNQUFLO3dEQUNMTSxhQUFZOzs7Ozs7a0VBRWQsOERBQUNDO2tFQUNDLDRFQUFDQzs0REFDQ3JCLElBQUc7NERBQ0hzQixJQUFHOzREQUNIQyxJQUFHOzREQUNIQyxJQUFHOzREQUNIQyxJQUFHOzREQUNIQyxlQUFjOzs4RUFFZCw4REFBQ0M7b0VBQUtDLFdBQVU7Ozs7Ozs4RUFDaEIsOERBQUNEO29FQUNDRSxRQUFPO29FQUNQRCxXQUFVO29FQUNWRSxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFNdEIsOERBQUNoRSw2REFBZ0JBO2tEQUFFdUMsS0FBSzBCLElBQUk7Ozs7Ozs7Ozs7OzsyQkE1Q3pCcEM7Ozs7Ozs7Ozs7OzBCQWtEYiw4REFBQ2pDLDREQUFlQTswQkFDYlcsa0VBQWdCLENBQUMsQ0FBQ2dDLE1BQU1WLFFBQVU7b0JBQ2pDLHFCQUNFLDhEQUFDbkMsMkRBQWNBO3dCQUVibUMsT0FBT0E7d0JBQ1BZLFFBQVE5Qjt3QkFDUitCLFNBQVMsQ0FBQ3RCLElBQU1ELFlBQVlDLEdBQUdTO3dCQUMvQnFDLE1BQUs7a0NBRUwsNEVBQUN2RSw4REFBaUJBOzRCQUFDOEMsUUFBUTlCOzs7Ozs7dUJBTnRCa0I7Ozs7O2dCQVNYOzs7Ozs7MEJBRUYsOERBQUN6QixvRUFBY0E7Ozs7Ozs7Ozs7O0FBR3JCO0dBeElNTTtLQUFBQTtBQTBJTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcz85MTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgQ2Fyb3VzZWxCdXR0b24sXG4gIENhcm91c2VsQnV0dG9uRG90LFxuICBDYXJvdXNlbEJ1dHRvbnMsXG4gIENhcm91c2VsQ29udGFpbmVyLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsSXRlbUltZyxcbiAgQ2Fyb3VzZWxJdGVtVGV4dCxcbiAgQ2Fyb3VzZWxJdGVtVGl0bGUsXG4gIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSxcbn0gZnJvbSBcIi4vVGltZUxpbmVTdHlsZXNcIjtcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGV4dCxcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG4gICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKVxuICAgICAgKTtcblxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFdpdGggYW4gZXhjZWxsZW50IGJhY2tncm91bmQgaW4gdGhlIHNvZnR3YXJlIGRldmVsb3BtZW50IGFuZFxuICAgICAgICAgIGluZHVzdHJpYWwgYXV0b21hdGlvbiBzcGFjZSwgaSBhbSB3ZWxsIHBvaXNlZCB0byBkZWxpdmVyXG4gICAgICAgICAgaW5kdXN0cnktc3RhbmRhcmQsIGJlc3QtcHJhY3RpY2UgQVBJIGFuZCBmcm9udC1lbmQgc29mdHdhcmUgc29sdXRpb25zXG4gICAgICAgICAgdXNpbmcgdGhlIE1FUk4gc3RhY2suIEkgaGF2ZSB3b3JrZWQgd2l0aCB2YXJpb3VzIHByb2dyYW1taW5nIGxhbmd1YWdlc1xuICAgICAgICAgIGFuZCBnYWluZWQgcHJvZmljaWVuY3kgaW4gTm9kZUpTIGFuZCBhc3NvY2lhdGVkIHRlY2hub2xvZ2llcyBpbmNsdWRpbmdcbiAgICAgICAgICBSRVNUZnVsIEFQSSB3aXRoIEV4cHJlc3NKUywgTm9TUUwgRGF0YWJhc2Ugc3VjaCBhcyBNb25nb0RCLCBTUUxcbiAgICAgICAgICBkYXRhYmFzZXMgc3VjaCBhcyBTUUxpdGUgYW5kIFBvc3RncmVzLCBDb250YWluZXJpemF0aW9uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIGFuZCBEZXZPcHMgdG9vbHMgaW5jbHVkaW5nIERvY2tlciBhbmQgS3ViZXJuYXRlcyBhcyB3ZWxsIGFzIGZyb250LWVuZFxuICAgICAgICAgIHNvbHV0aW9ucyB3aXRoIFJlYWN0SlMgYW5kIFJlYWN0VHMuIE15IHN0cmVuZ3RocyBhcmVcbiAgICAgICAgICBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzIChpbmNsdWRpbmcgZGVidWdnaW5nLCB0cm91Ymxlc2hvb3RpbmcgYW5kXG4gICAgICAgICAgZml4aW5nKSwgYWJpbGl0eSB0byBxdWlja2x5IGdyYXNwIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGFkYXB0IHRoZW0gdG9cbiAgICAgICAgICBzb2x2ZSBwcm9ibGVtcyBpbiB0aGUgZmFzdC1wYWNlZCBJVCBzcGFjZS5cbiAgICAgICAgICBQTENzXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cbiAgICAgICAgPD5cbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgICB7YCR7aXRlbS55ZWFyfWB9XG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbEJ1dHRvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsIlNlY3Rpb24iLCJTZWN0aW9uRGl2aWRlciIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvblRpdGxlIiwiVGltZUxpbmVEYXRhIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJsZW5ndGgiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwiaGFuZGxlU2Nyb2xsIiwiaW5kZXgiLCJyb3VuZCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImRpdiIsInJlZiIsIm9uU2Nyb2xsIiwibWFwIiwiaXRlbSIsImZpbmFsIiwiYWN0aXZlIiwib25DbGljayIsInllYXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImQiLCJmaWxsT3BhY2l0eSIsImRlZnMiLCJsaW5lYXJHcmFkaWVudCIsIngxIiwieTEiLCJ4MiIsInkyIiwiZ3JhZGllbnRVbml0cyIsInN0b3AiLCJzdG9wQ29sb3IiLCJvZmZzZXQiLCJzdG9wT3BhY2l0eSIsInRleHQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});