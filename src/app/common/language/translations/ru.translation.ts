import { Locale } from "../language.interface"
import { Translation } from "./en.translation"

export class TranslationRU extends Translation {
  localeKey: Locale = "RU"

  settings = {
    settings: "Настройки",
    difficulty: { difficulty: "сложность", easy: "легко", medium: "средне", hard: "сложно" },
    gameLength: { short: "коротко", medium: "средне", long: "долго" },
  }
}
