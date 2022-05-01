import { CountriesList } from "src/app/data/countries.data"
import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { CountriesService } from "./countries.service"

describe("Countries service", () => {
  const service = new CountriesService()
  describe("getRandom method", () => {
    it("should take existing countries", () => {
      const countries = CountriesList
      for (let i = 0; i < 20; i++) {
        const randomCountry = service.getRandom()
        const isExisting = !!countries.find(country => country.code === randomCountry.code)
        expect(isExisting).toBe(true)
      }
    })
  })

  describe("getByCode method", () => {
    it("should get correct country", () => {
      const afghanistanCode: CountryCode = "AF"
      const country = service.getByCode(afghanistanCode)

      expect(country.name).toBe("Afghanistan")
    })
  })

  describe("getManyRandomUnique method", () => {
    it("should use limit", () => {
      const limits = [1, 5, 10, 25]
      for (let limit of limits) {
        const countries = service.getManyRandomUnique({ limit })
        expect(countries.length).toBe(limit)
      }
    })
  })
})
