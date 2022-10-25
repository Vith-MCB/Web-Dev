var i = 0; //Variable to be used at FOR loop
var array = [];
for(i; i<100; i++){
    var number = i + 1;
    if(number % 3 === 0){
        if(number % 5 === 0){
            array.push("FIZZBUZZ");
        } else {
            array.push("FIZZ");
        }
    }
    else if(number % 5 === 0){
        array.push("BUZZ");
    }
    else{
        array.push(number);
    }
}