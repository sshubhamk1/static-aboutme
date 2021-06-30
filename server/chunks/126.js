exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 6277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ header; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./components/ui/underlined-text.tsx




const UnderlinedText = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
  as: "span",
  display: "inline-block",
  position: "relative",
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    as: "span",
    display: "block",
    position: "absolute",
    bg: 'gray.200',
    w: '100%',
    h: props.h || '1px',
    bottom: -2
  })]
});

/* harmony default export */ var underlined_text = (UnderlinedText);
;// CONCATENATED MODULE: ./components/layout/header.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Header = (_ref) => {
  let {
    children,
    underlineColor,
    emoji
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "underlineColor", "emoji"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, _objectSpread(_objectSpread({
    as: "h1",
    mt: 10,
    mb: 6,
    fontSize: "3xl",
    lineHeight: "shorter",
    fontWeight: "bold"
  }, props), {}, {
    textAlign: "left",
    children: [/*#__PURE__*/jsx_runtime_.jsx(underlined_text, {
      color: underlineColor,
      children: children
    }), emoji ? ' ' + emoji : '']
  }));
};

/* harmony default export */ var header = (Header);

/***/ }),

/***/ 9848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


 //@ts-ignore

const Meta = ({
  title,
  keywords,
  description
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: title
    })]
  });
};

Meta.defaultProps = {
  title: 'Shubham Kumar - Senior Software Engineer',
  keywords: 'web development, programming, networking,cryptography',
  description: 'Software Engineer. Lover of web and apisources.'
};
/* harmony default export */ __webpack_exports__["Z"] = (Meta);

/***/ }),

/***/ 29:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uH": function() { return /* binding */ MotionBox; },
/* harmony export */   "HZ": function() { return /* binding */ MotionFlex; },
/* harmony export */   "Jd": function() { return /* binding */ MotionImage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)( //@ts-ignore
(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, _objectSpread({
    ref: ref
  }, chakraProps));
}));
const MotionFlex = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)( //@ts-ignore
(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread({
    ref: ref
  }, chakraProps));
}));
const MotionImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)( //@ts-ignore
(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, _objectSpread({
    ref: ref,
    fallbackSrc: '/assets/images/placeholder.png'
  }, chakraProps));
}));

/***/ })

};
;