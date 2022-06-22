import { Injectable } from "@angular/core"
import { GameConfig } from "../../settings/game-config"
import { GameConfigState } from "../../settings/game-config.state"
import { GamesDefaultConfigPureService } from "./games-default-config.pure-service"

@Injectable({
  providedIn: "root",
})
export class GamesDefaultConfigService {
  private configSnapshot: GameConfig = { difficulty: "easy", length: "short" }

  constructor(
    private configState: GameConfigState,
    private pureService: GamesDefaultConfigPureService,
  ) {
    this.subscribeToConfig()
  }

  async getCountriesPartPerDifficulty() {
    return this.pureService.getCountriesPartPerDifficulty(this.configSnapshot.difficulty)
  }

  async getGameLength() {
    return this.pureService.getGameLength(this.configSnapshot.length)
  }

  private subscribeToConfig() {
    return this.configState.config$.subscribe(newConfig => {
      this.configSnapshot = newConfig
    })
  }
}
