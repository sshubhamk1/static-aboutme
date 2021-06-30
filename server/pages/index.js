(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5756:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Index; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./components/ui/theme.tsx
var theme = __webpack_require__(9769);
// EXTERNAL MODULE: ./components/ui/lazy-image.tsx
var lazy_image = __webpack_require__(9398);
;// CONCATENATED MODULE: ./components/home-page/projects/card.tsx








const ProjectCard = ({
  title,
  description,
  logo,
  blurHash,
  link,
  technologies
}) => {
  const textColor = (0,react_.useColorModeValue)("gray.500", "gray.200");
  const [isOpen, setIsOpen] = external_react_.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
    layout: true,
    onClick: toggleOpen,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
      p: 4,
      bg: (0,react_.useColorModeValue)("white", "gray.800"),
      rounded: "xl",
      borderWidth: "1px",
      borderColor: (0,react_.useColorModeValue)("gray.100", "gray.700"),
      w: "100%",
      h: "100%",
      textAlign: "left",
      align: "start",
      spacing: 4,
      cursor: "pointer",
      _hover: {
        shadow: "lg"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(lazy_image/* default */.Z, {
        src: logo,
        blurHash: blurHash,
        size: "sm",
        width: 33,
        height: 33,
        layout: "fixed",
        rounded: "md"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
        align: "start",
        justify: "flex-start",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
          spacing: 0,
          align: "start",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            layout: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                as: react_.Link,
                href: link,
                fontWeight: "bold",
                fontSize: "md",
                noOfLines: 1,
                onClick: e => e.stopPropagation(),
                isExternal: true,
                children: title
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
                spacing: "1",
                children: technologies.map((tech, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
                  size: "sm",
                  colorScheme: (0,theme/* getTagColor */.v)(tech),
                  children: tech
                }, index))
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
              layout: true,
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 1
              },
              children: !isOpen && /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontSize: "sm",
                color: textColor,
                noOfLines: {
                  base: 2
                },
                children: description
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
              layout: true,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              },
              variants: {
                exit: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              },
              children: isOpen && /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontSize: "sm",
                color: textColor // noOfLines={{ base: isOpen ? 5 : 2 }}
                ,
                children: description
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var card = (ProjectCard);
;// CONCATENATED MODULE: ./components/home-page/projects/index.tsx







const ORANGE = "#ff9400";

const Projects = ({
  projects
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    align: "start",
    spacing: 8,
    children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
      underlineColor: ORANGE,
      mt: 0,
      mb: 0,
      children: "Projects"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
        columns: 1,
        spacing: 4,
        mt: 5,
        w: "100%",
        children: projects.map((project, index) => /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
          whileHover: {
            y: -5
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(card, {
            title: project.title,
            description: project.desc,
            blurHash: project.blurHash,
            logo: project.logo,
            link: project.link,
            technologies: project.technologies
          })
        }, index))
      })
    })]
  });
};

/* harmony default export */ var home_page_projects = (Projects);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/home-page/home.tsx






 // import UserIcon from "assets/images/user_icon.png";

const ANIMATION_DURATION = 0.5;
const home_ORANGE = "#ff9400";

