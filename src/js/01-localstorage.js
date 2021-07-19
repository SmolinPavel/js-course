console.log(localStorage);

localStorage.setItem('test', JSON.stringify({ value: 'Test', size: 24 }));

const savedData = localStorage.getItem('test');
console.log('savedData', savedData);

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);
