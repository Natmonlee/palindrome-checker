const isPalindrome = require("./isPalindrome");
const returnInput = require("./returnInput.js");

const checkPalindrome = async () => {
  const input = await returnInput("Please enter your number or phrase: ");
  console.log("Checking...");
  if (isPalindrome(input)) {
    console.log(`${input} is a palindrome.`);
    process.exit();
  } else {
    console.log(`${input} is not a palindrome.`);
    process.exit();
  }
};

module.exports = checkPalindrome;
