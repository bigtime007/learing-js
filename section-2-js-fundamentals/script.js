/*
// let js = 'mainframe'
// if (js === 'mainframe') alert("mainframe activation online");
// console.log(40 + 8 + 23 -10);


console.log("Jonas");
console.log(23);


// let firstName = "Jonas";

// console.log(firstName);
// console.log(firstName);

// let 3years = 3; // Syntax error bad naming

let jonas_matilda = "JM";

// let function = 23; // illegal name

//  let Person = 'hello'; // convention issue

let PI = 3.1415 // sets as a constant when upper case.

let myFirstJob = "programmer";
let myCurrentJob = "Teacher"

let job1 = 'programmer'; // bad var naming
let job2 = "teacher"; // bad var naming

console.log(myFirstJob)

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log("Type: " + typeof javaScriptIsFun);
console.log("Type: " + typeof 23)

// reasign value
javaScriptIsFun = "YES!"

console.log("Type: " + typeof javaScriptIsFun);

// legal to define var without value.
let year;
console.log(year);
console.log("Type: " + typeof year);

year = 1991;
console.log("Type: " + typeof year);
console.log(year);
console.log("Type BUG: " + typeof null); // bug in js is viewed as a object??? 

// 13. let, var, const //

let age = 30;
age = 31; // reassign var

const birthYear = 1991;
// birthYear = 1990; // not legal

// const  job; // requires initial value

var jobVar = 'programmer';
jobVar = 'teacher';

const job = 'programmer';

// lastName = "Schmedtmann";
// console.log(lastName);


// 14. Basic Operators//
let now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

// 2**3 means 2 to the power of 3 = 2*2*2*2
console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);


let x = 10 + 5;

x += 10; // x = x + 10

console.log(x);

x -=10;

console.log(x); // bring back to normal value

x *=4;

console.log(x) // normal value times 4

x ++;

console.log(x) // plus one

x--;

console.log(x) // subtract 1

x--;

console.log(x)

console.log(ageJonas > ageSarah); // >, <, >=, <=

console.log(ageSarah >= 18);


const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 15. Operator Precedence 

console.log(25-10-5);

let x2, y;

x2 = y = 25 - 10 - 5;

console.log(x2, y);

const averageAge = (ageJonas + ageSarah) /2 ;

console.log(ageJonas, ageSarah, averageAge);


//  16. Coding Challenge 1 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// 17. Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " yrs old Teacher.";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;

console.log(jonasNew);

console.log(`Just a reg string...`)


console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`)



const age = 16;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license")
}

if (age >= 18) {
    console.log("Sarah can start driving license") // this another way of doing this.
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}


const birthYear = 1990;

if (birthYear <= 2000) {
    let century = 20;
    console.log(century);
} else {
    let century = 21;
    console.log(century);
}




//  Coding Challenge 2 Revised from challenge 1 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's!`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's!`)
}


const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof(NaN));

console.log(String(23), 23)

console.log(`I am ` + 23 + ` years old`)

console.log(`23` - `10` + 3);

console.log(`23` / `2`);

let n = `1` + 1;

n = n - 1;

console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kevin'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if(money) {
    console.log("Don't Spend it all ;");
} else {
    console.log("You should get a job!")
}

let height = 5;

if (height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is Undefined")
}
*/