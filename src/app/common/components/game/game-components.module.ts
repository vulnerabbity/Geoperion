import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { CommonGameAnswersComponent } from "./answers/answers.component"
import { CommonGameHeaderComponent } from "./game-header/game-header.component"
import { CommonGameHeaderProgressBar } from "./game-header/progress-bar/progress-bar.component"
import { GamePreviewWithFlagComponent } from "./game-preview/game-preview-with-flag.component"

const components: NgModule["declarations"] = [
  GamePreviewWithFlagComponent,
  CommonGameHeaderComponent,
  CommonGameHeaderProgressBar,
  CommonGameAnswersComponent,
]

@NgModule({
  imports: [CommonModule, IonicModule],
  providers: [],
  declarations: [...components],
  exports: [...components],
})
export class CommonGameComponentsModule {}
