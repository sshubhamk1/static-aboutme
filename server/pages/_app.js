(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var index_esm = __webpack_require__(2585);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: external "use-sound"
var external_use_sound_ = __webpack_require__(8234);
var external_use_sound_default = /*#__PURE__*/__webpack_require__.n(external_use_sound_);
;// CONCATENATED MODULE: ./components/ui/ColorModeSwitcher.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import lightswitch from "../../assets/audios/lightswitch.mp3";

const ColorModeSwitcher = props => {
  const {
    toggleColorMode
  } = (0,react_.useColorMode)();
  const text = (0,react_.useColorModeValue)("dark", "light");
  const SwitchIcon = (0,react_.useColorModeValue)(fa_index_esm/* FaMoon */.TLr, fa_index_esm/* FaSun */.Mei);
  const [play] = external_use_sound_default()("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = () => {
    text === "dark" ? play({
      id: "on"
    }) : play({
      id: "off"
    });
    toggleColorMode();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
    label: text === "dark" ? "Dark mode" : "Light mode",
    "aria-label": "A tooltip",
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, _objectSpread({
      size: "md",
      fontSize: "md",
      variant: "ghost",
      color: "current",
      marginLeft: "2",
      onClick: handleClick,
      icon: /*#__PURE__*/jsx_runtime_.jsx(SwitchIcon, {}),
      "aria-label": `Switch to ${text} mode`,
      _hover: {
        bg: (0,react_.useColorModeValue)("gray.200", "gray.900")
      }
    }, props))
  });
};
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(5434);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/layout/top-nav.tsx







 // import UserIcon from "assets/images/user_icon.png";







const webLinks = [{
  name: "About",
  path: "/about"
}, {
  name: "Blog",
  path: "/blog"
}];
const mobileLinks = [{
  name: "About",
  path: "/about"
}, {
  name: "Open Source",
  path: "/open-source"
}, {
  name: "Blog",
  path: "/blog"
}, {
  name: "Tech Stack",
  path: "/tech-stack"
}, {
  name: "Developer Story",
  path: "/developer-story"
}];

const NavLink = props => {
  const link = {
    bg: (0,react_.useColorModeValue)("gray.200", "gray.900"),
    color: (0,react_.useColorModeValue)("blue.500", "blue.200")
  };
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: props.path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
      px: 2,
      py: 1,
      rounded: "md",
      _hover: {
        textDecoration: "none",
        bg: link.bg
      },
      _activeLink: {
        color: link.color
      },
      onClick: () => props.onClose() // to={props.path}
      ,
      children: props.name
    })
  });
};

function TopNav() {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();
  const menuProps = {
    bg: (0,react_.useColorModeValue)("gray.200", "gray.900"),
    color: (0,react_.useColorModeValue)("blue.500", "blue.200")
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      bg: (0,react_.useColorModeValue)("white", "gray.700"),
      px: 4,
      boxShadow: "lg",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        h: 16,
        alignItems: "center",
        justifyContent: "space-between",
        w: ["90%", "85%", "80%"],
        maxW: 800,
        mx: "auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
          size: "md",
          icon: isOpen ? /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiOutlineClose */.oHP, {}) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* GiHamburgerMenu */.vHB, {}),
          "aria-label": "Open Menu",
          display: ["inherit", "inherit", "none"],
          onClick: isOpen ? onClose : onOpen
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 8,
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
                rounded: "full",
                w: 10,
                h: 10,
                objectFit: "cover",
                fallbackSrc: '/assets/images/logos/shubh.f5ce686a.jpg'
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            as: "nav",
            spacing: 4,
            display: {
              base: "none",
              md: "flex"
            },
            children: [webLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              name: link.name,
              path: link.path,
              onClose: onClose
            }, index)), /*#__PURE__*/jsx_runtime_.jsx(react_.Menu, {
              isLazy: true,
              children: ({
                isOpen,
                onClose
              }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
                  as: react_.Button,
                  variant: "ghost",
                  size: "sm",
                  px: 2,
                  py: 1.5,
                  fontSize: "1em",
                  rounded: "md",
                  height: "auto ",
                  _hover: menuProps,
                  _expanded: menuProps,
                  _focus: {
                    boxShadow: "outline"
                  },
                  rightIcon: /*#__PURE__*/jsx_runtime_.jsx(bi_index_esm/* BiChevronDown */.OrA, {
                    size: 18
                  }),
                  children: "Links"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuList, {
                  zIndex: 5,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/tech-stack",
                    passHref: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                      onClick: onClose,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                            as: ai_index_esm/* AiTwotoneThunderbolt */.QJi,
                            size: 18,
                            color: menuProps.color
                          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                            children: "Tech Stack"
                          })]
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/open-source",
                    passHref: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                      onClick: onClose,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                            as: bs_index_esm/* BsBook */.R_f,
                            size: 18,
                            color: menuProps.color
                          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                            children: "Open Source"
                          })]
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/developer-story",
                    passHref: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                      onClick: onClose,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                            as: md_index_esm/* MdTimeline */.g6S,
                            size: 18,
                            color: menuProps.color
                          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                            children: "Developer Story"
                          })]
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/achievements",
                    passHref: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
                      onClick: onClose,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                            as: bs_index_esm/* BsCheckCircle */.nRB,
                            size: 18,
                            color: menuProps.color
                          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                            children: "Achievements"
                          })]
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
            as: react_.Link,
            href: "https://github.com/sshubhamk1",
            size: "md",
            icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaGithub */.hJX, {}),
            "aria-label": "Github account",
            bg: (0,react_.useColorModeValue)("white", "gray.700"),
            _hover: {
              textDecoration: "none",
              bg: (0,react_.useColorModeValue)("gray.200", "gray.900")
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(ColorModeSwitcher, {
            justifySelf: "flex-end"
          })]
        })]
      }), isOpen ? /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        pb: 4,
        w: ["100%", "100%", "80%"],
        maxW: 800,
        display: ["inherit", "inherit", "none"],
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
          as: "nav",
          spacing: 4,
          children: mobileLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
            index: index,
            name: link.name,
            path: link.path,
            onClose: onClose
          }, index))
        })
      }) : null]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./configs/site-config.js



