import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { AppBackgroundTheme } from "../settings.interface"

@Injectable({
  providedIn: "root",
})
export class AppThemeBackgroundStorage extends StorageService<AppBackgroundTheme> {
  readonly storageKey = "theme-background"

  readonly defaultValue = getDefaultBackgroundTheme()
}

export function getDefaultBackgroundTheme(): AppBackgroundTheme {
  return "light"
}
