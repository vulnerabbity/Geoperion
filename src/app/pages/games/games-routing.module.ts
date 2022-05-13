import { NgModule } from "@angular/core"
import { Route, RouterModule } from "@angular/router"
import { GamesPage } from "./games.page"
import { GuessCapitalGamePage } from "./guess-capital/guess-capital.page"
import { GuessCountryGamePage } from "./guess-country/guess-country.page"
import { GuessPopulationGamePage } from "./guess-population/guess-population.page"

export const GamesPaths = {
  GuessCountry: "guess-country",
  GuessCapital: "guess-capital",
  GuessPopulation: "guess-population",
  Games: "games",
} as const

const gamesRoute: Route = {
  path: "",
  component: GamesPage,
} as const

const guessCountryRoute: Route = {
  path: `${GamesPaths.GuessCountry}`,
  loadChildren: () =>
    import("./guess-country/guess-country.module").then(m => m.GuessCountryGameModule),
  component: GuessCountryGamePage,
} as const

const guessCapitalRoute: Route = {
  path: `${GamesPaths.GuessCapital}`,
  loadChildren: () =>
    import("./guess-capital/guess-capital.module").then(m => m.GuessCapitalGameModule),
  component: GuessCapitalGamePage,
} as const

const guessPopulationRoute: Route = {
  path: `${GamesPaths.GuessPopulation}`,
  loadChildren: () =>
    import("./guess-population/guess-population.module").then(m => m.GuessPopulationGameModule),
  component: GuessPopulationGamePage,
}

const routes: Route[] = [guessCountryRoute, guessCapitalRoute, gamesRoute, guessPopulationRoute]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
