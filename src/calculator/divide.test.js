import { divide } from "./calculator.js";

describe("divide working correctly", () => {
  it("should return correct calculations", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(5, 2)).toBeCloseTo(2.5);
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(0, 10)).toBe(0);
    expect(divide(10, 0)).toBe(Infinity);
  });
});
