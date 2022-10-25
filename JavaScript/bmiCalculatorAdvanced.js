/* Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output.
 The output should be rounded to the nearest whole number.*/
 
function bmiCalculator(wight, height){
    var calc = wight/(Math.pow(height,2));
    if (calc < 18.5){return "Your BMI is " + calc + ", so you are underweight.";}
    else if (calc > 18.5 && calc < 24.9){return "Your BMI is " + calc + ", so you have a normal weight.";}
    else{return "Your BMI is " + calc + ", so you are overweight.";}
}