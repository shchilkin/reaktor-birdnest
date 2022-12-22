import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import isDroneViolatingPerimiter from "../../utils/isDroneViolatingPerimiter";
var DroneDisplayCanvas = function (_a) {
    var width = _a.width, height = _a.height, drones = _a.drones;
    var canvasRef = useRef(null);
    useEffect(function () {
        if (canvasRef.current) {
            var canvas = canvasRef.current;
            var context_1 = canvas.getContext("2d");
            if (context_1 == null)
                return;
            //Our first draw
            context_1.fillStyle = "#fff";
            context_1.fillRect(0, 0, context_1.canvas.width, context_1.canvas.height);
            context_1.beginPath();
            context_1.arc(500 / 2, 500 / 2, 0.1, 0, 360, false);
            context_1.strokeStyle = "red";
            context_1.stroke();
            context_1.lineWidth = 5;
            context_1.closePath();
            context_1.beginPath();
            context_1.arc(500 / 2, 500 / 2, 125, 0, 360, false);
            context_1.strokeStyle = "pink";
            context_1.stroke();
            context_1.lineWidth = 5;
            context_1.closePath();
            if (drones) {
                drones.forEach(function (drone) {
                    context_1.beginPath();
                    context_1.arc(Math.floor(drone.positionX / 1000), Math.floor(drone.positionY / 1000), 0.1, 0, 360, false);
                    context_1.strokeStyle = isDroneViolatingPerimiter(Math.floor(drone.positionX / 1000), Math.floor(drone.positionY / 1000), 250, 500, 500)
                        ? "pink"
                        : "black";
                    context_1.stroke();
                    context_1.lineWidth = 5;
                    context_1.closePath();
                });
            }
        }
    }, [drones]);
    return _jsx("canvas", { ref: canvasRef, width: width, height: height });
};
var DroneDisplay = function (_a) {
    var width = _a.width, height = _a.height;
    var _b = useSWR("/api/drones", fetcher, {
        refreshInterval: 2000,
    }), data = _b.data, error = _b.error;
    if (error)
        return _jsx("div", { children: "Error" });
    // TODO: Fix typing
    // @ts-expect-error
    return _jsx(DroneDisplayCanvas, { width: width, height: height, drones: data });
};
export default DroneDisplay;
//# sourceMappingURL=index.js.map