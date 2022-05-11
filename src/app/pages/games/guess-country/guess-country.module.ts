import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCountryGamePage } from "./guess-country.page"
import { GuessCountryPaginatorComponent } from "../../../common/components/game/paginator/paginator.component"
import { CountriesGamesModule } from "src/app/features/games/countries/countries-games.module"

@NgModule({
  imports: [AppCommonModule, CountriesGamesModule],
  declarations: [GuessCountryGamePage, GuessCountryPaginatorComponent],
  providers: [],
})
export class GuessCountryGameModule {}
