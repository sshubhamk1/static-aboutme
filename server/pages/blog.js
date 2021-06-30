(function() {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1363:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ articles; }
/* harmony export */ });
const articles = [{
  title: "Comparing Cryptographic algorithms on basis of their complexity",
  // desc:
  // "Different portfolio templates to show your skills, experience, articles etc",
  tags: ["python", "flask", "sqlite", "bootstrap4"],
  github_url: "https://github.com/sshubhamk1/ComparingCryptoGraphicAlgorithm",
  link: "https://dev.to/m_ahmad/built-a-attractive-portfolio-page-with-react-chakraui-and-framermotion-djd",
  external: true,
  // isNew: true,
  live: "https://ma-ahmad.github.io/portfolio-template1",
  published: "26 july 2021",
  readTime: "1 min read",
  views: "0"
}];

/***/ }),

/***/ 425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./data/posts/articles.ts
var articles = __webpack_require__(1363);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./components/ui/theme.tsx
var theme = __webpack_require__(9769);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
;// CONCATENATED MODULE: ./components/blog/card.tsx








const PostCard = ({
  article
}) => {
  const textColor = (0,react_.useColorModeValue)("gray.500", "gray.200");
  const devIcon = (0,react_.useColorModeValue)('/assets/images/logos/dev.png', '/assets/images/logos/dev_white.png');
  return /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* CardTransition */.xp, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      spacing: 1,
      p: 4,
      isExternal: true,
      _hover: {
        shadow: "md",
        textDecoration: "none"
      },
      borderWidth: "1px",
      position: "relative",
      rounded: "md",
      bg: (0,react_.useColorModeValue)("white", "gray.800"),
      align: "left",
      children: [article.external ? /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
        hasArrow: true,
        label: "Dev.to",
        placement: "top",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
          src: devIcon,
          width: "2rem",
          height: "2rem",
          position: "absolute",
          color: "#cbd5e0",
          right: "0.5rem",
          top: "-14px"
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
        hasArrow: true,
        label: "mahmad.me",
        placement: "top",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          position: "absolute",
          color: "#cbd5e0",
          right: "0.5rem",
          top: "-14px",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Badge, {
            ml: "1",
            variant: "solid",
            colorScheme: "blackAlpha",
            children: "Website"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Heading, {
        fontSize: "lg",
        align: "left",
        mt: 0,
        children: [article.external ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: article.link,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            as: react_.Link,
            target: "_blank",
            children: article.title
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: article.link,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
            children: article.title
          })
        }), article.isNew && /*#__PURE__*/jsx_runtime_.jsx(react_.Badge, {
          ml: "1",
          mb: "1",
          colorScheme: "green",
          fontSize: "0.7em",
          lineHeight: 1.5,
          children: "New"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: 2,
        isInline: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
          hasArrow: true,
          label: "Published",
          placement: "top",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontSize: "sm",
            fontWeight: "400",
            color: textColor,
            children: article.published
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "sm",
          fontWeight: "400",
          color: textColor,
          children: "\u2022"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
          hasArrow: true,
          label: "Views",
          placement: "top",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            alignItems: "center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "sm",
              noOfLines: 1,
              fontWeight: "400",
              align: "left",
              color: textColor,
              children: article.views
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
              as: index_esm/* FaEye */.dSq,
              ml: 1,
              color: textColor
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "sm",
          fontWeight: "600",
          color: textColor,
          children: "\u2022"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
          hasArrow: true,
          label: "Read time",
          placement: "top",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontSize: "sm",
            noOfLines: 1,
            fontWeight: "400",
            align: "left",
            color: textColor,
            children: article.readTime
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
          spacing: 1,
          alignItems: "center",
          d: ["none", "none", "flex"],
          children: article.tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
            size: "sm",
            padding: "0 3px",
            colorScheme: (0,theme/* getTagColor */.v)(tag),
            children: tag
          }, tag))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
        spacing: 1,
        alignItems: "center",
        d: ["flex", "flex", "none"],
        children: article.tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
          size: "sm",
          padding: "0 3px",
          colorScheme: (0,theme/* getTagColor */.v)(tag),
          children: tag
        }, tag))
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        align: "left",
        fontSize: "md",
        noOfLines: 4,
        color: textColor,
        children: article.desc
      })]
    })
  });
};

/* harmony default export */ var card = (PostCard);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: ./components/layout/meta.tsx
var meta = __webpack_require__(9848);
;// CONCATENATED MODULE: ./pages/blog/index.tsx










const TURQUOISE = "#06b6d4"; //@ts-ignore

const Posts = ({
  articles
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta/* default */.Z, {
      title: "Blog",
      description: "A list of all articles and posts!"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_transitions/* PageSlideFade */.f6, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
        underlineColor: TURQUOISE,
        mt: 0,
        mb: 0,
        children: "Featured Articles"
      }), /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* StaggerChildren */.eF, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
          spacing: 4,
          mt: 12,
          children: articles.map((article, index) => /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
            whileHover: {
              y: -5
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(card, {
              article: article
            })
          }, index))
        })
      })]
    })]
  });
};

function getStaticProps() {
  return {
    props: {
      articles: articles/* articles */.D
    }
  };
}
/* harmony default export */ var blog = (Posts);

/***/ }),

/***/ 3426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 8547:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

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
var __webpack_exports__ = __webpack_require__.X(0, [127,583,664,126,206,769], function() { return __webpack_exec__(425); });
module.exports = __webpack_exports__;

})();