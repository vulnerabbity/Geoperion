import { CountriesList } from "src/app/data/countries.data"
import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { CountriesService } from "./countries.service"

describe("Countries service", () => {
  let service: CountriesService

  function reassignService() {
    service = new CountriesService()
  }

  beforeEach(() => {
    reassignService()
  })

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

  describe("getMany method", () => {
    it("should use sorting", () => {
      const order = "population"

      service.setSortBy(order)
      const countries = service.getMany()
      const firstCountryName = countries[0].name
      const secondCountryName = countries[1].name

      expect(firstCountryName).toBe("China")
      expect(secondCountryName).toBe("India")
    })
  })
})
