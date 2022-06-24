import { Injectable } from "@angular/core"
import { Locale } from "src/app/common/language/language.interface"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { StorageService } from "src/app/common/services/storage.service"

@Injectable({
  providedIn: "root",
})
export class LanguageStorage extends StorageService<Locale> {
  protected readonly defaultValue = "EN"
  protected readonly storageKey = "language"

  test = this.currentValue$.subscribe(newLocale => {
    LanguageServiceInstance.setLocale(newLocale)
  })
}
