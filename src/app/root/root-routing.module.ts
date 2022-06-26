import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Route } from "@angular/router"
import { SettingsPage } from "../pages/settings/settings.page"
import { StatisticsPage } from "../pages/statistics/statistics.page"
import { AppPaths } from "./routing.interface"

const redirectionPath: Route = {
  path: "",
  redirectTo: "games",
  pathMatch: "full",
}

const settingsRoute: Route = {
  path: AppPaths.settings,
  loadChildren: () =>
    import("../pages/settings/settings-page.module").then(m => m.SettingsPageModule),
  component: SettingsPage,
}

const gamesRoute: Route = {
  path: AppPaths.games,
  loadChildren: () => import("../pages/games/games.module").then(m => m.GamesPageModule),
}

const statisticsRoute: Route = {
  path: AppPaths.statistics,
  loadChildren: () =>
    import("../pages/statistics/statistics.module").then(m => m.StatisticsPageModule),
  component: StatisticsPage,
}

const routes: Route[] = [redirectionPath, settingsRoute, gamesRoute, statisticsRoute]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
