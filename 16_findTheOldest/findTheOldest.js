const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

// find out age of each person
// sort them
// return oldest

const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();
    return arr.sort((a, b) => ((a.yearOfDeath || currentYear) - a.yearOfBirth) - ((b.yearOfDeath || currentYear) - b.yearOfBirth)).at(-1);
};

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
