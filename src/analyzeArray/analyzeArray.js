import isNumbers from "./arrayContentChecker";

export default function analyzeArray(array) {
  if (!array) {
    return "No array passed";
  } else if (!Array.isArray(array)) {
    return "Not an array";
  } else if (!isNumbers(array)) {
    return "Content not only numbers";
  }
  let min = array[0],
    max = array[0],
    avg = 0,
    sum = array[0],
    len = array.length;
  for (let i = 1; i < len; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
    sum += array[i];
  }
  avg = sum / len;
  return (results = {
    average: avg,
    minimum: min,
    maximum: max,
    length: len,
  });
}
