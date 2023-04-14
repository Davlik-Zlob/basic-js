const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  let digits = n.toString().split('');
  let sum = 0;
  if (digits.length > 1) {
    digits.forEach(digit => {
      sum += +digit;
    });
    if (sum.toString().split('').length > 1) {
      return getSumOfDigits(sum);
    }
  } else {
    return n;
  }
  return sum;
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
