/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  // This is your job. :)
  //SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(' ').length;
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');
  console.log(countWords('Hello, my name is Kevin.'));
  console.log(countWords('Running sanity checks for countWords and answer should be 10'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countWords;
