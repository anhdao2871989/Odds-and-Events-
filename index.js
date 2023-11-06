const numberBank = [];
const odds = [];
const evens = [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const sortOneButton = document.getElementById('sortOne');
const sortAllButton = document.getElementById('sortAll');

function addNumberToBank(e) {
  e.preventDefault();
  const number = Number(input.value);
  numberBank.push(number);
  input.value = '';
  console.log(numberBank);
}

form.addEventListener('submit', addNumberToBank);

function sortOne() {
  const number = numberBank.pop();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  console.log('Odds:', odds);
  console.log('Evens:', evens);
}

function sortAll() {
  numberBank.sort((a, b) => a - b);
  while (numberBank.length > 0) {
    sortOne();
  }
}

sortOneButton.addEventListener('click', sortOne);
sortAllButton.addEventListener('click', sortAll);

