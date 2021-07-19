import { cats } from './cats.json';
import catCard from '../templates/cat-card.hbs';

const container = document.getElementById('root');
const catList = cats.map(catCard).join('');

container.innerHTML = catList;
