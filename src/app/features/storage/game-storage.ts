import { Injectable } from "@angular/core"
import { GameDifficultyStorage } from "./general/game-difficulty.storage"
import { GameLengthStorage } from "./general/game-length.storage"
import { GameDifficulty, GameLength } from "./settings.interface"
import { ThemeAccentStorage } from "./theme/theme-accent.storage"
import { BackgroundTheme, ThemeBackgroundStorage } from "./theme/theme-background.storage"

export interface GameConfig {
  difficulty: GameDifficulty
  length: GameLength
  hexAccent: string
  backgroundTheme: BackgroundTheme
}

@Injectable({
  providedIn: "root",
})
export class GameStorage {
  public readonly difficultyStorage = new GameDifficultyStorage()
  public readonly lengthStorage = new GameLengthStorage()
  public readonly accentStorage = new ThemeAccentStorage()
  public readonly backgroundStorage = new ThemeBackgroundStorage()

  private configSnapshot = this.getConfig()

  constructor() {
    this.initSnapshot()
  }

  getConfigReference(): GameConfig {
    return this.configSnapshot
  }

  private async initSnapshot() {
    const currentConfig = await this.getConfigFromStorage()

    // change fields of snapshot without reassigning with "=" to keep same reference
    Object.assign(this.configSnapshot, currentConfig)
  }

  private getConfig(): GameConfig {
    const difficulty = this.difficultyStorage.getCurrentValue()
    const length = this.lengthStorage.getCurrentValue()
    const backgroundTheme = this.backgroundStorage.getCurrentValue()
    const hexAccent = this.accentStorage.getCurrentValue()

    return { difficulty, length, hexAccent, backgroundTheme }
  }

  private async getConfigFromStorage(): Promise<GameConfig> {
    const difficulty = await this.difficultyStorage.get()
    const length = await this.lengthStorage.get()
    const backgroundTheme = await this.backgroundStorage.get()
    const hexAccent = await this.accentStorage.get()

    return { difficulty, length, hexAccent, backgroundTheme }
  }
}
