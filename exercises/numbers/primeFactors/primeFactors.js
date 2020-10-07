/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */
function primeFactors(num) {
  /*
    Your code goes here.

    Work out one version that works and don't worry about performance.

    If you're having trouble working it out in code, step out of JS-land
    and use pen/paper, index cards, etc. — anything that helps you think
    about it without getting stuck in JavaScript syntax.
  */

  // Honestly, I'm just stuck cause I don't really understand what prime factors mean.
  let results = [];

  for (let i = 1; i <= num; i++) {
    if ((num % i) === 0) {
      results.push(i);
    }
  }

  let primeResults = [];

  for (let factors of results) {
    if (factors !== 1) {
      for (let i = 1; i <= factors; i++) {
        if ((i !== 1) && (i !== factors) && ((factors % i) === 0)) {
          primeResults.push(i);
        }
      }
    }
  }

  return primeResults;
}

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(primeFactors(2));
  console.log(primeFactors(2 * 2));
  console.log(primeFactors(2 * 2 * 3));
  console.log(primeFactors(2 * 2 * 3 * 17 * 197));
  console.log(primeFactors(917329));
}

module.exports = primeFactors;
