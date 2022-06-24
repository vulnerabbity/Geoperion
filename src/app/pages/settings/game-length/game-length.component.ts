import { Component, Input } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GameLength } from "src/app/features/storage/settings.interface"
import { SettingsPageEvents } from "../settings.events"

@Component({
  selector: "settings__game-length",
  templateUrl: "./game-length.component.html",
  styleUrls: ["./game-length.component.scss"],
})
export class SettingsPageGameLengthComponent {
  @Input("gameLength")
  currentLength: GameLength = "short"

  translation = LanguageServiceInstance.translation.settingsPage.gameLength

  constructor(private events: SettingsPageEvents) {}

  changeGameLength() {
    this.events.general.gameLengthChanged$.next(this.currentLength)
  }
}