const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: "Muhammad Ahmad",
    accounts: [{
      url: "https://github.com/sshubhamk1",
      label: "Github Account",
      type: "gray",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaGithub */.hJX, {})
    }, {
      url: "https://twitter.com/sshubhamk1",
      label: "Twitter Account",
      type: "twitter",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaTwitter */.fWC, {})
    }, {
      url: "https://dev.to/sshubhamk1",
      label: "Dev Account",
      type: "gray",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaDev */.CUm, {})
    }, {
      url: "https://linkedin.com/in/sshubhamk1",
      label: "LinkedIn Account",
      type: "linkedin",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaLinkedin */.ltd, {})
    }, {
      url: "https://www.quora.com/profile/sshubhamk1",
      label: "Quora Account",
      type: "red",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaQuora */.bD1, {})
    }, {
      url: "mailto:sshubhamk1.sk1@gmail.com",
      label: "Mail ahmad",
      type: "gray",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiMail */.Imn, {})
    }]
  }
};
/* harmony default export */ var site_config = (siteConfig);
;// CONCATENATED MODULE: ./components/layout/footer.tsx



function footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_ownKeys(Object(source), true).forEach(function (key) { footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
    as: "footer",
    isInline: true,
    spacing: [1, 2],
    p: 4,
    justifyContent: "space-between",
    alignItems: "center",
    w: ["100%", "85%", "80%"],
    maxW: 800,
    mx: "auto",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      flexDirection: ["column", "column", "row"],
      flexFlow: ["column-reverse", "column-reverse"],
      justifyContent: ["center", "space-between"],
      alignItems: "center",
      w: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        textAlign: "center",
        fontSize: "sm",
        color: (0,react_.useColorModeValue)("gray.500", "gray.200"),
        children: ["\xA9 ", new Date().getFullYear(), " Shubham Kumar", " "]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        textAlign: "center",
        children: site_config.author.accounts.map((sc, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, footer_objectSpread({
          as: react_.Link,
          isExternal: true,
          href: sc.url,
          "aria-label": sc.label //@ts-expect-error
          ,
          size: "lg",
          colorScheme: sc.type,
          icon: sc.icon
        }, iconProps), index))
      })]
    })
  });
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/layout/layout.tsx





 //@ts-ignore

function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(TopNav, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      textAlign: "center",
      fontSize: "xl",
      w: ["90%", "85%", "80%"],
      maxW: 800,
      mx: "auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        pt: 10,
        pb: 10,
        children: props.children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
  });
}

/* harmony default export */ var layout = (Layout);
// EXTERNAL MODULE: ./components/ui/theme.tsx
var theme = __webpack_require__(9769);
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    theme: theme/* theme */.r,
    resetCSS: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
} //@ts-ignore


MyApp.getInitialProps = async appContext => {
  const appProps = await app.default.getInitialProps(appContext);
  return _app_objectSpread({}, appProps);
};

/* harmony default export */ var _app = (MyApp);

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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

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

/***/ 8234:
/***/ (function(module) {

"use strict";
module.exports = require("use-sound");;

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
var __webpack_exports__ = __webpack_require__.X(0, [127,583,893,664,516,193,750,585,452,769], function() { return __webpack_exec__(9187); });
module.exports = __webpack_exports__;

})();