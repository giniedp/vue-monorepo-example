// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
