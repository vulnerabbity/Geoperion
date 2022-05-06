import { removeFirstSignFromString } from "./string.functions"

describe("string functions", () => {
  describe("removeFirstSignFromString", () => {
    it("should work", () => {
      const dataset = ["test", "a", ""]
      const expectedResults = ["est", "", ""]
      for (let i = 0; i < dataset.length; i++) {
        const fullString = dataset[i]
        const expectedResult = expectedResults[i]

        const newString = removeFirstSignFromString(fullString)
        expect(newString).toBe(expectedResult)
      }
    })
  })
})
