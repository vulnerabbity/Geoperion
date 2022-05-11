import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesService } from "./countries-games.service"

export interface CountriesGamesStateOject {
  pages: CountryPage[]
  currentPageIndex: number
}

@Injectable({
  providedIn: "root",
})
export class CountriesGamesState {
  state$ = new BehaviorSubject(makeCountriesGamesState())

  constructor(private countriesGamesService: CountriesGamesService) {
    this.startNewState()
  }

  async startNewState() {
    const pages = await this.countriesGamesService.getPages()
    const newState = makeCountriesGamesState()
    newState.pages = pages
    this.state$.next(newState)
  }
}

export function makeCountriesGamesState(): CountriesGamesStateOject {
  return {
    currentPageIndex: 0,
    pages: [],
  }
}
