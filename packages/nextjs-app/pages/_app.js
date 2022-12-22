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
import "../styles/globals.css";
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return _jsx(Component, __assign({}, pageProps));
}
//# sourceMappingURL=_app.js.map