var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var PilotTableCellTime = function (_a) {
    var time = _a.time;
    var updatedAt = new Date(time);
    var seconds = (Date.now() - updatedAt.valueOf()) / 1000;
    var minutes = Math.floor(seconds / 60);
    var color = function (minutes) {
        switch (minutes) {
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
    return (_jsx("div", __assign({ className: color(minutes) }, { children: Math.floor(seconds) < 60
            ? "less than minute ago"
            : "".concat(minutes, " minutes ago") })));
};
export default PilotTableCellTime;
//# sourceMappingURL=index.js.map