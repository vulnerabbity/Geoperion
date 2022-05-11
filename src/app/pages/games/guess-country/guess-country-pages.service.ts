import { Injectable, OnDestroy } from "@angular/core"
import { CountryPage } from "src/app/features/games/countries/countries-games.interface"
import { CountriesGamesState } from "src/app/features/games/countries/countries-games.state"

@Injectable({
  providedIn: "root",
})
export class GuessCountryPagesService implements OnDestroy {
  private pages: CountryPage[] = []
  private currentPageIndex = 0

  private stateSub = this.subscribeToState()

  constructor(private state: CountriesGamesState) {}

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
