/*
Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/


function mySandwiches(...items: string []){
    return `I would like to eat Sandwich of ${items}`;
};

let collection = mySandwiches("Cheese", " Ham", " Lettuce");
let collection1 = mySandwiches("Pakistani", "Swiss");
let collection2 = mySandwiches();

console.log(collection);
console.log(collection1);
console.log(collection2);