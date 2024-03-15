/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes
 at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
 inviting them to dinner.
 */

 const myFriends: string [] = ["Rubina", "Aisha", "Saqib", "Sarfaraz"];

 // 1st Mehthod with Loop
//  for(let i = 0; i < myFriends.length; i++){
    // console.log(`Dear. ${myFriends [i]}! you are invited to my dinner on Sunday/n`);
//  }

 // 2nd method using map()

 myFriends.map((ib)=>{
    console.log(`Dear. ${ib}! you are invited to my dinner on Sunday/n`);
    })