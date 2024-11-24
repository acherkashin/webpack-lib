const path = require('path');

module.exports = {
  entry: './src/lib.js',
  output: {
    library: {
        name: 'MyLibrary',
        type: 'umd'
    },
    clean: true
  },
};