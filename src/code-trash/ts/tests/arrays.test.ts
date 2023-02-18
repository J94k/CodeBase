import { describe, test, expect } from '@jest/globals'

import * as arrays from '../arrays'

describe('Arrays', () => {
  test('Should correctly calculate max area', () => {
    expect(arrays.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(arrays.maxArea([1, 1])).toBe(1)
    expect(
      arrays.maxArea([
        8361, 5302, 8672, 2400, 5150, 3527, 9216, 6713, 2902, 310, 555, 9176, 311, 9968, 5705, 3983,
      ])
    ).toBe(108693)
  })

  test('Should correctly calculate jump abilities', () => {
    expect(arrays.canJump([13])).toBe(true)
    expect(arrays.canJump([2, 3, 1, 1, 4])).toBe(true)
    expect(arrays.canJump([3, 2, 1, 0, 4])).toBe(false)
    expect(arrays.canJump([2, 0, 0])).toBe(true)
    expect(arrays.canJump([2, 5, 0, 0])).toBe(true)
  })

  test('Should correctly find the target with binary search', () => {
    expect(arrays.binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
    expect(arrays.binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
    expect(arrays.binarySearch([5], 5)).toBe(0)
  })
})
