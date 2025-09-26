// const counterCreater = (function () {

//     return function createCounter() {
//         function setNum(number) {
//             return num += number;
//         };

//         function getNum() {
//             return num;
//         };
//         let num = 0;
//         return {
//             setNum,
//             getNum

//         };
//     };
// })();
window.app = window.app || {};


window.app.createCounter = function () {
    let numOfCounter = 0;

    return function () {
        numOfCounter++;
        console.log(numOfCounter, 'cnt');

        function increment(number) {
            return num += number || 1;
        };

        function getCount() {
            return num;
        };
        let num = 0;
        return {
            increment,
            getCount

        };
    };
}();