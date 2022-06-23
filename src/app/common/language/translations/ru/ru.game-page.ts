import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { TranslationGamePage } from "../en/en.game-page"
import { TranslationRuCountries } from "./ru.countries"

export class TranslationRuGamePage extends TranslationGamePage {
  override translationCountries = new TranslationRuCountries()

  override guessCountryTitle = "What country is this flag ?"

  override getGuessCapitalTitle({ countryCode }: { countryCode: CountryCode }) {
    const { name: translatedCountryName } = this.translationCountries[countryCode]

    return `Какова столица страны ${translatedCountryName} ?`
  }

  override getGuessPopulationTitle({ countryCode }: { countryCode: CountryCode }): string {
    const countryName = this.getCountryNameTranslation(countryCode)

    return `Какова популяция страны ${countryName}`
  }
}
