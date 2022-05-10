import { Component, OnDestroy, OnInit } from "@angular/core"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { GuessCountryState } from "./guess-country.state"

@Component({
  templateUrl: "./guess-country.page.html",
  styleUrls: ["./guess-country.page.scss"],
})
export class GuessCountryGamePage implements OnInit, OnDestroy {
  pages: CountryPage[] = []
  private currentPageIndex = 0

  private stateSub = this.subscribeToState()

  constructor(private state: GuessCountryState, private eventsBuss: GuessCountryGameEventsBus) {}

  async ngOnInit() {
    await this.startNewGame()
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
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

  getCurrentPage() {
    const currentPage = this.pages[this.currentPageIndex]

    return currentPage
  }

  getCurrentRightCountry() {
    const currentPage = this.getCurrentPage()
    const rightAnswerIndex = currentPage.rightAnswerIndex
    return currentPage.options[rightAnswerIndex]
  }

  private async startNewGame() {
    this.eventsBuss.startNewGame$.next()
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.pages = state.pages
      this.currentPageIndex = state.currentPageIndex
    })
  }
}
