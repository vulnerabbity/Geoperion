import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { CountriesGamesModule } from "src/app/features/games/countries/countries-games.module"
import { GuessPopulationGamePage } from "./guess-population.page"

@NgModule({
  imports: [AppCommonModule, CountriesGamesModule],
  declarations: [GuessPopulationGamePage],
})
export class GuessPopulationGameModule {}
