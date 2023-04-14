const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  const nameCounts = {};
  const result = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let newName = name;
    if (nameCounts[name]) {
      newName = `${name}(${nameCounts[name]})`;
    }
    result.push(newName);
    nameCounts[newName] = (nameCounts[newName] || 0) + 1;
    if (newName !== name) {
      nameCounts[name] = (nameCounts[name] || 1) + 1;
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
