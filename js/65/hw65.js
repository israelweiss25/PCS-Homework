(function (){
'use strict';

function createBankAct(){
    let balance = 0;
    return {
        balance,
        history,
        performTransaction(type, amt){
            this.balance = (type === '+') ? this.balance + amt : this.balance - amt;
        }

    };
};

const joeBankAct = createBankAct();

joeBankAct.performTransaction('+', 100);
console.log(joeBankAct.balance);

joeBankAct.performTransaction('-', 25);
console.log(joeBankAct.balance);


const donBankAct = createBankAct();

donBankAct.performTransaction('+', 150);
console.log(donBankAct.balance);

donBankAct.performTransaction('-', 45);
console.log(donBankAct.balance);

/////////////////////


function createBankAct2(){
    let balance = 0;
    return {
        balance,
    };
};

function transaction(type, amt){
        this.balance = (type === '+') ? this.balance + amt : this.balance - amt;
    }
const marksAct = createBankAct2();

transaction.call(marksAct,'+', 250);
console.log(marksAct.balance);

transaction.apply(marksAct, ['-', 35]);
console.log(marksAct.balance);

const depositFiftyInSavings = transaction.bind(marksAct, '+', 50);
depositFiftyInSavings();
console.log(marksAct.balance);

})();