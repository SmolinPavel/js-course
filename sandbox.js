console.log('sandbox');

const dzInput = document.getElementById('dz');

dzInput.addEventListener('keydown', (event) => {
  console.log('event', event);
});
