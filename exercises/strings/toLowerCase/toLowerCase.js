/**
 * Given an input string, returns a copy of the string with all-lowercase letters.
 *
 * Don't use JavaScript's built-in string.toLowerCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding lowercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toLowerCase('HelLo fRiends!'); // => 'hello friends!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toLowerCase(string) {
  let lowerCaseDict = { 'A': 'a', 'B': 'b',  'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i',
  'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't',
  'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z' }
  let finalString = '';

  for (let currentChar of string) {
    if (lowerCaseDict.hasOwnProperty(currentChar)) {
      finalString += lowerCaseDict[currentChar];
    } else {
      finalString += currentChar;
    }
  }

  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toLowerCase('HelLo fRiends!'));
  console.log(toLowerCase('HELLO, MY NAME IS KEVIN!'));
}

module.exports = toLowerCase;
