import { Component, OnDestroy, AfterViewInit } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GameStorage } from "src/app/features/storage/game-storage"

@Component({
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnDestroy {
  get translation() {
    return LanguageServiceInstance.translation.settingsPage
  }

  configSnapshot = this.gameStorage.getConfigReference()

  private configSub = this.updateConfigOnChange()

  constructor(private gameStorage: GameStorage) {}

  ngOnDestroy(): void {
    this.configSub.unsubscribe()
  }

  updateConfigOnChange() {
    return this.gameStorage.configSnapshot$.subscribe(newConfig => {
      this.configSnapshot = newConfig
    })
  }
}