const Home = ({
  projects
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    direction: "column",
    align: "center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      direction: ["column", "column", "row"],
      children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
        opacity: "0",
        initial: {
          translateX: -150,
          opacity: 0
        },
        animate: {
          translateX: 0,
          opacity: 1,
          transition: {
            duration: ANIMATION_DURATION
          }
        },
        m: "auto",
        mb: [16, 16, "auto"],
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
          rounded: "full",
          w: 250,
          h: 220,
          objectFit: "cover",
          fallbackSrc: '/assets/images/logos/shubh.f5ce686a.jpg'
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(motion/* MotionFlex */.HZ, {
        ml: ["auto", "auto", 16],
        m: ["auto", "initial"],
        w: ["90%", "85%", "80%"],
        maxW: "800px",
        opacity: "0",
        justify: "center",
        direction: "column",
        initial: {
          opacity: 0,
          translateX: 150
        },
        animate: {
          opacity: 1,
          translateX: 0,
          transition: {
            duration: ANIMATION_DURATION
          }
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
          underlineColor: home_ORANGE,
          emoji: "\uD83D\uDC4B",
          mt: 0,
          children: "Hello"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          textAlign: "left",
          children: ["I am ", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
            as: "strong",
            fontWeight: "600",
            children: ["Shubham Kumar", " "]
          }), "Research Scholar in National Institute of Technology Karnataka, Surathkal and Senior Software Developer at Radysis from", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "India"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          mt: 5,
          textAlign: "left",
          children: "This is my digital garden, where I write about the things I'm working on and share what I've learned. \uD83D\uDE0A"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
      w: "100%",
      opacity: "0",
      initial: {
        translateY: 80
      },
      animate: {
        translateY: 0,
        opacity: 1,
        transition: {
          delay: ANIMATION_DURATION - 0.1,
          duration: ANIMATION_DURATION
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        mt: 10,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
          mb: 10,
          mx: [0, 0, 10],
          padding: 4,
          align: "start",
          borderLeft: "4px solid",
          borderColor: "#53c8c4",
          color: "whatsapp",
          _hover: {
            shadow: "lg"
          },
          backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
          rounded: "sm",
          fontSize: "md",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            textAlign: "center",
            color: "#53c8c4",
            fontWeight: "bold",
            children: "Highlights"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.UnorderedList, {
            textAlign: "left",
            paddingLeft: 5,
            m: 0,
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/open-source',
                passHref: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Link, {
                  children: ["Live/Local Github Repos", /*#__PURE__*/jsx_runtime_.jsx(react_.Badge, {
                    ml: "1",
                    colorScheme: "green",
                    children: "New"
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/developer-story',
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                  children: "Story page"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/tech-stack',
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                  children: "Tech Stack"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/achievements',
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                  children: "Achievements"
                })
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(home_page_projects, {
          projects: projects
        })]
      })
    })]
  });
};

/* harmony default export */ var home = (Home);
;// CONCATENATED MODULE: ./data/projects-list.ts
const projectsList = [{
  id: 1,
  title: "Vulnerable Chat System",
  logo: '/assets/images/projects/pp.png',
  blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
  desc: `A vulnerable Chat website to show possible attacks on it Intentionally made attackable to cross-site scripting and SQL injection for demonstration `,
  technologies: ["HTML5", "bootstrap4", "php", "Mysql", "javascript"]
}, {
  id: 2,
  title: "Comparing Cryptographic algorithms  complexity",
  logo: '/assets/images/projects/notch.png',
  blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
  desc: `Helps to compare different cryptographic algorithms on the basis of their actual time complexity.Encrypt/decrypt text using various cryptographic algorithms.
   Generate the hash of given text using various hash algorithms.Decrypt passwords from their hash.
Maintains a report in the tabular form and graphical form so that visualizing become more user-friendly. `,
  technologies: ["flask", "javascript", "sqlite3", "bootstrap4"]
}, {
  id: 3,
  title: "Feed the Girl",
  // logo: workof,
  logo: '/assets/images/projects/workof.png',
  blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
  link: "https://workof.com/",
  desc: `A game in which girl has to be saved from villans and also have to feed her regularly`,
  technologies: ["scratch"]
}, {
  id: 4,
  title: "Share on Editor",
  // logo: souq,
  logo: '/assets/images/projects/souq.png',
  blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
  desc: `Application software help peers to working on same projects to collebrate eith one another`,
  technologies: ["java", "javaFx", "socket Programming"]
}, {
  id: 5,
  title: "Capstone Allocation Portal",
  // logo: gosave,
  logo: '/assets/images/projects/gosave.png',
  blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
  desc: `Application for allocation of supervisors to the students for their final capstone project.`,
  technologies: ["Python", "Tkinter", "SQLite3"]
}];
// EXTERNAL MODULE: ./components/layout/meta.tsx
var meta = __webpack_require__(9848);
;// CONCATENATED MODULE: ./pages/index.tsx





 //@ts-ignore

function Index({
  projects
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta/* default */.Z, {
      title: "Shubham kumar - Senior Software Engineer"
    }), /*#__PURE__*/jsx_runtime_.jsx(home, {
      projects: projects
    })]
  });
}
function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    }
  };
}

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

/***/ 6435:
/***/ (function(module) {

"use strict";
module.exports = require("react-blurhash");;

/***/ }),

/***/ 3651:
/***/ (function(module) {

"use strict";
module.exports = require("react-progressive-image");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,126,769,398], function() { return __webpack_exec__(5756); });
module.exports = __webpack_exports__;

})();