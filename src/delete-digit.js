const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  const arr = String(n).split('').map(Number);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const copyArr = [...arr];
    copyArr.splice(i, 1);
    result.push(Number(copyArr.join('')))
  }
  return Math.max(...result);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
