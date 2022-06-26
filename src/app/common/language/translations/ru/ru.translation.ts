import { Locale } from "../../language.interface"
import { Translation } from "../en/en.translation"
import { TranslationRuCountries } from "./ru.countries"
import { TranslationRuGamePage } from "./ru.game-page"
import { TranslationRuGamesPage } from "./ru.games-page"
import { TranslationRuSettingsPage } from "./ru.settings-page"
import { TranslationRuStatisticsPage } from "./ru.statistics-page"
import { TranslationRuUI } from "./ru.ui"

export class TranslationRU extends Translation {
  localeKey: Locale = "RU"

  override ui = new TranslationRuUI()

  override settingsPage = new TranslationRuSettingsPage()

  override gamesPage = new TranslationRuGamesPage()

  override gamePage = new TranslationRuGamePage()

  readonly statisticsPage = new TranslationRuStatisticsPage()

  override countries = new TranslationRuCountries()
}
