/*
 Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users = ["harrY", "Saqib", "Sarfaraz", "Rubina", "Aisha"];

let new_users = ["John", "Ali", "Harry", "Farrukh", "Rubina"];

// use for each mehthod 
new_users.forEach(new_users => {
    let new_usersLower = new_users.toLowerCase();

    // use some mehtod 
    let userNameTaken = current_users.some(current_users => current_users.toLocaleLowerCase() === new_usersLower);

    // now apply condition 

    if(userNameTaken) {
        console.log(`${new_users} needs to choose a new user name because its already taken\n`);
    }else{
        console.log(`${new_users} is the new member added`);
        current_users.push(new_users)
    }
});

console.log(current_users);