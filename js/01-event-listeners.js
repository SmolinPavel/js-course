/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// onClick
const handleClick = (event) => console.log(event);

addListenerBtn.addEventListener('click', () => {
  // по клику на target Button нужно выполнить
  targetBtn.addEventListener('click', handleClick);
});

removeListenerBtn.addEventListener('click', () => {
  targetBtn.removeEventListener('click', handleClick);
});
