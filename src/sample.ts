import 'dotenv/config';
import './exe.js';
import { foo } from './module.js';

const x = 'Hola';
console.log(x);
foo();
console.log(globalThis.crypto.randomUUID());
console.log(global.crypto.randomUUID());
console.log(crypto.randomUUID());
console.log(global);
console.log(process.argv);
console.log(process.pid);

const mode = process.env.NODE_ENV?.toLowerCase().trim();
console.log(`Modo: ${mode}`);
const connect = (db_Uri: string) => {
    console.log(`Conectando a la base de datos en ${db_Uri}`);
};

let db_Uri = '';
if (mode === 'dev') {
    console.log('Estamos en desarrollo');
    const port = process.env.DB_PORT_PROD;
    db_Uri = `http://producction.com:${port}`;
    console.log(process.env.DB_PORT);
    console.log(process.env.DB_PASSWORD);
} else {
    console.log('Estamos en producción');
    const port = process.env.DB_PORT_PROD;
    db_Uri = `http://producction.com:${port}`;
    console.log(process.env.DB_PORT_PROD);
    console.log(process.env.DB_PASSWORD_PROD);
}
connect(db_Uri);

console.log('Hello!');
process.stdout.write('Hello!\n');
console.error('Error!');
process.stderr.write('Error!\n');

process.stdout.write('Dinos tu nombre: ');
process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Hello, ${name}!\n`);
    process.exit(0);
});
