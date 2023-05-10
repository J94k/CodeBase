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

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const complement = num.toString(2).split``.map((n) => (n === '1' ? '0' : '1'));

  return parseInt(complement.join``, 2);
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [];
  const maxDigit = 9;
  let added = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits[i];

    if (added) d += added;

    if (d > maxDigit) {
      d = d - (maxDigit + 1);
      added = 1;
    } else {
      added = 0;
    }

    result.push(d);
  }

  if (added) result.push(added);

  return result.reverse();
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n < 3) return 1;

  return fib(n - 1) + fib(n - 2);
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let strN = String(n);
  const computed = [strN];

  if (n === 1) return true;

  while (strN !== '1') {
    let newN = String(strN.split('').reduce((sum, n) => (sum += n ** 2), 0));

    if (computed.includes(newN)) return false;

    strN = newN;
    computed.push(newN);
  }

  return true;
};

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = n;

  return function () {
    return counter++;
  };
};