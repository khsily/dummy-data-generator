const fs = require('fs');

function writeFile(path, file, data) {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
  fs.writeFileSync(`${path}/${file}`, data, 'utf8');
}

module.exports = {
  writeFile,
}