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
// password length prompt
var passwordLength = prompt ("Please enter length of password.  Length must be between 8 and 128 characters");
var lowerCase = confirm ("Add lower case character to password?");
var upperCase = confirm ("Add upper case character to password?");
var specialChar = confirm ("Add special character to password?");

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
