import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GamesRoutingModule } from "./games-routing.module"
import { GamesPage } from "./games.page"

@NgModule({
  imports: [AppCommonModule, GamesRoutingModule],
  declarations: [GamesPage],
  bootstrap: [GamesPage],
})
export class GamesPageModule {}
