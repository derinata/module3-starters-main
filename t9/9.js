'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const input = document.getElementById('calculation').value;
  let result;

  if (input.includes('+')) {
    const parts = input.split('+');
    result = Number(parts[0]) + Number(parts[1]);

  } else if (input.includes('-')) {
    const parts = input.split('-');
    result = Number(parts[0]) - Number(parts[1]);

  } else if (input.includes('*')) {
    const parts = input.split('*');
    result = Number(parts[0]) * Number(parts[1]);

  } else if (input.includes('/')) {
    const parts = input.split('/');
    result = Number(parts[0]) / Number(parts[1]);
  }

  document.getElementById('result').textContent = result;
});
