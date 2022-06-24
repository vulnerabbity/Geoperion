import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { Locale } from "src/app/common/language/language.interface"
import { GameStorageEvents } from "./game-storage.events"
import { GameDifficultyStorage } from "./general/game-difficulty.storage"
import { GameLengthStorage } from "./general/game-length.storage"
import { LanguageStorage } from "./general/language.storage"
import { GameDifficulty, GameLength } from "./settings.interface"
import { ThemeAccentStorage } from "./theme/theme-accent.storage"
import { BackgroundTheme, ThemeBackgroundStorage } from "./theme/theme-background.storage"

export interface GameConfig {
  difficulty: GameDifficulty
  length: GameLength
  hexAccent: string
  backgroundTheme: BackgroundTheme
  language: Locale
}

@Injectable({
  providedIn: "root",
})
export class GameStorage {
  public readonly difficultyStorage = new GameDifficultyStorage()
  public readonly lengthStorage = new GameLengthStorage()
  public readonly accentStorage = new ThemeAccentStorage()
  public readonly backgroundStorage = new ThemeBackgroundStorage()
  public readonly languageStorage = new LanguageStorage()

  public configSnapshot$ = new BehaviorSubject(this.getConfig())

  private configSnapshot = this.getConfig()

  constructor() {
    this.initSnapshot()
    this.updateSnapshotOnChange()
  }

  getConfigReference(): GameConfig {
    return this.configSnapshot
  }

  private async initSnapshot() {
    const currentConfig = await this.getConfigFromStorage()

    this.setNewConfig(currentConfig)
  }

  private async updateSnapshotOnChange() {
    GameStorageEvents.storageChanged$.subscribe(() => {
      const newConfig = this.getConfig()

      this.setNewConfig(newConfig)
    })
  }

  private setNewConfig(newConfig: GameConfig) {
    // change fields of snapshot without reassigning with "=" to keep same reference
    Object.assign(this.configSnapshot, newConfig)

    this.configSnapshot$.next(newConfig)
  }

  private getConfig(): GameConfig {
    const difficulty = this.difficultyStorage.getCurrentValue()
    const length = this.lengthStorage.getCurrentValue()
    const backgroundTheme = this.backgroundStorage.getCurrentValue()
    const hexAccent = this.accentStorage.getCurrentValue()
    const language = this.languageStorage.getCurrentValue()

    return { difficulty, length, hexAccent, backgroundTheme, language }
  }

  private async getConfigFromStorage(): Promise<GameConfig> {
    const difficulty = await this.difficultyStorage.get()
    const length = await this.lengthStorage.get()
    const backgroundTheme = await this.backgroundStorage.get()
    const hexAccent = await this.accentStorage.get()
    const language = await this.languageStorage.get()

    return { difficulty, length, hexAccent, backgroundTheme, language }
  }
}
