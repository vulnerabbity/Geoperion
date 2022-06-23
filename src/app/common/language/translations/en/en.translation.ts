import { Locale } from "../../language.interface"
import { TranslationCountries } from "./en.countries"
import { TranslationGamesPage } from "./en.games-page"
import { TranslationSettingsPage } from "./en.settings-page"

export class Translation {
  readonly localeKey: Locale = "EN"

  readonly settingsPage = new TranslationSettingsPage()

  readonly gamesPage = new TranslationGamesPage()

  readonly countries = new TranslationCountries()
}
