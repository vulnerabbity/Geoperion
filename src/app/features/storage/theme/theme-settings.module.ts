import { NgModule } from "@angular/core"
import { AppThemeBackgroundStorage } from "./theme-background.storage"
import { AppThemeState } from "./theme.state"

@NgModule({
  providers: [AppThemeBackgroundStorage, AppThemeState, AppThemeState],
})
export class AppThemeSettingsModule {}
