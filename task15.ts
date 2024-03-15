/*
Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
 of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

const myFriends: string [] = ["Rubina", "Aisha", "Saqib", "Sarfaraz"];

console.log(`due to some personal reasons Dear. ${myFriends[1]} will not come on my dinner`);
 myFriends[1] = "John";

 console.log(`New list of my Friends Who are comming to my dinner`)

 for(let i = 0; i < myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]}`);
    
 }