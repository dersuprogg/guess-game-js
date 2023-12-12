"use strict";

// SELECT UI ELEMENTS
const againBtn = document.querySelector(".btn-again");
const guessBtn = document.querySelector(".btn-guess");
const headerTitle = document.querySelector("header h1");
const board = document.querySelector(".board");
const guessInput = document.querySelector(".guess");
const msg = document.querySelector(".msg");
const scoreText = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const body = document.querySelector("body");
// GENERATE RANDOM/SECRET NUMBER
let secretNum = Math.floor(Math.random() * 20) + 1;

// IMPLEMENT GAME LOGIC: CHECK GUESSED NUMBER AGAINST SECRET NUMBER
let score = 20;

function displayText(txt) {
  msg.textContent = txt;
}

guessBtn.addEventListener("click", function () {
  const guessNum = Number(guessInput.value);
  // CHECK IF THE USER INPUT IS A NUMBER
  if (!guessNum) {
    displayText("⚠️ Enter a number!");
  } else {
    // CHECK IF THE USER HAS LEFT ANY ATTEMPTS
    if (score > 1) {
      if (guessNum > secretNum) {
        displayText("📈 Too high...");
        score--;
        scoreText.textContent = score;
      } else if (guessNum < secretNum) {
        displayText("📉 Too low ...");
        score--;
        scoreText.textContent = score;
      } else {
        displayText("🎉 You win!");
        board.textContent = secretNum;
        body.style.backgroundColor = "#65B741";
        if (score >= highScore.textContent) {
          highScore.textContent = score;
        }
      }
    } else {
      displayText("😭 You lose...");
    }
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  scoreText.textContent = score;
  displayText("Start guessing...");
  secretNum = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = "#2b2a33";
  board.textContent = "?";
});
