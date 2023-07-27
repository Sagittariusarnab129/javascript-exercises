const add = function(one, two) {
	return one+two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(items) {
  let sum = 0;
  for(let i of items){
      sum += i;
  }
  return sum;
};

const multiply = function(items) {
  let product = 1;
  for(let i of items){
      product *= i;
  }
  return product;
};

const power = function(one, two) {
	return Math.pow(one, two);
};

const factorial = function(bound) {
	let fact = 1;
  for(let i=1;i<=bound;i++){
    fact*=i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
