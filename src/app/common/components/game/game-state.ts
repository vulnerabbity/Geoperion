import { Injectable } from "@angular/core"
import { BehaviorSubject, combineLatest, from, ReplaySubject, Subject } from "rxjs"

interface ProgressInput {
  currentPageIndex: number
  totalPages: number
}

interface PagesState {
  currentPageIndex: number
  totalPages: number

  hasNextPage: boolean
  hasPreviousPage: boolean

  progress: number
}

@Injectable({
  providedIn: "root",
})
export class CommonGameComponentsState {
  // internal subject to prevent emitting outside this class
  // placed above public observables to use in place conversion to observables
  private pagesStateEmitter$ = new ReplaySubject<PagesState>()

  pagesState$ = from(this.pagesStateEmitter$)

  currentPageIndex$ = new BehaviorSubject<number>(0)
  totalPages$ = new BehaviorSubject<number>(0)

  private currentPageIndexSnapshot = 0
  private totalPagesSnapshot = 0

  constructor() {
    this.updatePagesStateOnChanges()
    this.updateStateSnapshotsOnChanges()
  }

  private updatePagesStateOnChanges() {
    const progressStreams = [this.totalPages$, this.currentPageIndex$]
    // executes when one of streams emit value
    combineLatest(progressStreams).subscribe(() => {
      this.pagesStateEmitter$.next(this.getPagesState())
    })
  }

  private getPagesState(): PagesState {
    const totalPages = this.totalPagesSnapshot
    const currentPageIndex = this.currentPageIndexSnapshot
    const lastPageIndex = totalPages - 1

    const hasNextPage = currentPageIndex < lastPageIndex
    const hasPreviousPage = currentPageIndex > 0
    const progress = this.getProgress({ currentPageIndex, totalPages })

    return { hasNextPage, hasPreviousPage, progress, totalPages, currentPageIndex }
  }

  private getProgress(input: ProgressInput) {
    const { currentPageIndex, totalPages } = input
    if (totalPages === 0) {
      return 0
    }
    const lastPageIndex = totalPages - 1

    return currentPageIndex / lastPageIndex
  }

  private updateStateSnapshotsOnChanges() {
    const subjects = [this.currentPageIndex$, this.totalPages$]
    // combineLatest executes when on of streams emits value
    combineLatest(subjects).subscribe(([newCurrentPageIndex, newTotalPages]) => {
      this.currentPageIndexSnapshot = newCurrentPageIndex
      this.totalPagesSnapshot = newTotalPages
    })
  }
}
