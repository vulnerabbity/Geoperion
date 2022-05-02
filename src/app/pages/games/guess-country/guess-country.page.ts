import { Component, OnDestroy, OnInit } from "@angular/core"
import { GuessCountryService } from "src/app/features/games/guess-country.service"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { GuessCountrySelectablePage } from "./guess-country.interface"
import { GuessCountryState } from "./guess-country.state"

@Component({
  templateUrl: "./guess-country.page.html",
  styleUrls: ["./guess-country.page.scss"],
})
export class GuessCountryGamePage implements OnInit, OnDestroy {
  pages: GuessCountrySelectablePage[] = []
  private currentPageIndex = 0

  private pagesSubscription = this.subscribeToPage()
  private currentPageIndexSubscription = this.subscribeToCurrentPageIndex()

  constructor(private state: GuessCountryState, private eventsBuss: GuessCountryGameEventsBus) {}

  async ngOnInit() {
    await this.startNewGame()
  }

  ngOnDestroy(): void {
    this.pagesSubscription.unsubscribe()
    this.currentPageIndexSubscription.unsubscribe()
  }

  getCurrentPageFlag(): string {
    const rightCountry = this.getCurrentRightCountry()

    return getFlagFullPath(rightCountry.flag)
  }

  getCurrentRightCountry() {
    const currentPage = this.getCurrentPage()
    const rightAnswerIndex = currentPage.rightAnswerIndex
    return currentPage.options[rightAnswerIndex]
  }

  getCurrentPage() {
    const currentPage = this.pages[this.currentPageIndex]

    return currentPage
  }

  private async startNewGame() {
    this.eventsBuss.startNewGame$.next()
  }

  private subscribeToPage() {
    return this.state.pages$.subscribe(pages => {
      this.pages = pages
    })
  }

  private subscribeToCurrentPageIndex() {
    return this.state.currentPageIndex$.subscribe(pageIndex => {
      this.currentPageIndex = pageIndex
    })
  }
}
