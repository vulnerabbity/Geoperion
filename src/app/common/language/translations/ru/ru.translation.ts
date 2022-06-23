import { Locale } from "../../language.interface"
import { Translation } from "../en/en.translation"
import { TranslationRuCountries } from "./ru.countries"
import { TranslationRuSettingsPage } from "./ru.settings-page"

export class TranslationRU extends Translation {
  localeKey: Locale = "RU"

  override settingsPage = new TranslationRuSettingsPage()

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
