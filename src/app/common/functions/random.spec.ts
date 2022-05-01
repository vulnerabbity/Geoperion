import { getRandomArrayItem } from "./random.functions"

describe("radom functions", () => {
  describe("radom array item function", () => {
    it("should take item from array", () => {
      const dataset = ["one", "two", "three", "four", "five"]

      for (let i = 0; i < 50; i++) {
        const randomItem = getRandomArrayItem(dataset)
        const isItemFromArray = dataset.includes(randomItem)

        expect(isItemFromArray).toBe(true)
      }
    })
  })
})
