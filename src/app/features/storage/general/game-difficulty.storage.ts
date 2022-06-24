import { Injectable } from "@angular/core"
import { GameStorageService } from "../game-storage.service"
import { GameDifficulty } from "../settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameDifficultyStorage extends GameStorageService<GameDifficulty> {
  protected readonly storageKey = "game-difficulty"

  protected readonly defaultValue: GameDifficulty = "easy"
}
