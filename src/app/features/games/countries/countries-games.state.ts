import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { GameStatistics } from "../../statistics/statistics"
import { GameStatisticsGenerator } from "../../statistics/statistics-generator"
import { CountriesGamesService } from "./countries-games.service"

export interface CountriesGamesStateOject {
  pages: CountryPage[]
  currentPageIndex: number
  statistics: GameStatistics
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
    const statistics = GameStatisticsGenerator.generateFromPages(pages)

    const newState = {
      ...makeCountriesGamesState(),
      pages,
      statistics,
    }
    this.state$.next(newState)
  }
}

export function makeCountriesGamesState(): CountriesGamesStateOject {
  return {
    currentPageIndex: 0,
    pages: [],
    statistics: GameStatistics.getDefault(),
  }
}
