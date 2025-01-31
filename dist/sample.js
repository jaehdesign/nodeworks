import { foo } from './module.js';
import 'dotenv/config';
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
const connect = (db_Uri) => {
    console.log(`Conectando a la base de datos en ${db_Uri}`);
};
let db_Uri = '';
if (mode === 'dev') {
    console.log('Estamos en desarrollo');
    const port = process.env.DB_PORT;
    db_Uri = `http://producction.com:${port}`;
    console.log(process.env.DB_PORT);
    console.log(process.env.DB_PASSWORD);
}
else {
    console.log('Estamos en producción');
    const port = process.env.DB_PORT_PROD;
    db_Uri = `http://producction.com:${port}`;
    console.log(process.env.DB_PORT_PROD);
    console.log(process.env.DB_PASSWORD_PROD);
}
connect(db_Uri);
console.log('Hello'); //Hello;
process.stdout.write('Hello\n'); //Hello;
console.error('Error'); //Error;
process.stderr.write('Error\n'); //Error;
