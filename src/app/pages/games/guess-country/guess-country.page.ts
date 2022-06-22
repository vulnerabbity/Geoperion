import { Component, OnDestroy, OnInit } from "@angular/core"
import { AnswersComponentPage } from "src/app/common/components/game/game-answers/game-answers.component"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { Country } from "src/app/data/countries.data"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesState } from "src/app/features/games/countries/countries-games.state"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"

@Component({
  templateUrl: "./guess-country.page.html",
  styleUrls: ["./guess-country.page.scss", "../games.shared-styles.scss"],
})
export class GuessCountryGamePage implements OnInit, OnDestroy {
  private pages: CountryPage[] = []
  private currentPageIndex = 0

  private stateSub = this.subscribeToState()

  private translation = LanguageServiceInstance.translation.countries

  constructor(private state: CountriesGamesState) {}

  async ngOnInit() {
    await this.startNewGame()
  }

  getTotalPages() {
    return this.pages.length
  }

  getAnsweredNumber() {
    let answered = 0
    this.pages.forEach(page => {
      const isSelected = typeof page.selectedAnswerIndex === "number"
      if (isSelected) {
        answered += 1
      }
    })

    return answered
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

    const translatedCountryName = this.translation[code].name ?? ""

    return translatedCountryName
  }

  private getCurrentPage() {
    const currentPage = this.pages[this.currentPageIndex]
    return currentPage
  }

  private async startNewGame() {
    this.state.startNewState()
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.pages = state.pages
      this.currentPageIndex = state.currentPageIndex
    })
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }
}
