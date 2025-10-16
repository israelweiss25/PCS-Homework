'use strict';

// eslint-disable-next-line no-unused-vars
const createPerson = function () {
    let id = 0;

    return function create(first, last, gender, spouse) {
        id++;
        return {
            id,
            first,
            last,
            gender,
            spouse,
            print: function () { console.log(`Id: ${this.id} fisrt: ${first} last: ${last} gender: ${gender} `); }
        };
    };

}();

