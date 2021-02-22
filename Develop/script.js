  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input, modification made from passwordText.value 
// to ...textContent to allow password to populate
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set globals variables, and the type of content they will contain
var pwRandom = "";
var charRandom = "";
var charString = [];
var pwLength = [];
var charInteger = {};

function generatePassword() {
  // promt user for password length
  while ((pwLength) < 8 || (pwLength) > 128) {
      pwLength = prompt("Please select a password character length of no less than 8 characters and no more than 128 characters.");
      charInteger = pwLength
  } 
  return setPassword();
};

function setPassword() {
  // user prompts to determine password characters
  var upperCaseLetter = confirm("Include uppercase letters?");
  if (upperCaseLetter === true) {
      charString = charString + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var lowerCaseLetter = confirm("Include lowercase letters?");
  if (lowerCaseLetter === true) {
      charString = charString + "abcdefghijklmnopqrstuvwxyz";
  }

  var numbersCharacters = confirm("Include numbers?");
  if (numbersCharacters === true) {
      charString = "0123456789";
  }

  var specialSymbols = confirm("Include special characters?");
  if (specialSymbols === true) {
      charString = charString + "!@#$%^&*?";
  }

  // for loop to generate a password 
  for (var i = 0; i < pwLength; i++) {
      var charRandom = Math.floor(Math.random()*charString.length);
      var pwCharacter = charString[charRandom];
      pwRandom += pwCharacter;
  } 

  // return pwRandom to generate random password
  return pwRandom;

};