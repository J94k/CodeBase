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
  let product;
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
  let index;
  let minDistance;
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
