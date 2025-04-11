export function splitArray<T>(array: Array<T>, size: number): Array<Array<T>> {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array.slice(i * size, (i + 1) * size))

    if (array.length <= (i + 1) * size) {
      break
    }
  }
  return result
}
