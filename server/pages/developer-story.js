(function() {
var exports = {};
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 8636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ developer_story; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./components/developer-story/story-timeline.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const StoryTimeline = (_ref) => {
  let {
    icon = index_esm/* FiCheckCircle */._rq,
    boxProps = {},
    index,
    year,
    skipTrail = false,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "boxProps", "index", "year", "skipTrail", "children"]);

  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const open = () => setIsOpen(!isOpen);

  const close = () => setIsOpen(false);

  const color = (0,react_.useColorModeValue)("gray.700", "gray.200");
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, _objectSpread(_objectSpread({
    minH: 20
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      flexDir: "column",
      alignItems: "center",
      minHeight: "8rem",
      mr: 4,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover, {
        returnFocusOnClose: false,
        isOpen: isOpen,
        onClose: close,
        placement: index % 2 === 0 ? "right" : "left",
        closeOnBlur: false // variant="responsive"
        // width={["9.3rem", "13rem", "15rem", "100%"]}
        ,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.PopoverTrigger, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
            onClick: open,
            position: "relative",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Circle, {
              size: 12,
              bg: (0,react_.useColorModeValue)("gray.600", "gray.500"),
              opacity: (0,react_.useColorModeValue)(0.07, 0.15),
              sx: {}
            }), year ? /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
              fontSize: 15,
              fontWeight: "bold",
              color: color,
              pos: "absolute",
              left: "0.5rem",
              top: "0.875rem",
              children: year
            }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
              as: icon,
              size: "1.25rem",
              color: color,
              pos: "absolute",
              left: "0.875rem",
              top: "0.875rem"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          fontSize: 15,
          children: !year && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.PopoverContent, {
            padding: ["0.2rem", "0.2rem", "0.7rem"],
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.PopoverArrow, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.PopoverBody, {
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                overflow: "scroll",
                children: children
              })
            })]
          })
        })]
      }), !skipTrail && /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        w: "1px",
        flex: 1,
        bg: color
      })]
    })
  }));
};
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./components/skills/section.tsx + 1 modules
var section = __webpack_require__(9176);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
;// CONCATENATED MODULE: ./components/developer-story/story.tsx










 //@ts-ignore

const MyStory = ({
  companies,
  institutes
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default */.Z, {
      mb: 14,
      children: /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* PageSlideFade */.f6, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
          children: /*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
            mt: 0,
            mb: 1,
            children: "Developer Story"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
      textAlign: "start",
      align: "flex-start",
      mb: 0,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(StoryTimeline, {
          year: "2021",
          index: 0
        }), companies.map((company, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StoryTimeline, {
          icon: bs_index_esm/* BsFillBriefcaseFill */.mjz,
          index: index,
          children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
              rounded: "full",
              w: [6, 8],
              h: [6, 8],
              objectFit: "cover",
              fallbackSrc: '/assets/images/placeholder.png',
              src: company.logo,
              alt: company.alt
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
              align: "start",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Heading, {
                fontSize: [12, 13, 15],
                lineHeight: "shorter",
                fontWeight: "bold",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  children: company.title
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  mt: 1,
                  children: company.period
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Divider, {
            my: 2
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontSize: [12, 13, 15],
            children: company.role
          })]
        }, index)), /*#__PURE__*/jsx_runtime_.jsx(StoryTimeline, {
          year: "2017",
          index: 0
        }), institutes.map((institute, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StoryTimeline, {
            icon: fa_index_esm/* FaGraduationCap */.nGB,
            index: index > 0 ? index + 1 : index,
            children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
                rounded: "full",
                w: [6, 8],
                h: [6, 8],
                objectFit: "cover",
                fallbackSrc: '/assets/images/placeholder.png',
                src: institute.logo,
                alt: institute.alt
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
                align: "start",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Heading, {
                  fontSize: [12, 13, 15],
                  lineHeight: "shorter",
                  fontWeight: "bold",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                    children: institute.short_title
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                    mt: 1,
                    children: institute.period
                  })]
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Divider, {
              my: 2
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: [12, 13, 15],
              children: institute.role
            })]
          }), institute.awards && //@ts-ignore
          institute.awards.map((award, index1) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StoryTimeline, {
            icon: fa_index_esm/* FaAward */.MtH,
            index: index1 + index + 1,
            children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
                colorScheme: "blue",
                rounded: "full",
                size: "sm",
                "aria-label": "medal",
                icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaMedal */.PIe, {})
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
                align: "start",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Heading, {
                  fontSize: [12, 13, 15],
                  lineHeight: "shorter",
                  fontWeight: "bold",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                    children: award.title
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                    mt: 1,
                    children: award.date
                  })]
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Divider, {
              my: 2
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: [12, 13, 15],
              children: award.description
            })]
          }, index1)), /*#__PURE__*/jsx_runtime_.jsx(StoryTimeline, {
            year: institute.startingYear,
            index: 0,
            skipTrail: index === institutes.length - 1 ? true : false
          })]
        }))]
      })
    })]
  });
};

/* harmony default export */ var story = (MyStory);
// EXTERNAL MODULE: ./data/data.ts
var data = __webpack_require__(9304);
// EXTERNAL MODULE: ./components/layout/meta.tsx
var meta = __webpack_require__(9848);
;// CONCATENATED MODULE: ./pages/developer-story.tsx





 //@ts-ignore

const Index = ({
  companies,
  institutes
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta/* default */.Z, {
      title: "Open-source",
      keywords: "My professional journey"
    }), /*#__PURE__*/jsx_runtime_.jsx(story, {
      companies: companies,
      institutes: institutes
    })]
  });
};

function getStaticProps() {
  return {
    props: {
      companies: data/* companies */.kI,
      institutes: data/* institutes */.Aj
    }
  };
}
/* harmony default export */ var developer_story = (Index);

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
var __webpack_exports__ = __webpack_require__.X(0, [127,583,893,750,126,206,304,176], function() { return __webpack_exec__(8636); });
module.exports = __webpack_exports__;

})();