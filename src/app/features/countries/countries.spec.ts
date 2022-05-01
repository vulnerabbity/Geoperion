import { CountriesList } from "src/app/data/countries.data"
import { CountriesService } from "./countries.service"

describe("Countries service", () => {
  const service = new CountriesService()
  it("getRandom should take existing countries", () => {
    const countries = CountriesList
    for (let i = 0; i < 20; i++) {
      const randomCountry = service.getRandom()
      const isExisting = !!countries.find(country => country.code === randomCountry.code)
      expect(isExisting).toBe(true)
    }
  })
})
