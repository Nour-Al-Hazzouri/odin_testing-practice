export default function capitalize(word) {
  if (!word) {
    return "No string passed";
  } else if (word && typeof word !== "string") {
    return "Not a string";
  }
  return (
    word[0].toUpperCase() +
    word
      .split("")
      .splice(1, word.length - 1)
      .join("")
  );
}
