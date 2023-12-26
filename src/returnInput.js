const returnInput = (message) => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(message, (input) => {
      readline.close();
      resolve(input);
    });
  });
};

module.exports = returnInput;
