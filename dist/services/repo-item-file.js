import { ODMLite } from './odm-lite';
import ;
export class RepoItemFile {
    orm;
    collection;
    constructor(file = 'db.json', collection = 'items') {
        this.orm = new ODMLite(file);
        this.collection = collection;
    }
    read() {
        return this.orm.read(this.collection);
    }
    readById(id) {
        return this.orm.readById(this.collection, id);
    }
    create(data) {
        return this.orm.create(this.collection, data);
    }
    update(id, data) {
        return this.orm.updateById(this.collection, id, data);
    }
    delete(id) {
        return this.orm.deleteById(this.collection, id);
    }
}
