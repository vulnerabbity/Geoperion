import { TranslationGamesPage } from "../en/en.games-page"

export class TranslationRuGamesPage implements TranslationGamesPage {
  title = "игры"
  games = {
    guessCountry: "угадай страну",
    guessCapital: "угадай столицу",
    guessPopulation: "угадай популяцию",
  }
}
