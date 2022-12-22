/**
 * Calculates distance between the given point and the circle center by using the {@link https://math.stackexchange.com/questions/198764/how-to-know-if-a-point-is-inside-a-circle the following formula}
 *
 * @param xPoint point x coordinate
 * @param yPoint point y coordinate
 * @param xCircleCenter circle center x coordinate
 * @param yCircleCenter circle center y coordinate
 * @returns distance value between the point and the circle center
 */
export var getPointDistance = function (xPoint, yPoint, xCircleCenter, yCircleCenter) {
    return Math.abs(xPoint - xCircleCenter) + Math.abs(yPoint - yCircleCenter);
};
/**
 *
 * @param x
 * @param y
 * @param areaRange
 * @param ndzRange
 * @param ndzCenterX
 * @param ndzCenterY
 * @returns
 */
var isDroneViolatingPerimiter = function (x, y, ndzRange, ndzCenterX, ndzCenterY) {
    if (ndzRange === void 0) { ndzRange = 100000; }
    if (ndzCenterX === void 0) { ndzCenterX = 250000; }
    if (ndzCenterY === void 0) { ndzCenterY = 250000; }
    // get drone coordinates from params
    var pointDistanceFromCircleCenter = getPointDistance(x, y, ndzCenterX, ndzCenterY);
    var circleRadius = ndzRange / 2;
    // inside circle d < r | d = r / outside the circle d > r
    return pointDistanceFromCircleCenter <= circleRadius;
};
export default isDroneViolatingPerimiter;
//# sourceMappingURL=isDroneViolatingPerimiter.js.map