import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { CountriesGamesModule } from "src/app/features/games/countries/countries-games.module"
import { GuessCapitalGamePage } from "./guess-capital.page"

@NgModule({
  imports: [AppCommonModule, CountriesGamesModule],
  declarations: [GuessCapitalGamePage],
})
export class GuessCapitalGameModule {}
