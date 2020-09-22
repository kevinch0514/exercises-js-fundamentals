/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  // This is your job. :)
  // NOTES: improve/need help on how to get last character of string without counting.
  return str1 = string.charAt(0).toUpperCase() + string.slice (1,24);
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  console.log(capitalize('hello, my name is Kevin.'))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
