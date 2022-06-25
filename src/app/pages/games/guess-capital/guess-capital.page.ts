import { Component, OnDestroy, OnInit } from "@angular/core"
import { AnswersComponentPage } from "src/app/common/components/game/game-answers/game-answers.component"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { Country } from "src/app/data/countries.data"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesState } from "src/app/features/games/countries/countries-games.state"
import { GameStatisticsGenerator } from "src/app/features/statistics/statistics-generator"
import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"

@Component({
  templateUrl: "./guess-capital.page.html",
  styleUrls: ["./guess-capital.page.scss", "../games.shared-styles.scss"],
})
export class GuessCapitalGamePage implements OnDestroy, OnInit {
  pages: CountryPage[] = []
  private currentPageIndex = 0
  private currentPage: CountryPage | undefined = undefined
  private rightCountry: Country | undefined = undefined

  private stateSub = this.handleStateChange()

  private translation = LanguageServiceInstance.translation

  constructor(private countriesState: CountriesGamesState) {}

  ngOnInit(): void {
    this.countriesState.startNewState()
  }

  hasCurrentPage() {
    return !!this.currentPage
  }

  getFlag() {
    const flag = this.rightCountry?.flag ?? ""

    return getFlagFullPath(flag)
  }

  getTitle(): string {
    const currentCountryCode = this.rightCountry?.code ?? "US"

    const title = this.translation.gamePage.getGuessCapitalTitle({
      countryCode: currentCountryCode,
    })
    return title
  }

  getTotalPages() {
    return this.pages.length
  }

  getAnsweredQuestionsNumber() {
    let answered = 0
    for (let page of this.pages) {
      const isAnswered = page.selectedAnswerIndex !== undefined
      if (isAnswered) {
        answered += 1
      }
    }

    return answered
  }

  // Allows to use concrete field to display answers
  getAnswersPage(): AnswersComponentPage | undefined {
    const currentPage = this.currentPage
    if (currentPage === undefined) {
      return undefined
    }

    // select capital as displayed answer
    const answersOptions = currentPage.options.map(option => {
      const translatedCapital = this.translateCapital(option.code)
      return { optionName: translatedCapital }
    })

    return { ...currentPage, options: answersOptions }
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  private translateCapital(countryCode: CountryCode) {
    return this.translation.countries[countryCode].capital
  }

  private handleStateChange() {
    return this.countriesState.state$.subscribe(newState => {
      this.pages = newState.pages
      this.currentPageIndex = newState.currentPageIndex

      this.updateCurrentPage()
      this.updateRightCountry()
    })
  }

  private updateRightCountry() {
    const currentPage = this.currentPage
    if (currentPage === undefined) {
      return
    }

    const rightCountry = currentPage.options[currentPage.rightAnswerIndex]
    this.rightCountry = rightCountry
  }

  private updateCurrentPage() {
    this.currentPage = this.pages[this.currentPageIndex]
  }
}
