import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { Locale } from "src/app/common/language/language.interface"
import { GameDifficulty, GameLength } from "src/app/features/storage/settings.interface"
import { BackgroundTheme } from "src/app/features/storage/theme/theme-background.storage"

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

    backgroundChanged$: new Subject<BackgroundTheme>(),
  } as const
}
