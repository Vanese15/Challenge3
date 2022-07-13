// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// set value to generate password
function generatePassword() {

// password criteria
// password length prompt, upper/lowercase, number & special character
    var passwordLength = prompt ("Please enter length of password.  Length must be between 8 and 128 characters");
    var upperCase = confirm ("Add upper case character to password?");
    var lowerCase = confirm ("Add lower case character to password?");
    var numberChar = confirm ("Add number character to password?");
    var specialChar = confirm ("Add special character to password?");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numberChar = "0123456789";
    var specialChar = "!@#$%^&*()";
    var passwordString = "";
    var password = "";
}
// 
for (i = 0; i <= passwordLength; i++)
  if (upperCase===true) {
    passwordString += upperCase.CharAt(Math.floor(Math.random() * 10));
  } if (lowerCase===true) {
    passwordString += lowerCase.CharAt(Math.floor(Math.random() * 10));
  } if (numberChar===true) {
    passwordString += numberChar.CharAt(Math.floor(Math.random() * 10));
  }if (specialChar===true)
    passwordString += specialChar.CharAt(Math.floor(Math.random() * 10));

return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
