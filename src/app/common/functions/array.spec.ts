import { sortAscendingFunction, sortDescendingFunction, swapArrayItems } from "./array.functions"

describe("Array functions", () => {
  describe("swapArrayItems", () => {
    it("should swap", () => {
      const sample = ["one", "two", "three"]

      swapArrayItems(sample, 0, 2)
      expect(sample).toEqual(["three", "two", "one"])
    })
  })

  describe("sortAscendingFunction", () => {
    it("should determine ascending order for numbers", () => {
      const dataset = [14, 7, 6, 9, 0]
      const expectedSortedDataset = [0, 6, 7, 9, 14]

      dataset.sort(sortAscendingFunction)
      expect(dataset).toEqual(expectedSortedDataset)
    })

    it("should determine ascending order for strings", () => {
      const dataset = ["b", "D", "a", "c"]
      const expectedSortedDataset = ["a", "b", "c", "D"]

      dataset.sort(sortAscendingFunction)
      expect(dataset).toEqual(expectedSortedDataset)
    })
  })

  describe("sortDescendingFunction", () => {
    it("should determine descending order for numbers", () => {
      const dataset = [1, 6, 2, 8, 4, 0]
      const expectedSortedDataset = [8, 6, 4, 2, 1, 0]

      dataset.sort(sortDescendingFunction)
      expect(dataset).toEqual(expectedSortedDataset)
    })

    it("should determine descending order for strings", () => {
      const dataset = ["b", "C", "a", "d"]
      const expectedSortedDataset = ["d", "C", "b", "a"]

      dataset.sort(sortDescendingFunction)
      expect(dataset).toEqual(expectedSortedDataset)
    })
  })
})
