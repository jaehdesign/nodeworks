import { ODMLite } from '../odm/odm-lite.js';
import { Note } from '../types/types.js';
import { Repository, TypeODM } from '../types/types.js';

export class RepoNoteFile implements Repository<Note> {
    orm: TypeODM<Note>;
    collection: string;
    constructor(file = 'db.json', collection = 'notes') {
        this.orm = new ODMLite<Note>(file);
        this.collection = collection;
    }

    read() {
        return this.orm.read(this.collection);
    }
    readById(id: string) {
        return this.orm.readById(this.collection, id);
    }
    create(data: Omit<Note, 'id'>) {
        return this.orm.create(this.collection, data);
    }
    update(id: string, data: Partial<Omit<Note, 'id'>>) {
        return this.orm.updateById(this.collection, id, data);
    }
    delete(id: string) {
        return this.orm.deleteById(this.collection, id);
    }
}
