import { Locale } from "../../language.interface"
import { TranslationCountries } from "./en.countries"
import { TranslationGamePage } from "./en.game-page"
import { TranslationGamesPage } from "./en.games-page"
import { TranslationSettingsPage } from "./en.settings-page"
import { TranslationStatisticsPage } from "./en.statistics-page"
import { TranslationUI } from "./en.ui"

export class Translation {
  readonly localeKey: Locale = "EN"

  readonly ui = new TranslationUI()

  readonly settingsPage = new TranslationSettingsPage()

  readonly gamesPage = new TranslationGamesPage()

  readonly gamePage = new TranslationGamePage()

  readonly statisticsPage = new TranslationStatisticsPage()

  readonly countries = new TranslationCountries()
}
