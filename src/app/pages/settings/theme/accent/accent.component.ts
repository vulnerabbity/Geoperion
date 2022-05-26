import { Component, Input } from "@angular/core"
import { getDefaultThemeHexAccent } from "src/app/features/settings/theme/theme-accent.config"
import { SettingsPageEvents } from "../../settings.events"

@Component({
  selector: "settings__accent",
  templateUrl: "./accent.component.html",
  styleUrls: ["./accent.component.scss"],
})
export class SettingsPageAccentComponent {
  @Input("hexAccent")
  hexAccent: string = getDefaultThemeHexAccent()

  constructor(private events: SettingsPageEvents) {}

  changeAccent() {
    this.events.theme.accentChanged$.next({ hexColor: this.hexAccent })
  }
}
