import { Component, OnDestroy, OnInit } from "@angular/core"
import { GameConfig } from "src/app/features/settings/game-config"
import { GameConfigState } from "src/app/features/settings/game-config.state"
import { GameDifficulty } from "src/app/features/settings/settings.interface"

@Component({
  selector: "settings__difficulty",
  templateUrl: "./difficulty.component.html",
  styleUrls: ["./difficulty.component.scss"],
})
export class SettingsPageDifficultyComponent implements OnDestroy {
  currentDifficulty: GameDifficulty = "easy"

  private stateSub = this.subscribeToState()

  constructor(private config: GameConfig, private state: GameConfigState) {}

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  async set() {
    await this.config.difficulty.set(this.currentDifficulty)
  }

  private subscribeToState() {
    return this.state.config$.subscribe(config => {
      this.currentDifficulty = config.difficulty
    })
  }
}
