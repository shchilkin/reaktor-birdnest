"use strict";
(() => {
var exports = {};
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 861:
/***/ ((module) => {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getInfoData)
/* harmony export */ });
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(861);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__);

async function getInfoData(_req, res) {
    const parserOptions = {
        ignorePiTags: true
    };
    const parser = new fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__.XMLParser(parserOptions);
    try {
        const data = await fetch("https://assignments.reaktor.com/birdnest/drones").then((response)=>response.text()).then((data)=>data);
        res.status(200).send(parser.parse(data)["report"]["deviceInformation"]);
    } catch (error) {
        res.status(500).send(`Error occured ${error}`);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(783));
module.exports = __webpack_exports__;

})();