import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { Locale } from "src/app/common/language/language.interface"
import {
  AppBackgroundTheme,
  GameDifficulty,
  GameLength,
} from "src/app/features/settings/settings.interface"

/**
 * Events between settings sub components.
 * Used to make them short as possible.
 */
@Injectable({ providedIn: "root" })
export class SettingsPageEvents {
  readonly general = {
    difficultyChanged$: new Subject<GameDifficulty>(),
    gameLengthChanged$: new Subject<GameLength>(),
    languageChanged$: new Subject<Locale>(),
  } as const

  readonly theme = {
    accentChanged$: new Subject<{ hexColor: string }>(),

    backgroundChanged$: new Subject<AppBackgroundTheme>(),
  } as const
}
