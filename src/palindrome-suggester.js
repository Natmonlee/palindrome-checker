const isPalindrome = require("./isPalindrome");
const returnInput = require("./returnInput.js");

const suggestPalindrome = async () => {
  const input = await returnInput("Please enter your number or phrase: ");
  console.log("Checking...");
  if (isPalindrome(input)) {
    console.log(`${input} is a palindrome.`);
    process.exit();
  } else {
    let string = input.toString().toLowerCase();
    let addToEnd = "";
    let newString = string;
    for (let i = 0; i < string.length; i++) {
        addToEnd = string[i] + addToEnd;
        string = newString + addToEnd;
        if (isPalindrome(string)) {
          console.log(`${input} is not a palindrome, but ${string} is.`);
          process.exit();
        }
      }
    }
  };

module.exports = suggestPalindrome;
