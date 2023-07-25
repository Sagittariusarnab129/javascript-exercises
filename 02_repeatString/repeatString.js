const repeatString = function(word ,num) {
let sum = '';
if(num<0){
    return 'ERROR';
}else if(num === 0){
return '';
}else{
for(let i=1;i<=num;i++){
    sum += word;
}
}
return sum;
};

// Do not edit below this line
module.exports = repeatString;
