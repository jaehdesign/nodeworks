//import { resolve } from 'path';

import { resolve, join } from 'path';
import fs from 'fs';

const dataPath = resolve('../data');
console.log(dataPath);
const file = join(dataPath, 'test.txt');

{
    // fs.writeFileSync(file, 'Hola mundo');
    // const content = fs.readFileSync(file, { encoding: 'utf-8' });
    // console.log(content);
}

fs.writeFile(file, 'Hola mundo otra vez', (error) => {
    if (error) {
        console.error(error);
    }
    console.log('Archivo escrito');
    fs.readFile(file, { encoding: 'utf-8' }, (error, content) => {
        if (error) {
            console.error(error);
        }
        console.log('Archivo leído');
        console.log(content);
    });
});
