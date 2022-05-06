import { NgModule } from "@angular/core"
import { Storage as IonStorage } from "@ionic/storage-angular"
import { GameConfig } from "./game-config"
import { GameConfigState } from "./game-config.state"
import { GameDifficultyConfig } from "./game-difficulty.config"
import { GameLengthConfig } from "./game-length.config"
import { AppThemeSettingsModule } from "./theme/theme-settings.module"

@NgModule({
  imports: [AppThemeSettingsModule],
  providers: [GameConfig, GameDifficultyConfig, GameLengthConfig],
})
export class GameSettingsModule {
  // init on load
  constructor(private storage: IonStorage, private configState: GameConfigState) {
    storage.create()
    configState.init()
  }
}
