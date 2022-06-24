import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { GameDifficulty } from "../settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameDifficultyStorage extends StorageService<GameDifficulty> {
  protected readonly storageKey = "game-difficulty"

  protected readonly defaultValue: GameDifficulty = "easy"
}
