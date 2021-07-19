import lodash from 'lodash';

import cats from './cats.json';

const objects = [{ a: 1 }, { b: 2 }];

const deep = lodash.cloneDeep(objects);
console.log(deep[0] === objects[0]);
