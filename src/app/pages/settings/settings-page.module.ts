import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { SettingsPageDifficultyComponent } from "./difficulty/difficulty.component"
import { SettingsPageGameLengthComponent } from "./game-length/game-length.component"
import { SettingsPage } from "./settings.page"
import { SettingsPageBackgroundComponent } from "./theme/background/background.component"

@NgModule({
  imports: [AppCommonModule],
  declarations: [
    SettingsPage,
    SettingsPageDifficultyComponent,
    SettingsPageGameLengthComponent,
    SettingsPageBackgroundComponent,
  ],
})
export class SettingsPageModule {}
