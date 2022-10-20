function captalizeName (name){
    var firstLetter = name.slice(0,1).toString();
    var restOfName = name.slice(1).toString();
    return firstLetter.toUpperCase() + restOfName.toLowerCase();
}

var userName = prompt("What is your name? ");
alert("Hy, "+ captalizeName(userName));