import { expect, test } from 'vitest'

const maxSubarraySum = ([first, ...others]: number[]): number => {
  if (first == null) return 0

  const [, max] = others.reduce<[number, number]>(
    ([localMax, max], n) => {
      const newLocalMax = Math.max(localMax + n, n)
      return [newLocalMax, Math.max(max, newLocalMax)]
    },
    [first, first]
  )
  return max
}

test.each([
  { input: [], expected: 0 },
  { input: [1], expected: 1 },
  { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
  { input: [5, 4, -1, 7, 8], expected: 23 },
])('largest subarray sum; %j', ({ input, expected }) => {
  expect(maxSubarraySum(input)).toBe(expected)
})
