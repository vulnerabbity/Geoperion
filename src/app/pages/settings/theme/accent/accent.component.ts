import { Component } from "@angular/core"
import { AppThemeEventsBus } from "src/app/features/settings/theme/theme.events-bus"
import { AppThemeState } from "src/app/features/settings/theme/theme.state"

@Component({
  selector: "settings__accent",
  templateUrl: "./accent.component.html",
  styleUrls: ["./accent.component.scss"],
})
export class SettingsPageAccentComponent {
  private accent: string = this.getDefaultBackground()

  constructor(private themeState: AppThemeState, private themeEvents: AppThemeEventsBus) {}

  getAccent() {
    const isFirstHash = this.accent[0] === "#"
    if (isFirstHash === false) {
      return `#${this.accent}`
    }
    return this.accent
  }

  change() {
    this.themeEvents.changeAccent$.next({ hexColor: "ccc" })
  }

  private getDefaultBackground() {
    return this.themeState.getDefault().hexAccent
  }
}
