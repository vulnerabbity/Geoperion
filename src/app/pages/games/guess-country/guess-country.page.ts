import { Component, OnDestroy, OnInit } from "@angular/core"
import { AnswersComponentPage } from "src/app/common/components/game/game-answers/game-answers.component"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { Country } from "src/app/data/countries.data"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesState } from "src/app/features/games/countries/countries-games.state"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsGenerator } from "src/app/features/statistics/statistics-generator"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"

@Component({
  templateUrl: "./guess-country.page.html",
  styleUrls: ["./guess-country.page.scss", "../games.shared-styles.scss"],
})
export class GuessCountryGamePage implements OnInit, OnDestroy {
  get statistics() {
    GameStatisticsGenerator.updateStatisticsFromPages(this._statistics, this.pages)
    return this._statistics
  }

  private _statistics = GameStatistics.getDefault()

  private pages: CountryPage[] = []

  private currentPageIndex = 0

  private stateSub = this.subscribeToState()

  private translation = LanguageServiceInstance.translation

  constructor(private state: CountriesGamesState) {}

  async ngOnInit() {
    await this.startNewGame()
  }

  getTitle(): string {
    return this.translation.gamePage.guessCountryTitle
  }

  getCurrentPageFlag(): string {
    const rightCountry = this.getCurrentRightCountry()

    return getFlagFullPath(rightCountry.flag)
  }

  getAnswersPage(): AnswersComponentPage {
    const currentPage = this.getCurrentPage()

    const answersOptions = currentPage.options.map(option => {
      const optionName = this.translateOption(option)

      return { optionName: optionName }
    })

    return { ...currentPage, options: answersOptions }
  }

  getCurrentRightCountry() {
    const currentPage = this.getCurrentPage()
    const rightAnswerIndex = currentPage.rightAnswerIndex
    return currentPage.options[rightAnswerIndex]
  }

  private translateOption(country: Country): string {
    const code = country.code

    const translatedCountryName = this.translation.countries[code].name ?? ""

    return translatedCountryName
  }

  private getCurrentPage() {
    const currentPage = this.pages[this.currentPageIndex]
    return currentPage
  }

  private async startNewGame() {
    await this.state.startNewState()
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.pages = state.pages
      this.currentPageIndex = state.currentPageIndex
      this._statistics = state.statistics
    })
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }
}
