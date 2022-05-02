import { Component, OnDestroy } from "@angular/core"
import { GuessCountrySelectablePage } from "../guess-country.interface"
import { GuessCountryState } from "../guess-country.state"

@Component({
  selector: "guess-country__paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class GuessCountryPaginatorComponent implements OnDestroy {
  private pages: GuessCountrySelectablePage[] = []
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
