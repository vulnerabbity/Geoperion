import { Injectable } from "@angular/core"
import { Storage } from "@ionic/storage-angular"
import { StorageService } from "src/app/common/services/storage.service"
import { GameConfigEvents } from "./game-config.events"
import { GameDifficultyStorage } from "./game-difficulty.storage"
import { GameLengthConfig } from "./game-length.config"
import { GameDifficulty, GameLength } from "./settings.interface"

export interface GameConfigObject {
  difficulty: GameDifficulty
  length: GameLength
}

@Injectable({
  providedIn: "root",
})
export class GameConfig {
  constructor(public difficulty: GameDifficultyStorage, public length: GameLengthConfig) {}

  async getConfig(): Promise<GameConfigObject> {
    const difficulty = await this.difficulty.get()
    const length = await this.length.get()

    return { difficulty, length }
  }
}

export function getTestingGameConfig() {
  const ionStorage = new Storage()
  ionStorage.create()

  const storage = new StorageService(ionStorage)
  const events = new GameConfigEvents()

  const difficultyStorage = new GameDifficultyStorage(storage, events)
  const lengthConfig = new GameLengthConfig(storage, events)

  return new GameConfig(difficultyStorage, lengthConfig)
}
