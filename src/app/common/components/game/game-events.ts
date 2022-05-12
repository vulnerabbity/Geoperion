import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { CommonGameComponentsState } from "./game-state"

@Injectable({
  providedIn: "root",
})
export class CommonGameComponentsEvents {
  constructor(private state: CommonGameComponentsState) {
    this.updateStateOnChanges()
  }

  exited$ = new Subject<void>()
  restarted$ = new Subject<void>()

  answerSelected$ = new Subject<{ answerIndex: number }>()
  nextPageSelected$ = new Subject<void>()
  previousPageSelected$ = new Subject<void>()

  currentPageChanged$ = new Subject<{ pageIndex: number }>()
  totalPagesChanged$ = new Subject<{ totalPages: number }>()

  private updateStateOnChanges() {
    this.updateCurrentPageStateOnChange()
    this.updateTotalPagesOnChanges()
  }

  private updateCurrentPageStateOnChange() {
    return this.currentPageChanged$.subscribe(({ pageIndex: newPageIndex }) => {
      this.state.currentPageIndex$.next(newPageIndex)
    })
  }
  private updateTotalPagesOnChanges() {
    return this.totalPagesChanged$.subscribe(({ totalPages: newTotalPages }) => {
      this.state.totalPages$.next(newTotalPages)
    })
  }
}
