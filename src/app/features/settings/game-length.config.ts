import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { GameConfigEvents } from "./game-config.events"
import { GameLength } from "./settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameLengthConfig {
  private storageKey = "game-length"

  constructor(private storage: StorageService, private events: GameConfigEvents) {}

  async get() {
    const result = await this.storage.get<GameLength>(this.storageKey)
    return result ?? "short"
  }

  async set(len: GameLength) {
    await this.storage.set(this.storageKey, len)
    this.events.configChanged$.next()
  }
}
