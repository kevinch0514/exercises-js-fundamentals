/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)
  let array = string.split(' ');
  let shortestSoFar = array[0];

  // console.log(array);

  for (let element of array) {
    if (element.length < shortestSoFar.length) {
      shortestSoFar = element;
    }
  }
  // console.log(shortestSoFar);
  return shortestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(shortestWord('Running sanity checks for longestWord:'));
  console.log(shortestWord('Hello. Hi.'));
}

module.exports = shortestWord;
