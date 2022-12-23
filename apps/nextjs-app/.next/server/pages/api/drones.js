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
exports.id = "pages/api/drones";
exports.ids = ["pages/api/drones"];
exports.modules = {

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ "(api)/./pages/api/drones.ts":
/*!*****************************!*\
  !*** ./pages/api/drones.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDronesData),\n/* harmony export */   \"getDrones\": () => (/* binding */ getDrones)\n/* harmony export */ });\n/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-xml-parser */ \"fast-xml-parser\");\n/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getDrones = async ()=>{\n    const parserOptions = {\n        ignorePiTags: true\n    };\n    const parser = new fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__.XMLParser(parserOptions);\n    return await fetch(\"https://assignments.reaktor.com/birdnest/drones\").then((response)=>response.text()).then((data)=>parser.parse(data)[\"report\"][\"capture\"][\"drone\"]);\n};\nasync function getDronesData(_req, res) {\n    try {\n        const data = await getDrones();\n        res.status(200).send(data);\n    } catch (error) {\n        res.status(500).send(`Error occured ${error}`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZHJvbmVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLd0I7QUFBQSxNQUNwQkMsWUFBQSxVQUFjO0lBQUEsTUFDZkMsZ0JBQUE7UUFFREMsY0FBQTtJQUVBO0lBR0QsTUFBQUMsU0FBQSxJQUFBSixzREFBQUEsQ0FBQUU7SUFFRCxhQUFBRyxNQUFBLG1EQUFBQyxJQUFBLEVBQUFDLFdBQUFBLFNBQUFDLElBQUEsSUFBQUYsSUFBQSxFQUFBRyxPQUFBTCxPQUFBTSxLQUFBLENBQUFELEtBQUE7QUFHRTtBQUVFLGVBQUFFLGNBQUFDLElBQUEsRUFBQUMsR0FBQTtJQUFBLElBQ0E7UUFDQSxNQUFBSixPQUFPLE1BQU9SO1FBQ2RZLElBQUFDLE1BQUksTUFBVUMsSUFBQSxDQUFBTjtJQUFBLFNBQ2hCTyxPQUFBO1FBQ0ZILElBQUFDLE1BQUEsTUFBQUMsSUFBQSxrQkFBQUMsTUFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVha3Rvci1iaXJkbmVzdC9uZXh0anMtYXBwLy4vcGFnZXMvYXBpL2Ryb25lcy50cz9jZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFhNTFBhcnNlciB9IGZyb20gXCJmYXN0LXhtbC1wYXJzZXJcIjtcbmV4cG9ydCBjb25zdCBnZXREcm9uZXMgPSBhc3luYyAoKT0+e1xuICAgIGNvbnN0IHBhcnNlck9wdGlvbnMgPSB7XG4gICAgICAgIGlnbm9yZVBpVGFnczogdHJ1ZVxuICAgIH07XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFhNTFBhcnNlcihwYXJzZXJPcHRpb25zKTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goXCJodHRwczovL2Fzc2lnbm1lbnRzLnJlYWt0b3IuY29tL2JpcmRuZXN0L2Ryb25lc1wiKS50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLnRleHQoKSkudGhlbigoZGF0YSk9PnBhcnNlci5wYXJzZShkYXRhKVtcInJlcG9ydFwiXVtcImNhcHR1cmVcIl1bXCJkcm9uZVwiXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0RHJvbmVzRGF0YShfcmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RHJvbmVzKCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGBFcnJvciBvY2N1cmVkICR7ZXJyb3J9YCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlhNTFBhcnNlciIsImdldERyb25lcyIsInBhcnNlck9wdGlvbnMiLCJpZ25vcmVQaVRhZ3MiLCJwYXJzZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJkYXRhIiwicGFyc2UiLCJnZXREcm9uZXNEYXRhIiwiX3JlcSIsInJlcyIsInN0YXR1cyIsInNlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/drones.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/drones.ts"));
module.exports = __webpack_exports__;

})();