// preventDefault для ссылок
const link = document.getElementById('myLink');
link.addEventListener('click', (e) => {
  e.preventDefault(); // отменить поведение по умолчание (переход)
  alert('STOP!');
});

/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // отменить поведение по умолчание (перезагрузка)

  const formData = new FormData(this);
  console.log(formData.values());
});
