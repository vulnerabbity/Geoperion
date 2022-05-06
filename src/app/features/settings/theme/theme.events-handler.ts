import { Injectable } from "@angular/core"
import { AppThemeConfig } from "./theme.config"
import { AppThemeEventsBus } from "./theme.events-bus"
import { AppThemeState } from "./theme.state"

@Injectable({
  providedIn: "root",
})
export class AppThemeEventsHandler {
  constructor(
    private eventsBus: AppThemeEventsBus,
    private themeConfig: AppThemeConfig,
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
      await this.themeConfig.accentConfig.setHexColor(accent)
    })
  }

  private handleBackgroundChange() {
    return this.eventsBus.changeBackground$.subscribe(async background => {
      await this.themeConfig.backgroundConfig.set(background)
      await this.emitThemeChanged()
    })
  }

  private async emitThemeChanged() {
    await this.fetchTheme()
  }

  private async fetchTheme() {
    const theme = await this.themeConfig.getTheme()
    this.themeState.theme$.next(theme)
  }
}
