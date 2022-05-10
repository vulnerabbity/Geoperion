import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { GuessCountryEventsHandler } from "./guess-country.handler"
import { GuessCountryGamePage } from "./guess-country.page"
import { GuessCountryState } from "./guess-country.state"
import { GuessCountryHeaderComponent } from "./header/header.component"
import { GuessCountryPaginatorComponent } from "./paginator/paginator.component"
import { GuessCountryProgressBarComponent } from "./progress-bar/progress-bar.component"

@NgModule({
  imports: [AppCommonModule],
  declarations: [
    GuessCountryGamePage,
    GuessCountryPaginatorComponent,
    GuessCountryProgressBarComponent,
    GuessCountryHeaderComponent,
  ],
  providers: [],
})
export class GuessCountryGameModule {
  // start on module initialization
  constructor(
    private countryState: GuessCountryState,
    private eventsHandler: GuessCountryEventsHandler,
    private eventsBus: GuessCountryGameEventsBus,
  ) {}
}
