import { isDroneViolatingPerimeter } from './isDroneViolatingPerimeter';

describe('isDroneViolatingPerimeter', () => {
  test('should return false if drone is outside of perimeter', () => {
    expect(isDroneViolatingPerimeter(450, 450)).toBeFalsy();
  });
  test('should return true if drone is inside of perimeter, whole numbers', () => {
    expect(isDroneViolatingPerimeter(250000, 250000)).toBeTruthy();
  });
  test('should return true if drone is inside of perimeter, floats', () => {
    expect(isDroneViolatingPerimeter(250000.125, 250000.125)).toBeTruthy();
  });
});
