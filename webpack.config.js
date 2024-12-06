const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    'lib': './src/library.tsx'
  },
  output: {
    filename: '[name].[contenthash:8].js',
    library: {
      name: 'myLib',
      type: 'umd',
    },
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    }
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      scriptLoading: 'blocking', // we don't need to add "defer="defer"" to scripts in index.html
    })
  ],
};
