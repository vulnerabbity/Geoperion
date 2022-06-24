import { Component, OnDestroy } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { CommonGameComponentsEvents } from "../game-events"
import { CommonGameComponentsState } from "../game-state"

@Component({
  selector: "common-game-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class CommonGamePaginatorComponent implements OnDestroy {
  isNextDisabled = true
  isPrevDisabled = false

  buttonsTranslation = LanguageServiceInstance.translation.ui.buttons

  private stateSub = this.handleStateChange()

  constructor(
    private events: CommonGameComponentsEvents,
    private state: CommonGameComponentsState,
  ) {}

  onPrevPage() {
    this.events.previousPageSelected$.next()
  }

  onNextPage() {
    this.events.nextPageSelected$.next()
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  private handleStateChange() {
    return this.state.pagesState$.subscribe(({ hasNextPage, hasPreviousPage }) => {
      this.isPrevDisabled = hasPreviousPage === false
      this.isNextDisabled = hasNextPage === false
    })
  }
}
