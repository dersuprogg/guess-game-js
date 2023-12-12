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
