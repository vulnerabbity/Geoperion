import { NgModule, Provider } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouteReuseStrategy } from "@angular/router"
import { IonicModule, IonicRouteStrategy } from "@ionic/angular"
import { RootComponent } from "./root.component"
import { AppRoutingModule } from "./root-routing.module"
import { AppCommonModule } from "../common/common.module"
import { IonicStorageModule } from "@ionic/storage-angular"
import { Storage } from "@ionic/storage-angular"

const IonicRouteStrategyProvider: Provider = {
  provide: RouteReuseStrategy,
  useClass: IonicRouteStrategy,
}

@NgModule({
  declarations: [RootComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppCommonModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [IonicRouteStrategyProvider],
  bootstrap: [RootComponent],
})
export class RootModule {
  constructor(private storage: Storage) {
    // create storage required by ionic storage library
    this.storage.create()
  }
}
