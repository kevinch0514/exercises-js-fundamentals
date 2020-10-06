/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  // This is your job. :)

  //SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

  // ATTEMPT 1
  // let array = string.split('');

  // for (let element of array) {
  //   if (element === target) {
  //     element.split(target).join(replaceWith)
  //   }
  // }
  // return array.join('');

  // ATTEMPT 2
  // return string.split(target).join(replaceWith)

  let finalString = '';

  for (let currentChar of string) {
    if (currentChar === target) {
      finalString += replaceWith;
    } else {
      finalString += currentChar;
    }
  }

  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(replaceCharacter('Hello', 'l', 8));
  console.log(replaceCharacter('ELEVEN', 'E', 3))
}

module.exports = replaceCharacter;
