const categoriesListRef = document.getElementById('categories');

// HTML collection
const categoriesListArrRef = categoriesListRef.children;
// const arrRef = Array.from(categoriesListArrRef);

// NodeList
const categoriesListItemRef = categoriesListRef.querySelectorAll('.item');

// Print initial 1) html collection 2) Node list
console.log(categoriesListArrRef); // HTMLCollection(3) [li.item, li.item, li.item]
console.log(categoriesListItemRef); // NodeList(3) [li.item, li.item, li.item]

const liElement = document.createElement('li');
liElement.classList.add('item');
liElement.innerHTML = '<h2>Auto</h2><ul><li>BMW</li><li>Audi</li></ul>';
categoriesListRef.appendChild(liElement);

console.log(categoriesListArrRef); // HTMLCollection(3) [li.item, li.item, li.item]
console.log(categoriesListItemRef);

// С HTMLCollection(3) [li.item, li.item, li.item] не работает forEach
