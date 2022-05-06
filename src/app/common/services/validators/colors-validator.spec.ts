import { ColorsValidatorService } from "./colors-validator.service"

describe("Colors validator service", () => {
  const service = new ColorsValidatorService()

  describe("isHex method", () => {
    it("should work correct", () => {
      const nonHexColors = ["#xxx", "xx", "0", "", "00", "8888"]

      nonHexColors.forEach(nonHexColor => {
        const isHexColor = service.isHexColor(nonHexColor)
        expect(isHexColor).toBe(false)
      })

      const hexColors = ["#fff", "#cccccc", "000000", "666"]

      hexColors.forEach(hexColor => {
        const isHexColor = service.isHexColor(hexColor)
        expect(isHexColor).toBe(true)
      })
    })
  })
})
