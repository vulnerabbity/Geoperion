import { Injectable } from "@angular/core"
import { Locale } from "src/app/common/language/language.interface"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GameStorageService } from "../game-storage.service"

@Injectable({
  providedIn: "root",
})
export class LanguageStorage extends GameStorageService<Locale> {
  protected readonly defaultValue = "EN"
  protected readonly storageKey = "language"

  constructor() {
    super()
    this.updateLanguageOnChange()
  }

  updateLanguageOnChange() {
    return this.currentValue$.subscribe(newLocale => {
      LanguageServiceInstance.setLocale(newLocale)
    })
  }
}
