'use strict';
window.app = window.app || {};
window.app.counter = (function () {

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

})();
