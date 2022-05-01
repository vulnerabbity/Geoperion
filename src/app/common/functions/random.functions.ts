export function getRandomArrayItem<T>(array: T[]): T {
  const index = ~~(array.length * Math.random())
  return array[index]
}
