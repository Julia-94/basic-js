const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  
  if(Array.isArray(array) == true){
    let nameDream = [];
    array.forEach(element => {
      if((typeof element == 'string')){
        let newArray = element.split('');
        let elm= newArray.find(function findElement(el){
          return(el !== ' ');
        } );
        nameDream.push(elm.toUpperCase());
      }
    });
    return nameDream.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
