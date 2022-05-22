// characters for password 
var specialCharacter = "!@#$%^&*()+[]{}`~ ";
var number = " 0123456789 ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// variables to be used for password
var randomStr = "";
var passwordStr = "";


var generatePassword = function() {

    // Password length between 8 - 128 characters 
    var passwordLength = parseInt(window.prompt("Choose a password length between 8 and 128 characters"));

    if (passwordLength  >= 8 && passwordLength <= 128) {
        console.log(passwordLength)
        // Choose lowercase, uppercase, numeric, and/or special characters 
        // lowercase
        var lowCasePrompt = window.prompt("Do you want to include lowercase letters in your password? Yes or No.");
            if (lowCasePrompt === "yes" || lowCasePrompt === "YES") {
                randomStr = randomStr + lowerCase;
                console.log(randomStr)
            }

        // uppercase 
        var upCasePrompt = window.prompt("Do you want to include uppercase letters in your password? Yes or No.");
            if (upCasePrompt === "yes" ||  upCasePrompt === "YES") {
                randomStr = randomStr + upperCase;
                console.log(randomStr)
            }

        // special char
        var specialPrompt = window.prompt("Do you want to include special characters in your password? Yes or No.");
            if (specialPrompt === "yes" || specialPrompt === "YES") {
                randomStr = randomStr + specialCharacter;
                console.log(randomStr)
            } 

        // numbers 
        var numPrompt = window.prompt("Do you want to include numbers in your password? Yes or No.");
            if (numPrompt === "yes" || numPrompt === "YES") {
                randomStr = randomStr + number;  
                console.log(randomStr) 
            }
        }
        else { 
            window.alert("Invalid. Please try again!"); 
    };

    var charTypes = lowCasePrompt + upCasePrompt + specialPrompt + numPrompt

    if (!charTypes) {
        return; 
    } else {

        for (var i = 0; i < passwordLength; i++) {
            passwordStr += randomStr.charAt(Math.floor(Math.random() * randomStr.length));
        } 
            var finalPassword = passwordStr;
            return finalPassword; 
    }
};

// Get references to the #generate element 
var generateBtn = document.querySelector('#generate');

// Write password to the #password input 
function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password ;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);