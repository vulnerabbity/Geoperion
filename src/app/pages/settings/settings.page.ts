import { Component } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"

@Component({
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage {
  translation = LanguageServiceInstance.translation.settingsPage
}
