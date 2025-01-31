import minimist from 'minimist';
const args = minimist(process.argv.slice(2), {
    // quitar los dos argumentos primeros
    boolean: ['help', 'version'],
    string: ['name'],
    alias: {
        h: 'help',
        v: 'version',
    },
});
if (args.help) {
    console.log('Usage: node cli.ts [OPTIONS] [COMMAND]');
    process.exit(0);
}
if (args.version) {
    console.log('Versión 1');
    process.exit(0);
}
else if (args._.includes('name')) {
    console.log('Hola');
    process.exit(0);
}
