const sumAll = function (init, final) {
  let sum = 0;
  if (init <= 0 || final <= 0) {
    return "ERROR";
  } else if (init > final) {
    for (let i = final; i <= init; i++) {
      sum += i;
    }
  } else if(typeof(init)!== 'number' || typeof(final)!== 'number'){
    return 'ERROR';
  } else {
    for (let i = init; i <= final; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
