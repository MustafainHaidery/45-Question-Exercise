let myname:string ="Harry"
console.log (myname.toLowerCase());
console.log (myname.toUpperCase());
function toTitleCase(username: string): string {
    return username.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
console.log(` Titlcase ${toTitleCase(myname)} `);