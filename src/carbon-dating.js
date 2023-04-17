const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(x) {
  if(typeof x == 'string'){
      let num = Number(x);
    if(isNaN(num)){
      return false;
    } else if(0 < num <= 5730){
      return Math.round((Math.log(MODERN_ACTIVITY/num)/Math.log(2.71828))/(0.693/HALF_LIFE_PERIOD))
    } else{
      return false;
    }
  }else{
    return false;
  }
}

module.exports = {
  dateSample
};
