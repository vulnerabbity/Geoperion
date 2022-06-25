import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { CountryTranslation, TranslationCountries } from "./en.countries"

export class TranslationGamePage {
  protected translationCountries = new TranslationCountries()

  guessCountryTitle = "What country is this flag ?"

  finishModal = {
    title: "Finish game ?",
    totalAnswers: "Total answers",
    correctAnswers: "Correct answers",
    wrongAnswers: "WrongAnswers",
    timePassed: "Time passed",
    buttons: {
      finish: "Finish",
    },
  }

  getGuessCapitalTitle({ countryCode }: { countryCode: CountryCode }): string {
    const countryName = this.getCountryNameTranslation(countryCode)

    return `What is capital of ${countryName} ?`
  }

  getGuessPopulationTitle({ countryCode }: { countryCode: CountryCode }): string {
    const countryName = this.getCountryNameTranslation(countryCode)

    return `What is population of ${countryName} ?`
  }

  protected getCountryNameTranslation(countryCode: CountryCode) {
    const { name: countryName } = this.getCountryTranslation(countryCode)

    return countryName
  }

  protected getCountryTranslation(countryCode: CountryCode): CountryTranslation {
    return this.translationCountries[countryCode]
  }
}
