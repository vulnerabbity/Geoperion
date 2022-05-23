import { Component, OnDestroy, OnInit } from "@angular/core"
import { LanguageService } from "src/app/common/language/language.service"
import { Translation } from "src/app/common/language/translations/en.translation"

@Component({
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage {
  private translation = this.languageService.translation

  constructor(private languageService: LanguageService) {}

  getTitle() {
    return this.translation.settings.settings
  }
}
