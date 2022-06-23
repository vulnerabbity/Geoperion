import { Locale } from "../../language.interface"
import { TranslationCountries } from "./en.countries"
import { TranslationSettingsPage } from "./en.settings-page"

export class Translation {
  readonly localeKey: Locale = "EN"

  readonly settingsPage = new TranslationSettingsPage()

  readonly gamesPage = {
    title: "games",
    games: {
      guessCountry: "guess country",
      guessCapital: "guess capital",
      guessPopulation: "guess population",
    },
  }

  readonly countries = new TranslationCountries()
}
