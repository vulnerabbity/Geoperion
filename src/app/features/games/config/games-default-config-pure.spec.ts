import { GameDifficulties, GameLength } from "../../settings/settings.interface"
import { GamesDefaultConfigPureService } from "./games-default-config.pure-service"
import { DefaultAnswersLengths, DefaultGameLengths } from "./games-default.interface"

describe("GamesDefaultConfigPureService", () => {
  const service = new GamesDefaultConfigPureService()

  describe("getAnswersLength method", () => {
    it("should  take correct length", () => {
      const difficulties = Object.values(GameDifficulties)

      for (let difficulty of difficulties) {
        const length = service.getAnswersLength(difficulty)
        expect(length).toBe(DefaultAnswersLengths[difficulty])
      }
    })
  })

  describe("getGameLength method", () => {
    it("should take correct length", () => {
      const lengths = Object.keys(DefaultGameLengths) as GameLength[]

      for (let length of lengths) {
        const result = service.getGameLength(length)

        expect(result).toBe(DefaultGameLengths[length])
      }
    })
  })
})
