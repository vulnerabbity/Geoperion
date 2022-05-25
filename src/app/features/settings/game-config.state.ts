import { Injectable } from "@angular/core"
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs"
import { GameConfig, GameConfigObject } from "./game-config"
import { GameConfigEvents } from "./game-config.events"

@Injectable({ providedIn: "root" })
export class GameConfigState {
  config$ = new ReplaySubject<GameConfigObject>()

  constructor(private events: GameConfigEvents, private gameConfig: GameConfig) {
    this.updateOnConfigChange()
  }

  async init() {
    await this.fetchState()
  }

  private async fetchState() {
    const config = await this.gameConfig.getConfig()
    this.config$.next(config)
  }

  private updateOnConfigChange() {
    return this.events.configChanged$.subscribe(async () => {
      const config = await this.gameConfig.getConfig()
      this.config$.next(config)
    })
  }
}
