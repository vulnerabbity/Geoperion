import { Injectable } from "@angular/core"
import { ReplaySubject } from "rxjs"
import { GameStorage, GameConfig } from "./game-config"
import { GameConfigEvents } from "./game-config.events"

@Injectable({ providedIn: "root" })
export class GameConfigState {
  config$ = new ReplaySubject<GameConfig>()

  constructor(private events: GameConfigEvents, private gameStorage: GameStorage) {
    this.updateOnConfigChange()
  }

  async init() {
    await this.fetchState()
  }

  private async fetchState() {
    const config = await this.gameStorage.getConfig()
    this.config$.next(config)
  }

  private updateOnConfigChange() {
    return this.events.configChanged$.subscribe(async () => {
      const config = await this.gameStorage.getConfig()
      this.config$.next(config)
    })
  }
}
