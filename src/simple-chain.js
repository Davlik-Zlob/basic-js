const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if (!(arguments.length === 0)) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if (typeof position !== 'number' ||
        position <= 0 ||
        position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
