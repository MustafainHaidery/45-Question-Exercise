/*
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite 
to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.
 */

 const myFriends: string [] = ["Rubina", "Aisha", "Saqib", "Sarfaraz"];
 console.log(myFriends);
 
 console.log(`we have 3 more friends to invite on Dinner/n`)

 
 // adding three more friends
 // add at begining
 myFriends.unshift("John");
//  ["John", "Rubina", "Aisha", "Saqib", "Sarfaraz"];
 console.log(myFriends);

 // add the middle 
 myFriends.splice(2, 0, "Harry");
 console.log(myFriends);


 // add at last
 myFriends.push("Ali")
 console.log(myFriends);

 // print all friends along with message

 for(let i =0; i < myFriends.length; i++){
    console.log(`Dear. ${myFriends[i]} you are invited to my Dinner`);
 }