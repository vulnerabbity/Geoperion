import { Component, OnDestroy, OnInit } from "@angular/core"
import { AnswersComponentPage } from "src/app/common/components/game/game-answers/game-answers.component"
import { getFancyNumberString } from "src/app/common/functions/fancy.functions"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { Country } from "src/app/data/countries.data"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesState } from "src/app/features/games/countries/countries-games.state"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsGenerator } from "src/app/features/statistics/statistics-generator"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"

@Component({
  templateUrl: "./guess-population.page.html",
  styleUrls: ["./guess-population.page.scss", "../games.shared-styles.scss"],
})
export class GuessPopulationGamePage implements OnDestroy, OnInit {
  get statistics() {
    GameStatisticsGenerator.updateStatisticsFromPages(this._statistics, this.pages)
    return this._statistics
  }

  private _statistics = GameStatistics.getDefault()

  private pages: CountryPage[] = []

  private currentPage: CountryPage | undefined = undefined

  private stateSub = this.handleStateUpdate()

  private translation = LanguageServiceInstance.translation.gamePage

  constructor(private gamesState: CountriesGamesState) {}

  ngOnInit(): void {
    this.gamesState.startNewState()
  }

  getAnswersPage(): AnswersComponentPage | undefined {
    const currentPage = this.currentPage
    if (currentPage === undefined) {
      return undefined
    }

    const answersOptions: AnswersComponentPage["options"] = currentPage.options.map(option => {
      return { optionName: this.getFancyPopulation(option.population) }
    })

    return { ...currentPage, options: answersOptions }
  }

  hasCurrentPage() {
    return Boolean(this.currentPage)
  }

  getFlag(): string {
    const currentRightCountry = this.getRightAnswerCountry()

    const flag = currentRightCountry?.flag ?? ""
    return getFlagFullPath(flag)
  }

  getTitle(): string {
    const currentCountry = this.getRightAnswerCountry()
    const currentCountryCode = currentCountry?.code ?? "US"

    const title = this.translation.getGuessPopulationTitle({ countryCode: currentCountryCode })
    return title
  }

  private getFancyPopulation(population: number) {
    const fancyPopulationNumber = getFancyNumberString(population, ",")

    return fancyPopulationNumber
  }

  private getRightAnswerCountry() {
    const currentPage = this.currentPage
    if (!currentPage) {
      return
    }

    const currentCountry = currentPage.options[currentPage.rightAnswerIndex]
    return currentCountry
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  private handleStateUpdate() {
    return this.gamesState.state$.subscribe(state => {
      const {
        pages: newPages,
        currentPageIndex: newCurrentPageIndex,
        statistics: newStatistics,
      } = state

      const newCurrentPage: CountryPage | undefined = newPages[newCurrentPageIndex]

      this.pages = newPages
      this.currentPage = newCurrentPage
      this._statistics = newStatistics
    })
  }
}
