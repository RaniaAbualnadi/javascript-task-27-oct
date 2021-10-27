console.log("Here is : ", "array");

1;
// Correct the syntax error
//  [ 1,7, 9,45 ]

//  ["Str", "alex","moh"]

//  ["the","fox" ,"over" ,"lazy","dog"]

2;
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]
// console.log(fruits.indexOf("Banana"))
// console.log(fruits.indexOf("Tomato"))

// 3
// Create an array represents your:
// 1- Favorite Food (5)
// 2- Favorite Sport (3)
// 3- Favorite Movie (4)

// let hobbies = [
//     {favoriteFood:["pizza","shawerma","meat","rice","orange"],
// favoriteSport: ["swimming","basketball","football"],
// favoriteMovie: ["prideAndPrejudice","lion","braveheart","toystory"] }
// ]
// console.log(hobbies);

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// function firstOfArray(array){
//     console.log(array[0]);
// }
// firstOfArray([1,2,3,4])

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// function lastOfArray(array){
//     console.log(array.slice(-1));
// }
// lastOfArray([1,2,3,4])

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// let array = [0,5,7,9];
// array.push(10)
// array.shift(0)
// array.shift(0)
// array.shift(0)
// array.unshift(1,2,3,6,8);

7;
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]

// console.log(array2.push())
// console.log(array2.pop())
// console.log(array2.unshift())
// console.log(array2.shift())

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// function middleOfArray(array){
//     if(array.length % 2 === 1){
//         return array[Math.floor(array.length/2)]
//     }else {
//         return `${array[array.length/2 - 1]} and ${array[array.length/2]}`
//     }
// }
// console.log(middleOfArray([5,6,7]))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// let animals = ["cat", "ele", "bird"]
// animals[0] = "zebra"
// animals[1] = "elephant"
// animals.splice(2)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/

// function indexOfArray(array, index){
//     return array[index];
// }

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/

// function arrayExceptLast(array){
//     return array.splice(-1);
// }

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/

// function addToEnd(array, value){
//     array.push(value);
//     return array
// }

// all the exercises below should solved 2 times: 1- for loop 2- while loop
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function sumArray(array){
//     let sum = 0
//     for(let i = 0; i<array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }

// function sumArray(array){

//     let i = 0;
//     let sum = 0;
//     while (i<array.length){
//         sum += array[i];
//         i++;
//     }
//     return sum
// }

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function minInArray(array){
//      smallNumber = array[0];
//      for(let i =0 ; i<array.length;i++){
//          if (array[i]<smallNumber){
//              smallNumber = array[i];
//          }
//      }
//      return smallNumber;
// }

// function minInArray(array){
//     let i =0;
//     smallNum = array[0];
//     while(i<array.length){
//         if (array[i]<smallNum){
//             smallNum = array[i];
//         }
//         i++;

//     }
//     return smallNum;
// }

/*
15
Create a function called removeFromArray
that accept an array and element to remove
and return the array after remove this element from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function removeFromArray(array, number){
//     for(let i = 0; i<array.length;i++ ){
//         if(array[i] === number){
//             array.splice(i, 1);
//         }
//     }
//     return array;
// }

// function removeFromArray(array,number){
//     let i = 0;
//     while (i<array.length){
//         if(array[i]===number){
//             array.splice(i, 1)
//         }
//         i++
//     }
//     return array;
// }

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// let oddArrayFinal = []
// function oddArray(array){
//     for(let i =0; i<array.length; i++){
//         if(array[i]%2===1){
//             oddArrayFinal.push(array[i])
//         }
//     }
//     return oddArrayFinal;
// }

// let oddArrayFinal = [];

// function oddArray(array){
//     let i =0;
//     while (i<array.length){
//         if(array[i] % 2 ===1){
//             oddArrayFinal.push(array[i])
//         }
//         i++
//     }
//    return oddArrayFinal;
// }

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const aveArray = array => {
//     let sum = 0;
//     for(let i =0; i<array.length; i++){
//         sum += array[i]
//     }
//     let average = array.length;
//     return sum/average;
// }

// const aveArray = array => {
//     let sum = 0;
//     let i = 0;
//     let average = array.length;
//     while(i<array.length){
//         sum +=array[i];
//         i++;
//     }
//     return sum/average;
// }

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function shorterInArray(array){
//     let short = array[0];
//     for(let i =0;i<array.length;i++){
//         if(array[i].length<short.length){
//             short = array[i];
//         }
//     }
//     return short;
// }

// function shorterInArray(array){
//     let short = array[0];
//     let i =0;
//     while(i<array.length){
//         if(array[i].length<short.length){
//             short = array[i];
//         }
//         i++
//     }
//     return short;
// }

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const repeatChar = (stringOne, character) => {
//     let sum = 0;
//     for(let i =0;i<stringOne.length;i++){
//         if(stringOne[i]===character){
//             sum += 1;
//      }
//     }
//     return sum;
// }

// const repeatChar = (stringOne, character) => {
//     let sum = 0;
//     let i = 0;
//     while (i<stringOne.length){
//         if(stringOne[i]===character){
//             sum += 1;
//         }
//         i++;
//     }
//     return sum;
// }

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenIndexOddLength(array){
//     let newArray = [];
//     for (let i =0;i<array.length;i++){
//         if(array[i].length % 2 === 1 && i % 2 ===0){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// function evenIndexOddLength(array){
//     let newArray = [];
//     let i =0;
//     while(i<array.length){
//         if(array[i].length % 2 ===1 && i % 2 ===0){
//             newArray.push(array[i])
//         }
//         i++
//     }
//     return newArray
// }

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function powerElementIndex(array){
//     let newArray = []
//     for(let i =0;i<array.length;i++){
//         newArray.push(array[i]**i);

//     }
//     return newArray
// }

// function powerElementIndex(array){
//     let newArray = [];
//     let i = 0;
//     while (i<array.length){
//         newArray.push(array[i]**i)
//         i++;
//     }
//     return newArray;
// }

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenNumberEvenIndex(array){
//     let newArray = [];
//     for (let i =0;i<array.length;i++){
//         if(array[i] % 2 ===0 && i % 2 ===0){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// function evenNumberEvenIndex(array){
//     let newArray = [];
//     let i =0;
//     while(i<array.length){
//         if(array[i] % 2 ===0 && i % 2 ===0){
//             newArray.push(array[i]);
//         }
//         i++;
//     }
//     return newArray;
// }
