(function() {
var exports = {};
exports.id = 492;
exports.ids = [492];
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

/***/ 3817:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./data/posts/articles.ts
var articles = __webpack_require__(1363);
// EXTERNAL MODULE: ./components/ui/theme.tsx
var theme = __webpack_require__(9769);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
;// CONCATENATED MODULE: ./components/blog/carousel.tsx







const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Btn = ({
  icon,
  as,
  left,
  right,
  isRight,
  handleImageDir
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    top: "calc(50% - 20px)",
    right: right,
    left: left,
    position: "absolute",
    borderRadius: "30px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    zIndex: "2",
    onClick: () => isRight ? handleImageDir(1) : handleImageDir(-1),
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
      "aria-label": "icon button",
      icon: icon,
      cursor: "pointer",
      as: as,
      size: "md",
      colorScheme: "teal",
      borderRadius: "full",
      rounded: "full"
    })
  });
};

const Carousel = ({
  images
}) => {
  const [[page, direction], setPage] = external_react_.useState([0, 0]);
  const [imageIndex, setImageIndex] = external_react_.useState(0);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  }; // React.useEffect(() => {
  //   setImageIndex(repoId);
  // }, [repoId]);


  const nextImage = newDirection => {
    paginate(newDirection);
    setImageIndex(imageIndex + 1 < images.length ? imageIndex + 1 : 0);
  };

  const prevImage = newDirection => {
    paginate(newDirection);
    setImageIndex(0 === imageIndex ? images.length - 1 : imageIndex - 1);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    width: "100%",
    height: "100%",
    position: "relative",
    "justify-content": "center",
    "align-items": "center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      initial: false,
      custom: direction,
      children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionImage */.Jd, {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        src: images[imageIndex],
        custom: direction,
        variants: variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30
          },
          opacity: {
            duration: 0.2
          }
        },
        drag: "x",
        dragConstraints: {
          left: 0,
          right: 0
        },
        dragElastic: 1 //@ts-ignore
        ,
        onDragEnd: (e, {
          offset,
          velocity
        }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }
      }, page)
    }), /*#__PURE__*/jsx_runtime_.jsx(Btn, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(bi_index_esm/* BiLeftArrowAlt */.u_m, {}),
      as: bi_index_esm/* BiRightArrowAlt */.OEZ,
      right: "25px",
      isRight: true,
      handleImageDir: nextImage
    }), /*#__PURE__*/jsx_runtime_.jsx(Btn, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(bi_index_esm/* BiRightArrowAlt */.OEZ, {}),
      as: bi_index_esm/* BiLeftArrowAlt */.u_m,
      left: "25px",
      isRight: false,
      handleImageDir: prevImage
    })]
  });
};

/* harmony default export */ var carousel = (Carousel);
// EXTERNAL MODULE: ./components/layout/meta.tsx
var meta = __webpack_require__(9848);
;// CONCATENATED MODULE: ./pages/blog/[slug].tsx













const NotebookPost = () => {
  const textColor = (0,react_.useColorModeValue)("gray.500", "gray.200");
  const post = articles/* articles.4 */.D[4];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta/* default */.Z, {
      title: "Blog",
      description: "create Notebook app with react and chakraUI"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      mt: 0,
      mb: 6,
      spacing: 1,
      align: "start",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
        as: "h1",
        fontSize: "3xl",
        lineHeight: "shorter",
        fontWeight: "bold",
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Divider, {
        orientation: "horizontal",
        opacity: 1,
        borderBottomWidth: 0,
        height: "1px",
        bg: "gray.200"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      justifyContent: "space-between",
      flexDirection: ["column", "row", "row"],
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: 2,
        isInline: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "sm",
          fontWeight: "400",
          color: textColor,
          children: post.published
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
              children: post.views
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
            children: post.readTime
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
        spacing: 1,
        alignItems: "center",
        children: post.tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
          size: "sm",
          padding: "0 3px",
          colorScheme: (0,theme/* getTagColor */.v)(tag),
          children: tag
        }, tag))
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
      align: "end",
      mt: 5,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
        href: post.live,
        isExternal: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
          ml: 2,
          variant: "outline",
          size: "sm",
          color: (0,react_.useColorModeValue)("green.600", "green.200"),
          bg: (0,react_.useColorModeValue)("white", "gray.800"),
          leftIcon: /*#__PURE__*/jsx_runtime_.jsx(bi_index_esm/* BiLinkExternal */.rpH, {
            size: 18
          }),
          children: "Demo"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
        href: post.github_url,
        isExternal: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
          ml: 2,
          variant: "outline",
          size: "sm",
          color: (0,react_.useColorModeValue)("green.600", "green.200"),
          bg: (0,react_.useColorModeValue)("white", "gray.800"),
          leftIcon: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiGithub */.uOf, {
            size: 18
          }),
          children: "Github link"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      height: ["35vh", "45vh", "55vh", "70vh"],
      marginTop: 5,
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel, {
        images: post.images
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      spacing: 5,
      align: "start",
      mt: 6,
      children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
        fontSize: "xl",
        mt: 0,
        mb: 0,
        children: "What will you learn?"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        fontSize: "md",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.UnorderedList, {
          textAlign: "left",
          paddingLeft: 5,
          m: 0,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
            children: "How to create a CRUD app with react"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
            children: "How to create a responsive app using ChakraUi"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
            children: "How to use animations with framer-motion"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
            children: "How to create slider with framer-motion"
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      spacing: 5,
      align: "start",
      mt: 6,
      children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
        fontSize: "xl",
        mt: 0,
        mb: 0,
        children: "Built with"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        fontSize: "md",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.UnorderedList, {
          textAlign: "left",
          paddingLeft: 5,
          m: 0,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Programming language -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://www.typescriptlang.org/",
              isExternal: true,
              color: "blue.500",
              children: "Typescript"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Front-end library -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://github.com/facebook/react/",
              isExternal: true,
              color: "blue.500",
              children: "React"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["UI components -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://chakra-ui.com/",
              isExternal: true,
              color: "blue.500",
              children: "Chakra-ui"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Animation library -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://www.framer.com/motion/",
              isExternal: true,
              color: "blue.500",
              children: "Framer motion"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Notes display -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://github.com/tsuyoshiwada/react-stack-grid",
              isExternal: true,
              color: "blue.500",
              children: "react-stack-grid"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Forms Validation -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://react-hook-form.com/",
              isExternal: true,
              color: "blue.500",
              children: "React hook form"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Icons -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://react-icons.github.io/react-icons/",
              isExternal: true,
              color: "blue.500",
              children: "React icons"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Images placeholder -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://blurha.sh/",
              isExternal: true,
              color: "blue.500",
              children: "blurhash"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ListItem, {
            children: ["Progressive image loading -", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
              href: "https://github.com/FormidableLabs/react-progressive-image",
              isExternal: true,
              color: "blue.500",
              children: "react-progressive-image"
            })]
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ var _slug_ = (NotebookPost);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,583,893,516,126,769], function() { return __webpack_exec__(3817); });
module.exports = __webpack_exports__;

})();