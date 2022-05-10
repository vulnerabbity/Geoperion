import { Injectable } from "@angular/core"
import { CommonAnswersComponentEvents } from "src/app/common/components/unique/answers/answers.events"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { CountriesGamesService } from "src/app/features/games/countries/countries-games.service"
import { GamesRouterService } from "../games-router.service"
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
    private countriesGamesService: CountriesGamesService,
    private pagesService: GuessCountryPagesService,
    private gamesRouter: GamesRouterService,
    private answersEvents: CommonAnswersComponentEvents,
  ) {
    this.startHandling()
  }

  startHandling() {
    this.handleNewGame()
    this.handleAnswer()

    this.handleExit()
    this.handleNextPage()
    this.handlePrevPage()

    this.subscribeToState()
  }

  handleNewGame() {
    return this.eventsBus.startNewGame$.subscribe(async () => {
      const pages = await this.countriesGamesService.getPages()
      const newState = makeGuessCountryGetDefaultState()
      newState.pages = pages

      this.state.state$.next(newState)
    })
  }

  handleAnswer() {
    return this.answersEvents.answersSelected$.subscribe(({ answerIndex }) => {
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

  handleExit() {
    this.eventsBus.exit$.subscribe(() => {
      this.gamesRouter.redirectToGames()
    })
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.stateSnapshot = state
    })
  }
}
