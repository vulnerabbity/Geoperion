import { Injectable } from "@angular/core"
import { CommonGameComponentsEvents } from "src/app/common/components/game/game-events"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { CountriesGamesService } from "src/app/features/games/countries/countries-games.service"
import {
  CountriesGamesState,
  CountriesGamesStateOject,
  makeCountriesGamesState,
} from "src/app/features/games/countries/countries-games.state"
import { GamesRouterService } from "src/app/pages/games/games-router.service"

@Injectable({
  providedIn: "root",
})
export class CountriesGamesEventsHandler {
  private stateSnapshot = makeCountriesGamesState()

  constructor(
    private state: CountriesGamesState,
    private componentsEvents: CommonGameComponentsEvents,
    private countriesGamesService: CountriesGamesService,
    private gamesRouter: GamesRouterService,
  ) {
    this.startHandling()
  }

  startHandling() {
    this.handleAnswer()
    this.handleHeaderActions()

    this.handleNextPage()
    this.handlePrevPage()

    this.handleStateChange()
  }

  private handleHeaderActions() {
    this.componentsEvents.restarted$.subscribe(async () => {
      const pages = await this.countriesGamesService.getPages()
      const newState = makeCountriesGamesState()
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
      const needHandle = this.hasNextPage()
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
      const needHandle = this.hasPreviousPage()

      if (needHandle) {
        const newState = this.copyState()
        newState.currentPageIndex -= 1

        this.state.state$.next(newState)
        this.componentsEvents.currentPageChanged$.next({ pageIndex: newState.currentPageIndex })
      }
    })
  }

  private handleStateChange() {
    return this.state.state$.subscribe(newState => this.updateState(newState))
  }

  private copyState() {
    return makeDeepCopy(this.stateSnapshot)
  }

  private updateState(newState: CountriesGamesStateOject) {
    this.stateSnapshot = newState

    const currentPageIndex = newState.currentPageIndex
    const totalPages = newState.pages.length
    this.componentsEvents.currentPageChanged$.next({ pageIndex: currentPageIndex })
    this.componentsEvents.totalPagesChanged$.next({ totalPages })
  }

  private hasNextPage() {
    const lastPageIndex = this.stateSnapshot.pages.length - 1
    const currentPageIndex = this.stateSnapshot.currentPageIndex

    return currentPageIndex < lastPageIndex
  }

  private hasPreviousPage() {
    return this.stateSnapshot.currentPageIndex > 0
  }
}
