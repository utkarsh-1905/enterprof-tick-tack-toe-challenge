const boxes = document.querySelectorAll(".box");
let player1, player2;
let player1_choices = [];
let player2_choices = [];
let turn = "player1";
const changeTurn = document.querySelector(".turn");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    fillChoice(box);
  });
});

function fillChoice(box) {
  if (turn === "player1") {
    if (!checkEmpty(box.id)) {
      box.innerHTML = "X";
      player1_choices.push(box.id);
      turn = "player2";
      changeTurn.innerHTML = "Player 2";
      checkWinner(player1_choices, "1");
    }
  } else {
    if (!checkEmpty(box.id)) {
      box.innerHTML = "O";
      player2_choices.push(box.id);
      turn = "player1";
      changeTurn.innerHTML = "Player 1";
      checkWinner(player2_choices, "2");
    }
  }
}

function checkEmpty(id) {
  return player1_choices.includes(id) || player2_choices.includes(id);
}

function checkWinner(choices, player) {
  if (choices.length > 2) {
    if (
      choices.includes("1") &&
      choices.includes("2") &&
      choices.includes("3")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("4") &&
      choices.includes("5") &&
      choices.includes("6")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("7") &&
      choices.includes("8") &&
      choices.includes("9")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("1") &&
      choices.includes("4") &&
      choices.includes("7")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("2") &&
      choices.includes("5") &&
      choices.includes("8")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("3") &&
      choices.includes("6") &&
      choices.includes("9")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("1") &&
      choices.includes("5") &&
      choices.includes("9")
    ) {
      alert(`Player ${player} won`);
    }
    if (
      choices.includes("3") &&
      choices.includes("5") &&
      choices.includes("7")
    ) {
      alert(`Player ${player} won`);
    }
  }
}
