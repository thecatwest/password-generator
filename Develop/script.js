  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input, modification made from passwordText.value 
// to ...textContent to allow password to populate
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}



// Set globals variables, and the type of content they will contain
var passwordRandom = "";
var randomCharacter = "";
var characterAvailable = [];
var characterCount = [];
var characterInteger = {};

function generatePassword() {
  // promt user for password length
  while ((characterCount) < 8 || (characterCount) > 128) {
      characterCount = prompt("Please select a password character length of no less than 8 characters and no more than 128 characters.");
      characterInteger = characterCount
  } 
  
  return setPassword();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);