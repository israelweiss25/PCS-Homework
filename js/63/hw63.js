'use strict';
const allUpper = ['A','B', 'A'];
const someUpper = ['a','B', 'c'];
const allLwr = ['a','b', 'c'];

function everyFilter(array , testCallback) {
    for(let i = 0; i < array.length; i++){
        if(!testCallback(array[i])){
           return false; 
        }
    }
    return true;
}

function testAllUpper(x){
    if (x === x.toLowerCase()){
        return false;
    }
    return true;
}

function testAllLower(x){
    return !(x === x.toUpperCase());
}
console.log(everyFilter(allUpper, testAllUpper));
console.log(everyFilter(someUpper, testAllUpper));

console.log(everyFilter(allLwr, testAllLower));
console.log(everyFilter(allLwr, x => !(x === x.toUpperCase())));

console.log(allLwr.every(testAllLower));
console.log(someUpper.every(testAllLower));


function someFilter (array, callBack){
    for(let i = 0; i < array.length; i++){
        if ((callBack(array[i]))){
            return true;
        }
    }
    return false;
}

function testSomeUpper(x){
    return x === x.toUpperCase();
   
}

console.log(someFilter(someUpper, testSomeUpper));
console.log(someFilter(someUpper, x => x === x.toUpperCase()));
console.log(someUpper.some(testSomeUpper));

const numbers = [10, 45, 30, 28, 42, 15];
function onlyIf (array, tstCallback, actnCallback) {
    for (let i = 0; i < array.length; i++){
        if (tstCallback(array[i])){
              actnCallback(array[i]);
        }else{
            console.log(array[i]);
        }
    }
}

function test(x){
    return x > 40;
}


const  message = x => console.log(x + ' is above this age group');

onlyIf(numbers, test, message);

numbers.filter(test).forEach(message);
