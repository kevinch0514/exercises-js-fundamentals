/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rotN(string, num) {
  // This is your job. :)
  // I might have made this more complicated for myself while trying to avoid using the CharCodeAt, etc. functions.

  let alphabetUpCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphabetLowCase = 'abcdefghijklmnopqrstuvwxyz';
  let rotNUpCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rotNLowCase = 'abcdefghijklmnopqrstuvwxyz';

  rotNUpCase = rotNUpCase.substring(num) + rotNUpCase.substring(0, num);
  rotNLowCase = rotNLowCase.substring(num) + rotNLowCase.substring(0, num);

  let alphabetUpCaseArray = alphabetUpCase.split('');
  let alphabetLowCaseArray = alphabetLowCase.split('');
  let rotNUpCaseArray = rotNUpCase.split('');
  let rotNLowCaseArray = rotNLowCase.split('');
  let finalString = '';
  let letterIndex;

  console.log(rotNUpCaseArray[0]);
  console.log(string[0]);
  console.log(alphabetUpCaseArray.indexOf[string[0]])

  // Something about lines 37-51 is not working. I don't know why letterIndex isn't changing into a number. I tried using both for and for..of loops.
  for (i = 0; i <= string.length; i++) {
    if (alphabetUpCaseArray.hasOwnProperty(string[i])) {
      letterIndex = alphabetUpCaseArray.indexOf(string[i]);
      finalString += rotNUpCaseArray[letterIndex];
    }
    else if (alphabetLowCaseArray.hasOwnProperty(string[i])) {
      letterIndex = alphabetLowCaseArray.indexOf(string[i]);
      finalString += rotNLowCaseArray[letterIndex];
    }
    else {
      finalString += string[i];
    }
    // console.log(finalString);
    // console.log(letterIndex);
  }

  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for rotN:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(rotN('Hello, world!', 13)); // Uryyb, jbeyq!
  console.log(rotN('Hello, world!', 9)); // Qnuux, fxaum!
}

module.exports = rotN;
