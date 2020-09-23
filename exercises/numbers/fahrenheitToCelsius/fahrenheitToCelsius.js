/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).
  // Collab w/ Kyle and Tsega-Ab
  return ((5/9)*(temp-32))
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');

  // Your sanity checks go here.
  console.log(fahrenheitToCelsius(32));
}

module.exports = fahrenheitToCelsius;
