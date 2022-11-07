var inputM = prompt("Value in meters: ");

function calculateFT (meters){
    return meters*3.28084;
}

alert("Value in ft is: " + calculateFT(inputM));