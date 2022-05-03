import { Country } from "src/app/data/countries.data"

export interface GuessCountryPage {
  options: Country[]

  rightAnswerIndex: number
}
