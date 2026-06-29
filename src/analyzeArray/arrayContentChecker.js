export default function isNumbers(array) {
  return array.every((item) => typeof item === "number");
}
