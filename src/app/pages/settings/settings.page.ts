import { Component, OnDestroy, OnInit } from "@angular/core"
import { LanguageService, LanguageServiceInstance } from "src/app/common/language/language.service"

@Component({
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage {
  private translation = LanguageServiceInstance.translation

  getTitle() {
    return this.translation.settings.settings
  }
}
