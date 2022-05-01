import { swapArrayItems } from "./array.functions"

export function getRandomArrayItem<T>(array: T[]): T {
  const index = ~~(array.length * Math.random())
  return array[index]
}

export function getShuffledArray<T>(arrayInput: T[]): T[] {
  const shuffledArray = arrayInput.slice()
  const lastIndex = shuffledArray.length - 1

  for (let i = lastIndex; i > 0; i--) {
    const randomItemIndex = Math.floor(Math.random() * (i + 1))
    swapArrayItems(shuffledArray, i, randomItemIndex)
  }
  return shuffledArray
}
