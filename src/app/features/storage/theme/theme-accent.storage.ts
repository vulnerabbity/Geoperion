import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"

@Injectable({
  providedIn: "root",
})
export class ThemeAccentStorage extends StorageService<string> {
  protected storageKey = "theme-hex-accent"

  protected defaultValue = getDefaultThemeHexAccent()
}

export function getDefaultThemeHexAccent(): string {
  const defaultIonicBlueAccent = "#3880ff"

  return defaultIonicBlueAccent
}
