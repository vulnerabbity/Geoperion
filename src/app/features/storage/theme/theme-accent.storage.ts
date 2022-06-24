import { Injectable } from "@angular/core"
import { GameStorageService } from "../game-storage.service"

@Injectable({
  providedIn: "root",
})
export class ThemeAccentStorage extends GameStorageService<string> {
  protected storageKey = "theme-hex-accent"

  protected defaultValue = getDefaultThemeHexAccent()
}

export function getDefaultThemeHexAccent(): string {
  const defaultIonicBlueAccent = "#3880ff"

  return defaultIonicBlueAccent
}
