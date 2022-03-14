'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guessClass = document.querySelector('.guess');
const numberClass = document.querySelector('.number');
const msgClass = document.querySelector('.message');
const scoreClass = document.querySelector('.score');
const checkClass = document.querySelector('.check');
const highScore = document.querySelector('.highscore');
const bodyStyling = document.querySelector('body').style;
let score = 20;

function losing() {
  scoreClass.textContent = 0;
  msgClass.textContent = '😢 You lost';
  checkClass.style.display = 'none';
}

function decrementScore() {
  score--;
  scoreClass.textContent = score;
}

// check btn
checkClass.addEventListener('click', function () {
  const guess = Number(guessClass.value);
  // No number entered
  if (!guess) {
    if (score > 1) {
      msgClass.textContent = '⛔ No Number';
      decrementScore();
    } else {
      losing();
    }
  }
  // over 20 || under 0
  else if (guess > 20 || guess < 0) {
    if (score > 1) {
      msgClass.textContent = 'out of limit';
      decrementScore();
    } else {
      losing();
    }
  }
  // over the secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      msgClass.textContent = '📈 Too High';
      decrementScore();
    } else {
      losing();
    }
  }
  // under the secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      msgClass.textContent = '📉 Too Low';
      decrementScore();
    } else {
      losing();
    }
  }
  // the right one
  else if (guess === secretNumber) {
    msgClass.textContent = '🎉 Correct Number!';
    numberClass.textContent = secretNumber;
    numberClass.style.width = '30rem';
    bodyStyling.backgroundColor = '#60b347';
    checkClass.style.display = 'none';

    if (score > Number(highScore.textContent)) {
      highScore.textContent = score;
    }
  }
});

// again btn
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreClass.textContent = score;
  msgClass.textContent = 'Start guessing...';
  bodyStyling.backgroundColor = '#222';
  numberClass.style.width = '15rem';
  checkClass.style.display = 'block';
  numberClass.textContent = '?';
  guessClass.value = '';
});
