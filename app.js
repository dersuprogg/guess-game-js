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

// GENERATE RANDOM/SECRET NUMBER
let secretNum = Math.floor(Math.random() * 20) + 1;

// IMPLEMENT GAME LOGIC: CHECK GUESSED NUMBER AGAINST SECRET NUMBER
let score = 20;

guessBtn.addEventListener("click", function () {
  const guessNum = Number(guessInput.value);
  // CHECK IF THE USER INPUT IS A NUMBER
  if (!guessNum) {
    msg.textContent = "⚠️ Enter a number!";
  } else {
    if (guessNum > secretNum) {
      msg.textContent = "📈 Too high...";
      score--;
      scoreText.textContent = score;
    } else if (guessNum < secretNum) {
      msg.textContent = "📉 Too low ...";
      score--;
      scoreText.textContent = score;
    } else {
      msg.textContent = "🎉 You win!";
      board.textContent = secretNum;
      if (score >= highScore.textContent) {
        highScore.textContent = score;
      }
    }
    console.log(Number.isNaN(guessNum));
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  scoreText.textContent = score;
  msg.textContent = "Start guessing...";
  secretNum = Math.floor(Math.random() * 20) + 1;
  board.textContent = "?";
});
