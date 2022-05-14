export function swapArrayItems<T>(array: T[], index1: number, index2: number): void {
  ;[array[index1], array[index2]] = [array[index2], array[index1]]
}

type SortResult = 1 | 0 | -1

export function sortAscendingFunction(a: number | string, b: number | string): SortResult {
  validateBothOneType(a, b)
  a = normalizeNumberOrString(a)
  b = normalizeNumberOrString(b)

  if (a > b) {
    return 1
  }

  if (b > a) {
    return -1
  }

  return 0
}

export function sortDescendingFunction(a: number | string, b: number | string): SortResult {
  validateBothOneType(a, b)
  a = normalizeNumberOrString(a)
  b = normalizeNumberOrString(b)

  if (a > b) {
    return -1
  }

  if (b > a) {
    return 1
  }

  return 0
}

function normalizeNumberOrString(numberOrString: number | string): string | number {
  if (typeof numberOrString === "number") {
    return numberOrString
  }

  return numberOrString.toLowerCase()
}

function validateBothOneType(a: unknown, b: unknown) {
  const isNotEqual = typeof a !== typeof b
  if (isNotEqual) {
    throw new Error(`Validation failed. Expected same types but got ${typeof a} and ${typeof b}`)
  }
}
