import { Injectable } from "@angular/core"
import { GameDifficultyStorage } from "./game-difficulty.storage"
import { GameLengthStorage } from "./game-length.storage"
import { GameDifficulty, GameLength } from "./settings.interface"

export interface GameConfig {
  difficulty: GameDifficulty
  length: GameLength
}

@Injectable({
  providedIn: "root",
})
export class GameStorage {
  constructor(public difficulty: GameDifficultyStorage, public length: GameLengthStorage) {}

  async getConfig(): Promise<GameConfig> {
    const difficulty = await this.difficulty.get()
    const length = await this.length.get()

    return { difficulty, length }
  }
}
