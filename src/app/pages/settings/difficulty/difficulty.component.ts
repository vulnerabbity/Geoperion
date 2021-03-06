import { Component, Input } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GameDifficulty } from "src/app/features/storage/settings.interface"
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

  private get translation() {
    return LanguageServiceInstance.translation.settingsPage
  }

  constructor(private events: SettingsPageEvents) {}

  changeDifficulty() {
    const newDifficulty = this.currentDifficulty

    this.events.general.difficultyChanged$.next(newDifficulty)
  }

  getVisualDifficulty(difficulty: GameDifficulty) {
    return this.translation.difficulty[difficulty]
  }

  getTitle() {
    return this.translation.difficulty.title
  }
}
