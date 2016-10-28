var loaderUtils = require("loader-utils");

function returnEmptyString() {
  if (this.cacheable) {
    this.cacheable();
  }
  return 'module.exports = "";';
}

/**
 * @see https://webpack.github.io/docs/loaders.html
 */
module.exports = returnEmptyString;

/**
 * @see https://webpack.github.io/docs/loaders.html#pitching-loader
 */
module.exports.pitch = returnEmptyString;
