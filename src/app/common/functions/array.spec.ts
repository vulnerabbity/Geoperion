import { swapArrayItems } from "./array.functions"

describe("Array functions", () => {
  describe("swapArrayItems", () => {
    it("should swap", () => {
      const sample = ["one", "two", "three"]

      swapArrayItems(sample, 0, 2)
      expect(sample).toEqual(["three", "two", "one"])
    })
  })
})
