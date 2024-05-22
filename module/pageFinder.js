import fs from 'node:fs';

export const pageFinder = (path) => {
    return (fs.readFileSync(path, (err, data) => {
        if (err){
            return undefined;
        }
        return data.toString();
    }))
};
