import { NgModule } from "@angular/core"
import { GameStorage } from "./game-storage"
import { GameConfigState } from "./game-config.state"
import { AppThemeSettingsModule } from "./theme/theme-settings.module"
import { GameDifficultyStorage } from "./general/game-difficulty.storage"
import { GameLengthStorage } from "./general/game-length.storage"

@NgModule({
  imports: [AppThemeSettingsModule],
  providers: [GameStorage, GameDifficultyStorage, GameLengthStorage],
})
export class GameSettingsModule {
  // init on load
  constructor(private configState: GameConfigState) {
    configState.init()
  }
}
