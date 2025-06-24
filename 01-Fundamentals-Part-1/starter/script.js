const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 1 - 5);

let x, y;
//The assignment operator also only works RIGHT-TO-LEFT.
x = y = 25 - 10 - 5; //x = y = 10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
