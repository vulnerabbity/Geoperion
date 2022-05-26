import { Component, Input } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GameDifficulty } from "src/app/features/settings/settings.interface"
import { SettingsPageEvents } from "../settings.events"

@Component({
  selector: "settings__difficulty",
  templateUrl: "./difficulty.component.html",
  styleUrls: ["./difficulty.component.scss"],
})
export class SettingsPageDifficultyComponent {
  @Input("difficulty")
  currentDifficulty: GameDifficulty = "easy"

  difficulties: GameDifficulty[] = ["easy", "medium", "hard"]

  private translation = LanguageServiceInstance.translation

  constructor(private events: SettingsPageEvents) {}

  changeDifficulty() {
    const newDifficulty = this.currentDifficulty

    this.events.general.difficultyChanged$.next(newDifficulty)
  }

  getVisualDifficulty(difficulty: GameDifficulty) {
    return this.translation.settings.difficulty[difficulty]
  }

  getTitle() {
    return this.translation.settings.difficulty.difficulty
  }
}
