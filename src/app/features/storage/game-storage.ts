import { Injectable } from "@angular/core"
import { GameDifficultyStorage } from "./general/game-difficulty.storage"
import { GameLengthStorage } from "./general/game-length.storage"
import { GameDifficulty, GameLength } from "./settings.interface"

export interface GameConfig {
  difficulty: GameDifficulty
  length: GameLength
}

@Injectable({
  providedIn: "root",
})
export class GameStorage {
  public readonly difficultyStorage = new GameDifficultyStorage()
  public readonly lengthStorage = new GameLengthStorage()

  private configSnapshot = this.getConfig()

  constructor() {
    this.updateSnapshot()
  }

  getConfigReference(): GameConfig {
    return this.configSnapshot
  }

  private updateSnapshot() {
    const currentConfig = this.getConfig()

    // change fields of snapshot without reassigning with "=" to keep same reference
    Object.assign(this.configSnapshot, currentConfig)
  }

  private getConfig(): GameConfig {
    const difficulty = this.difficultyStorage.getCurrentValue()
    const length = this.lengthStorage.getCurrentValue()

    return { difficulty, length }
  }
}
