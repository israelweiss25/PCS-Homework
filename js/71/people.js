(function () {
    /* global createPerson */
    'use strict';
    const maleNames = ['Donald', 'Joe', 'josh', 'Dan', 'Mike', 'Moshe', 'Robert', 'Dave'];
    const femaleNames = ['Hillary', 'Rachel', 'Elizabeth', 'Sara', 'Rebbeca', 'Emma', 'Isabella'];
    const lastNames = ['Schwatrtz', 'Trump', 'Kirk', 'Stein', 'Green', 'Weiss',];


    const males = [];
    const females = [];

    function getRandNum(max) {
        return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < 40; i++) {
        if (i < 20) {
            const person = createPerson(maleNames[getRandNum(maleNames.length)], lastNames[getRandNum(lastNames.length)], 'm');
            males.push(person);
        } else {
            const person = createPerson(femaleNames[getRandNum(femaleNames.length)], lastNames[getRandNum(lastNames.length)], 'f');
            females.push(person);
        }

    };


    for (let i = 0; i < males.length; i++) {
        let num = 0;
        while (true) {
            num = getRandNum(females.length);
            if (!females[num].spouse) {
                males[i].spouse = females[num];
                females[num].spouse = males[i];
                break;
            }
        };
    };


    males.forEach(m => console.log(`Id: ${m.id} fisrt: ${m.first} last: ${m.last} gender ${m.gender} spouse: ${m.spouse.first} ${m.spouse.last} - ${m.spouse.id} `));
    females.forEach(f => console.log(`Id: ${f.id} fisrt: ${f.first} last: ${f.last} gender ${f.gender} spouse: ${f.spouse.first} ${f.spouse.last} - ${f.spouse.id} `));



})();