import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { CommonGameAnswersComponent } from "./game-answers/game-answers.component"
import { CommonGameFlagComponent } from "./game-flag/game-flag.component"
import { CommonGameHeaderComponent } from "./game-header/game-header.component"
import { CommonGameHeaderProgressBar } from "./game-header/progress-bar/progress-bar.component"
import { GamePreviewWithFlagComponent } from "./game-preview/game-preview-with-flag.component"
import { CommonGamePaginatorComponent } from "./paginator/paginator.component"

const components: NgModule["declarations"] = [
  GamePreviewWithFlagComponent,
  CommonGameHeaderComponent,
  CommonGameHeaderProgressBar,
  CommonGameAnswersComponent,
  CommonGameFlagComponent,
  CommonGamePaginatorComponent,
]

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [...components],
  exports: [...components],
})
export class CommonGameComponentsModule {}
