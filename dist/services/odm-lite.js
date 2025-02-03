import { readFromDisk, writeToDisk } from './helpers';
export class ODMLite {
    file;
    constructor(file) {
        this.file = file;
    }
    async readDB() {
        const txtData = await readFromDisk(this.file);
        return JSON.parse(txtData);
    }
    writeDB(data) {
        return writeToDisk(this.file, JSON.stringify(data));
    }
    async read(collection) {
        const allData = await this.readDB();
        return allData[collection];
    }
    async readById(collection, id) {
        const allData = await this.readDB();
        const item = allData[collection].find((item) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }
    async create(collection, initialData) {
        const allData = await this.readDB();
        const itemData = {
            ...initialData,
            id: crypto.randomUUID().substring(0, 8),
        };
        allData[collection].push(itemData);
        await this.writeDB(allData);
        return itemData;
    }
    async updateById(collection, id, data) {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = await this.readDB();
        let item = allData[collection].find((item) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        await this.writeDB(allData);
        return item;
    }
    async deleteById(collection, id) {
        const allData = await this.readDB();
        const item = allData[collection].find((item) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        allData[collection] = allData[collection].filter((item) => item.id !== id);
        await this.writeDB(allData);
        return item;
    }
}
