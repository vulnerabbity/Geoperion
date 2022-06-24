import { Translation } from "./en/en.translation"
import { TranslationRU } from "./ru/ru.translation"

export function getTranslations(): Translation[] {
  const Default = new Translation()
  const RU = new TranslationRU()

  return [Default, RU]
}
