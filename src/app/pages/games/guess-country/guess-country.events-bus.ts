import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { GameDifficulty } from "src/app/features/settings/settings.interface"

@Injectable({
  providedIn: "root",
})
export class GuessCountryGameEventsBus {
  startNewGame$ = new Subject<void>()

  changeDifficulty$ = new Subject<GameDifficulty>()

  changeGameLength$ = new Subject()

  changeConditionalOption$ = new Subject()

  toPreviousPage$ = new Subject<void>()

  toNextPage$ = new Subject<void>()

  exit$ = new Subject<void>()
}
