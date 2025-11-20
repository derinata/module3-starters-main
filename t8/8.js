'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const n1 = Number(document.getElementById('num1').value);
  const n2 = Number(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;

  let result;

  switch (op) {
    case 'add':
      result = n1 + n2;
      break;
    case 'sub':
      result = n1 - n2;
      break;
    case 'multi':
      result = n1 * n2;
      break;
    case 'div':
      result = n1 / n2;
      break;
  }

  document.getElementById('result').textContent = result;
});
