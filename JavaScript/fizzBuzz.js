var i = 0;
for(i; i<100; i++){
    number = i + 1;
    if(number % 3 === 0){
        if(number % 5 === 0){
            console.log("FIZZBUZZ");
        } else {
            console.log("FIZZ");
        }
    }
    else if(number % 5 === 0){
        console.log("BUZZ");
    }
    else{
        console.log(number);
    }
}