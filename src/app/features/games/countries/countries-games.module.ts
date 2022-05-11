import { NgModule } from "@angular/core"
import { CountriesGamesEventsHandler } from "./countries-games.events-handler"
import { CountriesGamesService } from "./countries-games.service"
import { CountriesGamesState } from "./countries-games.state"

@NgModule({
  providers: [CountriesGamesService],
})
export class CountriesGamesModule {
  constructor(state: CountriesGamesState, handler: CountriesGamesEventsHandler) {}
}
