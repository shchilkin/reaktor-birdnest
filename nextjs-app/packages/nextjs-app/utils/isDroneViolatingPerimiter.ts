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
  return (
    Math.pow(xPoint - xCircleCenter, 2) + Math.pow(yPoint - yCircleCenter, 2)
  );
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
  areaRange = 500000,
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
  // TODO: Refactor code to make it more understandable and consistent (add **2 to pointDistanceFromCircleCenter or remove it from radius)

  // inside circle d < r | d = r / outside the circle d > r
  return pointDistanceFromCircleCenter <= Math.pow(circleRadius, 2);
};

export default isDroneViolatingPerimiter;
