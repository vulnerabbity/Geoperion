import { Injectable } from "@angular/core"
import { GameConfigState, getTestingGameConfigState } from "../../settings/game-config.state"
import { GameDifficulty, GameLength } from "../../settings/settings.interface"

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
  private difficulty: GameDifficulty = "easy"
  private gameLength: GameLength = "short"

  constructor(private configState: GameConfigState) {
    this.subscribeToConfig()
  }

  async getAnswersLength() {
    return GuessCountryAnswersLengths[this.difficulty]
  }

  async getGameLength() {
    return GuessCountryGameLengths[this.gameLength]
  }

  private subscribeToConfig() {
    return this.configState.config$.subscribe(config => {
      this.difficulty = config.difficulty
      this.gameLength = config.length
    })
  }
}
