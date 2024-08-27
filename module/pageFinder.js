
const fs = require('fs');

const pageFinder = (path) => {
  try {
    return (fs.readFileSync(path, (err, data) => {
      if (err) {
        return undefined;
      }
      return data.toString();
    }))
  } catch (error) {
    return undefined;
  }
};

module.exports = pageFinder;