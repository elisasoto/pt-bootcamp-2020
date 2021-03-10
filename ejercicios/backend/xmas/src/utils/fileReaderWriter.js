const fs = require('fs');
const path = require('path');

const readFile = (relPath) => (dirname) => {
  const filePath = path.join(dirname, relPath);
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeFile = (relPath, payload) => (dirname) => {
  const filePath = path.join(dirname, relPath);
  const data = fs.writeFileSync(filePath, JSON.stringify(payload));
  return data
};

module.exports = {
  readFile,
  writeFile
};
