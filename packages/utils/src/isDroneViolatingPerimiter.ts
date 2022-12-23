import { getPointDistance } from "./getPointDistance";

/** Is drone violating perimiter
 * @param x
 * @param y
 * @param areaRange
 * @param ndzRange
 * @param ndzCenterX
 * @param ndzCenterY
 * @returns
 */
export const isDroneViolatingPerimiter = (
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
