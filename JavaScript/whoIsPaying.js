function whosPaying(names) {
    number = Math.floor(Math.random() * names.lengh);
    return names[number+1]
}

var arrayNomes = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(arrayNomes);