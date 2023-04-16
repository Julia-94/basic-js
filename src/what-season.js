const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

let season = {
  0:'winter',
  1:'winter',
  2:'spring',
  3:'spring',
  4:'spring',
  5:'summer',
  6:'summer',
  7:'summer',
  8:'autumn',
  9:'autumn',
  10:'autumn',
  11:'winter',
}

let spring = {
  0:'spring ',
};
let summer = {
  0:'summer',
};
let autumn = {
  0:'autumn',
};
let winter = {
  0:'winter',
};

function getSeason(date) {
  if(date == undefined){
    return 'Unable to determine the time of year!';
  } else if(typeof date !== 'object'){
    return 'Invalid date!';
  }else if(typeof date == 'undefined'){
    return 'Invalid date!';
  } else if(date == winter || date == autumn|| date == summer || date == spring){
    return date[0];
  }else {
    let numberMonth = date.getMonth();
    return season[numberMonth];
  }
}

module.exports = {
  getSeason
};
