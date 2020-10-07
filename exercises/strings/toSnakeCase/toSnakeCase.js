/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  /**
   * INSIGHT: while a dictionary is much more flexible, it's a lot more timeconsuming and takes up more lines of code.
   * Going to incorporate charCodeAt() for rot13.js and rotN.js
   */
  let snakeCaseDict = { 'A': 'a', 'B': 'b',  'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i',
  'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't',
  'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z', ' ': '_' }
  let finalString = '';

  for (let currentChar of string) {
    if (snakeCaseDict.hasOwnProperty(currentChar)) {
      finalString += snakeCaseDict[currentChar];
    } else {
      finalString += currentChar;
    }
  }

  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toSnakeCase('HelLo fRiends!')); // hello_friends!
  console.log(toSnakeCase('HELLO, MY NAME IS KEVIN!')); // hello,_my_name_is_kevin!
}

module.exports = toSnakeCase;
