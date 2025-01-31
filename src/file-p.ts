import { writeFile, readFile } from 'fs/promises';

import { join, resolve } from 'path';

const dataPath = resolve('../data');
console.log(dataPath); // C:\Users\Mañanas\Desktop\curso\nodeworks\test
const file = join(dataPath, 'test.txt');
