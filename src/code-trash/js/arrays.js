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
