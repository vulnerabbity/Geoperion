import { NgModule } from "@angular/core"
import { AppThemeBackgroundConfig } from "./theme-background.config"
import { AppThemeConfig } from "./theme.config"
import { AppThemeEventsBus } from "./theme.events-bus"
import { AppThemeEventsHandler } from "./theme.events-handler"
import { AppThemeState } from "./theme.state"

@NgModule({
  providers: [AppThemeBackgroundConfig, AppThemeConfig, AppThemeEventsBus, AppThemeState],
})
export class AppThemeSettingsModule {
  // init on module load
  constructor(eventsHandler: AppThemeEventsHandler) {}
}
