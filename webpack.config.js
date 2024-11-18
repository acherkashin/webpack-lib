const path = require('path');

module.exports = {
  entry: './src/lib.js',
  output: {
    library: {
        name: 'myLibrary',
        type: 'umd'
    }
  }
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
};