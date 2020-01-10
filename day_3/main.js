// Question 1
// a.
const firstName = 'John',
    lastName = 'Doe',
    country = 'Mars',
    city = 'Mars Island',
    age = 40,
    isMarried = true,
    year = 2020;

// b.
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// Question 2
let operandOne = 4;
let operandTwo = 3;

const sum = operandOne + operandTwo;
const diff = operandOne - operandTwo;
const multiply = operandOne * operandTwo;
const div = operandOne / operandTwo;
const remainder = operandOne % operandTwo;
const powerOf = operandOne ** operandTwo;
console.log(
    'sum: ',
    sum,
    'diff: ',
    diff,
    'multiply: ',
    multiply,
    'div: ',
    div,
    'remainder: ',
    remainder,
    'powerOf: ',
    powerOf
);

// pre and post increment
console.log(operandOne++);
console.log(operandOne);
console.log(++operandOne);

// pre and post decrement
console.log(operandTwo--);
console.log(operandTwo);
console.log(--operandTwo);

// Question 3
// truthy values
console.log(operandOne > operandTwo);
console.log(5 > 4);
const obj = { a: 1, b: 2 };
const b = obj;
console.log(obj === b);

// falsy values
console.log(operandOne === operandTwo);
console.log([2, 4, 6] === [2, 4, 6]);
console.log({ a: 1, b: 2 } === { a: 1, b: 2 });

// Question 4
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// Question 5
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// Question 6
// a.
const myName = 'Sulaymon';
console.log(myName.length > 7 ? 'Long' : 'Short');

// b.
const firstName2 = 'Sulaymon';
const lastName2 = 'Tajudeen';

firstName2.length > lastName2.length
    ? console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}
`)
    : console.log(`Your last name, ${lastName2} is longer than your family name, ${firstName2}`);

// c.
const myAge = 250;
const yourAge = 25;
console.log(`I am ${myAge - yourAge} older than you.`);

// d.
const ageYear = window.prompt('What year where you born?');
2020 - ageYear >= 18
    ? console.log(`You are ${2020 - ageYear}. You are old enough to drive`)
    : console.log(`You are ${2020 - ageYear}. You will be allowed to drive after ${18 - (2020 - ageYear)} years.`);

// Question 7
const date = new Date();
// 1.
const year2 = date.getFullYear();
// 2.
const month = date.getMonth();
// 3.
const dateToday = date.getDate();
// 4.
const dayToday = date.getDay();
// 5.
const hour = date.getHours();
// 6.
const minute = date.getMinutes();
// 7.
const now = date.getTime();
const now2 = Date.now();
// 8.
const seconds = date.getSeconds();
// i.
const dateFormat1 = `${year2}-${month + 1}-${dayToday} ${hour}:${minute}:${seconds}`;
// ii.
const dateFormat2 = `${dayToday}-${month + 1}-${year2} ${hour}:${minute}:${seconds}`;
// iii
const dateFormat3 = `${dayToday}/${month + 1}/${year2} ${hour}:${minute}:${seconds}`;

console.log(year2, month, dateToday, dayToday, hour, minute, seconds, now, now2);

console.log(dateFormat1);
console.log(dateFormat2);
console.log(dateFormat3);
