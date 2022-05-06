import { Injectable } from "@angular/core"
import { Storage } from "@ionic/storage-angular"
import { AppTheme } from "../settings.interface"
import { AppThemeBackgroundConfig } from "./theme-background.config"

@Injectable({
  providedIn: "root",
})
export class AppThemeConfig {
  constructor(public backgroundConfig: AppThemeBackgroundConfig, storage: Storage) {
    storage.create()
  }

  async getTheme(): Promise<AppTheme> {
    const background = await this.getBackground()

    return { background }
  }

  private async getBackground() {
    return await this.backgroundConfig.get()
  }
}
