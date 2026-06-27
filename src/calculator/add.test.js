import { add } from "./calculator.js";

describe("Addition working correctly", () => {
  it("should return correct calculations", () => {
    expect(add(2, 2)).toBe(4);
    expect(add(20, 13)).toBe(33);
  });
  it("should work with negative numbers", () => {
    expect(add(-5, 10)).toBe(5);
    expect(add(-10, -5)).toBe(-15);
  });
});
