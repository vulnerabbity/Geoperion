import { Component, Input } from "@angular/core"
import { AppBackgroundTheme } from "src/app/features/settings/settings.interface"
import { getDefaultBackgroundTheme } from "src/app/features/settings/theme/theme-background.config"
import { SettingsPageEvents } from "../../settings.events"

@Component({
  selector: "settings__background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class SettingsPageBackgroundComponent {
  @Input("background")
  background: AppBackgroundTheme = getDefaultBackgroundTheme()

  constructor(private events: SettingsPageEvents) {}

  changeBackground() {
    const newBackground = this.background

    this.events.theme.backgroundChanged$.next(newBackground)
  }
}
