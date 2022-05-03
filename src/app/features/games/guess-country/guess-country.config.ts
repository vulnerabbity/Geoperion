import { Injectable } from "@angular/core"
import { GameConfig, getTestingGameConfig } from "../../settings/game-config"
import { GameDifficulty } from "../../settings/settings.interface"

export interface GuessCountryConfigObject {
  answersLength: number
  gameLength: number
}

export enum GuessCountryAnswersLengths {
  "easy" = 2,
  "medium" = 4,
  "hard" = 6,
}

export enum GuessCountryGameLengths {
  "short" = 10,
  "medium" = 25,
  "long" = 50,
}

@Injectable({
  providedIn: "root",
})
export class GuessCountryConfig {
  constructor(private gameConfig: GameConfig) {}

  async getAnswersLength() {
    const difficulty = await this.gameConfig.difficulty.get()
    return GuessCountryAnswersLengths[difficulty]
  }

  async getGameLength() {
    const gameLength = await this.gameConfig.length.get()
    return GuessCountryGameLengths[gameLength]
  }
}

export function getTestingGuessCountryConfig() {
  const gameConfig = getTestingGameConfig()
  const guessCountryConfig = new GuessCountryConfig(gameConfig)

  return guessCountryConfig
}
