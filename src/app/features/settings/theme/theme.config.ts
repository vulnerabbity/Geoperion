import { Injectable } from "@angular/core"
import { Storage } from "@ionic/storage-angular"
import { AppTheme } from "../settings.interface"
import { AppThemeAccentStorage } from "./theme-accent.storage"
import { AppThemeBackgroundStorage } from "./theme-background.storage"

@Injectable({
  providedIn: "root",
})
export class AppThemeConfig {
  constructor(
    public backgroundStorage: AppThemeBackgroundStorage,
    public accentStorage: AppThemeAccentStorage,
    storage: Storage,
  ) {
    storage.create()
  }

  async getTheme(): Promise<AppTheme> {
    const background = await this.getBackground()
    const hexAccent = await this.accentStorage.getHexColor()

    return { background, hexAccent }
  }

  private async getBackground() {
    return await this.backgroundStorage.get()
  }
}
