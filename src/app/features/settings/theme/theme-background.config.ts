import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { AppBackgroundTheme } from "../settings.interface"

@Injectable({
  providedIn: "root",
})
export class AppThemeBackgroundConfig {
  private readonly storageKey = "theme-background"

  constructor(private storage: StorageService) {}

  async get() {
    const result = await this.storage.get<AppBackgroundTheme>(this.storageKey)

    return result ?? getDefaultBackgroundTheme()
  }

  async set(background: AppBackgroundTheme) {
    await this.storage.set(this.storageKey, background)
  }
}

export function getDefaultBackgroundTheme(): AppBackgroundTheme {
  return "light"
}
