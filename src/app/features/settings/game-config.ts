import { Injectable } from "@angular/core"
import { Storage } from "@ionic/storage-angular"
import { StorageService } from "src/app/common/services/storage.service"
import { GameDifficultyConfig } from "./game-difficulty.config"
import { GameLengthConfig } from "./game-length.config"

@Injectable({
  providedIn: "root",
})
export class GameConfig {
  constructor(public difficulty: GameDifficultyConfig, public length: GameLengthConfig) {}
}

export function getTestingGameConfig() {
  const ionStorage = new Storage()
  ionStorage.create()

  const storage = new StorageService(ionStorage)
  const difficultyConfig = new GameDifficultyConfig(storage)
  const lengthConfig = new GameLengthConfig(storage)

  return new GameConfig(difficultyConfig, lengthConfig)
}
