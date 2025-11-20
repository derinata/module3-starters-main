'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

students.forEach((student) => {
  const option = document.createElement('option');
  option.value = student.id;          // goes into value=""
  option.textContent = student.name;  // visible text
  target.appendChild(option);
});

console.log('Script loaded, options created');
