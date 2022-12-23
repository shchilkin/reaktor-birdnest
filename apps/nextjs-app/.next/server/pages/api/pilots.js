"use strict";
(() => {
var exports = {};
exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./pages/api/pilots.ts

const prisma = new client_namespaceObject.PrismaClient();
async function handler(_req, res) {
    try {
        const pilots = await prisma.pilot.findMany({
            include: {
                drone: true
            }
        });
        res.status(200).send(pilots);
    } catch (error) {
        res.status(500);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(587));
module.exports = __webpack_exports__;

})();