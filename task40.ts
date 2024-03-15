/*
Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/


// function myAlbum(artistName: string, albumTitle: string){
//     return {artistName, albumTitle}
// }

// let album1 = myAlbum("Harry", "Tum hi ho");
// let album2 = myAlbum("Rubina", "Ae Khuda jab bana uska hi bana");
// let album3 = myAlbum("John", "Kiya baat hai");

// console.log(album1);
// console.log(album2);
// console.log(album3);

function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
}

let album4 = myAlbum2("Harry", "Tum hi ho", 25);
let album5 = myAlbum2("Rubina", "Ae Khuda jab bana uska hi bana", 50);
let album6 = myAlbum2("John", "Kiya baat hai");

console.log(album4);
console.log(album5);
console.log(album6);