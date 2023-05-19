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

function searchInsert(nums, target) {
  const result = binarySearch(nums, target);

  if (typeof result === "number") return result;

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

Array.prototype.last = function () {
  return this.length ? this.at(-1) : -1;
};

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];

    if (fn(v, i)) result.push(v);
  }

  return result;
};

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const r = [];

  for (let i = 0; i < arr.length; i++) {
    r[i] = fn(arr[i], i);
  }

  return r;
};

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (!nums.length) return init;

  let v = init;

  for (let i = 0; i < nums.length; i++) {
    v = fn(v, nums[i]);
  }

  return v;
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (!arr.length) return [];

  const r = [];
  let chunkStartI = 0;

  for (let cI = 1; cI <= Math.ceil(arr.length / size); cI++) {
    r.push(arr.slice(chunkStartI, cI * size));
    chunkStartI += size;
  }

  return r;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (nums2.length) {
    for (let i = m; i < m + n; i++) {
      nums1[i] = nums2[i - m];
    }

    nums1.sort((a, b) => a - b);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const minOcc = Math.ceil(nums.length / 2)
  const occurrence = {}

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]

    if (!occurrence[v]) occurrence[v] = 1
    else occurrence[v]++

    if (occurrence[v] >= minOcc) return v
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let it = 1; it <= k; it++) {
    nums.unshift(nums.pop())
  }
};