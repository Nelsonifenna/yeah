function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("nelson@email"));
console.log(isValidEmail("nelson.email"));
console.log(isValidEmail("nelson@email"));
