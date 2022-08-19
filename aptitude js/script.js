// 11. Program to calculate total and average

const arr = [10, 20, 30, 40, 50];
let sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);

// 12. Program for large number

function maxOfThree(x, y, z) 
 {
  maxVal = 0;
  if (x > y)
  {
    maxVal = x;
  } else
  {
    maxVal = y;
  }
  if (z > maxVal) 
  {
    maxVal = z;
  }
  return maxVal;
}

console.log(maxOfThree(1000,510,440));

// 13. Program to check number is positive or not

let number1 = prompt(" Q: Program to check number is positive or not \n Input: Enter the number", "");
number1 = parseInt(number1);

if(number1 < 0)
    console.log("\nYou entered Negative Number.");
else if(number1 > 0)
    console.log("\nYou entered Positive Number.");
else
    console.log("\nYou entered Zero.");


// 14. Program to check number is greater than 10

let number2 = prompt("Q: Program to check number is greater than 10.\n Input: Enter the number", "");
number2 = parseInt(number2);

if (number2 > 10) {
  console.log('\nGiven number is greater than 10.');
}

// 15. Even or Odd

const evenOdd = prompt(" Q: Even or Odd \n Input: Enter a number: ");

if(evenOdd% 2 == 0) {
    console.log("\nThe number is even.");
}
else {
    console.log("\nThe number is odd.");
}

// 16. Program to check whether number is divisible by 5

const divBy5 = prompt(" Q: Program to check whether number is divisible by 5 \n Input: Enter a number: ");

if (divBy5 % 2 === 0) {
  console.log("Even")
} else {
 console.log("Odd") 
}


// 17. Program to check whether number is multiple of 7

var multiOf7 = prompt(' Q: Program to check whether number is multiple of 7 \n Input: Enter the number')

if (multiOf7 % 3 == 0)
	console.log('Multiple of 7')
else 
  console.log('Not a multiple of 7')

// 18. Ascending and Decending order of 3 numbers

// let = ascDes;
// let ascDes = [5, 13, 1, 44, 32, 15, 500];

// let ascending = aseDes.sort((a, b) => a - b);
// let descending = aseDes.sort((a, b) => b - a);

// console.log(ascending);
// console.log(descending);

// 21. Program to find marriage eligibility

function validate(age) {
var ans="not eigible";
if(age>=18){
  ans="eligible";
}
console.log("You are "+ans+" for marriage");
}

var age = parseInt(prompt(" Q: Program to find marriage eligibility \n Input: Enter age"));
validate(age);




