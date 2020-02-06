// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var params = {
    length: prompt("How long would you like your password to be?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    lowercase: confirm("Would you like to use lowercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?")
  };

  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(options) {
  var database = [];
  var pw = "";
  var singlePw = "";
  var num = 0;
  var l = arguments[0].length;
  console.log(l);
  if (l >= 8 && l <= 128) {
    if (options["uppercase"]) {
      database.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    }
    if (options["lowercase"]) {
      database.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    }
    if (options["specialChars"]) {
      database.push(` `, `!`, `"`, `#`, `$`, `%`, `&`, `'`, `)`, `(`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `]`, `[`, `\\`, `^`, '`', `}`, `|`, `{`, `~`);
    }
    if (options["numericChars"]) {
      database.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    }
    console.log(database);
    for (let i = 0; i < l; i++) {
      num = Math.floor(Math.random() * database.length);
      singlePw = database[num];
      pw = pw + singlePw;
    }
  }
  else {
    alert("Out of bounds!");
  }
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page