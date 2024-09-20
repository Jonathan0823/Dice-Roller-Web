const numberofdice = document.getElementById("numberofdice");
const dicenum = document.getElementById("result");
const diceimg = document.getElementById("diceimg");

let results = [];
let dice = [];
function rollDice() {
  results = [];
  dice = [];
  if (numberofdice.value < 1 || numberofdice.value > 10) {
    dicenum.textContent = "Please enter a number between 1 and 10";
    diceimg.innerHTML = "";
  } else {
    for (let i = 0; i < numberofdice.value; i++) {
      let result = Math.floor(Math.random() * 6) + 1;
      results.push(result);
      dice.push(`<img src=assets/${result}.png>`);
    }
    dicenum.textContent = results.join(", ");
    diceimg.innerHTML = dice.join(" ");

    numberofdice.value = "";
  }
}
