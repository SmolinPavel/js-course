/*
 Throttle example
 */

const VIEWPORT_WIDTH = 1680;

let count = 0;

const throttledMouseMove = _.throttle(onMouseMove, 1000);

window.addEventListener('mousemove', throttledMouseMove);

function onMouseMove(e) {
  count++;
  const currentRegion = e.clientX >= VIEWPORT_WIDTH / 2 ? 'East' : 'West';
  const region = document.getElementById('region');
  region.innerText = currentRegion;
}

/*
 Debounce example
 */

const debouncedInputHandler = _.throttle(onInput, 1000);
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', debouncedInputHandler);

function onInput(event) {
  console.log(`searching for: ${event.target.value}`);
}
