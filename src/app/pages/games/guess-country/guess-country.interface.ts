import { GuessCountryPage } from "src/app/features/games/guess-country.interface"

export type GuessCountryDifficulty = "easy" | "medium" | "hard" | "insane"

export interface GuessCountrySelectablePage extends GuessCountryPage {
  selectedAnswerIndex?: number
}
