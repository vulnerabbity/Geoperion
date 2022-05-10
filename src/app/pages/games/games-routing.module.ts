import { NgModule } from "@angular/core"
import { Route, RouterModule } from "@angular/router"
import { GamesPage } from "./games.page"
import { GuessCountryGamePage } from "./guess-country/guess-country.page"

export const GamesPaths = {
  GuessCountry: "guess-country",
  GuessCapital: "guess-capital",
  Games: "games",
} as const

const gamesRoute: Route = {
  path: "",
  component: GamesPage,
}

const guessCountryRoute: Route = {
  path: `${GamesPaths.GuessCountry}`,
  loadChildren: () =>
    import("./guess-country/guess-country.module").then(m => m.GuessCountryGameModule),
  component: GuessCountryGamePage,
}

const routes: Route[] = [guessCountryRoute, gamesRoute]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
