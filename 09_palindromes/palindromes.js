const palindromes = function (dog) {
  let god = dog.split("").reverse().join("");
  if(god === dog){
    return true;
  }
  else{
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
