/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1 || n === 2) return true;
  if (n % 2 !== 0) return false;

  let result = n;

  while (result > 2) {
    result /= 2;
  }

  return result === 2;
};

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const result = `${num}`.split``.reduce((acc, n) => (acc += +n), 0);

  if (`${result}`.length > 1) return addDigits(result);

  return result;
};
