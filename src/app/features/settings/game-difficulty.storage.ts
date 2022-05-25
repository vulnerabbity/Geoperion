import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { GameConfigEvents } from "./game-config.events"
import { GameDifficulty } from "./settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameDifficultyStorage {
  private storageKey = "game-difficulty"

  constructor(private storage: StorageService, private events: GameConfigEvents) {}

  async get() {
    const result = await this.storage.get<GameDifficulty>(this.storageKey)
    return result ?? "easy"
  }

  async set(difficulty: GameDifficulty) {
    await this.storage.set(this.storageKey, difficulty)
    this.events.configChanged$.next()
  }
}
