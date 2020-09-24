const fs = require('fs');
const path = require('path');

const excludes = [
  'index.js',
  'theme-chalk',
  'mixins',
  'fonts',
];

module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
};
