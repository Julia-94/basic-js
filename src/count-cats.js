const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(array) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let countCats = 0;

  array.forEach(element => {
    for(let i=0; i < element.length; i++){
      if(element[i] === '^^'){
        countCats += 1;
      }
    }
  });
  return countCats;
}

module.exports = {
  countCats
};
