import { Injectable } from "@angular/core"
import { AppThemeStorage } from "./theme.storage"
import { AppThemeEventsBus } from "./theme.events-bus"
import { AppThemeState } from "./theme.state"

@Injectable({
  providedIn: "root",
})
export class AppThemeEventsHandler {
  constructor(
    private eventsBus: AppThemeEventsBus,
    private themeStorage: AppThemeStorage,
    private themeState: AppThemeState,
  ) {
    this.startHandling()
    this.fetchTheme()
  }

  private startHandling() {
    this.handleBackgroundChange()
    this.handleAccentChange()
  }

  private handleAccentChange() {
    return this.eventsBus.changeAccent$.subscribe(async ({ hexColor: accent }) => {
      // TODO: Add constraint
      await this.themeStorage.accentStorage.setHexColor(accent)
      await this.emitThemeChanged()
    })
  }

  private handleBackgroundChange() {
    return this.eventsBus.changeBackground$.subscribe(async background => {
      await this.themeStorage.backgroundStorage.set(background)
      await this.emitThemeChanged()
    })
  }

  private async emitThemeChanged() {
    await this.fetchTheme()
  }

  private async fetchTheme() {
    const theme = await this.themeStorage.getTheme()
    this.themeState.theme$.next(theme)
  }
}
