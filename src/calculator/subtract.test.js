import { subtract } from "./calculator.js";

describe("subtract working correctly", () => {
  it("should return correct calculations", () => {
    expect(subtract(10, 3)).toBe(7);
    expect(subtract(7, 10)).toBe(-3);
  });
});
