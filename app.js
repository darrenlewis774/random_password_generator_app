function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

  // Declare available characters
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!$%&()+-=#_@*";

  // Reset allowedChars and password strings
  let allowedChars = "";
  let password = "";

  // Assign length to be of type number, allowing for comparison
  length = Number(length);

  // Add character types to string, of possible password, if selected
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  /* Check that password length selected, is not less than or equal to zero. Then ensure that the
  length of allowedChars is not zero, meaning that no check box selection has been made. If neither
  of these conditions are true, build and return the password to the requested length */
  if (length <= 0) {
    window.alert(`Password length must be at least 1 character`);
  }
  else {
    if (allowedChars.length === 0) {
      window.alert(`At least one set of characters must be selected`);
    }
    else {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
      }
    }
    return password;
  }
}

function runGeneratePassword() {

  // Assign value contained within password length number input box
  passwordLength = passwordLengthNumberBox.value;
  
  // Assign boolean values depending on character selection check boxes
  includeLowercase = includeLowercaseCheckBox.checked ? true : false;
  includeUppercase = includeUppercaseCheckBox.checked ? true : false;
  includeNumbers = includeNumbersCheckBox.checked ? true : false;
  includeSymbols = includeSymbolsCheckBox.checked ? true : false;

  // Pass selection arguments to generatePassword function, assign and display result
  const password = generatePassword(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols);

  result.textContent = `Password  ➡  ${password}`;
}

// Declare HTML elements
const passwordLengthNumberBox = document.getElementById("passwordLength");
const includeLowercaseCheckBox = document.getElementById("includeLowercaseCheckBox");
const includeUppercaseCheckBox = document.getElementById("includeUppercaseCheckBox");
const includeNumbersCheckBox = document.getElementById("includeNumbersCheckBox");
const includeSymbolsCheckBox = document.getElementById("includeSymbolsCheckBox");
const result = document.getElementById("result");

// Declare arguments to be passed to generatePassword function
let passwordLength;
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;