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
    title: "Длина игры",
    short: "коротко",
    medium: "средне",
    long: "долго",
  }

  readonly background = {
    title: "Фон",
    light: "Светлый",
    nord: "Норд",
    github: "Гитхаб",
    retro: "Ретро",
    dark: "Темный",
    black: "Черный",
  }

  readonly accent = {
    title: "Акцент",
  }
}
