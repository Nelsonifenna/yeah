const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElemnt = document.getElementById("resultElemnt");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    resultElemnt.textContent = `you are too old to enter this site`;
  } else if (age >= 18) {
    resultElemnt.textContent = `you are old enough to enter this site`;
  } else if (age == 0) {
    resultElemnt.textContent = `you are just born cant enter this site`;
  } else if (age < 18) {
    resultElemnt.textContent = `you must be 18+ to enter this site`;
  } else {
    resultElemnt.textContent = `you are not old enough to enter this site`;
  }
};
