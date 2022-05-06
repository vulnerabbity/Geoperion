import { Injectable } from "@angular/core"
import { Storage } from "@ionic/storage-angular"
import { AppTheme } from "../settings.interface"
import { AppThemeAccentConfig } from "./theme-accent.config"
import { AppThemeBackgroundConfig } from "./theme-background.config"

@Injectable({
  providedIn: "root",
})
export class AppThemeConfig {
  constructor(
    public backgroundConfig: AppThemeBackgroundConfig,
    public accentConfig: AppThemeAccentConfig,
    storage: Storage,
  ) {
    storage.create()
  }

  async getTheme(): Promise<AppTheme> {
    const background = await this.getBackground()
    const hexAccent = await this.accentConfig.getHexColor()

    return { background, hexAccent }
  }

  private async getBackground() {
    return await this.backgroundConfig.get()
  }
}
