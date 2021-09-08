/* eslint-disable */

const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      // alias: {
      //   '@libs/hello-lib': path.resolve(__dirname, '../../libs/hello-lib/src')
      // },
    },
  },
};
