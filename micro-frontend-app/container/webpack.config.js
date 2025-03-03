const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        productList: 'productList@http://localhost:3001/remoteEntry.js',
        cart: 'cart@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '19.0.0',
        },
        "react-dom": {
          singleton: true,
          eager: true, 
          requiredVersion: '19.0.0',
        },
        'react-toastify': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['react-toastify'],
        },
        'react-redux': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['react-redux'],
        },
        '@reduxjs/toolkit': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['@reduxjs/toolkit'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
};
