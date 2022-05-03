import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { GuessCountryDifficulty } from "./guess-country.interface"

@Injectable({
  providedIn: "root",
})
export class GuessCountryGameEventsBus {
  startNewGame$ = new Subject<void>()

  changeDifficulty$ = new Subject<GuessCountryDifficulty>()

  changeGameLength$ = new Subject()

  changeConditionalOption$ = new Subject()

  selectAnswer$ = new Subject<{ answerIndex: number }>()

  toPreviousPage$ = new Subject<void>()

  toNextPage$ = new Subject<void>()

  exit$ = new Subject<void>()
}
