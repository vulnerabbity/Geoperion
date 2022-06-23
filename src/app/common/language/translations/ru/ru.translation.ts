import { Locale } from "../../language.interface"
import { Translation } from "../en/en.translation"
import { TranslationRuCountries } from "./ru.countries"
import { TranslationRuGamesPage } from "./ru.games-page"
import { TranslationRuSettingsPage } from "./ru.settings-page"

export class TranslationRU extends Translation {
  localeKey: Locale = "RU"

  override settingsPage = new TranslationRuSettingsPage()

  override gamesPage = new TranslationRuGamesPage()

  override countries = new TranslationRuCountries()
}
