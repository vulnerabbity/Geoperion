import { Component } from "@angular/core"
import { GameStorage } from "src/app/features/storage/game-storage"
import { BackgroundTheme } from "src/app/features/storage/theme/theme-background.storage"

// to map background to class name
enum CssBackgroundClasses {
  light = "light-background-theme",
  nord = "nord-background-theme",
  github = "github-background-theme",
  retro = "retro-background-theme",
  dark = "dark-background-theme",
  black = "black-background-theme",
}

@Component({
  selector: "root__theme-definer",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.scss"],
})
export class RootThemeDefinerComponent {
  private lastBackgroundClass = CssBackgroundClasses.light

  private currentBackground: BackgroundTheme = "light"

  public hexAccent = this.gameStorage.accentStorage.getCurrentValue()

  constructor(private gameStorage: GameStorage) {
    this.subscribeToTheme()
  }

  setBackground() {
    this.removeClass(this.lastBackgroundClass)
    const newBackgroundClass = CssBackgroundClasses[this.currentBackground]
    this.lastBackgroundClass = newBackgroundClass

    this.addClass(newBackgroundClass)
  }

  private addClass(className: string) {
    document.body.classList.toggle(className, true)
  }

  private removeClass(className: string) {
    document.body.classList.toggle(className, false)
  }

  private subscribeToTheme() {
    this.gameStorage.configSnapshot$.subscribe(({ backgroundTheme, hexAccent }) => {
      this.currentBackground = backgroundTheme
      this.hexAccent = hexAccent
      this.setBackground()
    })
  }
}
