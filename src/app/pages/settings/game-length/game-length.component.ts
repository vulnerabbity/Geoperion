import { Component, OnDestroy } from "@angular/core"
import { GameConfig } from "src/app/features/settings/game-config"
import { GameConfigState } from "src/app/features/settings/game-config.state"
import { GameLength } from "src/app/features/settings/settings.interface"

@Component({
  selector: "settings__game-length",
  templateUrl: "./game-length.component.html",
  styleUrls: ["./game-length.component.scss"],
})
export class SettingsPageGameLengthComponent implements OnDestroy {
  currentLength: GameLength = "short"

  private configSub = this.subscribeToConfig()

  constructor(private configState: GameConfigState, private config: GameConfig) {}

  ngOnDestroy(): void {
    this.configSub.unsubscribe()
  }

  set() {
    this.config.length.set(this.currentLength)
  }

  private subscribeToConfig() {
    return this.configState.config$.subscribe(config => {
      this.currentLength = config.length
    })
  }
}
