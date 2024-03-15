/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/


let magicianNames2 = ["Harry", "Rubina", "John"];

// copy of array 
let magicianNameCopy = [...magicianNames2];

function show_magicians(greet: string){
    let withGreetings = "";

    for(let item of magicianNameCopy){
        withGreetings += `${greet} ${item}\n`;
    }

    return withGreetings;
};

let myGreetings = show_magicians("Hello G");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);

console.log(magicianNames2);