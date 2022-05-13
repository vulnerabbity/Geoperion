import { Component, OnDestroy, OnInit } from "@angular/core"
import { AnswersComponentPage } from "src/app/common/components/game/game-answers/game-answers.component"
import { getFancyNumberString } from "src/app/common/functions/fancy.functions"
import { Country } from "src/app/data/countries.data"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesState } from "src/app/features/games/countries/countries-games.state"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"

@Component({
  templateUrl: "./guess-population.page.html",
  styleUrls: ["./guess-population.page.scss", "../games.shared-styles.scss"],
})
export class GuessPopulationGamePage implements OnDestroy, OnInit {
  private pages: CountryPage[] = []
  private currentPage: CountryPage | undefined = undefined

  private stateSub = this.handleStateUpdate()

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

  getCountryName(): string | undefined {
    const currentCountry = this.getRightAnswerCountry()

    if (currentCountry !== undefined) {
      return currentCountry.name
    }
  }

  getAnsweredNumber() {
    let answered = 0

    this.pages.forEach(page => {
      const isAnswered = page.selectedAnswerIndex !== undefined

      if (isAnswered) {
        answered += 1
      }
    })

    return answered
  }

  getTotalPages() {
    return this.pages.length
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
      const { pages: newPages, currentPageIndex: newCurrentPageIndex } = state

      const newCurrentPage: CountryPage | undefined = newPages[newCurrentPageIndex]

      this.pages = newPages
      this.currentPage = newCurrentPage
    })
  }
}
