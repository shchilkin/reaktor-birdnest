import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import PilotTableCellTime from "../PilotTableCellTime";
var IntrudersTableCell = function (_a) {
    var pilot = _a.pilot;
    return (_jsxs("tr", { children: [_jsxs("td", { children: [pilot.firstName, " ", pilot.lastName] }), _jsx("td", { children: pilot.email }), _jsx("td", { children: pilot.phoneNumber }), _jsx("td", { children: _jsx(PilotTableCellTime, { time: pilot.updatedAt }) })] }));
};
export default IntrudersTableCell;
//# sourceMappingURL=index.js.map