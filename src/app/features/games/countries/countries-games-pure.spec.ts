import { CountriesGamesPureService } from "./countries-games-pure.service"

describe("CountriesPureGamesService", () => {
  let service: CountriesGamesPureService

  beforeEach(() => {
    service = new CountriesGamesPureService()
  })

  describe("getPages method", () => {
    it("should take expected pages number", () => {
      const pagesNumberDataset = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
      pagesNumberDataset.forEach(expectedPagesNumber => {
        service.setPagesNumber(expectedPagesNumber)

        const pages = service.getPages()

        expect(pages.length).toBe(expectedPagesNumber)
      })
    })
  })

  describe("getPage method", () => {
    it("should take expected options number", () => {
      const optionsNumbersDataset = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
      optionsNumbersDataset.forEach(expectedOptionsNumber => {
        service.setAnswersNumber(expectedOptionsNumber)

        const page = service.getPage()

        expect(page.options.length).toBe(expectedOptionsNumber)
      })
    })
  })
})
