import { foo } from './module';
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
    db_Uri = 'http://localhost:27017';
}
else {
    console.log('Estamos en producción');
    db_Uri = 'http://producction.com:27017';
}
connect(db_Uri);
