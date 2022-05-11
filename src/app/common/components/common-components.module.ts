import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { IonicModule } from "@ionic/angular"
import { CommonGameComponentsModule } from "./game/game-components.module"
import { CommonUniqueComponents } from "./unique/unique.declaration"

@NgModule({
  imports: [IonicModule, RouterModule, CommonModule, CommonGameComponentsModule],
  exports: [CommonGameComponentsModule],
  declarations: [...CommonUniqueComponents],
})
export class CommonComponentsModule {}
