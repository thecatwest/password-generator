// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

function generatePassword() {
  alert("Please select your password criteria from the following prompts. Select 'OK' to include the character type in your password, or select 'CANCEL' to exclude the character type from your password.");
  // prompt user for type of characters desired in password
  const uppercaseChar=confirm("Include uppercase Letters?");
  const lowercaseChar=confirm("Include lowercase Letters?");
  const num=confirm("Include numbers?");
  const spec=confirm("Include special characters?");
  const PasswordLength=parseInt(prompt("Please select your password length: must be a minimum of 8 and a maximum of 128 characters."));
  
  // build an array for available character types
  const characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*()"]
  let mainString = "";
  if(uppercaseChar) {
    mainString += characters[0];
  }
  if(lowercaseChar) {
    mainString += characters[1];
  }

  if(num) {
    mainString += characters[2];
  }
  if(spec) {
    mainString += characters[3];
  }

  console.log(mainString)
 
  // for() loop to generate random password
  let finalPassword =""
  for (let i = 0; i < PasswordLength; i++) {
    // random number
    finalPassword += mainString.charAt(Math.floor(Math.random() * mainString.length));
    
  }
  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);