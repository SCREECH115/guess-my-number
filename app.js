const jsConfetti = new JSConfetti();

let number = Math.trunc(Math.random() * 100) + 1;
const btn = document.getElementById("submit");
const reply = document.querySelector(".reply");
const newGameBtn = document.getElementById("newGame");
let scoreDisplay = document.getElementById("score");
let highscoreDisplay = document.getElementById("highscore");

score = 20;
highscore = 20;

scoreDisplay.textContent = `Score: ${score}`;
highscoreDisplay.textContent = `Highscore: ${highscore}`;

btn.addEventListener("click", function () {
  const userNumber = document.querySelector(".guess").value;
  console.log(number);

  if (userNumber === "") {
    reply.textContent = "Please enter a value!";
  } else {
    if (userNumber > number || userNumber < number) {
      userNumber > number
        ? (reply.textContent = "Your number is too high!")
        : (reply.textContent = "Your number is too low!");
      score--;
      score < highscore ? highscore-- : highscore;
      console.log(`Score: ${score}`, `Highscore: ${highscore}`);
      scoreDisplay.textContent = `Score: ${score}`;
      highscoreDisplay.textContent = `Highscore: ${highscore}`;
    } else if (userNumber == number) {
      win();
    }
  }

  if (score <= 0) {
    reply.textContent = "Sorry, you lost the game.";
    btn.textContent = "New game";
    btn.style.display = "none";
    newGameBtn.style.display = "block";
  }
});

newGameBtn.addEventListener("click", function () {
  btn.style.display = "block";
  newGameBtn.style.display = "none";
  number = Math.trunc(Math.random() * 100) + 1;
  btn.textContent = "Guess";
  userNumber.value = "";
  reply.textContent = "";
  score <= 1 ? (highscore = 20) : highscore;
  score = 20;
  scoreDisplay.textContent = `Score: ${score}`;
  highscoreDisplay.textContent = `Highscore: ${highscore}`;
});

const win = () => {
  btn.style.display = "none";
  newGameBtn.style.display = "block";
  isWinner = true;
  reply.textContent = "Your guess is correct! Congrats!";
  highscore = score;

  jsConfetti.addConfetti();
};
