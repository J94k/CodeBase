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
  let p = '';
  const [first, last] = s1.length < s2.length ? [s1, s2] : [s2, s1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) p += first[i];
    else break;
  }

  return p;
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let prefix = '';

  baseLoop: for (let i = 0; i < strs.length - 1; i++) {
    const baseWord = strs[i];

    for (let j = i + 1; j < strs.length; j++) {
      const comparedWord = strs[j];

      if (baseWord[0] !== comparedWord[0]) {
        prefix = '';
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

function majorityElement(nums: number[]): number {
  if (nums.length < 2) return nums[0];

  const minAmount = Math.ceil(nums.length / 2);

  for (let i = 0; i < nums.length - 1; i++) {
    let amount = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) amount++;
      if (amount >= minAmount) return nums[i];
    }
  }

  return Infinity;
}

function thirdMax(nums: number[]): number {
  const cleaned: number[] = [];

  nums
    .sort((n1, n2) => n2 - n1)
    .forEach((n) => {
      if (!cleaned.includes(n)) {
        cleaned.push(n);
      }
    });

  const third = cleaned[2];

  return typeof third === 'number' ? third : cleaned[0];
}

function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;

  const s1 = arr.at(0);
  const s2 = arr.at(1);
  const e1 = arr.at(-2);
  const e2 = arr.at(-1);

  if ((e2 && e1 && e1 < e2) || (s1 && s2 && s1 > s2)) return false;

  enum Direction {
    up,
    down,
  }

  let direction = Direction.up;
  let isMount = true;

  for (let i = 0; i < arr.length - 1; i++) {
    const currentN = arr[i];
    const nextN = arr[i + 1];

    if (currentN === nextN || (nextN > currentN && direction === Direction.down)) {
      isMount = false;
      break;
    }

    if (nextN < currentN && direction === Direction.up) {
      direction = Direction.down;
    }
  }

  return isMount && direction === Direction.down;
}

function twoSum(nums: number[], target: number): [number, number] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

const firstBadVersion = (isBadVersion: any) => {
  return (n: number): number => {
    let lastBadVersion: number;

    for (let v = n; v >= 1; v--) {
      if (isBadVersion(v)) {
        lastBadVersion = v;
      } else {
        if (lastBadVersion) return lastBadVersion;
      }
    }

    return lastBadVersion;
  };
};

// @todo increase speed to O(n)
// in this case we can remove number signs, so we don't care about
// multiplication at first place for correct sorting
function sortedSquares(nums: number[]): number[] {
  return nums.map((n) => n ** 2).sort((n1, n2) => n1 - n2);
}

function rotate(nums: number[], k: number): void {
  for (let s = 0; s < k; ++s) {
    nums.unshift(nums.pop());
  }
}

function reverseString(s: string[]): string {
  let sI = 0;
  let eI = s.length - 1;

  while (sI < eI) {
    const tmp = s[sI];

    s[sI] = s[eI];
    s[eI] = tmp;
    sI++;
    eI--;
  }

  return s.join('');
}

function reverseWords(s: string): string {
  let result = '';

  for (const w of s.split(' ')) {
    result += reverseString(w.split(''));
    result += ' ';
  }

  return result.trim();
}

function average(salary: number[]): number {
  const targetSalaries = salary.sort((s1, s2) => s1 - s2).slice(1, salary.length - 2);

  return targetSalaries.length
    ? targetSalaries.reduce((acc, s) => (acc += s)) / targetSalaries.length
    : 0;
}

function arraySign(nums: number[]): number {
  if (nums.includes(0)) return 0;

  const product = nums.reduce((product, n) => (product *= n));

  return product > 0 ? 1 : product === 0 ? 0 : -1;
}

function canMakeArithmeticProgression(arr: number[]): boolean {
  const sorted = arr.sort((n1, n2) => n1 - n2);
  let commonDifference;

  for (let i = 0; i < sorted.length - 1; i++) {
    const n1 = sorted[i];
    const n2 = sorted[i + 1];
    const d = n2 - n1;

    if (typeof commonDifference !== 'number') {
      commonDifference = d;
    } else if (d !== commonDifference) {
      return false;
    }
  }

  return true;
}
