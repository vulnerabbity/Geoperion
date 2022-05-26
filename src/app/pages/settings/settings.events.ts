import { Injectable } from "@angular/core"
import { ReplaySubject } from "rxjs"
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
    difficultyChanged$: new ReplaySubject<GameDifficulty>(),
    gameLengthChanged$: new ReplaySubject<GameLength>(),
  } as const

  readonly theme = {
    accentChanged$: new ReplaySubject<{ hexColor: string }>(),

    backgroundChanged$: new ReplaySubject<AppBackgroundTheme>(),
  } as const
}
