/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  // This is your job. :)
  // Any helpful resource on dictionaries? I've seen the GitHub, but idk how to access specific elements of the dictionary without typing dict.keyName (keyname as in the first item before :)
  let finalString = '';
  // console.log(replacementDict['h']);
  // let h = 'h';
  // console.log(replacementDict[h]);

  for (let currentChar of string) {
    // let dictKey = currentChar;
    // console.log('dict Key', dictKey);
    // console.log('replacement', replacementDict[dictKey]);
    if (replacementDict[currentChar] !== undefined) {
      finalString = finalString + replacementDict[currentChar];
    } else {
      finalString = finalString + currentChar;
    }
  }

  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(replaceCharacters('hello', { 'h': 'y', 'l': '8' }));
}

module.exports = replaceCharacters;
