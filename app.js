"use strict";

// SELECT UI ELEMENTS
const againBtn = document.querySelector(".btn-again");
const guessBtn = document.querySelector(".btn-guess");
const headerTitle = document.querySelector("header h1");
const board = document.querySelector(".board");
const guessInput = document.querySelector(".guess");
const msg = document.querySelector(".msg");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");

// GENERATE RANDOM/SECRET NUMBER
const secretNum = Math.floor(Math.random() * 20) + 1;
board.textContent = secretNum;

// IMPLEMENT GAME LOGIC: CHECK GUESSED NUMBER AGAINST SECRET NUMBER
guessBtn.addEventListener("click", function () {
  const guessNum = Number(guessInput.value);
  console.log(guessNum);
  // CHECK IF THE USER INPUT IS A NUMBER
  if (!guessNum) {
    msg.textContent = "⚠️ Enter a number!";
  } else {
    if (guessNum > secretNum) {
      msg.textContent = "📈 Too high...";
    } else if (guessNum < secretNum) {
      msg.textContent = "📉 Too low ...";
    } else {
      msg.textContent = "🎉 You win!";
    }
    console.log(Number.isNaN(guessNum));
  }
});
