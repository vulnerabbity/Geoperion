import { NgModule, Provider } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouteReuseStrategy } from "@angular/router"
import { IonicModule, IonicRouteStrategy } from "@ionic/angular"
import { RootComponent } from "./root.component"
import { AppRoutingModule } from "./root-routing.module"
import { AppCommonModule } from "../common/common.module"
import { IonicStorageModule } from "@ionic/storage-angular"
import { GameSettingsModule } from "../features/settings/settings.module"
import { RootThemeDefinerComponent } from "./theme/theme.component"

const IonicRouteStrategyProvider: Provider = {
  provide: RouteReuseStrategy,
  useClass: IonicRouteStrategy,
}

@NgModule({
  declarations: [RootComponent, RootThemeDefinerComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppCommonModule,
    IonicStorageModule.forRoot(),
    GameSettingsModule,
  ],
  providers: [IonicRouteStrategyProvider],
  bootstrap: [RootComponent],
})
export class RootModule {}
