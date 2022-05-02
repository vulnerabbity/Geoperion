import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { SettingsPage } from "./settings.page"

@NgModule({
  imports: [AppCommonModule],
  declarations: [SettingsPage],
})
export class SettingsPageModule {}
