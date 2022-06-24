import { NgModule } from "@angular/core"
import { GameStorage } from "./game-storage"
import { GameDifficultyStorage } from "./general/game-difficulty.storage"
import { GameLengthStorage } from "./general/game-length.storage"

@NgModule({
  providers: [GameStorage, GameDifficultyStorage, GameLengthStorage],
})
export class GameSettingsModule {}
