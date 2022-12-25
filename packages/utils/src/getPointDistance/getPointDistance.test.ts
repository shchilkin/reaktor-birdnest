import {getPointDistance} from "./getPointDistance";


describe("getPointDistance", () => {
    test("function works with whole numbers", () => {
        expect(getPointDistance(30, -70, 0, 0)).toBe(100);
    });
    test("function works with floats", () => {
        expect(getPointDistance(341493.5517738741, 184330.51667087348, 0, 0)).toBe(525824.0684447476);
    });
    test ("function works with negative numbers", () => {
        expect(getPointDistance(-30, -70, 0, 0)).toBe(100);
    });
})