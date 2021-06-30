(function() {
var exports = {};
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 7757:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_achievements; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(6893);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./components/achievements/Timeline.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const TimelineItem = (_ref) => {
  let {
    icon = index_esm/* FiCheckCircle */._rq,
    boxProps = {},
    skipTrail = false,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "boxProps", "skipTrail", "children"]);

  const color = (0,react_.useColorModeValue)("gray.700", "gray.500");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, _objectSpread(_objectSpread({
    minH: 20
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      flexDir: "column",
      alignItems: "center",
      mr: 4,
      pos: "relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Circle, {
        size: 12,
        bg: (0,react_.useColorModeValue)("gray.600", "gray.500"),
        opacity: (0,react_.useColorModeValue)(0.07, 0.15),
        sx: {}
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        as: icon,
        size: "1.25rem",
        color: color,
        pos: "absolute",
        left: "0.875rem",
        top: "0.875rem"
      }), !skipTrail && /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        w: "1px",
        flex: 1,
        bg: color,
        my: 1
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, _objectSpread(_objectSpread({
      pt: 3
    }, boxProps), {}, {
      children: children
    }))]
  }));
};
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/achievements/achievements.tsx



function achievements_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function achievements_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { achievements_ownKeys(Object(source), true).forEach(function (key) { achievements_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { achievements_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function achievements_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function achievements_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = achievements_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function achievements_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ExternalLink = (_ref) => {
  let {
    url,
    linkProps,
    text
  } = _ref,
      props = achievements_objectWithoutProperties(_ref, ["url", "linkProps", "text"]);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: url,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, achievements_objectSpread(achievements_objectSpread(achievements_objectSpread({}, linkProps), props), {}, {
      children: text
    }))
  });
};

const InternalLink = (_ref2) => {
  let {
    url,
    linkProps,
    text
  } = _ref2,
      props = achievements_objectWithoutProperties(_ref2, ["url", "linkProps", "text"]);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: url,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, achievements_objectSpread(achievements_objectSpread(achievements_objectSpread({}, linkProps), props), {}, {
      children: text
    }))
  });
};

const Achievements = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_transitions/* PageSlideFade */.f6, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      align: "start",
      mb: 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
        mt: 0,
        mb: 0,
        children: "Achievements"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      textAlign: "start",
      align: "start",
      mb: 5,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
          fontSize: "2xl",
          fontWeight: "600",
          my: 5,
          children: "2021"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TimelineItem, {
            icon: index_esm/* FiUsers */.WY8,
            children: "Awarded Master of Tecchonology"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimelineItem, {
            icon: index_esm/* FiPackage */.zFh,
            children: ["Published or contributed to", " ", /*#__PURE__*/jsx_runtime_.jsx(InternalLink, {
              color: "blue.200",
              url: "/open-source",
              text: "9 open-source repositories"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimelineItem, {
            icon: index_esm/* FiHome */.m6D,
            skipTrail: true,
            children: ["Rebuilt my portfolio website with React, ChakraUI and Framer-motion,", " ", /*#__PURE__*/jsx_runtime_.jsx(ExternalLink, {
              color: "blue.200",
              url: "https://github.com/sshubhamk1/portfolio",
              text: "source on Github",
              target: "_blank"
            }), "."]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
          fontSize: "2xl",
          fontWeight: "600",
          my: 5,
          children: "2020"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TimelineItem, {
            icon: index_esm/* FiEdit2 */.IYd,
            children: "Wrote blog posts in geeksforgeeks"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimelineItem, {
            icon: index_esm/* FiPackage */.zFh,
            children: ["Published or contributed to", " ", /*#__PURE__*/jsx_runtime_.jsx(ExternalLink, {
              color: "blue.200",
              url: "https://github.com/sshuhamk1?tab=repositories",
              text: "8 open-source repositories",
              target: "_blank"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimelineItem, {
            icon: index_esm/* FiHome */.m6D,
            skipTrail: true,
            children: ["Built my portfolio html with CSS and JS,", " ", /*#__PURE__*/jsx_runtime_.jsx(ExternalLink, {
              color: "blue.200",
              url: "https://github.com/sshuamk1/portfolio",
              text: "source on Github",
              target: "_blank"
            }), "."]
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var achievements = (Achievements);
// EXTERNAL MODULE: ./components/layout/meta.tsx
var meta = __webpack_require__(9848);
;// CONCATENATED MODULE: ./pages/achievements.tsx






const Index = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta/* default */.Z, {
      title: "Achievements",
      keywords: "My achievements"
    }), /*#__PURE__*/jsx_runtime_.jsx(achievements, {})]
  });
};

/* harmony default export */ var pages_achievements = (Index);

/***/ }),

/***/ 3426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,893,664,126,206], function() { return __webpack_exec__(7757); });
module.exports = __webpack_exports__;

})();