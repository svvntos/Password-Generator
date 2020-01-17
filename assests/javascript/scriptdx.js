var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordText = document.querySelector("#password");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '@', '#', '$', '%', '&', '?', '/', '~', '+', ';', '-'];

var randomPassword = [];
// Write password to the #password input






function generatePassword(upperCase, lowerCase, number, symbols) {
    var theArray = arr.flat(); 
    var newPassword = [];
    for (var i = 0; i < number; i++) {
        var randomIndex = Math.floor(Math.random() * theArray.length - 1) + 1;
        newPassword.push(theArray[randomIndex])
    }
    return newPassword.join('');    

}

function writePassword() {

    var numberOfCharacters = parseInt(prompt("How many characters would you like to use?"));

    if (numberOfCharacters < 8 || numberOfCharacters > 15) {
        alert("Please put a min of 8 and max of 15");
        return;
    } else if (isNaN(numberOfCharacters)) {
        alert("Please input a vaild charaters!");
        return;
    }
    
    var upperCaseQuestion = confirm("Would you like to use Uppercase letters? Click ok for yes, or cancel for no.");
    var lowerCaseQuestion = confirm("Would you like to use Lowercase letters? Click ok for yes, or cancel for no.");
    var numbersQuestion   = confirm("Would you like to use Numbers? Click ok for yes, or cancel for no.");
    var symbolsQuestion   = confirm("Would you like to use Symbols? Click ok for yes, or cancel for no.");

    if (upperCaseQuestion) {
        randomPassword.push(upperCase)
    }
    if (lowerCaseQuestion) {
        randomPassword.push(lowerCase);
    }
    if (numbersQuestion)  {
        randomPassword.push(numbers);
    }
    if (symbolsQuestion)  {
        randomPassword.push(symbols);
    } 
    else if (!upperCaseQuestion && !lowerCaseQuestion && !numbersQuestion && !symbolsQuestion){
        alert("Pick a vaild character.")
        return ;
    }
   var password = generatePassword(randomPassword, numberOfCharacters);
   passwordText.value = password;
}


    function copyToClipboard() {
        // BONUS 
    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    copyBtn.addEventListener("click", copyToClipboard);