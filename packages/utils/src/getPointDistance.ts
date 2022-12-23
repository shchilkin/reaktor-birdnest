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
