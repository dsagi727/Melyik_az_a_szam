'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Ahol nem jó az input adat
  if (!guess) {
    displayMessage('⛔️ Nem szám');

    // Ahol a játékos nyer
  } else if (guess === secretNumber) {
    displayMessage('🎉 Kitaláltad!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Ahol rosszul tippel
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Túl nagy!' : '📉 Túl kicsi!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //Ahol a játékos veszít
      displayMessage('💥 Vesztettél!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#df4759';
    }
  }
});

//Újra gomb
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Találd ki...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
