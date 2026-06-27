export default function validateInput(nbs) {
  if (!nbs) {
    return "Empty parameters";
  } else if (!Array.isArray(nbs)) {
    return "Incorrect datatype";
  } else if (nbs.length < 2) {
    return "Not enough numbers";
  } else if (
    nbs.length === 2 &&
    (!Number.isFinite(nbs[0]) || !Number.isFinite(nbs[1]))
  ) {
    return "Only numbers acceptable";
  } else if (nbs.length > 2) {
    return "Only 2 values acceptable";
  } else {
    return true;
  }
}
