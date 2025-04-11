import { describe, expect, it } from 'vitest'
import { splitArray } from '@/lib/utils/splitArray'

describe('splitArray', () => {
  it('should split an array into smaller arrays of a given size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = splitArray(array, 3)

    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
  })

  it('should split an array into smaller arrays of a given size when the array is not divisible by the size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const result = splitArray(array, 3)

    expect(result).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11],
    ])
  })

  it('should split an array into smaller arrays of a given size when the array is empty', () => {
    const array: number[] = []
    const result = splitArray(array, 3)

    expect(result).toEqual([])
  })
})
