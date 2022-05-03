import { Component } from "@angular/core"
import { GuessCountryGameEventsBus } from "../guess-country.events-bus"

@Component({
  selector: "guess-country__header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class GuessCountryHeaderComponent {
  constructor(private eventsBus: GuessCountryGameEventsBus) {}

  onRestart() {
    this.eventsBus.startNewGame$.next()
  }

  onExit() {
    this.eventsBus.exit$.next()
  }
}
