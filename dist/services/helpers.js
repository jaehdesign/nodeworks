export const readFromDisk = async (file) => {
    return 'readFromDisk: ' + file;
};
export const writeToDisk = async (file, data) => {
    console.log(data, file);
};
