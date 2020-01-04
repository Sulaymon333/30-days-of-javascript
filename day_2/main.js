// Question 1
const challenge = '30 Days Of JavaScript';

// Question 2
console.log(challenge);

// Question 3
console.log(challenge.length);

// Question 4
console.log(challenge.toUpperCase());

// Question 5
console.log(challenge.toLowerCase());

// Question 6
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0, 2));

// Question 7
console.log(challenge.substring(3));

// Question 8
const text = 'You cannot end a sentence with because because because is a conjunction';
const start = text.indexOf('because');
const end = text.lastIndexOf('because') + 'because'.length;
console.log(text.substr(start, 'because '.length * 3));
console.log(text.substring(start, end));

// Question 9
console.log(challenge.includes('Script'));

// Question 10
console.log(challenge.split());

// Question 11
console.log(challenge.split(' '));

// Question 12
companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// Question 13
console.log(challenge.replace('JavaScript', 'Python'));

// Question 14
console.log(challenge.charAt(15));

// Question 15
const jIndex = challenge.indexOf('J');
console.log(challenge.charCodeAt(jIndex));

// Question 16
console.log(challenge.indexOf('a'));

// Question 17
console.log(challenge.lastIndexOf('a'));

// Question 18
console.log(text.indexOf('because'));

// Question 19
console.log(text.lastIndexOf('because'));

// Question 20
console.log(text.search(/because/i)); // using regex
console.log(text.search('because'));

// Question 21
const challenge_space = ' 30 Days Of JavaScript   ';
console.log(challenge_space.trim());

// Question 22
console.log(challenge.startsWith('30'));

// Question 23
console.log(challenge.endsWith('JavaScript'));

// Question 24
const pattern = /a/g;
console.log(challenge.match(pattern));

// Question 25
const pattern2 = /because/g;
console.log(text.match(pattern2).length);

// Question 26
console.log('30 Days of'.concat('JavaScript'));

// Question 27
console.log(challenge.repeat(2));

// Question 28
const txt = 'Love is the best thing in this world. Some found their love and some are still looking for their love';
const pattern3 = /love/gi;
console.log(txt.match(pattern3).length);

// Question 29
const salaryInfo =
    'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';

const pattern4 = /\d+/g;
const numbersString = salaryInfo.match(pattern4);

// Solution 1
for (let num of numbersString) {
    numbersString[numbersString.indexOf(num)] = parseInt(num);
}
console.log(numbersString);
const annualIncome1 = numbersString[0] * 12 + numbersString[1] + numbersString[2] * 12;
console.log(annualIncome1);

// Solution 2
const numbersNum = numbersString.map(num => Number(num));
console.log(numbersNum);
const annualIncome2 = numbersNum.reduce((acc, current) => {
    if (current === 5000 || current === 15000) {
        current = current * 12;
    }
    return acc + current;
}, 0);
console.log(annualIncome2);

// Question 30
const cleanPattern = /[^a-zA-Z ]/gi;

const sentence =
    '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?';

const cleanedSentence = sentence.replace(cleanPattern, '');

console.log(cleanedSentence);

const cleanedSentenceArray = cleanedSentence.split(' ');
console.log(cleanedSentenceArray);

const mode = myArray =>
    myArray.reduce(
        (a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
        null
    );
console.log(mode(cleanedSentenceArray));

// Question 31
console.log(`There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.
`);

// Question 32
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`);
