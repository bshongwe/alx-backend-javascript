/**
 * Perform arithmetic operations based on the type parameter.
 *
 * @param {string} type - The type of operation: SUM, SUBTRACT, or DIVIDE.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 *
 * @returns {number|string} - Result of the arithmetic operation
 * or "Error" if division by zero.
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
