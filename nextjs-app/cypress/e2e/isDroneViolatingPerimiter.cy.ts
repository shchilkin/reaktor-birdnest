import isDroneViolatingPerimiter from "../../utils/isDroneViolatingPerimiter";

describe("drone violating perimiter function tests", () => {
  it("returns false if drone is outside the no drone zone", () => {
    expect(isDroneViolatingPerimiter(10, 20)).to.false;
  });
  it("returns true if drone is inside the no drone zone", () => {
    expect(isDroneViolatingPerimiter(240000, 240000)).to.true;
  });
});
