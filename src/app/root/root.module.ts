import { NgModule, Provider } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouteReuseStrategy } from "@angular/router"
import { IonicModule, IonicRouteStrategy } from "@ionic/angular"
import { RootComponent } from "./root.component"
import { AppRoutingModule } from "./root-routing.module"
import { AppCommonModule } from "../common/common.module"

const IonicRouteStrategyProvider: Provider = {
  provide: RouteReuseStrategy,
  useClass: IonicRouteStrategy,
}

@NgModule({
  declarations: [RootComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AppCommonModule],
  providers: [IonicRouteStrategyProvider],
  bootstrap: [RootComponent],
})
export class RootModule {}
