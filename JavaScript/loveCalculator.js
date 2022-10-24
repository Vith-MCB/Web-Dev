function calculateLove (){
    var n = Math.random() * 100;
    return Math.floor(n)+1
}

var love = calculateLove();
console.log(love+"%");