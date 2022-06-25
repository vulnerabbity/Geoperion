import { Locale } from "./language.interface"
import { DefaultLocale, LanguageService } from "./language.service"

describe("Language service", () => {
  let service: LanguageService

  beforeEach(() => {
    service = new LanguageService()
  })

  it("should translate", () => {
    // very important to share same translation object
    // even locale changed to use it reactively

    const defaultLocale = service.translation.localeKey
    expect(defaultLocale).toBe(DefaultLocale)

    const newExpectedLocale: Locale = "RU"
    service.setLocale(newExpectedLocale)
    const newActualLocale = service.translation.localeKey
    expect(newExpectedLocale).toBe(newActualLocale)
  })
})
