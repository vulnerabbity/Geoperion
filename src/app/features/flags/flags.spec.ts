import { CountriesService } from "../countries/countries.service"
import { FlagsService } from "./flags.service"

describe("Flags service", () => {
  const countriesService = new CountriesService()
  const service = new FlagsService(countriesService)

  describe("getRadomFlag method", () => {
    it("should return string", () => {
      for (let i = 0; i < 50; i++) {
        const flag = service.getRandomFlag()
        const isString = typeof flag === "string"
        expect(isString).toBe(true)
      }
    })
    it("should use full path arg", () => {
      const fullFlag = service.getRandomFlag({ useFullPath: true })
      const shortFlag = service.getRandomFlag({ useFullPath: false })

      const isDifferentLength = fullFlag.length !== shortFlag.length
      expect(isDifferentLength).toBe(true)
    })
  })
})
