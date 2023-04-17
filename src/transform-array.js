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
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let next = arr[i + 1];
    let prev = newArr[newArr.length - 1];
    if (cur === '--discard-next') {
      i++;
    } else if (cur === '--double-next') {
      if (next !== undefined) {
        newArr.push(next);
      }
    } else if (cur === '--discard-prev') {
      if (prev !== undefined && arr[i - 2] !== '--discard-next') {
        newArr.pop();
      }
    } else if (cur === '--double-prev') {
      if (prev !== undefined && arr[i - 2] !== '--discard-next') {
        newArr.push(prev);
      }
    } else {
      newArr.push(cur);
    }
  }
  return newArr;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
