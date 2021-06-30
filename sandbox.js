// DOM navigation
const ulEl = document.getElementById('example');

const first = ulEl.firstElementChild;
const second = first.nextElementSibling;
const third = second.nextElementSibling;

// console.log(first.firstElementChild.nextElementSibling);

// Grapes
const myDiv = document.createElement('div');
myDiv.innerHTML = '<span>Hello</span>';
second.appendChild(myDiv);
