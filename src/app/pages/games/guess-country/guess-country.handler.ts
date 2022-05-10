import { Injectable } from "@angular/core"
import { GameHeaderEvents } from "src/app/common/components/categorizable/headers/game-header/game-header.events"
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
    private headerEvents: GameHeaderEvents,
    private answersEvents: CommonAnswersComponentEvents,
  ) {
    this.startHandling()
  }

  startHandling() {
    this.handleAnswer()
    this.handleHeaderActions()
    this.handleStateInit()

    this.handleNextPage()
    this.handlePrevPage()

    this.subscribeToState()
  }

  private handleHeaderActions() {
    this.headerEvents.restart$.subscribe(async () => {
      const pages = await this.countriesGamesService.getPages()
      const newState = makeGuessCountryGetDefaultState()
      newState.pages = pages

      this.state.state$.next(newState)
    })

    this.headerEvents.exit$.subscribe(() => {
      this.gamesRouter.redirectToGames()
    })
  }

  private handleAnswer() {
    return this.answersEvents.answersSelected$.subscribe(({ answerIndex }) => {
      const state = makeDeepCopy(this.stateSnapshot)
      const currentPageIndex = state.currentPageIndex

      const currentPage = state.pages[currentPageIndex]
      currentPage.selectedAnswerIndex = answerIndex

      this.state.state$.next(state)
    })
  }

  private handleStateInit() {
    this.state.init$.subscribe(async () => {
      const pages = await this.countriesGamesService.getPages()
      const newState = makeGuessCountryGetDefaultState()
      newState.pages = pages
      this.state.state$.next(newState)
    })
  }

  private handleNextPage() {
    this.eventsBus.toNextPage$.subscribe(() => {
      const needHandle = this.pagesService.hasNoNextPage() === false
      if (needHandle) {
        this.stateSnapshot.currentPageIndex += 1

        this.headerEvents.progressChanged$.next({ fractionsOfOne: this.getProgress() })
        this.state.state$.next(this.stateSnapshot)
      }
    })
  }

  private handlePrevPage() {
    this.eventsBus.toPreviousPage$.subscribe(() => {
      const needHandle = this.pagesService.hasNoPreviousPage() === false
      if (needHandle) {
        this.stateSnapshot.currentPageIndex -= 1

        this.headerEvents.progressChanged$.next({ fractionsOfOne: this.getProgress() })
        this.state.state$.next(this.stateSnapshot)
      }
    })
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.stateSnapshot = state
    })
  }

  private getProgress() {
    const lastIndex = this.stateSnapshot.pages.length - 1
    const currentIndex = this.stateSnapshot.currentPageIndex
    return currentIndex / lastIndex
  }
}
