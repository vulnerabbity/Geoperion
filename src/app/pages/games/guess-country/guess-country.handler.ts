import { Injectable } from "@angular/core"
import { CommonGameComponentsEvents } from "src/app/common/components/game/game-events"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { CountriesGamesService } from "src/app/features/games/countries/countries-games.service"
import { GamesRouterService } from "../games-router.service"
import { GuessCountryPagesService } from "./guess-country-pages.service"
import { makeGuessCountryGetDefaultState, GuessCountryState } from "./guess-country.state"

@Injectable({
  providedIn: "root",
})
export class GuessCountryEventsHandler {
  private stateSnapshot = makeGuessCountryGetDefaultState()

  constructor(
    private state: GuessCountryState,
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

    this.handleStateChange()
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

  private handleNextPage() {
    this.componentsEvents.nextPageSelected$.subscribe(() => {
      const needHandle = this.pagesService.hasNoNextPage() === false
      if (needHandle) {
        const newState = this.copyState()
        newState.currentPageIndex += 1

        this.state.state$.next(newState)
        this.componentsEvents.currentPageChanged$.next({ pageIndex: newState.currentPageIndex })
      }
    })
  }

  private handlePrevPage() {
    this.componentsEvents.previousPageSelected$.subscribe(() => {
      const needHandle = this.pagesService.hasNoPreviousPage() === false
      if (needHandle) {
        const newState = this.copyState()
        newState.currentPageIndex -= 1

        this.state.state$.next(newState)
        this.componentsEvents.currentPageChanged$.next({ pageIndex: newState.currentPageIndex })
      }
    })
  }

  private handleStateInit() {
    this.state.init$.subscribe(async () => {
      const pages = await this.countriesGamesService.getPages()
      const newState = makeGuessCountryGetDefaultState()
      newState.pages = pages
      this.state.state$.next(newState)

      const totalPages = pages.length
      this.componentsEvents.totalPagesChanged$.next({ totalPages })
    })
  }

  private handleStateChange() {
    return this.state.state$.subscribe(newState => {
      this.stateSnapshot = newState

      const currentPageIndex = newState.currentPageIndex
      const totalPages = newState.pages.length
      this.componentsEvents.currentPageChanged$.next({ pageIndex: currentPageIndex })
      this.componentsEvents.totalPagesChanged$.next({ totalPages })
    })
  }

  private copyState() {
    return makeDeepCopy(this.stateSnapshot)
  }
}
