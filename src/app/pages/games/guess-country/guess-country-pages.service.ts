import { Injectable, OnDestroy } from "@angular/core"
import { GuessCountryPage } from "src/app/features/games/guess-country/guess-country.interface"
import { GuessCountryState } from "./guess-country.state"

@Injectable({
  providedIn: "root",
})
export class GuessCountryPagesService implements OnDestroy {
  private pages: GuessCountryPage[] = []
  private currentPageIndex = 0

  private stateSub = this.subscribeToState()

  constructor(private state: GuessCountryState) {}

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  hasNoPreviousPage(): boolean {
    return this.currentPageIndex <= 0
  }

  hasNoNextPage(): boolean {
    const lastIndex = this.pages.length - 1
    return this.currentPageIndex >= lastIndex
  }

  private subscribeToState() {
    return this.state.state$.subscribe(state => {
      this.pages = state.pages
      this.currentPageIndex = state.currentPageIndex
    })
  }
}
