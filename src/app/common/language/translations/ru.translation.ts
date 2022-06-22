import { Locale } from "../language.interface"
import { Translation } from "./en.translation"

export class TranslationRU implements Translation {
  localeKey: Locale = "RU"

  readonly settings = {
    settings: "Настройки",
    difficulty: { difficulty: "сложность", easy: "легко", medium: "средне", hard: "сложно" },
    gameLength: { short: "коротко", medium: "средне", long: "долго" },
  }

  readonly gamesPage = {
    title: "игры",
    games: {
      guessCountry: "угадай страну",
      guessCapital: "угадай столицу",
      guessPopulation: "угадай популяцию",
    },
  }
}
