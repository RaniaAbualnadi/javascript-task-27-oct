/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
" X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobTitle, geoLocation, partnerName, noOfChildren) {
  let fullValue = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${noOfChildren} kids.`;
  document.getElementById("q1Result").innerHTML = fullValue;
}
tellFortune("software engineer", "Jordan", "Alice", 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(puppyAge) {
  let dogAge = puppyAge * 7;
  let result = `Your doggie is ${dogAge} years old in dog years!`;
  document.getElementById("q2Result").innerHTML = result;
}
calculateDogAge(2);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  let calculatedAmount = 365 * amountPerDay * (maxAge - age);
  let result = `You will need ${calculatedAmount} to last you until the ripe old age of ${maxAge}`;
  document.getElementById("q3Result").innerHTML = result;
}
calculateSupply(30, 3);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  return `Hello ${name}`;
}
document.getElementById("q4Result").innerHTML = greet("rania");
/*
5
what is the error:
function double(cat) {
  return 2 * x;   //// x is not defined 
}

function double(7) { //// 7 is a value not arguments 
  return 2 * 7;
}

function double('7') { //// arguments cannot be string
  return 2 * 'x';  //// we cannot multiply string 
}
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(number) {
  let calculatedValue = Math.pow(number, 3);
  document.getElementById("q7Result").innerHTML = calculatedValue;
}
cube(4);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(number1, number2) {
  return number1 * number2;
}
document.getElementById("q8Result").innerHTML = multiply(3, 4);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can";
  } else {
    let numberOfYears = 20 - age;

    return `please come back after ${numberOfYears} years to get one`;
  }
}

document.getElementById("q9Result").innerHTML = canIGetADrivingLicense(17);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
  return str1.length == str2.length;
}
// document.getElementById("q10Result").innerHTML = sameLength("tree", "clue");
document.getElementById("q10Result").innerHTML = sameLength("tree", "car");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
document.getElementById("q11Result").innerHTML = largerNumber(5, 3);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else {
    return num3;
  }
}

document.getElementById("q12Result").innerHTML = smallerNubmer(5, 99, 34);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
  let shorterString = str1;
  const strArray = [str1, str2, str3, str4, str5];
  strArray.forEach((element) => {
    if (element.length < shorterString.length) {
      shorterString = element;
    }
  });
  return shorterString;
}
document.getElementById("q13Result").innerHTML = shorterString(
  "air",
  "school",
  "car",
  "by",
  "github"
);

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4) {
  let longest = str1;
  const strArray = [str1, str2, str3, str4];
  strArray.forEach((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });
  return longest;
}

document.getElementById("q14Result").innerHTML = longerString(
  "air",
  "school",
  "car",
  "github"
);
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

document.getElementById("q15Result").innerHTML = isEven(3);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

document.getElementById("q16Result").innerHTML = isOdd(3);
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number) {
  return Math.abs(number);
}
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
fullName("Rania", "Abualnadi");
function fullName(firstname, lastname) {
  let fullNames = `your full name is ${firstname} ${lastname}`;
  console.log(fullNames);
  document.getElementById("q18Result").innerHTML = fullNames;
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
let numbers = average(5, 7, 9, 3, 5);
function average(number1, number2, number3, number4, number5) {
  let sumnumbers = number1 + number2 + number3 + number4 + number5;
  let avg = sumnumbers / 5;
  console.log(avg);
  document.getElementById("q19Result").innerHTML = avg;
}
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
getRandom();
function getRandom() {
  document.getElementById("q20Result").innerHTML = Math.random();
}
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
let random = randomBetweenNumbers(3, 100);
document.getElementById("q21Result").innerHTML = random;

function randomBetweenNumbers(number1, number2) {
  let result = Math.floor(Math.random() * (number2 - number1 + 1) + number1);
  return result;
}
console.log(random);
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
let score = scoreInUniversty(90);
console.log(score);
document.getElementById("lenght").innerHTML = score;

function scoreInUniversty(score) {
  let alfaScore = "";

  if (score >= 95) {
    alfaScore = "A";
  } else if (score >= 85 && score < 95) {
    alfaScore = "B";
  } else if (score >= 70 && score < 85) {
    alfaScore = "C";
  } else if (score >= 50 && score < 70) {
    alfaScore = "D";
  } else {
    alfaScore = "F";
  }

  return alfaScore;
}
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let currentCounter = 0;
function counter() {
  return currentCounter++;
}
console.log(counter);
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter() {
  let preCounter = --currentCounter;
  currentCounter = 0;
  return `${preCounter} and the counter reset now`;
}
