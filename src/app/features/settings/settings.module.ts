import { NgModule } from "@angular/core"
import { GameConfig } from "./game-config"
import { GameDifficultyConfig } from "./game-difficulty.config"
import { GameLengthConfig } from "./game-length.config"

@NgModule({
  providers: [GameConfig, GameDifficultyConfig, GameLengthConfig],
})
export class GameSettingsModule {}
