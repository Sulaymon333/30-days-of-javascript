// Question 1
const age = prompt('Enter your age: ');
if (age >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`You are left with ${18 - age} years to drive`);
}

// Question 2
const yourAge = prompt('Enter your age: ');
const myAge = 30;
if (myAge < yourAge) {
    console.log(`You are ${yourAge - myAge} years older than me`);
} else {
    console.log('I am older than you.');
}

// Question 3
let a = 4;
let b = 3;

// method 1 - if/else
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('b is greater than a');
}

// method 2 - ternary
a > b ? console.log('a is greater than b') : console.log('b is greater than a');

// Question 4
let score = 99;
let grade;
switch (true) {
    case score >= 90 && score <= 100:
        grade = 'A';
        break;
    case score >= 79 && score <= 89:
        grade = 'B';
        break;
    case score >= 70 && score <= 79:
        grade = 'C';
        break;
    case score >= 60 && score <= 69:
        grade = 'D';
        break;
    case score >= 50 && score <= 59:
        grade = 'E';
        break;
    case score >= 0 && score <= 49:
        grade = 'F';
        break;
    default:
        grade = `The grade must be '0' min and '100' max`;
}
console.log(grade);

// Question 5
const month = prompt('What is the month right now: ');
const monthLower = month && month.toLowerCase();
let season;
switch (monthLower) {
    case 'december':
    case 'january':
    case 'february':
        season = 'Winter';
        break;
    case 'september':
    case 'october':
    case 'november':
        season = 'Autumn';
        break;
    case 'march':
    case 'april':
    case 'may':
        season = 'Spring';
        break;
    case 'june':
    case 'july':
    case 'August':
        season = 'Summer';
        break;
    default:
        season = 'Please input a valid month';
}
console.log(season);

// Question 6
const number = prompt('Enter a number: ');
let result;

if (typeof number === 'string') {
    result = 'Please provide a number';
} else if (number % 2 === 0) {
    result = `${number} is an even number`;
} else if (number % 2 !== 0) {
    result = `${number} is an odd number`;
}
console.log(result);

// Question 7
// 1.
const day = prompt('What is the day: ');
let dayType;
switch (day && day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        dayType = 'Work day';
        break;
    case 'saturday':
    case 'sunday':
        dayType = 'Weekend';
        break;
    default:
        dayType = 'Enter a valid day';
}
console.log(dayType);

// 2.
const monthName = prompt('What is the month: ');
const monthNameCapitalize = monthName && monthName[0].toUpperCase() + monthName.slice(1).toLowerCase();
const year = new Date().getFullYear();
let output;

switch (monthName && monthName.toLowerCase()) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        output = `${monthNameCapitalize} has 31 days`;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        output = `${monthNameCapitalize} has 30 days`;
        break;
    case 'february':
        output =
            (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
                ? `${monthNameCapitalize} has 29 days`
                : `${monthNameCapitalize} has 28 days`;
        break;
    default:
        output = 'Please input a valid month';
}
console.log(output);
