import { Component, Input } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { getDefaultThemeHexAccent } from "src/app/features/settings/theme/theme-accent.storage"
import { SettingsPageEvents } from "../../settings.events"

@Component({
  selector: "settings__accent",
  templateUrl: "./accent.component.html",
  styleUrls: ["./accent.component.scss"],
})
export class SettingsPageAccentComponent {
  @Input("hexAccent")
  hexAccent: string = getDefaultThemeHexAccent()

  translation = LanguageServiceInstance.translation.settingsPage.accent

  constructor(private events: SettingsPageEvents) {}

  changeAccent() {
    this.events.theme.accentChanged$.next({ hexColor: this.hexAccent })
  }
}
