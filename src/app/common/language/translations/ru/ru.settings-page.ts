import { TranslationSettingsPage } from "../en/en.settings-page"

export class TranslationRuSettingsPage implements TranslationSettingsPage {
  readonly title = "Настройки"

  readonly difficulty = {
    title: "сложность",
    easy: "легко",
    medium: "средне",
    hard: "сложно",
  }

  readonly gameLength = {
    short: "коротко",
    medium: "средне",
    long: "долго",
  }
}
