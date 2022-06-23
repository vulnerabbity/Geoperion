import { Locale } from "../../language.interface"
import { TranslationGamePage } from "../en/en.game-page"
import { Translation } from "../en/en.translation"
import { TranslationRuCountries } from "./ru.countries"
import { TranslationRuGamePage } from "./ru.game-page"
import { TranslationRuGamesPage } from "./ru.games-page"
import { TranslationRuSettingsPage } from "./ru.settings-page"

export class TranslationRU extends Translation {
  localeKey: Locale = "RU"

  override settingsPage = new TranslationRuSettingsPage()

  override gamesPage = new TranslationRuGamesPage()

  override gamePage = new TranslationRuGamePage()

  override countries = new TranslationRuCountries()
}
