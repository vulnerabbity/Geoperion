import { Injectable } from "@angular/core"
import { ReplaySubject } from "rxjs"
import { AppTheme } from "../settings.interface"
import { AppThemeAccentStorage, getDefaultThemeHexAccent } from "./theme-accent.storage"
import { AppThemeBackgroundStorage, getDefaultBackgroundTheme } from "./theme-background.storage"

@Injectable({
  providedIn: "root",
})
export class AppThemeState {
  currentTheme$ = new ReplaySubject<AppTheme>()

  constructor(
    private readonly backgroundStorage: AppThemeBackgroundStorage,
    private readonly accentStorage: AppThemeAccentStorage,
  ) {
    this.init()
  }

  getDefault(): AppTheme {
    const background = getDefaultBackgroundTheme()
    const hexAccent = getDefaultThemeHexAccent()

    return { background, hexAccent }
  }

  private async init() {
    const theme = await this.getTheme()

    this.currentTheme$.next(theme)
  }

  private async getTheme(): Promise<AppTheme> {
    const background = await this.backgroundStorage.get()
    const hexAccent = await this.accentStorage.get()

    return { background, hexAccent }
  }
}
