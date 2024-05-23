import fs from 'node:fs';

export const pageFinder = (path) => {
  try {
    return (fs.readFileSync(path, (err, data) => {
      if (err) {
        return undefined;
      }
      return data.toString();
    }))
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
