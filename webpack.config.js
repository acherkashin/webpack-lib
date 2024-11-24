const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/lib.js',
  output: {
    filename: "[name].[contenthash:8].js",
    library: {
        name: 'MyLibrary',
        type: 'umd'
    },
    clean: true
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
    })
  ]
};