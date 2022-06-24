import { Component } from "@angular/core"
import { Locale } from "src/app/common/language/language.interface"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { SettingsPageEvents } from "../settings.events"

@Component({
  selector: "settings__language",
  templateUrl: "./language.component.html",
})
export class SettingsPageLanguageComponent {
  translation = LanguageServiceInstance.translation.settingsPage.language

  currentLocale: Locale = "EN"

  constructor(private events: SettingsPageEvents) {}

  changeLanguage() {
    const newLanguage = this.currentLocale

    this.events.general.languageChanged$.next(newLanguage)

    this.reloadPage()
  }

  reloadPage() {
    window.location.reload()
  }
}
