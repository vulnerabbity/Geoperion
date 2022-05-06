import { AlphabetValidatorService } from "./alphabet-validator.service"

describe("Alphabet validator", () => {
  const service = new AlphabetValidatorService()

  describe("isHexString method", () => {
    it("should validate correct", () => {
      const nonHexStrings = ["hello", "non hex", "", ")a*18"]
      const hexStrings = ["fff", "ffffff", "000", "000000", "00ff15"]

      nonHexStrings.forEach(nonHex => {
        const result = service.isHexString(nonHex)
        expect(result).toBe(false)
      })

      hexStrings.forEach(hexString => {
        const result = service.isHexString(hexString)
        expect(result).toBe(true)
      })
    })
  })
})
