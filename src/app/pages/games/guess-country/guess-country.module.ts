import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCountryGamePage } from "./guess-country.page"
import { CountriesGamesModule } from "src/app/features/games/countries/countries-games.module"

@NgModule({
  imports: [AppCommonModule, CountriesGamesModule],
  declarations: [GuessCountryGamePage],
  providers: [],
})
export class GuessCountryGameModule {}
