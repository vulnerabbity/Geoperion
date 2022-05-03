import { GameConfig, getTestingGameConfig } from "../../settings/game-config"
import { GameLengths } from "../../settings/settings.interface"
import { GuessCountryAnswersLengths, GuessCountryGameLengths } from "./guess-country.config"
import { getGuessCountryTestingService, GuessCountryService } from "./guess-country.service"

describe("Guess country service", async () => {
  let service: GuessCountryService
  let config: GameConfig

  beforeAll(() => {
    service = getGuessCountryTestingService()
    config = getTestingGameConfig()
  })

  describe("getPages method", () => {
    it("should take valid pages number", async () => {
      const lengths = ["short", "medium", "long"] as const

      for (let length of lengths) {
        await config.length.set(length)

        const pages = await service.getPages()
        expect(pages.length).toBe(GuessCountryGameLengths[length])
      }
    })
  })

  describe("getPage method", () => {
    it("should use valid answers number", async () => {
      const difficulties = ["easy", "medium", "hard"] as const

      for (let difficulty of difficulties) {
        await config.difficulty.set(difficulty)
        const page = await service.getPage()
        expect(page.options.length).toBe(GuessCountryAnswersLengths[difficulty])
      }
    })
  })
})
