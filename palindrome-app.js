const check = require("./src/palindrome-checker.js");
const between = require("./src/palindrome-num-finder.js");
const suggest = require("./src/palindrome-suggester.js");

const commandName = process.argv[2];

const commands = {
  check: {
    function: check,
    description: "check if user input is a palindrome",
  },
  between: {
    function: between,
    description: "find all palindromes between two integers",
  },
  suggest: {
    function: suggest,
    description: "check if user input is a palindrome and suggest one if not"
  }
};

if (commandName === "help" || !commands[commandName]) {
  console.log("usage: node palindrome-app.js <command>\n");
  console.log("available commands:");
  for (const [key, { description }] of Object.entries(commands)) {
    console.log(`     ${key}: ${description}`);
  }
} else {
  commands[commandName].function();
}
