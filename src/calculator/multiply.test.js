import { multiply } from "./calculator.js";

describe("multiply working correctly", () => {
  it("should multiply correctly", () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(10, 5)).toBe(50);
    expect(multiply(10000, 0)).toBe(0);
  });
  it("should work with negative numbers", () => {
    expect(multiply(5, -5)).toBe(-25);
    expect(multiply(-15, 10)).toBe(-150);
  });
});
