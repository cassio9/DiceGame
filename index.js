const rollBtn = document.getElementById("roll-btn");
const dice1 = document.getElementById("dice-num1");
const dice2 = document.getElementById("dice-num2");
const title = document.getElementById("turns");
const player1Board = document.getElementById("player1-board");
const player2Board = document.getElementById("player2-board");

let isPlayer1 = true;
let finishGame = false;
let player1Score = 0;
let player2Score = 0;

rollBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 6 + 1);

  console.log(player1Score);
  if (!finishGame) {
    if (isPlayer1) {
      title.childNodes[0].innerText = "Player 2 Turn";
      dice1.innerText = random;
      player1Score += random;
      player1Board.innerHTML = `Score: ${player1Score}`;
      dice1.classList.add("box");
      dice2.classList.remove("box");
      isPlayer1 = false;
    } else {
      title.childNodes[0].innerText = "Player 1 Turn";
      dice2.innerText = random;
      player2Score += random;
      player2Board.innerHTML = `Score: ${player2Score}`;
      dice1.classList.remove("box");
      dice2.classList.add("box");
      isPlayer1 = true;
    }
  }

  if (finishGame) {
    resetGame();
  }

  if (player1Score >= 20) {
    finishGame = true;
    rollBtn.innerText = "Reset Game 🔁 ";
    title.childNodes[0].innerText = "Player 1 Won! 🎉";
  } else if (player2Score >= 20) {
    finishGame = true;
    rollBtn.innerText = "Reset Game 🔁 ";
    title.childNodes[0].innerText = "Player 2 Won! 🎉";
  }
});

function resetGame() {
  isPlayer1 = true;
  finishGame = false;
  player1Score = 0;
  player2Score = 0;
  rollBtn.innerText = "Roll Dice 🎲";
  title.childNodes[0].innerText = "Player 1 Turn";
  player1Board.innerHTML = `Score: ${player1Score}`;
  player2Board.innerHTML = `Score: ${player2Score}`;
  dice1.innerText = "-";
  dice2.innerText = "-";
}
