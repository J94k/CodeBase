/**
 * @param {number[]} prices
 * @return {number}
 */
// @audit too slow for big arrays
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const currentPrice = prices[i];
    const max = Math.max(...prices.slice(i + 1));

    if (max > currentPrice) {
      const currentProfit = max - currentPrice;

      if (profit < currentProfit) profit = currentProfit;
    }
  }

  return profit;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (const n of nums) {
    if (nums.filter((checkedN) => checkedN === n).length === 1) {
      return n;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (const n of nums) {
    let counter = 0;

    for (const f of nums) {
      if (n === f) counter++;
      if (counter > 1) return true;
    }
  }

  return false;
};

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  for (const w of words) {
    let wIndexes = [];

    for (const l of w) {
      const i = order.indexOf(l);

      if (wIndexes.at(-1) > i) {
        return false;
      }

      wIndexes.push(order.indexOf(l));
    }
  }

  return true;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((n) => n ** 2).sort((n1, n2) => n1 - n2);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const customBinarySearch = (nums, target) => {
  let sI = 0;
  let eI = nums.length - 1;

  if (nums.at(0) > target) return -1;
  if (nums.at(-1) < target) return eI + 1;
  if (nums[sI] === target) return sI;
  if (nums[eI] === target) return eI;

  while (sI < eI) {
    let mI = Math.floor(sI + (eI - sI) / 2);
    let mN = nums[mI];

    if (mN === target) return mI;
    if (eI - sI < 2) break;

    if (target < mN) eI = mI;
    else sI = mI;
  }

  return [sI, eI];
};

function searchInsert(nums, target) {
  const result = binarySearch(nums, target);

  if (typeof result === 'number') return result;

  return result[0] + 1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const underlinedN = nums1[i];
    const sourceNIndex = nums2.indexOf(underlinedN);
    let greater = -1;

    for (let j = sourceNIndex + 1; j < nums2.length; j++) {
      const n = nums2[j];

      if (n > underlinedN) {
        greater = n;
        break;
      }
    }

    result.push(greater);
  }

  return result;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  if (!arr.length) return 0;
  if (arr.length < 2) return arr[0];

  const maxLength = arr.length;
  let currentLength = 1;
  let sum = 0;

  while (currentLength <= maxLength) {
    if (currentLength === maxLength) {
      sum += arr.reduce((sum, n) => (sum += n));
    } else {
      for (let i = 0; i + currentLength <= arr.length; i++) {
        sum += arr.slice(i, i + currentLength).reduce((sum, n) => (sum += n));
      }
    }

    currentLength += 2;
  }

  return sum;
};
