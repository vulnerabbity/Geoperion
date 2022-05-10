import { Component } from "@angular/core"
import { GameHeaderEvents } from "./game-header.events"

@Component({
  selector: "common-game-header",
  templateUrl: "./game-header.component.html",
  styleUrls: ["./game-header.component.scss"],
})
export class CommonGameHeaderComponent {
  constructor(private events: GameHeaderEvents) {}

  onRestart() {
    this.events.restart$.next()
  }

  onExit() {
    this.events.exit$.next()
  }
}
