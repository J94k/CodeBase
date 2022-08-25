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
