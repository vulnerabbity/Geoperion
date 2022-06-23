import { Locale } from "../../language.interface"
import { TranslationCountries } from "./en.countries"

export class Translation {
  readonly localeKey: Locale = "EN"

  readonly settings = {
    settings: "settings",

    difficulty: {
      difficulty: "difficulty",
      easy: "easy",
      medium: "medium",
      hard: "hard",
    },

    gameLength: {
      short: "short",
      medium: "medium",
      long: "long",
    },
  }

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
