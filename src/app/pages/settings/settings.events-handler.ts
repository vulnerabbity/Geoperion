import { Injectable } from "@angular/core"
import { GameStorage } from "src/app/features/storage/game-storage"
import { AppThemeAccentStorage } from "src/app/features/storage/theme/theme-accent.storage"
import { AppThemeBackgroundStorage } from "src/app/features/storage/theme/theme-background.storage"
import { SettingsPageEvents } from "./settings.events"

@Injectable({ providedIn: "root" })
export class SettingsPageEventsHandler {
  constructor(
    private events: SettingsPageEvents,
    private gameStorage: GameStorage,
    private accentStorage: AppThemeAccentStorage,
    private backgroundStorage: AppThemeBackgroundStorage,
  ) {
    this.handleDifficultyChange()
    this.handleGameLengthChange()
    this.handleAccentChange()
    this.handleBackgroundChange()
  }

  private handleDifficultyChange() {
    this.events.general.difficultyChanged$.subscribe(newDifficulty => {
      this.gameStorage.difficulty.set(newDifficulty)
    })
  }

  private handleGameLengthChange() {
    this.events.general.gameLengthChanged$.subscribe(newLength => {
      this.gameStorage.length.set(newLength)
    })
  }

  private handleAccentChange() {
    this.events.theme.accentChanged$.subscribe(({ hexColor }) => {
      this.accentStorage.set(hexColor)
    })
  }

  private handleBackgroundChange() {
    this.events.theme.backgroundChanged$.subscribe(newBackground => {
      this.backgroundStorage.set(newBackground)
    })
  }
}
