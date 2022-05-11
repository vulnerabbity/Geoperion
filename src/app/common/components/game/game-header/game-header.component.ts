import { Component, OnDestroy } from "@angular/core"
import { CommonGameComponentsEvents } from "../game-events"
import { CommonGameComponentsState } from "../game-state"

@Component({
  selector: "common-game-header",
  templateUrl: "./game-header.component.html",
  styleUrls: ["./game-header.component.scss"],
})
export class CommonGameHeaderComponent implements OnDestroy {
  progress = 0

  private progressSub = this.subscribeToProgress()

  constructor(
    private events: CommonGameComponentsEvents,
    private state: CommonGameComponentsState,
  ) {}

  onRestart() {
    this.events.restarted$.next()
  }

  onExit() {
    this.events.exited$.next()
  }

  ngOnDestroy(): void {
    this.progressSub.unsubscribe()
  }

  private subscribeToProgress() {
    return this.state.pagesState$.subscribe(({ progress: newProgress }) => {
      this.progress = newProgress
    })
  }
}
