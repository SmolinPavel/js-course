const formEl = document.getElementById('info');
// const formEl = document.querySelector('#info');
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
});

formEl.addEventListener('click', (event) => {
  if (event.target.nodeName === 'INPUT') {
    console.log(`The user has touched ${event.target.name}`);
  }
});

// g
// gu
// gui
// guit
// guita
// guitar
