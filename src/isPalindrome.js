const isPalindrome = (input) => {
  string = input.toString().toLowerCase().replaceAll(" ", "");
  const lastIndex = string.length - 1;

  for (let i = 0; i <= Math.floor(string.length / 2) - 1; i++) {
    if (string[i] !== string[lastIndex - i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;

