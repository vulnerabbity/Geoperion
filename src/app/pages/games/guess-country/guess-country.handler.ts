import { Injectable } from "@angular/core"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { GuessCountryService } from "src/app/features/games/guess-country.service"
import { GuessCountryPagesService } from "./guess-country-pages.service"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { makeGuessCountryGetDefaultState, GuessCountryState } from "./guess-country.state"

@Injectable({
  providedIn: "root",
})
export class GuessCountryEventsHandler {
  private stateSnapshot = makeGuessCountryGetDefaultState()

  constructor(
    private state: GuessCountryState,
    private eventsBus: GuessCountryGameEventsBus,
    private guessCountryService: GuessCountryService,
    private pagesService: GuessCountryPagesService,
  ) {
    this.handleNewGame()
    this.handleAnswer()

    this.handleNextPage()
    this.handlePrevPage()

    this.subscribeToState()
  }

  handleNewGame() {
    return this.eventsBus.startNewGame$.subscribe(async () => {
      const pages = await this.guessCountryService.getPages()
      const newState = makeGuessCountryGetDefaultState()
      newState.pages = pages

      this.state.state$.next(newState)
    })
  }

  handleAnswer() {
    return this.eventsBus.selectAnswer$.subscribe(({ answerIndex }) => {
      const state = makeDeepCopy(this.stateSnapshot)

      const currentPage = state.pages[this.stateSnapshot.currentPageIndex]
      currentPage.selectedAnswerIndex = answerIndex

      this.state.state$.next(state)
    })
  }

  handleNextPage() {
    this.eventsBus.toNextPage$.subscribe(() => {
      const needHandle = this.pagesService.hasNoNextPage() === false
      if (needHandle) {
        this.stateSnapshot.currentPageIndex += 1

        this.state.state$.next(this.stateSnapshot)
      }
    })
  }

  handlePrevPage() {
    this.eventsBus.toPreviousPage$.subscribe(() => {
      const needHandle = this.pagesService.hasNoPreviousPage() === false
      if (needHandle) {
        this.stateSnapshot.currentPageIndex -= 1

        this.state.state$.next(this.stateSnapshot)
      }
    })
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.stateSnapshot = state
    })
  }
}
