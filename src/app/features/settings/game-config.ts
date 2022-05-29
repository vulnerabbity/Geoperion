import { Injectable } from "@angular/core"
import { GameDifficultyStorage } from "./game-difficulty.storage"
import { GameLengthStorage } from "./game-length.config"
import { GameDifficulty, GameLength } from "./settings.interface"

export interface GameConfigObject {
  difficulty: GameDifficulty
  length: GameLength
}

@Injectable({
  providedIn: "root",
})
export class GameConfig {
  constructor(public difficulty: GameDifficultyStorage, public length: GameLengthStorage) {}

  async getConfig(): Promise<GameConfigObject> {
    const difficulty = await this.difficulty.get()
    const length = await this.length.get()

    return { difficulty, length }
  }
}
