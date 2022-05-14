import { GameLength } from "../../settings/settings.interface"
import { GamesDefaultConfigPureService } from "./games-default-config.pure-service"
import { DefaultGameLengths } from "./games-default.interface"

describe("GamesDefaultConfigPureService", () => {
  const service = new GamesDefaultConfigPureService()

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
