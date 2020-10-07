/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F. <<<TYPO: B- not B+ for 80-82>>>
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  // This is your job. :)
  /**
   * A+ = > 97   | A  = 93-96 | A- = 90-92
   * B+ = 87-89  | B  = 83-86 | B- = 80-82
   * C+ = 77-79  | C  = 73-76 | C- = 70-72
   * D+ = 67-69  | D  = 63-66 | D- = 60-72
   * F  = < 60
   */
  if (percentGrade > 97) {
    return 'A+';
  }
  if (percentGrade >= 93 && percentGrade <= 96) {
    return 'A';
  }
  if (percentGrade >= 90 && percentGrade <= 92) {
    return 'A-';
  }
  if (percentGrade >= 87 && percentGrade <= 89) {
    return 'B+';
  }
  if (percentGrade >= 83 && percentGrade <= 86) {
    return 'B';
  }
  if (percentGrade >= 80 && percentGrade <= 82) {
    return 'B-';
  }
  if (percentGrade >= 77 && percentGrade <= 79) {
    return 'C+';
  }
  if (percentGrade >= 73 && percentGrade <= 76) {
    return 'C';
  }
  if (percentGrade >= 70 && percentGrade <= 72) {
    return 'C-';
  }
  if (percentGrade >= 67 && percentGrade <= 69) {
    return 'D+';
  }
  if (percentGrade >= 63 && percentGrade <= 66) {
    return 'D';
  }
  if (percentGrade >= 60 && percentGrade <= 62) {
    return 'D-';
  }
  if (percentGrade < 60) {
    return 'F';
  }
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(letterGrade(98)); // A+
  console.log(letterGrade(89)); // B+
  console.log(letterGrade(70)); // C-
  console.log(letterGrade(64)); // D
  console.log(letterGrade(50)); // F
}

module.exports = letterGrade;
