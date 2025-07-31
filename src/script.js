let count = 0;
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const doubleBtn = document.getElementById('double');

incrementBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
decrementBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});

doubleBtn.addEventListener('click', () => {
  count *= 2;
  counter.textContent = count;
});
