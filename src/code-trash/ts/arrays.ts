function runningSum(nums: number[]): number[] {
  const result: number[] = [];

  for (const n of nums) {
    result.push(n + (result[result.length - 1] || 0));
  }

  return result;
}

const getSum = (nums: number[]): number => {
  return nums.reduce((acc, n) => (acc += n), 0);
};

function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const leftSum = i === 0 ? 0 : getSum(nums.slice(0, i));
    const rightSum = i === nums.length - 1 ? 0 : getSum(nums.slice(i + 1));

    if (leftSum === rightSum) return i;
  }

  return -1;
}

function commonPrefix(s1: string, s2: string): string {
  let p = "";
  const [first, last] = s1.length < s2.length ? [s1, s2] : [s2, s1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) p += first[i];
    else break;
  }

  return p;
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let prefix = "";

  baseLoop: for (let i = 0; i < strs.length - 1; i++) {
    const baseWord = strs[i];

    for (let j = i + 1; j < strs.length; j++) {
      const comparedWord = strs[j];

      if (baseWord[0] !== comparedWord[0]) {
        prefix = "";
        break baseLoop;
      }

      const currentPrefix = commonPrefix(baseWord, comparedWord);

      if (currentPrefix && (!prefix || prefix.length > currentPrefix.length)) {
        prefix = currentPrefix;
      }
    }
  }

  return prefix;
}

function maximumWealth(accounts: number[][]): number {
  let wealth = 0;

  for (const acc of accounts) {
    const sum = acc.reduce((bank, m) => (bank += m), 0);

    if (wealth < sum) wealth = sum;
  }

  return wealth;
}

function removeElement(nums: number[], val: number): number {
  const foo = -1;
  const resultArr: number[] = nums
    .sort((n1: number) => {
      return n1 === val ? 1 : -1;
    })
    .map((n) => (n === val ? foo : n));
  const elementsAmount = resultArr.indexOf(foo);

  return elementsAmount === -1 ? resultArr.length : elementsAmount;
}

function removeDuplicates(nums: number[]): number {
  const beyondRange = 101;
  let i = 0;

  while (i < nums.length) {
    let current = nums[i];
    let next = nums[i + 1];

    if (next === current && next !== beyondRange) {
      nums[i] = beyondRange;
    }

    i++;
  }

  const sorted = nums.sort((n1, n2) => (n1 > n2 ? 1 : -1));
  const numberOfElements = sorted.indexOf(beyondRange);

  return numberOfElements > -1 ? numberOfElements : nums.length;
}

function searchInsert(nums: number[], target: number): number {
  let possibleIndex;

  for (let i = 0; i < nums.length; i++) {
    const currentN = nums[i];

    if (currentN === target) return i;

    if (currentN > target) {
      possibleIndex = i;
      break;
    }
  }

  return possibleIndex !== undefined ? possibleIndex : nums.length;
}
