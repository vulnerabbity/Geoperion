import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GamesPage } from "./games.page"

@NgModule({
  imports: [AppCommonModule],
  declarations: [GamesPage]
})
export class GamesPageModule {}
