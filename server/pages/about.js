(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 5655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9583);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3750);
/* harmony import */ var _components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9206);
/* harmony import */ var _components_ui_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9304);
/* harmony import */ var _components_layout_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6277);
/* harmony import */ var _components_layout_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9848);











const TURQUOISE = "#06b6d4";

const Card = props => {
  const {
    title,
    role,
    skills,
    period,
    logo,
    colorMode,
    alt
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_3__/* .CardTransition */ .xp, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      px: 4,
      py: 5,
      borderWidth: "1px",
      _hover: {
        shadow: "lg"
      },
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("white", "gray.800"),
      position: "relative",
      rounded: "md",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            rounded: "full",
            w: 16,
            h: 16,
            objectFit: "cover",
            fallbackSrc: '/assets/images/placeholder.png',
            src: logo,
            alt: alt
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            spacing: 2,
            pl: 3,
            align: "left",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
              align: "left",
              fontSize: "xl",
              color: `mode.${colorMode}.career.text`,
              children: title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
              align: "left",
              fontSize: "sm",
              color: `mode.${colorMode}.career.subtext`,
              children: role
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
              spacing: 1,
              mt: 3,
              isInline: true,
              alignItems: "center",
              display: ["none", "none", "flex", "flex"],
              children: skills.map(skill => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                size: "sm",
                padding: "0 3px",
                children: skill
              }, skill))
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
          display: ["none", "none", "flex", "flex"],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            fontSize: 14,
            color: `mode.${colorMode}.career.subtext`,
            children: period
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        spacing: 1,
        mt: 3,
        isInline: true,
        alignItems: "center",
        display: ["flex", "flex", "none", "none"],
        children: skills.map(skill => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tag, {
          size: "sm",
          padding: "0 3px",
          children: skill
        }, skill))
      })]
    })
  });
}; //@ts-ignore


const About = ({
  companies,
  institutes
}) => {
  const {
    colorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_meta__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      title: "About"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_3__/* .PageSlideFade */ .f6, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_3__/* .StaggerChildren */ .eF, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_motion__WEBPACK_IMPORTED_MODULE_4__/* .MotionBox */ .uH, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
              alignItems: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                underlineColor: TURQUOISE,
                mt: 0,
                mb: 0,
                children: "Career"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                pl: 3,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  as: react_icons_bs__WEBPACK_IMPORTED_MODULE_8__/* .BsFillBriefcaseFill */ .mjz,
                  size: "25px"
                })
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          spacing: 4,
          marginBottom: 6,
          align: "left",
          mx: [0, 0, 6],
          mt: 12,
          children: companies.map((company, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_motion__WEBPACK_IMPORTED_MODULE_4__/* .MotionBox */ .uH, {
            whileHover: {
              y: -5
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
              title: company.title,
              role: company.role,
              skills: company.skills,
              period: company.period,
              logo: company.logo,
              colorMode: colorMode
            }, index)
          }, index))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              underlineColor: TURQUOISE,
              mt: 0,
              mb: 0,
              children: "Education"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
              pl: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__/* .FaGraduationCap */ .nGB,
                size: "25px"
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          spacing: 4,
          marginBottom: 6,
          align: "left",
          mx: [0, 0, 6],
          mt: 12,
          children: institutes.map((institute, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_motion__WEBPACK_IMPORTED_MODULE_4__/* .MotionBox */ .uH, {
            whileHover: {
              y: -5
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
              title: institute.title,
              role: institute.role,
              skills: institute.skills,
              period: institute.period,
              logo: institute.logo,
              colorMode: colorMode
            }, index)
          }, index))
        })]
      })
    })]
  });
};

function getStaticProps() {
  return {
    props: {
      companies: _data_data__WEBPACK_IMPORTED_MODULE_5__/* .companies */ .kI,
      institutes: _data_data__WEBPACK_IMPORTED_MODULE_5__/* .institutes */ .Aj
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,583,750,126,206,304], function() { return __webpack_exec__(5655); });
module.exports = __webpack_exports__;

})();