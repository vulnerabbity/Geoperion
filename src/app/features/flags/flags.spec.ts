import { FlagsService } from "./flags.service"

describe("Flags service", () => {
  const service = new FlagsService()

  describe("getRadomFlag method", () => {
    it("should return string", () => {
      for (let i = 0; i < 50; i++) {
        const flag = service.getRandomFlag()
        const isString = typeof flag === "string"
        expect(isString).toBe(true)
      }
    })
  })
})
