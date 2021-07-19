import cats from './cats.json';

localStorage.setItem('myKey', cats);

const myKey = JSON.parse(localStorage.getItem('myKey'));
console.log(myKey);
