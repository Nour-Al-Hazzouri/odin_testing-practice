import isEnglish from "./englishChecker.js";
import isEnglishNumber from "./numberChecker.js";

export default function caesarCipher(string, key) {
  if (!string || !key) {
    return "Ensure string & key availability";
  } else if (!isEnglish(string)) {
    return "Incompatible string";
  } else if (!isEnglishNumber(key)) {
    return "Incompatible key";
  }
  const splitString = string.split("");
  const shiftedString = [];
  for (let i = 0; i < string.length; i++) {
    if (/[^a-zA-Z]/.test(splitString[i])) {
      shiftedString[i] = splitString[i];
    } else if (/[A-Z]/.test(splitString[i])) {
      shiftedString[i] = String.fromCharCode(
        ((splitString[i].charCodeAt(0) - 65 + key) % 26) + 65,
      );
    } else if (/[a-z]/.test(splitString[i])) {
      shiftedString[i] = String.fromCharCode(
        ((splitString[i].charCodeAt(0) - 97 + key) % 26) + 97,
      );
    }
  }
  const completedString = shiftedString.join("");
  return completedString;
}
