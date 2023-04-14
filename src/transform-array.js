const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // if (!Array.isArray(arr)) {
  //   throw new Error('\'arr\' parameter must be an instance of the Array!');
  // }
  // let copyArr = [...arr];
  // for (let i = 0; i < copyArr.length; i++) {
  //   if (copyArr[i] === '--double-next' && copyArr[i+1] !== undefined) {
  //     copyArr[i] = copyArr[i+1];
  //   } else if (copyArr[i] === '--double-prev' && copyArr[i-1] !== undefined) {
  //     copyArr[i] = copyArr[i-1];
  //   } else if (copyArr[i] === '--discard-next' && copyArr[i+1] !== undefined) {
  //     copyArr[i+1] = undefined;
  //   } else if (copyArr[i] === '--discard-prev' && copyArr[i-1] !== undefined) {
  //     copyArr[i-1] = undefined;
  //   }
  // }
  // let result = [];
  // copyArr.forEach(el => {
  //   if (typeof el === 'number') {
  //     result.push(el);
  //   }
  // })
  // return result;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
