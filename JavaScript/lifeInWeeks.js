/*
It will take your current age as the input and console.logs a message with our time left in this format:
"You have x days, y weeks, and z months left."
Where x, y and z are replaced with the actual calculated numbers.
*/

var age = console.log("How old are you? ");

function lifeInWeeks(age){
    var days = (90-age)*365;
    var weeks = (90-age)*52;
    var months = (90-age)*12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}