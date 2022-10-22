'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉🎉Correct Number....!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let Snumber = Math.trunc(Math.random() * 20) + 1;
let hscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no INput
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number🤨🤨';
  }
  //WIN
  else if (guess === Snumber) {
    document.querySelector('.message').textContent = '🎉🎉Correct Number....!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = Snumber;
    
    if (score > hscore) {
      hscore = score;
      document.querySelector('.highscore').textContent = hscore;
    }
  }
  //not correct
  else if (guess !== Snumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Snumber ? 'Too HIGH....!' : 'Too LOW....!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lost.........!';
      document.querySelector('body').style.backgroundColor = '#b34747';
    }
  }
  //   //high
  //   else if (guess > Snumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too HIGH....!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'You Lost.........!';
  //     }
  //   }
  //   //low
  //   else if (guess < Snumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too LOW....!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'You Lost.........!';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing....!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
