import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { GuessCountrySelectablePage } from "./guess-country.interface"

export interface GuessCountryStateObject {
  pages: GuessCountrySelectablePage[]
  currentPageIndex: number
  progress: number
}

@Injectable({
  providedIn: "root",
})
export class GuessCountryState {
  state$ = new BehaviorSubject(makeGuessCountryGetDefaultState())
}

export function makeGuessCountryGetDefaultState(): GuessCountryStateObject {
  return {
    currentPageIndex: 0,
    pages: [],
    progress: 0,
  }
}
