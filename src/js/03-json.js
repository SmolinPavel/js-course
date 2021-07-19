import cats from './cats.json';
import catTemplate from '../templates/cat-list.hbs';

const container = document.getElementById('root');

const catList = catTemplate(
  cats.map((cat) => ({ ...cat, type: cat.type.split(',')[1] })),
);

container.innerHTML = catList;
