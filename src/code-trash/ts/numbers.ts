import Cache from './Cache';

const cache = new Cache();

function arrangeCoins(n: number): number {
  if (n === 1) return 1;

  let rows = 0;
  let coinsSpent = 0;

  for (let i = 1; i < n; ++i) {
    if (coinsSpent + i > n) break;

    ++rows;
    coinsSpent += i;
  }

  return rows;
}

function countOdds(low: number, high: number): number {
  let counter = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) ++counter;
  }

  return counter;
}

function subtractProductAndSum(n: number): number {
  let product: number;
  let sum = 0;

  for (const sD of String(n)) {
    const d = Number(sD);

    if (typeof product !== 'number') product = d;
    else product *= d;

    sum += d;
  }

  return product - sum;
}

function hammingWeight(n: number): number {
  return n.toString(2).match(/1/g)?.length ?? 0;
}

type Coordinate = number[];

const getManhattanDistance = (coord1: Coordinate, coord2: Coordinate) => {
  return Math.abs(coord1[0] - coord2[0]) + Math.abs(coord1[1] - coord2[1]);
};

function nearestValidPoint(x: number, y: number, points: Coordinate[]): number {
  let index: number;
  let minDistance: number;
  const pointsWithoutInvalid = points.map((p) => (p[0] === x || p[1] === y ? p : null));

  for (let i = 0; i < pointsWithoutInvalid.length; i++) {
    const p = pointsWithoutInvalid[i];

    if (!p) continue;

    const d = getManhattanDistance([x, y], p);

    if (typeof minDistance !== 'number' || d < minDistance) {
      minDistance = d;
      index = i;
    }
  }

  return typeof index === 'number' ? index : -1;
}

function fib(n: number): number {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n - 2);
}

function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  if (n === 3) return 2;
  if (cache.has(n)) return cache.get(n);

  const n1 = tribonacci(n - 1);
  cache.set(n - 1, n1);

  const n2 = tribonacci(n - 2);
  cache.set(n - 2, n2);

  const n3 = tribonacci(n - 3);
  cache.set(n - 3, n3);

  return n1 + n2 + n3;
}

function climbStairs(n: number): number {
  if (n < 4) return n;
  if (cache.has(n)) return cache.get(n);

  const s2 = climbStairs(n - 2);
  cache.set(n - 2, s2);

  const s1 = climbStairs(n - 1);
  cache.set(n - 1, s1);

  return s1 + s2;
}

function smallestEvenMultiple(n: number): number {
  for (let t = n; t <= Infinity; t++) {
    if (t % 2 === 0 && t % n === 0) return t;
  }

  return Infinity;
}

function getRoot(n: number): number {
  return Math.sqrt(n);
}

function mySqrt(x: number): number {
  return +getRoot(x).toString().split('.')[0];
}
