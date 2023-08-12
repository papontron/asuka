// The base directory that we want to use
const path = require('path');
const myPath = path.resolve(__dirname, 'dist', 'public', 'js');
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: myPath + '/index.js',
  output: {
    path: myPath,
    filename: 'bundle.js'
  }
};
