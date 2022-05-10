import { Component, OnDestroy } from "@angular/core"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { GuessCountryState } from "../guess-country.state"

@Component({
  selector: "guess-country__progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
})
export class GuessCountryProgressBarComponent implements OnDestroy {
  private pages: CountryPage[] = []

  private currentPageIndex = 0

  private stateSub = this.subscribeToState()

  constructor(private state: GuessCountryState) {}

  getProgress() {
    const lastIndex = this.pages.length - 1
    return this.currentPageIndex / lastIndex
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.pages = state.pages
      this.currentPageIndex = state.currentPageIndex
    })
  }
}
