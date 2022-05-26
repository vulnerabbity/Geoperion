import { NgModule } from "@angular/core"
import { AppThemeBackgroundStorage } from "./theme-background.storage"
import { AppThemeStorage } from "./theme.storage"
import { AppThemeEventsBus } from "./theme.events-bus"
import { AppThemeEventsHandler } from "./theme.events-handler"
import { AppThemeState } from "./theme.state"

@NgModule({
  providers: [AppThemeBackgroundStorage, AppThemeState, AppThemeEventsBus, AppThemeState],
})
export class AppThemeSettingsModule {
  // init on module load
  constructor(eventsHandler: AppThemeEventsHandler) {}
}
