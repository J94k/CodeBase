import { describe, test, expect } from '@jest/globals';

import * as arrays from '../arrays';

describe('Arrays', () => {
  test('Should correctly calculate max area', () => {
    expect(arrays.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(arrays.maxArea([1, 1])).toBe(1);
    expect(
      arrays.maxArea([
        8361, 5302, 8672, 2400, 5150, 3527, 9216, 6713, 2902, 310, 555, 9176, 311, 9968, 5705, 3983,
      ])
    ).toBe(108691);
  });
});
