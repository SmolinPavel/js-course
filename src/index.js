import _ from 'lodash';

import './css/styles.scss';
import './css/background.scss';

import { Message } from './message';

function component() {
  const element = document.createElement('div');

  const message = new Message();

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', message.getMessage()], ' ');

  return element;
}

document.body.appendChild(component());
