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
  let dict = replacementDict;
  let array = string.split('');
  console.log(dict);
  console.log(dict[1]);
  console.log(dict.l);
  for (let element of array) {
    return element.split(dict.keyName).join(dict['keyName']);
    // if (element = replacementDict)  {

    // }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(replaceCharacters('hello', { 'h': 'y', 'l': '8' }));
}

module.exports = replaceCharacters;
