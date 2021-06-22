/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const watchFolders = [
  path.resolve(__dirname + '/../../..'), //Relative path to our node_modules monoreppo
];

module.exports = {
  watchFolders,
  transformer: {
    mOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
