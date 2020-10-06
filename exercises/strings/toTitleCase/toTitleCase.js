/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  /* ATTEMPT 1

  NOTES: I'm a still a little confused why a for...of loop would not work but a for loop does. Taking note from your comment on arrays, firstIndexOf.

    string = string.toLowerCase().split(' ');
    for (let currentWord of string) {
      currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
    }
    return string.join(' ');
  */

    string = string.toLowerCase().split(' ');
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toTitleCase('wElCoMe to THE wILD wiLD WEST!'));
  console.log(toTitleCase('HelLo, My nAmE IS KeVIn!'));
}

module.exports = toTitleCase;
