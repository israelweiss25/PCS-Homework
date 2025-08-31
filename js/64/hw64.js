'use strict';

const dayOfWeekUtills = (function() {
    const days = ['Sunday',  'Monday', 'Tueasday', 'Wednesday', 'Thursday', 'Friday', 'Saterday'];
    return {
        getDayName(index){
            return days[index - 1];
        },
        getNumOfDay(dayName){
            return days.findIndex(d => d === dayName) + 1;
        }
    };
}());

console.log(dayOfWeekUtills.getDayName(3));
console.log(dayOfWeekUtills.getNumOfDay('Wednesday'));

////////////////////////////

const interestCalculator = ( function(){
    let rate = 0;
    let years = 0;
    let totalInterest = 0
    return{
        setRate(num){
            return rate = num;
        },
        setYears(y){
            return years = y;
        },        calculateInterest(principal, rate, years){
            return totalInterest = principal * (rate/100) * years; 
        }
    };
}());

let rate = interestCalculator.setRate(5.5);
let years = interestCalculator.setYears(6);
console.log(interestCalculator.calculateInterest(20000, rate, years));
console.log(interestCalculator.calculateInterest(25000, interestCalculator.setRate(6.8), interestCalculator.setYears(6)));