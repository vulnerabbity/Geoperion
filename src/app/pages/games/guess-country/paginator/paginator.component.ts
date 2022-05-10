import { Component } from "@angular/core"
import { GuessCountryPagesService } from "../guess-country-pages.service"
import { GuessCountryGameEventsBus } from "../guess-country.events-bus"

@Component({
  selector: "guess-country__paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class GuessCountryPaginatorComponent {
  constructor(
    public pagesService: GuessCountryPagesService,
    private eventBus: GuessCountryGameEventsBus,
  ) {}

  onPrevPage() {
    this.eventBus.toPreviousPage$.next()
  }

  onNextPage() {
    this.eventBus.toNextPage$.next()
  }
}
