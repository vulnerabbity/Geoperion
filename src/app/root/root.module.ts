import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouteReuseStrategy } from "@angular/router"

import { IonicModule, IonicRouteStrategy } from "@ionic/angular"

import { RootComponent } from "./root.component"
import { AppRoutingModule } from "./root-routing.module"

@NgModule({
  declarations: [RootComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [RootComponent]
})
export class RootModule {}
