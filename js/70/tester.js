'use strict'; 
for (let i = 0; i < 10; i++){
    window.app.counter.increment();
};
console.log(window.app.counter.getCount());




const counter1 = window.app.createCounter();
console.log(counter1.increment(5));

const counter2 = window.app.createCounter();
console.log(counter2.increment(15));




console.log(window.app.counter.getCount(), counter1.getCount(), counter2.getCount());
