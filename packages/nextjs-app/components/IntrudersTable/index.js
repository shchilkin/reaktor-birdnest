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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useSWR from "swr";
import IntrudersTableCell from "../IntrudersTableCell";
import { fetcher } from "../../utils/fetcher";
var IntrudersTable = function () {
    var _a = useSWR("/api/pilots", fetcher, {
        refreshInterval: 2000,
    }), data = _a.data, error = _a.error;
    if (error)
        return _jsx("code", { children: error });
    return (_jsxs("table", __assign({ className: 'table-auto w-full text-left' }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Name" }), _jsx("th", { children: "Email" }), _jsx("th", { children: "Phone number" }), _jsx("th", { children: "Last seen" })] }) }), _jsx("tbody", { children: data === null || data === void 0 ? void 0 : data.sort(compareTime).map(function (pilot) { return (_jsx(IntrudersTableCell, { pilot: pilot }, pilot.id)); }) })] })));
};
export default IntrudersTable;
var getMinutes = function (date) {
    var updatedAt = new Date(date);
    var seconds = (Date.now() - updatedAt.valueOf()) / 1000;
    return seconds / 60;
};
var compareTime = function (a, b) {
    if (getMinutes(a.updatedAt) > getMinutes(b.updatedAt))
        return -1;
    if (getMinutes(a.updatedAt) < getMinutes(b.updatedAt))
        return 1;
    return 0;
};
//# sourceMappingURL=index.js.map