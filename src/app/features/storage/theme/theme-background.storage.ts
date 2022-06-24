import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"

export enum BackgroundThemes {
  Light = "light",
  Dark = "dark",
  Black = "black",
  Nord = "nord",
  Github = "github",
  Retro = "retro",
}

export type BackgroundTheme = `${BackgroundThemes}`

@Injectable({
  providedIn: "root",
})
export class ThemeBackgroundStorage extends StorageService<BackgroundTheme> {
  readonly storageKey = "theme-background"

  readonly defaultValue = getDefaultBackgroundTheme()
}

export function getDefaultBackgroundTheme(): BackgroundTheme {
  return "light"
}
