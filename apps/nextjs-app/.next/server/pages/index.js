"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(941);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _reaktor_birdnest_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(602);
/* harmony import */ var _reaktor_birdnest_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reaktor_birdnest_utils__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const DroneDisplayCanvas = ({ width , height , drones  })=>{
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (context == null) return;
            //Our first draw
            context.fillStyle = "#fff";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.beginPath();
            context.arc(500 / 2, 500 / 2, 0.1, 0, 360, false);
            context.strokeStyle = "red";
            context.stroke();
            context.lineWidth = 5;
            context.closePath();
            context.beginPath();
            context.arc(500 / 2, 500 / 2, 125, 0, 360, false);
            context.strokeStyle = "pink";
            context.stroke();
            context.lineWidth = 5;
            context.closePath();
            if (drones) {
                drones.forEach((drone)=>{
                    context.beginPath();
                    context.arc(Math.floor(drone.positionX / 1000), Math.floor(drone.positionY / 1000), 0.1, 0, 360, false);
                    context.strokeStyle = (0,_reaktor_birdnest_utils__WEBPACK_IMPORTED_MODULE_3__.isDroneViolatingPerimiter)(Math.floor(drone.positionX / 1000), Math.floor(drone.positionY / 1000), 250, 500, 500) ? "pink" : "black";
                    context.stroke();
                    context.lineWidth = 5;
                    context.closePath();
                });
            }
        }
    }, [
        drones
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: canvasRef,
        width: width,
        height: height
    });
};
const DroneDisplay = ({ width , height  })=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/drones", _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__/* .fetcher */ ._, {
        refreshInterval: 2000
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Error"
    });
    // TODO: Fix typing
    // @ts-expect-error
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DroneDisplayCanvas, {
        width: width,
        height: height,
        drones: data
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DroneDisplay);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(941);
/* harmony import */ var _IntrudersTableCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(979);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const IntrudersTable = ()=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/pilots", _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._, {
        refreshInterval: 2000
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        children: error
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        className: "table-auto w-full text-left",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Phone number"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Last seen"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: data?.sort(compareTime).map((pilot)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IntrudersTableCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        pilot: pilot
                    }, pilot.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntrudersTable);
const getMinutes = (date)=>{
    const updatedAt = new Date(date);
    const seconds = (Date.now() - updatedAt.valueOf()) / 1000;
    return seconds / 60;
};
const compareTime = (a, b)=>{
    if (getMinutes(a.updatedAt) > getMinutes(b.updatedAt)) return -1;
    if (getMinutes(a.updatedAt) < getMinutes(b.updatedAt)) return 1;
    return 0;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_IntrudersTableCell)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PilotTableCellTime/index.tsx

const PilotTableCellTime = ({ time  })=>{
    const updatedAt = new Date(time);
    const seconds = (Date.now() - updatedAt.valueOf()) / 1000;
    const minutes = Math.floor(seconds / 60);
    const color = (minutes)=>{
        switch(minutes){
            case 10:
            case 9:
            case 8:
                return "text-red-600";
            case 7:
            case 6:
                return "text-orange-400";
            default:
                return "text-emerald-500";
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: color(minutes),
        children: Math.floor(seconds) < 60 ? `less than minute ago` : `${minutes} minutes ago`
    });
};
/* harmony default export */ const components_PilotTableCellTime = (PilotTableCellTime);

;// CONCATENATED MODULE: ./components/IntrudersTableCell/index.tsx


const IntrudersTableCell = ({ pilot  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                children: [
                    pilot.firstName,
                    " ",
                    pilot.lastName
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: pilot.email
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: pilot.phoneNumber
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_PilotTableCellTime, {
                    time: pilot.updatedAt
                })
            })
        ]
    });
};
/* harmony default export */ const components_IntrudersTableCell = (IntrudersTableCell);


/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fetcher)
/* harmony export */ });
const fetcher = (url)=>fetch(url).then((res)=>res.json());


