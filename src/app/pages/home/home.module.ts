import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { HomePage } from "./home.page"

@NgModule({
  imports: [AppCommonModule],
  declarations: [HomePage],
})
export class HomePageModule {}
