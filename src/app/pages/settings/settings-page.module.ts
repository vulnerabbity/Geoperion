import { NgModule } from "@angular/core"
import { ColorPickerModule } from "ngx-color-picker"
import { AppCommonModule } from "src/app/common/common.module"
import { SettingsPageDifficultyComponent } from "./difficulty/difficulty.component"
import { SettingsPageGameLengthComponent } from "./game-length/game-length.component"
import { SettingsPage } from "./settings.page"
import { SettingsPageAccentComponent } from "./theme/accent/accent.component"
import { SettingsPageBackgroundComponent } from "./theme/background/background.component"

@NgModule({
  imports: [AppCommonModule, ColorPickerModule],
  declarations: [
    SettingsPage,
    SettingsPageDifficultyComponent,
    SettingsPageGameLengthComponent,
    SettingsPageBackgroundComponent,
    SettingsPageAccentComponent,
  ],
})
export class SettingsPageModule {}