/***/ }),

/***/ 952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ getDrones)
});

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "fast-xml-parser"
const external_fast_xml_parser_namespaceObject = require("fast-xml-parser");
;// CONCATENATED MODULE: ./pages/api/drones.ts

const getDrones = async ()=>{
    const parserOptions = {
        ignorePiTags: true
    };
    const parser = new external_fast_xml_parser_namespaceObject.XMLParser(parserOptions);
    return await fetch("https://assignments.reaktor.com/birdnest/drones").then((response)=>response.text()).then((data)=>parser.parse(data)["report"]["capture"]["drone"]);
};
async function getDronesData(_req, res) {
    try {
        const data = await getDrones();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(`Error occured ${error}`);
    }
}


/***/ }),

/***/ 83:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(421);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(941);
/* harmony import */ var _components_IntrudersTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(156);
/* harmony import */ var _components_DroneDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(334);
/* harmony import */ var _api_drones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__, _components_IntrudersTable__WEBPACK_IMPORTED_MODULE_5__, _components_DroneDisplay__WEBPACK_IMPORTED_MODULE_6__]);
([swr__WEBPACK_IMPORTED_MODULE_4__, _components_IntrudersTable__WEBPACK_IMPORTED_MODULE_5__, _components_DroneDisplay__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__.withSuperJSONProps)(async function getServerSideProps() {
    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();
    const drones = await (0,_api_drones__WEBPACK_IMPORTED_MODULE_7__/* .getDrones */ .w)();
    const pilots = await prisma.pilot.findMany({
        include: {
            drone: true
        }
    });
    return {
        props: {
            pilots,
            drones
        }
    };
}, []);
const Home = ({ pilots , drones  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {
        value: {
            fallback: {
                "api/pilots": pilots,
                "api/drones": drones
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "Reaktor Birdnest"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "Generated by create next app"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DroneDisplay__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    width: 500,
                    height: 500
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-2xl font-semibold mx-4",
                    children: "Intruders list"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full mx-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IntrudersTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__.withSuperJSONPage)(Home));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 427:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPointDistance = void 0;
/**
 * Calculates distance between the given point and the circle center by using the {@link https://math.stackexchange.com/questions/198764/how-to-know-if-a-point-is-inside-a-circle the following formula}
 *
 * @param xPoint point x coordinate
 * @param yPoint point y coordinate
 * @param xCircleCenter circle center x coordinate
 * @param yCircleCenter circle center y coordinate
 * @returns distance value between the point and the circle center
 */
const getPointDistance = (xPoint, yPoint, xCircleCenter, yCircleCenter) => {
    return Math.abs(xPoint - xCircleCenter) + Math.abs(yPoint - yCircleCenter);
};
exports.getPointDistance = getPointDistance;
//# sourceMappingURL=getPointDistance.js.map

/***/ }),

/***/ 602:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(870), exports);
__exportStar(__webpack_require__(427), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 870:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDroneViolatingPerimiter = void 0;
const getPointDistance_1 = __webpack_require__(427);
/** Is drone violating perimiter
 * @param x
 * @param y
 * @param areaRange
 * @param ndzRange
 * @param ndzCenterX
 * @param ndzCenterY
 * @returns
 */
const isDroneViolatingPerimiter = (x, y, ndzRange = 100000, ndzCenterX = 250000, ndzCenterY = 250000) => {
    // get drone coordinates from params
    const pointDistanceFromCircleCenter = (0, getPointDistance_1.getPointDistance)(x, y, ndzCenterX, ndzCenterY);
    const circleRadius = ndzRange / 2;
    // inside circle d < r | d = r / outside the circle d > r
    return pointDistanceFromCircleCenter <= circleRadius;
};
exports.isDroneViolatingPerimiter = isDroneViolatingPerimiter;
//# sourceMappingURL=isDroneViolatingPerimiter.js.map

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 421:
/***/ ((module) => {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(83));
module.exports = __webpack_exports__;

})();