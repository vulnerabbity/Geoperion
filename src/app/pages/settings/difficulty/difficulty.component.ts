import { Component, OnDestroy, OnInit } from "@angular/core"
import { LanguageService } from "src/app/common/language/language.service"
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

  difficulties: GameDifficulty[] = ["easy", "medium", "hard"]

  private stateSub = this.subscribeToState()

  constructor(
    private config: GameConfig,
    private configState: GameConfigState,
    private languageService: LanguageService,
  ) {}

  getVisualDifficulty(difficulty: GameDifficulty) {
    return this.getTranslation().settings.difficulty[difficulty]
  }

  getTitle() {
    return this.getTranslation().settings.difficulty.difficulty
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  async set() {
    await this.config.difficulty.set(this.currentDifficulty)
  }

  private getTranslation() {
    return this.languageService.translation
  }

  private subscribeToState() {
    return this.configState.config$.subscribe(newConfig => {
      this.currentDifficulty = newConfig.difficulty
    })
  }
}
