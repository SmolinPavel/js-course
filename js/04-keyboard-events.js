/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', (e) => {
  if (e.key !== 'w') {
    refs.output.innerHTML += e.key;
  } else {
    alert('WWW!');
  }
});
