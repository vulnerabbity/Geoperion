import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"

export interface GuessCountryStateObject {
  pages: CountryPage[]
  currentPageIndex: number
}

@Injectable({
  providedIn: "root",
})
export class GuessCountryState {
  state$ = new BehaviorSubject(makeGuessCountryGetDefaultState())

  init$ = new Subject<void>()
}

export function makeGuessCountryGetDefaultState(): GuessCountryStateObject {
  return {
    currentPageIndex: 0,
    pages: [],
  }
}
