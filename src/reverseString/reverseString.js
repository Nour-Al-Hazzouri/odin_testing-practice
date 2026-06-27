export default function reverseString(...string) {
  if (string.length === 0) {
    return "No string passed";
  }
  const reversedString = [];
  if (string.length === 1) {
    if (typeof string[0] === "string") {
      return string[0].split("").reverse().join("");
    } else {
      return "Not a string";
    }
  } else if (string.length > 1) {
    for (let i = 0; i < string.length; i++) {
      if (typeof string[i] === "string") {
        reversedString[i] = string[i].split("").reverse().join("");
      } else {
        return "Not a string";
      }
    }
    return reversedString;
  }
}
