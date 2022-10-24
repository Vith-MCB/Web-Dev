function calculateLove (){
    var n = Math.random() * 100;
    return Math.floor(n)+1
}

var love = calculateLove();

if(love > 70){
    alert("You love each other like Kanye loves Kanye");
} else{
    alert("Your love score is " + love + "%");
}