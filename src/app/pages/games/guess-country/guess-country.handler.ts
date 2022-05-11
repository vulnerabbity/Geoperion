import { Injectable } from "@angular/core"
import { CommonGameComponentsEvents } from "src/app/common/components/game/game-events"
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
    private componentsEvents: CommonGameComponentsEvents,
    private countriesGamesService: CountriesGamesService,
    private pagesService: GuessCountryPagesService,
    private gamesRouter: GamesRouterService,
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
    this.componentsEvents.restarted$.subscribe(async () => {
      const pages = await this.countriesGamesService.getPages()
      const newState = makeGuessCountryGetDefaultState()
      newState.pages = pages

      this.state.state$.next(newState)
    })

    this.componentsEvents.exited$.subscribe(() => {
      this.gamesRouter.redirectToGames()
    })
  }

  private handleAnswer() {
    return this.componentsEvents.answerSelected$.subscribe(({ answerIndex }) => {
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

        this.componentsEvents.progressChanged$.next({ fractionsOfOne: this.getProgress() })
        this.state.state$.next(this.stateSnapshot)
      }
    })
  }

  private handlePrevPage() {
    this.eventsBus.toPreviousPage$.subscribe(() => {
      const needHandle = this.pagesService.hasNoPreviousPage() === false
      if (needHandle) {
        this.stateSnapshot.currentPageIndex -= 1

        this.componentsEvents.progressChanged$.next({ fractionsOfOne: this.getProgress() })
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
