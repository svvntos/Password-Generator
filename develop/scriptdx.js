var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCase = ['abcdefhijklmnopqrstuvwxyz'];
var numbers = ['1234567890']
var symbols = ['!@#$%&?/~+;-'];

document.getElementById("generate").addEventListener("click", function () {

    function generatePassword() {
        var retVal = "";
        numberOfCharacters = "";
        var passwordLength = prompt("How many characters would you like to use?");

        if (passwordLength < 8 || passwordLength > 128) {
            alert("Please put a min of 8 and max of 128");
            return generatePassword();
        }

        var upperCaseQuestion = confirm("Would you like to use Uppercase letters? Click ok for yes, or cancel for no.");
        if (upperCaseQuestion) {
            numberOfCharacters = numberOfCharacters + upperCase
        }
        var lowerCaseQuestion = confirm("Would you like to use Lowercase letters? Click ok for yes, or cancel for no.");
        if (lowerCaseQuestion) {
            numberOfCharacters = numberOfCharacters + lowerCase
        }
        var numbersQuestion = confirm("Would you like to use Numbers? Click ok for yes, or cancel for no.");
        if (numbersQuestion) {
            numberOfCharacters = numberOfCharacters + numbers
        }
        var symbolsQuestion = confirm("Would you like to use Symbols? Click ok for yes, or cancel for no.");
        if (symbolsQuestion) {
            numberOfCharacters = numberOfCharacters + symbols
        }
        if (!upperCaseQuestion && !lowerCaseQuestion && !numbersQuestion && !symbolsQuestion) {
            alert("Pick a vaild character.")
            return generatePassword();
        }
        console.log(passwordLength);
        console.log(upperCaseQuestion);
        console.log(lowerCaseQuestion);
        console.log(numbersQuestion);
        console.log(symbolsQuestion);

        for (var i = 0; i < passwordLength; ++i) {
            retVal += (numberOfCharacters.charAt(Math.floor(Math.random() * numberOfCharacters.length)));
        }
        return retVal;
    }
    numberOfCharacters = "";
    var retVal = generatePassword();
    console.log(retVal);
    document.getElementById("password").innerHTML = retVal;
})
function myFunction() {
  
    var copyText = document.getElementById("password");
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    alert("Copied the text: " + copyText.value);
  }
document.getElementById("copytext").addEventListener("click", function(){
    copyText();
})
