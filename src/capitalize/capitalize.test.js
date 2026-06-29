import capitalize from "./capitalize.js";

describe("First letter capitalization", () => {
  describe("Input validation", () => {
    it("should not break with numbers", () => {
      expect(capitalize(324)).toMatch("Not a string");
    });
    it("should not break with empty parameter", () => {
      expect(capitalize()).toMatch("No string passed");
    });
  });
  describe("Different cases", () => {
    it("should work with spaces", () => {
      expect(capitalize("how are you?")).toMatch("How are you?");
    });
    it("should not break with non-uppercase letters", () => {
      expect(capitalize("هلا")).toMatch("هلا");
    });
    it("should not break with spaces", () => {
      expect(capitalize(" hi")).toMatch(" hi");
    });
  });
  describe("Correct output", () => {
    it("should return 'Hi'", () => {
      expect(capitalize("hi")).toMatch("Hi");
    });
    it("should return 'Hello'", () => {
      expect(capitalize("hello")).toMatch("Hello");
    });
    it("should work with multiple parameters", () => {
      expect(capitalize("hi", "hello", "capitalized")).toContain("Hi");
      expect(capitalize("hi", "hello", "capitalized")).toContain("Hello");
      expect(capitalize("hi", "hello", "capitalized")).toContain("Capitalized");
    });
  });
});
