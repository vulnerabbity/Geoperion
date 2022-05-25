import { Injectable } from "@angular/core"
import { Locale } from "./language.interface"
import { Translation } from "./translations/en.translation"
import { getTranslations } from "./translations/translations"

export const DefaultLocale: Locale = "EN" as const

@Injectable({ providedIn: "root" })
export class LanguageService {
  private currentLocale: Locale = DefaultLocale

  private readonly translations: Translation[] = getTranslations()
  private readonly defaultTranslation = new Translation()

  // Important: should be always same object link
  readonly translation = this.getTranslation()

  setLocale(locale: Locale) {
    this.currentLocale = locale

    this.updateTranslation()
  }

  private updateTranslation() {
    // change translation object without modifying link to use reactivity
    Object.assign(this.translation, this.getTranslation())
  }

  private getTranslation() {
    const translation = this.translations.find(
      translation => translation.localeKey === this.currentLocale,
    )

    return translation ?? this.defaultTranslation
  }
}

export const LanguageServiceInstance = new LanguageService()
