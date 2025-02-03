import fs from 'node:fs/promises';
export const readFromDisk = (file) => {
    return fs.readFile(file, 'utf-8');
};
export const writeToDisk = (file, data) => {
    return fs.writeFile(file, data);
};
