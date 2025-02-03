import { join, resolve } from 'node:path';
import { program } from 'commander';
import { RepoNoteFile } from './services/repo-notes-file';
const dataBase = resolve('../dataBase');
const file = join(dataBase, 'db.json');
const repo = new RepoNoteFile(file);
program.name('CLI').description(`CLI sample`).version('1.0.0');
const readAll = async () => {
    const data = await repo.read();
    console.table(data);
};
program.command('all').description('Mostrar todas las notas').action(readAll);
// .action(() => {
//     repo.read().then((data) => {
//         console.table(data);
//     });
//     console.log('Show all');
// });
program
    .command('find')
    .argument('<key>', 'texto para buscar nota')
    .description('Mostrar las notas encontradas')
    .action((key) => {
    console.log('Show notes with', key);
});
program
    .command('add <note>')
    .description('')
    .action((note) => {
    console.log('Add note', note);
});
// program.command('update <id> <note>');
program
    .command('update <note>')
    .option('-i --id -<id>')
    .action((note, { id }) => {
    console.log('Update note', note, 'with id', id);
});
program.command('delete <id>');
program.parse();
