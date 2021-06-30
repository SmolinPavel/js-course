const fakeArray = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3,
  join: () => console.log('Join me!!!'),
};

// 1 Copy method from Array.

// fakeArray.join = [].join;
// console.log(fakeArray.join('-'));

// 2 Using call

console.log([].join.apply(fakeArray, ['->']));
fakeArray.join();
