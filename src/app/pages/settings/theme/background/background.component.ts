import { Component, OnDestroy, OnInit } from "@angular/core"
import { AppBackgroundTheme } from "src/app/features/settings/settings.interface"
import { AppThemeEventsBus } from "src/app/features/settings/theme/theme.events-bus"
import { AppThemeState } from "src/app/features/settings/theme/theme.state"

@Component({
  selector: "settings__background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class SettingsPageBackgroundComponent implements OnDestroy {
  background: AppBackgroundTheme = "light"

  private themeSub = this.subscribeToTheme()

  constructor(private themeEventsBus: AppThemeEventsBus, private themeState: AppThemeState) {}

  ngOnDestroy(): void {
    this.themeSub.unsubscribe()
  }

  change() {
    this.themeEventsBus.changeBackground$.next(this.background)
  }

  private subscribeToTheme() {
    return this.themeState.theme$.subscribe(theme => {
      this.background = theme.background
    })
  }
}
