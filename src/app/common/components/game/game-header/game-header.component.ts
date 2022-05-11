import { Component, OnDestroy } from "@angular/core"
import { GameHeaderEvents } from "./game-header.events"

@Component({
  selector: "common-game-header",
  templateUrl: "./game-header.component.html",
  styleUrls: ["./game-header.component.scss"],
})
export class CommonGameHeaderComponent implements OnDestroy {
  progress = 0

  private progressSub = this.subscribeToProgress()

  constructor(private events: GameHeaderEvents) {}

  onRestart() {
    this.events.restart$.next()
  }

  onExit() {
    this.events.exit$.next()
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
