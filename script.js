const boxes = document.querySelectorAll(".box");
let player1_choices = [];
let player2_choices = [];
let turn = "player1";
const changeTurn = document.querySelector(".turn");
const winner = document.querySelector(".winner");
const text = document.querySelector(".text");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
let player1_win = 0;
let player2_win = 0;
p1.innerText = "Score of Player 1: " + player1_win;
p2.innerText = "Score of Player 2: " + player2_win;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    fillChoice(box);
  });
});

function checkDraw() {
  if (player1_choices.length + player2_choices.length === 9) {
    winnerText.innerText = "Draw";
    console.log("draw");
  }
}

function fillChoice(box) {
  if (turn === "player1") {
    if (!checkEmpty(box.id)) {
      box.innerHTML =
        '<img src="./assets/x-solid.svg" class="box-img" alt="x" />';
      player1_choices.push(box.id);
      turn = "player2";
      changeTurn.innerHTML = "Turn: Player 2";
      checkWinner(player1_choices, "1");
    }
  } else {
    if (!checkEmpty(box.id)) {
      box.innerHTML =
        '<img src="./assets/o-solid.svg" class="box-img" alt="x" />';
      player2_choices.push(box.id);
      turn = "player1";
      changeTurn.innerHTML = "Turn: Player 1";
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
      gameOver(player);
    }
    if (
      choices.includes("4") &&
      choices.includes("5") &&
      choices.includes("6")
    ) {
      gameOver(player);
    }
    if (
      choices.includes("7") &&
      choices.includes("8") &&
      choices.includes("9")
    ) {
      gameOver(player);
    }
    if (
      choices.includes("1") &&
      choices.includes("4") &&
      choices.includes("7")
    ) {
      gameOver(player);
    }
    if (
      choices.includes("2") &&
      choices.includes("5") &&
      choices.includes("8")
    ) {
      gameOver(player);
    }
    if (
      choices.includes("3") &&
      choices.includes("6") &&
      choices.includes("9")
    ) {
      gameOver(player);
    }
    if (
      choices.includes("1") &&
      choices.includes("5") &&
      choices.includes("9")
    ) {
      gameOver(player);
    }
    if (
      choices.includes("3") &&
      choices.includes("5") &&
      choices.includes("7")
    ) {
      gameOver(player);
    }
  }
  checkDraw();
}
const canvas = document.getElementById("my-canvas");
const throwConfetti = () => {
  const confettiSettings = { target: canvas, clock: 30, rotate: true };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confetti.clear();
  }, 2000);
};
function gameOver(player) {
  winner.classList.remove("hidden");
  // throwConfetti();
  text.innerText = `Player ${player} won`;
  if (player === "1") {
    player1_win++;
  } else if (player === "2") {
    player2_win++;
  }
  p1.innerText = "Score of Player 1: " + player1_win;
  p2.innerText = "Score of Player 2: " + player2_win;
}

const replayBtn = document.querySelector(".replay");
replayBtn.addEventListener("click", replay);
function replay() {
  player1_choices = [];
  player2_choices = [];
  text.innerText = "";
  winner.classList.add("hidden");
  changeTurn.innerHTML = "Turn: Player 1";
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
}
