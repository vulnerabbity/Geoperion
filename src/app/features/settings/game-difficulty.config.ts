import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { GameDifficulty } from "./settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameDifficultyConfig {
  private storageKey = "game-difficulty"

  constructor(private storage: StorageService) {}

  async get() {
    const result = await this.storage.get<GameDifficulty>(this.storageKey)
    return result ?? "easy"
  }

  async set(difficulty: GameDifficulty) {
    await this.storage.set(this.storageKey, difficulty)
  }
}
