import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Route } from "@angular/router"
import { GamesPage } from "../pages/games/games.page"
import { HomePage } from "../pages/home/home.page"
import { AppPaths } from "./routing.interface"

const redirectionPath: Route = {
  path: "",
  redirectTo: "home",
  pathMatch: "full",
}

const homePath: Route = {
  path: AppPaths.home,
  loadChildren: () => import("../pages/home/home.module").then(m => m.HomePageModule),
  component: HomePage,
}

const gamesPath: Route = {
  path: AppPaths.games,
  loadChildren: () => import("../pages/games/games.module").then(m => m.GamesPageModule),
  component: GamesPage,
}

const routes: Route[] = [redirectionPath, homePath, gamesPath]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
