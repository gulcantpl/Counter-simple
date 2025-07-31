let count = 0;
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const doubleBtn = document.getElementById('double');

const clickSound = new Audio('sound/click.wav');
Array.from(document.getElementsByClassName('btn-sound')).forEach((button) => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

incrementBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  count++;
  counter.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  count--;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  count = 0;
  counter.textContent = count;
});

doubleBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  count *= 2;
  counter.textContent = count;
});
