import { Component, Input } from "@angular/core"
import { Locale } from "src/app/common/language/language.interface"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { SettingsPageEvents } from "../settings.events"

@Component({
  selector: "settings__language",
  templateUrl: "./language.component.html",
})
export class SettingsPageLanguageComponent {
  get translation() {
    return LanguageServiceInstance.translation.settingsPage.language
  }

  @Input()
  currentLocale: Locale = "EN"

  constructor(private events: SettingsPageEvents) {}

  changeLanguage($event: any) {
    const newLanguage = this.currentLocale

    this.events.general.languageChanged$.next(newLanguage)

    // Ionic triggers (ionChange) event even if ngModel changed
    // code below executes only if user clicked to change language
    // otherwise page in chrome will be in in infinite reloading
    const classList: string[] = $event.target.className.split(" ")
    const isManualEvent = classList.includes("ion-touched")
    if (isManualEvent) {
      this.reloadPage()
    }
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload()
    })
  }
}
