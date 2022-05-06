import { Component } from "@angular/core"
import { AppThemeState } from "src/app/features/settings/theme/theme.state"

// to map background to class name
enum CssBackgroundClasses {
  light = "light-background-theme",
  dark = "dark-background-theme",
  black = "black-background-theme",
}

@Component({
  selector: "root__theme-definer",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.scss"],
})
export class RootThemeDefinerComponent {
  private theme = this.themeState.getDefault()

  private lastBackground = CssBackgroundClasses.light

  private themeSub = this.subscribeToTheme()

  constructor(private themeState: AppThemeState) {}

  setBackground() {
    this.removeClass(this.lastBackground)
    const backgroundClass = CssBackgroundClasses[this.theme.background]
    this.lastBackground = backgroundClass
    this.addClass(backgroundClass)
  }

  private addClass(className: string) {
    document.body.classList.toggle(className, true)
  }

  private removeClass(className: string) {
    document.body.classList.toggle(className, false)
  }

  private subscribeToTheme() {
    return this.themeState.theme$.subscribe(theme => {
      this.theme = theme
      this.setBackground()
    })
  }
}
