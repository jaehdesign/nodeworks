import { writeFile, readFile } from 'fs/promises';

import { resolve, join } from 'path';

const dataPath = resolve('../data');
console.log(dataPath);
const file = join(dataPath, 'test.txt');

writeFile(file, 'Hello World')
    .then(() => {
        console.log('File written');
        return readFile(file, 'utf-8');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
