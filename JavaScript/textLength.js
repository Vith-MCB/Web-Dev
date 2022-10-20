var maxLength = 240;
var userText = prompt("Write your text here: ");
var textLength = userText.length;
var charLeft = maxLength - textLength;

if (charLeft >= 0){
    alert("You have writen " + textLength + ", you have "+ charLeft + " characters left.");
} else {
    alert("You can only write 240 characters.");
}