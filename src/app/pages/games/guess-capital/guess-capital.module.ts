import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCapitalGamePage } from "./guess-capital.page"

@NgModule({
  imports: [AppCommonModule],
  declarations: [GuessCapitalGamePage],
})
export class GuessCapitalGameModule {}
