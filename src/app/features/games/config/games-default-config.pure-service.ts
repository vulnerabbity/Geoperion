import { Injectable } from "@angular/core"
import { GameDifficulty, GameLength } from "../../settings/settings.interface"
import { DefaultAnswersLengths, DefaultGameLengths } from "./games-default.interface"

/**
 * Do not use this module in as it is.
 * It is made for testing.
 */
@Injectable({
  providedIn: "root",
})
export class GamesDefaultConfigPureService {
  getAnswersLength(difficulty: GameDifficulty) {
    return DefaultAnswersLengths[difficulty]
  }

  getGameLength(length: GameLength) {
    return DefaultGameLengths[length]
  }
}
