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

/***/ "./components/home/MostRead.jsx":
/*!**************************************!*\
  !*** ./components/home/MostRead.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MostReadPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MostReadPost */ \"./components/home/MostReadPost.jsx\");\n/* harmony import */ var _data_files_posts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../data/files/posts.js */ \"./data/files/posts.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MostRead = function() {\n    var _this1 = _this;\n    _s();\n    var arr = _data_files_posts_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].slice().sort(function(a, b) {\n        return new Date(a.views) - new Date(b.views);\n    }).reverse();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), /*#__PURE__*/ width = ref[0], setWidth = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), count = ref1[0], setCount = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return setInterval(function() {\n            if (width !== window.document.getElementsByClassName(\"most-read\")[0].offsetWidth) {\n                width = window.document.getElementsByClassName(\"most-read\")[0].offsetWidth;\n                setWidth(width);\n            }\n        }, 100);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n            [\n                \"a01b647877bf60b\",\n                [\n                    width\n                ]\n            ]\n        ]) + \" \" + \"mr-background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"a01b647877bf60b\",\n                        [\n                            width\n                        ]\n                    ]\n                ]) + \" \" + \"mr-carousel\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"a01b647877bf60b\",\n                                [\n                                    width\n                                ]\n                            ]\n                        ]) + \" \" + \"mr-top\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"a01b647877bf60b\",\n                                        [\n                                            width\n                                        ]\n                                    ]\n                                ]) + \" \" + \"title\",\n                                children: \"Самое читаемое\"\n                            }, void 0, false, {\n                                fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"a01b647877bf60b\",\n                                        [\n                                            width\n                                        ]\n                                    ]\n                                ]) + \" \" + \"arrows\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return setCount(count - 1);\n                                        },\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"a01b647877bf60b\",\n                                                [\n                                                    width\n                                                ]\n                                            ]\n                                        ]) + \" \" + \"arrow\",\n                                        children: \"←\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return setCount(count + 1);\n                                        },\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"a01b647877bf60b\",\n                                                [\n                                                    width\n                                                ]\n                                            ]\n                                        ]) + \" \" + \"arrow\",\n                                        children: \"→\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"a01b647877bf60b\",\n                                        [\n                                            width\n                                        ]\n                                    ]\n                                ]) + \" \" + \"arrows medium\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return setCount(count - 3);\n                                        },\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"a01b647877bf60b\",\n                                                [\n                                                    width\n                                                ]\n                                            ]\n                                        ]) + \" \" + \"arrow\",\n                                        children: \"←\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return setCount(count + 3);\n                                        },\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"a01b647877bf60b\",\n                                                [\n                                                    width\n                                                ]\n                                            ]\n                                        ]) + \" \" + \"arrow\",\n                                        children: \"→\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"a01b647877bf60b\",\n                                        [\n                                            width\n                                        ]\n                                    ]\n                                ]) + \" \" + \"arrows wide\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return setCount(count - 4);\n                                        },\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"a01b647877bf60b\",\n                                                [\n                                                    width\n                                                ]\n                                            ]\n                                        ]) + \" \" + \"arrow\",\n                                        children: \"←\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return setCount(count + 4);\n                                        },\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"a01b647877bf60b\",\n                                                [\n                                                    width\n                                                ]\n                                            ]\n                                        ]) + \" \" + \"arrow\",\n                                        children: \"→\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"a01b647877bf60b\",\n                                [\n                                    width\n                                ]\n                            ]\n                        ]) + \" \" + \"mr-bottom\",\n                        children: arr.map(function(item, id) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"a01b647877bf60b\",\n                                        [\n                                            width\n                                        ]\n                                    ]\n                                ]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MostReadPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    id: id + count,\n                                    arr: arr\n                                }, void 0, false, {\n                                    fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, item.id, false, {\n                                fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a01b647877bf60b\",\n                dynamic: [\n                    width\n                ],\n                children: \"@media (min-width:0px) {.mr-four.__jsx-style-dynamic-selector{visibility:hidden;\\nposition:absolute}\\n.mr-three.__jsx-style-dynamic-selector{visibility:hidden;\\nposition:absolute}\\n.mob.__jsx-style-dynamic-selector{visibility:visible;\\nposition:relative}\\n.title.__jsx-style-dynamic-selector{margin-left:1rem}\\n.arrows.__jsx-style-dynamic-selector{margin-right:1rem}\\n.medium.__jsx-style-dynamic-selector{position:absolute;\\nvisibility:hidden}\\n.wide.__jsx-style-dynamic-selector{position:absolute;\\nvisibility:hidden}}\\n@media (min-width:800px) {.mr-four.__jsx-style-dynamic-selector{visibility:hidden;\\nposition:absolute}\\n.mr-three.__jsx-style-dynamic-selector{visibility:visible;\\nposition:relative}\\n.mob.__jsx-style-dynamic-selector{visibility:hidden;\\nposition:absolute}\\n.title.__jsx-style-dynamic-selector{margin:0}\\n.arrows.__jsx-style-dynamic-selector{margin-right:0}}\\n@media (min-width:1400px) {.mr-three.__jsx-style-dynamic-selector{visibility:hidden;\\nposition:absolute}\\n.mr-four.__jsx-style-dynamic-selector{visibility:visible;\\nposition:relative}}\\n.mr-background.__jsx-style-dynamic-selector{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-justify-content:center;\\njustify-content:center;\\nbackground-color:#f2f2f2;\\nposition:absolute;\\nwidth:100%;\\nleft:0}\\n.mr-carousel.__jsx-style-dynamic-selector{width:\".concat(width, \"px}\\n.mr-top.__jsx-style-dynamic-selector{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nborder-top:5px solid #d92121;\\nmargin:auto;\\npadding-top:1rem}\\n.mr-bottom.__jsx-style-dynamic-selector{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-justify-content:left;\\njustify-content:left;\\noverflow:hidden;\\nmargin-top:0.5rem}\\n.title.__jsx-style-dynamic-selector{overflow:hidden;\\nmargin-right:auto;\\nletter-spacing:1px;\\ntext-transform:uppercase;\\ncolor:#d92121;\\nfont-weight:bold;\\nfont-size:1.5rem}\\n.arrows.__jsx-style-dynamic-selector{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\ngap:0.5rem;\\nfont-size:1.5rem;\\nfont-style:monospace}\\n.arrow.__jsx-style-dynamic-selector{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nborder:0.15rem solid grey;\\npadding-bottom:0.19rem;\\n-webkit-justify-content:center;\\njustify-content:center;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\nborder-radius:99999px;\\nheight:2rem;\\nwidth:2rem}\\n.arrow.__jsx-style-dynamic-selector:hover{color:red;\\ncursor:pointer}\")\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/garegin1/Desktop/code stuff/Rossiya/np_russia_front/components/home/MostRead.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_s(MostRead, \"OXS62ODG4RQsK7Ahu3eBIqyuJeo=\");\n_c = MostRead;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MostRead);\nvar _c;\n$RefreshReg$(_c, \"MostRead\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvTW9zdFJlYWQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Q7QUFDRjs7O0FBQ3ZDLEdBQUssQ0FBQ0ssUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7OztJQUN0QixHQUFLLENBQUNDLEdBQUcsR0FBR0Ysa0VBQ0osR0FDTEksSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDO1FBQUssTUFBTSxDQUFOLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDRixDQUFDLENBQUNHLEtBQUssSUFBSSxHQUFHLENBQUNELElBQUksQ0FBQ0QsQ0FBQyxDQUFDRSxLQUFLO09BQ25EQyxPQUFPO0lBQ1YsR0FBSyxDQUFxQlosR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsaUJBQTdCYSxLQUFLLEdBQWNiLEdBQVcsS0FBdkJjLFFBQVEsR0FBSWQsR0FBVztJQUNyQyxHQUFLLENBQXFCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3QmUsS0FBSyxHQUFjZixJQUFXLEtBQXZCZ0IsUUFBUSxHQUFJaEIsSUFBVztJQUNyQ0MsZ0RBQVMsQ0FDUCxRQUNGO1FBQUlnQixNQUFNLENBQU5BLFdBQVcsQ0FBQyxRQUNsQixHQUR3QixDQUFDO1lBQ2pCLEVBQUUsRUFDQUosS0FBSyxLQUNISyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsQ0FBVyxZQUFFLENBQUMsRUFBRUMsV0FBVyxFQUNwRSxDQUFDO2dCQUNEUixLQUFLLEdBQ0hLLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxDQUFXLFlBQUUsQ0FBQyxFQUFFQyxXQUFXO2dCQUNwRVAsUUFBUSxDQUFDRCxLQUFLO1lBQ2hCLENBQUM7UUFDSCxDQUFDLEVBQUUsR0FBRztPQUNSLENBQUMsQ0FBQztJQUVKLE1BQU0sNkVBQ0hTLENBQUc7Ozs7O29CQXlHV1QsS0FBSzs7O21CQXpHTCxDQUFlOzt3RkFDM0JTLENBQUc7Ozs7OzRCQXdHU1QsS0FBSzs7OzJCQXhHSCxDQUFhOztnR0FDekJTLENBQUc7Ozs7O29DQXVHT1QsS0FBSzs7O21DQXZHRCxDQUFROzt3R0FDcEJTLENBQUc7Ozs7OzRDQXNHS1QsS0FBSzs7OzJDQXRHQyxDQUFPOzBDQUFDLENBQWM7Ozs7Ozt3R0FDdkJTLENBQVY7Ozs7OzRDQXFHS1QsS0FBSzs7OzJDQXJHQyxDQUFROztnSEFDcEJTLENBQUc7d0NBQW1CQyxPQUFPLEVBQUUsUUFBUTs0Q0FBRlAsTUFBTSxDQUFOQSxRQUFRLENBQUNELEtBQUssR0FBQyxDQUFDOzs7Ozs7b0RBb0cvQ0YsS0FBSzs7O21EQXBHRyxDQUFPO2tEQUFtQyxDQUV6RDs7Ozs7O2dIQUNDUyxDQUFHO3dDQUFtQkMsT0FBTyxFQUFFLFFBQVE7NENBQUZQLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBQzs7Ozs7O29EQWlHL0NGLEtBQUs7OzttREFqR0csQ0FBTztrREFBbUMsQ0FFekQ7Ozs7Ozs7Ozs7Ozt3R0FFRFMsQ0FBRzs7Ozs7NENBNkZLVCxLQUFLOzs7MkNBN0ZDLENBQWU7O2dIQUMzQlMsQ0FBRzt3Q0FBbUJDLE9BQU8sRUFBRSxRQUFROzRDQUFGUCxNQUFNLENBQU5BLFFBQVEsQ0FBQ0QsS0FBSyxHQUFDLENBQUM7Ozs7OztvREE0Ri9DRixLQUFLOzs7bURBNUZHLENBQU87a0RBQW1DLENBRXpEOzs7Ozs7Z0hBQ0NTLENBQUc7d0NBQW1CQyxPQUFPLEVBQUUsUUFBUTs0Q0FBRlAsTUFBTSxDQUFOQSxRQUFRLENBQUNELEtBQUssR0FBQyxDQUFDOzs7Ozs7b0RBeUYvQ0YsS0FBSzs7O21EQXpGRyxDQUFPO2tEQUFtQyxDQUV6RDs7Ozs7Ozs7Ozs7O3dHQUVEUyxDQUFHOzs7Ozs0Q0FxRktULEtBQUs7OzsyQ0FyRkMsQ0FBYTs7Z0hBQ3pCUyxDQUFHO3dDQUFtQkMsT0FBTyxFQUFFLFFBQVE7NENBQUZQLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBQzs7Ozs7O29EQW9GL0NGLEtBQUs7OzttREFwRkcsQ0FBTztrREFBbUMsQ0FFekQ7Ozs7OztnSEFDQ1MsQ0FBRzt3Q0FBbUJDLE9BQU8sRUFBRSxRQUFROzRDQUFGUCxNQUFNLENBQU5BLFFBQVEsQ0FBQ0QsS0FBSyxHQUFDLENBQUM7Ozs7OztvREFpRi9DRixLQUFLOzs7bURBakZHLENBQU87a0RBQW1DLENBRXpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR0hTLENBQUc7Ozs7O29DQTRFT1QsS0FBSzs7O21DQTVFRCxDQUFXO2tDQUN2QlIsR0FBRyxDQUFDbUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxFQUFFOzBDQUNoQixNQUFNLCtEQUFMSixDQUFHOzs7Ozs0Q0EwRUdULEtBQUs7Ozs7c0hBekVUWCxxREFBWTtvQ0FBQ3dCLEVBQUUsRUFBRUEsRUFBRSxHQUFHWCxLQUFLO29DQUFFVixHQUFHLEVBQUVBLEdBQUc7Ozs7OzsrQkFEOUJvQixJQUFJLENBQUNDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTBFVmIsS0FBSzs7NDNDQUFMQSxLQUFLOzs7Ozs7OztBQThDeEIsQ0FBQztHQTdLS1QsUUFBUTtLQUFSQSxRQUFRO0FBK0tkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL01vc3RSZWFkLmpzeD8xNTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9zdFJlYWRQb3N0IGZyb20gXCIuL01vc3RSZWFkUG9zdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi9kYXRhL2ZpbGVzL3Bvc3RzLmpzXCI7XG5jb25zdCBNb3N0UmVhZCA9ICgpID0+IHtcbiAgY29uc3QgYXJyID0gZGF0YVxuICAgIC5zbGljZSgpXG4gICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEudmlld3MpIC0gbmV3IERhdGUoYi52aWV3cykpXG4gICAgLnJldmVyc2UoKTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB3aWR0aCAhPT1cbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9zdC1yZWFkXCIpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIHdpZHRoID1cbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9zdC1yZWFkXCIpWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgIHNldFdpZHRoKHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKSxcbiAgICBbXVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1jYXJvdXNlbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLXRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7QodCw0LzQvtC1INGH0LjRgtCw0LXQvNC+0LU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50LTEpfT5cbiAgICAgICAgICAgICAg4oaQXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCsxKX0+XG4gICAgICAgICAgICAgIOKGklxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd3MgbWVkaXVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQtMyl9PlxuICAgICAgICAgICAgICDihpBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50KzMpfT5cbiAgICAgICAgICAgICAg4oaSXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93cyB3aWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQtNCl9PlxuICAgICAgICAgICAgICDihpBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50KzQpfT5cbiAgICAgICAgICAgICAg4oaSXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYm90dG9tXCI+XG4gICAgICAgICAge2Fyci5tYXAoKGl0ZW0sIGlkKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxNb3N0UmVhZFBvc3QgaWQ9e2lkICsgY291bnR9IGFycj17YXJyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAwcHgpIHtcbiAgICAgICAgICAubXItZm91ciB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tci10aHJlZSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2Ige1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJyb3dzIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGl1bSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC53aWRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLm1yLWZvdXIge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubXItdGhyZWUge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnJvd3Mge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgICAgICAgLm1yLXRocmVlIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1yLWZvdXIge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1yLWJhY2tncm91bmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAubXItY2Fyb3VzZWwge1xuICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tci10b3Age1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkOTIxMjE7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5tci1ib3R0b20ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiAjZDkyMTIxO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvd3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC1zdHlsZTogbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgZ3JleTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4xOXJlbTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTk5cHg7XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvdzpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vc3RSZWFkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb3N0UmVhZFBvc3QiLCJkYXRhIiwiTW9zdFJlYWQiLCJhcnIiLCJzbGljZSIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJ2aWV3cyIsInJldmVyc2UiLCJ3aWR0aCIsInNldFdpZHRoIiwiY291bnQiLCJzZXRDb3VudCIsInNldEludGVydmFsIiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0V2lkdGgiLCJkaXYiLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/MostRead.jsx\n");

/***/ })

});