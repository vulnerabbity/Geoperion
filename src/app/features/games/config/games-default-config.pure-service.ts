import { Injectable } from "@angular/core"
import { GameDifficulty, GameLength } from "../../storage/settings.interface"
import { CountriesPartsPerDifficulty, DefaultGameLengths } from "./games-default.interface"

/**
 * Do not use this service in as it is.
 * It is made for testing.
 */
@Injectable({
  providedIn: "root",
})
export class GamesDefaultConfigPureService {
  getCountriesPartPerDifficulty(difficulty: GameDifficulty) {
    return CountriesPartsPerDifficulty[difficulty]
  }

  getGameLength(length: GameLength) {
    return DefaultGameLengths[length]
  }
}
