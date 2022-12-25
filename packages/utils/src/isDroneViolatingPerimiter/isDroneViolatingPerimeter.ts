import { getPointDistance } from '../getPointDistance/getPointDistance';

/** Checks if drone is violating perimiter
 * @param x - drone x coordinate
 * @param y - drone y coordinate
 * @param areaRange - area range
 * @param ndzRange - no drone zone range
 * @param ndzCenterX - no drone zone center x coordinate
 * @param ndzCenterY - no drone zone center y coordinate
 * @returns - true if drone is violating perimiter, false otherwise
 */
export const isDroneViolatingPerimeter = (
  x: number,
  y: number,
  ndzRange = 100000,
  ndzCenterX = 250000,
  ndzCenterY = 250000
): boolean => {
  // get drone coordinates from params
  const pointDistanceFromCircleCenter = getPointDistance(x, y, ndzCenterX, ndzCenterY);
  const circleRadius = ndzRange / 2;

  // inside circle d < r | d = r / outside the circle d > r
  return pointDistanceFromCircleCenter <= circleRadius;
};
