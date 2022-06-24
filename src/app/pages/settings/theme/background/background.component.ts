import { Component, Input } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { AppBackgroundTheme } from "src/app/features/storage/settings.interface"
import { getDefaultBackgroundTheme } from "src/app/features/storage/theme/theme-background.storage"
import { SettingsPageEvents } from "../../settings.events"

@Component({
  selector: "settings__background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class SettingsPageBackgroundComponent {
  @Input("background")
  background: AppBackgroundTheme = getDefaultBackgroundTheme()

  translation = LanguageServiceInstance.translation.settingsPage.background

  constructor(private events: SettingsPageEvents) {}

  changeBackground() {
    const newBackground = this.background

    this.events.theme.backgroundChanged$.next(newBackground)
  }
}
