require('colors');

const fs = require('fs');
const path = require('path');
const concat = require('concat-files');
const { writeFile } = require('../utils');

function concatFiles() {
  //params
  const {
    npm_config_path: pathParam = '',
    npm_config_output: outputParam = '',
    npm_config_filename: filename = '',
    npm_config_ext: ext = 'js',
  } = process.env;

  console.log(`concat files from ${pathParam}... \n`.blue);
  fs.readdir(pathParam, (err, files) => {
    if (!files || files.length === 0) {
      console.log('no files found'.red);
      return;
    }
    
    const filteredFiles = files.filter((file) => path.extname(file) === `.${ext}`);
    const withPath = filteredFiles.map((file) => `${pathParam}/${file}`);
    const outputPath = `${outputParam}/${filename}`;

    writeFile(outputParam, filename, '');
    concat(withPath, outputPath, (err) => {
      if (err) throw err;
      console.log(`${outputPath} generated successfully`.green);
      console.log(`====== Task Completed ======`.bgGreen);
    });
  });
}

concatFiles();