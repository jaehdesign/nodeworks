import { program } from 'commander';

program.name('CLI').description(`CLI sample`).version('1.0.0');

program
    .command('all')
    .description('Mostrar todas las notas')
    .action(() => {
        console.log('Show all');
    });

program
    .command('find')
    .argument('<key>', 'texto para buscar nota')
    .description('Mostrar las notas encontradas')
    .action((key: string) => {
        console.log('Show notes with', key);
    });

program
    .command('add <note>')
    .description('')
    .action((note: string) => {
        console.log('Add note', note);
    });

// program.command('update <id> <note>');
program
    .command('update <note>')
    .option('-i --id -<id>')
    .action((note: string, { id }: { id: string }) => {
        console.log('Update note', note, 'with id', id);
    });

program.command('delete <id>');

program.parse();
