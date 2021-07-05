/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener(
  'click',
  () => {
    console.log('another parent');
    event.stopImmediatePropagation();
  },
  true,
);
refs.parent.addEventListener('click', onParentClick, true);
refs.child.addEventListener('click', onChildClick, true);
refs.innerChild.addEventListener('click', onInnerChildClick, true);

function onInnerChildClick(event) {
  console.log('inner child');
}

function onChildClick(event) {
  console.log('child');
}

function onParentClick(event) {
  // event.stopPropagation(); // отменить распространение события на следующие уровни
  // event.stopImmediatePropagation();// отменить распространение события даже на текущем уровне
  console.log('parent');
}
