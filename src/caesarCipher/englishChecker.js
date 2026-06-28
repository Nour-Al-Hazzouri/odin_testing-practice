export default function isEnglish(string) {
  if (typeof string === "string") return /^[a-zA-Z0-9.,?!'\s]+$/.test(string);
}
