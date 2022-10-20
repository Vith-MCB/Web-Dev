function captalizeName (name){
    var firstLetter = name.slice(0,1).toString();
    var restOfName = name.slice(1).toString();

    return firstLetter.toUpperCase() + restOfName.toLowerCase();
}

userName = "viToR";
captalizeName(userName);