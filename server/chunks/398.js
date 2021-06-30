exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 9398:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3651);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_blurhash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6435);
/* harmony import */ var react_blurhash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_blurhash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);






const LazyImage = props => {
  const {
    src,
    blurHash,
    width,
    height,
    size,
    layout,
    rounded
  } = props;
  const placeholder = '/assets/images/placeholder.png';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    delay: 500,
    src: src,
    placeholder: placeholder,
    children: (src, loading) => {
      return loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_blurhash__WEBPACK_IMPORTED_MODULE_3__.BlurhashCanvas, {
        hash: blurHash,
        width: width,
        height: height,
        punch: 1,
        style: {
          borderRadius: rounded ? "5px" : ""
        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
        src: src,
        objectFit: "cover",
        alt: "cover image",
        width: width,
        height: height,
        size: size,
        layout: layout,
        rounded: rounded,
        fallbackSrc: placeholder
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (LazyImage);

/***/ })

};
;