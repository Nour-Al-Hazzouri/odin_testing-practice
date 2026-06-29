import reverseString from "./reverseString.js";

describe("String reversal", () => {
  describe("Input Validation", () => {
    it("should not break with empty parameters", () => {
      expect(reverseString()).toMatch("No string passed");
    });
    it("should not break with numbers", () => {
      expect(reverseString(123)).toMatch("Not a string");
    });
  });
  describe("Edge Cases", () => {
    it("should not break with non-english characters", () => {
      expect(reverseString("هلا")).toMatch("اله");
    });
    it("should work with spaces and special characters", () => {
      expect(reverseString(" @#")).toMatch("#@ ");
    });
  });
  describe("Correct output", () => {
    it("should return '!ih'", () => {
      expect(reverseString("hi!")).toMatch("!ih");
    });
    it("should return '!olleh'", () => {
      expect(reverseString("hello!")).toMatch("!olleh");
    });
    it("should handle multiple parameters", () => {
      expect(reverseString("Hi", "Hello")).toContain("iH");
      expect(reverseString("Hi", "Hello")).toContain("olleH");
    });
  });
});
