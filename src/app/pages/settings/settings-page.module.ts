import { NgModule } from "@angular/core"
import { ColorPickerModule } from "ngx-color-picker"
import { AppCommonModule } from "src/app/common/common.module"
import { SettingsPageDifficultyComponent } from "./difficulty/difficulty.component"
import { SettingsPageGameLengthComponent } from "./game-length/game-length.component"
import { SettingsPageLanguageComponent } from "./language/language.component"
import { SettingsPageEventsHandler } from "./settings.events-handler"
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
    SettingsPageLanguageComponent,
  ],
})
export class SettingsPageModule {
  // init on module load
  constructor(private eventsHandler: SettingsPageEventsHandler) {}
}
