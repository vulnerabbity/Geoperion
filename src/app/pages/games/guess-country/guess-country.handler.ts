import { Injectable } from "@angular/core"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { GuessCountryService } from "src/app/features/games/guess-country.service"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import {
  makeGuessCountryGetDefaultState,
  GuessCountryState,
  GuessCountryStateObject,
} from "./guess-country.state"

@Injectable({
  providedIn: "root",
})
export class GuessCountryEventsHandler {
  private stateSnapshot = makeGuessCountryGetDefaultState()

  constructor(
    private state: GuessCountryState,
    private eventsBus: GuessCountryGameEventsBus,
    private guessCountryService: GuessCountryService,
  ) {
    this.handleNewGame()
    this.handleAnswer()

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

  subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.stateSnapshot = state
    })
  }
}
