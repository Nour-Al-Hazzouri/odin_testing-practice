export default function capitalize(...word) {
  if (word.length === 0) return "No string passed";
  const capitalizedWords = [];
  if (word.length === 1) {
    if (typeof word[0] === "string")
      return (
        word[0][0].toUpperCase() +
        word[0]
          .split("")
          .splice(1, word[0].length - 1)
          .join("")
      );
    else return "Not a string";
  } else if (word.length > 1) {
    for (let i = 0; i < word.length; i++) {
      if (typeof word[i] === "string")
        capitalizedWords[i] =
          word[i][0].toUpperCase() +
          word[i]
            .split("")
            .splice(1, word[i].length - 1)
            .join("");
      else return "Not a string";
    }
    return capitalizedWords;
  }
}
