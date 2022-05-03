import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { SettingsPageDifficultyComponent } from "./difficulty/difficulty.component"
import { SettingsPage } from "./settings.page"

@NgModule({
  imports: [AppCommonModule],
  declarations: [SettingsPage, SettingsPageDifficultyComponent],
})
export class SettingsPageModule {}
