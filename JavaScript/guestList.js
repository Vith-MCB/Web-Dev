function captalizeName (name){
    var firstLetter = name.slice(0,1).toString();
    var restOfName = name.slice(1).toString();
    return firstLetter.toUpperCase() + restOfName.toLowerCase();
}

var guestList = ["Angela", "Vitor", "Guto", "Jão"];

var userName = prompt("What is your name");
var nameCapitalized = captalizeName(userName);

if(guestList.includes(nameCapitalized)){
    console.log("You are one of the gests!");
} else {
    console.log("You are not one of the gests!");
}