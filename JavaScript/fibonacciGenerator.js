function fibonacciGenerator (n) {
    var n1 = 0, n2 = 1, nextTerm;
    var array = [];
    if(n >= 1){
        array.push(n1);
    }
    if(n >= 2){
        array.push(n2);
    }
    if(n>2){
        for(var i = 1; i <= n-2; i++){
            nextTerm = n1 + n2;
            array.push(nextTerm);
            n1 = n2;
            n2 = nextTerm;
        }
    }
    return array;
    
}

    