//import { resolve } from 'path';
import { join, resolve } from 'path';
import fs from 'fs';
const dataPath = resolve('../data');
console.log(dataPath); // C:\Users\Mañanas\Desktop\curso\nodeworks\test
const file = join(dataPath, 'test.txt');
{
    // fs.writeFileSync(file, 'Hola Mundo');
    // const content = fs.readFileSync(file, { encoding: 'utf-8' });
    // console.log(content);
}
fs.writeFile(file, 'Hola mundo otra vez', (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Archivo escrito');
    fs.readFile(file, { encoding: 'utf-8' }, (error, content) => {
        if (error) {
            console.log(error);
        }
        console.log('Archivo leído');
        console.log(content);
    });
});
