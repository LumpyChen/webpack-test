/**
 * See the webpack docs for more information about loaders:
 * https://webpack.js.org/contribute/writing-a-loader
 */

const loaderUtils = require('loader-utils');

module.exports = function loader(source) {
	const { loaders, resource, request, version, webpack } = this;
	console.log('\nusing my-loader!');
  this.cacheable();
  console.log(loaderUtils.stringifyRequest(this, "C:\\module\\test.js"));
	const newSource = `
	/**
	 * my-loader
	 *
	 * Resource Location: ${resource}
	 * Loaders chained to module: ${JSON.stringify(loaders)}
	 * Loader API Version: ${version}
	 * Is this in "webpack mode": ${webpack}
	 * This is the users request for the module: ${request}
	 */
	/**
	 * Original Source From Loader
	 */
	${source}`;

	return newSource;
}


// b-loader.js
// module.exports = function (content) {
//   return someSyncOperation(content);
// };

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  console.log('\npitch')
  console.log(remainingRequest, precedingRequest, data);
  return (
    'module.exports = require(' +
    JSON.stringify('-!' + remainingRequest) +
    ');'
  );
  
};


// |- a-loader `pitch`
//   |- b-loader `pitch` returns a module
// |- a-loader normal execution
