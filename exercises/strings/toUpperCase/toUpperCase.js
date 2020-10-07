/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */

function toUpperCase(string) {
  let upperCaseDict = { 'a': 'A', 'b': 'B',  'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I',
  'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T',
  'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z' }
  let finalString = '';

  for (let currentChar of string) {
    if (upperCaseDict.hasOwnProperty(currentChar)) {
      finalString += upperCaseDict[currentChar];
    } else {
      finalString += currentChar;
    }
  }

  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for toUpperCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toUpperCase('HelLo fRiends!')); // HELLO FRIENDS!
  console.log(toUpperCase('hello, my name is kevin!')); // HELLO, MY NAME IS KEVIN!
}

module.exports = toUpperCase;
