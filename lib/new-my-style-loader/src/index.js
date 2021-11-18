const loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable(false)
};

module.exports.pitch = function(remainingRequest) {
    // 在 pitch 阶段返回脚本
    const requestPath = loaderUtils.stringifyRequest(this, '!!' + remainingRequest);
    console.log(requestPath);

    return (`
      const content = require(${requestPath})
      const style = document.createElement('style');
      console.log(content);
      style.innerHTML = content.default;
      document.head.appendChild(style);
      `
    )
};