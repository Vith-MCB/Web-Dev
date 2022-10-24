/* Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output.
 The output should be rounded to the nearest whole number.*/
 
function bmiCalculator(wight, height){
    var calc = wight/(Math.pow(height,2));
    
    return Math.floor(calc)
}
