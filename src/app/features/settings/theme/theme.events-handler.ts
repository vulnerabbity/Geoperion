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
    this.handleBackgroundChanged()
  }

  private handleBackgroundChanged() {
    this.eventsBus.changeBackground$.subscribe(async background => {
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
