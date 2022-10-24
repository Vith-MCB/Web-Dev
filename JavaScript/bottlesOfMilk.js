function bottlesOfMilk(money, price){
    var bottles = Math.floor(money / price);
    return bottles;
}

/* Here, the user needs to specify how much money they have and how much a bottle of milk costs.
 The function will then return the number of bottles of milk that the user can buy. */
bottlesOfMilk(10, 2);