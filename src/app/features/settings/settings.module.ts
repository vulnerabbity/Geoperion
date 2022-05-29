import { NgModule } from "@angular/core"
import { GameConfig } from "./game-config"
import { GameConfigState } from "./game-config.state"
import { GameDifficultyStorage } from "./game-difficulty.storage"
import { GameLengthStorage } from "./game-length.config"
import { AppThemeSettingsModule } from "./theme/theme-settings.module"

@NgModule({
  imports: [AppThemeSettingsModule],
  providers: [GameConfig, GameDifficultyStorage, GameLengthStorage],
})
export class GameSettingsModule {
  // init on load
  constructor(private configState: GameConfigState) {
    configState.init()
  }
}
