import validateInput from "./validation.js";

let validationResult;
const calculator = {
  add(...nbs) {
    validationResult = validateInput(nbs);
    if (validationResult === true) {
      return nbs[0] + nbs[1];
    } else {
      return validationResult;
    }
  },
  subtract(...nbs) {
    validationResult = validateInput(nbs);
    if (validationResult === true) {
      return nbs[0] - nbs[1];
    } else {
      return validationResult;
    }
  },
  multiply(...nbs) {
    validationResult = validateInput(nbs);
    if (validationResult === true) {
      return nbs[0] * nbs[1];
    } else {
      return validationResult;
    }
  },
  divide(...nbs) {
    validationResult = validateInput(nbs);
    if (validationResult === true) {
      return nbs[0] / nbs[1];
    } else {
      return validationResult;
    }
  },
};

export const { add, subtract, divide, multiply } = calculator;
