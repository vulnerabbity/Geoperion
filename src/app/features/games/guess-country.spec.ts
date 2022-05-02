import { waitForAsync } from "@angular/core/testing"
import { getGuessCountryConfigModule, GuessCountryConfig } from "./guess-country.config"
import { getGuessCountryTestingService, GuessCountryService } from "./guess-country.service"

describe("Guess country service", async () => {
  let service: GuessCountryService
  let config: GuessCountryConfig

  beforeAll(async () => {
    service = await getGuessCountryTestingService()
    config = await getGuessCountryConfigModule()
  })

  describe("getPages method", () => {
    it("should take valid pages number", async () => {
      for (let i = 0; i < 10; i++) {
        const gameLength = i + 5
        config.setGameLength(gameLength)

        const pages = await service.getPages()
        expect(pages.length).toBe(gameLength)
      }
    })
  })
})
