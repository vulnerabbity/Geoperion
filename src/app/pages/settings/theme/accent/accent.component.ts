import { Component, OnDestroy } from "@angular/core"
import { Subject, timer } from "rxjs"
import { debounce } from "rxjs/operators"
import { AppThemeEventsBus } from "src/app/features/settings/theme/theme.events-bus"
import { AppThemeState } from "src/app/features/settings/theme/theme.state"

@Component({
  selector: "settings__accent",
  templateUrl: "./accent.component.html",
  styleUrls: ["./accent.component.scss"],
})
export class SettingsPageAccentComponent implements OnDestroy {
  accent: string = this.getDefaultBackground()

  private accentChanged$ = new Subject<void>()

  private onAccentChangeSub = this.saveAccentOnChange()
  private themeStateSub = this.subscribeToTheme()

  constructor(private themeState: AppThemeState, private themeEvents: AppThemeEventsBus) {}

  ngOnDestroy(): void {
    this.onAccentChangeSub.unsubscribe()
    this.themeStateSub.unsubscribe()
  }

  emitAccentChanged() {
    this.accentChanged$.next()
  }

  private saveAccent() {
    this.themeEvents.changeAccent$.next({ hexColor: this.accent })
  }

  private getDefaultBackground() {
    return this.themeState.getDefault().hexAccent
  }

  private subscribeToTheme() {
    return this.themeState.theme$.subscribe(theme => {
      this.accent = theme.hexAccent
    })
  }

  private saveAccentOnChange() {
    // if many events: save every 100ms
    const debouncedAccentChange$ = this.accentChanged$.pipe(debounce(() => timer(100)))

    return debouncedAccentChange$.subscribe(() => {
      this.saveAccent()
    })
  }
}
