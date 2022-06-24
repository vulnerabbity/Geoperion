import { Injectable } from "@angular/core"
import { Locale, Locales } from "./language.interface"
import { Translation } from "./translations/en/en.translation"
import { getTranslations } from "./translations/translations"

export const DefaultLocale: Locale = "EN" as const

class LanguageService {
  private currentLocale: Locale = DefaultLocale

  private readonly translations: Translation[] = getTranslations()
  private readonly defaultTranslation = new Translation()

  translation = this.getTranslation()

  setLocale(newLocale: Locale) {
    const isSupportedLocale = Locales.includes(newLocale)
    if (isSupportedLocale) {
      this.currentLocale = newLocale

      this.updateTranslation()
    } else {
      console.warn(`Locale "${newLocale}" is not supported`)
    }
  }

  private updateTranslation() {
    this.translation = this.getTranslation()
  }

  private getTranslation() {
    const translation = this.translations.find(
      translation => translation.localeKey === this.currentLocale,
    )

    return translation ?? this.defaultTranslation
  }
}

export const LanguageServiceInstance = new LanguageService()
