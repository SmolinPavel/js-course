/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('focus event');
}
function onInputBlur() {
  console.log('blur event');
}
// function onInputChange() {
//   console.log('change event');
// }
function onInputChange(e) {
  console.log('input event', e.data);
}
