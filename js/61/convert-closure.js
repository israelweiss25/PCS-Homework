'use strict';

const userInputNum = prompt ('Enter the number you want to convert');

let userInputType = prompt ('Enter F to convert to Fahreneit. Enter C to convert to Celsius ');


if (userInputType){
   userInputType = userInputType.toLowerCase();
}else{
    alert('Wrong input');
}

let convDeg = 0;

if (userInputType === 'f') {
    convDeg = (userInputNum * 9/5) + 32;
    alert(` ${userInputNum} degrees Celsius is ${convDeg} degrees Fahreneit`);
}else if (userInputType === 'c'){
    convDeg = (userInputNum - 32) * 5/9;
    alert(`${userInputNum} degrees Fahrenheit is ${convDeg} degrees Celsius`);
}else{
    alert('Wrong input');
}


//clousurs
function multiply(a,b) {
  return a * b;
}
console.log(multiply( 5, 10));
console.log(multiply( 2, 10));
console.log(multiply( 3, 10));


function getMultiplier(){
    return (x,y) => x * y;
}
const multiplier = getMultiplier();
console.log(multiplier(2, 4));
console.log(multiplier(6, 4));

function getMultiplier2(x){
    return (y) => x * y;
}

const multiplyBy5 = getMultiplier2(5);
console.log(multiplyBy5(2));

const multiplyBy6 = getMultiplier2(6);
console.log(multiplyBy6(2));