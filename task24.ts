/*
Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// equlity & inequlity
let myName = "Harry";
console.log(myName == "Harry");
console.log(myName !== "harry");


// numberics
let myNumber = 5;
console.log(myNumber == 5);
console.log(myNumber !== 5);
console.log(myNumber > 4);
console.log(myNumber < 4);
console.log(myNumber <= 4);
console.log(myNumber >= 4);

// and && === or 

let num1 = 5;
let num2 = 4;

console.log(num1 > 8 && num2 < 4);
console.log(num1 > 8 || num2 < 4);

let myArray = [5, 10, "Harry"];
let myString = "Rubina";

console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
