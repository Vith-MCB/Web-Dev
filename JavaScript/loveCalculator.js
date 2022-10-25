function calculateLove (){
    var n = Math.random() * 100;
    return Math.floor(n)+1
}

var love = calculateLove();

if(love > 70){
    alert("You love each other like Kanye loves Kanye, Your love score is " + love + "%");

}
else if(love<70 && love > 30){
    alert("Your love score is " + love + "%");
} 
else{
    alert("Your love score is " + love + "%" + ", You go tohether like oil and water");
}