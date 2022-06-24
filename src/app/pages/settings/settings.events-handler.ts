import { Injectable } from "@angular/core"
import { GameStorage } from "src/app/features/storage/game-storage"
import { SettingsPageEvents } from "./settings.events"

@Injectable({ providedIn: "root" })
export class SettingsPageEventsHandler {
  constructor(private events: SettingsPageEvents, private gameStorage: GameStorage) {
    this.handleDifficultyChange()
    this.handleGameLengthChange()
    this.handleAccentChange()
    this.handleBackgroundChange()
    this.handleLanguageChange()
  }

  private handleDifficultyChange() {
    this.events.general.difficultyChanged$.subscribe(newDifficulty => {
      this.gameStorage.difficultyStorage.set(newDifficulty)
    })
  }

  private handleGameLengthChange() {
    this.events.general.gameLengthChanged$.subscribe(newLength => {
      this.gameStorage.lengthStorage.set(newLength)
    })
  }

  private handleAccentChange() {
    this.events.theme.accentChanged$.subscribe(({ hexColor }) => {
      this.gameStorage.accentStorage.set(hexColor)
    })
  }

  private handleBackgroundChange() {
    this.events.theme.backgroundChanged$.subscribe(newBackground => {
      this.gameStorage.backgroundStorage.set(newBackground)
    })
  }

  private handleLanguageChange() {
    this.events.general.languageChanged$.subscribe(newLanguage => {
      this.gameStorage.languageStorage.set(newLanguage)
    })
  }
}
