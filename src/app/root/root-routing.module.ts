import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Route } from "@angular/router"
import { SettingsPage } from "../pages/settings/settings.page"
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

const routes: Route[] = [redirectionPath, settingsRoute, gamesRoute]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
