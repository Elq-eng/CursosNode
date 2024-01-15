"use strict";
var _a;
const Heroes = [
    {
        id: 1,
        name: 'Ironman',
        owmer: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owmer: 'Marvel'
    }, {
        id: 3,
        name: 'Batman',
        owmer: 'DC'
    }
];
const findHeroById = (id) => {
    return Heroes.find((hero) => hero.id === id);
};
const hero = findHeroById(4);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Not hero found');
