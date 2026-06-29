import analyzeArray from "./analyzeArray.js";

describe("Array analyzed correctly", () => {
  describe("Correct input validation", () => {
    it("should handle empty parameters", () => {
      expect(analyzeArray()).toBe("No array passed");
    });
    it("should only accept an array", () => {
      expect(analyzeArray("Hi")).toBe("Not an array");
      expect(analyzeArray(15)).toBe("Not an array");
      expect(analyzeArray([])).not.toBe("Not an array");
    });
    it("should not accept non-numbers content", () => {
      expect(analyzeArray(["One", 2, 3])).toBe("Content not only numbers");
      expect(analyzeArray([1, 2, 3])).not.toBe("Content not only numbers");
    });
  });
  describe("Correct results calculation", () => {
    it("should return correct object results", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        minimum: 1,
        maximum: 8,
        length: 6,
      });
      expect(analyzeArray([-2, 5, 0, 12, -6])).toEqual({
        average: 1.8,
        minimum: -6,
        maximum: 12,
        length: 5,
      });
      expect(analyzeArray([7, 7, 7, 7])).toEqual({
        average: 7,
        minimum: 7,
        maximum: 7,
        length: 4,
      });
    });
  });
});
