var count = 99;
while(count > 0){
    if(count != 0){
        console.log(count + " bottles of beer on the wall, "+count + " bottles of beer.");
        if(count === 1){
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            console.log("Take one down and pass it around, "+ count + " bottles of beer on the wall.");
        }
    }
    count--;
    if(count === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles on the wall.")
    }
}