import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"

@Injectable({
  providedIn: "root",
})
export class AppThemeAccentConfig {
  private storageKey = "theme-hex-accent"

  constructor(private storage: StorageService) {}

  /**Returns hex color e.g. ffffff for white */
  async getHexColor() {
    const result = await this.storage.get<string>(this.storageKey)

    return result ?? getDefaultThemeHexAccent()
  }

  async setHexColor(color: string) {
    await this.storage.set(this.storageKey, color)
  }
}

export function getDefaultThemeHexAccent(): string {
  const defaultIonicBlueAccent = "3880ff"

  return defaultIonicBlueAccent
}
