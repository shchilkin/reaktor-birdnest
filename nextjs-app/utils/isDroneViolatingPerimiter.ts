/**
 * Calculates distance between the given point and the circle center by using the {@link https://math.stackexchange.com/questions/198764/how-to-know-if-a-point-is-inside-a-circle the following formula}
 *
 * @param xPoint point x coordinate
 * @param yPoint point y coordinate
 * @param xCircleCenter circle center x coordinate
 * @param yCircleCenter circle center y coordinate
 * @returns distance value between the point and the circle center
 */
export const getPointDistance = (
  xPoint: number,
  yPoint: number,
  xCircleCenter: number,
  yCircleCenter: number
): number => {
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
const isDroneViolatingPerimiter = (
  x: number,
  y: number,
  ndzRange = 100000,
  ndzCenterX = 250000,
  ndzCenterY = 250000
): boolean => {
  // get drone coordinates from params
  const pointDistanceFromCircleCenter = getPointDistance(
    x,
    y,
    ndzCenterX,
    ndzCenterY
  );
  const circleRadius = ndzRange / 2;

  // inside circle d < r | d = r / outside the circle d > r
  return pointDistanceFromCircleCenter <= circleRadius;
};

export default isDroneViolatingPerimiter;
