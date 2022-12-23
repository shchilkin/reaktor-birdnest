"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/pilots";
exports.ids = ["pages/api/pilots"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/pilots.ts":
/*!*****************************!*\
  !*** ./pages/api/pilots.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(_req, res) {\n    try {\n        const pilots = await prisma.pilot.findMany({\n            include: {\n                drone: true\n            }\n        });\n        res.status(200).send(pilots);\n    } catch (error) {\n        res.status(500);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGlsb3RzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUtlO0FBR2IsTUFBQUMsU0FDSSxJQUFBRCx3REFBQUE7QUFDRixlQUFBRSxRQUFBQyxJQUFBLEVBQUFDLEdBQUE7SUFBQSxJQUEyQztRQUNoQyxNQUFBQyxTQUNBLE1BQUFKLE9BQUFLLEtBQUEsQ0FBQUMsUUFBQTtZQUFBQyxTQUNUO2dCQUNBQyxPQUFBO1lBQ0Y7UUFDQTtRQUNBTCxJQUFBTSxNQUFJLE1BQVdDLElBQUEsQ0FBQU47SUFBQSxTQUNqQk8sT0FBQTtRQUNGUixJQUFBTSxNQUFBO0lBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZWFrdG9yLWJpcmRuZXN0L25leHRqcy1hcHAvLi9wYWdlcy9hcGkvcGlsb3RzLnRzPzQyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKF9yZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBpbG90cyA9IGF3YWl0IHByaXNtYS5waWxvdC5maW5kTWFueSh7XG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgZHJvbmU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHBpbG90cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwiX3JlcSIsInJlcyIsInBpbG90cyIsInBpbG90IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiZHJvbmUiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/pilots.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pilots.ts"));
module.exports = __webpack_exports__;

})();