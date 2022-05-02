import { Injectable } from "@angular/core"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { GuessCountryService } from "src/app/features/games/guess-country.service"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { GuessCountrySelectablePage } from "./guess-country.interface"
import { GuessCountryState } from "./guess-country.state"

@Injectable({
  providedIn: "root",
})
export class GuessCountryEventsHandler {
  private pages: GuessCountrySelectablePage[] = []
  private currentPageIndex = 0

  constructor(
    private state: GuessCountryState,
    private eventsBus: GuessCountryGameEventsBus,
    private guessCountryService: GuessCountryService,
  ) {
    this.handleNewGame()
    this.handleAnswer()

    this.subscribeToPages()
    this.subscribeToCurrentPage()
  }

  handleNewGame() {
    return this.eventsBus.startNewGame$.subscribe(async () => {
      const pages = await this.guessCountryService.getPages()

      this.state.pages$.next(pages)
      this.state.currentPageIndex$.next(0)
    })
  }

  handleAnswer() {
    return this.eventsBus.selectAnswer$.subscribe(answerIndex => {
      const pages = makeDeepCopy(this.pages)

      const currentPage = pages[this.currentPageIndex]
      currentPage.selectedAnswerIndex = answerIndex
      console.log(currentPage)

      this.state.pages$.next(pages)
    })
  }

  subscribeToPages() {
    return this.state.pages$.subscribe(pages => {
      this.pages = pages
    })
  }

  subscribeToCurrentPage() {
    return this.state.currentPageIndex$.subscribe(currentIndex => {
      this.currentPageIndex = currentIndex
    })
  }
}
