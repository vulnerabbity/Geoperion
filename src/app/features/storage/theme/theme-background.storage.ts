import { Injectable } from "@angular/core"
import { GameStorageService } from "../game-storage.service"

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
export class ThemeBackgroundStorage extends GameStorageService<BackgroundTheme> {
  readonly storageKey = "theme-background"

  readonly defaultValue = getDefaultBackgroundTheme()
}

export function getDefaultBackgroundTheme(): BackgroundTheme {
  return "light"
}
