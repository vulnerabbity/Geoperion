import { ReplaySubject } from "rxjs"
import { AppTheme } from "../settings.interface"
import { getDefaultThemeHexAccent } from "./theme-accent.config"
import { getDefaultBackgroundTheme } from "./theme-background.config"

export class AppThemeState {
  theme$ = new ReplaySubject<AppTheme>()

  getDefault(): AppTheme {
    const background = getDefaultBackgroundTheme()
    const hexAccent = getDefaultThemeHexAccent()

    return { background, hexAccent }
  }
}
