import { NgModule } from "@angular/core"
import { AppThemeBackgroundStorage } from "./theme-background.storage"
import { AppThemeConfig } from "./theme.config"
import { AppThemeEventsBus } from "./theme.events-bus"
import { AppThemeEventsHandler } from "./theme.events-handler"
import { AppThemeState } from "./theme.state"

@NgModule({
  providers: [AppThemeBackgroundStorage, AppThemeConfig, AppThemeEventsBus, AppThemeState],
})
export class AppThemeSettingsModule {
  // init on module load
  constructor(eventsHandler: AppThemeEventsHandler) {}
}
