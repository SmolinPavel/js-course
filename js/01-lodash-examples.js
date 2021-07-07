/*
 Throttle example
 */

const VIEWPORT_WIDTH = 1680;
window.addEventListener('mousemove', () => {});

// let count = 0;

// function onMouseMove(e) {
//   count++;
//   console.log(count, e.clientX, VIEWPORT_WIDTH / 2);
//   const currentRegion = e.clientX >= VIEWPORT_WIDTH / 2 ? 'East' : 'West';
//   const region = document.getElementById('region');
//   region.innerText = currentRegion;
// }

/*
 Debounce example
 */

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {});

// function onInput(e) {
//   console.log(`searching for: ${e.target.value}`);
// }
