import { Locale } from "../language.interface"
import { Translation } from "./en.translation"
import { TranslationRuCountries } from "./ru.countries"

export class TranslationRU extends Translation {
  localeKey: Locale = "RU"

  override settings = {
    settings: "Настройки",
    difficulty: { difficulty: "сложность", easy: "легко", medium: "средне", hard: "сложно" },
    gameLength: { short: "коротко", medium: "средне", long: "долго" },
  }

  override gamesPage = {
    title: "игры",
    games: {
      guessCountry: "угадай страну",
      guessCapital: "угадай столицу",
      guessPopulation: "угадай популяцию",
    },
  }

  override countries = new TranslationRuCountries()
}
