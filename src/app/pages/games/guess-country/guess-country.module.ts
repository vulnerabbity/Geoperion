import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { GuessCountryEventsHandler } from "./guess-country.handler"
import { GuessCountryGamePage } from "./guess-country.page"
import { GuessCountryState } from "./guess-country.state"
import { GuessCountryPaginatorComponent } from "./paginator/paginator.component"

@NgModule({
  imports: [AppCommonModule],
  declarations: [GuessCountryGamePage, GuessCountryPaginatorComponent],
  providers: [],
})
export class GuessCountryGameModule {
  // start on module initialization
  constructor(
    countryState: GuessCountryState,
    eventsHandler: GuessCountryEventsHandler,
    eventsBus: GuessCountryGameEventsBus,
  ) {}
}
