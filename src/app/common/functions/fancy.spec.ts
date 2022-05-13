import { getFancyNumberString } from "./fancy.functions"

describe("Fancy functions", () => {
  describe("getFancyNumberString function", () => {
    it("should return fancy number", () => {
      const dataset = [
        { input: 123, expectedOutput: "123" },
        { input: 123_456, expectedOutput: "123,456" },
        { input: 123_456_789, expectedOutput: "123,456,789" },
        { input: 1_123_456_789, expectedOutput: "1,123,456,789" },
      ] as const

      dataset.forEach(({ input, expectedOutput }) => {
        const fancyNumber = getFancyNumberString(input, ",")

        expect(fancyNumber).toBe(expectedOutput)
      })
    })
  })
})
