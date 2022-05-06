import { ReplaySubject } from "rxjs"
import { AppTheme } from "../settings.interface"
import { getDefaultBackgroundTheme } from "./theme-background.config"

export class AppThemeState {
  theme$ = new ReplaySubject<AppTheme>()

  getDefault(): AppTheme {
    const background = getDefaultBackgroundTheme()

    return { background }
  }
}
