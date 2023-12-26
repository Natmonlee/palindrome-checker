const isPalindrome = require("./isPalindrome.js");
const returnInput = require("./returnInput.js");

const betweenNums = async () => {
  const input = await returnInput(
    "Please enter start and end numbers (separated by a space): "
  );
  let [input1, input2] = input.split(" ");
  input1 = Number(input1);
  input2 = Number(input2);
  if (!input1 || !input2) {
    console.log("You must enter two numbers seperated by a space");
    process.exit();
  } else if (input1 > input2) {
    console.log("The start number must be smaller than the end number");
    process.exit();
  }

  const palindromes = [];
  for (let i = input1 + 1; i < input2; i++) {
    if (isPalindrome(i)) {
      palindromes.push(i);
    }
  }
  if (palindromes.length === 0) {
    console.log("There are no palindromes between the start and end number");
  } else if (palindromes.length === 1) {
    console.log(`The ${palindromes.length} palindrome between ${input1} and ${input2} is:`);
  } else {
    console.log(`The ${palindromes.length} palindromes between ${input1} and ${input2} are:`);
  }
  for (const palindrome in palindromes) {
    console.log(palindromes[palindrome]);
  }
  process.exit();
};

module.exports = betweenNums;
