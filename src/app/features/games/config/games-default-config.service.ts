import { Injectable } from "@angular/core"
import { GameConfig, GameStorage } from "../../storage/game-storage"
import { GamesDefaultConfigPureService } from "./games-default-config.pure-service"

@Injectable({
  providedIn: "root",
})
export class GamesDefaultConfigService {
  private configSnapshot: GameConfig = this.gameStorage.getConfigReference()

  constructor(
    private pureService: GamesDefaultConfigPureService,
    private gameStorage: GameStorage,
  ) {
    this.configSnapshot = this.gameStorage.getConfigReference()
  }

  async getCountriesPartPerDifficulty() {
    return this.pureService.getCountriesPartPerDifficulty(this.configSnapshot.difficulty)
  }

  async getGameLength() {
    return this.pureService.getGameLength(this.configSnapshot.length)
  }
}
