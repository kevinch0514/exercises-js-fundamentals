/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @returns {string} Returns 'right', 'acute', 'obtuse', or 'invalid'
 */
function triangleType(a, b, c) {
  // Collaboration with Tsega-Ab
  // This is your job. :)
  // Lines 16-20 seem incorrect. Do I correct them on my own? Also, probably a heads up to update the original repository for typos.
  // C must be the longest side, therefore do I need to include something in this function so that the numbers are rearranged from least to greatest?
  // Another possible thing I could do is to create a function that returns the largest number, and then set each number to small, medium, large (s, m, l).
  // Thus, instead of "a, b, c" I would use "s, m, l".

  // Taking a break. Need more time to think about this.



  if ((a**2) + (b**2) > (c**2)) {
    return 'acute';
  }
  if ((a**2) + (b**2) === (c**2)) {
    return 'right';
  }
  if ((a**2) + (b**2) < (c**2)) {
    return 'obtuse';
  } else {
    return 'invalid';
  }
}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(triangleType(3, 4, 5));
  console.log(triangleType(4, 3, 5));
  console.log(triangleType(1, 1, 1));
  console.log(triangleType(12, 15, 8));
  console.log(triangleType(1, 1, 3));
}

module.exports = triangleType;
