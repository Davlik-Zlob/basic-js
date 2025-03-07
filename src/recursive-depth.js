const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const currentDepth = this.calculateDepth(arr[i]) + 1;
        if (currentDepth > depth) {
          depth = currentDepth;
        }
      }
    }
    return depth;
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
