import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCountryEventsHandler } from "./guess-country.handler"
import { GuessCountryGamePage } from "./guess-country.page"
import { GuessCountryState } from "./guess-country.state"
import { GuessCountryPaginatorComponent } from "../../../common/components/game/paginator/paginator.component"

@NgModule({
  imports: [AppCommonModule],
  declarations: [GuessCountryGamePage, GuessCountryPaginatorComponent],
  providers: [],
})
export class GuessCountryGameModule {
  // start on module initialization
  constructor(countryState: GuessCountryState, eventsHandler: GuessCountryEventsHandler) {}
}
