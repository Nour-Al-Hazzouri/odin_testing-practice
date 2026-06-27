import validateInput from "./validation.js";

describe("validation working correctly", () => {
  it("should work with 2 numbers", () => {
    expect((5, 2)).toBeTruthy();
  });
  it("should not break with less than 2 parameters", () => {
    expect(validateInput()).toBe("Empty parameters");
    expect(validateInput([1])).toBe("Not enough numbers");
  });
  it("should not break with non-numbers", () => {
    expect(validateInput(["alex", "Harry"])).toBe("Only numbers acceptable");
    expect(validateInput([NaN, 10])).toBe("Only numbers acceptable");
    expect(validateInput([10, Infinity])).toBe("Only numbers acceptable");
  });
  it("should not accept more than 2 numbers", () => {
    expect(validateInput([1, 2, 3])).toBe("Only 2 values acceptable");
  });
});
