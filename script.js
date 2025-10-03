'use strict';
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const btnroll = document.querySelector('.btn--roll');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let scores, currentscore, activeplayer;

// initial fonction
const int = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  score0.textContent = 0;
  current0.textContent = 0;
  score1.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  activeplayer = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  if (player2.classList.contains('player--winner')) {
    player2.classList.remove('player--winner');
  } else if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
  }
};
int();

//switch player function
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;

  activeplayer = activeplayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//roll function
const roll = function () {
  const dice1 = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${dice1}.png`;

  if (dice1 !== 1) {
    currentscore += dice1;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    switchplayer();
  }
};
btnroll.addEventListener('click', roll);

//hold function
const hold = function () {
  scores[activeplayer] += currentscore;
  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];
  if (scores[activeplayer] >= 100) {
    dice.classList.add('hidden');

    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
  } else {
    switchplayer();
  }
};

btnhold.addEventListener('click', hold);
btnnew.addEventListener('click', int);
