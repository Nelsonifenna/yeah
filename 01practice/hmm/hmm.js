const decreasedBtn = document.getElementById("decreasedBtn");
const resetBtn = document.getElementById("resetBtn");
const increasedBtn = document.getElementById("increasedBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasedBtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};
decreasedBtn.onclick = function () {
  count--;
  countlabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
