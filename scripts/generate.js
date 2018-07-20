require('colors');

const dummyjson = require('dummy-json');
const fs = require('fs');
const path = require('path');

const mockdata = require('../mockdata');
const { writeFile } = require('../utils');

function generate() {
  //params
  const {
    npm_config_path: dataPath = '',
    npm_config_output: outputPath = '',
    npm_config_ext: ext = 'js',
  } = process.env;

  console.log(`generating dummy ${ext} files from ${dataPath}... \n`.blue);

  //write dummy json
  fs.readdir(dataPath, (err, files) => {
    files.forEach((file, index) => {
      if (path.extname(file) !== '.hbs') return;

      console.log(`generating ${file} data...`.green);

      const fileName = file.split('.')[0];
      const result = generateData(`${dataPath}/${file}`, ext, fileName);

      const outputFile = `${fileName}.${ext}`;
      writeFile(outputPath, outputFile, result);
      console.log(`${outputPath}/${outputFile} generated suceessfully \n`.green);
    });

    console.log(`====== Task Completed ======`.bgGreen);
  });
}

function generateData(path, ext, fileName) {
  const template = fs.readFileSync(path, { encoding: 'utf8' });

  let result = `${dummyjson.parse(template, {
    helpers: mockdata
  })}`;
  if (ext === 'js') result = `export const ${fileName} = ${result}\n`;
  result = result.replace(/&#x3D;/g, '=');

  return result;
}

generate();