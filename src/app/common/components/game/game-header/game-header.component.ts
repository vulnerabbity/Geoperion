import { Component, OnDestroy } from "@angular/core"
import { CommonGameComponentsEvents } from "../game-events"

@Component({
  selector: "common-game-header",
  templateUrl: "./game-header.component.html",
  styleUrls: ["./game-header.component.scss"],
})
export class CommonGameHeaderComponent implements OnDestroy {
  progress = 0

  private progressSub = this.subscribeToProgress()

  constructor(private events: CommonGameComponentsEvents) {}

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
    return this.events.progressChanged$.subscribe(({ fractionsOfOne: newProgress }) => {
      this.progress = newProgress
    })
  }
}
