(function(){
    'use strict';

    Array.prototype.myMap =  function (callback){
        const array = this;
        const newArr = [];
        for(let i = 0; i < array.length; i++){
            newArr.push(callback(array[i]));
        };
        return newArr;
    };
    const array = [1,2,3,4,5,6];
    const newArray = array.myMap(x => x * 2);
    const newArray2 = array.myMap(x => x * 3);

    console.log(array, newArray, newArray2);

   
})();