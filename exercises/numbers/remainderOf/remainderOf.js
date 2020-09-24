/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function remainderOf(n, d) {
  /*
    This is your job. :)

    If you're not sure, step out of the code and use pen + paper. Start
    with simple examples and pay attention to the process you carry out.
  */
//  I figured Math.floor is not the right way to do this problem. If I were to calculate the remainder, I would need a for loop probably. I would do (n-d) until (n-d)<0.
  // q = Math.floor (n/d);
  // p = q * d
  // return n-p;
  // COLLAB W/ TSEGA-AB

    if (n === 0)
      return 0;
      else if ((n-d)<0) {
        return n;
      }
      else {
      return (remainderOf((n-d), d));
  }
  }

if (require.main === module) {
  let n = [1, 19, 99, 767];
  let d = [1]
  console.log('Running sanity checks for remainderOf');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(remainderOf(2, 1));
  console.log(remainderOf(5, 2));
  console.log(remainderOf(10, 4));
  console.log(remainderOf(129, 17));
  console.log(remainderOf(15, 20));
}

module.exports = remainderOf;
