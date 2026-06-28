import caesarCipher from "./caesarCipher.js";

describe("Encryption working correctly", () => {
  describe("Input validation", () => {
    it("should check for string & key validity", () => {
      expect(caesarCipher()).toBe("Ensure string & key availability");
      expect(caesarCipher("hi")).toBe("Ensure string & key availability");
    });
    it("should validate string's compatibility", () => {
      expect(caesarCipher("Hello!", 5)).not.toBe("Incompatible string");
      expect(caesarCipher("هلا", 5)).toBe("Incompatible string");
      expect(caesarCipher("Heللo", 5)).toBe("Incompatible string");
      expect(caesarCipher(123, 5)).toBe("Incompatible string");
    });
    it("should validate key's compatibility", () => {
      expect(caesarCipher("Hello", 10)).not.toBe("Incompatible key");
      expect(caesarCipher("Hello", "10")).not.toBe("Incompatible key");
      expect(caesarCipher("Hello", 10.2)).toBe("Incompatible key");
    });
  });
  describe("Strings shifting correctly", () => {
    it("should encrypt strings based on key correctly", () => {
      expect(caesarCipher("Hello!", 1)).toBe("Ifmmp!");
      expect(caesarCipher("xyz", 3)).toBe("abc");
      expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });
  });
});
